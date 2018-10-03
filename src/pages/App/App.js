import React, { Component } from "react";
import "./App.less";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}

export default App;
