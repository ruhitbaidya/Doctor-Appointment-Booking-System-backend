
import { Router } from "express";
import { HospitalController } from "./hospital.controler";


const router = Router();

router.post(
  "/create-hospital",
  HospitalController.createHospital
);

router.get(
  "/get-hospital",
  HospitalController.getAllHospitals
);

router.get(
  "/get-hospital/:id",
  HospitalController.getHospitalById
);

router.patch(
  "/update-hospital/:id",
  HospitalController.updateHospital
);

router.delete(
  "/delete-hospital/:id",
  HospitalController.deleteHospital
);

export const HospitalRoutes = router;
