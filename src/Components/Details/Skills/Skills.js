import React, { Component } from "react";
import TitleText from "../../UI/TitleText";
import styled from "styled-components";
import { keyframes } from 'styled-components'
import SubtitleText from "../../UI/SubtitleText";

const SkillsSection = styled.div`
  width: 100%;
  margin-bottom:5rem;
`;
const Container = styled.div`
  display: flex;
  justify-content:space-between;
`;
const TwoSectionRow = styled.div`
  width: 45%;
`;
const ThreeSectionColumn = styled.div`
  margin-bottom: 0.5rem;
`;
const SkillBox = styled.div`
    width: 100%;
    height:.8rem;
    border-radius:1rem;
    background-color: #f8f8f8;
`;
const Skill = styled.div`
    height:100%;
    width:${props => props.value}%;
    background-color:${props => props.color};
    border-radius:1rem;
    animation: ${props => increaseAnimation(props.value)};
    animation-duration: 3s;
`;
const increaseAnimation= x => keyframes`
    0%{
        width:0;
    }
    100%{
        width:${x}%;
    }
`;

class Skills extends Component {
  state = {};
  render() {
    return (
      <SkillsSection>
        <TitleText text={"Skills"} />
        <Container>
          <TwoSectionRow>
            <ThreeSectionColumn>
              <SubtitleText text={"React.js"} />
              <SkillBox>
                <Skill  value={'70'} color={'#fdd3d6'}/>
              </SkillBox>
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"Node.js"} />
              <SkillBox>
                <Skill value={'50'} color={'#aae5e5'}/>
              </SkillBox>
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"Firebase"} />
              <SkillBox>
                <Skill value={'55'} color={'#fdd3d6'}/>
              </SkillBox>
            </ThreeSectionColumn>
          </TwoSectionRow>
          <TwoSectionRow>
            <ThreeSectionColumn>
              <SubtitleText text={"Dart"} />
              <SkillBox>
                <Skill value={'75'} color={'#aae5e5'}/>
              </SkillBox>
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"Unity"} />
              <SkillBox>
                <Skill value={'85'} color={'#fdd3d6'}/>
              </SkillBox>
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"C#"} />
              <SkillBox>
                <Skill value={'80'} color={'#aae5e5'}/>
              </SkillBox>
            </ThreeSectionColumn>
          </TwoSectionRow>
        </Container>
      </SkillsSection>
    );
  }
}

export default Skills;
