import React from 'react';
import styled from 'styled-components';
import { GiGamepad } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { IconContext } from "react-icons";

const Card = styled.div`
    background-color: #f8f8f8;
    padding:1rem;
    width: inherit;
    height: 9rem;
    border-radius: 1rem;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    margin-bottom:2rem;
`;

const WorkCard = props => {
    return (
        <Card>
            <div>
                icon
            </div>
            <div>
                name
            </div>
            <div>
                developers
            </div>
            <div>
                status
            </div>
            <div>
                options
            </div>
        </Card>
    );
}
 
export default WorkCard;