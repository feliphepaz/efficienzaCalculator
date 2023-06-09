import Input from "@/components/Input";
import { useEffect, useRef } from "react";
import { Step3Props } from "./Step3.types";

export default function Step3({
  totals,
  media,
  setMedia,
  accountant,
  setAccountant,
  telephone,
  setTelephone,
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
        setValidSteps([true, true, true, false]);
      } else {
        setValidSteps([false, false, false, false]);
      }
    });
  }, []);

  return (
    <>
      <p className="instruction">
        Aqui você deve preencher os campos com todos os gastos referente a
        anúncios, serviços, etc
      </p>
      <form ref={step3}>
        <Input
          field="media"
          label="Quanto será utilizado de verba para mídia?"
          type="currency"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite o valor"
          value={media}
          onChange={({ target }) => setMedia(+(target as any).rawValue)}
        />
        <Input
          field="accountant"
          label="Quanto será pago para o contador?"
          type="currency"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite o valor"
          value={accountant}
          onChange={({ target }) => setAccountant(+(target as any).rawValue)}
        />
        <Input
          field="telephone"
          label="Quanto será gasto de telefone?"
          type="currency"
          tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
          placeholder="Digite o valor"
          value={telephone}
          onChange={({ target }) => setTelephone(+(target as any).rawValue)}
        />
      </form>
    </>
  );
}
