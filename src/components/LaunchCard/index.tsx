import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 90vw;
  height: 400px;
  border-radius: 50px 0 50px 0;
  background-color: #5f5f5f;
  border: 10px solid #5f5f5f;
`;

const Image = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  border-radius: 45px 0 0 0;
`;

const ContentWrapper = styled.section`
  width: 70%;
  padding-left: 15px;
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 42px;
  line-height: 1;
  padding-bottom: 10px;
  font-weight: bold;
`;

const Description = styled.div`
  position: relative;
`;
const ReadMore = styled(Link)`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-49.5%);
  width: 99%;
`;
const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 10px;
  background-color: #34aba7;
  border-radius: 0 0 50px 0;
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

const Card = (props: Card) => {
  return (
    <Layout>
      <Image src={props.image} alt={props.name} />
      <ContentWrapper>
        <Title>{props.name}</Title>
        <Description>
          <div>Launch service provider: {props.provider}</div>
          <div>Window start date: {props.start_date}</div>
        </Description>
        <ReadMore to={`/launch/${props.id}`}>
          <Button>More Information</Button>
        </ReadMore>
      </ContentWrapper>
    </Layout>
  );
};

export default Card;
