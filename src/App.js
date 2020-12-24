import Header from './components/Header'
import BoxInput from './components/BoxIput'
import BoxList from './components/BoxList'
import TodoState from './context/TodoState'
import Background from './components/Background'

function App() {
  return (
    <TodoState>
      <Background />
      <div className="container">
        <Header />
        <BoxInput />
        <BoxList />
      </div>
    </TodoState>
  )
}

export default App
