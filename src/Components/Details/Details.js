import React, { Component } from 'react';
import styled from 'styled-components';
import Skills from './Skills/Skills';
import MyServices from './MyServices/MyServices';
import Work from './Work/Work';
import MyTeam from './MyTeam/MyTeam';
import Contact from './Contact/Contact';

const DetailsSection = styled.div`
    margin:0 15rem 0 47rem;
    flex:1;    
`;


class Details extends Component {
    state = {  }
    render() { 
        return (
            <DetailsSection>
                <Skills />
                <MyServices />
                <Work />
                <MyTeam/>
                <Contact/>
            </DetailsSection>
        );
    }
}
 
export default Details;