import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  field: string;
  label: string;
  type: "currency" | "percentage" | "quantity" | "text";
  allowDot?: boolean;
  tooltip?: string;
}

export interface StyledInputProps {
  type: "currency" | "percentage" | "quantity" | "text";
}
