import Express from "express";
import Contact_Portifolio from "../models/Contact_Portifolio.js";
import { where } from "sequelize";
import { check, validationResult } from "express-validator";
import { rateLimit } from "express-rate-limit";
const router = Express.Router();
const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  message:
    "Foi detectado atitude suspeita e as suas requisições foram suspensas. Tente novamente mais tarde!",
});

router.post(
  "/contact",
  contactRateLimiter,
  [
    check("nome")
      .notEmpty()
      .withMessage("O nome é obrigatório.")
      .isLength({ max: 50 })
      .withMessage("O nome deve ter no máximo 50 caracteres."),
    check("contato")
      .notEmpty()
      .withMessage("O contato é obrigatório.")
      .isLength({ max: 100 })
      .withMessage("O contato deve ter no máximo 100 caracteres."),
    check("motivo")
      .notEmpty()
      .withMessage("O motivo é obrigatório.")
      .isLength({ max: 100 })
      .withMessage("O motivo deve ter no máximo 100 caracteres."),
    check("descricao")
      .notEmpty()
      .withMessage("A descrição é obrigatória.")
      .isLength({ max: 500 })
      .withMessage("A descrição deve ter no máximo 500 caracteres."),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      nome,
      contato,
      motivo,
      descricao,
      "g-recaptcha-response": token,
    } = req.body;
    const secretKey = "6LeKpMEqAAAAALrvi0Zv_eMXd6dl_Nn-NoEWfW9s";
    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();

      if (!data.success) {
        return res
          .status(400)
          .json({ msg: "Falha na validação do reCAPTCHA." });
      }
    } catch (error) {
      console.log(error);
    }
    try {
      const result = await Contact_Portifolio.create({
        nome,
        contato,
        motivo,
        descricao,
      });

      if (result) {
        res.status(200).json({ nome });
      } else {
        res.status(400).json({ msg: "Não foi Possivel Concluir a Ação" });
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export default router;
