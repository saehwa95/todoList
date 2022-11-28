import React from "react";
import styled from "styled-components";
import "../css/createTodo.css";

const createTodo = () => {
  return (
    <>
      <CreateBox>
        <form className="create-form">
          <div className="title-box">
            <label>
              <span>제목</span>
              <input type="text" name="title" value="" />
            </label>
          </div>
          <div className="content-box">
            <label>
              <span>내용</span>
              <input type="text" name="content" value="" />
            </label>
          </div>
          <button className="add-btn">추가하기</button>
        </form>
      </CreateBox>
    </>
  );
};

export default createTodo;

const CreateBox = styled.div`
  width: 1200px;
  height: 100px;
  margin-top: 30px;
  border: 3px solid #EEEEEE;
  border-radius: 10px;
  background-color: #EEEEEE;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
`;
