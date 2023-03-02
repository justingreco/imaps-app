"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[9900],{53801:(e,t,r)=>{function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:()=>n});Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,f=(r&&r.srcIndex?r.srcIndex:0)*a;for(let c=0;c<i;++c)n[u]=s[f],u+=o,f+=a},makeDense:n},Symbol.toStringTag,{value:"Module"}))},19131:(e,t,r)=>{r.d(t,{f:()=>a,n:()=>s});var n=r(48734);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,f=(r&&r.srcIndex?r.srcIndex:0)*a;for(let c=0;c<i;++c)n[u]=s[f],n[u+1]=s[f+1],u+=o,f+=a}function s(e,t,r){const s=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,u=t.typedBufferStride,f=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<f;++t)s[c]=Math.max(i[l]/e,-1),s[c+1]=Math.max(i[l+1]/e,-1),c+=a,l+=u;else for(let t=0;t<f;++t)s[c]=i[l]/e,s[c+1]=i[l+1]/e,c+=a,l+=u}else o(e,t,r);return e}function a(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,a=n?.count??e.count;let i=(n?.dstIndex??0)*s;for(let u=0;u<a;++u)o[i]=t,o[i+1]=r,i+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:o,fill:a,normalizeIntegerBuffer:s},Symbol.toStringTag,{value:"Module"}))},19093:(e,t,r)=>{r.d(t,{a:()=>i,n:()=>s,s:()=>a,t:()=>o});var n=r(77873);function o(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],a=r[1],i=r[2],u=r[3],f=r[4],c=r[5],l=r[6],d=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,g=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*m,t=n*g,r=y[t],o=y[t+1],w=y[t+2],T=y[t+3];h[e]=s*r+u*o+l*w,h[e+1]=a*r+f*o+d*w,h[e+2]=i*r+c*o+p*w,h[e+3]=T}}function s(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride;for(let i=0;i<r;i++){const e=i*o,t=i*a,r=s[t],u=s[t+1],f=s[t+2],c=r*r+u*u+f*f;if(c>0){const t=1/Math.sqrt(c);n[e]=t*r,n[e+1]=t*u,n[e+2]=t*f}}}function a(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*i;o[e]=r*a[t],o[e+1]=r*a[t+1],o[e+2]=r*a[t+2],o[e+3]=r*a[t+3]}}function i(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,a=t.typedBuffer,i=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*i;o[e]=a[t]>>r,o[e+1]=a[t+1]>>r,o[e+2]=a[t+2]>>r,o[e+3]=a[t+3]>>r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,scale:a,shiftRight:i,transformMat3:o,transformMat4:function(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],a=r[1],i=r[2],u=r[3],f=r[4],c=r[5],l=r[6],d=r[7],p=r[8],h=r[9],m=r[10],y=r[11],g=r[12],w=r[13],T=r[14],x=r[15],_=e.typedBuffer,b=e.typedBufferStride,S=t.typedBuffer,O=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*b,t=n*O,r=S[t],o=S[t+1],A=S[t+2],v=S[t+3];_[e]=s*r+f*o+p*A+g*v,_[e+1]=a*r+c*o+h*A+w*v,_[e+2]=i*r+l*o+m*A+T*v,_[e+3]=u*r+d*o+y*A+x*v}}},Symbol.toStringTag,{value:"Module"}))},69618:(e,t,r)=>{function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,f=(r&&r.srcIndex?r.srcIndex:0)*a;for(let c=0;c<i;++c)n[u]=s[f],n[u+1]=s[f+1],n[u+2]=s[f+2],n[u+3]=s[f+3],u+=o,f+=a}function o(e,t,r,n,o,s){const a=e.typedBuffer,i=e.typedBufferStride,u=s?.count??e.count;let f=(s?.dstIndex??0)*i;for(let c=0;c<u;++c)a[f]=t,a[f+1]=r,a[f+2]=n,a[f+3]=o,f+=i}r.d(t,{c:()=>n,f:()=>o});Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:o},Symbol.toStringTag,{value:"Module"}))},17054:(e,t,r)=>{r.d(t,{gS:()=>o});var n=r(48734);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,f=(r&&r.srcIndex?r.srcIndex:0)*a;for(let c=0;c<i;++c){for(let e=0;e<9;++e)n[u+e]=s[f+e];u+=o,f+=a}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride,i=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,f=(r&&r.srcIndex?r.srcIndex:0)*a;for(let c=0;c<i;++c){for(let e=0;e<16;++e)n[u+e]=s[f+e];u+=o,f+=a}}},Symbol.toStringTag,{value:"Module"}));r(53801),r(19131),r(92770),r(69618);function o(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}},27053:(e,t,r)=>{r.d(t,{C:()=>f});var n=r(76200),o=r(14921),s=r(10064),a=r(92026),i=r(66978),u=r(35995);class f{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,u.HK)(e)?((0,i.k_)(t),(0,u.AH)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if((0,a.Wi)(this._streamDataRequester))return(await(0,n.default)(t,{responseType:c[e]})).data;const u=await(0,o.q6)(this._streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw(0,i.r9)(u.error),new s.Z("",`Request for resource failed: ${u.error}`)}}const c={image:"image",binary:"array-buffer",json:"json"}},32315:(e,t,r)=>{r.d(t,{DA:()=>a,jX:()=>i,nh:()=>s});var n=r(18722),o=r(72838);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.p;return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.$z)(r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o],s=e[o+1],a=e[o+2];n[t++]=r,n[t++]=s,n[t++]=a}else{const r=e[o+1],s=e[o],a=e[o+2];n[t++]=r,n[t++]=s,n[t++]=a}}return n}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let o=e[1],s=0;for(let a=0;a<r;++a){const r=e[a+2];n[s++]=t,n[s++]=o,n[s++]=r,o=r}return n}}},57661:(e,t,r)=>{r.d(t,{$A:()=>s,Ml:()=>i,NM:()=>o,i$:()=>a});var n=r(68401);class o{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=n.Ti.KTX2_ENCODING}}function s(e){return"encoded-mesh-texture"===e?.type}async function a(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}async function i(e,t){return t===n.Ti.KTX2_ENCODING?new o(e):new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),a=new Image,i=()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))).then(f):(r(a),f())},u=e=>{URL.revokeObjectURL(s),n(e),f()},f=()=>{a.removeEventListener("load",i),a.removeEventListener("error",u)};a.addEventListener("load",i),a.addEventListener("error",u),a.src=s}))}},57516:(e,t,r)=>{r.d(t,{Q:()=>P});var n=r(32718),o=r(92026),s=r(81949),a=r(8548);var i,u,f=r(10064),c=r(77427),l=r(66978),d=r(35995),p=r(49901),h=r(14226),m=r(48976),y=r(98131),g=r(25158),w=r(53801);class T{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}}!function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(i||(i={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(u||(u={}));var x=r(41644);const _={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},b={pbrMetallicRoughness:_,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},S={ESRI_externalColorMixMode:"tint"},O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={..._,...e.pbrMetallicRoughness},r=A({...S,...e.extras});return{...b,...e,pbrMetallicRoughness:t,extras:r}};function A(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,x.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}const v={magFilter:a.cw.LINEAR,minFilter:a.cw.LINEAR_MIPMAP_LINEAR,wrapS:a.e8.REPEAT,wrapT:a.e8.REPEAT},E=e=>({...v,...e});var R=r(57661);const N=1179937895,B=1313821514,I=5130562;class M{constructor(e,t,r,n){if(this._context=e,this.uri=t,this.json=r,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,o)=>(t=n||"",r=o||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new f.Z("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new f.Z("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new f.Z("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,t,r){if((0,d.HK)(t)){const r=(0,d.sJ)(t);if(r&&"model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new M(e,t,n)}catch{}const n=(0,d.AH)(t);if(M._isGLBData(n))return this._fromGLBData(e,t,n)}if(t.endsWith(".gltf")){const n=await e.loadJSON(t,r);return new M(e,t,n)}const n=await e.loadBinary(t,r);if(M._isGLBData(n))return this._fromGLBData(e,t,n);const o=await e.loadJSON(t,r);return new M(e,t,o)}static _isGLBData(e){if(null==e)return!1;const t=new T(e);return t.remainingBytes()>=4&&t.readUint32()===N}static async _fromGLBData(e,t,r){const n=await M._parseGLBData(r);return new M(e,t,n.json,n.binaryData)}static async _parseGLBData(e){const t=new T(e);if(t.remainingBytes()<12)throw new f.Z("gltf-loader-error","GLB binary data is insufficiently large.");const r=t.readUint32(),o=t.readUint32(),s=t.readUint32();if(r!==N)throw new f.Z("gltf-loader-error","Magic first 4 bytes do not fit to expected GLB value.");if(e.byteLength<s)throw new f.Z("gltf-loader-error","GLB binary data is smaller than header specifies.");if(2!==o)throw new f.Z("gltf-loader-unsupported-feature","An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;t.remainingBytes()>=8;){const e=t.readUint32(),r=t.readUint32();if(0===u){if(r!==B)throw new f.Z("gltf-loader-error","First GLB chunk must be JSON.");if(e<0)throw new f.Z("gltf-loader-error","No JSON data found.");a=await(0,R.i$)(t.readUint8Array(e))}else if(1===u){if(r!==I)throw new f.Z("gltf-loader-unsupported-feature","Second GLB chunk expected to be BIN.");i=t.readUint8Array(e)}else n.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 GLB chunks detected. Skipping.");u+=1}if(!a)throw new f.Z("gltf-loader-error","No GLB JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e];if(null==r.uri){if(null==this._glbBuffer)throw new f.Z("gltf-loader-error","GLB buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(e,t);if(n.byteLength!==r.byteLength)throw new f.Z("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e].uri,o=this._context.loadBinary(this._resolveUri(n),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,o),o}async getAccessor(e,t){if(!this.json.accessors)throw new f.Z("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[e];if(null==r?.bufferView)throw new f.Z("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[i.MAT2,i.MAT3,i.MAT4])throw new f.Z("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,t),s=U[r.type],a=D[r.componentType],u=s*a,c=n.byteStride||u;return{raw:o.buffer,byteStride:c,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:s,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case a.g.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case a.g.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case a.g.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case a.g.UNSIGNED_BYTE:return(0,w.m)(this._wrapAccessor(g.D_,r));case a.g.UNSIGNED_SHORT:return(0,w.m)(this._wrapAccessor(g.av,r));case a.g.UNSIGNED_INT:return(0,w.m)(this._wrapAccessor(g.Nu,r))}}async getPositionData(e,t){if(null==e.attributes.POSITION)throw new f.Z("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);if(r.componentType!==a.g.FLOAT)throw new f.Z("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+a.g[r.componentType]);if(3!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(g.ct,r)}async getNormalData(e,t){if(null==e.attributes.NORMAL)throw new f.Z("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);if(r.componentType!==a.g.FLOAT)throw new f.Z("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+a.g[r.componentType]);if(3!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(g.ct,r)}async getTangentData(e,t){if(null==e.attributes.TANGENT)throw new f.Z("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);if(r.componentType!==a.g.FLOAT)throw new f.Z("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+a.g[r.componentType]);if(4!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new g.ek(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){if(null==e.attributes.TEXCOORD_0)throw new f.Z("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);if(2!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===a.g.FLOAT)return this._wrapAccessor(g.Eu,r);if(!r.normalized)throw new f.Z("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return function(e){switch(e.componentType){case a.g.BYTE:return new g.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_BYTE:return new g.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.SHORT:return new g.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_SHORT:return new g.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_INT:return new g.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.FLOAT:return new g.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}(r)}async getVertexColors(e,t){if(null==e.attributes.COLOR_0)throw new f.Z("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(4!==r.componentCount&&3!==r.componentCount)throw new f.Z("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===a.g.FLOAT)return this._wrapAccessor(g.ek,r);if(r.componentType===a.g.UNSIGNED_BYTE)return this._wrapAccessor(g.mc,r);if(r.componentType===a.g.UNSIGNED_SHORT)return this._wrapAccessor(g.v6,r)}else if(3===r.componentCount){if(r.componentType===a.g.FLOAT)return this._wrapAccessor(g.ct,r);if(r.componentType===a.g.UNSIGNED_BYTE)return this._wrapAccessor(g.ne,r);if(r.componentType===a.g.UNSIGNED_SHORT)return this._wrapAccessor(g.mw,r)}throw new f.Z("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+a.g[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=e.material?this._materialCache.get(e.material):void 0;if(!n){const o=null!=e.material?O(this.json.materials[e.material]):O(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(o.normalTexture,t),f=r?this.getTexture(o.occlusionTexture,t):void 0,c=r?this.getTexture(o.emissiveTexture,t):void 0,l=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,d=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await i,normalTexture:await u,name:o.name,id:d,occlusionTexture:await f,emissiveTexture:await c,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await l,hasVertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:o.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:o.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:o.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return n}async getTexture(e,t){if(!e)return;if(0!==(e.texCoord||0))throw new f.Z("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.json.textures[r],o=E(null!=n.sampler?this.json.samplers[n.sampler]:{}),s=this._getTextureSourceId(n),a=this.json.images[s],i=await this._loadTextureImageData(r,n,t);return(0,c.s1)(this._textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>{throw new f.Z("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${e}`)};return{data:i,wrapS:e(o.wrapS)?o.wrapS:t(o.wrapS),wrapT:e(o.wrapT)?o.wrapT:t(o.wrapT),minFilter:o.minFilter,name:a.name,id:r}}))}getNodeTransform(e){if(void 0===e)return C;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,h.m)((0,s.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,s.b)(r),n.translation&&(0,h.w)(t,t,n.translation),n.rotation&&(F[3]=(0,m.g)(F,n.rotation),(0,h.e)(t,t,F[3],F)),n.scale&&(0,h.k)(t,t,n.scale)):t=(0,s.b)(r),this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return(0,d.hF)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=p.G.parse(this.json.asset.version,"glTF");L.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new f.Z("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const n=this._textureLoaders.get(e);if(n)return n;const o=this._createTextureLoader(t,r);return this._textureLoaders.set(e,o),o}_getTextureSourceId(e){if(void 0!==e.extensions&&null!==e.extensions.KHR_texture_basisu)return e.extensions.KHR_texture_basisu.source;if(null!==e.source)return e.source;throw new f.Z("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(e,t){const r=this._getTextureSourceId(e),n=this.json.images[r];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),t);return new R.NM(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),t)}if(null==n.bufferView)throw new f.Z("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new f.Z("gltf-loader-unsupported-feature","Image mimeType must be defined.");const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,t);if(null!=o.byteStride)throw new f.Z("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const a=s.byteOffset+(o.byteOffset||0);return(0,R.Ml)(new Uint8Array(s.buffer,a,o.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await(0,l.WW)(Array.from(this._bufferLoaders.values())),t=await(0,l.WW)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?(0,R.$A)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const C=(0,h.A)((0,s.c)(),Math.PI/2),L=new p.G(2,0,"glTF"),F=(0,y.a)(),U={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},D={[a.g.BYTE]:1,[a.g.UNSIGNED_BYTE]:1,[a.g.SHORT]:2,[a.g.UNSIGNED_SHORT]:2,[a.g.FLOAT]:4,[a.g.UNSIGNED_INT]:4};let G=0;async function P(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const u=await M.load(e,t,r),f="gltf_"+G++,c={lods:[],materials:new Map,textures:new Map,meta:Z(u)},l=!(!u.json.asset.extras||"symbolResource"!==u.json.asset.extras.ESRI_type),d=new Map;await j(u,(async(e,t,l,p)=>{const h=d.get(l)??0;d.set(l,h+1);const m=void 0!==e.mode?e.mode:a.MX.TRIANGLES,y=m===a.MX.TRIANGLES||m===a.MX.TRIANGLE_STRIP||m===a.MX.TRIANGLE_FAN?m:null;if((0,o.Wi)(y))return void n.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+a.MX[m]+"). Skipping primitive.");if(!u.hasPositions(e))return void n.Z.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const g=u.getPositionData(e,r),w=u.getMaterial(e,r,i),T=u.hasNormals(e)?u.getNormalData(e,r):null,x=u.hasTangents(e)?u.getTangentData(e,r):null,_=u.hasTextureCoordinates(e)?u.getTextureCoordinates(e,r):null,b=u.hasVertexColors(e)?u.getVertexColors(e,r):null,S=u.getIndexData(e,r),O={transform:(0,s.b)(t),attributes:{position:await g,normal:T?await T:null,texCoord0:_?await _:null,color:b?await b:null,tangent:x?await x:null},indices:await S,primitiveType:y,material:V(c,await w,f)};let A=null;(0,o.pC)(c.meta)&&(0,o.pC)(c.meta.ESRI_lod)&&"screenSpaceRadius"===c.meta.ESRI_lod.metric&&(A=c.meta.ESRI_lod.thresholds[l]),c.lods[l]=c.lods[l]||{parts:[],name:p,lodThreshold:A},c.lods[l].parts[h]=O}));for(const n of c.lods)n.parts=n.parts.filter((e=>!!e));const p=await u.getLoadedBuffersSize();return{model:c,meta:{isEsriSymbolResource:l,uri:u.uri},customMeta:{},size:p}}function Z(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,o.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function j(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,s=o.length>1,a=[];for(const n of o){const e=r.nodes[n];a.push(i(n,0)),k(e)&&!s&&e.extensions.MSFT_lod.ids.forEach(((e,t)=>i(e,t+1)))}async function i(o,s){const u=r.nodes[o],f=e.getNodeTransform(o);if(null!=u.weights&&n.Z.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=u.mesh){const e=r.meshes[u.mesh];for(const r of e.primitives)a.push(t(r,f,s,e.name))}for(const e of u.children||[])a.push(i(e,s))}await Promise.all(a)}function k(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function V(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{data:e,parameters:{wrap:{s:a.e8.REPEAT,t:a.e8.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:H.includes(t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=function(){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}const H=[a.cw.LINEAR_MIPMAP_LINEAR,a.cw.LINEAR_MIPMAP_NEAREST]},68845:(e,t,r)=>{r.d(t,{K:()=>n});const n=2.1}}]);
//# sourceMappingURL=9900.f6d8a742.chunk.js.map