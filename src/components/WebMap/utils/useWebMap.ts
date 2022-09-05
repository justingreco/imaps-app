import MapView from "@arcgis/core/views/MapView";
import { useEffect, useRef } from "react";
import { displayProperties, initializeMap } from "../utils/map";

  
const useProperty = (args: any) => {
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

        window.addEventListener('unload', () => {

        })
      }
      return () => {
          // clean up the map view
          if (view.current) {
            debugger
            console.log('destroy')
            view.current.destroy();
            view.current = null;
          }
      };
    },[]);
    useEffect(() => {
      if (args.properties) {
        displayProperties(args.properties, view.current as __esri.MapView);
      }
    }, [args.properties]);
    return {ref, loaded, view}
};

export default useProperty;