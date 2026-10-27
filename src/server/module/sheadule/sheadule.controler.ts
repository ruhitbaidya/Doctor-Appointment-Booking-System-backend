import type { Request, Response } from "express";
import { DoctorsShaduleService } from "./sheadule.services";

const createDoctorsShadule = async (
  req: Request,
  res: Response
) => {
  try {
    const result =
      await DoctorsShaduleService.createDoctorsShadule(
        req.body
      );

    res.status(201).json({
      success: true,
      message: "Doctor schedule created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create doctor schedule",
      error:
        error instanceof Error
          ? error.message
          : "Unknown error",
    });
  }
};

export const doctorSheadule = {
  createDoctorsShadule
}