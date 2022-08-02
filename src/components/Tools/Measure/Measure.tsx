import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-pad";

import { CalciteAction } from "@esri/calcite-components-react";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { initializeMeasure } from "./utils/measure";
import Measurement from "@arcgis/core/widgets/Measurement";
import "./Measure.css";
export const Measure = (args: any) => {
  const measureRef = useRef() as any;
  const loaded = useRef(false);
  const [selectedTool, setSelectedTool] = useState("");
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
      args.measurementCreated(widget);
    }
    return () => {
      measurement && measurement?.destroy();
    };
  }, []);

  return (
    <div>
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
  );
};
export default React.memo(Measure);
