import styled from 'styled-components';
import Header from '../components/Header';

const Section = styled.section`
  height: 100vh;
  margin: 0 auto;
`;

const Resume = () => {
  return (
    <>
      <Header />
      <Section>
        <h1>이력서입니다</h1>
      </Section>
    </>
  )
}

export default Resume;