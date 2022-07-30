import React, { useEffect, useRef } from "react";
import { initializeFeatureTable, updateTable } from "../utils/addresses";
import "./AddressTable.css";
function AddressTable(args: any) {
  const ref = useRef() as any;
  const loaded = useRef(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;

      initializeFeatureTable(ref.current, args.view, args.featureSelected).then(
        (table: __esri.FeatureTable) => {
          updateTable(args.property, table);
        }
      );
    }
    return () => {
      //featureTable && featureTable?.destroy();
    };
  }, []);

  return <div id="address-table" ref={ref}></div>;
}

export default AddressTable;
