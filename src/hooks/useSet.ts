import { useRef, useState } from 'react';
import { useMemoizedFn } from './useMemoizedFn';

export function useSet<const T extends Array<unknown>>(value: T) {
  const originalRef = useRef(value);

  const [state, setState] = useState(new Set(value));

  const add = useMemoizedFn((value: unknown) => {
    setState((curr) => {
      curr.add(value);
      return new Set(curr);
    });
  });
  const remove = useMemoizedFn((value: unknown) => {
    setState((curr) => {
      curr.delete(value);
      return new Set(curr);
    });
  });
  const reset = useMemoizedFn(() => {
    setState(new Set(originalRef.current));
  });

  return [state, { add, remove, reset }] as const;
}
