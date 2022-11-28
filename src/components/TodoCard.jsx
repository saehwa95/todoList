import React from "react";
import styled from "styled-components";
import "../css/todoCrad.css";

const TodoCard = () => {
  return (
    <>
      <CardContainer>
        <div>
          <span className="working">Working📝</span>
        </div>
        <CardBox>
          <ContentBox>
            <span className="todo-title">리액트 공부하기</span>
            <span className="todo-content">리액트 기초를 공부해봅시다.</span>
            <ButtonBox>
              <button className="delete-btn">삭제하기</button>
              <button className="done-btn">완료</button>
            </ButtonBox>
          </ContentBox>
        </CardBox>
        <div>
          <span className="working">Done🌈</span>
        </div>
        <CardBox>
          <ContentBox>
            <span className="todo-title">리액트 공부하기</span>
            <span className="todo-content">리액트 기초를 공부해봅시다.</span>
            <ButtonBox>
              <button className="delete-btn">삭제하기</button>
              <button className="cancel-btn">취소</button>
            </ButtonBox>
          </ContentBox>
        </CardBox>
      </CardContainer>
    </>
  );
};

export default TodoCard;

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
