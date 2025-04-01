import styled from 'styled-components'
import Button from './Button'
import { useState } from 'react'

const Container = styled.div`
  display: flex;
  gap: 7px;
  justify-content: center;
  margin: 10px 0;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`

const StyledButton = styled(Button)`
  flex: 1;
  padding: 8px 10px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: bold;
  border: ${(props) => (props.$active ? '1.5px solid black' : '1.5px solid #ccc')};
  text-decoration: ${(props) => (props.$active ? 'underline' : 'none')};
`

const Category = () => {
  const [selected, setSelected] = useState('All')
  return (
    <Container>
      <StyledButton $active={selected === 'All'} onClick={() => setSelected('All')}>
        All
      </StyledButton>
      <StyledButton $active={selected === 'Active'} onClick={() => setSelected('Active')}>
        Active
      </StyledButton>
      <StyledButton $active={selected === 'Completed'} onClick={() => setSelected('Completed')}>
        Completed
      </StyledButton>
    </Container>
  )
}

export default Category
