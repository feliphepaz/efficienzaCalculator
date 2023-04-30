import { TotalsProps } from "@/types/useData";

export interface Step3Props {
  totals: TotalsProps | null;
  setMedia: (value: number) => void;
  setAccountant: (value: number) => void;
  setTelephone: (value: number) => void;
  setValidSteps: (value: boolean[]) => void;
}
