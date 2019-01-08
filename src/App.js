import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    num:state.num
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleChange(){
      dispatch({type:"add",n:6})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
