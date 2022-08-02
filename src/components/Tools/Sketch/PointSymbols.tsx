import "@esri/calcite-components/dist/components/calcite-combobox";
import "@esri/calcite-components/dist/components/calcite-combobox-item";
import {
  CalciteButton,
  CalciteCombobox,
  CalciteComboboxItem,
  CalcitePopover,
} from "@esri/calcite-components-react";
import React, { useEffect, useState } from "react";
import { getSymbols } from "./utils/sketch";

function PointSymbols(args: any) {
  const [symbols, setSymbols] = useState<any[]>([]);
  useEffect(() => {
    getSymbols().then((items) => setSymbols(items as any[]));
  }, []);
  return (
    <div id="point-symbols">
      <CalcitePopover label="Icons" referenceElement="popover-button">
        <div id="symbols">
          {symbols.map((symbol, i) => {
            return <div key={i} id={`pin-${i}`}></div>;
          })}
        </div>
      </CalcitePopover>
      <CalciteButton id="popover-button">Activate Popover</CalciteButton>
    </div>
  );
}

export default React.memo(PointSymbols);
