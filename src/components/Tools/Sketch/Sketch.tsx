import React, { } from "react";

import {
  CalciteAction,
  CalciteActionGroup,
  CalciteButton,
  CalcitePanel,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import "./Sketch.css";
import {
  clearSketch,
  deleteSelectedGraphics,
  pointSymbolUpdated,
  polygonSymbolUpdated,
  polylineSymbolUpdated,
  stopSketching,
  textSymbolUpdated,
  toolSelected,
} from "./utils/sketch";
import LineSymbols from "./LineSymbols";
import PolygonSymbols from "./PolygonSymbols";
import TextSymbols from "./TextSymbols";
import PointSymbols from "./PointSymbols";
import { collapsePanel } from "../../Shell/utils/shell";
import useSketch from "./utils/useSketch";
function Sketch(args: any) {
  const { 
    activeSketchTool, 
    setActiveSketchTool, 
    selectedGraphics, 
    setSelectedGraphics, 
    isActive, 
    toolDismissed, 
    tipsClicked
 
  } = useSketch(args);  
  return (
    <CalcitePanel
      id="sketch-panel"
      heading="Sketch"
      data-panel="sketch"
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
      <div id="sketch-tools">
        <div className="sticky">
          <CalciteActionGroup layout="horizontal">
            <CalciteAction
              id="point"
              active={activeSketchTool === "point" ? true : undefined}
              icon="pin"
              text={""}
              onClick={() => toolSelected("point", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
            <CalciteTooltip label="Point" referenceElement="point">Point</CalciteTooltip>

            <CalciteAction
              id="line"
              active={activeSketchTool === "polyline" ? true : undefined}
              icon="line"
              text={""}
              onClick={() =>
                toolSelected("polyline", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip label="Line" referenceElement="line">Line</CalciteTooltip>
            <CalciteAction
              id="polygon"
              active={activeSketchTool === "polygon" ? true : undefined}
              icon="polygon"
              text={""}
              onClick={() => toolSelected("polygon", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
            <CalciteTooltip label="Polygon" referenceElement="polygon">Polygon</CalciteTooltip>
            <CalciteAction
              id="rectangle"
              active={activeSketchTool === "rectangle" ? true : undefined}
              icon="rectangle"
              text={""}
              onClick={() =>
                toolSelected("rectangle", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteTooltip label="Rectangle" referenceElement="rectangle">Rectangle</CalciteTooltip>
            <CalciteAction
              id="circle"
              active={activeSketchTool === "circle" ? true : undefined}
              icon="circle"
              text={""}
              onClick={() => toolSelected("circle", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
            <CalciteTooltip label="Circle" referenceElement="circle">Circle</CalciteTooltip>
            <CalciteAction
              id="text"
              active={activeSketchTool === "text" ? true : undefined}
              icon="text"
              text={""}
              onClick={() => toolSelected("text", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
            <CalciteTooltip label="Text" referenceElement="text">Text</CalciteTooltip>
          </CalciteActionGroup>
          <CalciteActionGroup layout="horizontal">
            <CalciteAction
              id="selectSketch"
              icon="cursor"
              text={""}
              active={activeSketchTool === "select" ? true : undefined}
              onClick={() => {
                stopSketching();
                toolSelected("select", activeSketchTool, setActiveSketchTool);
              }}
            ></CalciteAction>
            <CalciteTooltip label="Select Sketch" referenceElement="selectSketch">Select Sketch</CalciteTooltip>
            <CalciteAction
              id="clearSketch"
              icon="trash"
              text={""}
              onClick={() => clearSketch(setActiveSketchTool)}
            ></CalciteAction>
            <CalciteTooltip label="Clear Sketches" referenceElement="clearSketch">Clear Sketches</CalciteTooltip>            
          </CalciteActionGroup>
        </div>
        <div
          id="point-symbols"
          className="symbol"
          hidden={activeSketchTool !== "point" ? true : undefined}
        >
          <PointSymbols pointSymbolUpdated={pointSymbolUpdated}></PointSymbols>
        </div>
        <div
          id="line-symbols"
          className="symbol"
          hidden={activeSketchTool !== "polyline" ? true : undefined}
        >
          <LineSymbols
            polylineSymbolUpdated={polylineSymbolUpdated}
          ></LineSymbols>
        </div>
        <div
          id="polygon-symbols"
          className="symbol"
          hidden={
            !["polygon", "rectangle", "circle"].includes(activeSketchTool)
              ? true
              : undefined
          }
        >
          <PolygonSymbols
            polygonSymbolUpdated={polygonSymbolUpdated}
          ></PolygonSymbols>
        </div>
        <div
          id="text-symbols"
          className="symbol"
          hidden={activeSketchTool !== "text" ? true : undefined}
        >
          <TextSymbols textSymbolUpdated={textSymbolUpdated}></TextSymbols>
        </div>
        {selectedGraphics.length > 0 && (
          <CalciteButton
            onClick={() =>
              deleteSelectedGraphics(selectedGraphics, setSelectedGraphics)
            }
            alignment="center"
            color="red"
            appearance="transparent"
            icon-end="trash"
          >
            {selectedGraphics.length}{" "}
            {selectedGraphics.length > 1 ? "features" : "feature"}
          </CalciteButton>
        )}
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Sketch);
