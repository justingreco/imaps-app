import {
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
} from "@esri/calcite-components-react";
import React, { useEffect, useState } from "react";
import { panelSelected, toolSelected } from "./utils/shell";

function Toolbar(args: any) {
  const [activePanel, setActivePanel] = useState("search");
  const [activeTool, setActiveTool] = useState("");

  useEffect(() => {
    setActivePanel(args.activePanel);
  }, [args.activePanel]);
  useEffect(() => {
    setActiveTool(args.activeTool);
  }, [args.activeTool]);
  return (
    <CalciteActionBar
      slot="action-bar"
      position="end"
      expandDisabled={args.expandable}
    >
      <CalciteActionGroup>
        <CalciteAction
          icon="search"
          text="Property Search"
          active={activePanel === "search" ? true : undefined}
          onClick={() =>
            panelSelected(
              "search",
              activePanel,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            )
          }
        ></CalciteAction>
        <CalciteAction
          icon="pin"
          text="Location Search"
          active={activePanel === "location" ? true : undefined}
          onClick={() => {
            panelSelected(
              "location",
              activePanel,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteAction
          icon="layers"
          text="Layers"
          active={activePanel === "layers" ? true : undefined}
          onClick={() => {
            panelSelected(
              "layers",
              activePanel,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteAction
          icon="legend"
          text="Legend"
          active={activePanel === "legend" ? true : undefined}
          onClick={() => {
            panelSelected(
              "legend",
              activePanel,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteAction
          icon="basemap"
          text="Basemaps"
          active={activePanel === "basemaps" ? true : undefined}
          onClick={() => {
            panelSelected(
              "basemaps",
              activePanel,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            );
          }}
        ></CalciteAction>
      </CalciteActionGroup>
      <CalciteActionGroup>
        <CalciteAction
          icon="select"
          text="Property Select"
          active={activeTool === "select" ? true : undefined}
          onClick={() =>
            toolSelected(
              "select",
              activeTool,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            )
          }
        ></CalciteAction>
        <CalciteAction
          icon="measure"
          text="Measure"
          active={activeTool === "measure" ? true : undefined}
          onClick={() => {
            toolSelected(
              "measure",
              activeTool,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteAction
          icon="pencil"
          text="Sketch"
          active={activeTool === "sketch" ? true : undefined}
          onClick={() => {
            toolSelected(
              "sketch",
              activeTool,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteAction
          icon="bookmark"
          text="Bookmarks"
          active={activeTool === "bookmarks" ? true : undefined}
          onClick={() => {
            toolSelected(
              "bookmarks",
              activeTool,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            );
          }}
        ></CalciteAction>
        <CalciteAction
          icon="print"
          text="Print"
          active={activeTool === "print" ? true : undefined}
          onClick={() =>
            toolSelected(
              "print",
              activeTool,
              setActiveTool,
              setActivePanel,
              args.activePanelChanged,
              args.activeToolChanged
            )
          }
        ></CalciteAction>
      </CalciteActionGroup>
    </CalciteActionBar>
  );
}
export default React.memo(Toolbar);
