import React, { Component } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
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
    active: 'skills'
  };

  navigationHandler = item => {
    if(item==='skills'){
      this.setState({active:'skills'});
    }else if(item==='services'){
      this.setState({active:'services'});
    }else if(item==='works'){
      this.setState({active:'works'});
    }else if(item==='team'){
      this.setState({active:'team'});
    }else if(item==='contact'){
      this.setState({active:'contact'});
    }
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
          <NavItemsArea >
            <FaChartBar onClick={()=>this.navigationHandler('skills')}/>
          </NavItemsArea>
          <NavItemsArea >
            <FaServicestack onClick={()=>this.navigationHandler('services')}/>
          </NavItemsArea>
          <NavItemsArea >
            <FaTasks onClick={()=>this.navigationHandler('works')}/>
          </NavItemsArea>
          <NavItemsArea >
            <FaUsers onClick={()=>this.navigationHandler('team')}/>
          </NavItemsArea>
          <NavItemsArea >
            <FaPhone onClick={()=>this.navigationHandler('contact')}/>
          </NavItemsArea>
        </IconContext.Provider>
      </NavBar>
    );
  }
}

export default NavigationBar;
