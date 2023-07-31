export interface Step2Props {
  monthsOfPayment: number;
  numberOfSupervisors: number;
  setNumberOfSupervisors: (value: number) => void;
  supervisorComissionRaw: string[];
  setSupervisorComissionRaw: (value: any) => void;
  setSupervisorComission: (value: any) => void;
  numberOfSellers: number;
  setNumberOfSellers: (value: number) => void;
  sellerComissionRaw: string[];
  setSellerComissionRaw: (value: any) => void;
  setSellerComission: (value: any) => void;
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
