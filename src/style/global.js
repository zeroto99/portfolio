import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* Add options */
  a {
    text-decoration: none;
    color: inherit;
  }
  html {
    font-size: 10px;

    @media ${(props) => props.theme.laptop} {
      font-size: 9px;
    }
    @media ${(props) => props.theme.tablet} {
      font-size: 7px;
    }
  }
  body {
    font-size: 1.6rem;
    font-family: Pretendard, sans-serif;
  }
  button {
    background: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
  }
  .sr-only {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export default GlobalStyle;