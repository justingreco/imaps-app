import React, { useEffect, useState } from "react";
import { getSymbols } from "./utils/sketch";

function PointSymbols(args: any) {

  const [symbols, setSymbols] = useState<any[]>([]);
  useEffect(() => {
    getSymbols().then(items =>  setSymbols(items as any[]));
  }, []);
  return <div id="point-symbols">
    {/* {symbols.map((symbol, i)  => {
      return <img key={i} src={`http://www.arcgis.com/sharing/rest/content/items/70ccf6bcbd304773a164be896e76edd3/${symbol.thumbnail.href}`}/>
    })} */}
  </div>;
}

export default PointSymbols;
