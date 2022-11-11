"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8383],{18442:(e,t,r)=>{r.d(t,{H:()=>F,b:()=>D,c:()=>H});var i=r(92026),o=r(88396),a=r(6394),s=r(67077),n=r(67794),l=r(37081),c=r(33280),d=r(14801),h=r(28156),u=r(50600),p=r(50913),f=r(137),g=r(18607),m=r(26461),v=r(116),_=r(78980),y=r(62993),x=r(82999),C=r(95276),w=r(59150),T=r(58406),S=r(699),O=r(98634),b=r(64201),R=r(19253),A=r(25920),P=r(4760),E=r(65964);function D(e){const t=new b.kG,r=e.signedDistanceFieldEnabled;if(t.include(h.H),t.include(u.R,e),t.include(c.f5,e),e.occlusionPass)return t.include(p.R,e),t;const{vertex:D,fragment:M}=t;t.include(y.cK),M.include(_.n),M.include(v.Y),t.include(g.k,e),t.include(d.R,e),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2"),e.binaryHighlightOcclusionEnabled&&t.varyings.add("voccluded","float"),D.uniforms.add([new C.N("viewport",((e,t)=>t.camera.fullViewport)),new x.A("screenOffset",((e,t)=>(0,o.s)(N,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio))),new x.A("anchorPosition",(e=>H(e))),new C.N("materialColor",(e=>e.color)),new T.p("pixelRatio",((e,t)=>t.camera.pixelRatio))]),r&&(D.uniforms.add(new C.N("outlineColor",(e=>e.outlineColor))),M.uniforms.add([new C.N("outlineColor",(e=>I(e)?e.outlineColor:s.Z)),new T.p("outlineSize",(e=>I(e)?e.outlineSize:0))])),e.hasScreenSizePerspective&&((0,y.ww)(D),(0,y.m8)(D)),(e.debugDrawLabelBorder||e.binaryHighlightOcclusionEnabled)&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(P.T.UV0,"vec2"),t.attributes.add(P.T.COLOR,"vec4"),t.attributes.add(P.T.SIZE,"vec2"),t.attributes.add(P.T.AUXPOS2,"vec4"),D.code.add(O.H`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${e.hasScreenSizePerspective?O.H`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:O.H`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${e.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${e.occlusionTestEnabled||e.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${e.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const F=O.H`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,z=e.pixelSnappingEnabled?r?O.H`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:O.H`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:O.H`posProj += quadOffset;`;e.vvColor&&D.uniforms.add([new w.b("vvColorColors",(e=>e.vvColorColors),E.x),new S.O("vvColorValues",(e=>e.vvColorValues),E.x)]),D.uniforms.add(new x.A("textureCoordinateScaleFactor",(e=>(0,i.pC)(e.texture)&&(0,i.pC)(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:a.O))),D.code.add(O.H`
    ${e.occlusionTestEnabled?"if (visible) {":""}
    ${F}
    ${e.vvColor?"vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    bool alphaDiscard = vcolor.a < ${O.H.float(m.b)};
    ${r?`alphaDiscard = alphaDiscard && outlineColor.a < ${O.H.float(m.b)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${z}
      gl_Position = posProj;
    }

    vtc = uv * textureCoordinateScaleFactor;

    ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${e.occlusionTestEnabled?O.H`} else { vtc = vec2(0.0);
      ${e.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),M.uniforms.add(new R.A("tex",(e=>e.texture)));const L=e.debugDrawLabelBorder?O.H`(isBorder > 0.0 ? 0.0 : ${O.H.float(m.F)})`:O.H.float(m.F),U=O.H`
    ${e.debugDrawLabelBorder?O.H`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${r?O.H`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${O.H.float(n.Ph)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture2D(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${L} ||
          fillPixelColor.a + outlinePixelColor.a < ${O.H.float(m.b)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        gl_FragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${L}) {
          discard;
        }

        gl_FragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // gl_FragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:O.H`
          vec4 texColor = texture2D(tex, vtc, -0.5);
          if (texColor.a < ${L}) {
            discard;
          }
          gl_FragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${e.debugDrawLabelBorder?O.H`gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return e.output===l.H.Alpha&&M.code.add(O.H`
      void main() {
        ${U}
        gl_FragColor = vec4(gl_FragColor.a);
      }
      `),e.output===l.H.ObjectAndLayerIdColor&&M.code.add(O.H`
      void main() {
        ${U}
        outputObjectAndLayerIdColor();
      }
      `),e.output===l.H.Color&&M.code.add(O.H`
    void main() {
      ${U}
      ${e.transparencyPassType===A.A.FrontFace?"gl_FragColor.rgb /= gl_FragColor.a;":""}
    }
    `),e.output===l.H.Highlight&&(t.include(f.bA,e),M.code.add(O.H`
    void main() {
      ${U}
      ${e.binaryHighlightOcclusionEnabled?O.H`
          if (voccluded == 1.0) {
            gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),t}function I(e){return e.outlineColor[3]>0&&e.outlineSize>0}function H(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N;return e.textureIsSignedDistanceField?M(e.anchorPosition,e.distanceFieldBoundingBox,t):(0,o.c)(t,e.anchorPosition),t}function M(e,t,r){(0,i.pC)(t)?(0,o.s)(r,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1]):(0,o.s)(r,0,0)}const N=(0,a.a)(),F=Object.freeze(Object.defineProperty({__proto__:null,build:D,calculateAnchorPosForRendering:H},Symbol.toStringTag,{value:"Module"}))},49810:(e,t,r)=>{r.d(t,{W:()=>b,b:()=>O});var i=r(22357),o=r(37081),a=r(33280),s=r(94951),n=r(137),l=r(60750),c=r(92395),d=r(15226),h=r(8555),u=r(41481),p=r(58335),f=r(77652),g=r(79246),m=r(26461),v=r(116),_=r(82552),y=r(95276),x=r(58406),C=r(98634),w=r(64201),T=r(25920),S=r(4760);function O(e){const t=new w.kG,{vertex:r,fragment:O}=t;(0,_.Sv)(r,e),t.include(s.w,e),t.attributes.add(S.T.POSITION,"vec3"),t.attributes.add(S.T.UV0,"vec2");const b=new y.N("waterColor",(e=>e.color));if(e.output===o.H.Color&&e.isDraped)return t.varyings.add("vpos","vec3"),r.uniforms.add(b),r.code.add(C.H`
        void main(void) {
          if (waterColor.a < ${C.H.float(m.b)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),O.uniforms.add(b),O.code.add(C.H`void main() {
gl_FragColor = waterColor;
}`),t;switch(e.output!==o.H.Color&&e.output!==o.H.Alpha||(t.include(h.n,e),t.include(i.qj,e),t.varyings.add("vuv","vec2"),t.varyings.add("vpos","vec3"),t.varyings.add("vnormal","vec3"),t.varyings.add("vtbnMatrix","mat3"),e.hasMultipassTerrain&&t.varyings.add("depth","float"),r.uniforms.add(b),r.code.add(C.H`
      void main(void) {
        if (waterColor.a < ${C.H.float(m.b)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${e.output===o.H.Color?"forwardLinearDepth();":""}
      }
    `)),t.include(d.l,e),e.output){case o.H.Alpha:t.include(a.f5,e),O.uniforms.add(b),O.code.add(C.H`
        void main() {
          discardBySlice(vpos);
          ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          gl_FragColor = vec4(waterColor.a);
        }
      `);break;case o.H.Color:t.include(c.kR,e),t.include(l._,{pbrMode:u.f7.Disabled,lightingSphericalHarmonicsOrder:2}),t.include(g.M),t.include(a.f5,e),t.include(p.XE,e),t.include(f.B,e),O.uniforms.add([b,new x.p("timeElapsed",(e=>e.timeElapsed)),r.uniforms.get("view"),r.uniforms.get("localOrigin")]),(0,_.hY)(O,e),O.include(v.Y),(0,c.Pe)(O),(0,c.F1)(O),O.code.add(C.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${e.receiveShadows?C.H`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        gl_FragColor = delinearizeGamma(final);
        gl_FragColor = highlightSlice(gl_FragColor, vpos);
        ${e.transparencyPassType===T.A.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `);break;case o.H.Normal:t.include(h.n,e),t.include(g.M,e),t.include(a.f5,e),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),r.uniforms.add(b),r.code.add(C.H`
        void main(void) {
          if (waterColor.a < ${C.H.float(m.b)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),O.uniforms.add(new x.p("timeElapsed",(e=>e.timeElapsed))),O.code.add(C.H`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
gl_FragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case o.H.Highlight:t.include(n.bA,e),t.varyings.add("vpos","vec3"),r.uniforms.add(b),r.code.add(C.H`
      void main(void) {
        if (waterColor.a < ${C.H.float(m.b)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),t.include(a.f5,e),O.code.add(C.H`void main() {
discardBySlice(vpos);
outputHighlight();
}`)}return t}const b=Object.freeze(Object.defineProperty({__proto__:null,build:O},Symbol.toStringTag,{value:"Module"}))},79347:(e,t,r)=>{r.d(t,{e:()=>n});var i,o,a,s={exports:{}};i=s,o=function(){function e(e,r,o){o=o||2;var a,s,n,c,d,h,u,p=r&&r.length,f=p?r[0]*o:e.length,g=t(e,0,f,o,!0),m=[];if(!g||g.next===g.prev)return m;if(p&&(g=l(e,r,g,o)),e.length>80*o){a=n=e[0],s=c=e[1];for(var v=o;v<f;v+=o)(d=e[v])<a&&(a=d),(h=e[v+1])<s&&(s=h),d>n&&(n=d),h>c&&(c=h);u=0!==(u=Math.max(n-a,c-s))?1/u:0}return i(g,m,o,a,s,u),m}function t(e,t,r,i,o){var a,s;if(o===A(e,t,r,i)>0)for(a=t;a<r;a+=i)s=O(a,e[a],e[a+1],s);else for(a=r-i;a>=t;a-=i)s=O(a,e[a],e[a+1],s);if(s&&y(s,s.next)){var n=s.next;b(s),s=n}return s}function r(e,t){if(!e)return e;t||(t=e);var r,i=e;do{if(r=!1,i.steiner||!y(i,i.next)&&0!==_(i.prev,i,i.next))i=i.next;else{var o=i.prev;if(b(i),(i=t=o)===i.next)break;r=!0}}while(r||i!==t);return t}function i(e,t,l,c,d,h,u){if(e){!u&&h&&p(e,c,d,h);for(var f,g,m=e;e.prev!==e.next;)if(f=e.prev,g=e.next,h?a(e,c,d,h):o(e))t.push(f.i/l),t.push(e.i/l),t.push(g.i/l),b(e),e=g.next,m=g.next;else if((e=g)===m){u?1===u?i(e=s(r(e),t,l),t,l,c,d,h,2):2===u&&n(e,t,l,c,d,h):i(r(e),t,l,c,d,h,1);break}}}function o(e){var t=e.prev,r=e,i=e.next;if(_(t,r,i)>=0)return!1;for(var o=e.next.next;o!==e.prev;){if(m(t.x,t.y,r.x,r.y,i.x,i.y,o.x,o.y)&&_(o.prev,o,o.next)>=0)return!1;o=o.next}return!0}function a(e,t,r,i){var o=e.prev,a=e,s=e.next;if(_(o,a,s)>=0)return!1;for(var n=o.x<a.x?o.x<s.x?o.x:s.x:a.x<s.x?a.x:s.x,l=o.y<a.y?o.y<s.y?o.y:s.y:a.y<s.y?a.y:s.y,c=o.x>a.x?o.x>s.x?o.x:s.x:a.x>s.x?a.x:s.x,d=o.y>a.y?o.y>s.y?o.y:s.y:a.y>s.y?a.y:s.y,h=f(n,l,t,r,i),u=f(c,d,t,r,i),p=e.prevZ,g=e.nextZ;p&&p.z>=h&&g&&g.z<=u;){if(p!==e.prev&&p!==e.next&&m(o.x,o.y,a.x,a.y,s.x,s.y,p.x,p.y)&&_(p.prev,p,p.next)>=0)return!1;if(p=p.prevZ,g!==e.prev&&g!==e.next&&m(o.x,o.y,a.x,a.y,s.x,s.y,g.x,g.y)&&_(g.prev,g,g.next)>=0)return!1;g=g.nextZ}for(;p&&p.z>=h;){if(p!==e.prev&&p!==e.next&&m(o.x,o.y,a.x,a.y,s.x,s.y,p.x,p.y)&&_(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=u;){if(g!==e.prev&&g!==e.next&&m(o.x,o.y,a.x,a.y,s.x,s.y,g.x,g.y)&&_(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function s(e,t,i){var o=e;do{var a=o.prev,s=o.next.next;!y(a,s)&&x(a,o,o.next,s)&&T(a,s)&&T(s,a)&&(t.push(a.i/i),t.push(o.i/i),t.push(s.i/i),b(o),b(o.next),o=e=s),o=o.next}while(o!==e);return r(o)}function n(e,t,o,a,s,n){var l=e;do{for(var c=l.next.next;c!==l.prev;){if(l.i!==c.i&&v(l,c)){var d=S(l,c);return l=r(l,l.next),d=r(d,d.next),i(l,t,o,a,s,n),void i(d,t,o,a,s,n)}c=c.next}l=l.next}while(l!==e)}function l(e,i,o,a){var s,n,l,d=[];for(s=0,n=i.length;s<n;s++)(l=t(e,i[s]*a,s<n-1?i[s+1]*a:e.length,a,!1))===l.next&&(l.steiner=!0),d.push(g(l));for(d.sort(c),s=0;s<d.length;s++)o=r(o=h(d[s],o),o.next);return o}function c(e,t){return e.x-t.x}function d(e){if(e.next.prev===e)return e;let t=e;for(;;){const r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function h(e,t){var i=function(e,t){var r,i=t,o=e.x,a=e.y,s=-1/0;do{if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){var n=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(n<=o&&n>s){if(s=n,n===o){if(a===i.y)return i;if(a===i.next.y)return i.next}r=i.x<i.next.x?i:i.next}}i=i.next}while(i!==t);if(!r)return null;if(o===s)return r;var l,c=r,d=r.x,h=r.y,p=1/0;i=r;do{o>=i.x&&i.x>=d&&o!==i.x&&m(a<h?o:s,a,d,h,a<h?s:o,a,i.x,i.y)&&(l=Math.abs(a-i.y)/(o-i.x),T(i,e)&&(l<p||l===p&&(i.x>r.x||i.x===r.x&&u(r,i)))&&(r=i,p=l)),i=i.next}while(i!==c);return r}(e,t);if(!i)return t;var o=S(i,e),a=r(i,i.next);let s=d(o);return r(s,s.next),a=d(a),d(t===i?a:t)}function u(e,t){return _(e.prev,e,t.prev)<0&&_(t.next,e,e.next)<0}function p(e,t,r,i){var o=e;do{null===o.z&&(o.z=f(o.x,o.y,t,r,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next}while(o!==e);o.prevZ.nextZ=null,o.prevZ=null,function(e){var t,r,i,o,a,s,n,l,c=1;do{for(r=e,e=null,a=null,s=0;r;){for(s++,i=r,n=0,t=0;t<c&&(n++,i=i.nextZ);t++);for(l=c;n>0||l>0&&i;)0!==n&&(0===l||!i||r.z<=i.z)?(o=r,r=r.nextZ,n--):(o=i,i=i.nextZ,l--),a?a.nextZ=o:e=o,o.prevZ=a,a=o;r=i}a.nextZ=null,c*=2}while(s>1)}(o)}function f(e,t,r,i,o){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*o)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*o)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function g(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function m(e,t,r,i,o,a,s,n){return(o-s)*(t-n)-(e-s)*(a-n)>=0&&(e-s)*(i-n)-(r-s)*(t-n)>=0&&(r-s)*(a-n)-(o-s)*(i-n)>=0}function v(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&x(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&(T(e,t)&&T(t,e)&&function(e,t){var r=e,i=!1,o=(e.x+t.x)/2,a=(e.y+t.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&o<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(i=!i),r=r.next}while(r!==e);return i}(e,t)&&(_(e.prev,e,t.prev)||_(e,t.prev,t))||y(e,t)&&_(e.prev,e,e.next)>0&&_(t.prev,t,t.next)>0)}function _(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function y(e,t){return e.x===t.x&&e.y===t.y}function x(e,t,r,i){var o=w(_(e,t,r)),a=w(_(e,t,i)),s=w(_(r,i,e)),n=w(_(r,i,t));return o!==a&&s!==n||!(0!==o||!C(e,r,t))||!(0!==a||!C(e,i,t))||!(0!==s||!C(r,e,i))||!(0!==n||!C(r,t,i))}function C(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function w(e){return e>0?1:e<0?-1:0}function T(e,t){return _(e.prev,e,e.next)<0?_(e,t,e.next)>=0&&_(e,e.prev,t)>=0:_(e,t,e.prev)<0||_(e,e.next,t)<0}function S(e,t){var r=new R(e.i,e.x,e.y),i=new R(t.i,t.x,t.y),o=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=o,o.prev=r,i.next=r,r.prev=i,a.next=i,i.prev=a,i}function O(e,t,r,i){var o=new R(e,t,r);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function b(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function R(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(e,t,r,i){for(var o=0,a=t,s=r-i;a<r;a+=i)o+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return o}return e.deviation=function(e,t,r,i){var o=t&&t.length,a=o?t[0]*r:e.length,s=Math.abs(A(e,0,a,r));if(o)for(var n=0,l=t.length;n<l;n++){var c=t[n]*r,d=n<l-1?t[n+1]*r:e.length;s-=Math.abs(A(e,c,d,r))}var h=0;for(n=0;n<i.length;n+=3){var u=i[n]*r,p=i[n+1]*r,f=i[n+2]*r;h+=Math.abs((e[u]-e[f])*(e[p+1]-e[u+1])-(e[u]-e[p])*(e[f+1]-e[u+1]))}return 0===s&&0===h?0:Math.abs((h-s)/s)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},i=0,o=0;o<e.length;o++){for(var a=0;a<e[o].length;a++)for(var s=0;s<t;s++)r.vertices.push(e[o][a][s]);o>0&&(i+=e[o-1].length,r.holes.push(i))}return r},e},void 0!==(a=o())&&(i.exports=a);const n=s.exports},59447:(e,t,r)=>{r.d(t,{r:()=>i});class i{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const i=this._outer.get(e);i?i.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},35888:(e,t,r)=>{r.d(t,{d:()=>o});var i=r(16889);function o(e,t,r){const o=e.byteLength/(4*t),c=new Uint32Array(e,0,o*t);let d=new Uint32Array(o);const h=r?.minReduction??0,u=r?.originalIndices||null,p=u?u.length:0,f=r?.componentOffsets||null;let g=0;if(f)for(let i=0;i<f.length-1;i++){const e=f[i+1]-f[i];e>g&&(g=e)}else g=o;const m=Math.floor(1.1*g)+1;(null==l||l.length<2*m)&&(l=new Uint32Array((0,i.Sf)(2*m)));for(let i=0;i<2*m;i++)l[i]=0;let v=0;const _=!!f&&!!u,y=_?p:o,x=_?new Uint32Array(p):null,C=1.96;let w=0!==h?Math.ceil(4*C*C/(h*h)*h*(1-h)):y,T=1,S=f?f[1]:y;for(let i=0;i<y;i++){if(i===w){const e=1-v/i;if(e+C*Math.sqrt(e*(1-e)/i)<h)return null;w*=2}if(i===S){for(let e=0;e<2*m;e++)l[e]=0;if(u)for(let e=f[T-1];e<f[T];e++)x[e]=d[u[e]];S=f[++T]}const e=_?u[i]:i,r=e*t,o=n(c,r,t);let s=o%m,p=v;for(;0!==l[2*s+1];){if(l[2*s]===o){const e=l[2*s+1]-1;if(a(c,r,e*t,t)){p=d[e];break}}s++,s>=m&&(s-=m)}p===v&&(l[2*s]=o,l[2*s+1]=e+1,v++),d[e]=p}if(0!==h&&1-v/o<h)return null;if(_){for(let e=f[T-1];e<x.length;e++)x[e]=d[u[e]];d=x}const O=new Uint32Array(t*v);v=0;for(let i=0;i<y;i++)d[i]===v&&(s(c,(_?u[i]:i)*t,O,v*t,t),v++);if(u&&!_){const e=new Uint32Array(p);for(let t=0;t<e.length;t++)e[t]=d[u[t]];d=e}return{buffer:O.buffer,indices:d,uniqueCount:v}}function a(e,t,r,i){for(let o=0;o<i;o++)if(e[t+o]!==e[r+o])return!1;return!0}function s(e,t,r,i,o){for(let a=0;a<o;a++)r[i+a]=e[t+a]}function n(e,t,r){let i=0;for(let o=0;o<r;o++)i=e[t+o]+i|0,i=i+(i<<11)+(i>>>2)|0;return i>>>0}let l=null},91320:(e,t,r)=>{r.d(t,{Mk:()=>c,ZI:()=>i,bT:()=>l});var i,o,a=r(79347),s=r(69662),n=r(35888);function l(e){const t=c(e.rings,e.hasZ,i.CCW_IS_HOLE),r=new Array;let o=0,s=0;for(const i of t.polygons){const e=i.count,n=i.index,l=new Float64Array(t.position.buffer,3*n*t.position.BYTES_PER_ELEMENT,3*e),c=i.holeIndices.map((e=>e-n)),d=new Uint32Array((0,a.e)(l,c,3));r.push({position:l,faces:d}),o+=l.length,s+=d.length}const l=function(e,t,r){if(1===e.length)return e[0];const i=new Float64Array(t),o=new Uint32Array(r);let a=0,s=0,n=0;for(const l of e){for(let e=0;e<l.position.length;e++)i[a++]=l.position[e];for(let e=0;e<l.faces.length;e++)o[s++]=l.faces[e]+n;n=a/3}return{position:i,faces:o}}(r,o,s),d=(0,n.d)(l.position.buffer,6,{originalIndices:l.faces});return l.position=new Float64Array(d.buffer),l.faces=d.indices,l}function c(e,t,r){const o=e.length,a=new Array(o),s=new Array(o),n=new Array(o);let l=0,c=0,u=0,p=0;for(let i=0;i<o;++i)p+=e[i].length;const f=new Float64Array(3*p);let g=0;for(let m=o-1;m>=0;m--){const p=e[m],v=r===i.CCW_IS_HOLE&&h(p);if(v&&1!==o)a[l++]=p;else{let e=p.length;for(let t=0;t<l;++t)e+=a[t].length;const r={index:g,pathLengths:new Array(l+1),count:e,holeIndices:new Array(l)};r.pathLengths[0]=p.length,p.length>0&&(n[u++]={index:g,count:p.length}),g=v?d(p,p.length-1,-1,f,g,p.length,t):d(p,0,1,f,g,p.length,t);for(let i=0;i<l;++i){const e=a[i];r.holeIndices[i]=g,r.pathLengths[i+1]=e.length,e.length>0&&(n[u++]={index:g,count:e.length}),g=d(e,0,1,f,g,e.length,t)}l=0,r.count>0&&(s[c++]=r)}}for(let i=0;i<l;++i){const e=a[i];e.length>0&&(n[u++]={index:g,count:e.length}),g=d(e,0,1,f,g,e.length,t)}return s.length=c,n.length=u,{position:f,polygons:s,outlines:n}}function d(e,t,r,i,o,a,s){o*=3;for(let n=0;n<a;++n){const a=e[t];i[o++]=a[0],i[o++]=a[1],i[o++]=s?a[2]:0,t+=r}return o/3}function h(e){return!(0,s.bu)(e,!1,!1)}(o=i||(i={}))[o.NONE=0]="NONE",o[o.CCW_IS_HOLE=1]="CCW_IS_HOLE"},91226:(e,t,r)=>{r.d(t,{co:()=>o,ii:()=>c});var i,o,a,s=r(81949),n=r(71353),l=r(46208);class c{constructor(){this.readChannels=l.uz.RG,this.renderingStage=l.jL.FINISHED,this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=(0,n.c)(),this.isCameraPositionFinal=!0,this.parallax=new d,this.parallaxNew=new d,this.crossFade={enabled:!1,factor:1,distanceThresholdFactor:.3},this.fadeInOut={stage:o.FINISHED,factor:1,distanceThresholdFactor:.6},this.fadeIn={stage:i.FINISHED,factor:1,distanceThresholdFactor:2},this.fadeInOutHeight={stage:a.FINISHED,factor:-1}}get isFading(){return this.fadeInOut.stage===o.FADE_OUT||this.fadeInOut.stage===o.FADE_IN||this.fadeIn.stage===i.FADE_IN||this.fadeInOutHeight.stage!==a.FINISHED||this.renderingStage===l.jL.FADING_TEXTURE_CHANNELS}}!function(e){e[e.FINISHED=0]="FINISHED",e[e.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",e[e.FADE_IN=2]="FADE_IN"}(i||(i={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.FADE_OUT=1]="FADE_OUT",e[e.SWITCH=2]="SWITCH",e[e.FADE_IN=3]="FADE_IN"}(o||(o={})),function(e){e[e.FINISHED=0]="FINISHED",e[e.HEIGHT_FADE=1]="HEIGHT_FADE"}(a||(a={}));class d{constructor(){this.anchorPointClouds=(0,n.c)(),this.cloudsHeight=1e5,this.radiusCurvatureCorrectionFactor=0,this.transform=(0,s.c)()}}},46208:(e,t,r)=>{var i,o;r.d(t,{jL:()=>i,uz:()=>o}),function(e){e[e.RENDERING=0]="RENDERING",e[e.FINISHED_RENDERING=1]="FINISHED_RENDERING",e[e.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS",e[e.SWITCH_CHANNELS=3]="SWITCH_CHANNELS",e[e.FINISHED=4]="FINISHED"}(i||(i={})),function(e){e[e.RG=0]="RG",e[e.BA=1]="BA"}(o||(o={}))},78935:(e,t,r)=>{r.d(t,{o:()=>s});var i=r(92026),o=r(88152),a=r(8821);class s{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=(0,o.Z7)(e)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const r=this.calculateOffsetRenderUnits(t);return null!=this.featureExpressionInfoContext?r:e+r}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return null!=r&&(t+=(0,a.ht)(r)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=(0,o.lt)(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=(0,i.Pt)(e.offset,0)}updateFeatureExpressionInfoContext(e,t,r){if((0,i.Wi)(e))return void(this._featureExpressionInfoContext=null);const o=e&&e.arcade;o&&(0,i.pC)(t)&&(0,i.pC)(r)?(this._featureExpressionInfoContext=(0,a.d9)(e),(0,a.aO)(this._featureExpressionInfoContext,(0,a.Tz)(o.modules,t,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const t=new s;return(0,i.pC)(e)&&t.setFromElevationInfo(e),t}}},69691:(e,t,r)=>{r.d(t,{B5:()=>_,GC:()=>m,Lm:()=>x,Xf:()=>v,bD:()=>y,lO:()=>i,qZ:()=>f,rR:()=>p,w7:()=>g});var i,o=r(41644),a=r(92026),s=r(14226),n=r(81949),l=r(71353),c=r(79803),d=r(81020),h=r(96387),u=r(77648);function p(e,t,r,i,o,a,s,n,l,d,h){const u=C[h.mode];let p,f,g=0;if((0,c.CM)(e,t,r,i,l.spatialReference,o,n))return u.requiresAlignment(h)?(g=u.applyElevationAlignmentBuffer(i,o,a,s,n,l,d,h),p=a,f=s):(p=i,f=o),(0,c.CM)(p,l.spatialReference,f,a,d.spatialReference,s,n)?g:void 0}function f(e,t,r,i,s){const n=((0,d.f)(e)?e.z:(0,u.Fb)(e)?e.array[e.offset+2]:e[2])||0;switch(r.mode){case"on-the-ground":{const r=(0,a.Pt)((0,u.KO)(t,e,"ground"),0);return s.verticalDistanceToGround=0,s.sampledElevation=r,void(s.z=r)}case"relative-to-ground":{const o=(0,a.Pt)((0,u.KO)(t,e,"ground"),0),l=r.geometryZWithOffset(n,i);return s.verticalDistanceToGround=l,s.sampledElevation=o,void(s.z=l+o)}case"relative-to-scene":{const o=(0,a.Pt)((0,u.KO)(t,e,"scene"),0),l=r.geometryZWithOffset(n,i);return s.verticalDistanceToGround=l,s.sampledElevation=o,void(s.z=l+o)}case"absolute-height":{const o=r.geometryZWithOffset(n,i),l=(0,a.Pt)((0,u.KO)(t,e,"ground"),0);return s.verticalDistanceToGround=o-l,s.sampledElevation=l,void(s.z=o)}default:return(0,o.Bg)(r.mode),void(s.z=0)}}function g(e,t,r,i){return f(e,t,r,i,T),T.z}function m(e,t,r){return null==t||null==r?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===r?e.staysOnTheGround:t===r||"on-the-ground"!==t&&"on-the-ground"!==r?i.UPDATE:e.onTheGroundChanged}function v(e){return"relative-to-ground"===e||"relative-to-scene"===e}function _(e){return"absolute-height"!==e}function y(e,t,r,i,o){f(t,r,o,i,T),(0,h.CV)(e,T.verticalDistanceToGround);const a=T.sampledElevation,n=(0,s.c)(w,e.transformation);return S[0]=t.x,S[1]=t.y,S[2]=T.z,(0,c.Bm)(t.spatialReference,S,n,i.spatialReference)?e.transformation=n:console.warn("Could not locate symbol object properly, it might be misplaced"),a}class x{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}!function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(i||(i={}));const C={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,r,i,o,a,s,n){const l=n.calculateOffsetRenderUnits(s),c=n.featureExpressionInfoContext;t*=3,i*=3;for(let d=0;d<o;++d){const o=e[t+0],a=e[t+1],s=e[t+2];r[i+0]=o,r[i+1]=a,r[i+2]=null==c?s+l:l,t+=3,i+=3}return 0},requiresAlignment:function(e){const t=e.meterUnitOffset,r=e.featureExpressionInfoContext;return 0!==t||null!=r}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,r,i,o,s){let n=0;const l=s.spatialReference;t*=3,i*=3;for(let c=0;c<o;++c){const o=e[t+0],c=e[t+1],d=e[t+2],h=(0,a.Pt)(s.getElevation(o,c,d,l,"ground"),0);n+=h,r[i+0]=o,r[i+1]=c,r[i+2]=h,t+=3,i+=3}return n/o},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,r,i,o,s,n,l){let c=0;const d=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=s.spatialReference;t*=3,i*=3;for(let p=0;p<o;++p){const o=e[t+0],n=e[t+1],l=e[t+2],p=(0,a.Pt)(s.getElevation(o,n,l,u,"ground"),0);c+=p,r[i+0]=o,r[i+1]=n,r[i+2]=null==h?l+p+d:p+d,t+=3,i+=3}return c/o},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,r,i,o,s,n,l){let c=0;const d=l.calculateOffsetRenderUnits(n),h=l.featureExpressionInfoContext,u=s.spatialReference;t*=3,i*=3;for(let p=0;p<o;++p){const o=e[t+0],n=e[t+1],l=e[t+2],p=(0,a.Pt)(s.getElevation(o,n,l,u,"scene"),0);c+=p,r[i+0]=o,r[i+1]=n,r[i+2]=null==h?l+p+d:p+d,t+=3,i+=3}return c/o},requiresAlignment:()=>!0}},w=(0,n.c)(),T=new x,S=(0,l.c)()},8821:(e,t,r)=>{r.d(t,{O$:()=>f,Tz:()=>d,WI:()=>p,aO:()=>h,d9:()=>l,ht:()=>u,kr:()=>c});var i=r(32718),o=r(66978),a=r(37818),s=r(819);const n=i.Z.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function l(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function c(e,t,r,i){const a=e&&e.expression;if("string"!=typeof a)return null;const n=m(a);if(null!=n)return{cachedResult:n};const l=await(0,s.LC)();(0,o.k_)(r);const c=l.arcadeUtils,d=c.createSyntaxTree(a);return c.dependsOnView(d)?(null!=i&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:c.createFunction(d),context:c.createExecContext(null,{sr:t}),modules:l}}}function d(e,t,r){return e.arcadeUtils.createFeature(t.attributes,t.geometry,r)}function h(e,t){if(null!=e&&!g(e)){if(!t||!e.arcade)return void n.errorOncePerTick("Arcade support required but not provided");const r=t;r._geometry&&(r._geometry=(0,a.kB)(r._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function u(e){if(null!=e){if(g(e))return e.cachedResult;const t=e.arcade;let r=e.arcade.modules.arcadeUtils.executeFunction(t.func,t.context);return"number"!=typeof r&&(e.cachedResult=0,r=0),r}return 0}function p(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e&&e.featureExpressionInfo;const i=r&&r.expression;return t||"0"===i||(r=null),r}const f={cachedResult:0};function g(e){return null!=e.cachedResult}function m(e){return"0"===e?0:null}},26279:(e,t,r)=>{var i,o;r.d(t,{L:()=>i,a:()=>o}),function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"}(i||(i={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(o||(o={}))},79685:(e,t,r)=>{r.d(t,{YU:()=>m});var i,o=r(92026),a=r(18722),s=r(88396),n=r(11186),l=r(71353),c=r(67077),d=r(79803),h=r(92183),u=r(50951),p=r(68401),f=r(74894),g=r(4760);function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const r=[],i=[];v(e,i,r);const o=i[0][1].data,a=r[0][1].length,s=new Array(a).fill(0);return _(e,i,r),y(e,i,r,s),w(e,i,r,s),x(e,i,r,s),C(e,i,r,s),T(e,i,r,s),S(e,i,r,s),O(e,i,r,o),new f.Z(i,r,p.MX.Line,t)}function v(e,t,r){const{attributeData:{position:i},removeDuplicateStartEnd:o}=e,s=function(e){const t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}(i)&&o,n=i.length/3-(s?1:0),l=new Array(2*(n-1)),c=s?(0,a.tP)(i,0,i.length-3):i;let d=0;for(let a=0;a<n-1;a++)l[d++]=a,l[d++]=a+1;t.push([g.T.POSITION,{size:3,data:c,exclusive:s}]),r.push([g.T.POSITION,l])}function _(e,t,r){const i=e.attributeData.mapPosition;(0,o.Wi)(i)||(r.push([g.T.MAPPOS,r[0][1]]),t.push([g.T.MAPPOS,{size:3,data:i}]))}function y(e,t,r,i){if((0,o.pC)(e.attributeData.colorFeature))return;const a=e.attributeData.color;t.push([g.T.COLOR,{size:4,data:(0,o.Pt)(a,c.O)}]),r.push([g.T.COLOR,i])}function x(e,t,r,i){if(!(0,o.pC)(e.attributeData.normal))return;const a=e.attributeData.normal;t.push([g.T.NORMAL,{size:3,data:a}]),r.push([g.T.NORMAL,i])}function C(e,t,r,i){const a=e.attributeData.colorFeature;(0,o.Wi)(a)||(t.push([g.T.COLORFEATUREATTRIBUTE,{size:1,data:new Float32Array([a])}]),r.push([g.T.COLOR,i]))}function w(e,t,r,i){if((0,o.pC)(e.attributeData.sizeFeature))return;const a=e.attributeData.size;t.push([g.T.SIZE,{size:1,data:[(0,o.Pt)(a,1)]}]),r.push([g.T.SIZE,i])}function T(e,t,r,i){const a=e.attributeData.sizeFeature;(0,o.Wi)(a)||(t.push([g.T.SIZEFEATUREATTRIBUTE,{size:1,data:new Float32Array([a])}]),r.push([g.T.SIZEFEATUREATTRIBUTE,i]))}function S(e,t,r,i){const a=e.attributeData.opacityFeature;(0,o.Wi)(a)||(t.push([g.T.OPACITYFEATUREATTRIBUTE,{size:1,data:new Float32Array([a])}]),r.push([g.T.OPACITYFEATUREATTRIBUTE,i]))}function O(e,t,r,i){if((0,o.Wi)(e.overlayInfo)||e.overlayInfo.renderCoordsHelper.viewingMode!==u.JY.Global||!e.overlayInfo.spatialReference.isGeographic)return;const a=new Float64Array(i.length),l=(0,h.Iu)(e.overlayInfo.spatialReference);for(let o=0;o<a.length;o+=3)(0,d.gH)(i,o,a,o,l);const c=i.length/3,p=new Float32Array(c+1);let f=b,m=R,v=0,_=0;(0,n.s)(f,a[_++],a[_++],a[_++]),p[0]=0;for(let o=1;o<c+1;++o)o===c&&(_=0),(0,n.s)(m,a[_++],a[_++],a[_++]),v+=(0,s.p)(f,m),p[o]=v,[f,m]=[m,f];t.push([g.T.DISTANCETOSTART,{size:1,data:p}]),r.push([g.T.DISTANCETOSTART,r[0][1]])}!function(e){e[e.KEEP=0]="KEEP",e[e.REMOVE=1]="REMOVE"}(i||(i={}));const b=(0,l.c)(),R=(0,l.c)()},78081:(e,t,r)=>{r.d(t,{V:()=>n,r:()=>l});var i=r(79803),o=r(91320),a=r(69691),s=r(24463);function n(e,t,r,i){const s="polygon"===e.type?o.ZI.CCW_IS_HOLE:o.ZI.NONE,n="polygon"===e.type?e.rings:e.paths,{position:l,outlines:d}=(0,o.Mk)(n,e.hasZ,s),h=new Float64Array(l.length),u=(0,a.rR)(l,e.spatialReference,0,h,0,l,0,l.length/3,t,r,i),p=null!=u;return{lines:p?c(d,l,h):[],projectionSuccess:p,sampledElevation:u}}function l(e,t){const r="polygon"===e.type?o.ZI.CCW_IS_HOLE:o.ZI.NONE,a="polygon"===e.type?e.rings:e.paths,{position:n,outlines:l}=(0,o.Mk)(a,!1,r),d=(0,i.CM)(n,e.spatialReference,0,n,t,0,n.length/3);for(let i=2;i<n.length;i+=3)n[i]=s.Rn;return{lines:d?c(l,n):[],projectionSuccess:d}}function c(e,t,r){const i=new Array;for(const{index:o,count:a}of e){if(a<=1)continue;const e=3*o,s=e+3*a;i.push({position:t.subarray(e,s),mapPosition:r?r.subarray(e,s):void 0})}return i}},24463:(e,t,r)=>{r.d(t,{Rn:()=>sr});var i,o=r(27366),a=r(85015),s=r(91505),n=r(100),l=r(77427),c=r(92026),d=r(27546),h=r(94172),u=r(92377),p=r(49861),f=(r(63780),r(25243),r(69912)),g=r(14226),m=r(11186),v=r(71353),_=r(50951),y=r(26279),x=r(94463),C=r(54134),w=r(16889),T=r(65156),S=r(68401),O=r(61403);!function(e){e[e.None=0]="None",e[e.ColorAndWater=1]="ColorAndWater",e[e.Highlight=2]="Highlight",e[e.Occluded=3]="Occluded",e[e.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor"}(i||(i={}));class b{constructor(e,t){this.index=e,this.renderTargets=t,this._extent=(0,T.Ue)(),this.resolution=0,this.renderLocalOrigin=(0,O.a)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new R,this.validTargets=null,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(t.renderTargets.length).fill(!1)}get extent(){return this._extent}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const t=e===i.ColorAndWater?this.renderTargets.getTarget(C.NH.Color):e===i.Highlight?this.renderTargets.getTarget(C.NH.Highlight):e===i.ObjectAndLayerIdColor?this.renderTargets.getTarget(C.NH.ObjectAndLayerIdColor):this.renderTargets.getTarget(C.NH.Occluded);return t?t.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(C.NH.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(C.NH.Color):null}getNormalTexture(e){const t=e===i.ColorAndWater?this.renderTargets.getTarget(C.NH.Water):null;return t?t.getTexture():null}draw(e,t){const r=this.computeRenderTargetValidityBitfield();for(const i of this.renderTargets.renderTargets)i.type!==C.NH.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[i.type]=e.drawTarget(this,i,t):this.validTargets[i.type]=!1;return r^this.computeRenderTargetValidityBitfield()?S.Yg.CHANGED:S.Yg.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[C.NH.Color]|+e[C.NH.ColorNoRasterImage]<<1|+e[C.NH.Highlight]<<2|+e[C.NH.Water]<<3|+e[C.NH.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const t=.001*e.range;if(this._extent[0]-t<=e.min){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,T.cv)(this._extent,e.range,0,t)}if(this._extent[2]+t>=e.max){const t=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,T.cv)(this._extent,-e.range,0,t)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,(0,T.JG)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const t=this.canvasGeometries.extents[e];if(t[0]!==t[2]&&t[1]!==t[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===C.fu.INNER?0:this.resolution,0,this.resolution,this.resolution)}}class R{constructor(){this.extents=[(0,T.Ue)(),(0,T.Ue)(),(0,T.Ue)()],this.numViews=0}}var A=r(15245),P=r(8548),E=r(53634);class D{constructor(e,t){this._size=(0,A.c)(),this._fbo=null,this._fbo=new E.X(e,{colorTarget:P.Lm.TEXTURE,depthStencilTarget:P.OU.NONE},{target:P.No.TEXTURE_2D,pixelFormat:P.VI.RGBA,dataType:P.Br.UNSIGNED_BYTE,wrapMode:P.e8.CLAMP_TO_EDGE,samplingMode:P.cw.LINEAR_MIPMAP_LINEAR,hasMipmap:t,maxAnisotropy:8,width:0,height:0})}dispose(){this._fbo=(0,c.M2)(this._fbo)}getTexture(){return this._fbo?this._fbo.colorTexture:null}isValid(){return null!==this._fbo}resize(e,t){this._size[0]=e,this._size[1]=t,this._fbo.resize(this._size[0],this._size[1])}bind(e){e.bindFramebuffer(this._fbo)}generateMipMap(){const e=this._fbo.colorTexture;e.descriptor.hasMipmap&&e.generateMipmap()}disposeRenderTargetMemory(){this._fbo?.resize(0,0)}get gpuMemoryUsage(){return this._fbo?.gpuMemoryUsage??0}}var I=r(93169),H=r(37081);class M{constructor(e,t,r){let i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.output=t,this.type=r,this.valid=!1,this.lastUsed=1/0,this.fbo=new D(e,i)}}class N{constructor(e){this.renderTargets=[new M(e,H.H.Color,C.NH.Color),new M(e,H.H.Color,C.NH.ColorNoRasterImage),new M(e,H.H.Highlight,C.NH.Highlight,!1),new M(e,H.H.Normal,C.NH.Water),new M(e,H.H.Color,C.NH.Occluded)],(0,I.Z)("enable-feature:objectAndLayerId-rendering")&&this.renderTargets.push(new M(e,H.H.ObjectAndLayerIdColor,C.NH.ObjectAndLayerIdColor))}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose()}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()}validateUsageForTarget(e,t,r){if(e)t.lastUsed=r;else if(r-t.lastUsed>F)t.fbo.disposeRenderTargetMemory(),t.lastUsed=1/0;else if(t.lastUsed<1/0)return!0;return!1}get gpuMemoryUsage(){return this.renderTargets.reduce(((e,t)=>e+t.fbo.gpuMemoryUsage),0)}}const F=1e3;var z=r(61863),L=r(59447),U=r(33559);class G{constructor(e){this._context=e,this._perConstructorInstances=new L.r,this._frameCounter=0,this._keepAliveFrameCount=j}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}dispose(){this._perConstructorInstances.forEach((e=>e.forEach((e=>e.technique.destroy())))),this._perConstructorInstances.clear()}acquire(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B;const r=t.key;let i=this._perConstructorInstances.get(e,r);if((0,c.Wi)(i)){const o=new e(this._context,t,(()=>this.release(o)));i=new V(o),this._perConstructorInstances.set(e,r,i)}return++i.refCount,i.technique}releaseAndAcquire(e,t,r){if((0,c.pC)(r)){if(t.key===r.key)return r;this.release(r)}return this.acquire(e,t)}release(e){if((0,c.Wi)(e)||this._perConstructorInstances.empty)return;const t=this._perConstructorInstances.get(e.constructor,e.key);(0,c.Wi)(t)||(--t.refCount,0===t.refCount&&(t.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==j&&this._perConstructorInstances.forEach(((e,t)=>{e.forEach(((e,r)=>{0===e.refCount&&e.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(e.technique.destroy(),this._perConstructorInstances.delete(t,r))}))}))}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach(((t,r)=>{e.push((async(e,t)=>{const r=t.shader;r&&(await r.reload(),e.forEach((e=>e.technique.reload(this._context))))})(t,r))})),await Promise.all(e)}}class V{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}}const j=-1,B=new U.m,W=e=>class extends e{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const e of this._managedDisposables??[]){const t=this[e];this[e]=null,t&&"function"==typeof t.dispose&&t.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};W(class{});var Z=r(30425),k=r(32718),q=r(97731);class ${constructor(e,t,r,i){this._textureRepository=e,this._techniqueRepository=t,this.materialChanged=r,this.requestRender=i,this._id2glMaterialRef=new L.r}dispose(){this._textureRepository.dispose()}acquire(e,t,r){if(this._ownMaterial(e),!e.requiresSlot(t,r))return null;let i=this._id2glMaterialRef.get(r,e.id);if((0,c.Wi)(i)){const t=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:r});i=new X(t),this._id2glMaterialRef.set(r,e.id,i)}return i.ref(),i.glMaterial}release(e,t){const r=this._id2glMaterialRef.get(t,e.id);(0,c.pC)(r)&&(r.unref(),r.referenced||((0,c.M2)(r.glMaterial),this._id2glMaterialRef.delete(t,e.id)))}_ownMaterial(e){(0,c.pC)(e.repository)&&e.repository!==this&&k.Z.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}}class X{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,(0,q.hu)(this._refCnt>=0)}get referenced(){return this._refCnt>0}}var Y=r(32534),K=r(87145),J=r(56529),Q=r(6394),ee=r(91226),te=r(43565),re=r(15226),ie=r(40854),oe=r(93822),ae=r(48919);class se{constructor(e,t,r){this.shadowMap=e,this.ssaoHelper=t,this.slicePlane=r,this.slot=oe.r.OPAQUE_MATERIAL,this.hasOccludees=!1,this.enableFillLights=!0,this._inverseViewport=(0,Q.a)(),this.oldLighting=new ae.c,this.newLighting=new ae.c,this._fadedLighting=new ae.c,this._lighting=this.newLighting,this.ssr=new ie.O,this.multipassTerrain=new re.a,this.multipassGeometry=new te._,this.overlays=[],this.cloudsFade=new ee.ii}get camera(){return this._camera}set camera(e){this._camera=this.ssr.camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}get weatherFading(){return this._lighting===this._fadedLighting}fadeLighting(e){const{oldLighting:t,newLighting:r}=this;e>=1?this._lighting=r:(this._fadedLighting.lerpLighting(t,r,e),this._lighting=this._fadedLighting)}}class ne{constructor(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.rctx=e,this.sliceHelper=i,this.lastFrameCamera=new Z.V,this.output=H.H.Color,this.renderOccludedMask=le,this.bindParameters=new se(t,r,(0,c.pC)(i)?i.plane:null)}resetRenderOccludedMask(){this.renderOccludedMask=le}}const le=J.yD.Occlude|J.yD.OccludeAndTransparent|J.yD.OccludeAndTransparentStencil;var ce,de=r(11873),he=r(81949),ue=r(88396),pe=r(90045),fe=r(67077),ge=r(51378),me=r(3384);!function(e){e[e.Highlight=0]="Highlight",e[e.Default=1]="Default"}(ce||(ce={}));class ve{constructor(){this.camera=new Z.V,this.lightMat=(0,he.c)()}}class _e{constructor(e,t){this._rctx=e,this._viewingMode=t,this._enabled=!1,this._snapshots=new Array,this._textureSize=0,this._numCascades=1,this._maxNumCascades=4,this._splitSchemeLambda=0,this._warp=!0,this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,fe.c)(),this._cascades=[new ve,new ve,new ve,new ve],this._maxTextureSize=Math.min((0,I.Z)("esri-mobile")?2048:8192,this._rctx.parameters.maxTextureSize)}get depthTexture(){return this._depthTexture}get textureSize(){return this._textureSize}get numCascades(){return this._numCascades}get cascadeDistances(){return(0,pe.s)(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}dispose(){this._discardDepthTexture(),this._discardAllSnapshots()}set maxCascades(e){this._maxNumCascades=(0,w.uZ)(Math.floor(e),1,4)}get maxCascades(){return this._maxNumCascades}set enabled(e){this._enabled=e,e||(this._discardDepthTexture(),this._discardAllSnapshots())}get enabled(){return this._enabled}get ready(){return this._enabled&&(0,c.pC)(this._depthTexture)}getSnapshot(e){return this.enabled?this._snapshots[e]:null}getCascades(){for(let e=0;e<this._numCascades;++e)He[e]=this._cascades[e];return He.length=this._numCascades,He}start(e,t,r){(0,q.hu)(this.enabled),this._textureSize=this._computeTextureSize(e.fullWidth,e.fullHeight),this._ensureDepthTexture();const{near:i,far:o}=this._clampNearFar(r);this._computeCascadeDistances(o,i),this._setupMatrices(e,t);const a=e.viewMatrix,s=e.projectionMatrix;for(let n=0;n<this._numCascades;++n)this._constructCascade(n,s,a,t);this._lastOrigin=null,this.clear()}finish(e){(0,q.hu)(this.enabled),this._rctx.bindFramebuffer(e)}getShadowMapMatrices(e){if(!this._lastOrigin||!(0,m.k)(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||(0,v.c)(),(0,m.c)(this._lastOrigin,e);for(let t=0;t<this._numCascades;++t){(0,g.v)(Me,this._cascades[t].lightMat,e);for(let e=0;e<16;++e)Ne[16*t+e]=Me[e]}}return Ne}takeCascadeSnapshotTo(e,t){(0,q.hu)(this.enabled);const r=this._ensureSnapshot(t);this._bindFbo();const i=this._rctx,o=i.bindTexture(r,ge.x.TEXTURE_UNIT_FOR_UPDATES);i.gl.copyTexSubImage2D(P.No.TEXTURE_2D,0,e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[2],e.camera.viewport[3]),i.bindTexture(o,ge.x.TEXTURE_UNIT_FOR_UPDATES)}clear(){const e=this._rctx;this._bindFbo(),e.setClearColor(1,1,1,1),e.clearSafe(P.lk.COLOR_BUFFER_BIT|P.lk.DEPTH_BUFFER_BIT)}_computeTextureSize(e,t){const r=.5*Math.log(e*e+t*t)*Math.LOG2E,i=2**Math.round(r+.35);return Math.min(this._maxTextureSize,2*i)}_ensureDepthTexture(){if((0,c.pC)(this._depthTexture)&&this._depthTexture.descriptor.width===this._textureSize)return;this._discardDepthTexture();const e={target:P.No.TEXTURE_2D,pixelFormat:P.VI.RGBA,dataType:P.Br.UNSIGNED_BYTE,wrapMode:P.e8.CLAMP_TO_EDGE,samplingMode:P.cw.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};this._depthTexture=new ge.x(this._rctx,e),this._fbo=new E.X(this._rctx,{colorTarget:P.Lm.TEXTURE,depthStencilTarget:P.OU.DEPTH_RENDER_BUFFER,width:this._textureSize,height:this._textureSize},this._depthTexture)}_ensureSnapshot(e){let t=this._snapshots[e];if((0,c.pC)(t)&&t.descriptor.width===this._textureSize)return t;this._discardSnapshot(e);const r={target:P.No.TEXTURE_2D,pixelFormat:P.VI.RGBA,dataType:P.Br.UNSIGNED_BYTE,wrapMode:P.e8.CLAMP_TO_EDGE,samplingMode:P.cw.NEAREST,flipped:!0,width:this._textureSize,height:this._textureSize};return t=new ge.x(this._rctx,r),this._snapshots[e]=t,t}_discardDepthTexture(){this._fbo=(0,c.M2)(this._fbo),this._depthTexture=(0,c.M2)(this._depthTexture)}_discardSnapshot(e){this._snapshots[e]=(0,c.M2)(this._snapshots[e])}_discardAllSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){const e=this._rctx;e.unbindTexture(this._depthTexture),e.bindFramebuffer(this._fbo)}_constructCascade(e,t,r,i){const o=this._cascades[e],a=-this._cascadeDistances[e],s=-this._cascadeDistances[e+1],n=(t[10]*a+t[14])/Math.abs(t[11]*a+t[15]),l=(t[10]*s+t[14])/Math.abs(t[11]*s+t[15]);(0,q.hu)(n<l);for(let d=0;d<8;++d){(0,pe.s)(we,d%4==0||d%4==3?-1:1,d%4==0||d%4==1?-1:1,d<4?n:l,1),(0,pe.t)(Te[d],we,Ce);for(let e=0;e<3;++e)Te[d][e]/=Te[d][3]}(0,m.o)(Ie,Te[0]),(0,g.v)(ye,De,Ie),o.camera.viewMatrix=ye;for(let d=0;d<8;++d)(0,m.m)(Te[d],Te[d],o.camera.viewMatrix);(0,m.c)(Se,Te[0]),(0,m.c)(Oe,Te[0]);for(let d=1;d<8;++d)for(let e=0;e<3;++e)Se[e]=Math.min(Se[e],Te[d][e]),Oe[e]=Math.max(Oe[e],Te[d][e]);Se[2]-=200,Oe[2]+=200,o.camera.near=-Oe[2],o.camera.far=-Se[2],this._warp?this._constructTrapezoidalProjection(r,i,o):this._constructOrthogonalProjection(o),(0,g.m)(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const c=this._textureSize/2;o.camera.viewport[0]=e%2==0?0:c,o.camera.viewport[1]=0===Math.floor(e/2)?0:c,o.camera.viewport[2]=c,o.camera.viewport[3]=c}_constructOrthogonalProjection(e){(0,g.w)(e.camera.projectionMatrix,Se[0],Oe[0],Se[1],Oe[1],e.camera.near,e.camera.far)}_constructTrapezoidalProjection(e,t,r){const i=1/Te[0][3],o=1/Te[4][3];(0,q.hu)(i<o);let a=i+Math.sqrt(i*o);const s=Math.sin((0,w.ZF)(e[2]*t[0]+e[6]*t[1]+e[10]*t[2]));a/=s,function(e,t,r,i,o,a,s,n){(0,ue.s)(Fe,0,0);for(let C=0;C<4;++C)(0,ue.j)(Fe,Fe,e[C]);(0,ue.b)(Fe,Fe,.25),(0,ue.s)(ze,0,0);for(let C=4;C<8;++C)(0,ue.j)(ze,ze,e[C]);(0,ue.b)(ze,ze,.25),(0,ue.l)(Le[0],e[4],e[5],.5),(0,ue.l)(Le[1],e[5],e[6],.5),(0,ue.l)(Le[2],e[6],e[7],.5),(0,ue.l)(Le[3],e[7],e[4],.5);let l=0,c=(0,ue.k)(Le[0],Fe);for(let C=1;C<4;++C){const e=(0,ue.k)(Le[C],Fe);e<c&&(c=e,l=C)}(0,ue.a)(Ue,Le[l],e[l+4]);const d=Ue[0];let h,u;Ue[0]=-Ue[1],Ue[1]=d,(0,ue.a)(Ge,ze,Fe),(0,ue.h)(Ge,Ue)<0&&(0,ue.n)(Ue,Ue),(0,ue.l)(Ue,Ue,Ge,r),(0,ue.f)(Ue,Ue),h=u=(0,ue.h)((0,ue.a)(Ve,e[0],Fe),Ue);for(let C=1;C<8;++C){const t=(0,ue.h)((0,ue.a)(Ve,e[C],Fe),Ue);t<h?h=t:t>u&&(u=t)}(0,ue.c)(i,Fe),(0,ue.b)(Ve,Ue,h-t),(0,ue.j)(i,i,Ve);let p=-1,f=1,g=0,m=0;for(let C=0;C<8;++C){(0,ue.a)(je,e[C],i),(0,ue.f)(je,je);const t=Ue[0]*je[1]-Ue[1]*je[0];t>0?t>p&&(p=t,g=C):t<f&&(f=t,m=C)}(0,q.T)(p>0,"leftArea"),(0,q.T)(f<0,"rightArea"),(0,ue.b)(Be,Ue,h),(0,ue.j)(Be,Be,Fe),(0,ue.b)(We,Ue,u),(0,ue.j)(We,We,Fe),Ze[0]=-Ue[1],Ze[1]=Ue[0];const v=(0,q.ep)(i,e[m],We,(0,ue.j)(Ve,We,Ze),1,o),_=(0,q.ep)(i,e[g],We,Ve,1,a),y=(0,q.ep)(i,e[g],Be,(0,ue.j)(Ve,Be,Ze),1,s),x=(0,q.ep)(i,e[m],Be,Ve,1,n);(0,q.T)(v,"rayRay"),(0,q.T)(_,"rayRay"),(0,q.T)(y,"rayRay"),(0,q.T)(x,"rayRay")}(Te,a,s,be,Re,Ae,Pe,Ee),function(e,t,r,i,o){(0,ue.a)(Xe,r,i),(0,ue.b)(Xe,Xe,.5),Ye[0]=Xe[0],Ye[1]=Xe[1],Ye[2]=0,Ye[3]=Xe[1],Ye[4]=-Xe[0],Ye[5]=0,Ye[6]=Xe[0]*Xe[0]+Xe[1]*Xe[1],Ye[7]=Xe[0]*Xe[1]-Xe[1]*Xe[0],Ye[8]=1,Ye[ke(0,2)]=-(0,ue.h)($e(Ye,0),e),Ye[ke(1,2)]=-(0,ue.h)($e(Ye,1),e);let a=(0,ue.h)($e(Ye,0),r)+Ye[ke(0,2)],s=(0,ue.h)($e(Ye,1),r)+Ye[ke(1,2)],n=(0,ue.h)($e(Ye,0),i)+Ye[ke(0,2)],l=(0,ue.h)($e(Ye,1),i)+Ye[ke(1,2)];a=-(a+n)/(s+l),Ye[ke(0,0)]+=Ye[ke(1,0)]*a,Ye[ke(0,1)]+=Ye[ke(1,1)]*a,Ye[ke(0,2)]+=Ye[ke(1,2)]*a,a=1/((0,ue.h)($e(Ye,0),r)+Ye[ke(0,2)]),s=1/((0,ue.h)($e(Ye,1),r)+Ye[ke(1,2)]),Ye[ke(0,0)]*=a,Ye[ke(0,1)]*=a,Ye[ke(0,2)]*=a,Ye[ke(1,0)]*=s,Ye[ke(1,1)]*=s,Ye[ke(1,2)]*=s,Ye[ke(2,0)]=Ye[ke(1,0)],Ye[ke(2,1)]=Ye[ke(1,1)],Ye[ke(2,2)]=Ye[ke(1,2)],Ye[ke(1,2)]+=1,a=(0,ue.h)($e(Ye,1),t)+Ye[ke(1,2)],s=(0,ue.h)($e(Ye,2),t)+Ye[ke(2,2)],n=(0,ue.h)($e(Ye,1),r)+Ye[ke(1,2)],l=(0,ue.h)($e(Ye,2),r)+Ye[ke(2,2)],a=-.5*(a/s+n/l),Ye[ke(1,0)]+=Ye[ke(2,0)]*a,Ye[ke(1,1)]+=Ye[ke(2,1)]*a,Ye[ke(1,2)]+=Ye[ke(2,2)]*a,a=(0,ue.h)($e(Ye,1),t)+Ye[ke(1,2)],s=(0,ue.h)($e(Ye,2),t)+Ye[ke(2,2)],n=-s/a,Ye[ke(1,0)]*=n,Ye[ke(1,1)]*=n,Ye[ke(1,2)]*=n,o[0]=Ye[0],o[1]=Ye[1],o[2]=0,o[3]=Ye[2],o[4]=Ye[3],o[5]=Ye[4],o[6]=0,o[7]=Ye[5],o[8]=0,o[9]=0,o[10]=1,o[11]=0,o[12]=Ye[6],o[13]=Ye[7],o[14]=0,o[15]=Ye[8]}(be,Re,Pe,Ee,r.camera.projectionMatrix),r.camera.projectionMatrix[10]=2/(Se[2]-Oe[2]),r.camera.projectionMatrix[14]=-(Se[2]+Oe[2])/(Se[2]-Oe[2])}_setupMatrices(e,t){(0,g.m)(xe,e.projectionMatrix,e.viewMatrix),(0,g.a)(Ce,xe);const r=this._viewingMode===_.JY.Global?e.eye:(0,m.s)(Ie,0,0,1);(0,g.q)(De,[0,0,0],[-t[0],-t[1],-t[2]],r)}_clampNearFar(e){let{near:t,far:r}=e;return t<2&&(t=2),r<2&&(r=2),t>=r&&(t=2,r=4),{near:t,far:r}}_computeCascadeDistances(e,t){this._numCascades=Math.min(1+Math.floor((0,q.E6)(e/t,4)),this._maxNumCascades);const r=(e-t)/this._numCascades,i=(e/t)**(1/this._numCascades);let o=t,a=t;for(let s=0;s<this._numCascades+1;++s)this._cascadeDistances[s]=(0,w.t7)(o,a,this._splitSchemeLambda),o*=i,a+=r}get gpuMemoryUsage(){return this._snapshots.reduce(((e,t)=>e+(0,me.un)(t)),this._fbo?.gpuMemoryUsage??0)}get test(){const e=this;return{maxNumCascades:this._maxNumCascades,cascades:this._cascades,textureSize:this._textureSize,set splitSchemeLambda(t){e._splitSchemeLambda=t},get splitSchemeLambda(){return e._splitSchemeLambda},set warp(t){e._warp=t},get warp(){return e._warp}}}}const ye=(0,he.c)(),xe=(0,he.c)(),Ce=(0,he.c)(),we=(0,fe.c)(),Te=[];for(let lr=0;lr<8;++lr)Te.push((0,fe.c)());const Se=(0,v.c)(),Oe=(0,v.c)(),be=(0,Q.a)(),Re=(0,Q.a)(),Ae=(0,Q.a)(),Pe=(0,Q.a)(),Ee=(0,Q.a)(),De=(0,he.c)(),Ie=(0,v.c)(),He=[],Me=(0,he.c)(),Ne=new Float32Array(64),Fe=(0,Q.a)(),ze=(0,Q.a)(),Le=[(0,Q.a)(),(0,Q.a)(),(0,Q.a)(),(0,Q.a)()],Ue=(0,Q.a)(),Ge=(0,Q.a)(),Ve=(0,Q.a)(),je=(0,Q.a)(),Be=(0,Q.a)(),We=(0,Q.a)(),Ze=(0,Q.a)();function ke(e,t){return 3*t+e}const qe=(0,Q.a)();function $e(e,t){return(0,ue.s)(qe,e[t],e[t+3]),qe}const Xe=(0,Q.a)(),Ye=(0,de.c)();class Ke{constructor(){this.adds=new d.Z,this.removes=new d.Z,this.updates=new d.Z({allocator:e=>e||new Je,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}}class Je{}class Qe{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}}var et=r(81268),tt=r(54463),rt=r(78289);function it(e){return e.data.indexCount>=1}var ot=r(50256),at=r(94425),st=r(85380);class nt extends st.Pf{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,v.c)();super(),this.origin=e,this.slicePlaneLocalOrigin=this.origin}}var lt=r(47475);class ct{constructor(){this.first=0,this.count=0}}class dt{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.from=e,this.to=t}}class ht extends dt{constructor(e,t,r,i,o,a){super(t,r),this.id=e,this.isVisible=i,this.hasHighlights=o,this.hasOccludees=a}}function ut(e){return Array.from(e.values()).sort(pt)}function pt(e,t){return e.from===t.from?e.to-t.to:e.from-t.from}function ft(e,t){const r=e.back();if(null==r){const r=e.pushNew();return r.first=t.from,void(r.count=t.to-t.from)}if(function(e,t){return e.first+e.count>=t.from}(r,t)){const e=t.from-r.first+t.to-t.from;r.count=e}else{const r=e.pushNew();r.first=t.from,r.count=t.to-t.from}}class gt{constructor(e,t){this._pool=e,this._size=0,this._buffer=e.newBuffer(vt(t))}dispose(){this._buffer=this._pool.deleteBuffer(this._buffer),this._size=0}release(){this.erase(0,this._size),this.dispose()}get buffer(){return this._buffer}get size(){return this._size}grow(e){this._resize(this._size+e,!0).dispose()}allocate(e){return this._resize(e,!1)}_resize(e,t){let r;const i=function(e,t,r){return t<=r?e>=r?e:vt(Math.max(2*e,r)):e<=2*r?e:vt(r)}(this._buffer.length,this._size,e);if(this._buffer.length!==i){const e=this._pool.newBuffer(i);t&&(e.array.set(this._buffer.array.subarray(0,Math.min(this._size,i))),e.vao.vertexBuffers.geometry.setSubData(e.array,0,0,e.array.length)),r=this._buffer,this._buffer=e}const o=this._size;return this._size=e,r?{dispose:()=>{r.array.fill(0,0,o),this._pool.deleteBuffer(r)},copy:(e,t,i)=>this._buffer.array.set(r.array.subarray(t,i),e),hasNewBuffer:!0}:{dispose:()=>{},copy:(e,t,r)=>{e!==t&&this._buffer.array.copyWithin(e,t,r)},hasNewBuffer:!1}}erase(e,t){this._buffer.array.fill(0,e,t)}}const mt=65536;function vt(e){return Math.ceil(e/mt)*mt}var _t=r(18759),yt=r(95439),xt=r(80658),Ct=r(44070);class wt{constructor(e,t,r,i){this.vao=new xt.U(e,t,{geometry:r},{geometry:Ct.f.createVertex(e,P.l1.STATIC_DRAW)}),this.array=new Float32Array(i),this.vao.vertexBuffers.geometry.setSize(this.array.byteLength)}dispose(){this.vao.dispose(!0)}get length(){return this.array.length}}const Tt=_t.an+1;class St{constructor(e,t,r){this._rctx=e,this._locations=t,this._layout=r,this._cache=e.newCache(`MergedRenderer pool ${(0,yt.D)()}`,Ot)}dispose(){this._cache.destroy()}newBuffer(e){const t=e.toString(),r=this._cache.pop(t);if((0,c.pC)(r)){const e=r.pop();return r.length>0&&this._cache.put(t,r,e.array.byteLength*r.length,Tt),e}return new wt(this._rctx,this._locations,this._layout,e)}deleteBuffer(e){const t=e.array.byteLength,r=e.array.length.toString(),i=this._cache.pop(r);return(0,c.pC)(i)?(i.push(e),this._cache.put(r,i,t*i.length,-1)):this._cache.put(r,[e],t,-1),null}}function Ot(e,t){if(t===_t.lN.ALL)return void e.forEach((e=>e.dispose()));const r=e.pop(),i=e.length*r.array.byteLength;return r.dispose(),i}var bt=r(32683);class Rt{constructor(e,t,r){this._rctx=e,this._materialRepository=t,this._material=r,this.type="MergedRenderer",this._dataByOrigin=new Map,this._renderCommandData=new d.Z,this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new at.p(this._material,this._materialRepository),this._bufferWriter=r.createBufferWriter(),this._bufferPool=new St(e,r.vertexAttributeLocations,(0,ot.K)(this._bufferWriter.vertexBufferLayout))}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach((e=>e.geometry.dispose())),this._dataByOrigin.clear(),this._bufferPool.dispose()}get isEmpty(){return 0===this._dataByOrigin.size}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this._material instanceof lt.H}get rendersOccluded(){return!this.isEmpty&&this._material.renderOccluded!==J.yD.Occlude}modify(e){this._updateGeometries(e.updates),this._addAndRemoveGeometries(e.adds,e.removes),this._updateDrawCommands()}_addAndRemoveGeometries(e,t){const r=this._bufferWriter,i=r.vertexBufferLayout.stride/4,o=this._dataByOrigin,a=function(e,t){const r=new Map;for(const i of e)Pt(r,i,!0);for(const i of t)Pt(r,i,!1);return r}(e,t);a.forEach(((e,t)=>{a.delete(t);const s=e.add.reduce(((e,t)=>e+r.elementCount(t.data)),0);let n=o.get(t);if(null==n)(0,q.hu)(0===e.remove.length),n=new Ht(e.origin,new gt(this._bufferPool,s*i)),o.set(t,n);else if(0===e.add.length&&n.instances.size===e.remove.length)return n.geometry.dispose(),void o.delete(t);let l=0;n.instances.forEach((e=>l+=e.to-e.from));const c=e.remove.reduce(((e,t)=>e+r.elementCount(t.data)),0),d=n.geometry.size,h=(l+s-c)*i,u=Nt;if(h>mt&&(h<d/2||d-h>1048576)?this._removeAndRebuild(n,e.remove,i,h,u):e.remove.length>0&&this._remove(n,e.remove,i,u),e.add.length>0){const t=Ft;(0,q.u_)(t,-e.origin[0],-e.origin[1],-e.origin[2]),this._add(n,e.add,i,t,u)}const p=n.geometry.buffer.vao.vertexBuffers.geometry;It(u),u.forAll((e=>{let{from:t,to:r}=e;if(t<r){const e=n.geometry.buffer.array;p.setSubData(e,t,t,r)}})),u.clear(),n.drawCommandsDirty=!0}))}_updateGeometries(e){const t=this._bufferWriter,r=t.vertexBufferLayout.stride/4;for(const i of e){const e=i.renderGeometry,o=this._dataByOrigin.get(e.origin.id),a=o&&o.instances.get(e.id);if(!a)return;const s=i.updateType;if(s&rt.$.VISIBILITIES&&(a.isVisible=e.instanceParameters.visible),s&(rt.$.HIGHLIGHTS|rt.$.VISIBILITIES)){const t=e.instanceParameters.visible;a.hasHighlights=!!e.instanceParameters.highlights&&t}if(s&rt.$.OCCLUDEES&&(a.hasOccludees=!!e.instanceParameters.occludees),s&(rt.$.VERTEXATTRS|rt.$.TRANSFORMATION)){const{array:i,vao:s}=o.geometry.buffer;(0,bt.bZ)(e,zt,Lt),t.write(zt,Lt,e.data,t.vertexBufferLayout.createView(i.buffer),a.from),(0,q.hu)(a.from+t.elementCount(e.data)===a.to,"material VBO layout has changed"),s.vertexBuffers.geometry.setSubData(i,a.from*r,a.from*r,a.to*r)}o.drawCommandsDirty=!0}}_updateDrawCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach((e=>{e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,(0,l.oE)(e.instances,(t=>(t.isVisible?(t.hasHighlights&&(this._hasHighlights=!0,e.hasHighlights=!0),t.hasOccludees&&(this._hasOccludees=!0,e.hasOccludees=!0)):e.hasHiddenInstances=!0,e.hasHiddenInstances&&e.hasHighlights&&e.hasOccludees)))}));this._dataByOrigin.forEach((e=>{e.drawCommandsDirty&&((e=>{if(e.drawCommandsDefault.clear(),e.drawCommandsHighlight.clear(),e.drawCommandsOccludees.clear(),e.drawCommandsShadowHighlightRest.clear(),0===e.instances.size)return;if(!Et(e)){const t=e.drawCommandsDefault.pushNew();return t.first=1/0,t.count=0,e.instances.forEach((e=>{t.first=Math.min(t.first,e.from),t.count=Math.max(t.count,e.to)})),void(t.count-=t.first)}const t=ut(e.instances);for(const r of t)r.isVisible&&(r.hasOccludees?ft(e.drawCommandsOccludees,r):ft(e.drawCommandsDefault,r),r.hasHighlights?ft(e.drawCommandsHighlight,r):ft(e.drawCommandsShadowHighlightRest,r))})(e),e.drawCommandsDirty=!1)}))}updateAnimation(e){return this._material.update(e)}requiresSlot(e,t){return this._material.requiresSlot(e,t)}render(e,t){if(!this.requiresSlot(t.slot,e))return!1;const r=e===H.H.Highlight||e===H.H.ShadowHighlight;if(r&&!this._hasHighlights)return!1;const i=e===H.H.ShadowExludeHighlight,o=!(r||i);if(this._dataByOrigin.forEach((e=>{if(r&&!e.hasHighlights)return;const t=(r?e.drawCommandsHighlight:i&&Et(e)?e.drawCommandsShadowHighlightRest:e.drawCommandsDefault)||null,a=o&&e.drawCommandsOccludees||null;(t?.length||a?.length)&&this._renderCommandData.push(new Mt(e.origin,e.geometry,t,a))})),0===this._renderCommandData.length)return!1;const a=this._rctx,s=this._glMaterials.load(a,t.slot,e);if((0,c.Wi)(s))return this._renderCommandData.clear(),!1;const n=s.beginSlot(t),l=a.bindTechnique(n,this._material.parameters,t);return this._renderCommandData.forAll((e=>{l.bindDraw(e,t,this._material.parameters);const{geometry:r,renderCommands:i,occludeeCommands:o}=e;n.ensureAttributeLocations(r.buffer.vao),a.bindVAO(r.buffer.vao);const s=n.primitiveType;(0,c.pC)(i)&&i.length>0&&(n.bindPipelineState(a,t.slot,!1),i.forAll((e=>a.drawArrays(s,e.first,e.count)))),(0,c.pC)(o)&&o.length>0&&(n.bindPipelineState(a,t.slot,!0),o.forAll((e=>a.drawArrays(s,e.first,e.count))))})),this._renderCommandData.clear(),!0}_removeAndRebuild(e,t,r,i,o){for(const c of t)e.instances.delete(c.id);const a=ut(e.instances);e.instances.clear();const s=e.geometry.size,n=e.geometry.allocate(i);let l=0;for(const c of a){const t=c.from*r,i=c.to*r;n.copy(l,t,i),c.from=l/r,l+=i-t,c.to=l/r,e.instances.set(c.id,c)}o.push(new dt(0,n.hasNewBuffer?e.geometry.buffer.array.length:s)),n.dispose(),e.geometry.erase(l,o.back().to),e.holes.clear()}_remove(e,t,r,i){for(const o of t){const t=o.id,a=e.instances.get(t),s=a.from*r,n=a.to*r;e.geometry.erase(s,n),e.holes.push(new dt(a.from,a.to)),e.instances.delete(t),i.push(new dt(s,n))}It(e.holes)}_add(e,t,r,i,o){if(0===t.length)return;const a=this._bufferWriter;let s=a.vertexBufferLayout.createView(e.geometry.buffer.array.buffer);const n=e.holes.length>0;let l=Number.MAX_SAFE_INTEGER,d=Number.MIN_SAFE_INTEGER;for(const h of t){const t=(0,c.pC)(h.transformation)?(0,g.m)(zt,i,h.transformation):i;(0,g.a)(Lt,t);const u=(0,g.t)(Lt,Lt),p=a.elementCount(h.data),f=p*r;let m=Dt(e.holes,p);(0,c.Wi)(m)&&(m=e.geometry.size/r,e.geometry.grow(f),s=a.vertexBufferLayout.createView(e.geometry.buffer.array.buffer)),a.write(t,u,h.data,s,m);const v=h.instanceParameters.visible,_=!!h.instanceParameters.highlights&&v,y=!!h.instanceParameters.occludees,x=new ht(h.id,m,m+p,v,_,y);(0,q.hu)(null==e.instances.get(h.id)),e.instances.set(h.id,x),n?o.push(new dt(x.from*r,x.to*r)):(l=Math.min(x.from,l),d=Math.max(x.to,d))}n||o.push(new dt(l*r,d*r))}get test(){return{material:this._material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}}class At{constructor(e){this.origin=e,this.add=new Array,this.remove=new Array}}function Pt(e,t,r){const i=t.origin;if((0,c.Wi)(i))return;let o=e.get(i.id);null==o&&(o=new At(i.vec3),e.set(i.id,o)),r?o.add.push(t):o.remove.push(t)}function Et(e){return e.hasOccludees||e.hasHighlights||e.hasHiddenInstances}function Dt(e,t){let r;if(!e.some((e=>!(e.to-e.from<t)&&(r=e,!0))))return null;const i=r.from;return r.from+=t,r.from>=r.to&&e.removeUnordered(r),i}function It(e){const t=new Map;e.forAll((e=>t.set(e.from,e)));let r=!0;for(;r;)r=!1,e.forEach((i=>{const o=t.get(i.to);o&&(i.to=o.to,t.delete(o.from),e.removeUnordered(o),r=!0)}))}class Ht{constructor(e,t){this.origin=e,this.geometry=t,this.instances=new Map,this.holes=new d.Z({deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!1,this.drawCommandsDefault=new d.Z({allocator:e=>e||new ct,deallocator:e=>e}),this.drawCommandsHighlight=new d.Z({allocator:e=>e||new ct,deallocator:e=>e}),this.drawCommandsOccludees=new d.Z({allocator:e=>e||new ct,deallocator:e=>e}),this.drawCommandsShadowHighlightRest=new d.Z({allocator:e=>e||new ct,deallocator:e=>e})}}class Mt extends nt{constructor(e,t,r,i){super(e),this.geometry=t,this.renderCommands=r,this.occludeeCommands=i}}const Nt=new d.Z({deallocator:null}),Ft=(0,he.c)(),zt=(0,he.c)(),Lt=(0,he.c)();let Ut=class extends a.Z{constructor(e){super(e),this._pending=new Gt,this._changes=new Ke,this._materialRenderers=new Map,this._sortedMaterialRenderers=new d.Z,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._materialRenderers.forEach((e=>e.dispose())),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear(),this._geometries.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materialRepository(){return this.rendererContext.materialRepository}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return(0,l.oE)(this._materialRenderers,(e=>e.rendersOccluded))}get isEmpty(){return!this.updating&&0===this._materialRenderers.size&&0===this._geometries.size}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=function(e){const t=new Map,r=e=>{let r=t.get(e);return r||(r=new Qe,t.set(e,r)),r};return e.removes.forAll((e=>{it(e)&&r(e.material).removes.push(e)})),e.adds.forAll((e=>{it(e)&&r(e.material).adds.push(e)})),e.updates.forAll((e=>{it(e.renderGeometry)&&r(e.renderGeometry.material).updates.push(e)})),t}(this._changes);let t=!1,r=!1,i=!1;return e.forEach(((e,o)=>{let a=this._materialRenderers.get(o);if(!a&&e.adds.length>0&&(a=new Rt(this.rctx,this._materialRepository,o),this._materialRenderers.set(o,a),t=!0,r=!0,i=!0),!a)return;const s=r||a.hasHighlights,n=i||a.hasWater;a.modify(e),r=r||s!==a.hasHighlights,i=i||n!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(o),a.dispose(),t=!0)})),this._changes.clear(),t&&this._updateSortedMaterialRenderers(),r&&(this._hasHighlights=(0,l.oE)(this._materialRenderers,(e=>e.hasHighlights))),i&&(this._hasWater=(0,l.oE)(this._materialRenderers,(e=>e.hasWater))),this.notifyChange("updating"),!0}addGeometries(e,t){if(0===e.length)return;const r=this._validateRenderGeometries(e);for(const o of r)this._geometries.set(o.id,o);const i=this._pending.empty;for(const o of r)this._pending.adds.add(o);i&&this.notifyChange("updating"),t===rt.T.UPDATE&&this._notifyGraphicGeometryChanged(e)}removeGeometries(e,t){const r=this._pending.empty,i=this._pending.adds;for(const o of e)i.has(o)?(this._pending.removed.add(o),i.delete(o)):this._pending.removed.has(o)||this._pending.removes.add(o),this._geometries.delete((0,c.Wg)(o.id));r&&!this._pending.empty&&this.notifyChange("updating"),t===rt.T.UPDATE&&this._notifyGraphicGeometryChanged(e)}modifyGeometries(e,t){const r=0===this._changes.updates.length;for(const i of e){const e=this._changes.updates.pushNew();e.renderGeometry=this._validateRenderGeometry(i),e.updateType=t}switch(r&&this._changes.updates.length>0&&this.notifyChange("updating"),t){case rt.$.TRANSFORMATION:case rt.$.VERTEXATTRS:return this._notifyGraphicGeometryChanged(e);case rt.$.VISIBILITIES:return this._notifyGraphicVisibilityChanged(e)}}updateAnimation(e){let t=!1;return this._sortedMaterialRenderers.forAll((r=>{let{materialRenderer:i}=r;return t=i.updateAnimation(e)||t})),t}render(e,t){for(let r=0;r<this._sortedMaterialRenderers.length;r++){const i=this._sortedMaterialRenderers.data[r];i.material.shouldRender(e)&&i.materialRenderer.render(e.output,t)}}intersect(e,t,r,i,o){return this._geometries.forEach((a=>{if(i&&!i(a))return;this._intersectRenderGeometry(a,r,t,0,e,o);const s=this.rendererContext.longitudeCyclical;s&&(a.boundingSphere[0]-a.boundingSphere[3]<s.min&&this._intersectRenderGeometry(a,r,t,s.range,e,o),a.boundingSphere[0]+a.boundingSphere[3]>s.max&&this._intersectRenderGeometry(a,r,t,-s.range,e,o)),o++})),o}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach(((t,r)=>{r.insertOrder=e++,this._sortedMaterialRenderers.push({material:r,materialRenderer:t})})),this._sortedMaterialRenderers.sort(((e,t)=>{const r=t.material.renderPriority-e.material.renderPriority;return 0!==r?r:e.material.insertOrder-t.material.insertOrder}))}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const t=this._changes.updates.data[e];this._pending.has(t.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++}this._pending.clear()}_intersectRenderGeometry(e,t,r,i,o,a){if(!e.instanceParameters.visible)return;let s=0;(0,c.pC)(e.transformation)&&(i+=e.transformation[12],s=e.transformation[13]),Vt[0]=r[0]-i,Vt[1]=r[1]-s,Vt[2]=1,jt[0]=r[0]-i,jt[1]=r[1]-s,jt[2]=0,e.screenToWorldRatio=this.rendererContext.screenToWorldRatio,e.material.intersect(e,null,e.getShaderTransformation(),o,Vt,jt,((r,i,s)=>{!function(e,t,r,i,o,a,s){const n={layerUid:a,graphicUid:s,triangleNr:t},l=t=>{t.set(tt.q7.OVERLAY,n,e.dist,e.normal,e.transformation,r,i)};if((null==o.results.min.drapedLayerOrder||r>=o.results.min.drapedLayerOrder)&&(null==o.results.min.dist||o.results.ground.dist<=o.results.min.dist)&&l(o.results.min),o.options.store!==tt.eC.MIN&&(null==o.results.max.drapedLayerOrder||r<o.results.max.drapedLayerOrder)&&(null==o.results.max.dist||o.results.ground.dist>o.results.max.dist)&&l(o.results.max),o.options.store===tt.eC.ALL){const e=(0,et.LP)(o.ray);l(e),o.results.all.push(e)}}(t,s,e.material.renderPriority,a,o,e.layerUid,e.graphicUid)}),e.calculateShaderTransformation,t)}_notifyGraphicGeometryChanged(e){if((0,c.Wi)(this.drapeSource.notifyGraphicGeometryChanged))return;let t;for(const r of e){const e=r.graphicUid;(0,c.pC)(e)&&e!==t&&(this.drapeSource.notifyGraphicGeometryChanged(e),t=e)}}_notifyGraphicVisibilityChanged(e){if((0,c.Wi)(this.drapeSource.notifyGraphicVisibilityChanged))return;let t;for(const r of e){const e=r.graphicUid;(0,c.pC)(e)&&e!==t&&(this.drapeSource.notifyGraphicVisibilityChanged(e),t=e)}}_validateRenderGeometries(e){for(const t of e)this._validateRenderGeometry(t);return e}_validateRenderGeometry(e){return(0,c.Wi)(e.origin)&&(e.origin=this._localOriginFactory.getOrigin(e.boundingSphere)),e}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};(0,o._)([(0,p.Cb)()],Ut.prototype,"drapeSource",void 0),(0,o._)([(0,p.Cb)()],Ut.prototype,"updating",null),(0,o._)([(0,p.Cb)()],Ut.prototype,"rctx",null),(0,o._)([(0,p.Cb)()],Ut.prototype,"rendererContext",void 0),(0,o._)([(0,p.Cb)()],Ut.prototype,"_materialRepository",null),(0,o._)([(0,p.Cb)()],Ut.prototype,"_localOriginFactory",null),Ut=(0,o._)([(0,f.j)("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],Ut);class Gt{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}}const Vt=(0,v.c)(),jt=(0,v.c)();var Bt=r(31916),Wt=r(82144),Zt=r(31132),kt=r(7566),qt=r(27627),$t=r(36207);class Xt extends Zt.A{initializeProgram(e){return new qt.$(e.rctx,Xt.shader.get().build(),kt.i)}initializePipeline(){return this.configuration.hasAlpha?(0,$t.sm)({blending:(0,$t.wK)(P.zi.SRC_ALPHA,P.zi.ONE,P.zi.ONE_MINUS_SRC_ALPHA,P.zi.ONE_MINUS_SRC_ALPHA),colorWrite:$t.BK}):(0,$t.sm)({colorWrite:$t.BK})}}Xt.shader=new Wt.J(z.a,(()=>r.e(7026).then(r.bind(r,77026))));class Yt extends U.m{constructor(){super(...arguments),this.hasAlpha=!1}}(0,o._)([(0,U.o)()],Yt.prototype,"hasAlpha",void 0);var Kt=r(25920),Jt=r(11954),Qt=r(82031),er=r(78307);let tr=class extends(W(a.Z)){constructor(e){super(e),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._handles=new n.Z,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new d.Z,this._passParameters=new z.T,this._rctx=null,this._materialRepository=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.worldToPCSRatio=1,this.events=new s.Z,this.longitudeCyclical=null}get _bindParameters(){return this._renderContext.bindParameters}get rctx(){return this._rctx}get materialRepository(){return this._materialRepository}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}initialize(){const e=this.view._stage.renderView;this._rctx=e.renderingContext;const t=e.waterTextureRepository;this._stippleTextureRepository=new Qt.h0(e.renderingContext),this._shaderTechniqueRepository=new G({rctx:this._rctx,viewingMode:_.JY.Local,stippleTextureRepository:this._stippleTextureRepository,waterTextureRepository:t}),this._renderContext=new ne(this._rctx,new _e(this._rctx,this.view.state.viewingMode),new Bt.L(this._shaderTechniqueRepository,this._rctx,(()=>{}))),this._handles.add([(0,h.YP)((()=>t.updating),(()=>this.events.emit("content-changed")),h.tX),(0,h.YP)((()=>this.spatialReference),(e=>this._localOriginFactory=new K.C(e)),h.tX),(0,h.on)((()=>this.view.allLayerViews),"after-changes",(()=>this._sortedDrapeSourceRenderersDirty=!0))]),this._materialRepository=new $(e.textureRepository,this._shaderTechniqueRepository,(e=>{(e.renderOccluded&nr)>0!==this._rendersOccluded&&this._updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating")}),(()=>this.events.emit("content-changed"))),this._bindParameters.slot=oe.r.DRAPED_MATERIAL,this._bindParameters.highlightDepthTexture=(0,Y.hf)(this._rctx),this._bindParameters.camera=ar,this._bindParameters.transparencyPassType=Kt.A.NONE,this._bindParameters.newLighting.noonFactor=0,this._bindParameters.newLighting.globalFactor=0,this._bindParameters.newLighting.set([new Jt.Mi((0,v.f)(1,1,1))]),this._handles.add(this.view.resourceController.scheduler.registerTask(er.T8.STAGE,this))}dispose(){this._handles.destroy(),this._renderers.forEach((e=>e.destroy())),this._renderers.clear(),this._debugTextureTechnique=(0,c.RY)(this._debugTextureTechnique),this._passParameters.texture=(0,c.M2)(this._passParameters.texture),this._bindParameters.highlightDepthTexture=(0,c.M2)(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=(0,c.M2)(this._shaderTechniqueRepository),this._temporaryFBO=(0,c.M2)(this._temporaryFBO),this._quadVAO=(0,c.M2)(this._quadVAO),this.disposeOverlays()}get updating(){return this._sortedDrapeSourceRenderersDirty||(0,l.oE)(this._renderers,(e=>e.updating))}get hasOverlays(){return(0,c.pC)(this._overlays)&&(0,c.pC)(this._overlayRenderTarget)}get gpuMemoryUsage(){return(0,c.pC)(this._overlayRenderTarget)?this._overlayRenderTarget.gpuMemoryUsage:0}createGeometryDrapeSourceRenderer(e){return this.createDrapeSourceRenderer(e,Ut)}createDrapeSourceRenderer(e,t,r){const i=this._renderers.get(e);(0,c.pC)(i)&&i.destroy();const o=new t({...r,rendererContext:this,drapeSource:e});return this._renderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this._handles.add((0,h.YP)((()=>e.fullOpacity),(()=>this.events.emit("content-changed"))),e),o}removeDrapeSourceRenderer(e){if((0,c.Wi)(e))return;const t=this._renderers.get(e);(0,c.Wi)(t)||(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this._handles.remove(e),t.destroy())}collectUnusedRenderTargetMemory(e){let t=!1;if((0,c.pC)(this._overlayRenderTarget))for(const r of this._overlayRenderTarget.renderTargets){const i=this.overlays[0].validTargets[r.type]||!this.overlays[1].validTargets[r.type];t=this._overlayRenderTarget.validateUsageForTarget(i,r,e)||t}return t}get overlays(){return(0,c.Pt)(this._overlays,[])}ensureDrapeTargets(e){(0,c.pC)(this._overlays)&&this._overlays.forEach((t=>t.hasTargetWithoutRasterImage=(0,u.f)(e,(e=>e.drapeTargetType===y.a.WithoutRasterImage))))}ensureDrapeSources(e){(0,c.pC)(this._overlays)&&this._overlays.forEach((t=>{t.hasDrapedFeatureSource=(0,u.f)(e,(e=>e.drapeSourceType===y.L.Features)),t.hasDrapedRasterSource=(0,u.f)(e,(e=>e.drapeSourceType===y.L.RasterImage))}))}ensureOverlays(e,t){(0,c.Wi)(this._overlays)&&(this._overlayRenderTarget=new N(this._rctx),this._overlays=[new b(C.fu.INNER,this._overlayRenderTarget),new b(C.fu.OUTER,this._overlayRenderTarget)]),this.ensureDrapeTargets(e),this.ensureDrapeSources(t)}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=(0,c.M2)(this._overlayRenderTarget),this.events.emit("textures-disposed")}get running(){return this.updating}runTask(e){this._processDrapeSources(e,(()=>!0))}_processDrapeSources(e,t){let r=!1;for(const[i,o]of this._renderers){if(e.done)break;(i.destroyed||t(i))&&o.commitChanges()&&(r=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,r=!0,this._updateSortedDrapeSourceRenderers()),r&&((0,c.pC)(this._overlays)&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.events.emit("content-changed"),this._updateHasHighlights(),this._updateRendersOccluded(),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(er.G5,(e=>e.updatePolicy===S.jq.SYNC))}isEmpty(){if(x.Z.OVERLAY_DRAW_DEBUG_TEXTURE)return!1;for(const e of this._renderers.values())if(!e.isEmpty)return!1;return!0}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateAnimation(e){let t=!1;return this._renderers.forEach((r=>t=r.updateAnimation(e)||t)),t}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}drawTarget(e,t,r){const i=e.canvasGeometries;if(0===i.numViews)return!1;this._screenToWorldRatio=r*e.mapUnitsPerPixel;const o=t.output;if(this.isEmpty()||o===H.H.Highlight&&!this.hasHighlights||o===H.H.Normal&&!this.hasWater||!e.hasSomeSizedView())return!1;const a=t.fbo;if(!a.isValid())return!1;const s=2*e.resolution,n=e.resolution;a.resize(s,n);const l=this._rctx;ar.pixelRatio=e.pixelRatio*r,this._renderContext.output=o,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=o===H.H.Normal?oe.r.DRAPED_WATER:oe.r.DRAPED_MATERIAL,e.applyViewport(this._rctx),a.bind(l),e.index===C.fu.INNER&&(l.setClearColor(0,0,0,0),l.clearSafe(P.lk.COLOR_BUFFER_BIT));const d=t.type===C.NH.ColorNoRasterImage?rr.ExcludeRasterImage:t.type===C.NH.Occluded?rr.OccludedOnly:rr.Normal;if(d===rr.OccludedOnly&&(this._renderContext.renderOccludedMask=nr),x.Z.OVERLAY_DRAW_DEBUG_TEXTURE&&d!==rr.OccludedOnly)for(let c=0;c<i.numViews;c++)this._setViewParameters(i.extents[c],e,ar),this._drawDebugTexture(e.resolution,or[e.index]);return this._renderers.size>0&&this._sortedRenderers.forAll((t=>{let{drapeSource:r,renderer:h}=t;if(d===rr.ExcludeRasterImage&&r.drapeSourceType===y.L.RasterImage)return;const{fullOpacity:u}=r,p=(0,c.pC)(u)&&u<1&&o===H.H.Color;p&&(this.bindTemporaryFramebuffer(this._rctx,s,n),l.clearSafe(P.lk.COLOR_BUFFER_BIT));for(let o=0;o<i.numViews;o++)this._setViewParameters(i.extents[o],e,ar),h.render(this._renderContext,this._bindParameters);p&&(0,c.pC)(this._temporaryFBO)&&(a.bind(l),this.view._stage.renderView.compositingHelper.compositeOverlay(this._renderContext.bindParameters,this._temporaryFBO.getTexture(),u,e.index))})),l.bindFramebuffer(null),a.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,t,r){(0,c.Wi)(this._temporaryFBO)&&(this._temporaryFBO=new D(e,!1)),this._temporaryFBO.resize(t,r),this._temporaryFBO.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,t,r,i){let o=0;for(const a of this._renderers.values())o=a.intersect?.(e,t,r,i,o)??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const e=this.view.map.allLayers;this._renderers.forEach(((t,r)=>{const i=e.indexOf(r.layer);this._sortedRenderers.push(new ir(r,t,i<0?1/0:i))})),this._sortedRenderers.sort(((e,t)=>e.index-t.index))}_setViewParameters(e,t,r){r.viewport[0]=r.viewport[1]=0,r.viewport[2]=r.viewport[3]=t.resolution,(0,g.w)(r.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],r.near,r.far),(0,g.f)(r.viewMatrix,[-e[0],-e[1],0]),this._bindParameters.camera=r}_updateHasWater(){const e=(0,l.oE)(this._renderers,(e=>e.hasWater));e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e))}_updateHasHighlights(){const e=(0,l.oE)(this._renderers,(e=>e.hasHighlights));e!==this._hasHighlights&&(this._hasHighlights=e,this.events.emit("has-highlights",e))}_updateRendersOccluded(){const e=(0,l.oE)(this._renderers,(e=>e.rendersOccluded));e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e))}_drawDebugTexture(e,t){this._ensureDebugPatternResources(e,e,t);const r=this._rctx;r.bindTechnique(this._debugTextureTechnique,this._passParameters,null),r.bindVAO(this._quadVAO),r.drawArrays(P.MX.TRIANGLE_STRIP,0,(0,me._V)(this._quadVAO,"geometry"))}_ensureDebugPatternResources(e,t,r){if((0,m.s)(this._passParameters.color,r[0],r[1],r[2]),this._passParameters.texture)return;const i=new Uint8Array(e*t*4);let o=0;for(let s=0;s<t;s++)for(let r=0;r<e;r++){const a=Math.floor(r/10),n=Math.floor(s/10);a<2||n<2||10*a>e-20||10*n>t-20?(i[o++]=255,i[o++]=255,i[o++]=255,i[o++]=255):(i[o++]=255,i[o++]=255,i[o++]=255,i[o++]=1&a&&1&n?1&r^1&s?0:255:1&a^1&n?0:128)}this._passParameters.texture=new ge.x(this._rctx,{target:P.No.TEXTURE_2D,pixelFormat:P.VI.RGBA,dataType:P.Br.UNSIGNED_BYTE,samplingMode:P.cw.NEAREST,width:e,height:t},i);const a=new Yt;a.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(Xt,a),this._quadVAO=(0,Y.ow)(this._rctx)}get test(){return{drapeSourceRenderers:this._renderers,getDrapeSourceRenderer:e=>this._renderers.get(e)}}};var rr;(0,o._)([(0,p.Cb)()],tr.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,o._)([(e,t)=>{e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=e._managedDisposables?.slice()??[]),e._managedDisposables?.unshift(t)}],tr.prototype,"_shaderTechniqueRepository",void 0),(0,o._)([(e,t)=>{e.hasOwnProperty("_managedDisposables")||(e._managedDisposables=e._managedDisposables?.slice()??[]),e._managedDisposables?.unshift(t)}],tr.prototype,"_stippleTextureRepository",void 0),(0,o._)([(0,p.Cb)({constructOnly:!0})],tr.prototype,"view",void 0),(0,o._)([(0,p.Cb)()],tr.prototype,"worldToPCSRatio",void 0),(0,o._)([(0,p.Cb)()],tr.prototype,"spatialReference",void 0),(0,o._)([(0,p.Cb)({type:Boolean,readOnly:!0})],tr.prototype,"updating",null),tr=(0,o._)([(0,f.j)("esri.views.3d.terrain.OverlayRenderer")],tr),function(e){e[e.Normal=0]="Normal",e[e.OccludedOnly=1]="OccludedOnly",e[e.ExcludeRasterImage=2]="ExcludeRasterImage"}(rr||(rr={}));class ir{constructor(e,t,r){this.drapeSource=e,this.renderer=t,this.index=r}}const or=[[1,.5,.5],[.5,.5,1]],ar=new Z.V;ar.near=1,ar.far=1e4,ar.relativeElevation=null;const sr=-2,nr=J.yD.OccludeAndTransparent},54134:(e,t,r)=>{var i,o,a,s,n,l,c;r.d(t,{NH:()=>n,Xo:()=>a,fu:()=>i}),function(e){e[e.INNER=0]="INNER",e[e.OUTER=1]="OUTER"}(i||(i={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",e[e.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",e[e.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(o||(o={})),function(e){e[e.NORTH=0]="NORTH",e[e.NORTH_EAST=1]="NORTH_EAST",e[e.EAST=2]="EAST",e[e.SOUTH_EAST=3]="SOUTH_EAST",e[e.SOUTH=4]="SOUTH",e[e.SOUTH_WEST=5]="SOUTH_WEST",e[e.WEST=6]="WEST",e[e.NORTH_WEST=7]="NORTH_WEST"}(a||(a={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(s||(s={})),function(e){e[e.Color=0]="Color",e[e.ColorNoRasterImage=1]="ColorNoRasterImage",e[e.Highlight=2]="Highlight",e[e.Water=3]="Water",e[e.Occluded=4]="Occluded",e[e.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(n||(n={})),function(e){e[e.FADING=0]="FADING",e[e.IMMEDIATE=1]="IMMEDIATE",e[e.UNFADED=2]="UNFADED"}(l||(l={})),function(e){e[e.INSIDE=0]="INSIDE",e[e.INTERSECTS=1]="INTERSECTS",e[e.OUTSIDE=2]="OUTSIDE"}(c||(c={}))},28156:(e,t,r)=>{r.d(t,{H:()=>o});var i=r(98634);function o(e){const t=i.H`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`,r=i.H`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`;e.vertex.code.add(t),e.vertex.code.add(r),e.fragment.code.add(t),e.fragment.code.add(r)}},50600:(e,t,r)=>{r.d(t,{R:()=>p,d:()=>a});var i,o=r(49223);!function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"}(i||(i={}));var a,s=r(62993),n=r(82552),l=r(95276),c=r(58406),d=r(98634),h=r(19253),u=r(4760);function p(e,t){e.include(s.cK),e.attributes.add(u.T.POSITION,"vec3"),e.attributes.add(u.T.NORMAL,"vec3"),e.attributes.add(u.T.AUXPOS1,"vec4");const r=e.vertex;(0,n.Sv)(r,t),(0,n.hY)(r,t),r.uniforms.add([new l.N("viewport",((e,t)=>t.camera.fullViewport)),new c.p("polygonOffset",(e=>e.shaderPolygonOffset)),new c.p("cameraGroundRelative",((e,t)=>t.camera.aboveGround?1:-1)),new c.p("renderTransparentlyOccludedHUD",((e,t)=>t.renderTransparentlyOccludedHUD===i.Occluded?1:t.renderTransparentlyOccludedHUD===i.NotOccluded?0:.75)),new h.A("hudVisibilityTexture",((e,t)=>t.hudVisibilityTexture))]),t.hasVerticalOffset&&(0,o.V)(r),r.constants.add("smallOffsetAngle","float",.984807753012208),r.code.add(d.H`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),r.code.add(d.H`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),t.isDraped&&!t.hasVerticalOffset||(0,n._8)(r),t.isDraped||(r.uniforms.add(new c.p("perDistancePixelRatio",((e,t)=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2)))),r.code.add(d.H`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),t.screenCenterOffsetUnitsEnabled===a.Screen&&r.uniforms.add(new c.p("pixelRatio",((e,t)=>t.camera.pixelRatio))),t.hasScreenSizePerspective&&(0,s.m8)(r),r.code.add(d.H`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${t.isDraped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${t.hasScreenSizePerspective&&(t.hasVerticalOffset||t.screenCenterOffsetUnitsEnabled===a.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${t.hasVerticalOffset?t.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${t.hasVerticalOffset?d.H`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${t.screenCenterOffsetUnitsEnabled!==a.Screen?d.H`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${t.screenCenterOffsetUnitsEnabled===a.Screen?t.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${t.screenCenterOffsetUnitsEnabled===a.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),r.code.add(d.H`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}!function(e){e[e.World=0]="World",e[e.Screen=1]="Screen",e[e.COUNT=2]="COUNT"}(a||(a={}))},50913:(e,t,r)=>{r.d(t,{R:()=>h});var i=r(21002),o=r(43565),a=r(78980),s=r(75993),n=r(82999),l=r(98634),c=r(19253),d=r(97528);function h(e,t){const{vertex:r,fragment:h}=e;t.hasMultipassGeometry&&r.include(o.S),t.hasMultipassTerrain&&e.varyings.add("depth","float"),r.code.add(l.H`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${t.hasMultipassGeometry?l.H`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${t.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.hasMultipassTerrain&&h.include(i.S),t.hasMultipassTerrain&&h.uniforms.add([...(0,c.J)("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture),t.hasWebGL2Context?d.D.None:d.D.InvSize),new n.A("nearFar",((e,t)=>t.camera.nearFar))]),h.include(a.n),h.code.add(l.H`
  void main() {
    gl_FragColor = vec4(1, 1, 1, 1);
    ${t.hasMultipassTerrain?l.H`
          vec2 uv = gl_FragCoord.xy;

          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = ${(0,s.b6)(t,"terrainDepthTexture","uv")};

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            gl_FragColor.g = 0.5;
          }`:""}
  }
  `)}},7683:(e,t,r)=>{r.d(t,{E:()=>a,K:()=>o});var i=r(98634);function o(e){e.fragment.code.add(i.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function a(e){e.fragment.code.add(i.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},43565:(e,t,r)=>{r.d(t,{S:()=>n,_:()=>l});var i=r(21002),o=r(82999),a=r(98634),s=r(19253);function n(e){e.include(i.S),e.uniforms.add([new s.A("geometryDepthTexture",((e,t)=>t.multipassGeometry.linearDepthTexture)),new o.A("nearFar",((e,t)=>t.camera.nearFar))]),e.code.add(a.H`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}class l{constructor(){this.enabled=!1}}},8555:(e,t,r)=>{r.d(t,{n:()=>o});var i=r(98634);function o(e,t){t.spherical?e.vertex.code.add(i.H`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):e.vertex.code.add(i.H`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),t.spherical?e.vertex.code.add(i.H`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):e.vertex.code.add(i.H`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}},40854:(e,t,r)=>{r.d(t,{O:()=>h,P:()=>d});var i=r(81949),o=r(21002),a=r(82999),s=r(58406),n=r(98634),l=r(8654),c=r(19253);function d(e,t){const r=e.fragment;r.include(o.S),r.uniforms.add(new a.A("nearFar",((e,t)=>t.camera.nearFar))),r.uniforms.add(new c.A("depthMap",((e,t)=>t.linearDepthTexture))),r.uniforms.add(new l.g("proj",((e,t)=>t.ssr.camera.projectionMatrix))),r.uniforms.add(new s.p("invResolutionHeight",((e,t)=>1/t.ssr.camera.height))),r.uniforms.add(new l.g("reprojectionMatrix",((e,t)=>t.ssr.reprojectionMatrix))),r.code.add(n.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${t.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}class h{constructor(){this.reprojectionMatrix=(0,i.c)()}}},77652:(e,t,r)=>{r.d(t,{B:()=>T});var i=r(7683),o=r(98634);function a(e){e.fragment.code.add(o.H`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}var s=r(2116),n=r(40854),l=r(16889),c=r(92026),d=r(22186),h=r(91226),u=r(46208),p=r(92395),f=r(13773),g=r(49450),m=r(58406),v=r(8654),_=r(61809),y=r(99340);class x extends _.x{constructor(e,t){super(e,"samplerCube",y.P.Pass,((r,i,o)=>r.bindTexture(e,t(i,o))))}}function C(e){const t=e.fragment;t.uniforms.add([new v.g("rotationMatrixClouds",((e,t)=>t.cloudsFade.parallax.transform)),new v.g("rotationMatrixCloudsCrossFade",((e,t)=>t.cloudsFade.parallaxNew.transform)),new g.J("anchorPosition",((e,t)=>t.cloudsFade.parallax.anchorPointClouds)),new g.J("anchorPositionCrossFade",((e,t)=>t.cloudsFade.parallaxNew.anchorPointClouds)),new m.p("cloudsHeight",((e,t)=>t.cloudsFade.parallax.cloudsHeight)),new m.p("radiusCurvatureCorrectionFactor",((e,t)=>t.cloudsFade.parallax.radiusCurvatureCorrectionFactor)),new m.p("totalFadeInOut",((e,t)=>t.cloudsFade.fadeInOut.stage===h.co.FINISHED?t.cloudsFade.fadeInOutHeight.factor+1-t.cloudsFade.fadeIn.factor:t.cloudsFade.fadeInOutHeight.factor+1-t.cloudsFade.fadeInOut.factor)),new m.p("crossFadeAnchorFactor",((e,t)=>(0,l.uZ)(t.cloudsFade.crossFade.factor,0,1))),new x("cubeMap",((e,t)=>(0,c.pC)(t.cloudsFade.data)&&(0,c.pC)(t.cloudsFade.data.cubeMap)?t.cloudsFade.data.cubeMap.colorTexture:null)),new f.U("crossFade",((e,t)=>t.cloudsFade.crossFade.enabled)),new f.U("readChannelsRG",((e,t)=>t.cloudsFade.readChannels===u.uz.RG)),new f.U("fadeTextureChannels",((e,t)=>t.cloudsFade.renderingStage===u.jL.FADING_TEXTURE_CHANNELS))]),t.constants.add("planetRadius","float",d.sv.radius),t.code.add(o.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),t.code.add(o.H`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),t.code.add(o.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),(0,p.Pe)(t),(0,p.F1)(t),t.code.add(o.H`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),t.code.add(o.H`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`),t.code.add(o.H`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),t.code.add(o.H`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),t.code.add(o.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}var w=r(19253);function T(e,t){e.include(s.T,t),e.include(a),e.include(i.E),t.hasCloudsReflections&&e.include(C,t),t.hasScreenSpaceReflections&&e.include(n.P,t);const r=e.fragment;r.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(o.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add([new m.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new m.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(o.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),t.hasCloudsReflections&&r.code.add(o.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y*cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),t.hasScreenSpaceReflections?(r.uniforms.add(new v.g("view",((e,t)=>t.ssr.camera.viewMatrix))),r.uniforms.add(new w.A("lastFrameColorMap",((e,t)=>t.ssr.lastFrameColorTexture))),r.code.add(o.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3*dCoords.y), 0.0, 1.0) * heightMod;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture2D(lastFrameColorMap, reprojectedCoordinate).xyz)* reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod*0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor + reflSea * seaColorMod + specular  + foam);`)):r.code.add(o.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),t.hasCloudsReflections?t.hasScreenSpaceReflections?r.code.add(o.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(o.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(o.H`return waterRenderedColor;
}`)}},79246:(e,t,r)=>{r.d(t,{M:()=>u});var i=r(88396),o=r(6394),a=r(90045),s=r(67077),n=r(7683),l=r(82999),c=r(95276),d=r(98634),h=r(19253);function u(e){e.fragment.uniforms.add(new h.A("texWaveNormal",(e=>e.waveNormal))),e.fragment.uniforms.add(new h.A("texWavePerturbation",(e=>e.wavePertubation))),e.fragment.uniforms.add([new c.N("waveParams",(e=>(0,a.s)(p,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset))),new l.A("waveDirection",(e=>(0,i.s)(f,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity)))]),e.include(n.K),e.fragment.code.add(d.H`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture2D(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture2D(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}const p=(0,s.c)(),f=(0,o.a)()},94425:(e,t,r)=>{r.d(t,{p:()=>a});var i=r(92026),o=r(68401);class a{constructor(e,t){this._material=e,this._repository=t,this._map=new Map}destroy(){this._map.forEach(((e,t)=>{(0,i.pC)(e)&&this._repository.release(this._material,t)}))}load(e,t,r){if(!this._material.requiresSlot(t,r))return null;this._map.has(r)||this._map.set(r,this._repository.acquire(this._material,t,r));const a=this._map.get(r);if((0,i.pC)(a)){if(a.ensureResources(e)===o.Rw.LOADED)return a;this._repository.requestRender()}return null}}},87145:(e,t,r)=>{r.d(t,{C:()=>_});var i=r(92026),o=r(95439),a=r(81949),s=r(11186),n=r(71353),l=r(67077),c=r(79803),d=r(68401),h=r(74894),u=r(61403),p=r(59887);const f=null;var g=r(4760),m=r(97882),v=r(58901);class _{constructor(e){this._originSR=e,this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._rootOriginId="root/"+(0,o.D)()}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(null==t){const t=f;if((0,i.pC)(t))return this._origins.set(this._rootOriginId,(0,u.a)(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);const r=(0,u.a)(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,r),r}const r=this._gridSize,o=Math.round(e[0]/r),a=Math.round(e[1]/r),n=Math.round(e[2]/r),l=`${o}/${a}/${n}`;let c=this._origins.get(l);const d=.5*r;if((0,s.b)(y,e,t.vec3),y[0]=Math.abs(y[0]),y[1]=Math.abs(y[1]),y[2]=Math.abs(y[2]),y[0]<d&&y[1]<d&&y[2]<d){if(c){const t=Math.max(...y);if((0,s.b)(y,e,c.vec3),y[0]=Math.abs(y[0]),y[1]=Math.abs(y[1]),y[2]=Math.abs(y[2]),Math.max(...y)<t)return c}return t}return c||(c=(0,u.a)(o*r,a*r,n*r,l),this._origins.set(l,c)),c}_drawOriginBox(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,l.f)(1,1,0,1);const r=window.view,i=r._stage,o=t.toString();if(!this._objects.has(o)){this._material=new v.U({width:2,color:t}),i.add(this._material);const e=new m.F({isPickable:!1}),r=new p.T({castShadow:!1});i.add(r),e.add(r),i.add(e),this._objects.set(o,r)}const s=this._objects.get(o),n=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],u=n.length,f=new Array(3*u),_=new Array,y=.5*this._gridSize;for(let a=0;a<u;a++)f[3*a+0]=e[0]+(1&n[a]?y:-y),f[3*a+1]=e[1]+(2&n[a]?y:-y),f[3*a+2]=e[2]+(4&n[a]?y:-y),a>0&&_.push(a-1,a);(0,c.CM)(f,this._originSR,0,f,r.renderSpatialReference,0,u);const x=new h.Z([[g.T.POSITION,{size:3,data:f,exclusive:!0}]],[[g.T.POSITION,_]],d.MX.Line);i.add(x),s.addGeometry(x,this._material,a.I)}get test(){const e=this;return{set gridSize(t){e._gridSize=t}}}}const y=(0,n.c)()},61403:(e,t,r)=>{r.d(t,{a:()=>a});var i=r(71353);class o{constructor(e,t){this.vec3=e,this.id=t}}function a(e,t,r,a){return new o((0,i.f)(e,t,r),a)}},78289:(e,t,r)=>{var i,o;r.d(t,{$:()=>o,T:()=>i}),function(e){e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.REMOVE=2]="REMOVE"}(i||(i={})),function(e){e[e.NONE=0]="NONE",e[e.VISIBILITIES=1]="VISIBILITIES",e[e.VERTEXATTRS=2]="VERTEXATTRS",e[e.TRANSFORMATION=4]="TRANSFORMATION",e[e.HIGHLIGHTS=8]="HIGHLIGHTS",e[e.OCCLUDEES=16]="OCCLUDEES"}(o||(o={}))},69831:(e,t,r)=>{r.d(t,{z:()=>m});var i=r(92026),o=r(95439),a=r(14226),s=r(81949),n=r(11186),l=r(67077),c=r(80064),d=r(68401),h=r(81955);class u{constructor(){this.visible=!0}}var p=r(47669),f=r(4760),g=r(32683);class m{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.data=e,this.material=t,this.boundingSphere=(0,l.c)(),this.instanceParameters=new u,this._transformation=(0,s.c)(),this._shaderTransformationDirty=!0,this.layerUid=(0,i.Pt)(r.layerUid,null),this.graphicUid=(0,i.Pt)(r.graphicUid,null),this.id=r.id?r.id:(0,o.D)(),this.boundingInfo=(0,i.Pt)(r.boundingInfo,null),this.calculateShaderTransformation=(0,i.Pt)(r.calculateShaderTransformation,null),this.castShadow=!!r.castShadow&&r.castShadow}get transformation(){return this._transformation}updateTransformation(e){e(this._transformation),this._shaderTransformationDirty=!0,this.computeBoundingSphere(this._transformation,this.boundingSphere)}shaderTransformationChanged(){this._shaderTransformationDirty=!0}computeBoundingSphere(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,c.u1)(e);(0,i.Wi)(this.boundingInfo)||((0,n.m)(t,this.boundingInfo.getCenter(),e),t[3]=this.boundingInfo.getBSRadius()*r)}get hasShaderTransformation(){return(0,i.pC)(this.calculateShaderTransformation)}get primitiveType(){return this.data.primitiveType}getShaderTransformation(){return(0,i.Wi)(this.calculateShaderTransformation)?(0,i.Pt)(this.transformation,s.I):(this._shaderTransformationDirty&&(this._shaderTransformation||(this._shaderTransformation=(0,s.c)()),(0,a.c)(this._shaderTransformation,this.calculateShaderTransformation((0,i.Pt)(this.transformation,s.I))),this._shaderTransformationDirty=!1),this._shaderTransformation)}computeAttachmentOrigin(e){if(this.material.computeAttachmentOrigin)return!!this.material.computeAttachmentOrigin(this,e)&&((0,i.pC)(this._transformation)&&(0,n.m)(e,e,this._transformation),!0);const t=this.indices.get(f.T.POSITION),r=this.vertexAttributes.get(f.T.POSITION);return!!(0,h.cM)(r,t,e)&&((0,i.pC)(this._transformation)&&(0,n.m)(e,e,this._transformation),!0)}get indices(){return this.data.indices}get vertexAttributes(){return this.data.vertexAttributes}addHighlight(){const e=new p.O(d.V_.Highlight),t=this.instanceParameters;return t.highlights=(0,g.lr)(t.highlights,e),e}removeHighlight(e){const t=this.instanceParameters;t.highlights=(0,g.U_)(t.highlights,e)}}},21400:(e,t,r)=>{r.d(t,{A:()=>X});var i=r(93169),o=r(16889),a=r(92026),s=r(22753),n=r(11873),l=r(14226),c=r(81949),d=r(88396),h=r(6394),u=r(11186),p=r(71353),f=r(67077);function g(e){return function(e){return e instanceof Float32Array&&e.length>=16}(e)||function(e){return Array.isArray(e)&&e.length>=16}(e)}var m=r(65156),v=r(25158),_=r(55158),y=r(37081),x=r(50600),C=r(81955),w=r(17363),T=r(56529),S=r(93822),O=r(65216),b=r(97731),R=r(4760),A=r(33236),P=r(22909),E=r(32683),D=r(18442),I=r(50951),H=r(82144),M=r(31132),N=r(7566),F=r(78041),z=r(27627),L=r(25920),U=r(49800),G=r(8548),V=r(36207);class j extends M.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===U.zO.WEBGL2,t.spherical=e.viewingMode===I.JY.Global}initializeProgram(e){return new z.$(e.rctx,j.shader.get().build(this.configuration),N.i)}_setPipelineState(e){const t=this.configuration,r=e===L.A.NONE,i=e===L.A.FrontFace,o=this.configuration.hasPolygonOffset&&B,a=(r||i)&&t.output!==y.H.Highlight?(t.depthEnabled||t.occlusionPass)&&V.LZ:null;return(0,V.sm)({blending:t.output===y.H.Color||t.output===y.H.Alpha||t.output===y.H.Highlight?r?W:(0,F.j7)(e):null,depthTest:{func:G.wb.LEQUAL},depthWrite:a,colorWrite:V.BK,polygonOffset:o})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.occlusionPass?G.MX.POINTS:G.MX.TRIANGLES}}j.shader=new H.J(D.H,(()=>r.e(6823).then(r.bind(r,16823))));const B={factor:0,units:-4},W=(0,V.if)(G.zi.ONE,G.zi.ONE_MINUS_SRC_ALPHA);var Z=r(27366),k=r(33559),q=r(8883);class $ extends q.W{constructor(){super(...arguments),this.output=y.H.Color,this.screenCenterOffsetUnitsEnabled=x.d.World,this.transparencyPassType=L.A.NONE,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusionEnabled=!0,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.isDraped=!1,this.hasMultipassGeometry=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}(0,Z._)([(0,k.o)({count:y.H.COUNT})],$.prototype,"output",void 0),(0,Z._)([(0,k.o)({count:x.d.COUNT})],$.prototype,"screenCenterOffsetUnitsEnabled",void 0),(0,Z._)([(0,k.o)({count:L.A.COUNT})],$.prototype,"transparencyPassType",void 0),(0,Z._)([(0,k.o)()],$.prototype,"spherical",void 0),(0,Z._)([(0,k.o)()],$.prototype,"occlusionTestEnabled",void 0),(0,Z._)([(0,k.o)()],$.prototype,"signedDistanceFieldEnabled",void 0),(0,Z._)([(0,k.o)()],$.prototype,"vvSize",void 0),(0,Z._)([(0,k.o)()],$.prototype,"vvColor",void 0),(0,Z._)([(0,k.o)()],$.prototype,"hasVerticalOffset",void 0),(0,Z._)([(0,k.o)()],$.prototype,"hasScreenSizePerspective",void 0),(0,Z._)([(0,k.o)()],$.prototype,"debugDrawLabelBorder",void 0),(0,Z._)([(0,k.o)()],$.prototype,"binaryHighlightOcclusionEnabled",void 0),(0,Z._)([(0,k.o)()],$.prototype,"hasSlicePlane",void 0),(0,Z._)([(0,k.o)()],$.prototype,"hasPolygonOffset",void 0),(0,Z._)([(0,k.o)()],$.prototype,"depthEnabled",void 0),(0,Z._)([(0,k.o)()],$.prototype,"pixelSnappingEnabled",void 0),(0,Z._)([(0,k.o)()],$.prototype,"isDraped",void 0),(0,Z._)([(0,k.o)()],$.prototype,"hasMultipassGeometry",void 0),(0,Z._)([(0,k.o)()],$.prototype,"hasMultipassTerrain",void 0),(0,Z._)([(0,k.o)()],$.prototype,"cullAboveGround",void 0),(0,Z._)([(0,k.o)()],$.prototype,"occlusionPass",void 0),(0,Z._)([(0,k.o)()],$.prototype,"objectAndLayerIdColorInstanced",void 0),(0,Z._)([(0,k.o)({constValue:!0})],$.prototype,"hasSliceInVertexProgram",void 0),(0,Z._)([(0,k.o)({constValue:!1})],$.prototype,"hasVvInstancing",void 0);class X extends T.F5{constructor(e){super(e,new ge),this._configuration=new $}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled="screen"===this.parameters.centerOffsetUnits?x.d.Screen:x.d.World,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.isDraped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.vvSize=!!this.parameters.vvSizeEnabled,this._configuration.vvColor=!!this.parameters.vvColorEnabled,this._configuration.occlusionPass=t.slot===S.r.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===y.H.Color||e===y.H.Alpha),e===y.H.Color&&(this._configuration.debugDrawLabelBorder=!!this.parameters.debugDrawLabelBorder),e===y.H.Highlight&&(this._configuration.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.hasMultipassGeometry=t.multipassGeometry.enabled,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(e,t,r,i,o,s,n,l,c){(0,a.pC)(c)?this._intersectDrapedHudGeometry(e,s,n,l,c):this._intersectHudGeometry(e,t,r,i,n,l)}_intersectDrapedHudGeometry(e,t,r,i,o){const s=e.vertexAttributes.get(R.T.POSITION),n=e.vertexAttributes.get(R.T.SIZE),l=this.parameters,c=(0,D.c)(l);let d=1,h=1;if((0,a.pC)(i)){const e=i(de);d=e[0],h=e[5]}d*=e.screenToWorldRatio,h*=e.screenToWorldRatio;const u=ue*e.screenToWorldRatio;for(let a=0;a<s.data.length/s.size;a++){const i=a*s.size,p=s.data[i],f=s.data[i+1],g=a*n.size;let m;pe[0]=n.data[g]*d,pe[1]=n.data[g+1]*h,l.textureIsSignedDistanceField&&(m=l.outlineSize*e.screenToWorldRatio/2),K(t,p,f,pe,u,m,l,c)&&r(o.dist,o.normal,-1,!1)}}_intersectHudGeometry(e,t,r,i,o,n){if(!i.options.selectionMode||!i.options.hud||(0,E.PD)(t))return;const c=this.parameters;let d=1,h=1;if((0,s.f)(ae,r),(0,a.pC)(n)){const e=n(de);d=e[0],h=e[5],function(e){const t=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],n=e[6],l=e[7],c=e[8],d=1/Math.sqrt(t*t+r*r+i*i),h=1/Math.sqrt(o*o+a*a+s*s),u=1/Math.sqrt(n*n+l*l+c*c);e[0]=t*d,e[1]=r*d,e[2]=i*d,e[3]=o*h,e[4]=a*h,e[5]=s*h,e[6]=n*u,e[7]=l*u,e[8]=c*u}(ae)}const f=e.vertexAttributes.get(R.T.POSITION),g=e.vertexAttributes.get(R.T.SIZE),m=e.vertexAttributes.get(R.T.NORMAL),v=e.vertexAttributes.get(R.T.AUXPOS1);(0,b.hu)(f.size>=3);const _=i.point,y=i.camera,x=(0,D.c)(c);d*=y.pixelRatio,h*=y.pixelRatio;const C="screen"===this.parameters.centerOffsetUnits;for(let a=0;a<f.data.length/f.size;a++){const e=a*f.size;(0,u.s)(ee,f.data[e],f.data[e+1],f.data[e+2]),(0,u.m)(ee,ee,r);const t=a*g.size;pe[0]=g.data[t]*d,pe[1]=g.data[t+1]*h,(0,u.m)(ee,ee,y.viewMatrix);const s=a*v.size;if((0,u.s)(le,v.data[s+0],v.data[s+1],v.data[s+2]),!C&&(ee[0]+=le[0],ee[1]+=le[1],0!==le[2])){const e=le[2];(0,u.n)(le,ee),(0,u.b)(ee,ee,(0,u.g)(le,le,e))}const n=a*m.size;if((0,u.s)(te,m.data[n],m.data[n+1],m.data[n+2]),this._normalAndViewAngle(te,ae,y,ce),this._applyVerticalOffsetTransformationView(ee,ce,y,J),y.applyProjection(ee,re),re[0]>-1){re[0]=Math.floor(re[0]),re[1]=Math.floor(re[1]),C&&(le[0]||le[1])&&(re[0]+=le[0],0!==le[1]&&(re[1]+=(0,O.sX)(le[1],J.factorAlignment)),y.unapplyProjection(re,ee)),re[0]+=this.parameters.screenOffset[0],re[1]+=this.parameters.screenOffset[1],(0,O.TU)(pe,J.factor,pe);const e=he*y.pixelRatio;let t;if(c.textureIsSignedDistanceField&&(t=c.outlineSize*y.pixelRatio/2),K(_,re[0],re[1],pe,e,t,c,x)){const e=i.ray;if((0,u.m)(oe,ee,(0,l.a)(ne,y.viewMatrix)),re[0]=_[0],re[1]=_[1],y.unprojectFromRenderScreen(re,ee)){const t=(0,p.c)();(0,u.c)(t,e.direction);const r=1/(0,u.l)(t);(0,u.g)(t,t,r),o((0,u.i)(e.origin,ee)*r,t,-1,!0,1,oe)}}}}}computeAttachmentOrigin(e,t){const r=e.vertexAttributes;if(!r)return!1;const i=r.get(R.T.POSITION),o=e.indices.get(R.T.POSITION);return(0,C.NO)(i,o,t)}createBufferWriter(){return new _e(this)}_normalAndViewAngle(e,t,r,i){return g(t)&&(t=(0,s.f)(se,t)),(0,u.t)(i.normal,e,t),(0,u.m)(i.normal,i.normal,r.viewInverseTransposeMatrix),i.cosAngle=(0,u.e)(ie,fe),i}_updateScaleInfo(e,t,r){const i=this.parameters;(0,a.pC)(i.screenSizePerspective)?(0,O.PV)(r,t,i.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),(0,a.pC)(i.screenSizePerspectiveAlignment)?(0,O.PV)(r,t,i.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,t,r,i,o,a,s){const n=this._normalAndViewAngle(t,r,o,ce);return this._applyVerticalGroundOffsetView(e,n,o,s),this._applyVerticalOffsetTransformationView(s,n,o,a),this._applyPolygonOffsetView(s,n,i[3],o,s),this._applyCenterOffsetView(s,i,s),s}applyShaderOffsetsNDC(e,t,r,i,o){return this._applyCenterOffsetNDC(e,t,r,i),(0,a.pC)(o)&&(0,u.c)(o,i),this._applyPolygonOffsetNDC(i,t,r,i),i}_applyPolygonOffsetView(e,t,r,i,a){const s=i.aboveGround?1:-1;let n=Math.sign(r);0===n&&(n=s);const l=s*n;if(this.parameters.shaderPolygonOffset<=0)return(0,u.c)(a,e);const c=(0,o.uZ)(Math.abs(t.cosAngle),.01,1),d=1-Math.sqrt(1-c*c)/c/i.viewport[2];return(0,u.g)(a,e,l>0?d:1/d),a}_applyVerticalGroundOffsetView(e,t,r,i){const o=(0,u.l)(e),a=r.aboveGround?1:-1,s=.5*r.computeRenderPixelSizeAtDist(o),n=(0,u.g)(ee,t.normal,a*s);return(0,u.a)(i,e,n),i}_applyVerticalOffsetTransformationView(e,t,r,i){const o=this.parameters;if(!o.verticalOffset||!o.verticalOffset.screenLength){if(o.screenSizePerspective||o.screenSizePerspectiveAlignment){const r=(0,u.l)(e);this._updateScaleInfo(i,r,t.cosAngle)}else i.factor.scale=1,i.factorAlignment.scale=1;return e}const s=(0,u.l)(e),n=(0,a.Pt)(o.screenSizePerspectiveAlignment,o.screenSizePerspective),l=(0,P.Hx)(r,s,o.verticalOffset,t.cosAngle,n);return this._updateScaleInfo(i,s,t.cosAngle),(0,u.g)(t.normal,t.normal,l),(0,u.a)(e,e,t.normal)}_applyCenterOffsetView(e,t,r){const i="screen"!==this.parameters.centerOffsetUnits;return r!==e&&(0,u.c)(r,e),i&&(r[0]+=t[0],r[1]+=t[1],t[2]&&((0,u.n)(te,r),(0,u.a)(r,r,(0,u.g)(te,te,t[2])))),r}_applyCenterOffsetNDC(e,t,r,i){const o="screen"!==this.parameters.centerOffsetUnits;return i!==e&&(0,u.c)(i,e),o||(i[0]+=t[0]/r.fullWidth*2,i[1]+=t[1]/r.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,r,i){const o=this.parameters.shaderPolygonOffset;if(e!==i&&(0,u.c)(i,e),o){const e=r.aboveGround?1:-1,a=e*Math.sign(t[3]);i[2]-=(a||e)*o}return i}requiresSlot(e,t){if(t===y.H.Color||t===y.H.Alpha||t===y.H.Highlight||t===y.H.ObjectAndLayerIdColor){if(e===S.r.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:t,occlusionTest:r}=this.parameters;return e===(t?S.r.LABEL_MATERIAL:S.r.HUD_MATERIAL)||r&&e===S.r.OCCLUSION_PIXELS}return!1}createGLMaterial(e){return new Y(e)}calculateRelativeScreenBounds(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,m.Ue)();return function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Q;(0,d.c)(i,e.anchorPosition),i[0]*=-t[0],i[1]*=-t[1],i[0]+=e.screenOffset[0]*r,i[1]+=e.screenOffset[1]*r}(this.parameters,e,t,r),r[2]=r[0]+e[0],r[3]=r[1]+e[1],r}}class Y extends w.F{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(j,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function K(e,t,r,i,o,s,n,l){let c=t-o-(l[0]>0?i[0]*l[0]:0),d=c+i[0]+2*o,h=r-o-(l[1]>0?i[1]*l[1]:0),u=h+i[1]+2*o;const p=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&(0,a.pC)(p)&&(c+=i[0]*p[0],h+=i[1]*p[1],d-=i[0]*(1-p[2]),u-=i[1]*(1-p[3]),c-=s,d+=s,h-=s,u+=s),e[0]>c&&e[0]<d&&e[1]>h&&e[1]<u}const J={factor:{scale:0,factor:0,minPixelSize:0,paddingPixels:0},factorAlignment:{scale:0,factor:0,minPixelSize:0,paddingPixels:0}},Q=(0,h.a)(),ee=(0,p.c)(),te=(0,p.c)(),re=(0,f.c)(),ie=(0,p.c)(),oe=(0,p.c)(),ae=(0,n.c)(),se=(0,n.c)(),ne=(0,c.c)(),le=(0,p.c)(),ce={normal:ie,cosAngle:0},de=(0,c.c)(),he=1,ue=2,pe=[0,0],fe=(0,p.f)(0,0,1);class ge extends w.E{constructor(){super(...arguments),this.renderOccluded=T.yD.Occlude,this.color=(0,f.f)(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=(0,h.f)(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.outlineColor=(0,f.f)(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.binaryHighlightOcclusion=!0,this.debugDrawLabelBorder=!1,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const me=(0,_.U$)().vec3f(R.T.POSITION).vec3f(R.T.NORMAL).vec2f(R.T.UV0).vec4u8(R.T.COLOR).vec2f(R.T.SIZE).vec4f(R.T.AUXPOS1).vec4f(R.T.AUXPOS2),ve=me.clone().vec4u8(R.T.OBJECTANDLAYERIDCOLOR);class _e{constructor(e){this._material=e,this.vertexBufferLayout=(0,i.Z)("enable-feature:objectAndLayerId-rendering")?ve:me}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return 6*e.indices.get(R.T.POSITION).length}write(e,t,r,i,o){(0,A.ho)(r.indices.get(R.T.POSITION),r.vertexAttributes.get(R.T.POSITION).data,e,i.position,o,6),(0,A.s5)(r.indices.get(R.T.NORMAL),r.vertexAttributes.get(R.T.NORMAL).data,t,i.normal,o,6);{const e=r.vertexAttributes.get(R.T.UV0).data;let t,a,s,n;if(null==e||e.length<4){const e=this._material.parameters;t=0,a=0,s=e.texCoordScale[0],n=e.texCoordScale[1]}else t=e[0],a=e[1],s=e[2],n=e[3];s=Math.min(1.99999,s+1),n=Math.min(1.99999,n+1);const l=r.indices.get(R.T.POSITION).length,c=i.uv0;let d=o;for(let r=0;r<l;++r)c.set(d,0,t),c.set(d,1,a),d+=1,c.set(d,0,s),c.set(d,1,a),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,s),c.set(d,1,n),d+=1,c.set(d,0,t),c.set(d,1,n),d+=1,c.set(d,0,t),c.set(d,1,a),d+=1}(0,A.Vs)(r.indices.get(R.T.COLOR),r.vertexAttributes.get(R.T.COLOR).data,4,i.color,o,6);{const e=r.indices.get(R.T.SIZE),t=r.vertexAttributes.get(R.T.SIZE).data,a=e.length,s=i.size;let n=o;for(let r=0;r<a;++r){const i=t[2*e[r]],o=t[2*e[r]+1];for(let e=0;e<6;++e)s.set(n,0,i),s.set(n,1,o),n+=1}}if(r.indices.get(R.T.AUXPOS1)&&r.vertexAttributes.get(R.T.AUXPOS1)&&(0,A.SW)(r.indices.get(R.T.AUXPOS1),r.vertexAttributes.get(R.T.AUXPOS1).data,i.auxpos1,o,6),r.indices.get(R.T.AUXPOS2)&&r.vertexAttributes.get(R.T.AUXPOS2)&&(0,A.SW)(r.indices.get(R.T.AUXPOS2),r.vertexAttributes.get(R.T.AUXPOS2).data,i.auxpos2,o,6),(0,a.pC)(r.objectAndLayerIdColor)&&4===r.objectAndLayerIdColor.length&&r.indices.get(R.T.POSITION)){const e=r.indices.get(R.T.POSITION).length,t=i.getField(R.T.OBJECTANDLAYERIDCOLOR,v.mc);(0,A.xP)(r.objectAndLayerIdColor,t,e,o,6)}}}},47475:(e,t,r)=>{r.d(t,{H:()=>I,m:()=>H});var i=r(38499),o=r(6394),a=r(67077),s=r(37081);class n{constructor(){this.enabled=!0,this._time=(0,i.HA)(0)}get time(){return this._time}advance(e){return this._time!==e.time&&(this._time=e.time,!0)}}var l=r(56529),c=r(78041),d=r(93822),h=r(92026),u=r(23620),p=r(27366),f=r(50951),g=r(41481),m=(r(79246),r(27254)),v=r(82144),_=r(31132),y=r(33559),x=r(7566),C=r(27627),w=r(25920),T=r(8883),S=r(49810),O=r(49800),b=r(36207);class R extends _.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===O.zO.WEBGL2,t.spherical=e.viewingMode===f.JY.Global,t.doublePrecisionRequiresObfuscation=(0,m.I)(e.rctx)}initializeProgram(e){return new C.$(e.rctx,R.shader.get().build(this.configuration),x.i)}_setPipelineState(e){const t=this.configuration,r=e===w.A.NONE,i=e===w.A.FrontFace;return(0,b.sm)({blending:t.output!==s.H.Normal&&t.output!==s.H.Highlight&&t.transparent?r?c.wu:(0,c.j7)(e):null,depthTest:{func:(0,c.Bh)(e)},depthWrite:r?t.writeDepth&&b.LZ:(0,c.K5)(e),colorWrite:b.BK,polygonOffset:r||i?null:(0,c.je)(t.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}R.shader=new v.J(S.W,(()=>r.e(9106).then(r.bind(r,19106))));class A extends T.W{constructor(){super(...arguments),this.output=s.H.Color,this.transparencyPassType=w.A.NONE,this.spherical=!1,this.receiveShadows=!1,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.hasScreenSpaceReflections=!1,this.doublePrecisionRequiresObfuscation=!1,this.hasCloudsReflections=!1,this.isDraped=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}(0,p._)([(0,y.o)({count:s.H.COUNT})],A.prototype,"output",void 0),(0,p._)([(0,y.o)({count:w.A.COUNT})],A.prototype,"transparencyPassType",void 0),(0,p._)([(0,y.o)()],A.prototype,"spherical",void 0),(0,p._)([(0,y.o)()],A.prototype,"receiveShadows",void 0),(0,p._)([(0,y.o)()],A.prototype,"hasSlicePlane",void 0),(0,p._)([(0,y.o)()],A.prototype,"transparent",void 0),(0,p._)([(0,y.o)()],A.prototype,"enableOffset",void 0),(0,p._)([(0,y.o)()],A.prototype,"writeDepth",void 0),(0,p._)([(0,y.o)()],A.prototype,"hasScreenSpaceReflections",void 0),(0,p._)([(0,y.o)()],A.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,p._)([(0,y.o)()],A.prototype,"hasCloudsReflections",void 0),(0,p._)([(0,y.o)()],A.prototype,"isDraped",void 0),(0,p._)([(0,y.o)()],A.prototype,"hasMultipassTerrain",void 0),(0,p._)([(0,y.o)()],A.prototype,"cullAboveGround",void 0),(0,p._)([(0,y.o)({constValue:g.f7.Water})],A.prototype,"pbrMode",void 0),(0,p._)([(0,y.o)({constValue:!0})],A.prototype,"useCustomDTRExponentForWater",void 0),(0,p._)([(0,y.o)({constValue:!0})],A.prototype,"highStepCount",void 0),(0,p._)([(0,y.o)({constValue:!1})],A.prototype,"useFillLights",void 0);class P extends u.Z{_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMap.enabled})}_updateSSRState(e){e.ssr.enabled!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:e.ssr.enabled})}_updateCloudsReflectionState(e){const t=(0,h.pC)(e.cloudsFade.data);t!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:t})}ensureResources(e){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(e)}beginSlot(e){return this._output===s.H.Color&&(this._updateShadowState(e),this._updateSSRState(e),this._updateCloudsReflectionState(e)),this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters),this.ensureTechnique(R,e)}}var E=r(64226),D=r(22909);class I extends l.F5{constructor(e){super(e,new H),this._configuration=new A,this.animation=new n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.receiveShadows=this.parameters.receiveShadows,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections,this._configuration.hasCloudsReflections=this.parameters.hasCloudsReflections,this._configuration.isDraped=this.parameters.isDraped,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<c.ve,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}update(e){const t=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*t<M;const r=this.animation.advance(e);return this.setParameters({timeElapsed:(0,i.D9)(this.animation.time)*this.parameters.animationSpeed},!1),this.animation.enabled&&r}intersect(e,t,r,i,o,a,s){(0,D.Bw)(e,t,i,o,a,void 0,s)}requiresSlot(e,t){switch(t){case s.H.Normal:return e===d.r.DRAPED_WATER;case s.H.Color:if(this.parameters.isDraped)return e===d.r.DRAPED_MATERIAL;break;case s.H.Alpha:break;case s.H.Highlight:return e===d.r.OPAQUE_MATERIAL||e===d.r.DRAPED_MATERIAL;default:return!1}let r=d.r.OPAQUE_MATERIAL;return this.parameters.transparent&&(r=this.parameters.writeDepth?d.r.TRANSPARENT_MATERIAL:d.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===r}createGLMaterial(e){return new P(e)}createBufferWriter(){return new E.G_(E.W1)}}class H extends l.Mt{constructor(){super(...arguments),this.waveStrength=.06,this.waveTextureRepeat=32,this.waveDirection=(0,o.f)(1,0),this.waveVelocity=.05,this.flowStrength=.015,this.flowOffset=-.5,this.animationSpeed=.35,this.timeElapsed=0,this.color=(0,a.f)(0,0,0,0),this.transparent=!0,this.writeDepth=!0,this.hasSlicePlane=!1,this.isDraped=!1,this.receiveShadows=!0,this.hasScreenSpaceReflections=!1,this.hasCloudsReflections=!1}}const M=35e3},86700:(e,t,r)=>{r.d(t,{Dp:()=>n,z5:()=>s});var i=r(92026);const o={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},a={dash:o.dash,"dash-dot":[...o.dash,...o.dot],dot:o.dot,"long-dash":o["long-dash"],"long-dash-dot":[...o["long-dash"],...o.dot],"long-dash-dot-dot":[...o["long-dash"],...o.dot,...o.dot],none:null,"short-dash":o["short-dash"],"short-dash-dot":[...o["short-dash"],...o["short-dot"]],"short-dash-dot-dot":[...o["short-dash"],...o["short-dot"],...o["short-dot"]],"short-dot":o["short-dot"],solid:null};function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return{pattern:[e,e],pixelRatio:t}}function n(e){return(0,i.pC)(e)&&"style"===e.type?function(e){return(0,i.pC)(e)?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(0,i.Wi)(e)?e:{pattern:e.slice(),pixelRatio:t}}(a[e],8):null}(e.style):null}}}]);
//# sourceMappingURL=8383.d61c9c59.chunk.js.map