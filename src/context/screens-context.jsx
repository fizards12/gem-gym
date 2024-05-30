import React, { createContext } from "react";
import useBelowMaxPoint from "../hooks/use-belowMaxPoint";

export const screenCheckContext = createContext({
  isBelowXL: true,
  isBelowLG: true,
  isBelowMD: true,
  isBelowSM: true,
  isBelowXS: true,
});

function ScreensContext({ children }) {
  const isBelowXL = useBelowMaxPoint(1200);
  const isBelowLG = useBelowMaxPoint(1024);
  const isBelowMD = useBelowMaxPoint(768);
  const isBelowSM = useBelowMaxPoint(640);
  const isBelowXS = useBelowMaxPoint(576);
  return (
    <screenCheckContext.Provider
      value={{ isBelowXL, isBelowLG, isBelowMD, isBelowSM, isBelowXS }}
    >
      {children}
    </screenCheckContext.Provider>
  );
}

export default ScreensContext;
