import "@esri/calcite-components/dist/components/calcite-color-picker-swatch";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-popover";
import "@esri/calcite-components/dist/components/calcite-color-picker";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-input";
import "@esri/calcite-components/dist/components/calcite-label";

import "./Sketch.css";
import Color from "@arcgis/core/Color";
import {
  CalciteButton,
  CalciteColorPicker,
  CalciteColorPickerSwatch,
  CalciteInput,
  CalciteLabel,
  CalcitePopover,
  CalciteSlider,
} from "@esri/calcite-components-react";
import React, { useEffect, useRef, useState } from "react";

function ColorButton(args: any) {
  const popover = useRef<HTMLCalcitePopoverElement>(null);
  const picker = useRef<HTMLCalciteColorPickerElement>(null);
  const [color, setColor] = useState<any>();
  const [transparency, setTransparency] = useState<any>(0);
  useEffect(() => {
    if (args.color) {
      setColor(args.color);
      setTransparency((1 - args.color[3]) * 100);
    }
  }, []);

  return (
    <div>
      <CalciteLabel>
        {args.label} Color
        <CalciteButton
          id={`${args.id}-popover-button`}
          width="half"
          iconEnd="pencil"
          color="neutral"
          appearance="outline"
        >
          <CalciteColorPickerSwatch color={color}></CalciteColorPickerSwatch>
        </CalciteButton>
      </CalciteLabel>
      <CalcitePopover
        ref={popover}
        overlayPositioning="fixed"
        placement="top-leading"
        label={""}
        referenceElement={`${args.id}-popover-button`}
      >
        <CalciteColorPicker
          ref={picker}
          hideSaved
          hideHex
          hideChannels
          onCalciteColorPickerInput={(e) => setColor(e.target.value)}
        ></CalciteColorPicker>
        <CalciteButton
          width="full"
          onClick={() => {
            popover.current?.toggle();
            const c = new Color(color);
            c.a = 1 - transparency / 100;
            args.colorSet(c);
          }}
        >
          Done
        </CalciteButton>
      </CalcitePopover>
      {!args.hideTransparency && (
        <CalciteLabel>
          {args.label} Transparency
          <div className="slider-input">
            <CalciteSlider
              max={100}
              min={0}
              value={transparency}
              onCalciteSliderInput={(e) => {
                let value: number = e.target.value as number;
                if (value > 100) {
                  value = 100;
                }
                if (value < 0) {
                  value = 0;
                }
                setTransparency(value);
                const c = new Color(color);
                c.a = 1 - transparency / 100;
                args.colorSet(c);
              }}
            ></CalciteSlider>
            <CalciteInput
              max={100}
              min={0}
              type="number"
              numberButtonType="none"
              suffixText="%"
              value={transparency}
              onCalciteInputInput={(e) => {
                let value: number = parseInt(e.target.value);
                if (value > 100) {
                  value = 100;
                }
                if (value < 0) {
                  value = 0;
                }

                setTransparency(value);
                const c = new Color(color);
                c.a = 1 - transparency / 100;
                args.colorSet(c);
              }}
            ></CalciteInput>
          </div>
        </CalciteLabel>
      )}
    </div>
  );
}

export default ColorButton;
