import type { Request, Response } from "express";


const createDoctors = async(req:Request, res:Response)=>{
    res.status(200).json(req.body)
}



export const userControler = {
  createDoctors
}