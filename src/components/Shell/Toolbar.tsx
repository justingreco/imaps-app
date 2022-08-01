import {
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
} from "@esri/calcite-components-react";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { panelSelected, toolSelected } from "./utils/shell";
const Layers = lazy(() => import("../Panels/Layers/Layers"));
const Legend = lazy(() => import("../Panels/Legend/Legend"));
const Location = lazy(() => import("../Panels/Location/Location"));

const Sketch = lazy(() => import("../Tools/Sketch/Sketch"));
const Bookmarks = lazy(() => import("../Tools/Bookmarks/Bookmarks"));
const Measure = lazy(() => import("../Tools/Measure/Measure"));

const Basemaps = lazy(() => import("../Panels/Basemaps/Basemaps"));

function Toolbar(args: any) {
  const [activePanel, setActivePanel] = useState("search");
  const [activeTool, setActiveTool] = useState("");
  const [view, setView] = useState<__esri.MapView>();
  const [selectDismissed, setSelectDismissed] = useState(true);
  
  useEffect(() => {

    if (args.view) {
      setView(args.view);
    }
  }, []);
  return (
<CalciteActionBar slot="action-bar" position="end">
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

                if (view?.map) {
                  const container = document.getElementById("location-div");
                  if (!container?.hasChildNodes()) {
                    const root = createRoot(container as HTMLDivElement);
                    root.render(
                      <Suspense fallback={""}>
                        <Location view={view} />
                      </Suspense>
                    );
                  }
                }
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
                if (view?.map) {
                  const container = document.getElementById("layer-div");
                  if (!container?.hasChildNodes()) {
                    const root = createRoot(container as HTMLDivElement);
                    root.render(
                      <Suspense fallback={""}>
                        <Layers view={view} />
                      </Suspense>
                    );
                  }
                }
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
                if (view?.map) {
                  const container = document.getElementById("legend-div");
                  if (!container?.hasChildNodes()) {
                    const root = createRoot(container as HTMLDivElement);
                    root.render(
                      <Suspense fallback={""}>
                        <Legend view={view} />
                      </Suspense>
                    );
                  }
                }
              }}
            ></CalciteAction>
            <CalciteAction
              icon="basemap"
              text="Basemaps"
              active={activePanel === "basemap" ? true : undefined}
              onClick={() => {
                panelSelected(
                  "basemaps",
                  activePanel,
                  setActiveTool,
                  setActivePanel,
                  args.activePanelChanged,
                  args.activeToolChanged
                );
                if (view?.map) {
                  const container = document.getElementById("basemaps-div");
                  if (!container?.hasChildNodes()) {
                    const root = createRoot(container as HTMLDivElement);
                    root.render(
                      <Suspense fallback={""}>
                        <Basemaps view={view} />
                      </Suspense>
                    );
                  }
                }
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
                  setSelectDismissed,
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
                  setSelectDismissed,
                  args.activePanelChanged,
                  args.activeToolChanged
                );
                if (view?.map) {
                  const container = document.getElementById("measure-div");
                  if (!container?.hasChildNodes()) {
                    const root = createRoot(container as HTMLDivElement);
                    root.render(
                      <Suspense fallback={""}>
                        <Measure view={view} />
                      </Suspense>
                    );
                  }
                }
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
                  setSelectDismissed,
                  args.activePanelChanged,
                  args.activeToolChanged
                );
                if (view?.map) {
                  const container = document.getElementById("sketch-div");
                  if (!container?.hasChildNodes()) {
                    const root = createRoot(container as HTMLDivElement);
                    root.render(
                      <Suspense fallback={""}>
                        <Sketch view={view} />
                      </Suspense>
                    );
                  }
                }
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
                  setSelectDismissed,
                  args.activePanelChanged,
                  args.activeToolChanged
                );
                if (view?.map) {
                  const container = document.getElementById("bookmarks-div");
                  if (!container?.hasChildNodes()) {
                    const root = createRoot(container as HTMLDivElement);
                    root.render(
                      <Suspense fallback={""}>
                        <Bookmarks view={view} />
                      </Suspense>
                    );
                  }
                }
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
                  setSelectDismissed,
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
