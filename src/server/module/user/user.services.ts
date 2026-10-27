import { db } from "../../../prisma/db";
import { config } from "../../config/config";
import type { IDoctor, Ipatient } from "./user.interface";
import bcrypt from "bcrypt"

const createDoctors = async(data:IDoctor)=>{

  const hashpass = await bcrypt.hash(data?.user.password, Number(config.salt_round))

  const result:any = await db.transaction(async (tx)=>{
      const userc = await tx.orm.public.User.create({
         email: data.user.email,
      password: hashpass,
      gender: data.user.gender,
      role: "DOCTOR",
      });

      const createdoct = await tx.orm.public.Doctors.create({
        Name: data.Name,
      description_degree: data.description_degree,
      description_treatment: data.description_treatment,
      profileImage: data.profileImage,
      contactNumber: data.contactNumber,
      regastationNumber: data.regastationNumber,
      address: data.address,
      appointmentsFee: data.appointmentsFee,
      current_work_place: data.current_work_place,
      dept_id: data.dept_id,
      userId: userc.id,
      })

      return {createdoct, userc}
  });

  return result
  // const usercreat = await db.orm.public.User.create(data.user);
}


const createPatient = async (data: Ipatient) => {
  const hashpass = await bcrypt.hash(
    data.userId.password,
    Number(config.salt_round)
  );

  const result = await db.transaction(async (tx) => {
    const userc = await tx.orm.public.User.create({
      email: data.userId.email,
      password: hashpass,
      gender: data.userId.gender,
      role: "patient", // সার্ভার নিজে বসাচ্ছে
    });

    const createdPatient = await tx.orm.public.Patients.create({
      Name: data.name,
      dateOfBirth: `${data.dateOfBirth}T00:00:00Z`,
      contactNumber: data.contactNumber,
      address: data.address,
      profilePhoto: data.profileImage,
      userId: userc.id,
    });

    const { password, ...safeUser } = userc;

    return { createdPatient, user: safeUser };
  });

  return result;
};

export const usersCreate = {
  createDoctors,
  createPatient
}