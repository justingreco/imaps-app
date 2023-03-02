"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[6526],{80573:(e,t,s)=>{s.d(t,{Z:()=>d});var i=s(27366),n=s(85015),r=s(11582),a=s(79056),o=s(46784),l=s(92026),h=s(49861),c=(s(25243),s(63780),s(69912));let p=0,u=class extends((0,o.eC)((0,r.J)((0,a.IG)(n.Z)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${p++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if((0,l.pC)(t))switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(l.pC)}};(0,i._)([(0,h.Cb)({type:String,constructOnly:!0,clonable:!1})],u.prototype,"id",void 0),(0,i._)([(0,h.Cb)({type:String})],u.prototype,"title",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0})],u.prototype,"type",void 0),(0,i._)([(0,h.Cb)({clonable:!1,value:null})],u.prototype,"parent",null),(0,i._)([(0,h.Cb)({readOnly:!0})],u.prototype,"isEditable",null),(0,i._)([(0,h.Cb)({readOnly:!0})],u.prototype,"requiredPropertiesForEditing",void 0),u=(0,i._)([(0,c.j)("esri.analysis.Analysis")],u);const d=u},70148:(e,t,s)=>{s.d(t,{RN:()=>h,e9:()=>l,hU:()=>p,uu:()=>c});var i=s(51995),n=s(42265),r=s(28357);function a(e,t){const s=e.a*t;return(0,r.EX)(e)>225?new i.Z([0,0,0,s]):new i.Z([255,255,255,s])}function o(e,t){const s=new i.Z(e);return s.a*=t,s}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o(n.Z.analysisTheme.accentColor,e)}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a(l(),e)}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o(n.Z.analysisTheme.textColor,e)}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a(c(),e)}},97942:(e,t,s)=>{function i(e){let t,s,i=[],r=!1;return function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return r&&t===this&&n(o,i)||(s=e.apply(this,o),t=this,i=o,r=!0),s}}function n(e,t){if(e.length!==t.length)return!1;for(let s=0;s<e.length;++s)if(e[s]!==t[s])return!1;return!0}s.d(t,{H:()=>i})},48681:(e,t,s)=>{s.d(t,{y1:()=>a});s(11186);var i=s(71353),n=(s(2170),s(80885)),r=(s(79803),s(78952));s(15559),s(80064);function a(e){return"mouse"!==e.pointerType||0===e.button}const o=(0,i.c)(),l=(0,i.c)(),h=(0,i.c)();new n.Z({rings:[[o,l,h]],spatialReference:r.Z.WGS84}),(0,i.c)()},86509:(e,t,s)=>{s.d(t,{f:()=>l});var i=s(27366),n=s(94172),r=s(49861),a=(s(25243),s(63780),s(69912)),o=s(45900);let l=class extends o.m{constructor(e){super(e)}initialize(){this.addHandles((0,n.YP)((()=>this.analysisViewData.visible),(e=>this.visible=e),n.tX))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};(0,i._)([(0,r.Cb)({constructOnly:!0})],l.prototype,"analysis",void 0),(0,i._)([(0,r.Cb)()],l.prototype,"analysisViewData",void 0),l=(0,i._)([(0,a.j)("esri.views.interactive.AnalysisToolBase")],l)},65367:(e,t,s)=>{s.d(t,{u:()=>d});var i=s(42537),n=s(70758),r=s(40281),a=s(94172),o=s(22006),l=s(76014),h=s(98173);var c=s(61394),p=s(38856);const u=new Map;function d(e){if(!u.has(e)){const t=function(e,t){const s=new h.Z({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:t?.distance??l.c.distance,touchSensitivityMultiplier:t?.touchSensitivityMultiplier??l.c.touchSensitivityMultiplier});return{...(0,a.YP)((()=>e.map?.allLayers?.toArray()??[]),(e=>{s.featureSources=new r.Z(e.map((e=>new o.Z({layer:e,enabled:!0}))))}),a.nn),options:s}}(e,{distance:10}),s=function(e,t){return new p.N({view:e,options:t,snappingEnginesFactory:(t,s)=>[new c.U({view:e,spatialReference:e.spatialReference,options:s})]})}(e,t.options);u.set(e,{referenceCount:0,snappingManager:s,remove:()=>{t.remove(),s.destroy()}})}const t=u.get(e);t.referenceCount++;const s=(0,i.kB)((()=>function(e,t){t.referenceCount--,t.referenceCount>0||(0,n.Y)((()=>{0===t.referenceCount&&(t.remove(),u.delete(e))}))}(e,t)));return{snappingManager:t.snappingManager,...s}}},28357:(e,t,s)=>{s.d(t,{EX:()=>r});var i=s(51995);function n(e){let{r:t,g:s,b:n,a:r}=e;return r<1&&(t=Math.round(r*t+255*(1-r)),s=Math.round(r*s+255*(1-r)),n=Math.round(r*n+255*(1-r))),new i.Z({r:t,g:s,b:n})}function r(e){const{r:t,g:s,b:i}=n(e);return.2126*t+.7152*s+.0722*i}},40085:(e,t,s)=>{s.d(t,{O:()=>d});var i,n=s(27366),r=s(14921),a=s(100),o=s(92026),l=s(66978),h=s(94172),c=s(49861),p=(s(25243),s(63780),s(69912)),u=s(32845);!function(e){e[e.PENDING=0]="PENDING",e[e.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",e[e.RUNNING=2]="RUNNING"}(i||(i={}));let d=class extends u.V{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(e),this.analysisView=null,this._reconnectViewTask=null,this._analysisBaseHandles=new a.Z,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const t=e?.analysis;(0,o.pC)(t)?this.analysis=t:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(e){const{analysis:t,...s}=e;return s}initialize(){this._analysisBaseHandles.add([(0,h.YP)((()=>(0,o.yw)(this.analysis,(e=>{let{parent:t}=e;return t}))),(e=>{this._parentChangeFromReconnect||e===this.view||this._set("isAnalysisOwner",!1);const t=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,t&&this._scheduleViewReconnect()}),h.Z_),(0,h.YP)((()=>({view:this.view,ready:(0,o.pC)(this.view)&&this.view.ready,supported:this.supported})),((e,t)=>{let{view:s}=e;const i=t?.view;s!==i&&(this._startUserOperation=(0,o.IM)(this._startUserOperation),this._disconnectFromView(i)),this._scheduleViewReconnect()}),h.tX),(0,h.YP)((()=>this.analysis.isEditable),((e,t)=>{(0,o.Wi)(this.analysisView)||(e&&!t&&(0,o.Wi)(this.tool)?this.createTool():!e&&t&&(0,o.pC)(this.tool)&&!this.tool.active&&this.removeTool())}))])}destroy(){this._analysisBaseHandles=(0,o.SC)(this._analysisBaseHandles),this._reconnectViewTask=(0,o.IM)(this._reconnectViewTask),this._startUserOperation=(0,o.IM)(this._startUserOperation),(0,o.pC)(this.analysisView)&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),(0,o.pC)(this.analysis)&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(e){e!==this._get("analysis")&&(this._startUserOperation=(0,o.IM)(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(e),this._scheduleViewReconnect())}get ready(){return(0,o.pC)(this.analysisView)&&!this.connectingToView}get connectingToView(){return(0,o.pC)(this._reconnectViewTask)}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(e){this._set("visible",e),(0,o.pC)(this.analysisView)&&(this.analysisView.visible=e)}async start(){this.clear();const e={task:null,abort:null,state:i.PENDING},t=(0,r.vr)((async t=>{e.state=i.WAIT_FOR_VIEW_READY,await(0,h.N1)((()=>this.ready),t),e.state=i.RUNNING,this.createTool({interactive:!0})}));return e.task=t,e.abort=()=>t.abort(),this._startUserOperation=e,t.promise}clear(){this._startUserOperation=(0,o.IM)(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(e){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=(0,o.IM)(this._reconnectViewTask);const e=(0,r.vr)((async t=>{try{await this._reconnectView(t)}catch(s){if((0,l.k_)(t),!(0,l.D_)(s))return void this.logger.warn("Failed to use analysis in view model",s);throw s}finally{e===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=e}async _reconnectView(e){const{view:t}=this,s=(0,o.pC)(t)&&t.ready&&this.supported,i=this.analysis;if(this._startUserOperation=y(this._startUserOperation),this._disconnectFromView(t),s&&!(0,o.Wi)(t)&&!(0,o.Wi)(i)){if(this.isAnalysisOwner){if((0,o.pC)(i.parent))return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,t.analyses.add(i)}this.analysisView=await t.whenAnalysisView(i),(0,l.Hc)(e)?this._startUserOperation=y(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(e){this.removeTool(),(0,o.pC)(e)&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,e.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(e){(0,o.pC)(this.analysisView)&&!this.isAnalysisOwner&&(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",e),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function y(e){return(0,o.pC)(e)&&e.state>=i.RUNNING?(e.abort(),null):e}(0,n._)([(0,c.Cb)({nonNullable:!0})],d.prototype,"analysis",null),(0,n._)([(0,c.Cb)()],d.prototype,"analysisView",void 0),(0,n._)([(0,c.Cb)()],d.prototype,"ready",null),(0,n._)([(0,c.Cb)()],d.prototype,"connectingToView",null),(0,n._)([(0,c.Cb)({readOnly:!0})],d.prototype,"isAnalysisOwner",null),(0,n._)([(0,c.Cb)({type:Boolean,value:!0})],d.prototype,"visible",null),(0,n._)([(0,c.Cb)()],d.prototype,"_reconnectViewTask",void 0),d=(0,n._)([(0,p.j)("esri.widgets.support.InteractiveAnalysisViewModel")],d)},32845:(e,t,s)=>{s.d(t,{V:()=>p});var i=s(27366),n=s(85015),r=s(100),a=s(32718),o=s(92026),l=s(94172),h=s(49861),c=(s(25243),s(63780),s(69912));let p=class extends n.Z{constructor(e){super(e),this.tool=null,this._baseHandles=new r.Z,this._loggedUnsupportedErrorOnce=!1,this.logger=a.Z.getLogger(this.declaredClass),e&&null!=e.visible&&(this.visible=e.visible)}initialize(){this._baseHandles.add((0,l.YP)((()=>({ready:(0,o.pC)(this.view)&&this.view.ready,supported:this.supported})),(e=>{let{ready:t,supported:s}=e;!t||s||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)}),l.tX))}destroy(){this.removeTool(),this.view=null,this._baseHandles=(0,o.SC)(this._baseHandles)}get active(){return(0,o.pC)(this.tool)&&this.tool.active}get disabled(){return(0,o.Wi)(this.view)||!this.view.ready||!this.supported}get supported(){return(0,o.Wi)(this.view)||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(e){if(e===this.view)return;this.removeTool(),this._set("view",e);const t="tools";this._baseHandles.remove(t),(0,o.Wi)(e)||this._baseHandles.add(e.tools.on("after-remove",(e=>{e.item===this.tool&&this._set("tool",null)})),t)}set visible(e){this._set("visible",e),(0,o.pC)(this.tool)&&(this.tool.visible=e)}createTool(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{interactive:!1};if(this.removeTool(),(0,o.Wi)(this.view)||!this.view.ready||!this.supported)return;const t=this.constructTool();t.created?(this._set("tool",t),this.view.tools.add(t)):e.interactive?(this._set("tool",t),this.view.addAndActivateTool(t),(0,l.gx)((()=>t.created),(()=>{t.active&&(0,o.pC)(this.view)&&(this.view.activeTool=null)}),{initial:!0,once:!0})):t.destroy()}removeTool(){const e=this.tool;if((0,o.Wi)(e))return;const t=(0,o.yw)(this.view,(e=>e.tools));(0,o.pC)(t)?t.remove(e):e.destroy(),this._set("tool",null)}logError(){this.logger.error(...arguments)}};(0,i._)([(0,h.Cb)({constructOnly:!0})],p.prototype,"tool",void 0),(0,i._)([(0,h.Cb)()],p.prototype,"active",null),(0,i._)([(0,h.Cb)()],p.prototype,"disabled",null),(0,i._)([(0,h.Cb)()],p.prototype,"supported",null),(0,i._)([(0,h.Cb)({value:null})],p.prototype,"view",null),(0,i._)([(0,h.Cb)({type:Boolean,value:!0})],p.prototype,"visible",null),p=(0,i._)([(0,c.j)("esri.widgets.support.InteractiveToolViewModel")],p)}}]);
//# sourceMappingURL=6526.5042d7dd.chunk.js.map