import { SalaryProps } from "@/types/useData";

export interface Step2Props {
  salary: SalaryProps | null;
  numberOfSupervisors: number;
  setNumberOfSupervisors: (value: number) => void;
  supervisorComission: number;
  setSupervisorComission: (value: number) => void;
  numberOfSellers: number;
  setNumberOfSellers: (value: number) => void;
  sellerComission: number;
  setSellerComission: (value: number) => void;
  sales: number;
  setSales: (value: number) => void;
  average: number;
  setAverage: (value: number) => void;
  numberOfDays: number;
  setNumberOfDays: (value: number) => void;
  charges: number;
  setCharges: (value: number) => void;
  setValidSteps: (value: boolean[]) => void;
}
