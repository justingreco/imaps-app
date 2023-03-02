import React, { } from "react";

import { CalciteAction, CalcitePanel, CalciteTooltip } from "@esri/calcite-components-react";
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
      closable
      onCalcitePanelClose={panelDismissed}
    >
      <CalciteAction id="tip" icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <CalciteTooltip label="Show Tip" referenceElement="tip">Show Tip</CalciteTooltip>
      <div ref={ref}></div>
    </CalcitePanel>
  );
};
export default React.memo(Legend);
