import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import UpdateCard from "../components/UpdateCard";

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

const TableContainer = styled.div`
  width: 100vw;
  height: auto;
  padding: 1rem;
  background-color: #242424;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Table = styled.table`
  width: 90vw;
  margin: 0 10vw 2rem 10vw;
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
  padding-left: 1rem;
`;

const UpdatesWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
  background-color: #242424;
`;

const UpdatesContainer = styled.div`
  width: 92vw;
`;

const UpdatesH2 = styled.h2`
  font-size: xx-large;
  margin-left: 1rem;
`;

const UpdatesLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
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
  const { isLoading, error, data } = useQuery<FetchSingleResult>({
    queryKey: ["singleLaunchData"],
    queryFn: () =>
      fetch(
        `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${id}/?format=json`
      ).then((res) => res.json()),
  });

  if (isLoading || !data) return <EventMessage>Loading...</EventMessage>;

  if (error) return <EventMessage>An error has occurred</EventMessage>;

  const RenderUpdateCards = () => {
    const UpdateCards: JSX.Element[] = [];
    data.updates.forEach((update) => {
      UpdateCards.push(
        <UpdateCard
          key={update.id}
          id={update.id}
          profile_image={update.profile_image}
          comment={update.comment}
          created_by={update.created_by}
          created_on={update.created_on}
          info_url={update.info_url}
        />
      );
    });
    return UpdateCards;
  };

  return (
    <>
      <Main>
        <TopContentWrapper>
          <Image src={data.image} alt={data.name} />
          <TopContentContainer>
            <div>
              <h2>Description:</h2>
              <q>{data.mission.description}</q>
            </div>
            <div>
              <h2>Launch service provider:</h2>
              <p>{data.launch_service_provider.name}</p>
            </div>
            <div>
              <h2>Launch pad:</h2>
              <p>{data.pad.name}</p>
            </div>
            <div>
              <h2>Location:</h2>
              <p>{data.pad.location.name}</p>
            </div>
            <div>
              <h2>Window start date:</h2>
              <p>
                {data.window_start.split("T")[0]}
                {(() => {
                    const currentDate = new Date();
                    const startDate = new Date(data.window_start);
                    const timeDiff = startDate.getTime() - currentDate.getTime();
                    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
                    const hoursDiff = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
                    
                    return ` - (${daysDiff} days, ${hoursDiff} hours remaining)`;
                })()}
              </p>
            </div>
          </TopContentContainer>
        </TopContentWrapper>

        <TableContainer>
          <TableWrapper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Details:</TableHeader>
                </TableRow>
              </TableHead>

              <tbody>
                <TableRow>
                  <TableDataType>Name</TableDataType>
                  <TableData>{data.name || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Image url</TableDataType>
                  <TableData>{data.image || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Fail reason</TableDataType>
                  <TableData>{data.failreason || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Flight club</TableDataType>
                  <TableData>{data.flightclub_url || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Hold reason</TableDataType>
                  <TableData>{data.holdreason || "No data"}</TableData>
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
                  <TableData>{data.mission.description || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Launch designator</TableDataType>
                  <TableData>
                    {data.mission.launch_designator || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Name</TableDataType>
                  <TableData>{data.mission.name || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Type</TableDataType>
                  <TableData>{data.mission.type || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Orbit name</TableDataType>
                  <TableData>{data.mission.orbit.name || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Orbit abbreviation</TableDataType>
                  <TableData>
                    {data.mission.orbit.abbrev || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Id</TableDataType>
                  <TableData>{data.mission.id || "No data"}</TableData>
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
                  <TableData>{data.pad.name || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Location name</TableDataType>
                  <TableData>{data.pad.location.name || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Country code</TableDataType>
                  <TableData>{data.pad.country_code || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Wiki url</TableDataType>
                  <TableData>
                    <a href={data.pad.wiki_url}>
                      {data.pad.wiki_url || "No data"}
                    </a>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Longitude</TableDataType>
                  <TableData>{data.pad.longitude || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Latitude</TableDataType>
                  <TableData>{data.pad.latitude || "No data"}</TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Map url</TableDataType>
                  <TableData>
                    <a href={data.pad.map_url}>
                      {data.pad.map_url || "No data"}
                    </a>
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Orbital launch attempt count</TableDataType>
                  <TableData>
                    {data.pad.orbital_launch_attempt_count || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Total launch count</TableDataType>
                  <TableData>
                    {data.pad.total_launch_count || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Agency id</TableDataType>
                  <TableData>{data.pad.agency_id || "No data"}</TableData>
                </TableRow>
              </tbody>
            </Table>

            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Agency</TableHeader>
                </TableRow>
              </TableHead>

              <tbody>
                <TableRow>
                  <TableDataType>Name</TableDataType>
                  <TableData>
                    {data.launch_service_provider.name || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Name abbreviation</TableDataType>
                  <TableData>
                    {data.launch_service_provider.abbrev || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Administrator</TableDataType>
                  <TableData>
                    {data.launch_service_provider.administrator || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Founding year</TableDataType>
                  <TableData>
                    {data.launch_service_provider.founding_year || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Description</TableDataType>
                  <TableData>
                    {data.launch_service_provider.description || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Launchers</TableDataType>
                  <TableData>
                    {data.launch_service_provider.launchers || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Attempted landings</TableDataType>
                  <TableData>
                    {data.launch_service_provider.attempted_landings ||
                      "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Successful landings</TableDataType>
                  <TableData>
                    {data.launch_service_provider.successful_landings ||
                      "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Consecutive successful landings</TableDataType>
                  <TableData>
                    {data.launch_service_provider
                      .consecutive_successful_landings || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Failed landings</TableDataType>
                  <TableData>
                    {data.launch_service_provider.failed_landings || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Consecutive successful launches</TableDataType>
                  <TableData>
                    {data.launch_service_provider
                      .consecutive_successful_launches || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Failed launches</TableDataType>
                  <TableData>
                    {data.launch_service_provider.failed_launches || "No data"}
                  </TableData>
                </TableRow>

                <TableRow>
                  <TableDataType>Launch attempts</TableDataType>
                  <TableData>
                    {data.agency_launch_attempt_count || "No data"}
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableDataType>Launch attempts this year</TableDataType>
                  <TableData>
                    {data.agency_launch_attempt_count_year || "No data"}
                  </TableData>
                </TableRow>
              </tbody>
            </Table>
          </TableWrapper>
        </TableContainer>

        <UpdatesWrapper>
          <UpdatesContainer>
            <UpdatesH2>Updates</UpdatesH2>

            <UpdatesLayout>{RenderUpdateCards()}</UpdatesLayout>
          </UpdatesContainer>
        </UpdatesWrapper>
      </Main>
    </>
  );
}
