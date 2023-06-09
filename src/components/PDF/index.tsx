import { useEffect, useState } from "react";
import { StyledPDF } from "./PDF.styles";
import { PDFProps } from "./PDF.types";
import { PDFDocument } from "pdf-lib";

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

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function downloadPDF(pdf: Uint8Array, filename: string) {
    const blob = new Blob([pdf], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  async function createPDF() {
    const formUrl = "https://efficienzaconsultoria.com/pdf-placeholder.pdf";
    const formPdfBytes = await fetch(formUrl).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    const actualDate = new Date();

    const day = String(actualDate.getDate()).padStart(2, "0");
    const month = String(actualDate.getMonth() + 1).padStart(2, "0");
    const year = actualDate.getFullYear();

    const formattedDate = day + month + year;

    // Fields
    const field_1_1 = form.getTextField("field_1_1");
    if (totalTaxes) {
      field_1_1.setText(formatter.format(totalTaxes));
    }

    const field_1_2 = form.getTextField("field_1_2");
    if (totalPaymentWithTax) {
      field_1_2.setText(formatter.format(totalPaymentWithTax));
    }

    const field_1_3 = form.getTextField("field_1_3");
    if (totalLiquid) {
      field_1_3.setText(formatter.format(totalLiquid));
    }

    const field_2_1 = form.getTextField("field_2_1");
    if (totalVTForEach) {
      field_2_1.setText(formatter.format(totalVTForEach));
    }

    const field_2_2 = form.getTextField("field_2_2");
    if (salary && salary.benefits.VT.totalVT) {
      field_2_2.setText(formatter.format(salary.benefits.VT.totalVT));
    }

    const field_2_3 = form.getTextField("field_2_3");
    if (totalVRForEach) {
      field_2_3.setText(formatter.format(totalVRForEach));
    }

    const field_2_4 = form.getTextField("field_2_4");
    if (salary && salary.benefits.VR.totalVR) {
      field_2_4.setText(formatter.format(salary && salary.benefits.VR.totalVR));
    }

    const field_3_1 = form.getTextField("field_3_1");
    if (salary && salary.supervisor.supervisorLiquidSalary) {
      field_3_1.setText(
        formatter.format(salary && salary.supervisor.supervisorLiquidSalary)
      );
    }

    const field_3_2 = form.getTextField("field_3_2");
    if (salary && salary.supervisor.supervisorLiquidComission) {
      field_3_2.setText(
        formatter.format(salary && salary.supervisor.supervisorLiquidComission)
      );
    }

    const field_3_3 = form.getTextField("field_3_3");
    if (salary && salary.seller.sellerLiquidSalary) {
      field_3_3.setText(
        formatter.format(salary && salary.seller.sellerLiquidSalary)
      );
    }

    const field_3_4 = form.getTextField("field_3_4");
    if (salary && salary.seller.sellerLiquidComission) {
      field_3_4.setText(
        formatter.format(salary && salary.seller.sellerLiquidComission)
      );
    }

    const field_4_1 = form.getTextField("field_4_1");
    if (totals && totals.supervisorTotalSalary) {
      field_4_1.setText(
        formatter.format(totals && totals.supervisorTotalSalary)
      );
    }

    const field_4_2 = form.getTextField("field_4_2");
    if (totals && totals.sellerTotalSalary) {
      field_4_2.setText(formatter.format(totals && totals.sellerTotalSalary));
    }

    const field_4_3 = form.getTextField("field_4_3");
    if (totals && totals.supAndSelTotalSalary) {
      field_4_3.setText(
        formatter.format(totals && totals.supAndSelTotalSalary)
      );
    }

    const field_4_4 = form.getTextField("field_4_4");
    if (totals && totals.laborBenefits) {
      field_4_4.setText(formatter.format(totals && totals.laborBenefits));
    }

    const field_4_5 = form.getTextField("field_4_5");
    if (totals && totals.salaryAndCharges) {
      field_4_5.setText(formatter.format(totals && totals.salaryAndCharges));
    }

    const field_4_6 = form.getTextField("field_4_6");
    if (totals && totals.totalVTAndVR) {
      field_4_6.setText(formatter.format(totals && totals.totalVTAndVR));
    }

    const field_4_7 = form.getTextField("field_4_7");
    if (totals && totals.total) {
      field_4_7.setText(formatter.format(totals && totals.total));
    }

    const field_5_1 = form.getTextField("field_5_1");
    if (salary && salary.supervisor.supervisorLiquidSalary) {
      field_5_1.setText(
        formatter.format(salary && salary.supervisor.supervisorLiquidSalary)
      );
    }

    const field_5_2 = form.getTextField("field_5_2");
    if (salary && salary.seller.sellerLiquidSalary) {
      field_5_2.setText(
        formatter.format(salary && salary.seller.sellerLiquidSalary)
      );
    }

    const field_5_3 = form.getTextField("field_5_3");
    if (supAndSelTotalSalary) {
      field_5_3.setText(formatter.format(supAndSelTotalSalary));
    }

    const field_5_4 = form.getTextField("field_5_4");
    if (laborBenefits) {
      field_5_4.setText(formatter.format(laborBenefits));
    }

    const field_5_5 = form.getTextField("field_5_5");
    if (salaryAndCharges) {
      field_5_5.setText(formatter.format(salaryAndCharges));
    }

    const field_5_6 = form.getTextField("field_5_6");
    if (totals && totals.totalVTAndVR) {
      field_5_6.setText(formatter.format(totals && totals.totalVTAndVR));
    }

    const field_5_7 = form.getTextField("field_5_7");
    if (total) {
      field_5_7.setText(formatter.format(total));
    }

    const pdfBytes = await pdfDoc.save();
    downloadPDF(pdfBytes, `gastos-detalhados-${formattedDate}.pdf`);
  }

  return (
    <StyledPDF>
      <h2>Gostaria de mais detalhes?</h2>
      <p>
        Você também pode fazer download do PDF com todos os gastos detalhados! É
        só clicar no botão abaixo.
      </p>
      <button className="btn" onClick={createPDF}>
        <span>Baixar PDF</span>
      </button>
    </StyledPDF>
  );
}
