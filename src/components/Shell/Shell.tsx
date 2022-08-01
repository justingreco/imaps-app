import React, { useCallback, useEffect, useRef, useState } from "react";
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
  toolSelected,
  widgetActivated,
} from "./utils/shell";
import { Select } from "../Tools/Select/Select";

// import Basemaps from "../Panels/Basemaps/Basemaps";
import Print from "../Tools/Print/Print";
import Property from "../Panels/Property/Property";
import Toolbar from "./Toolbar";
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
  const [contentBehind, setContentBehind] = useState(false);

  const [view, setView] = useState<__esri.MapView>();
  const viewRef = useRef<__esri.MapView>();

  const [properties, setProperties] = useState<__esri.Graphic[]>();
  const [selectDismissed, setSelectDismissed] = useState(true);
  const [dismissedTool, setDismissedTool] = useState<string>();

  useEffect(() => {
    if (properties) {
      setActivePanel("search");
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

  const mapCallback = useCallback((mapView: __esri.MapView) => {
    viewRef.current = mapView;
    mapViewSet(mapView, setView, setLoading, setShowAlert, setAlert);
  }, [view]);
  const geometryCallback = useCallback((geometry: __esri.Geometry) => {
    setGeometry(geometry);
  }, [geometry]);
  const widgetCallback = useCallback((mapView: __esri.MapView) => {
    if (mapView) {
      widgetActivated(mapView, setActiveTool);
      toolSelected(
        "",
        activeTool,
        setActiveTool,
        setActivePanel,
        setSelectDismissed,
        undefined as any,
        undefined as any
      );
    }
  }, []);  
  const activePanelChanged = useCallback((panel: string) => {
    setActivePanel(panel);
  }, []);    
  const activeToolChanged = useCallback((tool: string) => {
    // setActiveTool(tool);
    
    // if (tool === '') {
    //   setDismissedTool(tool);
    // }
    setActiveTool(prevValue => {
      setDismissedTool(prevValue);
      return tool;
    });    
  }, []);  
  const panelDismissed = useCallback((e: any) => {
    setActivePanel("");
  }, []);  
  const toolDismissed = useCallback((e: any) => {
    setActiveTool("");
    setDismissedTool(e.target['data-panel']);
  }, []);  
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
        {view && <Toolbar view={view} 
          activePanelChanged={activePanelChanged} 
          activeToolChanged={activeToolChanged}
          dismissedTool={dismissedTool}
          expandable={contentBehind ? true : undefined}
        ></Toolbar>}
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
          onCalcitePanelDismiss={panelDismissed}
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
          onCalcitePanelDismiss={panelDismissed}
        >
          <div id="layer-div"></div>
        </CalcitePanel>
        <CalcitePanel
          id="legend-panel"
          data-panel="legend"
          heading="Legend"
          hidden={activePanel !== "legend"}
          closed={activePanel !== "legend" ? true : undefined}
          dismissed={activePanel !== "legend" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={panelDismissed}
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
          onCalcitePanelDismiss={panelDismissed}
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
              geometrySet={geometryCallback}
              selectDismissed={selectDismissed}
            ></Select>
          )}
        </CalcitePanel>
        <CalcitePanel
          id="measure-panel"
          data-panel="measure"
          heading="Measure"
          hidden={activeTool !== "measure"}
          closed={activeTool !== "measure" ? true : undefined}
          dismissed={activeTool !== "measure" ? true : undefined}
          dismissible
          onCalcitePanelDismiss={toolDismissed}
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
          onCalcitePanelDismiss={toolDismissed}
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
          onCalcitePanelDismiss={toolDismissed}
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
          onCalcitePanelDismiss={toolDismissed}
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
