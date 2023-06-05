import { InputHTMLAttributes } from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  switchClick: React.MouseEventHandler<HTMLInputElement>;
  isChecked: boolean;
}
