import express from "express";
import auth from "../../midderware/auth.js";
import {
  detailUserController,
  UserController,
  createUserController,
  loginUserController,
} from "../../controller/userController.js";
const router = express.Router();
router.get("/details", detailUserController);
router.get("/", auth, UserController);
router.post("/create", createUserController);
router.post("/login", loginUserController);

// (req,res)=>{
//     res.send('detail')
// })

// ,(req,res)=>{
//     res.send('Userpage')
// })

export default router;
