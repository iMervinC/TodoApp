import { useContext, useState, useEffect } from 'react'
import TodoContext from '../context/todo-context'
import ListItem from './ListItem'

const BoxList = () => {
  const { todos, dark, clearComplete } = useContext(TodoContext)
  const [active, setActive] = useState([])
  const [completed, setCompleted] = useState([])
  const [state, setState] = useState([])

  useEffect(() => {
    setActive(todos.filter((x) => x.complete === false))
    setCompleted(todos.filter((x) => x.complete === true))
    setState(todos)
  }, [todos])

  return (
    <div className={`box box--list ${dark ? 'dark' : ''}`}>
      {state.map((x) => (
        <ListItem key={x.id} label={x.text} id={x.id} active={x.complete} />
      ))}
      <div className={`box--list__footer ${dark ? 'dark' : ''}`}>
        <p className="box--list__footer__items">{todos.length} items left</p>
        <div className="box--list__footer__group">
          <button onClick={() => setState(todos)}>All</button>
          <button onClick={() => setState(active)}>Active</button>
          <button onClick={() => setState(completed)}>Completed</button>
        </div>
        <p onClick={() => clearComplete()} className="box--list__footer__clear">
          Clear Completed
        </p>
      </div>
    </div>
  )
}

export default BoxList
