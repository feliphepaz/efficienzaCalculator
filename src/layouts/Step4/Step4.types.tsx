export interface Step4Props {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  tel: string;
  setTel: (value: string) => void;
  howMeet: string;
  setHowMeet: (value: string) => void;
  newsletterRegister: boolean;
  setNewsletterRegister: (value: boolean) => void;
  setValidSteps: (value: boolean[]) => void;
}
