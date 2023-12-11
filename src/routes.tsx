import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AbstractPage, SalesPage, SalePage } from './pages';
import { Header, Sidenav } from './components';

export function FintechRoute() {
  return (
    <BrowserRouter>
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="row-span-3 order-1 pl-4">
          <Sidenav />
        </div>
        <main className="row-span-0 col-span-2 order-1">
          <Header />
          <Routes>
            <Route path="/" element={<AbstractPage />} />
            <Route path="/vendas" element={<SalesPage />} />
            <Route path="/vendas/:id" element={<SalePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
