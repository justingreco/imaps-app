"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[7814],{48734:(E,t,e)=>{function _(E){switch(E){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function n(E){switch(E){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function T(E){switch(E){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function A(E){switch(E){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}e.d(t,{B3:()=>n,Op:()=>A,U:()=>T,n1:()=>_})},35888:(E,t,e)=>{e.d(t,{d:()=>T});var _=e(16889),n=e(72838);function T(E,t,e){const T=Array.isArray(E),N=T?E.length/t:E.byteLength/(4*t),o=T?E:new Uint32Array(E,0,N*t),s=e?.minReduction??0,O=e?.originalIndices||null,I=O?O.length:0,S=e?.componentOffsets||null;let c=0;if(S)for(let _=0;_<S.length-1;_++){const E=S[_+1]-S[_];E>c&&(c=E)}else c=N;const C=Math.floor(1.1*c)+1;(null==i||i.length<2*C)&&(i=new Uint32Array((0,_.Sf)(2*C)));for(let _=0;_<2*C;_++)i[_]=0;let a=0;const u=!!S&&!!O,L=u?I:N;let f=(0,n.$z)(N/3);const D=new Uint32Array(I),U=1.96;let M=0!==s?Math.ceil(4*U*U/(s*s)*s*(1-s)):L,l=1,P=S?S[1]:L;for(let _=0;_<L;_++){if(_===M){const E=1-a/_;if(E+U*Math.sqrt(E*(1-E)/_)<s)return null;M*=2}if(_===P){for(let E=0;E<2*C;E++)i[E]=0;if(O)for(let E=S[l-1];E<S[l];E++)D[E]=f[O[E]];P=S[++l]}const E=u?O[_]:_,e=E*t,n=r(o,e,t);let T=n%C,R=a;for(;0!==i[2*T+1];){if(i[2*T]===n){const E=i[2*T+1]-1;if(A(o,e,E*t,t)){R=f[E];break}}T++,T>=C&&(T-=C)}R===a&&(i[2*T]=n,i[2*T+1]=E+1,a++),f[E]=R}if(0!==s&&1-a/N<s)return null;if(u){for(let E=S[l-1];E<D.length;E++)D[E]=f[O[E]];f=(0,n.mi)(D)}const G=T?new Array(a):new Uint32Array(a*t);a=0;for(let _=0;_<L;_++)f[_]===a&&(R(o,(u?O[_]:_)*t,G,a*t,t),a++);if(O&&!u){const E=new Uint32Array(I);for(let t=0;t<E.length;t++)E[t]=f[O[t]];f=(0,n.mi)(E)}return{buffer:Array.isArray(G)?G:G.buffer,indices:f,uniqueCount:a}}function A(E,t,e,_){for(let n=0;n<_;n++)if(E[t+n]!==E[e+n])return!1;return!0}function R(E,t,e,_,n){for(let T=0;T<n;T++)e[_+T]=E[t+T]}function r(E,t,e){let _=0;for(let n=0;n<e;n++)_=E[t+n]+_|0,_=_+(_<<11)+(_>>>2)|0;return _>>>0}let i=null},55158:(E,t,e)=>{e.d(t,{U$:()=>R});var _=e(25158),n=e(48734);class T{constructor(E,t){this.layout=E,this.buffer="number"==typeof t?new ArrayBuffer(t*E.stride):t;for(const e of E.fieldNames){const t=E.fields.get(e);this[e]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(E,t){const e=this[E];return e&&e.elementCount===t.ElementCount&&e.elementType===t.ElementType?e:null}slice(E,t){return new T(this.layout,this.buffer.slice(E*this.stride,t*this.stride))}copyFrom(E,t,e,_){const n=this.stride;if(n%4==0){const T=new Uint32Array(E.buffer,t*n,_*n/4);new Uint32Array(this.buffer,e*n,_*n/4).set(T)}else{const T=new Uint8Array(E.buffer,t*n,_*n);new Uint8Array(this.buffer,e*n,_*n).set(T)}}}class A{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(E,t){return this._appendField(E,_.Eu,t),this}vec2f64(E,t){return this._appendField(E,_.q6,t),this}vec3f(E,t){return this._appendField(E,_.ct,t),this}vec3f64(E,t){return this._appendField(E,_.fP,t),this}vec4f(E,t){return this._appendField(E,_.ek,t),this}vec4f64(E,t){return this._appendField(E,_.Cd,t),this}mat3f(E,t){return this._appendField(E,_.gK,t),this}mat3f64(E,t){return this._appendField(E,_.ey,t),this}mat4f(E,t){return this._appendField(E,_.bj,t),this}mat4f64(E,t){return this._appendField(E,_.O1,t),this}vec4u8(E,t){return this._appendField(E,_.mc,t),this}f32(E,t){return this._appendField(E,_.ly,t),this}f64(E,t){return this._appendField(E,_.oS,t),this}u8(E,t){return this._appendField(E,_.D_,t),this}u16(E,t){return this._appendField(E,_.av,t),this}i8(E,t){return this._appendField(E,_.Hz,t),this}vec2i8(E,t){return this._appendField(E,_.Vs,t),this}vec2i16(E,t){return this._appendField(E,_.or,t),this}vec2u8(E,t){return this._appendField(E,_.xA,t),this}vec4u16(E,t){return this._appendField(E,_.v6,t),this}u32(E,t){return this._appendField(E,_.Nu,t),this}_appendField(E,t,e){const _=t.ElementCount*(0,n.n1)(t.ElementType),T=this.stride;this.fields.set(E,{size:_,constructor:t,offset:T,optional:e}),this.stride+=_,this.fieldNames.push(E)}alignTo(E){return this.stride=Math.floor((this.stride+E-1)/E)*E,this}hasField(E){return this.fieldNames.includes(E)}createBuffer(E){return new T(this,E)}createView(E){return new T(this,E)}clone(){const E=new A;return E.stride=this.stride,E.fields=new Map,this.fields.forEach(((t,e)=>E.fields.set(e,t))),E.fieldNames=this.fieldNames.slice(),E.BufferType=this.BufferType,E}}function R(){return new A}},72838:(E,t,e)=>{e.d(t,{$z:()=>T,DX:()=>N,mi:()=>n,p:()=>i});var _=e(18722);function n(E){if(Array.isArray(E)){if(E.length<_.DB)return E;for(const t of E)if(t>=65536)return new Uint32Array(E);return new Uint16Array(E)}if(E.length<_.DB)return Array.from(E);if(E.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return E;for(const t of E)if(t>=65536)return E;return new Uint16Array(E)}function T(E){const t=3*E;return t<=_.DB?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let A=(()=>{const E=new Uint32Array(131072);for(let t=0;t<E.length;++t)E[t]=t;return E})();const R=[0],r=(()=>{const E=new Uint16Array(65536);for(let t=0;t<E.length;++t)E[t]=t;return E})();function i(E){if(1===E)return R;if(E<_.DB)return Array.from(new Uint16Array(r.buffer,0,E));if(E<r.length)return new Uint16Array(r.buffer,0,E);if(E>A.length){const t=Math.max(2*A.length,E);A=new Uint32Array(t);for(let E=0;E<A.length;E++)A[E]=E}return new Uint32Array(A.buffer,0,E)}function N(E){if(1===E)return R;if(E<_.DB)return Array.from(new Uint16Array(r.buffer,0,E));if(E<r.length)return new Uint16Array(r.slice(0,E));if(E>A.length){const t=new Uint32Array(E);for(let E=0;E<t.length;E++)t[E]=E;return t}return new Uint32Array(A.slice(0,E))}},4760:(E,t,e)=>{var _;e.d(t,{T:()=>_}),function(E){E.POSITION="position",E.NORMAL="normal",E.UV0="uv0",E.AUXPOS1="auxpos1",E.AUXPOS2="auxpos2",E.COLOR="color",E.SYMBOLCOLOR="symbolColor",E.SIZE="size",E.TANGENT="tangent",E.OFFSET="offset",E.SUBDIVISIONFACTOR="subdivisionFactor",E.COLORFEATUREATTRIBUTE="colorFeatureAttribute",E.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",E.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",E.DISTANCETOSTART="distanceToStart",E.UVMAPSPACE="uvMapSpace",E.BOUNDINGRECT="boundingRect",E.UVREGION="uvRegion",E.NORMALCOMPRESSED="normalCompressed",E.PROFILERIGHT="profileRight",E.PROFILEUP="profileUp",E.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",E.FEATUREVALUE="featureValue",E.MODELORIGINHI="modelOriginHi",E.MODELORIGINLO="modelOriginLo",E.MODEL="model",E.MODELNORMAL="modelNormal",E.INSTANCECOLOR="instanceColor",E.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",E.LOCALTRANSFORM="localTransform",E.GLOBALTRANSFORM="globalTransform",E.BOUNDINGSPHERE="boundingSphere",E.MODELORIGIN="modelOrigin",E.MODELSCALEFACTORS="modelScaleFactors",E.FEATUREATTRIBUTE="featureAttribute",E.STATE="state",E.LODLEVEL="lodLevel",E.POSITION0="position0",E.POSITION1="position1",E.NORMALA="normalA",E.NORMALB="normalB",E.COMPONENTINDEX="componentIndex",E.VARIANTOFFSET="variantOffset",E.VARIANTSTROKE="variantStroke",E.VARIANTEXTENSION="variantExtension",E.U8PADDING="u8padding",E.U16PADDING="u16padding",E.SIDENESS="sideness",E.START="start",E.END="end",E.UP="up",E.EXTRUDE="extrude",E.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",E.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(_||(_={}))},67009:(E,t,e)=>{e.d(t,{Hr:()=>N,dG:()=>i,tf:()=>A});var _=e(50256),n=e(55158),T=e(4760);const A=(0,n.U$)().vec3f(T.T.POSITION).u16(T.T.COMPONENTINDEX).u16(T.T.U16PADDING),R=(0,n.U$)().vec2u8(T.T.SIDENESS),r=((0,_.K)(R),(0,n.U$)().vec3f(T.T.POSITION0).vec3f(T.T.POSITION1).u16(T.T.COMPONENTINDEX).u8(T.T.VARIANTOFFSET,{glNormalized:!0}).u8(T.T.VARIANTSTROKE).u8(T.T.VARIANTEXTENSION,{glNormalized:!0}).u8(T.T.U8PADDING,{glPadding:!0}).u16(T.T.U16PADDING,{glPadding:!0})),i=r.clone().vec3f(T.T.NORMAL),N=r.clone().vec3f(T.T.NORMALA).vec3f(T.T.NORMALB);new Map([[T.T.POSITION0,0],[T.T.POSITION1,1],[T.T.COMPONENTINDEX,2],[T.T.VARIANTOFFSET,3],[T.T.VARIANTSTROKE,4],[T.T.VARIANTEXTENSION,5],[T.T.NORMAL,6],[T.T.NORMALA,6],[T.T.NORMALB,7],[T.T.SIDENESS,8]])},10662:(E,t,e)=>{e.d(t,{n:()=>N});var _=e(63780),n=e(16889),T=e(11186),A=e(71353);const R=-1;var r,i;function N(E,t,e){let A=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a;const r=E.vertices.position,i=E.vertices.componentIndex,N=(0,n.Vl)(A.anglePlanar),C=(0,n.Vl)(A.angleSignificantEdge),u=Math.cos(C),L=Math.cos(N),f=c.edge,D=f.position0,U=f.position1,M=f.faceNormal0,l=f.faceNormal1,P=S(E),G=I(E),F=G.length/4,B=t.allocate(F);let d=0;const h=F,H=e.allocate(h);let p=0,g=0,m=0;const V=(0,_.w6)(0,F),y=new Float32Array(F);y.forEach(((E,t,e)=>{r.getVec(G[4*t+0],D),r.getVec(G[4*t+1],U),e[t]=(0,T.i)(D,U)})),V.sort(((E,t)=>y[t]-y[E]));const w=new Array,X=new Array;for(let _=0;_<F;_++){const E=V[_],n=y[E],A=G[4*E+0],I=G[4*E+1],S=G[4*E+2],c=G[4*E+3],C=c===R;if(r.getVec(A,D),r.getVec(I,U),C)(0,T.s)(M,P[3*S+0],P[3*S+1],P[3*S+2]),(0,T.c)(l,M),f.componentIndex=i.get(A),f.cosAngle=(0,T.e)(M,l);else{if((0,T.s)(M,P[3*S+0],P[3*S+1],P[3*S+2]),(0,T.s)(l,P[3*c+0],P[3*c+1],P[3*c+2]),f.componentIndex=i.get(A),f.cosAngle=(0,T.e)(M,l),s(f,L))continue;f.cosAngle<-.9999&&(0,T.c)(l,M)}g+=n,m++,C||o(f,u)?(t.write(B,d++,f),w.push(n)):O(f,N)&&(e.write(H,p++,f),X.push(n))}const Y=new Float32Array(w.reverse()),v=new Float32Array(X.reverse());return{regular:{instancesData:t.trim(B,d),lodInfo:{lengths:Y}},silhouette:{instancesData:e.trim(H,p),lodInfo:{lengths:v}},averageEdgeLength:g/m}}function o(E,t){return E.cosAngle<t}function s(E,t){return E.cosAngle>t}function O(E,t){const e=(0,n.ZF)(E.cosAngle),_=c.fwd,A=c.ortho;return(0,T.r)(_,E.position1,E.position0),e*((0,T.e)((0,T.f)(A,E.faceNormal0,E.faceNormal1),_)>0?-1:1)>t}function I(E){const t=E.faces.length/3,e=E.faces,_=E.neighbors;let n=0;for(let r=0;r<t;r++){const E=_[3*r+0],t=_[3*r+1],T=_[3*r+2],A=e[3*r+0],i=e[3*r+1],N=e[3*r+2];n+=E===R||A<i?1:0,n+=t===R||i<N?1:0,n+=T===R||N<A?1:0}const T=new Int32Array(4*n);let A=0;for(let r=0;r<t;r++){const E=_[3*r+0],t=_[3*r+1],n=_[3*r+2],i=e[3*r+0],N=e[3*r+1],o=e[3*r+2];(E===R||i<N)&&(T[A++]=i,T[A++]=N,T[A++]=r,T[A++]=E),(t===R||N<o)&&(T[A++]=N,T[A++]=o,T[A++]=r,T[A++]=t),(n===R||o<i)&&(T[A++]=o,T[A++]=i,T[A++]=r,T[A++]=n)}return T}function S(E){const t=E.faces.length/3,e=E.vertices.position,_=E.faces,n=C.v0,A=C.v1,R=C.v2,r=new Float32Array(3*t);for(let i=0;i<t;i++){const E=_[3*i+0],t=_[3*i+1],N=_[3*i+2];e.getVec(E,n),e.getVec(t,A),e.getVec(N,R),(0,T.b)(A,A,n),(0,T.b)(R,R,n),(0,T.f)(n,A,R),(0,T.n)(n,n),r[3*i+0]=n[0],r[3*i+1]=n[1],r[3*i+2]=n[2]}return r}(i=r||(r={}))[i.SOLID=0]="SOLID",i[i.SKETCH=1]="SKETCH";const c={edge:{position0:(0,A.c)(),position1:(0,A.c)(),faceNormal0:(0,A.c)(),faceNormal1:(0,A.c)(),componentIndex:0,cosAngle:0},ortho:(0,A.c)(),fwd:(0,A.c)()},C={v0:(0,A.c)(),v1:(0,A.c)(),v2:(0,A.c)()},a={anglePlanar:4,angleSignificantEdge:35}},83715:(E,t,e)=>{e.d(t,{Kl:()=>M,n_:()=>d,kY:()=>l,Yr:()=>B});var _=e(35888);function n(E,t,e){const _=t/3,n=new Uint32Array(e+1),T=new Uint32Array(e+1),A=(E,t)=>{E<t?n[E+1]++:T[t+1]++};for(let C=0;C<_;C++){const t=E[3*C],e=E[3*C+1],_=E[3*C+2];A(t,e),A(e,_),A(_,t)}let R=0,r=0;for(let C=0;C<e;C++){const E=n[C+1],t=T[C+1];n[C+1]=R,T[C+1]=r,R+=E,r+=t}const i=new Uint32Array(6*_),N=n[e],o=(E,t,e)=>{if(E<t){const _=n[E+1]++;i[2*_]=t,i[2*_+1]=e}else{const _=T[t+1]++;i[2*N+2*_]=E,i[2*N+2*_+1]=e}};for(let C=0;C<_;C++){const t=E[3*C],e=E[3*C+1],_=E[3*C+2];o(t,e,C),o(e,_,C),o(_,t,C)}const s=(E,t)=>{const e=2*E,_=t-E;for(let n=1;n<_;n++){const E=i[e+2*n],t=i[e+2*n+1];let _=n-1;for(;_>=0&&i[e+2*_]>E;_--)i[e+2*_+2]=i[e+2*_],i[e+2*_+3]=i[e+2*_+1];i[e+2*_+2]=E,i[e+2*_+3]=t}};for(let C=0;C<e;C++)s(n[C],n[C+1]),s(N+T[C],N+T[C+1]);const O=new Int32Array(3*_),I=(t,e)=>t===E[3*e]?0:t===E[3*e+1]?1:t===E[3*e+2]?2:-1,S=(E,t)=>{const e=I(E,t);O[3*t+e]=-1},c=(E,t,e,_)=>{const n=I(E,t);O[3*t+n]=_;const T=I(e,_);O[3*_+T]=t};for(let C=0;C<e;C++){let E=n[C];const t=n[C+1];let e=T[C];const _=T[C+1];for(;E<t&&e<_;){const t=i[2*E],_=i[2*N+2*e];t===_?(c(C,i[2*E+1],_,i[2*N+2*e+1]),E++,e++):t<_?(S(C,i[2*E+1]),E++):(S(_,i[2*N+2*e+1]),e++)}for(;E<t;)S(C,i[2*E+1]),E++;for(;e<_;)S(i[2*N+2*e],i[2*N+2*e+1]),e++}return O}var T=e(55158),A=e(4760),R=e(67009),r=e(84936),i=e(11186),N=e(71353),o=e(50256);class s{updateSettings(E){this.settings=E,this._edgeHashFunction=E.reducedPrecision?C:c}write(E,t,e){const _=this._edgeHashFunction(e);D.seed=_;const n=D.getIntRange(0,255),T=D.getIntRange(0,this.settings.variants-1),A=D.getFloat(),R=255*(.5*function(E,t){const e=E<0?-1:1;return Math.abs(E)**t*e}(-(1-Math.min(A/.7,1))+Math.max(0,A-.7)/(1-.7),1.2)+.5);E.position0.setVec(t,e.position0),E.position1.setVec(t,e.position1),E.componentIndex.set(t,e.componentIndex),E.variantOffset.set(t,n),E.variantStroke.set(t,T),E.variantExtension.set(t,R)}trim(E,t){return E.slice(0,t)}}const O=new Float32Array(6),I=new Uint32Array(O.buffer),S=new Uint32Array(1);function c(E){const t=O;t[0]=E.position0[0],t[1]=E.position0[1],t[2]=E.position0[2],t[3]=E.position1[0],t[4]=E.position1[1],t[5]=E.position1[2],S[0]=5381;for(let e=0;e<I.length;e++)S[0]=31*S[0]+I[e];return S[0]}function C(E){const t=O;t[0]=a(E.position0[0]),t[1]=a(E.position0[1]),t[2]=a(E.position0[2]),t[3]=a(E.position1[0]),t[4]=a(E.position1[1]),t[5]=a(E.position1[2]),S[0]=5381;for(let e=0;e<I.length;e++)S[0]=31*S[0]+I[e];return S[0]}function a(E){return Math.round(1e4*E)/1e4}class u{constructor(){this._commonWriter=new s}updateSettings(E){this._commonWriter.updateSettings(E)}allocate(E){return R.dG.createBuffer(E)}write(E,t,e){this._commonWriter.write(E,t,e),(0,i.a)(f,e.faceNormal0,e.faceNormal1),(0,i.n)(f,f),E.normal.setVec(t,f)}trim(E,t){return this._commonWriter.trim(E,t)}}u.Layout=R.dG,u.glLayout=(0,o.K)(R.dG,1);class L{constructor(){this._commonWriter=new s}updateSettings(E){this._commonWriter.updateSettings(E)}allocate(E){return R.Hr.createBuffer(E)}write(E,t,e){this._commonWriter.write(E,t,e),E.normalA.setVec(t,e.faceNormal0),E.normalB.setVec(t,e.faceNormal1)}trim(E,t){return this._commonWriter.trim(E,t)}}L.Layout=R.Hr,L.glLayout=(0,o.K)(R.Hr,1);const f=(0,N.c)(),D=new r.Z;var U=e(10662);function M(E){const t=l(E.data,E.skipDeduplicate,E.indices,E.indicesLength);return G.updateSettings(E.writerSettings),F.updateSettings(E.writerSettings),(0,U.n)(t,G,F)}function l(E,t,e,T){if(t){const t=n(e,T,E.count);return new P(e,T,t,E)}const A=(0,_.d)(E.buffer,E.stride/4,{originalIndices:e,originalIndicesLength:T}),r=n(A.indices,T,A.uniqueCount);return{faces:A.indices,facesLength:A.indices.length,neighbors:r,vertices:R.tf.createView(A.buffer)}}class P{constructor(E,t,e,_){this.faces=E,this.facesLength=t,this.neighbors=e,this.vertices=_}}const G=new u,F=new L,B=(0,T.U$)().vec3f(A.T.POSITION0).vec3f(A.T.POSITION1),d=(0,T.U$)().vec3f(A.T.POSITION0).vec3f(A.T.POSITION1).u16(A.T.COMPONENTINDEX).u16(A.T.U16PADDING,{glPadding:!0})},61109:(E,t,e)=>{e.d(t,{G:()=>_});class _{constructor(E,t,e,_,n){let T=arguments.length>5&&void 0!==arguments[5]&&arguments[5],A=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=E,this.count=t,this.type=e,this.offset=_,this.stride=n,this.normalized=T,this.divisor=A}}},8548:(E,t,e)=>{var _,n,T,A,R,r,i,N,o,s,O,I,S,c,C,a,u,L,f,D,U,M;e.d(t,{Br:()=>a,Ho:()=>f,LR:()=>r,Ld:()=>l,Lm:()=>U,Lu:()=>F,MX:()=>n,No:()=>S,OU:()=>M,Se:()=>d,Tg:()=>u,V7:()=>g,VI:()=>c,VY:()=>G,Wf:()=>i,Y5:()=>p,_g:()=>P,cw:()=>O,db:()=>A,e8:()=>I,g:()=>N,l1:()=>L,lP:()=>C,lk:()=>_,q_:()=>B,qi:()=>D,w0:()=>R,wb:()=>o,xS:()=>s,zi:()=>T}),function(E){E[E.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",E[E.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",E[E.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(_||(_={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(n||(n={})),function(E){E[E.ZERO=0]="ZERO",E[E.ONE=1]="ONE",E[E.SRC_COLOR=768]="SRC_COLOR",E[E.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",E[E.SRC_ALPHA=770]="SRC_ALPHA",E[E.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",E[E.DST_ALPHA=772]="DST_ALPHA",E[E.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",E[E.DST_COLOR=774]="DST_COLOR",E[E.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",E[E.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",E[E.CONSTANT_COLOR=32769]="CONSTANT_COLOR",E[E.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",E[E.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",E[E.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(E){E[E.ADD=32774]="ADD",E[E.SUBTRACT=32778]="SUBTRACT",E[E.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",E[E.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",E[E.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",E[E.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",E[E.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",E[E.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(R||(R={})),function(E){E[E.FRONT=1028]="FRONT",E[E.BACK=1029]="BACK",E[E.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(E){E[E.CW=2304]="CW",E[E.CCW=2305]="CCW"}(i||(i={})),function(E){E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.INT=5124]="INT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.FLOAT=5126]="FLOAT"}(N||(N={})),function(E){E[E.NEVER=512]="NEVER",E[E.LESS=513]="LESS",E[E.EQUAL=514]="EQUAL",E[E.LEQUAL=515]="LEQUAL",E[E.GREATER=516]="GREATER",E[E.NOTEQUAL=517]="NOTEQUAL",E[E.GEQUAL=518]="GEQUAL",E[E.ALWAYS=519]="ALWAYS"}(o||(o={})),function(E){E[E.ZERO=0]="ZERO",E[E.KEEP=7680]="KEEP",E[E.REPLACE=7681]="REPLACE",E[E.INCR=7682]="INCR",E[E.DECR=7683]="DECR",E[E.INVERT=5386]="INVERT",E[E.INCR_WRAP=34055]="INCR_WRAP",E[E.DECR_WRAP=34056]="DECR_WRAP"}(s||(s={})),function(E){E[E.NEAREST=9728]="NEAREST",E[E.LINEAR=9729]="LINEAR",E[E.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",E[E.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",E[E.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",E[E.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(O||(O={})),function(E){E[E.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",E[E.REPEAT=10497]="REPEAT",E[E.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(E){E[E.TEXTURE_2D=3553]="TEXTURE_2D",E[E.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",E[E.TEXTURE_3D=32879]="TEXTURE_3D",E[E.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",E[E.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",E[E.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",E[E.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",E[E.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(S||(S={})),function(E){E[E.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.ALPHA=6406]="ALPHA",E[E.RGB=6407]="RGB",E[E.RGBA=6408]="RGBA",E[E.LUMINANCE=6409]="LUMINANCE",E[E.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",E[E.RED=6403]="RED",E[E.RG=33319]="RG",E[E.RED_INTEGER=36244]="RED_INTEGER",E[E.RG_INTEGER=33320]="RG_INTEGER",E[E.RGB_INTEGER=36248]="RGB_INTEGER",E[E.RGBA_INTEGER=36249]="RGBA_INTEGER"}(c||(c={})),function(E){E[E.RGBA4=32854]="RGBA4",E[E.R16F=33325]="R16F",E[E.RG16F=33327]="RG16F",E[E.RGB32F=34837]="RGB32F",E[E.RGBA16F=34842]="RGBA16F",E[E.R32F=33326]="R32F",E[E.RG32F=33328]="RG32F",E[E.RGBA32F=34836]="RGBA32F",E[E.R11F_G11F_B10F=35898]="R11F_G11F_B10F",E[E.RGB8=32849]="RGB8",E[E.RGBA8=32856]="RGBA8",E[E.RGB5_A1=32855]="RGB5_A1",E[E.R8=33321]="R8",E[E.RG8=33323]="RG8",E[E.R8I=33329]="R8I",E[E.R8UI=33330]="R8UI",E[E.R16I=33331]="R16I",E[E.R16UI=33332]="R16UI",E[E.R32I=33333]="R32I",E[E.R32UI=33334]="R32UI",E[E.RG8I=33335]="RG8I",E[E.RG8UI=33336]="RG8UI",E[E.RG16I=33337]="RG16I",E[E.RG16UI=33338]="RG16UI",E[E.RG32I=33339]="RG32I",E[E.RG32UI=33340]="RG32UI",E[E.RGB16F=34843]="RGB16F",E[E.RGB9_E5=35901]="RGB9_E5",E[E.SRGB8=35905]="SRGB8",E[E.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",E[E.RGB565=36194]="RGB565",E[E.RGBA32UI=36208]="RGBA32UI",E[E.RGB32UI=36209]="RGB32UI",E[E.RGBA16UI=36214]="RGBA16UI",E[E.RGB16UI=36215]="RGB16UI",E[E.RGBA8UI=36220]="RGBA8UI",E[E.RGB8UI=36221]="RGB8UI",E[E.RGBA32I=36226]="RGBA32I",E[E.RGB32I=36227]="RGB32I",E[E.RGBA16I=36232]="RGBA16I",E[E.RGB16I=36233]="RGB16I",E[E.RGBA8I=36238]="RGBA8I",E[E.RGB8I=36239]="RGB8I",E[E.R8_SNORM=36756]="R8_SNORM",E[E.RG8_SNORM=36757]="RG8_SNORM",E[E.RGB8_SNORM=36758]="RGB8_SNORM",E[E.RGBA8_SNORM=36759]="RGBA8_SNORM",E[E.RGB10_A2=32857]="RGB10_A2",E[E.RGB10_A2UI=36975]="RGB10_A2UI"}(C||(C={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",E[E.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",E[E.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",E[E.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.INT=5124]="INT",E[E.HALF_FLOAT=5131]="HALF_FLOAT",E[E.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",E[E.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",E[E.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",E[E.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(a||(a={})),function(E){E[E.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",E[E.STENCIL_INDEX8=36168]="STENCIL_INDEX8",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL",E[E.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",E[E.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",E[E.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",E[E.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(u||(u={})),function(E){E[E.STATIC_DRAW=35044]="STATIC_DRAW",E[E.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",E[E.STREAM_DRAW=35040]="STREAM_DRAW",E[E.STATIC_READ=35045]="STATIC_READ",E[E.DYNAMIC_READ=35049]="DYNAMIC_READ",E[E.STREAM_READ=35041]="STREAM_READ",E[E.STATIC_COPY=35046]="STATIC_COPY",E[E.DYNAMIC_COPY=35050]="DYNAMIC_COPY",E[E.STREAM_COPY=35042]="STREAM_COPY"}(L||(L={})),function(E){E[E.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",E[E.VERTEX_SHADER=35633]="VERTEX_SHADER"}(f||(f={})),function(E){E[E.FRAMEBUFFER=36160]="FRAMEBUFFER",E[E.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",E[E.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(D||(D={})),function(E){E[E.TEXTURE=0]="TEXTURE",E[E.RENDER_BUFFER=1]="RENDER_BUFFER",E[E.CUBEMAP=2]="CUBEMAP"}(U||(U={})),function(E){E[E.NONE=0]="NONE",E[E.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",E[E.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",E[E.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(M||(M={}));const l=33984;var P,G;!function(E){E[E.Texture=0]="Texture",E[E.BufferObject=1]="BufferObject",E[E.VertexArrayObject=2]="VertexArrayObject",E[E.Shader=3]="Shader",E[E.Program=4]="Program",E[E.FramebufferObject=5]="FramebufferObject",E[E.Renderbuffer=6]="Renderbuffer",E[E.Sync=7]="Sync",E[E.COUNT=8]="COUNT"}(P||(P={})),function(E){E[E.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",E[E.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",E[E.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",E[E.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",E[E.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",E[E.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",E[E.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",E[E.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",E[E.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",E[E.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",E[E.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",E[E.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",E[E.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",E[E.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",E[E.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",E[E.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(G||(G={}));const F=33306;var B,d,h,H,p,g,m;!function(E){E[E.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",E[E.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",E[E.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",E[E.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",E[E.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",E[E.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",E[E.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",E[E.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",E[E.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",E[E.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",E[E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(B||(B={})),function(E){E[E.FLOAT=5126]="FLOAT",E[E.FLOAT_VEC2=35664]="FLOAT_VEC2",E[E.FLOAT_VEC3=35665]="FLOAT_VEC3",E[E.FLOAT_VEC4=35666]="FLOAT_VEC4",E[E.INT=5124]="INT",E[E.INT_VEC2=35667]="INT_VEC2",E[E.INT_VEC3=35668]="INT_VEC3",E[E.INT_VEC4=35669]="INT_VEC4",E[E.BOOL=35670]="BOOL",E[E.BOOL_VEC2=35671]="BOOL_VEC2",E[E.BOOL_VEC3=35672]="BOOL_VEC3",E[E.BOOL_VEC4=35673]="BOOL_VEC4",E[E.FLOAT_MAT2=35674]="FLOAT_MAT2",E[E.FLOAT_MAT3=35675]="FLOAT_MAT3",E[E.FLOAT_MAT4=35676]="FLOAT_MAT4",E[E.SAMPLER_2D=35678]="SAMPLER_2D",E[E.SAMPLER_CUBE=35680]="SAMPLER_CUBE",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",E[E.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",E[E.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",E[E.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",E[E.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",E[E.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",E[E.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",E[E.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",E[E.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",E[E.SAMPLER_3D=35679]="SAMPLER_3D",E[E.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",E[E.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",E[E.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",E[E.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",E[E.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",E[E.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",E[E.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",E[E.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",E[E.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",E[E.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",E[E.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",E[E.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(d||(d={})),function(E){E[E.OBJECT_TYPE=37138]="OBJECT_TYPE",E[E.SYNC_CONDITION=37139]="SYNC_CONDITION",E[E.SYNC_STATUS=37140]="SYNC_STATUS",E[E.SYNC_FLAGS=37141]="SYNC_FLAGS"}(h||(h={})),function(E){E[E.UNSIGNALED=37144]="UNSIGNALED",E[E.SIGNALED=37145]="SIGNALED"}(H||(H={})),function(E){E[E.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",E[E.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",E[E.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",E[E.WAIT_FAILED=37149]="WAIT_FAILED"}(p||(p={})),function(E){E[E.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(g||(g={})),function(E){E[E.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))}}]);
//# sourceMappingURL=7814.cddbbf81.chunk.js.map