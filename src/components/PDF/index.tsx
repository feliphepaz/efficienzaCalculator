import { useEffect, useState } from "react";
import { StyledPDF } from "./PDF.styles";
import { PDFProps } from "./PDF.types";

export default function PDF({ payments }: PDFProps) {
  // Demonstrative
  const [totalTaxes, setTotalTaxes] = useState(0);
  const [totalPaymentWithTax, setTotalPaymentWithTax] = useState(0);
  const [totalLiquid, setTotalLiquid] = useState(0);
  // Benefits

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
  }, []);

  return <StyledPDF></StyledPDF>;
}
