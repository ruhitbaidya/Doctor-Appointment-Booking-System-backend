import { db } from "../../../prisma/db";
import type { ICreateDoctorsShadule } from "./sheadule.interface";

const createDoctorsShadule = async (
  data: ICreateDoctorsShadule
) => {
  const result = await db.orm.public.DoctorsShadule.create({
    doct_id: data.doct_id,
    day: data.day,
    bookingTime: data.bookingTime,
    time_to_start: data.time_to_start,
    time_to_end: data.time_to_end,
    capacity: data.capacity,
  });

  return result;
};

export const DoctorsShaduleService = {
  createDoctorsShadule,
};