import { InputHTMLAttributes } from "react";

export interface GroupProps extends InputHTMLAttributes<HTMLInputElement> {
  field: string;
  label: string;
  months: number;
  type: string;
  tooltip: string;
}
