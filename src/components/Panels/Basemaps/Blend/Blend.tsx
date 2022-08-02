import "@esri/calcite-components/dist/components/calcite-stepper";
import "@esri/calcite-components/dist/components/calcite-stepper-item";
import "@esri/calcite-components/dist/components/calcite-combobox";
import "@esri/calcite-components/dist/components/calcite-combobox-item";
import "@esri/calcite-components/dist/components/calcite-slider";

import React, { useEffect, useState, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
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
  const [view, setView] = useState<MapView>();
  const loaded = useRef(false);
  const [activeStep, setActiveStep] = useState("basemap");
  const [maps, setMaps] = useState<PortalItem[]>([]);
  const [images, setImages] = useState<PortalItem[]>([]);
  const basemap = useRef<Basemap>(new Basemap({ baseLayers: [] }));
  useEffect(() => {
    setView(args.view);
    if (!loaded.current) {
      const portal = new Portal();
      portal
        .queryGroups({
          query: `id: ${args.mapGroup}`,
        })
        .then((result) => {
          const group: PortalGroup = result.results[0] as PortalGroup;
          group
            .queryItems({
              query: "*",
            })
            .then((result) => {
              setMaps(result.results);
            });
        });
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
    }
  }, [args.view, args.mapGroup, args.imageGroup]);

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
                view as __esri.MapView
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
                view as __esri.MapView
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
          description="Set opacity"
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
              if (view) {
                view.map.basemap.baseLayers.getItemAt(0).opacity = evt.target
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
