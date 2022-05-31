import styled from 'styled-components';
import Header from '../components/Header';

const Section = styled.section`
  padding-top: 7rem;
`;

const Article = styled.article`

`;

const Tit = styled.h2`

`;

const Resume = () => {
  return (
    <>
      <Section>
        <Article>
          <Tit>소개</Tit>
        </Article>
        <Article>
          <Tit>스킬</Tit>
        </Article>
        <Article>
          <Tit>프로젝트</Tit>
        </Article>
        <Article>
          <Tit>활동</Tit>
        </Article>
        <Article>
          <Tit>수료 및 자격증</Tit>
        </Article>
      </Section>
    </>
  )
}

export default Resume;