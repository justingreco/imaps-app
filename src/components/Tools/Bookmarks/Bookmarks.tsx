import React, { } from "react";
import { CalcitePanel, CalciteAction, CalciteTooltip } from "@esri/calcite-components-react";
import "./Bookmarks.css";
import { collapsePanel } from "../../Shell/utils/shell";
import useBookmarks from "./utils/useBooksmarks";
export const Bookmarks = (args: any) => {
  const { 
    bookmarkRef, 
    isActive, 
    toolDismissed, 
    tipsClicked
  } = useBookmarks(args);
  return (
    <CalcitePanel
      id="bookmarks-panel"
      heading="Bookmarks"
      data-panel="bookmarks"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={toolDismissed}
    >
      <CalciteAction id="tip" icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <CalciteAction
        id="collapseTool"
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
      <CalciteTooltip label="Show Tip" referenceElement="tip">Show Tip</CalciteTooltip>
      <CalciteTooltip label="Collapse" referenceElement="collapseTool">Collapse</CalciteTooltip>         
      <div ref={bookmarkRef}></div>
    </CalcitePanel>
  );
};

export default React.memo(Bookmarks);
