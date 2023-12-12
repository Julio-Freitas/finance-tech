import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartSaleDay, ChartSaleProps } from './types';
import { IVendas } from '../../context/DataContext/type';

const transforDataToChart = (data: IVendas[]): ChartSaleDay[] => {
  const dias = data.reduce(
    (acc, item) => {
      const dia = item.data.split(' ')[0];
      if (!acc[dia]) {
        acc[dia] = {
          data: new Date(dia).toLocaleDateString('pt-br', {
            day: 'numeric',
            month: 'numeric',
          }),
          pago: 0,
          falha: 0,
          processando: 0,
        };
      }
      acc[dia][item.status] += 1;

      return acc;
    },
    {} as Record<string, ChartSaleDay>
  );

  return Object.values(dias);
};

export const ChartSale = ({ data }: ChartSaleProps) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transforDataToChart(data)}>
        <XAxis dataKey="data" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="pago" stroke="#8884d8" />
        <Line type="monotone" dataKey="processando" stroke="#82ca9d" />
        <Line type="monotone" dataKey="falha" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};
