import { useCallback, useEffect, useRef, useState } from "react";
import { tips } from "./tips";
import Measurement from "@arcgis/core/widgets/Measurement";
import { initializeMeasure } from "./measure";
  
const useMeasure = (args: any) => {
    const measureRef = useRef() as any;
    const loaded = useRef(false);
    const [selectedTool, setSelectedTool] = useState("");
    const [isActive, setIsActive] = useState(false);
    const measurement = useRef<Measurement>();
    useEffect(() => {
      if (!loaded.current) {
        loaded.current = true;
        const widget = initializeMeasure(measureRef.current, args.view);
       measurement.current = widget;
        widget.watch("activeTool", (activeTool) => {
          setSelectedTool(activeTool ? activeTool : "");
          measurement.current?.clear();
        });
      }
      return () => {
        measurement.current && measurement.current?.destroy();
      };
    }, []);
    useEffect(() => {
      setIsActive(args.isActive);
      if (!args.isActive) {
        (measurement.current as any).activeTool = null;
        measurement.current?.clear();
      }
    }, [args.isActive]);
    const toolDismissed = useCallback((e: any) => {
      args.toolDismissed();
      
      (measurement.current as any).activeTool = null;
      measurement.current?.clear();
    }, []);
    const tipsClicked = useCallback((e: any) => {
      args.showTips(tips);
      }, []);      
    return {measureRef, measurement, selectedTool, setSelectedTool, isActive, toolDismissed, tipsClicked}
};

export default useMeasure;
