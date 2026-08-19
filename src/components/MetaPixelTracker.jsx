import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/* The base pixel script in index.html already fires the very first PageView.
   React Router navigates client-side without a real page load, so every
   route change after that needs its own manual PageView event.

   The lastPathname guard exists because React StrictMode double-invokes
   effects on initial mount (mount -> cleanup -> mount) — without it, that
   double-invoke would flip isFirst on the first pass and fire a spurious
   duplicate PageView on the second pass, before any real navigation. */
export default function MetaPixelTracker() {
  const location = useLocation();
  const lastPathname = useRef(undefined);
  const isFirst = useRef(true);

  useEffect(() => {
    if (lastPathname.current === location.pathname) return;
    lastPathname.current = location.pathname;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname]);

  return null;
}
