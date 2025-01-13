import Express from "express";
import Usuarios from "../models/Usuarios.js";
import Likes from "../models/Likes.js";
import { where } from "sequelize";
const router = Express.Router();

router.post("/like", async (req, res) => {
  const { id_user, id_movie } = req.body;

  try {
    const x = await Likes.create({
      id_user: id_user,
      id_movie: id_movie,
    });

    return res.status(201).json({ msg: "Liked" });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/like", async (req, res) => {
  const { id_user, id_movie } = req.body;

  try {
    const x = await Likes.destroy({
      where: {
        id_user: id_user,
        id_movie: id_movie,
      },
    });

    return res.status(201).json({ msg: "destroyed" });
  } catch (error) {
    console.log(error);
  }
});

router.get("/like", async (req, res) => {
  const id_user = req.query.iduser;

  try {
    const data = await Likes.findAll({ where: { id_user: id_user } });

    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
});

export default router;
