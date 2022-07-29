"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[3139,3388],{19610:(e,a,t)=>{t.d(a,{T:()=>r});const r={BingMapsLayer:async()=>(await t.e(165).then(t.bind(t,60165))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(5731),t.e(6505)]).then(t.bind(t,66505))).default,CSVLayer:async()=>(await t.e(8435).then(t.bind(t,98435))).default,ElevationLayer:async()=>(await t.e(2882).then(t.bind(t,72882))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,16455))).default,GroupLayer:async()=>(await t.e(5069).then(t.bind(t,65069))).default,GeoRSSLayer:async()=>(await t.e(54).then(t.bind(t,70054))).default,GeoJSONLayer:async()=>(await t.e(5064).then(t.bind(t,5064))).default,ImageryLayer:async()=>(await Promise.all([t.e(7314),t.e(5345),t.e(7038),t.e(9112),t.e(3752)]).then(t.bind(t,63752))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(7314),t.e(5345),t.e(394),t.e(7038),t.e(9112),t.e(3060)]).then(t.bind(t,93060))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(5731),t.e(6251)]).then(t.bind(t,56251))).default,KMLLayer:async()=>(await t.e(3838).then(t.bind(t,13838))).default,LineOfSightLayer:async()=>(await t.e(3724).then(t.bind(t,33724))).default,MapImageLayer:async()=>(await Promise.all([t.e(9668),t.e(9583)]).then(t.bind(t,19583))).default,MapNotesLayer:async()=>(await t.e(3513).then(t.bind(t,33513))).default,OGCFeatureLayer:async()=>(await t.e(8701).then(t.bind(t,98701))).default,OpenStreetMapLayer:async()=>(await t.e(1656).then(t.bind(t,31656))).default,PointCloudLayer:async()=>(await Promise.all([t.e(5731),t.e(9532)]).then(t.bind(t,9532))).default,RouteLayer:async()=>(await Promise.all([t.e(729),t.e(4404)]).then(t.bind(t,54404))).default,SceneLayer:async()=>(await Promise.all([t.e(5731),t.e(5838)]).then(t.bind(t,5838))).default,StreamLayer:async()=>(await t.e(2668).then(t.bind(t,2668))).default,TileLayer:async()=>(await Promise.all([t.e(9668),t.e(2977)]).then(t.bind(t,42977))).default,UnknownLayer:async()=>(await t.e(4917).then(t.bind(t,74917))).default,UnsupportedLayer:async()=>(await t.e(8101).then(t.bind(t,88101))).default,VectorTileLayer:async()=>(await Promise.all([t.e(969),t.e(5286)]).then(t.bind(t,27106))).default,VoxelLayer:async()=>(await Promise.all([t.e(5731),t.e(2560)]).then(t.bind(t,52560))).default,WebTileLayer:async()=>(await t.e(9200).then(t.bind(t,89200))).default,WFSLayer:async()=>(await Promise.all([t.e(2622),t.e(8566)]).then(t.bind(t,38566))).default,WMSLayer:async()=>(await t.e(4227).then(t.bind(t,84227))).default,WMTSLayer:async()=>(await t.e(6951).then(t.bind(t,46951))).default}},32698:(e,a,t)=>{t.d(a,{Y:()=>s,h:()=>l});var r=t(35995),n=t(70032);function l(e){return{origin:"portal-item",url:(0,r.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,r.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},33388:(e,a,t)=>{t.r(a),t.d(a,{getFirstLayerOrTableId:()=>f,getNumLayersAndTables:()=>h,load:()=>c,preprocessFSItemData:()=>m});var r=t(10064),n=t(19610),l=t(70032),s=t(32698),i=t(21371),o=t(41226);async function c(e,a){const t=e.instance.portalItem;if(t&&t.id)return await t.load(a),function(e){const a=e.instance.portalItem;if(!e.supportedTypes.includes(a.type))throw new r.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const t=e.instance,r=t.portalItem,{url:n,title:l}=r,o=(0,s.h)(r);if("group"===t.type)return t.read({title:l},o),u(t,e);n&&t.read({url:n},o);const c=await p(e,a);return c&&t.read(c,o),t.resourceReferences={portalItem:r,paths:o.readResourcePaths},t.read({title:l},o),(0,i.y)(t,o)}(e,a)}function u(e,a){let t;const l=e.portalItem.type;switch(l){case"Feature Service":case"Feature Collection":t=n.T.FeatureLayer;break;case"Stream Service":t=n.T.StreamLayer;break;case"Scene Service":t=n.T.SceneLayer;break;default:throw new r.Z("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'IGroupLayer'`)}let s;return t().then((e=>(s=e,p(a)))).then((async a=>"Feature Service"===l?(a=await m(a,e.portalItem.url),y(e,s,a)):h(a)>0?y(e,s,a):function(e,a){return e.portalItem.url?(0,o.b)(e.portalItem.url).then((t=>{function r(e){return{id:e.id,name:e.name}}t&&y(e,a,{layers:t.layers?.map(r),tables:t.tables?.map(r)})})):Promise.resolve()}(e,s)))}function y(e,a,t){let r=t.layers||[];const n=t.tables||[];"Feature Collection"===e.portalItem.type&&(r.forEach((e=>{"Table"===e?.layerDefinition?.type&&n.push(e)})),r=r.filter((e=>"Table"!==e?.layerDefinition?.type))),r.reverse().forEach((r=>{const n=d(e,a,t,r);e.add(n)})),n.reverse().forEach((r=>{const n=d(e,a,t,r);e.tables.add(n)}))}function d(e,a,t,r){const n=new a({portalItem:e.portalItem.clone(),layerId:r.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||l.Z.getDefault()};n.read(r,a);const s=t.showLegend;null!=s&&n.read({showLegend:s},a)}return n}function p(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const t=e.instance;return t.portalItem.fetchData("json",a).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(t)){let a,r=!0;return e&&h(e)>0&&(null==t.layerId&&(t.layerId=f(e)),a=function(e,a){const t=e.layers;if(t)for(let n=0;n<t.length;n++)if(t[n].id===a)return t[n];const r=e.tables;if(r)for(let n=0;n<r.length;n++)if(r[n].id===a)return r[n];return null}(e,t.layerId),a&&(1===h(e)&&(r=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),r&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),a}return e}))}async function m(e,a){if(null==e?.layers||null==e?.tables){const t=await(0,o.b)(a);(e=e||{}).layers=e.layers||t?.layers,e.tables=e.tables||t?.tables}return e}function f(e){const a=e.layers;if(a&&a.length)return a[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function h(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}},43139:(e,a,t)=>{t.r(a),t.d(a,{fromItem:()=>c,selectLayerClassPath:()=>u});var r=t(10064),n=t(19610),l=t(98995),s=t(33388),i=t(73117),o=t(41226);function c(e){return!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)}),function(e){return e.load().then(u).then(y)}(e.portalItem).then((a=>{const t={portalItem:e.portalItem,...a.properties};return new(0,a.constructor)(t)}))}function u(e){switch(e.type){case"Map Service":return function(e){return(0,o.b)(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return d(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){if(await e.load(),(0,i._$)(e,"Map Notes"))return{className:"MapNotesLayer"};if((0,i._$)(e,"Route Layer"))return{className:"RouteLayer"};const a=await e.fetchData();return 1===(0,s.getNumLayersAndTables)(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return d(e).then((a=>{if("object"==typeof a){const t={};let r;if(null!=a.id?(t.layerId=a.id,r=`${e.url}/layers/${a.id}`):r=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(a))if(e.typeKeywords.includes(t))return{className:a[t]}}return(0,o.b)(r).then((e=>{let a="SceneLayer";const r={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&r[e.layerType]&&(a=r[e.layerType]),{className:a,properties:t}}))}return!1===a?(0,o.b)(e.url).then((e=>"Voxel"===e?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){await e.load();const a=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=(await e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===t)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===t)return{className:"ImageryLayer"};const r=(await(0,o.b)(e.url)).cacheType?.toLowerCase();return"map"===r?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new r.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function y(e){return(0,n.T[e.className])().then((a=>({constructor:a,properties:e.properties})))}function d(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async a=>"Feature Service"===e.type?p(a=await(0,s.preprocessFSItemData)(a,e.url)):(0,s.getNumLayersAndTables)(a)>0?p(a):(0,o.b)(e.url).then(p)))}function p(e){return 1===(0,s.getNumLayersAndTables)(e)&&{id:(0,s.getFirstLayerOrTableId)(e)}}},41226:(e,a,t)=>{t.d(a,{b:()=>n});var r=t(76200);async function n(e){const{data:a}=await(0,r.default)(e,{responseType:"json",query:{f:"json"}});return a}}}]);
//# sourceMappingURL=3139.90637f43.chunk.js.map