import express from "express";
import Usuarios from "./controllers/firstConectionApi.js";
import Contact_Portifolio from "./controllers/Contact.js";
import Users from "./controllers/Usuarios.js";
import Likes from "./controllers/Likes.js";
import cors from "cors";
import { Sequelize } from "sequelize";
import conection from "./database/database.js";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/", Usuarios);
app.use("/", Users);
app.use("/", Likes);
app.use("/", Contact_Portifolio);

app.listen(80, async () => {
  try {
    // Tentando autenticar a conexão com o bancoss
    await conection.authenticate();
    console.log("CONECTOU NO DB.");

    // Sincroniza as tabelas com o banco
    await conection.sync({ force: false }); // Use 'true' se você quiser recriar as tabelas
    console.log("Tabelas sincronizadas com sucesso!");

    // Se não houver erro, o servidor está rodando na porta 80
    console.log("Rodou na 80");
  } catch (err) {
    console.error("Erro ao conectar ou sincronizar:", err);
  }
});
