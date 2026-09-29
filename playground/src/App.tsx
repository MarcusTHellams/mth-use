import { useState } from 'react';
import { useMemoizedMemo, useUpdateEffect } from '../../src';
import { useEventListener } from '../../src/hooks/useEventListener';

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

  useUpdateEffect(
    () => {
      console.log('count: ', count);
    },
    // oxlint-disable-next-line react-hooks/exhaustive-deps
    useMemoizedMemo([count], ([updated], [current]) => {
      if (updated === current) {
        return true;
      }
      if (updated % 2 === 0) {
        return false;
      }
      return true;
    }),
    import.meta.env.DEV,
  );

  useEventListener({
    event: 'click',
    callback: (event) => {
      console.log('event: ', event);
    },
    isStrictMode: import.meta.env.DEV,
  });

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
