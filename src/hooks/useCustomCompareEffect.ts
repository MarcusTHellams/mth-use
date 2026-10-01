import {
	useEffect,
	useLayoutEffect,
	useRef,
	type DependencyList,
	type EffectCallback,
} from 'react';
import { useUpdate } from './useUpdate';

export function useCustomCompareEffect<const T extends DependencyList>(
	effect: EffectCallback,
	deps: T,
	depsEqual: (updated: T, curr: T) => boolean,
) {
	const ref = useRef(deps);
	const forceUpdate = useUpdate();

	useLayoutEffect(() => {
		if (!depsEqual(deps, ref.current)) {
			ref.current = deps;
			forceUpdate();
		}
	});

	// oxlint-disable-next-line react/refs react-hooks/exhaustive-deps
	useEffect(effect, ref.current);
}
