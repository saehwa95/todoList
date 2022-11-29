import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import "./css/createTodo.css";
import "./css/todoCrad.css";
import styled from "styled-components";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "리액트", content: "컴포넌트에 대해 알아보자" },
  ]);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => () => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const doneTodo = (id) => () => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const cancelTodo = (id) => () => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  return (
    <Wrapper>
      <Header />
      <CreateBox>
        <form className="create-form" onSubmit={addTodo}>
          <div className="title-box">
            <label>
              <span>제목</span>
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
          </div>
          <div className="content-box">
            <label>
              <span>내용</span>
              <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </label>
          </div>
          <button className="add-btn" type="submit">
            추가하기
          </button>
        </form>
      </CreateBox>
      <CardContainer>
        <div>
          <span className="working">Working📝</span>
        </div>
        <div className="cards-box">
          {todos.map((todo) =>
            todo.isDone ? null : (
              <CardBox key={todo.id}>
                <ContentBox>
                  <span className="todo-title">{todo.title}</span>
                  <span className="todo-content">{todo.content}</span>
                  <ButtonBox>
                    <button
                      className="delete-btn"
                      onClick={deleteTodo(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button className="done-btn" onClick={doneTodo(todo.id)}>
                      완료
                    </button>
                  </ButtonBox>
                </ContentBox>
              </CardBox>
            )
          )}
        </div>

        <div>
          <span className="working">Done🌈</span>
        </div>
        <div className="cards-box">
          {todos.map((todo) => {
            return todo.isDone ? (
              <CardBox key={todo.id}>
                <ContentBox>
                  <span className="todo-title">{todo.title}</span>
                  <span className="todo-content">{todo.content}</span>
                  <ButtonBox>
                    <button
                      className="delete-btn"
                      onClick={deleteTodo(todo.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={cancelTodo(todo.id)}
                    >
                      취소
                    </button>
                  </ButtonBox>
                </ContentBox>
              </CardBox>
            ) : null;
          })}
        </div>
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CreateBox = styled.div`
  width: 1200px;
  height: 100px;
  margin-top: 30px;
  border: 3px solid #eeeeee;
  border-radius: 10px;
  background-color: #eeeeee;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;

const CardContainer = styled.div`
  margin-top: 20px;
  width: 1200px;
  margin-left: 20px;
`;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 340px;
  height: 200px;
  border: 3px solid #008080;
  border-radius: 10px;
  margin: 10px 0 20px 0;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default App;
