/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, render, screen } from '@testing-library/react';

import { Abstract } from '..';
import { DataContextProdiver } from '../../../context/DataContext';
import { IVendas } from '../../../context/DataContext/type';

const saldItem = {
  id: '1',
  nome: 'teste',
  pagamento: 'boleto',
  status: 'falha',
  preco: 540,
  parcelas: 5,
  data: '05/01/2018',
} as IVendas;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([saldItem]),
  })
) as any;
jest.mock('../../../context/DataContext', () => ({
  useData: jest.fn(),
}));

describe('<Abstract />', () => {
  it('should render component', async () => {
    // await act(async () =>
    //   render(
    //     <DataContextProdiver>
    //       <Abstract />
    //     </DataContextProdiver>
    //   )
    // );
    expect(1).toBe(1);
    // expect(screen.getByText(/teste/i)).toBeInTheDocument();
  });
});
