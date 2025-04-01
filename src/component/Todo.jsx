import styled from 'styled-components'
import CheckBox from './CheckBox'
import Text from './Text'
import Button from './Button'

const TodoItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd
  border-radius: 6px;
`

const Todo = () => {
  return (
    <TodoItem>
      <CheckBox>Eat</CheckBox>
    </TodoItem>
  )
}
export default Todo
