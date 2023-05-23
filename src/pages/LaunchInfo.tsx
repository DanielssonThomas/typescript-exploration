import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/Header";

const EventMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  width: 100vw;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  z-index: -2;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
`;

const TopContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  height: 60vh;
`;

const TopContentTextWrapper = styled.div`
  margin-left: 40%;
  padding: 1rem;
`;

const QuotedTextWrapping = styled.div``;

export default function LaunchInfo() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GetLaunch />
      </QueryClientProvider>
    </>
  );
}

function GetLaunch() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${id}/?format=json`
      ).then((res) => res.json()),
  });

  if (isLoading) return <EventMessage>Loading...</EventMessage>;

  if (error) return <EventMessage>An error has occurred</EventMessage>;

  const res: FetchSingleResult = data;
  console.log(res);
  return (
    <>
      <Header Heading={res.name} BackBtnVisable={true} />
      <Main>
        <TopContentWrapper>
          <Image src={res.image} alt={res.name} />
          <TopContentTextWrapper>
            <h2>Description:</h2>
            <q>{res.mission.description}</q>
          </TopContentTextWrapper>
        </TopContentWrapper>
      </Main>
    </>
  );
}
