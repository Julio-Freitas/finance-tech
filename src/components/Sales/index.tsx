import { useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { SalesItem } from '../SalesItem';

export function Sales() {
  const { id } = useParams();
  const { data } = useData();

  if (!data) return null;
  return (
    <ul>
      <li className="box my-4 grid grid-cols-[auto,auto,1fr] justify-between">
        <div className="font-mono w-1/3">
          <h2>#ID ASS {id}</h2>
        </div>
        <div className="w-1/3">
          <h2>Nome</h2>
        </div>
        <div className="w-1/3 justify-self-end">
          {' '}
          <h2>Preço</h2>
        </div>
      </li>
      {data.map((item) => (
        <SalesItem key={item.id} sales={{ ...item }} />
      ))}
    </ul>
  );
}
