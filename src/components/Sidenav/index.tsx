import { NavLink } from 'react-router-dom';
import resumo from '../../assets/icons/resumo.svg';
import vendas from '../../assets/icons/vendas.svg';
import FintechSVG from '../Fintech';

export function Sidenav() {
  return (
    <nav className="box bg-3 gap-gap mr-6 h-screen bg-color-3 p-8">
      <FintechSVG title="Fintech Logo" />
      <ul className="flex flex-col pt-8 gap-4">
        <li className="cursor-pointer ransition ease-in-out duration-500 flex gap-6 hover:bg-color-2 hover:text-color-4 p-2  rounded items-center text-2xl">
          <span>
            <img
              src={resumo}
              alt=""
              className="w-10 max-w-max h-10 rounded-full p-2 bg-color-4"
            />
          </span>
          <NavLink to="/">
            <b>Resumo</b>
          </NavLink>
        </li>
        <li className="cursor-pointer ransition ease-in-out duration-500 flex gap-6 hover:bg-color-2 hover:text-color-4 p-2  rounded items-center text-2xl">
          <span>
            <img
              src={vendas}
              alt=""
              className="w-10 h-10 max-w-max rounded-full p-2 bg-color-4"
            />
          </span>
          <NavLink to="vendas">
            <b>Vendas</b>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
