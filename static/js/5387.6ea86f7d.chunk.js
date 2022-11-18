"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[5387],{35387:(e,t,i)=>{i.d(t,{Z:()=>At});var s,n=i(27366),l=i(40281),r=i(98928),a=i(100),o=i(93169),d=i(92026),c=i(94172),h=i(49861),u=(i(63780),i(89125)),p=i(69912),_=i(69407),y=i(91505),m=(i(25243),i(85015)),g=i(41691),b=i(79056),v=i(57976),C=i(6945);let I=s=class extends v.Z{constructor(e){super(e),this.displayValueEnabled=!1,this.max=1,this.min=0,this.step=.1,this.type="slider",this.value=null}clone(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})}};(0,n._)([(0,h.Cb)()],I.prototype,"displayValueEnabled",void 0),(0,n._)([(0,h.Cb)()],I.prototype,"max",void 0),(0,n._)([(0,h.Cb)()],I.prototype,"min",void 0),(0,n._)([(0,h.Cb)()],I.prototype,"step",void 0),(0,n._)([(0,h.Cb)()],I.prototype,"value",void 0),I=s=(0,n._)([(0,p.j)("esri.support.Action.ActionSlider")],I);const f=I;var w=i(9676);const S="hide",L="hide-children";function A(e){if(e)return null!=e.listMode?e.listMode:void 0}function k(e){if(e)return"type"in e?e.listMode!==L&&"wmts"!==e.type?"group"===e.type?"layers":"sublayers":void 0:"sublayers"}function P(e,t){e&&e.sort(((e,i)=>{const s=t.indexOf(e.uid),n=t.indexOf(i.uid);return s>n?-1:s<n?1:0}))}function M(e){const t=e?.layer;return t&&"group"===t.type?t.layers:null}function E(e,t){const i=e.layer?.uid;return i&&t.find((e=>e.layer?.uid===i))}function x(e){const t=function(e){return!!e?.layer}(e)?e:null,i=e?.parent,s="map-image"===i?.type&&t.source;return s&&i?{layer:i,title:"",sublayerIds:[s.mapLayerId]}:{layer:e,title:""}}var T=i(53963),O=i(67005);const N="esri-layer-list-panel",V="esri-layer-list-panel__content",R="esri-layer-list-panel__content--legend",F="esri-layer-list-panel__content--string",$="esri-layer-list-panel__content--html-element",Y="esri-layer-list-panel__content--widget";let Z=class extends((0,b.IG)(_.Z)){constructor(e,t){super(e,t),this._legend=null,this._handles=new a.Z,this.content=null,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}initialize(){this.addHandles((0,c.YP)((()=>this.content),(e=>this._createLegend(e)),c.nn))}destroy(){const{_legend:e}=this;e&&e.destroy(),this._legend=null}get className(){const{image:e}=this,t=this._getFirstWidget();return this._get("className")||!e&&t?t.iconClass:""}set className(e){this._override("className",e)}get disabled(){const{listItem:e,_legend:t,content:i}=this;return!e||!(Array.isArray(i)&&i.length>1)&&!!t&&(!t.activeLayerInfos?.length||!e.visibleAtCurrentScale)}set disabled(e){this._overrideIfSome("disabled",e)}get title(){const e=this._getFirstWidget();return this._get("title")||e?e.label:""}set title(e){this._override("title",e)}render(){return(0,O.u)("div",{class:N},this._renderContents())}_renderContent(e){const{_legend:t,disabled:i}=this;return!e||i?null:"legend"===e&&t?(0,O.u)("div",{class:this.classes(V,R),key:t},t.render()):"string"==typeof e?(0,O.u)("div",{class:this.classes(V,F),key:e,innerHTML:e}):(0,T.Qd)(e)?(0,O.u)("div",{class:this.classes(V,Y),key:e},e.render()):e instanceof HTMLElement?(0,O.u)("div",{class:this.classes(V,$),key:e,bind:e,afterCreate:this._attachToNode}):null}_renderContents(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e)}_getLegendOptions(){const{listItem:e}=this;if(!e)return{};const{layer:t,view:i}=e;return t&&i?{view:i,layerInfos:[x(t)]}:{}}_createLegend(e){this._hasLegend(e)&&!this._legend&&Promise.all([i.e(6009),i.e(5349)]).then(i.bind(i,65349)).then((e=>{let{default:t}=e;const{_handles:i,listItem:s}=this,n=new t(this._getLegendOptions());this._legend=n,this.notifyChange("className"),this.notifyChange("title");const l=(0,c.YP)((()=>[s?.view,s?.layer,s?.layer?.source,s?.layer?.parent]),(()=>this._updateLegend(n)),c.nn);i.add(l,"legends"),this.scheduleRender()}))}_hasLegend(e){const t="legend";return e===t||!!Array.isArray(e)&&e.includes(t)}_attachToNode(e){e.appendChild(this)}_updateLegend(e){e.set(this._getLegendOptions()),this.scheduleRender()}_getWidget(e){return"legend"===e?this._legend:(0,T.Qd)(e)?e:null}_getFirstWidget(){const{content:e}=this;if(Array.isArray(e)){let t=null;return e.some((e=>{const i=this._getWidget(e);return i&&(t=i),!!i})),t}return this._getWidget(e)}};(0,n._)([(0,h.Cb)()],Z.prototype,"_legend",void 0),(0,n._)([(0,h.Cb)()],Z.prototype,"className",null),(0,n._)([(0,h.Cb)()],Z.prototype,"content",void 0),(0,n._)([(0,h.Cb)()],Z.prototype,"disabled",null),(0,n._)([(0,h.Cb)()],Z.prototype,"image",void 0),(0,n._)([(0,h.Cb)()],Z.prototype,"listItem",void 0),(0,n._)([(0,h.Cb)()],Z.prototype,"title",null),(0,n._)([(0,h.Cb)()],Z.prototype,"open",void 0),(0,n._)([(0,h.Cb)()],Z.prototype,"visible",void 0),Z=(0,n._)([(0,p.j)("esri.widgets.LayerList.ListItemPanel")],Z);const U=Z;var H;const z=l.Z.ofType({key:"type",defaultKeyValue:"button",base:v.Z,typeMap:{button:C.Z,toggle:w.Z,slider:f}}),B=l.Z.ofType(z),W="layer",j="child-list-mode";let D=H=class extends((0,b.IG)((0,g.p)(m.Z))){constructor(e){super(e),this.actionsSections=new B,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.children=new(l.Z.ofType(H)),this.childrenSortable=!0,this.hidden=!1,this.layer=null,this.layerView=null,this.listItemCreatedFunction=null,this.open=!1,this.panel=null,this.parent=null,this.sortable=!0,this.view=null}initialize(){if(this.handles.add([(0,c.YP)((()=>this.layer),(e=>this._watchLayerProperties(e)),c.nn),(0,c.YP)((()=>this.checkPublishStatusEnabled),(e=>this._updateChildrenPublishing(e)),c.nn),(0,c.YP)((()=>this.view),(e=>this._updateChildrenView(e)),c.nn),(0,c.YP)((()=>this.panel),(e=>this._setListItemOnPanel(e)),c.nn),(0,c.YP)((()=>[this.layer,this.view]),(()=>this._getLayerView()),c.nn)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.view=null}get connectionStatus(){const{layerView:e,publishing:t}=this;if(!t&&e&&"connectionStatus"in e)return e.connectionStatus}get error(){return this.layer?.loadError}get incompatible(){const{layerView:e}=this;return!(!e||!("spatialReferenceSupported"in e))&&!e.spatialReferenceSupported}castPanel(e){return this.get("panel.open")&&!e.hasOwnProperty("open")&&(e.open=!0),e?new U(e):null}get title(){const e=this.get("layer.layer");return(!e||e&&this.get("layer.layer.loaded"))&&this.get("layer.title")||this.get("layer.attributes.title")||""}set title(e){this._override("title",e)}get publishing(){const{layer:e,checkPublishStatusEnabled:t}=this;return t&&e&&"publishingInfo"in e&&"publishing"===e.publishingInfo.status}get updating(){const{layerView:e,connectionStatus:t,layer:i,publishing:s}=this;return!s&&!t&&(e?e.updating:"loading"===i?.loadStatus||!1)}get visible(){return this.layer?.visible}set visible(e){const t=this.layer;t&&(t.visible=e)}get visibleAtCurrentScale(){return!function(e,t){if(!e||isNaN(t))return!1;const i=function(e){if(e)return null!=e.minScale?e.minScale:void 0}(e),s=function(e){if(e)return null!=e.maxScale?e.maxScale:void 0}(e),n=!isNaN(i)&&i>0&&t>i,l=!isNaN(s)&&s>0&&t<s;return n||l}(this.layer,this.get("view.scale"))}get visibilityMode(){return function(e){if(!e)return"inherited";const t=e.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"==typeof t)return t?"independent":"inherited";const i=e.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"==typeof i?i?"independent":"inherited":null!=e.visibilityMode?e.visibilityMode:"independent"}(this.layer)}clone(){return new H({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,children:this.children.clone(),layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,open:this.open,panel:this.panel,title:this.title,view:this.view,visible:this.visible})}_setListItemOnPanel(e){e&&(e.listItem=this)}_updateChildrenPublishing(e){const t=this.children;t&&t.forEach((t=>t.checkPublishStatusEnabled=e))}_updateChildrenView(e){const t=this.children;t&&t.forEach((t=>t.view=e))}_addChildren(e){if(this.handles.remove(j),this.children.removeAll(),!e)return;e.forEach((t=>{this.handles.add((0,c.YP)((()=>t.listMode),(()=>this._addChildren(e))),j)}));const t=e.filter((e=>"hide"!==A(e)));this.children.addMany(this._makeChildren(t))}_watchSublayerChanges(e){e&&this.handles.add(e.on("change",(()=>{this._addChildren(e)})),W)}_initializeChildLayers(e){this._addChildren(e),this._watchSublayerChanges(e)}_makeChildren(e){return e.map((e=>function(e){return A(e)!==S}(e)?new H({layer:e,checkPublishStatusEnabled:this.checkPublishStatusEnabled,listItemCreatedFunction:this.listItemCreatedFunction,parent:this,view:this.view}):null)).reverse()}_watchLayerProperties(e){if(!this.handles)return;if(this.handles.remove(W),this.handles.remove(j),!e)return;if(this.handles.add((0,c.YP)((()=>e.listMode),(()=>this._watchLayerProperties(e))),W),"hide-children"===A(e))return void this.children.removeAll();const t=k(e);t&&this.handles.add((0,c.YP)((()=>e[t]),(()=>{e.hasOwnProperty(t)&&this._initializeChildLayers(e[t])}),c.nn),W)}async _getLayerView(){const{layer:e,view:t}=this;if(e&&t)try{const i=await t.whenLayerView(e);if(i.layer!==this.layer)return;this._set("layerView",i)}catch{}}};(0,n._)([(0,h.Cb)({type:B})],D.prototype,"actionsSections",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"actionsOpen",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"checkPublishStatusEnabled",void 0),(0,n._)([(0,h.Cb)({type:l.Z})],D.prototype,"children",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"childrenSortable",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"connectionStatus",null),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"error",null),(0,n._)([(0,h.Cb)()],D.prototype,"hidden",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"incompatible",null),(0,n._)([(0,h.Cb)()],D.prototype,"layer",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"layerView",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"listItemCreatedFunction",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"open",void 0),(0,n._)([(0,h.Cb)({type:U})],D.prototype,"panel",void 0),(0,n._)([(0,u.p)("panel")],D.prototype,"castPanel",null),(0,n._)([(0,h.Cb)()],D.prototype,"parent",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"sortable",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"title",null),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"publishing",null),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"updating",null),(0,n._)([(0,h.Cb)()],D.prototype,"view",void 0),(0,n._)([(0,h.Cb)()],D.prototype,"visible",null),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"visibleAtCurrentScale",null),(0,n._)([(0,h.Cb)({readOnly:!0})],D.prototype,"visibilityMode",null),D=H=(0,n._)([(0,p.j)("esri.widgets.LayerList.ListItem")],D);const G=D,K="view",Q="view-layers",X="map-layers",q="layer-views",J="layer-list-mode",ee="children",te=l.Z.ofType(G);let ie=class extends y.Z.EventedAccessor{constructor(e){super(e),this._handles=new a.Z,this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.operationalItems=new te,this.view=null}initialize(){this._handles.add([(0,c.YP)((()=>[this.view,this.view?.ready]),(()=>this._viewHandles()),c.nn),(0,c.YP)((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._recompileList()))],K)}destroy(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()}get state(){const e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e,t,i,s){const n=e?.layer;if(!n)return;const l=this.view?.map?.layers,r=t?M(t):l,a=i?M(i):l;if(!r||!a)return;const{operationalItems:o}=this,d=t?.children||o,c=i?.children||o,h=a.length-s;e.parent=i||null,d.includes(e)&&d.remove(e),r.includes(n)&&r.remove(n),c.includes(e)||c.add(e,h),a.includes(n)||a.add(n,h)}_createLayerViewHandles(e){const{_handles:t}=this;t.remove(q),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),q)}_createMapLayerHandles(e){const{_handles:t}=this;t.remove(X),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),X)}_createListItem(e){const{view:t,listItemCreatedFunction:i,checkPublishStatusEnabled:s}=this;return new G({checkPublishStatusEnabled:s,layer:e,listItemCreatedFunction:i,view:t})}_removeAllItems(){const{_handles:e,operationalItems:t}=this;t.forEach((t=>{e.remove(`${ee}-${t.uid}`)})),t.removeAll()}_getViewableLayers(e){if(e)return e.filter((e=>"hide"!==A(e)))}_watchLayersListMode(e){const{_handles:t}=this;t.remove(J),e&&e.forEach((e=>{"listMode"in e&&t.add((0,c.YP)((()=>e.listMode),(()=>this._compileList())),J)}))}_compileList(){const e=this.get("view.map.layers");this._watchLayersListMode(e);const t=this._getViewableLayers(e);t&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{operationalItems:t}=this;e.forEach((e=>{t.find((t=>t.layer===e))||t.add(this._createListItem(e))}))}_removeItems(e){const{_handles:t,operationalItems:i}=this,s=[];i.forEach((i=>{i&&e&&e.includes(i.layer)||(t.remove(`${ee}-${i.uid}`),s.push(i))})),i.removeMany(s)}_sortItems(e){const{operationalItems:t}=this;t.sort(((t,i)=>{const s=e.indexOf(t.layer),n=e.indexOf(i.layer);return s>n?-1:s<n?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}_viewHandles(){const{_handles:e,view:t}=this;e.remove([X,q,Q]),this._compileList(),t&&t.ready&&e.add([(0,c.YP)((()=>this.view?.map?.allLayers),(e=>this._createMapLayerHandles(e)),c.nn),(0,c.YP)((()=>this.view?.allLayerViews),(e=>this._createLayerViewHandles(e)),c.nn)],Q)}};(0,n._)([(0,h.Cb)()],ie.prototype,"checkPublishStatusEnabled",void 0),(0,n._)([(0,h.Cb)()],ie.prototype,"listItemCreatedFunction",void 0),(0,n._)([(0,h.Cb)({type:te})],ie.prototype,"operationalItems",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],ie.prototype,"state",null),(0,n._)([(0,h.Cb)()],ie.prototype,"view",void 0),ie=(0,n._)([(0,p.j)("esri.widgets.LayerList.LayerListViewModel")],ie);const se=ie;var ne=i(78088),le=i(80532),re=i(28907),ae=(i(80975),i(70281));function oe(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const de=l.Z.ofType(G),ce="data-sort-filter",he="data-layer-uid",ue="esri-layer-list esri-widget esri-widget--panel",pe="esri-layer-list--new-ui",_e="esri-layer-list__no-items",ye="esri-layer-list__list",me="esri-layer-list__list--root",ge="esri-layer-list__list--exclusive",be="esri-layer-list__list--inherited",ve="esri-layer-list__list--independent",Ce="esri-layer-list__item",Ie="esri-layer-list__item--has-message",fe="esri-layer-list__item--invisible",we="esri-layer-list__item--invisible-at-scale",Se="esri-layer-list__item--has-children",Le="esri-layer-list__item--selectable",Ae="esri-layer-list__item-container",ke="esri-layer-list__item-actions-menu",Pe="esri-layer-list__item-actions-menu-item",Me="esri-layer-list__item-actions-menu-item--active",Ee="esri-layer-list__item-actions",xe="esri-layer-list__item-actions-list",Te="esri-layer-list__item-action",Oe="esri-layer-list__item-action-icon",Ne="esri-layer-list__item-action-image",Ve="esri-layer-list__item-action-title",Re="esri-layer-list__action-toggle",Fe="esri-layer-list__action-toggle--on",$e="esri-layer-list__item-label",Ye="esri-layer-list__item-message",Ze="esri-layer-list__item-title",Ue="esri-layer-list__status-indicator",He="esri-layer-list__publishing",ze="esri-layer-list__updating",Be="esri-layer-list__connection-status",We="esri-layer-list__connection-status--connected",je="esri-layer-list__item-toggle",De="esri-layer-list__item-toggle-icon",Ge="esri-layer-list__item-toggle-icon",Ke="esri-layer-list__item-radio-icon",Qe="esri-layer-list__child-toggle",Xe="esri-layer-list__child-toggle--open",qe="esri-layer-list__child-toggle-icon--opened",Je="esri-layer-list__child-toggle-icon--closed",et="esri-layer-list__child-toggle-icon--closed-rtl",tt="esri-layer-list--chosen",it="esri-disabled",st="esri-disabled-element",nt="esri-hidden",lt="esri-rotating",rt="esri-icon-handle-horizontal",at="esri-icon-visible",ot="esri-icon-non-visible",dt="esri-icon-radio-checked",ct="esri-icon-radio-unchecked",ht="esri-icon-notice-triangle",ut="esri-icon-down-arrow",pt="esri-icon-right-triangle-arrow",_t="esri-icon-left-triangle-arrow",yt="esri-icon-loading-indicator",mt="esri-icon-default-action",gt="esri-icon-layers",bt="actions",vt="action-section",Ct="items",It={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function ft(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>ft(e)))}const wt="root",St={statusIndicators:!0,errors:!1};let Lt=class extends _.Z{constructor(e,t){super(e,t),this._handles=new a.Z,this._sortableNodes=new Map,this._sortableMap=new Map,this._focusSortUid=null,this._newUI=(0,o.Z)("esri-layerlist-new-ui"),this._tooltipReferenceMap=new Map,this.visibleItems=null,this.iconClass=gt,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.selectionEnabled=!1,this.selectedItems=new de,this.viewModel=new se,this.visibleElements={...St},this._onSortableSort=e=>{let{to:t,from:i,item:s,newIndex:n}=e;i&&t&&(i===t?this._sortLayers(this._sortableMap.get(i.dataset.group)):this._moveLayerFromChildList({to:t,from:i,item:s,newIndex:n}))},this._sortableCanSort=(e,t)=>!(!e.el.dataset.group||!t.el.dataset.group),this._sortableCanPull=(e,t,i)=>{const{listItemCanGiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._sortableCanPut=(e,t,i)=>{const{listItemCanReceiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._onSortableEnd=e=>{let{oldIndex:t,from:i,to:s,item:n}=e;i!==s&&i.insertBefore(n,i.children[t])}}initialize(){const e=this.operationalItems;this._setVisibleItems(e),this.addHandles([(0,c.on)((()=>this.operationalItems),"change",(()=>this._itemsChanged(e))),(0,c.YP)((()=>this.visibleElements),(()=>this._itemsChanged(e))),(0,c.YP)((()=>this.selectionEnabled),(()=>this._toggleAllSorting()),c.nn)])}loadDependencies(){return Promise.all([Promise.resolve().then(i.bind(i,87474)),Promise.resolve().then(i.bind(i,94730))])}destroy(){this._destroySortables(),this._tooltipReferenceMap.clear(),this._handles.destroy(),this._handles=null}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(e){this.viewModel.operationalItems=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...St,...e}}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const{visibleItems:e,_newUI:t}=this,i=this.viewModel?.state,s={[pe]:t,[nt]:"loading"===i,[it]:"disabled"===i},n=this.renderItemTooltips(),l=this.renderItems();return(0,O.u)("div",{class:this.classes(ue,s)},e?.length?[n,l]:this.renderNoItems())}renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?(0,O.u)("calcite-tooltip",{label:i.layerIncompatible,referenceElement:t.get(e.uid)},i.layerIncompatibleTooltip):null}renderItemTooltipNodes(e){const{incompatible:t,children:i}=e;return[t?this.renderItemTooltip(e):null,...t?[]:i?.toArray().map((e=>this.renderItemTooltipNodes(e)))]}renderItemTooltips(){return this.visibleItems.toArray().map((e=>this.renderItemTooltipNodes(e)))}renderNoItems(){return(0,O.u)("div",{class:_e},this.messages.noItemsToDisplay)}renderItems(){const{visibleItems:e,selectionEnabled:t,messages:i}=this;return(0,O.u)("ul",{"aria-label":i.widgetLabel,role:t?"listbox":void 0,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,"data-group":wt,bind:this,class:this.classes(ye,me,ve)},e?.map((e=>this.renderItem(e,null))).toArray())}renderActionsMenuIcon(e,t){const{messagesCommon:i}=this,s={[Me]:e.actionsOpen};return(0,O.u)("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(Pe,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i.options,title:i.options},(0,O.u)("span",{"aria-hidden":"true",class:rt}))}renderActionsMenu(e,t,i,s){const{panel:n}=e,l=n&&n.visible?this.renderPanelButton(n):null,r=1===i&&this._getSingleActionButton(t),a=r?this.renderAction({item:e,action:r,singleAction:!0}):null,o=!r&&i?this.renderActionsMenuIcon(e,s):null;return o||l||r?(0,O.u)("div",{key:"actions-menu",class:ke},l,a,o):null}renderChildList(e,t){const{selectionEnabled:i}=this,{visibilityMode:s,children:n}=e,l=this._hasChildren(e),r=!l&&i&&"group"===e.layer?.type,{exclusive:a,inherited:o}=It,d={[ge]:s===a,[be]:s===o,[ve]:s!==o&&s!==a};return l||r?(0,O.u)("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,class:this.classes(ye,d),"aria-expanded":e.open?"true":"false",role:i?"listbox":s===a?"radiogroup":"group",hidden:!e.open&&!r||null},n?.map((t=>this.renderItem(t,e))).toArray()):null}renderChildrenToggle(e,t){const{messagesCommon:i}=this,s=this._hasChildren(e),n={[Xe]:e.open},l=e.open?i.collapse:i.expand;return s?(0,O.u)("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes(Qe,n),tabindex:"0",role:"button","aria-controls":t,"aria-label":l,title:l},(0,O.u)("span",{"aria-hidden":"true",class:this.classes(Je,pt)}),(0,O.u)("span",{"aria-hidden":"true",class:this.classes(qe,ut)}),(0,O.u)("span",{"aria-hidden":"true",class:this.classes(et,_t)})):null}renderItemMessage(e){return e.error?(0,O.u)("div",{key:"esri-layer-list__error",class:Ye,role:"alert"},(0,O.u)("span",{"aria-hidden":"true",class:ht}),this.messages.layerError):e.incompatible?(0,O.u)("div",{key:"esri-layer-list__incompatible",class:Ye,role:"alert"},(0,O.u)("span",{bind:this,tabIndex:0,"aria-hidden":"true",class:ht,afterCreate:t=>this._setTooltipReference(t,e)}),this.messages.layerIncompatible):null}renderItemContent(e,t,i){const{id:s}=this,n=`${s}_${e.uid}`,l=`${n}_actions`,r=`${n}__list`,{panel:a}=e,o=this._filterActions(e.actionsSections),d=this._countActions(o);return[(0,O.u)("div",{key:"list-item-container",class:Ae},this.renderChildrenToggle(e,r),this.renderLabel(e,t,i),this.renderActionsMenu(e,o,d,l)),this.renderItemMessage(e),d?this.renderActionsSections(e,o,l):null,a&&a.open&&!a.disabled?a.render():null,this.renderChildList(e,r)]}renderItem(e,t){const{_newUI:i,id:s,selectionEnabled:n,selectedItems:l}=this,r=`${s}_${e.uid}__title`,a=this._hasMessage(e),o=this._hasChildren(e),d={[Se]:o,[Ie]:!!a,[fe]:i&&!e.visible,[we]:!e.visibleAtCurrentScale,[Le]:n};if(n){const i={[he]:e.layer?.uid,[ce]:(!e.sortable).toString()};return(0,O.u)("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(Ce,d),"aria-labelledby":r,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":e,"data-group":t?t.uid:wt,tabIndex:0,"aria-selected":E(e,l)?"true":"false",role:"option",...i},this.renderItemContent(e,t,r))}return(0,O.u)("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(Ce,d),"aria-labelledby":r},this.renderItemContent(e,t,r))}renderConnectionIcon(e){const{connectionStatus:t}=e;return(0,d.pC)(t)?(0,O.u)("calcite-icon",{icon:"connected"===t?"check-circle":"offline",scale:"s"}):null}renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:s,publishing:n,updating:l}=e,r=l&&!t,a=!!s;return(0,O.u)("span",{class:this.classes({[Ue]:!0,[He]:n,[ze]:r,[Be]:a,[We]:a&&"connected"===s}),key:"layer-item-status"},this.renderConnectionIcon(e))}renderItemTitle(e,t){const{messages:i}=this;if(!e)return null;const s=e.title||i.untitledLayer,n=e.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return(0,O.u)("span",{key:"layer-title-container",id:t,title:n,"aria-label":n,class:Ze},s)}renderItemToggleIcon(e,t){const{_newUI:i}=this,{exclusive:s}=It,n=t&&t.visibilityMode,l={[De]:i,[Ge]:i&&n!==s,[Ke]:i&&n===s,[dt]:n===s&&e.visible,[ct]:n===s&&!e.visible,[at]:n!==s&&e.visible,[ot]:n!==s&&!e.visible};return(0,O.u)("span",{key:"item-toggle-icon",class:this.classes(l),"aria-hidden":"true"})}renderItemToggle(e,t,i){const{selectionEnabled:s,messages:n}=this,{exclusive:l}=It,r=t&&t.visibilityMode,a=r===l?"radio":"switch";return(0,O.u)("span",s?{key:"item-toggle-selection-enabled",class:je,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":r,tabIndex:0,title:e.visible?n.hideLayer:n.showLayer,"aria-checked":e.visible?"true":"false",role:a,"aria-labelledby":i}:{key:"item-toggle",class:je},this.renderItemToggleIcon(e,t))}renderLabel(e,t,i){const{selectionEnabled:s,_newUI:n,messages:l}=this,{inherited:r,exclusive:a}=It,o=t?.visibilityMode,d=o===a?"radio":"switch",c=n?[this.renderItemTitle(e,i),this.renderItemStatus(e,t),this.renderItemToggle(e,t,i)]:[this.renderItemToggle(e,t,i),this.renderItemTitle(e,i),this.renderItemStatus(e,t)],h=(0,O.u)("div",s?{key:`item-label-no-selection-${e.uid}`,class:$e}:{key:`item-label-with-selection-${e.uid}`,class:$e,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":o,tabIndex:0,"aria-checked":e.visible?"true":"false",title:e.visible?l.hideLayer:l.showLayer,role:d,"aria-labelledby":i},c);return o===r||e.error?(0,O.u)("div",{key:`item-label-container-${e.uid}`,class:$e},this.renderItemTitle(e,i),this.renderItemStatus(e,t)):h}renderPanelButton(e){const{className:t,open:i,title:s,image:n}=e,l=n||t?t:mt,r=this._getIconImageStyles(e),a={[Me]:i},o={[Ne]:!!r["background-image"],[st]:e.disabled};return l&&(o[l]=!!l),(0,O.u)("div",{"aria-disabled":e.disabled.toString(),key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(Pe,a),role:"button",tabindex:e.disabled?null:0,title:s,"aria-label":s},(0,O.u)("span",{class:this.classes(o),styles:r}))}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>(0,O.u)("ul",{key:`${e}-action-section-${i}`,class:xe},this.renderActionSection(e,t))));return(0,O.u)("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:Ee,hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),n="button"!==e.type||e.image||i?i:mt,l={[Ne]:!t&&!!s["background-image"],[yt]:t,[lt]:t};return n&&!t&&(l[n]=!0),(0,O.u)("span",{key:"action-icon","aria-hidden":"true",class:this.classes(Oe,l),styles:s})}renderActionTitle(e,t){return t?null:(0,O.u)("span",{key:"action-title",class:Ve},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:n,disabled:l,title:r}=i,a={[Pe]:s&&"button"===i.type,[Te]:n||!s&&"toggle"!==i.type,[Re]:!n&&"toggle"===i.type,[Fe]:!n&&"toggle"===i.type&&i.value,[st]:l},o=[this.renderActionIcon(i),this.renderActionTitle(r,s)];return s?(0,O.u)("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",title:r,"aria-label":r},o):(0,O.u)("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",role:"button",title:r,"aria-label":r},o)}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.uid,e),this.scheduleRender()}_hasMessage(e){return!!e.error||e.incompatible}_hasChildren(e){return!!e.children.length&&!this._hasMessage(e)}_sortNodeRemoved(e){const{_sortableMap:t}=this,i=e.dataset.group,s=t.get(i);s&&s.destroy(),t.delete(i)}_destroySortables(){const{_sortableMap:e,_sortableNodes:t}=this;e.forEach((e=>e&&e.destroy())),e.clear(),t.clear()}_moveLayerFromChildList(e){let{to:t,from:i,item:s,newIndex:n}=e;const l=s["data-item"],r=t["data-item"],a=i["data-item"];this.viewModel.moveListItem(l,a,r,n)}_sortLayers(e){if(!e)return;const t=e.el["data-item"],i=e.toArray();t?function(e,t){const i=e?.layer;if(!i)return;const s=k(i);s&&P(i.get(s),t)}(t,i):P(this.view?.map?.layers,i)}_toggleSorting(e,t){const{_sortableMap:i,selectionEnabled:s}=this,n=i.get(t),l=e["data-item"],r=(t===wt||l.childrenSortable&&function(e){const t=e&&(e.get("layer.layer")||e.layer);if(!t)return!1;const i=t.get("capabilities.exportMap.supportsDynamicLayers");return"boolean"!=typeof i||i}(l))&&s;if(n)n.option("disabled",!r);else if(r){const s=ae.ZP.create(e,{dataIdAttr:he,group:{name:t,pull:this._sortableCanPull,put:this._sortableCanPut},filter:`[${ce}="true"]`,fallbackTolerance:4,onSort:this._onSortableSort,onEnd:this._onSortableEnd,disabled:!r,chosenClass:tt});i.set(t,s)}}_toggleAllSorting(){this._sortableNodes.forEach(((e,t)=>this._toggleSorting(e,t)))}_sortNodeCreated(e){const t=e.dataset.group;t&&(this._sortableNodes.set(t,e),this._toggleSorting(e,t))}_setVisibleItems(e){this.visibleItems=e?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_focusListItem(e){const{_focusSortUid:t}=this;e&&t&&e["data-item"].layer?.uid===t&&(e.focus(),this._focusSortUid=null)}_watchActionSectionChanges(e,t){const i=vt+t;this._handles.add(e.on("change",this.scheduleRender.bind(this)),i),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){const i=bt+t;"toggle"!==e.type?"slider"!==e.type?this._handles.add((0,c.YP)((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible]),(()=>this.scheduleRender()),c.nn),i):this._handles.add((0,c.YP)((()=>[e?.className,e?.id,e?.title,e?.visible,e?.value,e?.displayValueEnabled,e?.max,e?.min,e?.step]),(()=>this.scheduleRender()),c.nn),i):this._handles.add((0,c.YP)((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible,e?.value]),(()=>this.scheduleRender()),c.nn),i)}_renderOnItemChanges(e){const t=e.uid,i=Ct+t;this._handles.add([(0,c.YP)((()=>[e?.actionsOpen,e?.visible,e?.open,e?.updating,e?.connectionStatus,e?.publishing,e?.title,e?.visibleAtCurrentScale,e?.error,e?.visibilityMode,e?.panel,e?.panel?.title,e?.panel?.content,e?.panel?.className,e?.sortable,e?.childrenSortable]),(()=>this.scheduleRender()),c.tX),(0,c.YP)((()=>[e?.hidden,e?.error]),(()=>this._setVisibleItems(this.operationalItems))),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],i),e.children.forEach((e=>this._renderOnItemChanges(e))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(e){this._handles.removeAll(),e.forEach((e=>this._renderOnItemChanges(e))),this._tooltipReferenceMap.clear(),this._setVisibleItems(e),this.scheduleRender()}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}}_selectionKeydown(e){const t=(0,r.kK)(e);if(!["ArrowDown","ArrowUp"].includes(t))return void this._toggleSelection(e);e.stopPropagation();const i=e.currentTarget,s=i["data-item"],{_sortableMap:n,selectedItems:l}=this,a=i.dataset.group,o=n.get(a);if(!o)return;const d=E(s,l),c=o.toArray(),h=e.target,u=c.indexOf(h.dataset.layerUid);if(-1!==u){if("ArrowDown"===t){const e=u+1;if(e>=c.length)return;d?(oe(c,u,e),o.sort(c),this._sortLayers(o),this._focusSortUid=s.layer?.uid):(this._focusSortUid=s.layer?.uid,this.scheduleRender())}if("ArrowUp"===t){const e=u-1;if(e<=-1)return;d?(oe(c,u,e),o.sort(c),this._sortLayers(o),this._focusSortUid=s.layer?.uid):(this._focusSortUid=s.layer?.uid,this.scheduleRender())}}}_toggleActionsOpen(e){const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i;s&&this.operationalItems.forEach((e=>ft(e))),t.actionsOpen=s,e.stopPropagation()}_triggerPanel(e){const t=e.currentTarget["data-panel"];e.stopPropagation(),t&&!t.disabled&&(t.open=!t.open)}_triggerAction(e){const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s),e.stopPropagation()}_toggleVisibility(e){const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===It.exclusive&&s.visible||(s.visible=!s.visible),e.stopPropagation()}_toggleChildrenClick(e){const t=e.currentTarget["data-item"];t.open=!t.open,e.stopPropagation()}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=e.currentTarget["data-item"],n=E(s,i),{length:l}=i;if(!t)return!l||n&&1===l?void(n?i.remove?.(n):i.add(s)):(i.removeAll(),void i.add(s));n?i.remove?.(n):i.add(s)}};(0,n._)([(0,h.Cb)()],Lt.prototype,"visibleItems",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"iconClass",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"label",null),(0,n._)([(0,h.Cb)()],Lt.prototype,"listItemCanGiveFunction",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"listItemCanReceiveFunction",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"listItemCreatedFunction",null),(0,n._)([(0,h.Cb)(),(0,le.H)("esri/widgets/LayerList/t9n/LayerList")],Lt.prototype,"messages",void 0),(0,n._)([(0,h.Cb)(),(0,le.H)("esri/t9n/common")],Lt.prototype,"messagesCommon",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"multipleSelectionEnabled",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"operationalItems",null),(0,n._)([(0,h.Cb)()],Lt.prototype,"selectionEnabled",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"selectedItems",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"view",null),(0,n._)([(0,re.s)("trigger-action"),(0,h.Cb)({type:se})],Lt.prototype,"viewModel",void 0),(0,n._)([(0,h.Cb)()],Lt.prototype,"visibleElements",void 0),(0,n._)([(0,u.p)("visibleElements")],Lt.prototype,"castVisibleElements",null),(0,n._)([(0,ne.h)()],Lt.prototype,"_toggleActionsOpen",null),(0,n._)([(0,ne.h)()],Lt.prototype,"_triggerPanel",null),(0,n._)([(0,ne.h)()],Lt.prototype,"_triggerAction",null),(0,n._)([(0,ne.h)()],Lt.prototype,"_toggleVisibility",null),(0,n._)([(0,ne.h)()],Lt.prototype,"_toggleChildrenClick",null),(0,n._)([(0,ne.h)()],Lt.prototype,"_toggleSelection",null),Lt=(0,n._)([(0,p.j)("esri.widgets.LayerList")],Lt);const At=Lt}}]);
//# sourceMappingURL=5387.6ea86f7d.chunk.js.map