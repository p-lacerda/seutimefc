import { Model, DataTypes } from 'sequelize';
import db from '.';
import OtherModel from './Clubs';

class Matchs extends Model {
  // public <campo>!: <tipo>;
}

Matchs.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  home_team: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  home_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  away_team: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  away_team_goals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  in_progress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
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

OtherModel.belongsTo(Matchs, { foreignKey: 'id', as: 'id' });
// OtherModel.belongsTo(Matchs, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

Matchs.hasMany(OtherModel, { foreignKey: 'id', as: 'id' });
// Matchs.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Matchs;
