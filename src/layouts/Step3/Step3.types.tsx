import { TotalsProps } from "@/types/useData";

export interface Step3Props {
  totals: TotalsProps | null;
  media: number;
  setMedia: (value: number) => void;
  accountant: number;
  setAccountant: (value: number) => void;
  telephone: number;
  setTelephone: (value: number) => void;
  setValidSteps: (value: boolean[]) => void;
}
