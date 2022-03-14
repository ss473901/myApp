import { useSelector } from "react-redux";
import { selectTasks } from "../../features/task/taskSlice";
import * as Styled from "./style";

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  return (
    <Styled.Wrapper>
      <Styled.Ul>
        {tasks.map((task, index) => (
          <Styled.Li key={index}>{task}</Styled.Li>
        ))}
      </Styled.Ul>
    </Styled.Wrapper>
  );
};
