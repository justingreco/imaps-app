import {
  CalciteScrim,
  CalciteTab,
  CalciteTabNav,
  CalciteTabs,
  CalciteTabTitle,
  CalcitePanel,
} from "@esri/calcite-components-react";
import React, { useEffect, useState, useRef, useCallback } from "react";
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
  const [isActive, setIsActive] = useState(false);

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
  const condosSelected = useCallback(
    (selectedCondos: __esri.Graphic[]) => {
      setCondos(selectedCondos);
      condoRef.current = selectedCondos;
      if (selectedCondos.length === 1) {
        setInfoDisabled(false);
        setActiveTab("info");
        setFeature(selectedCondos[0]);
        args.selected(selectedCondos[0], selectedCondos);
      } else {
        setInfoDisabled(true);
        setActiveTab("list");
        setFeature(undefined);
        args.selected(undefined, selectedCondos);
      }
    },
    [condoRef.current, condos, args.selected]
  );

  const featureSelected = useCallback(
    (selectedFeature: __esri.Graphic) => {
      setFeature(selectedFeature);
      //args.featureSelected(feature);
      args.selected(selectedFeature, condoRef.current);
      setActiveTab("info");
      setInfoDisabled(false);
    },
    [args.selected, feature]
  );

  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const panelDismissed = useCallback((e: any) => {
    args.panelDismissed();
  }, []);

  return (
    <CalcitePanel
      id="search-panel"
      heading="Property Search"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={panelDismissed}
    >
      <div className="property">
        {view && (
          <PropertySearch
            view={view}
            searchingChanged={(isSearching: boolean) =>
              setSearching(isSearching)
            }
            condosSelected={condosSelected}
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
                featureSelected={featureSelected}
              ></PropertyTable>
            )}
          </CalciteTab>
          <CalciteTab>
            {view && (
              <PropertyInfo view={view} feature={feature}></PropertyInfo>
            )}
          </CalciteTab>
          <CalciteScrim
            loading
            hidden={!searching ? true : undefined}
          ></CalciteScrim>
        </CalciteTabs>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Property);
