import React, { Component } from "react";
import { connect } from "react-redux";
// import {Redirect} from 'react-router-dom';
import { initData } from "../../store/actionCreator";

class Chat extends Component {
  componentDidMount() {
    this.props.handleInit();
  }
  render() {
    return (
      <div>
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    nickname:state.nickname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInit() {
      dispatch(initData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
