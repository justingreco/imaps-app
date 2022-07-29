import Color from "@arcgis/core/Color";
import React, { useState } from "react";
import ColorButton from "./ColorButton";
import SizeSlider from "./SizeSlider";

function PolygonSymbols(args: any) {
  const [fillColor, setFillColor] = useState<Color>(
    new Color([255, 0, 0, 0.5])
  );
  const [outlineColor, setOutlineColor] = useState<Color>(
    new Color([255, 0, 0, 1])
  );
  const [width, setWidth] = useState(2);
  return (
    <div id="polygon-symbols">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={(23 + width).toString()}
          height={(23 + width).toString()}
        >
          <defs></defs>
          <g
            transform={`matrix(${(
              1.09523809 -
              width * 0.004328966
            ).toString()},0,0,${(
              1.09523809 -
              width * 0.004328966
            ).toString()},${(width * 0.5 + 11).toString()},${(
              width * 0.5 +
              11
            ).toString()})`}
          >
            <path
              vectorEffect="non-scaling-stroke"
              fill={fillColor?.toString()}
              fillRule="evenodd"
              stroke={outlineColor?.toString()}
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="none"
              strokeMiterlimit="4"
              d="M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z"
            ></path>
          </g>
        </svg>
      </div>
      <ColorButton
        id="polygon-fill"
        color={fillColor.toRgba()}
        label="Fill"
        colorSet={(c: any) => {
          setFillColor(c);
          args.polygonSymbolUpdated(fillColor, outlineColor, width);
        }}
      ></ColorButton>
      <ColorButton
        id="polygon-outline"
        color={outlineColor.toRgba()}
        label="Outline"
        colorSet={(c: any) => {
          setOutlineColor(c);
          args.polygonSymbolUpdated(fillColor, outlineColor, width);
        }}
      ></ColorButton>
      <SizeSlider
        label="Outline Width"
        min={0.1}
        max={18}
        value={width}
        sizeSet={(size: any) => {
          setWidth(size);
          args.polygonSymbolUpdated(fillColor, outlineColor, width);
        }}
      ></SizeSlider>
    </div>
  );
}

export default PolygonSymbols;
