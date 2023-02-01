import { CalciteBlock, CalciteFlowItem, CalcitePanel } from "@esri/calcite-components-react";
import React, { useEffect, useState } from "react";
import "./Sketch.css";

function IconSelectionPanel(args: any) {
  const [symbols, setSymbols] = useState<any[]>([]);
  useEffect(() => {
    if (symbols && args.symbols) {
      setSymbols(args.symbols);
    }
  }, []);

  return (
    <div id="icon-selection">
      <CalciteFlowItem
        heading="Change Symbol"
        closable
        onCalciteFlowItemBack={() => {
          args.backClicked();
        }}
      >
        <CalciteBlock heading={""}>
        <div className="palette">
          {symbols &&
            symbols.map((symbol: any, i: number) => {
              return (
                <img
                  onClick={() => {
                    args.iconSelected(symbol);
                    args.backClicked();
                  }}
                  className="item"
                  key={`icon-${i}`}
                  alt={symbol.title}
                  src={`${symbol.url}${symbol.thumbnail.href.replace(".", "")}`}
                ></img>
              );
            })}
        </div>
        </CalciteBlock>
      </CalciteFlowItem>
    </div>
  );
}

export default React.memo(IconSelectionPanel);
