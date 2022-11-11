"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[1884],{65630:(e,t,o)=>{o.d(t,{D:()=>U,b:()=>k});var r=o(92026),a=o(81949),i=o(22357),n=o(83734),s=o(37081),l=o(33280),c=o(94951),d=o(81221),u=o(73782),m=o(52276),p=o(53230),h=o(60113),v=o(48655),f=o(85380),g=o(49223),x=o(6781),T=o(38171),b=o(30694),y=o(34975),C=o(92395),w=o(15226),M=o(96658),O=o(2116),S=o(41481),_=o(58335),A=o(79154),H=o(18607),L=o(26461),N=o(65974),P=o(71033),R=o(82552),I=o(49450),D=o(95276),E=o(58406),B=o(98634),V=o(8654),z=o(64201),F=o(19253),$=o(25920),G=o(4760);function k(e){const t=new z.kG,{vertex:o,fragment:k,varyings:U}=t;return(0,R.Sv)(o,e),t.include(m.f),U.add("vpos","vec3"),t.include(H.k,e),t.include(d.f,e),t.include(g.L,e),e.hasColorTextureTransform&&t.include(A.av),e.output!==s.H.Color&&e.output!==s.H.Alpha||(e.hasNormalTextureTransform&&t.include(A.NI),e.hasEmissionTextureTransform&&t.include(A.R5),e.hasOcclusionTextureTransform&&t.include(A.jF),e.hasMetallicRoughnessTextureTransform&&t.include(A.DT),(0,R.hY)(o,e),t.include(u.O,e),t.include(c.w,e),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(n.w),t.include(T.Q,e),t.include(f.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),U.add("localvpos","vec3"),t.include(h.D,e),t.include(i.qj,e),t.include(p.R,e),t.include(v.c,e),o.uniforms.add(new D.N("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),e.hasMultipassTerrain&&U.add("depth","float"),e.hasModelTransformation&&o.uniforms.add(new V.g("model",(e=>(0,r.pC)(e.modelTransformation)?e.modelTransformation:a.I))),o.code.add(B.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${B.H.float(L.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?B.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?B.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?B.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?B.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?B.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?B.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===s.H.Alpha&&(t.include(l.f5,e),t.include(N.z,e),t.include(w.l,e),k.uniforms.add([new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&k.uniforms.add(new F.A("tex",(e=>e.texture))),k.include(P.y),k.code.add(B.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?B.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?B.H`colorUV`:B.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:B.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?B.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:B.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(l.f5,e),t.include(y.XP,e),t.include(b.K,e),t.include(N.z,e),t.include(e.instancedDoublePrecision?_.hb:_.XE,e),t.include(w.l,e),(0,R.hY)(k,e),k.uniforms.add([o.uniforms.get("localOrigin"),new I.J("ambient",(e=>e.ambient)),new I.J("diffuse",(e=>e.diffuse)),new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&k.uniforms.add(new F.A("tex",(e=>e.texture))),t.include(S.jV,e),t.include(O.T,e),k.include(P.y),t.include(M.k,e),(0,y.PN)(k),(0,y.sC)(k),(0,C.F1)(k),k.code.add(B.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?B.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?B.H`colorUV`:B.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:B.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?B.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:B.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===S.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?B.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:B.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?B.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:B.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?B.H`normalize(posWorld);`:B.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?B.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===S.f7.Normal||e.pbrMode===S.f7.Schematic?B.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?B.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:B.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===$.A.Color?B.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(x.s,e),t}const U=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}))},40563:(e,t,o)=>{o.d(t,{R:()=>B,b:()=>E});var r=o(22357),a=o(83734),i=o(37081),n=o(33280),s=o(94951),l=o(81221),c=o(73782),d=o(52276),u=o(53230),m=o(60113),p=o(48655),h=o(49223),v=o(6781),f=o(30694),g=o(34975),x=o(92395),T=o(15226),b=o(2116),y=o(41481),C=o(58335),w=o(18607),M=o(26461),O=o(65974),S=o(71033),_=o(82552),A=o(49450),H=o(95276),L=o(58406),N=o(98634),P=o(64201),R=o(19253),I=o(25920),D=o(4760);function E(e){const t=new P.kG,{vertex:o,fragment:E,varyings:B}=t;return(0,_.Sv)(o,e),t.include(d.f),B.add("vpos","vec3"),t.include(w.k,e),t.include(l.f,e),t.include(h.L,e),e.output!==i.H.Color&&e.output!==i.H.Alpha||((0,_.hY)(t.vertex,e),t.include(c.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(a.w),e.instancedColor&&t.attributes.add(D.T.INSTANCECOLOR,"vec4"),B.add("vNormalWorld","vec3"),B.add("localvpos","vec3"),e.hasMultipassTerrain&&B.add("depth","float"),t.include(m.D,e),t.include(r.qj,e),t.include(u.R,e),t.include(p.c,e),o.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),B.add("vcolorExt","vec4"),o.code.add(N.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${N.H.float(M.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?N.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===i.H.Alpha&&(t.include(n.f5,e),t.include(O.z,e),t.include(T.l,e),E.uniforms.add([new L.p("opacity",(e=>e.opacity)),new L.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&E.uniforms.add(new R.A("tex",(e=>e.texture))),E.include(S.y),E.code.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?N.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?N.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?N.H`colorUV`:N.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?N.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===i.H.Color&&(t.include(n.f5,e),t.include(g.XP,e),t.include(f.K,e),t.include(O.z,e),t.include(e.instancedDoublePrecision?C.hb:C.XE,e),t.include(T.l,e),(0,_.hY)(t.fragment,e),(0,x.Pe)(E),(0,g.PN)(E),(0,g.sC)(E),E.uniforms.add([o.uniforms.get("localOrigin"),o.uniforms.get("view"),new A.J("ambient",(e=>e.ambient)),new A.J("diffuse",(e=>e.diffuse)),new L.p("opacity",(e=>e.opacity)),new L.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&E.uniforms.add(new R.A("tex",(e=>e.texture))),t.include(y.jV,e),t.include(b.T,e),E.include(S.y),t.extensions.add("GL_OES_standard_derivatives"),(0,x.F1)(E),E.code.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?N.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?N.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?N.H`colorUV`:N.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:N.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===y.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?N.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?N.H`albedo = mix(albedo, vec3(1), 0.9);`:N.H``}
        ${N.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===y.f7.Normal||e.pbrMode===y.f7.Schematic?e.spherical?N.H`vec3 normalGround = normalize(vpos + localOrigin);`:N.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:N.H``}
        ${e.pbrMode===y.f7.Normal||e.pbrMode===y.f7.Schematic?N.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?N.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===I.A.Color?N.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:N.H``}
      }
    `)),t.include(v.s,e),t}const B=Object.freeze(Object.defineProperty({__proto__:null,build:E},Symbol.toStringTag,{value:"Module"}))},32035:(e,t,o)=>{o.d(t,{a:()=>i,b:()=>l,n:()=>s,s:()=>n,t:()=>a});var r=o(77873);function a(e,t,o){if(e.count!==t.count)return void r.c.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[4],c=o[5],d=o[6],u=o[8],m=o[9],p=o[10],h=o[12],v=o[13],f=o[14],g=e.typedBuffer,x=e.typedBufferStride,T=t.typedBuffer,b=t.typedBufferStride;for(let r=0;r<a;r++){const e=r*x,t=r*b,o=T[t],a=T[t+1],y=T[t+2];g[e]=i*o+l*a+u*y+h,g[e+1]=n*o+c*a+m*y+v,g[e+2]=s*o+d*a+p*y+f}}function i(e,t,o){if(e.count!==t.count)return void r.c.error("source and destination buffers need to have the same number of elements");const a=e.count,i=o[0],n=o[1],s=o[2],l=o[3],c=o[4],d=o[5],u=o[6],m=o[7],p=o[8],h=e.typedBuffer,v=e.typedBufferStride,f=t.typedBuffer,g=t.typedBufferStride;for(let r=0;r<a;r++){const e=r*v,t=r*g,o=f[t],a=f[t+1],x=f[t+2];h[e]=i*o+l*a+u*x,h[e+1]=n*o+c*a+m*x,h[e+2]=s*o+d*a+p*x}}function n(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<r;l++){const e=l*i,t=l*s;a[e]=o*n[t],a[e+1]=o*n[t+1],a[e+2]=o*n[t+2]}}function s(e,t){const o=Math.min(e.count,t.count),r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride;for(let s=0;s<o;s++){const e=s*a,t=s*n,o=i[t],l=i[t+1],c=i[t+2],d=o*o+l*l+c*c;if(d>0){const t=1/Math.sqrt(d);r[e]=t*o,r[e+1]=t*l,r[e+2]=t*c}}}function l(e,t,o){const r=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<r;l++){const e=l*i,t=l*s;a[e]=n[t]>>o,a[e+1]=n[t+1]>>o,a[e+2]=n[t+2]>>o}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:a,transformMat3:i,scale:n,normalize:s,shiftRight:l},Symbol.toStringTag,{value:"Module"}))},92770:(e,t,o)=>{function r(e,t,o){const r=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=o?o.count:t.count;let l=(o&&o.dstIndex?o.dstIndex:0)*a,c=(o&&o.srcIndex?o.srcIndex:0)*n;for(let d=0;d<s;++d)r[l]=i[c],r[l+1]=i[c+1],r[l+2]=i[c+2],l+=a,c+=n}function a(e,t,o,r,a){const i=e.typedBuffer,n=e.typedBufferStride,s=a?.count??e.count;let l=(a?.dstIndex??0)*n;for(let c=0;c<s;++c)i[l]=t,i[l+1]=o,i[l+2]=r,l+=n}o.d(t,{c:()=>r,f:()=>a});Object.freeze(Object.defineProperty({__proto__:null,copy:r,fill:a},Symbol.toStringTag,{value:"Module"}))},71277:(e,t,o)=>{function r(e){return e=e||globalThis.location.hostname,c.some((t=>null!=e?.match(t)))}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(i)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}o.d(t,{XO:()=>r,pJ:()=>a});const i=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,i,n,/^jsapps.esri.com$/,s,l]},77873:(e,t,o)=>{o.d(t,{c:()=>r});const r=o(32718).Z.getLogger("esri.views.3d.support.buffer.math")},99760:(e,t,o)=>{o.d(t,{i:()=>s});var r=o(92026),a=o(23588),i=o(15245),n=o(22753);function s(e){if((0,r.Wi)(e))return null;const t=(0,r.pC)(e.offset)?e.offset:i.Z,o=(0,r.pC)(e.rotation)?e.rotation:0,s=(0,r.pC)(e.scale)?e.scale:i.O,l=(0,a.f)(1,0,0,0,1,0,t[0],t[1],1),c=(0,a.f)(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),d=(0,a.f)(s[0],0,0,0,s[1],0,0,0,1),u=(0,a.c)();return(0,n.m)(u,c,d),(0,n.m)(u,l,u),u}},91884:(e,t,o)=>{o.r(t),o.d(t,{fetch:()=>j,gltfToEngineResources:()=>Z,parseUrl:()=>q});var r=o(71277),a=o(92026),i=o(22753),n=o(11873),s=o(14226),l=o(81949),c=o(11186),d=o(71353),u=o(41414),m=o(25158),p=o(32035),h=o(19093),v=o(17054),f=o(27053),g=o(55798),x=o(32315),T=o(99760);class b{constructor(e,t,o,r,a){this.name=e,this.stageResources=t,this.lodThreshold=o,this.pivotOffset=r,this.numberOfVertices=a}}var y=o(76200),C=o(14921),w=o(59896),M=o(10064),O=o(32718),S=o(66978),_=o(49901),A=o(38330),H=o(68401),L=o(74894),N=o(76873),P=o(86802),R=o(8548);const I=O.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function D(e,t){const o=await async function(e,t){const o=(0,a.pC)(t)&&t.streamDataRequester;if(o)return async function(e,t,o){const r=await(0,C.q6)(t.request(e,"json",o));if(!0===r.ok)return r.value;(0,S.r9)(r.error),E(r.error.details.url)}(e,o,t);const r=await(0,C.q6)((0,y.default)(e,(0,a.Wg)(t)));if(!0===r.ok)return r.value.data;(0,S.r9)(r.error),E(r.error)}(e,t),r=await async function(e,t){const o=[];for(const n in e){const r=e[n],i=r.images[0].data;if(!i){I.warn("Externally referenced texture data is not yet supported");continue}const s=r.encoding+";base64,"+i,l="/textureDefinitions/"+n,c="rgba"===r.channels?r.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:R.e8.REPEAT,t:R.e8.REPEAT},preMultiplyAlpha:z(c)!==H.JJ.Opaque},u=(0,a.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,A.t)(s,t);o.push(u.then((e=>({refId:l,image:e,params:d,alphaChannelUsage:c}))))}const r=await Promise.all(o),i={};for(const a of r)i[a.refId]=a;return i}(o.textureDefinitions,t);let i=0;for(const a in r)if(r.hasOwnProperty(a)){const e=r[a];i+=e?.image?e.image.width*e.image.height*4:0}return{resource:o,textures:r,size:i+(0,w.Ul)(o)}}function E(e){throw new M.Z("",`Request for object resource failed: ${e}`)}function B(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(I.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(I.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),r=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(I.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),r=!1)):(I.warn(`Indexed geometry does not specify face indices for '${o}' attribute`),r=!1)}}else I.warn("Indexed geometries must specify faces"),r=!1;break}default:I.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(I.warn("Geometry requires material"),r=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(I.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function V(e){const t=(0,u.cS)();return e.forEach((e=>{const o=e.boundingInfo;(0,a.pC)(o)&&((0,u.pp)(t,o.getBBMin()),(0,u.pp)(t,o.getBBMax()))})),t}function z(e){switch(e){case"mask":return H.JJ.Mask;case"maskAndTransparency":return H.JJ.MaskBlend;case"none":return H.JJ.Opaque;default:return H.JJ.Blend}}function F(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const $=new _.G(1,2,"wosr");var G=o(4760),k=o(68845),U=o(19131),W=o(69618),J=o(92770);async function j(e,t){const o=q((0,r.pJ)(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):D(o.url,t)),{engineResources:r,referenceBoundingBox:i}=function(e,t){const o=[],r=[],i=[],n=[],s=e.resource,l=_.G.parse(s.version||"1.0","wosr");$.validate(l);const c=s.model.name,u=s.model.geometries,m=s.materialDefinitions,p=e.textures;let h=0;const v=new Map;for(let f=0;f<u.length;f++){const e=u[f];if(!B(e))continue;const s=F(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],o=e.values;c.push([t,{data:o,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,t[e].values])}const x=p&&p[s.texture];if(x&&!v.has(s.texture)){const{image:e,params:t}=x,o=new N.x(e,t);n.push(o),v.set(s.texture,o)}const T=v.get(s.texture),b=T?T.id:void 0;let y=i[s.material]?i[s.material][s.texture]:null;if(!y){const e=m[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=x&&x.alphaChannelUsage,r=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n=x?z(x.alphaChannelUsage):void 0,l={ambient:(0,d.d)(e.diffuse),diffuse:(0,d.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:r,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:H.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,a.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),y=new P.Gp(l),i[s.material]||(i[s.material]={}),i[s.material][s.texture]=y}r.push(y);const C=new L.Z(c,g);h+=g.position?g.position.length:0,o.push(C)}return{engineResources:[{name:c,stageResources:{textures:n,materials:r,geometries:o},pivotOffset:s.model.pivotOffset,numberOfVertices:h,lodThreshold:null}],referenceBoundingBox:V(o)}}(e,t);return{lods:r,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,t.usePBR):(0,g.Q)(new f.C(t.streamDataRequester),o.url,t,t.usePBR)),n=(0,a.U2)(i.model.meta,"ESRI_proxyEllipsoid"),u=i.meta.isEsriSymbolResource&&(0,a.pC)(n)&&i.meta.uri.includes("/RealisticTrees/");u&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const i of r.parts){const r=i.attributes.normal;if((0,a.Wi)(r))return;const n=i.attributes.position,u=n.count,p=(0,d.c)(),h=(0,d.c)(),f=(0,d.c)(),g=(0,v.gS)(m.mc,u),x=(0,v.gS)(m.ct,u),T=(0,s.a)((0,l.c)(),i.transform);for(let a=0;a<u;a++){n.getVec(a,h),r.getVec(a,p),(0,c.m)(h,h,i.transform),(0,c.b)(f,h,t.center),(0,c.C)(f,f,t.radius);const s=f[2],l=(0,c.l)(f),d=Math.min(.45+.55*l*l,1);(0,c.C)(f,f,t.radius),null!==T&&(0,c.m)(f,f,T),(0,c.n)(f,f),o+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.h)(f,f,p,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(a,f),g.set(a,0,255*d),g.set(a,1,255*d),g.set(a,2,255*d),g.set(a,3,255)}i.attributes.normal=x,i.attributes.color=g}}}(i,n));const p=i.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:u,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},h={...t.materialParamsMixin,treeRendering:u},{engineResources:x,referenceBoundingBox:T}=Z(i,p,h,t.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:x,referenceBoundingBox:T,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function q(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Z(e,t,o,r){const n=e.model,s=new Array,l=new Map,c=new Map,d=n.lods.length,f=(0,u.cS)();return n.lods.forEach(((e,g)=>{const y=!0===r.skipHighLods&&(d>1&&0===g||d>3&&1===g)||!1===r.skipHighLods&&null!=r.singleLodIndex&&g!==r.singleLodIndex;if(y&&0!==g)return;const C=new Array;let w=0;if(e.parts.forEach((e=>{const{geometry:t,vertexCount:o}=function(e){const t=function(e,t){switch(t){case R.MX.TRIANGLES:return(0,x.nh)(e);case R.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case R.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}(e.indices||e.attributes.position.count,e.primitiveType),o=e.attributes.position.count,r=(0,v.gS)(m.ct,o);(0,p.t)(r,e.attributes.position,e.transform);const n=[[G.T.POSITION,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]],s=[[G.T.POSITION,t]];if((0,a.pC)(e.attributes.normal)){const r=(0,v.gS)(m.ct,o);(0,i.b)(K,e.transform),(0,p.a)(r,e.attributes.normal,K),n.push([G.T.NORMAL,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]),s.push([G.T.NORMAL,t])}if((0,a.pC)(e.attributes.tangent)){const r=(0,v.gS)(m.ek,o);(0,i.b)(K,e.transform),(0,h.t)(r,e.attributes.tangent,K),n.push([G.T.TANGENT,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]),s.push([G.T.TANGENT,t])}if((0,a.pC)(e.attributes.texCoord0)){const r=(0,v.gS)(m.Eu,o);(0,U.n)(r,e.attributes.texCoord0),n.push([G.T.UV0,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]),s.push([G.T.UV0,t])}if((0,a.pC)(e.attributes.color)){const r=(0,v.gS)(m.mc,o);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m.ek?(0,h.s)(r,e.attributes.color,255):e.attributes.color instanceof m.mc?(0,W.c)(r,e.attributes.color):e.attributes.color instanceof m.v6&&(0,h.s)(r,e.attributes.color,1/256);else{(0,W.f)(r,255,255,255,255);const t=new m.ne(r.buffer,0,4);e.attributes.color instanceof m.ct?(0,p.s)(t,e.attributes.color,255):e.attributes.color instanceof m.ne?(0,J.c)(t,e.attributes.color):e.attributes.color instanceof m.mw&&(0,p.s)(t,e.attributes.color,1/256)}n.push([G.T.COLOR,{data:r.typedBuffer,size:r.elementCount,exclusive:!0}]),s.push([G.T.COLOR,t])}return{geometry:new L.Z(n,s),vertexCount:o}}(e);C.push(t),w+=o;const r=t.boundingInfo;(0,a.pC)(r)&&0===g&&((0,u.pp)(f,r.getBBMin()),(0,u.pp)(f,r.getBBMax()))})),y)return;const M=new b(e.name,{textures:new Array,materials:new Array,geometries:C},e.lodThreshold,[0,0,0],w);s.push(M),e.parts.forEach((e=>{const r=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),i=n.materials.get(e.material),s=(0,a.pC)(e.attributes.texCoord0),d=(0,a.pC)(e.attributes.normal);if((0,a.Wi)(i))return;const u=function(e){switch(e){case"BLEND":return H.JJ.Blend;case"MASK":return H.JJ.Mask;case"OPAQUE":case null:case void 0:return H.JJ.Opaque}}(i.alphaMode);if(!l.has(r)){if(s){const e=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if((0,a.pC)(e)&&!c.has(e)){const o=n.textures.get(e);(0,a.pC)(o)&&c.set(e,new N.x(o.data,t?{...o.parameters,preMultiplyAlpha:t}:o.parameters))}};e(i.textureColor,u!==H.JJ.Opaque),e(i.textureNormal),e(i.textureOcclusion),e(i.textureEmissive),e(i.textureMetallicRoughness)}const m=i.color[0]**(1/k.K),p=i.color[1]**(1/k.K),h=i.color[2]**(1/k.K),v=i.emissiveFactor[0]**(1/k.K),f=i.emissiveFactor[1]**(1/k.K),g=i.emissiveFactor[2]**(1/k.K),x=(0,a.pC)(i.textureColor)&&s?c.get(i.textureColor):null;l.set(r,new P.Gp({...t,transparent:u===H.JJ.Blend,customDepthTest:H.Gv.Lequal,textureAlphaMode:u,textureAlphaCutoff:i.alphaCutoff,diffuse:[m,p,h],ambient:[m,p,h],opacity:i.opacity,doubleSided:i.doubleSided,doubleSidedType:"winding-order",cullFace:i.doubleSided?H.Vr.None:H.Vr.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:d?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,a.pC)(x)?x.id:void 0,colorMixMode:i.colorMixMode,normalTextureId:(0,a.pC)(i.textureNormal)&&s?c.get(i.textureNormal).id:void 0,textureAlphaPremultiplied:(0,a.pC)(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:(0,a.pC)(i.textureOcclusion)&&s?c.get(i.textureOcclusion).id:void 0,emissiveTextureId:(0,a.pC)(i.textureEmissive)&&s?c.get(i.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,a.pC)(i.textureMetallicRoughness)&&s?c.get(i.textureMetallicRoughness).id:void 0,emissiveFactor:[v,f,g],mrrFactors:[i.metallicFactor,i.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:(0,T.i)(i.colorTextureTransform),normalTextureTransformMatrix:(0,T.i)(i.normalTextureTransform),occlusionTextureTransformMatrix:(0,T.i)(i.occlusionTextureTransform),emissiveTextureTransformMatrix:(0,T.i)(i.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:(0,T.i)(i.metallicRoughnessTextureTransform),...o}))}if(M.stageResources.materials.push(l.get(r)),s){const e=e=>{(0,a.pC)(e)&&M.stageResources.textures.push(c.get(e))};e(i.textureColor),e(i.textureNormal),e(i.textureOcclusion),e(i.textureEmissive),e(i.textureMetallicRoughness)}}))})),{engineResources:s,referenceBoundingBox:f}}const K=(0,n.c)()},49420:(e,t,o)=>{o.d(t,{F5:()=>s,HB:()=>l,a9:()=>r});var r,a,i=o(16889),n=o(92026);function s(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function l(e,t,o){if((0,n.Wi)(e)||t===r.Ignore)return o[0]=255,o[1]=255,o[2]=255,void(o[3]=255);const a=(0,i.uZ)(Math.round(e[3]*d),0,d),s=0===a||t===r.Tint?0:t===r.Replace?u:m;o[0]=(0,i.uZ)(Math.round(e[0]*c),0,c),o[1]=(0,i.uZ)(Math.round(e[1]*c),0,c),o[2]=(0,i.uZ)(Math.round(e[2]*c),0,c),o[3]=a+s}(a=r||(r={}))[a.Multiply=1]="Multiply",a[a.Ignore=2]="Ignore",a[a.Replace=3]="Replace",a[a.Tint=4]="Tint";const c=255,d=85,u=d,m=2*d},83734:(e,t,o)=>{o.d(t,{w:()=>a});var r=o(98634);function a(e){e.vertex.code.add(r.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},81221:(e,t,o)=>{o.d(t,{f:()=>v});var r=o(27366),a=o(11186),i=o(71353),n=o(37081),s=o(27254),l=o(82552),c=o(86471),d=o(98634),u=o(33559),m=o(4760),p=o(43411);class h extends u.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function v(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(m.T.MODELORIGINHI,"vec3"),e.attributes.add(m.T.MODELORIGINLO,"vec3"),e.attributes.add(m.T.MODEL,"mat3"),e.attributes.add(m.T.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(s.$,t),o.uniforms.add(new c.B("viewOriginHi",((e,t)=>(0,p.U8)((0,a.s)(f,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),f)))),o.uniforms.add(new c.B("viewOriginLo",((e,t)=>(0,p.GB)((0,a.s)(f,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),f))))),o.code.add(d.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(d.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?d.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(d.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===n.H.Normal&&((0,l._8)(o),o.code.add(d.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(d.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,r._)([(0,u.o)()],h.prototype,"instancedDoublePrecision",void 0);const f=(0,i.c)()},53230:(e,t,o)=>{o.d(t,{R:()=>c});var r=o(49420),a=o(98634);function i(e){e.vertex.code.add(a.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.H.int(r.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.H.int(r.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.H.int(r.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var n=o(99339),s=o(4760),l=o(22909);function c(e,t){t.hasSymbolColors?(e.include(i),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new n._("colorMixMode",(e=>l.FZ[e.colorMixMode]))),e.vertex.code.add(a.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},6781:(e,t,o)=>{o.d(t,{s:()=>C});var r=o(92026),a=o(81949),i=o(22357),n=o(37081),s=o(33280),l=o(94951),c=o(73782),d=o(14801),u=o(60113),m=o(85380),p=o(16574),h=o(137),v=o(18607),f=o(65974),g=o(82552),x=o(98634),T=o(8654),b=o(19253),y=o(68401);function C(e,t){const{vertex:o,fragment:C}=e,w=t.hasModelTransformation;w&&o.uniforms.add(new T.g("model",(e=>(0,r.pC)(e.modelTransformation)?e.modelTransformation:a.I)));const M=t.hasColorTexture&&t.alphaDiscardMode!==y.JJ.Opaque;switch(t.output){case n.H.Depth:case n.H.Shadow:case n.H.ShadowHighlight:case n.H.ShadowExludeHighlight:case n.H.ObjectAndLayerIdColor:(0,g.Sv)(o,t),e.include(l.w,t),e.include(u.D,t),e.include(v.k,t),e.include(p.F,t),e.include(s.f5,t),e.include(d.R,t),(0,i.Zu)(e),e.varyings.add("depth","float"),M&&C.uniforms.add(new b.A("tex",(e=>e.texture))),o.code.add(x.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${w?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(f.z,t),C.code.add(x.H`
          void main(void) {
            discardBySlice(vpos);
            ${M?x.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===n.H.ObjectAndLayerIdColor?x.H`outputObjectAndLayerIdColor();`:x.H`outputDepth(depth);`}
          }
        `);break;case n.H.Normal:(0,g.Sv)(o,t),e.include(l.w,t),e.include(c.O,t),e.include(m.Bb,t),e.include(u.D,t),e.include(v.k,t),M&&C.uniforms.add(new b.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),o.code.add(x.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===c.h.Attribute?x.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${w?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(f.z,t),C.code.add(x.H`
          void main() {
            discardBySlice(vpos);
            ${M?x.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===c.h.ScreenDerivative?x.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:x.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case n.H.Highlight:(0,g.Sv)(o,t),e.include(l.w,t),e.include(u.D,t),e.include(v.k,t),M&&C.uniforms.add(new b.A("tex",(e=>e.texture))),o.code.add(x.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${w?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(f.z,t),e.include(h.bA,t),C.code.add(x.H`
          void main() {
            discardBySlice(vpos);
            ${M?x.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?x.H`colorUV`:x.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},38171:(e,t,o)=>{o.d(t,{Q:()=>p});var r=o(60113),a=o(27284),i=o(96658),n=o(75993),s=o(98634),l=o(78050),c=o(19253),d=o(97528),u=o(99340),m=o(4760);function p(e,t){const o=e.fragment;if(t.hasVertexTangents?(e.attributes.add(m.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===i.q.WindingOrder?o.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),o.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==r.N.None){e.include(a.i,t);const r=t.supportsTextureAtlas?t.hasWebGL2Context?d.D.None:d.D.Size:d.D.None;o.uniforms.add(t.pbrTextureBindType===u.P.Pass?(0,c.J)("normalTexture",(e=>e.textureNormal),r):(0,l.F)("normalTexture",(e=>e.textureNormal),r)),o.code.add(s.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?s.H`vtc.size = ${(0,n.w_)(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},30694:(e,t,o)=>{o.d(t,{K:()=>l});var r=o(75993),a=o(98634),i=o(19253),n=o(97528),s=o(31916);function l(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add((0,i.J)("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?n.D.None:n.D.InvSize)),o.constants.add("blurSizePixelsInverse","float",1/s.s),o.code.add(a.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,r.w_)(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):o.code.add(a.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},34975:(e,t,o)=>{o.d(t,{PN:()=>h,XP:()=>f,sC:()=>v});var r=o(41644),a=o(60750),i=o(30694),n=o(92395),s=o(2116),l=o(41481),c=o(85586),d=o(13773),u=o(58406),m=o(98634),p=o(48919);function h(e){e.constants.add("ambientBoostFactor","float",p.V)}function v(e){e.uniforms.add(new u.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function f(e,t){const o=e.fragment;switch(e.include(i.K,t),t.pbrMode!==l.f7.Disabled&&e.include(s.T,t),e.include(a._,t),e.include(c.e),o.code.add(m.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===l.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h(o),v(o),(0,n.Pe)(o),o.code.add(m.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?m.H`normalize(vPosWorld)`:m.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,n.F1)(o),o.code.add(m.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case l.f7.Disabled:case l.f7.WaterOnIntegratedMesh:case l.f7.Water:e.include(n.kR,t),o.code.add(m.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.f7.Normal:case l.f7.Schematic:o.code.add(m.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(m.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new d.U("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(m.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add([new u.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new u.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),o.code.add(m.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(m.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===l.f7.Schematic?m.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:m.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:(0,r.Bg)(t.pbrMode);case l.f7.COUNT:}}},96658:(e,t,o)=>{o.d(t,{k:()=>s,q:()=>r});var r,a,i=o(41644),n=o(98634);function s(e,t){const o=e.fragment;switch(o.code.add(n.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case r.None:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case r.View:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case r.WindingOrder:o.code.add(n.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Bg)(t.doubleSidedMode);case r.COUNT:}}(a=r||(r={}))[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT"},79154:(e,t,o)=>{o.d(t,{DT:()=>u,NI:()=>l,R5:()=>c,av:()=>s,jF:()=>d});var r=o(92026),a=o(23588),i=o(98634),n=o(35522);function s(e){e.vertex.uniforms.add(new n.c("colorTextureTransformMatrix",(e=>(0,r.pC)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:(0,a.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(i.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new n.c("normalTextureTransformMatrix",(e=>(0,r.pC)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:(0,a.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(i.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new n.c("emissiveTextureTransformMatrix",(e=>(0,r.pC)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:(0,a.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(i.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new n.c("occlusionTextureTransformMatrix",(e=>(0,r.pC)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:(0,a.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(i.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new n.c("metallicRoughnessTextureTransformMatrix",(e=>(0,r.pC)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:(0,a.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(i.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},65974:(e,t,o)=>{o.d(t,{z:()=>l});var r=o(26461),a=o(98634);function i(e){e.fragment.code.add(a.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.H.float(r.b)}) { discard; } }
  `)}o(61809),o(99340);var n=o(58406),s=o(68401);function l(e,t){c(e,t,new n.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function c(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case s.JJ.Blend:return e.include(i);case s.JJ.Opaque:r.code.add(a.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:r.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(a.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},71033:(e,t,o)=>{o.d(t,{y:()=>n});var r=o(49420),a=o(116),i=o(98634);function n(e){e.include(a.Y),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(r.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(r.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(r.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},86802:(e,t,o)=>{o.d(t,{Gp:()=>P,RL:()=>B});var r=o(93169),a=o(92026),i=o(11186),n=o(71353),s=o(50951),l=o(55158),c=o(37081),d=o(73782),u=o(96658),m=o(41481),p=o(68401),h=o(17363),v=o(56529),f=o(78041),g=o(93822),x=o(4760),T=o(76783),b=o(33236),y=o(22909),C=o(50531),w=o(27366),M=o(60113),O=o(33559),S=o(25920),_=o(8883);class A extends _.W{constructor(){super(...arguments),this.output=c.H.Color,this.alphaDiscardMode=p.JJ.Opaque,this.doubleSidedMode=u.q.None,this.pbrMode=m.f7.Disabled,this.cullFace=p.Vr.None,this.transparencyPassType=S.A.NONE,this.normalType=d.h.Attribute,this.textureCoordinateType=M.N.None,this.customDepthTest=p.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,w._)([(0,O.o)({count:c.H.COUNT})],A.prototype,"output",void 0),(0,w._)([(0,O.o)({count:p.JJ.COUNT})],A.prototype,"alphaDiscardMode",void 0),(0,w._)([(0,O.o)({count:u.q.COUNT})],A.prototype,"doubleSidedMode",void 0),(0,w._)([(0,O.o)({count:m.f7.COUNT})],A.prototype,"pbrMode",void 0),(0,w._)([(0,O.o)({count:p.Vr.COUNT})],A.prototype,"cullFace",void 0),(0,w._)([(0,O.o)({count:S.A.COUNT})],A.prototype,"transparencyPassType",void 0),(0,w._)([(0,O.o)({count:d.h.COUNT})],A.prototype,"normalType",void 0),(0,w._)([(0,O.o)({count:M.N.COUNT})],A.prototype,"textureCoordinateType",void 0),(0,w._)([(0,O.o)({count:p.Gv.COUNT})],A.prototype,"customDepthTest",void 0),(0,w._)([(0,O.o)()],A.prototype,"spherical",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasVertexColors",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasSymbolColors",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasVerticalOffset",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasSlicePlane",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasSliceHighlight",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasColorTexture",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasMetallicRoughnessTexture",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasEmissionTexture",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasOcclusionTexture",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasNormalTexture",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasScreenSizePerspective",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasVertexTangents",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasOccludees",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasMultipassTerrain",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasModelTransformation",void 0),(0,w._)([(0,O.o)()],A.prototype,"offsetBackfaces",void 0),(0,w._)([(0,O.o)()],A.prototype,"vvSize",void 0),(0,w._)([(0,O.o)()],A.prototype,"vvColor",void 0),(0,w._)([(0,O.o)()],A.prototype,"receiveShadows",void 0),(0,w._)([(0,O.o)()],A.prototype,"receiveAmbientOcclusion",void 0),(0,w._)([(0,O.o)()],A.prototype,"textureAlphaPremultiplied",void 0),(0,w._)([(0,O.o)()],A.prototype,"instanced",void 0),(0,w._)([(0,O.o)()],A.prototype,"instancedColor",void 0),(0,w._)([(0,O.o)()],A.prototype,"objectAndLayerIdColorInstanced",void 0),(0,w._)([(0,O.o)()],A.prototype,"instancedDoublePrecision",void 0),(0,w._)([(0,O.o)()],A.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,w._)([(0,O.o)()],A.prototype,"writeDepth",void 0),(0,w._)([(0,O.o)()],A.prototype,"transparent",void 0),(0,w._)([(0,O.o)()],A.prototype,"enableOffset",void 0),(0,w._)([(0,O.o)()],A.prototype,"cullAboveGround",void 0),(0,w._)([(0,O.o)()],A.prototype,"snowCover",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasColorTextureTransform",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasEmissionTextureTransform",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasNormalTextureTransform",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasOcclusionTextureTransform",void 0),(0,w._)([(0,O.o)()],A.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,w._)([(0,O.o)({constValue:!0})],A.prototype,"hasVvInstancing",void 0),(0,w._)([(0,O.o)({constValue:!1})],A.prototype,"useCustomDTRExponentForWater",void 0),(0,w._)([(0,O.o)({constValue:!1})],A.prototype,"supportsTextureAtlas",void 0),(0,w._)([(0,O.o)({constValue:!0})],A.prototype,"useFillLights",void 0);var H=o(82144),L=o(40563);class N extends C.tT{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=d.h.Attribute,t.doubleSidedMode=u.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,N.shader)}}N.shader=new H.J(L.R,(()=>o.e(601).then(o.bind(o,50601))));class P extends v.F5{constructor(e){super(e,D),this.supportsEdges=!0,this._configuration=new A,this._vertexBufferLayout=function(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,o=(0,l.U$)().vec3f(x.T.POSITION).vec3f(x.T.NORMAL);return e.hasVertexTangents&&o.vec4f(x.T.TANGENT),t&&o.vec2f(x.T.UV0),e.hasVertexColors&&o.vec4u8(x.T.COLOR),e.hasSymbolColors&&o.vec4u8(x.T.SYMBOLCOLOR),(0,r.Z)("enable-feature:objectAndLayerId-rendering")&&o.vec4u8(x.T.OBJECTANDLAYERIDCOLOR),o}(this.parameters),this._instanceBufferLayout=e.instanced?B(this.parameters):null}isVisibleForOutput(e){return e!==c.H.Shadow&&e!==c.H.ShadowExludeHighlight&&e!==c.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:o,hasSymbolColors:r,vvColorEnabled:i}=e,n=(0,a.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,l=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return o&&(n||i||r)?!!s||l:o?s?c:l:n||i||r?!!s||l:s?c:l}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,a.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,a.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType="screenDerivative"===this.parameters.normals?d.h.ScreenDerivative:d.h.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,a.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?p.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,a.pC)(this.parameters.modelTransformation),e!==c.H.Color&&e!==c.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=u.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?u.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?u.q.WindingOrder:u.q.None,this._configuration.instancedColor=(0,a.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?m.f7.Schematic:m.f7.Normal:m.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<f.ve,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,a.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,r,n,l,c){if((0,a.pC)(this.parameters.verticalOffset)){const e=r.camera;(0,i.s)(k,o[12],o[13],o[14]);let t=null;switch(r.viewingMode){case s.JY.Global:t=(0,i.n)($,k);break;case s.JY.Local:t=(0,i.c)($,F)}let a=0;const c=(0,i.b)(U,k,e.eye),d=(0,i.l)(c),u=(0,i.g)(c,c,1/d);let m=null;this.parameters.screenSizePerspective&&(m=(0,i.e)(t,u)),a+=(0,y.Hx)(e,d,this.parameters.verticalOffset,m,this.parameters.screenSizePerspective),(0,i.g)(t,t,a),(0,i.t)(G,t,r.transform.inverseRotation),n=(0,i.b)(V,n,G),l=(0,i.b)(z,l,G)}(0,y.Bw)(e,t,r,n,l,(0,T.W9)(r.verticalOffset),c)}requiresSlot(e,t){return(t===c.H.Color||t===c.H.Alpha||t===c.H.Depth||t===c.H.Normal||t===c.H.Shadow||t===c.H.ShadowHighlight||t===c.H.ShadowExludeHighlight||t===c.H.Highlight||t===c.H.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?g.r.TRANSPARENT_MATERIAL:g.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:g.r.OPAQUE_MATERIAL)||e===g.r.DRAPED_MATERIAL||t===c.H.ObjectAndLayerIdColor)}createGLMaterial(e){return new R(e)}createBufferWriter(){return new E(this._vertexBufferLayout,this._instanceBufferLayout)}}class R extends h.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return(0,i.s)(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?N:C.tT,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==c.H.Color&&this._output!==c.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class I extends C.em{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const D=new I;class E{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(x.T.POSITION).length}write(e,t,o,r,a){(0,b.NK)(o,this.vertexBufferLayout,e,t,r,a)}}function B(e){let t=(0,l.U$)();return t=e.instancedDoublePrecision?t.vec3f(x.T.MODELORIGINHI).vec3f(x.T.MODELORIGINLO).mat3f(x.T.MODEL).mat3f(x.T.MODELNORMAL):t.mat4f(x.T.MODEL).mat4f(x.T.MODELNORMAL),(0,a.pC)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(x.T.INSTANCECOLOR)),(0,a.pC)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(x.T.INSTANCEFEATUREATTRIBUTE)),(0,a.pC)(e.instanced)&&e.instanced.includes("objectAndLayerIdColor")&&(t=t.vec4u8(x.T.OBJECTANDLAYERIDCOLOR_INSTANCED)),t}const V=(0,n.c)(),z=(0,n.c)(),F=(0,n.f)(0,0,1),$=(0,n.c)(),G=(0,n.c)(),k=(0,n.c)(),U=(0,n.c)()},50531:(e,t,o)=>{o.d(t,{Qm:()=>S,em:()=>O,tT:()=>_});var r=o(11873),a=o(71353),i=o(67077),n=o(50951),s=o(37081),l=o(60113),c=o(85380),d=o(26461),u=o(27254),m=o(82144),p=o(31132),h=o(68401),v=o(7566),f=o(56529),g=o(78041),x=o(27627),T=o(50411),b=o(25920),y=o(65630),C=o(49800),w=o(8548),M=o(36207);class O extends c.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,a.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=h.Vr.Back,this.emissiveFactor=(0,a.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,a.f)(.2,.2,.2),this.diffuse=(0,a.f)(.8,.8,.8),this.externalColor=(0,i.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,a.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,r.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=h.Gv.Less,this.textureAlphaMode=h.JJ.Blend,this.textureAlphaCutoff=d.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=f.yD.Occlude}}class S extends c.Pf{constructor(){super(...arguments),this.origin=(0,a.c)(),this.slicePlaneLocalOrigin=this.origin}}class _ extends p.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===C.zO.WEBGL2,t.spherical=e.viewingMode===n.JY.Global,t.doublePrecisionRequiresObfuscation=(0,u.I)(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?l.N.Default:l.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,_.shader)}_initializeProgram(e,t){return new x.$(e.rctx,t.get().build(this.configuration),v.i)}_convertDepthTestFunction(e){return e===h.Gv.Lequal?w.wb.LEQUAL:w.wb.LESS}_makePipeline(e,t){const o=this.configuration,r=e===b.A.NONE,a=e===b.A.FrontFace;return(0,M.sm)({blending:o.output!==s.H.Color&&o.output!==s.H.Alpha||!o.transparent?null:r?g.wu:(0,g.j7)(e),culling:A(o)&&(0,M.zp)(o.cullFace),depthTest:{func:(0,g.Bh)(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:r||a?o.writeDepth&&M.LZ:null,colorWrite:M.BK,stencilWrite:o.hasOccludees?T.s3:null,stencilTest:o.hasOccludees?t?T.eD:T.RY:null,polygonOffset:r||a?null:(0,g.je)(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function A(e){return e.cullFace!==h.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}_.shader=new m.J(y.D,(()=>o.e(294).then(o.bind(o,40294))))}}]);
//# sourceMappingURL=1884.9f35761c.chunk.js.map