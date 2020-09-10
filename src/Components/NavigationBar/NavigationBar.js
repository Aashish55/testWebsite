import React, { Component } from "react";
import styled from "styled-components";

const NavBar = styled.div`
  height: 70vh;
  width: 8rem;
  margin: 2rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  position: fixed;
  z-index: 20;
`;

class NavigationBar extends Component {
  state = {};
  render() {
    return <NavBar></NavBar>;
  }
}

export default NavigationBar;
