"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[1842],{79347:(e,t,n)=>{n.d(t,{e:()=>a});var i,r,o,a={},s={get exports(){return a},set exports(e){a=e}};i=s,r=function(){function e(e,n,r){r=r||2;var o,a,s,p,c,u,h,y=n&&n.length,d=y?n[0]*r:e.length,x=t(e,0,d,r,!0),f=[];if(!x||x.next===x.prev)return f;if(y&&(x=l(e,n,x,r)),e.length>80*r){o=s=e[0],a=p=e[1];for(var v=r;v<d;v+=r)(c=e[v])<o&&(o=c),(u=e[v+1])<a&&(a=u),c>s&&(s=c),u>p&&(p=u);h=0!==(h=Math.max(s-o,p-a))?1/h:0}return i(x,f,r,o,a,h),f}function t(e,t,n,i,r){var o,a;if(r===Z(e,t,n,i)>0)for(o=t;o<n;o+=i)a=O(o,e[o],e[o+1],a);else for(o=n-i;o>=t;o-=i)a=O(o,e[o],e[o+1],a);if(a&&_(a,a.next)){var s=a.next;T(a),a=s}return a}function n(e,t){if(!e)return e;t||(t=e);var n,i=e;do{if(n=!1,i.steiner||!_(i,i.next)&&0!==g(i.prev,i,i.next))i=i.next;else{var r=i.prev;if(T(i),(i=t=r)===i.next)break;n=!0}}while(n||i!==t);return t}function i(e,t,l,p,c,u,h){if(e){!h&&u&&y(e,p,c,u);for(var d,x,f=e;e.prev!==e.next;)if(d=e.prev,x=e.next,u?o(e,p,c,u):r(e))t.push(d.i/l),t.push(e.i/l),t.push(x.i/l),T(e),e=x.next,f=x.next;else if((e=x)===f){h?1===h?i(e=a(n(e),t,l),t,l,p,c,u,2):2===h&&s(e,t,l,p,c,u):i(n(e),t,l,p,c,u,1);break}}}function r(e){var t=e.prev,n=e,i=e.next;if(g(t,n,i)>=0)return!1;for(var r=e.next.next;r!==e.prev;){if(f(t.x,t.y,n.x,n.y,i.x,i.y,r.x,r.y)&&g(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function o(e,t,n,i){var r=e.prev,o=e,a=e.next;if(g(r,o,a)>=0)return!1;for(var s=r.x<o.x?r.x<a.x?r.x:a.x:o.x<a.x?o.x:a.x,l=r.y<o.y?r.y<a.y?r.y:a.y:o.y<a.y?o.y:a.y,p=r.x>o.x?r.x>a.x?r.x:a.x:o.x>a.x?o.x:a.x,c=r.y>o.y?r.y>a.y?r.y:a.y:o.y>a.y?o.y:a.y,u=d(s,l,t,n,i),h=d(p,c,t,n,i),y=e.prevZ,x=e.nextZ;y&&y.z>=u&&x&&x.z<=h;){if(y!==e.prev&&y!==e.next&&f(r.x,r.y,o.x,o.y,a.x,a.y,y.x,y.y)&&g(y.prev,y,y.next)>=0)return!1;if(y=y.prevZ,x!==e.prev&&x!==e.next&&f(r.x,r.y,o.x,o.y,a.x,a.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;x=x.nextZ}for(;y&&y.z>=u;){if(y!==e.prev&&y!==e.next&&f(r.x,r.y,o.x,o.y,a.x,a.y,y.x,y.y)&&g(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=h;){if(x!==e.prev&&x!==e.next&&f(r.x,r.y,o.x,o.y,a.x,a.y,x.x,x.y)&&g(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a(e,t,i){var r=e;do{var o=r.prev,a=r.next.next;!_(o,a)&&b(o,r,r.next,a)&&C(o,a)&&C(a,o)&&(t.push(o.i/i),t.push(r.i/i),t.push(a.i/i),T(r),T(r.next),r=e=a),r=r.next}while(r!==e);return n(r)}function s(e,t,r,o,a,s){var l=e;do{for(var p=l.next.next;p!==l.prev;){if(l.i!==p.i&&v(l,p)){var c=M(l,p);return l=n(l,l.next),c=n(c,c.next),i(l,t,r,o,a,s),void i(c,t,r,o,a,s)}p=p.next}l=l.next}while(l!==e)}function l(e,i,r,o){var a,s,l,c=[];for(a=0,s=i.length;a<s;a++)(l=t(e,i[a]*o,a<s-1?i[a+1]*o:e.length,o,!1))===l.next&&(l.steiner=!0),c.push(x(l));for(c.sort(p),a=0;a<c.length;a++)r=n(r=u(c[a],r),r.next);return r}function p(e,t){return e.x-t.x}function c(e){if(e.next.prev===e)return e;let t=e;for(;;){const n=t.next;if(n.prev===t||n===t||n===e)break;t=n}return t}function u(e,t){var i=function(e,t){var n,i=t,r=e.x,o=e.y,a=-1/0;do{if(o<=i.y&&o>=i.next.y&&i.next.y!==i.y){var s=i.x+(o-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(s<=r&&s>a){if(a=s,s===r){if(o===i.y)return i;if(o===i.next.y)return i.next}n=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!n)return null;if(r===a)return n;var l,p=n,c=n.x,u=n.y,y=1/0;i=n;do{r>=i.x&&i.x>=c&&r!==i.x&&f(o<u?r:a,o,c,u,o<u?a:r,o,i.x,i.y)&&(l=Math.abs(o-i.y)/(r-i.x),C(i,e)&&(l<y||l===y&&(i.x>n.x||i.x===n.x&&h(n,i)))&&(n=i,y=l)),i=i.next}while(i!==p);return n}(e,t);if(!i)return t;var r=M(i,e),o=n(i,i.next);let a=c(r);return n(a,a.next),o=c(o),c(t===i?o:t)}function h(e,t){return g(e.prev,e,t.prev)<0&&g(t.next,e,e.next)<0}function y(e,t,n,i){var r=e;do{null===r.z&&(r.z=d(r.x,r.y,t,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next}while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,function(e){var t,n,i,r,o,a,s,l,p=1;do{for(n=e,e=null,o=null,a=0;n;){for(a++,i=n,s=0,t=0;t<p&&(s++,i=i.nextZ);t++);for(l=p;s>0||l>0&&i;)0!==s&&(0===l||!i||n.z<=i.z)?(r=n,n=n.nextZ,s--):(r=i,i=i.nextZ,l--),o?o.nextZ=r:e=r,r.prevZ=o,o=r;n=i}o.nextZ=null,p*=2}while(a>1)}(r)}function d(e,t,n,i,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*r)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function x(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function f(e,t,n,i,r,o,a,s){return(r-a)*(t-s)-(e-a)*(o-s)>=0&&(e-a)*(i-s)-(n-a)*(t-s)>=0&&(n-a)*(o-s)-(r-a)*(i-s)>=0}function v(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&b(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(C(e,t)&&C(t,e)&&function(e,t){var n=e,i=!1,r=(e.x+t.x)/2,o=(e.y+t.y)/2;do{n.y>o!=n.next.y>o&&n.next.y!==n.y&&r<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next}while(n!==e);return i}(e,t)&&(g(e.prev,e,t.prev)||g(e,t.prev,t))||_(e,t)&&g(e.prev,e,e.next)>0&&g(t.prev,t,t.next)>0)}function g(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function _(e,t){return e.x===t.x&&e.y===t.y}function b(e,t,n,i){var r=w(g(e,t,n)),o=w(g(e,t,i)),a=w(g(n,i,e)),s=w(g(n,i,t));return r!==o&&a!==s||!(0!==r||!m(e,n,t))||!(0!==o||!m(e,i,t))||!(0!==a||!m(n,e,i))||!(0!==s||!m(n,t,i))}function m(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function w(e){return e>0?1:e<0?-1:0}function C(e,t){return g(e.prev,e,e.next)<0?g(e,t,e.next)>=0&&g(e,e.prev,t)>=0:g(e,t,e.prev)<0||g(e,e.next,t)<0}function M(e,t){var n=new I(e.i,e.x,e.y),i=new I(t.i,t.x,t.y),r=e.next,o=t.prev;return e.next=t,t.prev=e,n.next=r,r.prev=n,i.next=n,n.prev=i,o.next=i,i.prev=o,i}function O(e,t,n,i){var r=new I(e,t,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function T(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function I(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Z(e,t,n,i){for(var r=0,o=t,a=n-i;o<n;o+=i)r+=(e[a]-e[o])*(e[o+1]+e[a+1]),a=o;return r}return e.deviation=function(e,t,n,i){var r=t&&t.length,o=r?t[0]*n:e.length,a=Math.abs(Z(e,0,o,n));if(r)for(var s=0,l=t.length;s<l;s++){var p=t[s]*n,c=s<l-1?t[s+1]*n:e.length;a-=Math.abs(Z(e,p,c,n))}var u=0;for(s=0;s<i.length;s+=3){var h=i[s]*n,y=i[s+1]*n,d=i[s+2]*n;u+=Math.abs((e[h]-e[d])*(e[y+1]-e[h+1])-(e[h]-e[y])*(e[d+1]-e[h+1]))}return 0===a&&0===u?0:Math.abs((u-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},i=0,r=0;r<e.length;r++){for(var o=0;o<e[r].length;o++)for(var a=0;a<t;a++)n.vertices.push(e[r][o][a]);r>0&&(i+=e[r-1].length,n.holes.push(i))}return n},e},void 0!==(o=r())&&(i.exports=o)},15820:(e,t,n)=>{n.d(t,{T:()=>K,I:()=>te});var i=n(27366),r=n(52639),o=n(91505),a=n(41691),s=n(42537),l=n(92026),p=n(47898),c=n(94172),u=n(68860),h=n(49861),y=(n(25243),n(63780)),d=n(69912),x=n(93655),f=n(74509),v=(n(59486),n(84652)),g=n(11186),_=n(71353),b=n(42137),m=n(2170),w=n(69662),C=n(92975),M=n(3826),O=n(585),T=n(77577),I=n(29909),Z=n(80885);function z(e,t){const n=new O.Z({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(n.z=e[2]),n}function V(e,t,n){const i=new I.Z({paths:e,spatialReference:t});return n&&(0,w.nc)(i),i}function G(e,t,n){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const r=(0,v.d9)(e);r.forEach((e=>{const t=e[0],n=e[e.length-1];(0,y.fS)(t,n)&&1!==e.length||e.push(e[0])}));let o=new Z.Z({rings:r,spatialReference:t});return o.rings.forEach((e=>{(0,w.bu)(e,!1,!1)||e.reverse()})),n&&(0,w.nc)(o),i&&o.isSelfIntersecting&&(0,C.JY)(t)&&(o=(0,m.simplify)(o)),o}function S(e,t,n){const i=t.mapToLocalMultiple(e),r=[],o={x:i[0].x,y:i[0].y},a=i[1].x,s=i[1].y,p=Math.round(a-o.x),c=Math.round(s-o.y),u=Math.max(Math.abs(p),Math.abs(c));if(n){const e={x:o.x+u,y:o.y+u},t={x:o.x-u,y:o.y-u};r.push((0,M.Q8)(e.x,t.y),(0,M.Q8)(t.x,t.y),(0,M.Q8)(t.x,e.y),(0,M.Q8)(e.x,e.y))}else{const e={x:p>0?o.x+u:o.x-u,y:c>0?o.y+u:o.y-u};r.push((0,M.Q8)(o.x,o.y),(0,M.Q8)(e.x,o.y),(0,M.Q8)(e.x,e.y),(0,M.Q8)(o.x,e.y))}return W(G([(0,l.lV)(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0),r,t)}function W(e,t,n){const i=P(t[3],t[2],n),r=P(t[1],t[2],n),o=P(t[0],t[1],n),a=P(t[0],t[3],n);return{geometry:e,midpoints:(0,l.pC)(i)&&(0,l.pC)(r)&&(0,l.pC)(o)&&(0,l.pC)(a)?{top:i,right:r,bottom:o,left:a}:null}}function P(e,t,n){Q[0]=e.x,Q[1]=e.y,Q[2]=0,k[0]=t.x,k[1]=t.y,k[2]=0,(0,g.h)(Q,Q,k,.5),R.x=Q[0],R.y=k[1],R.z=k[2];const i=n.localToMap(R);return(0,l.pC)(i)?z(i,n.spatialReference):null}const R=(0,M.Q8)(0,0,0),Q=(0,_.c)(),k=(0,_.c)();function E(e,t,n,i){const r=t.mapToLocalMultiple(e);let o=null,a=null;if(n)o=r[0],a=r[1];else{const e=r[0],t=r[1],n=Math.round(t.x-e.x),i=Math.round(t.y-e.y),s=Math.max(Math.abs(n),Math.abs(i));o=(0,M.Q8)(n>0?e.x+s/2:e.x-s/2,i>0?e.y+s/2:e.y-s/2),a=(0,M.Q8)(Math.abs(n)>Math.abs(i)?o.x-s/2:o.x,Math.abs(n)>Math.abs(i)?o.y:o.y-s/2)}const s=t.localToMap(o),p=t.localToMap(a);if((0,l.Wi)(s)||(0,l.Wi)(p))return null;t.doUnnormalization&&(0,w.Sq)([[s,p]],t.spatialReference);const c=z(s,t.spatialReference),h=z(p,t.spatialReference),y=(0,u.c9)(t.spatialReference);let d=0;if((0,C.JY)(t.spatialReference))d=y*(0,m.distance)(c,h,null);else{const e=o.x-a.x,t=o.y-a.y;d=y*Math.sqrt(e*e+t*t)*(i||1)}const x=new b.Z({center:c,radius:d,radiusUnit:"meters",spatialReference:t.spatialReference});return{geometry:G(x.rings,x.spatialReference,!1),center:c,edge:h}}function U(e,t){switch(e){case"point":case"multipoint":return"point";case"polyline":return((0,l.pC)(t)&&"polyline"===t.type&&t.paths.length?t.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex";case"polygon":{const e=(0,l.pC)(t)&&"polygon"===t.type&&t.rings.length?t.rings[0].length:0;return e<3?"polylineZeroVertices":e<4?"polygonOneVertex":"polygonTwoVertices"}default:return}}var N=n(45900),A=n(52349),q=n(77560),D=n(4943);let L=class extends D.h{constructor(e){super(e),this.type="draw-point",this.helpMessage=void 0}};(0,i._)([(0,h.Cb)()],L.prototype,"type",void 0),(0,i._)([(0,h.Cb)()],L.prototype,"elevation",void 0),(0,i._)([(0,h.Cb)()],L.prototype,"viewType",void 0),(0,i._)([(0,h.Cb)()],L.prototype,"helpMessage",void 0),L=(0,i._)([(0,d.j)("esri.views.interactive.tooltip.DrawPointTooltipInfo")],L);let j=class extends D.h{constructor(e){super(e),this.type="draw-polyline",this.totalLength=p.yP,this.helpMessage=void 0}};(0,i._)([(0,h.Cb)()],j.prototype,"type",void 0),(0,i._)([(0,h.Cb)()],j.prototype,"elevation",void 0),(0,i._)([(0,h.Cb)()],j.prototype,"totalLength",void 0),(0,i._)([(0,h.Cb)()],j.prototype,"viewType",void 0),(0,i._)([(0,h.Cb)()],j.prototype,"helpMessage",void 0),j=(0,i._)([(0,d.j)("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")],j);let Y=class extends D.h{constructor(e){super(e),this.type="draw-polygon",this.area=p.MQ,this.helpMessage=void 0}};(0,i._)([(0,h.Cb)()],Y.prototype,"type",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"elevation",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"area",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"viewType",void 0),(0,i._)([(0,h.Cb)()],Y.prototype,"helpMessage",void 0),Y=(0,i._)([(0,d.j)("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")],Y);let F=class extends D.h{constructor(e){super(e),this.type="draw-rectangle",this.xSize=p.yP,this.ySize=p.yP,this.area=p.MQ}};(0,i._)([(0,h.Cb)()],F.prototype,"type",void 0),(0,i._)([(0,h.Cb)()],F.prototype,"xSize",void 0),(0,i._)([(0,h.Cb)()],F.prototype,"ySize",void 0),(0,i._)([(0,h.Cb)()],F.prototype,"area",void 0),F=(0,i._)([(0,d.j)("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")],F);let H=class extends D.h{constructor(e){super(e),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=p.MQ}};(0,i._)([(0,h.Cb)()],H.prototype,"type",void 0),(0,i._)([(0,h.Cb)()],H.prototype,"radius",void 0),(0,i._)([(0,h.Cb)()],H.prototype,"xSize",void 0),(0,i._)([(0,h.Cb)()],H.prototype,"ySize",void 0),(0,i._)([(0,h.Cb)()],H.prototype,"area",void 0),H=(0,i._)([(0,d.j)("esri.views.interactive.tooltip.DrawCircleTooltipInfo")],H);var J=n(12494),X=n(9856),B=n(59418);let K=class extends((0,a.p)(o.Z.EventedMixin(N.m))){constructor(e){super(e),this._graphic=null,this._createOperationGeometry=null,this.defaultZ=0,this.geometryType=null,this.hasZ=!0,this.labelOptions=new A.Z,this.mode=null,this.snappingManager=null,this.snapToScene=!1,this.tooltip=null,this.tooltipOptions=new q.Z}initialize(){this.internalGraphicsLayer=new x.Z({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer),this.drawOperation=this.makeDrawOperation(),this.handles.add([this.drawOperation.on("vertex-add",(e=>this.onVertexAdd(e))),this.drawOperation.on("vertex-remove",(e=>this.onVertexRemove(e))),this.drawOperation.on("vertex-update",(e=>this.onVertexUpdate(e))),this.drawOperation.on("cursor-update",(e=>this.onCursorUpdate(e))),this.drawOperation.on("complete",(e=>this.onComplete(e))),(0,c.YP)((()=>this.tooltipOptions.enabled),(e=>{this.tooltip=e?new J.u({view:this.view,info:this._tooltipInfo}):(0,l.SC)(this.tooltip)}),c.tX),(0,c.YP)((()=>this._tooltipInfo),(e=>{(0,l.pC)(this.tooltip)&&(this.tooltip.info=e)}),c.tX)]),this.finishToolCreation()}destroy(){this.drawOperation=(0,l.SC)(this.drawOperation),this.tooltip=(0,l.SC)(this.tooltip),this._destroyAllVisualisations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=(0,l.SC)(this.internalGraphicsLayer),this._set("view",null)}get _defaultElevation(){return(0,p.yG)(this.defaultZ,"meters")}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(e){this._set("centered",e),this._updateGraphic()}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}set forceUniformSize(e){this._set("forceUniformSize",e),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(e){this._set("graphicSymbol",e),(0,l.pC)(this._graphic)&&(this._graphic.symbol=e)}get updating(){return this.drawOperation?.updating??!1}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(e){this.drawOperation.onInputEvent(e)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}_createGraphic(e){this._graphic=new r.Z({...this.graphicProperties,geometry:e,symbol:this.graphicSymbol}),this.internalGraphicsLayer.add(this._graphic),this.handles.add(this.initializeGraphic(this._graphic)),this.notifyChange("graphic"),this.handles.add((0,s.kB)((()=>{(0,l.pC)(this._graphic)&&(this.internalGraphicsLayer.remove(this._graphic),this._graphic=(0,l.SC)(this._graphic))})),$)}_destroyAllVisualisations(){this.handles.remove(ee.outline),this.handles.remove(ee.regularVertices),this.handles.remove(ee.activeVertex),this.handles.remove($)}_getCreateOperationGeometry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{operationComplete:!1};if(null==this.drawOperation||0===this.drawOperation.numVertices)return null;const t=this.drawOperation.stagedVertex,n=this.drawOperation.committedVertices,i=n.slice();(0,l.pC)(t)&&i.push(this.drawOperation.coordinateHelper.pointToArray(t));const r=(0,l.pC)(t)?this.drawOperation.coordinateHelper.pointToArray(t):n.splice(-1)[0],o={regularVertices:null,activeVertex:null,full:null,outline:null,circle:null,rectangle:null},a=i.length,s=this.view.spatialReference,p="3d"===this.view.type&&"global"===this.view.viewingMode;switch(this.geometryType){case"point":o.regularVertices=n,o.activeVertex=r,o.full=this.drawOperation.coordinateHelper.arrayToPoint(i[0]);break;case"multipoint":o.regularVertices=n,o.activeVertex=r,a>0&&(o.full=function(e,t){return new T.Z({points:e,spatialReference:t})}(i,s));break;case"polyline":o.regularVertices=n,o.activeVertex=r,a>0&&(o.full=V([i],s,p));break;case"polygon":o.regularVertices=n,o.activeVertex=r,a>0&&(o.full=G([i],s,p,!0));break;case"circle":if(a>0){const t=(0,M.Gn)(this.view,i[0]);if(1===a&&e.operationComplete){const e=i[0],n=t.makeMapPoint(e[0]+ne*this.view.resolution,e[1]);o.circle=E([e,n],t,!0),o.full=(0,l.pC)(o.circle)?o.circle.geometry:null}else 2===a&&(this.forceUniformSize?(o.circle=E(i,t,this.centered),o.full=(0,l.pC)(o.circle)?o.circle.geometry:null):(o.rectangle=function(e,t,n){const i=t.mapToLocalMultiple(e),r=i[0],o=i[1],a=Math.round(o.x-r.x),s=Math.round(o.y-r.y),p=(0,M.Q8)(n?r.x:r.x+a/2,n?r.y:r.y+s/2),c=n?a:a/2,u=n?s:s/2,h=[],y=2*Math.PI/60;function d(e){const t=Math.cos(e),n=Math.sin(e);return(0,M.Q8)(c*t+p.x,u*n+p.y)}for(let l=0;l<60;l++)h.push(d(l*y));h.push(h[0]);const{spatialReference:x,doUnnormalization:f}=t,v=G([(0,l.lV)(h.map((e=>t.localToMap(e))))],x,f,!1),g=t.localToMap(d(Math.PI/2)),_=t.localToMap(d(0)),b=t.localToMap(d(-Math.PI/2)),m=t.localToMap(d(Math.PI));return{geometry:v,midpoints:(0,l.pC)(g)&&(0,l.pC)(_)&&(0,l.pC)(b)&&(0,l.pC)(m)?{top:z(g,x),right:z(_,x),bottom:z(b,x),left:z(m,x)}:null}}(i,t,this.centered),o.full=o.rectangle.geometry))}break;case"rectangle":if(a>0){const t=(0,M.Gn)(this.view,i[0]);if(1===a&&e.operationComplete){const e=i[0],n=t.makeMapPoint(e[0]+ne*this.view.resolution,e[1]);o.rectangle=S([e,n],t,!0),o.full=o.rectangle.geometry}else 2===a&&(o.rectangle=this.forceUniformSize?S(i,t,this.centered):function(e,t,n){let i=t.mapToLocalMultiple(e);if(1===i.length){const e=48,t=i[0];i=[(0,M.Q8)(t.x-e,t.y+e),(0,M.Q8)(t.x+e,t.y-e),(0,M.Q8)(t.x+e,t.y-e),(0,M.Q8)(t.x-e,t.y+e)]}const r=[],o={x:i[0].x,y:i[0].y},a={x:i[1].x,y:i[1].y};if(n){const e=Math.round(a.x-o.x),t=Math.round(a.y-o.y);r.push((0,M.Q8)(o.x-e,o.y-t),(0,M.Q8)(a.x,o.y-t),(0,M.Q8)(a.x,a.y),(0,M.Q8)(o.x-e,a.y))}else r.push((0,M.Q8)(o.x,o.y),(0,M.Q8)(a.x,o.y),(0,M.Q8)(a.x,a.y),(0,M.Q8)(o.x,a.y));return W(G([(0,l.lV)(r.map((e=>t.localToMap(e))))],t.spatialReference,t.doUnnormalization,!0),r,t)}(i,t,this.centered),o.full=o.rectangle.geometry)}break;default:return null}switch(this.geometryType){case"point":case"multipoint":break;case"polyline":case"polygon":a>1&&(o.outline=V([i],s,p));break;case"circle":case"rectangle":(0,l.pC)(o.full)&&"polygon"===o.full.type&&(o.outline=G(o.full.rings,s,p))}return o}initializeGraphic(e){return null}onComplete(e){this._updateGraphic();let t=null;if(this.drawOperation.isCompleted){const e=this._getCreateOperationGeometry({operationComplete:!0});(0,l.pC)(e)&&((0,l.Wi)(this._graphic)?this._createGraphic(e.full):this._graphic.geometry=e.full,t=(0,l.Wg)(this._graphic).clone())}this._createOperationGeometry=null,this.emit("complete",{graphic:t,...e})}onCursorUpdate(e){this._updateGraphic(),this.emit("cursor-update",e)}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}onVertexAdd(e){this._updateGraphic(),this.emit("vertex-add",e)}onVertexRemove(e){this._updateGraphic(),this.emit("vertex-remove",e)}onVertexUpdate(e){this._updateGraphic(),this.emit("vertex-update",e)}_updateGraphic(){const e=this._getCreateOperationGeometry();this._createOperationGeometry=e,(0,l.Wi)(e)?this._destroyAllVisualisations():((0,l.pC)(e.outline)?this.handles.add(this.onOutlineChanged(e.outline),ee.outline):this.handles.remove(ee.outline),(0,l.pC)(e.regularVertices)?this.handles.add(this.onRegularVerticesChanged(e.regularVertices),ee.regularVertices):this.handles.remove(ee.regularVertices),(0,l.pC)(e.activeVertex)?this.handles.add(this.onActiveVertexChanged(e.activeVertex),ee.activeVertex):this.handles.remove(ee.activeVertex),(0,l.pC)(e.full)?(0,l.Wi)(this._graphic)?this._createGraphic(e.full):this._graphic.geometry=e.full:this.handles.remove($))}get _tooltipInfo(){const{drawOperation:e}=this;if(!e)return null;switch(this.geometryType){case"point":return this._drawPointTooltipInfo;case"polyline":return this._drawPolylineTooltipInfo;case"polygon":return this._drawPolygonTooltipInfo;case"rectangle":return this._drawRectangleTooltipInfo;case"circle":return this._drawCircleTooltipInfo;default:return null}}get _drawPointTooltipInfo(){const e=(0,l.yw)(this.graphic,(e=>e.geometry));return(0,l.Wi)(e)||"point"!==e.type||"2d"===this.view.type&&0===this.defaultZ?null:new L({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,viewType:this.view.type,helpMessage:U("point",e)})}get _drawPolylineTooltipInfo(){const e=this._createOperationGeometry,t=(0,l.pC)(e)?e.full:null;if((0,l.Wi)(t)||"polyline"!==t.type)return null;const n=(0,B.Ul)(t,this._elevationMode);return new j({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,totalLength:(0,l.Pt)(n,p.yP),viewType:this.view.type,helpMessage:U("polyline",t)})}get _drawPolygonTooltipInfo(){const e=this._createOperationGeometry,t=(0,l.pC)(e)?e.full:null;if((0,l.Wi)(t)||"polygon"!==t.type)return null;const n=(0,X.k)(t,this._elevationMode);return new Y({tooltipOptions:this.tooltipOptions,elevation:this._elevationTooltipDetail,area:(0,l.Pt)(n,p.MQ),viewType:this.view.type,helpMessage:U("polygon",t)})}get _drawRectangleTooltipInfo(){return(0,l.Wi)(this.drawOperation)?null:new F({tooltipOptions:this.tooltipOptions,xSize:(0,l.Pt)(this._xSize,p.yP),ySize:(0,l.Pt)(this._ySize,p.yP),area:(0,l.Pt)(this._fullGeometryArea,p.MQ)})}get _drawCircleTooltipInfo(){if((0,l.Wi)(this.drawOperation))return null;const e=this.forceUniformSize;return new H({tooltipOptions:this.tooltipOptions,radius:e?(0,l.Pt)(this._circleRadius,p.yP):null,xSize:e?null:(0,l.Pt)(this._xSize,p.yP),ySize:e?null:(0,l.Pt)(this._ySize,p.yP),area:(0,l.Pt)(this._fullGeometryArea,p.MQ)})}get _circleRadius(){const e=this._createOperationGeometry;return(0,l.pC)(e)&&(0,l.pC)(e.circle)&&(0,l.pC)(e.circle.center)&&(0,l.pC)(e.circle.edge)?(0,B.GQ)(e.circle.center,e.circle.edge,this._elevationMode):null}get _xSize(){const e=this._createOperationGeometry;if((0,l.Wi)(e)||(0,l.Wi)(e.rectangle))return null;const{midpoints:t}=e.rectangle;return(0,l.pC)(t)?(0,B.GQ)(t.left,t.right,this._elevationMode):null}get _ySize(){const e=this._createOperationGeometry;if((0,l.Wi)(e)||(0,l.Wi)(e.rectangle))return null;const{midpoints:t}=e.rectangle;return(0,l.pC)(t)?(0,B.GQ)(t.top,t.bottom,this._elevationMode):null}get _fullGeometryArea(){const e=this._createOperationGeometry,t=(0,l.pC)(e)?e.full:null;return(0,l.Wi)(t)||"polygon"!==t.type?null:(0,X.k)(t,this._elevationMode)}get _elevationTooltipDetail(){return{mode:this.drawOperation.elevationInfo.mode,...this._vertexTooltipElevation}}get _vertexTooltipElevation(){const{tooltipOptions:e,view:t,drawOperation:n}=this;if((0,l.Wi)(n))return this._defaultElevation;const i=n.stagedVertex??n.lastVertex;if((0,l.Wi)(i)||"2d"===t.type)return this._defaultElevation;const r={mode:e.elevation.mode,offset:0},o=((0,f.vQ)(t,i,n.elevationInfo,r)??0)*(0,u._R)(i.spatialReference);return(0,p.yG)(o,"meters")}get _elevationMode(){return this.drawOperation.isDraped?"on-the-ground":"absolute-height"}};(0,i._)([(0,h.Cb)()],K.prototype,"_createOperationGeometry",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"_defaultElevation",null),(0,i._)([(0,h.Cb)({value:!0})],K.prototype,"centered",null),(0,i._)([(0,h.Cb)({nonNullable:!0})],K.prototype,"defaultZ",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"drawOperation",void 0),(0,i._)([(0,h.Cb)({value:!0})],K.prototype,"enabled",null),(0,i._)([(0,h.Cb)({value:!0})],K.prototype,"forceUniformSize",null),(0,i._)([(0,h.Cb)({constructOnly:!0})],K.prototype,"geometryType",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"graphic",null),(0,i._)([(0,h.Cb)({constructOnly:!0})],K.prototype,"graphicProperties",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"graphicSymbol",null),(0,i._)([(0,h.Cb)({constructOnly:!0})],K.prototype,"hasZ",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0,type:A.Z})],K.prototype,"labelOptions",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0})],K.prototype,"mode",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"snappingManager",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"snapToScene",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"tooltip",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0,type:q.Z})],K.prototype,"tooltipOptions",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],K.prototype,"type",void 0),(0,i._)([(0,h.Cb)({readOnly:!0})],K.prototype,"updating",null),(0,i._)([(0,h.Cb)({constructOnly:!0,nonNullable:!0})],K.prototype,"view",void 0),(0,i._)([(0,h.Cb)()],K.prototype,"_tooltipInfo",null),(0,i._)([(0,h.Cb)()],K.prototype,"_drawPointTooltipInfo",null),(0,i._)([(0,h.Cb)()],K.prototype,"_drawPolylineTooltipInfo",null),(0,i._)([(0,h.Cb)()],K.prototype,"_drawPolygonTooltipInfo",null),(0,i._)([(0,h.Cb)()],K.prototype,"_drawRectangleTooltipInfo",null),(0,i._)([(0,h.Cb)()],K.prototype,"_drawCircleTooltipInfo",null),(0,i._)([(0,h.Cb)()],K.prototype,"_circleRadius",null),(0,i._)([(0,h.Cb)()],K.prototype,"_xSize",null),(0,i._)([(0,h.Cb)()],K.prototype,"_ySize",null),(0,i._)([(0,h.Cb)()],K.prototype,"_fullGeometryArea",null),(0,i._)([(0,h.Cb)()],K.prototype,"_elevationTooltipDetail",null),(0,i._)([(0,h.Cb)()],K.prototype,"_vertexTooltipElevation",null),(0,i._)([(0,h.Cb)()],K.prototype,"_elevationMode",null),K=(0,i._)([(0,d.j)("esri.views.draw.DrawGraphicTool")],K);const $="create-operation-graphic",ee={outline:"outline-visual",regularVertices:"regular-vertices-visual",activeVertex:"active-vertex-visual"};function te(e){switch(e){case"point":case"polyline":case"polygon":case"multipoint":return e;case"circle":case"rectangle":return"segment"}}const ne=48},92583:(e,t,n)=>{n.d(t,{NI:()=>b,lv:()=>g,mO:()=>f,nn:()=>x,ny:()=>_});var i=n(92026),r=n(47898),o=n(88396),a=n(11186),s=n(71353),l=n(82218),p=n(11185),c=n(254),u=n(12225),h=n(29014),y=n(34778),d=n(59418);function x(e,t){return v(e,t,!1)}function f(e,t){return v(e,t,!0)}function v(e,t,n){if(e instanceof y.y){if(e.operation instanceof c.z)return function(e,t){const n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-1:1,i=(0,s.f)(n*e.dx,n*e.dy,n*e.dz);(0,a.a)(t.origin,t.origin,i)}(e.operation,t,n),!0;if(e.operation instanceof u.S)return function(e,t){const n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-e.angle:e.angle;(0,a.I)(t.basis1,t.basis1,s.Z,n),(0,a.I)(t.basis2,t.basis2,s.Z,n)}(e.operation,t,n),!0;if(e.operation instanceof h.q)return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=n?1/e.factor1:e.factor1,r=n?1/e.factor2:e.factor2;(0,a.g)(t.basis1,t.basis1,i),(0,a.g)(t.basis2,t.basis2,r),(0,o.u)(t.origin,t.origin,e.origin,e.axis1,i),(0,o.u)(t.origin,t.origin,e.origin,e.axis2,r)}(e.operation,t,n),!0}return!1}function g(e,t,n,i){i||(i=(0,l.a)());const r=(0,o.s)(p.qW.get(),e[1],-e[0]),a=(0,o.s)(p.qW.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),s=(0,o.s)(p.qW.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),c=p.qW.get();t.components.forEach((t=>t.vertices.forEach((t=>{const n=t.pos;(0,o.s)(c,(0,o.h)(e,n),(0,o.h)(r,n)),(0,o.y)(a,a,c),(0,o.z)(s,s,c)}))));const u=1e-6,h=(0,o.s)(p.qW.get(),s[0]-a[0]<u?n/2:0,s[1]-a[1]<u?n/2:0);return(0,o.a)(a,a,h),(0,o.j)(s,s,h),(0,o.b)(i.basis1,e,(s[0]-a[0])/2),(0,o.b)(i.basis2,r,(s[1]-a[1])/2),(0,o.s)(i.origin,a[0]*e[0]+a[1]*r[0],a[0]*e[1]+a[1]*r[1]),(0,o.j)(i.origin,i.origin,i.basis1),(0,o.j)(i.origin,i.origin,i.basis2),i}function _(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4?arguments[4]:void 0;r||(r=(0,l.a)()),t.toRenderCoords(e.origin,n,r.origin);const o=p.WM.get();(0,a.a)(o,e.origin,e.basis1),(0,a.a)(o,o,e.basis2),t.toRenderCoords(o,n,o);const s=p.WM.get();(0,a.a)(s,e.origin,e.basis1),(0,a.b)(s,s,e.basis2),t.toRenderCoords(s,n,s);const c=p.WM.get();(0,a.b)(c,e.origin,e.basis1),(0,a.b)(c,c,e.basis2),t.toRenderCoords(c,n,c);const u=p.WM.get();(0,a.b)(u,e.origin,e.basis1),(0,a.a)(u,u,e.basis2),t.toRenderCoords(u,n,u);const h=(0,a.h)(p.WM.get(),o,s,.5);(0,a.b)(h,h,r.origin);const y=(0,a.h)(p.WM.get(),c,u,.5);(0,a.b)(y,r.origin,y),(0,a.h)(r.basis1,h,y,.5);const d=(0,a.h)(p.WM.get(),u,o,.5);(0,a.b)(d,d,r.origin);const x=(0,a.h)(p.WM.get(),s,c,.5);(0,a.b)(x,r.origin,x),(0,a.h)(r.basis2,d,x,.5);const f=(0,a.f)(p.WM.get(),r.basis1,r.basis2),v=(0,a.f)(f,f,r.basis1);return(0,a.n)(v,v),(0,a.g)(r.basis2,v,(0,a.e)(r.basis2,v)),(0,a.g)(r.basis1,r.basis1,1+i/(0,a.l)(r.basis1)),(0,a.g)(r.basis2,r.basis2,1+i/(0,a.l)(r.basis2)),(0,l.u)(r),r}function b(e,t,n,o){const s=p.WM.get();(0,a.b)(s,(0,a.b)(s,e.origin,e.basis1),e.basis2);const l=p.WM.get();(0,a.z)(l,s,e.basis1,2);const c=p.WM.get();(0,a.z)(c,l,e.basis2,2);const u=p.WM.get();(0,a.z)(u,s,e.basis2,2),s[2]=l[2]=c[2]=u[2]=t;const h=o?"on-the-ground":"absolute-height",y=(0,r.Fp)((0,d.bZ)(s,l,n,h),(0,d.bZ)(u,c,n,h)),x=(0,r.Fp)((0,d.bZ)(l,c,n,h),(0,d.bZ)(s,u,n,h));return(0,i.Wi)(x)||(0,i.Wi)(y)?null:[y,x]}},9856:(e,t,n)=>{n.d(t,{f:()=>Z,k:()=>I});var i=n(92026),r=n(47898),o=n(68860),a=n(79347),s=n(11186),l=n(71353),p=n(79803),c=n(55652),u=n(74702),h=n(25003);function y(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]};return x(e,t)}function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]};return x(e,t,!1)}function x(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.hasZ;const a=(0,h.m)(e.spatialReference),y=(0,o.oq)(a);if((0,i.Wi)(y))return null;const d=(e,t)=>!(t.length<2)&&((0,s.s)(e,t[0],t[1],n&&t[2]||0),!0);let x=0;for(const i of e.rings){const n=i.length;if(n<3)continue;const{positionsWorldCoords:r}=t;for(;r.length<n;)r.push((0,l.c)());const o=f,h=(0,s.s)(v,0,0,0),y=1/n;for(let t=0;t<n;t++){if(!d(o,i[t]))return null;if(!(0,p.SH)(o,e.spatialReference,r[t],a))return null;(0,s.z)(h,h,r[t],y)}const _=(0,c.zk)(r[0],r[1],h,(0,c.re)());if(0===(0,s.p)((0,c.mJ)(_)))continue;for(let e=0;e<n;e++)(0,c.tx)(_,h,r[e],r[e]);const b=g(r);for(let e=0;e<b.length;e+=3)x+=(0,u.wu)(r[b[e]],r[b[e+1]],r[b[e+2]])}return(0,r.ne)(x,y)}const f=(0,l.c)(),v=(0,l.c)();function g(e){return(0,a.e)(function(e){const t=new Float64Array(2*e.length);for(let n=0;n<e.length;++n){const i=e[n],r=2*n;t[r+0]=i[0],t[r+1]=i[1]}return t}(e),[],2)}n(59486);var _=n(2170),b=n(15559),m=n(47072),w=n(78952);function C(e){const{spatialReference:t}=e;return(0,m.T)(t,M,O,T,e)}function M(e){return(0,r.ne)(Math.abs((0,b.p8)([e],"square-meters")[0]),"square-meters")}function O(e){try{return(0,r.ne)(Math.abs((0,_.geodesicArea)(e,"square-meters")),"square-meters")}catch(t){return null}}function T(e){const t=[];return(0,p.K2)(e,t)?(0,r.ne)(Math.abs((0,b.p8)([{type:"polygon",rings:t,spatialReference:w.Z.WGS84}],"square-meters")[0]),"square-meters"):null}function I(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{positionsWorldCoords:[]};if("on-the-ground"===t){const t=C(e);return(0,i.pC)(t)?t:d(e,n)}return y(e,n)}function Z(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{positionsWorldCoords:[]};return I(e,"on-the-ground",t)}}}]);
//# sourceMappingURL=1842.da28c94a.chunk.js.map