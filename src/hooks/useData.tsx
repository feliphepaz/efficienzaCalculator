import AppContext from "@/contexts/AppContext";
import { useContext, useState } from "react";

export const useData = () => {
  const context = useContext(AppContext);
  const taxes =
    (context.secondTable.sales *
      context.secondTable.average *
      context.firstTable.commissionRate) /
    100000;
  const paymentWithTax = (context.firstTable.taxRate * taxes) / 100;

  const [data, setData] = useState({
    firstTable: {
      monthsOfPayment: context.firstTable.monthsOfPayment,
      payments: context.firstTable.nonPayments.map((nonPayment) => ({
        commissionRates: context.firstTable.commissionRate,
        taxes: taxes,
        taxRate: context.firstTable.taxRate,
        paymentWithTax: paymentWithTax,
        nonPayment: nonPayment,
        lost: (taxes * nonPayment) / 100,
        liquid: taxes - paymentWithTax - (taxes * nonPayment) / 100,
      })),
    },
    secondTable: {
      sales: context.secondTable.sales,
      average: context.secondTable.average,
      invoicing: context.secondTable.sales * context.secondTable.average,
    },
  });

  if (!context) {
    throw new Error("useData must be used within a AppContextProvider");
  }

  return { data, setData };
};
