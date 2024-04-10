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
    leagueRecord: LeagueRecord
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