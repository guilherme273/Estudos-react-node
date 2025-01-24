import conecction from "../database/database.js";
import { DataTypes } from "sequelize";

const Contact_Portifolio = conecction.define(
  "contact_portifolio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    contato: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    motivo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
  },
  {
    tableName: "contact_portifolio",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Contact_Portifolio;
