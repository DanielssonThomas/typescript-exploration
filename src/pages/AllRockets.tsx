import { styled } from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "../components/Launches/ApiResponseTemplate";
import Card from "../components/LaunchCard";
import { useState } from "react";

const EventMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  width: 100vw;
`;

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100vw;
  padding-bottom: 80px;
`;

function GetLaunches() {
  const [selectedProvider, setSelectedProvider] = useState("");

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", selectedProvider],
    queryFn: () =>
      fetch(
        `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json&limit=100&offset=10`
      ).then((res) => res.json()),
  });

  if (isLoading) return <EventMessage>Loading...</EventMessage>;

  if (error) return <EventMessage>An error has occurred</EventMessage>;

  const res: FetchResult = data;

  let allProviders: string[] = [];

  res.results.forEach((result) => {
    if (
      result.launch_service_provider.name &&
      !allProviders.includes(result.launch_service_provider.name)
    ) {
      allProviders.push(result.launch_service_provider.name);
    }
  });

  const handleProviderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvider(e.target.value);
  };

  const filteredResults = res.results.filter(
    (result) =>
      selectedProvider === "" ||
      result.launch_service_provider.name.includes(selectedProvider)
  );

  const Cards: any = [];

  filteredResults.forEach((result) => {
    Cards.push(
      <Card
        key={result.id}
        name={result.name}
        image={result.image}
        start_date={result.window_start}
        end_date={result.window_end}
        id={result.id}
        provider={result.launch_service_provider.name}
      />
    );
  });

  return (
    <StyledLayout>
      <select value={selectedProvider} onChange={handleProviderChange}>
        <option value="">All Providers</option>
        {allProviders.map((provider) => (
          <option key={provider} value={provider}>
            {provider}
          </option>
        ))}
      </select>
      {Cards}
    </StyledLayout>
  );
}

const Launches = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GetLaunches />
    </QueryClientProvider>
  );
};

export default Launches;
