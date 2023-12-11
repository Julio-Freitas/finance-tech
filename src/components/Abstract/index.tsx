import { useCallback } from 'react';
import { useData } from '../../context/DataContext';
import { StatusVendas } from '../../context/DataContext/type';

export function Abstract() {
  const { data } = useData();

  const totalBy = useCallback(
    (status?: StatusVendas) => {
      const filterDataByStatus = data?.filter((item) => {
        if (!status) return item.status !== 'falha';
        return item.status === status;
      });

      const sumPrime = filterDataByStatus?.reduce(
        (acc, item) => acc + item.preco,
        0
      );

      return new Intl.NumberFormat('pt-br', {
        currency: 'BRL',
        style: 'currency',
      }).format(sumPrime ?? 0);
    },
    [data]
  );

  if (!data) return null;

  return (
    <section className="flex w-ful gap-gap my-6">
      <div className="box flex-1">
        <h2 className="font-bold text-xl mb-2 text-color-1">Vendas</h2>
        <span className="text-lg font-bold text-color-2">{totalBy()}</span>
      </div>

      <div className="box flex-1">
        <h2 className="font-bold text-xl mb-2 text-color-1">Recebido</h2>
        <span className="text-lg font-bold text-color-2">
          {totalBy('pago')}
        </span>
      </div>

      <div className="box flex-1">
        <h2 className="font-bold text-xl mb-2 text-color-1">Processando</h2>
        <span className="text-lg font-bold text-color-2">
          {totalBy('processando')}
        </span>
      </div>
    </section>
  );
}
