import { Request, Response } from 'express';
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

    return res.status(200).json(matchs);
  }

  static async create(req:Request, res:Response) {
    const { body } = req;
    const match = await MatchsService.create(body);
    return res.status(200).json(match);
  }

  static async createFinishedMatch(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { body } = req;
    const match = await MatchsService.createFinishedMatch(body, Number(id));

    res.status(200).json(match);
  }
}

export default MatchsController;
