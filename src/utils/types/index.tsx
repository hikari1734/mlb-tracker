import { StringLiteral } from "typescript";

export interface Status {
  abstractGameCode: string;
  abstractGameState: string;
  codedGameState: string;
  detailedState: string;
  startTimeTBD: boolean;
  statusCode: string;
}

export interface LeagueRecord {
  wins: number;
  losses: number;
  pct: string;
}

export interface Team {
  id: number;
  link: string;
  name: string;
}

export interface AwayHomeTeam {
  leagueRecord: LeagueRecord;
  score: number;
  seriesNumber: number;
  splitSquad: boolean;
  team: Team;
}

export interface Teams {
  away: AwayHomeTeam;
  home: AwayHomeTeam;
}

export interface Venue {
  id: number;
  link: string;
  name: string;
}

export interface Games {
  calendarEventId: string;
  content: {
    link: string;
  };
  dayNight: string;
  doubleHeader: string;
  gameDate: string;
  gameGuid: string;
  gameNumber: string;
  gamePk: string;
  gameType: string;
  gamedayType: string;
  gamesInSeries: string;
  ifNecessary: string;
  ifNecessaryDescription: string;
  inningBreakLength: string;
  link: string;
  officialDate: string;
  publicFacing: boolean;
  recordSource: string;
  reverseHomeAwayStatus: boolean;
  scheduledInnings: number;
  season: string;
  seasonDisplay: string;
  seriesDescription: string;
  seriesGameNumber: number;
  status: Status;
  teams: Teams;
  tiebreaker: string;
  venue: Venue;
}

export interface Dates {
  date: string;
  events: [];
  games: Games[];
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  totalItems: number;
}

export interface ScheduledGames {
  copyright: string;
  dates: Dates[];
  totalEvents: number;
  totalGames: number;
  totalGamesInProgress: number;
  totalItems: number;
}

export interface DateTime {
  ampm: string;
  dateTime: string;
  dayNight: string;
  officialDate: string;
  originalDate: string;
  time: string;
}

export interface Flags {
  awayTeamNoHitter: boolean;
  awayTeamPerfectGame: boolean;
  homeTeamNoHitter: boolean;
  homeTeamPerfectGame: boolean;
  noHitter: boolean;
  perfectGame: boolean;
}

export interface Game {
  calendarEventID: string;
  doubleHeader: string;
  gameNumber: number;
  pk: number;
  season: string;
  seasonDisplay: string;
  tiebreaker: string;
  type: string;
}

export interface GameInfo {
  firstPitch: string;
}

export interface MoundVisitsUsedRemaining {
  used: number;
  remaining: number;
}

export interface MoundVisits {
  away: MoundVisitsUsedRemaining;
  home: MoundVisitsUsedRemaining;
}

export interface Venu {
  id: number;
  link: string;
  name?: string;
}

export interface Person {
  fullName: string;
  id: number;
  link: string;
}

export interface Player {
  active: boolean;
  batSide: { code: string; description: string };
  birthCity: string;
  birthCountry: string;
  birthDate: string;
  boxscoreName: string;
  currentAge: string;
  firstLastName: string;
  firstName: string;
  fullFMLName: string;
  fullLFMName: string;
  fullName: string;
  gender: string;
  height: string;
  id: number;
  initLastName: string;
  isPlayer: boolean;
  isVerified: boolean;
  lastFirstName: string;
  lastInitName: string;
  lastName: string;
  link: string;
  mlbDebutDate: string;
  nameFirstLast: string;
  nameSlug: string;
  nickName: string;
  pitchHand: { code: string; description: string };
  primaryNumber: string;
  primaryPosition: {
    code: string;
    name: string;
    type: string;
    abbreviation: string;
  };
  strikeZoneBottom: number;
  strikeZoneTop: number;
  useLastName: string;
  useName: string;
  weight: string;
}

export interface Review {
  away: { used: number; remaining: number };
  hasChallenges: boolean;
  home: { used: number; remaining: number };
}

export interface Weather {
  condition: string;
  temp: string;
  wind: string;
}

export interface GameData {
  alerts: [];
  datetime: DateTime;
  flage: Flags;
  game: Game;
  gameInfo: GameInfo;
  moundVisits: MoundVisits;
  officialScorer: Person;
  officialVenu: Venu;
  players: Player;
  primaryDatacaster: Person;
  probablePitchers: { away: Person; home: Person };
  review: Review;
  status: Status;
  teams: Teams;
  venue: Venue;
  weather: Weather;
}

export interface Official {
  official: Person;
  officialType: string;
}

export interface LiveTeamData {
  batters: number[];
  battingOrder: number[];
  bench: number[];
  bullpen: number[];
  info: { fieldList: { label: string; value: string }; title: string }[];
  note: { label: string; value: string }[];
  pitchers: number[];
  players: {};
  team: {};
  teamStats: {};
}

export interface TopPerformers {
  gameScore: number;
  hittingGameScore: number;
  player: {};
  type: string;
}

export interface BoxScore {
  info: { label: string; value: string }[];
  officials: Official[];
  pitchingNotes: [];
  teams: { away: LiveTeamData; home: LiveTeamData };
  topPerformers: TopPerformers[];
}

export interface TeamOffenseStats {
  runs: number;
  hits: number;
  errors: number;
  leftOnBase: number;
}

export interface Inning {
  away: TeamOffenseStats;
  home: TeamOffenseStats;
  num: number;
  ordinalNum: string;
}

export interface Defense {
  batter: Person;
  battingOrder: number;
  catcher: Person;
  center: Person;
  first: Person;
  inHole: Person;
  left: Person;
  onDeck: Person;
  pitcher: Person;
  right: Person;
  second: Person;
  shortstop: Person;
  team: Person;
  third: Person;
  inningHalf: string;
  inningState: string;
}

export interface Offense {
  batter: Person;
  battingOrder: number;
  inHole: Person;
  onDeck: Person;
  pitcher: Person;
  team: Venue;
}

export interface LineScore {
  balls: number;
  currentInning: number;
  currentInningOrdinal: string;
  defense: Defense;
  innings: Inning[];
  isTopInning: boolean;
  offense: Offense;
  outs: number;
  scheduledInnings: number;
  strikes: number;
  teams: {
    away: TeamOffenseStats;
    home: TeamOffenseStats;
  };
}

export interface Plays {
  allPlays: [];
  currentPlay: {};
  playsByInning: [];
  scoringPlays: number[];
}

export interface LiveData {
  boxscore: BoxScore;
  leaders: { hitDistance: {}; hitSpeed: {}; pitchSpeed: {} };
  linescore: LineScore;
  plays: Plays;
}

export interface MetaData {
  gameEvents: string[];
  logicalEvents: [];
  timeStamp: string;
  wait: number;
}

export interface LiveGame {
  copyright: string;
  gameData: GameData;
  gamePk: number;
  link: string;
  liveData: LiveData;
  metaData: MetaData;
}
