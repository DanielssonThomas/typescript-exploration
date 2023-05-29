type FetchMultipleResult = {
  count: number;
  next: string;
  previous: string | null;
  results: Result[];
};

type FetchSingleResult = {
  id: string;
  url: string;
  slug: string;
  flightclub_url: string | null;
  r_spacex_api_id: string | null;
  name: string;
  status: Status;
  updates: Update[];
  net: string;
  net_precision: NetPrecision;
  window_end: string;
  window_start: string;
  probability: number;
  holdreason: string;
  failreason: string;
  hashtag: string | null;
  launch_service_provider: LaunchServiceProvider;
  rocket: Rocket;
  mission: Mission;
  pad: Pad;
  infoURLs: InfoURL[];
  vidURLS: VidURL[];
  webcast_live: false;
  image: string;
  infographic: string | null;
  program: Program[];
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
  mission_patches: ProgramMissionPatches[];
};

type InfoURL = {
  priority: number;
  title: string;
  description: string | null;
  feature_image: string | null;
  url: string;
};

type VidURL = {
  priority: number;
  title: string;
  description: string | null;
  feature_image: string | null;
  url: string;
};

type Update = {
  id: number;
  profile_image: string;
  comment: string;
  info_url: string;
  created_by: string;
  created_on: string;
};

type Result = {
  id: string;
  url: string;
  name: string;
  status: Status;
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  net_precision: NetPrecision;
  probability: number;
  holdreason: string;
  failreason: string;
  hashtag: string | null;
  launch_service_provider: LaunchServiceProvider;
  webcast_live: boolean;
  image: string;
  infographic: string | null;
  program: Program;
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
};

type Status = {
  id: number;
  name: string;
  abbrev: string;
  description: string | null;
};

type NetPrecision = {
  id: number;
  name: string;
  abbrev: string;
  description: string | null;
};

type LaunchServiceProvider = {
  id: number;
  url: string;
  name: string;
  featured: boolean;
  type: string;
  country_code: string;
  abbrev: string;
  description: string;
  administrator: string;
  founding_year: number;
  launchers: string;
  spacecraft: string;
  launch_library_url: string;
  total_launch_count: string;
  consecutive_successful_launches: number;
  successful_launches: number;
  failed_launches: number;
  pending_launches: number;
  consecutive_successful_landings: number;
  successful_landings: number;
  failed_landings: number;
  attempted_landings: number;
  info_url: string;
  wiki_url: string;
  logo_url: string;
  image_url: string;
  nation_url: string;
};

type Rocket = {
  id: number;
  configuration: RocketConfiguration;
};

type RocketConfiguration = {
  id: number;
  url: string;
  name: string;
  family: string;
  full_name: string;
  variant: string;
};

type Mission = {
  id: number;
  name: string;
  description: string | null;
  launch_designator: string | null;
  type: string;
  orbit: MissionOrbit;
};

type MissionOrbit = {
  id: number;
  name: string;
  abbrev: string;
};

type Pad = {
  id: number;
  url: string;
  agency_id: number;
  name: string;
  info_url: string | null;
  wiki_url: string;
  map_url: string;
  latitude: string;
  longitude: string;
  location: PadLocation;
  country_code: string;
  map_image: string;
  total_launch_count: number;
  orbital_launch_attempt_count: number;
};

type PadLocation = {
  id: number;
  url: string;
  name: string;
  country_code: string;
  map_image: string;
  timezone_name: string;
  total_launch_count: number;
  total_landing_count: number;
};

type Program = {
  id: number;
  url: string;
  name: string;
  description: string | null;
  agencies: ProgramAgencies[];
  image_url: string;
  start_date: string;
  end_date: string | null;
  info_url: string;
  wiki_url: string;
  mission_patches: ProgramMissionPatches[];
};

type ProgramAgencies = {
  id: number;
  url: string;
  name: string;
  type: string;
};

type ProgramMissionPatches = {
  id: number;
  name: string;
  priority: number;
  image_url: string;
  agency: MissionPatchesAgency;
};

type MissionPatchesAgency = {
  id: number;
  url: string;
  name: string;
  type: string;
};
