import type { Request, Response } from "express";
import { DiagnosticCenterService } from "./diagonstic.services";



const createDiagnosticCenter = async (
  req: Request,
  res: Response
) => {
  const result = await DiagnosticCenterService.createDiagnosticCenter(
    req.body
  );

  res.status(201).json({
    success: true,
    message: "Diagnostic center created successfully",
    data: result,
  });
};

const getAllDiagnosticCenters = async (
  req: Request,
  res: Response
) => {
  const result =
    await DiagnosticCenterService.getAllDiagnosticCenters();

  res.status(200).json({
    success: true,
    message: "Diagnostic centers retrieved successfully",
    data: result,
  });
};

const getDiagnosticCenterById = async (
  req: Request,
  res: Response
) => {
  const result =
    await DiagnosticCenterService.getDiagnosticCenterById(
      req.params.id as string
    );

  res.status(200).json({
    success: true,
    message: "Diagnostic center retrieved successfully",
    data: result,
  });
};

const updateDiagnosticCenter = async (
  req: Request,
  res: Response
) => {
  const result =
    await DiagnosticCenterService.updateDiagnosticCenter(
      req.params.id as string,
      req.body
    );

  res.status(200).json({
    success: true,
    message: "Diagnostic center updated successfully",
    data: result,
  });
};

const deleteDiagnosticCenter = async (
  req: Request,
  res: Response
) => {
  const result =
    await DiagnosticCenterService.deleteDiagnosticCenter(
      req.params.id as string
    );

  res.status(200).json({
    success: true,
    message: "Diagnostic center deleted successfully",
    data: result,
  });
};

export const DiagnosticCenterController = {
  createDiagnosticCenter,
  getAllDiagnosticCenters,
  getDiagnosticCenterById,
  updateDiagnosticCenter,
  deleteDiagnosticCenter,
};
