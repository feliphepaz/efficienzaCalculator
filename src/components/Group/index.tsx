import { StyledGroup } from "./Group.styles";
import { GroupProps } from "./Group.types";
import { useState } from "react";
import Image from "next/image";

export default function Group({
  field,
  label,
  months,
  type,
  tooltip,
  ...props
}: GroupProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <StyledGroup className="field-group">
      <div className="label-wrapper">
        <h3>{label}</h3>
        <div className="tooltip">
          <Image
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
            src={"/tooltip.svg"}
            alt="Tooltip"
            width={15}
            height={15}
          />
          <p className={showTooltip ? "active" : ""}>{tooltip}</p>
        </div>
      </div>
      <div className="group-fields">
        {Array.from({ length: months }, (item, index) => (
          <div key={index}>
            <label htmlFor={`${field}-month-${index}`}>mês {index + 1}</label>
            <input
              name={`${field}-month-${index}`}
              id={`${field}-month-${index}`}
              type={type}
              data-index={index}
              {...props}
            />
          </div>
        ))}
      </div>
    </StyledGroup>
  );
}
