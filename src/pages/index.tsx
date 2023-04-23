import Select from "@/components/Select";
import Input from "@/components/Input";
import { useContext } from "react";
import AppContext from "@/contexts/AppContext";

export default function Home() {
  const { firstTable } = useContext(AppContext);

  console.log(firstTable);

  return (
    <main className="container">
      <form>
        <Select
          field="months-payment"
          label="Serão quantos meses de pagamento?"
          options={[1, 2, 3]}
        />
        <Input
          field="commision-tax"
          label="Qual será a taxa de comissão? (em %)"
          type="number"
        />
        <Input
          field="commision-tax"
          label="Qual será a taxa de impostos? (em %)"
          type="number"
        />
      </form>
    </main>
  );
}
