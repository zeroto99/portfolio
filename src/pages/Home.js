import styled from 'styled-components';
import Header from '../components/Header';
import Photo from '../assets/images/photo.jpg';
import { useEffect, useState } from 'react';
import About from './About';
import Project from './Project';
import Resume from './Resume';

const Section = styled.section`
  width: 1024px;
  margin: 0 auto;
  height: 100vh;
  position: relative;
`;

const TitleWarpper = styled.div`
  position: absolute;
  bottom: 10rem;
  left: 0;
  line-height: 11rem;
`;

const Title = styled.p`
  font-family: PlayfairDisplay;
  font-weight: 300;
  font-size: clamp(5rem, 10vw, 10rem);
  color: #363636;
`;

const MainImg = styled.div`
  position: absolute;
  top: 21rem;
  right: 0;
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