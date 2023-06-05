import { useState } from "react";
import { StyledSettings } from "./Settings.styles";
import Image from "next/image";
import Switch from "../Switch";
import Input from "../Input";

export default function Settings() {
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
              field="tax-rate"
              label="Qual será a taxa de imposto? (em %)"
              type="number"
              allowDot={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              onChange={({ target }) => setTaxRate(+target.value)}
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
              field="tax-rate"
              label="Qual será a taxa de imposto? (em %)"
              type="number"
              allowDot={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              onChange={({ target }) => setTaxRate(+target.value)}
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
              field="tax-rate"
              label="Qual será a taxa de imposto? (em %)"
              type="number"
              allowDot={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              onChange={({ target }) => setTaxRate(+target.value)}
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
              field="tax-rate"
              label="Qual será a taxa de imposto? (em %)"
              type="number"
              allowDot={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat porttitor dolor, eu posuere ex vitae. Ut et erat tincidunt"
              onChange={({ target }) => setTaxRate(+target.value)}
            />
          )}
        </div>
        <button className="btn">
          <span>Atualizar</span>
        </button>
      </div>
    </StyledSettings>
  );
}
