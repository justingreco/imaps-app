import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ExpressionInfo from "@arcgis/core/popup/ExpressionInfo";
import CustomContent from "@arcgis/core/popup/content/CustomContent";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FieldInfo from "@arcgis/core/popup/FieldInfo";
import Graphic from "@arcgis/core/Graphic";
import { services } from "../../../config/config";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
const Services = lazy(() => import("./Services/Services"));
const AddressTable = lazy(() => import("./AddressTable/AddressTable"));

const arcadeExpressionInfos = [
  {
    name: "mailing-address",
    title: "mailing-address",
    expression:
      "When(IsEmpty($feature.ADDR3),$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2,$feature.ADDR1 + TextFormatting.NewLine + $feature.ADDR2 + TextFormatting.NewLine + $feature.ADDR3)",
  },
  {
    name: "site-address",
    title: "site-address",
    expression:
      "When($feature.STMISC == '1/2', replace($feature.SITE_ADDRESS, ' ', ' 1/2 ', false), $feature.SITE_ADDRESS)",
  },  
  {
    name: "property-values",
    title: "property-values",
    expression:
      '"Building Value"+TextFormatting.NewLine+"$"+$feature.BLDG_VAL+TextFormatting.NewLine+"Land Value"+TextFormatting.NewLine+"$"+$feature.LAND_VAL+TextFormatting.NewLine+"Total Value"+TextFormatting.NewLine+"$"+$feature.TOTAL_VALUE_ASSD',
  },

  {
    name: "pin",
    title: "PIN",
    expression:
      "var num = $feature.PIN_NUM;var ext = $feature.PIN_EXT;return When(ext == '000',num,num+' '+ext);",
  },
  {
    name: "build_val",
    title: "Building Value",
    expression:
      "var value = $feature.BLDG_VAL;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));",
  },
  {
    name: "land_val",
    title: "Land Value",
    expression:
      "var value = $feature.LAND_VAL;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));",
  },
  {
    name: "total_val",
    title: "Total Value",
    expression:
      "var value = $feature.TOTAL_VALUE_ASSD;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));",
  },
  {
    name: "sale_price",
    title: "Sale Price",
    expression:
      "var value = $feature.TOTSALPRICE;When(IsEmpty(value),'--', '$'+Text(value, '#,###'));",
  },
  {
    name: "city",
    title: "City",
    expression:
      "var city = $feature.CITY_DECODE;When(IsEmpty(city),'', Proper(city));",
  },
  {
    name: "township",
    title: "Township",
    expression:
      "var ts = $feature.TOWNSHIP_DECODE;When(IsEmpty(ts),'', Proper(ts));",
  },
  {
    name: "jurisdiction",
    title: "Jurisdiction",
    expression:
      "var juris = $feature.PLANNING_JURISDICTION;When(" +
      "juris == 'RA', 'Raleigh'," +
      "juris == 'CA', 'Cary'," +
      "juris == 'AP', 'Apex'," +
      "juris == 'AN', 'Angier'," +
      "juris == 'CL', 'Clayton'," +
      "juris == 'DU', 'Durham'," +
      "juris == 'FV', 'Fuquay-Varina'," +
      "juris == 'GA', 'Garner'," +
      "juris == 'HS', 'Holly Springs'," +
      "juris == 'KN', 'Knightdale'," +
      "juris == 'MO', 'Morrisville'," +
      "juris == 'RO', 'Rolesville'," +
      "juris == 'WF', 'Wake Forest'," +
      "juris == 'WE', 'Wendell'," +
      "juris == 'ZB', 'Zebulon'," +
      "juris == 'WC', 'Wake County'," +
      " '');",
  },
  {
    name: "general",
    title: "general",
    expression:
      '"PIN"+TextFormatting.NewLine+$feature.PIN_NUM+" "+$feature.PIN_EXT+TextFormatting.NewLine+' +
      '"REID"+TextFormatting.NewLine+$feature.REID+TextFormatting.NewLine+"City"+TextFormatting.NewLine+' +
      'Proper($feature.CITY_DECODE)+TextFormatting.NewLine+"Jurisdiction"+TextFormatting.NewLine+' +
      '$feature.PLANNING_JURISDICTION+TextFormatting.NewLine+"Township"+TextFormatting.NewLine+Proper($feature.TOWNSHIP_DECODE)+"Map Name"+TextFormatting.NewLine+' +
      '$feature.MAP_NAME+TextFormatting.NewLine+"Land Class"+TextFormatting.NewLine+Proper($feature.LAND_CLASS_DECODE)',
  },
  // {
  //   name: "addresses",
  //   title: "Addresses",
  //   expression:
  //     "var rel = FeatureSetByRelationshipName($feature, 'CONDO_PROPERTY', ['*'], true);var test = Array(Count(rel));var cnt = 0;var f = First(rel);var fs = FeatureSetByPortalItem(Portal('https://ral.maps.arcgis.com/'), '318be24592ea4dcba042511b3125fd53', 2, ['ADDRESS','FEATURETYPE']);var containfs = Contains(f, fs);var addresses = Array(Count(containfs));var cnt = 0;for (var i in containfs){        addresses[cnt] = {'ADDRESS': i['ADDRESS'], 'FEATURETYPE': i['FEATURETYPE']};    cnt+=1;}function sortAddresses(a,b) {    return  a['ADDRESS'] > b['ADDRESS'];}var sorted =  Sort(addresses, sortAddresses);var list = '';for (var i in sorted) {    list += sorted[i]['ADDRESS'] + ' (' + sorted[i]['FEATURETYPE'] + ')' + TextFormatting.NewLine;}return list;",
  // },
] as ExpressionInfo[];

