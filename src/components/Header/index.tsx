import { styled } from "styled-components";

type Header = {
  Heading: string;
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const StyledHeading = styled.h1`
  font-size: xx-large;
`;

const Header = (props: Header) => {
  return (
    <HeaderWrapper>
      <StyledHeading>{props.Heading}</StyledHeading>
    </HeaderWrapper>
  );
};

export default Header;
