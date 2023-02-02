import { useState, useEffect, useRef, useCallback } from "react";
import MapView from "@arcgis/core/views/MapView";
import { clearAddressPoints, getPropertyByGeometry } from "../utils/property";
import { tips } from "./tips";

  
const useProperty = (args: any) => {
    const [condos, setCondos] = useState<__esri.Graphic[]>();
    const condoRef = useRef<__esri.Graphic[]>();
  
    const [feature, setFeature] = useState<__esri.Graphic>();
    const loaded = useRef(false);
    const [infoDisabled, setInfoDisabled] = useState(true);
    const [searching, setSearching] = useState(false);
    const [activeTab, setActiveTab] = useState("list");
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      if (!loaded.current) {
        loaded.current = true;
        setTimeout(() => {
          document.querySelector('.property calcite-tab-nav')?.shadowRoot?.querySelector('.tab-nav')?.setAttribute('style', 'overflow: hidden');
        },100);        
      }
    }, [args.view]);
  
    useEffect(() => {
      if (args.geometry && args.view) {
        getPropertyByGeometry(args.geometry, args.view as MapView).then(
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
      } else {
        setInfoDisabled(true);
        setActiveTab("list");
        setFeature(undefined);
        args.selected(undefined, []);
        setCondos([]);
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
    const clearSearch = useCallback(
      (view: __esri.MapView) => {
        setFeature(undefined);
        setCondos([]);
        setActiveTab('list');
        setInfoDisabled(true);
        args.selected(null, []);
        clearAddressPoints(view)
      },
      []
    );
  
    useEffect(() => {
      setIsActive(args.isActive);
    }, [args.isActive]);
    const panelDismissed = useCallback((e: any) => {
      args.panelDismissed();
    }, []);
    const tipsClicked = useCallback((e: any) => {
      args.showTips(tips);
    }, []);    
  
      return {
        condos,
        feature,
        infoDisabled,
        searching,
        setSearching,
        activeTab,
        isActive,
        condosSelected,
        featureSelected,
        panelDismissed,
        clearSearch,
        tipsClicked        
      }
};

export default useProperty;