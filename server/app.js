const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const user = require("./user");
const model = require("./db/model");
const Chat = model.getModel("chat");

const DB_URL = "mongodb://localhost:27017/chat-room";
mongoose.connect(
  DB_URL,
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log("连接数据库失败：", err);
    } else {
      console.log("------连接数据库成功！------");
    }
  }
);

io.on("connection", socket => {
  socket.on("sendMsg", data => {
    const { user, content } = data;
    const create_time = new Date().getTime();
    new Chat({ user, content, create_time }).save((err, doc) => {
      if (err) {
        return;
      }
      const { user, content, create_time } = doc;
      io.emit("recvMsg", { user, content, create_time });
    });
  });
});

app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", user);

server.listen(9000);
