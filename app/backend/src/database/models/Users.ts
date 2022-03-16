import { Model, Sequelize } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Users extends Model {
  // public <campo>!: <tipo>;
}

const sequelize: any = Sequelize;

Users.init({
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: sequelize.VARCHAR(25),
    allowNull: false,
  },
  role: {
    type: sequelize.VARCHAR(10),
    allowNull: false,
  },
  email: {
    type: sequelize.VARCHAR(80),
    allowNull: false,
  },
  password: {
    type: sequelize.VARCHAR(25),
    allowNull: false,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Users, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Users, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Users.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Users.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Users;
