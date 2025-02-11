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

export default router;

