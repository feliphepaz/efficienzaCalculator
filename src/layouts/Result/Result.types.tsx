import { PaymentsProps, SalaryProps, TotalsProps } from "@/types/useData";

export interface ResultProps {
  payments: PaymentsProps[];
  salary: SalaryProps | null;
  totals: TotalsProps | null;
  totalWithNoSales: number;
  setTotalWithNoSales: (value: number | null) => void;
}
