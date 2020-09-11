import React, { Component } from "react";
import TitleText from "../../UI/TitleText";
import styled from "styled-components";
import SubtitleText from "../../UI/SubtitleText";

const SkillsSection = styled.div`
  width: 100%;
  height: 30rem;
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
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"Node.js"} />
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"React"} />
            </ThreeSectionColumn>
          </TwoSectionRow>
          <TwoSectionRow>
            <ThreeSectionColumn>
              <SubtitleText text={"React.js"} />
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"Node.js"} />
            </ThreeSectionColumn>
            <ThreeSectionColumn>
              <SubtitleText text={"React"} />
            </ThreeSectionColumn>
          </TwoSectionRow>
        </Container>
      </SkillsSection>
    );
  }
}

export default Skills;
