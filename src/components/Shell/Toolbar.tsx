import {
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteTooltip,
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
          id="propertySearch"
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
        <CalciteTooltip referenceElement="propertySearch" label="Property Search">Property Search</CalciteTooltip>
        <CalciteAction
          id="locationSearch"
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
        <CalciteTooltip referenceElement="locationSearch" label="Location Search">Location Search</CalciteTooltip>
        <CalciteAction
          id="layerList"
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
        <CalciteTooltip referenceElement="layerList" label="Layer List">Location Search</CalciteTooltip>
        <CalciteAction
          id="legend"
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
        <CalciteTooltip referenceElement="legend" label="Legend">Legend</CalciteTooltip>
        <CalciteAction
          id="basemaps"
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
        <CalciteTooltip referenceElement="basemaps" label="Basemaps">Basemaps</CalciteTooltip>
      </CalciteActionGroup>
      <CalciteActionGroup>
        <CalciteAction
          id="propertySelect"
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
        <CalciteTooltip referenceElement="propertySelect" label="Property Select">Property Select</CalciteTooltip>
        <CalciteAction
          id="measure"
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
        <CalciteTooltip referenceElement="measure" label="Measure">Measaure</CalciteTooltip>
        <CalciteAction
          id="sketch"
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
        <CalciteTooltip referenceElement="sketch" label="Sketch">Sketch</CalciteTooltip>
        <CalciteAction
          id="bookmarks"
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
        <CalciteTooltip referenceElement="bookmarks" label="Bookmarks">Bookmarks</CalciteTooltip>
        <CalciteAction
          id="print"
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
        <CalciteTooltip referenceElement="print" label="Print">Print</CalciteTooltip>
      </CalciteActionGroup>
    </CalciteActionBar>
  );
}
export default React.memo(Toolbar);
