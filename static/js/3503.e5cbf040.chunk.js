"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[3503],{96669:(t,i,e)=>{function s(t,i){return i?"xoffset"in i&&i.xoffset?Math.max(t,Math.abs(i.xoffset)):"yoffset"in i&&i.yoffset?Math.max(t,Math.abs(i.yoffset||0)):t:t}function r(t,i){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let i=0,e=0;for(let s=0;s<t.length;s++){const r=t[s].size;"number"==typeof r&&(i+=r,e++)}return i/e}(t.stops):i}function n(t,i){if(!i)return t;const e=i.filter((t=>"size"===t.type)).map((i=>{const{maxSize:e,minSize:s}=i;return(r(e,t)+r(s,t))/2}));let s=0;const n=e.length;if(0===n)return t;for(let r=0;r<n;r++)s+=e[r];const a=Math.floor(s/n);return Math.max(a,t)}function a(t){const i=t&&t.renderer,e="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!i)return e;const r="visualVariables"in i?n(e,i.visualVariables):e;if("simple"===i.type)return s(r,i.symbol);if("unique-value"===i.type){let t=r;return i.uniqueValueInfos?.forEach((i=>{t=s(t,i.symbol)})),t}if("class-breaks"===i.type){let t=r;return i.classBreakInfos.forEach((i=>{t=s(t,i.symbol)})),t}return"dot-density"===i.type||i.type,r}e.d(i,{k:()=>a})},53503:(t,i,e)=>{e.r(i),e.d(i,{default:()=>H});var s=e(27366),r=(e(51508),e(91505)),n=e(100),a=e(84652),h=e(92026),o=e(94172),l=e(49861),c=(e(25243),e(69912)),p=e(93655),y=e(20008),d=e(74982),u=e(83089);class g{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-click"}}class v{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-double-click"}}class f{constructor(t,i,e,s,r,n,a,h,o,l){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=n,this.dy=a,this.totalDx=h,this.totalDy=o,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(t,i,e,s,r,n,a,h,o,l){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=n,this.dy=a,this.totalDx=h,this.totalDy=o,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class _{constructor(t,i,e,s,r,n,a,h,o,l){this.graphic=t,this.allGraphics=i,this.index=e,this.x=s,this.y=r,this.dx=n,this.dy=a,this.totalDx=h,this.totalDy=o,this.viewEvent=l,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class b{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-over"}}class x{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-out"}}class w{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-down"}}class G{constructor(t,i,e,s,r){this.graphic=t,this.index=i,this.x=e,this.y=s,this.viewEvent=r,this.type="graphic-pointer-up"}}var C=e(1614),k=e(2346),S=e(72612),M=e(16072),P=e(16851),E=e(61459);const O="indicator-symbols";let D=class extends r.Z.EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._handles=new n.Z,this._hoverGraphic=null,this._indicators=[],this._initialDragGeometry=null,this._viewHandles=new n.Z,this._manipulators=[],this._layerViews=null,this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.indicatorsEnabled=!1,this.layer=new p.Z({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),this.view=null}initialize(){(0,u.p)(this.view,this.layer),this._highlightHelper=new d.Z({view:this.view}),this.refresh(),this._handles.add([(0,o.YP)((()=>[this.graphics,this.graphics?.length]),(()=>this.refresh())),(0,o.gx)((()=>this.view?.ready),(()=>{this._viewHandles.add([this.view.on("immediate-click",(t=>this._clickHandler(t)),C.f.TOOL),this.view.on("double-click",(t=>this._doubleClickHandler(t)),C.f.TOOL),this.view.on("pointer-down",(t=>this._pointerDownHandler(t)),C.f.TOOL),this.view.on("pointer-move",(t=>this._pointerMoveHandler(t)),C.f.TOOL),this.view.on("pointer-up",(t=>this._pointerUpHandler(t)),C.f.TOOL),this.view.on("drag",(t=>this._dragHandler(t)),C.f.TOOL),this.view.on("key-down",(t=>this._keyDownHandler(t)),C.f.TOOL)])}),{once:!0,initial:!0}),(0,o.YP)((()=>this.view),(t=>{this._highlightHelper.removeAll(),this._highlightHelper.view=t}))])}destroy(){this._removeIndicators(),this.view.map?.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((t=>t.destroy())),this._manipulators=null,this._handles=(0,h.SC)(this._handles),this._viewHandles=(0,h.SC)(this._viewHandles)}set highlightsEnabled(t){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",t),t&&this._highlightHelper?.add(this.graphics)}get state(){const t=!!this.get("view.ready"),i=!!this.get("graphics.length"),e=this._activeGraphic;return t&&i?e?"moving":"active":t?"ready":"disabled"}refresh(){this.reset(),this._setup()}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}updateGeometry(t,i){const e=this.graphics[t];e&&(e.set("geometry",i),this._setUpIndicators())}_setup(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}_clickHandler(t){const i=this._findTargetGraphic((0,S.vT)(t));if(i){const e=new g(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e)}}_doubleClickHandler(t){const i=this._findTargetGraphic((0,S.vT)(t));if(i){const e=new v(i,this.graphics.indexOf(i),t.x,t.y,t);this.emit("graphic-double-click",e),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(e)}}_pointerDownHandler(t){const i=this._findTargetGraphic((0,S.vT)(t));if(i){this._activeGraphic=i;const{x:e,y:s}=t,r=new w(i,this.graphics.indexOf(i),e,s,t);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:i,y:e}=t,s=this.graphics.indexOf(this._activeGraphic),r=new G(this._activeGraphic,s,i,e,t);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}_pointerMoveHandler(t){if(this._dragEvent)return;const i=this._findTargetGraphic((0,S.vT)(t));if(i){const{x:e,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===i)return;const r=this.graphics.indexOf(this._hoverGraphic),n=new x(this.graphics[r],r,e,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",n),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(n)}const r=this.graphics.indexOf(i),n=new b(i,r,e,s,t);return this._hoverGraphic=i,this.emit("graphic-pointer-over",n),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(n))}if(this._hoverGraphic){const{x:i,y:e}=t,s=this.graphics.indexOf(this._hoverGraphic),r=new x(this.graphics[s],s,i,e,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;"start"===t.action&&this._removeIndicators(),t.stopPropagation();const{action:i,x:e,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),n=this._dragEvent?e-this._dragEvent.x:0,h=this._dragEvent?s-this._dragEvent.y:0,o=e-t.origin.x,l=s-t.origin.y,c="start"===i?this._activeGraphic.geometry:this._initialDragGeometry,p=(0,y.e7)(c,o,l,this.view);if(this._activeGraphic.geometry=p,this.enableMoveAllGraphics&&this.graphics.forEach((t=>{t!==this._activeGraphic&&(t.geometry=(0,y.e7)(t.geometry,n,h,this.view))})),this._dragEvent=t,"start"===i){this._initialDragGeometry=(0,a.d9)(c);const i=new f(this._activeGraphic,this.graphics,r,e,s,n,h,o,l,t);this.emit("graphic-move-start",i),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(i),i.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===i){const i=new m(this._activeGraphic,this.graphics,r,e,s,n,h,o,l,t);this.emit("graphic-move",i),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(i),i.defaultPrevented&&(this._activeGraphic.geometry=c)}else{const i=new _(this._activeGraphic,this.graphics,r,e,s,n,h,o,l,t);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",i),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(i),i.defaultPrevented&&(this.graphics[r].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){const i=this.view.toMap(t);let e=null,s=Number.MAX_VALUE;this._syncLayerViews();const r=this._layerViews.flatMap((t=>"graphicsViews"in t?Array.from(t.graphicsViews(),(t=>t.hitTest(i))).flat():t.graphicsView.hitTest(i))).filter((t=>this.graphics.includes(t)));return r.length?r[0]:(this._manipulators.forEach((i=>{const r=i.intersectionDistance(t);(0,h.pC)(r)&&r<s&&(s=r,e=i.graphic)})),e)}_syncLayerViews(){this._layerViews=[];const t=new Set;for(const i of this.graphics){const e=(0,u.j)(this.view,i.layer);e&&t.add(e)}this._layerViews=[...t]}_setUpManipulators(){const{graphics:t,view:i}=this;this._manipulators.forEach((t=>t.destroy())),this._manipulators=t?.length?t.map((t=>new k.L({graphic:t,view:i}))):[]}_setUpHighlights(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}_setUpIndicators(){if(this._removeIndicators(),this.indicatorsEnabled){for(const t of this.graphics){const i=t.clone();i.symbol=this._getSymbolForIndicator(t),this._indicators.push(i),this._handles.add((0,o.YP)((()=>t.symbol),(()=>this._setUpIndicators())),O)}this.layer.addMany(this._indicators)}}_removeIndicators(){this._handles.remove(O),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((t=>t.destroy())),this._indicators=[])}_getSymbolForIndicator(t){if((0,h.Wi)(t.symbol))return null;switch(t.symbol.type){case"cim":return new M.Z({style:"circle",size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":{const{xoffset:i,yoffset:e,height:s,width:r}=t.symbol,n=s===r?r:Math.max(s,r);return new M.Z({xoffset:i,yoffset:e,size:n,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-marker":{const{xoffset:i,yoffset:e,size:s,style:r}=t.symbol;return new M.Z({xoffset:i,yoffset:e,style:"circle"===r?"circle":"square",size:s+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}case"simple-fill":return new E.Z({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new P.Z({color:[255,127,0,1],style:"dash",width:1});case"text":{const{xoffset:i,yoffset:e}=t.symbol;return new M.Z({xoffset:i,yoffset:e,size:12,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}})}default:return null}}};(0,s._)([(0,l.Cb)()],D.prototype,"_activeGraphic",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],D.prototype,"type",void 0),(0,s._)([(0,l.Cb)()],D.prototype,"callbacks",void 0),(0,s._)([(0,l.Cb)()],D.prototype,"enableMoveAllGraphics",void 0),(0,s._)([(0,l.Cb)()],D.prototype,"graphics",void 0),(0,s._)([(0,l.Cb)({value:!1})],D.prototype,"highlightsEnabled",null),(0,s._)([(0,l.Cb)()],D.prototype,"indicatorsEnabled",void 0),(0,s._)([(0,l.Cb)()],D.prototype,"layer",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],D.prototype,"state",null),(0,s._)([(0,l.Cb)()],D.prototype,"view",void 0),D=(0,s._)([(0,c.j)("esri.views.draw.support.GraphicMover")],D);const H=D},74982:(t,i,e)=>{e.d(i,{Z:()=>c});var s=e(27366),r=e(41691),n=e(49861),a=(e(25243),e(63780),e(69912)),h=e(83089),o=e(69787);let l=class extends r.r{constructor(t){super(t),this.view=null}get count(){return this.handles.size}add(t){const i=Array.isArray(t)?t:[t];null!=t&&i&&i.length&&i.forEach((t=>this._highlight(t)))}remove(t){const i=Array.isArray(t)?t:[t];null!=t&&i&&i.length&&i.forEach((t=>this._unhighlight(t)))}removeAll(){this.handles.removeAll()}_highlight(t){const i=(0,h.j)(this.view,t.layer);(0,o.tl)(i)&&this.handles.add(i.highlight(t),`feature-${t.getObjectId()}`)}_unhighlight(t){t&&this.handles.remove(`feature-${t.getObjectId()}`)}};(0,s._)([(0,n.Cb)({readOnly:!0})],l.prototype,"count",null),(0,s._)([(0,n.Cb)()],l.prototype,"view",void 0),(0,s._)([(0,n.Cb)()],l.prototype,"add",null),l=(0,s._)([(0,a.j)("esri.views.draw.support.HighlightHelper")],l);const c=l},20008:(t,i,e)=>{e.d(i,{Ru:()=>c,bA:()=>l,cM:()=>p,e7:()=>o,pB:()=>h});var s=e(16889),r=e(65156),n=e(376),a=e(69662);function h(t,i,e,s){if(null==s||t.hasZ||(s=void 0),"point"===t.type)return t.x+=i,t.y+=e,t.hasZ&&null!=s&&(t.z+=s),t;if("multipoint"===t.type){const r=t.points;for(let t=0;t<r.length;t++)r[t]=y(r[t],i,e,s);return t}if("extent"===t.type)return t.xmin+=i,t.xmax+=i,t.ymin+=e,t.ymax+=e,null!=s&&(t.zmin??(t.zmin=0),t.zmin+=s,t.zmax??(t.zmax=0),t.zmax+=s),t;const r=(0,a.nA)(t),n="polyline"===t.type?t.paths:t.rings;for(let a=0;a<r.length;a++){const t=r[a];for(let r=0;r<t.length;r++)t[r]=y(t[r],i,e,s)}return"paths"in t?t.paths=n:t.rings=n,t}function o(t,i,e,s,r){const n=t.clone(),o=s.resolution;if("point"===n.type){if(r)h(n,i*o,-e*o);else{const t=s.state.transform,r=s.state.inverseTransform,a=t[0]*n.x+t[2]*n.y+t[4],h=t[1]*n.x+t[3]*n.y+t[5];n.x=r[0]*(a+i)+r[2]*(h+e)+r[4],n.y=r[1]*(a+i)+r[3]*(h+e)+r[5]}return n}if("multipoint"===n.type){if(r)h(n,i*o,-e*o);else{const t=n.points,r=s.state.transform,a=s.state.inverseTransform;for(let s=0;s<t.length;s++){const n=t[s],h=r[0]*n[0]+r[2]*n[1]+r[4],o=r[1]*n[0]+r[3]*n[1]+r[5],l=a[0]*(h+i)+a[2]*(o+e)+a[4],c=a[1]*(h+i)+a[3]*(o+e)+a[5];t[s]=d(n,l,c,void 0)}}return n}if("extent"===n.type){if(r)h(n,i*o,-e*o);else{const t=s.state.transform,r=s.state.inverseTransform,a=t[0]*n.xmin+t[2]*n.ymin+t[4],h=t[1]*n.xmin+t[3]*n.ymin+t[5],o=t[0]*n.xmax+t[2]*n.ymax+t[4],l=t[1]*n.xmax+t[3]*n.ymax+t[5];n.xmin=r[0]*(a+i)+r[2]*(h+e)+r[4],n.ymin=r[1]*(a+i)+r[3]*(h+e)+r[5],n.xmax=r[0]*(o+i)+r[2]*(l+e)+r[4],n.ymax=r[1]*(o+i)+r[3]*(l+e)+r[5]}return n}if(r)h(n,i*o,-e*o);else{const t=(0,a.nA)(n),r="polyline"===n.type?n.paths:n.rings,h=s.state.transform,o=s.state.inverseTransform;for(let s=0;s<t.length;s++){const r=t[s];for(let t=0;t<r.length;t++){const s=r[t],n=h[0]*s[0]+h[2]*s[1]+h[4],a=h[1]*s[0]+h[3]*s[1]+h[5],l=o[0]*(n+i)+o[2]*(a+e)+o[4],c=o[1]*(n+i)+o[3]*(a+e)+o[5];r[t]=d(s,l,c,void 0)}}"paths"in n?n.paths=r:n.rings=r}return n}function l(t,i,e,s){if("point"===t.type){const{x:r,y:n}=t,a=s?s[0]:r,h=s?s[1]:n,o=t.clone(),l=(r-a)*i+a,c=(n-h)*e+h;return o.x=l,o.y=c,o}if("multipoint"===t.type){const h=(0,a.nA)(t),o=(0,r.Ue)(),[l,c,p,y]=(0,n.C6)(o,[h]),u=s?s[0]:(l+p)/2,g=s?s[1]:(y+c)/2,v=t.clone(),f=v.points;for(let t=0;t<f.length;t++){const s=f[t],[r,n]=s,a=(r-u)*i+u,h=(n-g)*e+g;f[t]=d(s,a,h,void 0)}return v}if("extent"===t.type){const{xmin:r,xmax:n,ymin:a,ymax:h}=t,o=s?s[0]:(r+n)/2,l=s?s[1]:(h+a)/2,c=t.clone();if(c.xmin=(r-o)*i+o,c.ymax=(h-l)*e+l,c.xmax=(n-o)*i+o,c.ymin=(a-l)*e+l,c.xmin>c.xmax){const t=c.xmin,i=c.xmax;c.xmin=i,c.xmax=t}if(c.ymin>c.ymax){const t=c.ymin,i=c.ymax;c.ymin=i,c.ymax=t}return c}const h=(0,a.nA)(t),o=(0,r.Ue)(),[l,c,p,y]=(0,n.C6)(o,h),u=s?s[0]:(l+p)/2,g=s?s[1]:(y+c)/2,v=t.clone(),f="polyline"===v.type?v.paths:v.rings;for(let r=0;r<h.length;r++){const t=h[r];for(let s=0;s<t.length;s++){const n=t[s],[a,h]=n,o=(a-u)*i+u,l=(h-g)*e+g;f[r][s]=d(n,o,l,void 0)}}return"paths"in v?v.paths=f:v.rings=f,v}function c(t,i,e,s,r,n){const a=Math.sqrt((e-t)*(e-t)+(s-i)*(s-i));return Math.sqrt((r-t)*(r-t)+(n-i)*(n-i))/a}function p(t,i,e){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const n=Math.atan2(i.y-e.y,i.x-e.x)-Math.atan2(t.y-e.y,t.x-e.x),a=Math.atan2(Math.sin(n),Math.cos(n));return r?a:(0,s.BV)(a)}function y(t,i,e,s){return d(t,t[0]+i,t[1]+e,null!=t[2]&&null!=s?t[2]+s:void 0)}function d(t,i,e,s){const r=[i,e];return t.length>2&&r.push(null!=s?s:t[2]),t.length>3&&r.push(t[3]),r}},2346:(t,i,e)=>{e.d(i,{L:()=>b});var s=e(27366),r=e(85015),n=e(91505),a=e(92026),h=e(94172),o=e(17842),l=e(49861),c=(e(25243),e(63780),e(69912)),p=e(88396),y=e(11186),d=e(71353),u=e(79803),g=e(74509),v=e(61574),f=e(64575),m=e(90297),_=e(45008);let b=class extends r.Z{set graphic(t){this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()}get elevationInfo(){const{layer:t}=this.graphic,i=t&&"elevationInfo"in t?t.elevationInfo:null,e=(0,g.vu)(this.graphic),s=i?i.offset:0;return new f.Z({mode:e,offset:s})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new n.Z.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const i=this.graphic;if(!1===i.visible)return null;const e=i.geometry;if((0,a.Wi)(e))return null;const s=this._get("focusedSymbol"),r=(0,a.pC)(s)?s:i.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,e,r):this._intersectDistance3D(this.view,t,i)}attach(){this.attachSymbolChanged(),(0,a.pC)(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),(0,a.pC)(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=(0,h.YP)((()=>this.graphic?.symbol),(t=>{(0,a.pC)(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&(0,a.pC)(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))}),h.Z_)}detachSymbolChanged(){(0,a.pC)(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&(0,a.pC)(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,i,e,s){if(s=s||(0,v.js)(e),(0,a.Wi)(s))return null;let r=this._circleCollisionCache;if("point"===e.type&&"cim"===s.type&&"CIMPointSymbol"===s.data.symbol?.type&&s.data.symbol.symbolLayers){const{offsetX:r,offsetY:n,size:a}=(0,m.i)(s),h=(0,o.md)(i,w),l=a/2,c=t.toScreen(e),y=c.x+r,d=c.y+n;return(0,p.k)(h,[y,d])<l*l?1:null}if("point"!==e.type||"simple-marker"!==s.type)return(0,_.D)(i,e,t)?1:null;if((0,a.Wi)(r)||!r.originalPoint.equals(e)){const i=e,n=t.spatialReference;if((0,u.Up)(i.spatialReference,n)){const t=(0,u.iV)(i,n);r={originalPoint:i.clone(),mapPoint:t,radiusPx:(0,o.F2)(s.size)},this._circleCollisionCache=r}}if((0,a.pC)(r)){const e=(0,o.md)(i,w),n=t.toScreen?.(r.mapPoint);if(!n)return null;const a=r.radiusPx,h=n.x+(0,o.F2)(s.xoffset),l=n.y-(0,o.F2)(s.yoffset);return(0,p.k)(e,[h,l])<a*a?1:null}return null}_intersectDistance3D(t,i,e){const s=t.toMap(i,{include:[e]});return s&&(0,u.KC)(s,x,t.renderSpatialReference)?(0,y.i)(x,t.state.camera.eye):null}};(0,s._)([(0,l.Cb)({constructOnly:!0,nonNullable:!0})],b.prototype,"graphic",null),(0,s._)([(0,l.Cb)()],b.prototype,"elevationInfo",null),(0,s._)([(0,l.Cb)({constructOnly:!0,nonNullable:!0})],b.prototype,"view",void 0),(0,s._)([(0,l.Cb)({value:null})],b.prototype,"focusedSymbol",null),(0,s._)([(0,l.Cb)({constructOnly:!0})],b.prototype,"layer",void 0),(0,s._)([(0,l.Cb)()],b.prototype,"interactive",void 0),(0,s._)([(0,l.Cb)()],b.prototype,"selectable",void 0),(0,s._)([(0,l.Cb)()],b.prototype,"grabbable",void 0),(0,s._)([(0,l.Cb)({value:!1})],b.prototype,"grabbing",null),(0,s._)([(0,l.Cb)()],b.prototype,"dragging",void 0),(0,s._)([(0,l.Cb)()],b.prototype,"hovering",null),(0,s._)([(0,l.Cb)({value:!1})],b.prototype,"selected",null),(0,s._)([(0,l.Cb)()],b.prototype,"cursor",void 0),b=(0,s._)([(0,c.j)("esri.views.interactive.GraphicManipulator")],b);const x=(0,d.c)(),w=(0,o.s1)()},90297:(t,i,e)=>{e.d(i,{i:()=>n});var s=e(92026),r=e(17842);function n(t){let i=0,e=0,n=0;return t?("cim"===t.type&&t.data.symbol&&"symbolLayers"in t.data.symbol&&t.data.symbol.symbolLayers&&t.data.symbol.symbolLayers.map((t=>{"CIMVectorMarker"===t.type&&t.anchorPoint&&(Math.abs(t.anchorPoint.x)>i&&(i=t.anchorPoint.x),Math.abs(t.anchorPoint.y)>e&&(e=t.anchorPoint.y),(0,s.pC)(t.size)&&t.size>n&&(n=t.size))})),i=(0,r.F2)(i),e=(0,r.F2)(e),n=(0,r.F2)(n),{offsetX:i,offsetY:e,size:n}):{offsetX:i,offsetY:e,size:n}}},45008:(t,i,e)=>{e.d(i,{D:()=>o,K:()=>h});e(59486);var s=e(92026),r=e(68860),n=e(96669),a=e(53866);function h(t,i,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.Z,h=0;if("2d"===e.type)h=i*(e.resolution??0);else if("3d"===e.type){const n=e.overlayPixelSizeInMapUnits(t),a=e.basemapSpatialReference;h=(0,s.pC)(a)&&!a.equals(e.spatialReference)?(0,r.c9)(a)/(0,r.c9)(e.spatialReference):i*n}const o=t.x-h,l=t.y-h,c=t.x+h,p=t.y+h,{spatialReference:y}=e;return n.xmin=Math.min(o,c),n.ymin=Math.min(l,p),n.xmax=Math.max(o,c),n.ymax=Math.max(l,p),n.spatialReference=y,n}function o(t,i,e){const r=e.toMap(t);return!(0,s.Wi)(r)&&h(r,(0,n.k)(),e,l).intersects(i)}const l=new a.Z}}]);
//# sourceMappingURL=3503.e5cbf040.chunk.js.map