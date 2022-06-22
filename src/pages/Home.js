import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Photo from '../assets/images/photo.jpg';
import ele3 from '../assets/images/graphic-ele3.png';

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
  @media ${(props) => props.theme.laptop} {
    justify-content: center;
    flex-wrap: wrap;
    flex-flow: column-reverse;
  }
`;

const TitleWrapper = styled.ul`
  align-self: end;
  line-height: 11rem;
  animation : ${FadeUp} 1s;
  font-family: PlayfairDisplay;
  font-weight: 400;
  font-size: 9rem;
  color: #363636;

  @media ${(props) => props.theme.laptop} {
    align-self: center;
    font-size: 7rem;
  }
`;

const Title = styled.li`
`;

const MainImg = styled.div`
  align-self: center;
  width: 37rem;
  height: 42rem;
  background: url(${Photo}) bottom/cover no-repeat;
  animation : ${FadeUp} 2s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -25px;
    left: -51px;
    width: 40px;
    height: 40px;
    background: url(${ele3}) center/cover no-repeat;
  }
`;

const Home = () => {

  return (
    <>
      <Section>
        <TitleWrapper>
          <Title>I'M A</Title>
          <Title>FRONT-END</Title>
          <Title>DEVELOPER</Title>
        </TitleWrapper>
        <MainImg />
      </Section>
    </>
  )
}

export default Home;