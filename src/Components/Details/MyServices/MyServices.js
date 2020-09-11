import React, { Component } from 'react';
import styled from 'styled-components';
import TitleText from '../../UI/TitleText';

const MyServicesSection = styled.div`
    width:100%;
    height:30rem;
`;
class MyServices extends Component {
    state = {  }
    render() { 
        return (
            <MyServicesSection>
                <TitleText text={'My Services'} />
            </MyServicesSection>
        );
    }
}
 
export default MyServices;