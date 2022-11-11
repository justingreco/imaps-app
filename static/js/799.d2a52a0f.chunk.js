"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[799],{90799:(e,t,i)=>{i.d(t,{T:()=>F,I:()=>ee});var o=i(27366),r=i(52639),n=(i(93169),i(91505)),l=i(41691),a=i(42537),s=i(92026),p=i(47898),c=i(94172),h=i(68860),u=i(49861),d=i(63780),y=(i(25243),i(69912)),g=i(93655),f=i(74509),_=(i(59486),i(84652)),v=i(11186),m=i(71353),C=i(42137),w=i(2170),x=i(69662),b=i(92975),O=i(3826),M=i(585),T=i(77577),G=i(29909),S=i(80885);function V(e,t){const i=new M.Z({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(i.z=e[2]),i}function P(e,t,i){const o=new G.Z({paths:e,spatialReference:t});return i&&(0,x.nc)(o),o}function z(e,t,i){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const r=(0,_.d9)(e);r.forEach((e=>{const t=e[0],i=e[e.length-1];(0,d.fS)(t,i)&&1!==e.length||e.push(e[0])}));let n=new S.Z({rings:r,spatialReference:t});return n.rings.forEach((e=>{(0,x.bu)(e,!1,!1)||e.reverse()})),i&&(0,x.nc)(n),o&&n.isSelfIntersecting&&(0,b.JY)(t)&&(n=(0,w.simplify)(n)),n}function R(e,t,i){const o=t.mapToLocalMultiple(e),r=[],n={x:o[0].x,y:o[0].y},l=o[1].x,a=o[1].y,p=Math.round(l-n.x),c=Math.round(a-n.y),h=Math.max(Math.abs(p),Math.abs(c));if(i){const e={x:n.x+h,y:n.y+h},t={x:n.x-h,y:n.y-h};r.push((0,O.Q8)(e.x,t.y),(0,O.Q8)(t.x,t.y),(0,O.Q8)(t.x,e.y),(0,O.Q8)(e.x,e.y))}else{const e={x:p>0?n.x+h:n.x-h,y:c>0?n.y+h:n.y-h};r.push((0,O.Q8)(n.x,n.y),(0,O.Q8)(e.x,n.y),(0,O.Q8)(e.x,e.y),(0,O.Q8)(n.x,e.y))}return I(z([(0,s.lV)(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0),r,t)}function I(e,t,i){const o=Q(t[3],t[2],i),r=Q(t[1],t[2],i),n=Q(t[0],t[1],i),l=Q(t[0],t[3],i);return{geometry:e,midpoints:(0,s.pC)(o)&&(0,s.pC)(r)&&(0,s.pC)(n)&&(0,s.pC)(l)?{top:o,right:r,bottom:n,left:l}:null}}function Q(e,t,i){k[0]=e.x,k[1]=e.y,k[2]=0,Z[0]=t.x,Z[1]=t.y,Z[2]=0,(0,v.h)(k,k,Z,.5),W.x=k[0],W.y=Z[1],W.z=Z[2];const o=i.localToMap(W);return(0,s.pC)(o)?V(o,i.spatialReference):null}const W=(0,O.Q8)(0,0,0),k=(0,m.c)(),Z=(0,m.c)();function U(e,t,i,o){const r=t.mapToLocalMultiple(e);let n=null,l=null;if(i)n=r[0],l=r[1];else{const e=r[0],t=r[1],i=Math.round(t.x-e.x),o=Math.round(t.y-e.y),a=Math.max(Math.abs(i),Math.abs(o));n=(0,O.Q8)(i>0?e.x+a/2:e.x-a/2,o>0?e.y+a/2:e.y-a/2),l=(0,O.Q8)(Math.abs(i)>Math.abs(o)?n.x-a/2:n.x,Math.abs(i)>Math.abs(o)?n.y:n.y-a/2)}const a=t.localToMap(n),p=t.localToMap(l);if((0,s.Wi)(a)||(0,s.Wi)(p))return null;t.doUnnormalization&&(0,x.Sq)([[a,p]],t.spatialReference);const c=V(a,t.spatialReference),u=V(p,t.spatialReference),d=(0,h.c9)(t.spatialReference);let y=0;if((0,b.JY)(t.spatialReference))y=d*(0,w.distance)(c,u,null);else{const e=n.x-l.x,t=n.y-l.y;y=d*Math.sqrt(e*e+t*t)*(o||1)}const g=new C.Z({center:c,radius:y,radiusUnit:"meters",spatialReference:t.spatialReference});return{geometry:z(g.rings,g.spatialReference,!1),center:c,edge:u}}var A=i(45900),D=i(52349),L=i(77560),E=i(4943);let q=class extends E.h{constructor(e){super(e),this.type="draw-point"}};(0,o._)([(0,u.Cb)()],q.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],q.prototype,"elevation",void 0),q=(0,o._)([(0,y.j)("esri.views.interactive.tooltip.DrawPointTooltipInfo")],q);let j=class extends E.h{constructor(e){super(e),this.type="draw-polyline"}};(0,o._)([(0,u.Cb)()],j.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],j.prototype,"elevation",void 0),(0,o._)([(0,u.Cb)()],j.prototype,"totalLength",void 0),(0,o._)([(0,u.Cb)()],j.prototype,"viewType",void 0),j=(0,o._)([(0,y.j)("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")],j);let H=class extends E.h{constructor(e){super(e),this.type="draw-polygon"}};(0,o._)([(0,u.Cb)()],H.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],H.prototype,"elevation",void 0),(0,o._)([(0,u.Cb)()],H.prototype,"area",void 0),(0,o._)([(0,u.Cb)()],H.prototype,"viewType",void 0),H=(0,o._)([(0,y.j)("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")],H);let Y=class extends E.h{constructor(e){super(e),this.type="draw-rectangle",this.xSize=p.yP,this.ySize=p.yP,this.area=p.MQ}};(0,o._)([(0,u.Cb)()],Y.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],Y.prototype,"xSize",void 0),(0,o._)([(0,u.Cb)()],Y.prototype,"ySize",void 0),(0,o._)([(0,u.Cb)()],Y.prototype,"area",void 0),Y=(0,o._)([(0,y.j)("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")],Y);let J=class extends E.h{constructor(e){super(e),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=p.MQ}};(0,o._)([(0,u.Cb)()],J.prototype,"type",void 0),(0,o._)([(0,u.Cb)()],J.prototype,"radius",void 0),(0,o._)([(0,u.Cb)()],J.prototype,"xSize",void 0),(0,o._)([(0,u.Cb)()],J.prototype,"ySize",void 0),(0,o._)([(0,u.Cb)()],J.prototype,"area",void 0),J=(0,o._)([(0,y.j)("esri.views.interactive.tooltip.DrawCircleTooltipInfo")],J);var N=i(12586),X=i(9856),B=i(59418);let F=class extends((0,l.p)(n.Z.EventedMixin(A.m))){constructor(e){super(e),this._graphic=null,this._createOperationGeometry=null,this.defaultZ=0,this.geometryType=null,this.hasZ=!0,this.labelOptions=new D.Z,this.mode=null,this.snappingManager=null,this.snapToScene=!1,this.tooltip=null,this.tooltipOptions=new L.Z}initialize(){this.internalGraphicsLayer=new g.Z({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer),this.drawOperation=this.makeDrawOperation(),this.handles.add([this.drawOperation.on("vertex-add",(e=>this.onVertexAdd(e))),this.drawOperation.on("vertex-remove",(e=>this.onVertexRemove(e))),this.drawOperation.on("vertex-update",(e=>this.onVertexUpdate(e))),this.drawOperation.on("cursor-update",(e=>this.onCursorUpdate(e))),this.drawOperation.on("complete",(e=>this.onComplete(e))),(0,c.YP)((()=>this.tooltipOptions.enabled),(e=>{this.tooltip=e?new N.u({view:this.view,info:this._tooltipInfo}):(0,s.SC)(this.tooltip)}),c.tX),(0,c.YP)((()=>this._tooltipInfo),(e=>{(0,s.pC)(this.tooltip)&&(this.tooltip.info=e)}),c.tX)]),this.finishToolCreation()}destroy(){this.drawOperation=(0,s.SC)(this.drawOperation),this.tooltip=(0,s.SC)(this.tooltip),this._destroyAllVisualisations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=(0,s.SC)(this.internalGraphicsLayer),this._set("view",null)}get _defaultElevation(){return(0,p.yG)(this.defaultZ,"meters")}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(e){this._set("centered",e),this._updateGraphic()}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}set forceUniformSize(e){this._set("forceUniformSize",e),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(e){this._set("graphicSymbol",e),(0,s.pC)(this._graphic)&&(this._graphic.symbol=e)}get updating(){return this.drawOperation?.updating??!1}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(e){this.drawOperation.onInputEvent(e)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}_createGraphic(e){this._graphic=new r.Z({...this.graphicProperties,geometry:e,symbol:this.graphicSymbol}),this.internalGraphicsLayer.add(this._graphic),this.handles.add(this.initializeGraphic(this._graphic)),this.notifyChange("graphic"),this.handles.add((0,a.kB)((()=>{(0,s.pC)(this._graphic)&&(this.internalGraphicsLayer.remove(this._graphic),this._graphic=(0,s.SC)(this._graphic))})),K)}_destroyAllVisualisations(){this.handles.remove($.outline),this.handles.remove($.regularVertices),this.handles.remove($.activeVertex),this.handles.remove(K)}_getCreateOperationGeometry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{operationComplete:!1};if(null==this.drawOperation||0===this.drawOperation.numVertices)return null;const t=this.drawOperation.stagedVertex,i=this.drawOperation.committedVertices,o=i.slice();(0,s.pC)(t)&&o.push(this.drawOperation.coordinateHelper.pointToArray(t));const r=(0,s.pC)(t)?this.drawOperation.coordinateHelper.pointToArray(t):i.splice(-1)[0],n={regularVertices:null,activeVertex:null,full:null,outline:null,circle:null,rectangle:null},l=o.length,a=this.view.spatialReference,p="3d"===this.view.type&&"global"===this.view.viewingMode;switch(this.geometryType){case"point":n.regularVertices=i,n.activeVertex=r,n.full=this.drawOperation.coordinateHelper.arrayToPoint(o[0]);break;case"multipoint":n.regularVertices=i,n.activeVertex=r,l>0&&(n.full=function(e,t){return new T.Z({points:e,spatialReference:t})}(o,a));break;case"polyline":n.regularVertices=i,n.activeVertex=r,l>0&&(n.full=P([o],a,p));break;case"polygon":n.regularVertices=i,n.activeVertex=r,l>0&&(n.full=z([o],a,p,!0));break;case"circle":if(l>0){const t=(0,O.Gn)(this.view,o[0]);if(1===l&&e.operationComplete){const e=o[0],i=t.makeMapPoint(e[0]+te*this.view.resolution,e[1]);n.circle=U([e,i],t,!0),n.full=(0,s.pC)(n.circle)?n.circle.geometry:null}else 2===l&&(this.forceUniformSize?(n.circle=U(o,t,this.centered),n.full=(0,s.pC)(n.circle)?n.circle.geometry:null):(n.rectangle=function(e,t,i){const o=t.mapToLocalMultiple(e),r=o[0],n=o[1],l=Math.round(n.x-r.x),a=Math.round(n.y-r.y),p=(0,O.Q8)(i?r.x:r.x+l/2,i?r.y:r.y+a/2),c=i?l:l/2,h=i?a:a/2,u=[],d=2*Math.PI/60;function y(e){const t=Math.cos(e),i=Math.sin(e);return(0,O.Q8)(c*t+p.x,h*i+p.y)}for(let s=0;s<60;s++)u.push(y(s*d));u.push(u[0]);const{spatialReference:g,doUnnormalization:f}=t,_=z([(0,s.lV)(u.map((e=>t.localToMap(e))))],g,f,!1),v=t.localToMap(y(Math.PI/2)),m=t.localToMap(y(0)),C=t.localToMap(y(-Math.PI/2)),w=t.localToMap(y(Math.PI));return{geometry:_,midpoints:(0,s.pC)(v)&&(0,s.pC)(m)&&(0,s.pC)(C)&&(0,s.pC)(w)?{top:V(v,g),right:V(m,g),bottom:V(C,g),left:V(w,g)}:null}}(o,t,this.centered),n.full=n.rectangle.geometry))}break;case"rectangle":if(l>0){const t=(0,O.Gn)(this.view,o[0]);if(1===l&&e.operationComplete){const e=o[0],i=t.makeMapPoint(e[0]+te*this.view.resolution,e[1]);n.rectangle=R([e,i],t,!0),n.full=n.rectangle.geometry}else 2===l&&(n.rectangle=this.forceUniformSize?R(o,t,this.centered):function(e,t,i){let o=t.mapToLocalMultiple(e);if(1===o.length){const e=48,t=o[0];o=[(0,O.Q8)(t.x-e,t.y+e),(0,O.Q8)(t.x+e,t.y-e),(0,O.Q8)(t.x+e,t.y-e),(0,O.Q8)(t.x-e,t.y+e)]}const r=[],n={x:o[0].x,y:o[0].y},l={x:o[1].x,y:o[1].y};if(i){const e=Math.round(l.x-n.x),t=Math.round(l.y-n.y);r.push((0,O.Q8)(n.x-e,n.y-t),(0,O.Q8)(l.x,n.y-t),(0,O.Q8)(l.x,l.y),(0,O.Q8)(n.x-e,l.y))}else r.push((0,O.Q8)(n.x,n.y),(0,O.Q8)(l.x,n.y),(0,O.Q8)(l.x,l.y),(0,O.Q8)(n.x,l.y));return I(z([(0,s.lV)(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0),r,t)}(o,t,this.centered),n.full=n.rectangle.geometry)}break;default:return null}switch(this.geometryType){case"point":case"multipoint":break;case"polyline":case"polygon":l>1&&(n.outline=P([o],a,p));break;case"circle":case"rectangle":(0,s.pC)(n.full)&&"polygon"===n.full.type&&(n.outline=z(n.full.rings,a,p))}return n}initializeGraphic(e){return null}onComplete(e){this._updateGraphic();let t=null;if(this.drawOperation.isCompleted){const e=this._getCreateOperationGeometry({operationComplete:!0});(0,s.pC)(e)&&((0,s.Wi)(this._graphic)?this._createGraphic(e.full):this._graphic.geometry=e.full,t=(0,s.Wg)(this._graphic).clone())}this._createOperationGeometry=null,this.emit("complete",{graphic:t,...e})}onCursorUpdate(e){this._updateGraphic(),this.emit("cursor-update",e)}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}onVertexAdd(e){this._updateGraphic(),this.emit("vertex-add",e)}onVertexRemove(e){this._updateGraphic(),this.emit("vertex-remove",e)}onVertexUpdate(e){this._updateGraphic(),this.emit("vertex-update",e)}_updateGraphic(){const e=this._getCreateOperationGeometry();this._createOperationGeometry=e,(0,s.Wi)(e)?this._destroyAllVisualisations():((0,s.pC)(e.outline)?this.handles.add(this.onOutlineChanged(e.outline),$.outline):this.handles.remove($.outline),(0,s.pC)(e.regularVertices)?this.handles.add(this.onRegularVerticesChanged(e.regularVertices),$.regularVertices):this.handles.remove($.regularVertices),(0,s.pC)(e.activeVertex)?this.handles.add(this.onActiveVertexChanged(e.activeVertex),$.activeVertex):this.handles.remove($.activeVertex),(0,s.pC)(e.full)?(0,s.Wi)(this._graphic)?this._createGraphic(e.full):this._graphic.geometry=e.full:this.handles.remove(K))}get _tooltipInfo(){const{drawOperation:e}=this;if(!e)return null;switch(this.geometryType){case"point":return this._drawPointTooltipInfo;case"polyline":return this._drawPolylineTooltipInfo;case"polygon":return this._drawPolygonTooltipInfo;case"rectangle":return this._drawRectangleTooltipInfo;case"circle":return this._drawCircleTooltipInfo;default:return null}}get _drawPointTooltipInfo(){const e=(0,s.yw)(this.graphic,(e=>e.geometry));return(0,s.Wi)(e)||"point"!==e.type||"2d"===this.view.type&&0===this.defaultZ?null:new q({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail})}get _drawPolylineTooltipInfo(){const e=this._createOperationGeometry,t=(0,s.pC)(e)?e.full:null;if((0,s.Wi)(t)||"polyline"!==t.type)return null;const i=(0,B.Ul)(t,this._elevationMode);return new j({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,totalLength:(0,s.Pt)(i,p.yP),viewType:this.view.type})}get _drawPolygonTooltipInfo(){const e=this._createOperationGeometry,t=(0,s.pC)(e)?e.full:null;if((0,s.Wi)(t)||"polygon"!==t.type)return null;const i=(0,X.k)(t,this._elevationMode);return new H({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,area:(0,s.Pt)(i,p.MQ),viewType:this.view.type})}get _drawRectangleTooltipInfo(){return(0,s.Wi)(this.drawOperation)?null:new Y({tooltipOptions:this.tooltipOptions,xSize:(0,s.Pt)(this._xSize,p.yP),ySize:(0,s.Pt)(this._ySize,p.yP),area:(0,s.Pt)(this._fullGeometryArea,p.MQ)})}get _drawCircleTooltipInfo(){if((0,s.Wi)(this.drawOperation))return null;const e=this.forceUniformSize;return new J({tooltipOptions:this.tooltipOptions,radius:e?(0,s.Pt)(this._circleRadius,p.yP):null,xSize:e?null:(0,s.Pt)(this._xSize,p.yP),ySize:e?null:(0,s.Pt)(this._ySize,p.yP),area:(0,s.Pt)(this._fullGeometryArea,p.MQ)})}get _circleRadius(){const e=this._createOperationGeometry;return(0,s.pC)(e)&&(0,s.pC)(e.circle)&&(0,s.pC)(e.circle.center)&&(0,s.pC)(e.circle.edge)?(0,B.GQ)(e.circle.center,e.circle.edge,this._elevationMode):null}get _xSize(){const e=this._createOperationGeometry;if((0,s.Wi)(e)||(0,s.Wi)(e.rectangle))return null;const{midpoints:t}=e.rectangle;return(0,s.pC)(t)?(0,B.GQ)(t.left,t.right,this._elevationMode):null}get _ySize(){const e=this._createOperationGeometry;if((0,s.Wi)(e)||(0,s.Wi)(e.rectangle))return null;const{midpoints:t}=e.rectangle;return(0,s.pC)(t)?(0,B.GQ)(t.top,t.bottom,this._elevationMode):null}get _fullGeometryArea(){const e=this._createOperationGeometry,t=(0,s.pC)(e)?e.full:null;return(0,s.Wi)(t)||"polygon"!==t.type?null:(0,X.k)(t,this._elevationMode)}get _elevationTooltipDetail(){return{mode:this.drawOperation.elevationInfo.mode,...this._vertexTooltipElevation}}get _vertexTooltipElevation(){const{tooltipOptions:e,view:t,drawOperation:i}=this;if((0,s.Wi)(i))return this._defaultElevation;const o=i.stagedVertex??i.lastVertex;if((0,s.Wi)(o)||"2d"===t.type)return this._defaultElevation;const r={mode:e.elevation.mode,offset:0},n=(0,f.vQ)(t,o,i.elevationInfo,r)*(0,h._R)(o.spatialReference);return(0,p.yG)(n,"meters")}get _elevationMode(){return this.drawOperation.isDraped?"on-the-ground":"absolute-height"}};(0,o._)([(0,u.Cb)()],F.prototype,"_createOperationGeometry",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"_defaultElevation",null),(0,o._)([(0,u.Cb)({value:!0})],F.prototype,"centered",null),(0,o._)([(0,u.Cb)({nonNullable:!0})],F.prototype,"defaultZ",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"drawOperation",void 0),(0,o._)([(0,u.Cb)({value:!0})],F.prototype,"enabled",null),(0,o._)([(0,u.Cb)({value:!0})],F.prototype,"forceUniformSize",null),(0,o._)([(0,u.Cb)({constructOnly:!0})],F.prototype,"geometryType",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"graphic",null),(0,o._)([(0,u.Cb)({constructOnly:!0})],F.prototype,"graphicProperties",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"graphicSymbol",null),(0,o._)([(0,u.Cb)({constructOnly:!0})],F.prototype,"hasZ",void 0),(0,o._)([(0,u.Cb)({constructOnly:!0,type:D.Z})],F.prototype,"labelOptions",void 0),(0,o._)([(0,u.Cb)({constructOnly:!0})],F.prototype,"mode",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"snappingManager",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"snapToScene",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"tooltip",void 0),(0,o._)([(0,u.Cb)({constructOnly:!0,type:L.Z})],F.prototype,"tooltipOptions",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],F.prototype,"type",void 0),(0,o._)([(0,u.Cb)({readOnly:!0})],F.prototype,"updating",null),(0,o._)([(0,u.Cb)({constructOnly:!0,nonNullable:!0})],F.prototype,"view",void 0),(0,o._)([(0,u.Cb)()],F.prototype,"_tooltipInfo",null),(0,o._)([(0,u.Cb)()],F.prototype,"_drawPointTooltipInfo",null),(0,o._)([(0,u.Cb)()],F.prototype,"_drawPolylineTooltipInfo",null),(0,o._)([(0,u.Cb)()],F.prototype,"_drawPolygonTooltipInfo",null),(0,o._)([(0,u.Cb)()],F.prototype,"_drawRectangleTooltipInfo",null),(0,o._)([(0,u.Cb)()],F.prototype,"_drawCircleTooltipInfo",null),(0,o._)([(0,u.Cb)()],F.prototype,"_circleRadius",null),(0,o._)([(0,u.Cb)()],F.prototype,"_xSize",null),(0,o._)([(0,u.Cb)()],F.prototype,"_ySize",null),(0,o._)([(0,u.Cb)()],F.prototype,"_fullGeometryArea",null),(0,o._)([(0,u.Cb)()],F.prototype,"_elevationTooltipDetail",null),(0,o._)([(0,u.Cb)()],F.prototype,"_vertexTooltipElevation",null),(0,o._)([(0,u.Cb)()],F.prototype,"_elevationMode",null),F=(0,o._)([(0,y.j)("esri.views.draw.DrawGraphicTool")],F);const K="create-operation-graphic",$={outline:"outline-visual",regularVertices:"regular-vertices-visual",activeVertex:"active-vertex-visual"};function ee(e){switch(e){case"point":case"polyline":case"polygon":case"multipoint":return e;case"circle":case"rectangle":return"segment";default:return null}}const te=48},9856:(e,t,i)=>{i.d(t,{f:()=>S,k:()=>G});var o=i(92026),r=i(47898),n=i(68860),l=i(79347),a=i(11186),s=i(71353),p=i(79803),c=i(55652),h=i(74702),u=i(25003);function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]};return g(e,t)}function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]};return g(e,t,!1)}function g(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.hasZ;const l=(0,u.m)(e.spatialReference),d=(0,n.oq)(l);if((0,o.Wi)(d))return null;const y=(e,t)=>!(t.length<2)&&((0,a.s)(e,t[0],t[1],i&&t[2]||0),!0);let g=0;for(const o of e.rings){const i=o.length;if(i<3)continue;const{positionsWorldCoords:r}=t;for(;r.length<i;)r.push((0,s.c)());const n=f,u=(0,a.s)(_,0,0,0),d=1/i;for(let t=0;t<i;t++){if(!y(n,o[t]))return null;if(!(0,p.SH)(n,e.spatialReference,r[t],l))return null;(0,a.z)(u,u,r[t],d)}const m=(0,c.zk)(r[0],r[1],u,(0,c.re)());if(0===(0,a.p)((0,c.mJ)(m)))continue;for(let e=0;e<i;e++)(0,c.tx)(m,u,r[e],r[e]);const C=v(r);for(let e=0;e<C.length;e+=3)g+=(0,h.wu)(r[C[e]],r[C[e+1]],r[C[e+2]])}return(0,r.ne)(g,d)}const f=(0,s.c)(),_=(0,s.c)();function v(e){return(0,l.e)(function(e){const t=new Float64Array(2*e.length);for(let i=0;i<e.length;++i){const o=e[i],r=2*i;t[r+0]=o[0],t[r+1]=o[1]}return t}(e),[],2)}i(59486);var m=i(2170),C=i(15559),w=i(47072),x=i(78952);function b(e){const{spatialReference:t}=e;return(0,w.T)(t,O,M,T,e)}function O(e){return(0,r.ne)(Math.abs((0,C.p8)([e],"square-meters")[0]),"square-meters")}function M(e){try{return(0,r.ne)(Math.abs((0,m.geodesicArea)(e,"square-meters")),"square-meters")}catch(t){return null}}function T(e){const t=[];return(0,p.K2)(e,t)?(0,r.ne)(Math.abs((0,C.p8)([{type:"polygon",rings:t,spatialReference:x.Z.WGS84}],"square-meters")[0]),"square-meters"):null}function G(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{positionsWorldCoords:[]};if("on-the-ground"===t){const t=b(e);return(0,o.pC)(t)?t:y(e,i)}return d(e,i)}function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]};return G(e,"on-the-ground",t)}}}]);
//# sourceMappingURL=799.d2a52a0f.chunk.js.map