import React, { Component } from "react";
import styled from 'styled-components';

import AboutMe from "./Components/AboutMe/AboutMe";
import Details from "./Components/Details/Details";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const Container = styled.div`
  display:flex;
  align-items:center;
`;

class App extends Component {
  state = {};
  render() {
    return (
      <Container>
        <AboutMe />
        <Details />
        <NavigationBar />
      </Container>
    );
  }
}

export default App;
