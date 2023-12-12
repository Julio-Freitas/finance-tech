import { Dispatch, SetStateAction } from 'react';

export type StatusVendas = 'pago' | 'processando' | 'falha';
export type TypePagamentos = 'boleto' | 'cartao' | 'pix';
export type IVendas = {
  id: string;
  nome: string;
  preco: number;
  pagamento: TypePagamentos;
  parcelas: number | null;
  status: StatusVendas;
  data: string;
};
export type DataIdataContext = {
  data: IVendas[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
};
