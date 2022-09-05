import { useState, useEffect, useRef, useCallback } from "react";
import MapView from "@arcgis/core/views/MapView";
import { getPropertyByGeometry } from "../utils/property";

  
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
        panelDismissed}
};

export default useProperty;