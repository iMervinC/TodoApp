import Header from './components/Header'
import BoxInput from './components/BoxIput'
import BoxList from './components/BoxList'
import TodoState from './context/TodoState'

function App() {
  return (
    <div className="container">
      <TodoState>
        <Header />
        <BoxInput />
        <BoxList />
      </TodoState>
    </div>
  )
}

export default App
