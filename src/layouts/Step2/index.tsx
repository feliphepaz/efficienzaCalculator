import Input from "@/components/Input";
import { useEffect, useRef } from "react";
import { Step2Props } from "./Step2.types";

export default function Step2({
  numberOfSupervisors,
  setNumberOfSupervisors,
  supervisorComissionRaw,
  setSupervisorComissionRaw,
  setSupervisorComission,
  numberOfSellers,
  setNumberOfSellers,
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
  chargesRaw,
  setChargesRaw,
  setCharges,
  setValidSteps,
}: Step2Props) {
  const step2 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fields = step2.current?.querySelectorAll("input");
    const submitBtn = document.querySelector(".next-step");
    submitBtn?.addEventListener("click", () => {
      const fieldsArray = fields ? Array.from(fields) : [];
      const emptyFields = fieldsArray.filter((field: any) => !field.value);
      if (emptyFields.length === 0) {
        setValidSteps([true, true, false, false, false]);
      } else {
        setValidSteps([false, false, false, false, false]);
      }
    });
  }, []);

  return (
    <div className="step">
      <p className="instruction">Nos conte mais sobre a sua equipe</p>
      <form ref={step2}>
        <Input
          field="number-of-supervisors"
          label="Quantos supervisores?"
          type="quantity"
          tooltip="Quantos supervisores tem em sua empresa"
          placeholder="Digite a quantidade"
          value={numberOfSupervisors}
          onChange={({ target }) => setNumberOfSupervisors(+target.value)}
        />
        <Input
          field="supervisor-comission"
          label="Qual será a comissão do(s) supervisor(es)?"
          type="percentage"
          tooltip="Em cima do valor vendido, quanto será de comissão para cada supervisor"
          placeholder="Digite a comissão"
          value={supervisorComissionRaw}
          onChange={({ target }) => {
            setSupervisorComission(+target.value.replace(",", "."));
            setSupervisorComissionRaw(target.value);
          }}
        />
        <Input
          field="number-of-sellers"
          label="Quantos vendedores?"
          type="quantity"
          tooltip="Quantos vendedores tem em sua empresa"
          placeholder="Digite a quantidade"
          value={numberOfSellers}
          onChange={({ target }) => setNumberOfSellers(+target.value)}
        />
        <Input
          field="seller-comission"
          label="Qual será a comissão do(s) vendedor(es)?"
          type="percentage"
          tooltip="Em cima do valor vendido, quanto será de comissão para cada vendedor"
          placeholder="Digite a comissão"
          value={sellerComissionRaw}
          onChange={({ target }) => {
            setSellerComission(+target.value.replace(",", "."));
            setSellerComissionRaw(target.value);
          }}
        />
        <Input
          field="sales"
          label="Qual a previsão de venda em número de cotas?"
          type="quantity"
          tooltip="De acordo com sua meta mensal, ou se baseando nos meses anteriores, quantas cotas foram ou serão vendidas"
          placeholder="Digite a quantidade"
          value={sales}
          onChange={({ target }) => setSales(+target.value)}
        />
        <Input
          field="average"
          label="Qual será o ticket médio de crédito?"
          type="currency"
          tooltip="Qual a média de faturamento de acordo com os meses anteriores"
          placeholder="Digite a média"
          value={average}
          onChange={({ target }) => setAverage(+(target as any).rawValue)}
        />
        <Input
          field="growth"
          label="Quanto será a previsão de crescimento?"
          type="percentage"
          tooltip="Defina aqui quanto será acrescido a cada mês"
          placeholder="Digite a previsão"
          value={growthRaw}
          onChange={({ target }) => {
            setGrowth(+target.value.replace(",", "."));
            setGrowthRaw(target.value);
          }}
        />
        <Input
          field="number-of-days"
          label="Serão quantos dias trabalhados?"
          type="quantity"
          tooltip="Informe aqui quantos dias serão trabalhados por mês"
          placeholder="Digite a quantidade"
          value={numberOfDays}
          onChange={({ target }) => setNumberOfDays(+target.value)}
        />
        <Input
          field="charges"
          label="Qual o percentual de encargos trabalhistas?"
          type="percentage"
          tooltip="Digite em média a porcentagem dos encargos calculados"
          placeholder="Digite o percentual"
          value={chargesRaw}
          onChange={({ target }) => {
            setCharges(+target.value.replace(",", "."));
            setChargesRaw(target.value);
          }}
        />
      </form>
    </div>
  );
}
