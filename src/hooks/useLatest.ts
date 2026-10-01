import { useRef, type RefObject } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export function useLatest<T>(value: T): RefObject<T> {
	const valueRef = useRef(value);
	useIsomorphicLayoutEffect(() => {
		valueRef.current = value;
	}, [value]);

	return valueRef;
}
