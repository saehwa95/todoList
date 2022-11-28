import React from "react";
import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import "./App.css";
import styled from "styled-components";
import TodoCard from "./components/TodoCard";

const App = () => {
  return (
    <Wrapper>
      <Header />
      <CreateTodo />
      <TodoCard />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
