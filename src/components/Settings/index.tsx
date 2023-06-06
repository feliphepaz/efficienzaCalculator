import { useState } from "react";
import { StyledSettings } from "./Settings.styles";
import Image from "next/image";
import Switch from "../Switch";
import Input from "../Input";
import { SettingsProps } from "./Settings.types";

export default function Settings({
  supervisorSalary,
  setSupervisorSalary,
  sellerSalary,
  setSellerSalary,
  VTValue,
  setVTValue,
  VRValue,
  setVRValue,
}: SettingsProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [disableSupervisorSalary, setDisableSupervisorSalary] = useState(false);
  const [disableSellerSalary, setDisableSellerSalary] = useState(false);
  const [disableVRValue, setDisableVRValue] = useState(false);
  const [disableVTValue, setDisableVTValue] = useState(false);

  return (
    <StyledSettings>
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="handle-button"
      >
        Configurações{" "}
        <Image src={"/gear.svg"} alt="Engrenagem" width={15} height={15} />
        {showSettings && <span>Fechar</span>}
      </button>
      <div className={showSettings ? "settings-list active" : "settings-list"}>
        <div>
          <div>
            <p>Desativar salário automático de um supervisor</p>
            <Switch
              switchClick={() =>
                setDisableSupervisorSalary(!disableSupervisorSalary)
              }
              isChecked={disableSupervisorSalary}
            />
          </div>
          {disableSupervisorSalary && (
            <Input
              field="supervisor-salary"
              label="Qual será o salário de um supervisor?"
              type="currency"
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              value={supervisorSalary}
              onChange={({ target }) =>
                setSupervisorSalary(+(target as any).rawValue)
              }
            />
          )}
        </div>
        <hr />
        <div>
          <div>
            <p>Desativar salário automático de um vendedor</p>
            <Switch
              switchClick={() => setDisableSellerSalary(!disableSellerSalary)}
              isChecked={disableSellerSalary}
            />
          </div>
          {disableSellerSalary && (
            <Input
              field="seller-salary"
              label="Qual será o salário de um vendedor?"
              type="currency"
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              value={sellerSalary}
              onChange={({ target }) =>
                setSellerSalary(+(target as any).rawValue)
              }
            />
          )}
        </div>
        <hr />
        <div>
          <div>
            <p>Desativar valor automático do vale refeição</p>
            <Switch
              switchClick={() => setDisableVRValue(!disableVRValue)}
              isChecked={disableVRValue}
            />
          </div>
          {disableVRValue && (
            <Input
              field="vr-value"
              label="Qual será o valor do VR?"
              type="currency"
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              value={VRValue}
              onChange={({ target }) => setVRValue(+(target as any).rawValue)}
            />
          )}
        </div>
        <hr />
        <div>
          <div>
            <p>Desativar valor automático do vale transporte</p>
            <Switch
              switchClick={() => setDisableVTValue(!disableVTValue)}
              isChecked={disableVTValue}
            />
          </div>
          {disableVTValue && (
            <Input
              field="vt-value"
              label="Qual será o valor do VT?"
              type="currency"
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              value={VTValue}
              onChange={({ target }) => setVTValue(+(target as any).rawValue)}
            />
          )}
        </div>
      </div>
    </StyledSettings>
  );
}
