module.exports = {
  user: {
    nickname: { type: String, require: true },
    password: { type: String, require: true }
  },
  chat: {
    content: { type: String, require: true },
    user: { type: String, require: true },
    create_time: { type: Number, default: new Date().getTime() }
  }
};
