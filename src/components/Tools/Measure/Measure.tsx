import { CalciteAction, CalcitePanel, CalciteTooltip } from "@esri/calcite-components-react";
import React, { } from "react";
import "./Measure.css";
import { collapsePanel } from "../../Shell/utils/shell";
import useMeasure from "./utils/useMeasure";
export const Measure = (args: any) => {
  const { 
    measureRef,
    measurement, 
    selectedTool, 
    setSelectedTool, 
    isActive, 
    toolDismissed, 
    tipsClicked
  } = useMeasure(args);
  return (
    <CalcitePanel
      id="measure-panel"
      heading="Measure"
      data-panel="measure"
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
      <div id="measure-tools">
        <div className="measure-container">
          <CalciteAction
            icon="measure-line"
            text="Distance"
            active={selectedTool === "distance" ? true : undefined}
            onClick={() => {
              setSelectedTool("distance");
              if (measurement) {
                measurement.activeTool = "distance";
              }
            }}
          ></CalciteAction>
          <CalciteAction
            icon="measure-area"
            text="Area"
            active={selectedTool === "area" ? true : undefined}
            onClick={() => {
              setSelectedTool("area");
              if (measurement) {
                measurement.activeTool = "area";
              }
            }}
          ></CalciteAction>
          <CalciteAction
            icon="trash"
            text="Clear"
            onClick={() => {
              if (measurement) {
                measurement.clear();
                setSelectedTool("");
              }
            }}
          ></CalciteAction>
        </div>
        <div ref={measureRef}></div>
        <section
          hidden={selectedTool !== "" ? true : undefined}
          className="measurement-hint"
        >
          <p>Select line or distance measurement tool</p>
        </section>
      </div>
    </CalcitePanel>
  );
};
export default React.memo(Measure);
