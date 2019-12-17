import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*
{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background:#F9FAFC;
  overflow:hidden;
}

a {
  text-decoration: none;
}

#root {
  min-height:100vh;
}

.loading__block {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

`;
