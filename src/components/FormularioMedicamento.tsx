// components/FormularioMedicamento.tsx
import React, { useState } from 'react';

interface FormularioMedicamentoProps {
  onSubmit: (medicamento: any) => void;
}

const FormularioMedicamento: React.FC<FormularioMedicamentoProps> = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [dosagem, setDosagem] = useState('');
  const [tipo, setTipo] = useState('');
  const [via, setVia] = useState('');
  const [lote, setLote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const medicamento = { nome, dosagem, tipo, via, lote };
    onSubmit(medicamento);
    setNome('');
    setDosagem('');
    setTipo('');
    setVia('');
    setLote('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-black shadow" // Adiciona uma sombra ao texto
      />
      <input
        type="text"
        placeholder="Dosagem"
        value={dosagem}
        onChange={(e) => setDosagem(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-black shadow"
      />
      <input
        type="text"
        placeholder="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-black shadow"
      />
      <input
        type="text"
        placeholder="Via"
        value={via}
        onChange={(e) => setVia(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-black shadow"
      />
      <input
        type="text"
        placeholder="Lote"
        value={lote}
        onChange={(e) => setLote(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 text-black shadow"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Enviar
      </button>
    </form>
  );
};

export default FormularioMedicamento;

