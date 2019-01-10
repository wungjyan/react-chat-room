const express = require("express");
const router = express.Router();
const utils = require("utility"); // md5加密
const model = require("./db/model");
const User = model.getModel("user");
const Chat = model.getModel("chat");
const _filter = { password: 0, __v: 0 }; //不返回此两项

// 注册
router.post("/register", (req, res) => {
  const { nickname, password } = req.body;
  User.findOne({ nickname }, (err, doc) => {
    if (doc) {
      return res.json({ code: 1, msg: "该用户已经存在" });
    } else {
      new User({ nickname, password: utils.md5(password) }).save((err, doc) => {
        if (err) {
          return res.json({ code: 1, msg: "后端出错" });
        } else {
          const { nickname, _id } = doc;
          // 设置cookie
          res.cookie("userid", _id);
          return res.json({ code: 0, data: { nickname, _id } });
        }
      });
    }
  });
});

// 登录
router.post("/login", (req, res) => {
  const { nickname, password } = req.body;
  User.findOne(
    { nickname, password: utils.md5(password) },
    _filter,
    (err, doc) => {
      if (err) {
        return res.json({ code: 1, msg: "后端出错" });
      } else {
        if (!doc) {
          return res.json({ code: 1, msg: "用户名或密码错误" });
        }
        res.cookie("userid", doc._id);
        return res.json({ code: 0, data: doc });
      }
    }
  );
});

// 当前用户信息
router.get("/info", (req, res) => {
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({ code: 1 });
  }
  User.findOne({ _id: userid }, _filter, (err, doc) => {
    if (err) {
      return res.json({ code: 1, msg: "后端出错了" });
    } else {
      if (doc) {
        return res.json({ code: 0, data: doc });
      }
    }
  });
});

// 获取消息列表
router.get("/getmsglist", (req, res) => {
  Chat.find({}, (err, doc) => {
    if (err) {
      return res.json({ code: 1, msg: "后端错误" });
    }
    return res.json({ code: 0, data: doc });
  });
});

module.exports = router;
