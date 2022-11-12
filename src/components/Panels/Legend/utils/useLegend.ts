import { useCallback, useEffect, useRef, useState } from "react";
import { initializeLegend } from "./legend";
import { tips } from "./tips";

const useLegend = (args: any) => {
const ref = useRef() as any;
  const loaded = useRef(false);
  const [legend, setLegend] = useState<__esri.Legend>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      setLegend(initializeLegend(ref.current, args.view));
    }
    return () => {
      legend && legend?.destroy();
    };
  }, []);
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
        isActive,
        panelDismissed,
        tipsClicked          
        }        
}
export default useLegend;