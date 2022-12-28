import React, { useEffect, useState, useRef } from "react";
import Portal from "@arcgis/core/portal/Portal";
import PortalGroup from "@arcgis/core/portal/PortalGroup";
import PortalItem from "@arcgis/core/portal/PortalItem";

import Basemap from "@arcgis/core/Basemap";

import {
  CalciteCombobox,
  CalciteComboboxItem,
  CalciteSlider,
  CalciteStepper,
  CalciteStepperItem,
} from "@esri/calcite-components-react";
import { addBasemap } from "./utils/blend";
import "./Blend.css";

function Blend(args: any) {
  const loaded = useRef(false);
  const [activeStep, setActiveStep] = useState("basemap");
  const [maps, setMaps] = useState<PortalItem[]>([]);
  const [images, setImages] = useState<PortalItem[]>([]);
  const basemap = useRef<Basemap>(new Basemap({ baseLayers: [] }));
  useEffect(() => {
    if (!loaded.current) {
       loaded.current = true;
      const portal = new Portal();
      portal
        .queryGroups({
          query: `id: ${args.mapGroup}`,
        })
        .then((result) => {
          const group: PortalGroup = result.results[0] as PortalGroup;
          group
            .queryItems({
              query: "Web Map",
            })
            .then((result) => {
              setMaps(result.results);
              
            });
        });

    }
  }, [args.mapGroup]);
  useEffect(() => {
    const portal = new Portal();

    portal
    .queryGroups({
      query: `id: ${args.imageGroup}`,
    })
    .then((result) => {
      const group: PortalGroup = result.results[0] as PortalGroup;
      group
        .queryItems({
          query: "*",
        })
        .then((result) => {
          setImages(result.results);

        });
    });  
  },[args.imageGroup])
  return (
    <div className="blend">
      <CalciteStepper layout="vertical">
        <CalciteStepperItem
          active={activeStep === "basemap" ? true : undefined}
          itemTitle="Basemap"
          description="Select basemap layer"
          onClick={() => setActiveStep("basemap")}
        >
          <CalciteCombobox
            label="Basemaps"
            selectionMode="single"
            scale="l"
            onCalciteComboboxChange={(evt) =>
              addBasemap(
                "images",
                evt,
                maps,
                basemap.current as Basemap,
                0,
                setActiveStep,
                args.view as __esri.MapView
              )
            }
          >
            {maps.map((item: PortalItem) => {
              return (
                <CalciteComboboxItem
                  key={item.id}
                  title={item.title}
                  textLabel={item.title}
                  value={item.id}
                ></CalciteComboboxItem>
              );
            })}
          </CalciteCombobox>
        </CalciteStepperItem>
        <CalciteStepperItem
          active={activeStep === "images" ? true : undefined}
          itemTitle="Image"
          description="Select imagery layer"
          onClick={() => setActiveStep("images")}
        >
          <CalciteCombobox
            label="Images"
            selectionMode="single"
            scale="l"
            onCalciteComboboxChange={(evt) =>
              addBasemap(
                "opacity",
                evt,
                images,
                basemap.current as Basemap,
                1,
                setActiveStep,
                args.view as __esri.MapView
              )
            }
          >
            {images
              .sort((a, b) => {
                return a.title > b.title ? -1 : 1;
              })
              .map((item: PortalItem) => {
                return (
                  <CalciteComboboxItem
                    key={item.id}
                    title={item.title}
                    textLabel={item.title}
                    value={item.id}
                  ></CalciteComboboxItem>
                );
              })}
          </CalciteCombobox>
        </CalciteStepperItem>
        <CalciteStepperItem
          active={activeStep === "opacity" ? true : undefined}
          itemTitle="Opacity"
          description="Set base map layer opacity"
          onClick={() => setActiveStep("opacity")}
        >
          <CalciteSlider
            max={1}
            min={0}
            step={0.1}
            value={
              basemap.current?.baseLayers?.getItemAt(
                basemap.current.baseLayers.length - 1
              )?.opacity
            }
            maxLabel="Opaque"
            minLabel="Transparent"
            onCalciteSliderInput={(evt) => {
              if (args.view) {
                args.view.map.basemap.baseLayers.getItemAt(basemap.current.baseLayers.length - 1).opacity = evt.target
                  .value as number;
              }
            }}
          ></CalciteSlider>
        </CalciteStepperItem>
      </CalciteStepper>
    </div>
  );
}

export default React.memo(Blend);
