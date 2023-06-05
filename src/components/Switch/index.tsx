import { StyledSwitch } from "./Switch.styles";
import { SwitchProps } from "./Switch.types";

export default function Switch({ switchClick, isChecked }: SwitchProps) {
  return (
    <StyledSwitch onClick={switchClick}>
      <div className="check">
        <input
          type="checkbox"
          className="check-check"
          defaultChecked={isChecked}
        />
        <div className="check-indicator" />
      </div>
    </StyledSwitch>
  );
}
