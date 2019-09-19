import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding/GuestLanding";
import UserLanding from "./Components/UserLanding/UserLanding";
import Posts from "./Components/Posts/Posts";
// components

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={UserLanding} path="/topics" />
    <Route component={Posts} path="/posts/:topicId" />
    <Route
      render={() => {
        return <h1>404 Not Found.</h1>;
      }}
    />
  </Switch>
);
