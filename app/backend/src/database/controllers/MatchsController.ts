import { Request, Response } from 'express';
import { MatchsCreated } from '../interfaces/Matchs';
import MatchsService from '../services/MatchsService';

class MatchsController {
  static async getAll(req: Request, res: Response) {
    const { query } = req;
    let matchs;

    if (query) {
      const stringToBoolean = (query.inProgress === 'true');
      matchs = await MatchsService.getAllByParams(stringToBoolean);
    }

    if (Object.values(query).length === 0) {
      matchs = await MatchsService.getAll();
    }

    res.status(200).json(matchs);
  }

  static async create(req:Request, res:Response) {
    const {
      homeTeam, awayTeam, inProgress, awayTeamGoals, homeTeamGoals,
    } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(401).json({
        message: 'It is not possible to create a match with two equal teams' });
    }

    const userMatchReceived = {
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: inProgress === undefined ? true : inProgress,
    };

    const match: MatchsCreated = await MatchsService.create(userMatchReceived);
    res.status(201).json(match);
  }

  static async createFinishedMatch(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const match = await MatchsService.createFinishedMatch(Number(id));

    res.status(200).json(match);
  }

  static async edit(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const userMatchReceived = {
      homeTeamGoals, awayTeamGoals,
    };

    const editedMatch = await MatchsService.edit(Number(id), userMatchReceived);

    res.status(200).json(editedMatch);
  }
}

export default MatchsController;
