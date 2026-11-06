import { useEffect, type DependencyList, type EffectCallback } from 'react';
import { useCustomCompareDeps } from './useCustomCompareDeps';

export function useCustomCompareEffect<const T extends DependencyList>(
	effect: EffectCallback,
	deps: T,
	isEqual: (next: T, prev: T) => boolean,
) {
	// oxlint-disable-next-line react-hooks/exhaustive-deps
	useEffect(effect, useCustomCompareDeps(deps, isEqual));
}
