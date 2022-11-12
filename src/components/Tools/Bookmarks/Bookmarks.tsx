import React, { } from "react";
import { CalcitePanel, CalciteAction } from "@esri/calcite-components-react";
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
      <CalciteAction icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <CalciteAction
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
      <div ref={bookmarkRef}></div>
    </CalcitePanel>
  );
};

export default React.memo(Bookmarks);
