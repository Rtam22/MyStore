import { createContext, useEffect, useState } from "react";

type scrollerContextType = {
  showHeader: boolean;
  shiftPosition: boolean;
  handlePauseScroll: (boolean: boolean) => void;
};

export const ScrollerContext = createContext<scrollerContextType>(null);

export function ScrollerProvider({ children }) {
  const [prevYPosition, setPrevYPosition] = useState(window.scrollY);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [shiftPosition, setShiftPosition] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(false);

  function handlePauseScroll(boolean: boolean) {
    setPause(boolean);
  }

  function handleScroll() {
    if (!pause) {
      if (window.scrollY > 30) {
        setShiftPosition(true);
      } else {
        setShiftPosition(false);
      }
      if (window.scrollY < prevYPosition || window.scrollY < 200) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setPrevYPosition(window.scrollY);
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <ScrollerContext.Provider
      value={{ showHeader, shiftPosition, handlePauseScroll }}
    >
      {children}
    </ScrollerContext.Provider>
  );
}
