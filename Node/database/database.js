// import senhadb from "../env";
import Sequelize from "sequelize";

const conection = new Sequelize("my_data_base", "root", "Senha123!", {
  host: "localhost",
  dialect: "mysql",
});

export default conection;
