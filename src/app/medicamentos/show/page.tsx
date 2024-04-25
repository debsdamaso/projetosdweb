// pages/medicamentos/listar.tsx
"use client"
import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';

const ListarMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState<any[]>([]);

  useEffect(() => {
    const medicamentosFromStorage = localStorage.getItem('medicamentos');
    if (medicamentosFromStorage) {
      const parsedMedicamentos = JSON.parse(medicamentosFromStorage);
      setMedicamentos(parsedMedicamentos);
    }
  }, []);

  return (
    <main className="flex flex-col items-center">
      <NavBar active="medicamentos" />
      <div className="max-w-md mx-auto lg:ml-8">
        <h1 className="text-4xl font-bold mb-8">Lista de Medicamentos</h1>
        {medicamentos.length > 0 ? (
          <ul>
            {medicamentos.map((medicamento, index) => (
              <li key={index} className="mb-4">
                <h2 className="text-lg font-bold">{medicamento.nome}</h2>
                <p>Via: {medicamento.via}</p>
                <p>Lote: {medicamento.lote}</p>
                {/* Adicione outros detalhes do medicamento conforme necessário */}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum medicamento listado ainda.</p>
        )}
      </div>
    </main>
  );
};

export default ListarMedicamentos;
