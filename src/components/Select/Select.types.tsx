import { SelectHTMLAttributes } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  field: string;
  label: string;
  options: string[] | number[];
  tooltip?: string;
}
