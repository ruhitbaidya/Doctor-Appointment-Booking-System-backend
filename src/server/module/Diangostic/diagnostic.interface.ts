export interface IDiagnosticCenter {
  fullName: string;
  phone: string;
  location: string;
  services: string[];
  servicesTime: string;
  images: string[];
  established: number;
}

export interface IUpdateDiagnosticCenter {
  fullName?: string;
  phone?: string;
  location?: string;
  services?: string[];
  servicesTime?: string;
  images?: string[];
  established?: number;
}