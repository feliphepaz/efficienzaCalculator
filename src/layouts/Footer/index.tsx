import { StyledFooter } from "./Footer.styles";
import Image from "next/image";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <Image
          src={"/logo.svg"}
          alt="Efficienza Consultoria"
          width={113}
          height={28}
        />
        <small>
          Efficienza Consultoria © 2023. Todos os direitos reservados
        </small>
      </div>
    </StyledFooter>
  );
}
