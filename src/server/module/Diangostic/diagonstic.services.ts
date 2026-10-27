import { db } from "../../../prisma/db";
import type { IDiagnosticCenter, IUpdateDiagnosticCenter } from "./diagnostic.interface";


// Create
const createDiagnosticCenter = async (
  data: IDiagnosticCenter
) => {
  const result = await db.orm.public.DiagnosticCenter.create({
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

// Get all
const getAllDiagnosticCenters = async () => {
  const result = await db.orm.public.DiagnosticCenter.all();

  return result;
};

// Get single
const getDiagnosticCenterById = async (id: string) => {
  const result = await db.orm.public.DiagnosticCenter
    .where({ id })
    .first();

  if (!result) {
    throw new Error("Diagnostic center not found");
  }

  return result;
};

// Update
const updateDiagnosticCenter = async (
  id: string,
  data: IUpdateDiagnosticCenter
) => {
  const result = await db.orm.public.DiagnosticCenter
    .where({ id })
    .update(data);

  if (!result) {
    throw new Error("Diagnostic center not found");
  }

  return result;
};

// Delete
const deleteDiagnosticCenter = async (id: string) => {
  const result = await db.orm.public.DiagnosticCenter
    .where({ id })
    .delete();

  if (!result) {
    throw new Error("Diagnostic center not found");
  }

  return result;
};

export const DiagnosticCenterService = {
  createDiagnosticCenter,
  getAllDiagnosticCenters,
  getDiagnosticCenterById,
  updateDiagnosticCenter,
  deleteDiagnosticCenter,
};