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
      {payments.map((payment, paymentIndex) => (
        <div key={paymentIndex} className="payment">
          <h2>{paymentIndex + 1}º mês de vendas</h2>
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
                  <hr />
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
          <span className="total">
            Déficit / Superavit:{" "}
            <strong
              className={
                totals && cumulativeValues[paymentIndex] - totals.total > 0
                  ? "positive"
                  : "negative"
              }
            >
              {totals &&
                formatter.format(cumulativeValues[paymentIndex] - totals.total)}
            </strong>
          </span>
        </div>
      ))}
    </StyledResult>
  );
}
