import Express from "express";
import Usuarios from "../models/Usuarios.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import tokenismo from "../env.js";

const router = Express.Router();

router.post("/register", async (req, res) => {
  const { name, e_mail, password } = req.body;
  console.log(name, e_mail, password);

  try {
    const existeUser = await Usuarios.findOne({ where: { e_mail: e_mail } });
    if (existeUser) {
      return res.status(401).json({ msg: "Email já Cadastrado" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassowrd = await bcrypt.hash(password, salt);

    const Created = await Usuarios.create({
      name: name,
      e_mail: e_mail,
      password: hashPassowrd,
    });

    if (Created) {
      return res.status(201).json(Created);
    } else {
      res.status(404).json("Erro na requisição, contate o suporte");
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json("Chame o suporte");
  }
});

router.post("/login", async (req, res) => {
  const { e_mail, password } = req.body;

  try {
    const User = await Usuarios.findOne({ where: { e_mail: e_mail } });
    if (!User) {
      return res.status(401).json("Usuário não econtrado");
    }

    const isMath = await bcrypt.compare(password, User.password);

    if (!isMath) {
      return res.status(401).json("Senha Inválida");
    }

    const token = jwt.sign(
      { id: User.id, e_mail: User.e_mail, name: User.name },
      "tokenismo",
      { expiresIn: "1m" }
    );

    return res
      .status(200)
      .json({ token: token, msg: "Login bem sucedido", user: User });
  } catch (error) {
    console.log(error);
    return res.status(401).json("Chame o suporte");
  }
});

export default router;
