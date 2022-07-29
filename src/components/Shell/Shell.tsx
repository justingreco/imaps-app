import React, { lazy, Suspense, useEffect, useRef, useState } from "react";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-action-group";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-loader";
import "@esri/calcite-components/dist/components/calcite-scrim";
import "@esri/calcite-components/dist/components/calcite-alert";

import {
  CalciteAction,
  CalciteActionBar,
  CalciteActionGroup,
  CalciteAlert,
  CalcitePanel,
  CalciteScrim,
  CalciteShell,
  CalciteShellPanel,
} from "@esri/calcite-components-react";
import WebMap from "../WebMap/WebMap";
import Header from "../Header/Header";
import "./Shell.css";
import {
  collapsePanel,
  mapViewSet,
  panelSelected,
  toolSelected,
} from "./utils";
import { Select } from "../Tools/Select/Select";

import { createRoot } from "react-dom/client";
// import Basemaps from "../Panels/Basemaps/Basemaps";
import Print from "../Tools/Print/Print";
import Property from "../Panels/Property/Property";
const Layers = lazy(() => import("../Panels/Layers/Layers"));
const Legend = lazy(() => import("../Panels/Legend/Legend"));
const Location = lazy(() => import("../Panels/Location/Location"));

const Sketch = lazy(() => import("../Tools/Sketch/Sketch"));
const Bookmarks = lazy(() => import("../Tools/Bookmarks/Bookmarks"));
const Measure = lazy(() => import("../Tools/Measure/Measure"));

