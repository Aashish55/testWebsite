import React from "react";
import styled from "styled-components";
import { GiGamepad } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IconContext } from "react-icons";

const Card = styled.div`
  background-color: #f8f8f8;
  padding:1rem;
  width: 30%;
  height: 20rem;
  border-radius: 1rem;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
`;
const ServiceTitle = styled.h2`
    color: #242221;
    font-size:2.5rem;
    font-weight:600;
    margin-bottom:.5rem;
`;
const Description = styled.p`
    color: #242221;
    font-size:1.8rem;
    margin-bottom:.2rem;
    text-align:center;
`;

const ServiceCard = (props) => {
  return (
    <Card>
      <IconContext.Provider
        value={{
          color: "#242221",
          size: "4rem",
          className: "icons",
        }}
      >
        {props.name === "web" ? (
          <FaCode />
        ) : props.name === "app" ? (
          <FaAndroid />
        ) : (
          <GiGamepad />
        )}
      </IconContext.Provider>
      <ServiceTitle>{props.title}</ServiceTitle>
      <Description>{props.description}</Description>
    </Card>
  );
};

export default ServiceCard;
