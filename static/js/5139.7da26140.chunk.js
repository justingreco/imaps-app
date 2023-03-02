"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[5139],{11873:(e,t,s)=>{function i(){return[1,0,0,0,1,0,0,0,1]}function r(e,t,s,i,r,n,o,a,l){return[e,t,s,i,r,n,o,a,l]}function n(e,t){return new Float64Array(e,t,9)}s.d(t,{a:()=>n,c:()=>i,f:()=>r});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:i,createView:n,fromValues:r},Symbol.toStringTag,{value:"Module"}))},67593:(e,t,s)=>{s.d(t,{E:()=>c,H:()=>p});var i=s(22753),r=s(11873),n=s(88396),o=s(11186);const a=(0,s(71353).c)(),l=(0,r.c)(),h=(0,r.c)(),d=(0,r.c)();function p(e,t,s){return(0,o.s)(a,t[0],t[1],1),(0,o.t)(a,a,(0,i.t)(l,s)),0===a[2]?(0,n.s)(e,a[0],a[1]):(0,n.s)(e,a[0]/a[2],a[1]/a[2])}function c(e,t,s){return u(h,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),u(d,s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7]),(0,i.m)(e,(0,i.a)(h,h),d),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function u(e,t,s,r,n,h,d,p,c){(0,i.s)(e,t,r,h,s,n,d,1,1,1),(0,o.s)(a,p,c,1),(0,i.a)(l,e);const[u,y,m]=(0,o.t)(a,a,(0,i.t)(l,l));return(0,i.s)(l,u,0,0,0,y,0,0,0,m),(0,i.m)(e,l,e)}},59568:(e,t,s)=>{s.d(t,{L:()=>c});var i=s(27366),r=s(85015),n=s(92026),o=s(49861),a=(s(25243),s(63780),s(69912)),l=s(80885),h=s(79803),d=s(65156),p=s(47991);let c=class extends r.Z{constructor(e){super(e)}get bounds(){const e=this.coords;return(0,n.Wi)(e)||(0,n.Wi)(e.extent)?null:(0,d.oJ)(e.extent)}get coords(){const e=(0,n.Wg)(this.element.georeference)?.coords;return(0,h.dz)(e,this.spatialReference).geometry}get normalizedCoords(){return l.Z.fromJSON((0,p.Ui)(this.coords))}get normalizedBounds(){const e=(0,n.pC)(this.normalizedCoords)?this.normalizedCoords.extent:null;return(0,n.pC)(e)?(0,d.oJ)(e):null}};(0,i._)([(0,o.Cb)()],c.prototype,"spatialReference",void 0),(0,i._)([(0,o.Cb)()],c.prototype,"element",void 0),(0,i._)([(0,o.Cb)()],c.prototype,"bounds",null),(0,i._)([(0,o.Cb)()],c.prototype,"coords",null),(0,i._)([(0,o.Cb)()],c.prototype,"normalizedCoords",null),(0,i._)([(0,o.Cb)()],c.prototype,"normalizedBounds",null),c=(0,i._)([(0,a.j)("esri.layers.support.MediaElementView")],c)},95986:(e,t,s)=>{s.d(t,{y:()=>V});var i=s(27366),r=s(40281),n=s(60354),o=s(10064),a=s(94172),l=s(49861),h=(s(25243),s(63780),s(69912)),d=s(33624),p=s(64634),c=s(46784);let u=class extends c.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,i._)([(0,l.Cb)({readOnly:!0})],u.prototype,"version",null),u=(0,i._)([(0,h.j)("esri.views.layers.support.ClipArea")],u);const y=u;var m;let f=m=class extends y{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new m({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],f.prototype,"left",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],f.prototype,"right",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],f.prototype,"top",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],f.prototype,"bottom",void 0),f=m=(0,i._)([(0,h.j)("esri.views.layers.support.ClipRect")],f);const v=f;s(59486);var g,_=s(32238),w=s(77981),b=s(53866),C=s(80885);const R={base:_.Z,key:"type",typeMap:{extent:b.Z,polygon:C.Z}};let S=g=class extends y{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new g({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,i._)([(0,l.Cb)({types:R,json:{read:w.im,write:!0}})],S.prototype,"geometry",void 0),S=g=(0,i._)([(0,h.j)("esri.views.layers.support.Geometry")],S);const x=S;let E=class extends y{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,i._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],E.prototype,"path",void 0),E=(0,i._)([(0,h.j)("esri.views.layers.support.Path")],E);const P=E,M=r.Z.ofType({key:"type",base:null,typeMap:{rect:v,path:P,geometry:x}}),V=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new M,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.tX),(0,a.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),a.tX),(0,a.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.tX),(0,a.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.tX),(0,a.YP)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),a.tX),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.tX),(0,a.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t}=e;const s=null!=t&&this.isVisibleAtScale(t);s!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",s)}),a.tX)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return(0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,i._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,i._)([(0,l.Cb)({type:M,set(e){const t=(0,n.Z)(e,this._get("clips"),M);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updating",null),(0,i._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,i._)([(0,l.Cb)({type:p.Z})],t.prototype,"highlightOptions",void 0),t=(0,i._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},45139:(e,t,s)=>{s.r(t),s.d(t,{default:()=>K});var i=s(27366),r=(s(59486),s(52639),s(94931),s(78451),s(98689),s(57823),s(32066),s(49018),s(34999),s(28189),s(9014),s(51508),s(40281)),n=(s(93169),s(32718)),o=s(77427),a=s(92026),l=s(66978),h=s(94172),d=s(49861),p=(s(25243),s(63780),s(69912)),c=s(65156),u=s(34066),y=s(66504),m=s(59568),f=s(10064),v=(s(99346),s(76200),s(52522),s(35995),s(47191),s(41978),s(87422)),g=(s(3453),s(39484),s(80613)),_=(s(13594),s(151),s(84319),s(52120),s(8548)),w=(s(37825),s(49800)),b=(s(3667),s(84936),s(54815),s(10435),s(30575),s(41768),s(78020),s(44070)),C=(s(53634),s(51378)),R=s(45412),S=(s(64337),s(61441),s(86909),s(82386),s(16889)),x=(s(73271),s(21391),s(15245)),E=(s(10106),s(34052),s(53456),s(54711),s(62013),s(92841),s(23174),s(93985),s(13163),s(36207),s(98634),s(46228),s(78041),s(75409),s(77234),s(34035),s(26885),s(79347),s(83406),s(68860),s(49229),s(8229)),P=s(91340),M=(s(91908),s(14921),s(69610),s(5131),s(37995),s(73828),s(32344)),V=s(85269),T=s(98928),q=s(67593),A=s(11873),O=s(88396),U=s(6394);const j=(0,A.c)();class I extends v.s{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this.perspectiveTransform=(0,U.a)(),this._vertices=new Float32Array(20),this._handles=[],this._handles.push((0,h.YP)((()=>this.elementView.element.opacity),(e=>this.opacity=e),h.nn),(0,h.YP)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),h.nn),(0,h.gx)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&(0,a.pC)(e.content)&&this._handles.push((0,T.on)(e.content,"play",(()=>this.requestRender())))}),h.nn)),e.element.load().catch((t=>{n.Z.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new f.Z("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}destroy(){this._handles.forEach((e=>e.remove())),this.texture=(0,a.M2)(this.texture)}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if((0,a.pC)(s)){const e=s instanceof HTMLImageElement,i=s instanceof HTMLVideoElement,r=e?s.naturalWidth:i?s.videoWidth:s.width,n=e?s.naturalHeight:i?s.videoHeight:s.height;this._updatePerspectiveTransform(r,n),this.texture?i&&!s.paused&&(this.texture.setData(s),this.requestRender(),(t.type===w.zO.WEBGL2||(0,S.wt)(r)&&(0,S.wt)(n))&&this.texture.generateMipmap()):(this.texture=new C.x(t,{pixelFormat:_.VI.RGBA,dataType:_.Br.UNSIGNED_BYTE,samplingMode:_.cw.LINEAR,wrapMode:_.e8.CLAMP_TO_EDGE,width:r,height:n,preMultiplyAlpha:!0},s),(t.type===w.zO.WEBGL2||(0,S.wt)(r)&&(0,S.wt)(n))&&this.texture.generateMipmap(),i&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if((0,a.Wi)(s))return;const[i,r,n,o]=s.rings[0],l=this._vertices,{x:h,y:d}=e,p=0!==t;p?l.set([r[0]-h,r[1]-d,i[0]-h,i[1]-d,n[0]-h,n[1]-d,o[0]-h,o[1]-d,o[0]-h,o[1]-d,r[0]+t-h,r[1]-d,r[0]+t-h,r[1]-d,i[0]+t-h,i[1]-d,n[0]+t-h,n[1]-d,o[0]+t-h,o[1]-d]):l.set([r[0]-h,r[1]-d,i[0]-h,i[1]-d,n[0]-h,n[1]-d,o[0]-h,o[1]-d]),this.isWrapAround=p}getVAO(e,t,s){if((0,a.Wi)(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=b.f.createVertex(e,_.l1.DYNAMIC_DRAW,i);const r=b.f.createVertex(e,_.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new R.U(e,s,t,{geometry:this._geometryVbo,tex:r})}return this._vao}_updatePerspectiveTransform(e,t){const s=this._vertices;(0,q.E)(j,[0,0,e,0,0,t,e,t],[s[0],s[1],s[4],s[5],s[2],s[3],s[6],s[7]]),(0,O.s)(this.perspectiveTransform,j[6]/j[8]*e,j[7]/j[8]*t)}}var Z=s(17842),G=s(22753),W=s(23588),z=s(92975),L=s(86226),D=s(62272),H=s(64510);class N extends H.Z{constructor(){super(...arguments),this._localOrigin=(0,Z.vW)(0,0),this._viewStateId=-1,this._dvsMat3=(0,W.c)(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[D.U.overlay],target:()=>this.children,drawPhase:g.jx.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:r,resolution:n,rotation:o,viewpoint:a,displayMat3:l}=t;if(this._viewStateId===s)return;const h=Math.PI/180*o,d=r*i[0],p=r*i[1],{x:c,y:u}=a.targetGeometry,y=(0,P.or)(c,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=u;const m=n*d,f=n*p,v=(0,G.g)(this._dvsMat3);(0,G.m)(v,v,l),(0,G.h)(v,v,(0,x.f)(d/2,p/2)),(0,G.d)(v,v,(0,E.f)(d/m,-p/f,1)),(0,G.r)(v,v,-h),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:r,worldScreenWidth:n,size:o,viewpoint:l}=s,h=this._localOrigin;let d=0;const p=(0,z.C5)(r);if(p&&r.isWrappable){const e=o[0],c=o[1],u=180/Math.PI*i,y=Math.abs(Math.cos(u)),m=Math.abs(Math.sin(u)),f=Math.round(e*y+c*m),[v,g]=p.valid,_=(0,L.ut)(r),{x:w,y:b}=l.targetGeometry,C=[w,b],R=[0,0];s.toScreen(R,C);const S=[0,0];let x;x=f>n?.5*n:.5*f;const E=Math.floor((w+.5*_)/_),P=v+E*_,M=g+E*_,V=[R[0]+x,0];s.toMap(S,V),S[0]>M&&(d=_),V[0]=R[0]-x,s.toMap(S,V),S[0]<P&&(d=-_);for(const s of t){const e=s.elementView.bounds;if((0,a.Wi)(e))continue;const[t,,i]=e;t<v&&i>v?s.updateDrawCoords(h,_):i>g&&t<g?s.updateDrawCoords(h,-_):s.updateDrawCoords(h,d)}}else for(const a of t)a.updateDrawCoords(h,d)}}var k=s(95986),B=s(67581),Y=s(53866);let Q=class extends((0,k.y)(B.Z)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this._debugGraphicsView=null,this.layer=null,this.elements=new r.Z}attach(){this.addAttachHandles([(0,h.on)((()=>this.layer.effectiveSource),"refresh",(()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate()})),(0,h.on)((()=>this.layer.effectiveSource),"change",(e=>{let{element:t}=e;return this._elementUpdateHandler(t)}))]),this._overlayContainer=new N,this.container.addChild(this._overlayContainer),this._fetchQueue=new M.Z({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new V.Z({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear(),this._debugGraphicsView?.destroy()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e),this._debugGraphicsView?.update(e)}async hitTest(e,t){const s=[],i=e.normalize(),r=[i.x,i.y];for(const{projectedElement:{normalizedCoords:n,element:o}}of this._elementReferences.values())(0,a.pC)(n)&&(0,u.wP)(n.rings,r)&&s.push({type:"media",element:o,layer:this.layer,mapPoint:e});return s.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._updateTile(e)))}_acquireTile(e){const t=new $(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[s,i]=e.setElements(t);this._referenceElements(e,s),this._dereferenceElements(e,i),this.requestUpdate()}),(e=>{(0,l.D_)(e)||n.Z.getLogger(this.declaredClass).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._dereferenceElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const s=this.layer.effectiveSource;if((0,a.Wi)(s))return[];this.view.featuresTilingScheme.getTileBounds(X,e,!0);const i=new Y.Z({xmin:X[0],ymin:X[1],xmax:X[2],ymax:X[3],spatialReference:this.view.spatialReference});return s.queryElements(i,t)}_referenceElements(e,t){const s=this.layer.source;if(!(0,a.Wi)(s))for(const i of t)this._referenceElement(e,i)}_referenceElement(e,t){(0,o.s1)(this._elementReferences,t.uid,(()=>{const e=new m.L({element:t,spatialReference:this.view.spatialReference}),s=new I(e);this._overlayContainer.addChild(s),this.elements.add(t);return{tiles:new Set,projectedElement:e,overlay:s,debugGraphic:null}})).tiles.add(e)}_dereferenceElements(e,t){for(const s of t)this._dereferenceElement(e,s)}_dereferenceElement(e,t){const s=this._elementReferences.get(t.uid);s.tiles.delete(e),s.tiles.size||(this._overlayContainer.removeChild(s.overlay),s.overlay.destroy(),s.projectedElement.destroy(),this._elementReferences.delete(t.uid),this.elements.remove(t),this._debugGraphicsView?.graphics.remove(s.debugGraphic))}_elementUpdateHandler(e){let t=this._elementReferences.get(e.uid);if(t){const s=t.projectedElement.normalizedCoords;if((0,a.Wi)(s))return this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(e.uid),this.elements.remove(e),void this._debugGraphicsView?.graphics.remove(t.debugGraphic);const i=[],r=[];for(const e of this._tileStrategy.tiles){const n=J(this.view.featuresTilingScheme,e,s);t.tiles.has(e)?n||r.push(e):n&&i.push(e)}for(const t of i)this._referenceElement(t,e);for(const t of r)this._dereferenceElement(t,e);return t=this._elementReferences.get(e.uid),void(t?.debugGraphic&&(t.debugGraphic.geometry=t.projectedElement.normalizedCoords,this._debugGraphicsView.graphicUpdateHandler({graphic:t.debugGraphic,property:"geometry"})))}const s=new m.L({element:e,spatialReference:this.view.spatialReference}).normalizedCoords;if((0,a.pC)(s))for(const i of this._tileStrategy.tiles)J(this.view.featuresTilingScheme,i,s)&&this._referenceElement(i,e)}};(0,i._)([(0,d.Cb)()],Q.prototype,"_fetchQueue",void 0),(0,i._)([(0,d.Cb)()],Q.prototype,"layer",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],Q.prototype,"elements",void 0),Q=(0,i._)([(0,p.j)("esri.views.2d.layers.MediaLayerView2D")],Q);const X=(0,c.Ue)(),F={xmin:0,ymin:0,xmax:0,ymax:0};function J(e,t,s){return e.getTileBounds(X,t.key,!0),F.xmin=X[0],F.ymin=X[1],F.xmax=X[2],F.ymax=X[3],(0,y.Nl)(F,s)}class ${constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}destroy(){}}const K=Q},67581:(e,t,s)=>{s.d(t,{Z:()=>y});var i=s(27366),r=s(85015),n=s(91505),o=s(41691),a=s(79056),l=s(32718),h=s(92026),d=s(67426),p=s(49861),c=(s(25243),s(63780),s(69912));let u=class extends((0,o.p)((0,a.IG)((0,d.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,i._)([(0,p.Cb)()],u.prototype,"fullOpacity",null),(0,i._)([(0,p.Cb)()],u.prototype,"layer",void 0),(0,i._)([(0,p.Cb)()],u.prototype,"parent",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,i._)([(0,p.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,i._)([(0,p.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,i._)([(0,p.Cb)()],u.prototype,"visible",null),(0,i._)([(0,p.Cb)()],u.prototype,"view",void 0),u=(0,i._)([(0,c.j)("esri.views.layers.LayerView")],u);const y=u}}]);
//# sourceMappingURL=5139.7da26140.chunk.js.map