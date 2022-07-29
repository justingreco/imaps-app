"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8596],{21530:(_,E,t)=>{t.d(E,{x:()=>R});var e=t(70758);class R{constructor(_){this.allocator=_,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,e.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const _=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*T);this._items.length=Math.min(_,this._items.length),this._itemsPtr=0}_grow(){for(let _=0;_<Math.max(8,Math.min(this._items.length,T));_++)this._items.push(this.allocator())}}const T=1024},48734:(_,E,t)=>{t.d(E,{B3:()=>R,Op:()=>A,U:()=>T,n1:()=>e});t(93169);function e(_){switch(_){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function R(_){switch(_){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function T(_){switch(_){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function A(_){switch(_){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},35886:(_,E,t)=>{t.r(E),t.d(E,{loadGLTFMesh:()=>h});var e=t(51995),R=t(76200),T=t(77427),A=t(16889),n=t(92026),r=t(22753),N=t(11873),C=t(71353),S=t(67077),s=t(64995),i=t(11587),I=t(79694),O=t(27474),o=t(25158),c=t(32035),a=t(19093),u=t(17054),L=t(57898),M=t(27053),P=t(55798),D=t(32315),U=t(81955),f=t(68845),G=t(8548),B=t(92770),l=t(69618),F=t(19131);async function h(_,E,t){const A=new M.C(function(_){return _?.resolveFile?{busy:!1,request:async(E,t,e)=>{const T=_.resolveFile(E),A="image"===t?"image":"binary"===t?"array-buffer":"json";return(await(0,R.default)(T,{responseType:A,signal:(0,n.pC)(e)?e.signal:null})).data}}:null}(t)),r=(await(0,P.z)(A,E,t,!0)).model,N=r.lods.shift(),s=new Map,c=new Map;r.textures.forEach(((_,E)=>s.set(E,function(_){return new I.Z({data:_.data,wrap:d(_.parameters.wrap)})}(_)))),r.materials.forEach(((_,E)=>c.set(E,function(_,E){const t=new e.Z(function(_,E){return(0,S.f)(Y(_[0]),Y(_[1]),Y(_[2]),E)}(_.color,_.opacity)),R=_.emissiveFactor?new e.Z(function(_){return(0,C.f)(Y(_[0]),Y(_[1]),Y(_[2]))}(_.emissiveFactor)):null;return new i.Z({color:t,colorTexture:(0,n.Wg)((0,n.yw)(_.textureColor,(_=>E.get(_)))),normalTexture:(0,n.Wg)((0,n.yw)(_.textureNormal,(_=>E.get(_)))),emissiveColor:R,emissiveTexture:(0,n.Wg)((0,n.yw)(_.textureEmissive,(_=>E.get(_)))),occlusionTexture:(0,n.Wg)((0,n.yw)(_.textureOcclusion,(_=>E.get(_)))),alphaMode:p(_.alphaMode),alphaCutoff:_.alphaCutoff,doubleSided:_.doubleSided,metallic:_.metallicFactor,roughness:_.roughnessFactor,metallicRoughnessTexture:(0,n.Wg)((0,n.yw)(_.textureMetallicRoughness,(_=>E.get(_))))})}(_,s))));const a=function(_){let E=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},e=new Map,R=new Map,A=[];for(const n of _.parts){const{attributes:{position:_,normal:r,color:N,tangent:C,texCoord0:S}}=n,s=`\n      ${H(_,e)}/\n      ${H(r,e)}/\n      ${H(N,e)}/\n      ${H(C,e)}/\n      ${H(S,e)}/\n      ${m(n.transform)}\n    `;let i=!1;const I=(0,T.s1)(R,s,(()=>(i=!0,{start:E,length:_.count})));i&&(E+=_.count),r&&(t.normal=!0),N&&(t.color=!0),C&&(t.tangent=!0),S&&(t.texCoord0=!0),A.push({gltf:n,writeVertices:i,region:I})}return{vertexAttributes:{position:(0,u.gS)(o.fP,E),normal:t.normal?(0,u.gS)(o.ct,E):null,tangent:t.tangent?(0,u.gS)(o.ek,E):null,color:t.color?(0,u.gS)(o.mc,E):null,texCoord0:t.texCoord0?(0,u.gS)(o.Eu,E):null},parts:A,components:[]}}(N);for(const e of a.parts)g(a,e,c);const{position:D,normal:U,tangent:f,color:G,texCoord0:B}=a.vertexAttributes,l={position:D.typedBuffer,normal:(0,n.pC)(U)?U.typedBuffer:null,tangent:(0,n.pC)(f)?f.typedBuffer:null,uv:(0,n.pC)(B)?B.typedBuffer:null,color:(0,n.pC)(G)?G.typedBuffer:null},F=(0,L.w1)(l,_,t);return{transform:F.transform,components:a.components,spatialReference:_.spatialReference,vertexAttributes:new O.Q({position:F.vertexAttributes.position,normal:F.vertexAttributes.normal,tangent:F.vertexAttributes.tangent,color:l.color,uv:l.uv})}}function H(_,E){if((0,n.Wi)(_))return"-";const t=_.typedBuffer;return`${(0,T.s1)(E,t.buffer,(()=>E.size))}/${t.byteOffset}/${t.byteLength}`}function m(_){return(0,n.pC)(_)?_.toString():"-"}function g(_,E,t){E.writeVertices&&function(_,E){const{position:t,normal:e,tangent:R,color:T,texCoord0:C}=_.vertexAttributes,S=E.region.start,{attributes:s,transform:i}=E.gltf,I=s.position.count;if((0,c.t)(t.slice(S,I),s.position,i),(0,n.pC)(s.normal)&&(0,n.pC)(e)){const _=(0,r.a)((0,N.c)(),i),E=e.slice(S,I);(0,c.a)(E,s.normal,_),(0,A.oc)(_)&&(0,c.n)(E,E)}else(0,n.pC)(e)&&(0,B.f)(e,0,0,1,{dstIndex:S,count:I});if((0,n.pC)(s.tangent)&&(0,n.pC)(R)){const _=(0,r.a)((0,N.c)(),i),E=R.slice(S,I);(0,a.t)(E,s.tangent,_),(0,A.oc)(_)&&(0,a.n)(E,E)}else(0,n.pC)(R)&&(0,l.f)(R,0,0,1,1,{dstIndex:S,count:I});if((0,n.pC)(s.texCoord0)&&(0,n.pC)(C)?(0,F.n)(C.slice(S,I),s.texCoord0):(0,n.pC)(C)&&(0,F.f)(C,0,0,{dstIndex:S,count:I}),(0,n.pC)(s.color)&&(0,n.pC)(T)){const _=s.color,E=T.slice(S,I);if(4===_.elementCount)_ instanceof o.ek?(0,a.s)(E,_,255):_ instanceof o.mc?(0,l.c)(E,_):_ instanceof o.v6&&(0,a.a)(E,_,8);else{(0,l.f)(E,255,255,255,255);const t=o.ne.fromTypedArray(E.typedBuffer,E.typedBufferStride);_ instanceof o.ct?(0,c.s)(t,_,255):_ instanceof o.ne?(0,B.c)(t,_):_ instanceof o.mw&&(0,c.b)(t,_,8)}}else(0,n.pC)(T)&&(0,l.f)(T.slice(S,I),255,255,255,255)}(_,E);const e=E.gltf,R=function(_,E){switch(E){case G.MX.TRIANGLES:return(0,D.nh)(_,U.DX);case G.MX.TRIANGLE_STRIP:return(0,D.DA)(_);case G.MX.TRIANGLE_FAN:return(0,D.jX)(_)}}(e.indices||e.attributes.position.count,e.primitiveType),T=E.region.start;if(T)for(let A=0;A<R.length;A++)R[A]+=T;_.components.push(new s.Z({faces:R,material:t.get(e.material),trustSourceNormals:!0}))}function p(_){switch(_){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function d(_){return{horizontal:V(_.s),vertical:V(_.t)}}function V(_){switch(_){case G.e8.CLAMP_TO_EDGE:return"clamp";case G.e8.MIRRORED_REPEAT:return"mirror";case G.e8.REPEAT:return"repeat"}}function Y(_){return _**(1/f.K)*255}},11185:(_,E,t)=>{t.d(E,{MP:()=>o,vD:()=>c,qW:()=>i,WM:()=>I,o6:()=>O});var e=t(59896),R=t(70758),T=t(11873),A=t(81949),n=t(98131),r=t(6394),N=t(71353),C=t(67077);class S{constructor(_,E,t){this.itemByteSize=_,this.itemCreate=E,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(t/this.itemByteSize)}get(){0===this._itemsPtr&&(0,R.Y)((()=>this._reset()));const _=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=_;){const _=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let E=0;E<this._itemsPerBuffer;++E)this._items.push(this.itemCreate(_,E*this.itemByteSize));this._buffers.push(_)}return this._items[this._itemsPtr++]}_reset(){const _=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>_;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return new S(16,r.c,_)}static createVec3f64(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return new S(24,N.b,_)}static createVec4f64(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return new S(32,C.a,_)}static createMat3f64(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return new S(72,T.a,_)}static createMat4f64(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return new S(128,A.a,_)}static createQuatf64(){let _=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return new S(32,n.c,_)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const s=4*e.Y8.KILOBYTES,i=S.createVec2f64(),I=S.createVec3f64(),O=S.createVec4f64(),o=(S.createMat3f64(),S.createMat4f64()),c=S.createQuatf64()},81955:(_,E,t)=>{t.d(E,{DX:()=>C,NO:()=>s,cM:()=>S,p:()=>N,qZ:()=>i});var e=t(11186),R=t(71353),T=t(74702);let A=(()=>{const _=new Uint32Array(131072);for(let E=0;E<_.length;++E)_[E]=E;return _})();const n=new Uint16Array([0]),r=(()=>{const _=new Uint16Array(65536);for(let E=0;E<_.length;++E)_[E]=E;return _})();function N(_){if(1===_)return n;if(_<r.length)return new Uint16Array(r.buffer,0,_);if(_>A.length){const E=Math.max(2*A.length,_);A=new Uint32Array(E);for(let _=0;_<A.length;_++)A[_]=_}return new Uint32Array(A.buffer,0,_)}function C(_){if(1===_)return new Uint16Array(n);if(_<r.length)return new Uint16Array(r.slice(0,_));if(_>A.length){const E=new Uint32Array(_);for(let _=0;_<E.length;_++)E[_]=_;return E}return new Uint32Array(A.slice(0,_))}function S(_,E,t){if(!_)return!1;const{size:R,data:A}=_;(0,e.s)(t,0,0,0),(0,e.s)(c,0,0,0);let n=0,r=0;for(let N=0;N<E.length-2;N+=3){const _=E[N+0]*R,C=E[N+1]*R,S=E[N+2]*R;(0,e.s)(I,A[_+0],A[_+1],A[_+2]),(0,e.s)(O,A[C+0],A[C+1],A[C+2]),(0,e.s)(o,A[S+0],A[S+1],A[S+2]);const s=(0,T.bE)(I,O,o);s?((0,e.a)(I,I,O),(0,e.a)(I,I,o),(0,e.g)(I,I,1/3*s),(0,e.a)(t,t,I),n+=s):((0,e.a)(c,c,I),(0,e.a)(c,c,O),(0,e.a)(c,c,o),r+=3)}return(0!==r||0!==n)&&(0!==n?((0,e.g)(t,t,1/n),!0):0!==r&&((0,e.g)(t,c,1/r),!0))}function s(_,E,t){if(!_||!E)return!1;const{size:R,data:T}=_;(0,e.s)(t,0,0,0);let A=-1,n=0;for(let e=0;e<E.length;e++){const _=E[e]*R;A!==_&&(t[0]+=T[_+0],t[1]+=T[_+1],t[2]+=T[_+2],n++),A=_}return n>1&&(0,e.g)(t,t,1/n),n>0}function i(_,E,t,R){if(!_)return!1;const{size:T,data:A}=_;(0,e.s)(R,0,0,0),(0,e.s)(c,0,0,0);let n=0,r=0;const N=E?E.length-1:A.length/T-1,C=N+(t?2:0);for(let S=0;S<C;S+=2){const _=S<N?S:N,t=S<N?S+1:0,C=(E?E[_]:_)*T,s=(E?E[t]:t)*T;I[0]=A[C+0],I[1]=A[C+1],I[2]=A[C+2],O[0]=A[s+0],O[1]=A[s+1],O[2]=A[s+2],(0,e.g)(I,(0,e.a)(I,I,O),.5);const i=(0,e.j)(I,O);i>0?((0,e.a)(R,R,(0,e.g)(I,I,i)),n+=i):((0,e.a)(c,c,I),r++)}return 0!==n?((0,e.g)(R,R,1/n),!0):0!==r&&((0,e.g)(R,c,1/r),!0)}const I=(0,R.c)(),O=(0,R.c)(),o=(0,R.c)(),c=(0,R.c)()},8548:(_,E,t)=>{var e,R,T,A,n,r,N,C,S,s,i,I,O,o,c,a,u,L,M,P,D,U;t.d(E,{Br:()=>a,Ho:()=>M,LR:()=>r,Ld:()=>f,Lm:()=>D,Lu:()=>l,MX:()=>R,No:()=>O,OU:()=>U,Se:()=>h,Tg:()=>u,V7:()=>p,VI:()=>o,VY:()=>B,Wf:()=>N,Y5:()=>g,_g:()=>G,cw:()=>i,db:()=>A,e8:()=>I,g:()=>C,l1:()=>L,lP:()=>c,lk:()=>e,q_:()=>F,qi:()=>P,w0:()=>n,wb:()=>S,xS:()=>s,zi:()=>T}),function(_){_[_.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",_[_.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",_[_.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(e||(e={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(R||(R={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(T||(T={})),function(_){_[_.ADD=32774]="ADD",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(A||(A={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(n||(n={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(r||(r={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(N||(N={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT"}(C||(C={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(S||(S={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(s||(s={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(i||(i={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(o||(o={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(c||(c={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(a||(a={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(u||(u={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(L||(L={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(M||(M={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(P||(P={})),function(_){_[_.TEXTURE=0]="TEXTURE",_[_.RENDER_BUFFER=1]="RENDER_BUFFER",_[_.CUBEMAP=2]="CUBEMAP"}(D||(D={})),function(_){_[_.NONE=0]="NONE",_[_.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",_[_.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",_[_.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",_[_.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(U||(U={}));const f=33984;var G,B;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.Sync=7]="Sync",_[_.COUNT=8]="COUNT"}(G||(G={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(B||(B={}));const l=33306;var F,h,H,m,g,p,d;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(F||(F={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(h||(h={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(H||(H={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(m||(m={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(p||(p={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(d||(d={}))}}]);
//# sourceMappingURL=8596.58ed8345.chunk.js.map