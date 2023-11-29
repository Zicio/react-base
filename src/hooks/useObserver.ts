import { useEffect, useRef } from "react";

export const useObserver = (
  ref: React.MutableRefObject<undefined>,
  canLoad: boolean,
  isLoading: string | boolean | (() => Promise<void>),
  callback: () => void
) => {
  const observer = useRef();
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    const cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
