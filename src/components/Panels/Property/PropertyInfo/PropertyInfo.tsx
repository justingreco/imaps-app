import React, { useEffect, useRef, useState } from "react";
import { createTemplate } from "../popuptemplate";
import { initializeFeature, updateFeature } from "../utils/info";

function PropertyInfo(args: any) {
  const loaded = useRef(false);
  const ref = useRef<any>(null);
  const [feature, setFeature] = useState<__esri.Feature>();
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      setFeature(initializeFeature(ref.current, args.view));
    }
    return () => {
      feature && feature?.destroy();
    };
  }, []);
  useEffect(() => {
    let pin = "";
    if (feature && args.feature) {
      pin = args.feature.getAttribute("PIN_NUM");
      const table = feature?.view.map.allTables.find((table: __esri.Layer) => {
        return table.title.includes("Condo");
      }) as __esri.FeatureLayer;
      args.feature.view = feature.view;
      args.feature.layer = table;
      args.feature.popupTemplate = createTemplate(
        feature?.view as __esri.MapView,
        table
      );
      updateFeature(feature, args.feature);
    }
    const url = new URL(window.location as any);
    url.searchParams.delete("pins");

    if (pin !== "") {
      url.searchParams.set("pins", pin);
    }

    //only pushState when history state is different than parameters
    if (window.history.state?.pins !== pin) {
      window.history.pushState({ pins: pin }, "", url);
    }
  }, [args.feature]);
  return <div ref={ref}></div>;
}

export default PropertyInfo;
