import styled from 'styled-components';
import Header from '../components/Header';
import Photo from '../assets/images/photo.jpg';
import { useEffect, useState } from 'react';
import About from './About';
import Project from './Project';
import Resume from './Resume';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;

const TitleWarpper = styled.div`
  align-self: end;
  line-height: 11rem;
`;

const Title = styled.p`
  font-family: PlayfairDisplay;
  font-weight: 300;
  font-size: clamp(5rem, 10vw, 10rem);
  color: #363636;
`;

const MainImg = styled.div`
  align-self: center;
  width: 37rem;
  height: 42rem;
  background: url(${Photo}) bottom/cover no-repeat;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <TitleWarpper>
          <Title>I'M A</Title>
          <Title>FRONT-END</Title>
          <Title>DEVELOPER</Title>
        </TitleWarpper>
        <MainImg />
      </Section>
    </>
  )
}

export default Home;