import { SalaryProps } from "@/types/useData";

export interface Step2Props {
  salary: SalaryProps | null;
  setNumberOfSupervisors: (value: number) => void;
  setSupervisorSalary: (value: number) => void;
  setSupervisorComission: (value: number) => void;
  setNumberOfSellers: (value: number) => void;
  setSellerSalary: (value: number) => void;
  setSellerComission: (value: number) => void;
  setSales: (value: number) => void;
  setAverage: (value: number) => void;
  setNumberOfDays: (value: number) => void;
  setVTValue: (value: number) => void;
  setVRValue: (value: number) => void;
  setCharges: (value: number) => void;
  setValidSteps: (value: boolean[]) => void;
}
