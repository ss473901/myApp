import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/taskSlice";
import * as Styled from "./style";

export const TaskForm = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddNewTask = () => {
    dispatch(addTask(newTask));
    setNewTask("");
  };

  return (
    <Styled.Wrapper>
      <Styled.Input onChange={handleChange} value={newTask} />
      <Styled.Button onClick={handleAddNewTask}>submit</Styled.Button>
    </Styled.Wrapper>
  );
};