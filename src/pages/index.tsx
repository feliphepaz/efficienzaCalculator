import Breadcrumb from "@/components/Breadcrumb";
import Step1 from "@/layouts/Step1";
import Step2 from "@/layouts/Step2";
import { useState } from "react";
import { useData } from "@/hooks/useData";

export default function Home() {
  const [disclaimer, setDisclaimer] = useState(false);

  const {
    payments,
    monthsOfPayment,
    setMonthsOfPayment,
    setComissionRates,
    setTaxRate,
    setNonPayments,
    step,
    setStep,
    validSteps,
    setValidSteps,
  } = useData();

  function prevStep() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      setStep(step);
    }
  }

  function nextStep() {
    if (validSteps[step - 1]) {
      setStep(step + 1);
      setDisclaimer(false);
    } else {
      setDisclaimer(true);
    }
  }

  return (
    <main className="container">
      <Breadcrumb
        steps={["Etapa 1", "Etapa 2", "Etapa 3", "Resultado"]}
        stepActive={step}
      />
      <Step1
        payments={payments}
        monthsOfPayment={monthsOfPayment}
        setMonthsOfPayment={setMonthsOfPayment}
        setComissionRates={setComissionRates}
        setTaxRate={setTaxRate}
        setNonPayments={setNonPayments}
        setValidSteps={setValidSteps}
      />
      <Step2 />
      {disclaimer && (
        <p className="disclaimer">Você precisa preencher todos os campos!</p>
      )}
      <nav className="navegation">
        <button onClick={prevStep}>Anterior</button>
        <button onClick={nextStep}>Próximo</button>
      </nav>
    </main>
  );
}
