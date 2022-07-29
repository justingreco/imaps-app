/*! For license information please see 962.ca20cfb8.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[962],{962:(t,i,e)=>{e.r(i),e.d(i,{Services:()=>w,default:()=>k});var a=e(51554);const c=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteAccordionChange=(0,a.yM)(this,"calciteAccordionChange",7),this.appearance="default",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multi",this.items=[],this.sorted=!1,this.sortItems=t=>t.sort(((t,i)=>t.position-i.position)).map((t=>t.item))}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){return(0,a.h)("div",{class:{"accordion--transparent":"transparent"===this.appearance,"accordion--minimal":"minimal"===this.appearance,accordion:"default"===this.appearance}},(0,a.h)("slot",null))}calciteAccordionItemKeyEvent(t){const i=t.detail.item,e=t.detail.parent;if(this.el===e){const e=i.key,a=t.target,c=0===this.itemIndex(a),o=this.itemIndex(a)===this.items.length-1;switch(e){case"ArrowDown":o?this.focusFirstItem():this.focusNextItem(a);break;case"ArrowUp":c?this.focusLastItem():this.focusPrevItem(a);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem()}}}registerCalciteAccordionItem(t){const i={item:t.target,parent:t.detail.parent,position:t.detail.position};this.el===i.parent&&this.items.push(i)}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.calciteAccordionChange.emit({requestedAccordionItem:this.requestedAccordionItem})}focusFirstItem(){const t=this.items[0];this.focusElement(t)}focusLastItem(){const t=this.items[this.items.length-1];this.focusElement(t)}focusNextItem(t){const i=this.itemIndex(t),e=this.items[i+1]||this.items[0];this.focusElement(e)}focusPrevItem(t){const i=this.itemIndex(t),e=this.items[i-1]||this.items[this.items.length-1];this.focusElement(e)}itemIndex(t){return this.items.indexOf(t)}focusElement(t){t.focus()}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-width:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion--minimal{--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0}.accordion{border-width:1px;border-bottom-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}"}},[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteAccordionItemKeyEvent","calciteAccordionItemKeyEvent"],[0,"calciteAccordionItemRegister","registerCalciteAccordionItem"],[0,"calciteAccordionItemSelect","updateActiveItemOnChange"]]]);function o(){if("undefined"===typeof customElements)return;["calcite-accordion"].forEach((t=>{if("calcite-accordion"===t)customElements.get(t)||customElements.define(t,c)}))}o();var n=e(30024),r=e(16435),s=e(87776);const l=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteAccordionItemKeyEvent=(0,a.yM)(this,"calciteAccordionItemKeyEvent",7),this.calciteAccordionItemSelect=(0,a.yM)(this,"calciteAccordionItemSelect",7),this.calciteAccordionItemClose=(0,a.yM)(this,"calciteAccordionItemClose",7),this.calciteAccordionItemRegister=(0,a.yM)(this,"calciteAccordionItemRegister",7),this.active=!1,this.guid=(0,r.g)(),this.iconPosition="end",this.itemHeaderClickHandler=()=>this.emitRequestedItem()}connectedCallback(){this.parent=this.el.parentElement,this.selectionMode=(0,n.g)(this.el,"selection-mode","multi"),this.iconType=(0,n.g)(this.el,"icon-type","chevron"),this.iconPosition=(0,n.g)(this.el,"icon-position",this.iconPosition)}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.calciteAccordionItemRegister.emit({parent:this.parent,position:this.itemPosition})}render(){const t=(0,n.a)(this.el),i=(0,a.h)("calcite-icon",{class:"accordion-item-icon",icon:this.icon,scale:"s"}),{guid:e}=this,c=`${e}-region`,o=`${e}-button`;return(0,a.h)(a.AA,{tabindex:"0"},(0,a.h)("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},(0,a.h)("div",{"aria-controls":c,class:{"accordion-item-header":!0,[n.C.rtl]:"rtl"===t},id:o,onClick:this.itemHeaderClickHandler,role:"button"},this.icon?i:null,(0,a.h)("div",{class:"accordion-item-header-text"},(0,a.h)("span",{class:"accordion-item-title"},this.itemTitle),this.itemSubtitle?(0,a.h)("span",{class:"accordion-item-subtitle"},this.itemSubtitle):null),(0,a.h)("calcite-icon",{class:"accordion-item-expand-icon",icon:"chevron"===this.iconType?"chevronDown":"caret"===this.iconType?"caretDown":this.active?"minus":"plus",scale:"s"})),(0,a.h)("div",{"aria-expanded":(0,n.t)(this.active),"aria-labelledby":o,class:"accordion-item-content",id:c,role:"region"},(0,a.h)("slot",null))))}keyDownHandler(t){if(t.target===this.el)switch(t.key){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"Home":case"End":this.calciteAccordionItemKeyEvent.emit({parent:this.parent,item:t}),t.preventDefault()}}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.el.parentNode===this.requestedAccordionItem.parentNode&&this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case"multi":this.el===this.requestedAccordionItem&&(this.active=!this.active);break;case"single":this.active=this.el===this.requestedAccordionItem&&!this.active;break;case"single-persist":this.active=this.el===this.requestedAccordionItem}}emitRequestedItem(){this.calciteAccordionItemSelect.emit({requestedAccordionItem:this.el})}getItemPosition(){return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"),this.el)}get el(){return this}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-text-decoration-line:none;text-decoration-line:none;outline:2px solid transparent;outline-offset:2px;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .accordion-item-header{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .accordion-item-header{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]){color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-content{display:block;color:var(--calcite-ui-text-1)}:host([active]) .accordion-item-header{border-bottom-color:transparent}:host .accordion-item-header{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction)}:host .accordion-item-icon{position:relative;margin:0px;display:-ms-inline-flexbox;display:inline-flex;color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-end);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}:host .accordion-item-content,:host .accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .accordion-item-content{display:none;padding-top:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .accordion-item-expand-icon{color:var(--calcite-ui-text-3);-webkit-margin-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);-webkit-margin-end:var(--calcite-accordion-item-icon-spacing-end);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active]) .calcite--rtl .accordion-item-expand-icon{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .accordion-item-header-text{margin-top:0px;margin-bottom:0px;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;padding-top:0px;padding-bottom:0px;text-align:initial;-webkit-margin-end:auto;margin-inline-end:auto}:host .accordion-item-title,:host .accordion-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .accordion-item-title{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .accordion-item-subtitle{margin-top:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:hover) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:hover) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:hover) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}:host(:focus) .accordion-item-title,:host(:active) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-icon,:host(:active) .accordion-item-icon,:host([active]) .accordion-item-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-expand-icon,:host(:active) .accordion-item-expand-icon,:host([active]) .accordion-item-expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .accordion-item-subtitle,:host(:active) .accordion-item-subtitle,:host([active]) .accordion-item-subtitle{color:var(--calcite-ui-text-2)}"}},[1,"calcite-accordion-item",{active:[1540],itemTitle:[1,"item-title"],itemSubtitle:[1,"item-subtitle"],icon:[513]},[[0,"keydown","keyDownHandler"],[16,"calciteAccordionChange","updateActiveItemOnChange"]]]);function m(){if("undefined"===typeof customElements)return;["calcite-accordion-item","calcite-icon"].forEach((t=>{switch(t){case"calcite-accordion-item":customElements.get(t)||customElements.define(t,l);break;case"calcite-icon":customElements.get(t)||(0,s.d)()}}))}m();e(89794);var d=e(85580),h=e(72791),u=e(68438),p=e(83942),f=e(80184);const g=t=>{const i=(0,h.useRef)(null);return(0,h.useEffect)((()=>{t.feature&&new p.Z({container:i.current,graphic:t.feature})}),[t.feature]),(0,f.jsx)("div",{ref:i})};var v=e(2170),b=e(26834);function y(t,i,e,a,c){null===t||void 0===t||t.forEach((t=>{"feature"===t.type&&c.push(t.queryFeatures({geometry:v.geodesicBuffer(i.geometry,-5,9002),outFields:["*"],returnGeometry:!0}))}));const o=[];if(c.length)return Promise.all(c).then((t=>{t.forEach((t=>{t.features.length&&t.features.forEach((t=>{o.push(t)}))})),a(!1),e(o)}))}function x(t,i,e,a,c,o){requestAnimationFrame((()=>{if(t.target.hasAttribute("active")){o(!0),c([]);const r=t.target.getAttribute("item-title"),s=i.find((t=>t.group.title===r)),l=[];if(s){let t=null===e||void 0===e?void 0:e.map.allLayers.filter((t=>s.group.layers.includes(t.title)));t.length!==s.group.layers.length?(n=s.group.layers,new Promise(((t,i)=>{const e=new b.Z({portalItem:{id:"95092428774c4b1fb6a3b6f5fed9fbc4"}});e.load().then((()=>{const i=e.allLayers.filter((t=>n.includes(t.title)));t(i.toArray())}))}))).then((t=>{y(t,a,c,o,l)})):y(t.toArray(),a,c,o,l)}}var n}))}const w=t=>{const[i,e]=(0,h.useState)(),[a,c]=(0,h.useState)(),[o,n]=(0,h.useState)([]),[r,s]=(0,h.useState)(!1);return(0,h.useEffect)((()=>{t.view&&e(t.view),t.graphic&&c(t.graphic)}),[]),(0,f.jsxs)(d.pu,{selectionMode:"single",children:[u.u.map((t=>(0,f.jsxs)(d.k9,{"item-title":t.group.title,heading:t.group.title,onClick:t=>{i&&a&&x(t,u.u,i,a,n,s)},children:[o.map(((t,i)=>(0,f.jsx)(g,{feature:t},i))),0===o.length&&(0,f.jsx)("div",{children:"No information available."})]},t.group.title))),(0,f.jsx)(d.Ed,{loading:!0,hidden:!r||void 0})]})},k=w}}]);
//# sourceMappingURL=962.ca20cfb8.chunk.js.map