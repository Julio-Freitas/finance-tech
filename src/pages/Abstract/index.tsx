import { useData } from 'src/context/DataContext';
import { Abstract, ChartSale } from '../../components';

export function AbstractPage() {
  const { data } = useData();
  return (
    <section>
      <Abstract />
      <div className="mt-8">
        <ChartSale data={data ?? []} />
      </div>
    </section>
  );
}
