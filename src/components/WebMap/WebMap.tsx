import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import { displayProperties, initializeMap } from "./utils/map";
import "./WebMap.css";
function WebMap(args: any) {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const view = useRef<MapView | null>(null);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      const mapView = initializeMap(
        ref.current,
        args.mapId,
        args.geometrySet,
        args.widgetActivated
      );
      view.current = mapView;
      args.mapViewSet(view.current);
    }
    return () => {};
  }, []);
  useEffect(() => {
    if (args.properties) {
      displayProperties(args.properties, view.current as __esri.MapView);
    }
  }, [args.properties]);

  return <div className="mapDiv" ref={ref}></div>;
}

export default React.memo(WebMap);
