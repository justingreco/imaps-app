import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import MapView from "@arcgis/core/views/MapView";
import PortalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource";
import request from "@arcgis/core/request";
import Polygon from "@arcgis/core/geometry/Polygon";
import Basemap from "@arcgis/core/Basemap";

export function initializeBasemaps(
  view: MapView,
  ref: HTMLDivElement,
  id: string
) {
  new BasemapGallery({
    container: ref,
    view: view,
    source: {
      query: `id: ${id}`,
    },
  });
}

let images: BasemapGallery;
export function initializeImageMaps(
  view: MapView,
  ref: HTMLDivElement,
  id: string,
  setShowAlert: Function
) {
  images = new BasemapGallery({
    container: ref,
    view: view,
    source: new PortalBasemapsSource({
      query: `id: ${id}`,
      filterFunction: filterBasemaps,
      updateBasemapsCallback: (items: Basemap[]) => {
        return items.reverse();
      },
    }),
  });
  images.when(() => {
    images.source.basemaps.reverse();
    if (!imageryBoundary) {
      getBoundary(view).then((boundary: Polygon) => {
        imageryBoundary = boundary;
        inRaleigh = checkBoundary(view.extent);
        images.source.refresh();
      });
    }
    view.watch("extent", (extent: __esri.Extent) => {
      if (
        imageryBoundary &&
        images.source.basemaps.find(
          (basemap) => images.activeBasemap.title === basemap.title
        )
      ) {
        wasRaleigh = inRaleigh;
        inRaleigh = checkBoundary(view.extent);
        if (wasRaleigh !== inRaleigh) {
          images.source.refresh();
          setTimeout(() => {
            const match = images.source.basemaps.find(
              (basemap) => view.map.basemap.title === basemap.title
            );
            if (!match) {
              const from = images.activeBasemap.title;
              images.activeBasemap = images.source.basemaps.at(0);
              const to = images.activeBasemap.title;
              setShowAlert({ show: true, from: from, to: to });
            } else {
              images.activeBasemap = match;
            }
          }, 1000);
        }
      }
    });
  });
}

export function initializeEsriMaps(view: MapView, ref: HTMLDivElement) {
  new BasemapGallery({
    container: ref,
    view: view,
  });
}

let imageryBoundary: Polygon;
let inRaleigh: Boolean;
let wasRaleigh: Boolean;
const checkBoundary = (extent: __esri.Extent): Boolean => {
  return geometryEngine.intersects(extent, imageryBoundary);
};
let selectedTab = 0;
export const tabChanged = (e: any, view: MapView, setShowAlert: Function) => {
  // if (e.detail.tab === 1) {

  // }
  selectedTab = e.detail.tab;
  // else {
  //   extentHandle?.remove();
  // }
};

export const filterBasemaps = (item: __esri.Basemap): boolean => {
  if (inRaleigh) {
    return true;
  } else {
    return item.portalItem.tags.includes("countywide");
  }
};

const getBoundary = (view: __esri.MapView): Promise<Polygon> => {
  return new Promise((resolve, reject) => {
    request(
      "https://maps.raleighnc.gov/images/rest/services/Orthos2020/ImageServer/queryBoundary?outSR=102100&f=json",
      { responseType: "json" }
    ).then((response) => {
      imageryBoundary = Polygon.fromJSON(response.data.shape);
      resolve(imageryBoundary);
    });
  });
};
