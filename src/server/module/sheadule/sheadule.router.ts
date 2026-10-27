import express from "express";
import { doctorSheadule } from "./sheadule.controler";


const shaduleRouter = express.Router();


shaduleRouter.post("/create-doctor-sheadule", doctorSheadule.createDoctorsShadule);


export default shaduleRouter