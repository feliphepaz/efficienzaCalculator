import { ReactNode } from "react";

interface FirstTable {
  monthsOfPayment: number;
  commissionRate: number;
  taxRate: number;
  nonPayments: number[];
}

interface SecondTable {
  sales: number;
  average: number;
}

export interface TablesProps {
  firstTable: FirstTable;
  setFirstTable: (table: FirstTable) => void;
  secondTable: SecondTable;
  setSecondTable: (table: SecondTable) => void;
}

export interface AppContextProps {
  children: ReactNode;
}
