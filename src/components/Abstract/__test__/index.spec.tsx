/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, render, screen } from '@testing-library/react';

import { Abstract } from '..';

import { IVendas } from '../../../context/DataContext/type';
import { DataContextProvider } from '../../../context/DataContext';

const saldItemPago = {
  id: '1',
  nome: 'teste',
  pagamento: 'boleto',
  status: 'pago',
  preco: 540,
  parcelas: 5,
  data: '05/01/2018',
} as IVendas;
const saldItemProcessando = {
  id: '1',
  nome: 'teste',
  pagamento: 'boleto',
  status: 'processando',
  preco: 140,
  parcelas: 5,
  data: '05/01/2018',
} as IVendas;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([saldItemPago, saldItemProcessando]),
  })
) as any;
jest.mock('../../../context/DataContext', () => ({
  ...jest.requireActual('../../../context/DataContext'),
  useData: () => ({
    data: [saldItemPago, saldItemProcessando],
  }),
}));


describe('<Abstract />', () => {
  it('should render component', async () => {
    await act(async () =>
      render(
        <DataContextProvider>
          <Abstract />
        </DataContextProvider>
      )
    );
      expect(screen.getByTestId('pago')).toHaveTextContent('R$ 540,00');
      expect(screen.getByTestId('processando')).toHaveTextContent('R$ 140,00');
      expect(screen.getByTestId('total')).toHaveTextContent('R$ 680,00');
  });
});
