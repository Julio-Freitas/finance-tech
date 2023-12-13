import { NavLink, useLocation } from 'react-router-dom';
import vendas from 'src/assets/icons/vendas.svg';
import resumo from 'src/assets/icons/resumo.svg';

import FintechSVG from '../Fintech';

const classLi =
  'cursor-pointer ransition ease-in-out duration-500 flex gap-6 hover:bg-color-2 px-8 py-2 hover:text-color-4 rounded items-center text-2xl';

export function Sidenav() {
  const { pathname } = useLocation();
  pathname.replace(/\//gi, '');

  return (
    <nav className="box bg-3 gap-gap mr-6  !p-0 h-screen bg-color-3 w-72">
      <div className="p-8">
        <FintechSVG title="Fintech Logo" />
      </div>
      <ul className="flex flex-col pt-2 gap-4">
        <li
          className={`${classLi} data-[active="true"]:bg-color-2 data-[active="true"]:text-color-4`}
          data-active={pathname.replace(/\//gi, '') === 'finance-tech'}
        >
          <span>
            <img
              src={resumo}
              alt=""
              className="w-10 max-w-max h-10 rounded-full p-2 bg-color-4"
              title="imagem logo"
            />
          </span>
          <NavLink to="/finance-tech">
            <b>Resumo</b>
          </NavLink>
        </li>
        <li
          className={`${classLi} data-[active="true"]:bg-color-2 data-[active="true"]:text-color-4`}
          data-active={pathname.replace(/\//gi, '') === 'vendas'}
        >
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
