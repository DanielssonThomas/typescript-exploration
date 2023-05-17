import "./App.css";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: xx-large;
`;

function App() {
  return (
    <>
      <StyledHeader>
        <StyledHeading>Typescript-exploration</StyledHeading>
      </StyledHeader>
    </>
  );
}

export default App;
