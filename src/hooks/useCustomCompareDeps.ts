import { useState, type DependencyList } from 'react';

export function useCustomCompareDeps<const T extends DependencyList>(
	deps: T,
	isEqual: (updated: T, curr: T) => boolean,
) {
	const [currDeps, setCurrDeps] = useState(deps);

	if (!areDependenciesIdentical(deps, currDeps) && !isEqual(deps, currDeps)) {
		setCurrDeps(deps);
	}

	return currDeps;
}

function areDependenciesIdentical(
	updated: DependencyList,
	current: DependencyList,
) {
	return (
		updated.length === current.length &&
		updated.every((value, index) => Object.is(value, current[index]))
	);
}
