import styled, { keyframes, css } from 'styled-components';
import { useRef } from 'react';
import ProjectList from '../data/ProjectList';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animation = props => 
  css`
    ${fadeIn};
  `

const Main = styled.main`
  padding: 20rem 0;
`;

const Section = styled.section`
  display: flex;
  gap: 10rem;
  margin-bottom: 12rem;

  @media ${(props) => props.theme.laptop} {
    flex-wrap: wrap;
  }
`;

const Mockup = styled.a`
  width: 50%;
  height: 50%;
  overflow: hidden;

  img {
    transform: scale(1.5);
  }

  @media ${(props) => props.theme.laptop} {
    width: 100%;
  }
`;

const Description = styled.article`
  width: 50%;

  @media ${(props) => props.theme.laptop} {
    width: 100%;
  }
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
  font-weight: 600;
`;

const SubUl = styled.ul`
  line-height: 2.5rem;
  margin-top: 1rem;
  font-weight: 100;
`;

const SubLi = styled.li`
  ${props => 
    props.fontBold && 
    css`
      font-weight: 600;
    `}
`;


const Project = () => {

  return (
    <>
      <Main>
        {ProjectList.map((item, idx) => (
          <Section key={item.key}>
            <Mockup>
              <img src={item.img} alt="목업 이미지" />
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
                <MainLi>✨기술 스택
                  <SubUl>
                    <SubLi>{item.stack}</SubLi>
                  </SubUl>
                </MainLi>
                <MainLi>✨작업 방식
                  <SubUl>
                    {item.way.split('/').map((item, idx) => (
                      <SubLi key={idx}>- {item}</SubLi>
                    ))}
                  </SubUl>
                </MainLi>
                {
                  item.role !== '' ?
                  <MainLi>✨역할
                    <SubUl>
                      {item.role.split('/').map((item, idx) => (
                        <SubLi key={idx}>- {item}</SubLi>
                      ))}
                    </SubUl>
                  </MainLi>
                  : null
                }
                {
                  item.note !== '' ? 
                  <MainLi>
                    <a href={item.note} target='_blank'>🔗시행착오</a>
                  </MainLi>  
                  : null
                }
                {
                  item.feedback !== '' ? 
                  <MainLi>
                    <a href={item.feedback} target='_blank'>🔗동료 익명 피드백</a>
                  </MainLi>  
                  : null
                }
                <MainLi>
                  <a href={item.github} target='_blank'>🔗깃헙 링크</a>
                </MainLi>
                <MainLi>
                  <SubUl>
                    <SubLi fontBold><a href={item.link} target='_blank'>🔗배포 링크</a></SubLi>
                    {
                      item.demo !== '' ?
                      <SubLi><small>{item.demo}</small></SubLi>
                      : null
                    }
                  </SubUl>
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