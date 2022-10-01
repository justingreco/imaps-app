import {
  CalcitePanel,
  CalciteAction,
  CalciteButton,
  CalciteInput,
  CalciteLabel,
} from "@esri/calcite-components-react";
import React from "react";
import "./Select.css";
import { collapsePanel } from "../../Shell/utils/shell";

import {
  bufferDistanceChanged,
  bufferProperty,
  createSketch,
} from "./utils/select";
import useSelect from "./utils/useSelect";
export const Select = (args: any) => {
  const {isActive, selectedTool, setSelectedTool, sketchVm, distance, setDistance
    , selectedProperty, toolDismissed} = useSelect(args);
  return (
    <CalcitePanel
      id="select-panel"
      heading="Select"
      data-panel="select"
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
      <div id="select-tools">
        <div className="select-container">
          <CalciteAction
            icon="pin"
            text="Point"
            active={selectedTool === "point" ? true : undefined}
            onClick={() => {
              setSelectedTool("point");
              if (sketchVm) {
                createSketch(sketchVm, "point");
              }
            }}
          ></CalciteAction>
          <CalciteAction
            icon="line"
            text="Line"
            active={selectedTool === "line" ? true : undefined}
            onClick={() => {
              setSelectedTool("line");
              if (sketchVm) {
                createSketch(sketchVm, "polyline");
              }
            }}
          ></CalciteAction>
          <CalciteAction
            icon="polygon"
            text="Polygon"
            active={selectedTool === "polygon" ? true : undefined}
            onClick={() => {
              setSelectedTool("polygon");
              if (sketchVm) {
                createSketch(sketchVm, "polygon");
              }
            }}
          ></CalciteAction>
          <CalciteAction
            icon="pins"
            text="Multi-Point"
            active={selectedTool === "multipoint" ? true : undefined}
            onClick={() => {
              setSelectedTool("multipoint");
              if (sketchVm) {
                createSketch(sketchVm, "multipoint");
              }
            }}
          ></CalciteAction>
          <CalciteAction icon="trash" text="Clear"></CalciteAction>
        </div>
        <div className="buffer-container">
          <CalciteLabel>
            Buffer Distance
            <CalciteInput
              type="number"
              suffixText="feet"
              step={50}
              min={0}
              max={5280}
              value={distance.toString()}
              clearable
              onCalciteInputChange={(event) =>
                bufferDistanceChanged(event, setDistance)
              }
            ></CalciteInput>
          </CalciteLabel>
          <CalciteButton
            disabled={selectedProperty === undefined ? true : undefined}
            hidden={distance <= 0}
            width="full"
            onClick={() =>
              bufferProperty(selectedProperty, distance, args.geometrySet)
            }
          >
            Buffer Property
          </CalciteButton>
        </div>
      </div>
    </CalcitePanel>
  );
};
export default React.memo(Select);
