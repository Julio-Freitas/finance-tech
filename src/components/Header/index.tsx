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
      <div className="mb-4 flex  justify-between sm:flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <DateRange />
        </div>
        <h1 className="box flex-[.5] bg-color-3 text-2xl font-bold">{title}</h1>
      </div>
      <Months />
    </header>
  );
}
