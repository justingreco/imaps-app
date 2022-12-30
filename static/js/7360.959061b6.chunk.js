"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[7360],{7360:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ce});var o=l(72791),i=l(85580),n=l(97426),a=l(33513),r=l(61459),s=l(16851),c=l(58009),p=l(80045),d=l(76200),y=l(75021),u=l(49729),m=l(86828);let h,b,f,g,x,S,v,C,j,w,k,O="",N=new r.Z({color:[255,0,0,.5],style:"solid",outline:{width:2,color:[255,0,0,1]}}),T=new s.Z({width:1,color:[255,0,0,1],style:"solid",cap:"round",join:"round"}),L=new c.Z({color:[255,0,0,1],haloColor:[255,255,255,1],haloSize:"1px",text:"",xoffset:3,yoffset:3,font:{size:10,family:"Aerial",weight:"bold"}});function Z(e,t,l){const o=new n.Z({view:t,layer:e,updateOnGraphicClick:!0});return o.on("create",_),o}function _(e){"complete"===e.state&&("polygon"===e.graphic.geometry.type&&(e.graphic.symbol=N,x.polygonLayer.add(e.graphic),j.create(e.tool)),"polyline"===e.graphic.geometry.type&&(e.graphic.symbol=T,x.polylineLayer.add(e.graphic),C.create(e.tool)),"text"===O&&(e.graphic.symbol=L,x.textLayer.add(e.graphic),w.create("point")),"point"===O&&(e.graphic.symbol=S,x.pointLayer.add(e.graphic),v.create("point")))}function E(){v.updateOnGraphicClick=!0,j.updateOnGraphicClick=!0,C.updateOnGraphicClick=!0,w.updateOnGraphicClick=!0}function I(e,t,l){E(),O=e,l(e===t?"":e),""===t&&z(),["polygon","rectangle","circle"].includes(e)&&j.create(e),["polyline"].includes(e)&&C.create(e),"text"===e&&C.create("point"),"point"===e&&C.create("point")}let G=!1;function M(e,t,l){const o=document.getElementById("polygon-preview");o&&!G&&(N.color=e,N.outline.color=t,N.outline.width=l,j&&(j.activeFillSymbol=N,x.polygonLayer&&J(x.polygonLayer,N,j)),G=!0,o.innerHTML="",m.l3(N,{node:o,size:24}).then((()=>G=!1)))}function J(e,t,l){if(l.updateGraphics.length){const o=l.updateGraphics.getItemAt(0);e.remove(o),o.symbol=t;const i=o.clone();e.add(i),setTimeout((()=>{l.cancel(),l.update(i)}))}}function R(e,t,l){(0,d.default)(`${e.url}${e.cimRef.replace(".","")}`).then((e=>{S=new y.Z({data:{type:"CIMSymbolReference",symbol:null===e||void 0===e?void 0:e.data}}),u.ZB(S,t),u.PI(S,l),x.pointLayer&&J(x.pointLayer,S,v),v.pointSymbol=S;const o=document.getElementById("icon-preview");o&&(o.innerHTML="",m.l3(S,{node:o,size:l}))}))}function $(e,t){T.color=e,T.width=t,C&&(C.polylineSymbol=T,C.updateGraphics.forEach((e=>{e.symbol=T})),x.polylineLayer&&J(x.polylineLayer,T,C));const l=document.getElementById("line-preview");l&&(l.innerHTML="",m.l3(T,{node:l,size:t}))}function A(e,t,l,o,i,n){L.color=t,L.font.size=e,L.haloColor=o,L.haloSize=i?l:0,L.text=n,w.pointSymbol=L,x.textLayer&&J(x.textLayer,L,w)}function z(){v.cancel(),C.cancel(),j.cancel(),w.cancel(),v.updateOnGraphicClick=!1,j.updateOnGraphicClick=!1,C.updateOnGraphicClick=!1,w.updateOnGraphicClick=!1}var F=l(51995),P=l(80184);function U(e){const t=(0,o.useRef)(null),l=(0,o.useRef)(null),[n,a]=(0,o.useState)(),[r,s]=(0,o.useState)(0);return(0,o.useEffect)((()=>{!n&&e.color&&(a(new F.Z(e.color)),s(100*(1-e.color[3])))}),[e.color]),(0,P.jsxs)("div",{id:e.id,children:[(0,P.jsxs)(i.ZK,{children:[e.label," Color",(0,P.jsx)(i.ln,{id:`${e.id}-popover-button`,width:"half",iconEnd:"pencil",color:"neutral",appearance:"outline",children:(0,P.jsx)(i.jv,{color:null===n||void 0===n?void 0:n.toHex()})})]}),(0,P.jsx)(i.qZ,{ref:t,overlayPositioning:"fixed",placement:"top-leading",label:"",referenceElement:`${e.id}-popover-button`,children:(0,P.jsxs)(i.N$,{heading:"Color",children:[(0,P.jsx)(i.G1,{icon:"x",text:"",slot:"header-actions-end",onClick:()=>{var l;null===(l=t.current)||void 0===l||l.toggle();const o=new F.Z(n);o.a=1-r/100,e.colorSet(o)}}),(0,P.jsx)(i.ne,{ref:l,hideSaved:!0,hideHex:!0,hideChannels:!0,value:n?n.toHex():"#FF0000",onCalciteColorPickerInput:e=>a(new F.Z(e.target.value))})]})}),!e.hideTransparency&&(0,P.jsxs)(i.ZK,{children:[e.label," Transparency",(0,P.jsxs)("div",{className:"slider-input",children:[(0,P.jsx)(i.XQ,{max:100,min:0,value:r,onCalciteSliderInput:t=>{let l=t.target.value;l>100&&(l=100),l<0&&(l=0),s(l);const o=new F.Z(n);o.a=1-r/100,e.colorSet(o)}}),(0,P.jsx)(i.e,{max:100,min:0,type:"number",numberButtonType:"none",suffixText:"%",value:r,onCalciteInputInput:t=>{let l=parseInt(t.target.value);l>100&&(l=100),l<0&&(l=0),s(l);const o=new F.Z(n);o.a=1-r/100,e.colorSet(o)}})]})]})]})}const D=o.memo(U);function B(e){const[t,l]=(0,o.useState)();return(0,o.useEffect)((()=>{l(e.value)}),[e.value]),(0,P.jsxs)(i.ZK,{children:[e.label,(0,P.jsxs)("div",{className:"slider-input",children:[(0,P.jsx)(i.XQ,{max:e.max,min:e.min,value:t,onCalciteSliderInput:t=>{l(t.target.value),e.sizeSet(t.target.value)}}),(0,P.jsx)(i.e,{type:"number",numberButtonType:"none",min:e.min,max:e.max,value:t,suffixText:"px",onCalciteInputInput:t=>{l(parseFloat(t.target.value)),e.sizeSet(parseFloat(t.target.value))}})]})]})}const W=o.memo(B);function H(e){const[t,l]=(0,o.useState)(new F.Z([255,0,0,1])),[i,n]=(0,o.useState)(2);return(0,o.useEffect)((()=>{t&&i&&e.polylineSymbolUpdated(t,i)}),[t,i]),(0,P.jsxs)("div",{id:"line-symbols",children:[(0,P.jsx)("div",{id:"line-preview",className:"preview"}),(0,P.jsx)(D,{id:"line",label:"Line",color:t.toRgba(),colorSet:t=>{l(t),e.polylineSymbolUpdated(t,i)}}),(0,P.jsx)(W,{value:i,min:.1,max:18,label:"Width",sizeSet:l=>{n(l),e.polylineSymbolUpdated(t,i)}})]})}const K=o.memo(H);function q(e){const[t,l]=(0,o.useState)(new F.Z([255,0,0,.5])),[i,n]=(0,o.useState)(new F.Z([255,0,0,1])),[a,r]=(0,o.useState)(2);return(0,o.useEffect)((()=>{t&&i&&a&&e.polygonSymbolUpdated(t,i,a)}),[t,i,a]),(0,P.jsxs)("div",{id:"polygon-symbols",children:[(0,P.jsx)("div",{id:"polygon-preview",className:"preview"}),(0,P.jsx)(D,{id:"polygon-fill",color:t.toRgba(),label:"Fill",colorSet:t=>{l(t),e.polygonSymbolUpdated(t,i,a)}}),(0,P.jsx)(D,{id:"polygon-outline",color:i.toRgba(),label:"Outline",colorSet:l=>{n(l),e.polygonSymbolUpdated(t,l,a)}}),(0,P.jsx)(W,{label:"Outline Width",min:.1,max:18,value:a,sizeSet:l=>{r(l),e.polygonSymbolUpdated(t,i,a)}})]})}const X=o.memo(q);function Q(e){const[t,l]=(0,o.useState)(new F.Z([255,0,0,1])),[n,a]=(0,o.useState)(10),[r,s]=(0,o.useState)(!1),[c,p]=(0,o.useState)(1),[d,y]=(0,o.useState)(new F.Z([255,255,255,1])),[u,m]=(0,o.useState)("");return(0,P.jsxs)("div",{id:"text-symbols",children:[(0,P.jsxs)(i.ZK,{children:["Text",(0,P.jsx)(i.e,{type:"textarea",scale:"m",value:u,onCalciteInputInput:l=>{m(l.target.value),requestAnimationFrame((()=>{e.textSymbolUpdated(n,t,c,d,r,l.target.value)}))},onCalciteInputChange:e=>{}})]}),(0,P.jsx)(D,{id:"font",label:"Font",color:t.toRgba(),hideTransparency:!0,colorSet:t=>{l(t),e.textSymbolUpdated(n,t,c,d,r,u)}}),(0,P.jsxs)(i.ZK,{children:["Font Size",(0,P.jsx)(i.e,{type:"number",min:5,max:125,value:n.toString(),onCalciteInputInput:l=>{a(parseFloat(l.target.value)),e.textSymbolUpdated(n,t,c,d,r,u)}})]}),(0,P.jsxs)(i.ZK,{layout:"inline",children:["Halo",(0,P.jsx)(i.$p,{checked:!!r||void 0,onCalciteSwitchChange:l=>{s(l.target.checked),e.textSymbolUpdated(n,t,c,d,r,u)}})]}),(0,P.jsxs)("div",{id:"halo",hidden:!r||void 0,children:[(0,P.jsx)(D,{id:"halo",label:"",color:d.toRgba(),hideTransparency:!0,colorSet:l=>{y(l),e.textSymbolUpdated(n,t,c,l,r,u)}}),(0,P.jsxs)(i.ZK,{children:["Size",(0,P.jsx)(i.e,{type:"number",min:1,max:10,value:c.toString(),onCalciteInputInput:l=>{p(parseFloat(l.target.value)),e.textSymbolUpdated(n,t,c,d,r,u)}})]})]})]})}const V=o.memo(Q);l(75655),l(67777),l(85026);function Y(e){return(0,P.jsxs)("div",{id:"icon-picker",children:[(0,P.jsx)("div",{id:"icon-preview",className:"preview"}),(0,P.jsx)(i.ZK,{alignment:"start",scale:"m",layout:"default",children:(0,P.jsx)("button",{className:"change-symbol-trigger",type:"button",onClick:()=>{e.pickerClicked()},children:(0,P.jsxs)("div",{className:"container",children:[e.symbol&&(0,P.jsx)("div",{className:"icon-symbol",children:(0,P.jsx)("img",{src:`${e.symbol.url}${e.symbol.thumbnail.href.replace(".","")}`,alt:e.symbol.title,width:50,height:50})}),(0,P.jsx)("div",{className:"icon-label",children:e.symbol.title}),(0,P.jsx)(i.oh,{icon:"chevron-right"})]})})})]})}const ee=o.memo(Y);function te(e){const[t,l]=(0,o.useState)([]);return(0,o.useEffect)((()=>{t&&e.symbols&&l(e.symbols)}),[]),(0,P.jsx)("div",{id:"icon-selection",children:(0,P.jsx)(i.N$,{showBackButton:!0,heading:"Change Symbol",onCalcitePanelBackClick:()=>{e.backClicked()},children:(0,P.jsx)("div",{className:"palette",children:t&&t.map(((t,l)=>(0,P.jsx)("img",{onClick:()=>{e.iconSelected(t),e.backClicked()},className:"item",alt:t.title,src:`${t.url}${t.thumbnail.href.replace(".","")}`},`icon-${l}`)))})})})}const le=o.memo(te);function oe(e){const[t,l]=(0,o.useState)([]),[n,a]=(0,o.useState)(),[r,s]=(0,o.useState)(16),c=["a63b3a4631ae41d4a1bc3ba6d9c85bfe","70ccf6bcbd304773a164be896e76edd3"],[y,u]=(0,o.useState)("main"),[m,h]=(0,o.useState)(new F.Z([255,0,0,1]));return(0,o.useEffect)((()=>{(function(e,t){return new Promise(((l,o)=>{const i=[];e.forEach((e=>{const l=new p.Z({styleUrl:`${t}/${e}/data`,name:"Pins"});i.push((0,d.default)(l.styleUrl))})),i.length;const n=[];Promise.all(i).then((e=>{e.forEach((e=>{e.data.items.forEach((t=>{t.url=e.url.replace("data",""),n.push(t)}))})),l(n)}))}))})(c,"https://www.arcgis.com/sharing/rest/content/items/").then((t=>{l(t),t.length&&(a(t[0]),e.pointSymbolUpdated(t[0],m,r))}))}),[]),(0,P.jsx)("div",{id:"point-symbols",children:t.length&&(0,P.jsxs)("div",{children:["main"===y&&(0,P.jsxs)(i.N$,{children:[(0,P.jsx)(ee,{pickerClicked:()=>u("icon"),symbol:n}),(0,P.jsx)(D,{id:"point",label:"Point",color:m.toRgba(),colorSet:t=>{h(t),e.pointSymbolUpdated(n,t,r)}}),(0,P.jsxs)(i.ZK,{children:["Size",(0,P.jsx)(i.e,{type:"number",min:6,max:72,value:r.toString(),onCalciteInputChange:t=>{s(parseFloat(t.target.value)),e.pointSymbolUpdated(n,m,parseFloat(t.target.value))}})]})]}),"icon"===y&&(0,P.jsx)(le,{iconSelected:t=>{a(t),e.pointSymbolUpdated(t,m,r)},backClicked:()=>u("main"),symbols:t})]})})}const ie=o.memo(oe);var ne=l(9283);const ae={title:"Sketch Tips",tips:[{title:"Custom Symbols",text:"You can now specify custom symbols in the sketch tool by changing the fill color, outline color, size, etc. of your graphics."}]},re=e=>{const t=(0,o.useRef)(!1),[l,i]=(0,o.useState)(""),[n,r]=(0,o.useState)(!1),[s,c]=(0,o.useState)([]);(0,o.useEffect)((()=>{t.current||function(e,t,l,o){x=new a.default({listMode:"hide",id:"notes-layer"}),e.map.add(x),e.whenLayerView(x).then((e=>{k=e})),h=x.pointLayer,b=x.polylineLayer,f=x.polygonLayer,g=x.textLayer,v=Z(h,e),C=Z(b,e),j=Z(f,e),j.activeFillSymbol=N,C.activeLineSymbol=T,w=Z(g,e),[v,C,j,w].forEach((e=>{null===e||void 0===e||e.on("create",(l=>{"cancel"===l.state&&null!==e.activeTool&&t("select")})),null===e||void 0===e||e.on("update",(e=>{"start"!==e.state&&"active"!==e.state||o([...e.graphics])}))}))}(e.view,i,0,c)}),[]),(0,o.useEffect)((()=>{r(e.isActive),e.isActive?(e.view.popup.autoOpenEnabled=!1,E()):(e.toolDismissed(),z(),i(""),c([]))}),[e.isActive]);const p=(0,o.useCallback)((()=>{e.toolDismissed(),z(),i(""),c([])}),[]),d=(0,o.useCallback)((t=>{e.showTips(ae)}),[]);return{activeSketchTool:l,setActiveSketchTool:i,selectedGraphics:s,setSelectedGraphics:c,isActive:n,toolDismissed:p,tipsClicked:d,checkGeometryType:(e,t)=>{const l=e.map((e=>{let t=e.geometry.type;return"text"===e.symbol.type&&(t="text"),t})),o=l.filter(((e,t)=>l.indexOf(e)===t));return!(o.length>1||o.length<1||1!==e.length)&&(1===o.length&&o[0]===t||void 0)}}};function se(e){const{activeSketchTool:t,setActiveSketchTool:l,selectedGraphics:o,setSelectedGraphics:n,isActive:a,toolDismissed:r,tipsClicked:s,checkGeometryType:c}=re(e);return(0,P.jsxs)(i.N$,{id:"sketch-panel",heading:"Sketch","data-panel":"sketch",hidden:!a,closed:!a||void 0,closable:!0,onCalcitePanelClose:r,children:[(0,P.jsx)(i.G1,{id:"tip",icon:"lightbulb",text:"Tips",slot:"header-actions-end",onClick:s}),(0,P.jsx)(i.G1,{id:"collapseTool",icon:"chevron-up",text:"",slot:"header-actions-end",onClick:ne.F$}),(0,P.jsx)(i.$A,{label:"Show Tip",referenceElement:"tip",children:"Show Tip"}),(0,P.jsx)(i.$A,{label:"Collapse",referenceElement:"collapseTool",children:"Collapse"}),(0,P.jsxs)("div",{id:"sketch-tools",children:[(0,P.jsxs)("div",{className:"sticky",children:[(0,P.jsxs)(i.Te,{layout:"horizontal",children:[(0,P.jsx)(i.G1,{id:"point",active:"point"===t||void 0,icon:"pin",text:"",onClick:()=>I("point",t,l)}),(0,P.jsx)(i.$A,{label:"Point",referenceElement:"point",children:"Point"}),(0,P.jsx)(i.G1,{id:"line",active:"polyline"===t||void 0,icon:"line",text:"",onClick:()=>I("polyline",t,l)}),(0,P.jsx)(i.$A,{label:"Line",referenceElement:"line",children:"Line"}),(0,P.jsx)(i.G1,{id:"polygon",active:"polygon"===t||void 0,icon:"polygon",text:"",onClick:()=>I("polygon",t,l)}),(0,P.jsx)(i.$A,{label:"Polygon",referenceElement:"polygon",children:"Polygon"}),(0,P.jsx)(i.G1,{id:"rectangle",active:"rectangle"===t||void 0,icon:"rectangle",text:"",onClick:()=>I("rectangle",t,l)}),(0,P.jsx)(i.$A,{label:"Rectangle",referenceElement:"rectangle",children:"Rectangle"}),(0,P.jsx)(i.G1,{id:"circle",active:"circle"===t||void 0,icon:"circle",text:"",onClick:()=>I("circle",t,l)}),(0,P.jsx)(i.$A,{label:"Circle",referenceElement:"circle",children:"Circle"}),(0,P.jsx)(i.G1,{id:"text",active:"text"===t||void 0,icon:"text",text:"",onClick:()=>I("text",t,l)}),(0,P.jsx)(i.$A,{label:"Text",referenceElement:"text",children:"Text"})]}),(0,P.jsxs)(i.Te,{layout:"horizontal",children:[(0,P.jsx)(i.G1,{id:"selectSketch",icon:"cursor",text:"",active:"select"===t||void 0,onClick:()=>{v.cancel(),j.cancel(),C.cancel(),w.cancel(),I("select",t,l),setTimeout((()=>{e.view.popup.autoOpenEnabled=!1}),1e3)}}),(0,P.jsx)(i.$A,{label:"Select Sketch",referenceElement:"selectSketch",children:"Select Sketch"}),(0,P.jsx)(i.G1,{id:"clearSketch",icon:"trash",text:"",onClick:()=>function(e,t){e(""),t([]),v.cancel(),j.cancel(),C.cancel(),w.cancel(),x.polygonLayer.graphics.removeAll(),x.pointLayer.graphics.removeAll(),x.polylineLayer.graphics.removeAll(),x.textLayer.graphics.removeAll()}(l,n)}),(0,P.jsx)(i.$A,{label:"Clear Sketches",referenceElement:"clearSketch",children:"Clear Sketches"})]})]}),(0,P.jsx)("div",{id:"point-symbols",className:"symbol",hidden:!("point"===t||c(o,"point")&&"select"===t)||void 0,children:(0,P.jsx)(ie,{pointSymbolUpdated:R})}),(0,P.jsx)("div",{id:"line-symbols",className:"symbol",hidden:!("polyline"===t||c(o,"polyline")&&"select"===t)||void 0,children:(0,P.jsx)(K,{polylineSymbolUpdated:$})}),(0,P.jsx)("div",{id:"polygon-symbols",className:"symbol",hidden:!(["polygon","rectangle","circle"].includes(t)||c(o,"polygon")&&"select"===t)||void 0,children:(0,P.jsx)(X,{polygonSymbolUpdated:M})}),(0,P.jsx)("div",{id:"text-symbols",className:"symbol",hidden:!("text"===t||c(o,"text")&&"select"===t)||void 0,children:(0,P.jsx)(V,{textSymbolUpdated:A})}),o.length>0&&(0,P.jsxs)(i.ln,{onClick:()=>function(e,t){h.removeMany(e),f.removeMany(e),b.removeMany(e),g.removeMany(e),requestAnimationFrame((()=>{t((e=>[]))}))}(o,n),alignment:"center",color:"red",appearance:"transparent","icon-end":"trash",children:[o.length," ",o.length>1?"features":"feature"]})]})]})}const ce=o.memo(se)},33513:(e,t,l)=>{l.r(t),l.d(t,{default:()=>U});var o=l(27366),i=(l(59486),l(52639)),n=(l(51508),l(40281)),a=l(10064),r=l(84652),s=l(92026),c=l(97642),p=l(18202),d=l(51370),y=l(49861),u=(l(25243),l(38511)),m=l(69912),h=l(31201),b=l(79803),f=l(65156),g=l(91340),x=l(92975),S=l(64326),v=l(93655),C=l(30651),j=l(25820),w=l(6693),k=l(6061),O=l(29598),N=l(56811),T=l(83040),L=l(61459),Z=l(16851),_=l(16072),E=l(58009),I=l(78952),G=l(53866);function M(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!J(e)))}function J(e){let{layerDefinition:t,featureSet:l}=e;const o=t.geometryType??l.geometryType;return F.find((e=>o===e.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===e.identifyingSymbol.type))}function R(){return new G.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const $=new T.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),A=new T.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let z=class extends v.Z{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?(0,s.Wi)(t)?(0,b.dz)(R(),e).geometry:(0,f.HH)(t,e):null}get fullBounds(){const e=this.layer?.spatialReference;if(!e)return null;const t=(0,f.cS)();return this.graphics.forEach((l=>{const o=(0,s.pC)(l.geometry)?(0,b.dz)(l.geometry,e).geometry:null;(0,s.pC)(o)&&(0,f.jn)(t,"point"===o.type?o:o.extent,t)})),(0,f.fS)(t,f.Gv)?null:t}get sublayers(){return this.graphics}};(0,o._)([(0,y.Cb)({readOnly:!0})],z.prototype,"fullExtent",null),(0,o._)([(0,y.Cb)({readOnly:!0})],z.prototype,"fullBounds",null),(0,o._)([(0,y.Cb)({readOnly:!0})],z.prototype,"sublayers",null),(0,o._)([(0,y.Cb)()],z.prototype,"layer",void 0),(0,o._)([(0,y.Cb)()],z.prototype,"layerId",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],z.prototype,"visibilityMode",void 0),z=(0,o._)([(0,m.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],z);const F=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new L.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new Z.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new _.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new _.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new E.Z).toJSON()}];let P=class extends((0,w.h)((0,N.M)((0,k.q)((0,O.I)((0,c.R)(C.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=I.Z.WGS84,this.sublayers=new n.Z(F.map((e=>new z({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,l){return{operations:{supportsMapNotesEditing:!M(t)&&"portal-item"!==l?.origin}}}readFeatureCollections(e,t,l){if(!M(t))return null;const o=t.layers.map((e=>{const t=new S.default;return t.read(e,l),t}));return new n.Z({items:o})}readLegacyfeatureCollectionJSON(e,t){return M(t)?(0,r.d9)(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=(0,f.cS)();return(0,s.pC)(this.sublayers)?this.sublayers.forEach((e=>{let{fullBounds:l}=e;return(0,s.pC)(l)?(0,f.jn)(t,l,t):t}),t):this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((l=>{const o=(0,b.dz)(l.layerDefinition.extent,e).geometry;(0,s.pC)(o)&&(0,f.jn)(t,o,t)})),(0,f.fS)(t,f.Gv)?(0,b.dz)(R(),e).geometry:(0,f.HH)(t,e)}readMinScale(e,t){for(const l of t.layers)if(null!=l.layerDefinition.minScale)return l.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const l of t.layers)if(null!=l.layerDefinition.maxScale)return l.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?I.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):I.Z.WGS84}readSublayers(e,t,l){if(M(t))return null;const o=[];let a=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const n of t.layers){const{layerDefinition:e,featureSet:t}=n,l=e.id??a++,r=J(n);if((0,s.pC)(r)){const n=new z({id:r.id,title:e.name,layerId:l,layer:this,graphics:t.features.map((e=>{let{geometry:t,symbol:l,attributes:o,popupInfo:n}=e;return i.Z.fromJSON({attributes:o,geometry:t,symbol:l,popupTemplate:n})}))});o.push(n)}}return new n.Z(o)}writeSublayers(e,t,l,o){const{minScale:i,maxScale:n}=this;if((0,s.Wi)(e))return;const r=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(r&&o?.messages?.push(new a.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const c=[];let d=this.spatialReference.toJSON();e:for(const a of e)for(const e of a.graphics)if((0,s.pC)(e.geometry)){d=e.geometry.spatialReference.toJSON();break e}for(const a of F){const t=e.find((e=>a.id===e.id));this._writeMapNoteSublayer(c,t,a,i,n,d,o)}(0,p.RB)("featureCollection.layers",c,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,r.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,s.Wi)(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const l of o.graphics)if((0,s.pC)(l.geometry)){const o=l.geometry;e?(0,x.fS)(o.spatialReference,e)||((0,b.Up)(o.spatialReference,e)||(0,b.kR)()||await(0,b.zD)(),l.geometry=(0,b.iV)(o,e)):e=o.spatialReference,t.push(l)}const l=await(0,g.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=l[t]))}_findSublayer(e){return(0,s.Wi)(this.sublayers)?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,l,o,i,n,a){const c=[];if(!(0,s.Wi)(t)){for(const e of t.graphics)this._writeMapNote(c,e,l.geometryType,a);this._normalizeObjectIds(c,$),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,r.d9)(l.identifyingSymbol)}},id:t.layerId,geometryType:l.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[$.toJSON(),A.toJSON()],spatialReference:n},featureSet:{features:c,geometryType:l.geometryTypeJSON}})}}_writeMapNote(e,t,l,o){if((0,s.Wi)(t))return;const{geometry:i,symbol:n,popupTemplate:a}=t;if((0,s.Wi)(i))return;if(i.type!==l)return void o?.messages?.push(new d.Z("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${l}" layer`,{graphic:t}));if((0,s.Wi)(n))return void o?.messages?.push(new d.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const r={attributes:{...t.attributes},geometry:i.toJSON(),symbol:n.toJSON()};(0,s.pC)(a)&&(r.popupInfo=a.toJSON()),e.push(r)}_normalizeObjectIds(e,t){const l=t.name;let o=(0,j.S)(l,e)+1;const i=new Set;for(const n of e){n.attributes||(n.attributes={});const{attributes:e}=n;(null==e[l]||i.has(e[l]))&&(e[l]=o++),i.add(e[l])}}};(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"capabilities",void 0),(0,o._)([(0,u.r)(["portal-item","web-map"],"capabilities",["layers"])],P.prototype,"readCapabilities",null),(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"featureCollections",void 0),(0,o._)([(0,u.r)(["web-map","portal-item"],"featureCollections",["layers"])],P.prototype,"readFeatureCollections",null),(0,o._)([(0,y.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],P.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,u.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],P.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,y.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],P.prototype,"featureCollectionType",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"fullExtent",null),(0,o._)([(0,y.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],P.prototype,"legendEnabled",void 0),(0,o._)([(0,y.Cb)({type:["show","hide","hide-children"]})],P.prototype,"listMode",void 0),(0,o._)([(0,y.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"minScale",void 0),(0,o._)([(0,u.r)(["web-map","portal-item"],"minScale",["layers"])],P.prototype,"readMinScale",null),(0,o._)([(0,y.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],P.prototype,"maxScale",void 0),(0,o._)([(0,u.r)(["web-map","portal-item"],"maxScale",["layers"])],P.prototype,"readMaxScale",null),(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"multipointLayer",null),(0,o._)([(0,y.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],P.prototype,"operationalLayerType",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"pointLayer",null),(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"polygonLayer",null),(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"polylineLayer",null),(0,o._)([(0,y.Cb)({type:I.Z})],P.prototype,"spatialReference",void 0),(0,o._)([(0,u.r)(["web-map","portal-item"],"spatialReference",["layers"])],P.prototype,"readSpatialReference",null),(0,o._)([(0,y.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],P.prototype,"sublayers",void 0),(0,o._)([(0,u.r)("web-map","sublayers",["layers"])],P.prototype,"readSublayers",null),(0,o._)([(0,h.c)("web-map","sublayers")],P.prototype,"writeSublayers",null),(0,o._)([(0,y.Cb)({readOnly:!0})],P.prototype,"textLayer",null),(0,o._)([(0,y.Cb)()],P.prototype,"title",void 0),(0,o._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],P.prototype,"type",void 0),P=(0,o._)([(0,m.j)("esri.layers.MapNotesLayer")],P);const U=P},25820:(e,t,l)=>{l.d(t,{S:()=>i,X:()=>o});const o=1;function i(e,t){let l=0;for(const o of t){const t=o.attributes?.[e];"number"==typeof t&&isFinite(t)&&(l=Math.max(l,t))}return l}}}]);
//# sourceMappingURL=7360.959061b6.chunk.js.map