import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: ["A", "B", "C"] },
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { addTask } = taskSlice.actions;

export const selectTasks = (state) => {
  return state.tasks.tasks;
};

export default taskSlice.reducer;
