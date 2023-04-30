import Input from "@/components/Input";
import { useEffect, useRef } from "react";
import { Step3Props } from "./Step3.types";

export default function Step3({
  totals,
  setMedia,
  setAccountant,
  setTelephone,
  setValidSteps,
}: Step3Props) {
  const step3 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fields = step3.current?.querySelectorAll("input");
    const fieldsArray = fields ? Array.from(fields) : [];
    const emptyFields = fieldsArray.filter((field: any) => field.value === "");
    if (emptyFields.length === 0) {
      setValidSteps([true, true, true]);
    } else {
      setValidSteps([false, false, false]);
    }
  }, [totals]);

  return (
    <form ref={step3}>
      <Input
        field="media"
        label="Quanto será utilizado de verba para mídia? (em R$)"
        type="number"
        onChange={({ target }) => setMedia(+target.value)}
      />
      <Input
        field="accountant"
        label="Quanto será pago para o contador? (em R$)"
        type="number"
        onChange={({ target }) => setAccountant(+target.value)}
      />
      <Input
        field="telephone"
        label="Quanto será gasto de telefone? (em R$)"
        type="number"
        onChange={({ target }) => setTelephone(+target.value)}
      />
    </form>
  );
}
