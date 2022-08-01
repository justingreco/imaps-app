import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import MapView from "@arcgis/core/views/MapView";
import PortalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/PortalBasemapsSource";
import request from "@arcgis/core/request";
import Polygon from "@arcgis/core/geometry/Polygon";
import Basemap from "@arcgis/core/Basemap";
import Color from "@arcgis/core/Color";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

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
    view.watch("extent", (extent: __esri.Extent) => viewExtentChanged(extent, view, setShowAlert));
  });
  view.map.watch('basemap', (basemap: Basemap) => {
    checkBasemapTheme(basemap, view).then((isLight: boolean) => {
      setPropertyColor(view, isLight);
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


const viewExtentChanged = (extent: __esri.Extent, view: MapView,  setShowAlert: Function) => {
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
}


const checkBasemapTheme = (basemap: Basemap, view: MapView): Promise<boolean> => {
   return new Promise((resolve, reject) => {
    if (basemap.baseLayers.length) {
      const baseLayer = basemap.baseLayers.find(layer => {return layer.type === 'vector-tile'});
      if (baseLayer?.type === 'vector-tile') {
        reactiveUtils.whenOnce(() => baseLayer.loaded).then(loaded => {
          const background = (baseLayer as __esri.VectorTileLayer).getStyleLayer('background');
          if (background) {
            const color: Color = new Color(background.paint["background-color"]);
            view.background = {color: color} as __esri.ColorBackground;
            resolve((color as any).isBright);
          } else {
            resolve(true);
          }
        });
  
      } else if (!baseLayer && basemap.baseLayers.getItemAt(0).type === 'imagery') {
        resolve(false);
      } else {
        resolve(true);
      }
    }
   });
}

const setPropertyColor = (view: MapView,isLight: boolean) => {
  const layer = view.map.allLayers.find(layer => {return layer.title.includes('Property') && layer.type === 'feature'});
  if (layer) {
    const renderer = ((layer as FeatureLayer)?.renderer as __esri.SimpleRenderer).clone();
    if (isLight) {
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 0;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 0;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 0;
    }
    else {
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.r = 255;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.g = 255;
      (renderer.symbol as __esri.SimpleFillSymbol).outline.color.b = 255;
    }
    (layer as FeatureLayer).renderer = renderer;
  }
}