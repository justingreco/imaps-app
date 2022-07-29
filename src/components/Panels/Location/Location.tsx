import {
  CalciteCombobox,
  CalciteComboboxItem,
  CalciteLabel,
  CalciteSelect,
} from "@esri/calcite-components-react";
import React, { useEffect, useRef, useState } from "react";
import {
  addSearchEvents,
  intersectingStreetSelected,
  intializeLocationFeature,
  intializeLocationSearch,
} from "./utils";
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
  return (
    <div id="location-search">
      <div ref={searchDiv}></div>
      {isIntersection && (
        <div>
          <CalciteLabel>
            Intersections
            <CalciteCombobox label={""} selectionMode="single">
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
      <div ref={featureDiv}></div>
    </div>
  );
}

export default Location;
