import { StyledResult } from "./Result.styles";
import { ResultProps } from "./Result.types";

export default function Result({ payments, totals }: ResultProps) {
  const cumulativeValues = payments.map((value, index) =>
    payments
      .slice(0, index + 1)
      .reduce((accumulator, value) => accumulator + value.liquid, 0)
  );

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledResult>
      <div className="head">
        <span>Custo total</span>
        <h2>R$ 37.420,00</h2>
        <p>Caso não haja venda: R$ 27.852,00</p>
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
                          {formatter.format(payments[installmentIndex].liquid)}
                        </span>
                      </li>
                    </>
                  )
                )}
                <li>
                  <span className="payment-label">
                    Total custo equipe consórcio
                  </span>
                  <span className="payment-value">
                    {totals && formatter.format(totals.total)}
                  </span>
                </li>
              </ul>
              <div className="total">
                <span className="total-label">Déficit / Superavit</span>
                <span className="total-value">
                  {totals &&
                    formatter.format(
                      cumulativeValues[paymentIndex] - totals.total
                    )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resume">
        <p>
          Ao final de <strong>6 meses</strong> mantendo a média de{" "}
          <strong>33 vendas</strong>, a concessionária terá formado uma carteira
          de <strong>198 consorciados</strong> e pelo crédito médio de R$
          35.000,00 terá R${" "}
          <strong className="invoicing">6.930.000,00 à faturar</strong>.
        </p>
      </div>
    </StyledResult>
  );
}
