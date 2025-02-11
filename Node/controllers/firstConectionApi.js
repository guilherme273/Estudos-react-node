import Express from "express";
import { where } from "sequelize";
import Movies from "../models/Movies.js";
const router = Express.Router();

router.get("/get-all-movies", async (req, res) => {
 try {
   const movies = await Movies.findAll();
    if(!movies)
    {
      res.status(400).json('error ao resgatar movies');
    } else {
      res.status(200).json(movies);
    }
 } catch (error) {
  
 }
});

router.post("/add-movie", async (req, res) => {
  const { 
    id,
    title,
    url,
    cover,
    category } = req.body;



  try {

    const existe = await Movies.findOne({where:{id:id}});

    if(existe)
    {
      return res.status(401).json({success:false, msg: "O video já existente no projeto!" });
    }

    const x = await Movies.create({
      id,
      title,
      url,
      cover,
      category
    });

    return res.status(201).json({ success:true, msg: "Video adicionado com sucesso!" });
  } catch (error) {
    console.log(error);
  }
});

export default router;

