import {
  CalciteFlow,
  CalciteInput,
  CalciteLabel,
  CalcitePanel,
} from "@esri/calcite-components-react";
import React, { useEffect, useState } from "react";
import { getSymbols } from "./utils/sketch";
import IconPicker from "./IconPicker";
import IconSelectionPanel from "./IconSelectionPanel";
import ColorButton from "./ColorButton";
import Color from "@arcgis/core/Color";

function PointSymbols(args: any) {
  const [symbols, setSymbols] = useState<any[]>([]);
  const [symbol, setSymbol] = useState<any>();
  const [pointSize, setPointSize] = useState(16);

  const url = "https://www.arcgis.com/sharing/rest/content/items/";
  const ids = [
    "a63b3a4631ae41d4a1bc3ba6d9c85bfe",
    "70ccf6bcbd304773a164be896e76edd3",
  ];

  const [activePanel, setActivePanel] = useState("main");
  const [pointColor, setPointColor] = useState<Color>(
    new Color([255, 0, 0, 1])
  );

  useEffect(() => {
    getSymbols(ids, url).then((items: any) => {
      setSymbols(items as any[]);
      if (items.length) {
        setSymbol(items[0]);
        args.pointSymbolUpdated(items[0], pointColor, pointSize);
      }
    });
  }, []);
  return (
    <div id="point-symbols">
      {symbols.length && (
        <CalciteFlow>
          {activePanel === "main" && (
            <CalcitePanel>
              <IconPicker
                pickerClicked={() => setActivePanel("icon")}
                symbol={symbol}
              ></IconPicker>
              <ColorButton
                id="point"
                label="Point"
                color={pointColor.toRgba()}
                colorSet={(c: any) => {
                  setPointColor(c);
                  args.pointSymbolUpdated(symbol, c, pointSize);
                }}
              ></ColorButton>
              <CalciteLabel>
                Size
                <CalciteInput
                  type="number"
                  min={6}
                  max={72}
                  value={pointSize.toString()}
                  onCalciteInputChange={(e: any) => {
                    setPointSize(parseFloat(e.target.value));
                    args.pointSymbolUpdated(
                      symbol,
                      pointColor,
                      parseFloat(e.target.value)
                    );
                  }}
                ></CalciteInput>
              </CalciteLabel>
            </CalcitePanel>
          )}
          {activePanel === "icon" && (
            <IconSelectionPanel
              iconSelected={(icon: any) => {
                setSymbol(icon);
                args.pointSymbolUpdated(icon, pointColor, pointSize);
              }}
              backClicked={() => setActivePanel("main")}
              symbols={symbols}
            ></IconSelectionPanel>
          )}
        </CalciteFlow>
      )}
    </div>
  );
}

export default React.memo(PointSymbols);
