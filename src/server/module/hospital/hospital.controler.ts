import type { Request, Response } from "express";
import { HospitalService } from "./hospital.services";


const createHospital = async (
  req: Request,
  res: Response
) => {
  const result = await HospitalService.createHospital(req.body);

  res.status(201).json({
    success: true,
    message: "Hospital created successfully",
    data: result,
  });
};

const getAllHospitals = async (
  req: Request,
  res: Response
) => {
  const result = await HospitalService.getAllHospitals();

  res.status(200).json({
    success: true,
    message: "Hospitals retrieved successfully",
    data: result,
  });
};

const getHospitalById = async (
  req: Request,
  res: Response
) => {
  const result = await HospitalService.getHospitalById(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message: "Hospital retrieved successfully",
    data: result,
  });
};

const updateHospital = async (
  req: Request,
  res: Response
) => {
  const result = await HospitalService.updateHospital(
    req.params.id as string,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Hospital updated successfully",
    data: result,
  });
};

const deleteHospital = async (
  req: Request,
  res: Response
) => {
  const result = await HospitalService.deleteHospital(
    req.params.id as string
  );

  res.status(200).json({
    success: true,
    message: "Hospital deleted successfully",
    data: result,
  });
};

export const HospitalController = {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
};
