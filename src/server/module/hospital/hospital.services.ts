import { db } from "../../../prisma/db";
import type { IHospital, IUpdateHospital } from "./hospital.interface";


// Create Hospital
const createHospital = async (data: IHospital) => {
  const result = await db.orm.public.Hospital.create({
    fullName: data.fullName,
    phone: data.phone,
    location: data.location,
    services: data.services,
    servicesTime: data.servicesTime,
    images: data.images,
    established: data.established,
  });

  return result;
};

// Get All Hospitals
const getAllHospitals = async () => {
  const result = await db.orm.public.Hospital.all();

  return result;
};

// Get Single Hospital
const getHospitalById = async (id: string) => {
  const result = await db.orm.public.Hospital
    .where({ id })
    .first();

  if (!result) {
    throw new Error("Hospital not found");
  }

  return result;
};

// Update Hospital
const updateHospital = async (
  id: string,
  data: IUpdateHospital
) => {
  const result = await db.orm.public.Hospital
    .where({ id })
    .update(data);

  if (!result) {
    throw new Error("Hospital not found");
  }

  return result;
};

// Delete Hospital
const deleteHospital = async (id: string) => {
  const result = await db.orm.public.Hospital
    .where({ id })
    .delete();

  if (!result) {
    throw new Error("Hospital not found");
  }

  return result;
};

export const HospitalService = {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
};