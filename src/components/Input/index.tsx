import { StyledInput } from "./Input.styles";
import { InputProps } from "./Input.types";
import React, { useState } from "react";
import Image from "next/image";

export default function Input({
  field,
  label,
  type,
  allowDot,
  tooltip,
  ...props
}: InputProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  function preventDot(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "." || e.key === "," || e.key === "-") {
      e.preventDefault();
    }
  }

  return (
    <StyledInput className="field-input">
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
      <input
        name={field}
        id={field}
        type={type}
        onKeyDown={(e) => (allowDot ? undefined : preventDot(e))}
        {...props}
      />
    </StyledInput>
  );
}
