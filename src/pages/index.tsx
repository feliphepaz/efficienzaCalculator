import Breadcrumb from "@/components/Breadcrumb";
import Step1 from "@/layouts/Step1";
import Step2 from "@/layouts/Step2";
import Step3 from "@/layouts/Step3";
import Step4 from "@/layouts/Step4";
import { useEffect, useState } from "react";
import { useData } from "@/hooks/useData";
import Result from "@/layouts/Result";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import About from "@/layouts/About";
import Footer from "@/layouts/Footer";
import Arrow from "@/components/Arrow";
import Settings from "@/components/Settings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const {
    payments,
    monthsOfPayment,
    setMonthsOfPayment,
    comissionRatesRaw,
    setComissionRatesRaw,
    setComissionRates,
    taxRateRaw,
    setTaxRateRaw,
    setTaxRate,
    nonPaymentsRaw,
    setNonPaymentsRaw,
    setNonPayments,
    salary,
    numberOfSupervisors,
    setNumberOfSupervisors,
    supervisorSalary,
    setSupervisorSalary,
    supervisorComissionRaw,
    setSupervisorComissionRaw,
    setSupervisorComission,
    numberOfSellers,
    setNumberOfSellers,
    sellerSalary,
    setSellerSalary,
    sellerComissionRaw,
    setSellerComissionRaw,
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
    chargesRaw,
    setChargesRaw,
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
    newsletterRegister,
    setNewsletterRegister,
    step,
    setStep,
    validSteps,
    setValidSteps,
  } = useData();

  function createError() {
    toast.error("Preencha todos os campos!", {
      position: "bottom-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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
    } else {
      createError();
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
              steps={["Taxas", "Equipe", "Verba", "Resultado"]}
              stepActive={step}
            />
            {step === 1 && (
              <Step1
                payments={payments}
                monthsOfPayment={monthsOfPayment}
                setMonthsOfPayment={setMonthsOfPayment}
                comissionRatesRaw={comissionRatesRaw}
                setComissionRatesRaw={setComissionRatesRaw}
                setComissionRates={setComissionRates}
                taxRateRaw={taxRateRaw}
                setTaxRateRaw={setTaxRateRaw}
                setTaxRate={setTaxRate}
                nonPaymentsRaw={nonPaymentsRaw}
                setNonPaymentsRaw={setNonPaymentsRaw}
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
                supervisorComissionRaw={supervisorComissionRaw}
                setSupervisorComissionRaw={setSupervisorComissionRaw}
                setSupervisorComission={setSupervisorComission}
                sellerComissionRaw={sellerComissionRaw}
                setSellerComissionRaw={setSellerComissionRaw}
                setSellerComission={setSellerComission}
                sales={sales}
                setSales={setSales}
                average={average}
                setAverage={setAverage}
                numberOfDays={numberOfDays}
                setNumberOfDays={setNumberOfDays}
                chargesRaw={chargesRaw}
                setChargesRaw={setChargesRaw}
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
            {/* {step === 4 && (
              <Step4
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                tel={tel}
                setTel={setTel}
                howMeet={howMeet}
                setHowMeet={setHowMeet}
                newsletterRegister={newsletterRegister}
                setNewsletterRegister={setNewsletterRegister}
                setValidSteps={setValidSteps}
              />
            )} */}
            {step === 4 && (
              <Result payments={payments} salary={salary} totals={totals} />
            )}
            <nav
              style={
                step !== 1
                  ? { justifyContent: "space-between" }
                  : { justifyContent: "flex-end" }
              }
              className="navegation"
            >
              {step !== 1 && (
                <button className="prev-step btn" onClick={prevStep}>
                  <Arrow />
                  <span>Voltar</span>
                </button>
              )}
              {step !== 4 && (
                <button className="next-step btn" onClick={nextStep}>
                  <span>{step === 3 ? "Ver resultado" : "Avançar"}</span>
                  {step !== 3 && <Arrow />}
                </button>
              )}
            </nav>
          </div>
        </div>
      </main>
      <About />
      <Footer />
      <ToastContainer />
    </>
  );
}
