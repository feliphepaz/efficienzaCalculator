import { InputHTMLAttributes } from "react";

export interface GroupProps extends InputHTMLAttributes<HTMLInputElement> {
  field: string;
  label: string;
  months: number;
  data: string[];
  tooltip: string;
}
