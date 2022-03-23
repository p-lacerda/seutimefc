import { Request, Response } from 'express';
import ClubsService from '../services/ClubsService';

class ClubsController {
  static async getAll(req: Request, res: Response) {
    const clubs = await ClubsService.getAll();

    return res.status(200).json(clubs);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;

    const clubs = await ClubsService.getById(Number(id));

    return res.status(200).json(clubs);
  }
}

// export default userLogin;
export default ClubsController;
