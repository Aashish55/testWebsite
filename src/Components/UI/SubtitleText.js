import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    color: #242221;
    font-size:2rem;
    margin-bottom:.2rem;
`;

const SubtitleText = props => {
    return (
        <Text>
            {props.text}
        </Text>
    );
}
 
export default SubtitleText;