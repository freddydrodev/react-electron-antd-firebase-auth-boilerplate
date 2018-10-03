import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PrivatePage from "../PrivatePage/PrivatePage.js";
import PublicPage from "../PublicPage/PublicPage.js";
import LogPage from "../LogPage/LogPage.js";
import { app } from "../../config/base.js";
import { Icon } from "../../../node_modules/antd";

export default class App extends Component {
  state = { user: null, loading: true };

  componentDidMount() {
    app.auth().onAuthStateChanged(user => {
      this.setState({ loading: false, user });
    });
  }

  render() {
    const { loading, user } = this.state;
    return <BrowserRouter>
        {loading ? <div className={`vh-100 vw-100 flex center middle`}>
            <Icon type={`loading`} style={{ fontSize: 64, color: "#797df8" }} />
          </div> : <Switch>
            <Route path={`/app`} render={props => (user ? <PrivatePage user={user} {...props} /> : <Redirect to={`/`} />)} />
            <Route path={`/public`} render={props => <PublicPage {...props} />} />
            <Route path={`/`} render={props => (!user ? <LogPage user={user} {...props} /> : <Redirect to={`/app`} />)} />
          </Switch>}
      </BrowserRouter>;
  }
}
