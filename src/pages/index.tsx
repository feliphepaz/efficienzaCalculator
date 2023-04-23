import Select from "@/components/Select";
import Input from "@/components/Input";

export default function Home() {
  return (
    <main className="container">
      <form>
        <Select
          field="months-payment"
          label="Serão quantos meses de pagamento?"
          options={[1, 2, 3]}
          onChange={() => console.log("mudou")}
        />
        <Input
          field="commision-tax"
          label="Qual será a taxa de comissão? (em %)"
          type="number"
        />
      </form>
    </main>
  );
}
