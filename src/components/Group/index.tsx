import { StyledGroup } from "./Group.styles";
import { GroupProps } from "./Group.types";
import { useState, useEffect } from "react";
import { useData } from "@/hooks/useData";

export default function Group({ field, label, months, type }: GroupProps) {
  const [values, setValues] = useState<number[]>(Array(months).fill(null));
  const { setComissionRates, setNonPayments } = useData();

  function getValueFields(value: number, index: number) {
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  }

  function allFilledItems() {
    for (let i = 0; i < values.length; i++) {
      if (values[i] == null || values[i] == undefined) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (allFilledItems()) {
      if (field === "comission-rates") {
        setComissionRates(values);
      }
      if (field === "non-payments") {
        setNonPayments(values);
      }
    }
  }, [values]);

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
              onChange={({ target }) => getValueFields(+target.value, index)}
            />
          </div>
        ))}
      </div>
    </StyledGroup>
  );
}
