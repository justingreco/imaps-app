import { useState, useEffect, useRef, useCallback } from "react";
import {
    getDistinctProperties,
    mapViewSet,
    toolSelected,
    widgetActivated,
  } from "../utils/shell";
  
const useShell = () => {
    const [activePanel, setActivePanel] = useState("search");
    const [activeTool, setActiveTool] = useState("");
    const loaded = useRef(false);
    const [loading, setLoading] = useState(true);
    const [alert, setAlert] = useState<any>();
    const [showAlert, setShowAlert] = useState(false);
    const [contentBehind, setContentBehind] = useState(false);
    const [loadedPanels, setLoadedPanels] = useState<string[]>(() => ["search"]);
    const [loadedTools, setLoadedTools] = useState<string[]>(() => []); 


    const [view, setView] = useState<__esri.MapView>();
    const viewRef = useRef<__esri.MapView>();

    const [properties, setProperties] = useState<__esri.Graphic[]>();
    const [geometry, setGeometry] = useState<__esri.Geometry>();
    const [selectedProperty, setSelectedProperty] = useState<__esri.Graphic>();

    const [tips, setTips] = useState<any>();
    const lastTips = useRef<any>();
    const [tipsHidden, setTipsHidden] = useState<any>(true);
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
          activePanelChanged as any,
          activeToolChanged as any
        );
      }
    }, []);
    const activePanelChanged = useCallback(
      (panel: string) => {
        setTipsHidden(true);
        setActivePanel(panel);
        if (!loadedPanels.includes(panel)) {
          setLoadedPanels([...loadedPanels, panel]);
        }
      },
      [loadedPanels]
    );
    const activeToolChanged = useCallback(
      (tool: string) => {
        setTipsHidden(true);
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
    const tipsCallback = (newTips: any) => {
      setTips(newTips);
      setTipsHidden(lastTips.current === newTips);
      lastTips.current = lastTips.current === newTips ? null : newTips;
    }
    return {activePanel,activeTool, contentBehind, view, activePanelChanged, activeToolChanged, geometry, propertySelected, loadedPanels, panelDismissed ,loadedTools, toolDismissed, loading,showAlert,selectedProperty,mapCallback, geometryCallback, properties, widgetCallback, alert, tipsCallback, tips, tipsHidden}
};

export default useShell;