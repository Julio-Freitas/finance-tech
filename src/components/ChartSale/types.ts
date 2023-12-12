import { IVendas } from '../../context/DataContext/type';

export type ChartSaleProps = {
  data: IVendas[];
};

export type ChartSaleDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};
