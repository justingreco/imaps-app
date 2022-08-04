import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import "@esri/calcite-components/dist/components/calcite-alert";

import {
  CalciteAlert,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
  CalcitePanel,
} from "@esri/calcite-components-react";
import React, { useEffect, useState, useRef, useCallback } from "react";
import MapView from "@arcgis/core/views/MapView";
import Blend from "./Blend/Blend";
import {
  initializeBasemaps,
  initializeEsriMaps,
  initializeImageMaps,
} from "./utils/basemaps";
import "./Basemaps.css";
function Basemaps(args: any) {
  const [view, setView] = useState<MapView>();
  const [showAlert, setShowAlert] = useState<any>({
    show: false,
    from: "",
    to: "",
  });
  const [isActive, setIsActive] = useState(false);

  const loaded = useRef(false);
  const basemapRef = useRef(null);
  const imagesRef = useRef(null);
  const esriRef = useRef(null);
  const mapGroup = "f6329364e80c438a958ce74aadc3a89f";
  const imageGroup = "492386759d264d49948bf7f83957ddb9";
  useEffect(() => {
    setView(args.view);
    if (!loaded.current) {
      loaded.current = true;
      initializeBasemaps(args.view, basemapRef.current as any, mapGroup);
      initializeImageMaps(
        args.view,
        imagesRef.current as any,
        imageGroup,
        setShowAlert
      );
      initializeEsriMaps(args.view, esriRef.current as any);
    }
  }, [args.view]);
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const panelDismissed = useCallback((e: any) => {
    args.panelDismissed();
  }, []);
  return (
    <CalcitePanel
      id="basemaps-panel"
      heading="Basemaps"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={panelDismissed}
    >
      <div className="basemaps">
        <CalciteTabs position="below" layout="center" scale="m">
          <CalciteTabNav slot="tab-nav">
            <CalciteTabTitle>Maps</CalciteTabTitle>
            <CalciteTabTitle>Images</CalciteTabTitle>
            <CalciteTabTitle>Esri</CalciteTabTitle>
            <CalciteTabTitle>Blend</CalciteTabTitle>
          </CalciteTabNav>
          <CalciteTab>
            <div ref={basemapRef}></div>
          </CalciteTab>
          <CalciteTab>
            <div ref={imagesRef}></div>
          </CalciteTab>
          <CalciteTab>
            <div ref={esriRef}></div>
          </CalciteTab>
          <CalciteTab>
            <Blend
              view={view}
              mapGroup={mapGroup}
              imageGroup={imageGroup}
            ></Blend>
          </CalciteTab>
        </CalciteTabs>
        <CalciteAlert
          active={showAlert.show === true ? true : undefined}
          autoDismiss
          autoDismissDuration="medium"
          color="yellow"
          label="Imagery Year Changed"
        >
          <div slot="title">Imagery Not Available</div>
          <div slot="message">{`Imagery for ${showAlert.from} only available inside Raleigh, base map has changed to ${showAlert.to}`}</div>
        </CalciteAlert>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Basemaps);
