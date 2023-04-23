import { ReactNode } from "react";

interface FirstTable {
  monthsOfPayment: number;
}

export interface TablesProps {
  firstTable: FirstTable;
  setFirstTable: (table: FirstTable) => void;
}

export interface AppContextProps {
  children: ReactNode;
}
