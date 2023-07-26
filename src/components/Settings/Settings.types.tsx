export interface SettingsProps {
  disableIncrementedRate: boolean;
  setDisableIncrementedRate: (value: boolean) => void;
  supervisorSalary: number;
  setSupervisorSalary: (value: number) => void;
  sellerSalary: number;
  setSellerSalary: (value: number) => void;
  VTValue: number;
  setVTValue: (value: number) => void;
  VRValue: number;
  setVRValue: (value: number) => void;
  tutorial: boolean;
}
