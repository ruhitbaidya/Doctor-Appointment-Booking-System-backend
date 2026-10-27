import express from "express";
import userRouter from "../module/user/user.router";
import departmentRouter from "../module/departments/department.router";
import shaduleRouter from "../module/sheadule/sheadule.router";
import { DiagnosticCenterRoutes } from "../module/Diangostic/diagnostic.router";
import { HospitalRoutes } from "../module/hospital/hospital.router";

const rootRouter = express.Router();

const routes = [
  {
    path : "/",
    route : userRouter
  },
  {
    path : "/",
    route : departmentRouter
  },
  {
    path : "/",
    route : shaduleRouter
  },

  {
    path: "/",
    route : DiagnosticCenterRoutes
  },
  {
    path : "/",
    route : HospitalRoutes
  }
]


routes.forEach((item)=> rootRouter.use(`/api/v1${item.path}`, item.route));

export default rootRouter



