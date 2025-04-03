import Text from './Text'
import styled from 'styled-components'
import Todo from './Todo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const TodoList = () => {
  return (
    <Container>
      <Text style={{ fontWeight: 'bold', fontSize: '20px' }}>3 tasks remaining</Text>
      <List>
        <Todo id='Eat' label='Eat' checked={true}></Todo>
        <Todo id='Eat' label='Eat' checked={true}></Todo>
        <Todo id='Eat' label='Eat' checked={true}></Todo>
      </List>
    </Container>
  )
}

export default TodoList
