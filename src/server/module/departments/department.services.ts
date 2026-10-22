import { db } from "../../../prisma/db";
import type { IDepertment } from "./department.interface";


const departmentServices = async(data:IDepertment)=>{
  const result = await db.orm.public.Department.create(data)
  return result;
}

const readalldocument = async()=>{
  const result = await db.orm.public.Department.all();
  return result;
}

export const departmentser = {
  departmentServices,
  readalldocument
}