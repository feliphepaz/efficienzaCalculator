export interface Step3Props {
  media: number;
  setMedia: (value: number) => void;
  accountant: number;
  setAccountant: (value: number) => void;
  telephone: number;
  setTelephone: (value: number) => void;
  otherValues: number;
  setOtherValues: (value: number) => void;
  setValidSteps: (value: boolean[]) => void;
}
