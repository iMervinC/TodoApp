import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todo-actions'

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case DELETE_TODO:
      return {}
    case TOGGLE_TODO:
      return {}
    default:
      return state
  }
}

export default todoReducer
