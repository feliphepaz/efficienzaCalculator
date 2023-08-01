import { useEffect } from "react";
import { StyledResult } from "./Result.styles";
import { ResultProps } from "./Result.types";
import PDF from "@/components/PDF";
import axios from "axios";

export default function Result({
  payments,
  salary,
  budget,
  totals,
  totalWithNoSales,
  setTotalWithNoSales,
  name,
  email,
  tel,
  howMeet,
  newsletterRegister,
  emailSended,
  setEmailSended,
}: ResultProps) {
  function getTotal(index: number) {
    if (salary && budget && totals) {
      return (
        salary.supervisor.supervisorSalary *
          salary.supervisor.numberOfSupervisors +
        (salary.sales *
          salary.average *
          salary.supervisor.supervisorComission[index]) /
          100 +
        salary.seller.sellerSalary * salary.seller.numberOfSellers +
        (salary.sales * salary.average * salary.seller.sellerComission[index]) /
          100 +
        ((salary.supervisor.supervisorSalary *
          salary.supervisor.numberOfSupervisors +
          (salary.sales *
            salary.average *
            salary.supervisor.supervisorComission[index]) /
            100 +
          salary.seller.sellerSalary * salary.seller.numberOfSellers +
          (salary.sales *
            salary.average *
            salary.seller.sellerComission[index]) /
            100) *
          salary.charges) /
          100 +
        (salary.benefits.VT.VTValue *
          salary.benefits.numberOfDays *
          (salary.supervisor.numberOfSupervisors +
            salary.seller.numberOfSellers) +
          salary.benefits.VR.VRValue *
            salary.benefits.numberOfDays *
            (salary.supervisor.numberOfSupervisors +
              salary.seller.numberOfSellers)) +
        budget.media +
        budget.accountant +
        budget.telephone +
        budget.otherValues
      );
    } else {
      return 0;
    }
  }

  const cumulativeValues = payments.map((value, index) =>
    payments
      .slice(0, index + 1)
      .reduce((accumulator, value) => accumulator + value.liquid, 0)
  );

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  async function sendEmail() {
    try {
      const response = await axios.post(
        "https://efficienza-calculator-backend.vercel.app/send-email",
        {
          name,
          email,
          tel,
          howMeet,
          newsletterRegister: newsletterRegister ? "Sim" : "Não",
        }
      );
      setEmailSended(true);
    } catch (err) {
      setEmailSended(false);
    }
  }

  useEffect(() => {
    if (!emailSended) {
      sendEmail();
    }
  }, [emailSended]);

  return (
    <StyledResult className="step">
      <div className="head">
        <span>Custo total</span>
        <h2>{totals && formatter.format(totals.total)}</h2>
        <p>
          Caso não haja venda: {totals && formatter.format(totalWithNoSales)}
        </p>
      </div>
      <div className="costs">
        <h2>Demonstrativo de custos</h2>
        <div className="costs-list">
          {payments.map((payment, paymentIndex) => (
            <div
              key={paymentIndex}
              className={
                totals && cumulativeValues[paymentIndex] - totals.total > 0
                  ? "positive payment"
                  : "negative payment"
              }
            >
              <h3>{paymentIndex + 1}º mês de vendas</h3>
              <ul className="payments-flow">
                {Array.from(
                  { length: paymentIndex + 1 },
                  (installment, installmentIndex) => (
                    <>
                      <li key={installmentIndex}>
                        <span className="payment-label">
                          {installmentIndex + 1}º parcela do{" "}
                          {paymentIndex + 1 - installmentIndex}º mês de vendas
                        </span>
                        <span className="payment-value">
                          +{formatter.format(payments[installmentIndex].liquid)}
                        </span>
                      </li>
                    </>
                  )
                )}
                <li>
                  <span className="payment-label">Custo total</span>
                  <span className="payment-value">
                    -{formatter.format(getTotal(paymentIndex))}
                  </span>
                </li>
              </ul>
              <div className="total">
                <span className="total-label">Déficit / Superavit</span>
                <span className="total-value">
                  {totals &&
                    formatter.format(
                      cumulativeValues[paymentIndex] - getTotal(paymentIndex)
                    )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resume">
        <p>
          Ao final de <strong>{payments[0].monthsOfPayment + 1} meses</strong>{" "}
          mantendo a média de <strong>{salary?.sales} vendas</strong>, o(a)
          representante de consórcio terá formado uma carteira de{" "}
          <strong>
            {salary && salary.sales * (payments[0].monthsOfPayment + 1)}{" "}
            consorciados
          </strong>{" "}
          e pelo crédito médio de {salary && formatter.format(salary.average)}{" "}
          terá{" "}
          <strong className="invoicing">
            {salary &&
              formatter.format(
                salary.sales *
                  (payments[0].monthsOfPayment + 1) *
                  salary.average
              )}{" "}
            à faturar
          </strong>
          .
        </p>
      </div>
      <PDF
        payments={payments}
        salary={salary}
        totals={totals}
        totalWithNoSales={totalWithNoSales}
        setTotalWithNoSales={setTotalWithNoSales}
      />
    </StyledResult>
  );
}
