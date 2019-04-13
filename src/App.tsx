import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomeScreen} />
      </BrowserRouter>
    );
  }
}

export default App;
