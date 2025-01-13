import Express from "express";
import Usuarios from "../models/Usuarios.js";
import { where } from "sequelize";
const router = Express.Router();

router.get("/usuarios", async (req, res) => {
  try {
    const { id, nome, idade, e_mail } = req.query;

    const whereConditions = Object.fromEntries(
      Object.entries({ id, nome, idade, e_mail }).filter(
        ([key, value]) => value
      )
    );

    const usuarios = await Usuarios.findAll({
      where: whereConditions,
    });

    return res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Erro na busca de usuários" });
  }
});

router.post("/usuarios", async (req, res) => {
  const { nome, idade, e_mail } = req.body;

  try {
    const usuario = await Usuarios.create({
      nome: nome,
      idade: idade,
      e_mail: e_mail,
    });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(404);
  }
});

router.put("/usuarios", async (req, res) => {
  const { nome, idade, e_mail } = req.body;
  const { id } = req.query;
  console.log(id);
  try {
    await Usuarios.update(
      {
        nome: nome,
        idade: idade,
        e_mail: e_mail,
      },
      { where: { id: id } }
    );

    res
      .status(201)
      .json({ message: "Usuário Adicionado Com Sucesso", nome, idade, e_mail });
  } catch (error) {
    res.status(404);
  }
});

router.get("/get-action-movies", async (req, res) => {
  const movies = [
    {
      id: "B_nq7VTJZds",
      title: "As paisagens do mundo",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/default.jpg",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
    },
    {
      id: "8PjBddZ2cdo",
      title: "Paisagens e suas transformações",
      cover: "https://img.youtube.com/vi/8PjBddZ2cdo/default.jpg",
      url: "https://www.youtube.com/watch?v=8PjBddZ2cdo",
    },
    {
      id: "yqZsBn5Z1xc",
      title: "Paisagem Geográfica e Espaço Geográfico",
      cover: "https://img.youtube.com/vi/yqZsBn5Z1xc/default.jpg",
      url: "https://www.youtube.com/watch?v=yqZsBn5Z1xc",
    },
    {
      id: "ee15tCw1kYo",
      title: "Espaço, Lugar e Território",
      cover: "https://img.youtube.com/vi/ee15tCw1kYo/default.jpg",
      url: "https://www.youtube.com/watch?v=ee15tCw1kYo",
    },
    {
      id: "YzBkkC2SXxM",
      title: "Formas de representação da Terra: os mapas",
      cover: "https://img.youtube.com/vi/YzBkkC2SXxM/default.jpg",
      url: "https://www.youtube.com/watch?v=YzBkkC2SXxM",
    },
  ];

  res.status(200).json(movies);
});
router.get("/get-all-movies", async (req, res) => {
  const movies = [
    {
      id: "B_nq7VTJZds1",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds2",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds3",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds4",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds5",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds6",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds7",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds8",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds9",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds10",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "B_nq7VTJZds",
      title: "As paisagens do mundo",
      url: "https://www.youtube.com/watch?v=B_nq7VTJZds",
      cover: "https://img.youtube.com/vi/B_nq7VTJZds/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "8PjBddZ2cdo",
      title: "As paisagens e suas transformações",
      url: "https://www.youtube.com/watch?v=8PjBddZ2cdo",
      cover: "https://img.youtube.com/vi/8PjBddZ2cdo/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "yqZsBn5Z1xc",
      title: "Paisagem Geográfica e Espaço Geográfico",
      url: "https://www.youtube.com/watch?v=yqZsBn5Z1xc",
      cover: "https://img.youtube.com/vi/yqZsBn5Z1xc/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "ee15tCw1kYo",
      title: "Espaço, Lugar e Território",
      url: "https://www.youtube.com/watch?v=ee15tCw1kYo",
      cover: "https://img.youtube.com/vi/ee15tCw1kYo/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "QUc_M1b1uNE",
      title: "Orientação e Localização",
      url: "https://www.youtube.com/watch?v=QUc_M1b1uNE",
      cover: "https://img.youtube.com/vi/QUc_M1b1uNE/maxresdefault.jpg",
      category: "Geografia",
      isFavorite: false,
    },
    {
      id: "YzBkkC2SXxM",
      title: "Formas de representação da Terra: os mapas",
      cover: "https://img.youtube.com/vi/YzBkkC2SXxM/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=YzBkkC2SXxM",
      category: "Geografia",
      isFavorite: false,
    },

    {
      id: "zBVCW8xc19Q",
      title: "Como fazer Globo Terrestre",
      url: "https://www.youtube.com/watch?v=zBVCW8xc19Q",
      cover: "https://img.youtube.com/vi/zBVCW8xc19Q/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "pYG6MUbLnVY",
      title: "Como fazer bússola",
      url: "https://www.youtube.com/watch?v=pYG6MUbLnVY",
      cover: "https://img.youtube.com/vi/pYG6MUbLnVY/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "pvFy8PhJ-sY",
      title: "Como fazer Jogo da Memória de Orientação em Geografia",
      url: "https://www.youtube.com/watch?v=pvFy8PhJ-sY",
      cover: "https://img.youtube.com/vi/pvFy8PhJ-sY/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "Cy7Y8Jmdw8w",
      title: "Como fazer Jogo da Memória impresso",
      url: "https://www.youtube.com/watch?v=Cy7Y8Jmdw8w",
      cover: "https://img.youtube.com/vi/Cy7Y8Jmdw8w/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "AeHMawcMxVQ",
      title: "Produzir maquete em EVA",
      url: "https://www.youtube.com/watch?v=AeHMawcMxVQ",
      cover: "https://img.youtube.com/vi/AeHMawcMxVQ/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "1PZIVrYUIhI",
      title: "Extra 01 - Como usar o Google Earth",
      url: "https://www.youtube.com/watch?v=1PZIVrYUIhI",
      cover: "https://img.youtube.com/vi/1PZIVrYUIhI/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "70LgFtkVfzY",
      title: "Extra 02 - App Merge Explorer",
      url: "https://www.youtube.com/watch?v=70LgFtkVfzY",
      cover: "https://img.youtube.com/vi/70LgFtkVfzY/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "UerCpbS4KJk",
      title: "Como fazer Papel Machê para fazer maquetes e outros fins",
      url: "https://www.youtube.com/watch?v=UerCpbS4KJk",
      cover: "https://img.youtube.com/vi/UerCpbS4KJk/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "j93GpAPaLx8",
      title: "Como fazer Maquetes do Relevo e Hidrografia",
      url: "https://www.youtube.com/watch?v=j93GpAPaLx8",
      cover: "https://img.youtube.com/vi/j93GpAPaLx8/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "zddTZjpEOxA",
      title: "Como pintar Maquetes do Relevo e Hidrografia",
      url: "https://www.youtube.com/watch?v=zddTZjpEOxA",
      cover: "https://img.youtube.com/vi/zddTZjpEOxA/maxresdefault.jpg",
      category: "Como fazer e usar",
    },
    {
      id: "2JTPUXqWEKg",
      title: "A Terra no Sistema Solar",
      url: "https://www.youtube.com/watch?v=2JTPUXqWEKg",
      cover: "https://img.youtube.com/vi/2JTPUXqWEKg/maxresdefault.jpg",
      category: "Astronomia e Geografia",
    },
    {
      id: "_hvwmwCIbSA",
      title: "A Terra em movimento Rotação e Translação",
      url: "https://www.youtube.com/watch?v=_hvwmwCIbSA",
      cover: "https://img.youtube.com/vi/_hvwmwCIbSA/maxresdefault.jpg",
      category: "Astronomia e Geografia",
    },
    {
      id: "1lZDLyMKwwE",
      title: "A circulação geral da atmosfera, o tempo e o clima",
      url: "https://www.youtube.com/watch?v=1lZDLyMKwwE",
      cover: "https://img.youtube.com/vi/1lZDLyMKwwE/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "V-v3wTK_KpI",
      title: "As intervenções humanas na dinâmica climáticas",
      url: "https://www.youtube.com/watch?v=V-v3wTK_KpI",
      cover: "https://img.youtube.com/vi/V-v3wTK_KpI/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "11NJB81im1Q",
      title: "Ciclones, Furacões, Tufões e Tornados",
      url: "https://www.youtube.com/watch?v=11NJB81im1Q",
      cover: "https://img.youtube.com/vi/11NJB81im1Q/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "bhQsWpGSLeQ",
      title: "Os climas e a vegetação natural",
      url: "https://www.youtube.com/watch?v=bhQsWpGSLeQ",
      cover: "https://img.youtube.com/vi/bhQsWpGSLeQ/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "oYZZybbhJII",
      title: "Os climas do mundo e do Brasil",
      url: "https://www.youtube.com/watch?v=oYZZybbhJII",
      cover: "https://img.youtube.com/vi/oYZZybbhJII/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "tnFEqmtoNY8",
      title: "Terra: Grandes paisagens vegetais naturais",
      url: "https://www.youtube.com/watch?v=tnFEqmtoNY8",
      cover: "https://img.youtube.com/vi/tnFEqmtoNY8/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "of5e0QO6BtY",
      title: "GEOGRAFIA Chuvas na Bahia em dezembro de 2021 e suas causas",
      url: "https://www.youtube.com/watch?v=of5e0QO6BtY",
      cover: "https://img.youtube.com/vi/of5e0QO6BtY/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "PY4VyxfefqY",
      title: "GEOGRAFIA Chuvas no litoral norte de São Paulo 2023",
      url: "https://www.youtube.com/watch?v=PY4VyxfefqY",
      cover: "https://img.youtube.com/vi/PY4VyxfefqY/maxresdefault.jpg",
      category: "Climatologia, Meteorologia, Vegetação",
    },
    {
      id: "cp_xDdMT6eU",
      title: "Litosfera e Relevo Continental",
      url: "https://www.youtube.com/watch?v=cp_xDdMT6eU",
      cover: "https://img.youtube.com/vi/cp_xDdMT6eU/maxresdefault.jpg",
      category: "Geologia e Hidrografia",
    },
    {
      id: "3XPAx3aQ760",
      title: "Relevo Continental e Agentes Externos",
      url: "https://www.youtube.com/watch?v=3XPAx3aQ760",
      cover: "https://img.youtube.com/vi/3XPAx3aQ760/maxresdefault.jpg",
      category: "Geologia e Hidrografia",
    },
    {
      id: "QWBDmGd9t4s",
      title: "A Hidrosfera e a distribuição das águas",
      url: "https://www.youtube.com/watch?v=QWBDmGd9t4s",
      cover: "https://img.youtube.com/vi/QWBDmGd9t4s/maxresdefault.jpg",
      category: "Geologia e Hidrografia",
    },
    {
      id: "4ADuk1kY6Vw",
      title: "GEOGRAFIA Terremoto na Turquia e na Síria 2023",
      url: "https://www.youtube.com/watch?v=4ADuk1kY6Vw",
      cover: "https://img.youtube.com/vi/4ADuk1kY6Vw/maxresdefault.jpg",
      category: "Geologia e Hidrografia",
    },
  ];

  res.status(200).json(movies);
});

export default router;
