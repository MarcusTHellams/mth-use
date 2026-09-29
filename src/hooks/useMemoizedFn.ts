import { useCallback, useLayoutEffect, useRef } from 'react';

export type Fn = (this: any, ...args: any[]) => any;

type PickFunction<T extends Fn> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>;
export const useMemoizedFn = <T extends Fn>(fn: T) => {
  const handleRef = useRef(fn);
  useLayoutEffect(() => {
    handleRef.current = fn;
  }, [fn]);
  return useCallback<PickFunction<T>>((...args) => {
    const _fn = handleRef.current;
    return _fn(...args);
  }, []) as T;
};
