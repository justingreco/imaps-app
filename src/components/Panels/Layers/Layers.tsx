import {
  CalciteAction,
  CalciteInput,
  CalciteScrim,
  CalcitePanel,
} from "@esri/calcite-components-react";
import React, { useCallback } from "react";
import { useEffect, useRef, useState } from "react";
import { filterLayers, initializeLayers, resetLayers } from "./utils/layers";
import "./Layers.css";
export const Layers = (args: any) => {
  const ref = useRef() as any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loaded = useRef(false);
  const [layerList, setLayerList] = useState<__esri.LayerList>();
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      initializeLayers(ref.current, args.view).then(
        (layerList: __esri.LayerList) => {
          setLayerList(layerList);
          layerList.when(() => {
            setIsLoading(false);
          });
        }
      );
    }
    return () => {
      layerList && layerList?.destroy();
    };
  }, []); // only after first render

  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const panelDismissed = useCallback((e: any) => {
    args.panelDismissed();
  }, []);

  return (
    <CalcitePanel
      id="layers-panel"
      heading="Layers"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={panelDismissed}
    >
      <div className="layers">
        {layerList && (
          <div className="row sticky">
            <CalciteInput
              clearable
              placeholder="Filter by layer name"
              scale="m"
              onCalciteInputInput={(e) => {
                if (layerList) {
                  filterLayers(e.target.value, layerList);
                }
              }}
            ></CalciteInput>
            <CalciteAction
              text="clear"
              icon="viewHide"
              scale="s"
              onClick={() => resetLayers(layerList)}
            ></CalciteAction>
          </div>
        )}
        <div ref={ref}></div>
        <CalciteScrim
          loading
          hidden={isLoading ? undefined : true}
        ></CalciteScrim>
      </div>
    </CalcitePanel>
  );
};
export default Layers;
