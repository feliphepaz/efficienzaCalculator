import { StyledGroup } from "./Group.styles";
import { GroupProps } from "./Group.types";
import { useState } from "react";
import Image from "next/image";
import Cleave from "cleave.js/react";

export default function Group({
  field,
  label,
  months,
  data,
  tooltip,
  ...props
}: GroupProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <StyledGroup className="field-group">
      <div className="label-wrapper">
        <h3>{label}</h3>
        <div className="tooltip">
          <Image
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
            src={"/tooltip.svg"}
            alt="Tooltip"
            width={15}
            height={15}
          />
          <p className={showTooltip ? "active" : ""}>{tooltip}</p>
        </div>
      </div>
      <div className="group-fields">
        {Array.from({ length: months }, (item, index) => (
          <div key={index}>
            <label htmlFor={`${field}-month-${index}`}>mês {index + 1}</label>
            <div className="input-wrapper">
              <Cleave
                name={`${field}-month-${index}`}
                id={`${field}-month-${index}`}
                options={{
                  numeral: true,
                  numeralDecimalMark: ",",
                }}
                data-index={index}
                value={data[index]}
                {...props}
              />
              <span>%</span>
            </div>
          </div>
        ))}
      </div>
    </StyledGroup>
  );
}
