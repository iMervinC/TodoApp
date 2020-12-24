import { useContext } from 'react'
import TodoContext from '../context/todo-context'
import { ReactComponent as SunIcon } from '../images/icon-sun.svg'
import { ReactComponent as MoonIcon } from '../images/icon-moon.svg'

const Header = () => {
  const { dark, toggleDark } = useContext(TodoContext)

  return (
    <header className="title">
      <h1>TODO</h1>

      {dark ? (
        <SunIcon onClick={toggleDark} />
      ) : (
        <MoonIcon onClick={toggleDark} />
      )}
    </header>
  )
}

export default Header
