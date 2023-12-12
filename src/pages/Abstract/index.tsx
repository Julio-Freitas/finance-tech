import { useData } from 'src/context/DataContext';
import { Abstract, ChartSale } from '../../components';

export function AbstractPage() {
  const { data } = useData();
  return (
    <section>
      <Abstract />
      <ChartSale data={data ?? []} />
    </section>
  );
}
