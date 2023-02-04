import React from "react";
import styled from "styled-components";
import row from "../../assets/row.jpg";
import col1 from "../../assets/col1.jpg";
import col2 from "../../assets/col2.jpg";
import col3 from "../../assets/col3.jpg";
import col4 from "../../assets/col4.jpg";
import col5 from "../../assets/col5.jpg";
import col6 from "../../assets/col6.jpg";

function MainPage() {
  return (
    <Container>
      <TopContainer>
        <TopTextContainer>Hana Seok</TopTextContainer>
      </TopContainer>
      <MiddleSectionContainer>
        <MiddleSectionProp background={col1}></MiddleSectionProp>
        <MiddleSectionProp background={col2}></MiddleSectionProp>
        <MiddleSectionProp background={col3}></MiddleSectionProp>
      </MiddleSectionContainer>
      <MiddleSectionContainer>
        <MiddleSectionProp background={col4}></MiddleSectionProp>
        <MiddleSectionProp background={col5}></MiddleSectionProp>
        <MiddleSectionProp background={col6}></MiddleSectionProp>
      </MiddleSectionContainer>
      <FooterContainer>
        <FooterSection>
          Hana Seok is a Animator, creative director and artist based in Daegu
          and Sinchang
        </FooterSection>
        <ReserveSection>
          hana9449@naver.com
          <br />
          <br />
          Daegu City
          <br />
          <br />© 2023 Hana Seok all right reserved
        </ReserveSection>
      </FooterContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 500px;
  position: static;
  display: flex;
  align-items: center;
  background-image: url(${row});
  background-size: cover;
`;

const TopTextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-family: Georgia, serif;
  color: #ffffff;
  font-size: 50px;
`;

const MiddleSectionContainer = styled.div`
  position: static;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;

const MiddleSectionProp = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.background});
  background-size: cover;
  transform: scale(1, 1);
  transition: all 0.5s;
  :hover {
    transform: scale(1.1, 1.1);
    transition: all 0.5s;
  }
  @media (min-width: 1900px) {
    height: 700px;
  }
`;

const FooterSection = styled.div`
  width: 100%;
  height: 200px;
  background-color: #006633;
  font-family: "Montserrat", sans-serif;
  font-family: "Noto Serif Khojki", serif;
  font-family: "Nunito", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #ffffff;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;

const ReserveSection = styled.div`
  position: relative;
  bottom: -30px;
  left: 20%;
  font-family: "Montserrat", sans-serif;
  font-family: "Nunito", sans-serif;
  font-size: 12px;
`;

export default MainPage;
