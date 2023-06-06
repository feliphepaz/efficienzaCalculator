import { InputHTMLAttributes } from "react";

export interface GroupProps extends InputHTMLAttributes<HTMLInputElement> {
  field: string;
  label: string;
  months: number;
  tooltip: string;
}
