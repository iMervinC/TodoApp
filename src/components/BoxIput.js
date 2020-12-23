import { useState, useContext } from 'react'
import Switch from './Switch'

import TodoContext from '../context/todo-context'

const BoxIput = () => {
  const [inputText, setInputText] = useState('')
  const { addTodo, todos } = useContext(TodoContext)

  const submitHandle = (e) => {
    e.preventDefault()
    setInputText('')
    if (inputText !== '') {
      addTodo({ id: Date.now(), text: inputText, complete: false })
      console.log(todos)
    } else {
      console.log('No content')
    }
  }

  return (
    <div className="box box--input">
      <form onSubmit={(e) => submitHandle(e)}>
        <Switch />
        <input
          type="text"
          placeholder="Create a new todo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
    </div>
  )
}

export default BoxIput
