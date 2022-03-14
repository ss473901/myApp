import React from "react";
import styled from "styled-components";
import { TaskForm } from "./component/TaskForm/TaskForm";
import { TaskList } from "./component/TaskList/TaskList";

function App() {
  return (
    <>
      <Container>
        <WrapperTop>
          <Title>ToDoリスト</Title>
        </WrapperTop>

        <WrapperBottom>
          <TaskForm />
          <TaskList />
        </WrapperBottom>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: orange;
`;
const WrapperTop = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  display: inline-block;
  color: white;
`;
const WrapperBottom = styled.div`
  width: 90%;
  height: 650px;
  background-color: white;
`;
export default App;
