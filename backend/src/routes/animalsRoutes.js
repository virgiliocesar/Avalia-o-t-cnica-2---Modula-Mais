//? file centralize routes
import express from "express";
import {
  getAnimals,
  createAnimals,
  updateAnimals,
  deleteAnimals,
} from "../controllers/animalsController.js";

const router = express.Router();
 
routerr.use("/", servicesRouter)
routerr.get("/", getAnimals);
routerr.post("/", createAnimals);
routerr.put("/:id", updateAnimals);
routerr.delete("/:id", deleteAnimals);

export default router;