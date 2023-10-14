import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    background-color: hsla(0,0%,96%,.6);
  }
  
  h1, 
  h2, 
  h3, 
  h4, 
  h5, 
  h6, 
  p, 
  span {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;