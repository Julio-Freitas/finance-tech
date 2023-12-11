import { useParams } from 'react-router-dom';
import { BASE_URL_VENDAS } from '../../context/DataContext';
import { IVendas } from '../../context/DataContext/type';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../../components';
import { formatedPriceTo } from '../../utils/formatedPriceTo';

export function SalePage() {
  const { id } = useParams();
  const { data, loading } = useFetch<Omit<IVendas, 'data'>>(
    `${BASE_URL_VENDAS}${id}`
  );

  if (loading) return <Loading />;
  if (!data) return null;
  const { nome, pagamento, preco, status } = data;
  return (
    <div>
      <p className="box mb-5 text-color-2">
        <b>Nome: </b> {nome}
      </p>
      <p className="box mb-5 text-color-2">
        <b>Pagamento: </b> {pagamento}
      </p>
      <p className="box mb-5 text-color-2">
        <b>Preço: </b> {formatedPriceTo(preco)}
      </p>
      <p className="box mb-5 text-color-2">
        <b>Status: </b>
        {status}
      </p>
    </div>
  );
}
