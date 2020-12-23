import { useReducer } from 'react'
import TodoContext from './todo-context'
import todoReducer from './todoReducer'
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './todo-actions'

const TodoState = ({ children }) => {
  const initialState = {
    todos: [], // {id: 123, text: "Some text", complete: false}
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

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoState
