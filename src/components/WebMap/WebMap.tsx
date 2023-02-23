import React from "react";
import "./WebMap.css";
import useWebMap from "./utils/useWebMap";
function WebMap(args: any) {
  const { 
    view
  } = useWebMap(args);
  const {ref} = useWebMap(args);

  return <div className="mapDiv" ref={ref}></div>;
}

export default React.memo(WebMap);
