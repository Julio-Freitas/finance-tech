import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AbstractPage, SalesPage, SalePage } from './pages';
import { Header, Sidenav } from './components';

export function FintechRoute() {
  return (
    <BrowserRouter>
      <div className="flex flex-wrap gap-6 lg:flex-row sm:flex-col ">
        <div className="lg:min-w-[350px] sm:min-w-full">
          <Sidenav />
        </div>

        <main className="flex-1">
          <Header />
          <Routes>
            <Route path="/finance-tech" element={<AbstractPage />} />
            <Route path="/finance-tech/vendas" element={<SalesPage />} />
            <Route path="/finance-tech/vendas/:id" element={<SalePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
