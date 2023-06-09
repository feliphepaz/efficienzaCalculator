import { PaymentsProps, SalaryProps, TotalsProps } from "@/types/useData";

export interface PDFProps {
  payments: PaymentsProps[];
  salary: SalaryProps | null;
  totals: TotalsProps | null;
  totalWithNoSales: number;
  setTotalWithNoSales: (value: number | null) => void;
}
