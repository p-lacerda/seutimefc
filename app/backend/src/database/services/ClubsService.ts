import Clubs from '../models/Clubs';
// import { IUser } from '../interfaces/User';

class ClubsService {
  static async getAll(): Promise<any> {
    const clubs = await Clubs.findAll();

    return clubs;
  }

  static async getById(id: number): Promise<any> {
    const club = await Clubs.findByPk(id);

    return club;
  }
}

export default ClubsService;
