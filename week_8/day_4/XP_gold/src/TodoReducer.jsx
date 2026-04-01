
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const initialState = {
  todos: []         
};

export default function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:

      { const newTodo = {
        id: Date.now(),          
        text: action.payload
      };
      return { ...state, todos: [...state.todos, newTodo] }; }

    case REMOVE_TODO:

      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload)
      };

    default:
      return state;
  }
}