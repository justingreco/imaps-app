import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-label";
import Color from "@arcgis/core/Color";
import {
  CalciteInput,
  CalciteLabel,
  CalciteSwitch,
} from "@esri/calcite-components-react";
import React, { useState } from "react";
import ColorButton from "./ColorButton";

function TextSymbols(args: any) {
  const [fontColor, setFontColor] = useState<Color>(new Color([255, 0, 0, 1]));
  const [fontSize, setFontSize] = useState(10);
  const [showHalo, setShowHalo] = useState(false);
  const [haloSize, setHaloSize] = useState(1);
  const [haloColor, setHaloColor] = useState<Color>(
    new Color([255, 255, 255, 1])
  );
  const [textContent, setTextContent] = useState("");

  return (
    <div id="text-symbols">
      <CalciteLabel>
        Text
        <CalciteInput
          type="textarea"
          scale="m"
          value={textContent}
          onCalciteInputInput={(e) => {
            setTextContent(e.target.value);
          }}
          onCalciteInputChange={(e) => {
            requestAnimationFrame(() => {
              args.textSymbolUpdated(
                fontSize,
                fontColor,
                haloSize,
                haloColor,
                showHalo,
                textContent
              );
            });
          }}
        ></CalciteInput>
      </CalciteLabel>
      <ColorButton
        id="font"
        label="Font"
        color={fontColor.toRgba()}
        hideTransparency
        colorSet={(color: any) => {
          setFontColor(color);
          args.textSymbolUpdated(
            fontSize,
            fontColor,
            haloSize,
            haloColor,
            showHalo,
            textContent
          );
        }}
      ></ColorButton>
      <CalciteLabel>
        Font Size
        <CalciteInput
          type="number"
          min={5}
          max={125}
          value={fontSize.toString()}
          onCalciteInputInput={(e) => {
            setFontSize(parseFloat(e.target.value));
            args.textSymbolUpdated(
              fontSize,
              fontColor,
              haloSize,
              haloColor,
              showHalo,
              textContent
            );
          }}
        ></CalciteInput>
      </CalciteLabel>
      <CalciteLabel layout="inline">
        Halo
        <CalciteSwitch
          checked={showHalo ? true : undefined}
          onCalciteSwitchChange={(e) => {
            setShowHalo(e.target.checked);
            args.textSymbolUpdated(
              fontSize,
              fontColor,
              haloSize,
              haloColor,
              showHalo,
              textContent
            );
          }}
        ></CalciteSwitch>
      </CalciteLabel>
      <div id="halo" hidden={showHalo ? undefined : true}>
        <ColorButton
          id="halo"
          label=""
          color={haloColor.toRgba()}
          hideTransparency
          colorSet={(color: any) => {
            setHaloColor(color);
            args.textSymbolUpdated(
              fontSize,
              fontColor,
              haloSize,
              haloColor,
              showHalo,
              textContent
            );
          }}
        ></ColorButton>
        <CalciteLabel>
          Size
          <CalciteInput
            type="number"
            min={1}
            max={10}
            value={haloSize.toString()}
            onCalciteInputInput={(e) => {
              setHaloSize(parseFloat(e.target.value));
              args.textSymbolUpdated(
                fontSize,
                fontColor,
                haloSize,
                haloColor,
                showHalo,
                textContent
              );
            }}
          ></CalciteInput>
        </CalciteLabel>
      </div>
    </div>
  );
}

export default TextSymbols;
