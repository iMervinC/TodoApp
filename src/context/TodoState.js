import { useReducer } from 'react'
import TodoContext from './todo-context'
import todoReducer from './todoReducer'
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_DARK,
  CLEAR_COMPLETE,
  RE_ODER,
} from './todo-actions'

const TodoState = ({ children }) => {
  const initialState = {
    todos: [
      { id: 1608878458624, text: 'Jog around the park 3x', complete: false },
      { id: 1608878458625, text: '10 minutes meditation', complete: false },
      { id: 1608878458626, text: 'Read of 1 hour', complete: false },
      { id: 1608878458627, text: 'Pick up groceries', complete: false },
      {
        id: 1608878458628,
        text: 'Complete Todo App on Frontend Mentor',
        complete: false,
      },
    ], // {id: 123, text: "Some text", complete: false}
    dark: true,
  }

  const [state, dispatch] = useReducer(todoReducer, initialState)

  //ACTIONS
  const addTodo = (todo) => {
    dispatch({ type: ADD_TODO, payload: todo })
  }

  const deleteTodo = (todo) => {
    dispatch({ type: DELETE_TODO, payload: todo })
  }

  const toggleTodo = (todo) => {
    dispatch({ type: TOGGLE_TODO, payload: todo })
  }

  const clearComplete = () => {
    dispatch({ type: CLEAR_COMPLETE })
  }

  const toggleDark = () => {
    dispatch({ type: TOGGLE_DARK })
  }

  const reOrder = (todo) => {
    dispatch({ type: RE_ODER, payload: todo })
  }

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        dark: state.dark,
        addTodo,
        deleteTodo,
        toggleTodo,
        toggleDark,
        clearComplete,
        reOrder,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState
