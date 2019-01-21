import React, { Component } from "react";
import moment from 'moment'
import "./style.css";
const formatTime = time => moment(time).startOf('minute').fromNow()
.replace(/hours?/, '小时')
.replace('ago', '前').replace(/days?/, '天')
.replace(/minutes?/, '分钟')
.replace(/\ban?/, '1')
.replace(/months?/, '个月')
.replace(/\byears?/, '年')
.replace(/\s/g, '')
.replace('fewseconds', '分钟')
class Msg extends Component {
  render() {
    return (
      <div
        className={this.props.mark === "self" ? "msg-item self" : "msg-item"}
      >
        <span className="name">{this.props.info.user}</span>
        <span className="msg">{this.props.info.content}</span>
        <span className="time">
          {formatTime(this.props.info.create_time)}
        </span>
      </div>
    );
  }
}

export default Msg;
