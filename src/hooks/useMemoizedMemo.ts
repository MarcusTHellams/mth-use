import { useMemo, useState, type DependencyList } from 'react';

export function useMemoizedMemo<const T extends DependencyList>(
  deps: T,
  isEqual: (updated: T, curr: T) => boolean,
) {
  const [signal, setSignal] = useState(0);
  const [currDeps, setCurrDeps] = useState(deps);

  if (!isEqual(deps, currDeps)) {
    setSignal((curr) => curr + 1);
    setCurrDeps(deps);
  }

  // oxlint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => currDeps, [signal]);
}
