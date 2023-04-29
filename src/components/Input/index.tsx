import { StyledInput } from "./Input.styles";
import { InputProps } from "./Input.types";
import React from "react";

export default function Input({
  field,
  label,
  type,
  allowDot,
  ...props
}: InputProps) {
  function preventDot(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "." || e.key === "," || e.key === "-") {
      e.preventDefault();
    }
  }

  return (
    <StyledInput>
      <label htmlFor={field}>{label}</label>
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
