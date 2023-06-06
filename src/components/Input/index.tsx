import { StyledInput } from "./Input.styles";
import { InputProps } from "./Input.types";
import React, { useState } from "react";
import Image from "next/image";
import Cleave from "cleave.js/react";

export default function Input({
  field,
  label,
  type,
  tooltip,
  ...props
}: InputProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <StyledInput className="field-input" type={type}>
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
      {type === "currency" && (
        <div className="input-wrapper">
          <span>R$</span>
          <Cleave
            name={field}
            id={field}
            options={{
              numeral: true,
              numeralDecimalMark: ",",
              delimiter: ".",
            }}
            {...props}
          />
        </div>
      )}
      {type === "percentage" && (
        <div className="input-wrapper">
          <Cleave
            name={field}
            id={field}
            options={{
              numericOnly: true,
              delimiter: ",",
              delimiterLazyShow: true,
              blocks: [2, 2],
            }}
            {...props}
          />
          <span>%</span>
        </div>
      )}
      {type === "quantity" && (
        <div className="input-wrapper">
          <span>Qtd</span>
          <Cleave
            name={field}
            id={field}
            options={{
              numericOnly: true,
            }}
            {...props}
          />
        </div>
      )}
    </StyledInput>
  );
}
