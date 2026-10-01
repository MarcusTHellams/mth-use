import { useEffect, useLayoutEffect } from 'react';

const isBrowser = window !== undefined;

export const useIsomorphicLayoutEffect = isBrowser
	? useLayoutEffect
	: useEffect;
