import React from "react";
import styled from "styled-components";
import { GiGamepad } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IconContext } from "react-icons";
import Subtitle from './SubtitleText';

const Card = styled.div`
  background-color: #f8f8f8;
  width: 32%;
  height: 20rem;
  border-radius: 1rem;
`;
const ServiceTitle = styled.h2`
    color: #242221;
    font-size:2.5rem;
    font-weight:600;
    margin-bottom:.5rem;
`;

const ServiceCard = (props) => {
  return (
    <Card>
      <IconContext.Provider
        value={{
          color: "#aae5e5",
          size: "3rem",
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
      <Subtitle>{props.description}</Subtitle>
    </Card>
  );
};

export default ServiceCard;
