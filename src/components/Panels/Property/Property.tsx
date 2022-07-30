import "@esri/calcite-components/dist/components/calcite-tab";
import "@esri/calcite-components/dist/components/calcite-tabs";
import "@esri/calcite-components/dist/components/calcite-tab-nav";
import "@esri/calcite-components/dist/components/calcite-tab-title";
import {
  CalciteScrim,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
} from "@esri/calcite-components-react";
import React, { useEffect, useState, useRef } from "react";
import "./Property.css";
import PropertySearch from "./PropertySearch/PropertySearch";
import MapView from "@arcgis/core/views/MapView";
import PropertyTable from "./PropertyTable/PropertyTable";
import { getPropertyByGeometry } from "./utils/property";
import PropertyInfo from "./PropertyInfo/PropertyInfo";
function Property(args: any) {
  const [view, setView] = useState<MapView>();
  const [condos, setCondos] = useState<__esri.Graphic[]>();
  const condoRef = useRef<__esri.Graphic[]>();

  const [feature, setFeature] = useState<__esri.Graphic>();

  const loaded = useRef(false);
  const [infoDisabled, setInfoDisabled] = useState(true);
  const [searching, setSearching] = useState(false);
  const [activeTab, setActiveTab] = useState("list");

  useEffect(() => {
    setView(args.view);
    if (!loaded.current) {
      loaded.current = true;
    }
  }, [args.view]);
  useEffect(() => {
    if (args.geometry && view) {
      getPropertyByGeometry(args.geometry, view as MapView).then(
        (result: any) => {
          setCondos(result.features);
          condoRef.current = result.features;
          if (result.features.length === 1) {
            setInfoDisabled(false);
            setActiveTab("info");
            setFeature(result.features[0]);
            args.selected(result.features[0], result.features);
          } else {
            setInfoDisabled(true);
            setActiveTab("list");
            setFeature(undefined);
            args.selected(undefined, result.features);
          }
        }
      );
    }
  }, [args.geometry]);
  return (
    <div className="property">
      {view && (
        <PropertySearch
          view={view}
          searchingChanged={(isSearching: boolean) => setSearching(isSearching)}
          setCondos={(condos: __esri.Graphic[]) => {
            setCondos(condos);
            condoRef.current = condos;
            if (condos.length === 1) {
              setInfoDisabled(false);
              setActiveTab("info");
              setFeature(condos[0]);
              args.selected(condos[0], condos);
            } else {
              setInfoDisabled(true);
              setActiveTab("list");
              setFeature(undefined);
              args.selected(undefined, condos);
            }
          }}
        ></PropertySearch>
      )}
      <CalciteTabs position="below" layout="center" scale="l">
        <CalciteTabNav slot="tab-nav">
          <CalciteTabTitle active={activeTab === "list" ? true : undefined}>
            List
          </CalciteTabTitle>
          <CalciteTabTitle
            active={activeTab === "info" ? true : undefined}
            disabled={infoDisabled === true ? true : undefined}
          >
            Info
          </CalciteTabTitle>
        </CalciteTabNav>
        <CalciteTab>
          {view && (
            <PropertyTable
              view={view}
              condos={condos}
              featureSelected={(feature: __esri.Graphic) => {
                setFeature(feature);
                //args.featureSelected(feature);
                args.selected(feature, condoRef.current);
                setActiveTab("info");
                setInfoDisabled(false);
              }}
            ></PropertyTable>
          )}
        </CalciteTab>
        <CalciteTab>
          {view && <PropertyInfo view={view} feature={feature}></PropertyInfo>}
        </CalciteTab>
        <CalciteScrim
          loading
          hidden={!searching ? true : undefined}
        ></CalciteScrim>
      </CalciteTabs>
    </div>
  );
}

export default Property;
