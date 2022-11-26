import React from "react";
import Header from "./components/Header";
import "./App.css";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  border: 2px red solid;
  display: flex;
  justify-content: center;
`;

export default App;
