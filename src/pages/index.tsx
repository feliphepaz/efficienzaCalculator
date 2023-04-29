import Select from "@/components/Select";
import Input from "@/components/Input";
import { useData } from "@/hooks/useData";
import { useEffect } from "react";
import Group from "@/components/Group";

export default function Home() {
  return (
    <main className="container">
      <form>
        <Select
          field="months-payment"
          label="Serão quantos meses de pagamento?"
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <Group
          field="comission-rates"
          label="Taxas de comissão (em %)"
          months={4}
          type="number"
        />
        <Input
          field="commision-tax"
          label="Qual será a taxa de comissões? (em %)"
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
