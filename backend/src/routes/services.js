import router from "express";
import servicesController from "../controllers/servicesController.js";
const routerr = router()

routerr.route("/service").post((req, res) => servicesController.create(req, res));


export default router