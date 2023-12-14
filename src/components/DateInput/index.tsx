import { PropsDateInput } from './types';

export function DateInput({ label, ...rest }: PropsDateInput) {
  return (
    <div className="w-full flex-1">
      <label className="label-dateInput" htmlFor={label}>
        {label}
      </label>
      <input
        className="input-dateInput border-none border-gray-700 border-2 w-full"
        id={label}
        type="date"
        {...rest}
      />
    </div>
  );
}
