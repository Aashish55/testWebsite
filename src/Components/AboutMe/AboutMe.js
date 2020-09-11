import React, { Component } from 'react';
import styled from 'styled-components';
import AashishImage from '../../images/aashish.jpg';
import CVbackground from '../../images/CVbackground.jpg';

const Container = styled.div`
    background-color:#f8f8f8;
    height:95vh;
    width:40rem;
    padding:2rem 2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    position:fixed;
    left:0;
    top:0;
    z-index:10;
    overflow:auto;
`;
const Image = styled.div`
    height:28rem;
    width:28rem;
    background-image:url(${props => props.image});
    background-position:center;
    background-repeat:no-repeat;
    background-size:contain;
    border-radius:50%;
    margin:1.5rem 0;
    box-shadow:2px 2px 5px rgb(128, 128, 128, 0.5);
`;
const NameSection = styled.div`
    display:flex;
    color: #242221;
    font-size:3.5rem;
    margin-bottom:1rem;
`;
const Name = styled.div`
    font-weight:600;
    margin:0 .5rem;
`;
const Surname = styled.div`
    font-weight:300;
    margin:0 .5rem;
`;
const DetailSection = styled.div`
    color: #242221;
    font-size:2rem;
    text-align:justify;
    margin:1rem 1rem;

    &::first-letter{
        font-size: 150%;
        font-family:'sans-serif';
    }
`;
const CVDownloadSection = styled.div`
    height:22rem;
    width:100%;
    background-image:url(${props=> props.image});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    border-radius:1.6rem;
    margin-top:2rem;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
`;
const DownloadResumeText = styled.div`
    color: #242221;
    font-size:3.5rem;
    font-weight:600;
`;
const DownloadButton = styled.button`
    outline:none;
    border:none;
    color:#f8f8f8;
    background-color:#242221;
    font-size:2rem;
    font-weight:600;
    padding: 1rem 3rem;
    border-radius:1rem;
`;

class AboutMe extends Component {
    state = {  }
    render() { 
        return (  
            <Container>
                <Image image={AashishImage} />
                <NameSection>
                    <Name>Aashish</Name>
                    <Surname>Jangam</Surname>
                </NameSection>
                <DetailSection>
                I am a web developer, android developer and professional game developer from Kavrepalanchok Nepal. I enjoy turning complex problems into simple, beautiful game scenes and intuitive interface designs.
                </DetailSection>
                <CVDownloadSection image={CVbackground}>
                    <DownloadResumeText>
                        My Resume
                    </DownloadResumeText>
                    <DownloadButton>
                        Download
                    </DownloadButton>
                </CVDownloadSection>
            </Container>
        );
    }
}
 
export default AboutMe;