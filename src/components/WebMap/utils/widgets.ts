import Expand from "@arcgis/core/widgets/Expand";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import Home from "@arcgis/core/widgets/Home";
import Compass from "@arcgis/core/widgets/Compass";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import MapView from "@arcgis/core/views/MapView";
let streetviewClick: IHandle | null = null;

export function addWidgets(view: MapView, widgetActivated: Function) {
  const coodinates = new CoordinateConversion({ view: view });
  const coodinateExpand = new Expand({
    content: coodinates,
    expandIconClass: "esri-icon-pan",
    mode: "floating",
  });
  view.ui.add(coodinateExpand, "bottom-left");
  view.ui.add(new Home({ view: view, goToOverride: (view, params) => {
    view.goTo(view.constraints)
  } }), "top-left");
  view.ui.add(new Compass({ view: view }), "top-left");
  view.ui.add(new ScaleBar({ view: view }), "bottom-left");
  const streetview = createStreetviewButton(view, widgetActivated);
  const identify = createIdentifyButton(view, widgetActivated);
  view.ui.add(identify, "top-left");
  view.ui.add(streetview, "top-left");
  view.watch("activeTool", (activeTool) => {
    if (activeTool) {
      view.popup.autoOpenEnabled = false;
      streetviewClick?.remove();
      document.querySelector(".identify-widget")?.classList.remove("active");
      document.querySelector(".streetview-widget")?.classList.remove("active");
    }
  });
}

const createStreetviewButton = (
  view: MapView,
  widgetActivated: Function
): any => {
  const button = document.createElement("div");
  button.classList.add("streetview-widget");
  button.classList.add("esri-component");
  button.classList.add("esri-widget--button");
  button.classList.add("esri-widget");
  button.classList.add("map-tool");
  button.setAttribute("role", "button");
  button.setAttribute("aria-label", "Open streetview");
  button.setAttribute("title", "Open streetview");
  const icon = document.createElement("calcite-icon");

  //icon.classList.add('esri-icon');
  icon.setAttribute("icon", "360-view");
  //icon.setAttribute('aria-hidden', 'true');

  const text = document.createElement("span");
  text.classList.add("esri-icon-font-fallback-text");
  text.textContent = "Open streetview";
  button.appendChild(icon);
  button.appendChild(text);
  button.addEventListener("click", () => {
    widgetActivated(view);

    view.popup.autoOpenEnabled = false;
    if (
      document.querySelector(".streetview-widget")?.classList.contains("active")
    ) {
      document.querySelector(".streetview-widget")?.classList.remove("active");
      streetviewClick?.remove();
    } else {
      document.querySelector(".map-tool.active")?.classList.remove("active");
      document.querySelector(".streetview-widget")?.classList.add("active");
      streetviewClick?.remove();
      streetviewClick = view.on("click", (e) => {
        document.querySelector(".map-tool.active")?.classList.remove("active");
        document.querySelector(".streetview-widget")?.classList.add("active");
        const cbll = e.mapPoint.latitude + "," + e.mapPoint.longitude;
        window.open(
          "https://maps.google.com?layer=c&cbll=" + cbll + "&cbp=0,0,0,0,0",
          "streetview"
        );
      });
    }
  });
  return button;
};

export const createIdentifyButton = (
  view: MapView,
  widgetActivated: Function
): any => {
  const infoButton = document.createElement("div");
  infoButton.classList.add("identify-widget");
  infoButton.classList.add("esri-component");
  infoButton.classList.add("esri-widget--button");
  infoButton.classList.add("esri-widget");
  infoButton.classList.add("active");
  infoButton.classList.add("map-tool");

  infoButton.setAttribute("role", "button");
  infoButton.setAttribute("aria-label", "Identify features");
  infoButton.setAttribute("title", "Identify features");
  const icon = document.createElement("span");
  icon.classList.add("esri-icon");
  icon.classList.add("esri-icon-description");
  icon.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.classList.add("esri-icon-font-fallback-text");
  text.textContent = "Idenfity features";
  infoButton.appendChild(icon);
  infoButton.appendChild(text);
  view.popup.autoOpenEnabled = true;
  infoButton.addEventListener("click", () => {
    view.popup.autoOpenEnabled = true;
    streetviewClick?.remove();
    document.querySelector(".identify-widget")?.classList.add("active");
    document.querySelector(".streetview-widget")?.classList.remove("active");

    widgetActivated(view);
  });
  return infoButton;
};
