import MapView from "@arcgis/core/views/MapView";
import { useCallback, useEffect, useRef, useState } from "react";
import { blendBasemap, initializeBasemaps, initializeEsriMaps, initializeImageMaps, updateBlendOpacity } from "./basemaps";
import { tips } from "./tips";

const useBasemaps = (args: any) => {
    const [view, setView] = useState<MapView>();
    const [showAlert, setShowAlert] = useState<any>({
      show: false,
      from: "",
      to: "",
    });
    const [isActive, setIsActive] = useState(false);
    const [blendActive, setBlendActive] = useState(false);

    const loaded = useRef(false);
    const basemapRef = useRef(null);
    const imagesRef = useRef(null);
    const esriRef = useRef(null);
    const opacity = useRef(0.5);
    const mapGroup = "f6329364e80c438a958ce74aadc3a89f";
    const imageGroup = "492386759d264d49948bf7f83957ddb9";
    const streetMapId = '02d50d24991747538e218e0a5806e9b3';
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
        setTimeout(() => {
          document.querySelector('.basemaps calcite-tab-nav')?.shadowRoot?.querySelector('.tab-nav')?.setAttribute('style', 'overflow: hidden');
        },100);
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
      const blendUpdated = useCallback((e: any) => {
        setBlendActive(e.detail.switched);
        debugger;
       blendBasemap(e.detail.switched, args.view, streetMapId, opacity.current);
      }, []);        
      const blendOpacityChanged = useCallback((e: any) => {
        opacity.current = 1 - e.target.value/100;
        updateBlendOpacity(e.target.value/100, args.view, streetMapId, opacity.current);
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
        tipsClicked  ,
        blendUpdated ,
        blendOpacityChanged,
        blendActive
        }        
}
export default useBasemaps;