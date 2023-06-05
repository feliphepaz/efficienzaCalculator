import { StyledHeader } from "./Header.styles";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <Image
          src={"/logo.svg"}
          alt="Efficienza Consultoria"
          width={153}
          height={38}
        />
        <h1>Calculadora de gastos para monstar uma equipe de consórcio</h1>
      </div>
    </StyledHeader>
  );
}
