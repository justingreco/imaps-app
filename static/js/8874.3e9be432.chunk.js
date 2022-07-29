"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8874],{38874:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var s=r(85580),o=r(72791),a=r(16455),n=r(91946),i=r(58100),c=r(20804),l=r(44443),u=r(83589),d=(r(76200),r(23084),r(55465),r(27366)),p=(r(59486),r(46784)),g=r(49861),h=(r(63780),r(93169),r(25243)),m=r(69912),y=r(78952);let v=class extends p.wq{constructor(e){super(e),this.addresses=null,this.categories=null,this.countryCode=null,this.locationType=null,this.outSpatialReference=null}};(0,d._)([(0,g.Cb)({type:[Object],json:{read:{reader:e=>e&&e.records?e.records.map((e=>e.attributes)):null},write:{writer:(e,t)=>{const r=[];Array.isArray(e)&&e.forEach((e=>{r.push({attributes:e})})),t.addresses={records:r}}}}})],v.prototype,"addresses",void 0),(0,d._)([(0,g.Cb)({type:[String],json:{read:{source:"category",reader:e=>e?e.split(","):null},write:{target:"category",writer:(e,t)=>{t.category=e?e.join(","):null}}}})],v.prototype,"categories",void 0),(0,d._)([(0,g.Cb)({type:String,json:{read:{source:"sourceCountry"},write:{target:"sourceCountry"}}})],v.prototype,"countryCode",void 0),(0,d._)([(0,g.Cb)({type:String,json:{write:!0}})],v.prototype,"locationType",void 0),(0,d._)([(0,g.Cb)({type:y.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],v.prototype,"outSpatialReference",void 0),v=(0,d._)([(0,m.j)("esri.rest.support.AddressesToLocationsParameters")],v),v.from=(0,h.se)(v);r(88736),r(1360);var w=r(52639),f=r(61459),b=r(51995),S=r(83942);const C=()=>new Promise((e=>{const t=new a.default({portalItem:{id:"edb2153e06c2477995f95b27e5c24661"},title:"Intersection",layerId:0});t.load().then((()=>{const r=new c.Z({name:"Intersection",placeholder:"Enter first street name",layer:t,autoNavigate:!1,resultGraphicEnabled:!1});e(r)}))})),j=()=>new Promise((e=>{e(new l.Z({name:"Street Address",placeholder:"Enter an address",url:"https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer",autoNavigate:!0,resultSymbol:new n.Z({url:"assets/pin.svg",height:36,width:36})}))}));const R=(e,t)=>{"point"===t.type?e.graphics.add(new w.Z({geometry:t,attributes:{type:"location"},symbol:new n.Z({url:"assets/pin.svg",height:36,width:36})})):e.graphics.add(new w.Z({geometry:t,attributes:{type:"location"},symbol:new f.Z({color:new b.Z([0,255,255,.25]),outline:{color:new b.Z([0,255,255,1]),width:2}})}))},A=e=>{e.graphics.removeMany(e.graphics.filter((e=>"location"===e.getAttribute("type"))))};var Z=r(80184);const T=function(e){const t=(0,o.useRef)(null),r=(0,o.useRef)(null),a=(0,o.useRef)(!1),n=(0,o.useRef)(),c=(0,o.useRef)(),[l,d]=(0,o.useState)(!1),[p,g]=(0,o.useState)([]),[h,m]=(0,o.useState)("");return(0,o.useEffect)((()=>{var s,o;!a.current&&t.current&&(a.current=!0,(s=e.view,o=t.current,new Promise(((e,t)=>{const r=[];j().then((t=>{r.push(t),C().then((t=>{r.push(t);const a=new i.Z({view:s,maxSuggestions:30,searchAllEnabled:!0,popupEnabled:!1,container:o,goToOverride:(e,t)=>{e.goTo({target:t.target.target,zoom:17},{duration:1e3,easing:"ease"})}});a.sources.addMany(r),e(a),a.allSources.on("after-add",(e=>{if(e.item.layer){const t=e.item;t.name=e.item.layer.title,t.placeholder=e.item.layer.title}e.item.name.includes("World Geocoding")&&a.allSources.remove(e.item)}))}))}))}))).then((t=>{n.current=t,function(e,t,r,s,o,a){e.on("search-complete",(t=>{if(a.graphic=null,o(t.searchTerm),r("Intersection"===t.results[0].source.name),"Intersection"===t.results[0].source.name)t.results[0].source.layer.queryFeatures({geometry:t.results[0].results[0].feature.geometry,returnGeometry:!1,outFields:["CARTONAME"],orderByFields:["CARTONAME"]}).then((e=>{s(e.features.map((e=>e.getAttribute("CARTONAME"))))}));else{A(e.view);const r=[];t.results[0].results.forEach((t=>{R(e.view,t.feature.geometry),r.push(t.feature),a.graphic=t.feature}))}}))}(t,e.view,d,g,m,c.current)})),c.current=function(e,t){return new S.Z({view:e,container:t})}(e.view,r.current))})),(0,Z.jsxs)("div",{id:"location-search",children:[(0,Z.jsx)("div",{ref:t}),l&&(0,Z.jsx)("div",{children:(0,Z.jsxs)(s.ZK,{children:["Intersections",(0,Z.jsx)(s.Y,{label:"",selectionMode:"single",children:p.map(((e,t)=>(0,Z.jsx)(s.tp,{textLabel:e,value:e,onCalciteComboboxItemChange:t=>{var r;t.target.selected&&function(e,t,r){const s=`${e} & ${t}`;(0,u.h)("https://maps.raleighnc.gov/arcgis/rest/services/Locators/Locator/GeocodeServer",{address:{outSpatialReference:r.spatialReference,SingleLine:s}}).then((e=>{e.length&&(A(r),R(r,e[0].location),r.goTo({target:e[0].location,zoom:17},{duration:1e3,easing:"ease"}))}))}(e,h,null===n||void 0===n||null===(r=n.current)||void 0===r?void 0:r.view)}},t)))})]})}),(0,Z.jsx)("div",{ref:r})]})}}}]);
//# sourceMappingURL=8874.3e9be432.chunk.js.map