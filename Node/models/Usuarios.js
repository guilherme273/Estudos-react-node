import conecction from "../database/database.js";
import { DataTypes } from "sequelize";

const Usuarios = conecction.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    e_mail: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Usuarios;
