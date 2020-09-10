import React, { Component } from "react";


import AboutMe from "./Components/AboutMe/AboutMe";
import Details from "./Components/Details/Details";
import NavigationBar from "./Components/NavigationBar/NavigationBar";


class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AboutMe />
        <Details />
        <NavigationBar />
      </React.Fragment>
    );
  }
}

export default App;
