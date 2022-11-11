"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[4753],{46516:(e,t,r)=>{r.d(t,{S:()=>p,b:()=>m});var a=r(92026),i=r(88396),o=r(6394),s=r(74321),n=r(21002),c=r(96415),l=r(82999),d=r(58406),u=r(98634),h=r(64201),v=r(19253);function m(){const e=new h.kG,t=e.fragment;return e.include(s.k),t.include(n.S),e.include(c.G),t.uniforms.add(new d.p("radius",((e,t)=>f(t)))),t.code.add(u.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),t.code.add(u.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add([new l.A("nearFar",((e,t)=>t.camera.nearFar)),new v.A("normalMap",(e=>e.normalTexture)),new v.A("depthMap",(e=>e.depthTexture)),new l.A("zScale",((e,t)=>(0,c.R)(t))),new d.p("projScale",(e=>e.projScale)),new v.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,i.s)(g,t.camera.fullWidth/(0,a.Wg)(e.noiseTexture).descriptor.width,t.camera.fullHeight/(0,a.Wg)(e.noiseTexture).descriptor.height))),new d.p("intensity",((e,t)=>2/f(t)**6)),new l.A("screenSize",((e,t)=>(0,i.s)(g,t.camera.fullWidth,t.camera.fullHeight)))]),t.code.add(u.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.H.int(16)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.H.int(16)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}function f(e){return Math.max(10,20*e.camera.computeRenderPixelSizeAtDist(Math.abs(4*e.camera.relativeElevation)))}const g=(0,o.a)(),p=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},97727:(e,t,r)=>{r.d(t,{S:()=>m,b:()=>v});var a=r(11186),i=r(74321),o=r(21002),s=r(22527),n=r(82999),c=r(58406),l=r(98634),d=r(64201),u=r(78050),h=r(19253);function v(){const e=new d.kG,t=e.fragment;e.include(i.k);return t.include(o.S),t.uniforms.add([new h.A("depthMap",(e=>e.depthTexture)),new u.R("tex",(e=>e.colorTexture)),new s.q("blurSize",(e=>e.blurSize)),new c.p("projScale",((e,t)=>{const r=(0,a.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new n.A("nearFar",((e,t)=>t.camera.nearFar))]),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(l.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.H.int(4)}; r <= ${l.H.int(4)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}const m=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}))},73782:(e,t,r)=>{r.d(t,{O:()=>n,h:()=>o});var a=r(98634);function i(e){const t=a.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}var o,s=r(4760);function n(e,t){t.normalType===o.Attribute&&(e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(a.H`vec3 normalModel() {
return normal;
}`)),t.normalType===o.CompressedAttribute&&(e.include(i),e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===o.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(a.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(o||(o={}))},60113:(e,t,r)=>{r.d(t,{D:()=>n,N:()=>a});var a,i=r(41644),o=r(98634),s=r(4760);function n(e,t){switch(t.textureCoordinateType){case a.Default:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case a.Compressed:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case a.Atlas:return e.attributes.add(s.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(s.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,i.Bg)(t.textureCoordinateType);case a.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);case a.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(a||(a={}))},85380:(e,t,r)=>{r.d(t,{Bb:()=>d,Pf:()=>h,d4:()=>u});var a=r(11873),i=r(67077),o=r(73782),s=r(74058),n=r(98634),c=r(82644),l=r(35522);function d(e,t){t.normalType===o.h.Attribute||t.normalType===o.h.CompressedAttribute?(e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new c.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new l.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(n.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===o.h.Ground?(e.include(s.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(n.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?n.H`normalize(vPositionWorldCameraRelative);`:n.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(n.H`void forwardNormal() {}`)}class u extends s.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,a.c)()}}class h extends s.OU{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,a.c)(),this.toMapSpace=(0,i.c)()}}},27284:(e,t,r)=>{r.d(t,{i:()=>n});var a=r(41644),i=r(60113),o=r(98634);function s(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function n(e,t){switch(e.include(i.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case i.N.Default:case i.N.Compressed:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case i.N.Atlas:return e.include(s),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,a.Bg)(t.textureCoordinateType);case i.N.None:case i.N.COUNT:return}}},49223:(e,t,r)=>{r.d(t,{L:()=>l,V:()=>u});var a=r(90045),i=r(67077),o=r(62993),s=r(82552),n=r(95276),c=r(98634);function l(e,t){const r=e.vertex;t.hasVerticalOffset?(u(r),t.hasScreenSizePerspective&&(e.include(o.cK),(0,o.m8)(r),(0,s.hY)(e.vertex,t)),r.code.add(c.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?c.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:c.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?c.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:c.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(c.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const d=(0,i.c)();function u(e){e.uniforms.add(new n.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:o}=e.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),n=t.camera.pixelRatio||1;return(0,a.s)(d,o*n,s,r,i)})))}},60750:(e,t,r)=>{r.d(t,{_:()=>u});var a=r(11186),i=r(71353),o=r(90045),s=r(67077),n=r(41481),c=r(49450),l=r(95276),d=r(98634);function u(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new c.J("lightingAmbientSH0",((e,t)=>(0,a.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add([new l.N("lightingAmbientSH_R",((e,t)=>(0,o.s)(v,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new l.N("lightingAmbientSH_G",((e,t)=>(0,o.s)(v,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new l.N("lightingAmbientSH_B",((e,t)=>(0,o.s)(v,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add([new c.J("lightingAmbientSH0",((e,t)=>(0,a.s)(h,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new l.N("lightingAmbientSH_R1",((e,t)=>(0,o.s)(v,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new l.N("lightingAmbientSH_G1",((e,t)=>(0,o.s)(v,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new l.N("lightingAmbientSH_B1",((e,t)=>(0,o.s)(v,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new l.N("lightingAmbientSH_R2",((e,t)=>(0,o.s)(v,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new l.N("lightingAmbientSH_G2",((e,t)=>(0,o.s)(v,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new l.N("lightingAmbientSH_B2",((e,t)=>(0,o.s)(v,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const h=(0,i.c)(),v=(0,s.c)()},92395:(e,t,r)=>{r.d(t,{F1:()=>n,Pe:()=>s,kR:()=>c});var a=r(49450),i=r(58406),o=r(98634);function s(e){e.uniforms.add(new a.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function n(e){e.uniforms.add(new a.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function c(e,t){const r=e.fragment;s(r),n(r),function(e,t){t.useLegacyTerrainShading?e.uniforms.add(new i.p("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}(r,t),r.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},2116:(e,t,r)=>{r.d(t,{T:()=>n});var a=r(98634);function i(e){const t=e.fragment.code;t.add(a.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(a.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(a.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(41481),s=r(85586);function n(e,t){const r=e.fragment.code;e.include(s.e),t.pbrMode===o.f7.Water||t.pbrMode===o.f7.WaterOnIntegratedMesh?(r.add(a.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(a.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(a.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(a.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(a.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(i),r.add(a.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(a.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(a.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(a.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(a.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(a.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},41481:(e,t,r)=>{r.d(t,{f7:()=>v,jV:()=>m});var a=r(8229),i=r(27284),o=r(75993),s=r(86471),n=r(49450),c=r(98634),l=r(78050),d=r(19253),u=r(97528),h=r(99340);r(17363);(0,a.f)(0,.6,.2);var v;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(v||(v={}));function m(e,t){const r=e.fragment,a=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===v.Normal&&a&&e.include(i.i,t),t.pbrMode!==v.Schematic)if(t.pbrMode!==v.Disabled){if(t.pbrMode===v.Normal){r.code.add(c.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas?t.hasWebGL2Context?u.D.None:u.D.Size:u.D.None,i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===h.P.Pass?(0,d.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,l.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(c.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===h.P.Pass?(0,d.J)("texEmission",(e=>e.textureEmissive),e):(0,l.F)("texEmission",(e=>e.textureEmissive),e)),r.code.add(c.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===h.P.Pass?(0,d.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,l.F)("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(c.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(c.H`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(i===h.P.Pass?[new n.J("emissionFactor",(e=>e.emissiveFactor)),new n.J("mrrFactors",(e=>e.mrrFactors))]:[new s.B("emissionFactor",(e=>e.emissiveFactor)),new s.B("mrrFactors",(e=>e.mrrFactors))]),r.code.add(c.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?c.H`vtc.uv = vuv0;`:""}
      ${t.hasMetallicRoughnessTextureTransform?c.H`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:c.H`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?c.H`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texEmission")};
                applyEmission(vtc);`:c.H`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?c.H`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texOcclusion")};
                applyOcclusion(vtc);`:c.H`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(c.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(c.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},58335:(e,t,r)=>{r.d(t,{XE:()=>f,hb:()=>m});r(71353);var a=r(78980),i=r(75993),o=r(95276),s=r(99339),n=r(98634),c=r(61809),l=r(99340);class d extends c.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,a,i)=>r.setUniformMatrix4fv(e,t(a,i))),r)}}class u extends c.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,a,i)=>r.setUniformMatrix4fv(e,t(a,i))),r)}}var h=r(19253),v=r(97528);function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e,t))}function f(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),g(e,t))}function g(e,t){const r=e.fragment;r.include(a.n),r.uniforms.add([...(0,h.J)("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?v.D.None:v.D.Size),new s._("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),r.code.add(n.H`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${(0,i.w_)(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}},18607:(e,t,r)=>{r.d(t,{k:()=>d});var a=r(49450),i=r(59150),o=r(699),s=r(98634),n=r(35522),c=r(4760),l=r(65964);function d(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(c.T.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new a.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new a.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new a.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new a.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new n.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new a.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(s.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?s.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",l.x),t.hasVvInstancing&&r.uniforms.add([new o.O("vvColorValues",(e=>e.vvColorValues),l.x),new i.b("vvColorColors",(e=>e.vvColorColors),l.x)]),r.code.add(s.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?s.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(s.H`vec4 vvColor() { return vec4(1.0); }`)}},62993:(e,t,r)=>{r.d(t,{cK:()=>n,m8:()=>l,ww:()=>c});var a=r(90045),i=r(67077),o=r(95276),s=r(98634);function n(e){e.vertex.code.add(s.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(s.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(s.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(s.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(s.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(s.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(s.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function c(e){e.uniforms.add(new o.N("screenSizePerspective",(e=>d(e.screenSizePerspective))))}function l(e){e.uniforms.add(new o.N("screenSizePerspectiveAlignment",(e=>d(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function d(e){return(0,a.s)(u,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const u=(0,i.c)()},13773:(e,t,r)=>{r.d(t,{U:()=>o});var a=r(61809),i=r(99340);class o extends a.x{constructor(e,t){super(e,"bool",i.P.Pass,((r,a,i)=>r.setUniform1b(e,t(a,i))))}}},22527:(e,t,r)=>{r.d(t,{q:()=>o});var a=r(61809),i=r(99340);class o extends a.x{constructor(e,t){super(e,"vec2",i.P.Draw,((r,a,i,o)=>r.setUniform2fv(e,t(a,i,o))))}}},99339:(e,t,r)=>{r.d(t,{_:()=>o});var a=r(61809),i=r(99340);class o extends a.x{constructor(e,t){super(e,"int",i.P.Pass,((r,a,i)=>r.setUniform1i(e,t(a,i))))}}},78050:(e,t,r)=>{r.d(t,{F:()=>h,R:()=>u});var a=r(92026),i=r(88396),o=r(6394),s=r(75993),n=r(22527),c=r(97528),l=r(61809),d=r(99340);class u extends l.x{constructor(e,t){super(e,"sampler2D",d.P.Draw,((r,a,i)=>r.bindTexture(e,t(a,i))))}}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.D.None;const l=[new u(e,t)];if(r&c.D.Size){const r=e+s.o_;l.push(new n.q(r,((e,r)=>{const s=t(e,r);return(0,a.pC)(s)?(0,i.s)(v,s.descriptor.width,s.descriptor.height):o.Z})))}if(r&c.D.InvSize){const r=e+s.aU;l.push(new n.q(r,((e,r)=>{const s=t(e,r);return(0,a.pC)(s)?(0,i.s)(v,1/s.descriptor.width,1/s.descriptor.height):o.Z})))}return l}const v=(0,o.a)()},31916:(e,t,r)=>{r.d(t,{L:()=>F,s:()=>H});var a=r(92026),i=r(88396),o=r(38330),s=r(32534),n=r(82144),c=r(31132),l=r(7566),d=r(27627),u=r(97727),h=r(36207);class v extends c.A{initializeProgram(e){return new d.$(e.rctx,v.shader.get().build(),l.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}v.shader=new n.J(u.S,(()=>r.e(1843).then(r.bind(r,81843))));var m=r(46516);class f extends c.A{initializeProgram(e){return new d.$(e.rctx,f.shader.get().build(),l.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}f.shader=new n.J(m.S,(()=>r.e(9956).then(r.bind(r,49956))));var g=r(6394),p=r(98634);class x extends p.K{constructor(){super(...arguments),this.projScale=1}}class b extends x{}class S extends p.K{}class _ extends S{constructor(){super(...arguments),this.blurSize=(0,g.a)()}}var w=r(8548),T=r(53634),y=r(51378),z=r(3384);const H=2;class F{constructor(e,t,r){this._techniqueRepository=e,this._rctx=t,this._requestRender=r,this._enabled=!1,this._quadVAO=null,this._passParameters=new b,this._drawParameters=new _}dispose(){this._quadVAO=(0,a.M2)(this._quadVAO)}disposeOffscreenBuffers(){(0,a.yw)(this._ssaoFBO,(e=>e.resize(0,0))),(0,a.yw)(this._blur0FBO,(e=>e.resize(0,0))),(0,a.yw)(this._blur1FBO,(e=>e.resize(0,0)))}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enabled}get ready(){return this.enabled&&(0,a.pC)(this._passParameters.noiseTexture)&&(0,a.pC)(this._ssaoFBO)&&(0,a.pC)(this._blur0FBO)&&(0,a.pC)(this._blur1FBO)}get loading(){return this.enabled&&!this.ready}get colorTexture(){return(0,a.pC)(this._blur1FBO)?this._blur1FBO.colorTexture:null}get width(){return(0,a.pC)(this._ssaoFBO)?this._ssaoFBO.width:-1}get height(){return(0,a.pC)(this._ssaoFBO)?this._ssaoFBO.height:-1}computeSSAO(e,t,r){if(!this.enabled||(0,a.Wi)(t)||(0,a.Wi)(r)||(0,a.Wi)(this._passParameters.noiseTexture)||(0,a.Wi)(this._ssaoFBO)||(0,a.Wi)(this._blur0FBO)||(0,a.Wi)(this._blur1FBO))return;const o=this._rctx,n=e.camera;this._passParameters.normalTexture=r,this._passParameters.depthTexture=t,this._passParameters.projScale=1/n.computeRenderPixelSizeAtDist(1);const c=n.fullViewport,l=c[2],d=c[3],u=l/H,h=d/H;this._ssaoFBO.resize(l,d),this._blur0FBO.resize(u,h),this._blur1FBO.resize(u,h),(0,a.Wi)(this._quadVAO)&&(this._quadVAO=(0,s.ow)(this._rctx)),o.bindFramebuffer(this._ssaoFBO),o.setViewport(0,0,l,d),o.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),o.bindVAO(this._quadVAO),o.drawArrays(w.MX.TRIANGLE_STRIP,0,(0,z._V)(this._quadVAO,"geometry"));const v=o.bindTechnique(this._blurTechnique,this._passParameters,e);o.setViewport(0,0,u,h),o.bindFramebuffer(this._blur0FBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,(0,i.s)(this._drawParameters.blurSize,0,H/d),v.bindDraw(this._drawParameters,e,this._passParameters),o.setViewport(0,0,u,h),o.drawArrays(w.MX.TRIANGLE_STRIP,0,(0,z._V)(this._quadVAO,"geometry")),o.bindFramebuffer(this._blur1FBO),this._drawParameters.colorTexture=this._blur0FBO.colorTexture,(0,i.s)(this._drawParameters.blurSize,H/l,0),v.bindDraw(this._drawParameters,e,this._passParameters),o.drawArrays(w.MX.TRIANGLE_STRIP,0,(0,z._V)(this._quadVAO,"geometry")),o.setViewport(c[0],c[1],c[2],c[3])}_selectPrograms(){(0,a.Wi)(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire(f)),(0,a.Wi)(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(v))}_enable(){this.enabled||(this._enabled=!0,this._loadResources((()=>{this._enabled&&this._initialize()})))}_loadResources(e){this._data?e():r.e(3412).then(r.bind(r,43412)).then((t=>{this._data=t,e()}))}_initialize(){const e={target:w.No.TEXTURE_2D,pixelFormat:w.VI.RGBA,dataType:w.Br.UNSIGNED_BYTE,samplingMode:w.cw.LINEAR,wrapMode:w.e8.CLAMP_TO_EDGE,width:0,height:0},t={colorTarget:w.Lm.TEXTURE,depthStencilTarget:w.OU.NONE};(0,o.t)(this._data.noiseTexture).then((r=>{this._enabled&&(this._ssaoFBO=new T.X(this._rctx,t,e),this._blur0FBO=new T.X(this._rctx,t,e),this._blur1FBO=new T.X(this._rctx,t,e),this._passParameters.noiseTexture=new y.x(this._rctx,{target:w.No.TEXTURE_2D,pixelFormat:w.VI.RGBA,dataType:w.Br.UNSIGNED_BYTE,hasMipmap:!0,width:r.width,height:r.height},r),this._requestRender())})),this._selectPrograms()}_disable(){this._enabled=!1,this._passParameters.noiseTexture=(0,a.M2)(this._passParameters.noiseTexture),this._blur1FBO=(0,a.M2)(this._blur1FBO),this._blur0FBO=(0,a.M2)(this._blur0FBO),this._ssaoFBO=(0,a.M2)(this._ssaoFBO)}get gpuMemoryUsage(){return((0,a.pC)(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+((0,a.pC)(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+((0,a.pC)(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}},11954:(e,t,r)=>{r.d(t,{AM:()=>o,Eg:()=>s,Mi:()=>i,Ur:()=>n});var a=r(71353);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,a.c)();this.intensity=e}}class o{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,a.c)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.f)(.57735,.57735,.57735);this.intensity=e,this.direction=t}}class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,a.c)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.f)(.57735,.57735,.57735),r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;this.intensity=e,this.direction=t,this.castShadows=r,this.specularStrength=i,this.environmentStrength=o}}class n{constructor(){this.r=[0],this.g=[0],this.b=[0]}}},48919:(e,t,r)=>{r.d(t,{c:()=>z,V:()=>y});var a=r(16889),i=r(11186),o=r(71353),s=r(11954);function n(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]*t[a];return r}function c(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]*t;return r}function l(e,t,r){(r=r||e).length=e.length;for(let a=0;a<e.length;a++)r[a]=e[a]+t[a];return r}function d(e){return(e+1)*(e+1)}function u(e,t,r){const a=e[0],i=e[1],o=e[2],s=r||[];return s.length=d(t),t>=0&&(s[0]=.28209479177),t>=1&&(s[1]=.4886025119*a,s[2]=.4886025119*o,s[3]=.4886025119*i),t>=2&&(s[4]=1.09254843059*a*i,s[5]=1.09254843059*i*o,s[6]=.31539156525*(3*o*o-1),s[7]=1.09254843059*a*o,s[8]=.54627421529*(a*a-i*i)),s}function h(e,t){const r=d(e),a=t||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=r;for(let i=0;i<r;i++)a.r[i]=a.g[i]=a.b[i]=0;return a}function v(e,t){const r=function(e){return(0,a.uZ)(Math.floor(Math.sqrt(e)-1),0,2)}(t.r.length);for(const a of e)(0,i.o)(S,a.direction),u(S,r,x),n(x,_),c(x,a.intensity[0],b),l(t.r,b),c(x,a.intensity[1],b),l(t.g,b),c(x,a.intensity[2],b),l(t.b,b);return t}function m(e,t){u(S,0,x);for(const r of e)t.r[0]+=x[0]*_[0]*r.intensity[0]*4*Math.PI,t.g[0]+=x[0]*_[0]*r.intensity[1]*4*Math.PI,t.b[0]+=x[0]*_[0]*r.intensity[2]*4*Math.PI;return t}const f=[],g=[],p=[],x=[0],b=[0],S=(0,o.c)(),_=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class w{constructor(){this.color=(0,o.c)(),this.intensity=1}}class T{constructor(){this.direction=(0,o.c)(),this.ambient=new w,this.diffuse=new w}}const y=.4;class z{constructor(){this._shOrder=2,this._legacy=new T,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new s.Ur,this._mainLight=new s.Eg((0,o.c)(),(0,o.f)(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){(function(e,t,r,a){h(t,a),(0,i.s)(r.intensity,0,0,0);let o=!1;const n=f,c=g,d=p;n.length=0,c.length=0,d.length=0;for(const l of e)l instanceof s.Eg&&!o?((0,i.c)(r.direction,l.direction),(0,i.c)(r.intensity,l.intensity),r.specularStrength=l.specularStrength,r.environmentStrength=l.environmentStrength,r.castShadows=l.castShadows,o=!0):l instanceof s.Eg||l instanceof s.AM?n.push(l):l instanceof s.Mi?c.push(l):l instanceof s.Ur&&d.push(l);v(n,a),m(c,a);for(const i of d)l(a.r,i.r),l(a.g,i.g),l(a.b,i.b)})(e,this._shOrder,this._mainLight,this._sphericalHarmonics),(0,i.c)(this._legacy.direction,this._mainLight.direction);const t=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*t,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*t,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*t,(0,i.g)(this._legacy.diffuse.color,this._mainLight.intensity,t),(0,i.c)(H,this._legacy.diffuse.color),(0,i.g)(H,H,y*this.globalFactor),(0,i.a)(this._legacy.ambient.color,this._legacy.ambient.color,H)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),this._mainLight.direction=(0,o.a)(e.mainLight.direction),this._mainLight.intensity=(0,o.a)(e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,t,r){if((0,i.h)(this._mainLight.intensity,e.mainLight.intensity,t.mainLight.intensity,r),this._mainLight.environmentStrength=(0,a.t7)(e.mainLight.environmentStrength,t.mainLight.environmentStrength,r),this._mainLight.specularStrength=(0,a.t7)(e.mainLight.specularStrength,t.mainLight.specularStrength,r),(0,i.c)(this._mainLight.direction,t.mainLight.direction),this._mainLight.castShadows=t.mainLight.castShadows,this.globalFactor=(0,a.t7)(e.globalFactor,t.globalFactor,r),this.noonFactor=(0,a.t7)(e.noonFactor,t.noonFactor,r),e.sh.r.length===t.sh.r.length)for(let i=0;i<t.sh.r.length;i++)this._sphericalHarmonics.r[i]=(0,a.t7)(e.sh.r[i],t.sh.r[i],r),this._sphericalHarmonics.g[i]=(0,a.t7)(e.sh.g[i],t.sh.g[i],r),this._sphericalHarmonics.b[i]=(0,a.t7)(e.sh.b[i],t.sh.b[i],r);else for(let a=0;a<t.sh.r.length;a++)this._sphericalHarmonics.r[a]=t.sh.r[a],this._sphericalHarmonics.g[a]=t.sh.g[a],this._sphericalHarmonics.b[a]=t.sh.b[a]}}const H=(0,o.c)()}}]);
//# sourceMappingURL=4753.fd2bdcc3.chunk.js.map