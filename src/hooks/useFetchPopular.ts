import { useEffect, useRef, useState } from "react";

type AsyncFn<T> = (props?) => Promise<T>;

export function useFetch<T>(fetcher: AsyncFn<T>, props?: unknown) {
  const [response, setResponse] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  // Referencia para saber si el componente sigue montado
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const data = props ? await fetcher(props) :await fetcher();
        if (isMounted.current) setResponse(data);
      } catch (err) {
        if (isMounted.current) setError(err as Error);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [fetcher, props]);

  return { response, loading, error };
}