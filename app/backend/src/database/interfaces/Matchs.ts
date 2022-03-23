interface InProgress {
  inProgress: string,
}

interface MatchsCreated {
  id: number,
  homeTeam: number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean
}

export { InProgress, MatchsCreated };
