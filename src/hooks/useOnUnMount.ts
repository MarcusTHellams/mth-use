import { useEffect, useRef } from 'react';
import { useLatest } from './useLatest';

export function useOnUnMount(callback: () => void, isStrictMode: boolean) {
  const strictModeRef = useRef(isStrictMode);

  const callbackRef = useLatest(callback);

  useEffect(() => {
    const _callback = callbackRef.current;
    const _strictMode = strictModeRef.current;
    return () => {
      if (_strictMode) {
        strictModeRef.current = false;
        return;
      }
      _callback();
    };
  }, [callbackRef]);
}
