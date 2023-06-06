import Breadcrumb from "@/components/Breadcrumb";
import Step1 from "@/layouts/Step1";
import Step2 from "@/layouts/Step2";
import Step3 from "@/layouts/Step3";
import Step4 from "@/layouts/Step4";
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
    comissionRates,
    setComissionRates,
    taxRate,
    setTaxRate,
    nonPayments,
    setNonPayments,
    salary,
    numberOfSupervisors,
    setNumberOfSupervisors,
    supervisorSalary,
    setSupervisorSalary,
    supervisorComission,
    setSupervisorComission,
    numberOfSellers,
    setNumberOfSellers,
    sellerSalary,
    setSellerSalary,
    sellerComission,
    setSellerComission,
    sales,
    setSales,
    average,
    setAverage,
    numberOfDays,
    setNumberOfDays,
    VTValue,
    setVTValue,
    VRValue,
    setVRValue,
    charges,
    setCharges,
    totals,
    media,
    setMedia,
    accountant,
    setAccountant,
    telephone,
    setTelephone,
    name,
    setName,
    email,
    setEmail,
    tel,
    setTel,
    howMeet,
    setHowMeet,
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
              supervisorSalary={supervisorSalary}
              setSupervisorSalary={setSupervisorSalary}
              sellerSalary={sellerSalary}
              setSellerSalary={setSellerSalary}
              VTValue={VTValue}
              setVTValue={setVTValue}
              VRValue={VRValue}
              setVRValue={setVRValue}
            />
            <Breadcrumb
              steps={["Etapa 1", "Etapa 2", "Etapa 3", "Etapa 4", "Resultado"]}
              stepActive={step}
            />
            {step === 1 && (
              <Step1
                payments={payments}
                monthsOfPayment={monthsOfPayment}
                setMonthsOfPayment={setMonthsOfPayment}
                comissionRates={comissionRates}
                setComissionRates={setComissionRates}
                taxRate={taxRate}
                setTaxRate={setTaxRate}
                nonPayments={nonPayments}
                setNonPayments={setNonPayments}
                setValidSteps={setValidSteps}
              />
            )}
            {step === 2 && (
              <Step2
                salary={salary}
                numberOfSupervisors={numberOfSupervisors}
                setNumberOfSupervisors={setNumberOfSupervisors}
                numberOfSellers={numberOfSellers}
                setNumberOfSellers={setNumberOfSellers}
                supervisorComission={supervisorComission}
                setSupervisorComission={setSupervisorComission}
                sellerComission={sellerComission}
                setSellerComission={setSellerComission}
                sales={sales}
                setSales={setSales}
                average={average}
                setAverage={setAverage}
                numberOfDays={numberOfDays}
                setNumberOfDays={setNumberOfDays}
                charges={charges}
                setCharges={setCharges}
                setValidSteps={setValidSteps}
              />
            )}
            {step === 3 && (
              <Step3
                totals={totals}
                media={media}
                setMedia={setMedia}
                accountant={accountant}
                setAccountant={setAccountant}
                telephone={telephone}
                setTelephone={setTelephone}
                setValidSteps={setValidSteps}
              />
            )}
            {step === 4 && (
              <Step4
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                tel={tel}
                setTel={setTel}
                howMeet={howMeet}
                setHowMeet={setHowMeet}
                step={step}
                setValidSteps={setValidSteps}
              />
            )}
            {step === 5 && <Result payments={payments} totals={totals} />}
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
              {step !== 5 && (
                <button className="next-step btn" onClick={nextStep}>
                  <span>{step === 4 ? "Ver resultado" : "Avançar"}</span>
                  {step !== 4 && <Arrow />}
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
