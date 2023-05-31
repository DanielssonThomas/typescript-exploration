import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import UpdateCard from "../components/UpdateCard";
import Table from "../components/LaunchTable";

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
  const { id } = useParams<string>();
  const { isLoading, error, data } = useQuery<FetchSingleResult>({
    queryKey: ["singleLaunchData"],
    queryFn: () =>
      fetch(
        `https://lldev.thespacedevs.com/2.2.0/launch/upcoming/${id}/?format=json`
      ).then((res) => res.json()),
  });

  if (isLoading || !data) return <EventMessage>Loading...</EventMessage>;

  if (error) return <EventMessage>An error has occurred</EventMessage>;

  const RenderUpdateCards = (): JSX.Element[] => {
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

  const Details: Row[] = [
    {
      label: "name",
      value: data.name,
    },
    {
      label: "image_url",
      value: data.image,
    },
    {
      label: "flightclub_url",
      value: data.flightclub_url,
    },
    {
      label: "holdreason",
      value: data.holdreason,
    },
  ];

  const Mission: Row[] = [
    {
      label: "Description",
      value: data.mission.description,
    },
    {
      label: "Launch Designator",
      value: data.mission.launch_designator,
    },
    {
      label: "Name",
      value: data.mission.name,
    },
    {
      label: "Type",
      value: data.mission.type,
    },
    {
      label: "Orbit Name",
      value: data.mission.orbit.name,
    },
    {
      label: "Orbit abbreviation",
      value: data.mission.orbit.abbrev,
    },
  ];

  const Pad: Row[] = [
    {
      label: "Name",
      value: data.pad.name,
    },
    {
      label: "Location Name",
      value: data.pad.location.name,
    },
    {
      label: "Country code",
      value: data.pad.location.country_code,
    },
    {
      label: "Wiki url",
      value: data.pad.wiki_url,
    },
    {
      label: "Longitude",
      value: data.pad.longitude,
    },
    {
      label: "Latitude",
      value: data.pad.latitude,
    },
    {
      label: "Map url",
      value: data.pad.map_url,
    },
    {
      label: "Orbital launch attempt count",
      value: data.pad.orbital_launch_attempt_count,
    },
    {
      label: "Total launch count",
      value: data.pad.total_launch_count,
    },
  ];

  const Agency: Row[] = [
    {
      label: "Name",
      value: data.launch_service_provider.name,
    },
    {
      label: "Name abbreviation",
      value: data.launch_service_provider.abbrev,
    },
    {
      label: "Administrator",
      value: data.launch_service_provider.administrator,
    },
    {
      label: "Founding year",
      value: data.launch_service_provider.founding_year,
    },
    {
      label: "Description",
      value: data.launch_service_provider.description,
    },
    {
      label: "Launchers",
      value: data.launch_service_provider.launchers,
    },
    {
      label: "Attempted landings",
      value: data.launch_service_provider.attempted_landings,
    },
    {
      label: "Successful landings",
      value: data.launch_service_provider.successful_landings,
    },
    {
      label: "Consecutive successful landings",
      value: data.launch_service_provider.consecutive_successful_landings,
    },
    {
      label: "Failed landings",
      value: data.launch_service_provider.failed_landings,
    },
    {
      label: "Consecutive successful launches",
      value: data.launch_service_provider.consecutive_successful_launches,
    },
    {
      label: "Failed launches",
      value: data.launch_service_provider.failed_launches,
    },
    {
      label: "Launch attempts",
      value: data.agency_launch_attempt_count,
    },
    {
      label: "Launch attempts this year",
      value: data.agency_launch_attempt_count_year,
    },
  ];

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
                {((): string => {
                  const currentDate: Date = new Date();
                  const startDate: Date = new Date(data.window_start);
                  const timeDiff: number =
                    startDate.getTime() - currentDate.getTime();
                  const daysDiff: number = Math.floor(
                    timeDiff / (1000 * 3600 * 24)
                  );
                  const hoursDiff: number = Math.floor(
                    (timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)
                  );

                  return ` - (${daysDiff} days, ${hoursDiff} hours remaining)`;
                })()}
              </p>
            </div>
          </TopContentContainer>
        </TopContentWrapper>

        <TableContainer>
          <TableWrapper>
            <Table label="Details" rowData={Details} />
            <Table label="Mission" rowData={Mission} />
            <Table label="Pad" rowData={Pad} />
            <Table label="Agency" rowData={Agency} />
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
