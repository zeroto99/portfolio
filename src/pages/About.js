import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Photo from '../assets/images/photo2.jpg';
import Velog from '../assets/images/velog.png';
import GitHub from '../assets/images/github.png';
import ele1 from '../assets/images/graphic-ele1.png';
import ele2 from '../assets/images/graphic-ele2.png';

const FadeIntoRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FadeIntoLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
`;

const ImgWrapper = styled.article`
  animation: ${FadeIntoLeft} 1s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: url(${ele1}) center/cover no-repeat;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -13px;
    width: 70px;
    height: 70px;
    background: url(${ele2}) center/cover no-repeat;
  }
`;

const MainImg = styled.div`
  position: relative;
  overflow: hidden;
  width: 240px;
  height: 300px;
  border-radius: 50%;
  transform: rotate(28deg);

  &:after {
    content: '';
    position: absolute;
    top: -271px;
    left: -134px;
    width: 424px;
    height: 700px;
    background: url(${Photo}) center/cover no-repeat;
    transform: rotate(-28deg);
  }
`;

const Content = styled.article`
  line-height: 3rem;
  animation: ${FadeIntoRight} 1s;
  text-align: center;
`;

const Text = styled.p`
  color: #2d2b2b;
  font-size: 1.8rem;
`;

const EmWord = styled.strong`
  font-weight: 600;
`;

const SnsWrapper = styled.ul`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
`;

const SnsItem = styled.li`

`;

const SnsLink = styled.a`
  display: block;
  width: 3rem;
  height: 3rem;
  background: url(${props => props.Velog ? Velog : GitHub}) no-repeat center/100%;
`;



const About = () => {
  return (
    <>
      <Section>
        <ImgWrapper>
          <MainImg />
        </ImgWrapper>
        <Content>
          <Text><EmWord>???????????????</EmWord> ????????? ????????? <EmWord>?????????</EmWord>?????????.</Text>
          <Text>??? ????????? ????????? ?????? ?????? ???????????????.</Text>
          <Text>????????? ????????? ?????? ???????????? ????????? ????????????.</Text>
          <SnsWrapper>
            <SnsItem><SnsLink href='https://github.com/zeroto99' title='????????? ????????????' target={'_blank'}><span className='sr-only'>????????? ???????????? ??????</span></SnsLink></SnsItem>
            <SnsItem><SnsLink Velog href='https://velog.io/@zeroto99' title='????????? ????????????' target={'_blank'}><span className='sr-only'>????????? ???????????? ??????</span></SnsLink></SnsItem>
          </SnsWrapper>
        </Content>
      </Section>
    </>
  )
}

export default About;