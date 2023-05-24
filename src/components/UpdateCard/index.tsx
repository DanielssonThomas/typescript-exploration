import { styled } from "styled-components";

const StyledCard = styled.section`
  display: flex;
  position: relative;
  height: 10rem;
  width: 40vw;
  border: 1px solid white;
  margin: 1rem;
`;

const Comment = styled.p`
  margin: 0;
`;

const InfoUrl = styled.a`
  color: white;
`;

const CreatedBy = styled.h4`
  margin: 0;
`;

const CreatedOn = styled.p`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  margin: 0;
`;

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  height: 10rem;
  width: 30%;
`;

const Card = (props: Update) => {
  return (
    <StyledCard>
      <Image src={props.profile_image} />
      <ContentContainer>
        <Comment>{props.comment}</Comment>
        <InfoUrl href={props.info_url}>More info</InfoUrl>
        <CreatedBy>Created by: {props.created_by}</CreatedBy>
        <CreatedOn>{props.created_on.split("T")[0]}</CreatedOn>
      </ContentContainer>
    </StyledCard>
  );
};

export default Card;
