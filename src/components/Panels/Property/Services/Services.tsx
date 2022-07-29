import "@esri/calcite-components/dist/components/calcite-accordion";
import "@esri/calcite-components/dist/components/calcite-accordion-item";
import "@esri/calcite-components/dist/components/calcite-scrim";

import {
  CalciteAccordion,
  CalciteAccordionItem,
  CalciteScrim,
} from "@esri/calcite-components-react";
import React from "react";
import { useEffect, useState } from "react";
import { services } from "../../../../config/config";

import ServiceLayer from "./ServiceLayer";
import { getServices } from "./utils";

export const Services = (args: any) => {
  const [view, setView] = useState<__esri.MapView>();
  const [graphic, setGraphic] = useState<__esri.Graphic>();
  const [features, setFeatures] = useState<__esri.Graphic[]>([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    if (args.view) {
      setView(args.view);
    }
    if (args.graphic) {
      setGraphic(args.graphic);
    }
  }, []);

  return (
    <CalciteAccordion selectionMode="single">
      {services.map((service) => {
        return (
          <CalciteAccordionItem
            key={service.group.title}
            item-title={service.group.title}
            heading={service.group.title}
            onClick={(e) => {
              if (view && graphic) {
                getServices(
                  e,
                  services,
                  view,
                  graphic,
                  setFeatures,
                  setSearching
                );
              }
            }}
          >
            {features.map((feature, i) => {
              return <ServiceLayer key={i} feature={feature}></ServiceLayer>;
            })}
            {features.length === 0 && <div>No information available.</div>}
          </CalciteAccordionItem>
        );
      })}
      <CalciteScrim
        loading
        hidden={searching ? undefined : true}
      ></CalciteScrim>
    </CalciteAccordion>
  );
};
export default Services;
