import { useCallback, useEffect, useRef, useState } from "react";
import { tips } from "./tips";
import Measurement from "@arcgis/core/widgets/Measurement";
import { initializeMeasure } from "./measure";
  
const useBookmarks = (args: any) => {
    const measureRef = useRef() as any;
    const loaded = useRef(false);
    const [selectedTool, setSelectedTool] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [measurement, setMeasurement] = useState<Measurement>();
    useEffect(() => {
      if (!loaded.current) {
        loaded.current = true;
        const widget = initializeMeasure(measureRef.current, args.view);
        setMeasurement(widget);
        widget.watch("activeTool", (activeTool) => {
          setSelectedTool(activeTool ? activeTool : "");
          measurement?.clear();
        });
      }
      return () => {
        measurement && measurement?.destroy();
      };
    }, []);
    useEffect(() => {
      setIsActive(args.isActive);
    }, [args.isActive]);
    const toolDismissed = useCallback((e: any) => {
      args.toolDismissed();
      
      (measurement as any).activeTool = null;
      measurement?.clear();
    }, []);
    const tipsClicked = useCallback((e: any) => {
      args.showTips(tips);
      }, []);      
    return {measureRef, measurement, selectedTool, setSelectedTool, isActive, toolDismissed, tipsClicked}
};

export default useBookmarks;
