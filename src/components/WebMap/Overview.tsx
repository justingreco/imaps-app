import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";

import "./WebMap.css";
import { initializeOverview } from "./utils/overview";
function Overview(args: any) {
  const ref = useRef() as any;
  const loaded = useRef(false);
  const overview = useRef<MapView | null>(null);
  const view = useRef<MapView | null>(null);

  useEffect(() => {
    if (!loaded.current && args.view) {
      loaded.current = true;
      const mapView = initializeOverview(
        ref.current,
        args.view
      );
      overview.current = mapView;
      view.current = args.view
    }
    return () => {
      overview.current && overview.current?.destroy();
    };
  }, []);


  return <div id="overview-map" ref={ref}></div>;
}

export default React.memo(Overview);
