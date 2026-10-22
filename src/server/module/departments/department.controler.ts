import type { Request, Response } from "express";
import { departmentser } from "./department.services";


const createDepartment = async(req:Request, res:Response)=>{
try{
    const result = await departmentser.departmentServices(req.body);
  res.status(200).json({message: "this user create is successfull",result})
}catch(err:any){
  res.status(400).json({message: "User create failed", msg : err.message})
}
}
const readllDepartment = async(req:Request, res:Response)=>{
  try{
    const result = await departmentser.readalldocument();
  res.status(200).json({message: "Found All Departments",result})
}catch(err:any){
  res.status(400).json({message: "something went wrong", msg : err.message})
}
}

export const department = {
  createDepartment,
  readllDepartment
}