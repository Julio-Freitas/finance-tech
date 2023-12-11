import { Month } from '../Month';

export function Months() {
  return (
    <div className="flex gap-4">
      <Month month={-2} />
      <Month month={-1} />
      <Month month={0} />
    </div>
  );
}
