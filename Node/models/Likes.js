import conecction from "../database/database.js";
import { DataTypes } from "sequelize";

const Likes = conecction.define(
  "likes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    id_movie: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "likes",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Likes;
