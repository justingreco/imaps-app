import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-pad";

import { CalciteAction, CalcitePanel } from "@esri/calcite-components-react";
import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { initializeMeasure } from "./utils/measure";
import Measurement from "@arcgis/core/widgets/Measurement";
import "./Measure.css";
import { collapsePanel } from "../../Shell/utils/shell";
export const Measure = (args: any) => {
  const measureRef = useRef() as any;
  const loaded = useRef(false);
  const [selectedTool, setSelectedTool] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [measurement, setMeasurement] = useState<Measurement>();
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      const widget = initializeMeasure(measureRef.current, args.view);
      setMeasurement(widget);
      widget.watch("activeTool", (activeTool) => {
        setSelectedTool(activeTool ? activeTool : "");
        measurement?.clear();
      });
      // var panel = document
      //   .getElementById("measure-tools")
      //   ?.closest("calcite-panel");
      // panel?.addEventListener("calcitePanelDismiss", () => {
      //   (widget as any).activeTool = null;
      //   measurement?.clear();
      // });
    }
    return () => {
      measurement && measurement?.destroy();
    };
  }, []);
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const toolDismissed = useCallback((e: any) => {
    args.toolDismissed();
    (measurement as any).activeTool = null;
    measurement?.clear();
  }, []);
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
      <CalciteAction
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
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
