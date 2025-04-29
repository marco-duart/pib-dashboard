import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  button {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    line-height: 1.2;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export default GlobalStyle;
