import { useLayoutEffect, useRef, type RefObject } from 'react';

export function useLatest<T>(value: T): RefObject<T> {
  const valueRef = useRef(value);
  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
