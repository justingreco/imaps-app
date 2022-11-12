import React, { } from "react";

import {
  CalciteAction,
  CalciteActionGroup,
  CalciteButton,
  CalcitePanel,
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
      <CalciteAction icon="lightbulb"  text="Tips" slot="header-actions-end" onClick={tipsClicked}></CalciteAction>
      <CalciteAction
        icon="chevron-up"
        text=""
        slot="header-actions-end"
        onClick={collapsePanel}
      ></CalciteAction>
      <div id="sketch-tools">
        <div className="sticky">
          <CalciteActionGroup layout="horizontal">
            <CalciteAction
              active={activeSketchTool === "point" ? true : undefined}
              icon="pin"
              text={""}
              onClick={() => toolSelected("point", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
            <CalciteAction
              active={activeSketchTool === "polyline" ? true : undefined}
              icon="line"
              text={""}
              onClick={() =>
                toolSelected("polyline", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteAction
              active={activeSketchTool === "polygon" ? true : undefined}
              icon="polygon"
              text={""}
              onClick={() => toolSelected("polygon", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
            <CalciteAction
              active={activeSketchTool === "rectangle" ? true : undefined}
              icon="rectangle"
              text={""}
              onClick={() =>
                toolSelected("rectangle", activeSketchTool, setActiveSketchTool)
              }
            ></CalciteAction>
            <CalciteAction
              active={activeSketchTool === "circle" ? true : undefined}
              icon="circle"
              text={""}
              onClick={() => toolSelected("circle", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
            <CalciteAction
              active={activeSketchTool === "text" ? true : undefined}
              icon="text"
              text={""}
              onClick={() => toolSelected("text", activeSketchTool, setActiveSketchTool)}
            ></CalciteAction>
          </CalciteActionGroup>
          <CalciteActionGroup layout="horizontal">
            <CalciteAction
              icon="cursor"
              text={""}
              active={activeSketchTool === "select" ? true : undefined}
              onClick={() => {
                stopSketching();
                toolSelected("select", activeSketchTool, setActiveSketchTool);
              }}
            ></CalciteAction>
            <CalciteAction
              icon="trash"
              text={""}
              onClick={() => clearSketch(setActiveSketchTool)}
            ></CalciteAction>
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