export const createTemplate = (
  view: __esri.MapView | __esri.SceneView,
  condoTable: FeatureLayer
): PopupTemplate => {
  // const propertyLayer = view.map.allLayers.find((layer) => {
  //   return layer.title.includes('Property') && layer.type === 'feature';
  // }) as FeatureLayer;
  const popupTemplate = new PopupTemplate({
    expressionInfos: arcadeExpressionInfos,
    fieldInfos: getFieldInfos(condoTable).map((field) => {
      return {
        fieldName: field.fieldName,
        label: field.label,
        visible: [
          "SITE_ADDRESS",
          "OWNER",
          "PIN_NUM",
          "PIN_EXT",
          "REID",
        ].includes(field.fieldName),
      };
    }),
    content: [
      {
        type: "text",
        text: "<h2>{expression/site-address}</h2>",
      },
      new CustomContent({
        outFields: ["*"],
        creator: (e: any) => {
          const div = document.createElement("div");
          div.setAttribute(
            "style",
            "display: flex;flex-direction: row;justify-content: space-around;"
          );
          const btn = document.createElement("calcite-button");
          btn.setAttribute("scale", "m");
          btn.setAttribute("target", "_blank");
          btn.setAttribute("appearance", "clear");
          btn.setAttribute("icon-start", "link");
          btn.setAttribute("rel", "noreferrer");
          // btn.setAttribute(
          //   'href',
          //   `https://maps.google.com?q=${e.graphic.getAttribute('SITE_ADDRESS')},${e.graphic.getAttribute(
          //     'CITY_DECODE',
          //   )},NC`,
          // );

          btn.textContent = "Google Maps";
          btn.onclick = () => {
            window.open(
              `https://maps.google.com?q=${e.graphic.getAttribute(
                "SITE_ADDRESS"
              )},${e.graphic.getAttribute("CITY_DECODE")},NC`,
              "googlewindow"
            );
          };
          div.append(btn);
          const tax = document.createElement("calcite-button");
          tax.setAttribute("scale", "m");
          tax.setAttribute("target", "_blank");
          // tax.setAttribute(
          //   'href',
          //   'http://services.wakegov.com/realestate/Account.asp?id=' + e.graphic.getAttribute('REID'),
          // );
          tax.setAttribute("rel", "noreferrer");

          tax.setAttribute("appearance", "clear");
          tax.setAttribute("icon-start", "locator");
          tax.onclick = () => {
            window.open(
              "http://services.wakegov.com/realestate/Account.asp?id=" +
                e.graphic.getAttribute("REID"),
              "taxwindow"
            );
          };
          tax.textContent = "Tax Page";
          div.append(tax);
          return div;
          // (e.graphic.layer as FeatureLayer).relationships.find((r) => {
          //   return r.name.includes('PROPERTY');
          // })?.relatedTableId;

          // return propertyLayer
          //   ?.queryFeatures({
          //     where: `REID = '${e.graphic.getAttribute('REID')}'`,
          //     outFields: ['OBJECTID', 'PIN_NUM'],
          //     returnGeometry: true,
          //     returnCentroid: true,
          //     outSpatialReference: { wkid: 4326 },
          //   })
          //   .then((result) => {
          //     return new Locator({
          //       url: 'https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer',
          //       outSpatialReference: { wkid: 4326 },
          //     })
          //       .addressToLocations({
          //         address: { singleLine: e.graphic.getAttribute('SITE_ADDRESS') },
          //         outFields: ['*'],
          //       })
          //       .then((candidates: __esri.AddressCandidate[]) => {
          //         if (candidates.length) {
          //           // const candidate = candidates.find((candidate) => {
          //           // 	return candidate.attributes['Loc_name'] === 'WakeStreets';
          //           // });
          //           const candidate = candidates[0];
          //           if (candidate) {
          //             const dist = geodesicUtils.geodesicDistance(candidate.location, {
          //               x: (result.features[0]?.geometry as __esri.Polygon).centroid.longitude,
          //               y: (result.features[0]?.geometry as __esri.Polygon).centroid.latitude,
          //               spatialReference: { wkid: 4326 } as any,
          //             } as any);
          //             const cbll =
          //               (result.features[0]?.geometry as __esri.Polygon).centroid.latitude +
          //               ',' +
          //               (result.features[0]?.geometry as __esri.Polygon).centroid.longitude;
          //             const div = document.createElement('div');
          //             div.setAttribute('style', 'display: flex;flex-direction: row;justify-content: space-around;');
          //             const btn = document.createElement('calcite-button');
          //             btn.setAttribute('scale', 'm');
          //             btn.setAttribute('target', '_blank');
          //             btn.setAttribute('round', '');
          //             btn.setAttribute('icon-start', '360-view');
          //             btn.setAttribute('rel', 'noreferrer');
          //             btn.setAttribute(
          //               'href',
          //               'https://maps.google.com?layer=c&cbll=' +
          //                 cbll +
          //                 '&cbp=0,' +
          //                 dist.azimuth?.toString() +
          //                 ',0,0,0',
          //             );

          //             btn.textContent = 'Street View';

          //             div.append(btn);
          //             const tax = document.createElement('calcite-button');
          //             tax.setAttribute('scale', 'm');
          //             tax.setAttribute('target', '_blank');
          //             tax.setAttribute(
          //               'href',
          //               'http://services.wakegov.com/realestate/Account.asp?id=' + e.graphic.getAttribute('REID'),
          //             );
          //             tax.setAttribute('rel', 'noreferrer');

          //             tax.setAttribute('round', '');
          //             tax.setAttribute('icon-start', 'locator');
          //             tax.textContent = 'Tax Page';
          //             div.append(tax);
          //             return div;
          //           }
          //         }
          //       });
          //   });
        },
      }),
      new CustomContent({
        outFields: ["PIN_NUM"],
        creator: (e) => {
          return wellCreator(e, view as __esri.MapView);
        },
      }),
      {
        type: "text",
        text: "<h2>General</h1>",
      },
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "expression/pin",
            label: "PIN",
          },
          {
            fieldName: "REID",
            label: "REID",
          },
          {
            fieldName: "expression/city",
            label: "City",
          },
          {
            fieldName: "expression/jurisdiction",
            label: "Jurisdiction",
          },
          {
            fieldName: "expression/township",
            label: "Township",
          },
          {
            fieldName: "MAP_NAME",
            label: "Map Name",
          },
          {
            fieldName: "LAND_CLASS_DECODE",
            label: "Land Class",
          },
        ],
      },

      // {
      //   type: 'custom',
      //   text: '<calcite-button scale="s" href="#" class="streetView" target="_blank">Street View</calcite-button>'
      // },
      {
        type: "text",
        text: "<h2>Owner</h1>",
      },
      {
        type: "text",
        text:
          // '<h1 class="text-green">{SITE_ADDRESS}</h1>' +
          // '<h2>General</h2>{expression/general}' +
          "{OWNER}<br/>{expression/mailing-address}",
      },
      {
        type: "text",
        text: "<h2>Valuation</h1>",
      },
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "expression/build_val",
          },
          {
            fieldName: "expression/land_val",
          },
          {
            fieldName: "expression/total_val",
          },
          {
            fieldName: "BILLING_CLASS_DECODE",
            label: "Billing Class",
          },
        ],
      },
      {
        type: "text",
        text: "<h2>Last Sale</h1>",
      },
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "SALE_DATE",
            format: {
              dateFormat: "short-date",
            },
            label: "Date Sold",
          },
          {
            fieldName: "expression/sale_price",
          },
        ],
      },
      {
        type: "text",
        text: "<h2>Deeds</h1>",
      },
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "DEED_BOOK",
            label: "Book",
          },
          {
            fieldName: "DEED_PAGE",
            label: "Page",
          },
          {
            fieldName: "DEED_DATE",
            format: {
              dateFormat: "short-date",
            },
            label: "Deed Date",
          },
          {
            fieldName: "DEED_ACRES",
            format: {
              places: 2,
            },
            label: "Deed Acres",
          },
          {
            fieldName: "PROPDESC",
            label: "Property Description",
          },
        ],
      },

      new CustomContent({
        outFields: ["OBJECTID", "REID"],
        creator: deedCreator,
      }),
      {
        type: "text",
        text: "<h2>Building</h1>",
      },
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "HEATEDAREA",
            format: {
              digitSeparator: true,
            },
            label: "Heated Area",
          },
          {
            fieldName: "YEAR_BUILT",
            format: {
              digitSeparator: false,
            },
            label: "Year Built",
          },
          {
            fieldName: "DESIGN_STYLE_DECODE",
            label: "Design/Style",
          },
          {
            fieldName: "TYPE_USE_DECODE",
            label: "Use Type",
          },
          {
            fieldName: "TOTSTRUCTS",
            label: "Total Structures",
          },
          {
            fieldName: "TOTUNITS",
            label: "Total Units",
          },
        ],
      },
      {
        type: "media",
        mediaInfos: [],
      },
      {
        type: "text",
        text: "<h2>Services</h1>",
      },
      new CustomContent({
        outFields: ["*"],
        creator: (e: any) => {
          const accordion = document.createElement("service-accordion");

          if (!accordion?.hasChildNodes()) {
            const root = createRoot(accordion as HTMLDivElement);
            root.render(
              <Suspense fallback={""}>
                <Services view={view} graphic={e.graphic} />
              </Suspense>
            );
          }
          accordion.setAttribute("selection-mode", "single");
          accordion.setAttribute("icon-type", "chevron");
          services.forEach((service) => {
            const item = document.createElement("calcite-accordion-item");
            item.setAttribute("item-title", service.group.title);
            accordion.append(item);
          });
          //const f = serviceChanged.bind(e.Graphic);
          // setTimeout(f, 1000);
          //   const graphic = e.graphic;
          // accordion.addEventListener(
          // 'calciteAccordionChange',
          // (e: any) => {
          //     serviceChanged(graphic, view, e);
          // },
          // { passive: true },
          // );
          return accordion;
        },
      }),
      new CustomContent({
        outFields: ["*"],
        creator: (e: any) => {
          const container = document.createElement("div");
          container.setAttribute(
            "style",
            "max-height: 500px;min-height: 100px"
          );
          const title = document.createElement("h2");
          title.textContent = "Addresses";
          container.append(title);
          const tablediv = document.createElement("div");
          container.append(tablediv);
          (view as __esri.MapView).graphics.removeMany(
            (view as __esri.MapView).graphics.filter((graphic) => {
              return graphic.getAttribute("type") === "address";
            })
          );
          if (!tablediv?.hasChildNodes()) {
            const root = createRoot(tablediv as HTMLDivElement);
            root.render(
              <Suspense fallback={""}>
                <AddressTable view={view} property={e.graphic} />
              </Suspense>
            );
          }
          return container;
        },
      }),
      // {
      //   type: 'text',
      //   text: '<h2>Addresses</h1>',
      // },
      // {
      //   type: 'text',
      //   text: '{expression/addresses}',
      // },
    ],
  });
  return popupTemplate;
  // condosTable.popupTemplate = popupTemplate;
};

