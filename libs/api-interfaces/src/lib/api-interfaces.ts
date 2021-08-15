export interface Cidade {
  id: string;
  nome: string;
  estado: string;
  populacao: string;
  seguranca: string;
  praia: boolean;
};

export const emptyCidade = {
  id: '',
  nome: '',
  estado: '',
  populacao: '',
  seguranca: '',
  praia: false
};