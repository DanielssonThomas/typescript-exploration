type FetchResult = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
};

type Result = {
  id: number;
  url: string;
  slug: string;
  name: string;
  updates: any[];
  type: FetchResultType;
  description: string;
  webcast_live: boolean;
  location: string;
  news_url: string | null;
  video_url: string | null;
  feature_image: string;
  date: string;
  date_precision: string | null;
  launches: Launch[];
  expeditions: any[];
  spacestations: any[];
  program: any[];
};

type FetchResultType = {
  id: number;
  name: string;
};

type Launch = {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: LaunchStatus;
  last_updated: string;
  net: string;
  window_end: string;
  window_start: string;
  net_precision?: string;
  holdreason?: string;
  failreason?: string;
  hashtag: string;
  launch_service_provider: LaunchServiceProvider;
  rocket: LaunchRocket;
  mission: LaunchMission;
  pad: LaunchPad;
  webcast_live: boolean;
  image: string;
  infographic?: string;
  program: LaunchProgram;
  orbital_launch_attempt_count: number;
  location_launch_attempt_count: number;
  pad_launch_attempt_count: number;
  agency_launch_attempt_count: number;
  orbital_launch_attempt_count_year: number;
  location_launch_attempt_count_year: number;
  pad_launch_attempt_count_year: number;
  agency_launch_attempt_count_year: number;
};

type LaunchProgram = {
  id: number;
  url: string;
  name: string;
  description: string;
  agencies: LaunchProgramAgencies[];
  image_url: string;
  start_date?: string;
  end_date?: string;
  info_url?: string;
  wiki_url?: string;
  mission_patches: LaunchProgramMissionPatches;
};

type LaunchProgramAgencies = {
  id: number;
  url: string;
  name: string;
  type: string;
};

type LaunchProgramMissionPatches = {
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

type LaunchStatus = {
  id: number;
  name: string;
  abbrev: string;
  description: string;
};

type LaunchServiceProvider = {
  id: number;
  url: string;
  name: string;
  type: string;
};

type LaunchRocket = {
  id: number;
  configuration: LaunchRocketConfig;
};

type LaunchRocketConfig = {
  id: number;
  url: string;
  name: string;
  family: string;
  full_name: string;
  variant: string;
};

type LaunchMission = {
  id: number;
  name: string;
  description: string;
  launch_designator?: string;
  type: string;
  orbit: LaunchMissionOrbit;
};

type LaunchMissionOrbit = {
  id: number;
  name: string;
  abbrev: string;
};

type LaunchPad = {
  id: number;
  url: string;
  agency_id?: number;
  name: string;
  info_url?: string;
  wiki_url?: string;
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
  total_landing_count: 0;
};
