import React, { useState } from 'react';
import styled from "styled-components";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const StyledButton = styled.button`
  width: 130px;
  padding: 7px;
  background-color: white;
  border: 2px solid ${(props) => (props.active ? "black" : "#ccc")};
  border-radius: 0px;
  font-size: 14px;
`;

const Category = () => {
  const [activeButton, setActiveButton] = useState("All");

  return (
    <CategoryContainer>
      {["All", "Active", "Completed"].map((label) => (
        <StyledButton
          key={label}
          active={activeButton === label}
          onClick={() => setActiveButton(label)}
        >
          {label}
        </StyledButton>
      ))}
    </CategoryContainer>
  );
};

export default Category;