"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[1490],{45956:(e,t,i)=>{i.d(t,{JZ:()=>c,RL:()=>g,eY:()=>y});var s=i(92026),r=i(66978),n=i(22753),a=i(23588),o=i(15245),h=i(87422),l=i(10978),d=i(49800),p=i(8548),u=i(51378);function c(e){return e&&"render"in e}function g(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class y extends h.s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t.immutable??!1,this.requestRenderOnSourceChangedEnabled=t.requestRenderOnSourceChangedEnabled??!0,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),(0,s.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){(0,s.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,r.hh)();return(0,r.$F)(t,(()=>i.abort())),(0,r.$F)(i,(e=>n.reject(e))),this._uploadStatus={controller:i,resolver:n},this.source=e,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,n.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,a=r*this.width,h=r*this.height,l=Math.PI*this.rotation/180;(0,n.h)(t,t,(0,o.f)(i,s)),(0,n.h)(t,t,(0,o.f)(a/2,h/2)),(0,n.r)(t,t,-l),(0,n.h)(t,t,(0,o.f)(-a/2,-h/2)),(0,n.k)(t,t,(0,o.f)(a,h)),(0,n.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture(e){let{context:t,painter:i}=e;if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(t)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const n=c(a=this.source)?a instanceof l.Z?(0,s.yw)(a.getRenderedRasterPixels(),(e=>e.renderedRasterPixels)):g(a):a;var a;try{if((0,s.pC)(this._uploadStatus)){const{controller:e,resolver:t}=this._uploadStatus,s={signal:e.signal},{width:r,height:a}=this,o=this._texture,h=i.textureUploadManager;await h.enqueueTextureUpdate({data:n,texture:o,width:r,height:a},s),t.resolve(),this._uploadStatus=null}else this._texture.setData(n);this.ready()}catch(o){(0,r.H9)(o)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,a.c)()}}_createTexture(e){const t=this.immutable&&e.type===d.zO.WEBGL2;return new u.x(e,{target:p.No.TEXTURE_2D,pixelFormat:p.VI.RGBA,internalFormat:t?p.lP.RGBA8:p.VI.RGBA,dataType:p.Br.UNSIGNED_BYTE,wrapMode:p.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}},9849:(e,t,i)=>{i.d(t,{s:()=>p});var s=i(65156),r=i(23588),n=i(45956),a=i(72900);class o extends a.I{constructor(e,t,i,s,r,a){let o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,r,a),this.bitmap=new n.eY(o,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[r,a],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var h=i(62272),l=i(80613),d=i(55067);class p extends d.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),[r,n]=this._tileInfoView.tileInfo.size;return new o(e,i,t[0],t[3],r,n)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[h.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:l.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===l.jx.MAP&&super.doRender(e)}}},10978:(e,t,i)=>{i.d(t,{Z:()=>r});var s=i(92026);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if((0,s.Wi)(i.pixelBlock))return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},4321:(e,t,i)=>{i.d(t,{Y:()=>a});var s=i(27366),r=(i(32718),i(25243),i(63780),i(10064),i(93169),i(69912)),n=i(9849);const a=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new n.s(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren()}};return t=(0,s._)([(0,r.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},95986:(e,t,i)=>{i.d(t,{y:()=>B});var s=i(27366),r=i(40281),n=i(60354),a=i(10064),o=i(94172),h=i(49861),l=(i(25243),i(63780),i(69912)),d=i(33624),p=i(64634),u=i(46784);let c=class extends u.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,h.Cb)({readOnly:!0})],c.prototype,"version",null),c=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],c);const g=c;var y;let m=y=class extends g{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),m=y=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],m);const v=m;i(59486);var _,b=i(32238),f=i(77981),w=i(53866),x=i(80885);const R={base:b.Z,key:"type",typeMap:{extent:w.Z,polygon:x.Z}};let C=_=class extends g{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new _({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,h.Cb)({types:R,json:{read:f.im,write:!0}})],C.prototype,"geometry",void 0),C=_=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],C);const S=C;let P=class extends g{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,h.Cb)({type:[[[Number]]],json:{write:!0}})],P.prototype,"path",void 0),P=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],P);const T=P,I=r.Z.ofType({key:"type",base:null,typeMap:{rect:v,path:T,geometry:S}}),B=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new I,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),o.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,s._)([(0,h.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,h.Cb)({type:I,set(e){const t=(0,n.Z)(e,this._get("clips"),I);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updating",null),(0,s._)([(0,h.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,s._)([(0,h.Cb)({type:p.Z})],t.prototype,"highlightOptions",void 0),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},34622:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const n=e.tileInfo.size,a=e.getTileResolution(i.level),o=e.getTileResolution(s.level);let h=e.getLODInfoAt(s.level);const l=h.getXForColumn(s.col),d=h.getYForRow(s.row);h=e.getLODInfoAt(i.level);const p=h.getXForColumn(i.col),u=h.getYForRow(i.row),c=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/n[0],g=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/n[1],y=Math.round(c*((l-p)/a)),m=Math.round(g*(-(d-u)/a)),v=Math.round(c*n[0]*(o/a)),_=Math.round(g*n[1]*(o/a)),b=r(n);return b.getContext("2d").drawImage(t,y,m,v,_,0,0,n[0],n[1]),b}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{V:()=>r,i:()=>s})},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var s=i(27366),r=i(85015),n=i(91505),a=i(41691),o=i(79056),h=i(32718),l=i(92026),d=i(67426),p=i(49861),u=(i(25243),i(63780),i(69912));let c=class extends((0,a.p)((0,o.IG)((0,d.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,p.Cb)()],c.prototype,"fullOpacity",null),(0,s._)([(0,p.Cb)()],c.prototype,"layer",void 0),(0,s._)([(0,p.Cb)()],c.prototype,"parent",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,p.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,p.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,p.Cb)()],c.prototype,"visible",null),(0,s._)([(0,p.Cb)()],c.prototype,"view",void 0),c=(0,s._)([(0,u.j)("esri.views.layers.LayerView")],c);const g=c}}]);
//# sourceMappingURL=1490.16953ec2.chunk.js.map