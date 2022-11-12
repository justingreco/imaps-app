import { useCallback, useEffect, useRef, useState } from "react";
import { initializeLayers } from "./layers";
import { tips } from "./tips";

const useLayers = (args: any) => {

    const ref = useRef() as any;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loaded = useRef(false);
    const [layerList, setLayerList] = useState<__esri.LayerList>();
    const [isLoading, setIsLoading] = useState(true);
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      if (!loaded.current) {
        loaded.current = true;
        initializeLayers(ref.current, args.view).then(
          (layerList: __esri.LayerList) => {
            setLayerList(layerList);
            layerList.when(() => {
              setIsLoading(false);
            });
          }
        );
      }
      return () => {
        layerList && layerList?.destroy();
      };
    }, []); // only after first render
  
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
        ref,
        layerList,
        isLoading,
        isActive,
        panelDismissed,
        tipsClicked        
        }        
}
export default useLayers;