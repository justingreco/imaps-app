import React, { useEffect, useRef, useState } from "react";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-group";

import {
  CalciteAction,
  CalciteActionGroup,
} from "@esri/calcite-components-react";
import "./Sketch.css";
import {
  clearSketch,
  initializeSketchViewModel,
  polygonSymbolUpdated,
  polylineSymbolUpdated,
  textSymbolUpdated,
  toolSelected,
} from "./utils";
import LineSymbols from "./LineSymbols";
import PolygonSymbols from "./PolygonSymbols";
import TextSymbols from "./TextSymbols";
function Sketch(args: any) {
  const loaded = useRef(false);
  const [activeTool, setActiveTool] = useState("");
  useEffect(() => {
    if (!loaded.current) {
      initializeSketchViewModel(args.view);
    }
  }, []);
  return (
    <div id="sketch-tools">
      <div className="row sticky">
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
          onClick={() => toolSelected("polyline", activeTool, setActiveTool)}
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
          onClick={() => toolSelected("rectangle", activeTool, setActiveTool)}
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
        <CalciteAction icon="cursor" text={""}></CalciteAction>
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
        point
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
    </div>
  );
}

export default Sketch;
