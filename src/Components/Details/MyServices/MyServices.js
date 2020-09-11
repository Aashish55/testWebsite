import React, { Component } from 'react';
import styled from 'styled-components';
import TitleText from '../../UI/TitleText';
import ServiceCard from '../../UI/ServiceCard';

const MyServicesSection = styled.div`
    width:100%;
    height:30rem;
`;
const ServiceCardContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`;

class MyServices extends Component {
    state = {  }
    render() { 
        return (
            <MyServicesSection>
                <TitleText text={'My Services'} />
                <ServiceCardContainer>
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </ServiceCardContainer>
            </MyServicesSection>
        );
    }
}
 
export default MyServices;