function getFieldInfos(condoTable: FeatureLayer): FieldInfo[] {
  let fieldConfigs: FieldInfo[] = [];
  condoTable.fields.forEach((field) => {
    fieldConfigs.push(
      new FieldInfo({
        fieldName: field.name,
        label: field.alias,
        visible: [
          "SITE_ADDRESS",
          "OWNER",
          "PIN_NUM",
          "PIN_EXT",
          "REID",
        ].includes(field.name),
      })
    );
  });
  const ext = fieldConfigs.find((fc) => {
    return fc.fieldName === "PIN_EXT";
  }) as FieldInfo;
  const pin = fieldConfigs.find((fc) => {
    return fc.fieldName === "PIN_NUM";
  }) as FieldInfo;
  const reid = fieldConfigs.find((fc) => {
    return fc.fieldName === "REID";
  }) as FieldInfo;
  const owner = fieldConfigs.find((fc) => {
    return fc.fieldName === "OWNER";
  }) as FieldInfo;
  const address = fieldConfigs.find((fc) => {
    return fc.fieldName === "SITE_ADDRESS";
  }) as FieldInfo;
  fieldConfigs = fieldConfigs.filter((fc) => {
    return !["SITE_ADDRESS", "OWNER", "PIN_NUM", "PIN_EXT", "REID"].includes(
      fc.fieldName
    );
  });
  fieldConfigs.unshift(ext);
  fieldConfigs.unshift(pin);
  fieldConfigs.unshift(reid);
  fieldConfigs.unshift(owner);
  fieldConfigs.unshift(address);
  return fieldConfigs;
}

