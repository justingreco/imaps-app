import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

import { constraints } from "./constraints";
import Graphic from "@arcgis/core/Graphic";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureSet from "@arcgis/core/rest/support/FeatureSet";
import { addWidgets } from "./widgets";
import { handlePolygonLabels } from "./labeling";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Basemap from "@arcgis/core/Basemap";
import Color from "@arcgis/core/Color";
export function initializeMap(
  ref: HTMLDivElement,
  mapId: string,
  geometrySet: Function,
  widgetActivated: Function
) {
  const view = new MapView({
    container: ref,
    constraints: constraints as any,
  });

  getWebMap(mapId).then((webmap: WebMap) => {
    view.map = webmap;
    addWidgets(view, widgetActivated);
    view.when(() => {
      view.map.add(selectionLayer);
      view.map.add(selectionCluster);
      reactiveUtils
        .whenOnce(() => view.map.basemap.loaded)
        .then((loaded) => {
          getBackgroundColor(view.map.basemap).then((color) => {
            if (color) {
              view.background = { color: color } as __esri.ColorBackground;
            }
          });
        });
      // setTimeout(() => {
      //   handlePolygonLabels(view);
      // }, 5000);
    });
  });
  document.addEventListener(
    "visibilitychange",
    (e) => {
      if (document.hidden) {
        saveMap(view);
      }
    },
    false
  );

  view.on("hold", (event) => {
    geometrySet(event.mapPoint);
  });
  return view;
}
function isSearchable(layer: __esri.Layer, webmap: any) {
  const found = webmap.applicationProperties.viewing.search.layers
    .toArray()
    .find((searchLayer: __esri.SearchLayer) => {
      return searchLayer.id === layer.id;
    });
  return found;
}
function getWebMap(mapId: string): Promise<WebMap> {
  return new Promise((resolve, reject) => {
    let webmap: any;
    if (window.localStorage.getItem("imaps_calcite")) {
      webmap = WebMap.fromJSON(
        JSON.parse(window?.localStorage?.getItem("imaps_calcite") as string)
      );
      resolve(webmap);
    } else {
      webmap = new WebMap({
        portalItem: {
          id: mapId,
        },
      });
      webmap.load().then(() => {
        const groups = webmap.allLayers
          .filter((layer: __esri.Layer) => {
            return layer.type === "group";
          })
          .toArray();
        groups.forEach((group: __esri.Layer) => {
          (group as __esri.GroupLayer).removeMany(
            (group as __esri.GroupLayer).allLayers
              .filter((layer) => {
                return (
                  !layer.visible &&
                  !layer.title.includes("Property") &&
                  !isSearchable(layer, webmap)
                );
              })
              .toArray()
          );
        });
        resolve(webmap);
      });
    }
  });
}

const saveMap = (view: MapView) => {
  if (view && view?.ready) {
    const groups = view.map.allLayers
      .filter((layer) => {
        return layer.type === "group";
      })
      .toArray();
    groups.forEach((group) => {
      (group as __esri.GroupLayer).removeMany(
        (group as __esri.GroupLayer).allLayers
          .filter((layer) => {
            return (
              !layer.visible &&
              !layer.title.includes("Property") &&
              !isSearchable(layer, view.map)
            );
          })
          .toArray()
      );
    });
    view.map.removeMany([
      view.map.findLayerById("selection-layer"),
      view.map.findLayerById("feature-table"),
    ]);
    view.map.removeMany(
      view.map.allLayers
        .filter((layer) => {
          return layer.type === "map-notes";
        })
        .toArray()
    );
    const json = (view.map as any).toJSON();
    json.initialState.viewpoint.targetGeometry = view.extent;
    window.localStorage.setItem("imaps_calcite", JSON.stringify(json));
    //window.localStorage.removeItem('imaps_calcite');
  }
};
const clusterConfig = {
  type: "cluster",
  clusterRadius: "100px",
  clusterMinSize: "24px",
  clusterMaxSize: "60px",
  labelingInfo: [
    {
      deconflictionStrategy: "none",
      labelExpressionInfo: {
        expression: "Text($feature.cluster_count, '#,###')",
      },
      symbol: {
        type: "text",
        color: "#004a5d",
        font: {
          weight: "bold",
          family: "Noto Sans",
          size: "12px",
        },
      },
      labelPlacement: "center-center",
    },
  ],
};
const selectionLayer: FeatureLayer = new FeatureLayer({
  source: [],
  editingEnabled: true,
  listMode: "hide",
  legendEnabled: false,
  geometryType: "polygon",
  id: "selection-layer",
  objectIdField: "OBJECTID",
  spatialReference: { wkid: 102100 },
  orderBy: [{ field: "selected", order: "ascending" }],
  fields: [
    { name: "OBJECTID", type: "oid" },
    { name: "selected", type: "small-integer" },
    { name: "PIN_NUM", type: "string" },
  ],
  renderer: {
    type: "unique-value",
    field: "selected",
    uniqueValueInfos: [
      {
        value: 1,
        symbol: {
          type: "simple-fill",
          outline: {
            type: "simple-line",
            color: [217, 66, 70, 1],
            width: 2,
            style: "solid",
          },
          style: "none",
        },
      } as any,
      {
        value: 2,
        symbol: {
          type: "simple-fill",
          outline: {
            type: "simple-line",
            color: [255, 227, 76, 1],
            width: 2,
            style: "solid",
          },
          style: "none",
        },
      } as any,
    ],
  } as UniqueValueRenderer,
  minScale: 20000,
});

