import React, { } from "react";

import { CalciteAction, CalcitePanel } from "@esri/calcite-components-react";
import useLegend from "./utils/useLegend";
export const Legend = (args: any) => {
  const { 
    ref,
    isActive,
    panelDismissed,
    tipsClicked    
  } = useLegend(args);

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
      <CalciteAction icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <div ref={ref}></div>;
    </CalcitePanel>
  );
};
export default React.memo(Legend);
