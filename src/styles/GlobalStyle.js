import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --swiper-theme-color: ${props => props.theme.colors.primary};
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    overflow-x: hidden;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    padding: 0;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    line-height: 1.2;
  }

  p {
    margin: 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  ::selection {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

export default GlobalStyle;
