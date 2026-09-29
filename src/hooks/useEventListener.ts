import { useRef } from 'react';
import { useOnMount } from './useOnMount';
import { useOnUnMount } from './useOnUnMount';

type Opts = {
  event: string;
  callback: (event: Event) => void;
  isStrictMode: boolean;
  target?: Window | Document | HTMLElement;
};

export function useEventListener({
  event,
  callback,
  isStrictMode,
  target = document,
}: Opts) {
  const controllerRef = useRef(new AbortController());

  useOnMount(() => {
    target.addEventListener(event, callback, {
      signal: controllerRef.current.signal,
    });
  });

  useOnUnMount(() => {
    controllerRef.current.abort();
  }, isStrictMode);
}
