export interface IHospital {
  fullName: string;
  phone: string;
  location: string;
  services: string[];
  servicesTime: string;
  images: string[];
  established: number;
}

export interface IUpdateHospital {
  fullName?: string;
  phone?: string;
  location?: string;
  services?: string[];
  servicesTime?: string;
  images?: string[];
  established?: number;
}