import Select from "@/components/Select";
import Input from "@/components/Input";
import Group from "@/components/Group";
import { useEffect, useRef } from "react";
import { Step1Props } from "./Step1.types";

export default function Step1({
  payments,
  monthsOfPayment,
  setMonthsOfPayment,
  setComissionRates,
  setTaxRate,
  setNonPayments,
  setValidSteps,
}: Step1Props) {
  const step1 = useRef<HTMLFormElement>(null);

  function setComissionRatesFields(value: number, index: string | undefined) {
    setComissionRates((prevValues: number[]) => {
      const newValues = [...prevValues];
      if (index) {
        newValues[+index] = value;
      }
      return newValues;
    });
  }

  function setNonPaymentsFields(value: number, index: string | undefined) {
    setNonPayments((prevValues: number[]) => {
      const newValues = [...prevValues];
      if (index) {
        newValues[+index] = value;
      }
      return newValues;
    });
  }

  useEffect(() => {
    const fields = step1.current?.querySelectorAll("input, select");
    const fieldsArray = fields ? Array.from(fields) : [];
    const emptyFields = fieldsArray.filter((field: any) => field.value === "");
    if (emptyFields.length === 0) {
      setValidSteps([true, false, false]);
    } else {
      setValidSteps([false, false, false]);
    }
  }, [payments]);

  return (
    <form ref={step1}>
      <Select
        field="months-of-payment"
        label="Serão quantos meses de pagamento?"
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        onChange={({ target }) => setMonthsOfPayment(+target.value)}
      />
      <Group
        field="comission-rates"
        label="Taxas de comissão (em %)"
        months={monthsOfPayment}
        type="number"
        onChange={({ target }) =>
          setComissionRatesFields(+target.value, target.dataset.index)
        }
      />
      <Input
        field="tax-rate"
        label="Qual será a taxa de imposto? (em %)"
        type="number"
        allowDot={true}
        onChange={({ target }) => setTaxRate(+target.value)}
      />
      <Group
        field="non-payments"
        label="Taxas de inadimplência (em %)"
        months={monthsOfPayment}
        type="number"
        onChange={({ target }) =>
          setNonPaymentsFields(+target.value, target.dataset.index)
        }
      />
    </form>
  );
}
