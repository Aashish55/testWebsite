import React from 'react';
import styled from 'styled-components';

const Text = styled.h2`
    color: #242221;
    font-size:3rem;
    font-weight:600;
    margin-bottom:1rem;

    &:first-letter{
        color:#9174d8;
        font-size:4rem;
    }
`;

const TitleText = props => {
    return (
        <Text>
            | {props.text}
        </Text>
    );
}
 
export default TitleText;