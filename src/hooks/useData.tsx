import { useEffect, useState } from "react";

export const useData = () => {
  const [data, setData] = useState({});

  // Payments
  const [payments, setPayments] = useState([]);
  const [monthsOfPayment, setMonthsOfPayment] = useState(0);
  const [comissionRates, setComissionRates] = useState<number[]>([]);
  const [taxes, setTaxes] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [paymentWithTax, setPaymentWithTax] = useState(0);
  const [nonPayments, setNonPayments] = useState<number[]>([]);
  const [lost, setLost] = useState(0);
  const [liquid, setLiquid] = useState(0);

  // Salary
  const [salesBySeller, setSalesBySeller] = useState([]);
  const [numberOfSupervisors, setNumberOfSupervisors] = useState(0);
  const [supervisorSalary, setSupervisorSalary] = useState(0);
  const [supervisorComission, setSupervisorComission] = useState(0);
  const [supervisorLiquidComission, setSupervisorLiquidComission] = useState(0);
  const [numberOfSellers, setNumberOfSellers] = useState(0);
  const [sellerSalary, setSellerSalary] = useState(0);
  const [sellerComission, setSellerComission] = useState(0);
  const [sellerLiquidComission, setSellerLiquidComission] = useState(0);
  const [sales, setSales] = useState(0);
  const [average, setAverage] = useState(0);
  const [invoicing, setInvoicing] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [VT, setVT] = useState(0);
  const [totalVT, setTotalVT] = useState(0);
  const [VR, setVR] = useState(0);
  const [totalVR, setTotalVR] = useState(0);
  const [charges, setCharges] = useState(0);

  // Totals
  const [totals, setTotals] = useState(0);
  const [sellerTotalSalary, setSellerTotalSalary] = useState(0);
  const [supAndSelTotalSalary, setSupAndSelTotalSalary] = useState(0);
  const [laborBenefits, setLaborBenefits] = useState(0);
  const [salaryAndCharges, setSalaryAndCharges] = useState(0);
  const [totalVTAndVR, setTotalVTAndVR] = useState(0);
  const [media, setMedia] = useState(0);
  const [accountant, setAccountant] = useState(0);
  const [telephone, setTelephone] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const payments: any = Array.from({ length: 4 }, (item, index) => ({
      monthsOfPayment,
      comissionRate: comissionRates[index],
      taxes: monthsOfPayment + comissionRates[index],
      taxRate,
      paymentWithTax: (monthsOfPayment + comissionRates[index]) * taxRate,
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
    setComissionRates([2, 4, 4, 2]);
  }, []);

  console.log(payments);

  return { data, setData };
};
