
import React, { createContext, useReducer } from "react";

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

const initialState = {
  tasks: []         
};


function taskReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:

      { const newTask = {
        id: Date.now(),          
        text: action.payload,
        completed: false
      };
      return { ...state, tasks: [...state.tasks, newTask] }; }

    case TOGGLE_TASK:
   
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        )
      };

    case REMOVE_TASK:

      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload)
      };

    default:
      return state;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext({
  state: initialState,
  dispatch: () => {}
});

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};