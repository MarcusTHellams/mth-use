import { useState } from 'react';
import { useMemoizedFn } from './useMemoizedFn';

export function useToggle(startingState: boolean) {
  const [state, setState] = useState(startingState);

  const toggle = useMemoizedFn((bool?: boolean) => {
    if (bool !== undefined) {
      setState(bool);
      return;
    }
    setState((curr) => !curr);
  });

  return [state, toggle] as const;
}
