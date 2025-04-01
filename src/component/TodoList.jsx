import Text from './Text'
import Todo from './Todo'

const TodoList = () => {
  return (
    <div>
      <Text style={{ fontWeight: 'bold' }}>3 tasks remaining</Text>
      <Todo></Todo>
    </div>
  )
}

export default TodoList
