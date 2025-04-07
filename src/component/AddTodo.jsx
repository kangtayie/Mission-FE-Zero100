import React from 'react';
import styled from "styled-components";

const AddTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
//   justify-content: center;
  text-align: center;
`;

const StyledText = styled.h2`
  text-align: center;
  display: flex;
`;

const StyledInput = styled.input`
  width: 500px;
  padding: 14px;
  border-radius: 0px;
  margin-bottom: 8px;
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
  width: 532px;
  padding: 9px;
  border: none;
  border-radius: 0px;
  margin-bottom: 8px;
`;

const AddTodo = () => {
    return(
        <AddTodoContainer>
            <StyledText>What needs to be done?</StyledText>
            <StyledInput type="text" placeholder="Add a task" />
            <StyledButton>Add</StyledButton>
        </AddTodoContainer>
    )
}

export default AddTodo;