import Basemap from "@arcgis/core/Basemap";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

export function addBasemap(
  nextStep: string,
  evt: any,
  items: any[],
  basemap: Basemap,
  index: number,
  setActiveStep: Function,
  view: MapView
) {
  if (index === 0 ) {
    //basemap = new Basemap({ baseLayers: []})
    view.map.basemap.baseLayers.removeAll();
  }
  if (index === 1 ) {
    //basemap = new Basemap({ baseLayers: []})
    const images = view.map.basemap.baseLayers.filter(layer => {
      return layer.type.includes('image');
    })
    view.map.basemap.baseLayers.removeMany(images);
  }
  const id = evt?.detail?.selectedItems[0]?.value;
  if (id) {
    const item = items.find((item) => {
      return item.id === id;
    }) as __esri.PortalItem;
    item?.load().then((item: __esri.PortalItem) => {
      if (item.type === "Web Map") {
        const webmap = new WebMap({ portalItem: { id: item.id } });
        webmap.loadAll().then((m: WebMap) => {
          setTimeout(() => {
            m?.basemap.baseLayers.forEach((layer: __esri.Layer) => {
              // if (index === 0) {
              //   (layer as any).blendMode = "multiply";
              // }
              if (!layer.type.includes('image')) {
                layer.opacity = 0.5;
              }
              basemap.baseLayers.add(layer, 0);
            });

            basemap.baseLayers.addMany(basemap.baseLayers, 0);
            setActiveStep(nextStep);
            if (nextStep === "opacity") {
              //view.map.basemap.baseLayers.removeAll();
              //view.map.basemap.baseLayers.addMany(basemap.baseLayers);

              view.map.basemap = basemap;
            }
          });
        });
      }
    });
  }
}
