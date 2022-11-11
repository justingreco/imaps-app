"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8950],{80573:(t,e,n)=>{n.d(e,{Z:()=>d});var s=n(27366),i=n(85015),o=n(11582),r=n(79056),a=n(46784),l=n(92026),c=n(49861),u=(n(63780),n(25243),n(69912));let h=0,p=class extends((0,a.eC)((0,o.J)((0,r.IG)(i.Z)))){constructor(t){super(t),this.id=`${Date.now().toString(16)}-analysis-${h++}`,this.title=null}get parent(){return this._get("parent")}set parent(t){const e=this.parent;if((0,l.pC)(e))switch(e.type){case"line-of-sight":case"dimension":e.releaseAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",t)}get isEditable(){return this.requiredPropertiesForEditing.every(l.pC)}};(0,s._)([(0,c.Cb)({type:String,constructOnly:!0,clonable:!1})],p.prototype,"id",void 0),(0,s._)([(0,c.Cb)({type:String})],p.prototype,"title",void 0),(0,s._)([(0,c.Cb)({constructOnly:!0})],p.prototype,"type",void 0),(0,s._)([(0,c.Cb)({clonable:!1,value:null})],p.prototype,"parent",null),(0,s._)([(0,c.Cb)({readOnly:!0})],p.prototype,"isEditable",null),(0,s._)([(0,c.Cb)({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",void 0),p=(0,s._)([(0,u.j)("esri.analysis.Analysis")],p);const d=p},70148:(t,e,n)=>{n.d(e,{RN:()=>c,e9:()=>l,hU:()=>h,uu:()=>u});var s=n(51995),i=n(42265),o=n(28357);function r(t,e){const n=t.a*e;return(0,o.EX)(t)>225?new s.Z([0,0,0,n]):new s.Z([255,255,255,n])}function a(t,e){const n=new s.Z(t);return n.a*=e,n}function l(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a(i.Z.analysisTheme.accentColor,t)}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r(l(),t)}function u(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a(i.Z.analysisTheme.textColor,t)}function h(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r(u(),t)}},58971:(t,e,n)=>{n.d(e,{G6:()=>T,Ie:()=>V,J9:()=>C,RF:()=>g,U1:()=>b,vY:()=>l,ym:()=>m});var s=n(92026),i=n(77981);const o=(t,e,n)=>[e,n],r=(t,e,n)=>[e,n,t[2]],a=(t,e,n)=>[e,n,t[2],t[3]];function l(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:(0,s.pC)(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function c(t,e){let{scale:n,translate:s}=t;return Math.round((e-s[0])/n[0])}function u(t,e){let{scale:n,translate:s}=t;return Math.round((s[1]-e)/n[1])}function h(t,e,n){const s=[];let i,o,r,a;for(let l=0;l<n.length;l++){const h=n[l];l>0?(r=c(t,h[0]),a=u(t,h[1]),r===i&&a===o||(s.push(e(h,r-i,a-o)),i=r,o=a)):(i=c(t,h[0]),o=u(t,h[1]),s.push(e(h,i,o)))}return s.length>0?s:null}function p(t,e){let{scale:n,translate:s}=t;return e*n[0]+s[0]}function d(t,e){let{scale:n,translate:s}=t;return s[1]-e*n[1]}function y(t,e,n){const s=new Array(n.length);if(!n.length)return s;const[i,o]=t.scale;let r=p(t,n[0][0]),a=d(t,n[0][1]);s[0]=e(n[0],r,a);for(let l=1;l<n.length;l++){const t=n[l];r+=t[0]*i,a-=t[1]*o,s[l]=e(t,r,a)}return s}function v(t,e,n){const s=new Array(n.length);for(let i=0;i<n.length;i++)s[i]=y(t,e,n[i]);return s}function w(t,e,n,s,i){return e.points=function(t,e,n,s){return h(t,n?s?a:r:s?r:o,e)}(t,n.points,s,i)??[],e}function g(t,e,n,s,i){return e.x=c(t,n.x),e.y=u(t,n.y),e!==n&&(s&&(e.z=n.z),i&&(e.m=n.m)),e}function _(t,e,n,s,i){const l=function(t,e,n,s){const i=[],l=n?s?a:r:s?r:o;for(let o=0;o<e.length;o++){const n=h(t,l,e[o]);n&&n.length>=3&&i.push(n)}return i.length?i:null}(t,n.rings,s,i);return l?(e.rings=l,e):null}function f(t,e,n,s,i){const l=function(t,e,n,s){const i=[],l=n?s?a:r:s?r:o;for(let o=0;o<e.length;o++){const n=h(t,l,e[o]);n&&n.length>=2&&i.push(n)}return i.length?i:null}(t,n.paths,s,i);return l?(e.paths=l,e):null}function m(t,e){return t&&e?(0,i.wp)(e)?g(t,{},e,!1,!1):(0,i.l9)(e)?f(t,{},e,!1,!1):(0,i.oU)(e)?_(t,{},e,!1,!1):(0,i.aW)(e)?w(t,{},e,!1,!1):(0,i.YX)(e)?function(t,e,n,s,i){return e.xmin=c(t,n.xmin),e.ymin=u(t,n.ymin),e.xmax=c(t,n.xmax),e.ymax=u(t,n.ymax),e!==n&&(s&&(e.zmin=n.zmin,e.zmax=n.zmax),i&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}(t,{},e,!1,!1):null:null}function C(t,e,n,i,l){return(0,s.pC)(n)&&(e.points=function(t,e,n,s){return y(t,n?s?a:r:s?r:o,e)}(t,n.points,i,l)),e}function b(t,e,n,i,o){return(0,s.Wi)(n)||(e.x=p(t,n.x),e.y=d(t,n.y),e!==n&&(i&&(e.z=n.z),o&&(e.m=n.m))),e}function V(t,e,n,i,l){return(0,s.pC)(n)&&(e.rings=function(t,e,n,s){return v(t,n?s?a:r:s?r:o,e)}(t,n.rings,i,l)),e}function T(t,e,n,i,l){return(0,s.pC)(n)&&(e.paths=function(t,e,n,s){return v(t,n?s?a:r:s?r:o,e)}(t,n.paths,i,l)),e}},74509:(t,e,n)=>{n.d(e,{BK:()=>V,Jn:()=>c,Lt:()=>p,Ou:()=>y,RL:()=>h,VW:()=>l,W_:()=>m,Zz:()=>r,jG:()=>C,mF:()=>a,vQ:()=>v,vu:()=>u,zx:()=>w});var s=n(92026),i=n(88152);function o(t){return t?C:b}function r(t,e){return(0,s.Wi)(e)||!e.mode?o(t).mode:e.mode}function a(t,e){return(0,s.pC)(e)?e:o(t)}function l(t,e){return r(!!(0,s.pC)(t)&&t.hasZ,e)}function c(t,e){return a(!!(0,s.pC)(t)&&t.hasZ,e)}function u(t){const e=d(t);return l(t.geometry,e)}function h(t){const e=d(t),n=l(t.geometry,e);return{mode:n,offset:(0,s.pC)(e)&&"on-the-ground"!==n?(0,s.Pt)(e.offset,0)*(0,i.Z7)((0,s.Pt)(e.unit,"meters")):0}}function p(t){if("on-the-ground"===u(t))return!1;const e=d(t),n=(0,s.pC)(e)&&e.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||"0"===n)}function d(t){return t.layer&&"elevationInfo"in t.layer?t.layer.elevationInfo:null}function y(t,e,n){if((0,s.Wi)(n)||!n.mode)return;const i=t.hasZ?t.z:0,o=(0,s.pC)(n.offset)?n.offset:0;switch(n.mode){case"absolute-height":return i-o;case"on-the-ground":return 0;case"relative-to-ground":return i-((0,s.Pt)(e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"ground"),0)+o);case"relative-to-scene":return i-((0,s.Pt)(e.elevationProvider.getElevation(t.x,t.y,t.z,t.spatialReference,"scene"),0)+o)}}function v(t,e,n){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return g(t,e.x,e.y,e.hasZ?e.z:0,e.spatialReference,n,s)}function w(t,e,n,s){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return g(t,e[0],e[1],e.length>2?e[2]:0,n,s,i)}function g(t,e,n,i,o,r){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;if((0,s.Wi)(r))return;const l=(0,s.pC)(a)?a.mode:"absolute-height";if("on-the-ground"===l)return 0;const{absoluteZ:c}=_(e,n,i,o,t,r);return f(c,e,n,i,o,t,a,l)}function _(t,e,n,i,o,r){const a=(0,s.pC)(r.offset)?r.offset:0;switch(r.mode){case"absolute-height":return{absoluteZ:n+a,elevation:0};case"on-the-ground":{const n=(0,s.Pt)(o.elevationProvider.getElevation(t,e,0,i,"ground"),0);return{absoluteZ:n,elevation:n}}case"relative-to-ground":{const r=(0,s.Pt)(o.elevationProvider.getElevation(t,e,n,i,"ground"),0);return{absoluteZ:n+r+a,elevation:r}}case"relative-to-scene":{const r=(0,s.Pt)(o.elevationProvider.getElevation(t,e,n,i,"scene"),0);return{absoluteZ:n+r+a,elevation:r}}}}function f(t,e,n,i,o,r,a,l){const c=(0,s.pC)(a)&&(0,s.pC)(a.offset)?a.offset:0;switch(l){case"absolute-height":return t-c;case"relative-to-ground":return t-((0,s.Pt)(r.elevationProvider.getElevation(e,n,i,o,"ground"),0)+c);case"relative-to-scene":return t-((0,s.Pt)(r.elevationProvider.getElevation(e,n,i,o,"scene"),0)+c)}}function m(t,e){if((0,s.Wi)(e))return!1;const{mode:n}=e;return(0,s.pC)(n)&&("scene"===t&&"relative-to-scene"===n||"ground"===t&&"absolute-height"!==n)}const C={mode:"absolute-height",offset:0},b={mode:"on-the-ground",offset:null};function V(t,e){return t===e||(0,s.pC)(t)&&(0,s.pC)(e)&&t.mode===e.mode&&t.offset===e.offset}},48681:(t,e,n)=>{n.d(e,{y1:()=>r});n(11186);var s=n(71353),i=(n(2170),n(80885)),o=(n(79803),n(78952));n(15559),n(80064);function r(t){return"mouse"!==t.pointerType||0===t.button}const a=(0,s.c)(),l=(0,s.c)(),c=(0,s.c)();new i.Z({rings:[[a,l,c]],spatialReference:o.Z.WGS84}),(0,s.c)()},92382:(t,e,n)=>{n.d(e,{G:()=>i,e:()=>s});class s{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.screenPoint=t,this.result=e}}class i{constructor(t,e){this.scenePoint=t,this.mapPoint=e}}},86509:(t,e,n)=>{n.d(e,{f:()=>l});var s=n(27366),i=n(94172),o=n(49861),r=(n(63780),n(25243),n(69912)),a=n(45900);let l=class extends a.m{constructor(t){super(t)}initialize(){this.addHandles((0,i.YP)((()=>this.analysisViewData.visible),(t=>this.visible=t),i.tX))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};(0,s._)([(0,o.Cb)({constructOnly:!0})],l.prototype,"analysis",void 0),(0,s._)([(0,o.Cb)()],l.prototype,"analysisViewData",void 0),l=(0,s._)([(0,r.j)("esri.views.interactive.AnalysisToolBase")],l)},28357:(t,e,n)=>{n.d(e,{EX:()=>o});var s=n(51995);function i(t){let{r:e,g:n,b:i,a:o}=t;return o<1&&(e=Math.round(o*e+255*(1-o)),n=Math.round(o*n+255*(1-o)),i=Math.round(o*i+255*(1-o))),new s.Z({r:e,g:n,b:i})}function o(t){const{r:e,g:n,b:s}=i(t);return.2126*e+.7152*n+.0722*s}},40085:(t,e,n)=>{n.d(e,{O:()=>d});var s,i=n(27366),o=n(14921),r=n(100),a=n(92026),l=n(66978),c=n(94172),u=n(49861),h=(n(63780),n(25243),n(69912)),p=n(32845);!function(t){t[t.PENDING=0]="PENDING",t[t.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",t[t.RUNNING=2]="RUNNING"}(s||(s={}));let d=class extends p.V{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(t),this.analysisView=null,this._reconnectViewTask=null,this._analysisBaseHandles=new r.Z,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const e=t?.analysis;(0,a.pC)(e)?this.analysis=e:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(t){const{analysis:e,...n}=t;return n}initialize(){this._analysisBaseHandles.add([(0,c.YP)((()=>(0,a.yw)(this.analysis,(t=>{let{parent:e}=t;return e}))),(t=>{this._parentChangeFromReconnect||t===this.view||this._set("isAnalysisOwner",!1);const e=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,e&&this._scheduleViewReconnect()}),c.Z_),(0,c.YP)((()=>({view:this.view,ready:(0,a.pC)(this.view)&&this.view.ready,supported:this.supported})),((t,e)=>{let{view:n}=t,{view:s}=e;n!==s&&(this._startUserOperation=(0,a.IM)(this._startUserOperation),this._disconnectFromView(s)),this._scheduleViewReconnect()}),c.tX),(0,c.YP)((()=>this.analysis.isEditable),((t,e)=>{(0,a.Wi)(this.analysisView)||(t&&!e&&(0,a.Wi)(this.tool)?this.createTool():!t&&e&&(0,a.pC)(this.tool)&&!this.tool.active&&this.removeTool())}))])}destroy(){this._analysisBaseHandles=(0,a.SC)(this._analysisBaseHandles),this._reconnectViewTask=(0,a.IM)(this._reconnectViewTask),this._startUserOperation=(0,a.IM)(this._startUserOperation),(0,a.pC)(this.analysisView)&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),(0,a.pC)(this.analysis)&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(t){t!==this._get("analysis")&&(this._startUserOperation=(0,a.IM)(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(t),this._scheduleViewReconnect())}get ready(){return(0,a.pC)(this.analysisView)&&!this.connectingToView}get connectingToView(){return(0,a.pC)(this._reconnectViewTask)}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(t){this._set("visible",t),(0,a.pC)(this.analysisView)&&(this.analysisView.visible=t)}async start(){this.clear();const t={task:null,abort:null,state:s.PENDING},e=(0,o.vr)((async e=>{t.state=s.WAIT_FOR_VIEW_READY,await(0,c.N1)((()=>this.ready),e),t.state=s.RUNNING,this.createTool({interactive:!0})}));return t.task=e,t.abort=()=>e.abort(),this._startUserOperation=t,e.promise}clear(){this._startUserOperation=(0,a.IM)(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(t){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=(0,a.IM)(this._reconnectViewTask);const t=(0,o.vr)((async e=>{try{await this._reconnectView(e)}catch(n){if((0,l.k_)(e),!(0,l.D_)(n))return void this.logger.warn("Failed to use analysis in view model",n);throw n}finally{t===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=t}async _reconnectView(t){const{view:e}=this,n=(0,a.pC)(e)&&e.ready&&this.supported,s=this.analysis;if(this._startUserOperation=y(this._startUserOperation),this._disconnectFromView(e),n&&!(0,a.Wi)(e)&&!(0,a.Wi)(s)){if(this.isAnalysisOwner){if((0,a.pC)(s.parent))return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,e.analyses.add(s)}this.analysisView=await e.whenAnalysisView(s),(0,l.Hc)(t)?this._startUserOperation=y(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(t){this.removeTool(),(0,a.pC)(t)&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,t.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(t){(0,a.pC)(this.analysisView)&&!this.isAnalysisOwner&&(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",t),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function y(t){return(0,a.pC)(t)&&t.state>=s.RUNNING?(t.abort(),null):t}(0,i._)([(0,u.Cb)({nonNullable:!0})],d.prototype,"analysis",null),(0,i._)([(0,u.Cb)()],d.prototype,"analysisView",void 0),(0,i._)([(0,u.Cb)()],d.prototype,"ready",null),(0,i._)([(0,u.Cb)()],d.prototype,"connectingToView",null),(0,i._)([(0,u.Cb)({readOnly:!0})],d.prototype,"isAnalysisOwner",null),(0,i._)([(0,u.Cb)({type:Boolean,value:!0})],d.prototype,"visible",null),(0,i._)([(0,u.Cb)()],d.prototype,"_reconnectViewTask",void 0),d=(0,i._)([(0,h.j)("esri.widgets.support.InteractiveAnalysisViewModel")],d)},32845:(t,e,n)=>{n.d(e,{V:()=>h});var s=n(27366),i=n(85015),o=n(100),r=n(32718),a=n(92026),l=n(94172),c=n(49861),u=(n(63780),n(25243),n(69912));let h=class extends i.Z{constructor(t){super(t),this.tool=null,this._baseHandles=new o.Z,this._loggedUnsupportedErrorOnce=!1,this.logger=r.Z.getLogger(this.declaredClass),t&&null!=t.visible&&(this.visible=t.visible)}initialize(){this._baseHandles.add((0,l.YP)((()=>({ready:(0,a.pC)(this.view)&&this.view.ready,supported:this.supported})),(t=>{let{ready:e,supported:n}=t;!e||n||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)}),l.tX))}destroy(){this.removeTool(),this.view=null,this._baseHandles=(0,a.SC)(this._baseHandles)}get active(){return(0,a.pC)(this.tool)&&this.tool.active}get disabled(){return(0,a.Wi)(this.view)||!this.view.ready||!this.supported}get supported(){return(0,a.Wi)(this.view)||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(t){if(t===this.view)return;this.removeTool(),this._set("view",t);const e="tools";this._baseHandles.remove(e),(0,a.Wi)(t)||this._baseHandles.add(t.tools.on("after-remove",(t=>{t.item===this.tool&&this._set("tool",null)})),e)}set visible(t){this._set("visible",t),(0,a.pC)(this.tool)&&(this.tool.visible=t)}createTool(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{interactive:!1};if(this.removeTool(),(0,a.Wi)(this.view)||!this.view.ready||!this.supported)return;const e=this.constructTool();e.created?(this._set("tool",e),this.view.tools.add(e)):t.interactive?(this._set("tool",e),this.view.addAndActivateTool(e),(0,l.gx)((()=>e.created),(()=>{e.active&&(0,a.pC)(this.view)&&(this.view.activeTool=null)}),{initial:!0,once:!0})):e.destroy()}removeTool(){const t=this.tool;if((0,a.Wi)(t))return;const e=(0,a.yw)(this.view,(t=>t.tools));(0,a.pC)(e)?e.remove(t):t.destroy(),this._set("tool",null)}logError(){this.logger.error(...arguments)}};(0,s._)([(0,c.Cb)({constructOnly:!0})],h.prototype,"tool",void 0),(0,s._)([(0,c.Cb)()],h.prototype,"active",null),(0,s._)([(0,c.Cb)()],h.prototype,"disabled",null),(0,s._)([(0,c.Cb)()],h.prototype,"supported",null),(0,s._)([(0,c.Cb)({value:null})],h.prototype,"view",null),(0,s._)([(0,c.Cb)({type:Boolean,value:!0})],h.prototype,"visible",null),h=(0,s._)([(0,u.j)("esri.widgets.support.InteractiveToolViewModel")],h)}}]);
//# sourceMappingURL=8950.ae8d818a.chunk.js.map