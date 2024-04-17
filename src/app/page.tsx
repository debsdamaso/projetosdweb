import Image from "next/image";
import { NavBar } from "@/components/NavBar"

export default function Home() {

  return (
    <main className="flex flex-col items-center min-h-screen">
      <NavBar active="medicamentos" />
      <div className="flex items-center mb-8">
        <div style={{ marginRight: '50rem', marginTop: '5vh' }}>
          <h2 className="text-2xl mt-4 mb-2">Sistema de controle de medicamentos</h2>
          <h4 className="italic">Gerencie medicamentos e funcionários em sua unidade</h4>
        </div>
      </div>
    </main>
  );
}
