import { CalciteButton } from "@esri/calcite-components-react";
import React, { useEffect, useRef, useState } from "react";

function NextPropertyButton(args: any) {


  useEffect(() => {

  }, []);

  return <CalciteButton appearance="transparent" kind="neutral" scale="s" iconEnd={args.icon} onClick={() => {
    const ids = (args.featureTable as __esri.FeatureTable).highlightIds;
    if (ids.length) {
      const orderByFields = (args.featureTable as __esri.FeatureTable).activeSortOrders.map(order => {
        return order.fieldName + ' ' + order.direction
      });
      ((args.featureTable as __esri.FeatureTable).layer as __esri.FeatureLayer).queryFeatures({
        where: '1=1',
        orderByFields: orderByFields,
        outFields: ['OBJECTID']
      }).then(fs => {
        const oids = fs.features.map(feature => {
          return feature.getAttribute("OBJECTID");
        });
        console.log(ids.getItemAt(0))
        let index = oids.findIndex(i => {
          return i === ids.getItemAt(0)
        });

        if (args.text === 'Next') {
          index += 1;
          if (index === oids.length) {
            index = 0;
          }      
        }
        if (args.text === 'Previous') {
          if (index === 0) {
            index = oids.length - 1
          } else {
            index -= 1;
          }      
        }    

        (args.featureTable as __esri.FeatureTable).highlightIds.removeAll();
        (args.featureTable as __esri.FeatureTable).highlightIds.add(oids[index]);
      })
    }
  }}></CalciteButton>;
}

export default React.memo(NextPropertyButton);
