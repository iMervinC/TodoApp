import { useContext } from 'react'
import ListItem from './ListItem'

import TodoContext from '../context/todo-context'

const BoxList = () => {
  const { todos } = useContext(TodoContext)

  return (
    <div className="box box--list">
      {todos.map((x) => (
        <ListItem key={x.id} label={x.text} id={x.id} />
      ))}
      <div className="box--list__footer">
        <p>{todos.length} items left</p>
        <div className="box--list__footer__group">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  )
}

export default BoxList
