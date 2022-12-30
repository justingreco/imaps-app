"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[6387,2463,2170],{92463:(t,e,i)=>{i.r(e),i.d(e,{hydratedAdapter:()=>h});var r=i(53866),s=i(77577),o=i(585),a=i(80885),n=i(29909);const h={convertToGEGeometry:function(t,e){if(null==e)return null;let i="cache"in e?e.cache._geVersion:void 0;return null==i&&(i=t.convertJSONToGeometry(e),"cache"in e&&(e.cache._geVersion=i)),i},exportPoint:function(t,e,i){const r=t.hasZ(e),s=t.hasM(e),a=new o.Z({x:t.getPointX(e),y:t.getPointY(e),spatialReference:i});return r&&(a.z=t.getPointZ(e)),s&&(a.m=t.getPointM(e)),a.cache._geVersion=e,a},exportPolygon:function(t,e,i){const r=new a.Z({rings:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:i});return r.cache._geVersion=e,r},exportPolyline:function(t,e,i){const r=new n.Z({paths:t.exportPaths(e),hasZ:t.hasZ(e),hasM:t.hasM(e),spatialReference:i});return r.cache._geVersion=e,r},exportMultipoint:function(t,e,i){const r=new s.Z({hasZ:t.hasZ(e),hasM:t.hasM(e),points:t.exportPoints(e),spatialReference:i});return r.cache._geVersion=e,r},exportExtent:function(t,e,i){const s=t.hasZ(e),o=t.hasM(e),a=new r.Z({xmin:t.getXMin(e),ymin:t.getYMin(e),xmax:t.getXMax(e),ymax:t.getYMax(e),spatialReference:i});if(s){const i=t.getZExtent(e);a.zmin=i.vmin,a.zmax=i.vmax}if(o){const i=t.getMExtent(e);a.mmin=i.vmin,a.mmax=i.vmax}return a.cache._geVersion=e,a}}},2170:(t,e,i)=>{i.r(e),i.d(e,{buffer:()=>k,changeDefaultSpatialReferenceTolerance:()=>D,clearDefaultSpatialReferenceTolerance:()=>j,clip:()=>n,contains:()=>c,convexHull:()=>x,crosses:()=>l,cut:()=>h,densify:()=>E,difference:()=>w,disjoint:()=>f,distance:()=>p,equals:()=>d,extendedSpatialReferenceInfo:()=>a,flipHorizontal:()=>H,flipVertical:()=>P,generalize:()=>z,geodesicArea:()=>X,geodesicBuffer:()=>Z,geodesicDensify:()=>Y,geodesicLength:()=>B,intersect:()=>C,intersectLinesToPoints:()=>N,intersects:()=>u,isSimple:()=>G,nearestCoordinate:()=>A,nearestVertex:()=>M,nearestVertices:()=>O,offset:()=>R,overlaps:()=>v,planarArea:()=>L,planarLength:()=>V,relate:()=>g,rotate:()=>T,simplify:()=>m,symmetricDifference:()=>b,touches:()=>_,union:()=>S,within:()=>y});var r=i(99058),s=i(92463);function o(t){return Array.isArray(t)?t[0].spatialReference:t&&t.spatialReference}function a(t){return r.G.extendedSpatialReferenceInfo(t)}function n(t,e){return r.G.clip(s.hydratedAdapter,o(t),t,e)}function h(t,e){return r.G.cut(s.hydratedAdapter,o(t),t,e)}function c(t,e){return r.G.contains(s.hydratedAdapter,o(t),t,e)}function l(t,e){return r.G.crosses(s.hydratedAdapter,o(t),t,e)}function p(t,e,i){return r.G.distance(s.hydratedAdapter,o(t),t,e,i)}function d(t,e){return r.G.equals(s.hydratedAdapter,o(t),t,e)}function u(t,e){return r.G.intersects(s.hydratedAdapter,o(t),t,e)}function _(t,e){return r.G.touches(s.hydratedAdapter,o(t),t,e)}function y(t,e){return r.G.within(s.hydratedAdapter,o(t),t,e)}function f(t,e){return r.G.disjoint(s.hydratedAdapter,o(t),t,e)}function v(t,e){return r.G.overlaps(s.hydratedAdapter,o(t),t,e)}function g(t,e,i){return r.G.relate(s.hydratedAdapter,o(t),t,e,i)}function G(t){return r.G.isSimple(s.hydratedAdapter,o(t),t)}function m(t){return r.G.simplify(s.hydratedAdapter,o(t),t)}function x(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.G.convexHull(s.hydratedAdapter,o(t),t,e)}function w(t,e){return r.G.difference(s.hydratedAdapter,o(t),t,e)}function b(t,e){return r.G.symmetricDifference(s.hydratedAdapter,o(t),t,e)}function C(t,e){return r.G.intersect(s.hydratedAdapter,o(t),t,e)}function S(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.G.union(s.hydratedAdapter,o(t),t,e)}function R(t,e,i,a,n,h){return r.G.offset(s.hydratedAdapter,o(t),t,e,i,a,n,h)}function k(t,e,i){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.G.buffer(s.hydratedAdapter,o(t),t,e,i,a)}function Z(t,e,i,a,n,h){return r.G.geodesicBuffer(s.hydratedAdapter,o(t),t,e,i,a,n,h)}function A(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return r.G.nearestCoordinate(s.hydratedAdapter,o(t),t,e,i)}function M(t,e){return r.G.nearestVertex(s.hydratedAdapter,o(t),t,e)}function O(t,e,i,a){return r.G.nearestVertices(s.hydratedAdapter,o(t),t,e,i,a)}function I(t){return"xmin"in t?"center"in t?t.center:null:"x"in t?t:"extent"in t?t.extent?.center??null:null}function T(t,e,i){if(null==t)throw new U;const s=t.spatialReference;if(null==(i=i??I(t)))throw new U;const o=t.constructor.fromJSON(r.G.rotate(t,e,i));return o.spatialReference=s,o}function H(t,e){if(null==t)throw new U;const i=t.spatialReference;if(null==(e=e??I(t)))throw new U;const s=t.constructor.fromJSON(r.G.flipHorizontal(t,e));return s.spatialReference=i,s}function P(t,e){if(null==t)throw new U;const i=t.spatialReference;if(null==(e=e??I(t)))throw new U;const s=t.constructor.fromJSON(r.G.flipVertical(t,e));return s.spatialReference=i,s}function z(t,e,i,a){return r.G.generalize(s.hydratedAdapter,o(t),t,e,i,a)}function E(t,e,i){return r.G.densify(s.hydratedAdapter,o(t),t,e,i)}function Y(t,e,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return r.G.geodesicDensify(s.hydratedAdapter,o(t),t,e,i,a)}function L(t,e){return r.G.planarArea(s.hydratedAdapter,o(t),t,e)}function V(t,e){return r.G.planarLength(s.hydratedAdapter,o(t),t,e)}function X(t,e,i){return r.G.geodesicArea(s.hydratedAdapter,o(t),t,e,i)}function B(t,e,i){return r.G.geodesicLength(s.hydratedAdapter,o(t),t,e,i)}function N(t,e){return r.G.intersectLinesToPoints(s.hydratedAdapter,o(t),t,e)}function D(t,e){r.G.changeDefaultSpatialReferenceTolerance(t,e)}function j(t){r.G.clearDefaultSpatialReferenceTolerance(t)}class U extends Error{constructor(){super("Illegal Argument Exception")}}},96306:(t,e,i)=>{i.r(e),i.d(e,{default:()=>U});var r=i(27366),s=(i(59486),i(52639)),o=i(91505),a=i(92026),n=i(47898),h=i(94172),c=i(49861),l=(i(63780),i(25243),i(69912)),p=i(65156),d=i(376),u=i(69662),_=i(80885),y=i(29909),f=i(585),v=i(77577);function g(t){let e=0,i=0;const r=t.length;let s,o=t[i];for(i=0;i<r-1;i++)s=t[i+1],e+=(s[0]-o[0])*(s[1]+o[1]),o=s;return e>=0}function G(t,e,i,r){const s=[];for(const o of t){const t=o.slice(0);s.push(t);const a=e*(o[0]-r.x)-i*(o[1]-r.y)+r.x,n=i*(o[0]-r.x)+e*(o[1]-r.y)+r.y;t[0]=a,t[1]=n}return s}function m(t,e,i){const r=t.spatialReference,s=e*Math.PI/180,o=Math.cos(s),a=Math.sin(s);if("xmin"in t&&(i=i??t.center,t=new _.Z({spatialReference:r,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){i=i??t.extent.center;const e=[];for(const r of t.paths)e.push(G(r,o,a,i));return new y.Z({spatialReference:r,paths:e})}if("rings"in t){i=i??t.extent.center;const e=[];for(const r of t.rings){const t=g(r),s=G(r,o,a,i);g(s)!==t&&s.reverse(),e.push(s)}return new _.Z({spatialReference:r,rings:e})}if("x"in t){i=i??t;const e=new f.Z({x:o*(t.x-i.x)-a*(t.y-i.y)+i.x,y:a*(t.x-i.x)+o*(t.y-i.y)+i.y,spatialReference:r});return null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}return"points"in t?(i=i??t.extent.center,new v.Z({points:G(t.points,o,a,i),spatialReference:r})):null}var x=i(61459),w=i(16851),b=i(16072),C=i(20008),S=i(53503),R=i(74982),k=i(83089),Z=i(70040),A=i(77560),M=i(7068),O=i(12586),I=i(40524),T=i(59418);class H{constructor(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-start"}}class P{constructor(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move"}}class z{constructor(t,e,i,r){this.graphics=t,this.mover=e,this.dx=i,this.dy=r,this.type="move-stop"}}class E{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"}}class Y{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"}}class L{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"}}class V{constructor(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-start"}}class X{constructor(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale"}}class B{constructor(t,e,i,r){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=r,this.type="scale-stop"}}const N=Z.X.transformGraphics,D={centerIndicator:new b.Z({style:"cross",size:N.center.size,color:N.center.color}),fill:{default:new x.Z({color:N.fill.color,outline:{color:N.fill.outlineColor,join:"round",width:1}}),active:new x.Z({color:N.fill.stagedColor,outline:{color:N.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new b.Z({style:"square",size:N.vertex.size,color:N.vertex.color,outline:{color:N.vertex.outlineColor,width:1}}),hover:new b.Z({style:"square",size:N.vertex.hoverSize,color:N.vertex.hoverColor,outline:{color:N.vertex.hoverOutlineColor,width:1}})},rotator:{default:new b.Z({style:"circle",size:N.vertex.size,color:N.vertex.color,outline:{color:N.vertex.outlineColor,width:1}}),hover:new b.Z({style:"circle",size:N.vertex.hoverSize,color:N.vertex.hoverColor,outline:{color:N.vertex.hoverOutlineColor,width:1}})},rotatorLine:new w.Z({color:N.line.color,width:1})};let j=class extends o.Z.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._tooltip=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=D,this.tooltipOptions=new A.Z,this.view=null,this._getBounds=(()=>{const t=(0,p.Ue)();return(e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const r of i){if(!r)continue;let i,s,o,a;if("point"===r.type)i=o=r.x,s=a=r.y;else if("multipoint"===r.type){const e=(0,u.nA)(r);[i,s,o,a]=(0,d.C6)(t,[e])}else if("extent"===r.type)[i,s,o,a]=[r.xmin,r.ymin,r.xmax,r.ymax];else{const e=(0,u.nA)(r);[i,s,o,a]=(0,d.C6)(t,e)}e[0]=Math.min(i,e[0]),e[1]=Math.min(s,e[1]),e[2]=Math.max(o,e[2]),e[3]=Math.max(a,e[3])}return e}})()}initialize(){const t=this.view;this._highlightHelper=new R.Z({view:t}),this._tooltip=new O.u({view:t}),this._setup(),this.addHandles([(0,h.gx)((()=>t?.ready),(()=>{const{layer:t,view:e}=this;(0,k.p)(e,t)}),{once:!0,initial:!0}),(0,h.YP)((()=>this.preserveAspectRatio),(()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))})),(0,h.YP)((()=>t?.scale),(()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()})),(0,h.YP)((()=>this.graphics),(()=>this.refresh())),(0,h.YP)((()=>this.layer),((t,e)=>{e&&this._resetGraphics(e),this.refresh()})),(0,h.YP)((()=>this.highlightsEnabled),(()=>{this._highlightHelper?.removeAll(),this._setUpHighlights()})),(0,h.YP)((()=>this.tooltipOptions.enabled),(t=>{this._tooltip=t?new O.u({view:this.view}):(0,a.SC)(this._tooltip)}),h.tX),this.on("move-start",(t=>this.callbacks?.onMoveStart?.(t))),this.on("move",(t=>this.callbacks?.onMove?.(t))),this.on("move-stop",(t=>this.callbacks?.onMoveStop?.(t))),this.on("rotate-start",(t=>this.callbacks?.onRotateStart?.(t))),this.on("rotate",(t=>this.callbacks?.onRotate?.(t))),this.on("rotate-stop",(t=>this.callbacks?.onRotateStop?.(t))),this.on("scale-start",(t=>this.callbacks?.onScaleStart?.(t))),this.on("scale",(t=>this.callbacks?.onScale?.(t))),this.on("scale-stop",(t=>this.callbacks?.onScaleStop?.(t)))])}destroy(){this._reset(),this._tooltip=(0,a.SC)(this._tooltip)}get state(){const t=this.view?.ready??!1,e=this.graphics.length&&this.layer;return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const r=i.geometry,s=(0,C.e7)(r,t,e,this.view);i.geometry=s}this.refresh(),this.emit("move-stop",new z(this.graphics,null,t,e))}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const r=i.geometry,s=(0,C.bA)(r,t,e);i.geometry=s}this.refresh(),this.emit("scale-stop",new B(this.graphics,null,t,e))}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this._vertexGraphics[1].geometry.x,i=this._vertexGraphics[3].geometry.y;e=new f.Z(t,i,this.view.spatialReference)}for(const i of this.graphics){const r=m(i.geometry,t,e);i.geometry=r}this.refresh(),this.emit("rotate-stop",new L(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new S.default({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[e,i,r,s]=this._getBoxBounds((0,p.Ue)()),o=Math.abs(r-e),a=Math.abs(s-i),n=(r+e)/2,h=(s+i)/2,{x:c,y:l}=t.geometry;return{width:o,height:a,centerX:n,centerY:h,startX:c,startY:l,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map((t=>this._getGraphicInfo(t)))}_getGraphicInfo(t){const e=t.geometry,[i,r,s,o]=this._getBounds((0,p.Ue)(),[e]);return{width:Math.abs(s-i),height:Math.abs(o-r),centerX:(s+i)/2,centerY:(o+r)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:r,_backgroundGraphic:s,_vertexGraphics:o,_rotateHandleGraphic:a,symbols:n}=this,h=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),s.symbol=n.fill.active,this._startInfo=this._getStartInfo(h),this._updateTooltip(h,t.viewEvent),h===a?(this.view.cursor="grabbing",this.emit("rotate-start",new E(this.graphics,h,e))):o.includes(h)?(this._activeHandleGraphic=h,this.emit("scale-start",new V(this.graphics,h,i,r))):this.emit("move-start",new H(this.graphics,h,t.dx,t.dy))}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(e))this._scaleGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("scale",new X(this.graphics,e,this._xScale,this._yScale));else if(e===this._rotateHandleGraphic)this._rotateGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("rotate",new Y(this.graphics,e,this._angleOfRotation));else{const{dx:i,dy:r}=t;this._totalDx+=i,this._totalDy+=r,this._moveGraphic(e,i,r),this._updateTooltip(e,t.viewEvent),this.emit("move",new P(this.graphics,e,i,r))}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:r,_totalDy:s,_xScale:o,_yScale:a,_vertexGraphics:n,_rotateHandleGraphic:h}=this;this.refresh(),e===h?(this.view.cursor="pointer",this.emit("rotate-stop",new L(this.graphics,e,i))):n.includes(e)?this.emit("scale-stop",new B(this.graphics,e,o,a)):this.emit("move-stop",new z(this.graphics,e,r,s))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:e,_vertexGraphics:i,graphics:r,_rotateHandleGraphic:s,symbols:o,view:a}=this,n=t.graphic;if(n===s)return s.symbol=o.rotator.hover,a.cursor="pointer",void this._updateTooltip(n);if(r.includes(n)||n===e)return void(a.cursor="move");if(!i.includes(n))return void(a.cursor="pointer");this._updateTooltip(n),t.graphic.symbol=o.handles.hover;const h=a.rotation;let c,l=t.index;switch(l<8&&(h>=0&&h<45?l%=8:l=h>=45&&h<90?(l+1)%8:h>=90&&h<135?(l+2)%8:h>=135&&h<180?(l+3)%8:h>=180&&h<225?(l+4)%8:h>=225&&h<270?(l+5)%8:h>=270&&h<315?(l+6)%8:(l+7)%8),l){case 0:case 4:c="nwse-resize";break;case 1:case 5:c="ns-resize";break;case 2:case 6:c="nesw-resize";break;case 3:case 7:c="ew-resize";break;default:c="pointer"}a.cursor=c}_onGraphicPointerOutCallback(t){const{_vertexGraphics:e,_rotateHandleGraphic:i,symbols:r,view:s}=this;t.graphic===i?i.symbol=r.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=r.handles.default),s.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:e,_vertexGraphics:i,preserveAspectRatio:r,view:s}=this,{centerX:o,centerY:a,startX:n,startY:h}=e,{resolution:c,transform:l}=s.state,p=i.indexOf(t);1!==p&&5!==p||this._updateX(t,o),3!==p&&7!==p||this._updateY(t,a);const{x:d,y:u}=t.geometry,_=l[0]*d+l[2]*u+l[4],y=l[1]*d+l[3]*u+l[5],v=e.graphicInfos.map((t=>t.geometry));if(r){const t=l[0]*o+l[2]*a+l[4],e=l[1]*o+l[3]*a+l[5],i=l[0]*n+l[2]*h+l[4],r=l[1]*n+l[3]*h+l[5];this._xScale=this._yScale=(0,C.Ru)(t,e,i,r,_,y);for(const s of v){const t=v.indexOf(s);this.graphics[t].geometry=(0,C.bA)(s,this._xScale,this._yScale,[o,a])}this._updateBackgroundGraphic()}else{const{width:t,height:i}=e;let r=d-n,l=h-u;if(1===p||5===p?r=0:3!==p&&7!==p||(l=0),0===r&&0===l)return;const _=t+(n>o?r:-1*r),y=i+(h<a?l:-1*l),g=o+r/2,G=a+l/2;this._xScale=_/t||1,this._yScale=y/i||1,1===p||5===p?this._xScale=1:3!==p&&7!==p||(this._yScale=1);const m=(g-o)/c,x=(G-a)/c,w=(0,C.bA)(e.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=(0,C.e7)(w,m,x,s,!0);const{centerX:b,centerY:S}=this._getGraphicInfo(this._backgroundGraphic),R=(b-o)/c,k=-1*(S-a)/c;for(const e of v){const t=v.indexOf(e),i=(0,C.bA)(e,this._xScale,this._yScale,[o,a]);this.graphics[t].geometry=(0,C.e7)(i,R,k,s,!0)}this._centerGraphic.geometry=new f.Z(b,S,s.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:r,startY:s,box:o,rotate:a}=this._startInfo,n=new f.Z(r,s,this.view.spatialReference),h=new f.Z(e,i,this.view.spatialReference),c=t.geometry;this._angleOfRotation=(0,C.cM)(n,c,h);const l=this._startInfo.graphicInfos.map((t=>t.geometry));for(const p of l){const t=l.indexOf(p),e=m(p,this._angleOfRotation,h);this.graphics[t].geometry=e}this._backgroundGraphic.geometry=m(o,this._angleOfRotation,h),this._rotateHandleGraphic.geometry=m(a,this._angleOfRotation,h)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const r=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=(0,C.e7)(r,e,i,this.view);for(const s of this.graphics)s!==t&&(s.geometry=(0,C.e7)(s.geometry,e,i,this.view))}else if(t===this._centerGraphic){const t=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=(0,C.e7)(t,e,i,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const r of this.graphics)r.geometry=(0,C.e7)(r.geometry,e,i,this.view)}_setUpHighlights(){this.highlightsEnabled&&this.graphics.length&&this._highlightHelper?.add(this.graphics)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._centerGraphic=new s.Z(null,e.centerIndicator,t),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new s.Z(null,e.fill.default,t),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new s.Z(null,e.rotatorLine,t),this._rotateHandleGraphic=new s.Z(null,e.rotator.default,t),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let i=0;i<8;i++)this._vertexGraphics.push(new s.Z(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach((t=>t.visible=!1))}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach(((e,i)=>{const[r,s]=t[i];this._updateXY(e,r,s)}))}_updateBackgroundGraphic(){const t=this._getCoordinates();this._backgroundGraphic.geometry=new _.Z({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,r]=this._getBoxBounds((0,p.Ue)()),s=(i+t)/2,o=(r+e)/2;this._centerGraphic.geometry=new f.Z(s,o,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:e}=this._vertexGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new f.Z(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic||!this._rotateHandleGraphic.geometry)return;const t=this._vertexGraphics[1].geometry,e=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new y.Z({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new f.Z(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new f.Z(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new f.Z(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some((t=>t&&(0,a.pC)(t.geometry)&&"extent"===t.geometry.type))}_getBoxBounds(t){const e=this.graphics.map((t=>t.geometry));return this._getBounds(t,e)}_getCoordinates(t){const[e,i,r,s]=this._getBoxBounds((0,p.Ue)());if(t){const t=(e+r)/2,o=(s+i)/2;return[[e,s],[t,s],[r,s],[r,o],[r,i],[t,i],[e,i],[e,o]]}return[[e,s],[r,s],[r,i],[e,i]]}_updateTooltip(t,e){if((0,a.Wi)(this._tooltip))return;if(!t)return void this._tooltip.clear();const{_backgroundGraphic:i,graphics:r,_vertexGraphics:s,_rotateHandleGraphic:o}=this;t===o?this._updateRotateTooltip():s.includes(t)?this._updateScaleTooltip():(r.includes(t)||t===i)&&this._updateMoveTooltip(e)}_updateRotateTooltip(){(0,a.Wi)(this._tooltip)||(this._tooltip.info=new M.c({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{_tooltip:t,_xScale:e,_yScale:i,tooltipOptions:r,view:s}=this;if((0,a.Wi)(t))return;const o=s.spatialReference,n=this._getCoordinates(),h=new f.Z(n[0][0],n[0][1],o),c=new f.Z(n[1][0],n[1][1],o),l=new f.Z(n[2][0],n[2][1],o),p=(0,T.Qw)(h,c),d=(0,T.Qw)(c,l);if((0,a.Wi)(p)||(0,a.Wi)(d))return;const u=Math.abs(e),_=Math.abs(i);t.info=new M.p({tooltipOptions:r,xScale:u,yScale:_,xSize:p,ySize:d})}_updateMoveTooltip(t){const{_tooltip:e,tooltipOptions:i,view:r}=this;if((0,a.Wi)(e))return;const s=new I.$E({tooltipOptions:i});if(t){const{x:e,y:i}=t.origin,o=r.toMap(t),h=r.toMap({x:e,y:i}),c=(0,T.Qw)(h,o);s.distance=(0,a.pC)(c)?c:n.yP}e.info=s}};(0,r._)([(0,c.Cb)()],j.prototype,"_tooltip",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],j.prototype,"type",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"callbacks",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"enableMovement",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"enableRotation",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"enableScaling",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"graphics",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"highlightsEnabled",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"layer",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"preserveAspectRatio",void 0),(0,r._)([(0,c.Cb)()],j.prototype,"showCenterGraphic",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],j.prototype,"state",null),(0,r._)([(0,c.Cb)({value:D,cast(t){const{centerIndicator:e=D.centerIndicator,fill:i=D.fill,handles:r=D.handles,rotator:s=D.rotator,rotatorLine:o=D.rotatorLine}=t||{};return{centerIndicator:e,fill:i,handles:r,rotator:s,rotatorLine:o}}})],j.prototype,"symbols",void 0),(0,r._)([(0,c.Cb)({type:A.Z})],j.prototype,"tooltipOptions",void 0),(0,r._)([(0,c.Cb)({constructOnly:!0})],j.prototype,"view",void 0),j=(0,r._)([(0,l.j)("esri.views.draw.support.Box")],j);const U=j},70040:(t,e,i)=>{i.d(e,{O:()=>s,X:()=>p});var r=i(51995);const s={main:new r.Z([255,127,0]),selected:new r.Z([255,255,255]),outline:new r.Z([0,0,0,.5]),selectedOutline:new r.Z([255,255,255]),hoverOutline:new r.Z([255,255,255]),secondary:new r.Z([255,255,255]),secondaryOutline:new r.Z([100,100,100]),transparent:new r.Z([0,0,0,0])};function o(t,e){if(e)for(const i in e)t[i]=e[i]}class a{constructor(t){this.size=8,this.hoverSize=10,this.color=s.main,this.hoverColor=s.main,this.outlineColor=s.outline,this.hoverOutlineColor=s.hoverOutline,o(this,t)}}class n{constructor(t){this.color=s.secondary,this.hoverColor=s.main,o(this,t)}}class h{constructor(t){this.color=s.transparent,this.hoverColor=s.transparent,this.outlineColor=s.main,this.hoverOutlineColor=s.main,this.stagedColor=s.transparent,this.stagedOutlineColor=s.secondary,o(this,t)}}class c{constructor(t){this.vertex=new a,this.midpoint=new a({color:s.secondary,outlineColor:s.secondaryOutline,size:6}),this.selected=new a({color:s.selected,hoverColor:s.selected,hoverOutlineColor:s.hoverOutline}),o(this,t)}}class l{constructor(t){this.center=new a({color:s.secondaryOutline}),this.fill=new h,this.line=new n,this.vertex=new a({color:s.selected,outlineColor:s.main,hoverColor:s.selected,hoverOutlineColor:s.secondaryOutline}),o(this,t)}}const p=new class{constructor(t){this.reshapeGraphics=new c,this.transformGraphics=new l,o(this,t)}}},7068:(t,e,i)=>{i.d(e,{c:()=>h,p:()=>c});var r=i(27366),s=i(47898),o=i(49861),a=i(69912),n=i(4943);let h=class extends n.h{constructor(t){super(t),this.type="extent-rotate",this.angle=0}};(0,r._)([(0,o.Cb)()],h.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],h.prototype,"angle",void 0),h=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.ExtentRotateTooltipInfo")],h);let c=class extends n.h{constructor(t){super(t),this.type="extent-scale",this.xScale=0,this.yScale=0,this.xSize=s.yP,this.ySize=s.yP}};(0,r._)([(0,o.Cb)()],c.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],c.prototype,"xScale",void 0),(0,r._)([(0,o.Cb)()],c.prototype,"yScale",void 0),(0,r._)([(0,o.Cb)()],c.prototype,"xSize",void 0),(0,r._)([(0,o.Cb)()],c.prototype,"ySize",void 0),c=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.ExtentScaleTooltipInfo")],c)},40524:(t,e,i)=>{i.d(e,{$E:()=>h,QW:()=>c,c1:()=>u,in:()=>l,j:()=>d,nk:()=>p});var r=i(27366),s=i(47898),o=i(49861),a=i(69912),n=i(4943);let h=class extends n.h{constructor(t){super(t),this.type="translate-graphic",this.distance=s.yP}};(0,r._)([(0,o.Cb)()],h.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],h.prototype,"distance",void 0),h=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.TranslateGraphicTooltipInfo")],h);let c=class extends n.h{constructor(t){super(t),this.type="translate-graphic-z",this.distance=s.yP}};(0,r._)([(0,o.Cb)()],c.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],c.prototype,"distance",void 0),c=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.TranslateGraphicZTooltipInfo")],c);let l=class extends n.h{constructor(t){super(t),this.type="translate-graphic-xy",this.distance=s.yP}};(0,r._)([(0,o.Cb)()],l.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],l.prototype,"distance",void 0),l=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.TranslateGraphicXYTooltipInfo")],l);let p=class extends n.h{constructor(t){super(t),this.type="translate-vertex",this.distance=s.yP,this.elevation=null,this.area=null,this.totalLength=null}};(0,r._)([(0,o.Cb)()],p.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],p.prototype,"distance",void 0),(0,r._)([(0,o.Cb)()],p.prototype,"elevation",void 0),(0,r._)([(0,o.Cb)()],p.prototype,"area",void 0),(0,r._)([(0,o.Cb)()],p.prototype,"totalLength",void 0),p=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.TranslateVertexTooltipInfo")],p);let d=class extends n.h{constructor(t){super(t),this.type="translate-vertex-z",this.distance=s.yP,this.elevation=null}};(0,r._)([(0,o.Cb)()],d.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],d.prototype,"distance",void 0),(0,r._)([(0,o.Cb)()],d.prototype,"elevation",void 0),d=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.TranslateVertexZTooltipInfo")],d);let u=class extends n.h{constructor(t){super(t),this.type="translate-vertex-xy",this.distance=s.yP,this.elevation=null,this.area=null,this.totalLength=null}};(0,r._)([(0,o.Cb)()],u.prototype,"type",void 0),(0,r._)([(0,o.Cb)()],u.prototype,"distance",void 0),(0,r._)([(0,o.Cb)()],u.prototype,"elevation",void 0),(0,r._)([(0,o.Cb)()],u.prototype,"area",void 0),(0,r._)([(0,o.Cb)()],u.prototype,"totalLength",void 0),u=(0,r._)([(0,a.j)("esri.views.interactive.tooltip.TranslateVertexXYTooltipInfo")],u)}}]);
//# sourceMappingURL=6387.82c7c4b1.chunk.js.map