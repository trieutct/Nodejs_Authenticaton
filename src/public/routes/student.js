import  express  from "express";
import { detailsController, studentController } from "../../controller/studentController.js";
const router= express.Router()
router.get('/details',detailsController)
router.get('/',studentController)
export default router


