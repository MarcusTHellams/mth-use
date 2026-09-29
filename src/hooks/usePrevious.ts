import { useState } from 'react';

export function usePrevious<T>(
  value: T,
  isEqual: (updated: T, curr: T) => boolean = Object.is,
) {
  const [curr, setCurr] = useState(value);
  const [prev, setPrev] = useState<T | undefined>(undefined);

  if (!isEqual(value, curr)) {
    setPrev(curr);
    setCurr(value);
  }

  return prev;
}
