/*! For license information please see 4816.31dc345d.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[4816],{24816:(e,t,i)=>{i.r(t),i.d(t,{Measure:()=>B,default:()=>I});i(90521);var a=i(51554),n=i(12656),o=i(30024),r=i(2333),s=i(37708),l=i(66795),c=i(97159),d=i(87776),p=i(32836),u=i(35877);const m="action-group--bottom",h="container",w="Expand",g="Collapse",v="expand-tooltip",b=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionPadToggle=(0,a.yM)(this,"calciteActionPadToggle",7),this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.actionMenuOpenChangeHandler=e=>{if(e.detail){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((e=>{t.includes(e)||(e.menuOpen=!1)}))}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e}}expandedHandler(e){(0,n.t)({parent:this.el,expanded:e})}connectedCallback(){(0,r.c)(this)}disconnectedCallback(){(0,r.d)(this)}componentWillLoad(){const{el:e,expanded:t}=this;(0,n.t)({parent:e,expanded:t})}async setFocus(e){"expand-toggle"!==e?this.el.focus():await(0,o.f)(this.expandToggleEl)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,intlExpand:i,intlCollapse:r,el:s,position:l,toggleExpand:c,scale:d}=this,p=(0,o.b)(s,v),u=i||w,h=r||g,b=t?null:(0,a.h)(n.E,{el:s,expanded:e,intlCollapse:h,intlExpand:u,position:l,ref:this.setExpandToggleRef,scale:d,toggle:c,tooltip:p});return b?(0,a.h)("calcite-action-group",{class:m,scale:d},(0,a.h)("slot",{name:v}),b):null}render(){return(0,a.h)(a.AA,{onCalciteActionMenuOpenChange:this.actionMenuOpenChangeHandler},(0,a.h)("div",{class:h},(0,a.h)("slot",null),this.renderBottomActionGroup()))}get el(){return this}static get watchers(){return{expanded:["expandedHandler"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{-webkit-animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0px;border-bottom-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-bottom:0px;padding-top:0px}.container{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0px}:host([layout=horizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0px}"}},[1,"calcite-action-pad",{expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],intlExpand:[1,"intl-expand"],intlCollapse:[1,"intl-collapse"],position:[513],scale:[513],setFocus:[64]}]);function f(){if("undefined"===typeof customElements)return;["calcite-action-pad","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-pad":customElements.get(e)||customElements.define(e,b);break;case"calcite-action":customElements.get(e)||(0,s.d)();break;case"calcite-action-group":customElements.get(e)||(0,l.d)();break;case"calcite-action-menu":customElements.get(e)||(0,c.d)();break;case"calcite-icon":customElements.get(e)||(0,d.d)();break;case"calcite-loader":customElements.get(e)||(0,p.d)();break;case"calcite-popover":customElements.get(e)||(0,u.d)()}}))}f();var x=i(85580),y=i(72791),_=i(27366),k=(i(93169),i(66978)),C=i(94172),M=i(8025),D=(i(63780),i(25243),i(49861)),U=i(69912),E=i(69407),W=i(85015),S=i(68860),T=i(77671);let A=class extends W.Z{constructor(e){super(e),this.activeTool=null,this.activeViewModel=null,this.view=null}get areaUnit(){return this.defaultUnit}set areaUnit(e){void 0!==e?this._override("areaUnit",e):this._clearOverride("areaUnit")}get linearUnit(){return this.defaultUnit}set linearUnit(e){void 0!==e?this._override("linearUnit",e):this._clearOverride("linearUnit")}get state(){const{activeViewModel:e}=this;return e?e.state:"disabled"}};(0,_._)([(0,D.Cb)({type:["area","distance","direct-line"]})],A.prototype,"activeTool",void 0),(0,_._)([(0,D.Cb)()],A.prototype,"activeViewModel",void 0),(0,_._)([(0,D.Cb)({type:S.fN})],A.prototype,"areaUnit",null),(0,_._)([(0,D.Cb)(T.Y)],A.prototype,"defaultUnit",void 0),(0,_._)([(0,D.Cb)({type:S.oD})],A.prototype,"linearUnit",null),(0,_._)([(0,D.Cb)({readOnly:!0})],A.prototype,"state",null),(0,_._)([(0,D.Cb)()],A.prototype,"view",void 0),A=(0,_._)([(0,U.j)("esri.widgets.Measurement.MeasurementViewModel")],A);const P=A;i(80975);var j=i(80532),z=i(67005);const O="esri-measurement",F="esri-icon-measure";let G=class extends E.Z{constructor(e,t){super(e,t),this._widgets=new Map,this.activeTool=null,this.activeWidget=null,this.areaUnit=null,this.iconClass=F,this.label=void 0,this.linearUnit=null,this.messages=null,this.view=null,this.viewModel=new P}initialize(){this.activeWidget&&this.viewModel.set("activeViewModel",this.activeWidget.viewModel),this.view&&this.activeTool&&this._getActiveWidget().then((e=>{this._set("activeWidget",e)})),this.own([(0,C.YP)((()=>[this.view,this.activeTool]),(async()=>{this._set("activeWidget",await this._getActiveWidget())})),(0,C.YP)((()=>this.activeWidget),((e,t)=>{this.viewModel.set("activeViewModel",e?e.viewModel:null),t&&(t.visible=!1)})),(0,C.YP)((()=>[this.areaUnit,this.linearUnit,this.uiStrings]),(()=>this._updateSubWidgetProperties()))])}destroy(){this._destroyWidgets()}render(){const{activeWidget:e}=this,t=e&&!e.destroyed?e.render():null;return(0,z.u)("div",{class:O},t)}clear(){this.activeTool=null,this._destroyWidgets()}startMeasurement(){const{activeViewModel:e}=this.viewModel;e&&(0,k.R8)(e.start())}async _createWidget(e){const{areaUnit:t,linearUnit:a,view:n}=this;switch(e){case"area":{const{type:a}=n;switch(a){case"2d":return new(0,(await Promise.all([i.e(5652),i.e(2497),i.e(1129),i.e(8431),i.e(9633),i.e(1421)]).then(i.bind(i,41421))).default)({view:n,unit:t,uiStrings:this._createUIStringsForWidget(e)});case"3d":return new(0,(await Promise.all([i.e(1378),i.e(5652),i.e(5158),i.e(2497),i.e(2618),i.e(5269),i.e(4567),i.e(2110),i.e(8901),i.e(6211)]).then(i.bind(i,96211))).default)({view:n,unit:t,uiStrings:this._createUIStringsForWidget(e)});default:return null}}case"distance":return new(0,(await Promise.all([i.e(5652),i.e(2497),i.e(1129),i.e(8431),i.e(9633),i.e(5107)]).then(i.bind(i,35107))).default)({view:n,unit:a,uiStrings:this._createUIStringsForWidget(e)});case"direct-line":return new(0,(await Promise.all([i.e(1378),i.e(5652),i.e(5158),i.e(2497),i.e(2618),i.e(5269),i.e(4567),i.e(2110),i.e(8901),i.e(7899)]).then(i.bind(i,47899))).default)({view:n,unit:a,uiStrings:this._createUIStringsForWidget(e)});default:return null}}_destroyWidgets(){this._widgets.forEach((e=>e.destroy())),this._widgets.clear()}async _getActiveWidget(){const{activeTool:e,view:t}=this;if(!t||!e)return null;let i=null;if(this._widgets.has(e))i=this._widgets.get(e),i.visible=!0;else{if(i=await this._createWidget(e),!i)return null;await i.viewModel.start(),this._widgets.set(e,i)}return i}_createUIStringsForWidget(e){if(!this.uiStrings)return null;const t=e+"-"+this.view.type;return this.uiStrings[t]}_updateSubWidgetProperties(){this._widgets.forEach(((e,t)=>{const{areaUnit:i,linearUnit:a}=this;e.unit=function(e){return e&&("esri.widgets.AreaMeasurement2D"===e.declaredClass||"esri.widgets.AreaMeasurement3D"===e.declaredClass)}(e)?i:a,e.uiStrings=this._createUIStringsForWidget(t)}))}};(0,_._)([(0,M.B)("viewModel.activeTool")],G.prototype,"activeTool",void 0),(0,_._)([(0,D.Cb)({readOnly:!0})],G.prototype,"activeWidget",void 0),(0,_._)([(0,M.B)("viewModel.areaUnit")],G.prototype,"areaUnit",void 0),(0,_._)([(0,D.Cb)()],G.prototype,"iconClass",void 0),(0,_._)([(0,D.Cb)({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],G.prototype,"label",void 0),(0,_._)([(0,M.B)("viewModel.linearUnit")],G.prototype,"linearUnit",void 0),(0,_._)([(0,D.Cb)(),(0,j.H)("esri/widgets/Measurement/t9n/Measurement")],G.prototype,"messages",void 0),(0,_._)([(0,D.Cb)()],G.prototype,"uiStrings",void 0),(0,_._)([(0,M.B)("viewModel.view")],G.prototype,"view",void 0),(0,_._)([(0,D.Cb)({type:P})],G.prototype,"viewModel",void 0),G=(0,_._)([(0,U.j)("esri.widgets.Measurement")],G);const H=G;var V=i(80184);const B=e=>{const t=(0,y.useRef)(),i=(0,y.useRef)(!1),[a,n]=(0,y.useState)(""),[o,r]=(0,y.useState)();return(0,y.useEffect)((()=>{var a,n;return i.current||(i.current=!0,r((a=t.current,n=e.view,new H({view:n,container:a})))),()=>{o&&(null===o||void 0===o||o.destroy())}}),[]),(0,V.jsxs)("div",{children:[(0,V.jsxs)("div",{className:"measure-container",children:[(0,V.jsx)(x.G1,{icon:"measure-line",text:"Distance",active:"distance"===a||void 0,onClick:()=>{n("distance"),o&&(o.activeTool="distance")}}),(0,V.jsx)(x.G1,{icon:"measure-area",text:"Area",active:"area"===a||void 0,onClick:()=>{n("area"),o&&(o.activeTool="area")}}),(0,V.jsx)(x.G1,{icon:"trash",text:"Clear",onClick:()=>{o&&(o.clear(),n(""))}})]}),(0,V.jsx)("div",{ref:t}),(0,V.jsx)("section",{hidden:""!==a||void 0,className:"measurement-hint",children:(0,V.jsx)("p",{children:"Select line or distance measurement tool"})})]})},I=B},77671:(e,t,i)=>{i.d(t,{Y:()=>n});var a=i(68860);const n={readOnly:!0,get(){return(0,a.RG)(this.view)}}}}]);
//# sourceMappingURL=4816.31dc345d.chunk.js.map