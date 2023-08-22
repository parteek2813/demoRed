// responsible for tracking the initial state of the store
// and also reducers are also collected here

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // since we marked reducers, so redux will automatically pass the
    // todos array[] into the state function
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // create a new array and don't include the id you are passing in!
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// exporting each method of the reducer
export const { addTodo, removeTodo } = todoSlice.actions;

// exporting the entire reducer to wire up to the store in the [store.js] file
export default todoSlice.reducer;
