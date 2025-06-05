import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

import { useFetch } from '../../hooks/useFetch';
import { DataIdataContext, IVendas } from './type';

const DataContext = createContext<DataIdataContext | null>(null);

const getDate = (n: number) => {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context)
    throw new Error('useDate only can be used inset <DataContextProvider>');
  return context;
};

export const BASE_URL_VENDAS = 'https://data.origamid.dev/vendas/';

export function DataContextProvider({ children }: PropsWithChildren) {
  const [inicio, setInicio] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));
  const { data, loading, error } = useFetch<IVendas[]>(
    `${BASE_URL_VENDAS}?inicio=${inicio}&final=${final}`
  );

  const valueData = useMemo(() => {
    return { data, loading, error, inicio, final, setInicio, setFinal };
  }, [data, loading, error, inicio, final]);

  return (
    <DataContext.Provider value={valueData}>{children}</DataContext.Provider>
  );
}
