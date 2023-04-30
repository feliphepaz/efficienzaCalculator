import { StyledResult } from "./Result.styles";
import { ResultProps } from "./Result.types";

export default function Result({ payments, totals }: ResultProps) {
  return (
    <StyledResult>
      <div className="payment">
        <h2>1º mês de vendas</h2>
        <ul className="payments-flow">
          <li>
            <span className="payment-label">
              1º parcela do 1º mês de vendas
            </span>
            <span className="payment-value">R$ 9.107,18</span>
          </li>
          <hr />
          <li>
            <span className="payment-label">Total custo equipe consórcio</span>
            <span className="payment-value">R$ 74.344,00</span>
          </li>
        </ul>
        <span className="total">
          Déficit / Superavit:{" "}
          <strong className="positive">R$ 57.226,00</strong>
        </span>
      </div>
      <div className="payment">
        <h2>1º mês de vendas</h2>
        <ul className="payments-flow">
          <li>
            <span className="payment-label">
              1º parcela do 1º mês de vendas
            </span>
            <span className="payment-value">R$ 9.107,18</span>
          </li>
          <hr />
          <li>
            <span className="payment-label">Total custo equipe consórcio</span>
            <span className="payment-value">R$ 74.344,00</span>
          </li>
        </ul>
        <span className="total">
          Déficit / Superavit:{" "}
          <strong className="positive">R$ 57.226,00</strong>
        </span>
      </div>
    </StyledResult>
  );
}
