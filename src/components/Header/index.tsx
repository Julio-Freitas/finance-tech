import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Months } from '../Months';
import { DateRange } from '../DateRange';

export function Header() {
  const location = useLocation();

  const title = useMemo(() => {
    return location.pathname === '/' ? 'Resumo' : 'Vendas';
  }, [location]);

  return (
    <header className="mb-4">
      <div className="mb-4 grid grid-cols-2 gap-6">
        <DateRange />
        <h1 className="box bg-color-3 text-2xl font-bold">{title}</h1>
      </div>
      <Months />
    </header>
  );
}
