import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Noto Sans KR", sans-serif;
  /* overflow-x: hidden; */
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
