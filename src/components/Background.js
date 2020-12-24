import { useContext } from 'react'
import TodoContext from '../context/todo-context'

const Background = () => {
  const { dark } = useContext(TodoContext)

  document.body.style.backgroundColor = dark ? '#161722' : '#fafafa'

  return (
    <div>
      <div className={`container-back ${dark && 'dark'}`}></div>
    </div>
  )
}

export default Background
