import { useCallback, useEffect, useRef, useState } from "react";
import { addSearchEvents, intializeLocationFeature, intializeLocationSearch } from "./location";
import { tips } from "./tips";

const useLocation = (args: any) => {
    const searchDiv = useRef(null);
    const featureDiv = useRef<HTMLDivElement>(null);
  
    const loaded = useRef(false);
    const search = useRef<__esri.widgetsSearch>();
    const feature = useRef<__esri.Feature>();
  
    const [isIntersection, setIsIntersection] = useState(false);
    const [intersections, setIntersections] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      if (!loaded.current && searchDiv.current) {
        loaded.current = true;
        intializeLocationSearch(args.view, searchDiv.current).then(
          (searchWidget: __esri.widgetsSearch) => {
            search.current = searchWidget;
            addSearchEvents(
              searchWidget,
              args.view,
              setIsIntersection,
              setIntersections,
              setSearchTerm,
              feature.current as __esri.Feature
            );
          }
        );
        feature.current = intializeLocationFeature(
          args.view,
          featureDiv.current as HTMLDivElement
        );
      }
    });
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
        searchDiv,
        featureDiv,
        search,
        isIntersection,
        intersections,
        searchTerm,
        isActive,
        panelDismissed,
        tipsClicked        
        }        
}
export default useLocation;