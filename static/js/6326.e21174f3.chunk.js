"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[6326],{21857:(e,t,i)=>{i.d(t,{CS:()=>g,Cw:()=>f,Yu:()=>w,j5:()=>_,lm:()=>x});var a=i(42265),s=i(19545),n=i(44055),r=i(76200),o=i(84652),l=i(35995),h=i(78952),c=i(41414),p=i(376),u=i(9014),m=i(49818);const d={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function f(e){const t=e.folders||[],i=t.slice(),a=new Map,s=new Map,n=new Map,r=new Map,l=new Map,h={esriGeometryPoint:s,esriGeometryPolyline:n,esriGeometryPolygon:r};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=(0,o.d9)(e);t.featureSet.features=[];const i=e.featureSet.geometryType;a.set(i,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===i?y(s,l,e.featureSet.features):"esriGeometryPolyline"===i?y(n,l,e.featureSet.features):"esriGeometryPolygon"===i&&y(r,l,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{l.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((a=>{const s=function(e,t,i){const a=function(e,t){let i;return t.some((t=>t.id===e&&(i=t,!0))),i}(e,i);return a&&(a.parentFolderId=t,a.networkLink=a),a}(a,t.id,e.networkLinks);s&&i.push(s)}))})),i.forEach((e=>{if(e.featureInfos){e.points=(0,o.d9)(a.get("esriGeometryPoint")),e.polylines=(0,o.d9)(a.get("esriGeometryPolyline")),e.polygons=(0,o.d9)(a.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const i=h[t.type].get(t.id);i&&e[d[t.type]].featureSet.features.push(i);break}case"GroundOverlay":{const i=l.get(t.id);i&&e.mapImages.push(i);break}}e.fullExtent=x([e])}}));const c=x(i);return{folders:t,sublayers:i,extent:c}}function g(e,t,i,n){const o=s.id&&s.id.findCredential(e);e=(0,l.fl)(e,{token:o&&o.token});const h=a.Z.kmlServiceUrl;return(0,r.default)(h,{query:{url:e,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function _(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const s=[],n={},r=t.sublayers,o=t.folders.map((e=>e.id));return r.forEach((t=>{const r=new e;if(i?r.read(t,i):r.read(t),a.length&&o.includes(r.id)&&(r.visible=a.includes(r.id)),n[t.id]=r,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=n[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(r)}else s.unshift(r)})),s}function y(e,t,i){i.forEach((i=>{e.set(i.attributes[t],i)}))}async function w(e){const t=m.Z.fromJSON(e.featureSet).features,i=e.layerDefinition,a=(0,u.i)(i.drawingInfo.renderer),s=n.Z.fromJSON(e.popupInfo),r=[];for(const n of t){const e=await a.getSymbolAsync(n);n.symbol=e,n.popupTemplate=s,n.visible=!0,r.push(n)}return r}function x(e){const t=(0,c.Ue)(c.Gv),i=(0,c.Ue)(c.Gv);for(const a of e){if(a.polygons&&a.polygons.featureSet&&a.polygons.featureSet.features)for(const e of a.polygons.featureSet.features)(0,p.Yg)(t,e.geometry),(0,c.TC)(i,t);if(a.polylines&&a.polylines.featureSet&&a.polylines.featureSet.features)for(const e of a.polylines.featureSet.features)(0,p.Yg)(t,e.geometry),(0,c.TC)(i,t);if(a.points&&a.points.featureSet&&a.points.featureSet.features)for(const e of a.points.featureSet.features)(0,p.Yg)(t,e.geometry),(0,c.TC)(i,t);if(a.mapImages)for(const e of a.mapImages)(0,p.Yg)(t,e.extent),(0,c.TC)(i,t)}return(0,c.fS)(i,c.Gv)?void 0:{xmin:i[0],ymin:i[1],zmin:i[2],xmax:i[3],ymax:i[4],zmax:i[5],spatialReference:h.Z.WGS84}}},6326:(e,t,i)=>{i.r(t),i.d(t,{default:()=>U});var a=i(27366),s=i(19545),n=i(40281),r=i(92026),o=i(94172),l=i(35995),h=i(49861),c=(i(25243),i(63780),i(69912)),p=i(53866),u=i(79803),m=i(78952),d=i(21857),f=i(23084),g=i(78983),_=i(45956),y=i(90110),w=i(95986),x=i(75391),b=i(34035),S=i(67581),V=i(76200),C=i(585),v=i(80394),I=i(25866),T=i(40658),E=i(8548),A=i(53634),M=i(48673),P=i(86401),R=i(51378);class k{constructor(e){if(this._ownsRctx=!1,e)this._ownsRctx=!1,this._rctx=e;else{if(k._instance)return k._instanceRefCount++,k._instance;k._instanceRefCount=1,k._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl");e.getExtension("OES_texture_float"),this._rctx=new P.x(e,{})}const t=(0,T.s)("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(t.shaders.vertexShader,t.shaders.fragmentShader,t.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new I.Z(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const a=(0,u.iV)(e.extent,t),s=new C.Z({x:(e.extent.xmax-e.extent.xmin)/e.texture.descriptor.width,y:(e.extent.ymax-e.extent.ymin)/e.texture.descriptor.height,spatialReference:e.extent.spatialReference}),{x:n,y:r}=(0,v.VO)(s,t,e.extent);let o=(n+r)/2;const l=Math.round((a.xmax-a.xmin)/o),h=Math.round((a.ymax-a.ymin)/o);o=(a.width/l+a.height/h)/2;const c=new C.Z({x:o,y:o,spatialReference:a.spatialReference}),p=(0,v.Qp)({projectedExtent:a,srcBufferExtent:e.extent,pixelSize:c,hasWrapAround:!0,spacing:[16,16]}),m=(0,M.Br)(this._rctx,p),d=new R.x(this._rctx,{width:l,height:h,pixelFormat:E.VI.RGBA,dataType:E.Br.UNSIGNED_BYTE,wrapMode:E.e8.CLAMP_TO_EDGE,samplingMode:E.cw.LINEAR,hasMipmap:!1}),f=new A.X(this._rctx,{colorTarget:E.Lm.TEXTURE,depthStencilTarget:E.OU.NONE,width:l,height:h},d);this._rctx.bindFramebuffer(f),this._rctx.setViewport(0,0,l,h),this._rctx.useProgram(this._program),this._rctx.bindTexture(e.texture,0),this._rctx.bindTexture(m,1),this._quad.bind();const{width:g=0,height:_=0}=e.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",g,_),this._program.setUniform2fv("u_transformSpacing",p.spacing),this._program.setUniform2fv("u_transformGridSize",p.size),this._program.setUniform2f("u_targetImageSize",l,h),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),m.dispose(),i){const{width:e=0,height:t=0}=f.descriptor,i=new ImageData(e,t);return f.readPixels(0,0,e,t,E.VI.RGBA,E.Br.UNSIGNED_BYTE,i.data),f.detachColorTexture(E.VY.COLOR_ATTACHMENT0),f.dispose(),{texture:d,extent:a,imageData:i}}return f.detachColorTexture(E.VY.COLOR_ATTACHMENT0),f.dispose(),{texture:d,extent:a}}reprojectBitmapData(e,t){const i=(0,_.JZ)(e.bitmapData)?(0,_.RL)(e.bitmapData):e.bitmapData,a=new R.x(this._rctx,{width:e.bitmapData.width,height:e.bitmapData.height,pixelFormat:E.VI.RGBA,dataType:E.Br.UNSIGNED_BYTE,wrapMode:E.e8.CLAMP_TO_EDGE,samplingMode:E.cw.LINEAR,hasMipmap:!1},i),s=this.reprojectTexture({texture:a,extent:e.extent},t,!0);s.texture.dispose();const n=document.createElement("canvas"),r=s.imageData;return n.width=r.width,n.height=r.height,n.getContext("2d").putImageData(r,0,0),{bitmapData:n,extent:s.extent}}async loadAndReprojectBitmapData(e,t,i){const a=(await(0,V.default)(e,{responseType:"image"})).data,s=document.createElement("canvas");s.width=a.width,s.height=a.height;const n=s.getContext("2d");n.drawImage(a,0,0);const r=n.getImageData(0,0,s.width,s.height);if(t.spatialReference.equals(i))return{bitmapData:r,extent:t};const o=this.reprojectBitmapData({bitmapData:r,extent:t},i);return{bitmapData:o.bitmapData,extent:o.extent}}destroy(){this._ownsRctx?(k._instanceRefCount--,0===k._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),k._instance=null)):(this._quad.dispose(),this._program.dispose())}}k._instanceRefCount=0;class G{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let D=class extends((0,w.y)(S.Z)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new y.c,this._kmlVisualData=new G,this._fetchController=null,this.allVisiblePoints=new g.J,this.allVisiblePolylines=new g.J,this.allVisiblePolygons=new g.J,this.allVisibleMapImages=new n.Z}async hitTest(e,t){const i=this.layer;return[this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((t=>(t.layer=i,t.sourceLayer=i,{type:"graphic",graphic:t,layer:i,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new b.Z({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new x.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new b.Z({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new x.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new b.Z({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new x.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)))})),(0,o.YP)((()=>this.layer.visibleSublayers),(e=>{for(const[t,i]of this._kmlVisualData.allSublayers)i.visibility=0;for(const t of e){const e=this._kmlVisualData.allSublayers.get(t.id);e&&(e.visibility=1)}this._refreshCollections()}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new k}detach(){this._fetchController=(0,r.IM)(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=(0,r.SC)(this._polygonsView),this._polylinesView=(0,r.SC)(this._polylinesView),this._pointsView=(0,r.SC)(this._pointsView),this._imageReprojector=(0,r.SC)(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference?.isWGS84||this.view.spatialReference?.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(e.href,p.Z.fromJSON(e.extent),this.view.spatialReference).then((t=>{const i=new _.eY(t.bitmapData,{immutable:!1,requestRenderOnSourceChangedEnabled:!0});i.x=t.extent.xmin,i.y=t.extent.ymax,i.resolution=t.extent.width/t.bitmapData.width,i.rotation=e.rotation,this._mapImageContainer.addChild(i),this._bitmapIndex.set(e,i)}))}async _getViewDependentUrl(e,t){const{viewFormat:i,viewBoundScale:a,httpQuery:n}=e;if((0,r.pC)(i)){if((0,r.Wi)(t))throw new Error("Loading this network link requires a view state.");let o;if(await(0,u.zD)(),(0,r.pC)(a)&&1!==a){const e=new p.Z(t.extent);e.expand(a),o=e}else o=t.extent;o=(0,u.iV)(o,m.Z.WGS84);const h=(0,u.iV)(o,m.Z.WebMercator),c=o.xmin,d=o.xmax,g=o.ymin,_=o.ymax,y=t.size[0]*t.pixelRatio,w=t.size[1]*t.pixelRatio,x=Math.max(h.width,h.height),b={"[bboxWest]":c.toString(),"[bboxEast]":d.toString(),"[bboxSouth]":g.toString(),"[bboxNorth]":_.toString(),"[lookatLon]":o.center.x.toString(),"[lookatLat]":o.center.y.toString(),"[lookatRange]":x.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":o.center.x.toString(),"[lookatTerrainLat]":o.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":o.center.x.toString(),"[cameraLat]":o.center.y.toString(),"[cameraAlt]":x.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":y.toString(),"[vertPixels]":w.toString(),"[terrainEnabled]":"0","[clientVersion]":s.i8,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},S=e=>{for(const t in e)for(const i in b)e[t]=e[t].replace(i,b[i])},V=(0,l.u0)(i);S(V);let C={};(0,r.pC)(n)&&(C=(0,l.u0)(n),S(C));const v=(0,f.en)(e.href);return v.query={...v.query,...V,...C},`${v.path}?${(0,l.B7)(V)}`}return e.href}async _fetchService(e){const t=new G;await this._loadVisualData(this.layer.url,t,e),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t}))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((e=>{let{item:t}=e;return t})))}_isSublayerVisible(e){const t=this._kmlVisualData.allSublayers.get(e);return!!t?.visibility&&(-1===t.parentFolderId||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(e,t,i){return this._fetchParsedKML(e,i).then((async e=>{for(const a of e.sublayers){t.allSublayers.set(a.id,a);const e=a.points?await(0,d.Yu)(a.points):[],s=a.polylines?await(0,d.Yu)(a.polylines):[],n=a.polygons?await(0,d.Yu)(a.polygons):[],r=a.mapImages||[];if(t.allPoints.push(...e.map((e=>({item:e,sublayerId:a.id})))),t.allPolylines.push(...s.map((e=>({item:e,sublayerId:a.id})))),t.allPolygons.push(...n.map((e=>({item:e,sublayerId:a.id})))),t.allMapImages.push(...r.map((e=>({item:e,sublayerId:a.id})))),a.networkLink){const e=await this._getViewDependentUrl(a.networkLink,this.view.state);await this._loadVisualData(e,t,i)}}}))}_fetchParsedKML(e,t){return(0,d.CS)(e,this.layer.spatialReference,this.layer.refreshInterval,t).then((e=>(0,d.Cw)(e.data)))}_removeMapImage(e){const t=this._bitmapIndex.get(e);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(e))}};(0,a._)([(0,h.Cb)()],D.prototype,"_pointsView",void 0),(0,a._)([(0,h.Cb)()],D.prototype,"_polylinesView",void 0),(0,a._)([(0,h.Cb)()],D.prototype,"_polygonsView",void 0),(0,a._)([(0,h.Cb)()],D.prototype,"updating",void 0),D=(0,a._)([(0,c.j)("esri.views.2d.layers.KMLLayerView2D")],D);const U=D},48673:(e,t,i)=>{i.d(t,{Br:()=>h,Fm:()=>f,N9:()=>_,RA:()=>y,Tc:()=>p,Ue:()=>u,iC:()=>c,s9:()=>l,v:()=>g,xW:()=>d,zS:()=>m});var a=i(92026),s=i(6394),n=i(49800),r=i(8548),o=i(51378);function l(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nearest",a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s=!(a&&"u8"===t.pixelType),l=s?r.Br.FLOAT:r.Br.UNSIGNED_BYTE,h=null==t.pixels||0===t.pixels.length?null:s?t.getAsRGBAFloat():t.getAsRGBA(),c=e.capabilities.textureFloat?.textureFloatLinear,p={width:t.width,height:t.height,target:r.No.TEXTURE_2D,pixelFormat:r.VI.RGBA,internalFormat:e.type===n.zO.WEBGL2&&s?r.lP.RGBA32F:r.VI.RGBA,samplingMode:!c||"bilinear"!==i&&"cubic"!==i?r.cw.NEAREST:r.cw.LINEAR,dataType:l,wrapMode:r.e8.CLAMP_TO_EDGE,flipped:!1};return new o.x(e,p,h)}function h(e,t){const{spacing:i,offsets:a,coefficients:s,size:[l,h]}=t,c=i[0]>1,p={width:c?4*l:l,height:h,target:r.No.TEXTURE_2D,pixelFormat:r.VI.RGBA,internalFormat:e.type===n.zO.WEBGL2?r.lP.RGBA32F:r.VI.RGBA,dataType:r.Br.FLOAT,samplingMode:r.cw.NEAREST,wrapMode:r.e8.CLAMP_TO_EDGE,flipped:!1},u=new Float32Array(c?l*h*16:2*a.length);if(c&&null!=s)for(let n=0,r=0;n<s.length;n++)u[r++]=s[n],n%3==2&&(u[r++]=1);else for(let n=0;n<h;n++)for(let e=0;e<l;e++){const t=4*(n*l+e),i=2*(e*h+n);u[t]=a[i],u[t+1]=a[i+1],u[t+3]=-1===a[i]?0:1}return new o.x(e,p,u)}function c(e,t){const i={width:t.length/4,height:1,target:r.No.TEXTURE_2D,pixelFormat:r.VI.RGBA,internalFormat:r.VI.RGBA,dataType:r.Br.UNSIGNED_BYTE,samplingMode:r.cw.NEAREST,wrapMode:r.e8.CLAMP_TO_EDGE,flipped:!1};return new o.x(e,i,t)}function p(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return{u_flipY:n,u_applyTransform:!!e,u_opacity:a,u_transformSpacing:e?e.spacing:s.Z,u_transformGridSize:e?e.size:s.Z,u_targetImageSize:t,u_srcImageSize:i}}function u(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:0}}function m(e,t){return{u_scale:e,u_offset:t}}function d(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function f(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function g(e,t){const i=e.gl,s=t.glName,n=new Map;if((0,a.Wi)(s))return n;const r=i.getProgramParameter(s,i.ACTIVE_UNIFORMS);let o;for(let a=0;a<r;a++)o=i.getActiveUniform(s,a),o&&n.set(o.name,{location:i.getUniformLocation(s,o.name),info:o});return n}function _(e,t,i){Object.keys(i).forEach((a=>{const s=t.get(a)||t.get(a+"[0]");s&&function(e,t,i,a){if(null===a||null==i)return!1;const{info:s}=a;switch(s.type){case r.Se.FLOAT:s.size>1?e.setUniform1fv(t,i):e.setUniform1f(t,i);break;case r.Se.FLOAT_VEC2:e.setUniform2fv(t,i);break;case r.Se.FLOAT_VEC3:e.setUniform3fv(t,i);break;case r.Se.FLOAT_VEC4:e.setUniform4fv(t,i);break;case r.Se.FLOAT_MAT3:e.setUniformMatrix3fv(t,i);break;case r.Se.FLOAT_MAT4:e.setUniformMatrix4fv(t,i);break;case r.Se.INT:s.size>1?e.setUniform1iv(t,i):e.setUniform1i(t,i);break;case r.Se.BOOL:e.setUniform1i(t,i?1:0);break;case r.Se.INT_VEC2:case r.Se.BOOL_VEC2:e.setUniform2iv(t,i);break;case r.Se.INT_VEC3:case r.Se.BOOL_VEC3:e.setUniform3iv(t,i);break;case r.Se.INT_VEC4:case r.Se.BOOL_VEC4:e.setUniform4iv(t,i);break;default:return!1}}(e,a,i[a],s)}))}function y(e,t,i,a){i.length===a.length&&(a.some((e=>null==e))||i.some((e=>null==e))||i.forEach(((i,s)=>{t.setUniform1i(i,s),e.bindTexture(a[s],s)})))}}}]);
//# sourceMappingURL=6326.e21174f3.chunk.js.map