const deedCreator = (e: any) => {
  return (e.graphic.layer as FeatureLayer)
    .queryRelatedFeatures({
      relationshipId: (e.graphic.layer as FeatureLayer).relationships.find(
        (r) => {
          return r.name === "CONDO_BOOKS";
        }
      )?.id,
      objectIds: [e.graphic.getAttribute("OBJECTID")],
      outFields: ["BOM_DOC_NUM", "DEED_DOC_NUM"],
    })
    .then((result) => {
      const deed =
        result[e.graphic.getAttribute("OBJECTID")].features[0].getAttribute(
          "DEED_DOC_NUM"
        );
      const bom =
        result[e.graphic.getAttribute("OBJECTID")].features[0].getAttribute(
          "BOM_DOC_NUM"
        );
      const div = document.createElement("div");
      div.setAttribute(
        "style",
        "display: flex;flex-direction: row;justify-content: space-around;"
      );
      if (deed) {
        const deedBtn = document.createElement("calcite-button");
        deedBtn.setAttribute("scale", "m");
        deedBtn.setAttribute("target", "_blank");
        deedBtn.setAttribute("appearance", "clear");
        deedBtn.setAttribute("icon-start", "file-text");
        // deedBtn.setAttribute(
        //   'href',
        //   'http://services.wakegov.com/booksweb/pdfview.aspx?docid=' + deed + '&RecordDate=',
        // );
        deedBtn.setAttribute("rel", "noreferrer");
        deedBtn.onclick = () => {
          window.open(
            "http://services.wakegov.com/booksweb/pdfview.aspx?docid=" +
              deed +
              "&RecordDate=",
            "deedwindow"
          );
        };
        deedBtn.textContent = "Deed";
        div.append(deedBtn);
      }
      if (bom) {
        const bombtn = document.createElement("calcite-button");
        bombtn.setAttribute("scale", "m");
        bombtn.setAttribute("target", "_blank");
        bombtn.setAttribute("appearance", "clear");
        bombtn.setAttribute("icon-start", "map");
        //bombtn.setAttribute('href', 'http://services.wakegov.com/booksweb/pdfview.aspx?docid=' + bom + '&RecordDate=');
        bombtn.setAttribute("rel", "noreferrer");
        bombtn.textContent = "Book of Maps";
        bombtn.onclick = () => {
          window.open(
            "http://services.wakegov.com/booksweb/pdfview.aspx?docid=" +
              bom +
              "&RecordDate=",
            "bomwindow"
          );
        };
        div.append(bombtn);
      }

      return div;
    });
};

