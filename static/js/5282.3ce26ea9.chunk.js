"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[5282],{65282:(n,e,a)=>{a.r(e),a.d(e,{registerFunctions:()=>d});var t=a(62357),r=a(22564),o=a(44715),i=a(29876);function c(n,e){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?t.Z.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:i.yE[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))},(0,o.C)(e)):t.Z.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:i.yE[n.field.type],min:n.domain.min,max:n.domain.max},(0,o.C)(e)):null}function d(n){"async"===n.mode&&(n.functions.domain=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.y)(i,2,3,e,a),(0,o.w)(i[0]))return c((0,o.P)(i[0],(0,o.j)(i[1]),void 0===i[2]?void 0:(0,o.g)(i[2])),e);if((0,o.T)(i[0]))return await i[0]._ensureLoaded(),c((0,o.Y)((0,o.j)(i[1]),i[0],null,void 0===i[2]?void 0:(0,o.g)(i[2])),e);throw new r.aV(e,r.rH.InvalidParameter,a)}))},n.functions.subtypes=function(e,a){return n.standardFunctionAsync(e,a,(async(n,i,c)=>{if((0,o.y)(c,1,1,e,a),(0,o.w)(c[0])){const n=(0,o.O)(c[0]);return n?t.Z.convertObjectToArcadeDictionary(n,(0,o.C)(e)):null}if((0,o.T)(c[0])){await c[0]._ensureLoaded();const n=c[0].subtypes();return n?t.Z.convertObjectToArcadeDictionary(n,(0,o.C)(e)):null}throw new r.aV(e,r.rH.InvalidParameter,a)}))},n.functions.domainname=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.y)(i,2,4,e,a),(0,o.w)(i[0]))return(0,o.Q)(i[0],(0,o.j)(i[1]),i[2],void 0===i[3]?void 0:(0,o.g)(i[3]));if((0,o.T)(i[0])){await i[0]._ensureLoaded();const n=(0,o.Y)((0,o.j)(i[1]),i[0],null,void 0===i[3]?void 0:(0,o.g)(i[3]));return(0,o.Z)(n,i[2])}throw new r.aV(e,r.rH.InvalidParameter,a)}))},n.signatures.push({name:"domainname",min:2,max:4}),n.functions.domaincode=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.y)(i,2,4,e,a),(0,o.w)(i[0]))return(0,o.S)(i[0],(0,o.j)(i[1]),i[2],void 0===i[3]?void 0:(0,o.g)(i[3]));if((0,o.T)(i[0])){await i[0]._ensureLoaded();const n=(0,o.Y)((0,o.j)(i[1]),i[0],null,void 0===i[3]?void 0:(0,o.g)(i[3]));return(0,o._)(n,i[2])}throw new r.aV(e,r.rH.InvalidParameter,a)}))},n.signatures.push({name:"domaincode",min:2,max:4})),n.functions.text=function(e,a){return n.standardFunctionAsync(e,a,((n,t,r)=>{if((0,o.y)(r,1,2,e,a),!(0,o.T)(r[0]))return(0,o.t)(r[0],r[1]);{const e=(0,o.A)(r[1],"");if(""===e)return r[0].castToText();if("schema"===e.toLowerCase())return r[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return r[0].convertToText("featureset",n.abortSignal)}}))},n.functions.gdbversion=function(e,a){return n.standardFunctionAsync(e,a,(async(n,t,i)=>{if((0,o.y)(i,1,1,e,a),(0,o.w)(i[0]))return i[0].gdbVersion();if((0,o.T)(i[0]))return(await i[0].load()).gdbVersion;throw new r.aV(e,r.rH.InvalidParameter,a)}))},n.functions.schema=function(e,a){return n.standardFunctionAsync(e,a,(async(n,i,c)=>{if((0,o.y)(c,1,1,e,a),(0,o.T)(c[0]))return await c[0].load(),t.Z.convertObjectToArcadeDictionary(c[0].schema(),(0,o.C)(e));if((0,o.w)(c[0])){const n=(0,o.N)(c[0]);return n?t.Z.convertObjectToArcadeDictionary(n,(0,o.C)(e)):null}throw new r.aV(e,r.rH.InvalidParameter,a)}))}}}}]);
//# sourceMappingURL=5282.3ce26ea9.chunk.js.map