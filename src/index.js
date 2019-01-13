import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Register from "./views/register";
import Login from "./views/login";
import Chat from "./views/chat";
import "./main.css";

ReactDOM.render(
  <Provider store={store}>
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/chat" component={Chat} />
          <Redirect to="/chat" />
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById("root")
);
