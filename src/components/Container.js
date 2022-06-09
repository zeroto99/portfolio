import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30rem;


  @media ${(props) => props.theme.laptop} {
    padding: 0 20rem;
  }

  @media ${(props) => props.theme.tablet} {
    padding: 0 10rem;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 3rem;
  }
`;
