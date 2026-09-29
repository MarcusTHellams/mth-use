import { useEffect, useRef } from 'react';
import { useLatest } from './useLatest';

export function useTitle(title: string, restoreOnUnmount = false) {
  const originalTitle = useRef(document.title);
  const restoreOnUnmountRef = useLatest(restoreOnUnmount);

  useEffect(() => {
    const current = restoreOnUnmountRef.current;

    if (document) {
      document.title = title;
    }

    return () => {
      if (document && current) {
        document.title = originalTitle.current;
      }
    };
  }, [title, restoreOnUnmountRef]);
}
