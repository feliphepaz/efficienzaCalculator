import Breadcrumb from "@/components/Breadcrumb";
import Step1 from "@/layouts/Step1";
import Step2 from "@/layouts/Step2";
import Step3 from "@/layouts/Step3";
import { useState } from "react";
import { useData } from "@/hooks/useData";
import Result from "@/layouts/Result";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Footer from "@/layouts/Footer";
import Image from "next/image";
import Arrow from "@/components/Arrow";
import Settings from "@/components/Settings";

export default function Home() {
  const [disclaimer, setDisclaimer] = useState(false);

  const {
    payments,
    monthsOfPayment,
    setMonthsOfPayment,
    setComissionRates,
    setTaxRate,
    setNonPayments,
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
    totals,
    setMedia,
    setAccountant,
    setTelephone,
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
    <>
      <Header />
      <Hero />
      <main className="tool">
        <div className="container">
          <div className="box">
            <Settings
              setSupervisorSalary={setSupervisorSalary}
              setSellerSalary={setSellerSalary}
              setVTValue={setVTValue}
              setVRValue={setVRValue}
            />
            <Breadcrumb
              steps={["Etapa 1", "Etapa 2", "Etapa 3", "Resultado"]}
              stepActive={step}
            />
            {step === 1 && (
              <Step1
                payments={payments}
                monthsOfPayment={monthsOfPayment}
                setMonthsOfPayment={setMonthsOfPayment}
                setComissionRates={setComissionRates}
                setTaxRate={setTaxRate}
                setNonPayments={setNonPayments}
                setValidSteps={setValidSteps}
              />
            )}
            {step === 2 && (
              <Step2
                salary={salary}
                setNumberOfSupervisors={setNumberOfSupervisors}
                setNumberOfSellers={setNumberOfSellers}
                setSupervisorComission={setSupervisorComission}
                setSellerComission={setSellerComission}
                setSales={setSales}
                setAverage={setAverage}
                setNumberOfDays={setNumberOfDays}
                setCharges={setCharges}
                setValidSteps={setValidSteps}
              />
            )}
            {step === 3 && (
              <Step3
                totals={totals}
                setMedia={setMedia}
                setAccountant={setAccountant}
                setTelephone={setTelephone}
                setValidSteps={setValidSteps}
              />
            )}
            {step === 4 && <Result payments={payments} totals={totals} />}
            {disclaimer && (
              <p className="disclaimer">
                Você precisa preencher todos os campos!
              </p>
            )}
            <nav className="navegation">
              <button className="prev-step btn" onClick={prevStep}>
                <Arrow />
                <span>Voltar</span>
              </button>
              {step !== 4 && (
                <button className="next-step btn" onClick={nextStep}>
                  <span>{step === 3 ? "Ver resultado" : "Avançar"}</span>
                  <Arrow />
                </button>
              )}
            </nav>
          </div>
        </div>
      </main>
      <About />
      <Footer />
    </>
  );
}
