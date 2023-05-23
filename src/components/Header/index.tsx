import { styled } from "styled-components";

type Header = {
  Heading: string;
  BackBtnVisable: boolean;
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
`;

const StyledHeading = styled.h1`
  font-size: xx-large;
`;

const Return = styled.a`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 99%;
`;
const Button = styled.button`
  width: 10%;
  height: 40px;
  padding: 10px;
  background-color: #34aba7;
  border-radius: 0 50px 0 50px;
  border: none;
  color: black;
  outline: inherit;
  font-weight: bold;
  font-size: 24px;
  line-height: 0;
  transition: 0.2s ease;
  &:hover {
    background-color: #83d6d4;
    cursor: pointer;
  }
`;

const Header = (props: Header) => {
  const RenderBackBtn = () => {
    if (props.BackBtnVisable) {
      return (
        <Return href="/">
          <Button>Back</Button>
        </Return>
      );
    }
  };

  return (
    <HeaderWrapper>
      {RenderBackBtn()}
      <StyledHeading>{props.Heading}</StyledHeading>
    </HeaderWrapper>
  );
};

export default Header;
