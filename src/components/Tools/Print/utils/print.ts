import request from "@arcgis/core/request";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import * as print from "@arcgis/core/rest/print";
import PrintParameters from "@arcgis/core/rest/support/PrintParameters";
import PrintTemplate from "@arcgis/core/rest/support/PrintTemplate";

import TileInfo from "@arcgis/core/layers/support/TileInfo";
import Graphic from "@arcgis/core/Graphic";
import { printTemplates } from "./templates";
import MapView from "@arcgis/core/views/MapView";

type MapScale = {
  scale: number;
  label: string;
};
type Layout = {
  label: string;
  template: string;
  size: number;
};
export const getFormats = (url: string): Promise<string[]> => {
  return new Promise((resolve, reject) =>
    request(url, { query: { f: "json" } })
      .then((result) => {
        result.data.parameters.forEach((parameter: any) => {
          if (parameter.name === "Format") {
            resolve(parameter.choiceList);
          }
        });
      })
      .catch((reason) => {
        reject(reason);
      })
  );
};

const roundScale = (mapScale: number): number => {
  const newScale = Math.round((mapScale * 600) / 564.248588);
  if (newScale <= 75) {
    return 75;
  }
  if (newScale > 75 && newScale <= 150) {
    return 150;
  }
  if (newScale > 150 && newScale <= 300) {
    return 300;
  }
  if (newScale > 300 && newScale <= 600) {
    return 600;
  }
  if (newScale > 600 && newScale <= 1200) {
    return 1200;
  }
  if (newScale > 1200 && newScale <= 2400) {
    return 2400;
  }
  if (newScale > 2400 && newScale <= 4800) {
    return 4800;
  }
  if (newScale > 4800 && newScale <= 9600) {
    return 9600;
  }
  if (newScale > 9600 && newScale <= 19200) {
    return 19200;
  }
  if (newScale > 19200 && newScale <= 38400) {
    return 38400;
  }
  if (newScale > 38400 && newScale <= 76800) {
    return 76800;
  }
  if (newScale > 76800 && newScale <= 153600) {
    return 153600;
  }
  if (newScale > 153600 && newScale <= 307200) {
    return 307200;
  }
  if (newScale > 307200 && newScale <= 614400) {
    return 614400;
  }
  if (newScale > 614400 && newScale <= 1228800) {
    return 1228800;
  }
  return 0;
};
export const getScales = (view: __esri.MapView): MapScale[] => {
  const scales = TileInfo.create().lods
    .filter((lod: any) => {
      return lod.scale >= 300 && lod.scale < 614400;
    })
    .map((lod: any) => {
      const scale = roundScale(lod.scale);
      return {
        scale: scale,
        label: `1" = ${(scale / 12).toLocaleString("en")}'`,
      };
    })
    ?.reverse();
  scales.push({ scale: "custom", label: "User Defined" } as any);
  return scales;
};

export function getPrintScale(
  scaleType: string,
  currentScale: number,
  customScale: string | number,
  userScale: number | undefined
): number {
  let mapScale = scaleType === "current" ? currentScale : customScale;
  if (customScale === "custom" && userScale) {
    mapScale = userScale * 12;
  }
  return roundScale(mapScale as number);
}

export const getLayouts = (): Promise<Layout[]> => {
  return new Promise((resolve) => {
    //esriRequest(url, { query: { f: 'json' } })
    //.then((result) => {
    const layouts: Layout[] = [];
    const templates: string[] = [];
    printTemplates.results[0].value.forEach((value: any) => {
      const width = value.pageSize[0];
      const height = value.pageSize[1];
      let label = `${width}"x${height}"`;
      let orient = "Portrait";
      let size: number = width;
      let template = `${width}x${height}_${orient.toLowerCase()}`;
      if (width > height) {
        label = `${height}"x${width}"`;
        orient = "Landscape";
        template = `${height}x${width}_${orient.toLowerCase()}`;
        size = height;
      }
      label += ` ${orient}`;

      const layout = { label: label, template: template, size: size };
      if (!templates.includes(layout.template)) {
        layouts.push(layout);
        templates.push(layout.template);
      }
    });
    layouts.sort((a: Layout, b: Layout) => {
      return a.size - b.size;
    });
    resolve(layouts);
    //    })
    //   .catch((reason) => {
    //     reject(reason);
    //    });
  });
};
export function getTemplateName(
  selectedLayout: any,
  showAttributes: boolean | undefined,
  showLegend: boolean | undefined
) {
  //const graphics = (props.view as __esri.MapView).map.findLayerById('print-graphic') as __esri.GraphicsLayer;
  //graphics.visible = false;
  let selectedTemplate = selectedLayout.template
    ? selectedLayout.template.replace(".", "")
    : JSON.parse(selectedLayout).template.replace(".", "");

  if (showAttributes) {
    selectedTemplate += "_attributes";
  }
  if (showLegend) {
    selectedTemplate += "_legend";
  }
  return selectedTemplate;
}

export const getPrintTemplate = (
  mapScale: number,
  format: any,
  title: string | undefined,
  customElements: any[],
  view: __esri.MapView,
  selectedTemplate: string
): __esri.PrintTemplate => {
  return new PrintTemplate({
    attributionVisible: true,
    outScale: mapScale,
    showLabels: true,
    format: format,
    scalePreserved: true,
    exportOptions: {
      dpi: 200,
    },
    layoutOptions: {
      titleText: title,
      scalebarUnit: "Feet",
      customTextElements: customElements,
      legendLayers: [],
    },
    layout: selectedTemplate as any,
  });
};

