import express from "express";
import { UserService } from "./user.controler";

const userRouter = express.Router();


userRouter.post("/create-user", UserService.createUser)


export default userRouter