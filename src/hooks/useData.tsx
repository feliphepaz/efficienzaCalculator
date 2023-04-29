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
  const [salary, setSalary] = useState([]);
  const [numberOfSupervisors, setNumberOfSupervisors] = useState(0);
  const [supervisorSalary, setSupervisorSalary] = useState(0);
  const [supervisorComission, setSupervisorComission] = useState(0);
  const [supervisorLiquidSalary, setSupervisorLiquidSalary] = useState(0);
  const [supervisorLiquidComission, setSupervisorLiquidComission] = useState(0);
  const [numberOfSellers, setNumberOfSellers] = useState(0);
  const [sellerSalary, setSellerSalary] = useState(0);
  const [sellerComission, setSellerComission] = useState(0);
  const [sellerLiquidSalary, setSellerLiquidSalary] = useState(0);
  const [sellerLiquidComission, setSellerLiquidComission] = useState(0);
  const [sales, setSales] = useState(0);
  const [average, setAverage] = useState(0);
  const [invoicing, setInvoicing] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [VTValue, setVTValue] = useState(0);
  const [totalVT, setTotalVT] = useState(0);
  const [VRValue, setVRValue] = useState(0);
  const [totalVR, setTotalVR] = useState(0);
  const [charges, setCharges] = useState(0);

  // Totals
  const [totals, setTotals] = useState(0);
  const [supervisorTotalSalary, setSupervisorTotalSalary] = useState(0);
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
    // Payments
    const payments: any = Array.from({ length: 4 }, (item, index) => ({
      monthsOfPayment,
      comissionRate: comissionRates[index],
      taxes: (sales * average * comissionRates[index]) / 100,
      taxRate,
      paymentWithTax:
        (((sales * average * comissionRates[index]) / 100) * taxRate) / 100,
      nonPayment: nonPayments[index],
      lost:
        (((sales * average * comissionRates[index]) / 100) *
          nonPayments[index]) /
        100,
      liquid:
        (sales * average * comissionRates[index]) / 100 -
        (((sales * average * comissionRates[index]) / 100) * taxRate) / 100 -
        (((sales * average * comissionRates[index]) / 100) *
          nonPayments[index]) /
          100,
    }));
    setPayments(payments);

    // Salary
    const salary: any = {
      supervisor: {
        numberOfSupervisors,
        supervisorSalary,
        supervisorComission,
        supervisorLiquidSalary: supervisorSalary * numberOfSupervisors,
        supervisorLiquidComission:
          (sales * average * supervisorComission) / 100,
      },
      seller: {
        numberOfSellers,
        sellerSalary,
        sellerComission,
        sellerLiquidSalary: sellerSalary * numberOfSellers,
        sellerLiquidComission: (sales * average * sellerComission) / 100,
      },
      sales,
      average,
      invoicing: sales * average,
      benefits: {
        numberOfDays,
        VT: {
          VTValue,
          totalVT:
            VTValue * numberOfDays * (numberOfSupervisors + numberOfSellers),
        },
        VR: {
          VRValue,
          totalVR:
            VRValue * numberOfDays * (numberOfSupervisors + numberOfSellers),
        },
      },
      charges,
    };
    setSalary(salary);

    // Totals
    const totals: any = {
      supervisorTotalSalary:
        supervisorSalary * numberOfSupervisors +
        (sales * average * supervisorComission) / 100,
      sellerTotalSalary: (sales * average * sellerComission) / 100,
      supAndSelTotalSalary:
        supervisorSalary * numberOfSupervisors +
        (sales * average * supervisorComission) / 100 +
        (sales * average * sellerComission) / 100,
      laborBenefits:
        ((supervisorSalary * numberOfSupervisors +
          (sales * average * supervisorComission) / 100 +
          (sales * average * sellerComission) / 100) *
          charges) /
        100,
      salaryAndCharges:
        supervisorSalary * numberOfSupervisors +
        (sales * average * supervisorComission) / 100 +
        (sales * average * sellerComission) / 100 +
        ((supervisorSalary * numberOfSupervisors +
          (sales * average * supervisorComission) / 100 +
          (sales * average * sellerComission) / 100) *
          charges) /
          100,
      totalVTAndVR:
        VTValue * numberOfDays * (numberOfSupervisors + numberOfSellers) +
        VRValue * numberOfDays * (numberOfSupervisors + numberOfSellers),
      media,
      accountant,
      telephone,
      total:
        supervisorSalary * numberOfSupervisors +
        (sales * average * supervisorComission) / 100 +
        (sales * average * sellerComission) / 100 +
        ((supervisorSalary * numberOfSupervisors +
          (sales * average * supervisorComission) / 100 +
          (sales * average * sellerComission) / 100) *
          charges) /
          100 +
        (VTValue * numberOfDays * (numberOfSupervisors + numberOfSellers) +
          VRValue * numberOfDays * (numberOfSupervisors + numberOfSellers)) +
        media +
        accountant +
        telephone,
    };
    setTotals(totals);
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
    // Payments
    setComissionRates([0.95, 0.95, 0.95, 0.95]);
    setNonPayments([0, 10, 10, 0]);
    setTaxRate(17);

    // Salary
    setSales(33);
    setAverage(35000);
    setSupervisorSalary(5000);
    setSellerSalary(600);
    setSupervisorComission(0.2);
    setSellerComission(1.0);
    setNumberOfSupervisors(4);
    setNumberOfSellers(10);
    setNumberOfDays(22);
    setVTValue(22);
    setVRValue(15);
    setCharges(80);

    // Totals
    setMedia(500);
    setAccountant(1000);
    setTelephone(500);
  }, []);

  console.log(totals);

  return { data, setData };
};