const formatAttributes = (selectedFeature: __esri.Graphic): string => {
  let text = '';
  (selectedFeature.layer as __esri.FeatureLayer).popupTemplate.fieldInfos.forEach((field) => {
    if (
      !['OBJECTID', 'PARCEL_PK', 'PARCEL_STATUS'].includes(field.fieldName) &&
      selectedFeature.getAttribute(field.fieldName)
    ) {
      if (selectedFeature.getAttribute(field.fieldName) !== null) {
        if (field.fieldName.includes('DATE')) {
          const date = new Date(selectedFeature.getAttribute(field.fieldName));
          text += `${field.label}: ${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}\n`;
        } else if (field.fieldName.includes('PRICE') || field.fieldName.includes('VAL')) {
          text += `${field.label}: $${selectedFeature.getAttribute(field.fieldName)}\n`;
        } else {
          text += `${field.label}: ${selectedFeature.getAttribute(field.fieldName)}\n`;
        }
      }
    }
  });
  return text;
};

export const getCustomElements = (
  size: number,
  mapScale: number,
  showAttributes: boolean | undefined,
  selectedFeature: Graphic | undefined
): any[] => {
  const customElements = [];
  customElements.push({ Scale: (mapScale / 12).toString() });
  if (size < 24) {
    customElements.push({ HalfScale: (mapScale / 12 / 2).toString() });
    customElements.push({ "2xScale": (mapScale / 12) * 2 + " ft" });
  } else if (size < 36) {
    customElements.push({ "2xScale": (mapScale / 12) * 2 });
    customElements.push({ "4xScale": (mapScale / 12) * 4 + " ft" });
  } else {
    customElements.push({ "2xScale": (mapScale / 12) * 2 });
    customElements.push({ "4xScale": (mapScale / 12) * 4 });
    customElements.push({ "6xScale": (mapScale / 12) * 6 + " ft" });
  }
  if (showAttributes) {
    const text = formatAttributes(selectedFeature as __esri.Graphic);
    customElements.push({ PropertyInfo: text });
  }
  return customElements;
};

export const exportClicked = (view: MapView, 
  exportUrl: string, 
  scaleType: string, 
  customScale: string, 
  userDefined: any, 
  selectedLayout: any,
  selectedFormat: any,
  selectedProperty: __esri.Graphic | undefined,
  title: string | undefined,
  showAttributes: boolean | undefined,
  showLegend: boolean | undefined,
  jobRef: any,
  jobs: any[],
  setJobs: Function) => {
  // let scale = scaleType === 'current' ? args?.view?.scale;
  // scale = scaleType === 'custom' ?
  // userDefined.current.value;
  if (view) {
    const scale: number = getPrintScale(
      scaleType,
      view?.scale,
      customScale,
      userDefined
        ? parseInt(userDefined.value)
        : undefined
    );
    //exportMap(args.exportUrl, args?.view, args?.view.scale);
    const customElements: any[] = getCustomElements(
      selectedLayout.size,
      scale,
      showAttributes,
      selectedProperty
    );
    const template = getTemplateName(
      selectedLayout,
      showAttributes,
      showLegend
    );

    const printTemplate = getPrintTemplate(
      scale,
      selectedFormat,
      title,
      customElements,
      view,
      template
    );
    const job = {
      title: title,
      loading: true,
      submitted: new Date().getTime().toString(),
      href: null,
    };
    setJobs([...jobs, job]);
    jobRef.current = [...jobRef.current, job];
     const oldScale = view.scale;
    // if (printTemplate.outScale !== view.scale) {
    //   view.scale = printTemplate.outScale;
    // }
    setTimeout(() => {
      exportMap(
        exportUrl,
        printTemplate,
        view,
        oldScale,
        selectedFormat as string
      )
        .then((result) => {
          setTimeout(() => {
            //graphics.visible = true;
            const index = jobRef.current.indexOf(job);
            jobRef.current[index] = {
              ...jobRef.current[index],
              ...{ url: result.url, loading: false },
            };
            setJobs([...jobRef.current]);
          });
        })
        .catch((reason) => {
          console.log(reason);
          //graphics.visible = true;
          const index = jobRef.current.indexOf(job);
          jobRef.current[index] = {
            ...jobRef.current[index],
            ...{ error: true, loading: false },
          };
          setJobs([...jobRef.current]);
        });
    }, 1000);
  }
}

const exportMap = (
  url: string,
  template: PrintTemplate,
  view: __esri.MapView,
  oldScale: number,
  format: string
): Promise<__esri.PrintResponse> => {
  template.format = format as any;
  return new Promise((resolve, reject) => {
    
    print
      .execute(
        url,
        new PrintParameters({
          template: template,
          view: view,
          outSpatialReference: new SpatialReference({ wkid: 3632 }),
        }),
        { timeout: 120000, headers: {'Content-Type': 'application/json;charset=UTF-8'} }
      )
      .then((result: __esri.PrintResponse) => {
        resolve(result);
      })
      .catch((reason) => {
        reject(reason);
      });
    // setTimeout(() => {
    //   view.scale = oldScale;
    // }, 1000);
  });
};