const wellCreator = (e: any, view: __esri.MapView) => {
  let layer = view.map.allLayers.find((layer: __esri.Layer) => {
    return layer?.title?.includes("Wells");
  });
  if (!layer) {
    layer = new FeatureLayer({
      portalItem: {
        id: "ef42e9e1d1eb4689bf90b592c2f6c419",
      },
    });
  }
  return (layer as FeatureLayer)
    .queryFeatures({
      where: `PIN_NUM = '${e.graphic.attributes["PIN_NUM"]}'`,
      returnGeometry: false,
    })
    .then((featureSet) => {
      const div = document.createElement("div");
      div.setAttribute(
        "style",
        "display: flex;flex-direction: row;justify-content: space-around;"
      );

      if (featureSet.features.length) {
        const pin = featureSet.features[0].getAttribute("PIN_NUM");
        const btn = document.createElement("calcite-button");
        btn.setAttribute("scale", "m");
        btn.setAttribute("target", "_blank");
        btn.setAttribute("appearance", "clear");
        btn.setAttribute("icon-start", "link");
        // btn.setAttribute('href', 'https://maps.wakegov.com/water-analysis/index.html#/?pin=' + pin);
        btn.setAttribute("rel", "noreferrer");

        btn.textContent = "Wells";
        btn.onclick = () => {
          window.open(
            "https://maps.wakegov.com/water-analysis/index.html#/?pin=" + pin,
            "wells"
          );
        };
        div.append(btn);
      }
      if (!layer) {
        layer = new FeatureLayer({
          portalItem: {
            id: "bb3eb1f6cc774bdda560554381a4c06f",
          },
        });
      }
      (layer as FeatureLayer)
        .queryFeatures({
          where: `PIN_NUM = '${e.graphic.attributes["PIN_NUM"]}'`,
          returnGeometry: false,
        })
        .then((featureSet) => {
          if (featureSet.features.length) {
            const pin = featureSet.features[0].getAttribute("PIN_NUM");
            const btn = document.createElement("calcite-button");
            btn.setAttribute("scale", "m");
            btn.setAttribute("target", "_blank");
            btn.setAttribute("appearance", "clear");
            btn.setAttribute("rel", "noreferrer");
            //btn.setAttribute('href', 'https://maps.wakegov.com/septic/index.html#/?pin=' + pin);
            btn.setAttribute("icon-start", "link");
            btn.textContent = "Septic";
            btn.onclick = () => {
              window.open(
                "https://maps.wakegov.com/septic/index.html#/?pin=" + pin,
                "septic"
              );
            };
            div.append(btn);
          }
        });
      return div;
    });
};

