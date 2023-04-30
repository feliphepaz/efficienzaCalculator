import Breadcrumb from "@/components/Breadcrumb";
import Step1 from "@/layouts/Step1";
import Step2 from "@/layouts/Step2";
import { useData } from "@/hooks/useData";

export default function Home() {
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

  return (
    <main className="container">
      <Breadcrumb
        steps={["Etapa 1", "Etapa 2", "Etapa 3", "Resultado"]}
        stepActive={1}
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
      <nav className="navegation">
        <button>Anterior</button>
        <button>Próximo</button>
      </nav>
    </main>
  );
}
