"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[4737],{34737:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(72791),l=a(5935),n=a(16455),i=a(73937),o=a(81734),s=a(61524),d=a(91946);let c,u;function p(e,t,a){return new Promise(((a,r)=>{(function(e){return new Promise(((t,a)=>{const r=new n.default({portalItem:{id:"318be24592ea4dcba042511b3125fd53"},layerId:2});u=r,r.load().then((a=>{const r=new n.default({source:[],fields:a.fields,geometryType:"point",spatialReference:e.spatialReference,popupTemplate:a.popupTemplate,objectIdField:a.objectIdField,displayField:a.displayField,id:"feature-table"});r.fields.forEach((e=>{e.nullable=!0,"DEED_DATE"===e.name&&(e.type="string")})),e.map.allTables.add(r),r.load().then((e=>{t(e)})).catch((e=>{console.log(e)}))}))}))})(t).then((r=>{var n;c=new l.Z({container:e,view:t,editingEnabled:!1,multiSortEnabled:!0,visibleElements:{selectionColumn:!1},menuConfig:{items:[new s.Z({label:"Export",iconClass:"esri-icon-download",clickFunction:()=>{m(c)}})]},tableTemplate:f(r),layer:r}),null===(n=c)||void 0===n||n.when((()=>{a(c),function(e){e.grid.findColumn("ADDRESS").width=150,e.grid.findColumn("FEATURETYPE").width=150,setTimeout((()=>{const t=e.container.querySelector("vaadin-grid");null===t||void 0===t||t.addEventListener("click",(a=>{if("VAADIN-GRID-CELL-CONTENT"===a.target.nodeName){var r;e.clearSelection();const l=(null===(r=t.getEventContext(a))||void 0===r?void 0:r.item).feature;e.selectRows(l)}}))}),2e3)}(c),c.on("selection-change",(e=>{e.added.length&&c.layer.queryFeatures({objectIds:[e.added[0].feature.getObjectId()],returnGeometry:!0}).then((e=>{if(e.features.length){const a=e.features[0];a.setAttribute("type","address"),a.symbol=new d.Z({url:"assets/pin.svg",height:24,width:24}),t.graphics.removeMany(t.graphics.filter((e=>"address"===e.getAttribute("type")))),t.graphics.add(a),t.goTo({target:a,zoom:18},{easing:"ease-in-out",duration:1e3})}}))}))}))}))}))}function f(e){return new o.Z({columnTemplates:[new i.Z({label:"Address",fieldName:"ADDRESS",editable:!1,initialSortPriority:0,direction:"asc"}),new i.Z({label:"Type",fieldName:"FEATURETYPE",editable:!1,initialSortPriority:1,direction:"asc"})]})}const m=e=>{e.layer.queryFeatures({where:"1=1",outFields:["*"],orderByFields:["ADDRESS","FEATURETYPE"]}).then((t=>{let a="";e.tableTemplate.columnTemplates.forEach((e=>{a+=`${e.label},`})),a+="\r\n",t.features.forEach((t=>{e.tableTemplate.columnTemplates.forEach((e=>{t.attributes[e.fieldName]?a+=`"${t.attributes[e.fieldName]}",`:a+='"",'})),a+="\r\n"}));let r=(new Date).toISOString();r=r.replaceAll(":","").replaceAll("-","");const l=`imaps_addresses_export_${r}.csv`,n=new Blob([a],{type:"text/csv;charset=utf-8;"}),i=document.createElement("a");if(void 0!==i.download){const e=URL.createObjectURL(n);i.setAttribute("href",e),i.setAttribute("download",l),i.style.visibility="hidden",document.body.appendChild(i),i.click(),document.body.removeChild(i)}}))};var h=a(80184);const b=function(e){const t=(0,r.useRef)(),a=(0,r.useRef)(!1);return(0,r.useEffect)((()=>(a.current||(a.current=!0,p(t.current,e.view,e.featureSelected).then((t=>{!function(e,t){var a;t&&(null===(a=u)||void 0===a||a.queryFeatures({geometry:e.geometry,outFields:["ADDRESS","FEATURETYPE"],returnGeometry:!0}).then((e=>{t.layer.queryFeatures({where:"1=1",returnGeometry:!0}).then((a=>{t.layer.applyEdits({deleteFeatures:a.features}).then((a=>{t.layer.applyEdits({addFeatures:e.features}).then((e=>{t.refresh()})).catch((e=>{console.log(e)}))})).catch((e=>{console.log(e)}))}))})))}(e.property,t)}))),()=>{})),[]),(0,h.jsx)("div",{id:"address-table",ref:t})}}}]);
//# sourceMappingURL=4737.8e4a77d4.chunk.js.map