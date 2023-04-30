import Breadcrumb from "@/components/Breadcrumb";
import Step1 from "@/layouts/Step1";

export default function Home() {
  return (
    <main className="container">
      <Breadcrumb
        steps={["Etapa 1", "Etapa 2", "Etapa 3", "Resultado"]}
        stepActive={1}
      />
      <Step1 />
    </main>
  );
}
