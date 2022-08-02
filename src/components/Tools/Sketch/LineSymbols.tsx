import "@esri/calcite-components/dist/components/calcite-color-picker-swatch";
import "@esri/calcite-components/dist/components/calcite-button";
import "./Sketch.css";
import {
  CalciteButton,
  CalciteColorPickerSwatch,
  CalciteInput,
  CalciteLabel,
} from "@esri/calcite-components-react";
import React, { useState } from "react";
import ColorButton from "./ColorButton";
import SizeSlider from "./SizeSlider";
import Color from "@arcgis/core/Color";

function LineSymbols(args: any) {
  const [lineColor, setLineColor] = useState<Color>(new Color([255, 0, 0, 1]));
  const [width, setWidth] = useState(2);

  return (
    <div id="line-symbols">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height={width.toString()}
      >
        <defs></defs>
        <g transform="matrix(1,0,0,1,0,0)">
          <path
            fill="none"
            fillRule="evenodd"
            stroke={lineColor?.toString()}
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="none"
            strokeMiterlimit="4"
            d={`M ${(width / 2).toString()} ${(width / 2).toString()} L 49.5 ${(
              width / 2
            ).toString()}`}
          ></path>
        </g>
      </svg>
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
