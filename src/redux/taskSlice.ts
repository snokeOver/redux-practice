import { createSlice } from "@reduxjs/toolkit/react";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isComplete: boolean;
  priority: "High" | "Medium" | "Low";
}

interface IInitialState {
  todos: ITodo[];
}

const initialState: IInitialState = {
  todos: [
    {
      id: "sdf1",
      title: "Compete module",
      description: "I need to complete all modules quickly",
      dueDate: "25/26/25",
      isComplete: false,
      priority: "High",
    },
    {
      id: "sdf1",
      title: "Compete module",
      description: "I need to complete all modules quickly",
      dueDate: "25/26/25",
      isComplete: false,
      priority: "Medium",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
