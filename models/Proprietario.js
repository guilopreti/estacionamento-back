import { Sequelize, sequelize } from "./db.js";

const Proprietario = sequelize.define(
  "proprietario",
  {
    id_proprietario: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.TEXT,
    },
    cpf: {
      type: Sequelize.TEXT,
    },
  },
  { freezeTableName: true }
);

// Proprietario.sync({ force: true });

export default Proprietario;
