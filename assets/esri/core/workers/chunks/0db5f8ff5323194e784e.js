"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8758],{48758:(e,t,n)=>{n.r(t),n.d(t,{registerFunctions:()=>$});var a=n(28228),r=n(33586),i=n(27535),s=n(15274),l=n(28924),o=n(50954),u=n(12384),c=n(61363),f=n(70409),d=n(84328),m=n(85065),p=n(63991),y=n(75148),h=n(17805),w=n(3823),g=n(90658),F=n(36515),I=n(24240),E=n(95330),D=n(41534),A=n(19238),b=n(1231);async function N(e,t,n){const a=e.getVariables();if(a.length>0){const r=[];for(let e=0;e<a.length;e++){const i={name:a[e]};r.push(await t.evaluateIdentifier(n,i))}const i={};for(let e=0;e<a.length;e++)i[a[e]]=r[e];return e.parameters=i,e}return e}function x(e,t,n=null){for(const n in e)if(n.toLowerCase()===t.toLowerCase())return e[n];return n}function S(e){if(null===e)return null;const t={type:x(e,"type",""),name:x(e,"name","")};if("range"===t.type)t.range=x(e,"range",[]);else{t.codedValues=[];for(const n of x(e,"codedValues",[]))t.codedValues.push({name:x(n,"name",""),code:x(n,"code",null)})}return t}function T(e){if(null===e)return null;const t={},n=x(e,"wkt",null);null!==n&&(t.wkt=n);const a=x(e,"wkid",null);return null!==a&&(t.wkid=a),t}function v(e){if(null===e)return null;const t={hasZ:x(e,"hasz",!1),hasM:x(e,"hasm",!1)},n=x(e,"spatialreference",null);n&&(t.spatialReference=T(n));const a=x(e,"x",null);if(null!==a)return t.x=a,t.y=x(e,"y",null),t;const r=x(e,"rings",null);if(null!==r)return t.rings=r,t;const i=x(e,"paths",null);if(null!==i)return t.paths=i,t;const s=x(e,"points",null);if(null!==s)return t.points=s,t;for(const n of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const a=x(e,n,null);null!==a&&(t[n]=a)}return t}function $(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,(async(e,s,l)=>{(0,c.p)(l,0,2,t,n);let u=(0,c.A)(l[1],""),f=!0===u;if(u=!0===u||!1===u?"":(0,c.t)(u),0===l.length||l[0]instanceof a.Z){let e=null;t.services&&t.services.portal&&(e=t.services.portal),l.length>0&&(e=(0,o.getPortal)(l[0],e));const n=await(0,o.lookupUser)(e,u,f);if(n){const e=JSON.parse(JSON.stringify(n));for(const t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return r.Z.convertObjectToArcadeDictionary(e)}return null}let d=null;if((0,c.T)(l[0])&&(d=l[0]),d){if(f=!1,u)return null;await d.load();const e=await d.getOwningSystemUrl();if(!e){if(!u){const e=await d.getIdentityUser();return e?r.Z.convertObjectToArcadeDictionary({username:e}):null}return null}let n=null;t.services&&t.services.portal&&(n=t.services.portal),n=(0,o.getPortal)(new a.Z(e),n);const i=await(0,o.lookupUser)(n,u,f);if(i){const e=JSON.parse(JSON.stringify(i));for(const t of["lastLogin","created","modified"])void 0!==e[t]&&null!==e[t]&&(e[t]=new Date(e[t]));return r.Z.convertObjectToArcadeDictionary(e)}return null}throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"getuser",min:1,max:2}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,c.p)(r,2,4,t,n),r[0]instanceof l.Z){const e=(0,c.t)(r[1]);let a=(0,c.A)(r[2],null);const s=(0,c.w)((0,c.A)(r[3],!0));if(null===a&&(a=["*"]),!1===(0,c.k)(a))throw new i.aV(t,i.rH.InvalidParameter,n);return r[0].featureSetById(e,s,a)}throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,c.p)(r,1,2,t,n),(0,c.n)(r[0])){let e=(0,c.A)(r[1],"datasource");return null===e&&(e="datasource"),e=(0,c.t)(e).toLowerCase(),(0,o.convertToFeatureSet)(r[0].fullSchema(),e,t.lrucache,t.interceptor,t.spatialReference)}throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,((e,r,s)=>{if((0,c.p)(s,2,5,t,n),null===s[0])throw new i.aV(t,i.rH.PortalRequired,n);if(s[0]instanceof a.Z){const e=(0,c.t)(s[1]),a=(0,c.t)(s[2]);let r=(0,c.A)(s[3],null);const l=(0,c.w)((0,c.A)(s[4],!0));if(null===r&&(r=["*"]),!1===(0,c.k)(r))throw new i.aV(t,i.rH.InvalidParameter,n);let u=null;return t.services&&t.services.portal&&(u=t.services.portal),u=(0,o.getPortal)(s[0],u),(0,o.constructFeatureSetFromPortalItem)(e,a,t.spatialReference,r,l,u,t.lrucache,t.interceptor)}if(!1===(0,c.a)(s[0]))throw new i.aV(t,i.rH.PortalRequired,n);const l=(0,c.t)(s[0]),u=(0,c.t)(s[1]);let f=(0,c.A)(s[2],null);const d=(0,c.w)((0,c.A)(s[3],!0));if(null===f&&(f=["*"]),!1===(0,c.k)(f))throw new i.aV(t,i.rH.InvalidParameter,n);if(t.services&&t.services.portal)return(0,o.constructFeatureSetFromPortalItem)(l,u,t.spatialReference,f,d,t.services.portal,t.lrucache,t.interceptor);throw new i.aV(t,i.rH.PortalRequired,n)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,((e,a,r)=>{if((0,c.p)(r,2,4,t,n),r[0]instanceof l.Z){const e=(0,c.t)(r[1]);let a=(0,c.A)(r[2],null);const s=(0,c.w)((0,c.A)(r[3],!0));if(null===a&&(a=["*"]),!1===(0,c.k)(a))throw new i.aV(t,i.rH.InvalidParameter,n);return r[0].featureSetByName(e,s,a)}throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,((e,a,s)=>{(0,c.p)(s,1,1,t,n);let l=s[0];const o={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,c.a)(l))l=JSON.parse(l),void 0!==l.layerDefinition?(o.layerDefinition=l.layerDefinition,o.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(o.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(o.featureSet.features=l.features,o.featureSet.geometryType=l.geometryType,o.layerDefinition.geometryType=o.featureSet.geometryType,o.layerDefinition.objectIdField=l.objectIdFieldName,o.layerDefinition.typeIdField=l.typeIdFieldName,o.layerDefinition.globalIdField=l.globalIdFieldName,o.layerDefinition.fields=l.fields,l.spatialReference&&(o.layerDefinition.spatialReference=l.spatialReference));else{if(!(s[0]instanceof r.Z))throw new i.aV(t,i.rH.InvalidParameter,n);{l=JSON.parse(s[0].castToText(!0));const e=x(l,"layerdefinition");if(null!==e){o.layerDefinition.geometryType=x(e,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.globalIdField=x(e,"globalidfield",""),o.layerDefinition.objectIdField=x(e,"objectidfield",""),o.layerDefinition.typeIdField=x(e,"typeidfield","");const t=x(e,"spatialreference",null);t&&(o.layerDefinition.spatialReference=T(t));for(const t of x(e,"fields",[])){const e={name:x(t,"name",""),alias:x(t,"alias",""),type:x(t,"type",""),nullable:x(t,"nullable",!0),editable:x(t,"editable",!0),length:x(t,"length",null),domain:S(x(t,"domain"))};o.layerDefinition.fields.push(e)}const n=x(l,"featureset",null);if(n){const e={};for(const t of o.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of x(n,"features",[])){const n={},a=x(t,"attributes",{});for(const t in a)n[e[t.toLowerCase()]]=a[t];o.featureSet.features.push({attributes:n,geometry:v(x(t,"geometry",null))})}}}else{o.layerDefinition.geometryType=x(l,"geometrytype",""),o.featureSet.geometryType=o.layerDefinition.geometryType,o.layerDefinition.objectIdField=x(l,"objectidfieldname",""),o.layerDefinition.typeIdField=x(l,"typeidfieldname","");const e=x(l,"spatialreference",null);e&&(o.layerDefinition.spatialReference=T(e));for(const e of x(l,"fields",[])){const t={name:x(e,"name",""),alias:x(e,"alias",""),type:x(e,"type",""),nullable:x(e,"nullable",!0),editable:x(e,"editable",!0),length:x(e,"length",null),domain:S(x(e,"domain"))};o.layerDefinition.fields.push(t)}const t={};for(const e of o.layerDefinition.fields)t[e.name.toLowerCase()]=e.name;for(const e of x(l,"features",[])){const n={},a=x(e,"attributes",{});for(const e in a)n[t[e.toLowerCase()]]=a[e];o.featureSet.features.push({attributes:n,geometry:v(x(e,"geometry",null))})}}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){for(const t of["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(e.layerDefinition.geometryType)&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==(0,c.k)(e.layerDefinition.fields)&&!1!==(0,c.k)(e.featureSet.features)}(o))throw new i.aV(t,i.rH.InvalidParameter,n);return h.Z.create(o,t.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(async(a,r,s)=>{if((0,c.p)(s,2,2,t,n),(0,c.k)(s[0])||(0,c.o)(s[0])){const e=[];let a=s[0];a instanceof u.Z&&(a=a.toArray());let r=null;if(!(0,c.i)(s[1]))throw new i.aV(t,i.rH.InvalidParameter,n);r=s[1].createFunction(t);for(const t of a){const n=r(t);(0,E.y8)(n)?!0===await n&&e.push(t):!0===n&&e.push(t)}return e}if((0,c.T)(s[0])){const n=await s[0].load(),a=D.WhereClause.create(s[1],n.getFieldsIndex()),r=a.getVariables();if(r.length>0){const n=[];for(let a=0;a<r.length;a++){const i={name:r[a]};n.push(await e.evaluateIdentifier(t,i))}const i={};for(let e=0;e<r.length;e++)i[r[e]]=n[e];return a.parameters=i,new d.Z({parentfeatureset:s[0],whereclause:a})}return new d.Z({parentfeatureset:s[0],whereclause:a})}throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{if((0,c.p)(r,2,2,t,n),(0,c.T)(r[0])){const e=new w.Z(r[1]);return new m.Z({parentfeatureset:r[0],orderbyclause:e})}throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{if((0,c.p)(r,2,2,t,n),(0,c.T)(r[0]))return new p.Z({parentfeatureset:r[0],topnum:r[1]});if((0,c.k)(r[0]))return(0,c.e)(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,(0,c.e)(r[1]));if((0,c.o)(r[0]))return(0,c.e)(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,(0,c.e)(r[1]));throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{if((0,c.p)(r,1,1,t,n),(0,c.T)(r[0])){const t=await r[0].first(e.abortSignal);if(null!==t){const e=s.Z.createFromGraphicLikeObject(t.geometry,t.attributes,r[0]);return e._underlyingGraphic=t,e}return t}return(0,c.k)(r[0])?0===r[0].length?null:r[0][0]:(0,c.o)(r[0])?0===r[0].length()?null:r[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,s)=>{(0,c.p)(s,1,2,t,n);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(s.length>1)if(s[1]instanceof r.Z){if(s[1].hasField("minsize")&&(l.minsize=(0,c.e)(s[1].field("minsize"))),s[1].hasField("metadata")&&(l.returnMetadata=(0,c.w)(s[1].field("metadata"))),s[1].hasField("maxsize")&&(l.maxsize=(0,c.e)(s[1].field("maxsize"))),s[1].hasField("types")){const e=(0,c.X)(s[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==s[1])throw new i.aV(t,i.rH.InvalidParameter,n);if((0,c.n)(s[0])){let e=s[0]._layer;return e instanceof A.default&&(e=(0,o.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===(0,c.T)(e)?[]:(await e.load(),e.queryAttachments(s[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===s[0])return[];throw new i.aV(t,i.rH.InvalidParameter,n)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{(0,c.p)(r,2,4,t,n);const s=r[0],l=(0,c.t)(r[1]);let u=(0,c.A)(r[2],null);const f=(0,c.w)((0,c.A)(r[3],!0));if(null===u&&(u=["*"]),!1===(0,c.k)(u))throw new i.aV(t,i.rH.InvalidParameter,n);if(null===r[0])return null;if(!(0,c.n)(r[0]))throw new i.aV(t,i.rH.InvalidParameter,n);let d=s._layer;if(d instanceof A.default&&(d=(0,o.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===d)return null;if(!1===(0,c.T)(d))return null;d=await d.load();const m=d.relationshipMetaData().filter((e=>e.name===l));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return(0,o.constructFeatureSetFromRelationship)(d,m[0],s.field(d.objectIdField),d.spatialReference,u,f,t.lrucache,t.interceptor);let p=d.serviceUrl();if(!p)return null;p="/"===p.charAt(p.length-1)?p+m[0].relatedTableId.toString():p+"/"+m[0].relatedTableId.toString();const h=await(0,o.constructFeatureSetFromUrl)(p,d.spatialReference,u,f,t.lrucache,t.interceptor);await h.load();let w=h.relationshipMetaData();if(w=w.filter((e=>e.id===m[0].id)),!1===s.hasField(m[0].keyField)||null===s.field(m[0].keyField)){const e=await d.getFeatureByObjectId(s.field(d.objectIdField),[m[0].keyField]);if(e){const t=D.WhereClause.create(w[0].keyField+"= @id",h.getFieldsIndex());return t.parameters={id:e.attributes[m[0].keyField]},h.filter(t)}return new y.Z({parentfeatureset:h})}const g=D.WhereClause.create(w[0].keyField+"= @id",h.getFieldsIndex());return g.parameters={id:s.field(m[0].keyField)},h.filter(g)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(async(e,a,r)=>{(0,c.p)(r,2,3,t,n);const s=r[0],l=(0,c.t)((0,c.A)(r[1],"")).toLowerCase(),u=(0,c.a)(r[2])?(0,c.t)(r[2]):null;if(null===r[0])return null;if(!(0,c.n)(r[0]))throw new i.aV(t,i.rH.InvalidParameter,n);let d=s._layer;if(d instanceof A.default&&(d=(0,o.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===d)return null;if(!1===(0,c.T)(d))return null;await d.load();const m=d.serviceUrl(),p=await(0,o.constructAssociationMetaDataFeatureSetFromUrl)(m,t.spatialReference);let y=null,h=null,w=!1;if(null!==u&&""!==u&&void 0!==u){for(const e of p.terminals)e.terminalName===u&&(h=e.terminalId);null===h&&(w=!0)}const F=p.associations.getFieldsIndex(),I=F.get("TOGLOBALID").name,E=F.get("FROMGLOBALID").name,N=F.get("TOTERMINALID").name,x=F.get("FROMTERMINALID").name,S=F.get("FROMNETWORKSOURCEID").name,T=F.get("TONETWORKSOURCEID").name,v=F.get("ASSOCIATIONTYPE").name,$=F.get("ISCONTENTVISIBLE").name,L=F.get("OBJECTID").name;for(const e of d.fields)if("global-id"===e.type){y=s.field(e.name);break}let C=null,H=new f.yN(new b.Z({name:"percentalong",alias:"percentalong",type:"double"}),D.WhereClause.create("0",p.associations.getFieldsIndex())),P=new f.yN(new b.Z({name:"side",alias:"side",type:"string"}),D.WhereClause.create("''",p.associations.getFieldsIndex()));const k="globalid",V="globalId",R={};for(const e in p.lkp)R[e]=p.lkp[e].sourceId;const O=new f.TO(new b.Z({name:"classname",alias:"classname",type:"string"}),null,R);let W="";switch(l){case"midspan":{W=`((${I}='${y}') OR ( ${E}='${y}')) AND (${v} IN (5))`,O.codefield=D.WhereClause.create(`CASE WHEN (${I}='${y}') THEN ${S} ELSE ${T} END`,p.associations.getFieldsIndex());const e=(0,g.JW)(f.Xx.findField(p.associations.fields,E));e.name=k,e.alias=k,C=new f.yN(e,D.WhereClause.create(`CASE WHEN (${E}='${y}') THEN ${I} ELSE ${E} END`,p.associations.getFieldsIndex())),H=p.unVersion>=4?new f.$X(f.Xx.findField(p.associations.fields,F.get("PERCENTALONG").name)):new f.yN(new b.Z({name:"percentalong",alias:"percentalong",type:"double"}),D.WhereClause.create("0",p.associations.getFieldsIndex()));break}case"junctionedge":{W=`((${I}='${y}') OR ( ${E}='${y}')) AND (${v} IN (4,6))`,O.codefield=D.WhereClause.create(`CASE WHEN (${I}='${y}') THEN ${S} ELSE ${T} END`,p.associations.getFieldsIndex());const e=(0,g.JW)(f.Xx.findField(p.associations.fields,E));e.name=k,e.alias=k,C=new f.yN(e,D.WhereClause.create(`CASE WHEN (${E}='${y}') THEN ${I} ELSE ${E} END`,p.associations.getFieldsIndex())),P=new f.yN(new b.Z({name:"side",alias:"side",type:"string"}),D.WhereClause.create(`CASE WHEN (${v}=4) THEN 'from' ELSE 'to' END`,p.associations.getFieldsIndex()));break}case"connected":{let e=`${I}='@T'`,t=`${E}='@T'`;null!==h&&(e+=` AND ${N}=@A`,t+=` AND ${x}=@A`),W="(("+e+") OR ("+t+"))",W=(0,c.L)(W,"@T",y??""),e=(0,c.L)(e,"@T",y??""),null!==h&&(e=(0,c.L)(e,"@A",h.toString()),W=(0,c.L)(W,"@A",h.toString())),O.codefield=D.WhereClause.create("CASE WHEN "+e+` THEN ${S} ELSE ${T} END`,p.associations.getFieldsIndex());const n=(0,g.JW)(f.Xx.findField(p.associations.fields,E));n.name=k,n.alias=k,C=new f.yN(n,D.WhereClause.create("CASE WHEN "+e+` THEN ${E} ELSE ${I} END`,p.associations.getFieldsIndex()));break}case"container":W=`${I}='${y}' AND ${v} = 2`,null!==h&&(W+=` AND ${N} = `+h.toString()),O.codefield=S,W="( "+W+" )",C=new f.QP(f.Xx.findField(p.associations.fields,E),k,k);case"content":W=`(${E}='${y}' AND ${v} = 2)`,null!==h&&(W+=` AND ${x} = `+h.toString()),O.codefield=T,W="( "+W+" )",C=new f.QP(f.Xx.findField(p.associations.fields,I),k,k);break;case"structure":W=`(${I}='${y}' AND ${v} = 3)`,null!==h&&(W+=` AND ${N} = `+h.toString()),O.codefield=S,W="( "+W+" )",C=new f.QP(f.Xx.findField(p.associations.fields,E),k,V);break;case"attached":W=`(${E}='${y}' AND ${v} = 3)`,null!==h&&(W+=` AND ${x} = `+h.toString()),O.codefield=T,W="( "+W+" )",C=new f.QP(f.Xx.findField(p.associations.fields,I),k,V);break;default:throw new i.aV(t,i.rH.InvalidParameter,n)}return w&&(W="1 <> 1"),new f.Xx({parentfeatureset:p.associations,adaptedFields:[new f.$X(f.Xx.findField(p.associations.fields,L)),new f.$X(f.Xx.findField(p.associations.fields,$)),C,P,O,H],extraFilter:W?D.WhereClause.create(W,p.associations.getFieldsIndex()):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(async(a,s,l)=>{if((0,c.p)(l,3,3,t,n),!(0,c.T)(l[0]))throw new i.aV(t,i.rH.InvalidParameter,n);const o=await l[0].load(),u=[],f=[];let d=!1,m=[];if((0,c.a)(l[1]))m.push(l[1]);else if(l[1]instanceof r.Z)m.push(l[1]);else if((0,c.k)(l[1]))m=l[1];else{if(!(0,c.o)(l[1]))throw new i.aV(t,i.rH.InvalidParameter,n);m=l[1].toArray()}for(const e of m)if((0,c.a)(e)){const t=D.WhereClause.create((0,c.t)(e),o.getFieldsIndex()),n=!0===(0,F.y5)(t)?(0,c.t)(e):"%%%%FIELDNAME";u.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(d=!0)}else{if(!(e instanceof r.Z))throw new i.aV(t,i.rH.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",r=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(d=!0),!a)throw new i.aV(t,i.rH.InvalidParameter,n);u.push({name:a,expression:D.WhereClause.create(r||a,o.getFieldsIndex())})}}if(m=[],(0,c.a)(l[2]))m.push(l[2]);else if((0,c.k)(l[2]))m=l[2];else if((0,c.o)(l[2]))m=l[2].toArray();else{if(!(l[2]instanceof r.Z))throw new i.aV(t,i.rH.InvalidParameter,n);m.push(l[2])}for(const e of m){if(!(e instanceof r.Z))throw new i.aV(t,i.rH.InvalidParameter,n);{const a=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",s=e.hasField("expression")?e.field("expression"):"";if(!a||!r||!s)throw new i.aV(t,i.rH.InvalidParameter,n);f.push({name:a,statistic:r.toLowerCase(),expression:D.WhereClause.create(s,o.getFieldsIndex())})}}if(d){const e={};for(const t of o.fields)e[t.name.toLowerCase()]=1;for(const t of u)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of f)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of u)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of u)await N(n.expression,e,t);for(const n of f)await N(n.expression,e,t);return l[0].groupby(u,f)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(async(a,s,l)=>{if((0,c.T)(l[0])){(0,c.p)(l,2,2,t,n);const a=await l[0].load(),s=[];let o=[];if((0,c.a)(l[1]))o.push(l[1]);else if(l[1]instanceof r.Z)o.push(l[1]);else if((0,c.k)(l[1]))o=l[1];else{if(!(0,c.o)(l[1]))throw new i.aV(t,i.rH.InvalidParameter,n);o=l[1].toArray()}let u=!1;for(const e of o)if((0,c.a)(e)){const t=D.WhereClause.create((0,c.t)(e),a.getFieldsIndex()),n=!0===(0,F.y5)(t)?(0,c.t)(e):"%%%%FIELDNAME";s.push({name:n,expression:t}),"%%%%FIELDNAME"===n&&(u=!0)}else{if(!(e instanceof r.Z))throw new i.aV(t,i.rH.InvalidParameter,n);{const r=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===r&&(u=!0),!r)throw new i.aV(t,i.rH.InvalidParameter,n);s.push({name:r,expression:D.WhereClause.create(l||r,a.getFieldsIndex())})}}if(u){const e={};for(const t of a.fields)e[t.name.toLowerCase()]=1;for(const t of s)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of s)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}for(const n of s)await N(n.expression,e,t);return l[0].groupby(s,[])}return function(e,t,n,a){if(1===a.length){if((0,c.k)(a[0]))return(0,I.t)(e,a[0],-1);if((0,c.o)(a[0]))return(0,I.t)(e,a[0].toArray(),-1)}return(0,I.t)(e,a,-1)}("distinct",0,0,l)}))})}}}]);