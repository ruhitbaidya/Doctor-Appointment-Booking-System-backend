import express from "express";
import { userControler } from "./user.controler";


const userRouter = express.Router();


userRouter.post("/create-doctors", userControler.createDoctors)


export default userRouter