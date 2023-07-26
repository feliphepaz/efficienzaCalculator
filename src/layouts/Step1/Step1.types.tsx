export interface Step1Props {
  monthsOfPayment: number;
  setMonthsOfPayment: (value: number) => void;
  comissionRatesRaw: string[];
  setComissionRatesRaw: (value: any) => void;
  setComissionRates: (value: any) => void;
  taxRateRaw: string;
  setTaxRateRaw: (value: string) => void;
  setTaxRate: (value: number) => void;
  nonPaymentsRaw: string[];
  setNonPaymentsRaw: (value: any) => void;
  setNonPayments: (value: any) => void;
  setValidSteps: (value: boolean[]) => void;
}
