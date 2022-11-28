import {
    CalciteSlider,
  } from "@esri/calcite-components-react";
  import React from "react";
  import { useEffect, useRef, useState } from "react";
  import "./Layers.css";
  export const DevPlanFilter = (args: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const loaded = useRef(false);
    const [maxYear, setMaxYear] = useState<number>(0);
    const [minYear, setMinYear] = useState<number>(0);

    const getMinMax = async (layer: __esri.FeatureLayer, datefield: string) => {
        (args.layer as __esri.FeatureLayer).queryFeatures({
          where: `EXTRACT(YEAR,${datefield}) >= 2010`,
          returnGeometry: false,
            outStatistics: [{
              statisticType: 'max',
              onStatisticField: datefield,
              outStatisticFieldName: 'MAX_DATE'
            },{
              statisticType: 'min',
              onStatisticField: datefield,
              outStatisticFieldName: 'MIN_DATE'
            }],
            outFields: ['MAX_DATE','MIN_DATE']

        }).then((stats) => {
          if (stats?.features.length) {
            const max = new Date(stats.features[0].getAttribute('MAX_DATE')).getFullYear();
            const min = new Date(stats.features[0].getAttribute('MIN_DATE')).getFullYear();
            layer.definitionExpression = `EXTRACT(YEAR FROM ${args.datefield}) >= ${min}
            AND EXTRACT(YEAR FROM ${args.datefield}) <= ${max}
            `;
            layer.refresh();
            setMaxYear(max);
            setMinYear(min);
            
          }
        }).catch(reason => {
          console.log(reason);
        });

    }
    useEffect( () => {
     if (args.layer && args.datefield && !loaded.current) {
        loaded.current = true;
        getMinMax(args.layer, args.datefield).then(() => {

        });
     }

    }, []); // only after first render

  
    return (
      <div>
        {/* <CalciteInputDatePicker overlay-positioning="fixed" scale="m" max={`2022-11-11`}
        onCalciteInputDatePickerChange={e => {
            console.log(e.detail);
        }}
        ></CalciteInputDatePicker> */}
        <CalciteSlider 
          labelHandles 
          labelTicks 
          min={minYear} 
          max={maxYear} 
          maxValue={maxYear} 
          minValue={maxYear - 1} 
          minLabel={minYear.toString()} 
          maxLabel={maxYear.toString()}
          onCalciteSliderChange={(e) => {
            args.layer.definitionExpression = `EXTRACT(YEAR FROM ${args.datefield}) >= ${e.target.minValue}
            AND EXTRACT(YEAR FROM ${args.datefield}) <= ${e.target.maxValue}
            `;
            args.layer.refresh();
          }}
          ></CalciteSlider>
      </div>
    );
  };
  export default DevPlanFilter;
  