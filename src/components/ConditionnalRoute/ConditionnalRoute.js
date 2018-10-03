import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

export default class ConditionnalRoute extends Component {
  render() {
    const { path, Element, to, opt, condition } = this.props;
    const auth = condition ? true : false;
    return (
      <Route
        path={path}
        render={props =>
          auth ? <Element {...props} {...opt} /> : <Redirect to={to} />
        }
      />
    );
  }
}
