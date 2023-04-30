import { useEffect, useState } from "react";
import { PaymentsProps, SalaryProps, TotalsProps } from "@/types/useData";

export const useData = () => {
  // Payments
  const [payments, setPayments] = useState<PaymentsProps[]>([]);
  const [monthsOfPayment, setMonthsOfPayment] = useState(1);
  const [comissionRates, setComissionRates] = useState<number[]>([]);
  const [taxRate, setTaxRate] = useState(0);
  const [nonPayments, setNonPayments] = useState<number[]>([]);

  // Salary
  const [salary, setSalary] = useState<SalaryProps | null>(null);
  const [numberOfSupervisors, setNumberOfSupervisors] = useState(0);
  const [supervisorSalary, setSupervisorSalary] = useState(0);
  const [supervisorComission, setSupervisorComission] = useState(0);
  const [numberOfSellers, setNumberOfSellers] = useState(0);
  const [sellerSalary, setSellerSalary] = useState(0);
  const [sellerComission, setSellerComission] = useState(0);
  const [sales, setSales] = useState(0);
  const [average, setAverage] = useState(0);
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [VTValue, setVTValue] = useState(0);
  const [VRValue, setVRValue] = useState(0);
  const [charges, setCharges] = useState(0);

  // Totals
  const [totals, setTotals] = useState<TotalsProps | null>(null);
  const [media, setMedia] = useState(0);
  const [accountant, setAccountant] = useState(0);
  const [telephone, setTelephone] = useState(0);

  // Steps
  const [step, setStep] = useState(1);
  const [validSteps, setValidSteps] = useState([false, false, false]);

  useEffect(() => {
    // Payments
    const payments: PaymentsProps[] = Array.from(
      { length: monthsOfPayment },
      (item, index) => ({
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
      })
    );
    setPayments(payments);

    // Salary
    const salary: SalaryProps = {
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
    const totals: TotalsProps = {
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
    taxRate,
    nonPayments,
    numberOfSupervisors,
    supervisorSalary,
    supervisorComission,
    numberOfSellers,
    sellerSalary,
    sellerComission,
    sales,
    average,
    numberOfDays,
    VTValue,
    VRValue,
    charges,
    media,
    accountant,
    telephone,
  ]);

  return {
    payments,
    monthsOfPayment,
    setMonthsOfPayment,
    comissionRates,
    setComissionRates,
    setTaxRate,
    setNonPayments,
    salary,
    setNumberOfSupervisors,
    setSupervisorSalary,
    setSupervisorComission,
    setNumberOfSellers,
    setSellerSalary,
    setSellerComission,
    setSales,
    setAverage,
    setNumberOfDays,
    setVTValue,
    setVRValue,
    setCharges,
    totals,
    setMedia,
    setAccountant,
    setTelephone,
    step,
    setStep,
    validSteps,
    setValidSteps,
  };
};
