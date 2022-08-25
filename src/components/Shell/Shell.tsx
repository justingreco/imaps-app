import React, { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";


import {
  CalciteAlert,
  CalciteScrim,
  CalciteShell,
  CalciteShellPanel,
} from "@esri/calcite-components-react";
import WebMap from "../WebMap/WebMap";
import Header from "../Header/Header";
import "./Shell.css";
import {
  getDistinctProperties,
  mapViewSet,
  toolSelected,
  widgetActivated,
} from "./utils/shell";

import Property from "../Panels/Property/Property";

import Toolbar from "./Toolbar";

const Location = lazy(() => import("../Panels/Location/Location"));
const Layers = lazy(() => import("../Panels/Layers/Layers"));
const Legend = lazy(() => import("../Panels/Legend/Legend"));
const Basemaps = lazy(() => import("../Panels/Basemaps/Basemaps"));
const Select = lazy(() => import("../Tools/Select/Select"));
const Measure = lazy(() => import("../Tools/Measure/Measure"));
const Sketch = lazy(() => import("../Tools/Sketch/Sketch"));
const Bookmarks = lazy(() => import("../Tools/Bookmarks/Bookmarks"));
const Print = lazy(() => import("../Tools/Print/Print"));

function Shell() {
  const [activePanel, setActivePanel] = useState("search");
  const [activeTool, setActiveTool] = useState("");
  const [geometry, setGeometry] = useState<__esri.Geometry>();
  const [selectedProperty, setSelectedProperty] = useState<__esri.Graphic>();
  const loaded = useRef(false);

  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState<any>();
  const [showAlert, setShowAlert] = useState(false);
  const [contentBehind, setContentBehind] = useState(false);

  const [view, setView] = useState<__esri.MapView>();
  const viewRef = useRef<__esri.MapView>();

  const [properties, setProperties] = useState<__esri.Graphic[]>();
  const [loadedPanels, setLoadedPanels] = useState<string[]>(() => ["search"]);
  const [loadedTools, setLoadedTools] = useState<string[]>(() => []);

  useEffect(() => {
    if (properties) {
      setActivePanel("search");
      setLoadedPanels((loadedPanels) => [...loadedPanels, "search"]);
    }
  }, [properties]);
  useEffect(() => {
    if (!loaded.current) {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 700) {
          setActivePanel("");
          setContentBehind(true);
        } else {
          setContentBehind(false);
        }
      });
      if (window.innerWidth < 700) {
        setActivePanel("");
        setContentBehind(true);
      }
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

  const mapCallback = useCallback(
    (mapView: __esri.MapView) => {
      viewRef.current = mapView;
      mapViewSet(mapView, setView, setLoading, setShowAlert, setAlert);
    },
    [view]
  );
  const geometryCallback = useCallback(
    (geometry: __esri.Geometry) => {
      setGeometry(geometry);
    },
    [geometry]
  );
  const widgetCallback = useCallback((mapView: __esri.MapView) => {
    if (mapView) {
      widgetActivated(mapView, setActiveTool);
      toolSelected(
        "",
        activeTool,
        setActiveTool,
        setActivePanel,
        undefined as any,
        undefined as any
      );
    }
  }, []);
  const activePanelChanged = useCallback(
    (panel: string) => {
      setActivePanel(panel);
      if (!loadedPanels.includes(panel)) {
        setLoadedPanels([...loadedPanels, panel]);
      }
    },
    [loadedPanels]
  );
  const activeToolChanged = useCallback(
    (tool: string) => {
      setActiveTool(tool);
      if (!loadedTools.includes(tool)) {
        setLoadedTools([...loadedTools, tool]);
      }
    },
    [loadedTools]
  );
  const panelDismissed = useCallback((e: any) => {
    setActivePanel("");
  }, []);
  const toolDismissed = useCallback((e: any) => {
    setActiveTool("");
  }, []);
  const propertySelected = useCallback(
    (feature: __esri.Graphic, condos: __esri.Graphic[]) => {
      setSelectedProperty(feature);
      setProperties(getDistinctProperties(feature, condos));
    },
    []
  );
  return (
    <CalciteShell contentBehind={contentBehind ? true : undefined}>
      <Header></Header>
      <CalciteShellPanel
        collapsed
        slot="primary-panel"
        position="start"
      ></CalciteShellPanel>
      <CalciteShellPanel
        class="custom-width"
        slot="contextual-panel"
        widthScale={undefined}
        position="end"
        resizable={contentBehind ? undefined : true}
        collapsed={activePanel === ""}
      >
        {view && (
          <Toolbar
            view={view}
            activePanelChanged={activePanelChanged}
            activeToolChanged={activeToolChanged}
            activePanel={activePanel}
            activeTool={activeTool}
            expandable={contentBehind ? true : undefined}
          ></Toolbar>
        )}
        {view && loadedPanels.includes("search") && (
          <Property
            view={view}
            geometry={geometry}
            selected={propertySelected}
            isActive={activePanel === "search"}
            panelDismissed={panelDismissed}
          ></Property>
        )}
        {loadedPanels.includes("location") && (
          <Suspense fallback={null}>           
          <Location
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "location"}
          ></Location>
          </Suspense>
        )}
        {loadedPanels.includes("layers") && (
        <Suspense fallback={null}> 
          <Layers
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "layers"}
          ></Layers>
          </Suspense>
        )}
        {loadedPanels.includes("legend") && (
        <Suspense fallback={null}>    
          <Legend
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "legend"}
          ></Legend>
          </Suspense>
        )}
        {loadedPanels.includes("basemaps") && (
        <Suspense fallback={null}>              
          <Basemaps
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "basemaps"}
          ></Basemaps>
          </Suspense>
        )}
      </CalciteShellPanel>
      <div className={`tools esri-component`}>
        {loadedTools.includes("select") && (
        <Suspense fallback={null}>    
          <Select
            view={view}
            selectedProperty={selectedProperty}
            geometrySet={geometryCallback}
            toolDismissed={toolDismissed}
            isActive={activeTool === "select"}
          ></Select>
          </Suspense>      
        )}
        {loadedTools.includes("measure") && (
        <Suspense fallback={null}>    
          <Measure
            view={view}
            toolDismissed={toolDismissed}
            isActive={activeTool === "measure"}
          ></Measure>
          </Suspense>      
        )}
        {loadedTools.includes("sketch") && (
          <Suspense fallback={null}>
            <Sketch
              view={view}
              toolDismissed={toolDismissed}
              isActive={activeTool === "sketch"}
            ></Sketch>
          </Suspense>
        )}
        {loadedTools.includes("bookmarks") && (
          <Suspense fallback={null}>
            <Bookmarks
              view={view}
              toolDismissed={toolDismissed}
              isActive={activeTool === "bookmarks"}
            ></Bookmarks>
          </Suspense>
        )}
        {loadedTools.includes("print") && (
        <Suspense fallback={null}>
          <Print
            view={view}
            exportUrl="https://indoors.raleighnc.gov/arcgis/rest/services/ExportWebMap/GPServer/Export%20Web%20Map"
            selectedProperty={selectedProperty}
            toolDismissed={toolDismissed}
            isActive={activeTool === "print"}
          ></Print>
        </Suspense>          
        )}
      </div>
      <WebMap
        mapId="95092428774c4b1fb6a3b6f5fed9fbc4"
        mapViewSet={mapCallback}
        geometrySet={geometryCallback}
        properties={properties}
        widgetActivated={widgetCallback}
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
