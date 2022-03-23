import Matchs from '../models/Matchs';
import Clubs from '../models/Clubs';
// import InProgress from '../interfaces/Matchs';

class MatchsService {
  static async getAllByParams(booleanInProgress: any): Promise<any> {
    const matchs: Matchs[] = await Matchs.findAll({
      where: { inProgress: booleanInProgress },
      attributes: { exclude: ['home_team', 'away_team'] },
      include: [
        { model: Clubs,
          as: 'awayClub',
          attributes: ['clubName'] },
        { model: Clubs,
          as: 'homeClub',
          attributes: ['clubName'] },
      ],
    });

    return matchs;
  }

  static async getAll(): Promise<any> {
    const matchs: Matchs[] = await Matchs.findAll({
      attributes: { exclude: ['home_team', 'away_team'] },
      include: [
        { model: Clubs,
          as: 'awayClub',
          attributes: ['clubName'] },
        { model: Clubs,
          as: 'homeClub',
          attributes: ['clubName'] },
      ],
    });

    return matchs;
  }

  static async create(data: any): Promise<any> {
    const match = await Matchs.create(data);
    return match;
  }

  static async createFinishedMatch(content: any, id: number): Promise<any> {
    await Matchs.update(
      {
        content,
      },
      {
        where: { id },
      },
    );

    const updatedMatch = await Matchs.findByPk(id);

    return updatedMatch;
  }
}

export default MatchsService;
