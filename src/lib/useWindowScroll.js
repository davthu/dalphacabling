import { useState, useEffect, useRef } from "react";

const useWindowScroll = () => {
  const frame = useRef(0);
  const [state, setState] = useState({
    x: window.scrollX,
    y: window.scrollY
  });

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setState({
          x: window.scrollX,
          y: window.scrollY
        });
      });
    };

    window.addEventListener("scroll", handler, {
      capture: false,
      passive: true
    });

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return state;
};

export default useWindowScroll;
