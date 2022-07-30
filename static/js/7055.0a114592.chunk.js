"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[7055],{37055:(e,t,i)=>{i.r(t),i.d(t,{Layers:()=>Rt,default:()=>$t});i(90521),i(11151);var s,n=i(85580),l=i(72791),r=i(26834),a=i(40281),o=i(9676),d=i(27366),c=i(98928),h=i(100),u=i(93169),p=i(94172),y=i(8025),m=(i(63780),i(89125)),_=i(49861),g=i(69912),b=i(69407),v=i(91505),f=(i(25243),i(85015)),C=i(41691),I=i(79056),w=i(57976),L=i(6945);let A=s=class extends w.Z{constructor(e){super(e),this.displayValueEnabled=!1,this.max=1,this.min=0,this.step=.1,this.type="slider",this.value=null}clone(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})}};(0,d._)([(0,_.Cb)()],A.prototype,"displayValueEnabled",void 0),(0,d._)([(0,_.Cb)()],A.prototype,"max",void 0),(0,d._)([(0,_.Cb)()],A.prototype,"min",void 0),(0,d._)([(0,_.Cb)()],A.prototype,"step",void 0),(0,d._)([(0,_.Cb)()],A.prototype,"value",void 0),A=s=(0,d._)([(0,g.j)("esri.support.Action.ActionSlider")],A);const S=A,E="hide",M="hide-children";function x(e){if(e)return null!=e.listMode?e.listMode:void 0}function k(e){if(e)return"type"in e?e.listMode!==M&&"wmts"!==e.type?"group"===e.type?"layers":"sublayers":void 0:"sublayers"}function P(e,t){e&&e.sort(((e,i)=>{const s=t.indexOf(e.uid),n=t.indexOf(i.uid);return s>n?-1:s<n?1:0}))}function T(e){const t=e?.layer;return t&&"group"===t.type?t.layers:null}function N(e,t){const i=e.layer?.uid;return i&&t.find((e=>e.layer?.uid===i))}function O(e){const t=function(e){return!!e?.layer}(e)?e:null,i=e?.parent,s="map-image"===i?.type&&t.source;return s&&i?{layer:i,title:"",sublayerIds:[s.mapLayerId]}:{layer:e,title:""}}var V=i(53963),R=i(67005);const $="esri-layer-list-panel",F="esri-layer-list-panel__content",U="esri-layer-list-panel__content--legend",Y="esri-layer-list-panel__content--string",Z="esri-layer-list-panel__content--html-element",B="esri-layer-list-panel__content--widget";let D=class extends((0,I.IG)(b.Z)){constructor(e,t){super(e,t),this._legend=null,this._handles=new h.Z,this.content=null,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}initialize(){this.own([(0,p.YP)((()=>this.content),(e=>this._createLegend(e)),p.nn)])}destroy(){const{_legend:e}=this;e&&e.destroy(),this._legend=null}get className(){const{image:e}=this,t=this._getFirstWidget();return this._get("className")||!e&&t?t.iconClass:""}set className(e){void 0!==e?this._override("className",e):this._clearOverride("className")}get title(){const e=this._getFirstWidget();return this._get("title")||e?e.label:""}set title(e){void 0!==e?this._override("title",e):this._clearOverride("title")}render(){return(0,R.u)("div",{class:$},this._renderContents())}_renderContent(e){const{_legend:t,listItem:i}=this;return e?"legend"===e?i&&i.view&&i.layer&&t?(0,R.u)("div",{class:this.classes(F,U),key:t},t.render()):null:"string"==typeof e?(0,R.u)("div",{class:this.classes(F,Y),key:e,innerHTML:e}):(0,V.Qd)(e)?(0,R.u)("div",{class:this.classes(F,B),key:e},e.render()):e instanceof HTMLElement?(0,R.u)("div",{class:this.classes(F,Z),key:e,bind:e,afterCreate:this._attachToNode}):null:null}_renderContents(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e)}_getLegendOptions(){const{listItem:e}=this;if(!e)return{};const{layer:t,view:i}=e;return t&&i?{view:i,layerInfos:[O(t)]}:{}}_createLegend(e){this._hasLegend(e)&&!this._legend&&Promise.all([i.e(6009),i.e(5349)]).then(i.bind(i,65349)).then((e=>{let{default:t}=e;const{_handles:i,listItem:s}=this,n=new t(this._getLegendOptions());this._legend=n,this.notifyChange("className"),this.notifyChange("title");const l=(0,p.YP)((()=>[s?.view,s?.layer,s?.layer?.source,s?.layer?.parent]),(()=>this._updateLegend(n)),p.nn);i.add(l,"legends"),this.scheduleRender()}))}_hasLegend(e){const t="legend";return e===t||!!Array.isArray(e)&&e.includes(t)}_attachToNode(e){e.appendChild(this)}_updateLegend(e){e.set(this._getLegendOptions()),this.scheduleRender()}_getWidget(e){return"legend"===e?this._legend:(0,V.Qd)(e)?e:null}_getFirstWidget(){const{content:e}=this;if(Array.isArray(e)){let t=null;return e.some((e=>{const i=this._getWidget(e);return i&&(t=i),!!i})),t}return this._getWidget(e)}};(0,d._)([(0,_.Cb)()],D.prototype,"className",null),(0,d._)([(0,_.Cb)()],D.prototype,"content",void 0),(0,d._)([(0,_.Cb)()],D.prototype,"image",void 0),(0,d._)([(0,_.Cb)()],D.prototype,"listItem",void 0),(0,d._)([(0,_.Cb)()],D.prototype,"title",null),(0,d._)([(0,_.Cb)()],D.prototype,"open",void 0),(0,d._)([(0,_.Cb)()],D.prototype,"visible",void 0),D=(0,d._)([(0,g.j)("esri.widgets.LayerList.ListItemPanel")],D);const j=D;var H;const z=a.Z.ofType({key:"type",defaultKeyValue:"button",base:w.Z,typeMap:{button:L.Z,toggle:o.Z,slider:S}}),W=a.Z.ofType(z),G="layer",K="child-list-mode";let Q=H=class extends((0,I.IG)((0,C.p)(f.Z))){constructor(e){super(e),this.actionsSections=new W,this.actionsOpen=!1,this.children=new(a.Z.ofType(H)),this.childrenSortable=!0,this.error=null,this.hidden=!1,this.layer=null,this.layerView=null,this.listItemCreatedFunction=null,this.open=!1,this.panel=null,this.parent=null,this.sortable=!0,this.view=null,this.visible=null}initialize(){if(this.handles.add([(0,p.YP)((()=>this.layer),(e=>this._watchLayerProperties(e)),p.nn),(0,p.YP)((()=>this.view),(e=>this._updateChildren(e)),p.nn),(0,p.YP)((()=>this.panel),(e=>this._setListItemOnPanel(e)),p.nn),(0,p.YP)((()=>[this.layer,this.view]),(()=>this._getLayerView()),p.nn)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.view=null}get connectionStatus(){const{layerView:e}=this;if(e&&"connectionStatus"in e)return e.connectionStatus}get incompatible(){const{layerView:e}=this;return!(!e||!("spatialReferenceSupported"in e))&&!e.spatialReferenceSupported}castPanel(e){return this.get("panel.open")&&!e.hasOwnProperty("open")&&(e.open=!0),e?new j(e):null}get title(){const e=this.get("layer.layer");return(!e||e&&this.get("layer.layer.loaded"))&&this.get("layer.title")||this.get("layer.attributes.title")||""}set title(e){void 0!==e?this._override("title",e):this._clearOverride("title")}get updating(){const{layerView:e,connectionStatus:t}=this;return!t&&(e?e.updating:this._isLayerUpdating(this.layer))}get visibleAtCurrentScale(){return!function(e,t){if(!e||isNaN(t))return!1;const i=function(e){if(e)return null!=e.minScale?e.minScale:void 0}(e),s=function(e){if(e)return null!=e.maxScale?e.maxScale:void 0}(e),n=!isNaN(i)&&i>0&&t>i,l=!isNaN(s)&&s>0&&t<s;return n||l}(this.layer,this.get("view.scale"))}get visibilityMode(){return function(e){if(!e)return"inherited";const t=e.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"==typeof t)return t?"independent":"inherited";const i=e.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"==typeof i?i?"independent":"inherited":null!=e.visibilityMode?e.visibilityMode:"independent"}(this.layer)}clone(){return new H({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,children:this.children.clone(),layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,open:this.open,panel:this.panel,title:this.title,view:this.view,visible:this.visible})}_setListItemOnPanel(e){e&&(e.listItem=this)}_updateChildren(e){const t=this.children;t&&t.forEach((t=>t.view=e))}_addChildren(e){if(this.handles.remove(K),this.children.removeAll(),!e)return;e.forEach((t=>{this.handles.add((0,p.YP)((()=>t.listMode),(()=>this._addChildren(e))),K)}));const t=e.filter((e=>"hide"!==x(e)));this.children.addMany(this._makeChildren(t))}_watchSublayerChanges(e){e&&this.handles.add(e.on("change",(()=>{this._addChildren(e)})),G)}_initializeChildLayers(e){this._addChildren(e),this._watchSublayerChanges(e)}_makeChildren(e){return e.map((e=>function(e){return x(e)!==E}(e)?new H({layer:e,listItemCreatedFunction:this.listItemCreatedFunction,parent:this,view:this.view}):null)).reverse()}_watchLayerProperties(e){if(!this.handles)return;if(this.handles.remove(G),this.handles.remove(K),!e)return;if(this.handles.add((0,p.YP)((()=>e.listMode),(()=>this._watchLayerProperties(e))),G),"hide-children"===x(e))return void this.children.removeAll();const t=k(e);t&&this.handles.add((0,p.YP)((()=>e[t]),(()=>{e.hasOwnProperty(t)&&this._initializeChildLayers(e[t])}),p.nn),G)}async _getLayerView(){const{layer:e,view:t}=this;if(e&&t)try{const i=await t.whenLayerView(e);if(i.layer!==this.layer)return;this._set("layerView",i)}catch{}}_isLayerUpdating(e){return e&&"loading"===e.loadStatus}};(0,d._)([(0,_.Cb)({type:W})],Q.prototype,"actionsSections",void 0),(0,d._)([(0,_.Cb)()],Q.prototype,"actionsOpen",void 0),(0,d._)([(0,_.Cb)({type:a.Z})],Q.prototype,"children",void 0),(0,d._)([(0,_.Cb)()],Q.prototype,"childrenSortable",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],Q.prototype,"connectionStatus",null),(0,d._)([(0,y.B)("layer.loadError?")],Q.prototype,"error",void 0),(0,d._)([(0,_.Cb)()],Q.prototype,"hidden",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],Q.prototype,"incompatible",null),(0,d._)([(0,_.Cb)()],Q.prototype,"layer",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],Q.prototype,"layerView",void 0),(0,d._)([(0,_.Cb)()],Q.prototype,"listItemCreatedFunction",void 0),(0,d._)([(0,_.Cb)()],Q.prototype,"open",void 0),(0,d._)([(0,_.Cb)({type:j})],Q.prototype,"panel",void 0),(0,d._)([(0,m.p)("panel")],Q.prototype,"castPanel",null),(0,d._)([(0,_.Cb)()],Q.prototype,"parent",void 0),(0,d._)([(0,_.Cb)()],Q.prototype,"sortable",void 0),(0,d._)([(0,_.Cb)()],Q.prototype,"title",null),(0,d._)([(0,_.Cb)({readOnly:!0})],Q.prototype,"updating",null),(0,d._)([(0,_.Cb)({value:null})],Q.prototype,"view",void 0),(0,d._)([(0,y.B)("layer.visible")],Q.prototype,"visible",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],Q.prototype,"visibleAtCurrentScale",null),(0,d._)([(0,_.Cb)({readOnly:!0})],Q.prototype,"visibilityMode",null),Q=H=(0,d._)([(0,g.j)("esri.widgets.LayerList.ListItem")],Q);const q=Q,X="view",J="view-layers",ee="map-layers",te="layer-views",ie="layer-list-mode",se="children",ne=a.Z.ofType(q);let le=class extends v.Z.EventedAccessor{constructor(e){super(e),this._handles=new h.Z,this.listItemCreatedFunction=null,this.operationalItems=new ne,this.view=null}initialize(){this._handles.add([(0,p.YP)((()=>[this.view,this.view?.ready]),(()=>this._viewHandles()),p.nn),(0,p.YP)((()=>this.listItemCreatedFunction),(()=>this._listItemCreatedFunctionChanged()))],X)}destroy(){this._handles.destroy(),this._handles=null,this.view=null,this.operationalItems.removeAll()}get state(){const e=this.get("view");return this.get("view.ready")?"ready":e?"loading":"disabled"}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}moveListItem(e,t,i,s){const n=e?.layer;if(!n)return;const l=this.view?.map?.layers,r=t?T(t):l,a=i?T(i):l;if(!r||!a)return;const{operationalItems:o}=this,d=t?.children||o,c=i?.children||o,h=a.length-s;e.parent=i||null,d.includes(e)&&d.remove(e),r.includes(n)&&r.remove(n),c.includes(e)||c.add(e,h),a.includes(n)||a.add(n,h)}_createLayerViewHandles(e){const{_handles:t}=this;t.remove(te),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),te)}_createMapLayerHandles(e){const{_handles:t}=this;t.remove(ee),this._compileList(),e&&t.add(e.on("change",(()=>this._compileList())),ee)}_createListItem(e){const{view:t,listItemCreatedFunction:i}=this;return new q({layer:e,listItemCreatedFunction:i,view:t})}_removeAllItems(){const{_handles:e,operationalItems:t}=this;t.forEach((t=>{e.remove(`${se}-${t.uid}`)})),t.removeAll()}_getViewableLayers(e){if(e)return e.filter((e=>"hide"!==x(e)))}_watchLayersListMode(e){const{_handles:t}=this;t.remove(ie),e&&e.forEach((e=>{"listMode"in e&&t.add((0,p.YP)((()=>e.listMode),(()=>this._compileList())),ie)}))}_compileList(){const e=this.get("view.map.layers");this._watchLayersListMode(e);const t=this._getViewableLayers(e);t&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{operationalItems:t}=this;e.forEach((e=>{t.find((t=>t.layer===e))||t.add(this._createListItem(e))}))}_removeItems(e){const{_handles:t,operationalItems:i}=this,s=[];i.forEach((i=>{i&&e&&e.includes(i.layer)||(t.remove(`${se}-${i.uid}`),s.push(i))})),i.removeMany(s)}_sortItems(e){const{operationalItems:t}=this;t.sort(((t,i)=>{const s=e.indexOf(t.layer),n=e.indexOf(i.layer);return s>n?-1:s<n?1:0}))}_listItemCreatedFunctionChanged(){this._removeAllItems(),this._compileList()}_viewHandles(){const{_handles:e,view:t}=this;e.remove([ee,te,J]),this._compileList(),t&&t.ready&&e.add([(0,p.YP)((()=>this.view?.map?.allLayers),(e=>this._createMapLayerHandles(e)),p.nn),(0,p.YP)((()=>this.view?.allLayerViews),(e=>this._createLayerViewHandles(e)),p.nn)],J)}};(0,d._)([(0,_.Cb)()],le.prototype,"listItemCreatedFunction",void 0),(0,d._)([(0,_.Cb)({type:ne})],le.prototype,"operationalItems",void 0),(0,d._)([(0,_.Cb)({readOnly:!0})],le.prototype,"state",null),(0,d._)([(0,_.Cb)()],le.prototype,"view",void 0),le=(0,d._)([(0,g.j)("esri.widgets.LayerList.LayerListViewModel")],le);const re=le;var ae=i(78088),oe=i(80532),de=i(93531),ce=(i(80975),i(70281));function he(e,t,i){e.splice(i,0,e.splice(t,1)[0])}const ue=a.Z.ofType(q),pe="data-sort-filter",ye="data-layer-uid",me="esri-layer-list esri-widget esri-widget--panel",_e="esri-layer-list--new-ui",ge="esri-layer-list__no-items",be="esri-layer-list__list",ve="esri-layer-list__list--root",fe="esri-layer-list__list--exclusive",Ce="esri-layer-list__list--inherited",Ie="esri-layer-list__list--independent",we="esri-layer-list__item",Le="esri-layer-list__item--has-message",Ae="esri-layer-list__item--invisible",Se="esri-layer-list__item--invisible-at-scale",Ee="esri-layer-list__item--updating",Me="esri-layer-list__item--has-children",xe="esri-layer-list__item--selectable",ke="esri-layer-list__item-container",Pe="esri-layer-list__item-actions-menu",Te="esri-layer-list__item-actions-menu-item",Ne="esri-layer-list__item-actions-menu-item--active",Oe="esri-layer-list__item-actions",Ve="esri-layer-list__item-actions-list",Re="esri-layer-list__item-action",$e="esri-layer-list__item-action-icon",Fe="esri-layer-list__item-action-image",Ue="esri-layer-list__item-action-title",Ye="esri-layer-list__action-toggle",Ze="esri-layer-list__action-toggle--on",Be="esri-layer-list__item-label",De="esri-layer-list__item-message",je="esri-layer-list__item-title",He="esri-layer-list__connection-status",ze="esri-layer-list__connection-status--disconnected",We="esri-layer-list__connection-status--connected",Ge="esri-layer-list__item-toggle",Ke="esri-layer-list__item-toggle-icon",Qe="esri-layer-list__item-toggle-icon",qe="esri-layer-list__item-radio-icon",Xe="esri-layer-list__child-toggle",Je="esri-layer-list__child-toggle--open",et="esri-layer-list__child-toggle-icon--opened",tt="esri-layer-list__child-toggle-icon--closed",it="esri-layer-list__child-toggle-icon--closed-rtl",st="esri-layer-list--chosen",nt="esri-disabled",lt="esri-disabled-element",rt="esri-hidden",at="esri-rotating",ot="esri-icon-handle-horizontal",dt="esri-icon-visible",ct="esri-icon-non-visible",ht="esri-icon-radio-checked",ut="esri-icon-radio-unchecked",pt="esri-icon-notice-triangle",yt="esri-icon-down-arrow",mt="esri-icon-right-triangle-arrow",_t="esri-icon-left-triangle-arrow",gt="esri-icon-loading-indicator",bt="esri-icon-default-action",vt="esri-icon-layers",ft="actions",Ct="action-section",It="items",wt={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function Lt(e){const{actionsOpen:t,children:i}=e;t&&(e.actionsOpen=!1),i.forEach((e=>Lt(e)))}const At="root",St={statusIndicators:!0};let Et=class extends b.Z{constructor(e,t){super(e,t),this._handles=new h.Z,this._sortableNodes=new Map,this._sortableMap=new Map,this._focusSortUid=null,this._newUI=(0,u.Z)("esri-layerlist-new-ui"),this._tooltipReferenceMap=new Map,this.visibleItems=null,this.iconClass=vt,this.label=void 0,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.listItemCreatedFunction=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.operationalItems=null,this.selectionEnabled=!1,this.selectedItems=new ue,this.view=null,this.viewModel=new re,this.visibleElements={...St},this._onSortableSort=e=>{let{to:t,from:i,item:s,newIndex:n}=e;i&&t&&(i===t?this._sortLayers(this._sortableMap.get(i.dataset.group)):this._moveLayerFromChildList({to:t,from:i,item:s,newIndex:n}))},this._sortableCanSort=(e,t)=>!(!e.el.dataset.group||!t.el.dataset.group),this._sortableCanPull=(e,t,i)=>{const{listItemCanGiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._sortableCanPut=(e,t,i)=>{const{listItemCanReceiveFunction:s}=this,n={selected:i["data-item"],from:t.el["data-item"],to:e.el["data-item"]};return!this._sortableCanSort(e,t)||"function"!=typeof s||s.call(null,n)},this._onSortableEnd=e=>{let{oldIndex:t,from:i,to:s,item:n}=e;i!==s&&i.insertBefore(n,i.children[t])}}initialize(){const e=this.operationalItems;this._setVisibleItems(e),this.own([(0,p.on)((()=>this.operationalItems),"change",(()=>this._itemsChanged(e))),(0,p.YP)((()=>this.errorsVisible),(()=>this._itemsChanged(e))),(0,p.YP)((()=>this.selectionEnabled),(()=>this._toggleAllSorting()),p.nn)])}loadDependencies(){return Promise.all([i.e(1512).then(i.bind(i,51512))])}destroy(){this._destroySortables(),this._tooltipReferenceMap.clear(),this._handles.destroy(),this._handles=null}castVisibleElements(e){return{...St,...e}}triggerAction(e,t){this.viewModel.triggerAction(e,t)}render(){const{visibleItems:e,_newUI:t}=this,i=this.viewModel?.state,s={[_e]:t,[rt]:"loading"===i,[nt]:"disabled"===i},n=this.renderItemTooltips(),l=this.renderItems();return(0,R.u)("div",{class:this.classes(me,s)},e?.length?[n,l]:this.renderNoItems())}renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:i}=this;return e?(0,R.u)("calcite-tooltip",{label:i.layerIncompatible,referenceElement:t.get(e.uid)},i.layerIncompatibleTooltip):null}renderItemTooltipNodes(e){const{incompatible:t,children:i}=e;return[t?this.renderItemTooltip(e):null,...t?[]:i?.toArray().map((e=>this.renderItemTooltipNodes(e)))]}renderItemTooltips(){return this.visibleItems.toArray().map((e=>this.renderItemTooltipNodes(e)))}renderNoItems(){return(0,R.u)("div",{class:ge},this.messages.noItemsToDisplay)}renderItems(){const{visibleItems:e,selectionEnabled:t,messages:i}=this;return(0,R.u)("ul",{"aria-label":i.widgetLabel,role:t?"listbox":void 0,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,"data-group":At,bind:this,class:this.classes(be,ve,Ie)},e?.map((e=>this.renderItem(e,null))).toArray())}renderActionsMenuIcon(e,t){const{messagesCommon:i}=this,s={[Ne]:e.actionsOpen};return(0,R.u)("div",{key:"actions-menu-toggle","data-item":e,bind:this,onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,class:this.classes(Te,s),tabindex:"0",role:"button","aria-controls":t,"aria-label":i.options,title:i.options},(0,R.u)("span",{"aria-hidden":"true",class:ot}))}renderActionsMenu(e,t,i,s){const{panel:n}=e,l=n&&n.visible?this.renderPanelButton(n):null,r=1===i&&this._getSingleActionButton(t),a=r?this.renderAction({item:e,action:r,singleAction:!0}):null,o=!r&&i?this.renderActionsMenuIcon(e,s):null;return o||l||r?(0,R.u)("div",{key:"actions-menu",class:Pe},l,a,o):null}renderChildList(e,t){const{selectionEnabled:i}=this,{visibilityMode:s,children:n}=e,l=this._hasChildren(e),r=!l&&i&&"group"===e.layer?.type,{exclusive:a,inherited:o}=wt,d={[fe]:s===a,[Ce]:s===o,[Ie]:s!==o&&s!==a};return l||r?(0,R.u)("ul",{bind:this,key:"list-items",id:t,"data-group":e.uid,"data-item":e,afterCreate:this._sortNodeCreated,afterUpdate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,class:this.classes(be,d),"aria-expanded":e.open?"true":"false",role:i?"listbox":s===a?"radiogroup":"group",hidden:!e.open&&!r||null},n?.map((t=>this.renderItem(t,e))).toArray()):null}renderChildrenToggle(e,t){const{messagesCommon:i}=this,s=this._hasChildren(e),n={[Je]:e.open},l=e.open?i.collapse:i.expand;return s?(0,R.u)("span",{onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,"data-item":e,key:"toggle-children",class:this.classes(Xe,n),tabindex:"0",role:"button","aria-controls":t,"aria-label":l,title:l},(0,R.u)("span",{"aria-hidden":"true",class:this.classes(tt,mt)}),(0,R.u)("span",{"aria-hidden":"true",class:this.classes(et,yt)}),(0,R.u)("span",{"aria-hidden":"true",class:this.classes(it,_t)})):null}renderItemMessage(e){return e.error?(0,R.u)("div",{key:"esri-layer-list__error",class:De,role:"alert"},(0,R.u)("span",{"aria-hidden":"true",class:pt}),this.messages.layerError):e.incompatible?(0,R.u)("div",{key:"esri-layer-list__incompatible",class:De,role:"alert"},(0,R.u)("span",{bind:this,tabIndex:0,"aria-hidden":"true",class:pt,afterCreate:t=>this._setTooltipReference(t,e)}),this.messages.layerIncompatible):null}renderItemContent(e,t,i){const{id:s}=this,n=`${s}_${e.uid}`,l=`${n}_actions`,r=`${n}__list`,{panel:a}=e,o=this._filterActions(e.actionsSections),d=this._countActions(o);return[(0,R.u)("div",{key:"list-item-container",class:ke},this.renderChildrenToggle(e,r),this.renderLabel(e,t,i),this.renderActionsMenu(e,o,d,l)),this.renderItemMessage(e),d?this.renderActionsSections(e,o,l):null,a&&a.open?a.render():null,this.renderChildList(e,r)]}renderItem(e,t){const{_newUI:i,id:s,selectionEnabled:n,selectedItems:l,visibleElements:r}=this,a=`${s}_${e.uid}__title`,o=this._hasMessage(e),d=this._hasChildren(e),c={[Me]:d,[Le]:!!o,[Ee]:e.updating&&!t&&r.statusIndicators,[Ae]:i&&!e.visible,[Se]:!e.visibleAtCurrentScale,[xe]:n};if(n){const i={[ye]:e.layer?.uid,[pe]:(!e.sortable).toString()};return(0,R.u)("li",{key:`item-with-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(we,c),"aria-labelledby":a,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,"data-item":e,"data-group":t?t.uid:At,tabIndex:0,"aria-selected":N(e,l)?"true":"false",role:"option",...i},this.renderItemContent(e,t,a))}return(0,R.u)("li",{key:`item-no-selection-${e.uid}`,bind:this,afterCreate:this._focusListItem,afterUpdate:this._focusListItem,class:this.classes(we,c),"aria-labelledby":a},this.renderItemContent(e,t,a))}renderItemConnectionStatus(e){const{connectionStatus:t}=e;return t?(0,R.u)("span",{class:this.classes({[He]:!0,[ze]:"disconnected"===t,[We]:"connected"===t}),key:"layer-connection-status"}):null}renderItemTitle(e,t){const{messages:i}=this;if(!e)return null;const s=e.title||i.untitledLayer,n=e.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return(0,R.u)("span",{key:"layer-title-container",id:t,title:n,"aria-label":n,class:je},s)}renderItemToggleIcon(e,t){const{_newUI:i}=this,{exclusive:s}=wt,n=t&&t.visibilityMode,l={[Ke]:i,[Qe]:i&&n!==s,[qe]:i&&n===s,[ht]:n===s&&e.visible,[ut]:n===s&&!e.visible,[dt]:n!==s&&e.visible,[ct]:n!==s&&!e.visible};return(0,R.u)("span",{key:"item-toggle-icon",class:this.classes(l),"aria-hidden":"true"})}renderItemToggle(e,t,i){const{selectionEnabled:s,messages:n}=this,{exclusive:l}=wt,r=t&&t.visibilityMode,a=r===l?"radio":"switch";return(0,R.u)("span",s?{key:"item-toggle-selection-enabled",class:Ge,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":r,tabIndex:0,title:e.visible?n.hideLayer:n.showLayer,"aria-checked":e.visible?"true":"false",role:a,"aria-labelledby":i}:{key:"item-toggle",class:Ge},this.renderItemToggleIcon(e,t))}renderLabel(e,t,i){const{selectionEnabled:s,_newUI:n,messages:l}=this,{inherited:r,exclusive:a}=wt,o=t?.visibilityMode,d=o===a?"radio":"switch",c=[this.renderItemToggle(e,t,i),this.renderItemConnectionStatus(e),this.renderItemTitle(e,i)];n&&c.reverse();const h=(0,R.u)("div",s?{key:`item-label-no-selection-${e.uid}`,class:Be}:{key:`item-label-with-selection-${e.uid}`,class:Be,bind:this,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,"data-item":e,"data-parent-visibility":o,tabIndex:0,"aria-checked":e.visible?"true":"false",title:e.visible?l.hideLayer:l.showLayer,role:d,"aria-labelledby":i},c);return o===r||e.error?(0,R.u)("div",{key:`item-label-container-${e.uid}`,class:Be},this.renderItemTitle(e,i)):h}renderPanelButton(e){const{className:t,open:i,title:s,image:n}=e,l=n||t?t:bt,r=this._getIconImageStyles(e),a={[Ne]:i},o={[Fe]:!!r["background-image"]};return l&&(o[l]=!!l),(0,R.u)("div",{key:`panel-${e.uid}`,bind:this,"data-panel":e,onclick:this._triggerPanel,onkeydown:this._triggerPanel,class:this.classes(Te,a),role:"button",tabindex:"0",title:s,"aria-label":s},(0,R.u)("span",{class:this.classes(o),styles:r}))}renderActionsSections(e,t,i){const s=t.toArray().map(((t,i)=>(0,R.u)("ul",{key:`${e}-action-section-${i}`,class:Ve},this.renderActionSection(e,t))));return(0,R.u)("div",{role:"group","aria-expanded":e.actionsOpen?"true":"false",key:"actions-section",id:i,class:Oe,hidden:!e.actionsOpen||null},s)}renderActionSection(e,t){return(t&&t.toArray()).map((t=>this.renderAction({item:e,action:t})))}renderActionIcon(e){const{active:t,className:i}=e,s=this._getIconImageStyles(e),n="button"!==e.type||e.image||i?i:bt,l={[Fe]:!t&&!!s["background-image"],[gt]:t,[at]:t};return n&&!t&&(l[n]=!0),(0,R.u)("span",{key:"action-icon","aria-hidden":"true",class:this.classes($e,l),styles:s})}renderActionTitle(e,t){return t?null:(0,R.u)("span",{key:"action-title",class:Ue},e)}renderAction(e){const{item:t,action:i,singleAction:s}=e,{active:n,disabled:l,title:r}=i,a={[Te]:s&&"button"===i.type,[Re]:n||!s&&"toggle"!==i.type,[Ye]:!n&&"toggle"===i.type,[Ze]:!n&&"toggle"===i.type&&i.value,[lt]:l},o=[this.renderActionIcon(i),this.renderActionTitle(r,s)];return s?(0,R.u)("div",{bind:this,"data-item":t,"data-action":i,role:"button",key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",title:r,"aria-label":r},o):(0,R.u)("li",{bind:this,"data-item":t,"data-action":i,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,classes:a,tabindex:"0",role:"button",title:r,"aria-label":r},o)}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.uid,e),this.scheduleRender()}_hasMessage(e){return!!e.error||e.incompatible}_hasChildren(e){return!!e.children.length&&!this._hasMessage(e)}_sortNodeRemoved(e){const{_sortableMap:t}=this,i=e.dataset.group,s=t.get(i);s&&s.destroy(),t.delete(i)}_destroySortables(){const{_sortableMap:e,_sortableNodes:t}=this;e.forEach((e=>e&&e.destroy())),e.clear(),t.clear()}_moveLayerFromChildList(e){let{to:t,from:i,item:s,newIndex:n}=e;const l=s["data-item"],r=t["data-item"],a=i["data-item"];this.viewModel.moveListItem(l,a,r,n)}_sortLayers(e){if(!e)return;const t=e.el["data-item"],i=e.toArray();t?function(e,t){const i=e?.layer;if(!i)return;const s=k(i);s&&P(i.get(s),t)}(t,i):P(this.view?.map?.layers,i)}_toggleSorting(e,t){const{_sortableMap:i,selectionEnabled:s}=this,n=i.get(t),l=e["data-item"],r=(t===At||l.childrenSortable&&function(e){const t=e&&(e.get("layer.layer")||e.layer);if(!t)return!1;const i=t.get("capabilities.exportMap.supportsDynamicLayers");return"boolean"!=typeof i||i}(l))&&s;if(n)n.option("disabled",!r);else if(r){const s=ce.ZP.create(e,{dataIdAttr:ye,group:{name:t,pull:this._sortableCanPull,put:this._sortableCanPut},filter:`[${pe}="true"]`,fallbackTolerance:4,onSort:this._onSortableSort,onEnd:this._onSortableEnd,disabled:!r,chosenClass:st});i.set(t,s)}}_toggleAllSorting(){this._sortableNodes.forEach(((e,t)=>this._toggleSorting(e,t)))}_sortNodeCreated(e){const t=e.dataset.group;t&&(this._sortableNodes.set(t,e),this._toggleSorting(e,t))}_setVisibleItems(e){this.visibleItems=e?.filter((e=>!e.hidden&&(this.errorsVisible||!e.error)))}_getSingleActionButton(e){return e.reduce((e=>e)).filter((e=>e&&"button"===e.type)).getItemAt(0)}_focusListItem(e){const{_focusSortUid:t}=this;e&&t&&e["data-item"].layer?.uid===t&&(e.focus(),this._focusSortUid=null)}_watchActionSectionChanges(e,t){const i=Ct+t;this._handles.add(e.on("change",this.scheduleRender.bind(this)),i),e.forEach((e=>this._renderOnActionChanges(e,t)))}_renderOnActionChanges(e,t){const i=ft+t;"toggle"!==e.type?"slider"!==e.type?this._handles.add((0,p.YP)((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible]),(()=>this.scheduleRender()),p.nn),i):this._handles.add((0,p.YP)((()=>[e?.className,e?.id,e?.title,e?.visible,e?.value,e?.displayValueEnabled,e?.max,e?.min,e?.step]),(()=>this.scheduleRender()),p.nn),i):this._handles.add((0,p.YP)((()=>[e?.className,e?.image,e?.id,e?.title,e?.visible,e?.value]),(()=>this.scheduleRender()),p.nn),i)}_renderOnItemChanges(e){const t=e.uid,i=It+t;this._handles.add([(0,p.YP)((()=>[e?.actionsOpen,e?.visible,e?.open,e?.updating,e?.title,e?.visibleAtCurrentScale,e?.error,e?.visibilityMode,e?.panel,e?.panel?.title,e?.panel?.content,e?.panel?.className,e?.sortable,e?.childrenSortable]),(()=>this.scheduleRender()),p.tX),(0,p.YP)((()=>[e?.hidden,e?.error]),(()=>this._setVisibleItems(this.operationalItems))),e.actionsSections.on("change",(()=>this.scheduleRender())),e.children.on("change",(()=>this.scheduleRender()))],i),e.children.forEach((e=>this._renderOnItemChanges(e))),e.actionsSections.forEach((e=>this._watchActionSectionChanges(e,t)))}_itemsChanged(e){this._handles.removeAll(),e.forEach((e=>this._renderOnItemChanges(e))),this._tooltipReferenceMap.clear(),this._setVisibleItems(e),this.scheduleRender()}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_getIconImageStyles(e){const t="esri.widgets.LayerList.ListItemPanel"===e.declaredClass||"esri.support.Action.ActionButton"===e.declaredClass||"esri.support.Action.ActionToggle"===e.declaredClass?e.image:null;return{"background-image":t?`url("${t}")`:null}}_selectionKeydown(e){const t=(0,c.kK)(e);if(!["ArrowDown","ArrowUp"].includes(t))return void this._toggleSelection(e);e.stopPropagation();const i=e.currentTarget,s=i["data-item"],{_sortableMap:n,selectedItems:l}=this,r=i.dataset.group,a=n.get(r);if(!a)return;const o=N(s,l),d=a.toArray(),h=e.target,u=d.indexOf(h.dataset.layerUid);if(-1!==u){if("ArrowDown"===t){const e=u+1;if(e>=d.length)return;o?(he(d,u,e),a.sort(d),this._sortLayers(a),this._focusSortUid=s.layer?.uid):(this._focusSortUid=s.layer?.uid,this.scheduleRender())}if("ArrowUp"===t){const e=u-1;if(e<=-1)return;o?(he(d,u,e),a.sort(d),this._sortLayers(a),this._focusSortUid=s.layer?.uid):(this._focusSortUid=s.layer?.uid,this.scheduleRender())}}}_toggleActionsOpen(e){const t=e.currentTarget["data-item"],{actionsOpen:i}=t,s=!i;s&&this.operationalItems.forEach((e=>Lt(e))),t.actionsOpen=s,e.stopPropagation()}_triggerPanel(e){const t=e.currentTarget["data-panel"];t&&(t.open=!t.open),e.stopPropagation()}_triggerAction(e){const t=e.currentTarget,i=t["data-action"],s=t["data-item"];"toggle"===i.type&&(i.value=!i.value),this.triggerAction(i,s),e.stopPropagation()}_toggleVisibility(e){const t=e.currentTarget,i=t.getAttribute("data-parent-visibility"),s=t["data-item"];i===wt.exclusive&&s.visible||(s.visible=!s.visible),e.stopPropagation()}_toggleChildrenClick(e){const t=e.currentTarget["data-item"];t.open=!t.open,e.stopPropagation()}_toggleSelection(e){e.stopPropagation();const{multipleSelectionEnabled:t,selectedItems:i}=this,s=e.currentTarget["data-item"],n=N(s,i),{length:l}=i;if(!t)return!l||n&&1===l?void(n?i.remove?.(n):i.add(s)):(i.removeAll(),void i.add(s));n?i.remove?.(n):i.add(s)}};(0,d._)([(0,_.Cb)()],Et.prototype,"visibleItems",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"iconClass",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"errorsVisible",void 0),(0,d._)([(0,_.Cb)({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],Et.prototype,"label",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"listItemCanGiveFunction",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"listItemCanReceiveFunction",void 0),(0,d._)([(0,y.B)("viewModel.listItemCreatedFunction")],Et.prototype,"listItemCreatedFunction",void 0),(0,d._)([(0,_.Cb)(),(0,oe.H)("esri/widgets/LayerList/t9n/LayerList")],Et.prototype,"messages",void 0),(0,d._)([(0,_.Cb)(),(0,oe.H)("esri/t9n/common")],Et.prototype,"messagesCommon",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"multipleSelectionEnabled",void 0),(0,d._)([(0,y.B)("viewModel.operationalItems")],Et.prototype,"operationalItems",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"selectionEnabled",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"selectedItems",void 0),(0,d._)([(0,y.B)("viewModel.view")],Et.prototype,"view",void 0),(0,d._)([(0,de.s)("trigger-action"),(0,_.Cb)({type:re})],Et.prototype,"viewModel",void 0),(0,d._)([(0,_.Cb)()],Et.prototype,"visibleElements",void 0),(0,d._)([(0,m.p)("visibleElements")],Et.prototype,"castVisibleElements",null),(0,d._)([(0,y.B)("viewModel.triggerAction")],Et.prototype,"triggerAction",null),(0,d._)([(0,ae.h)()],Et.prototype,"_toggleActionsOpen",null),(0,d._)([(0,ae.h)()],Et.prototype,"_triggerPanel",null),(0,d._)([(0,ae.h)()],Et.prototype,"_triggerAction",null),(0,d._)([(0,ae.h)()],Et.prototype,"_toggleVisibility",null),(0,d._)([(0,ae.h)()],Et.prototype,"_toggleChildrenClick",null),(0,d._)([(0,ae.h)()],Et.prototype,"_toggleSelection",null),Et=(0,d._)([(0,g.j)("esri.widgets.LayerList")],Et);const Mt=Et;var xt=i(1250),kt=i(80184);const Pt=(0,l.lazy)((()=>Promise.all([i.e(1775),i.e(516)]).then(i.bind(i,50516))));function Tt(e,t){return new Promise(((i,s)=>{(function(e){return new Promise(((t,i)=>{const s=new r.Z({portalItem:{id:"95092428774c4b1fb6a3b6f5fed9fbc4"}});s.load().then((()=>{e.map.allLayers.filter((e=>"group"===e.type)).toArray().forEach((e=>{const t=s.allLayers.find((t=>"group"===t.type&&t.title===e.title));e.addMany(t.layers.filter((t=>void 0===e.findLayerById(t.id))).toArray())})),t(!0)}))}))})(t).then((()=>{const s=new Mt({view:t,container:e,listItemCreatedFunction:Vt});s.on("trigger-action",(e=>{"Property"===e.item.layer.title&&Nt(e)})),i(s)}))}))}const Nt=e=>{if("Property"===e.item.layer.title){e.item.layer.labelsVisible||(e.item.layer.labelsVisible=!0);const t=e.item.actionsSections.getItemAt(0).filter((e=>e.value)).map((e=>e.title)),i=Ot.filter((e=>t.includes(e.title))),s=i.map((e=>e.expression)),n=s.join("+ TextFormatting.NewLine+");e.item.layer.labelingInfo=[],e.item.layer.labelingInfo=[{symbol:{type:"text",color:"black",haloColor:"white",haloSize:1,font:{family:"AvenirNext LT Pro Regular",style:"normal",weight:"bold"}},labelExpressionInfo:{expression:n},maxScale:0,minScale:5e3}]}},Ot=[{expression:"First(Split($feature['SITE_ADDRESS'], ' '))",title:"Address"},{expression:"$feature['PIN_NUM']",title:"PIN"},{expression:"$feature['REID']",title:"REID"},{expression:'When(IsEmpty($feature["SALE_DATE"]),null, Concatenate(Month($feature["SALE_DATE"])+1, \'/\',Day($feature["SALE_DATE"]), \'/\',Year($feature["SALE_DATE"])))',title:"Sale Date"},{expression:"Text($feature.TOTSALPRICE,'$#,###')",title:"Sale Price"}],Vt=e=>{const t=e.item;if("group"!==t.layer.type&&void 0!==t.layer.type){const e=document.createElement("slider-container");if(null===e||void 0===e||!e.hasChildNodes()){(0,xt.createRoot)(e).render((0,kt.jsx)(l.Suspense,{fallback:"",children:(0,kt.jsx)(Pt,{value:t.layer.opacity,layer:t.layer})}))}t.panel={content:[e,"legend"],open:!1}}t.open=t.layer.visible,t.layer.watch("visible",(e=>{t.open=e,e&&(t.layer.parent&&"group"===t.layer.parent.type&&(t.layer.parent.visible=!0),t.layer.parent.parent&&"group"===t.layer.parent.parent.type&&(t.layer.parent.parent.visible=!0))})),(e=>{if("Property"===e.layer.title&&"group"!==e.layer.type&&0===e.actionsSections.length){const t=new a.Z;t.addMany(Ot.map((e=>new o.Z({active:!1,title:e.title,visible:!0})))),e.actionsSections.push(t),e.actionsOpen=!0,setTimeout((()=>{const e=document.createElement("h4");e.textContent="Labels",e.setAttribute("style","padding: 0.5em;margin: 0;");const t=document.querySelector(".esri-layer-list__item-actions");null!==t&&void 0!==t&&t.parentElement&&t.prepend(e)}),500)}})(t)},Rt=e=>{const t=(0,l.useRef)(),i=(0,l.useRef)(!1),[s,r]=(0,l.useState)(),[a,o]=(0,l.useState)(!0);return(0,l.useEffect)((()=>(i.current||(i.current=!0,Tt(t.current,e.view).then((e=>{r(e),e.when((()=>{o(!1)}))}))),()=>{s&&(null===s||void 0===s||s.destroy())})),[]),(0,kt.jsxs)("div",{className:"layers",children:[s&&(0,kt.jsxs)("div",{className:"row sticky",children:[(0,kt.jsx)(n.e,{clearable:!0,placeholder:"Filter by layer name",scale:"m",onCalciteInputInput:e=>{s&&((e,t)=>{e||(e=""),t.operationalItems.forEach((i=>{if("group"===i.layer.type){let h=!1;var s,n,l,r,a,o,d,c;i.layer.layers.forEach((t=>{t.title.toLowerCase().includes(e.toLowerCase())?(t.listMode="show",h=!0):t.listMode="hide","group"===t.type&&t.layers.forEach((i=>{i.title.toLowerCase().includes(e.toLowerCase())?(t.listMode="show",i.listMode="show",h=!0):i.listMode="hide"}))})),i.open=e.length>0&&h,(!e.length||h)&&(null===(s=document.getElementById(`${t.id}_${i.uid}__title`))||void 0===s||null===(n=s.parentElement)||void 0===n||null===(l=n.parentElement)||void 0===l||null===(r=l.parentElement)||void 0===r||r.removeAttribute("hidden")),h||null===(a=document.getElementById(`${t.id}_${i.uid}__title`))||void 0===a||null===(o=a.parentElement)||void 0===o||null===(d=o.parentElement)||void 0===d||null===(c=d.parentElement)||void 0===c||c.setAttribute("hidden","")}}))})(e.target.value,s)}}),(0,kt.jsx)(n.G1,{text:"clear",icon:"viewHide",scale:"s",onClick:()=>{var e;null===(e=s)||void 0===e||e.operationalItems.forEach((e=>{e.visible="Property"===e.title}))}})]}),(0,kt.jsx)("div",{ref:t}),(0,kt.jsx)(n.Ed,{loading:!0,hidden:!a||void 0})]})},$t=Rt}}]);
//# sourceMappingURL=7055.0a114592.chunk.js.map