// pages/medicamentos/new.tsx
"use client"
// pages/medicamentos/new.tsx
import React from 'react';
import FormularioMedicamento from '@/components/FormularioMedicamento';
import NavBar from '@/components/NavBar';
import { salvarMedicamentosLocalmente } from '@/utils/localStorage';

const NovoMedicamento = () => {
  const handleSubmit = (medicamento: any) => {
    console.log('Dados do formulário:', medicamento);
    // Salvar localmente o novo medicamento
    salvarNovoMedicamento(medicamento);
  };

  const salvarNovoMedicamento = (medicamento: any) => {
    let medicamentos = JSON.parse(localStorage.getItem('medicamentos') || '[]');
    // Verificar se medicamentos não é um array válido
    if (!Array.isArray(medicamentos)) {
      medicamentos = [];
    }
    // Adicionando o novo medicamento à lista
    medicamentos.push(medicamento);
    // Salvando a lista atualizada no localStorage
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
  };

  return (
    <main className="flex flex-col items-center">
      <NavBar active="medicamentos" />
      <div className="max-w-md mx-auto lg:ml-8"> {/* Adicionamos uma margem à esquerda para afastar o formulário */}
        <h1 className="text-4xl font-bold mb-8">Novo Medicamento</h1>
        <FormularioMedicamento onSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default NovoMedicamento;
