import type { Request, Response } from "express";
import { usersCreate } from "./user.services";


const createDoctors = async(req:Request, res:Response)=>{
    try{
      const result = await usersCreate.createDoctors(req.body);
      res.status(200).json({success: true, message: "doctors create success", result})
    }catch(err:any){
      res.status(401).json({success : false, message : "doctors create failed", data : err.message})
    }
}

const createPatient = async (req: Request, res: Response) => {
  try {
    const result = await usersCreate.createPatient(req.body);
    res.status(201).json({
      success: true,
      message: "patient create success",
      result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "patient create failed",
      data: err.message,
    });
  }
};

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await usersCreate.cerateAdmin(req.body);
    res.status(201).json({
      success: true,
      message: "Admin create success",
      result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "Admin create failed",
      data: err.message,
    });
  }
};
export const userControler = {
  createDoctors,
  createPatient,
  createAdmin
}