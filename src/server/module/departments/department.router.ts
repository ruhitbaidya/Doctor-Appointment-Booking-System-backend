import express from "express";
import { department } from "./department.controler";

const departmentRouter = express.Router();


departmentRouter.post("/department-create", department.createDepartment)
departmentRouter.get("/all-department", department.readllDepartment)
export default departmentRouter