import React, { Component } from 'react';
import styled from 'styled-components';
import TitleText from '../../UI/TitleText';
import ServiceCard from '../../UI/ServiceCard';

const MyServicesSection = styled.div`
    width:100%;
    margin-bottom:5rem;
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
                    <ServiceCard name={'web'} title={'Web Development'} description={'I believe in minimum lines of code with highly optimized responsive sites.'}/>
                    <ServiceCard name={'app'} title={'Android Development'} description={'Optimized android apps with cool UI designs and great animations.'} />
                    <ServiceCard name={'game'} title={'Game Development'} description={'Going for 3D game developmet after working enough in 2D games.'} />
                </ServiceCardContainer>
            </MyServicesSection>
        );
    }
}
 
export default MyServices;