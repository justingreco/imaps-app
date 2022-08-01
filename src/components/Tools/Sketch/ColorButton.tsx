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
  CalciteAction,
  CalciteButton,
  CalciteColorPicker,
  CalciteColorPickerSwatch,
  CalciteInput,
  CalciteLabel,
  CalcitePanel,
  CalcitePopover,
  CalciteSlider,
} from "@esri/calcite-components-react";
import React, { useEffect, useRef, useState } from "react";

function ColorButton(args: any) {
  const popover = useRef<HTMLCalcitePopoverElement>(null);
  const picker = useRef<HTMLCalciteColorPickerElement>(null);
  const [color, setColor] = useState<Color>();
  const [transparency, setTransparency] = useState<any>(0);
  useEffect(() => {
    if (args.color) {
      setColor(new Color(args.color));
      setTransparency((1 - args.color[3]) * 100);
    }
  }, [args.color]);

  return (
    <div id={args.id}>
      <CalciteLabel>
        {args.label} Color
        <CalciteButton
          id={`${args.id}-popover-button`}
          width="half"
          iconEnd="pencil"
          color="neutral"
          appearance="outline"
        >
          <CalciteColorPickerSwatch
            color={color?.toHex()}
          ></CalciteColorPickerSwatch>
        </CalciteButton>
      </CalciteLabel>
      <CalcitePopover
        ref={popover}
        overlayPositioning="fixed"
        placement="top-leading"
        label={""}
        referenceElement={`${args.id}-popover-button`}
      >
        <CalcitePanel heading="Color">
          <CalciteAction
            icon="x"
            text=""
            slot="header-actions-end"
            onClick={() => {
              popover.current?.toggle();
              const c = new Color(color);
              c.a = 1 - transparency / 100;
              args.colorSet(c);
            }}
          ></CalciteAction>
          <CalciteColorPicker
            ref={picker}
            hideSaved
            hideHex
            hideChannels
            value={color ? color.toHex() : "#FF0000"}
            onCalciteColorPickerInput={(e) =>
              setColor(new Color(e.target.value))
            }
          ></CalciteColorPicker>
        </CalcitePanel>
        {/* <CalciteButton
          width="full"
          onClick={() => {
            popover.current?.toggle();
            const c = new Color(color);
            c.a = 1 - transparency / 100;
            args.colorSet(c);
          }}
        >
          Done
        </CalciteButton> */}
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
