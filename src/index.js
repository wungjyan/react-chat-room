import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Register from "./views/register";
import Login from "./views/login";
import Chat from "./views/chat";
import "./main.css";
import { Layout } from "antd";
import Btns from "./components/Btns";
const { Header, Footer, Content } = Layout;
console.log("%c你想看啥?", "color:red;font-size:20px");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Layout>
          <Header>
            <div className="header-content">
              <span className="title">瓶子的聊天室</span>
              <Btns />
            </div>
          </Header>
          <Content>
            <Switch>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/chat" component={Chat} />
              <Redirect to="/chat" />
            </Switch>
          </Content>
          <Footer>作者：瓶子</Footer>
        </Layout>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
