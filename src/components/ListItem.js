import { useContext } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import TodoContext from '../context/todo-context'

const ListItem = ({ label, id, active, index }) => {
  const { dark, deleteTodo, toggleTodo, todos } = useContext(TodoContext)

  const clickHandler = (id) => {
    deleteTodo(id)
  }

  const changeHandler = (id) => {
    toggleTodo(id)
    console.log(todos)
  }

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided) => (
        <div
          className={`item ${dark ? 'dark' : ''}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={`list-item margin ${dark ? 'dark' : ''}`}>
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
        </div>
      )}
    </Draggable>
  )
}

export default ListItem
