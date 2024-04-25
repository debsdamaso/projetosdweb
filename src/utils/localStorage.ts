// utils/localStorage.ts
export const salvarMedicamentosLocalmente = (medicamentos: any[]) => {
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
  };
  