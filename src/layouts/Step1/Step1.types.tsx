import { PaymentsProps } from "@/types/useData";

export interface Step1Props {
  payments: PaymentsProps[];
  monthsOfPayment: number;
  setMonthsOfPayment: (value: number) => void;
  setComissionRates: (value: any) => void;
  setTaxRate: (value: number) => void;
  setNonPayments: (value: any) => void;
  setValidSteps: (value: boolean[]) => void;
}
