import { useEffect, useRef, useState } from 'react';
import { FetchState } from './type';

export function useFetch<T>(
  url: RequestInfo,
  options?: RequestInit
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchRequest = async () => {
      try {
        setLoading(true);
        setData(null);
        setError(null);
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const dataResponse = (await response.json()) as T;

        if (!signal.aborted) setData(dataResponse);
      } catch (err) {
        if (!signal.aborted && err instanceof Error) setError(err.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchRequest();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}
