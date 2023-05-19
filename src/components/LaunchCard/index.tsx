import { styled } from "styled-components";

type CardTemplate = {
  name: string;
  image: string;
  start_date: string;
  end_date: string;
};

const Layout = styled.div`
  display: flex;
  width: 80vw;
  height: 15vh;
`;

const Image = styled.img`
  width: 20vw;
  height: 15vh;
  object-fit: cover;
  object-position: center;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1;
  width: 100%;
`;

const Title = styled.h2`
  padding: 1rem 2rem;
  margin: 0;
  border-bottom: 1px solid white;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
`;

const Card = (props: CardTemplate) => {
  return (
    <Layout>
      <Image src={props.image} alt={props.name} />
      <ContentWrapper>
        <Title>{props.name}</Title>
        <Description>
          <div>Window start date: {props.start_date}</div>
          <button>Read more</button>
        </Description>
      </ContentWrapper>
    </Layout>
  );
};

export default Card;