const selectionCluster: FeatureLayer = new FeatureLayer({
  source: [],
  editingEnabled: true,
  listMode: "hide",
  featureReduction: clusterConfig as any,
  legendEnabled: false,
  geometryType: "point",
  id: "selection-cluster",
  objectIdField: "OBJECTID",
  spatialReference: { wkid: 102100 },
  orderBy: [{ field: "selected", order: "ascending" }],
  fields: [
    { name: "OBJECTID", type: "oid" },
    { name: "selected", type: "small-integer" },
    { name: "PIN_NUM", type: "string" },
  ],
  effect: "drop-shadow(3px, 3px, 4px)",
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-marker",
      size: 4,
      color: "#ffe34c",
      outline: {
        color: "rgba(153, 130, 0, 1)",
        width: 2,
      },
    },
  } as any,
  maxScale: 20000,
});
export function displayProperties(properties: Graphic[], view: MapView) {
  selectionLayer
    ?.queryFeatures({
      where: "1=1",
      returnGeometry: false,
      outFields: ["OBJECTID"],
    })
    .then((featureSet: FeatureSet) =>
      selectionLayer
        ?.applyEdits({
          deleteFeatures: featureSet.features,
        })
        .then((result) => {
          selectionLayer
            ?.applyEdits({
              addFeatures: properties,
            })
            .then((result) => {});
        })
    );
  updateClusters(properties);
}

function updateClusters(properties: Graphic[]) {
  const points: Graphic[] = [];

  properties.forEach((property) => {
    const geometry = property.geometry as __esri.Polygon;
    points.push(
      new Graphic({
        attributes: property.attributes,
        geometry: geometry ? geometry.centroid : undefined,
      })
    );
  });
  selectionCluster
    ?.queryFeatures({
      where: "1=1",
      returnGeometry: false,
      outFields: ["OBJECTID"],
    })
    .then((featureSet: FeatureSet) =>
      selectionCluster
        ?.applyEdits({
          deleteFeatures: featureSet.features,
        })
        .then((result) => {
          selectionCluster
            ?.applyEdits({
              addFeatures: points,
            })
            .then((result) => {});
        })
    );
}

const getBackgroundColor = (basemap: Basemap): Promise<Color | null> => {
  return new Promise((resolve, reject) => {
    const baseLayer = basemap.baseLayers.find((layer) => {
      return layer.type === "vector-tile";
    });
    if (baseLayer?.type === "vector-tile") {
      reactiveUtils
        .whenOnce(() => baseLayer.loaded)
        .then((loaded) => {
          const background = (
            baseLayer as __esri.VectorTileLayer
          ).getStyleLayer("background");
          if (background) {
            const color: Color = new Color(
              background.paint["background-color"]
            );
            resolve(color);
          } else {
            resolve(null);
          }
        });
    }
  });
};