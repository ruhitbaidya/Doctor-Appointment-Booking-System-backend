import { z } from "zod";
import { db } from "../../../prisma/db";
import bcrypt from "bcrypt";

// ১. Validation schema
export const createUserSchema = z.object({
  email: z.string().email("সঠিক email দিন"),
  password: z.string().min(8, "Password কমপক্ষে ৮ অক্ষরের হতে হবে"),
  gender: z.string().min(1, "Gender দিতে হবে"),
  role: z.string().min(1, "Role দিতে হবে"),
  status: z.boolean().optional().default(true),
});

// ২. Type তৈরি
export type ICreateUser = z.infer<typeof createUserSchema>;

// ৩. User create function
const createUser = async (payload: ICreateUser) => {
  // Input validation
  const data = createUserSchema.parse(payload);

  // Password hash
  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    // Prisma 8: সরাসরি data object পাঠানো হয়
    const user = await db.orm.public.User.create({
      email: data.email,
      password: hashedPassword,
      gender: data.gender,
      role: data.role,
      status: data.status,
      isDelete: false,
    });

    // Password বাদ দিয়ে response
    const { password, ...safeUser } = user;

    return safeUser;
  } catch (error) {
    // PostgreSQL duplicate unique value error
    if (
      typeof error === "object" &&
      error !== null &&
      "sqlState" in error &&
      error.sqlState === "23505"
    ) {
      throw new Error("এই email দিয়ে আগে থেকেই user আছে");
    }

    throw error;
  }
};

export const UserService = {
  createUser,
};
