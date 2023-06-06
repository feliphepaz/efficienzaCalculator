import { PaymentsProps } from "@/types/useData";

export interface Step1Props {
  payments: PaymentsProps[];
  monthsOfPayment: number;
  setMonthsOfPayment: (value: number) => void;
  comissionRates: number[];
  setComissionRates: (value: any) => void;
  taxRate: number;
  setTaxRate: (value: number) => void;
  nonPayments: number[];
  setNonPayments: (value: any) => void;
  setValidSteps: (value: boolean[]) => void;
}
