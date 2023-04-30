import { StyledGroup } from "./Group.styles";
import { GroupProps } from "./Group.types";

export default function Group({
  field,
  label,
  months,
  type,
  ...props
}: GroupProps) {
  return (
    <StyledGroup>
      <h3>{label}</h3>
      <div className="group-fields">
        {Array.from({ length: months }, (item, index) => (
          <div key={index}>
            <label htmlFor={`${field}-month-${index}`}>mês {index + 1}</label>
            <input
              name={`${field}-month-${index}`}
              id={`${field}-month-${index}`}
              type={type}
              data-index={index}
              {...props}
            />
          </div>
        ))}
      </div>
    </StyledGroup>
  );
}
