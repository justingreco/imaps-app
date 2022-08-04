import "@esri/calcite-components/dist/components/calcite-combobox";
import "@esri/calcite-components/dist/components/calcite-combobox-item";
import {
  CalciteCombobox,
  CalciteComboboxItem,
  CalciteLabel,
  CalcitePanel,
} from "@esri/calcite-components-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  addSearchEvents,
  intersectingStreetSelected,
  intializeLocationFeature,
  intializeLocationSearch,
} from "./utils/location";
import "./Location.css";
function Location(args: any) {
  const searchDiv = useRef(null);
  const featureDiv = useRef<HTMLDivElement>(null);

  const loaded = useRef(false);
  const search = useRef<__esri.widgetsSearch>();
  const feature = useRef<__esri.Feature>();

  const [isIntersection, setIsIntersection] = useState(false);
  const [intersections, setIntersections] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!loaded.current && searchDiv.current) {
      loaded.current = true;
      intializeLocationSearch(args.view, searchDiv.current).then(
        (searchWidget: __esri.widgetsSearch) => {
          search.current = searchWidget;
          addSearchEvents(
            searchWidget,
            args.view,
            setIsIntersection,
            setIntersections,
            setSearchTerm,
            feature.current as __esri.Feature
          );
        }
      );
      feature.current = intializeLocationFeature(
        args.view,
        featureDiv.current as HTMLDivElement
      );
    }
  });
  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);
  const panelDismissed = useCallback((e: any) => {
    args.panelDismissed();
  }, []);
  return (
    <CalcitePanel
      id="location-panel"
      heading="Location Search"
      hidden={!isActive}
      closed={!isActive ? true : undefined}
      dismissed={!isActive ? true : undefined}
      dismissible
      onCalcitePanelDismiss={panelDismissed}
    >
      <div id="location-search">
        <div ref={searchDiv}></div>
        {isIntersection && (
          <div id="intersection-search">
            <CalciteLabel>
              Intersections
              <CalciteCombobox label={""} selectionMode="single" scale="l">
                {intersections.map((intersection, i) => {
                  return (
                    <CalciteComboboxItem
                      key={i}
                      textLabel={intersection}
                      value={intersection}
                      onCalciteComboboxItemChange={(e: any) => {
                        if (e.target.selected) {
                          intersectingStreetSelected(
                            intersection,
                            searchTerm,
                            search?.current?.view as __esri.MapView
                          );
                        }
                      }}
                    ></CalciteComboboxItem>
                  );
                })}
              </CalciteCombobox>
            </CalciteLabel>
          </div>
        )}
        <div id="location-feature" ref={featureDiv}></div>
      </div>
    </CalcitePanel>
  );
}

export default React.memo(Location);
