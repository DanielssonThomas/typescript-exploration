import { styled } from "styled-components";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import "../components/Launches/ApiResponseTemplate";
import Card from "../components/LaunchCard";
import { useState, useEffect } from "react";

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100vw;
  padding-bottom: 80px;
`;

const MoreCards = styled.a`
  position: absolute;
  width: 40%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
const Button = styled.button`
  width: 100%;
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

function GetLaunches() {
  const [selectedProvider, setSelectedProvider] = useState("");
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json&search=${selectedProvider}`
      ).then((res) => res.json()),
  });


  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  const res: FetchResult = data;


  
  
 
  let allProviders: string[] = [];

  res.results.forEach((result) => {
    if (!allProviders.includes(result.launch_service_provider.name)) {
      allProviders.push(result.launch_service_provider.name);
    }
  });

  const filteredResults = res.results.filter(
    (result) =>
      selectedProvider === "" ||
      result.launch_service_provider.name === selectedProvider
  );
  

  
  const Cards: any = [];

  res.results.forEach((result) => {
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
  const handleProviderChange = (e:any) => {
    setSelectedProvider(e.target.value);
  };
  return (
    <div>
      <select value={selectedProvider} onChange={handleProviderChange}>
        <option value="">All Providers</option>
        {allProviders.map((provider) => (
          <option key={provider} value={provider}>
            {provider}
          </option>
        ))}
      </select>
      {Cards}
    </div>
  );
}

const Launches = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StyledLayout>
        <GetLaunches />
      </StyledLayout>
      <MoreCards href="allRockets">
        <Button>More Rockets</Button>
      </MoreCards>
    </QueryClientProvider>
  );
};


export default Launches;
