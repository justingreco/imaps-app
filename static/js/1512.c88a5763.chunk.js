/*! For license information please see 1512.c88a5763.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[1512],{51512:(e,t,i)=>{i.r(t),i.d(t,{CalciteTooltip:()=>h,defineCustomElement:()=>f});var o=i(51554),n=i(16435),a=i(39114),r=i(30024);const s="container",c="arrow",l="aria-describedby";const p=new class{constructor(){this.registeredElements=new WeakMap,this.hoverTimeouts=new WeakMap,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key){const{activeTooltipEl:e}=this;e&&(this.clearHoverTimeout(e),this.toggleTooltip(e,!1))}},this.mouseEnterShow=e=>{this.hoverEvent(e,!0)},this.mouseLeaveHide=e=>{this.hoverEvent(e,!1)},this.clickHandler=e=>{this.clickedTooltip=this.queryTooltip(e.composedPath())},this.focusShow=e=>{this.focusEvent(e,!0)},this.blurHide=e=>{this.focusEvent(e,!1)},this.hoverToggle=(e,t)=>{const{hoverTimeouts:i}=this;i.delete(e),t&&this.closeExistingTooltip(),this.toggleTooltip(e,t)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler),document.addEventListener("mouseover",this.mouseEnterShow,{capture:!0}),document.addEventListener("mouseout",this.mouseLeaveHide,{capture:!0}),document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("focusin",this.focusShow),document.addEventListener("focusout",this.blurHide,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener("mouseover",this.mouseEnterShow,{capture:!0}),document.removeEventListener("mouseout",this.mouseLeaveHide,{capture:!0}),document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("focusin",this.focusShow,{capture:!0}),document.removeEventListener("focusout",this.blurHide,{capture:!0})}clearHoverTimeout(e){const{hoverTimeouts:t}=this;t.has(e)&&(window.clearTimeout(t.get(e)),t.delete(e))}closeExistingTooltip(){const{activeTooltipEl:e}=this;e&&this.toggleTooltip(e,!1)}focusTooltip(e,t){this.closeExistingTooltip(),t&&this.clearHoverTimeout(e),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,t&&(this.activeTooltipEl=e)}hoverTooltip(e,t){this.clearHoverTimeout(e);const{hoverTimeouts:i}=this,o=window.setTimeout((()=>this.hoverToggle(e,t)),500);i.set(e,o)}activeTooltipHover(e){const{activeTooltipEl:t,hoverTimeouts:i}=this,{type:o}=e;t&&("mouseover"===o&&e.composedPath().includes(t)?this.clearHoverTimeout(t):"mouseout"!==o||i.has(t)||this.hoverTooltip(t,!1))}hoverEvent(e,t){const i=this.queryTooltip(e.composedPath());this.activeTooltipHover(e),i&&this.hoverTooltip(i,t)}focusEvent(e,t){const i=this.queryTooltip(e.composedPath());i&&i!==this.clickedTooltip?this.focusTooltip(i,t):this.clickedTooltip=null}},m=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.offsetDistance=a.d,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.guid=`calcite-tooltip-${(0,n.g)()}`,this.setUpReferenceElement=()=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement();const{el:e,referenceElement:t,effectiveReferenceElement:i}=this;t&&!i&&console.warn(`${e.tagName}: reference-element id "${t}" was not found.`,{el:e}),this.addReferences(),this.createPopper()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();e.setAttribute(l,t),p.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&(e.removeAttribute(l),p.unregisterElement(e))}}offsetDistanceOffsetHandler(){this.reposition()}offsetSkiddingHandler(){this.reposition()}openHandler(){this.reposition()}placementHandler(){this.reposition()}referenceElementHandler(){this.setUpReferenceElement()}componentWillLoad(){this.setUpReferenceElement()}componentDidLoad(){this.reposition()}disconnectedCallback(){this.removeReferences(),this.destroyPopper()}async reposition(){const{popper:e,el:t,placement:i}=this,o=this.getModifiers();e?await(0,a.u)({el:t,modifiers:o,placement:i,popper:e}):this.createPopper()}getReferenceElement(){const{referenceElement:e,el:t}=this;return("string"===typeof e?(0,r.c)(t,{id:e}):e)||null}getModifiers(){const{arrowEl:e,offsetDistance:t,offsetSkidding:i}=this;return[{name:"arrow",enabled:!0,options:{element:e}},{name:"offset",enabled:!0,options:{offset:[i,t]}},{name:"eventListeners",enabled:this.open}]}createPopper(){this.destroyPopper();const{el:e,placement:t,effectiveReferenceElement:i,overlayPositioning:o}=this,n=this.getModifiers();this.popper=(0,a.c)({el:e,modifiers:n,placement:t,overlayPositioning:o,referenceEl:i})}destroyPopper(){const{popper:e}=this;e&&e.destroy(),this.popper=null}render(){const{effectiveReferenceElement:e,label:t,open:i}=this,n=e&&i,l=!n;return(0,o.h)(o.AA,{"aria-hidden":(0,r.t)(l),"aria-label":t,"calcite-hydrated-hidden":l,id:this.getId(),role:"tooltip"},(0,o.h)("div",{class:{[a.C.animation]:!0,[a.C.animationActive]:n}},(0,o.h)("div",{class:c,ref:e=>this.arrowEl=e}),(0,o.h)("div",{class:s},(0,o.h)("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return'@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999;-webkit-transform:scale(0);transform:scale(0)}.calcite-popper-anim{position:relative;z-index:1;-webkit-transition:var(--calcite-popper-transition);transition:var(--calcite-popper-transition);visibility:hidden;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform;opacity:0;-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:0.25rem}:host([data-popper-placement^=bottom]) .calcite-popper-anim{-webkit-transform:translateY(-5px);transform:translateY(-5px)}:host([data-popper-placement^=top]) .calcite-popper-anim{-webkit-transform:translateY(5px);transform:translateY(5px)}:host([data-popper-placement^=left]) .calcite-popper-anim{-webkit-transform:translateX(5px);transform:translateX(5px)}:host([data-popper-placement^=right]) .calcite-popper-anim{-webkit-transform:translateX(-5px);transform:translateX(-5px)}:host([data-popper-placement]) .calcite-popper-anim--active{opacity:1;visibility:visible;-webkit-transform:translate(0);transform:translate(0)}:host([data-popper-placement][data-popper-reference-hidden]){pointer-events:none;opacity:0}.arrow,.arrow::before{position:absolute;width:8px;height:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);-webkit-box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-popper-placement^=top]) .arrow{bottom:-4px}:host([data-popper-placement^=bottom]) .arrow{top:-4px}:host([data-popper-placement^=left]) .arrow{right:-4px}:host([data-popper-placement^=right]) .arrow{left:-4px}.container{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-width:20rem;max-height:20rem}.calcite-popper-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}'}},[1,"calcite-tooltip",{label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[1,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],reposition:[64]}]);function d(){if("undefined"===typeof customElements)return;["calcite-tooltip"].forEach((e=>{if("calcite-tooltip"===e)customElements.get(e)||customElements.define(e,m)}))}d();const h=m,f=d}}]);
//# sourceMappingURL=1512.c88a5763.chunk.js.map