export interface ICreateDoctorsShadule {
  doct_id: string;
  day: number;
  bookingTime: string;
  time_to_start: string;
  time_to_end: string;
  capacity: number;
}