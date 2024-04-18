import Image from "next/image";
import { NavBar } from "@/components/NavBar";
import ButtonGroup from "@/components/ButtonGroup";

export default function Funcionarios() {
  const buttons = ["Adicionar Funcionário", "Editar Funcionário", "Listar Funcionários"];

  return (
    <main className="flex flex-col items-center min-h-screen">
      <NavBar active="funcionarios" />
      <div className="flex items-center mb-8">
        <div style={{ marginRight: '50rem', marginTop: '5vh' }}>
          <h2 className="text-2xl mt-4 mb-0">Escolha uma opção</h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div style={{ marginRight: '54rem', marginTop: '5vh' }}>
          <ButtonGroup buttons={buttons} />
        </div>
      </div>
    </main>
  );
}