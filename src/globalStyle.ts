import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s linear;
  }

  html, body, #root {
    height: 100%
  }
`;
