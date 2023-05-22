import "./App.css";
import { styled } from "styled-components";
import Launches from "./components/Launches";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled.h1`
  font-size: 56px;
`;

function App() {
  return (
    <>
      <StyledHeader>
        <StyledHeading>Typescript-exploration</StyledHeading>
      </StyledHeader>
      <Launches />
    </>
  );
}

export default App;
