import { useEffect, useState } from "react";
import { PaymentsProps, SalaryProps, TotalsProps } from "@/types/useData";

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

  // Salary
  const [salary, setSalary] = useState<SalaryProps | null>(null);
  const [numberOfSupervisors, setNumberOfSupervisors] = useState<number | any>(
    null
  );
  const [supervisorSalary, setSupervisorSalary] = useState(3000);
  const [supervisorComissionRaw, setSupervisorComissionRaw] = useState("");
  const [supervisorComission, setSupervisorComission] = useState<number | any>(
    null
  );
  const [numberOfSellers, setNumberOfSellers] = useState<number | any>(null);
  const [sellerSalary, setSellerSalary] = useState(965);
  const [sellerComissionRaw, setSellerComissionRaw] = useState("");
  const [sellerComission, setSellerComission] = useState<number | any>(null);
  const [sales, setSales] = useState<number | any>(null);
  const [average, setAverage] = useState<number | any>(null);
  const [numberOfDays, setNumberOfDays] = useState<number | any>(null);
  const [VTValue, setVTValue] = useState(6);
  const [VRValue, setVRValue] = useState(15);
  const [chargesRaw, setChargesRaw] = useState("");
  const [charges, setCharges] = useState<number | any>(null);

  // Budget
  const [media, setMedia] = useState<number | any>(null);
  const [accountant, setAccountant] = useState<number | any>(null);
  const [telephone, setTelephone] = useState<number | any>(null);

  // Totals
  const [totals, setTotals] = useState<TotalsProps | null>(null);
  const [totalWithNoSales, setTotalWithNoSales] = useState<number | any>(0);

  // User
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [howMeet, setHowMeet] = useState("");
  const [newsletterRegister, setNewsletterRegister] = useState(false);

  // Steps
  const [step, setStep] = useState(1);
  const [validSteps, setValidSteps] = useState([false, false, false, false]);

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
      sellerTotalSalary:
        sellerSalary * numberOfSellers +
        (sales * average * sellerComission) / 100,
      supAndSelTotalSalary:
        supervisorSalary * numberOfSupervisors +
        (sales * average * supervisorComission) / 100 +
        sellerSalary * numberOfSellers +
        (sales * average * sellerComission) / 100,
      laborBenefits:
        ((supervisorSalary * numberOfSupervisors +
          (sales * average * supervisorComission) / 100 +
          sellerSalary * numberOfSellers +
          (sales * average * sellerComission) / 100) *
          charges) /
        100,
      salaryAndCharges:
        supervisorSalary * numberOfSupervisors +
        (sales * average * supervisorComission) / 100 +
        sellerSalary * numberOfSellers +
        (sales * average * sellerComission) / 100 +
        ((supervisorSalary * numberOfSupervisors +
          (sales * average * supervisorComission) / 100 +
          sellerSalary * numberOfSellers +
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
        sellerSalary * numberOfSellers +
        (sales * average * sellerComission) / 100 +
        ((supervisorSalary * numberOfSupervisors +
          (sales * average * supervisorComission) / 100 +
          sellerSalary * numberOfSellers +
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
    comissionRatesRaw,
    setComissionRatesRaw,
    setComissionRates,
    taxRateRaw,
    setTaxRateRaw,
    setTaxRate,
    nonPaymentsRaw,
    setNonPaymentsRaw,
    setNonPayments,
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
    media,
    setMedia,
    accountant,
    setAccountant,
    telephone,
    setTelephone,
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
    step,
    setStep,
    validSteps,
    setValidSteps,
  };
};
