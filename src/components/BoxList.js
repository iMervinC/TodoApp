import { useContext, useState, useEffect } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import TodoContext from '../context/todo-context'
import ListItem from './ListItem'

const BoxList = () => {
  const { todos, dark, clearComplete, reOrder } = useContext(TodoContext)
  const [active, setActive] = useState([])
  const [completed, setCompleted] = useState([])
  const [state, setState] = useState([])

  useEffect(() => {
    setActive(todos.filter((x) => x.complete === false))
    setCompleted(todos.filter((x) => x.complete === true))
    setState(todos)
  }, [todos])

  const onDragEnd = (result) => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newArr = Array.from(todos)
    newArr.splice(source.index, 1)
    newArr.splice(destination.index, 0, todos[source.index])

    reOrder(newArr)
    setState(newArr)
  }
  return (
    <>
      <div className={`box box--list ${dark ? 'dark' : ''}`}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {state.length !== 0 ? (
                  state.map((x, index) => (
                    <ListItem
                      key={x.id}
                      label={x.text}
                      id={x.id}
                      active={x.complete}
                      index={index}
                    />
                  ))
                ) : (
                  <h3 className="noTask">No Task</h3>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className={`box--list__footer ${dark ? 'dark' : ''}`}>
          <p className="box--list__footer__items">{active.length} items left</p>
          <div className="box--list__footer__group mobile">
            <button onClick={() => setState(todos)}>All</button>
            <button onClick={() => setState(active)}>Active</button>
            <button onClick={() => setState(completed)}>Completed</button>
          </div>
          <p
            onClick={() => clearComplete()}
            className="box--list__footer__clear"
          >
            Clear Completed
          </p>
        </div>
      </div>
      <div className={`box ${dark ? 'dark' : ''}`}>
        <div className={`box--list__footer mobile ${dark ? 'dark' : ''}`}>
          <div className="box--list__footer__group">
            <button onClick={() => setState(todos)}>All</button>
            <button onClick={() => setState(active)}>Active</button>
            <button onClick={() => setState(completed)}>Completed</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoxList
