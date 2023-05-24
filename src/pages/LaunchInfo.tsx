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
  position: fixed;
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
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const TopContentWrapper = styled.section`
  width: 90vw;
  height: 88vh;
  overflow: hidden;
`;

const TopContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40%;
  padding: 1rem;
`;

const DetailsContainer = styled.div`
  width: 100vw;
  height: auto;
  padding: 1rem;
  background-color: #242424;
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Table = styled.table`
  width: 90vw;
  margin-bottom: 2rem;
  text-align: left;
`;

const TableHead = styled.thead`
  border-bottom: 1px solid white;
`;

const TableHeader = styled.th`
  font-size: xx-large;
`;

const TableRow = styled.tr`
  height: 4rem;
`;

const TableData = styled.td`
  width: 80%;
  padding: 1rem;
  border-bottom: 1px solid white;
`;

const TableDataType = styled.td`
  width: 20%;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
`;

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
          <TopContentContainer>
            <div>
              <h2>Description:</h2>
              <q>{res.mission.description}</q>
            </div>
            <div>
              <h2>Launch service provider:</h2>
              <p>{res.launch_service_provider.name}</p>
            </div>
            <div>
              <h2>Launch pad:</h2>
              <p>{res.pad.name}</p>
            </div>
            <div>
              <h2>Location:</h2>
              <p>{res.pad.location.name}</p>
            </div>
            <div>
              <h2>Window start and end date:</h2>
              <p>
                {res.window_start} - {res.window_end}
              </p>
            </div>
          </TopContentContainer>
        </TopContentWrapper>

        <DetailsContainer>
          <DetailsWrapper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Details:</TableHeader>
                </TableRow>
              </TableHead>

              <tbody>
                <TableRow>
                  <TableDataType>Name</TableDataType>
                  <TableData>{res.name}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Image url</TableDataType>
                  <TableData>{res.image}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Fail reason</TableDataType>
                  <TableData>{res.failreason}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Flight club</TableDataType>
                  <TableData>{res.flightclub_url}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Hold reason</TableDataType>
                  <TableData>{res.holdreason}</TableData>
                </TableRow>
              </tbody>
            </Table>

            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Mission:</TableHeader>
                </TableRow>
              </TableHead>

              <tbody>
                <TableRow>
                  <TableDataType>Description</TableDataType>
                  <TableData>{res.mission.description}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Launch designator</TableDataType>
                  <TableData>{res.mission.launch_designator}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Name</TableDataType>
                  <TableData>{res.mission.name}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Type</TableDataType>
                  <TableData>{res.mission.type}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Orbit name</TableDataType>
                  <TableData>{res.mission.orbit.name}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Orbit abbreviation</TableDataType>
                  <TableData>{res.mission.orbit.abbrev}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Id</TableDataType>
                  <TableData>{res.mission.id}</TableData>
                </TableRow>
              </tbody>
            </Table>

            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Pad</TableHeader>
                </TableRow>
              </TableHead>

              <tbody>
                <TableRow>
                  <TableDataType>Name</TableDataType>
                  <TableData>{res.pad.name}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Location name</TableDataType>
                  <TableData>{res.pad.location.name}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Country code</TableDataType>
                  <TableData>{res.pad.country_code}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Wiki url</TableDataType>
                  <TableData>
                    <a href={res.pad.wiki_url}>{res.pad.wiki_url}</a>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Longitude</TableDataType>
                  <TableData>{res.pad.longitude}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Latitude</TableDataType>
                  <TableData>{res.pad.latitude}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Map url</TableDataType>
                  <TableData>
                    <a href={res.pad.map_url}>{res.pad.map_url}</a>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Orbital launch attempt count</TableDataType>
                  <TableData>{res.pad.orbital_launch_attempt_count}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Total launch count</TableDataType>
                  <TableData>{res.pad.total_launch_count}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Agency id</TableDataType>
                  <TableData>{res.pad.agency_id}</TableData>
                </TableRow>
              </tbody>
            </Table>
          </DetailsWrapper>
        </DetailsContainer>
      </Main>
    </>
  );
}
