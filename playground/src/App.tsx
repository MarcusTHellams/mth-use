import { useEffect, useState } from 'react';
import { useCustomCompareDeps } from '../../src';

export function App() {
	const [showTestComponent, setShowTestComponent] = useState(true);

	return (
		<>
			{showTestComponent && <TestComponent />}

			<button onClick={() => setShowTestComponent((curr) => !curr)}>
				Toggle Test Component
			</button>
		</>
	);
}

function TestComponent() {
	const [count, setCount] = useState(0);

	// useUpdateEffect(
	// 	() => {
	// 		console.log('count1: ', count);
	// 	},
	// 	[count],
	// 	import.meta.env.DEV,
	// );

	useEffect(
		() => {
			console.log('count: ', count);
		},
		// oxlint-disable-next-line react-hooks/exhaustive-deps
		useCustomCompareDeps([count], ([updatedCount]) => {
			return updatedCount % 2 !== 0;
		}),
	);

	// useEventListener({
	// 	event: 'click',
	// 	callback: (event) => {
	// 		console.log('event: ', event);
	// 	},
	// 	isStrictMode: import.meta.env.DEV,
	// });

	return (
		<>
			<h1>Hello World</h1>
			<div>
				<button onClick={() => setCount((curr) => curr + 1)}>
					Count: {count}
				</button>
			</div>
		</>
	);
}
