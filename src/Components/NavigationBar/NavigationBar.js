import React, { Component } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FaHome } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

import "./styles.css";

const NavBar = styled.div`
  height: 70vh;
  width: 6rem;
  margin: 2rem;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  position: fixed;
  z-index: 20;
`;
const NavItemsArea = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #9174d8;
    color: white;
  }
`;

class NavigationBar extends Component {
  state = {
    active: 'home'
  };

  navigationHandler = item => {
    this.setState({active:item})
    console.log(this.state.active);
  };

  render() {
    return (
      <NavBar>
        <IconContext.Provider
          value={{
            size: "3rem",
            className: "icons",
          }}
        >
          <NavItemsArea key={1} onClick={()=>this.navigationHandler('home')}>
            <FaHome />
          </NavItemsArea>
          <NavItemsArea key={2} onClick={()=>this.navigationHandler('skills')}>
            <FaChartBar />
          </NavItemsArea>
          <NavItemsArea key={3} onClick={()=>this.navigationHandler('services')}>
            <FaServicestack />
          </NavItemsArea>
          <NavItemsArea key={4} onClick={()=>this.navigationHandler('works')}>
            <FaTasks />
          </NavItemsArea>
          <NavItemsArea key={5} onClick={()=>this.navigationHandler('team')}>
            <FaUsers />
          </NavItemsArea>
          <NavItemsArea key={6} onClick={()=>this.navigationHandler('contact')}>
            <FaPhone />
          </NavItemsArea>
        </IconContext.Provider>
      </NavBar>
    );
  }
}

export default NavigationBar;
