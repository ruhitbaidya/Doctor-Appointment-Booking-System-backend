import express from "express";
import userRouter from "../module/user/user.router";

const rootRouter = express.Router();

const routes = [
  {
    path : "/",
    route : userRouter
  }
]


routes.forEach((item)=> rootRouter.use(`/api/v1${item.path}`, item.route));

export default rootRouter



