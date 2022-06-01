import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
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
  transform: translateX(-44px);
  opacity: 0;

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

  const targets = useRef([]);

  useEffect(() => {
    console.log(targets.current);
    targets.current.forEach((ele) => console.log(ele.offsetTop));
  }, []);


  return (
    <>
      <Main>
        {ProjectList.map((item, idx) => (
          <Section key={item.key}>
            <Mockup 
              ref={
                (ele) => {targets.current[idx] = ele}
              }
            >
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