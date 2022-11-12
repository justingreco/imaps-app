import { useCallback, useEffect, useRef, useState } from "react";
import { cancelSketch, initializeSketchViewModel } from "./sketch";
import { tips } from "./tips";
  
const useSketch = (args: any) => {

const loaded = useRef(false);
  const [activeSketchTool, setActiveSketchTool] = useState("");
  const [isActive, setIsActive] = useState(false);

  const [selectedGraphics, setSelectedGraphics] = useState<__esri.Graphic[]>(
    []
  );

  useEffect(() => {
    if (!loaded.current) {
      initializeSketchViewModel(
        args.view,
        setActiveSketchTool,
        selectedGraphics,
        setSelectedGraphics
      );
    }
  }, []);
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const toolDismissed = useCallback((e: any) => {
    args.toolDismissed();
    cancelSketch();
    setActiveSketchTool("");
  }, []);
  const tipsClicked = useCallback((e: any) => {
    args.showTips(tips);
    }, []);      
  return {activeSketchTool, setActiveSketchTool, selectedGraphics, setSelectedGraphics, isActive, toolDismissed, tipsClicked}
};

export default useSketch;
