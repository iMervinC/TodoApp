import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_DARK,
  CLEAR_COMPLETE,
  RE_ODER,
} from './todo-actions'

const todoReducer = (state, action) => {
  switch (action.type) {
    case RE_ODER:
      return { ...state, todos: [...action.payload] }

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case DELETE_TODO:
      const filltered = state.todos.filter((x) => x.id !== action.payload)
      return {
        ...state,
        todos: [...filltered],
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((x) =>
          x.id === action.payload ? { ...x, complete: !x.complete } : x
        ),
      }

    case CLEAR_COMPLETE:
      const cleared = state.todos.filter((x) => x.complete !== true)
      return {
        ...state,
        todos: [...cleared],
      }

    case TOGGLE_DARK:
      return { ...state, dark: !state.dark }
    default:
      return state
  }
}

export default todoReducer
