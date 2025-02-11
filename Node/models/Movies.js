import conecction from "../database/database.js";
import { DataTypes } from "sequelize";

const Movies = conecction.define(
  "movies",
  {
    id: {
      type: DataTypes.TEXT,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cover: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "movies",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Movies;
