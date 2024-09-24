//? file centralize routes
//? Services router
import router from "express";
import servicesRouter from "./services.js";
const routerr = router()
 
routerr.use("/", servicesRouter)

export default router