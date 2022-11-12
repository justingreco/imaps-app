import MapView from "@arcgis/core/views/MapView";
import { useCallback, useEffect, useRef, useState } from "react";
import { initializeBasemaps, initializeEsriMaps, initializeImageMaps } from "./basemaps";
import { tips } from "./tips";

const useBasemaps = (args: any) => {
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
    const tipsClicked = useCallback((e: any) => {
        args.showTips(tips);
        }, []);    
    return {
        basemapRef,
        imagesRef,
        esriRef,
        mapGroup,
        imageGroup,
        view,
        showAlert,
        isActive,
        panelDismissed,
        tipsClicked        
        }        
}
export default useBasemaps;