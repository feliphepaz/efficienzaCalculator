import { PaymentsProps, TotalsProps } from "@/types/useData";

export interface ResultProps {
  payments: PaymentsProps[];
  totals: TotalsProps | null;
}
