import express from "express";
import userRouter from "../module/user/user.router";
import departmentRouter from "../module/departments/department.router";

const rootRouter = express.Router();

const routes = [
  {
    path : "/",
    route : userRouter
  },
  {
    path : "/",
    route : departmentRouter
  }
]


routes.forEach((item)=> rootRouter.use(`/api/v1${item.path}`, item.route));

export default rootRouter



