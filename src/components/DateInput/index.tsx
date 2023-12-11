import { PropsDateInput } from './types';

export function DateInput({ label, ...rest }: PropsDateInput) {
  return (
    <div className="w-full flex-1">
      <label className="label-dateInput  " htmlFor={label}>
        {label}
      </label>
      <input
        className="input-dateInput border-none "
        id={label}
        type="date"
        {...rest}
      />
    </div>
  );
}
