import { StyledHero } from "./Hero.styles";

export default function Hero() {
  return (
    <StyledHero>
      <div className="container">
        <h2>
          Conheça agora a ferramenta que vai te ajudar a montar uma equipe!
        </h2>
        <p>
          <strong>Responda as perguntas</strong> abaixo e te daremos o resultado
          no final da pesquisa.
        </p>
      </div>
    </StyledHero>
  );
}
