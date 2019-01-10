import React, { Component } from "react";
import "./style.css";
class Msg extends Component {
  formateTime(time) {
    let t = new Date(time);
    let d = t.getDate();
    let h = t.getHours() < 10 ? `0${t.getHours()}` : `${t.getHours()}`;
    let m = t.getMinutes() < 10 ? `0${t.getMinutes()}` : `${t.getMinutes()}`;
    return new Date().getDate() > d ? `昨天${h}:${m}` : `${h}:${m}`;
  }
  render() {
    return (
      <div
        className={this.props.mark === "self" ? "msg-item self" : "msg-item"}
      >
        <span className="name">{this.props.info.user}</span>
        <span className="msg">{this.props.info.content}</span>
        <span className="time">
          {this.formateTime(this.props.info.create_time)}
        </span>
      </div>
    );
  }
}

export default Msg;
