import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  CalciteAction,
  CalciteActionGroup,
  CalciteButton,
  CalcitePanel,
} from "@esri/calcite-components-react";
import "./Sketch.css";
import {
  cancelSketch,
  clearSketch,
  deleteSelectedGraphics,
  initializeSketchViewModel,
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
function Sketch(args: any) {
  const loaded = useRef(false);
  const [activeTool, setActiveTool] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [selectedGraphics, setSelectedGraphics] = useState<__esri.Graphic[]>(
    []
  );

  useEffect(() => {
    if (!loaded.current) {
      initializeSketchViewModel(
        args.view,
        setActiveTool,
        selectedGraphics,
        setSelectedGraphics
      );
    }
  }, []);
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const toolDismissed = useCallback((e: any) => {
    args.toolDismissed();
    cancelSketch();
    setActiveTool("");
  }, []);
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
              active={activeTool === "point" ? true : undefined}
              icon="pin"
              text={""}
              onClick={() => toolSelected("point", activeTool, setActiveTool)}
            ></CalciteAction>
            <CalciteAction
              active={activeTool === "polyline" ? true : undefined}
              icon="line"
              text={""}
              onClick={() =>
                toolSelected("polyline", activeTool, setActiveTool)
              }
            ></CalciteAction>
            <CalciteAction
              active={activeTool === "polygon" ? true : undefined}
              icon="polygon"
              text={""}
              onClick={() => toolSelected("polygon", activeTool, setActiveTool)}
            ></CalciteAction>
            <CalciteAction
              active={activeTool === "rectangle" ? true : undefined}
              icon="rectangle"
              text={""}
              onClick={() =>
                toolSelected("rectangle", activeTool, setActiveTool)
              }
            ></CalciteAction>
            <CalciteAction
              active={activeTool === "circle" ? true : undefined}
              icon="circle"
              text={""}
              onClick={() => toolSelected("circle", activeTool, setActiveTool)}
            ></CalciteAction>
            <CalciteAction
              active={activeTool === "text" ? true : undefined}
              icon="text"
              text={""}
              onClick={() => toolSelected("text", activeTool, setActiveTool)}
            ></CalciteAction>
          </CalciteActionGroup>
          <CalciteActionGroup layout="horizontal">
            <CalciteAction
              icon="cursor"
              text={""}
              active={activeTool === "select" ? true : undefined}
              onClick={() => {
                stopSketching();
                toolSelected("select", activeTool, setActiveTool);
              }}
            ></CalciteAction>
            <CalciteAction
              icon="trash"
              text={""}
              onClick={() => clearSketch(setActiveTool)}
            ></CalciteAction>
          </CalciteActionGroup>
        </div>
        <div
          id="point-symbols"
          className="symbol"
          hidden={activeTool !== "point" ? true : undefined}
        >
          <PointSymbols pointSymbolUpdated={pointSymbolUpdated}></PointSymbols>
        </div>
        <div
          id="line-symbols"
          className="symbol"
          hidden={activeTool !== "polyline" ? true : undefined}
        >
          <LineSymbols
            polylineSymbolUpdated={polylineSymbolUpdated}
          ></LineSymbols>
        </div>
        <div
          id="polygon-symbols"
          className="symbol"
          hidden={
            !["polygon", "rectangle", "circle"].includes(activeTool)
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
          hidden={activeTool !== "text" ? true : undefined}
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
