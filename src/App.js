import Header from './components/Header'
import BoxInput from './components/BoxIput'
import BoxList from './components/BoxList'
import TodoState from './context/TodoState'
import Background from './components/Background'
import ToolTip from './components/ToolTip'

function App() {
  return (
    <TodoState>
      <Background />
      <div className="container">
        <Header />
        <BoxInput />
        <BoxList />
        <ToolTip />
      </div>
    </TodoState>
  )
}

export default App
