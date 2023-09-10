import Input from "@/components/Input";
import Group from "@/components/Group";
import { useEffect, useRef, useState } from "react";
import { Step2Props } from "./Step2.types";

export default function Step2({
  monthsOfPayment,
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
  const [
    supervisorComissionIndividualFill,
    setSupervisorComissionIndividualFill,
  ] = useState(false);
  const [sellerComissionIndividualFill, setSellerComissionIndividualFill] =
    useState(false);

  function setSupervisorComissionFields(
    value: number,
    index: string | undefined
  ) {
    setSupervisorComission((prevValues: number[]) => {
      const newValues = [...prevValues];
      if (index) {
        if (supervisorComissionIndividualFill) {
          newValues[+index] = value;
        } else {
          Array.from({ length: monthsOfPayment }).forEach(
            (monthEl, monthIndex) => {
              newValues[monthIndex] = value;
            }
          );
        }
      }
      return newValues;
    });
  }

  function setSupervisorComissionRawFields(
    value: string,
    index: string | undefined
  ) {
    setSupervisorComissionRaw((prevValues: string[]) => {
      const newValues = [...prevValues];
      if (index) {
        if (supervisorComissionIndividualFill) {
          newValues[+index] = value;
        } else {
          Array.from({ length: monthsOfPayment }).forEach(
            (monthEl, monthIndex) => {
              newValues[monthIndex] = value;
            }
          );
        }
      }
      return newValues;
    });
  }

  function setSellerComissionFields(value: number, index: string | undefined) {
    setSellerComission((prevValues: number[]) => {
      const newValues = [...prevValues];
      if (index) {
        if (sellerComissionIndividualFill) {
          newValues[+index] = value;
        } else {
          Array.from({ length: monthsOfPayment }).forEach(
            (monthEl, monthIndex) => {
              newValues[monthIndex] = value;
            }
          );
        }
      }
      return newValues;
    });
  }

  function setSellerComissionRawFields(
    value: string,
    index: string | undefined
  ) {
    setSellerComissionRaw((prevValues: string[]) => {
      const newValues = [...prevValues];
      if (index) {
        if (sellerComissionIndividualFill) {
          newValues[+index] = value;
        } else {
          Array.from({ length: monthsOfPayment }).forEach(
            (monthEl, monthIndex) => {
              newValues[monthIndex] = value;
            }
          );
        }
      }
      return newValues;
    });
  }

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
          field="number-of-sellers"
          label="Quantos vendedores?"
          type="quantity"
          tooltip="Quantos vendedores tem em sua empresa"
          placeholder="Digite a quantidade"
          value={numberOfSellers}
          onChange={({ target }) => setNumberOfSellers(+target.value)}
        />
        <Group
          field="supervisor-comission"
          label="Comissão do(s) supervisor(es)"
          months={monthsOfPayment}
          tooltip="O percentual de comissão do(s) supervisor(es) de cada mês"
          data={supervisorComissionRaw}
          placeholder="Digite o percentual"
          onChange={({ target }) => {
            setSupervisorComissionFields(
              +target.value.replace(",", "."),
              target.dataset.index
            );
            setSupervisorComissionRawFields(target.value, target.dataset.index);
          }}
          onBlur={() => setSupervisorComissionIndividualFill(true)}
        />
        <Group
          field="seller-comission"
          label="Comissão do(s) vendedor(es)"
          months={monthsOfPayment}
          tooltip="O percentual de comissão do(s) vendedor(es) de cada mês"
          data={sellerComissionRaw}
          placeholder="Digite o percentual"
          onChange={({ target }) => {
            setSellerComissionFields(
              +target.value.replace(",", "."),
              target.dataset.index
            );
            setSellerComissionRawFields(target.value, target.dataset.index);
          }}
          onBlur={() => setSellerComissionIndividualFill(true)}
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
