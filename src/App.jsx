import reactLogo from './assets/react.svg'
import './App.css'
import UseCounter from './components/UseCounter'
import UseBoolean from './components/UseBoolean'
import Example from './components/ExampleBoolean'
import TodoList from './components/list/TodoList'

function App() {

  return (
    <div className="App">
     {/* <UseCounter></UseCounter> */} 
     <TodoList></TodoList>
    </div>
  )
}

export default App
