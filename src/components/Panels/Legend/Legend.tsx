import React from "react";
import { useEffect, useRef, useState } from "react";
import { initializeLegend } from "./utils/legend";
export const Legend = (args: any) => {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const [legend, setLegend] = useState<__esri.Legend>();
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setLegend(initializeLegend(ref.current, args.view));
    }
    return () => {
      legend && legend?.destroy();
    };
  }, []);

  return <div ref={ref}></div>;
};
export default Legend;
