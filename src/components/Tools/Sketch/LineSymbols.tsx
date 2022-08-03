import "./Sketch.css";

import React, { useEffect, useState } from "react";
import ColorButton from "./ColorButton";
import SizeSlider from "./SizeSlider";
import Color from "@arcgis/core/Color";

function LineSymbols(args: any) {
  const [lineColor, setLineColor] = useState<Color>(new Color([255, 0, 0, 1]));
  const [width, setWidth] = useState(2);
  useEffect(() => {
    if (lineColor && width) {
      args.polylineSymbolUpdated(lineColor, width);
    }
  }, [lineColor, width]);
  return (
    <div id="line-symbols">
      <div id="line-preview" className="preview"></div>

      <ColorButton
        id="line"
        label="Line"
        color={lineColor.toRgba()}
        colorSet={(c: any) => {
          setLineColor(c);
          args.polylineSymbolUpdated(c, width);
        }}
      ></ColorButton>
      <SizeSlider
        value={width}
        min={0.1}
        max={18}
        label="Width"
        sizeSet={(size: number) => {
          setWidth(size);
          args.polylineSymbolUpdated(lineColor, width);
        }}
      ></SizeSlider>
    </div>
  );
}

export default React.memo(LineSymbols);
