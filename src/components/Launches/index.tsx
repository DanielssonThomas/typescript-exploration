import { styled } from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "./ApiResponseTemplate";

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
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
      fetch("https://ll.thespacedevs.com/2.2.0/event/?format=json").then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  const res: FetchResult = data;

  return <pre>{JSON.stringify(res.results, null, 2)}</pre>;
}

export default Launches;