export const getPhotos = (
  feature: __esri.Graphic
): Promise<__esri.MediaInfo[]> => {
  return new Promise(function (resolve) {
      const relationship = (feature.layer as FeatureLayer)?.relationships.find(
      (r) => {
        return r.name === "CONDO_PHOTOS";
      }
    );
    // const media = ((feature.layer as FeatureLayer).popupTemplate.content as __esri.Content[]).find(
    //     (content: __esri.Content) => {
    //         return content?.type === 'media';
    //     },
    // );

    // (media as __esri.MediaContent).mediaInfos = [];
    const mediaInfos: any[] = [];
    const layer: FeatureLayer = feature.layer as FeatureLayer;
    layer
      ?.queryRelatedFeatures({
        relationshipId: relationship?.id,
        objectIds: [feature.getAttribute("OBJECTID")],
        outFields: ["*"],
        where: `STATUS = 'A'`
      })
      .then((result) => {
        for (const key in result) {
          feature.setAttribute('OBJECTID', key);
          result[key].features.reverse().forEach((feature: Graphic) => {
            mediaInfos.push({
              title: "",
              type: "image",
              caption: "",
              value: {
                sourceURL: `https://services.wakegov.com/realestate/photos/mvideo/${feature.getAttribute(
                  "IMAGEDIR"
                )}/${feature.getAttribute("IMAGENAME")}`,
              },
            });
          });
        }

        resolve(mediaInfos);
      });
  });
};

