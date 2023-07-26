import Input from "@/components/Input";
import { useEffect, useRef } from "react";
import { Step3Props } from "./Step3.types";

export default function Step3({
  media,
  setMedia,
  accountant,
  setAccountant,
  telephone,
  setTelephone,
  otherValues,
  setOtherValues,
  setValidSteps,
}: Step3Props) {
  const step3 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fields = step3.current?.querySelectorAll("input");
    const submitBtn = document.querySelector(".next-step");
    submitBtn?.addEventListener("click", () => {
      const fieldsArray = fields ? Array.from(fields) : [];
      const emptyFields = fieldsArray.filter((field: any) => !field.value);
      if (emptyFields.length === 0) {
        setValidSteps([true, true, true, false, false]);
      } else {
        setValidSteps([false, false, false, false, false]);
      }
    });
  }, []);

  return (
    <div className="step">
      <p className="instruction">
        Adicione agora todas as informações solicitadas para prosseguirmos com a
        análise
      </p>
      <form ref={step3}>
        <Input
          field="media"
          label="Quanto será utilizado de verba para mídia?"
          type="currency"
          tooltip="Inclua também os valores gastos com publicidade, marketing digital e internet"
          placeholder="Digite o valor"
          value={media}
          onChange={({ target }) => setMedia(+(target as any).rawValue)}
        />
        <Input
          field="accountant"
          label="Quanto será pago para o contador?"
          type="currency"
          tooltip="Qual serão os gastos referente a contabilidade e toda a parte burocrática da sua empresa"
          placeholder="Digite o valor"
          value={accountant}
          onChange={({ target }) => setAccountant(+(target as any).rawValue)}
        />
        <Input
          field="telephone"
          label="Quanto será gasto de telefone?"
          type="currency"
          tooltip="O valor em média do custo de telefonemas feitos por supervisores e vendedores"
          placeholder="Digite o valor"
          value={telephone}
          onChange={({ target }) => setTelephone(+(target as any).rawValue)}
        />
        <Input
          field="other-values"
          label="Quais são os outros custos?"
          type="currency"
          tooltip="Informe aqui todos os custos restantes da operação, como viagens, etc"
          placeholder="Digite o valor"
          value={otherValues}
          onChange={({ target }) => setOtherValues(+(target as any).rawValue)}
        />
      </form>
    </div>
  );
}
