import Input from "@/components/Input";
import Select from "@/components/Select";
import { useEffect, useRef } from "react";
import { Step4Props } from "./Step4.types";
import Switch from "@/components/Switch";

export default function Step4({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
  howMeet,
  setHowMeet,
  newsletterRegister,
  setNewsletterRegister,
  setValidSteps,
}: Step4Props) {
  const step4 = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const fields = step4.current?.querySelectorAll("input, select");
    const submitBtn = document.querySelector(".next-step");
    submitBtn?.addEventListener("click", () => {
      const fieldsArray = fields ? Array.from(fields) : [];
      const emptyFields = fieldsArray.filter((field: any) => !field.value);
      if (emptyFields.length === 0) {
        setValidSteps([true, true, true, true, false]);
      } else {
        setValidSteps([false, false, false, false, false]);
      }
    });
  }, []);

  function maskTel(value: any) {
    const telFormat = value.replace(/\D/g, "");
    const telLength = telFormat.length;

    if (telLength < 3) {
      return "(" + telFormat;
    } else if (telLength < 7) {
      return "(" + telFormat.slice(0, 2) + ") " + telFormat.slice(2);
    } else if (telLength < 10) {
      return (
        "(" +
        telFormat.slice(0, 2) +
        ") " +
        telFormat.slice(2, 6) +
        " " +
        telFormat.slice(6)
      );
    } else {
      return (
        "(" +
        telFormat.slice(0, 2) +
        ") " +
        telFormat.slice(2, 7) +
        " " +
        telFormat.slice(7, 11)
      );
    }
  }

  return (
    <div className="step">
      <p className="instruction">
        Por último, gostaríamos de saber mais sobre você! Preencha os dados com
        as suas informações
      </p>
      <form ref={step4}>
        <Input
          field="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <Input
          field="email"
          label="Email"
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          field="tel"
          label="Telefone"
          type="text"
          placeholder="Digite seu telefone"
          value={tel}
          onChange={({ target }) => setTel(maskTel(target.value))}
        />
        <Select
          field="how-meet"
          label="Como conheceu a nossa ferramenta?"
          options={[
            "Pelo site da Efficienza Consultoria",
            "Pelo Google",
            "Por indicação",
            "Através de anúncios e campanhas",
            "Nenhuma das opções acima",
          ]}
          allowSelectOption={true}
          value={howMeet}
          onChange={({ target }) => setHowMeet(target.value)}
        />
        <div className="newsletter">
          <Switch
            switchClick={() => setNewsletterRegister(!newsletterRegister)}
            isChecked={newsletterRegister}
          />
          <span>Desejo receber novidades sobre o mercado de consórcios</span>
        </div>
      </form>
      <div className="privacy">
        <p>
          Ao prosseguir você assume ter aceitado a nossa{" "}
          <a
            href="https://efficienzaconsultoria.com/politica-de-privacidade.pdf"
            target="_blank"
          >
            política de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
