import express from "express";
import {
  addHero,
  getHeroes,
  getHeroesById,
  updateHero,
  deleteHero
} from "../controllers/HeroController.js";

const router = new express.Router();

router.get("/hero", getHeroes);
router.get("/hero/:id", getHeroesById);
router.post("/hero",addHero);
router.patch("/hero/:id", updateHero); 
router.delete("/hero/:id", deleteHero);

export default router;
