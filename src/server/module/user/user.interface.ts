interface IUser {
  email: string;
  password: string;
  gender: string;
  role: string;
}

export type IDoctor = {
  Name: string;
  description_degree: string;
  description_treatment: string;
  profileImage: string;
  contactNumber: string;
  regastationNumber: string;
  address: string;
  appointmentsFee: number;
  current_work_place: string;
  dept_id: string;
  user: IUser;
}

export type Ipatient = {
  userId: Omit<IUser, "role">; // role ইনপুট থেকে নেওয়া হবে না
  name: string;
  dateOfBirth: string; // "YYYY-MM-DD"
  contactNumber: string;
  address: string;
  profileImage: string; // schema-তে profilePhoto বাধ্যতামূলক, তাই এখানেও
};