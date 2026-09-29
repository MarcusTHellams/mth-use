import {
  useEffect,
  useRef,
  type DependencyList,
  type EffectCallback,
} from 'react';
import { useLatest } from './useLatest';

export function useUpdateEffect<const T extends DependencyList>(
  effect: EffectCallback,
  deps: T,
  isStrictMode: boolean,
) {
  const isMountedRef = useRef(false);
  const strictModeRef = useRef(isStrictMode);
  const effectRef = useLatest(effect);

  useEffect(() => {
    if (strictModeRef.current) {
      strictModeRef.current = false;
      return;
    }
    if (!isMountedRef.current && !strictModeRef.current) {
      isMountedRef.current = true;
      return;
    }
    return effectRef.current();
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
