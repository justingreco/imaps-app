import { useCallback, useEffect, useRef, useState } from "react";
import { cancelSketch, initializeSketchViewModel, sketchActivated } from "./sketch";
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
    if (!args.isActive) {
      args.toolDismissed();
      cancelSketch();
      setActiveSketchTool("");
      setSelectedGraphics([...[],...[]]);
      //args.view.highlightOptions = {fillOpacity: 0.25, color: '#00ffff', haloColor: '#00ffff', haloOpacity: 1} as any;
    }  else {
      (args.view as __esri.MapView).popup.autoOpenEnabled = false;
      sketchActivated();
    }
  }, [args.isActive]);
  const toolDismissed = useCallback(() => {
    args.toolDismissed();
    cancelSketch();
    setActiveSketchTool("");
    setSelectedGraphics([...[],...[]]);

    //args.view.highlightOptions = {fillOpacity: 0.25, color: '#00ffff', haloColor: '#00ffff', haloOpacity: 1} as any;
  }, []);
  const tipsClicked = useCallback((e: any) => {
    args.showTips(tips);
    }, []);
  const checkGeometryType = (selectedGraphics: __esri.Graphic[], geometryType: string) => {
    const geometryTypes = selectedGraphics.map(graphic => {
      let type: string = graphic.geometry.type;
      if (graphic.symbol.type === 'text') {
        type = 'text';
      }
      return type;
    });
    const uniqueTypes = geometryTypes.filter((t, index) => {
      return geometryTypes.indexOf(t) === index;
    });
    console.log(uniqueTypes);
    if (uniqueTypes.length > 1 || uniqueTypes.length < 1 || selectedGraphics.length !== 1) {
      return false;
    }
    if (uniqueTypes.length === 1 && uniqueTypes[0] === geometryType) {
      return true;
    }
  }
  return {activeSketchTool, setActiveSketchTool, selectedGraphics, setSelectedGraphics, isActive, toolDismissed, tipsClicked,checkGeometryType}
};

export default useSketch;
