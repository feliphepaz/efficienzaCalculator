import Input from "@/components/Input";
import { useEffect, useRef } from "react";
import { Step2Props } from "./Step2.types";

export default function Step2({
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
  setValidSteps,
}: Step2Props) {
  const step2 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fields = step2.current?.querySelectorAll("input");
    const fieldsArray = fields ? Array.from(fields) : [];
    const emptyFields = fieldsArray.filter((field: any) => field.value === "");
    if (emptyFields.length === 0) {
      setValidSteps([true, true, false]);
    } else {
      setValidSteps([false, false, false]);
    }
  }, [salary]);

  return (
    <form ref={step2}>
      <Input
        field="number-of-supervisors"
        label="Serão quantos supervisores? (em Qtd)"
        type="number"
        onChange={({ target }) => setNumberOfSupervisors(+target.value)}
      />
      <Input
        field="supervisor-salary"
        label="Qual será o salário de um supervisor? (em R$)"
        type="number"
        onChange={({ target }) => setSupervisorSalary(+target.value)}
      />
      <Input
        field="supervisor-comission"
        label="Qual será a comissão de um supervisor? (em %)"
        type="number"
        allowDot={true}
        onChange={({ target }) => setSupervisorComission(+target.value)}
      />
      <Input
        field="number-of-sellers"
        label="Serão quantos vendedores? (em Qtd)"
        type="number"
        onChange={({ target }) => setNumberOfSellers(+target.value)}
      />
      <Input
        field="seller-salary"
        label="Qual será o salário de um vendedor? (em R$)"
        type="number"
        onChange={({ target }) => setSellerSalary(+target.value)}
      />
      <Input
        field="seller-comission"
        label="Qual será a comissão de um vendedor? (em %)"
        type="number"
        allowDot={true}
        onChange={({ target }) => setSellerComission(+target.value)}
      />
      <Input
        field="sales"
        label="Serão quantas vendas de cotas? (em Qtd)"
        type="number"
        onChange={({ target }) => setSales(+target.value)}
      />
      <Input
        field="average"
        label="Qual será a média de crédito? (em R$)"
        type="number"
        onChange={({ target }) => setAverage(+target.value)}
      />
      <Input
        field="number-of-days"
        label="Serão quantos dias trabalhados? (em Qtd)"
        type="number"
        onChange={({ target }) => setNumberOfDays(+target.value)}
      />
      <Input
        field="vt-value"
        label="Qual será o valor do VT? (em R$)"
        type="number"
        onChange={({ target }) => setVTValue(+target.value)}
      />
      <Input
        field="vr-value"
        label="Qual será o valor do VR? (em R$)"
        type="number"
        onChange={({ target }) => setVRValue(+target.value)}
      />
      <Input
        field="charges"
        label="Qual será a taxa de encargos? (em %)"
        type="number"
        allowDot={true}
        onChange={({ target }) => setCharges(+target.value)}
      />
    </form>
  );
}
