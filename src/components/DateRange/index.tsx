import { DateInput } from '../DateInput';
import { useData } from '../../context/DataContext';

export function DateRange() {
  const { inicio, final, setInicio, setFinal } = useData();
  return (
    <form className="box flex gap-4" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="inicial"
        value={inicio}
        onChange={(e) => setInicio(e.currentTarget.value)}
      />
      <DateInput
        label="Final"
        value={final}
        onChange={(e) => setFinal(e.currentTarget.value)}
      />
    </form>
  );
}
