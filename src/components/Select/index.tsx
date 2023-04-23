import { StyledSelect } from "./Select.styles";
import { SelectProps } from "./Select.types";

export default function Select({
  field,
  label,
  options,
  ...props
}: SelectProps) {
  return (
    <StyledSelect>
      <label htmlFor={field}>{label}</label>
      <select name={field} id={field} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StyledSelect>
  );
}
