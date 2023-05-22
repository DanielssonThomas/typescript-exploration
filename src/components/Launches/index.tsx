import { styled } from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./ApiResponseTemplate";
import Card from "../LaunchCard";

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100vw;
`;

const Launches = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StyledLayout>
        <GetLaunches />
      </StyledLayout>
    </QueryClientProvider>
  );
};

function GetLaunches() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json"
      ).then((res) => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  const res: FetchResult = data;

  const Cards: any = [];

  res.results.forEach((result) => {
    Cards.push(
      <Card
        name={result.name}
        image={result.image}
        start_date={result.window_start}
        end_date={result.window_end}
        id={result.id}
      />
    );
  });
  return Cards;
}

export default Launches;
