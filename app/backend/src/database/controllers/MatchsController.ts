import { Request, Response } from 'express';
import Matchs from '../services/MatchsService';

class MatchsController {
  static async getAll(req: Request, res: Response) {
    const { query } = req;
    let matchs;

    if (query) {
      const stringToBoolean = (query.inProgress === 'true');
      matchs = await Matchs.getAllByParams(stringToBoolean);
    }

    if (Object.values(query).length === 0) {
      matchs = await Matchs.getAll();
    }

    return res.status(200).json(matchs);
  }

  static async create(req:Request, res:Response) {
    const { body } = req;
    const match = await Matchs.create(body);
    return res.status(200).json(match);
  }
}

export default MatchsController;
