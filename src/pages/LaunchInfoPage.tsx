import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/Header";

const Image = styled.img`
  width: 20vw;
  height: 15vh;
  object-fit: cover;
  object-position: center;
`;
const Return = styled.a`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 99%;
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

export default function LaunchInfoPage() {
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

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  const res: FetchSingleResult = data;
  console.log(res);
  return (
    <>
      <Header Heading={res.name} BackBtn={true} />
      <Image src={res.image} alt={res.name} />
    </>
  );
}
