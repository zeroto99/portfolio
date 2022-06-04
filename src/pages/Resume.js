import { findByLabelText } from '@testing-library/react';
import styled, { css } from 'styled-components';
import SkillList from '../data/SkillList';
import ProjectList from '../data/ProjectList';
import ActivityList from '../data/ActivityList';
import CompletionList from '../data/CompletionList';

const Section = styled.section`
  padding-top: 20rem;
`;

const Article = styled.article`
  display: flex;
  gap: 20rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid;
`;

const Tit = styled.h2`
  width: 10%;
  font-size: 18px;
  font-weight: 600;
`;

const ContentUl = styled.ul`        
  flex: 1;
  line-height: 3rem;
  margin-top: -7px;
  ${props => 
    props.skill && 
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      flex: 1;
    `}
`;

const ContentLi = styled.li`
  
  ${props => 
    props.AllSkill &&
    css`
      padding: 0 2rem;
      border-radius: 5rem;
      font-weight: 600;
    `}
  ${props => 
    props.mainSkill && 
    css`
      background: #5DADEC;
      color: white;
      border: none;
      line-height: 32px;
    `}
  ${props => 
    props.subSkill && 
    css`
      background: white;
      color: #5DADEC;
      border: 1px solid #5DADEC;
    `}
`;

const ItemUl = styled.ul`
  ${props => 
    props.flex && 
    css`
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    `}
  ${props => 
    props.marginBtm && 
    css`
      margin-bottom: 2rem;
    `} 
`;

const ItemLi = styled.li`
  ${props => 
    props.tit && 
    css`
      font-size: 18px;
      font-weight: 600;
    `} 
`;


const Resume = () => {
  return (
    <>
      <Section>
        <Article>
          <Tit>이지아</Tit>
          <ContentUl>
            <ContentLi>프론트엔드 </ContentLi>
            <ContentLi>myv_01@naver.com</ContentLi>
            <ContentLi>
              <a href='https://github.com/zeroto99' target={"_blank"}>https://github.com/zeroto99</a></ContentLi>
          </ContentUl>
        </Article>
        <Article>
          <Tit>기술 스택</Tit>
          <ContentUl skill>
            {SkillList.map((item) => (
              item.state == 'main' 
              ?
              <ContentLi AllSkill mainSkill key={item.key}>{item.title}</ContentLi> 
              :
              <ContentLi AllSkill subSkill key={item.key}>{item.title}</ContentLi>
            ))}
          </ContentUl>
        </Article>
        <Article>
          <Tit>프로젝트</Tit>
          <ContentUl>
            {ProjectList.map((item) => (
              <ItemLi key={item.key}>
                <ItemUl marginBtm>
                  <ItemLi>
                    <ItemUl flex>
                      <ItemLi tit>{item.title}</ItemLi>
                      <ItemLi>{item.date}</ItemLi>
                    </ItemUl>
                  </ItemLi>
                  <ItemLi>{item.inf}</ItemLi>
                </ItemUl>
              </ItemLi>
            ))}
          </ContentUl>
        </Article>
        <Article>
          <Tit>활동</Tit>
          <ContentUl>
            {ActivityList.map((item) => (
              <ItemLi key={item.key}>
                <ItemUl>
                  <ItemLi>
                    <ItemUl flex>
                      <ItemLi tit>{item.title}</ItemLi>
                      <ItemLi>{item.date}</ItemLi>
                    </ItemUl>
                  </ItemLi>
                  <ItemLi>{item.inf}</ItemLi>
                </ItemUl>
              </ItemLi>
            ))}
          </ContentUl>
        </Article>
        <Article>
          <Tit>수료 및 자격증</Tit>
          <ContentUl>
            {CompletionList.map((item) => (
              <ItemLi key={item.key}>
                <ItemUl marginBtm>
                  <ItemLi>
                    <ItemUl flex>
                      <ItemLi tit>{item.title}</ItemLi>
                      <ItemLi>{item.date}</ItemLi>
                    </ItemUl>
                  </ItemLi>
                  <ItemLi>{item.inst}</ItemLi>
                  {item.inf !== '' ? <ItemLi>- {item.inf}</ItemLi> : null}
                </ItemUl>
              </ItemLi>
            ))}
          </ContentUl>
        </Article>
      </Section>          
    </>
  )
}

export default Resume;