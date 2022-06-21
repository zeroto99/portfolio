import styled, { css } from 'styled-components';
import SkillList from '../data/SkillList';
import ProjectList from '../data/ProjectList';
import ActivityList from '../data/ActivityList';
import CompletionList from '../data/CompletionList';
// import ResumePdf from '../assets/file/resume.pdf';

const Section = styled.section`
  padding-top: 20rem;
`;

const DownloadBtn = styled.a`
  width: 20rem;
  display: block;
  margin: 10rem auto;
  line-height: 4rem;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
  background: #5dadec;
  border-radius: 5rem;
`;

const Article = styled.article`
  display: flex;
  gap: 20rem;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid;

  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
    gap: 4rem;
  }
`;

const Tit = styled.h2`
  width: 16%;
  font-size: 18px;
  font-weight: 600;

  @media ${(props) => props.theme.laptop} {
    width: 40%;
  }
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
      line-height: 32px;
    `}
  ${props => 
    props.mainSkill && 
    css`
      background: #5DADEC;
      color: white;
      border: none;
    `}
  ${props => 
    props.subSkill && 
    css`
      background: white;
      color: #5DADEC;
      border: 1px solid #5DADEC;
    `}
`;

const ItemLi = styled.li`
  &:not(:last-child) {
    padding-bottom: 2rem;
    border-bottom: 1px solid lightgray;
  }
  &:not(:first-child) {
    padding-top: 2rem;
  }
`;

const StyledDl = styled.dl`
  
`;

const StyledDt = styled.dt`
  font-size: 18px;
  font-weight: 600;
`;

const StyledDd = styled.dd`
  ${props => 
    props.date && 
    css`
      text-align: right;
      margin-top: -3rem;
    `}
  ${props => 
    props.inf && 
    css`
      margin-top: 2rem;
    `}
`;

const Resume = () => {
  return (
    <>
      <Section>
        <Article>
          <Tit>이지아</Tit>
          <ContentUl>
            <ContentLi>프론트엔드</ContentLi>
            <ContentLi>myv_01@naver.com</ContentLi>
            <ContentLi>
              <a href='https://github.com/zeroto99' target={"_blank"}>깃허브 바로가기</a>
            </ContentLi>
            <ContentLi>
              <a href='https://velog.io/@zeroto99' target={"_blank"}>벨로그 바로가기</a>
            </ContentLi>
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
                <StyledDl>
                  <StyledDt>
                    {item.title}
                  </StyledDt>
                  <StyledDd date>
                    {item.date}
                  </StyledDd>
                  <StyledDd inf>
                    {item.inf}
                  </StyledDd>
                </StyledDl>
              </ItemLi>
            ))}
          </ContentUl>
        </Article>
        <Article>
          <Tit>활동</Tit>
          <ContentUl>
            {ActivityList.map((item) => (
              <ItemLi key={item.key} borderBtm>
                <StyledDl>
                  <StyledDt>
                    {item.title}
                  </StyledDt>
                  <StyledDd date>
                    {item.date}
                  </StyledDd>
                  <StyledDd inf>
                    {item.inf}
                  </StyledDd>
                </StyledDl>
              </ItemLi>
            ))}
          </ContentUl>
        </Article>
        <Article>
          <Tit>수료 및 자격증</Tit>
          <ContentUl>
            {CompletionList.map((item) => (
              <ItemLi key={item.key} borderBtm>
                <StyledDl>
                  <StyledDt>
                    {item.title}
                  </StyledDt>
                  <StyledDd date>
                    {item.date}
                  </StyledDd>
                  <StyledDd>
                    {item.inst}
                  </StyledDd>
                  {
                    item.inf !== '' ?
                    <StyledDd inf>
                      {item.inf}
                    </StyledDd>
                    : null
                  }
                </StyledDl>
              </ItemLi>
            ))}
          </ContentUl>
        </Article>
        {/* <DownloadBtn href={ResumePdf} download='이지아 이력서'>이력서 pdf 다운</DownloadBtn> */}
      </Section>          
    </>
  )
}

export default Resume;