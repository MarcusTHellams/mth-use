import { useReducer } from 'react';

const reducer = (state: number) => {
	return state + 1;
};

export function useUpdate() {
	const [, update] = useReducer<number, []>(reducer, 0);

	return update;
}
