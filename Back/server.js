import express from "express";
import Usuarios from "./controllers/firstConectionApi.js";
import Users from "./controllers/Usuarios.js";
import Likes from "./controllers/Likes.js";
import cors from "cors";
import { Sequelize } from "sequelize";
import conection from "./database/database.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/", Usuarios);
app.use("/", Users);
app.use("/", Likes);

app.listen(80, (e) => {
  try {
    if (!e) {
      console.log("Rodou na 80");
    }
    if (conection.authenticate()) {
      console.log("CONECTOU NO DB.");
    }
  } catch (e) {
    console.log(e);
  }
});
