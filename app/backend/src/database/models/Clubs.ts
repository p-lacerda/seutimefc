import { Model, Sequelize } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Clubs extends Model {
  // public <campo>!: <tipo>;
}

const sequelize: any = Sequelize;

Clubs.init({
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    references: { model: 'matchs' },
  },
  clubName: {
    type: sequelize.STRING,
    allowNull: false,
    field: 'club_name',
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'clubs',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Clubs, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Clubs, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Clubs.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Clubs.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Clubs;
