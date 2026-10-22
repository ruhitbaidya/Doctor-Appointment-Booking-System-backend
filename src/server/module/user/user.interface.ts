export interface IUser {
  id: string;
  email: string;
  password: string;
  gender: string;
  role: string;
  status: boolean;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}