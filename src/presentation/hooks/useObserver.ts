import { useRef, useState, useEffect } from 'react';

export const useObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const [element, setElement] = useState<Element | null>(null);

  const observer = useRef(new IntersectionObserver(callback, options));

  useEffect(() => {
    if (element) {
      observer.current.observe(element);
    }

    return () => {
      observer.current.disconnect();
    };
  }, [element]);

  return { setElement };
};
