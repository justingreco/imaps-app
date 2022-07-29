"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8920],{94304:(e,t,r)=>{r.r(t),r.d(t,{CIMSymbolRasterizer:()=>S,GeometryStyle:()=>n});var n,i,a=r(51995),o=r(76200),s=r(66978),l=r(17842),c=r(643),u=r(77981),f=r(79815),m=r(59001),h=r(16285),g=r(22532),d=r(31027),p=r(49729),y=r(83748);(i=n||(n={})).Legend="legend",i.Preview="preview";const C=(e,t,r)=>{if(e&&e.targetSize){let n;if(r){const t=Math.max(r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin);n=e.targetSize/(0,l.F2)(t)}else n=e.targetSize/t.referenceSize;return n}return e&&e.scaleFactor?e.scaleFactor:1},P={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};class S{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new g.Z,this._cimResourceManager=new m.Z,this._rasterizer=new h.Z(this._cimResourceManager)}async rasterizeCIMSymbolAsync(e,t,r,n,i,a,o,s){n=n||(t?null!=t.centroid?"esriGeometryPolygon":(0,u.Ji)(t.geometry):null)||function(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}(e);const l=await this.analyzeCIMSymbol(e,t?function(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}(t.attributes):null,r,n,s);return this.rasterizeCIMSymbol(l,t,n,i,a,o)}async analyzeCIMSymbol(e,t,r,n,i){const a=[],o=t?{geometryType:n,spatialReference:this._spatialReference,fields:t}:null;let l;await(0,f.c)(e.data,o,this._cimResourceManager,a,this._avoidSDF),(0,s.k_)(i);for(const s of a)"CIMPictureMarker"!==s.cim.type&&"CIMPictureFill"!==s.cim.type&&"CIMPictureStroke"!==s.cim.type||(l||(l=[]),l.push(this._fetchPictureMarkerResource(s,i))),r&&"text"===s.type&&"string"==typeof s.text&&s.text.includes("[")&&(s.text=(0,d.Qs)(r,s.text,s.cim.textCase));return l&&await Promise.all(l),a}async _fetchPictureMarkerResource(e,t){const r=e.materialHash;if(!this._pictureMarkerCache.get(r)){const n=(await(0,o.default)(e.cim.url,{responseType:"image",signal:t&&t.signal})).data;this._pictureMarkerCache.set(r,n)}}rasterizeCIMSymbol(e,t,r,n,i,a){const o=[];for(const s of e){n&&"function"==typeof n.scaleFactor&&(n.scaleFactor=n.scaleFactor(t,i,a));const e=this._getRasterizedResource(s,t,r,n,i,a);if(!e)continue;let l=0,c=e.anchorX||0,u=e.anchorY||0,f=!1,m=0,h=0;if("esriGeometryPoint"===r){const e=C(n,s,null);if(m=(0,d.hf)(s.offsetX,t,i,a)*e||0,h=(0,d.hf)(s.offsetY,t,i,a)*e||0,"marker"===s.type)l=(0,d.hf)(s.rotation,t,i,a)||0,f=!!s.rotateClockwise&&s.rotateClockwise;else if("text"===s.type){if(l=(0,d.hf)(s.angle,t,i,a)||0,void 0!==s.horizontalAlignment)switch(s.horizontalAlignment){case"left":c=-.5;break;case"right":c=.5;break;default:c=0}if(void 0!==s.verticalAlignment)switch(s.verticalAlignment){case"top":u=.5;break;case"bottom":u=-.5;break;case"baseline":u=-.25;break;default:u=0}}}null!=e&&o.push({angle:l,rotateClockWise:f,anchorX:c,anchorY:u,offsetX:m,offsetY:h,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),r=t.getContext("2d");let n=0,i=0,a=0,o=0;const s=[];for(let m=0;m<e.length;m++){const t=e[m],c=t.rasterizedResource;if(!c)continue;const u=c.size,f=t.offsetX,h=t.offsetY,g=t.anchorX,d=t.anchorY,p=t.rotateClockWise||!1;let y=t.angle,C=(0,l.F2)(f)-u[0]*(.5+g),P=(0,l.F2)(h)-u[1]*(.5+d),S=C+u[0],M=P+u[1];if(y){p&&(y=-y);const e=Math.sin(y*Math.PI/180),t=Math.cos(y*Math.PI/180),r=C*t-P*e,n=C*e+P*t,i=C*t-M*e,a=C*e+M*t,o=S*t-M*e,s=S*e+M*t,l=S*t-P*e,c=S*e+P*t;C=Math.min(r,i,o,l),P=Math.min(n,a,s,c),S=Math.max(r,i,o,l),M=Math.max(n,a,s,c)}n=C<n?C:n,i=P<i?P:i,a=S>a?S:a,o=M>o?M:o;const v=r.createImageData(c.size[0],c.size[1]);v.data.set(new Uint8ClampedArray(c.image.buffer));const w={offsetX:f,offsetY:h,rotateClockwise:p,angle:y,rasterizedImage:v,anchorX:g,anchorY:d};s.push(w)}t.width=a-n,t.height=o-i;const c=-n,u=o;for(let m=0;m<s.length;m++){const e=s[m],t=this._imageDataToCanvas(e.rasterizedImage),n=e.rasterizedImage.width,i=e.rasterizedImage.height,a=c-n*(.5+e.anchorX),o=u-i*(.5-e.anchorY);if(e.angle){const n=(360-e.angle)*Math.PI/180;r.save(),r.translate((0,l.F2)(e.offsetX),-(0,l.F2)(e.offsetY)),r.translate(c,u),r.rotate(n),r.translate(-c,-u),r.drawImage(t,a,o),r.restore()}else r.drawImage(t,a+(0,l.F2)(e.offsetX),o-(0,l.F2)(e.offsetY))}const f=new y.e({x:c/t.width-.5,y:u/t.height-.5});return{imageData:0!==t.width&&0!==t.height?r.getImageData(0,0,t.width,t.height):r.createImageData(1,1),anchorPosition:f}}_imageDataToCanvas(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const t=this._imageDataCanvas,r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.putImageData(e,0,0),t}_imageTo32Array(e,t,r,n){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const i=this._imageDataCanvas,o=i.getContext("2d");if(i.width=t,i.height=r,o.drawImage(e,0,0,t,r),n){o.save();const i=new a.Z(n);o.fillStyle=i.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,t,r),o.globalCompositeOperation="destination-atop",o.drawImage(e,0,0,t,r),o.restore()}return new Uint32Array(o.getImageData(0,0,t,r).data.buffer)}_getRasterizedResource(e,t,r,i,a,o){let s,l,u,f,m=null,h=null;if("esriGeometryPolyline"===r||"esriGeometryPolygon"===r){const f=i&&i.style?i.style:n.Legend,g="esriGeometryPolyline"===r?P.stroke[f]:P.fill[f];if("line"===e.type){if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){const r=(0,d.hf)(e.width,t,a,o),n=(0,d.hf)(e.color,t,a,o),{image:i,width:s,height:l}=this._getPictureResource(e,r,n);return this._rasterizePictureResource(e,i,s,l,g,r)}return null}({analyzedCIM:s,hash:u}=M(e,t,a,o)),l=this._embedCIMLayerInVectorMarker(s,g)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type){const r=(0,d.hf)(e.size,t,a,o),n=(0,d.hf)(e.color,t,a,o),{image:i,width:s,height:l}=this._getPictureResource(e,r,n);return this._rasterizePictureResource(e,i,s,l,g,r)}if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,d.hf)(e.offsetX,t,a,o),e.cim.offsetY=(0,d.hf)(e.offsetY,t,a,o),e.cim.rotation=(0,d.hf)(e.rotation,t,a,o),e.cim.markerPlacement=e.markerPlacement,({analyzedCIM:s}=M(e,t,a,o)),u=(0,c.hP)(JSON.stringify(s)).toString(),l=this._embedCIMLayerInVectorMarker(s,g),m=(0,d.hf)(e.size,t,a,o),h=e.path}else{if("text"===e.type)return null;if("fill"===e.type){if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){const r=e.cim.size||e.cim.height;let n,i,l;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type)({image:n,width:i,height:l}=this._getPictureResource(e,r,(0,d.hf)(e.color,t,a,o)));else{({analyzedCIM:s,hash:u}=M(e,t,a,o));const c=this._rasterizer.rasterizeJSONResource({cim:s,type:e.type,url:e.url,mosaicHash:u,size:r,path:h},1,this._avoidSDF);n=c.image,i=c.size[0],l=c.size[1]}return this._rasterizePictureResource(e,n,i,l,g,null)}if("CIMSolidFill"!==e.cim.type)return null;({analyzedCIM:s,hash:u}=M(e,t,a,o)),l=this._embedCIMLayerInVectorMarker(s,g)}}}else{if("text"===e.type)return f=this._rasterizeTextResource(e,t,i,a,o),f;({analyzedCIM:s,hash:u}=M(e,t,a,o));const r=C(i,e,null);if("CIMPictureMarker"===e.cim.type){const n=(0,d.hf)(e.size,t,a,o)*r,{image:i,width:s,height:l}=this._getPictureResource(e,n,(0,d.hf)(e.color,t,a,o));return f={image:i,size:[s,l],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},f}(0,p.FW)(s,r,{preserveOutlineWidth:!1}),l=s}u+=r,i&&(u+=JSON.stringify(i));const g=this._resourceCache;return g.has(u)?g.get(u):(f=this._rasterizer.rasterizeJSONResource({cim:l,type:e.type,url:e.url,mosaicHash:u,size:m,path:h},window.devicePixelRatio||1,this._avoidSDF),g.set(u,f),f)}_rasterizeTextResource(e,t,r,n,i){const a=C(r,e,null),o=(0,d.hf)(e.text,t,n,i);if(!o||0===o.length)return null;const s=(0,d.hf)(e.fontName,t,n,i),l=(0,d.hf)(e.style,t,n,i),c=(0,d.hf)(e.weight,t,n,i),u=(0,d.hf)(e.decoration,t,n,i),f=(0,d.hf)(e.size,t,n,i)*a,m=(0,d.hf)(e.horizontalAlignment,t,n,i),h=(0,d.hf)(e.verticalAlignment,t,n,i),g=(0,d.nn)((0,d.hf)(e.color,t,n,i)),p=(0,d.nn)((0,d.hf)(e.outlineColor,t,n,i)),y={color:g,size:f,horizontalAlignment:m,verticalAlignment:h,font:{family:s,style:l,weight:c,decoration:u},halo:{size:(0,d.hf)(e.outlineSize,t,n,i)||0,color:p,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,y)}_rasterizePictureResource(e,t,r,n,i,a){const o=document.createElement("canvas"),s=o.getContext("2d");o.height=(0,l.F2)(Math.max(i.frame.ymax-i.frame.ymin,a)),o.width=(0,l.F2)(i.frame.xmax-i.frame.xmin);const c=s.createImageData(r,n);c.data.set(new Uint8ClampedArray(t.buffer));const f=this._imageDataToCanvas(c),m=s.createPattern(f,"repeat"),h=Math.cos((-e.cim.rotation||0)*Math.PI/180),g=Math.sin((-e.cim.rotation||0)*Math.PI/180);m.setTransform({m11:h,m12:g,m21:-g,m22:h,m41:(0,l.F2)(e.cim.offsetX)||0,m42:(0,l.F2)(e.cim.offsetY)||0});const d=i.canvasPaths;let p,y,C;(0,u.oU)(d)?(p=d.rings,s.fillStyle=m,y=s.fill,C=["evenodd"]):(0,u.l9)(d)&&(p=d.paths,s.strokeStyle=m,s.lineWidth=a,y=s.stroke,p[0][0][1]=o.height/2,p[0][1][1]=o.height/2),s.beginPath();for(const u of p){const e=u?u.length:0;if(e>1){let t=u[0];s.moveTo((0,l.F2)(t[0]),(0,l.F2)(t[1]));for(let r=1;r<e;++r)t=u[r],s.lineTo((0,l.F2)(t[0]),(0,l.F2)(t[1]));s.closePath()}}y.apply(s,C);const P=s.getImageData(0,0,o.width,o.height),S=new Uint8Array(P.data);return{size:[o.width,o.height],image:new Uint32Array(S.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}_getPictureResource(e,t,r){const n=this._pictureMarkerCache.get(e.materialHash);if(!n)return null;const i=n.height/n.width,a=t?i>1?(0,l.F2)(t):(0,l.F2)(t)/i:n.width,o=t?i>1?(0,l.F2)(t)*i:(0,l.F2)(t):n.height;return{image:this._imageTo32Array(n,a,o,r),width:a,height:o}}_embedCIMLayerInVectorMarker(e,t){const r=(0,u.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",n=t.frame;return{type:"CIMVectorMarker",frame:n,size:n.ymax-n.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:r,symbolLayers:[e]}}]}}}function M(e,t,r,n){let i,a;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,r,n),a=(0,f.S)(e.cim,e.materialOverrides)):(i=e.materialHash,a=e.cim),{analyzedCIM:a,hash:i}}},16285:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(78915),i=r(691),a=r(6388),o=r(31027);class s{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,t,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[r,i,a]=n.fN.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t);return{size:[i,a],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,r;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=(0,n.U1)(e.style,e.cap),e.cap){case"butt":r="Butt";break;case"square":r="Square";break;default:r="Round"}else t=e.dashTemplate,r=e.cim.capStyle;const[i,a,o]=n.fN.rasterizeSimpleLine(t,r);return{size:[a,o],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let o,s,l;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(o=n.B$.fromSimpleMarker(e),l=(0,a.Fp)(o)):e.cim&&"CIMHatchFill"===e.cim.type?(o=n.B$.fromCIMHatchFill(e.cim),s=new i.Z(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(o=n.B$.fromCIMInsidePolygon(e.cim),s=new i.Z(o.frame.xmin,-o.frame.ymax,o.frame.xmax-o.frame.xmin,o.frame.ymax-o.frame.ymin)):(o=e.cim,l=(0,a.Fp)(o)),l&&!r){const[e,t,r]=(0,a.RL)(l);return e?{size:[t,r],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,u,f,m,h]=n.B$.rasterize(this._rasterizationCanvas,o,s,this._resourceManager,!r);return c?{size:[u,f],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:m,anchorY:h}:null}rasterizeImageResource(e,t,r,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?i.putImageData(r,0,0):(r.setAttribute("width",`${e}px`),r.setAttribute("height",`${t}px`),i.drawImage(r,0,0,e,t));const a=i.getImageData(0,0,e,t),s=new Uint8Array(a.data);if(n)for(const o of n)if(o&&o.oldColor&&4===o.oldColor.length&&o.newColor&&4===o.newColor.length){const[e,t,r,n]=o.oldColor,[i,a,l,c]=o.newColor;if(e===i&&t===a&&r===l&&n===c)continue;for(let o=0;o<s.length;o+=4)e===s[o]&&t===s[o+1]&&r===s[o+2]&&n===s[o+3]&&(s[o]=i,s[o+1]=a,s[o+2]=l,s[o+3]=c)}let l;for(let o=0;o<s.length;o+=4)l=s[o+3]/255,s[o]=s[o]*l,s[o+1]=s[o+1]*l,s[o+2]=s[o+2]*l;let c=s,u=e,f=t;const m=512;if(u>=m||f>=m){const r=u/f;r>1?(u=m,f=Math.round(m/r)):(f=m,u=Math.round(m*r)),c=new Uint8Array(4*u*f);const n=new Uint8ClampedArray(c.buffer);(0,o.TT)(s,e,t,n,u,f,!1)}return{size:[u,f],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}},48202:(e,t,r)=>{var n,i,a,o,s,l,c,u,f,m,h,g,d,p,y,C,P,S,M,v,w,R,T,b,x,I,L,z,A,F,B,k,_,D,N,O,U,E,H,W,X,Y,G,J,Z,V,q,$,Q,K,j,ee,te,re,ne,ie,ae,oe,se,le,ce;r.d(t,{$y:()=>R,AH:()=>i,CS:()=>q,DD:()=>u,Dd:()=>A,Em:()=>w,JS:()=>Z,Ky:()=>f,Lh:()=>$,Qb:()=>ae,RL:()=>n,RS:()=>se,TF:()=>v,Tx:()=>s,UR:()=>P,UX:()=>ie,bj:()=>V,eZ:()=>c,id:()=>x,kP:()=>O,of:()=>h,r4:()=>W,sj:()=>U,v2:()=>a,zQ:()=>z,zV:()=>C}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(n||(n={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(a||(a={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(s||(s={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(l||(l={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(c||(c={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(u||(u={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(m||(m={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(h||(h={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(g||(g={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(d||(d={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(p||(p={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(y||(y={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(C||(C={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(P||(P={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(S||(S={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(M||(M={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(v||(v={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(w||(w={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(R||(R={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(T||(T={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(b||(b={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(x||(x={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(I||(I={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(L||(L={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(z||(z={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(A||(A={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(F||(F={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(B||(B={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(k||(k={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(_||(_={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(D||(D={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(N||(N={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(O||(O={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(U||(U={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(E||(E={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(H||(H={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(W||(W={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(X||(X={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(Y||(Y={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(G||(G={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(J||(J={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(Z||(Z={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(V||(V={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(q||(q={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}($||($={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(Q||(Q={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(K||(K={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(j||(j={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(re||(re={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(ne||(ne={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ie||(ie={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ae||(ae={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(se||(se={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(le||(le={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(ce||(ce={}))},38999:(e,t,r)=>{var n,i;function a(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function o(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function s(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[n.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[n.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[n.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[n.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[n.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[n.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[n.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[n.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[n.Left,i.Top];default:return console.debug(`Found invalid placement type ${e}`),[n.Center,i.Center]}}function l(e){switch(e){case n.Right:return-1;case n.Center:return 0;case n.Left:return 1;default:return console.debug(`Found invalid horizontal alignment ${e}`),0}}function c(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug(`Found invalid vertical alignment ${e}`),0}}function u(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":return n.Center}}function f(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,{Hd:()=>u,M7:()=>n,NS:()=>f,TR:()=>i,b7:()=>o,g:()=>l,kH:()=>a,qv:()=>s,tf:()=>c}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(n||(n={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},94109:(e,t,r)=>{r.d(t,{$0:()=>o,AI:()=>n,Al:()=>h,By:()=>P,C1:()=>Y,CQ:()=>J,CU:()=>O,D3:()=>m,Ex:()=>c,I_:()=>a,Ic:()=>g,Ij:()=>y,Ip:()=>W,Iv:()=>$,Iw:()=>u,Jw:()=>w,MI:()=>X,QU:()=>v,SD:()=>K,Tz:()=>Z,Uh:()=>G,V4:()=>N,XJ:()=>H,Xj:()=>M,Zd:()=>B,_5:()=>b,_6:()=>Q,a:()=>U,aK:()=>L,dn:()=>D,e0:()=>q,eF:()=>f,eV:()=>s,f2:()=>C,fL:()=>E,iJ:()=>d,iV:()=>k,jk:()=>j,kF:()=>R,lK:()=>z,m4:()=>A,mx:()=>S,nM:()=>p,oK:()=>V,pU:()=>I,ru:()=>i,tQ:()=>_,uG:()=>F,xl:()=>x,xm:()=>l,yP:()=>T});const n=1e-30,i=4294967295,a=512,o=8,s=10,l=29,c=24,u=8,f={metrics:{width:15,height:17,left:0,top:-7,advance:14}},m=0,h=0,g=0,d=1,p=2,y=3,C=4,P=5,S=6,M=12,v=5,w=6,R=5,T=6,b=0,x=1,I=2,L=3,z=4,A=2,F=1,B=2,k=4,_=1.05,D=3,N=5,O=6,U=1.15,E=2,H=8,W=500,X=10,Y=1024,G=2,J=0,Z=1,V=4,q=8,$=16,Q=4,K=1,j=4},73271:(e,t,r)=>{r.d(t,{Au:()=>i,Jz:()=>o,UJ:()=>a});const n=new Float32Array(1);new Uint32Array(n.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function o(e,t,r,n){return 255&e|(255&t)<<8|(255&r)<<16|n<<24}}}]);
//# sourceMappingURL=8920.24e38829.chunk.js.map