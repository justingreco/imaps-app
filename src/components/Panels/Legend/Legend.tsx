import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { initializeLegend } from "./utils/legend";
import { CalcitePanel } from "@esri/calcite-components-react";
export const Legend = (args: any) => {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const [legend, setLegend] = useState<__esri.Legend>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setLegend(initializeLegend(ref.current, args.view));
    }
    return () => {
      legend && legend?.destroy();
    };
  }, []);
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const panelDismissed = useCallback((e: any) => {
    args.panelDismissed();
  }, []);

  return (
    <CalcitePanel
      id="layers-panel"
      heading="Legend"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={panelDismissed}
    >
      <div ref={ref}></div>;
    </CalcitePanel>
  );
};
export default React.memo(Legend);
