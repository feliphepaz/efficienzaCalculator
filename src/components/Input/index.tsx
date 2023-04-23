import { StyledInput } from "./Input.styles";
import { InputProps } from "./Input.types";

export default function Select({ field, label, type, ...props }: InputProps) {
  return (
    <StyledInput>
      <label htmlFor={field}>{label}</label>
      <input name={field} id={field} type={type} {...props} />
    </StyledInput>
  );
}
