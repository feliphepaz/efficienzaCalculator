import { useEffect, useState } from "react";
import {
  PaymentsProps,
  SalaryProps,
  BudgetProps,
  TotalsProps,
} from "@/types/useData";

export const useData = () => {
  // Payments
  const [payments, setPayments] = useState<PaymentsProps[]>([]);
  const [monthsOfPayment, setMonthsOfPayment] = useState(4);
  const [comissionRatesRaw, setComissionRatesRaw] = useState([]);
  const [comissionRates, setComissionRates] = useState<number[]>([]);
  const [taxRateRaw, setTaxRateRaw] = useState("");
  const [taxRate, setTaxRate] = useState<number | any>(null);
  const [nonPaymentsRaw, setNonPaymentsRaw] = useState([]);
  const [nonPayments, setNonPayments] = useState<number[]>([]);
  const [disableIncrementedRate, setDisableIncrementedRate] = useState(false);

  // Salary
  const [salary, setSalary] = useState<SalaryProps | null>(null);
  const [numberOfSupervisors, setNumberOfSupervisors] = useState<number | any>(
    null
  );
  const [supervisorSalary, setSupervisorSalary] = useState(3000);
  const [supervisorComissionRaw, setSupervisorComissionRaw] = useState([]);
  const [supervisorComission, setSupervisorComission] = useState<number[]>([]);
  const [numberOfSellers, setNumberOfSellers] = useState<number | any>(null);
  const [sellerSalary, setSellerSalary] = useState(965);
  const [sellerComissionRaw, setSellerComissionRaw] = useState([]);
  const [sellerComission, setSellerComission] = useState<number[]>([]);
  const [sales, setSales] = useState<number | any>(null);
  const [average, setAverage] = useState<number | any>(null);
  const [growthRaw, setGrowthRaw] = useState("");
  const [growth, setGrowth] = useState<number | any>(null);
  const [numberOfDays, setNumberOfDays] = useState<number | any>(null);
  const [VTValue, setVTValue] = useState(6);
  const [VRValue, setVRValue] = useState(15);
  const [chargesRaw, setChargesRaw] = useState("");
  const [charges, setCharges] = useState<number | any>(null);

  // Budget
  const [budget, setBudget] = useState<BudgetProps | null>(null);
  const [media, setMedia] = useState<number | any>(null);
  const [accountant, setAccountant] = useState<number | any>(null);
  const [telephone, setTelephone] = useState<number | any>(null);
  const [otherValues, setOtherValues] = useState<number | any>(null);

  // Totals
  const [totals, setTotals] = useState<TotalsProps | null>(null);
  const [totalWithNoSales, setTotalWithNoSales] = useState<number | any>(0);

  // User
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [howMeet, setHowMeet] = useState("");
  const [newsletterRegister, setNewsletterRegister] = useState(false);
  const [emailSended, setEmailSended] = useState(false);

  // Steps
  const [step, setStep] = useState(1);
  const [validSteps, setValidSteps] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    // Payments
    const payments: PaymentsProps[] = Array.from(
      { length: monthsOfPayment },
      (item, index) => {
        return {
          monthsOfPayment,
          comissionRate: comissionRates[index],
          taxes:
            (sales *
              (disableIncrementedRate
                ? average
                : average * (1 + growth / 100)) *
              comissionRates[index]) /
            100,
          taxRate,
          paymentWithTax:
            (((sales *
              (disableIncrementedRate
                ? average
                : average * (1 + growth / 100)) *
              comissionRates[index]) /
              100) *
              taxRate) /
            100,
          nonPayment: nonPayments[index],
          lost:
            (((sales *
              (disableIncrementedRate
                ? average
                : average * (1 + growth / 100)) *
              comissionRates[index]) /
              100) *
              nonPayments[index]) /
            100,
          liquid:
            (sales *
              (disableIncrementedRate
                ? average
                : average * (1 + growth / 100)) *
              comissionRates[index]) /
              100 -
            (((sales *
              (disableIncrementedRate
                ? average
                : average * (1 + growth / 100)) *
              comissionRates[index]) /
              100) *
              taxRate) /
              100 -
            (((sales *
              (disableIncrementedRate
                ? average
                : average * (1 + growth / 100)) *
              comissionRates[index]) /
              100) *
              nonPayments[index]) /
              100,
        };
      }
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
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            supervisorComission.reduce((acc, current) => acc + current, 0)) /
          supervisorComission.length /
          100,
      },
      seller: {
        numberOfSellers,
        sellerSalary,
        sellerComission,
        sellerLiquidSalary: sellerSalary * numberOfSellers,
        sellerLiquidComission:
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            sellerComission.reduce((acc, current) => acc + current, 0)) /
          sellerComission.length /
          100,
      },
      sales,
      average: disableIncrementedRate ? average : average * (1 + growth / 100),
      invoicing:
        sales *
        (disableIncrementedRate ? average : average * (1 + growth / 100)),
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

    // Budget
    const budget: BudgetProps = {
      media,
      accountant,
      telephone,
      otherValues,
    };
    setBudget(budget);

    // Totals
    const totals: TotalsProps = {
      supervisorTotalSalary:
        supervisorSalary * numberOfSupervisors +
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          supervisorComission.reduce((acc, current) => acc + current, 0)) /
          supervisorComission.length /
          100,
      sellerTotalSalary:
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          sellerComission.reduce((acc, current) => acc + current, 0)) /
        sellerComission.length /
        100,
      supAndSelTotalSalary:
        supervisorSalary * numberOfSupervisors +
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          supervisorComission.reduce((acc, current) => acc + current, 0)) /
          supervisorComission.length /
          100 +
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          sellerComission.reduce((acc, current) => acc + current, 0)) /
          sellerComission.length /
          100,
      laborBenefits:
        ((supervisorSalary * numberOfSupervisors +
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            supervisorComission.reduce((acc, current) => acc + current, 0)) /
            supervisorComission.length /
            100 +
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            sellerComission.reduce((acc, current) => acc + current, 0)) /
            sellerComission.length /
            100) *
          charges) /
        100,
      salaryAndCharges:
        supervisorSalary * numberOfSupervisors +
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          supervisorComission.reduce((acc, current) => acc + current, 0)) /
          supervisorComission.length /
          100 +
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          sellerComission.reduce((acc, current) => acc + current, 0)) /
          sellerComission.length /
          100 +
        ((supervisorSalary * numberOfSupervisors +
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            supervisorComission.reduce((acc, current) => acc + current, 0)) /
            supervisorComission.length /
            100 +
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            sellerComission.reduce((acc, current) => acc + current, 0)) /
            sellerComission.length /
            100) *
          charges) /
          100,
      totalVTAndVR:
        VTValue * numberOfDays * (numberOfSupervisors + numberOfSellers) +
        VRValue * numberOfDays * (numberOfSupervisors + numberOfSellers),
      media,
      accountant,
      telephone,
      otherValues,
      total:
        supervisorSalary * numberOfSupervisors +
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          supervisorComission.reduce((acc, current) => acc + current, 0)) /
          supervisorComission.length /
          100 +
        (sales *
          (disableIncrementedRate ? average : average * (1 + growth / 100)) *
          sellerComission.reduce((acc, current) => acc + current, 0)) /
          sellerComission.length /
          100 +
        ((supervisorSalary * numberOfSupervisors +
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            supervisorComission.reduce((acc, current) => acc + current, 0)) /
            supervisorComission.length /
            100 +
          (sales *
            (disableIncrementedRate ? average : average * (1 + growth / 100)) *
            sellerComission.reduce((acc, current) => acc + current, 0)) /
            sellerComission.length /
            100) *
          charges) /
          100 +
        (VTValue * numberOfDays * (numberOfSupervisors + numberOfSellers) +
          VRValue * numberOfDays * (numberOfSupervisors + numberOfSellers)) +
        media +
        accountant +
        telephone +
        otherValues,
    };
    setTotals(totals);
  }, [
    monthsOfPayment,
    comissionRates,
    taxRate,
    nonPayments,
    disableIncrementedRate,
    numberOfSupervisors,
    supervisorSalary,
    supervisorComission,
    numberOfSellers,
    sellerSalary,
    sellerComission,
    sales,
    average,
    growth,
    numberOfDays,
    VTValue,
    VRValue,
    charges,
    media,
    accountant,
    telephone,
    otherValues,
  ]);

  return {
    payments,
    monthsOfPayment,
    setMonthsOfPayment,
    comissionRatesRaw,
    setComissionRatesRaw,
    setComissionRates,
    taxRateRaw,
    setTaxRateRaw,
    setTaxRate,
    nonPaymentsRaw,
    setNonPaymentsRaw,
    setNonPayments,
    disableIncrementedRate,
    setDisableIncrementedRate,
    salary,
    numberOfSupervisors,
    setNumberOfSupervisors,
    supervisorSalary,
    setSupervisorSalary,
    supervisorComissionRaw,
    setSupervisorComissionRaw,
    setSupervisorComission,
    numberOfSellers,
    setNumberOfSellers,
    sellerSalary,
    setSellerSalary,
    sellerComissionRaw,
    setSellerComissionRaw,
    setSellerComission,
    sales,
    setSales,
    average,
    setAverage,
    growthRaw,
    setGrowthRaw,
    setGrowth,
    numberOfDays,
    setNumberOfDays,
    VTValue,
    setVTValue,
    VRValue,
    setVRValue,
    chargesRaw,
    setChargesRaw,
    setCharges,
    totals,
    totalWithNoSales,
    setTotalWithNoSales,
    budget,
    media,
    setMedia,
    accountant,
    setAccountant,
    telephone,
    setTelephone,
    otherValues,
    setOtherValues,
    name,
    setName,
    email,
    setEmail,
    tel,
    setTel,
    howMeet,
    setHowMeet,
    newsletterRegister,
    setNewsletterRegister,
    emailSended,
    setEmailSended,
    step,
    setStep,
    validSteps,
    setValidSteps,
  };
};
