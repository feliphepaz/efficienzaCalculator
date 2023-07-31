import {
  PaymentsProps,
  SalaryProps,
  BudgetProps,
  TotalsProps,
} from "@/types/useData";

export interface ResultProps {
  payments: PaymentsProps[];
  salary: SalaryProps | null;
  budget: BudgetProps | null;
  totals: TotalsProps | null;
  totalWithNoSales: number;
  setTotalWithNoSales: (value: number | null) => void;
  name: string;
  email: string;
  tel: string;
  howMeet: string;
  newsletterRegister: boolean;
  emailSended: boolean;
  setEmailSended: (value: boolean) => void;
}
