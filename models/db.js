import Sequelize from "sequelize";

//Conexão com o banco de dados
const sequelize = new Sequelize("estacionamento", "guilherme", "123456", {
  host: "localhost",
  dialect: "postgresql",
});

//Vamos exportar as variáveis
export { Sequelize, sequelize };
