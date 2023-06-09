import Select from "@/components/Select";
import Input from "@/components/Input";
import Group from "@/components/Group";
import { useEffect, useRef } from "react";
import { Step1Props } from "./Step1.types";

export default function Step1({
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

  function setComissionRatesRawFields(
    value: string,
    index: string | undefined
  ) {
    setComissionRatesRaw((prevValues: string[]) => {
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

  function setNonPaymentsRawFields(value: string, index: string | undefined) {
    setNonPaymentsRaw((prevValues: string[]) => {
      const newValues = [...prevValues];
      if (index) {
        newValues[+index] = value;
      }
      return newValues;
    });
  }

  useEffect(() => {
    const fields = step1.current?.querySelectorAll("input, select");
    const submitBtn = document.querySelector(".next-step");
    submitBtn?.addEventListener("click", () => {
      const fieldsArray = fields ? Array.from(fields) : [];
      const emptyFields = fieldsArray.filter((field: any) => !field.value);
      if (emptyFields.length === 0) {
        setValidSteps([true, false, false, false]);
      } else {
        setValidSteps([false, false, false, false]);
      }
    });
  }, []);

  return (
    <>
      <p className="instruction">
        Primeiramente, adicione todas as taxas que a administradora possui e o
        que será repassado
      </p>
      <form ref={step1}>
        <Select
          field="months-of-payment"
          label="Serão quantos meses de pagamento?"
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          value={monthsOfPayment}
          onChange={({ target }) => setMonthsOfPayment(+target.value)}
        />
        <Input
          field="tax-rate"
          label="Qual será a taxa de imposto?"
          type="percentage"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a taxa"
          value={taxRateRaw}
          onChange={({ target }) => {
            setTaxRate(+target.value.replace(",", "."));
            setTaxRateRaw(target.value);
          }}
        />
        <Group
          field="comission-rates"
          label="Taxas de comissão"
          months={monthsOfPayment}
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          data={comissionRatesRaw}
          placeholder="Digite a taxa"
          onChange={({ target }) => {
            setComissionRatesFields(
              +target.value.replace(",", "."),
              target.dataset.index
            );
            setComissionRatesRawFields(target.value, target.dataset.index);
          }}
        />
        <Group
          field="non-payments"
          label="Taxas de inadimplência"
          months={monthsOfPayment}
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          data={nonPaymentsRaw}
          placeholder="Digite a taxa"
          onChange={({ target }) => {
            setNonPaymentsFields(
              +target.value.replace(",", "."),
              target.dataset.index
            );
            setNonPaymentsRawFields(target.value, target.dataset.index);
          }}
        />
      </form>
    </>
  );
}
