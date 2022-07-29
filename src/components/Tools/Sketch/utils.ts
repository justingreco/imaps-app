import MapView from "@arcgis/core/views/MapView";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import MapNotesLayer from "@arcgis/core/layers/MapNotesLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Color from "@arcgis/core/Color";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";

let pointLayer: GraphicsLayer;
let polylineLayer: GraphicsLayer;
let polygonLayer: GraphicsLayer;
let textLayer: GraphicsLayer;
let sketchLayer: MapNotesLayer;
let selectedTool: string = "";
let fillSymbol = new SimpleFillSymbol({
  color: [255, 0, 0, 0.5],
  style: "solid",
  outline: {
    width: 2,
    color: [255, 0, 0, 1],
  },
});
let lineSymbol = new SimpleLineSymbol({
  width: 1,
  color: [255, 0, 0, 1],
  style: "solid",
  cap: "round",
  join: "round",
});
let textSymbol = new TextSymbol({
  color: [255, 0, 0, 1],
  haloColor: [255, 255, 255, 1],
  haloSize: "1px",
  text: "",
  xoffset: 3,
  yoffset: 3,
  font: {
    // autocasts as new Font()
    size: 10,
    family: "Aerial",
    weight: "bold",
  },
});
let pointSketchViewModel: SketchViewModel;
let polylineSketchViewModel: SketchViewModel;

let polygonSketchViewModel: SketchViewModel;

let textSketchViewModel: SketchViewModel;

export function initializeSketchViewModel(view: MapView) {
  sketchLayer = new MapNotesLayer({
    listMode: "hide",
    id: "notes-layer",
  });
  view.map.add(sketchLayer);
  pointLayer = sketchLayer.pointLayer;
  polylineLayer = sketchLayer.polylineLayer;
  polygonLayer = sketchLayer.polygonLayer;

  textLayer = sketchLayer.textLayer;
  // create a new sketch view model for each different map note type
  // this allows both the creation and modification of each different map note
  pointSketchViewModel = createSketchViewModels(pointLayer, view, false);
  polylineSketchViewModel = createSketchViewModels(polylineLayer, view, false);
  polygonSketchViewModel = createSketchViewModels(polygonLayer, view, false);
  polygonSketchViewModel.activeFillSymbol = fillSymbol;
  (polylineSketchViewModel as any).activeLineSymbol = lineSymbol as any;

  textSketchViewModel = createSketchViewModels(textLayer, view, true);
}

function createSketchViewModels(
  layer: GraphicsLayer,
  view: MapView,
  isText: boolean
) {
  const sketchVM = new SketchViewModel({
    view,
    layer,
    updateOnGraphicClick: true,
  });
  sketchVM.on("create", addGraphic);
  if (!isText) {
    // sketchVM.on("update", updateMapNotes);
  }
  return sketchVM;
}

function addGraphic(e: any) {
  if (e.state === "complete") {
    if (e.graphic.geometry.type === "polygon") {
      e.graphic.symbol = fillSymbol;
      sketchLayer.polygonLayer.add(e.graphic);
      setTimeout(() => polygonSketchViewModel.updateGraphics.add(e.graphic));

      polygonSketchViewModel.create(e.tool);
    }
    if (e.graphic.geometry.type === "polyline") {
      e.graphic.symbol = lineSymbol;
      sketchLayer.polylineLayer.add(e.graphic);
      polylineSketchViewModel.create(e.tool);
    }
    if (selectedTool === "text") {
      e.graphic.symbol = textSymbol;
      sketchLayer.textLayer.add(e.graphic);
      textSketchViewModel.create("point");
    }
  }
}

export function toolSelected(
  tool: string,
  activeTool: string,
  setActiveTool: Function
) {
  selectedTool = tool;
  tool === activeTool ? setActiveTool("") : setActiveTool(tool);
  if (activeTool === "") {
    cancelSketch();
  }
  if (["polygon", "rectangle", "circle"].includes(tool)) {
    polygonSketchViewModel.create(tool as any);
  }
  if (["polyline"].includes(tool)) {
    polylineSketchViewModel.create(tool as any);
  }
  if (tool === "text") {
    polylineSketchViewModel.create("point");
  }
}

export function polygonSymbolUpdated(
  fillColor: Color,
  outlineColor: Color,
  width: number
) {
  fillSymbol.color = fillColor;
  fillSymbol.outline.color = outlineColor;
  fillSymbol.outline.width = width;
  polygonSketchViewModel.activeFillSymbol = fillSymbol;
  polygonSketchViewModel.updateGraphics.forEach((graphic) => {
    graphic.symbol = fillSymbol;
  });
}

export function polylineSymbolUpdated(lineColor: Color, width: number) {
  lineSymbol.color = lineColor;
  lineSymbol.width = width;
  polylineSketchViewModel.activeFillSymbol = lineSymbol as any;
  polylineSketchViewModel.updateGraphics.forEach((graphic) => {
    graphic.symbol = lineSymbol;
  });
}

export function textSymbolUpdated(
  fontSize: number,
  fontColor: Color,
  haloSize: number,
  haloColor: Color,
  showHalo: boolean,
  textContent: string
) {
  textSymbol.color = fontColor;
  textSymbol.font.size = fontSize;
  textSymbol.haloColor = haloColor;
  textSymbol.haloSize = showHalo ? haloSize : 0;
  textSymbol.text = textContent;
  textSketchViewModel.pointSymbol = textSymbol as any;
}

function cancelSketch() {
  pointSketchViewModel.cancel();
  polylineSketchViewModel.cancel();
  polygonSketchViewModel.cancel();
  textSketchViewModel.cancel();
}

export function clearSketch(setActiveTool: Function) {
  setActiveTool("");
  cancelSketch();
  sketchLayer.polygonLayer.graphics.removeAll();
  sketchLayer.pointLayer.graphics.removeAll();
  sketchLayer.polylineLayer.graphics.removeAll();
  sketchLayer.textLayer.graphics.removeAll();
}
