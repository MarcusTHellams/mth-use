import { useState, type DependencyList } from 'react';

export function useCustomCompareDeps<const T extends DependencyList>(
	deps: T,
	isEqual: (next: T, prev: T) => boolean,
) {
	const [currDeps, setCurrDeps] = useState(deps);

	if (!areDependenciesIdentical(deps, currDeps) && !isEqual(deps, currDeps)) {
		setCurrDeps(deps);
	}

	return currDeps;
}

function areDependenciesIdentical(next: DependencyList, prev: DependencyList) {
	return (
		next.length === prev.length &&
		next.every((value, index) => Object.is(value, prev[index]))
	);
}
