import { StyledSelect } from "./Select.styles";
import { SelectProps } from "./Select.types";
import { useState } from "react";
import Image from "next/image";

export default function Select({
  field,
  label,
  options,
  tooltip,
  ...props
}: SelectProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <StyledSelect className="field-select">
      <div className="label-wrapper">
        <label htmlFor={field}>{label}</label>
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
      <select name={field} id={field} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
}
