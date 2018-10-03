import React, { Component } from "react";
import { Button } from "antd";
import { app } from "../../config/base";

export default class PrivatePage extends Component {
  // componentDidMount() {
  //   if (!this.props.user) {
  //     this.props.history.push(`/`);
  //   }
  // }

  logoutHandler = () => {
    app
      .auth()
      .signOut()
      // .then(() => {
      //   console.log("you are logged out");
      //   this.props.history.push(`/`);
      // })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        PrivatePage <Button icon={`logout`} onClick={this.logoutHandler} />
      </div>
    );
  }
}
