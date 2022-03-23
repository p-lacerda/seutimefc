import { NextFunction, Request, Response } from 'express';
import ClubsService from '../services/ClubsService';
import MatchsService from '../services/MatchsService';

const isAValidTeam = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  const clubs = await ClubsService.getAll();

  const isClubsExists = (team: number) => clubs.some((club: any) =>
    club.id === Number(team));

  if (isClubsExists(homeTeam) === false
    || isClubsExists(awayTeam) === false || homeTeam === undefined || awayTeam === undefined) {
    return res.status(401).json({ message: 'There is no team with such id!' });
  }

  next();
};

const isTheIdExists = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const matchs = await MatchsService.getAll();

  const isMatchExists = matchs.some((match: any) =>
    match.id === Number(id));

  if (id === null || isMatchExists === false) {
    return res.status(401).json({ message: 'There is no match with such id!' });
  }

  next();
};

export { isAValidTeam, isTheIdExists };
