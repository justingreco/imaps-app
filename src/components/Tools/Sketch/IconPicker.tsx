import { CalciteIcon, CalciteLabel } from "@esri/calcite-components-react";
import React from "react";
import "./Sketch.css";

function IconPicker(args: any) {
  return (
    <div id="icon-picker">
      <div id="icon-preview" className="preview"></div>
      <CalciteLabel alignment="start" scale="m" layout="default">
        <button
          className="change-symbol-trigger"
          type="button"
          onClick={() => {
            args.pickerClicked();
          }}
        >
          <div className="container">
            {args.symbol && (
              <div className="icon-symbol">
                <img
                  src={`${args.symbol.url}${args.symbol.thumbnail.href.replace(
                    ".",
                    ""
                  )}`}
                  alt={args.symbol.title}
                  width={50}
                  height={50}
                />
              </div>
            )}

            <div className="icon-label">{args.symbol.title}</div>
            <CalciteIcon icon="chevron-right"></CalciteIcon>
          </div>
        </button>
      </CalciteLabel>
    </div>
  );
}

export default React.memo(IconPicker);
