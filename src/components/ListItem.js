import { useContext } from 'react'
import TodoContext from '../context/todo-context'

const ListItem = ({ label, id, active }) => {
  const { dark, deleteTodo, toggleTodo } = useContext(TodoContext)

  const clickHandler = (id) => {
    deleteTodo(id)
  }

  const changeHandler = (id) => {
    toggleTodo(id)
    console.log(id)
  }

  return (
    <>
      <div draggable className={`list-item margin ${dark ? 'dark' : ''}`}>
        <input
          checked={active}
          type="checkbox"
          className={`${dark ? 'dark' : ''}`}
          id={`check${id}`}
          onChange={() => changeHandler(id)}
        />
        <div className="item-label">
          <span className="item-label__line"></span>
          <label htmlFor={`check${id}`}>{label}</label>
        </div>
        <i className="fa fa-times" onClick={() => clickHandler(id)}></i>
      </div>
      <span className="list-border"></span>
    </>
  )
}

export default ListItem
