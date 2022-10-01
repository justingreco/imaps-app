export function toggleTheme(isDark: boolean) {
  document.body.classList.toggle("calcite-theme-dark");
  //document.querySelector('.esri-ui')?.classList.toggle("calcite-theme-dark");
  document.querySelector('.esri-ui')?.classList.toggle("calcite-theme-light");
  if (isDark) {
    document.body.classList.add('calcite-theme-dark');
    document.querySelector('.esri-ui')?.classList.remove("calcite-theme-light");
    document.querySelector('.esri-ui')?.classList.add("calcite-theme-dark");
  } else {
    document.body.classList.remove('calcite-theme-dark');
    document.querySelector('.esri-ui')?.classList.add("calcite-theme-light");
    document.querySelector('.esri-ui')?.classList.remove("calcite-theme-dark");
  }

  // ArcGIS JSAPI theme
  const dark: HTMLLinkElement = document.querySelector(
    "#jsapi-theme-dark"
  ) as HTMLLinkElement;
  const light: HTMLLinkElement = document.querySelector(
    "#jsapi-theme-light"
  ) as HTMLLinkElement;
  if (dark && light) {
    dark.disabled = !isDark;
    light.disabled = isDark;
  }

  return document.body.classList.contains("calcite-theme-dark");
}
