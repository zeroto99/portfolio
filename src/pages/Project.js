import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProjectList from '../data/ProjectList';

const Main = styled.main`
  height: 100vh;
  padding-top: 20rem;
`;

const Section = styled.section`
  display: flex;
  gap: 10rem;
  margin-bottom: 12rem;
`;

const Mockup = styled.article`
  width: 50%;
  height: 40rem;
  overflow: hidden;

  img {
    transform: scale(1.5);
  }
`;

const Description = styled.article`
  width: 50%;
`;

const TxtWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

const MainUl = styled.ul`
  margin-top: 2rem;
`;

const MainLi = styled.li`
  margin-bottom: 3rem;
`;

const SubUl = styled.ul`
  line-height: 2.5rem;
  margin-top: 1rem;
`;

const SubLi = styled.li`

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
        <Main>
          {ProjectList.map((item) => (
            <Section key={item.key}>
              <Mockup>
                <img src= {item.img} alt="목업 이미지" />
              </Mockup>
              <Description>
                <TxtWrapper>
                  <h2>{item.title}</h2>
                  <small>{item.date}</small>
                </TxtWrapper>
                <MainUl>
                  <MainLi>✨소개
                    <SubUl>
                      <SubLi>{item.inf}</SubLi>
                    </SubUl>
                  </MainLi>
                  <MainLi>✨작업 방식
                    <SubUl>
                      {item.way.split('/').map((item, idx) => (
                        <SubLi key={idx}>- {item}</SubLi>
                      ))}
                    </SubUl>
                  </MainLi>
                  <MainLi>✨역할
                    <SubUl>
                      {item.role.split('/').map((item, idx) => (
                        <SubLi key={idx}>- {item}</SubLi>
                      ))}
                    </SubUl>
                  </MainLi>
                  {
                    item.note !== '' ? 
                    ( 
                      <MainLi>✨노트
                        <SubUl>
                          <SubLi>{item.note}</SubLi>
                        </SubUl>
                      </MainLi> 
                    ) 
                    : null
                  }
                  <MainLi>
                    <a href={item.link} target='_blank'>✨보러가기!</a>
                  </MainLi>
                </MainUl>
              </Description>
            </Section>
          ))}
        </Main>
    </>
  )
}

export default Project;