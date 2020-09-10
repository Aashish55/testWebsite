import React, { Component } from 'react';
import styled from 'styled-components';

const DetailsSection = styled.div`
    margin:0 15rem 0 50rem;
    flex:1;    
`;


class Details extends Component {
    state = {  }
    render() { 
        return (
            <DetailsSection>
                here goes details
            </DetailsSection>
        );
    }
}
 
export default Details;