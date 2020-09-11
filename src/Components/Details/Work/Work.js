import React, { Component } from 'react';
import styled from 'styled-components';
import TitleText from '../../UI/TitleText';
import WorkCard from '../../UI/WorkCard';

const WorkSection = styled.div`
    width:100%;
    margin-bottom:5rem;
`;
const WorkCardsSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:column:
`;

class Work extends Component {
    state = {  }
    render() { 
        return (
           <WorkSection>
                <TitleText text={'Projects'} />
                <WorkCardsSection>
                    <WorkCard/>
                    <WorkCard/>
                </WorkCardsSection>
           </WorkSection>
        );
    }
}
 
export default Work;