// const serviceChanged = (
//   graphic: __esri.Graphic,
//   view: __esri.MapView | __esri.SceneView,
//   e: any
// ) => {
//   if (
//     !e.detail.requestedAccordionItem.hasAttribute("active") &&
//     e.detail.requestedAccordionItem.childElementCount === 0
//   ) {
//     const loader = document.createElement("calcite-loader");
//     loader.setAttribute("inline", "");
//     const header = e.detail.requestedAccordionItem.shadowRoot.querySelector(
//       ".accordion-item-header"
//     ) as HTMLElement;
//     header.insertBefore(loader, header.childNodes[1]);
//     const serviceGroup: any = services.find((service) => {
//       return (
//         service.group.title ===
//         e.detail.requestedAccordionItem.getAttribute("item-title")
//       );
//     });
//     const promises: Promise<__esri.FeatureSet>[] = [];

//     if (serviceGroup) {
//       const layers = view.map.allLayers.filter((layer) => {
//         return serviceGroup.group.layers.includes(layer.title);
//       });
//       layers.forEach((layer) => {
//         if (layer.type === "feature") {
//           promises.push(
//             (layer as __esri.FeatureLayer).queryFeatures({
//               geometry: geometryEngine.geodesicBuffer(
//                 graphic.geometry,
//                 -5,
//                 9002
//               ) as __esri.Geometry,
//               outFields: ["*"],
//               returnGeometry: true,
//             })
//           );
//         }
//       });
//     }

//     if (promises.length) {
//       return Promise.all(promises).then((results) => {
//         let hasFeatures = false;
//         results.forEach((result) => {
//           if (result.features.length) {
//             hasFeatures = true;
//             result.features.forEach((feature: __esri.Graphic) => {
//               const div = document.createElement("div");
//               e.detail.requestedAccordionItem.append(div);
//               new Feature({ container: div, graphic: feature });
//             });
//           }
//         });
//         if (!hasFeatures) {
//           const div = document.createElement("div");
//           div.textContent = "No information available.";
//           div.style.margin = "0.5em";
//           e.detail.requestedAccordionItem.append(div);
//         }
//         scrollToService(e);
//         header.removeChild(loader);
//       });
//     } else {
//       header.removeChild(loader);
//       return "No services found.";
//     }
//   } else {
//     scrollToService(e);
//   }
// };

// const scrollToService = (e: any) => {
//   const rect = (
//     e.detail.requestedAccordionItem as HTMLElement
//   ).getBoundingClientRect();
//   const div = document.querySelector("#featureWidget")?.parentElement;
//   setTimeout(() => {
//     div?.scrollTo({ top: rect.top + div.scrollTop - 155, behavior: "smooth" });
//   }, 100);
// };
