import "@esri/calcite-components/dist/components/calcite-slider";
import { CalciteSlider } from "@esri/calcite-components-react";
import React, { useEffect, useState } from "react";
export const OpacitySlider = (args: any) => {
  // const layer = useRef<__esri.Layer>();
  const [layer, setLayer] = useState<__esri.Layer>();
  useEffect(() => {
    if (args.layer) {
      setLayer(args.layer);
    }
  }, [args.layer]);
  return (
    <CalciteSlider
      value={args.value}
      max={1}
      min={0}
      step={0.05}
      onCalciteSliderInput={(e) => {
        requestAnimationFrame(() => {
          if (layer) {
            layer.opacity = e.target.value as number;
          }
        });
      }}
    ></CalciteSlider>
  );
};
export default OpacitySlider;
