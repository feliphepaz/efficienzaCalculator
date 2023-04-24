import { useEffect, useState } from "react";

export const useData = () => {
  const [data, setData] = useState({});

  const [payments, setPayments] = useState([]);
  const [monthsOfPayment, setMonthsOfPayment] = useState(0);
  const [comissionRates, setComissionRates] = useState<number[]>([]);
  const [taxes, setTaxes] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [paymentWithTax, setPaymentWithTax] = useState(0);
  const [nonPayments, setNonPayments] = useState<number[]>([]);
  const [lost, setLost] = useState(0);
  const [liquid, setLiquid] = useState(0);

  useEffect(() => {
    const payments: any = Array.from({ length: 4 }, (item, index) => ({
      monthsOfPayment,
      comissionRate: comissionRates[index],
      taxes: monthsOfPayment + comissionRates[index],
      taxRate,
      paymentWithTax,
      nonPayment: nonPayments[index],
      lost,
      liquid,
    }));
    setPayments(payments);
  }, [
    monthsOfPayment,
    comissionRates,
    taxes,
    taxRate,
    paymentWithTax,
    nonPayments,
    lost,
    liquid,
  ]);

  useEffect(() => {
    setMonthsOfPayment(2);
    setNonPayments([0, 10, 10, 0]);
    setComissionRates([2, 4, 4, 2]);
  }, []);

  console.log(payments);

  return { data, setData };
};
