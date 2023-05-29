import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type Header = {
  Heading: string;
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh;
`;

const StyledHeading = styled.h1`
  font-size: xx-large;
`;

const Return = styled(Link)`
  position: fixed;
  top: 25px;
  left: 25px;
  width: 1400px;
  z-index: 2;
`;
const Back = styled.a`
  position: fixed;
  top: 25px;
  left: 25px;
  width: 1400px;
  z-index: 2;
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

const HeaderShadowing = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 12vh;
  background-color: black;
  opacity: 0.4;
  z-index: -1;
`;

const RenderBackBtn = () => {
  const shouldRenderBtn: boolean = useLocation().pathname != "/" ? true : false;
  const shouldRenderShadow: boolean = useLocation().pathname.startsWith(
    "/launch"
  )
    ? true
    : false;

  if (shouldRenderBtn && !shouldRenderShadow) {
    //all rockets
    return (
      <>
        <Return to="/">
          <Button>Back</Button>
        </Return>
      </>
    );
  } else if (shouldRenderBtn && shouldRenderShadow) {
    //single page
    return (
      <>
        <Back>
          <Button
            onClick={() => {
              history.back();
            }}
          >
            back
          </Button>
        </Back>
        <HeaderShadowing />
      </>
    );
  }
};

const Header = (props: Header): JSX.Element => {
  return (
    <HeaderWrapper>
      {RenderBackBtn()}
      <StyledHeading>{props.Heading}</StyledHeading>
    </HeaderWrapper>
  );
};

export default Header;
