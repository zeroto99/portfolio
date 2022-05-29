import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProjectList from '../data/ProjectList';

const Main = styled.main`
  height: 100vh;
  padding-top: 10rem;
`;

const Section = styled.section`
  display: flex;
  gap: 10rem;
  margin-bottom: 2rem;
`;

const Mockup = styled.article`
  border: 1px solid black;
  width: 50%;
  height: 40rem;
`;

const Description = styled.article`
  border: 1px solid black;
  width: 50%;
`;

const DesList = styled.ul`

`;

const Test = styled.div`
  width: 400px;
  height: 200px;
  background: black;
`;

const Height = styled.div`
  height: 2200px;
  background: gray;
`;

const Project = () => {
  // const [position, setPosition] = useState(0);

  // const onScroll = () => {
  //   setPosition(window.scrollY);
  // }

  // // 스크롤 될 때마다 onScroll 함수가 실행되서 scrollY의 값이 position state에 업데이트된다.
  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   // 스크롤 될 때마다 이벤트가 발생하면 메모리 누수가 발생하기 때문에 컴포넌트가 언마운트 되기 직전에 이벤트를 제거한다. 
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);
  // {/* <h1>프로젝트입니다</h1>
  // <Test style={{
  //   transform: `translateX(${position}px)`
  // }} />
  // <Height /> */}

  return (
    <>
      <Header />
        <Main>
          {ProjectList.map((item) => (
            <Section>
              <Mockup style={{background: `url(${item.img})`}}>
              </Mockup>
              <Description>
                <h2>{item.title}</h2>
              </Description>
            </Section>
          ))}
        </Main>
    </>
  )
}

export default Project;