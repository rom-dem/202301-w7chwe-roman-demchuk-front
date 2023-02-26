import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.25rem;
    background-color: gray;
    color: black
  }

  h1, h2 {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a, a:active, a:visited { 
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    border: none;
    font-size: inherit;
    background-color: transparent;
    cursor: pointer;
  };
`;

export default GlobalStyles;
