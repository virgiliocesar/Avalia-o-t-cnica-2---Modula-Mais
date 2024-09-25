//? file centralize routes
import express from "express";
import {
  getAnimals,
  createAnimals,
  updateAnimals,
  deleteAnimals,
} from "../controllers/animalsController.js";

const router = express.Router();

router.get("/", getAnimals);
router.post("/", createAnimals);
router.put("/:id", updateAnimals);
router.delete("/:id", deleteAnimals);

export default router;