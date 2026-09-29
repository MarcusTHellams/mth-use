import { useEffect, useEffectEvent, useRef, type EffectCallback } from 'react';

export function useOnMount(effect: EffectCallback) {
  const isMountedRef = useRef(false);

  const effectEvent = useEffectEvent(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return effect();
    }
  });

  useEffect(() => {
    return effectEvent();
  }, []);
}
