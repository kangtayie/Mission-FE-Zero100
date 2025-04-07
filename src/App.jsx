import styled from "styled-components";
import Header from "./component/Header";
import AddTodo from "./component/AddTodo";
import Category from "./component/Category";
import TodoList from "./component/TodoList";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) and (orientation: portrait) {
    max-width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) and (orientation: portrait) {
    padding: 1rem;
  }
`;

function App() {
  return (
    <Container>
      {/* Header part */}
      <Header />
      {/* AddTodo part */}
      <AddTodo />
      {/* AddTodo part */}
      <Category />
      {/* TodoList part */}
      <TodoList />
    </Container>
  );
};

export default App;
