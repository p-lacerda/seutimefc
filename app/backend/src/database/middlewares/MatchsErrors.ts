import { NextFunction, Request, Response } from 'express';
import ClubsService from '../services/ClubsService';

const isTeamDuplicated = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams' });
  }
  next();
};

const isInProgress = (req: Request, res: Response, next: NextFunction) => {
  const { inProgress } = req.body;

  if (inProgress === false) {
    return res.status(401).json({ message: 'It is not possible create a finished match' });
  }

  next();
};

const isAValidTeam = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  const clubs = await ClubsService.getAll();

  const isClubsExists = (team: number) => clubs.some((club: any) =>
    club.id === Number(team));

  if (isClubsExists(homeTeam) === false
    || isClubsExists(awayTeam) === false || homeTeam === null || awayTeam === null) {
    return res.status(401).json({ message: 'There is no team with such id!' });
  }

  next();
};

export { isTeamDuplicated, isAValidTeam, isInProgress };
