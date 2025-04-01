import Header from './component/Header'
import AddTodo from './component/AddTodo'
import Category from './component/Category'
import TodoList from './component/TodoList'

function App() {
  const tasks = [
    { id: 'eat', label: 'Eat', checked: true },
    { id: 'sleep', label: 'Sleep', checked: false },
    { id: 'repeat', label: 'Repeat', checked: false },
  ]

  return (
    <div style={{ padding: '10px' }}>
      <Header />
      <AddTodo />
      <div>
        <Category />
      </div>
      <TodoList />
    </div>
  )
}

export default App
