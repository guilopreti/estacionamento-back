import { Sequelize, sequelize } from "./db.js";

const Veiculo = sequelize.define(
  "veiculo",
  {
    id_veiculo: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    placa: {
      type: Sequelize.TEXT,
    },
    ano: {
      type: Sequelize.INTEGER,
    },
    mensalidade: {
      type: Sequelize.DECIMAL(10, 2),
    },
    fk_proprietario: {
      type: Sequelize.INTEGER,
      references: { model: "proprietario", key: "id_proprietario" },
      onDelete: "CASCADE",
      allowNull: false,
    },
  },
  { freezeTableName: true }
);

// Veiculo.sync({ force: true });

export default Veiculo;
