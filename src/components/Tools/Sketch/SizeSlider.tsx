import {
  CalciteInput,
  CalciteLabel,
  CalciteSlider,
} from "@esri/calcite-components-react";
import { useEffect, useState } from "react";
import React from "react";

function SizeSlider(args: any) {
  const [value, setValue] = useState<any>();
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);
  return (
    <CalciteLabel>
      {args.label}
      <div className="slider-input">
        <CalciteSlider
          max={args.max}
          min={args.min}
          value={value}
          onCalciteSliderInput={(e) => {
            setValue(e.target.value);
            args.sizeSet(e.target.value);
          }}
        ></CalciteSlider>
        <CalciteInput
          type="number"
          numberButtonType="none"
          min={args.min}
          max={args.max}
          value={value}
          suffixText="px"
          onCalciteInputInput={(e) => {
            setValue(parseFloat(e.target.value));
            args.sizeSet(parseFloat(e.target.value));
          }}
        ></CalciteInput>
      </div>
    </CalciteLabel>
  );
}
export default React.memo(SizeSlider);
