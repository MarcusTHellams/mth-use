import { useState } from 'react';

export function useLinkedState<T>(
	value: T,
	isEqual: (updated: T, curr: T) => boolean = Object.is,
): readonly [T, React.Dispatch<React.SetStateAction<T>>] {
	const [local, setLocal] = useState(value);
	const [prevLocal, setPrevLocal] = useState(value);

	if (!isEqual(value, prevLocal)) {
		setPrevLocal(local);
		setLocal(value);
	}

	return [local, setLocal] as const;
}
