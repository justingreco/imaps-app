import React, { useEffect } from "react";
import "./WebMap.css";
import useWebMap from "./utils/useWebMap";
function WebMap(args: any) {

  const { 
    view, ref
  } = useWebMap(args);
  return <div className="mapDiv" ref={ref}></div>;
}

export default React.memo(WebMap);
