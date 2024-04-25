// pages/medicamentos/atualizar.tsx
"use client"
import React from 'react';
import FormularioMedicamento from '@/components/FormularioMedicamento';
import NavBar from '@/components/NavBar';
import { salvarMedicamentosLocalmente } from '@/utils/localStorage';

const AtualizarMedicamento = () => {
  const handleSubmit = (medicamentoAtualizado: any) => {
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos') || '[]');
    const medicamentosAtualizados = medicamentos.map((medicamento: any) => {
      if (medicamento.nome === medicamentoAtualizado.nome) {
        return medicamentoAtualizado; // Atualiza o medicamento correspondente
      }
      return medicamento;
    });
    salvarMedicamentosLocalmente(medicamentosAtualizados); // Salva os medicamentos atualizados
  };

  return (
    <main className="flex flex-col items-center">
      <NavBar active="medicamentos" />
      <div className="max-w-md mx-auto lg:ml-8"> {/* Adicionamos uma margem à esquerda para afastar o formulário */}
        <h1 className="text-4xl font-bold mb-8">Atualizar Medicamento</h1>
        <FormularioMedicamento onSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default AtualizarMedicamento;



