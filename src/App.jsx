import styled from 'styled-components'
import Text from './component/Text'
import Input from './component/Input'
import Button from './component/Button'
import CheckBox from './component/CheckBox'
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
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <CheckBox id={task.id} />
            <label>{task.label}</label>
            <div>
              <Button>{`Edit ${task.label}`}</Button>
              <Button>{`Delete ${task.label}`}</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
