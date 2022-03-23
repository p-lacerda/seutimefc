import { Model, Sequelize } from 'sequelize';
import db from '.';
import Clubs from './Clubs';

class Matchs extends Model {
  // public <campo>!: <tipo>;
}

const sequelize: any = Sequelize;

Matchs.init({
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: {
    type: sequelize.INTEGER,
    allowNull: false,
    field: 'home_team',
    references: {
      model: 'clubs',
      key: 'id',
    },
  },
  homeTeamGoals: {
    type: sequelize.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
  },
  awayTeam: {
    type: sequelize.INTEGER,
    allowNull: false,
    field: 'away_team',
    references: {
      model: 'clubs',
      key: 'id',
    },
  },
  awayTeamGoals: {
    type: sequelize.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
  },
  inProgress: {
    type: sequelize.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'matchs',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Matchs.belongsTo(Clubs, { foreignKey: 'home_team', as: 'homeClub' });
Matchs.belongsTo(Clubs, { foreignKey: 'away_team', as: 'awayClub' });
// OtherModel.belongsTo(Matchs, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

Clubs.hasMany(Matchs, { foreignKey: 'home_team', as: 'matchHome' });
Clubs.hasMany(Matchs, { foreignKey: 'away_team', as: 'matchAway' });
// Matchs.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Matchs;
