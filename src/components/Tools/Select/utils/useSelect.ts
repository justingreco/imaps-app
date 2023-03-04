import { useCallback, useEffect, useRef, useState } from "react";
import {
    cancelSelect,
    initializeSelect,
  } from "../utils/select";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import { tips } from "./tips";
  
const useSelect = (args: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loaded = useRef(false);
    const [isActive, setIsActive] = useState(false);
    
    const [selectedTool, setSelectedTool] = useState("");
    const [distance, setDistance] = useState(0);
    
    const [sketchVm, setSketchVm] = useState<SketchViewModel>();
    const [selectedProperty, setSelectedProperty] = useState(undefined) as any;
    
    useEffect(() => {
      if (!loaded.current) {
        loaded.current = true;
        setSketchVm(
          initializeSelect(
            args.view,
            args.geometrySet,
            setSelectedTool
          )
        );
      }
      return () => {
        sketchVm && sketchVm.destroy();
      };
    }, []); // only after first render
    useEffect(() => {
      if (args.selectedProperty) {
        setSelectedProperty(args.selectedProperty);
      }
    }, [args.selectedProperty]);
    useEffect(() => {
      if (sketchVm && args.selectDismissed) {
        sketchVm.cancel();
        setSelectedTool("");
      }
    }, [args.selectDismissed]);
    useEffect(() => {
      setIsActive(args.isActive);
      if (!args.isActive) {
        cancelSelect();
      }
    }, [args.isActive]);
    const toolDismissed = useCallback((e: any) => {
      args.toolDismissed();
      cancelSelect();
    }, []);
    const tipsClicked = useCallback((e: any) => {
      args.showTips(tips);
      }, []);      
    return {isActive, selectedTool, setSelectedTool, sketchVm, distance, setDistance
    , selectedProperty, toolDismissed, tipsClicked}
};

export default useSelect;
