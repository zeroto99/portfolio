import styled from 'styled-components';
import Header from '../components/Header';
import Photo from '../assets/images/photo.jpg';
import { useEffect, useState, useRef } from 'react';
import About from './About';
import Project from './Project';
import Resume from './Resume';
import { keyframes } from 'styled-components';

const FadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  overflow: hidden;
  padding-top: 7rem;
`;

const TitleWarpper = styled.div`
  align-self: end;
  line-height: 11rem;
  animation : ${FadeUp} 1s;
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
  animation : ${FadeUp} 2s;
`;

const Home = () => {

  return (
    <>
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