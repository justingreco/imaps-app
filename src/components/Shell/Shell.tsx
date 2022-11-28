import React, { lazy, Suspense } from "react";
import {
  CalciteAlert,
  CalciteScrim,
  CalciteShell,
  CalciteShellPanel,
  CalciteTip,
  CalciteTipGroup,
  CalciteTipManager,
  CalciteTooltip,
} from "@esri/calcite-components-react";
import WebMap from "../WebMap/WebMap";
import Header from "../Header/Header";
import "./Shell.css";

import Property from "../Panels/Property/Property";

import Toolbar from "./Toolbar";
import useShell from "./utils/useShell";

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
  const { activePanel,activeTool, contentBehind, view, activePanelChanged, activeToolChanged, geometry, propertySelected, loadedPanels, panelDismissed ,loadedTools, toolDismissed, loading,showAlert,selectedProperty,mapCallback, geometryCallback, properties, widgetCallback, alert, tipsCallback, tips, tipsHidden } = useShell();
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
            showTips={tipsCallback}
          ></Property>
        )}
        {loadedPanels.includes("location") && (
          <Suspense fallback={null}>           
          <Location
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "location"}
            showTips={tipsCallback}
          ></Location>
          </Suspense>
        )}
        {loadedPanels.includes("layers") && (
        <Suspense fallback={null}> 
          <Layers
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "layers"}
            showTips={tipsCallback}            
          ></Layers>
          </Suspense>
        )}
        {loadedPanels.includes("legend") && (
        <Suspense fallback={null}>    
          <Legend
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "legend"}
            showTips={tipsCallback}            
          ></Legend>
          </Suspense>
        )}
        {loadedPanels.includes("basemaps") && (
        <Suspense fallback={null}>              
          <Basemaps
            view={view}
            panelDismissed={panelDismissed}
            isActive={activePanel === "basemaps"}
            showTips={tipsCallback}            
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
            showTips={tipsCallback}
          ></Select>
          </Suspense>      
        )}
        {loadedTools.includes("measure") && (
        <Suspense fallback={null}>    
          <Measure
            view={view}
            toolDismissed={toolDismissed}
            isActive={activeTool === "measure"}
            showTips={tipsCallback}
          ></Measure>
          </Suspense>      
        )}
        {loadedTools.includes("sketch") && (
          <Suspense fallback={null}>
            <Sketch
              view={view}
              toolDismissed={toolDismissed}
              isActive={activeTool === "sketch"}
              showTips={tipsCallback}
            ></Sketch>
          </Suspense>
        )}
        {loadedTools.includes("bookmarks") && (
          <Suspense fallback={null}>
            <Bookmarks
              view={view}
              toolDismissed={toolDismissed}
              isActive={activeTool === "bookmarks"}
              showTips={tipsCallback}
            ></Bookmarks>
          </Suspense>
        )}
        {loadedTools.includes("print") && (
        <Suspense fallback={null}>
          <Print
            view={view}
            exportUrl="https://maps.raleighnc.gov/print/rest/services/Geoprocessing/ExportWebMapPro/GPServer/Export%20Web%20Map"
            selectedProperty={selectedProperty}
            toolDismissed={toolDismissed}
            isActive={activeTool === "print"}
            showTips={tipsCallback}
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
      <CalciteTipManager closed={tipsHidden ? true : undefined}>
        <CalciteTipGroup group-title={tips?.title}>
          {tips?.tips.map((tip: any) => {
          return <CalciteTip title={tip.title} key={tip.title}>{tip.text}</CalciteTip>
        })}
        </CalciteTipGroup>
      </CalciteTipManager>
    </CalciteShell>
  );
}
export default Shell;
