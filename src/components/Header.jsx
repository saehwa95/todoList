import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <MainHeader>
        <div style={{ marginLeft: "20px" }}>I can do it!</div>
        <div style={{ marginRight: "20px" }}>React study</div>
      </MainHeader>
    </>
  );
};

export default Header;

const MainHeader = styled.div`
  height: 50px;
  background-color: #008080;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  color: white;
  width: 1200px;
  margin-top: 20px;
`;