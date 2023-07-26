export interface Step2Props {
  numberOfSupervisors: number;
  setNumberOfSupervisors: (value: number) => void;
  supervisorComissionRaw: string;
  setSupervisorComissionRaw: (value: string) => void;
  setSupervisorComission: (value: number) => void;
  numberOfSellers: number;
  setNumberOfSellers: (value: number) => void;
  sellerComissionRaw: string;
  setSellerComissionRaw: (value: string) => void;
  setSellerComission: (value: number) => void;
  sales: number;
  setSales: (value: number) => void;
  average: number;
  setAverage: (value: number) => void;
  growthRaw: string;
  setGrowthRaw: (value: string) => void;
  setGrowth: (value: number) => void;
  numberOfDays: number;
  setNumberOfDays: (value: number) => void;
  chargesRaw: string;
  setChargesRaw: (value: string) => void;
  setCharges: (value: number) => void;
  setValidSteps: (value: boolean[]) => void;
}
