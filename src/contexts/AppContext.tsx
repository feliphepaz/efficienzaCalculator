import { createContext, useState, ReactNode } from "react";
import { TablesProps, AppContextProps } from "@/types/appContext";

const AppContext = createContext<TablesProps>({
  firstTable: {
    monthsOfPayment: 4,
    commissionRate: 0.95,
    taxRate: 17,
    nonPayments: [0, 10, 10, 0],
  },
  setFirstTable: () => {},
  secondTable: {
    sales: 33,
    average: 35000,
  },
  setSecondTable: () => {},
});

export function AppContextProvider(props: AppContextProps) {
  const { children } = props;
  const [firstTable, setFirstTable] = useState({
    monthsOfPayment: 4,
    commissionRate: 0.95,
    taxRate: 17,
    nonPayments: [0, 10, 10, 0],
  });
  const [secondTable, setSecondTable] = useState({
    sales: 33,
    average: 35000,
  });

  const value = {
    firstTable,
    setFirstTable,
    secondTable,
    setSecondTable,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
