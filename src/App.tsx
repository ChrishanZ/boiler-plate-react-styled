import styled from "styled-components";
import Home from "./pages/Home";

export default function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", Courier, monospace;
`;
