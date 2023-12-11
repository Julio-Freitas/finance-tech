import { useEffect, useRef } from 'react';
import { useData } from '../../context/DataContext';

function getNameAndYear(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  const name = new Intl.DateTimeFormat('pt-br', {
    month: 'long',
    year: '2-digit',
  }).format(date);

  return { name, fullYear: date.getFullYear() };
}

const formatDate = (date: Date) => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
};

export function Month({ month }: { month: number }) {
  const { setInicio, setFinal } = useData();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  const setMonth = (n: number, fullYear: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const fistDay = new Date(fullYear, date.getMonth(), 1);
    const lastDay = new Date(fullYear, date.getMonth() + 1, 0);
    setInicio(formatDate(fistDay));
    setFinal(formatDate(lastDay));
  };
  const handleClickButton = () =>
    // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    {
      setMonth(month, getNameAndYear(month).fullYear);
    };

  return (
    <button
      className="cursor-pointer transition duration-700 ease-in-out focus:bg-color-5 focus:text-color-2 focus:delay-100 focus:transition-all bg-color-2 p-2 text-color-4 rounded-md hover:bg-color-5 hover:text-color-2  hover:border-color-2 border-2"
      type="button"
      onClick={handleClickButton}
      ref={buttonRef}
    >
      {getNameAndYear(month).name.toLocaleUpperCase()}
    </button>
  );
}