const Basemaps = lazy(() => import("../Panels/Basemaps/Basemaps"));
function Shell() {
  const [activePanel, setActivePanel] = useState("search");
  const [activeTool, setActiveTool] = useState("");
  const [geometry, setGeometry] = useState<__esri.Geometry>();
  //const [condos, setCondos] = useState<__esri.Graphic[]>();
  //const condoRef = useRef<__esri.Graphic[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<__esri.Graphic>();
  const loaded = useRef(false);

  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState<any>();
  const [showAlert, setShowAlert] = useState(false);

  const [view, setView] = useState<__esri.MapView>();
  const [properties, setProperties] = useState<__esri.Graphic[]>();
  const [selectDismissed, setSelectDismissed] = useState(true);
  useEffect(() => {
    if (properties) {
      setActivePanel("search");
    }
  }, [properties]);
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      fetch("./config.json").then((response) => {
        response.json().then((config) => {
          let timeout = 0;
          if (config.alert.duration === "fast") {
            timeout = 6000;
          }
          if (config.alert.duration === "medium") {
            timeout = 10000;
          }
          if (config.alert.duration === "slow") {
            timeout = 14000;
          }
          setShowAlert(config.alert.show);
          setAlert(config.alert);
          setTimeout(() => {
            if (config.alert.autoDismiss) {
              setShowAlert(false);
            }
          }, timeout);
        });
      });
    }
  }, []);
  return (
    <CalciteShell>
      <Header></Header>
      <CalciteShellPanel
        class="custom-width"
        slot="contextual-panel"
        widthScale={undefined}
        position="end"
        resizable
        collapsed={activePanel === ""}
      >
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
                  setActivePanel
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
                  setActivePanel
                );
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
                  setActivePanel
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
                  setActivePanel
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
                  setActivePanel
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
                  setSelectDismissed
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
                  setSelectDismissed
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
                  setSelectDismissed
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
                  setSelectDismissed
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
                  setSelectDismissed
                )
              }
            ></CalciteAction>
          </CalciteActionGroup>
        </CalciteActionBar>
        <CalcitePanel
          id="search-panel"
          heading="Property Search"
          hidden={activePanel !== "search"}
          closed={activePanel !== "search" ? true : undefined}
          dismissed={activePanel !== "search" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActivePanel("")}
        >
          {view && (
            <Property
              view={view}
              geometry={geometry}
              selected={(feature: __esri.Graphic, condos: __esri.Graphic[]) => {
                setSelectedProperty(feature);
                const pins: string[] = [];
                const properties = condos.filter((condo) => {
                  if (pins.includes(condo.getAttribute("PIN_NUM")))
                    return false;
                  if (feature) {
                    if (
                      condo.getAttribute("PIN_NUM") ===
                      feature.getAttribute("PIN_NUM")
                    ) {
                      condo.setAttribute("selected", 1);
                    } else {
                      condo.setAttribute("selected", 2);
                    }
                  } else {
                    condo.setAttribute("selected", 2);
                  }
                  pins.push(condo.getAttribute("PIN_NUM"));
                  return true;
                });
                setProperties(properties);
              }}
            ></Property>
          )}
        </CalcitePanel>
        <CalcitePanel
          id="location-panel"
          heading="Location Search"
          hidden={activePanel !== "location"}
          closed={activePanel !== "location" ? true : undefined}
          dismissed={activePanel !== "location" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActivePanel("")}
        >
          <div id="location-div"></div>
        </CalcitePanel>
        <CalcitePanel
          id="layers-panel"
          heading="Layers"
          hidden={activePanel !== "layers"}
          closed={activePanel !== "layers" ? true : undefined}
          dismissed={activePanel !== "layers" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActivePanel("")}
        >
          <div id="layer-div"></div>
        </CalcitePanel>
        <CalcitePanel
          id="legend-panel"
          heading="Legend"
          hidden={activePanel !== "legend"}
          closed={activePanel !== "legend" ? true : undefined}
          dismissed={activePanel !== "legend" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActivePanel("")}
        >
          {/* {view && <Legend view={view}></Legend>} */}
          <div id="legend-div"></div>
        </CalcitePanel>
        <CalcitePanel
          id="basemaps-panel"
          heading="Basemaps"
          hidden={activePanel !== "basemaps"}
          closed={activePanel !== "basemaps" ? true : undefined}
          dismissed={activePanel !== "basemaps" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActivePanel("")}
        >
          {/* {view && <Basemaps view={view}></Basemaps>} */}
          <div id="basemaps-div"></div>
        </CalcitePanel>
      </CalciteShellPanel>
      <div className={`tools esri-component`}>
        <CalcitePanel
          id="select-panel"
          heading="Select"
          hidden={activeTool !== "select"}
          closed={activeTool !== "select" ? true : undefined}
          dismissed={activeTool !== "select" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => {
            setActiveTool("");
            setSelectDismissed(true);
          }}
        >
          <CalciteAction
            icon="chevron-up"
            text=""
            slot="header-actions-end"
            onClick={collapsePanel}
          ></CalciteAction>
          {view && (
            <Select
              view={view}
              selectedProperty={selectedProperty}
              geometrySet={(geometry: __esri.Geometry) => setGeometry(geometry)}
              selectDismissed={selectDismissed}
            ></Select>
          )}
        </CalcitePanel>
        <CalcitePanel
          id="measure-panel"
          heading="Measure"
          hidden={activeTool !== "measure"}
          closed={activeTool !== "measure" ? true : undefined}
          dismissed={activeTool !== "measure" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActiveTool("")}
        >
          <CalciteAction
            icon="chevron-up"
            text=""
            slot="header-actions-end"
            onClick={collapsePanel}
          ></CalciteAction>
          <div id="measure-div"></div>
        </CalcitePanel>
        <CalcitePanel
          id="sketch-panel"
          heading="Sketch"
          hidden={activeTool !== "sketch"}
          closed={activeTool !== "sketch" ? true : undefined}
          dismissed={activeTool !== "sketch" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActiveTool("")}
        >
          <CalciteAction
            icon="chevron-up"
            text=""
            slot="header-actions-end"
            onClick={collapsePanel}
          ></CalciteAction>
          <div id="sketch-div"></div>
        </CalcitePanel>
        <CalcitePanel
          id="bookmarks-panel"
          heading="Bookmarks"
          hidden={activeTool !== "bookmarks"}
          closed={activeTool !== "bookmarks" ? true : undefined}
          dismissed={activeTool !== "bookmarks" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActiveTool("")}
        >
          <CalciteAction
            icon="chevron-up"
            text=""
            slot="header-actions-end"
            onClick={collapsePanel}
          ></CalciteAction>
          {/* {view && <Bookmarks view={view}></Bookmarks>} */}
          <div id="bookmarks-div"></div>
        </CalcitePanel>
        <CalcitePanel
          id="print-panel"
          heading="Print"
          hidden={activeTool !== "print"}
          closed={activeTool !== "print" ? true : undefined}
          dismissed={activeTool !== "print" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={() => setActiveTool("")}
        >
          <CalciteAction
            icon="chevron-up"
            text=""
            slot="header-actions-end"
            onClick={collapsePanel}
          ></CalciteAction>
          {view && (
            <Print
              view={view}
              exportUrl="https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map"
              selectedProperty={selectedProperty}
            ></Print>
          )}
        </CalcitePanel>
      </div>

      <WebMap
        mapId="95092428774c4b1fb6a3b6f5fed9fbc4"
        mapViewSet={(view: __esri.MapView) =>
          mapViewSet(view, setView, setLoading, setShowAlert, setAlert)
        }
        geometrySet={(geometry: __esri.Geometry) => setGeometry(geometry)}
        properties={properties}
      ></WebMap>
      <CalciteScrim loading hidden={!loading ? true : undefined}></CalciteScrim>
      <CalciteAlert
        active={showAlert ? true : undefined}
        color={alert?.color}
        autoDismiss={alert?.autoDismiss ? true : undefined}
        autoDismissDuration={alert?.duration}
        label={""}
      >
        <div slot="title">{alert?.title}</div>
        <div slot="message">{alert?.message}</div>
        {alert?.link.show && (
          <a slot="link" href={alert?.link.url}>
            {alert?.link.text}
          </a>
        )}
      </CalciteAlert>
    </CalciteShell>
  );
}
export default Shell;
