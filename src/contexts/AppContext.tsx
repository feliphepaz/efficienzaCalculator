import { createContext, useState, ReactNode } from "react";
import { TablesProps, AppContextProps } from "@/types/appContext";

const AppContext = createContext<TablesProps>({
  firstTable: {
    monthsOfPayment: 1,
  },
  setFirstTable: () => {},
});

export function AppContextProvider(props: AppContextProps) {
  const { children } = props;
  const [firstTable, setFirstTable] = useState({
    monthsOfPayment: 1,
  });

  const value = {
    firstTable,
    setFirstTable,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
