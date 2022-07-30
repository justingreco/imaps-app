export function toggleTheme() {
  document.body.classList.toggle("calcite-theme-dark");
  document.querySelectorAll("calcite-panel").forEach((panel) => {
    panel.classList.toggle("calcite-theme-dark");
  });
  // ArcGIS JSAPI theme
  const dark: HTMLLinkElement = document.querySelector(
    "#jsapi-theme-dark"
  ) as HTMLLinkElement;
  const light: HTMLLinkElement = document.querySelector(
    "#jsapi-theme-light"
  ) as HTMLLinkElement;
  if (dark && light) {
    dark.disabled = !dark.disabled;
    light.disabled = !light.disabled;
  }
  return document.body.classList.contains("calcite-theme-dark");
}
