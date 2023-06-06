import { StyledAbout } from "./About.styles";
import Image from "next/image";

export default function About() {
  return (
    <StyledAbout>
      <div className="container">
        <div className="content">
          <h2>Já conhece a Efficienza?</h2>
          <p>
            <strong>
              A gestão comercial de consórcios pode ser um desafio para muitas
              empresas, especialmente aquelas que buscam se destacar em um
              mercado cada vez mais competitivo.
            </strong>
          </p>
          <p>
            É aí que entra a <strong>Efficienza</strong>! Ajudamos empresas a
            identificar oportunidades de melhoria, otimizar a performance da
            equipe de vendas e terceirizar atividades para aumentar a eficiência
            operacional.
          </p>
          <a href="https://efficienzaconsultoria.com/" target="_blank">
            Conheça nosso site{" "}
            <Image src={"/arrow-link.svg"} alt="Seta" width={21} height={14} />
          </a>
        </div>
      </div>
    </StyledAbout>
  );
}
