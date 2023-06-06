import Input from "@/components/Input";
import { useEffect, useRef } from "react";
import { Step2Props } from "./Step2.types";

export default function Step2({
  salary,
  numberOfSupervisors,
  setNumberOfSupervisors,
  supervisorComission,
  setSupervisorComission,
  numberOfSellers,
  setNumberOfSellers,
  sellerComission,
  setSellerComission,
  sales,
  setSales,
  average,
  setAverage,
  numberOfDays,
  setNumberOfDays,
  charges,
  setCharges,
  setValidSteps,
}: Step2Props) {
  const step2 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fields = step2.current?.querySelectorAll("input");
    const fieldsArray = fields ? Array.from(fields) : [];
    setTimeout(() => {
      const emptyFields = fieldsArray.filter((field: any) => !field.value);
      if (emptyFields.length === 0) {
        setValidSteps([true, true, false, false]);
      } else {
        setValidSteps([false, false, false, false]);
      }
    }, 100);
  }, [salary]);

  return (
    <>
      <p className="instruction">
        Nos conte sobre a quantidade de funcionários que a sua equipe terá e
        outras informações
      </p>
      <form ref={step2}>
        <Input
          field="number-of-supervisors"
          label="Serão quantos supervisores?"
          type="quantity"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a quantidade"
          value={numberOfSupervisors}
          onChange={({ target }) => setNumberOfSupervisors(+target.value)}
        />
        <Input
          field="supervisor-comission"
          label="Qual será a comissão de um supervisor?"
          type="percentage"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a comissão"
          value={supervisorComission}
          onChange={({ target }) =>
            setSupervisorComission(+target.value.replace(",", "."))
          }
        />
        <Input
          field="number-of-sellers"
          label="Serão quantos vendedores?"
          type="quantity"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a quantidade"
          value={numberOfSellers}
          onChange={({ target }) => setNumberOfSellers(+target.value)}
        />
        <Input
          field="seller-comission"
          label="Qual será a comissão de um vendedor?"
          type="percentage"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a comissão"
          value={sellerComission}
          onChange={({ target }) =>
            setSellerComission(+target.value.replace(",", "."))
          }
        />
        <Input
          field="sales"
          label="Serão quantas vendas de cotas?"
          type="quantity"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a quantidade"
          value={sales}
          onChange={({ target }) => setSales(+target.value)}
        />
        <Input
          field="average"
          label="Qual será a média de crédito?"
          type="currency"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a média"
          value={average}
          onChange={({ target }) => setAverage(+(target as any).rawValue)}
        />
        <Input
          field="number-of-days"
          label="Serão quantos dias trabalhados?"
          type="quantity"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a quantidade"
          value={numberOfDays}
          onChange={({ target }) => setNumberOfDays(+target.value)}
        />
        <Input
          field="charges"
          label="Qual será a taxa de encargos?"
          type="percentage"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite a taxa"
          value={charges}
          onChange={({ target }) => setCharges(+target.value.replace(",", "."))}
        />
      </form>
    </>
  );
}
