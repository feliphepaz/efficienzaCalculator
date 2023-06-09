import { useEffect, useState } from "react";
import { StyledPDF } from "./PDF.styles";
import { PDFProps } from "./PDF.types";

export default function PDF({
  payments,
  salary,
  totals,
  setTotalWithNoSales,
}: PDFProps) {
  // Demonstrative
  const [totalTaxes, setTotalTaxes] = useState(0);
  const [totalPaymentWithTax, setTotalPaymentWithTax] = useState(0);
  const [totalLiquid, setTotalLiquid] = useState(0);
  // Benefits
  const [totalVTForEach, setTotalVTForEach] = useState<number | null>(0);
  const [totalVRForEach, setTotalVRForEach] = useState<number | null>(0);
  // General - No sales
  const [supAndSelTotalSalary, setSupAndSelTotalSalary] = useState<
    number | null
  >(0);
  const [laborBenefits, setLaborBenefits] = useState<number | null>(0);
  const [salaryAndCharges, setSalaryAndCharges] = useState<number | null>(0);
  const [total, setTotal] = useState<number | null>(0);

  function sumTaxes() {
    let total = 0;
    for (let i = 0; i < payments.length; i++) {
      total += payments[i].taxes;
    }
    setTotalTaxes(total);
  }

  function sumPaymentWithTax() {
    let total = 0;
    for (let i = 0; i < payments.length; i++) {
      total += payments[i].paymentWithTax;
    }
    setTotalPaymentWithTax(total);
  }

  useEffect(() => {
    // Demonstrative
    sumTaxes();
    sumPaymentWithTax();
    setTotalLiquid(totalTaxes - totalPaymentWithTax);
    // Benefits
    setTotalVTForEach(
      salary && salary.benefits.VT.VTValue * salary.benefits.numberOfDays
    );
    setTotalVRForEach(
      salary && salary.benefits.VR.VRValue * salary.benefits.numberOfDays
    );
    // General - No sales
    setSupAndSelTotalSalary(
      salary &&
        salary.supervisor.supervisorLiquidSalary +
          salary.seller.sellerLiquidSalary
    );
    setLaborBenefits(
      supAndSelTotalSalary &&
        salary &&
        (supAndSelTotalSalary * salary?.charges) / 100
    );
    setSalaryAndCharges(
      supAndSelTotalSalary &&
        laborBenefits &&
        supAndSelTotalSalary + laborBenefits
    );
    setTotal(
      salaryAndCharges && totals && salaryAndCharges + totals.totalVTAndVR
    );
  }, [supAndSelTotalSalary, laborBenefits, salaryAndCharges]);

  useEffect(() => {
    setTotalWithNoSales(total);
  }, [total]);

  return <StyledPDF></StyledPDF>;
}
