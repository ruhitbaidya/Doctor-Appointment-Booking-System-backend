
import { Router } from "express";
import { DiagnosticCenterController } from "./diagonostic.controler";


const router = Router();

router.post(
  "/create-diagnostic",
  DiagnosticCenterController.createDiagnosticCenter
);

router.get(
  "/get-diagnostic",
  DiagnosticCenterController.getAllDiagnosticCenters
);

router.get(
  "/diagnostic/:id",
  DiagnosticCenterController.getDiagnosticCenterById
);

router.patch(
  "/update-diagnostic/:id",
  DiagnosticCenterController.updateDiagnosticCenter
);

router.delete(
  "/delete-diagnostic/:id",
  DiagnosticCenterController.deleteDiagnosticCenter
);

export const DiagnosticCenterRoutes = router;
