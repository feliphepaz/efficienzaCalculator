import { StyledBreadcrumb } from "./Breadcrumb.styles";
import { BreadcrumbProps } from "./Breadcrumb.types";

export default function Breadcrumb({ steps, stepActive }: BreadcrumbProps) {
  return (
    <StyledBreadcrumb>
      <hr />
      <ul>
        {steps.map((stepName, step) => (
          <li className={step + 1 === stepActive ? "active" : ""}>
            <span>{step + 1}</span>
            <h2>{stepName}</h2>
          </li>
        ))}
      </ul>
    </StyledBreadcrumb>
  );
}
