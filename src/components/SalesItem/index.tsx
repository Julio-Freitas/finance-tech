import { NavLink } from 'react-router-dom';
import { IVendas } from '../../context/DataContext/type';

const formatedPriceTo = (price: number) => {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(price ?? 0);
};
export function SalesItem({ sales }: { sales: IVendas }) {
  return (
    <li className="box my-4 grid grid-cols-[auto,auto,1fr] gap-6 items-center">
      <NavLink to={`/vendas/${sales.id}`} className="font-mono w-[250px]">
        {sales.id}
      </NavLink>
      <div className="w-1/3"> {sales.nome}</div>
      <div className="w-1/3 justify-self-end text-center">
        {formatedPriceTo(sales.preco)}
      </div>
    </li>
  );
}
