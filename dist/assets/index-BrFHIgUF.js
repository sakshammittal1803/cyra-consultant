import{r as G,a as Zl,u as Pt,b as eu,B as tu,R as nu,c as gt,N as Bn,d as ru}from"./react-vendor-CxPxX0Ni.js";import{L as su,_ as iu,C as ou,r as Wi,F as au,a as $e,g as lu,b as uu,c as cu,d as hu,e as ke,S as du,i as fu,f as mu,h as pu,j as gu,G as yu,s as _u}from"./firebase-DBdZgz6H.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Uo={exports:{}},or={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu=G,xu=Symbol.for("react.element"),wu=Symbol.for("react.fragment"),Eu=Object.prototype.hasOwnProperty,Tu=vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Iu={key:!0,ref:!0,__self:!0,__source:!0};function qo(r,e,t){var n,i={},o=null,l=null;t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(n in e)Eu.call(e,n)&&!Iu.hasOwnProperty(n)&&(i[n]=e[n]);if(r&&r.defaultProps)for(n in e=r.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:xu,type:r,key:o,ref:l,props:i,_owner:Tu.current}}or.Fragment=wu;or.jsx=qo;or.jsxs=qo;Uo.exports=or;var d=Uo.exports,Xr={},Hi=Zl;Xr.createRoot=Hi.createRoot,Xr.hydrateRoot=Hi.hydrateRoot;/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Au={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Y=(r,e)=>{const t=G.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:c="",children:h,...m},p)=>G.createElement("svg",{ref:p,...Au,width:i,height:i,stroke:n,strokeWidth:l?Number(o)*24/Number(i):o,className:["lucide",`lucide-${bu(r)}`,c].join(" "),...m},[...e.map(([E,A])=>G.createElement(E,A)),...Array.isArray(h)?h:[h]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=Y("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=Y("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=Y("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=Y("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=Y("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=Y("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=Y("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=Y("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=Y("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=Y("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=Y("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=Y("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=Y("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=Y("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=Y("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=Y("MessageCircle",[["path",{d:"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",key:"v2veuj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=Y("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=Y("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=Y("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=Y("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=Y("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=Y("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=Y("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=Y("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=Y("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=Y("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rt,Qo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function y(){}y.prototype=g.prototype,v.D=g.prototype,v.prototype=new y,v.prototype.constructor=v,v.C=function(x,w,I){for(var _=Array(arguments.length-2),je=2;je<arguments.length;je++)_[je-2]=arguments[je];return g.prototype[w].apply(x,_)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,y){y||(y=0);var x=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)x[w]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(w=0;16>w;++w)x[w]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=v.g[0],y=v.g[1],w=v.g[2];var I=v.g[3],_=g+(I^y&(w^I))+x[0]+3614090360&4294967295;g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+x[1]+3905402710&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+x[2]+606105819&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+x[3]+3250441966&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+x[4]+4118548399&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+x[5]+1200080426&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+x[6]+2821735955&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+x[7]+4249261313&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+x[8]+1770035416&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+x[9]+2336552879&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+x[10]+4294925233&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+x[11]+2304563134&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(I^y&(w^I))+x[12]+1804603682&4294967295,g=y+(_<<7&4294967295|_>>>25),_=I+(w^g&(y^w))+x[13]+4254626195&4294967295,I=g+(_<<12&4294967295|_>>>20),_=w+(y^I&(g^y))+x[14]+2792965006&4294967295,w=I+(_<<17&4294967295|_>>>15),_=y+(g^w&(I^g))+x[15]+1236535329&4294967295,y=w+(_<<22&4294967295|_>>>10),_=g+(w^I&(y^w))+x[1]+4129170786&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+x[6]+3225465664&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+x[11]+643717713&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+x[0]+3921069994&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+x[5]+3593408605&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+x[10]+38016083&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+x[15]+3634488961&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+x[4]+3889429448&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+x[9]+568446438&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+x[14]+3275163606&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+x[3]+4107603335&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+x[8]+1163531501&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(w^I&(y^w))+x[13]+2850285829&4294967295,g=y+(_<<5&4294967295|_>>>27),_=I+(y^w&(g^y))+x[2]+4243563512&4294967295,I=g+(_<<9&4294967295|_>>>23),_=w+(g^y&(I^g))+x[7]+1735328473&4294967295,w=I+(_<<14&4294967295|_>>>18),_=y+(I^g&(w^I))+x[12]+2368359562&4294967295,y=w+(_<<20&4294967295|_>>>12),_=g+(y^w^I)+x[5]+4294588738&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+x[8]+2272392833&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+x[11]+1839030562&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+x[14]+4259657740&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+x[1]+2763975236&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+x[4]+1272893353&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+x[7]+4139469664&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+x[10]+3200236656&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+x[13]+681279174&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+x[0]+3936430074&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+x[3]+3572445317&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+x[6]+76029189&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(y^w^I)+x[9]+3654602809&4294967295,g=y+(_<<4&4294967295|_>>>28),_=I+(g^y^w)+x[12]+3873151461&4294967295,I=g+(_<<11&4294967295|_>>>21),_=w+(I^g^y)+x[15]+530742520&4294967295,w=I+(_<<16&4294967295|_>>>16),_=y+(w^I^g)+x[2]+3299628645&4294967295,y=w+(_<<23&4294967295|_>>>9),_=g+(w^(y|~I))+x[0]+4096336452&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+x[7]+1126891415&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+x[14]+2878612391&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+x[5]+4237533241&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+x[12]+1700485571&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+x[3]+2399980690&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+x[10]+4293915773&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+x[1]+2240044497&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+x[8]+1873313359&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+x[15]+4264355552&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+x[6]+2734768916&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+x[13]+1309151649&4294967295,y=w+(_<<21&4294967295|_>>>11),_=g+(w^(y|~I))+x[4]+4149444226&4294967295,g=y+(_<<6&4294967295|_>>>26),_=I+(y^(g|~w))+x[11]+3174756917&4294967295,I=g+(_<<10&4294967295|_>>>22),_=w+(g^(I|~y))+x[2]+718787259&4294967295,w=I+(_<<15&4294967295|_>>>17),_=y+(I^(w|~g))+x[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,v.g[2]=v.g[2]+w&4294967295,v.g[3]=v.g[3]+I&4294967295}n.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var y=g-this.blockSize,x=this.B,w=this.h,I=0;I<g;){if(w==0)for(;I<=y;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<g;)if(x[w++]=v.charCodeAt(I++),w==this.blockSize){i(this,x),w=0;break}}else for(;I<g;)if(x[w++]=v[I++],w==this.blockSize){i(this,x),w=0;break}}this.h=w,this.o+=g},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var y=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=y&255,y/=256;for(this.u(v),v=Array(16),g=y=0;4>g;++g)for(var x=0;32>x;x+=8)v[y++]=this.g[g]>>>x&255;return v};function o(v,g){var y=c;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=g(v)}function l(v,g){this.h=g;for(var y=[],x=!0,w=v.length-1;0<=w;w--){var I=v[w]|0;x&&I==g||(y[w]=I,x=!1)}this.g=y}var c={};function h(v){return-128<=v&&128>v?o(v,function(g){return new l([g|0],0>g?-1:0)}):new l([v|0],0>v?-1:0)}function m(v){if(isNaN(v)||!isFinite(v))return E;if(0>v)return V(m(-v));for(var g=[],y=1,x=0;v>=y;x++)g[x]=v/y|0,y*=4294967296;return new l(g,0)}function p(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return V(p(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=m(Math.pow(g,8)),x=E,w=0;w<v.length;w+=8){var I=Math.min(8,v.length-w),_=parseInt(v.substring(w,w+I),g);8>I?(I=m(Math.pow(g,I)),x=x.j(I).add(m(_))):(x=x.j(y),x=x.add(m(_)))}return x}var E=h(0),A=h(1),P=h(16777216);r=l.prototype,r.m=function(){if(k(this))return-V(this).m();for(var v=0,g=1,y=0;y<this.g.length;y++){var x=this.i(y);v+=(0<=x?x:4294967296+x)*g,g*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(k(this))return"-"+V(this).toString(v);for(var g=m(Math.pow(v,6)),y=this,x="";;){var w=Z(y,g).g;y=D(y,w.j(g));var I=((0<y.g.length?y.g[0]:y.h)>>>0).toString(v);if(y=w,S(y))return I+x;for(;6>I.length;)I="0"+I;x=I+x}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function k(v){return v.h==-1}r.l=function(v){return v=D(this,v),k(v)?-1:S(v)?0:1};function V(v){for(var g=v.g.length,y=[],x=0;x<g;x++)y[x]=~v.g[x];return new l(y,~v.h).add(A)}r.abs=function(){return k(this)?V(this):this},r.add=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],x=0,w=0;w<=g;w++){var I=x+(this.i(w)&65535)+(v.i(w)&65535),_=(I>>>16)+(this.i(w)>>>16)+(v.i(w)>>>16);x=_>>>16,I&=65535,_&=65535,y[w]=_<<16|I}return new l(y,y[y.length-1]&-2147483648?-1:0)};function D(v,g){return v.add(V(g))}r.j=function(v){if(S(this)||S(v))return E;if(k(this))return k(v)?V(this).j(V(v)):V(V(this).j(v));if(k(v))return V(this.j(V(v)));if(0>this.l(P)&&0>v.l(P))return m(this.m()*v.m());for(var g=this.g.length+v.g.length,y=[],x=0;x<2*g;x++)y[x]=0;for(x=0;x<this.g.length;x++)for(var w=0;w<v.g.length;w++){var I=this.i(x)>>>16,_=this.i(x)&65535,je=v.i(w)>>>16,kt=v.i(w)&65535;y[2*x+2*w]+=_*kt,O(y,2*x+2*w),y[2*x+2*w+1]+=I*kt,O(y,2*x+2*w+1),y[2*x+2*w+1]+=_*je,O(y,2*x+2*w+1),y[2*x+2*w+2]+=I*je,O(y,2*x+2*w+2)}for(x=0;x<g;x++)y[x]=y[2*x+1]<<16|y[2*x];for(x=g;x<2*g;x++)y[x]=0;return new l(y,0)};function O(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function $(v,g){this.g=v,this.h=g}function Z(v,g){if(S(g))throw Error("division by zero");if(S(v))return new $(E,E);if(k(v))return g=Z(V(v),g),new $(V(g.g),V(g.h));if(k(g))return g=Z(v,V(g)),new $(V(g.g),g.h);if(30<v.g.length){if(k(v)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=A,x=g;0>=x.l(v);)y=be(y),x=be(x);var w=re(y,1),I=re(x,1);for(x=re(x,2),y=re(y,2);!S(x);){var _=I.add(x);0>=_.l(v)&&(w=w.add(y),I=_),x=re(x,1),y=re(y,1)}return g=D(v,w.j(g)),new $(w,g)}for(w=E;0<=v.l(g);){for(y=Math.max(1,Math.floor(v.m()/g.m())),x=Math.ceil(Math.log(y)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),I=m(y),_=I.j(g);k(_)||0<_.l(v);)y-=x,I=m(y),_=I.j(g);S(I)&&(I=A),w=w.add(I),v=D(v,_)}return new $(w,v)}r.A=function(v){return Z(this,v).h},r.and=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],x=0;x<g;x++)y[x]=this.i(x)&v.i(x);return new l(y,this.h&v.h)},r.or=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],x=0;x<g;x++)y[x]=this.i(x)|v.i(x);return new l(y,this.h|v.h)},r.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),y=[],x=0;x<g;x++)y[x]=this.i(x)^v.i(x);return new l(y,this.h^v.h)};function be(v){for(var g=v.g.length+1,y=[],x=0;x<g;x++)y[x]=v.i(x)<<1|v.i(x-1)>>>31;return new l(y,v.h)}function re(v,g){var y=g>>5;g%=32;for(var x=v.g.length-y,w=[],I=0;I<x;I++)w[I]=0<g?v.i(I+y)>>>g|v.i(I+y+1)<<32-g:v.i(I+y);return new l(w,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Qo=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=p,rt=l}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});var zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wo,Jt,Ho,Qn,Jr,Yo,Xo,Jo;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof zn=="object"&&zn];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=t(this);function i(s,a){if(a)e:{var u=n;s=s.split(".");for(var f=0;f<s.length-1;f++){var T=s[f];if(!(T in u))break e;u=u[T]}s=s[s.length-1],f=u[s],a=a(f),a!=f&&a!=null&&e(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,f=!1,T={next:function(){if(!f&&u<s.length){var b=u++;return{value:a(b,s[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function m(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function p(s,a,u){return s.call.apply(s.bind,arguments)}function E(s,a,u){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,f),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function A(s,a,u){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:E,A.apply(null,arguments)}function P(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function S(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(f,T,b){for(var C=Array(arguments.length-2),H=2;H<arguments.length;H++)C[H-2]=arguments[H];return a.prototype[T].apply(f,C)}}function k(s){const a=s.length;if(0<a){const u=Array(a);for(let f=0;f<a;f++)u[f]=s[f];return u}return[]}function V(s,a){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const T=s.length||0,b=f.length||0;s.length=T+b;for(let C=0;C<b;C++)s[T+C]=f[C]}else s.push(f)}}class D{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function O(s){return/^[\s\xa0]*$/.test(s)}function $(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function Z(s){return Z[" "](s),s}Z[" "]=function(){};var be=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function re(s,a,u){for(const f in s)a.call(u,s[f],f,s)}function v(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function g(s){const a={};for(const u in s)a[u]=s[u];return a}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(s,a){let u,f;for(let T=1;T<arguments.length;T++){f=arguments[T];for(u in f)s[u]=f[u];for(let b=0;b<y.length;b++)u=y[b],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function w(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function I(s){c.setTimeout(()=>{throw s},0)}function _(){var s=Tr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class je{constructor(){this.h=this.g=null}add(a,u){const f=kt.get();f.set(a,u),this.h?this.h.next=f:this.g=f,this.h=f}}var kt=new D(()=>new _l,s=>s.reset());class _l{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Dt,jt=!1,Tr=new je,Ws=()=>{const s=c.Promise.resolve(void 0);Dt=()=>{s.then(vl)}};var vl=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(u){I(u)}var a=kt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}jt=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var xl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return s}();function Mt(s,a){if(fe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(be){e:{try{Z(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:wl[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Mt.aa.h.call(this)}}S(Mt,fe);var wl={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Tn="closure_listenable_"+(1e6*Math.random()|0),El=0;function Tl(s,a,u,f,T){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!f,this.ha=T,this.key=++El,this.da=this.fa=!1}function In(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function An(s){this.src=s,this.g={},this.h=0}An.prototype.add=function(s,a,u,f,T){var b=s.toString();s=this.g[b],s||(s=this.g[b]=[],this.h++);var C=Ar(s,a,f,T);return-1<C?(a=s[C],u||(a.fa=!1)):(a=new Tl(a,this.src,b,!!f,T),a.fa=u,s.push(a)),a};function Ir(s,a){var u=a.type;if(u in s.g){var f=s.g[u],T=Array.prototype.indexOf.call(f,a,void 0),b;(b=0<=T)&&Array.prototype.splice.call(f,T,1),b&&(In(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Ar(s,a,u,f){for(var T=0;T<s.length;++T){var b=s[T];if(!b.da&&b.listener==a&&b.capture==!!u&&b.ha==f)return T}return-1}var br="closure_lm_"+(1e6*Math.random()|0),Rr={};function Hs(s,a,u,f,T){if(Array.isArray(a)){for(var b=0;b<a.length;b++)Hs(s,a[b],u,f,T);return null}return u=Js(u),s&&s[Tn]?s.K(a,u,m(f)?!!f.capture:!1,T):Il(s,a,u,!1,f,T)}function Il(s,a,u,f,T,b){if(!a)throw Error("Invalid event type");var C=m(T)?!!T.capture:!!T,H=Nr(s);if(H||(s[br]=H=new An(s)),u=H.add(a,u,f,C,b),u.proxy)return u;if(f=Al(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)xl||(T=C),T===void 0&&(T=!1),s.addEventListener(a.toString(),f,T);else if(s.attachEvent)s.attachEvent(Xs(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Al(){function s(u){return a.call(s.src,s.listener,u)}const a=bl;return s}function Ys(s,a,u,f,T){if(Array.isArray(a))for(var b=0;b<a.length;b++)Ys(s,a[b],u,f,T);else f=m(f)?!!f.capture:!!f,u=Js(u),s&&s[Tn]?(s=s.i,a=String(a).toString(),a in s.g&&(b=s.g[a],u=Ar(b,u,f,T),-1<u&&(In(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete s.g[a],s.h--)))):s&&(s=Nr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Ar(a,u,f,T)),(u=-1<s?a[s]:null)&&Pr(u))}function Pr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Tn])Ir(a.i,s);else{var u=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(u,f,s.capture):a.detachEvent?a.detachEvent(Xs(u),f):a.addListener&&a.removeListener&&a.removeListener(f),(u=Nr(a))?(Ir(u,s),u.h==0&&(u.src=null,a[br]=null)):In(s)}}}function Xs(s){return s in Rr?Rr[s]:Rr[s]="on"+s}function bl(s,a){if(s.da)s=!0;else{a=new Mt(a,this);var u=s.listener,f=s.ha||s.src;s.fa&&Pr(s),s=u.call(f,a)}return s}function Nr(s){return s=s[br],s instanceof An?s:null}var Sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Js(s){return typeof s=="function"?s:(s[Sr]||(s[Sr]=function(a){return s.handleEvent(a)}),s[Sr])}function me(){Ue.call(this),this.i=new An(this),this.M=this,this.F=null}S(me,Ue),me.prototype[Tn]=!0,me.prototype.removeEventListener=function(s,a,u,f){Ys(this,s,a,u,f)};function xe(s,a){var u,f=s.F;if(f)for(u=[];f;f=f.F)u.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new fe(a,s);else if(a instanceof fe)a.target=a.target||s;else{var T=a;a=new fe(f,s),x(a,T)}if(T=!0,u)for(var b=u.length-1;0<=b;b--){var C=a.g=u[b];T=bn(C,f,!0,a)&&T}if(C=a.g=s,T=bn(C,f,!0,a)&&T,T=bn(C,f,!1,a)&&T,u)for(b=0;b<u.length;b++)C=a.g=u[b],T=bn(C,f,!1,a)&&T}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],f=0;f<u.length;f++)In(u[f]);delete s.g[a],s.h--}}this.F=null},me.prototype.K=function(s,a,u,f){return this.i.add(String(s),a,!1,u,f)},me.prototype.L=function(s,a,u,f){return this.i.add(String(s),a,!0,u,f)};function bn(s,a,u,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,b=0;b<a.length;++b){var C=a[b];if(C&&!C.da&&C.capture==u){var H=C.listener,le=C.ha||C.src;C.fa&&Ir(s.i,C),T=H.call(le,f)!==!1&&T}}return T&&!f.defaultPrevented}function Zs(s,a,u){if(typeof s=="function")u&&(s=A(s,u));else if(s&&typeof s.handleEvent=="function")s=A(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function ei(s){s.g=Zs(()=>{s.g=null,s.i&&(s.i=!1,ei(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Rl extends Ue{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ei(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(s){Ue.call(this),this.h=s,this.g={}}S(Lt,Ue);var ti=[];function ni(s){re(s.g,function(a,u){this.g.hasOwnProperty(u)&&Pr(a)},s),s.g={}}Lt.prototype.N=function(){Lt.aa.N.call(this),ni(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=c.JSON.stringify,Pl=c.JSON.parse,Nl=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Cr(){}Cr.prototype.h=null;function ri(s){return s.h||(s.h=s.i())}function si(){}var Ot={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kr(){fe.call(this,"d")}S(kr,fe);function Dr(){fe.call(this,"c")}S(Dr,fe);var Xe={},ii=null;function Rn(){return ii=ii||new me}Xe.La="serverreachability";function oi(s){fe.call(this,Xe.La,s)}S(oi,fe);function Ft(s){const a=Rn();xe(a,new oi(a))}Xe.STAT_EVENT="statevent";function ai(s,a){fe.call(this,Xe.STAT_EVENT,s),this.stat=a}S(ai,fe);function we(s){const a=Rn();xe(a,new ai(a,s))}Xe.Ma="timingevent";function li(s,a){fe.call(this,Xe.Ma,s),this.size=a}S(li,fe);function Ut(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function qt(){this.g=!0}qt.prototype.xa=function(){this.g=!1};function Sl(s,a,u,f,T,b){s.info(function(){if(s.g)if(b)for(var C="",H=b.split("&"),le=0;le<H.length;le++){var K=H[le].split("=");if(1<K.length){var pe=K[0];K=K[1];var ge=pe.split("_");C=2<=ge.length&&ge[1]=="type"?C+(pe+"="+K+"&"):C+(pe+"=redacted&")}}else C=null;else C=b;return"XMLHTTP REQ ("+f+") [attempt "+T+"]: "+a+`
`+u+`
`+C})}function Vl(s,a,u,f,T,b,C){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+T+"]: "+a+`
`+u+`
`+b+" "+C})}function dt(s,a,u,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+kl(s,u)+(f?" "+f:"")})}function Cl(s,a){s.info(function(){return"TIMEOUT: "+a})}qt.prototype.info=function(){};function kl(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var f=u[s];if(!(2>f.length)){var T=f[1];if(Array.isArray(T)&&!(1>T.length)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return Vr(u)}catch{return a}}var Pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ui={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function Nn(){}S(Nn,Cr),Nn.prototype.g=function(){return new XMLHttpRequest},Nn.prototype.i=function(){return{}},jr=new Nn;function qe(s,a,u,f){this.j=s,this.i=a,this.l=u,this.R=f||1,this.U=new Lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ci}function ci(){this.i=null,this.g="",this.h=!1}var hi={},Mr={};function Lr(s,a,u){s.L=1,s.v=kn(Me(a)),s.m=u,s.P=!0,di(s,null)}function di(s,a){s.F=Date.now(),Sn(s),s.A=Me(s.v);var u=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),bi(u.i,"t",f),s.C=0,u=s.j.J,s.h=new ci,s.g=$i(s.j,u?a:null,!s.m),0<s.O&&(s.M=new Rl(A(s.Y,s,s.g),s.O)),a=s.U,u=s.g,f=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(ti[0]=T.toString()),T=ti);for(var b=0;b<T.length;b++){var C=Hs(u,T[b],f||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ft(),Sl(s.i,s.u,s.A,s.l,s.R,s.m)}qe.prototype.ca=function(s){s=s.target;const a=this.M;a&&Le(s)==3?a.j():this.Y(s)},qe.prototype.Y=function(s){try{if(s==this.g)e:{const ge=Le(this.g);var a=this.g.Ba();const pt=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||ki(this.g)))){this.J||ge!=4||a==7||(a==8||0>=pt?Ft(3):Ft(2)),Or(this);var u=this.g.Z();this.X=u;t:if(fi(this)){var f=ki(this.g);s="";var T=f.length,b=Le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Je(this),Bt(this);var C="";break t}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(b&&a==T-1)});f.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,Vl(this.i,this.u,this.A,this.l,this.R,ge,u),this.o){if(this.T&&!this.K){t:{if(this.g){var H,le=this.g;if((H=le.g?le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(H)){var K=H;break t}}K=null}if(u=K)dt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fr(this,u);else{this.o=!1,this.s=3,we(12),Je(this),Bt(this);break e}}if(this.P){u=!0;let Re;for(;!this.J&&this.C<C.length;)if(Re=Dl(this,C),Re==Mr){ge==4&&(this.s=4,we(14),u=!1),dt(this.i,this.l,null,"[Incomplete Response]");break}else if(Re==hi){this.s=4,we(15),dt(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else dt(this.i,this.l,Re,null),Fr(this,Re);if(fi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||C.length!=0||this.h.h||(this.s=1,we(16),u=!1),this.o=this.o&&u,!u)dt(this.i,this.l,C,"[Invalid Chunked Response]"),Je(this),Bt(this);else if(0<C.length&&!this.W){this.W=!0;var pe=this.j;pe.g==this&&pe.ba&&!pe.M&&(pe.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Gr(pe),pe.M=!0,we(11))}}else dt(this.i,this.l,C,null),Fr(this,C);ge==4&&Je(this),this.o&&!this.J&&(ge==4?Ui(this.j,this):(this.o=!1,Sn(this)))}else Xl(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,we(12)):(this.s=0,we(13)),Je(this),Bt(this)}}}catch{}finally{}};function fi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Dl(s,a){var u=s.C,f=a.indexOf(`
`,u);return f==-1?Mr:(u=Number(a.substring(u,f)),isNaN(u)?hi:(f+=1,f+u>a.length?Mr:(a=a.slice(f,f+u),s.C=f+u,a)))}qe.prototype.cancel=function(){this.J=!0,Je(this)};function Sn(s){s.S=Date.now()+s.I,mi(s,s.I)}function mi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ut(A(s.ba,s),a)}function Or(s){s.B&&(c.clearTimeout(s.B),s.B=null)}qe.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Cl(this.i,this.A),this.L!=2&&(Ft(),we(17)),Je(this),this.s=2,Bt(this)):mi(this,this.S-s)};function Bt(s){s.j.G==0||s.J||Ui(s.j,s)}function Je(s){Or(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ni(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Fr(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||Ur(u.h,s))){if(!s.K&&Ur(u.h,s)&&u.G==3){try{var f=u.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var T=f;if(T[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Fn(u),Ln(u);else break e;$r(u),we(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ut(A(u.Za,u),6e3));if(1>=yi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else et(u,11)}else if((s.K||u.g==s)&&Fn(u),!O(a))for(T=u.Da.g.parse(a),a=0;a<T.length;a++){let K=T[a];if(u.T=K[0],K=K[1],u.G==2)if(K[0]=="c"){u.K=K[1],u.ia=K[2];const pe=K[3];pe!=null&&(u.la=pe,u.j.info("VER="+u.la));const ge=K[4];ge!=null&&(u.Aa=ge,u.j.info("SVER="+u.Aa));const pt=K[5];pt!=null&&typeof pt=="number"&&0<pt&&(f=1.5*pt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Re=s.g;if(Re){const qn=Re.g?Re.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qn){var b=f.h;b.g||qn.indexOf("spdy")==-1&&qn.indexOf("quic")==-1&&qn.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(qr(b,b.h),b.h=null))}if(f.D){const Kr=Re.g?Re.g.getResponseHeader("X-HTTP-Session-Id"):null;Kr&&(f.ya=Kr,X(f.I,f.D,Kr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var C=s;if(f.qa=zi(f,f.J?f.ia:null,f.W),C.K){_i(f.h,C);var H=C,le=f.L;le&&(H.I=le),H.B&&(Or(H),Sn(H)),f.g=C}else Oi(f);0<u.i.length&&On(u)}else K[0]!="stop"&&K[0]!="close"||et(u,7);else u.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?et(u,7):zr(u):K[0]!="noop"&&u.l&&u.l.ta(K),u.v=0)}}Ft(4)}catch{}}var jl=class{constructor(s,a){this.g=s,this.map=a}};function pi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function yi(s){return s.h?1:s.g?s.g.size:0}function Ur(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function qr(s,a){s.g?s.g.add(a):s.h=a}function _i(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}pi.prototype.cancel=function(){if(this.i=vi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function vi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return k(s.i)}function Ml(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],u=s.length,f=0;f<u;f++)a.push(s[f]);return a}a=[],u=0;for(f in s)a[u++]=s[f];return a}function Ll(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const f in s)a[u++]=f;return a}}}function xi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=Ll(s),f=Ml(s),T=f.length,b=0;b<T;b++)a.call(void 0,f[b],u&&u[b],s)}var wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ol(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var f=s[u].indexOf("="),T=null;if(0<=f){var b=s[u].substring(0,f);T=s[u].substring(f+1)}else b=s[u];a(b,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Ze(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Ze){this.h=s.h,Vn(this,s.j),this.o=s.o,this.g=s.g,Cn(this,s.s),this.l=s.l;var a=s.i,u=new Gt;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Ei(this,u),this.m=s.m}else s&&(a=String(s).match(wi))?(this.h=!1,Vn(this,a[1]||"",!0),this.o=zt(a[2]||""),this.g=zt(a[3]||"",!0),Cn(this,a[4]),this.l=zt(a[5]||"",!0),Ei(this,a[6]||"",!0),this.m=zt(a[7]||"")):(this.h=!1,this.i=new Gt(null,this.h))}Ze.prototype.toString=function(){var s=[],a=this.j;a&&s.push($t(a,Ti,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push($t(a,Ti,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push($t(u,u.charAt(0)=="/"?ql:Ul,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",$t(u,zl)),s.join("")};function Me(s){return new Ze(s)}function Vn(s,a,u){s.j=u?zt(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Cn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ei(s,a,u){a instanceof Gt?(s.i=a,$l(s.i,s.h)):(u||(a=$t(a,Bl)),s.i=new Gt(a,s.h))}function X(s,a,u){s.i.set(a,u)}function kn(s){return X(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function zt(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function $t(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,Fl),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Fl(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ti=/[#\/\?@]/g,Ul=/[#\?:]/g,ql=/[#\?]/g,Bl=/[#\?@]/g,zl=/#/g;function Gt(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Be(s){s.g||(s.g=new Map,s.h=0,s.i&&Ol(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}r=Gt.prototype,r.add=function(s,a){Be(this),this.i=null,s=ft(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function Ii(s,a){Be(s),a=ft(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ai(s,a){return Be(s),a=ft(s,a),s.g.has(a)}r.forEach=function(s,a){Be(this),this.g.forEach(function(u,f){u.forEach(function(T){s.call(a,T,f,this)},this)},this)},r.na=function(){Be(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let f=0;f<a.length;f++){const T=s[f];for(let b=0;b<T.length;b++)u.push(a[f])}return u},r.V=function(s){Be(this);let a=[];if(typeof s=="string")Ai(this,s)&&(a=a.concat(this.g.get(ft(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},r.set=function(s,a){return Be(this),this.i=null,s=ft(this,s),Ai(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function bi(s,a,u){Ii(s,a),0<u.length&&(s.i=null,s.g.set(ft(s,a),k(u)),s.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var f=a[u];const b=encodeURIComponent(String(f)),C=this.V(f);for(f=0;f<C.length;f++){var T=b;C[f]!==""&&(T+="="+encodeURIComponent(String(C[f]))),s.push(T)}}return this.i=s.join("&")};function ft(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function $l(s,a){a&&!s.j&&(Be(s),s.i=null,s.g.forEach(function(u,f){var T=f.toLowerCase();f!=T&&(Ii(this,f),bi(this,T,u))},s)),s.j=a}function Gl(s,a){const u=new qt;if(c.Image){const f=new Image;f.onload=P(ze,u,"TestLoadImage: loaded",!0,a,f),f.onerror=P(ze,u,"TestLoadImage: error",!1,a,f),f.onabort=P(ze,u,"TestLoadImage: abort",!1,a,f),f.ontimeout=P(ze,u,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function Kl(s,a){const u=new qt,f=new AbortController,T=setTimeout(()=>{f.abort(),ze(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(b=>{clearTimeout(T),b.ok?ze(u,"TestPingServer: ok",!0,a):ze(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),ze(u,"TestPingServer: error",!1,a)})}function ze(s,a,u,f,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),f(u)}catch{}}function Ql(){this.g=new Nl}function Wl(s,a,u){const f=u||"";try{xi(s,function(T,b){let C=T;m(T)&&(C=Vr(T)),a.push(f+b+"="+encodeURIComponent(C))})}catch(T){throw a.push(f+"type="+encodeURIComponent("_badmap")),T}}function Dn(s){this.l=s.Ub||null,this.j=s.eb||!1}S(Dn,Cr),Dn.prototype.g=function(){return new jn(this.l,this.j)},Dn.prototype.i=function(s){return function(){return s}}({});function jn(s,a){me.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(jn,me),r=jn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Qt(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Kt(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Qt(this)),this.g&&(this.readyState=3,Qt(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ri(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ri(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Kt(this):Qt(this),this.readyState==3&&Ri(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Kt(this))},r.Qa=function(s){this.g&&(this.response=s,Kt(this))},r.ga=function(){this.g&&Kt(this)};function Kt(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Qt(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Qt(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Pi(s){let a="";return re(s,function(u,f){a+=f,a+=":",a+=u,a+=`\r
`}),a}function Br(s,a,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Pi(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):X(s,a,u))}function te(s){me.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(te,me);var Hl=/^https?$/i,Yl=["POST","PUT"];r=te.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?ri(this.o):ri(jr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(b){Ni(this,b);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var T in f)u.set(T,f[T]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Yl,a,void 0))||f||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,C]of u)this.g.setRequestHeader(b,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ci(this),this.u=!0,this.g.send(s),this.u=!1}catch(b){Ni(this,b)}};function Ni(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Si(s),Mn(s)}function Si(s){s.A||(s.A=!0,xe(s,"complete"),xe(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,xe(this,"complete"),xe(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mn(this,!0)),te.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Vi(this):this.bb())},r.bb=function(){Vi(this)};function Vi(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Le(s)!=4||s.Z()!=2)){if(s.u&&Le(s)==4)Zs(s.Ea,0,s);else if(xe(s,"readystatechange"),Le(s)==4){s.h=!1;try{const C=s.Z();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var u;if(!(u=a)){var f;if(f=C===0){var T=String(s.D).match(wi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),f=!Hl.test(T?T.toLowerCase():"")}u=f}if(u)xe(s,"complete"),xe(s,"success");else{s.m=6;try{var b=2<Le(s)?s.g.statusText:""}catch{b=""}s.l=b+" ["+s.Z()+"]",Si(s)}}finally{Mn(s)}}}}function Mn(s,a){if(s.g){Ci(s);const u=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||xe(s,"ready");try{u.onreadystatechange=f}catch{}}}function Ci(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Le(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Le(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Pl(a)}};function ki(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Xl(s){const a={};s=(s.g&&2<=Le(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(O(s[f]))continue;var u=w(s[f]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=a[T]||[];a[T]=b,b.push(u)}v(a,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wt(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function Di(s){this.Aa=0,this.i=[],this.j=new qt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wt("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wt("baseRetryDelayMs",5e3,s),this.cb=Wt("retryDelaySeedMs",1e4,s),this.Wa=Wt("forwardChannelMaxRetries",2,s),this.wa=Wt("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new pi(s&&s.concurrentRequestLimit),this.Da=new Ql,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Di.prototype,r.la=8,r.G=1,r.connect=function(s,a,u,f){we(0),this.W=s,this.H=a||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=zi(this,null,this.W),On(this)};function zr(s){if(ji(s),s.G==3){var a=s.U++,u=Me(s.I);if(X(u,"SID",s.K),X(u,"RID",a),X(u,"TYPE","terminate"),Ht(s,u),a=new qe(s,s.j,a),a.L=2,a.v=kn(Me(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=$i(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Sn(a)}Bi(s)}function Ln(s){s.g&&(Gr(s),s.g.cancel(),s.g=null)}function ji(s){Ln(s),s.u&&(c.clearTimeout(s.u),s.u=null),Fn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function On(s){if(!gi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Dt||Ws(),jt||(Dt(),jt=!0),Tr.add(a,s),s.B=0}}function Jl(s,a){return yi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ut(A(s.Ga,s,a),qi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new qe(this,this.j,s);let b=this.o;if(this.S&&(b?(b=g(b),x(b,this.S)):b=this.S),this.m!==null||this.O||(T.H=b,b=null),this.P)e:{for(var a=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=u;break e}if(a===4096||u===this.i.length-1){a=u+1;break e}}a=1e3}else a=1e3;a=Li(this,T,a),u=Me(this.I),X(u,"RID",s),X(u,"CVER",22),this.D&&X(u,"X-HTTP-Session-Id",this.D),Ht(this,u),b&&(this.O?a="headers="+encodeURIComponent(String(Pi(b)))+"&"+a:this.m&&Br(u,this.m,b)),qr(this.h,T),this.Ua&&X(u,"TYPE","init"),this.P?(X(u,"$req",a),X(u,"SID","null"),T.T=!0,Lr(T,u,null)):Lr(T,u,a),this.G=2}}else this.G==3&&(s?Mi(this,s):this.i.length==0||gi(this.h)||Mi(this))};function Mi(s,a){var u;a?u=a.l:u=s.U++;const f=Me(s.I);X(f,"SID",s.K),X(f,"RID",u),X(f,"AID",s.T),Ht(s,f),s.m&&s.o&&Br(f,s.m,s.o),u=new qe(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Li(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),qr(s.h,u),Lr(u,f,a)}function Ht(s,a){s.H&&re(s.H,function(u,f){X(a,f,u)}),s.l&&xi({},function(u,f){X(a,f,u)})}function Li(s,a,u){u=Math.min(s.i.length,u);var f=s.l?A(s.l.Na,s.l,s):null;e:{var T=s.i;let b=-1;for(;;){const C=["count="+u];b==-1?0<u?(b=T[0].g,C.push("ofs="+b)):b=0:C.push("ofs="+b);let H=!0;for(let le=0;le<u;le++){let K=T[le].g;const pe=T[le].map;if(K-=b,0>K)b=Math.max(0,T[le].g-100),H=!1;else try{Wl(pe,C,"req"+K+"_")}catch{f&&f(pe)}}if(H){f=C.join("&");break e}}}return s=s.i.splice(0,u),a.D=s,f}function Oi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Dt||Ws(),jt||(Dt(),jt=!0),Tr.add(a,s),s.v=0}}function $r(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ut(A(s.Fa,s),qi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Fi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ut(A(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,we(10),Ln(this),Fi(this))};function Gr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Fi(s){s.g=new qe(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Me(s.qa);X(a,"RID","rpc"),X(a,"SID",s.K),X(a,"AID",s.T),X(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&X(a,"TO",s.ja),X(a,"TYPE","xmlhttp"),Ht(s,a),s.m&&s.o&&Br(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=kn(Me(a)),u.m=null,u.P=!0,di(u,s)}r.Za=function(){this.C!=null&&(this.C=null,Ln(this),$r(this),we(19))};function Fn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Ui(s,a){var u=null;if(s.g==a){Fn(s),Gr(s),s.g=null;var f=2}else if(Ur(s.h,a))u=a.D,_i(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;f=Rn(),xe(f,new li(f,u)),On(s)}else Oi(s);else if(T=a.s,T==3||T==0&&0<a.X||!(f==1&&Jl(s,a)||f==2&&$r(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),T){case 1:et(s,5);break;case 4:et(s,10);break;case 3:et(s,6);break;default:et(s,2)}}}function qi(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function et(s,a){if(s.j.info("Error code "+a),a==2){var u=A(s.fb,s),f=s.Xa;const T=!f;f=new Ze(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Vn(f,"https"),kn(f),T?Gl(f.toString(),u):Kl(f.toString(),u)}else we(2);s.G=0,s.l&&s.l.sa(a),Bi(s),ji(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function Bi(s){if(s.G=0,s.ka=[],s.l){const a=vi(s.h);(a.length!=0||s.i.length!=0)&&(V(s.ka,a),V(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function zi(s,a,u){var f=u instanceof Ze?Me(u):new Ze(u);if(f.g!="")a&&(f.g=a+"."+f.g),Cn(f,f.s);else{var T=c.location;f=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var b=new Ze(null);f&&Vn(b,f),a&&(b.g=a),T&&Cn(b,T),u&&(b.l=u),f=b}return u=s.D,a=s.ya,u&&a&&X(f,u,a),X(f,"VER",s.la),Ht(s,f),f}function $i(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new te(new Dn({eb:u})):new te(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gi(){}r=Gi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Un(){}Un.prototype.g=function(s,a){return new Ie(s,a)};function Ie(s,a){me.call(this),this.g=new Di(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!O(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!O(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new mt(this)}S(Ie,me),Ie.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ie.prototype.close=function(){zr(this.g)},Ie.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Vr(s),s=u);a.i.push(new jl(a.Ya++,s)),a.G==3&&On(a)},Ie.prototype.N=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,Ie.aa.N.call(this)};function Ki(s){kr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const u in a){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}S(Ki,kr);function Qi(){Dr.call(this),this.status=1}S(Qi,Dr);function mt(s){this.g=s}S(mt,Gi),mt.prototype.ua=function(){xe(this.g,"a")},mt.prototype.ta=function(s){xe(this.g,new Ki(s))},mt.prototype.sa=function(s){xe(this.g,new Qi)},mt.prototype.ra=function(){xe(this.g,"b")},Un.prototype.createWebChannel=Un.prototype.g,Ie.prototype.send=Ie.prototype.o,Ie.prototype.open=Ie.prototype.m,Ie.prototype.close=Ie.prototype.close,Jo=function(){return new Un},Xo=function(){return Rn()},Yo=Xe,Jr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pn.NO_ERROR=0,Pn.TIMEOUT=8,Pn.HTTP_ERROR=6,Qn=Pn,ui.COMPLETE="complete",Ho=ui,si.EventType=Ot,Ot.OPEN="a",Ot.CLOSE="b",Ot.ERROR="c",Ot.MESSAGE="d",me.prototype.listen=me.prototype.K,Jt=si,te.prototype.listenOnce=te.prototype.L,te.prototype.getLastError=te.prototype.Ka,te.prototype.getLastErrorCode=te.prototype.Ba,te.prototype.getStatus=te.prototype.Z,te.prototype.getResponseJson=te.prototype.Oa,te.prototype.getResponseText=te.prototype.oa,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Ha,Wo=te}).apply(typeof zn<"u"?zn:typeof self<"u"?self:typeof window<"u"?window:{});const Ji="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new su("@firebase/firestore");function Yt(){return ot.logLevel}function M(r,...e){if(ot.logLevel<=$e.DEBUG){const t=e.map(ps);ot.debug(`Firestore (${Nt}): ${r}`,...t)}}function Oe(r,...e){if(ot.logLevel<=$e.ERROR){const t=e.map(ps);ot.error(`Firestore (${Nt}): ${r}`,...t)}}function wt(r,...e){if(ot.logLevel<=$e.WARN){const t=e.map(ps);ot.warn(`Firestore (${Nt}): ${r}`,...t)}}function ps(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(r="Unexpected state"){const e=`FIRESTORE (${Nt}) INTERNAL ASSERTION FAILED: `+r;throw Oe(e),new Error(e)}function W(r,e){r||F()}function q(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends au{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class Wu{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Hu{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let n=this.i;const i=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let o=new st;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new st,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new st)}},0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Zo(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new _e(e)}}class Yu{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xu{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Yu(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ju{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zu{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const n=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const i=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new Ju(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=ec(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<t&&(n+=e.charAt(i[o]%e.length))}return n}}function Q(r,e){return r<e?-1:r>e?1:0}function Et(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new oe(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Q(this.nanoseconds,e.nanoseconds):Q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new oe(0,0))}static max(){return new U(new oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n){t===void 0?t=0:t>e.length&&F(),n===void 0?n=e.length-t:n>e.length-t&&F(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return an.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof an?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const o=e.get(i),l=t.get(i);if(o<l)return-1;if(o>l)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class J extends an{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new j(R.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new J(t)}static emptyPath(){return new J([])}}const tc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ce extends an{construct(e,t,n){return new ce(e,t,n)}static isValidIdentifier(e){return tc.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ce(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const o=()=>{if(n.length===0)throw new j(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new j(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new j(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(n+=c,i++):(o(),i++)}if(o(),l)throw new j(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ce(t)}static emptyPath(){return new ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(J.fromString(e))}static fromName(e){return new L(J.fromString(e).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new J(e.slice()))}}function nc(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=U.fromTimestamp(n===1e9?new oe(t+1,0):new oe(t,n));return new Qe(i,L.empty(),e)}function rc(r){return new Qe(r.readTime,r.key,-1)}class Qe{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qe(U.min(),L.empty(),-1)}static max(){return new Qe(U.max(),L.empty(),-1)}}function sc(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(r.documentKey,e.documentKey),t!==0?t:Q(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(r){if(r.code!==R.FAILED_PRECONDITION||r.message!==ic)throw r;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,n)=>{t(e)})}static reject(e){return new N((t,n)=>{n(e)})}static waitFor(e){return new N((t,n)=>{let i=0,o=0,l=!1;e.forEach(c=>{++i,c.next(()=>{++o,l&&o===i&&t()},h=>n(h))}),l=!0,o===i&&t()})}static or(e){let t=N.resolve(!1);for(const n of e)t=t.next(i=>i?N.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,o)=>{n.push(t.call(this,i,o))}),this.waitFor(n)}static mapArray(e,t){return new N((n,i)=>{const o=e.length,l=new Array(o);let c=0;for(let h=0;h<o;h++){const m=h;t(e[m]).next(p=>{l[m]=p,++c,c===o&&n(l)},p=>i(p))}})}static doWhile(e,t){return new N((n,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):n()};o()})}}function ac(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gs.oe=-1;function ar(r){return r==null}function Jn(r){return r===0&&1/r==-1/0}function lc(r){return typeof r=="number"&&Number.isInteger(r)&&!Jn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ut(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function ta(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $n(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $n(this.root,e,this.comparator,!1)}getReverseIterator(){return new $n(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $n(this.root,e,this.comparator,!0)}}class $n{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,n,i,o){this.key=e,this.value=t,this.color=n??ue.RED,this.left=i??ue.EMPTY,this.right=o??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,o){return new ue(e??this.key,t??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ue.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,n,i,o){return this}insert(e,t,n){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new eo(this.data.getIterator())}getIteratorFrom(e){return new eo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class eo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.fields=e,e.sort(ce.comparator)}static empty(){return new Ae([])}unionWith(e){let t=new he(ce.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ae(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Et(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new na("Invalid base64 string: "+o):o}}(e);return new de(t)}static fromUint8Array(e){const t=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(e);return new de(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const uc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function We(r){if(W(!!r),typeof r=="string"){let e=0;const t=uc.exec(r);if(W(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ne(r.seconds),nanos:ne(r.nanos)}}function ne(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function at(r){return typeof r=="string"?de.fromBase64String(r):de.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function _s(r){const e=r.mapValue.fields.__previous_value__;return ys(e)?_s(e):e}function ln(r){const e=We(r.mapValue.fields.__local_write_time__.timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,n,i,o,l,c,h,m){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=m}}class un{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new un("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof un&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn={mapValue:{}};function lt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ys(r)?4:dc(r)?9007199254740991:hc(r)?10:11:F()}function De(r,e){if(r===e)return!0;const t=lt(r);if(t!==lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ln(r).isEqual(ln(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=We(i.timestampValue),c=We(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,o){return at(i.bytesValue).isEqual(at(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,o){return ne(i.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(r,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ne(i.integerValue)===ne(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ne(i.doubleValue),c=ne(o.doubleValue);return l===c?Jn(l)===Jn(c):isNaN(l)&&isNaN(c)}return!1}(r,e);case 9:return Et(r.arrayValue.values||[],e.arrayValue.values||[],De);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Zi(l)!==Zi(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!De(l[h],c[h])))return!1;return!0}(r,e);default:return F()}}function cn(r,e){return(r.values||[]).find(t=>De(t,e))!==void 0}function Tt(r,e){if(r===e)return 0;const t=lt(r),n=lt(e);if(t!==n)return Q(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Q(r.booleanValue,e.booleanValue);case 2:return function(o,l){const c=ne(o.integerValue||o.doubleValue),h=ne(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,e);case 3:return to(r.timestampValue,e.timestampValue);case 4:return to(ln(r),ln(e));case 5:return Q(r.stringValue,e.stringValue);case 6:return function(o,l){const c=at(o),h=at(l);return c.compareTo(h)}(r.bytesValue,e.bytesValue);case 7:return function(o,l){const c=o.split("/"),h=l.split("/");for(let m=0;m<c.length&&m<h.length;m++){const p=Q(c[m],h[m]);if(p!==0)return p}return Q(c.length,h.length)}(r.referenceValue,e.referenceValue);case 8:return function(o,l){const c=Q(ne(o.latitude),ne(l.latitude));return c!==0?c:Q(ne(o.longitude),ne(l.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return no(r.arrayValue,e.arrayValue);case 10:return function(o,l){var c,h,m,p;const E=o.fields||{},A=l.fields||{},P=(c=E.value)===null||c===void 0?void 0:c.arrayValue,S=(h=A.value)===null||h===void 0?void 0:h.arrayValue,k=Q(((m=P==null?void 0:P.values)===null||m===void 0?void 0:m.length)||0,((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0);return k!==0?k:no(P,S)}(r.mapValue,e.mapValue);case 11:return function(o,l){if(o===Gn.mapValue&&l===Gn.mapValue)return 0;if(o===Gn.mapValue)return 1;if(l===Gn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),m=l.fields||{},p=Object.keys(m);h.sort(),p.sort();for(let E=0;E<h.length&&E<p.length;++E){const A=Q(h[E],p[E]);if(A!==0)return A;const P=Tt(c[h[E]],m[p[E]]);if(P!==0)return P}return Q(h.length,p.length)}(r.mapValue,e.mapValue);default:throw F()}}function to(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Q(r,e);const t=We(r),n=We(e),i=Q(t.seconds,n.seconds);return i!==0?i:Q(t.nanos,n.nanos)}function no(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const o=Tt(t[i],n[i]);if(o)return o}return Q(t.length,n.length)}function It(r){return Zr(r)}function Zr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=We(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return at(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return L.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const o of t.values||[])i?i=!1:n+=",",n+=Zr(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const l of n)o?o=!1:i+=",",i+=`${l}:${Zr(t.fields[l])}`;return i+"}"}(r.mapValue):F()}function ro(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function es(r){return!!r&&"integerValue"in r}function vs(r){return!!r&&"arrayValue"in r}function so(r){return!!r&&"nullValue"in r}function io(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Wn(r){return!!r&&"mapValue"in r}function hc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function nn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ut(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=nn(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nn(r.arrayValue.values[t]);return e}return Object.assign({},r)}function dc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.value=e}static empty(){return new Ee({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Wn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nn(t)}setAll(e){let t=ce.emptyPath(),n={},i=[];e.forEach((l,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,n,i),n={},i=[],t=c.popLast()}l?n[c.lastSegment()]=nn(l):i.push(c.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,n,i)}delete(e){const t=this.field(e.popLast());Wn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return De(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Wn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ut(t,(i,o)=>e[i]=o);for(const i of n)delete e[i]}clone(){return new Ee(nn(this.value))}}function ra(r){const e=[];return ut(r.fields,(t,n)=>{const i=new ce([t]);if(Wn(n)){const o=ra(n.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new Ae(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t,n,i,o,l,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(e){return new ve(e,0,U.min(),U.min(),U.min(),Ee.empty(),0)}static newFoundDocument(e,t,n,i){return new ve(e,1,t,U.min(),n,i,0)}static newNoDocument(e,t){return new ve(e,2,t,U.min(),U.min(),Ee.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,U.min(),U.min(),Ee.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ee.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ee.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.position=e,this.inclusive=t}}function oo(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const o=e[i],l=r.position[i];if(o.field.isKeyField()?n=L.comparator(L.fromName(l.referenceValue),t.key):n=Tt(l,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ao(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!De(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t="asc"){this.field=e,this.dir=t}}function fc(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{}class ie extends sa{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new pc(e,t,n):t==="array-contains"?new _c(e,n):t==="in"?new vc(e,n):t==="not-in"?new xc(e,n):t==="array-contains-any"?new wc(e,n):new ie(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new gc(e,n):new yc(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Tt(t,this.value)):t!==null&&lt(this.value)===lt(t)&&this.matchesComparison(Tt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pe extends sa{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Pe(e,t)}matches(e){return ia(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ia(r){return r.op==="and"}function oa(r){return mc(r)&&ia(r)}function mc(r){for(const e of r.filters)if(e instanceof Pe)return!1;return!0}function ts(r){if(r instanceof ie)return r.field.canonicalString()+r.op.toString()+It(r.value);if(oa(r))return r.filters.map(e=>ts(e)).join(",");{const e=r.filters.map(t=>ts(t)).join(",");return`${r.op}(${e})`}}function aa(r,e){return r instanceof ie?function(n,i){return i instanceof ie&&n.op===i.op&&n.field.isEqual(i.field)&&De(n.value,i.value)}(r,e):r instanceof Pe?function(n,i){return i instanceof Pe&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,l,c)=>o&&aa(l,i.filters[c]),!0):!1}(r,e):void F()}function la(r){return r instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${It(t.value)}`}(r):r instanceof Pe?function(t){return t.op.toString()+" {"+t.getFilters().map(la).join(" ,")+"}"}(r):"Filter"}class pc extends ie{constructor(e,t,n){super(e,t,n),this.key=L.fromName(n.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class gc extends ie{constructor(e,t){super(e,"in",t),this.keys=ua("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yc extends ie{constructor(e,t){super(e,"not-in",t),this.keys=ua("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ua(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>L.fromName(n.referenceValue))}class _c extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vs(t)&&cn(t.arrayValue,this.value)}}class vc extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cn(this.value.arrayValue,t)}}class xc extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!cn(this.value.arrayValue,t)}}class wc extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>cn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t=null,n=[],i=[],o=null,l=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function lo(r,e=null,t=[],n=[],i=null,o=null,l=null){return new Ec(r,e,t,n,i,o,l)}function xs(r){const e=q(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>ts(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),ar(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>It(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>It(n)).join(",")),e.ue=t}return e.ue}function ws(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!fc(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!aa(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ao(r.startAt,e.startAt)&&ao(r.endAt,e.endAt)}function ns(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t=null,n=[],i=[],o=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Tc(r,e,t,n,i,o,l,c){return new St(r,e,t,n,i,o,l,c)}function Es(r){return new St(r)}function uo(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ca(r){return r.collectionGroup!==null}function rn(r){const e=q(r);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new he(ce.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new hn(o,n))}),t.has(ce.keyField().canonicalString())||e.ce.push(new hn(ce.keyField(),n))}return e.ce}function Se(r){const e=q(r);return e.le||(e.le=Ic(e,rn(r))),e.le}function Ic(r,e){if(r.limitType==="F")return lo(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new hn(i.field,o)});const t=r.endAt?new Zn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Zn(r.startAt.position,r.startAt.inclusive):null;return lo(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function rs(r,e){const t=r.filters.concat([e]);return new St(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ss(r,e,t){return new St(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function lr(r,e){return ws(Se(r),Se(e))&&r.limitType===e.limitType}function ha(r){return`${xs(Se(r))}|lt:${r.limitType}`}function yt(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>la(i)).join(", ")}]`),ar(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>It(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>It(i)).join(",")),`Target(${n})`}(Se(r))}; limitType=${r.limitType})`}function ur(r,e){return e.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):L.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,e)&&function(n,i){for(const o of rn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(l,c,h){const m=oo(l,c,h);return l.inclusive?m<=0:m<0}(n.startAt,rn(n),i)||n.endAt&&!function(l,c,h){const m=oo(l,c,h);return l.inclusive?m>=0:m>0}(n.endAt,rn(n),i))}(r,e)}function Ac(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function da(r){return(e,t)=>{let n=!1;for(const i of rn(r)){const o=bc(i,e,t);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function bc(r,e,t){const n=r.field.isKeyField()?L.comparator(e.key,t.key):function(o,l,c){const h=l.data.field(o),m=c.data.field(o);return h!==null&&m!==null?Tt(h,m):F()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return F()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ut(this.inner,(t,n)=>{for(const[i,o]of n)e(i,o)})}isEmpty(){return ta(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new ee(L.comparator);function Fe(){return Rc}const fa=new ee(L.comparator);function Zt(...r){let e=fa;for(const t of r)e=e.insert(t.key,t);return e}function ma(r){let e=fa;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function nt(){return sn()}function pa(){return sn()}function sn(){return new Vt(r=>r.toString(),(r,e)=>r.isEqual(e))}const Pc=new ee(L.comparator),Nc=new he(L.comparator);function B(...r){let e=Nc;for(const t of r)e=e.add(t);return e}const Sc=new he(Q);function Vc(){return Sc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(e)?"-0":e}}function ga(r){return{integerValue:""+r}}function Cc(r,e){return lc(e)?ga(e):Ts(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this._=void 0}}function kc(r,e,t){return r instanceof dn?function(i,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ys(o)&&(o=_s(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(t,e):r instanceof fn?_a(r,e):r instanceof mn?va(r,e):function(i,o){const l=ya(i,o),c=co(l)+co(i.Pe);return es(l)&&es(i.Pe)?ga(c):Ts(i.serializer,c)}(r,e)}function Dc(r,e,t){return r instanceof fn?_a(r,e):r instanceof mn?va(r,e):t}function ya(r,e){return r instanceof er?function(n){return es(n)||function(o){return!!o&&"doubleValue"in o}(n)}(e)?e:{integerValue:0}:null}class dn extends cr{}class fn extends cr{constructor(e){super(),this.elements=e}}function _a(r,e){const t=xa(e);for(const n of r.elements)t.some(i=>De(i,n))||t.push(n);return{arrayValue:{values:t}}}class mn extends cr{constructor(e){super(),this.elements=e}}function va(r,e){let t=xa(e);for(const n of r.elements)t=t.filter(i=>!De(i,n));return{arrayValue:{values:t}}}class er extends cr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function co(r){return ne(r.integerValue||r.doubleValue)}function xa(r){return vs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.field=e,this.transform=t}}function Mc(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof fn&&i instanceof fn||n instanceof mn&&i instanceof mn?Et(n.elements,i.elements,De):n instanceof er&&i instanceof er?De(n.Pe,i.Pe):n instanceof dn&&i instanceof dn}(r.transform,e.transform)}class Lc{constructor(e,t){this.version=e,this.transformResults=t}}class Ve{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ve}static exists(e){return new Ve(void 0,e)}static updateTime(e){return new Ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hn(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class hr{}function wa(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ta(r.key,Ve.none()):new _n(r.key,r.data,Ve.none());{const t=r.data,n=Ee.empty();let i=new he(ce.comparator);for(let o of e.fields)if(!i.has(o)){let l=t.field(o);l===null&&o.length>1&&(o=o.popLast(),l=t.field(o)),l===null?n.delete(o):n.set(o,l),i=i.add(o)}return new Ye(r.key,n,new Ae(i.toArray()),Ve.none())}}function Oc(r,e,t){r instanceof _n?function(i,o,l){const c=i.value.clone(),h=fo(i.fieldTransforms,o,l.transformResults);c.setAll(h),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Ye?function(i,o,l){if(!Hn(i.precondition,o))return void o.convertToUnknownDocument(l.version);const c=fo(i.fieldTransforms,o,l.transformResults),h=o.data;h.setAll(Ea(i)),h.setAll(c),o.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(r,e,t):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,t)}function on(r,e,t,n){return r instanceof _n?function(o,l,c,h){if(!Hn(o.precondition,l))return c;const m=o.value.clone(),p=mo(o.fieldTransforms,h,l);return m.setAll(p),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null}(r,e,t,n):r instanceof Ye?function(o,l,c,h){if(!Hn(o.precondition,l))return c;const m=mo(o.fieldTransforms,h,l),p=l.data;return p.setAll(Ea(o)),p.setAll(m),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(r,e,t,n):function(o,l,c){return Hn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(r,e,t)}function Fc(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),o=ya(n.transform,i||null);o!=null&&(t===null&&(t=Ee.empty()),t.set(n.field,o))}return t||null}function ho(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Et(n,i,(o,l)=>Mc(o,l))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class _n extends hr{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ye extends hr{constructor(e,t,n,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ea(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function fo(r,e,t){const n=new Map;W(r.length===t.length);for(let i=0;i<t.length;i++){const o=r[i],l=o.transform,c=e.data.field(o.field);n.set(o.field,Dc(l,c,t[i]))}return n}function mo(r,e,t){const n=new Map;for(const i of r){const o=i.transform,l=t.data.field(i.field);n.set(i.field,kc(o,l,e))}return n}class Ta extends hr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Uc extends hr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Oc(o,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=on(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=on(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=pa();return this.mutations.forEach(i=>{const o=e.get(i.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=t.has(i.key)?null:c;const h=wa(l,c);h!==null&&n.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(U.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),B())}isEqual(e){return this.batchId===e.batchId&&Et(this.mutations,e.mutations,(t,n)=>ho(t,n))&&Et(this.baseMutations,e.baseMutations,(t,n)=>ho(t,n))}}class Is{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){W(e.mutations.length===n.length);let i=function(){return Pc}();const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,n[l].version);return new Is(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se,z;function $c(r){switch(r){default:return F();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Ia(r){if(r===void 0)return Oe("GRPC error has no .code"),R.UNKNOWN;switch(r){case se.OK:return R.OK;case se.CANCELLED:return R.CANCELLED;case se.UNKNOWN:return R.UNKNOWN;case se.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case se.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case se.INTERNAL:return R.INTERNAL;case se.UNAVAILABLE:return R.UNAVAILABLE;case se.UNAUTHENTICATED:return R.UNAUTHENTICATED;case se.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case se.NOT_FOUND:return R.NOT_FOUND;case se.ALREADY_EXISTS:return R.ALREADY_EXISTS;case se.PERMISSION_DENIED:return R.PERMISSION_DENIED;case se.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case se.ABORTED:return R.ABORTED;case se.OUT_OF_RANGE:return R.OUT_OF_RANGE;case se.UNIMPLEMENTED:return R.UNIMPLEMENTED;case se.DATA_LOSS:return R.DATA_LOSS;default:return F()}}(z=se||(se={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new rt([4294967295,4294967295],0);function po(r){const e=Gc().encode(r),t=new Qo;return t.update(e),new Uint8Array(t.digest())}function go(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new rt([t,n],0),new rt([i,o],0)]}class As{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new en(`Invalid padding: ${t}`);if(n<0)throw new en(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new en(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new en(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=rt.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(rt.fromNumber(n)));return i.compare(Kc)===1&&(i=new rt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=po(e),[n,i]=go(t);for(let o=0;o<this.hashCount;o++){const l=this.Ee(n,i,o);if(!this.de(l))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),l=new As(o,i,t);return n.forEach(c=>l.insert(c)),l}insert(e){if(this.Ie===0)return;const t=po(e),[n,i]=go(t);for(let o=0;o<this.hashCount;o++){const l=this.Ee(n,i,o);this.Ae(l)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class en extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,n,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,vn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new dr(U.min(),i,new ee(Q),Fe(),B())}}class vn{constructor(e,t,n,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new vn(n,t,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Aa{constructor(e,t){this.targetId=e,this.me=t}}class ba{constructor(e,t,n=de.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class yo{constructor(){this.fe=0,this.ge=vo(),this.pe=de.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=B(),t=B(),n=B();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:F()}}),new vn(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=vo()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Qc{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fe(),this.qe=_o(),this.Qe=new ee(Q)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const o=i.target;if(ns(o))if(n===0){const l=new L(o.path);this.Ue(t,l,ve.newNoDocument(l,U.min()))}else W(n===1);else{const l=this.Ye(t);if(l!==n){const c=this.Ze(e),h=c?this.Xe(c,e,l):1;if(h!==0){this.je(t);const m=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,m)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=t;let l,c;try{l=at(n).toUint8Array()}catch(h){if(h instanceof na)return wt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new As(l,i,o)}catch(h){return wt(h instanceof en?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(o=>{const l=this.Le.tt(),c=`projects/${l.projectId}/databases/${l.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,l)=>{const c=this.Je(l);if(c){if(o.current&&ns(c.target)){const h=new L(c.target.path);this.ke.get(h)!==null||this.it(l,h)||this.Ue(l,h,ve.newNoDocument(h,e))}o.be&&(t.set(l,o.ve()),o.Ce())}});let n=B();this.qe.forEach((o,l)=>{let c=!0;l.forEachWhile(h=>{const m=this.Je(h);return!m||m.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.ke.forEach((o,l)=>l.setReadTime(e));const i=new dr(e,t,this.Qe,this.ke,n);return this.ke=Fe(),this.qe=_o(),this.Qe=new ee(Q),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new yo,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new he(Q),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yo),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function _o(){return new ee(L.comparator)}function vo(){return new ee(L.comparator)}const Wc={asc:"ASCENDING",desc:"DESCENDING"},Hc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yc={and:"AND",or:"OR"};class Xc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function is(r,e){return r.useProto3Json||ar(e)?e:{value:e}}function tr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ra(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Jc(r,e){return tr(r,e.toTimestamp())}function Ce(r){return W(!!r),U.fromTimestamp(function(t){const n=We(t);return new oe(n.seconds,n.nanos)}(r))}function bs(r,e){return os(r,e).canonicalString()}function os(r,e){const t=function(i){return new J(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Pa(r){const e=J.fromString(r);return W(ka(e)),e}function as(r,e){return bs(r.databaseId,e.path)}function Qr(r,e){const t=Pa(e);if(t.get(1)!==r.databaseId.projectId)throw new j(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new j(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new L(Sa(t))}function Na(r,e){return bs(r.databaseId,e)}function Zc(r){const e=Pa(r);return e.length===4?J.emptyPath():Sa(e)}function ls(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Sa(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function xo(r,e,t){return{name:as(r,e),fields:t.value.mapValue.fields}}function eh(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(m,p){return m.useProto3Json?(W(p===void 0||typeof p=="string"),de.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array),de.fromUint8Array(p||new Uint8Array))}(r,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(m){const p=m.code===void 0?R.UNKNOWN:Ia(m.code);return new j(p,m.message||"")}(l);t=new ba(n,i,o,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Qr(r,n.document.name),o=Ce(n.document.updateTime),l=n.document.createTime?Ce(n.document.createTime):U.min(),c=new Ee({mapValue:{fields:n.document.fields}}),h=ve.newFoundDocument(i,o,l,c),m=n.targetIds||[],p=n.removedTargetIds||[];t=new Yn(m,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Qr(r,n.document),o=n.readTime?Ce(n.readTime):U.min(),l=ve.newNoDocument(i,o),c=n.removedTargetIds||[];t=new Yn([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Qr(r,n.document),o=n.removedTargetIds||[];t=new Yn([],o,i,null)}else{if(!("filter"in e))return F();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,l=new zc(i,o),c=n.targetId;t=new Aa(c,l)}}return t}function th(r,e){let t;if(e instanceof _n)t={update:xo(r,e.key,e.value)};else if(e instanceof Ta)t={delete:as(r,e.key)};else if(e instanceof Ye)t={update:xo(r,e.key,e.data),updateMask:ch(e.fieldMask)};else{if(!(e instanceof Uc))return F();t={verify:as(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(o,l){const c=l.transform;if(c instanceof dn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof mn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof er)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw F()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Jc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F()}(r,e.precondition)),t}function nh(r,e){return r&&r.length>0?(W(e!==void 0),r.map(t=>function(i,o){let l=i.updateTime?Ce(i.updateTime):Ce(o);return l.isEqual(U.min())&&(l=Ce(o)),new Lc(l,i.transformResults||[])}(t,e))):[]}function rh(r,e){return{documents:[Na(r,e.path)]}}function sh(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Na(r,i);const o=function(m){if(m.length!==0)return Ca(Pe.create(m,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const l=function(m){if(m.length!==0)return m.map(p=>function(A){return{field:_t(A.field),direction:ah(A.dir)}}(p))}(e.orderBy);l&&(t.structuredQuery.orderBy=l);const c=is(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{_t:t,parent:i}}function ih(r){let e=Zc(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){W(n===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(E){const A=Va(E);return A instanceof Pe&&oa(A)?A.getFilters():[A]}(t.where));let l=[];t.orderBy&&(l=function(E){return E.map(A=>function(S){return new hn(vt(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(E){let A;return A=typeof E=="object"?E.value:E,ar(A)?null:A}(t.limit));let h=null;t.startAt&&(h=function(E){const A=!!E.before,P=E.values||[];return new Zn(P,A)}(t.startAt));let m=null;return t.endAt&&(m=function(E){const A=!E.before,P=E.values||[];return new Zn(P,A)}(t.endAt)),Tc(e,i,l,o,c,"F",h,m)}function oh(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Va(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=vt(t.unaryFilter.field);return ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=vt(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=vt(t.unaryFilter.field);return ie.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=vt(t.unaryFilter.field);return ie.create(l,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(r):r.fieldFilter!==void 0?function(t){return ie.create(vt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Pe.create(t.compositeFilter.filters.map(n=>Va(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(r):F()}function ah(r){return Wc[r]}function lh(r){return Hc[r]}function uh(r){return Yc[r]}function _t(r){return{fieldPath:r.canonicalString()}}function vt(r){return ce.fromServerFormat(r.fieldPath)}function Ca(r){return r instanceof ie?function(t){if(t.op==="=="){if(io(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NAN"}};if(so(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(io(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NOT_NAN"}};if(so(t.value))return{unaryFilter:{field:_t(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_t(t.field),op:lh(t.op),value:t.value}}}(r):r instanceof Pe?function(t){const n=t.getFilters().map(i=>Ca(i));return n.length===1?n[0]:{compositeFilter:{op:uh(t.op),filters:n}}}(r):F()}function ch(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ka(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t,n,i,o=U.min(),l=U.min(),c=de.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Ge(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.ct=e}}function dh(r){const e=ih({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ss(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.un=new mh}addToCollectionParentIndex(e,t){return this.un.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(Qe.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(Qe.min())}updateCollectionGroup(e,t,n){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class mh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new he(J.comparator),o=!i.has(n);return this.index[t]=i.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new he(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new At(0)}static kn(){return new At(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.changes=new Vt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?N.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&on(n.mutation,i,Ae.empty(),oe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,B()).next(()=>n))}getLocalViewOfDocuments(e,t,n=B()){const i=nt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(o=>{let l=Zt();return o.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,t){const n=nt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,B()))}populateOverlays(e,t,n){const i=[];return n.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((l,c)=>{t.set(l,c)})})}computeViews(e,t,n,i){let o=Fe();const l=sn(),c=function(){return sn()}();return t.forEach((h,m)=>{const p=n.get(m.key);i.has(m.key)&&(p===void 0||p.mutation instanceof Ye)?o=o.insert(m.key,m):p!==void 0?(l.set(m.key,p.mutation.getFieldMask()),on(p.mutation,m,p.mutation.getFieldMask(),oe.now())):l.set(m.key,Ae.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((m,p)=>l.set(m,p)),t.forEach((m,p)=>{var E;return c.set(m,new gh(p,(E=l.get(m))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(e,t){const n=sn();let i=new ee((l,c)=>l-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(l=>{for(const c of l)c.keys().forEach(h=>{const m=t.get(h);if(m===null)return;let p=n.get(h)||Ae.empty();p=c.applyToLocalView(m,p),n.set(h,p);const E=(i.get(c.batchId)||B()).add(h);i=i.insert(c.batchId,E)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),m=h.key,p=h.value,E=pa();p.forEach(A=>{if(!o.has(A)){const P=wa(t.get(A),n.get(A));P!==null&&E.set(A,P),o=o.add(A)}}),l.push(this.documentOverlayCache.saveOverlays(e,m,E))}return N.waitFor(l)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(l){return L.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ca(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-o.size):N.resolve(nt());let c=-1,h=o;return l.next(m=>N.forEach(m,(p,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{h=h.insert(p,A)}))).next(()=>this.populateOverlays(e,m,o)).next(()=>this.computeViews(e,h,m,B())).next(p=>({batchId:c,changes:ma(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(n=>{let i=Zt();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const o=t.collectionGroup;let l=Zt();return this.indexManager.getCollectionParents(e,o).next(c=>N.forEach(c,h=>{const m=function(E,A){return new St(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,m,n,i).next(p=>{p.forEach((E,A)=>{l=l.insert(E,A)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,t,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,i))).next(l=>{o.forEach((h,m)=>{const p=m.getKey();l.get(p)===null&&(l=l.insert(p,ve.newInvalidDocument(p)))});let c=Zt();return l.forEach((h,m)=>{const p=o.get(h);p!==void 0&&on(p.mutation,m,Ae.empty(),oe.now()),ur(t,m)&&(c=c.insert(h,m))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return N.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Ce(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:dh(i.bundledQuery),readTime:Ce(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.overlays=new ee(L.comparator),this.Ir=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const n=nt();return N.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,o)=>{this.ht(e,t,o)}),N.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),N.resolve()}getOverlaysForCollection(e,t,n){const i=nt(),o=t.length+1,l=new L(t.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,m=h.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let o=new ee((m,p)=>m-p);const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>n){let p=o.get(m.largestBatchId);p===null&&(p=nt(),o=o.insert(m.largestBatchId,p)),p.set(m.getKey(),m)}}const c=nt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((m,p)=>c.set(m,p)),!(c.size()>=i)););return N.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const l=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(n.key,new Bc(t,n));let o=this.Ir.get(t);o===void 0&&(o=B(),this.Ir.set(t,o)),this.Ir.set(t,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.sessionToken=de.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.Tr=new he(ae.Er),this.dr=new he(ae.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new ae(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new ae(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new L(new J([])),n=new ae(t,e),i=new ae(t,e+1),o=[];return this.dr.forEachInRange([n,i],l=>{this.Vr(l),o.push(l.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new L(new J([])),n=new ae(t,e),i=new ae(t,e+1);let o=B();return this.dr.forEachInRange([n,i],l=>{o=o.add(l.key)}),o}containsKey(e){const t=new ae(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ae{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||Q(e.wr,t.wr)}static Ar(e,t){return Q(e.wr,t.wr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new he(ae.Er)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new qc(o,t,n,i);this.mutationQueue.push(l);for(const c of i)this.br=this.br.add(new ae(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(l)}lookupMutationBatch(e,t){return N.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),o=i<0?0:i;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ae(t,0),i=new ae(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,i],l=>{const c=this.Dr(l.wr);o.push(c)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new he(Q);return t.forEach(i=>{const o=new ae(i,0),l=new ae(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,l],c=>{n=n.add(c.wr)})}),N.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let o=n;L.isDocumentKey(o)||(o=o.child(""));const l=new ae(new L(o),0);let c=new he(Q);return this.br.forEachWhile(h=>{const m=h.key.path;return!!n.isPrefixOf(m)&&(m.length===i&&(c=c.add(h.wr)),!0)},l),N.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return N.forEach(t.mutations,i=>{const o=new ae(i.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new ae(t,0),i=this.br.firstAfterOrEqual(n);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.Mr=e,this.docs=function(){return new ee(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),o=i?i.size:0,l=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return N.resolve(n?n.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let n=Fe();return t.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():ve.newInvalidDocument(i))}),N.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let o=Fe();const l=t.path,c=new L(l.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:m,value:{document:p}}=h.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||sc(rc(p),n)<=0||(i.has(p.key)||ur(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(e,t,n,i){F()}Or(e,t){return N.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new Th(this)}getSize(e){return N.resolve(this.size)}}class Th extends ph{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),N.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this.persistence=e,this.Nr=new Vt(t=>xs(t),ws),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Rs,this.targetCount=0,this.kr=At.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),N.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new At(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Kn(t),N.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,n){let i=0;const o=[];return this.Nr.forEach((l,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(l),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(o).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return N.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),N.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),N.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return N.resolve(n)}containsKey(e,t){return N.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.qr={},this.overlays={},this.Qr=new gs(0),this.Kr=!1,this.Kr=!0,this.$r=new xh,this.referenceDelegate=e(this),this.Ur=new Ih(this),this.indexManager=new fh,this.remoteDocumentCache=function(i){return new Eh(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new hh(t),this.Gr=new _h(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new wh(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){M("MemoryPersistence","Starting transaction:",e);const i=new bh(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return N.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class bh extends oc{constructor(e){super(),this.currentSequenceNumber=e}}class Ps{constructor(e){this.persistence=e,this.Jr=new Rs,this.Yr=null}static Zr(e){return new Ps(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),N.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),N.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Xr,n=>{const i=L.fromPath(n);return this.ei(e,i).next(o=>{o||t.removeEntry(i,U.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return N.or([()=>N.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=B(),i=B();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ns(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fu()?8:ac(mu())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const o={result:null};return this.Yi(e,t).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Zi(e,t,i,n).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new Rh;return this.Xi(e,t,l).next(c=>{if(o.result=c,this.zi)return this.es(e,t,l,c.size)})}).next(()=>o.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(Yt()<=$e.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",yt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),N.resolve()):(Yt()<=$e.DEBUG&&M("QueryEngine","Query:",yt(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Yt()<=$e.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",yt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Se(t))):N.resolve())}Yi(e,t){if(uo(t))return N.resolve(null);let n=Se(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ss(t,null,"F"),n=Se(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const l=B(...o);return this.Ji.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,n).next(h=>{const m=this.ts(t,c);return this.ns(t,m,l,h.readTime)?this.Yi(e,ss(t,null,"F")):this.rs(e,m,t,h)}))})))}Zi(e,t,n,i){return uo(t)||i.isEqual(U.min())?N.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const l=this.ts(t,o);return this.ns(t,l,n,i)?N.resolve(null):(Yt()<=$e.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),yt(t)),this.rs(e,l,t,nc(i,-1)).next(c=>c))})}ts(e,t){let n=new he(da(e));return t.forEach((i,o)=>{ur(e,o)&&(n=n.add(o))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,n){return Yt()<=$e.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",yt(t)),this.Ji.getDocumentsMatchingQuery(e,t,Qe.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(o=>(t.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new ee(Q),this._s=new Vt(o=>xs(o),ws),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Sh(r,e,t,n){return new Nh(r,e,t,n)}async function Da(r,e){const t=q(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(o=>{const l=[],c=[];let h=B();for(const m of i){l.push(m.batchId);for(const p of m.mutations)h=h.add(p.key)}for(const m of o){c.push(m.batchId);for(const p of m.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(n,h).next(m=>({hs:m,removedBatchIds:l,addedBatchIds:c}))})})}function Vh(r,e){const t=q(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,h,m,p){const E=m.batch,A=E.keys();let P=N.resolve();return A.forEach(S=>{P=P.next(()=>p.getEntry(h,S)).next(k=>{const V=m.docVersions.get(S);W(V!==null),k.version.compareTo(V)<0&&(E.applyToRemoteDocument(k,m),k.isValidDocument()&&(k.setReadTime(m.commitVersion),p.addEntry(k)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(t,n,e,o).next(()=>o.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=B();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(h=h.add(c.batch.mutations[m].key));return h}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function ja(r){const e=q(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Ch(r,e){const t=q(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((p,E)=>{const A=i.get(E);if(!A)return;c.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,E).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,E)));let P=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?P=P.withResumeToken(de.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,n)),i=i.insert(E,P),function(k,V,D){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(A,P,p)&&c.push(t.Ur.updateTargetData(o,P))});let h=Fe(),m=B();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),c.push(kh(o,l,e.documentUpdates).next(p=>{h=p.Ps,m=p.Is})),!n.isEqual(U.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(E=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(p)}return N.waitFor(c).next(()=>l.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,m)).next(()=>h)}).then(o=>(t.os=i,o))}function kh(r,e,t){let n=B(),i=B();return t.forEach(o=>n=n.add(o)),e.getEntries(r,n).next(o=>{let l=Fe();return t.forEach((c,h)=>{const m=o.get(c);h.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!m.isValidDocument()||h.version.compareTo(m.version)>0||h.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",m.version," Watch version:",h.version)}),{Ps:l,Is:i}})}function Dh(r,e){const t=q(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function jh(r,e){const t=q(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(o=>o?(i=o,N.resolve(i)):t.Ur.allocateTargetId(n).next(l=>(i=new Ge(e,l,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function us(r,e,t){const n=q(r),i=n.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,l=>n.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!yn(l))throw l;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function wo(r,e,t){const n=q(r);let i=U.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",l=>function(h,m,p){const E=q(h),A=E._s.get(p);return A!==void 0?N.resolve(E.os.get(A)):E.Ur.getTargetData(m,p)}(n,l,Se(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(l,c.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(l,e,t?i:U.min(),t?o:B())).next(c=>(Mh(n,Ac(e),c),{documents:c,Ts:o})))}function Mh(r,e,t){let n=r.us.get(e)||U.min();t.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.us.set(e,n)}class Eo{constructor(){this.activeTargetIds=Vc()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lh{constructor(){this.so=new Eo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Eo,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn=null;function Wr(){return Kn===null?Kn=function(){return 268435456+Math.round(2147483648*Math.random())}():Kn++,"0x"+Kn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="WebChannelConnection";class qh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,n,i,o,l){const c=Wr(),h=this.xo(t,n.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${c}:`,h,i);const m={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(m,o,l),this.No(t,h,m,i).then(p=>(M("RestConnection",`Received RPC '${t}' ${c}: `,p),p),p=>{throw wt("RestConnection",`RPC '${t}' ${c} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(t,n,i,o,l,c){return this.Mo(t,n,i,o,l)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,l)=>t[l]=o),i&&i.headers.forEach((o,l)=>t[l]=o)}xo(t,n){const i=Fh[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const o=Wr();return new Promise((l,c)=>{const h=new Wo;h.setWithCredentials(!0),h.listenOnce(Ho.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Qn.NO_ERROR:const p=h.getResponseJson();M(ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Qn.TIMEOUT:M(ye,`RPC '${e}' ${o} timed out`),c(new j(R.DEADLINE_EXCEEDED,"Request time out"));break;case Qn.HTTP_ERROR:const E=h.getStatus();if(M(ye,`RPC '${e}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A==null?void 0:A.error;if(P&&P.status&&P.message){const S=function(V){const D=V.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(D)>=0?D:R.UNKNOWN}(P.status);c(new j(S,P.message))}else c(new j(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new j(R.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{M(ye,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(i);M(ye,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",m,n,15)})}Bo(e,t,n){const i=Wr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=Jo(),c=Xo(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(h.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const p=o.join("");M(ye,`Creating RPC '${e}' stream ${i}: ${p}`,h);const E=l.createWebChannel(p,h);let A=!1,P=!1;const S=new Uh({Io:V=>{P?M(ye,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(A||(M(ye,`Opening RPC '${e}' stream ${i} transport.`),E.open(),A=!0),M(ye,`RPC '${e}' stream ${i} sending:`,V),E.send(V))},To:()=>E.close()}),k=(V,D,O)=>{V.listen(D,$=>{try{O($)}catch(Z){setTimeout(()=>{throw Z},0)}})};return k(E,Jt.EventType.OPEN,()=>{P||(M(ye,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),k(E,Jt.EventType.CLOSE,()=>{P||(P=!0,M(ye,`RPC '${e}' stream ${i} transport closed`),S.So())}),k(E,Jt.EventType.ERROR,V=>{P||(P=!0,wt(ye,`RPC '${e}' stream ${i} transport errored:`,V),S.So(new j(R.UNAVAILABLE,"The operation could not be completed")))}),k(E,Jt.EventType.MESSAGE,V=>{var D;if(!P){const O=V.data[0];W(!!O);const $=O,Z=$.error||((D=$[0])===null||D===void 0?void 0:D.error);if(Z){M(ye,`RPC '${e}' stream ${i} received error:`,Z);const be=Z.status;let re=function(y){const x=se[y];if(x!==void 0)return Ia(x)}(be),v=Z.message;re===void 0&&(re=R.INTERNAL,v="Unknown error status: "+be+" with message "+Z.message),P=!0,S.So(new j(re,v)),E.close()}else M(ye,`RPC '${e}' stream ${i} received:`,O),S.bo(O)}}),k(c,Yo.STAT_EVENT,V=>{V.stat===Jr.PROXY?M(ye,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===Jr.NOPROXY&&M(ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Hr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(r){return new Xc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,n=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,n,i,o,l,c,h){this.ui=e,this.Ho=n,this.Jo=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ma(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(Oe(t.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new j(R.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bh extends La{constructor(e,t,n,i,o,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,l),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=eh(this.serializer,e),n=function(o){if(!("targetChange"in o))return U.min();const l=o.targetChange;return l.targetIds&&l.targetIds.length?U.min():l.readTime?Ce(l.readTime):U.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=ls(this.serializer),t.addTarget=function(o,l){let c;const h=l.target;if(c=ns(h)?{documents:rh(o,h)}:{query:sh(o,h)._t},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=Ra(o,l.resumeToken);const m=is(o,l.expectedCount);m!==null&&(c.expectedCount=m)}else if(l.snapshotVersion.compareTo(U.min())>0){c.readTime=tr(o,l.snapshotVersion.toTimestamp());const m=is(o,l.expectedCount);m!==null&&(c.expectedCount=m)}return c}(this.serializer,e);const n=oh(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=ls(this.serializer),t.removeTarget=e,this.a_(t)}}class zh extends La{constructor(e,t,n,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,l),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=nh(e.writeResults,e.commitTime),n=Ce(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=ls(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>th(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new j(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Mo(e,os(t,n),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(R.UNKNOWN,o.toString())})}Lo(e,t,n,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Lo(e,os(t,n),i,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new j(R.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Gh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Oe(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,n,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(l=>{n.enqueueAndForget(async()=>{ct(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(h){const m=q(h);m.L_.add(4),await xn(m),m.q_.set("Unknown"),m.L_.delete(4),await mr(m)}(this))})}),this.q_=new Gh(n,i)}}async function mr(r){if(ct(r))for(const e of r.B_)await e(!0)}async function xn(r){for(const e of r.B_)await e(!1)}function Oa(r,e){const t=q(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),ks(t)?Cs(t):Ct(t).r_()&&Vs(t,e))}function Ss(r,e){const t=q(r),n=Ct(t);t.N_.delete(e),n.r_()&&Fa(t,e),t.N_.size===0&&(n.r_()?n.o_():ct(t)&&t.q_.set("Unknown"))}function Vs(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ct(r).A_(e)}function Fa(r,e){r.Q_.xe(e),Ct(r).R_(e)}function Cs(r){r.Q_=new Qc({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Ct(r).start(),r.q_.v_()}function ks(r){return ct(r)&&!Ct(r).n_()&&r.N_.size>0}function ct(r){return q(r).L_.size===0}function Ua(r){r.Q_=void 0}async function Qh(r){r.q_.set("Online")}async function Wh(r){r.N_.forEach((e,t)=>{Vs(r,e)})}async function Hh(r,e){Ua(r),ks(r)?(r.q_.M_(e),Cs(r)):r.q_.set("Unknown")}async function Yh(r,e,t){if(r.q_.set("Online"),e instanceof ba&&e.state===2&&e.cause)try{await async function(i,o){const l=o.cause;for(const c of o.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.N_.delete(c),i.Q_.removeTarget(c))}(r,e)}catch(n){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await nr(r,n)}else if(e instanceof Yn?r.Q_.Ke(e):e instanceof Aa?r.Q_.He(e):r.Q_.We(e),!t.isEqual(U.min()))try{const n=await ja(r.localStore);t.compareTo(n)>=0&&await function(o,l){const c=o.Q_.rt(l);return c.targetChanges.forEach((h,m)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(m);p&&o.N_.set(m,p.withResumeToken(h.resumeToken,l))}}),c.targetMismatches.forEach((h,m)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(de.EMPTY_BYTE_STRING,p.snapshotVersion)),Fa(o,h);const E=new Ge(p.target,h,m,p.sequenceNumber);Vs(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){M("RemoteStore","Failed to raise snapshot:",n),await nr(r,n)}}async function nr(r,e,t){if(!yn(e))throw e;r.L_.add(1),await xn(r),r.q_.set("Offline"),t||(t=()=>ja(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await mr(r)})}function qa(r,e){return e().catch(t=>nr(r,t,e))}async function pr(r){const e=q(r),t=He(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Xh(e);)try{const i=await Dh(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,Jh(e,i)}catch(i){await nr(e,i)}Ba(e)&&za(e)}function Xh(r){return ct(r)&&r.O_.length<10}function Jh(r,e){r.O_.push(e);const t=He(r);t.r_()&&t.V_&&t.m_(e.mutations)}function Ba(r){return ct(r)&&!He(r).n_()&&r.O_.length>0}function za(r){He(r).start()}async function Zh(r){He(r).p_()}async function ed(r){const e=He(r);for(const t of r.O_)e.m_(t.mutations)}async function td(r,e,t){const n=r.O_.shift(),i=Is.from(n,e,t);await qa(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await pr(r)}async function nd(r,e){e&&He(r).V_&&await async function(n,i){if(function(l){return $c(l)&&l!==R.ABORTED}(i.code)){const o=n.O_.shift();He(n).s_(),await qa(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await pr(n)}}(r,e),Ba(r)&&za(r)}async function Io(r,e){const t=q(r);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const n=ct(t);t.L_.add(3),await xn(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await mr(t)}async function rd(r,e){const t=q(r);e?(t.L_.delete(2),await mr(t)):e||(t.L_.add(2),await xn(t),t.q_.set("Unknown"))}function Ct(r){return r.K_||(r.K_=function(t,n,i){const o=q(t);return o.w_(),new Bh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:Qh.bind(null,r),Ro:Wh.bind(null,r),mo:Hh.bind(null,r),d_:Yh.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),ks(r)?Cs(r):r.q_.set("Unknown")):(await r.K_.stop(),Ua(r))})),r.K_}function He(r){return r.U_||(r.U_=function(t,n,i){const o=q(t);return o.w_(),new zh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zh.bind(null,r),mo:nd.bind(null,r),f_:ed.bind(null,r),g_:td.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await pr(r)):(await r.U_.stop(),r.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,n,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,o){const l=Date.now()+n,c=new Ds(e,t,l,i,o);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function js(r,e){if(Oe("AsyncQueue",`${e}: ${r}`),yn(r))return new j(R.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e?(t,n)=>e(t,n)||L.comparator(t.key,n.key):(t,n)=>L.comparator(t.key,n.key),this.keyedMap=Zt(),this.sortedSet=new ee(this.comparator)}static emptySet(e){return new xt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new xt;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.W_=new ee(L.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class bt{constructor(e,t,n,i,o,l,c,h,m){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=m}static fromInitialDocuments(e,t,n,i,o){const l=[];return t.forEach(c=>{l.push({type:0,doc:c})}),new bt(e,t,xt.emptySet(t),l,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class id{constructor(){this.queries=bo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=q(t),o=i.queries;i.queries=bo(),o.forEach((l,c)=>{for(const h of c.j_)h.onError(n)})})(this,new j(R.ABORTED,"Firestore shutting down"))}}function bo(){return new Vt(r=>ha(r),lr)}async function od(r,e){const t=q(r);let n=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(n=2):(o=new sd,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const c=js(l,`Initialization of query '${yt(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Ms(t)}async function ad(r,e){const t=q(r),n=e.query;let i=3;const o=t.queries.get(n);if(o){const l=o.j_.indexOf(e);l>=0&&(o.j_.splice(l,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function ld(r,e){const t=q(r);let n=!1;for(const i of e){const o=i.query,l=t.queries.get(o);if(l){for(const c of l.j_)c.X_(i)&&(n=!0);l.z_=i}}n&&Ms(t)}function ud(r,e,t){const n=q(r),i=n.queries.get(e);if(i)for(const o of i.j_)o.onError(t);n.queries.delete(e)}function Ms(r){r.Y_.forEach(e=>{e.next()})}var cs,Ro;(Ro=cs||(cs={})).ea="default",Ro.Cache="cache";class cd{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new bt(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=bt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cs.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e){this.key=e}}class Ga{constructor(e){this.key=e}}class hd{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=da(e),this.Ra=new xt(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Ao,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,E)=>{const A=i.get(p),P=ur(this.query,E)?E:null,S=!!A&&this.mutatedKeys.has(A.key),k=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let V=!1;A&&P?A.data.isEqual(P.data)?S!==k&&(n.track({type:3,doc:P}),V=!0):this.ga(A,P)||(n.track({type:2,doc:P}),V=!0,(h&&this.Aa(P,h)>0||m&&this.Aa(P,m)<0)&&(c=!0)):!A&&P?(n.track({type:0,doc:P}),V=!0):A&&!P&&(n.track({type:1,doc:A}),V=!0,(h||m)&&(c=!0)),V&&(P?(l=l.add(P),o=k?o.add(p):o.delete(p)):(l=l.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const p=this.query.limitType==="F"?l.last():l.first();l=l.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{Ra:l,fa:n,ns:c,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const l=e.fa.G_();l.sort((p,E)=>function(P,S){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return k(P)-k(S)}(p.type,E.type)||this.Aa(p.doc,E.doc)),this.pa(n),i=i!=null&&i;const c=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,m=h!==this.Ea;return this.Ea=h,l.length!==0||m?{snapshot:new bt(this.query,e.Ra,o,l,e.mutatedKeys,h===0,m,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ao,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=B(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Ga(n))}),this.da.forEach(n=>{e.has(n)||t.push(new $a(n))}),t}ba(e){this.Ta=e.Ts,this.da=B();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return bt.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class dd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class fd{constructor(e){this.key=e,this.va=!1}}class md{constructor(e,t,n,i,o,l){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new Vt(c=>ha(c),lr),this.Ma=new Map,this.xa=new Set,this.Oa=new ee(L.comparator),this.Na=new Map,this.La=new Rs,this.Ba={},this.ka=new Map,this.qa=At.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function pd(r,e,t=!0){const n=Xa(r);let i;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Ka(n,e,t,!0),i}async function gd(r,e){const t=Xa(r);await Ka(t,e,!0,!1)}async function Ka(r,e,t,n){const i=await jh(r.localStore,Se(e)),o=i.targetId,l=r.sharedClientState.addLocalQueryTarget(o,t);let c;return n&&(c=await yd(r,e,o,l==="current",i.resumeToken)),r.isPrimaryClient&&t&&Oa(r.remoteStore,i),c}async function yd(r,e,t,n,i){r.Ka=(E,A,P)=>async function(k,V,D,O){let $=V.view.ma(D);$.ns&&($=await wo(k.localStore,V.query,!1).then(({documents:v})=>V.view.ma(v,$)));const Z=O&&O.targetChanges.get(V.targetId),be=O&&O.targetMismatches.get(V.targetId)!=null,re=V.view.applyChanges($,k.isPrimaryClient,Z,be);return No(k,V.targetId,re.wa),re.snapshot}(r,E,A,P);const o=await wo(r.localStore,e,!0),l=new hd(e,o.Ts),c=l.ma(o.documents),h=vn.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),m=l.applyChanges(c,r.isPrimaryClient,h);No(r,t,m.wa);const p=new dd(e,t,l);return r.Fa.set(e,p),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),m.snapshot}async function _d(r,e,t){const n=q(r),i=n.Fa.get(e),o=n.Ma.get(i.targetId);if(o.length>1)return n.Ma.set(i.targetId,o.filter(l=>!lr(l,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await us(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Ss(n.remoteStore,i.targetId),hs(n,i.targetId)}).catch(gn)):(hs(n,i.targetId),await us(n.localStore,i.targetId,!0))}async function vd(r,e){const t=q(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ss(t.remoteStore,n.targetId))}async function xd(r,e,t){const n=Rd(r);try{const i=await function(l,c){const h=q(l),m=oe.now(),p=c.reduce((P,S)=>P.add(S.key),B());let E,A;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let S=Fe(),k=B();return h.cs.getEntries(P,p).next(V=>{S=V,S.forEach((D,O)=>{O.isValidDocument()||(k=k.add(D))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,S)).next(V=>{E=V;const D=[];for(const O of c){const $=Fc(O,E.get(O.key).overlayedDocument);$!=null&&D.push(new Ye(O.key,$,ra($.value.mapValue),Ve.exists(!0)))}return h.mutationQueue.addMutationBatch(P,m,D,c)}).next(V=>{A=V;const D=V.applyToLocalDocumentSet(E,k);return h.documentOverlayCache.saveOverlays(P,V.batchId,D)})}).then(()=>({batchId:A.batchId,changes:ma(E)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(l,c,h){let m=l.Ba[l.currentUser.toKey()];m||(m=new ee(Q)),m=m.insert(c,h),l.Ba[l.currentUser.toKey()]=m}(n,i.batchId,t),await wn(n,i.changes),await pr(n.remoteStore)}catch(i){const o=js(i,"Failed to persist write");t.reject(o)}}async function Qa(r,e){const t=q(r);try{const n=await Ch(t.localStore,e);e.targetChanges.forEach((i,o)=>{const l=t.Na.get(o);l&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.va=!0:i.modifiedDocuments.size>0?W(l.va):i.removedDocuments.size>0&&(W(l.va),l.va=!1))}),await wn(t,n,e)}catch(n){await gn(n)}}function Po(r,e,t){const n=q(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((o,l)=>{const c=l.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(l,c){const h=q(l);h.onlineState=c;let m=!1;h.queries.forEach((p,E)=>{for(const A of E.j_)A.Z_(c)&&(m=!0)}),m&&Ms(h)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function wd(r,e,t){const n=q(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),o=i&&i.key;if(o){let l=new ee(L.comparator);l=l.insert(o,ve.newNoDocument(o,U.min()));const c=B().add(o),h=new dr(U.min(),new Map,new ee(Q),l,c);await Qa(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(e),Ls(n)}else await us(n.localStore,e,!1).then(()=>hs(n,e,t)).catch(gn)}async function Ed(r,e){const t=q(r),n=e.batch.batchId;try{const i=await Vh(t.localStore,e);Ha(t,n,null),Wa(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await wn(t,i)}catch(i){await gn(i)}}async function Td(r,e,t){const n=q(r);try{const i=await function(l,c){const h=q(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let p;return h.mutationQueue.lookupMutationBatch(m,c).next(E=>(W(E!==null),p=E.keys(),h.mutationQueue.removeMutationBatch(m,E))).next(()=>h.mutationQueue.performConsistencyCheck(m)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(m,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,p)).next(()=>h.localDocuments.getDocuments(m,p))})}(n.localStore,e);Ha(n,e,t),Wa(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await wn(n,i)}catch(i){await gn(i)}}function Wa(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function Ha(r,e,t){const n=q(r);let i=n.Ba[n.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function hs(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Ya(r,n)})}function Ya(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Ss(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),Ls(r))}function No(r,e,t){for(const n of t)n instanceof $a?(r.La.addReference(n.key,e),Id(r,n)):n instanceof Ga?(M("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Ya(r,n.key)):F()}function Id(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(M("SyncEngine","New document in limbo: "+t),r.xa.add(n),Ls(r))}function Ls(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new L(J.fromString(e)),n=r.qa.next();r.Na.set(n,new fd(t)),r.Oa=r.Oa.insert(t,n),Oa(r.remoteStore,new Ge(Se(Es(t.path)),n,"TargetPurposeLimboResolution",gs.oe))}}async function wn(r,e,t){const n=q(r),i=[],o=[],l=[];n.Fa.isEmpty()||(n.Fa.forEach((c,h)=>{l.push(n.Ka(h,e,t).then(m=>{var p;if((m||t)&&n.isPrimaryClient){const E=m?!m.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;n.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(m){i.push(m);const E=Ns.Wi(h.targetId,m);o.push(E)}}))}),await Promise.all(l),n.Ca.d_(i),await async function(h,m){const p=q(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>N.forEach(m,A=>N.forEach(A.$i,P=>p.persistence.referenceDelegate.addReference(E,A.targetId,P)).next(()=>N.forEach(A.Ui,P=>p.persistence.referenceDelegate.removeReference(E,A.targetId,P)))))}catch(E){if(!yn(E))throw E;M("LocalStore","Failed to update sequence numbers: "+E)}for(const E of m){const A=E.targetId;if(!E.fromCache){const P=p.os.get(A),S=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(S);p.os=p.os.insert(A,k)}}}(n.localStore,o))}async function Ad(r,e){const t=q(r);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const n=await Da(t.localStore,e);t.currentUser=e,function(o,l){o.ka.forEach(c=>{c.forEach(h=>{h.reject(new j(R.CANCELLED,l))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await wn(t,n.hs)}}function bd(r,e){const t=q(r),n=t.Na.get(e);if(n&&n.va)return B().add(n.key);{let i=B();const o=t.Ma.get(e);if(!o)return i;for(const l of o){const c=t.Fa.get(l);i=i.unionWith(c.view.Va)}return i}}function Xa(r){const e=q(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qa.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wd.bind(null,e),e.Ca.d_=ld.bind(null,e.eventManager),e.Ca.$a=ud.bind(null,e.eventManager),e}function Rd(r){const e=q(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ed.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Td.bind(null,e),e}class rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fr(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Sh(this.persistence,new Ph,e.initialUser,this.serializer)}Ga(e){return new Ah(Ps.Zr,this.serializer)}Wa(e){return new Lh}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rr.provider={build:()=>new rr};class ds{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Po(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ad.bind(null,this.syncEngine),await rd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new id}()}createDatastore(e){const t=fr(e.databaseInfo.databaseId),n=function(o){return new qh(o)}(e.databaseInfo);return function(o,l,c,h){return new $h(o,l,c,h)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,o,l,c){return new Kh(n,i,o,l,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Po(this.syncEngine,t,0),function(){return To.D()?new To:new Oh}())}createSyncEngine(e,t){return function(i,o,l,c,h,m,p){const E=new md(i,o,l,c,h,m);return p&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=q(i);M("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await xn(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ds.provider={build:()=>new ds};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Oe("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,n,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=_e.UNAUTHENTICATED,this.clientId=ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async l=>{M("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(n,l=>(M("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=js(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Yr(r,e){r.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await Da(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function So(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Sd(r);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Io(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>Io(e.remoteStore,i)),r._onlineComponents=e}async function Sd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yr(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===R.FAILED_PRECONDITION||i.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;wt("Error using user provided cache. Falling back to memory cache: "+t),await Yr(r,new rr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Yr(r,new rr);return r._offlineComponents}async function Ja(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await So(r,r._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await So(r,new ds))),r._onlineComponents}function Vd(r){return Ja(r).then(e=>e.syncEngine)}async function Vo(r){const e=await Ja(r),t=e.eventManager;return t.onListen=pd.bind(null,e.syncEngine),t.onUnlisten=_d.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=gd.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vd.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(r,e,t){if(!t)throw new j(R.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Cd(r,e,t,n){if(e===!0&&n===!0)throw new j(R.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ko(r){if(!L.isDocumentKey(r))throw new j(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Do(r){if(L.isDocumentKey(r))throw new j(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function gr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":F()}function it(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new j(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gr(r);throw new j(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Cd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Za((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new j(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yr{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jo({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jo(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Qu;switch(n.type){case"firstParty":return new Xu(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Co.get(t);n&&(M("ComponentProvider","Removing Datastore"),Co.delete(t),n.terminate())}(this),Promise.resolve()}}function kd(r,e,t,n={}){var i;const o=(r=it(r,yr))._getSettings(),l=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&wt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),n.mockUserToken){let c,h;if(typeof n.mockUserToken=="string")c=n.mockUserToken,h=_e.MOCK_USER;else{c=hu(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new j(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _e(m)}r._authCredentials=new Wu(new Zo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ht(this.firestore,e,this._query)}}class Te{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ke(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Te(this.firestore,e,this._key)}}class Ke extends ht{constructor(e,t,n){super(e,t,Es(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Te(this.firestore,null,new L(e))}withConverter(e){return new Ke(this.firestore,e,this._path)}}function sr(r,e,...t){if(r=ke(r),el("collection","path",e),r instanceof yr){const n=J.fromString(e,...t);return Do(n),new Ke(r,null,n)}{if(!(r instanceof Te||r instanceof Ke))throw new j(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return Do(n),new Ke(r.firestore,null,n)}}function tt(r,e,...t){if(r=ke(r),arguments.length===1&&(e=ea.newId()),el("doc","path",e),r instanceof yr){const n=J.fromString(e,...t);return ko(n),new Te(r,null,new L(n))}{if(!(r instanceof Te||r instanceof Ke))throw new j(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return ko(n),new Te(r.firestore,r instanceof Ke?r.converter:null,new L(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ma(this,"async_queue_retry"),this.Vu=()=>{const n=Hr();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=Hr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Hr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new st;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!yn(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(n);throw Oe("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Ds.createAndSchedule(this,e,t,n,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Lo(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class pn extends yr{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new Mo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mo(e),this._firestoreClient=void 0,await e}}}function Dd(r,e){const t=typeof r=="object"?r:lu(),n=typeof r=="string"?r:"(default)",i=uu(t,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=cu("firestore");o&&kd(i,...o)}return i}function tl(r){if(r._terminated)throw new j(R.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||jd(r),r._firestoreClient}function jd(r){var e,t,n;const i=r._freezeSettings(),o=function(c,h,m,p){return new cc(c,h,m,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Za(p.experimentalLongPollingOptions),p.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Nd(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(de.fromBase64String(e))}catch(t){throw new j(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Rt(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Q(this._lat,e._lat)||Q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=/^__.*__$/;class Ld{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ye(e,this.data,this.fieldMask,t,this.fieldTransforms):new _n(e,this.data,t,this.fieldTransforms)}}class nl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ye(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rl(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Us{constructor(e,t,n,i,o,l){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Us(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ir(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(rl(this.Cu)&&Md.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Od{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||fr(e)}Qu(e,t,n,i=!1){return new Us({Cu:e,methodName:t,qu:n,path:ce.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qs(r){const e=r._freezeSettings(),t=fr(r._databaseId);return new Od(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Fd(r,e,t,n,i,o={}){const l=r.Qu(o.merge||o.mergeFields?2:0,e,t,i);zs("Data must be an object, but it was:",l,n);const c=sl(n,l);let h,m;if(o.merge)h=new Ae(l.fieldMask),m=l.fieldTransforms;else if(o.mergeFields){const p=[];for(const E of o.mergeFields){const A=fs(e,E,t);if(!l.contains(A))throw new j(R.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);ol(p,A)||p.push(A)}h=new Ae(p),m=l.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,m=l.fieldTransforms;return new Ld(new Ee(c),h,m)}class xr extends vr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xr}}class Bs extends vr{_toFieldTransform(e){return new jc(e.path,new dn)}isEqual(e){return e instanceof Bs}}function Ud(r,e,t,n){const i=r.Qu(1,e,t);zs("Data must be an object, but it was:",i,n);const o=[],l=Ee.empty();ut(n,(h,m)=>{const p=$s(e,h,t);m=ke(m);const E=i.Nu(p);if(m instanceof xr)o.push(p);else{const A=En(m,E);A!=null&&(o.push(p),l.set(p,A))}});const c=new Ae(o);return new nl(l,c,i.fieldTransforms)}function qd(r,e,t,n,i,o){const l=r.Qu(1,e,t),c=[fs(e,n,t)],h=[i];if(o.length%2!=0)throw new j(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(fs(e,o[A])),h.push(o[A+1]);const m=[],p=Ee.empty();for(let A=c.length-1;A>=0;--A)if(!ol(m,c[A])){const P=c[A];let S=h[A];S=ke(S);const k=l.Nu(P);if(S instanceof xr)m.push(P);else{const V=En(S,k);V!=null&&(m.push(P),p.set(P,V))}}const E=new Ae(m);return new nl(p,E,l.fieldTransforms)}function Bd(r,e,t,n=!1){return En(t,r.Qu(n?4:3,e))}function En(r,e){if(il(r=ke(r)))return zs("Unsupported field value:",e,r),sl(r,e);if(r instanceof vr)return function(n,i){if(!rl(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const o=[];let l=0;for(const c of n){let h=En(c,i.Lu(l));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),l++}return{arrayValue:{values:o}}}(r,e)}return function(n,i){if((n=ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Cc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=oe.fromDate(n);return{timestampValue:tr(i.serializer,o)}}if(n instanceof oe){const o=new oe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tr(i.serializer,o)}}if(n instanceof Os)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rt)return{bytesValue:Ra(i.serializer,n._byteString)};if(n instanceof Te){const o=i.databaseId,l=n.firestore._databaseId;if(!l.isEqual(o))throw i.Bu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:bs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Fs)return function(l,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(h=>{if(typeof h!="number")throw c.Bu("VectorValues must only contain numeric values.");return Ts(c.serializer,h)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${gr(n)}`)}(r,e)}function sl(r,e){const t={};return ta(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ut(r,(n,i)=>{const o=En(i,e.Mu(n));o!=null&&(t[n]=o)}),{mapValue:{fields:t}}}function il(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof oe||r instanceof Os||r instanceof Rt||r instanceof Te||r instanceof vr||r instanceof Fs)}function zs(r,e,t){if(!il(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=gr(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function fs(r,e,t){if((e=ke(e))instanceof _r)return e._internalPath;if(typeof e=="string")return $s(r,e);throw ir("Field path arguments must be of type string or ",r,!1,void 0,t)}const zd=new RegExp("[~\\*/\\[\\]]");function $s(r,e,t){if(e.search(zd)>=0)throw ir(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new _r(...e.split("."))._internalPath}catch{throw ir(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ir(r,e,t,n,i){const o=n&&!n.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${n}`),l&&(h+=` in document ${i}`),h+=")"),new j(R.INVALID_ARGUMENT,c+r+h)}function ol(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,n,i,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Te(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $d(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $d extends al{data(){return super.data()}}function wr(r,e){return typeof e=="string"?$s(r,e):e instanceof _r?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new j(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gs{}class ll extends Gs{}function ul(r,e,...t){let n=[];e instanceof Gs&&n.push(e),n=n.concat(t),function(o){const l=o.filter(h=>h instanceof Ks).length,c=o.filter(h=>h instanceof Er).length;if(l>1||l>0&&c>0)throw new j(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Er extends ll{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Er(e,t,n)}_apply(e){const t=this._parse(e);return cl(e._query,t),new ht(e.firestore,e.converter,rs(e._query,t))}_parse(e){const t=qs(e.firestore);return function(o,l,c,h,m,p,E){let A;if(m.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new j(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Fo(E,p);const P=[];for(const S of E)P.push(Oo(h,o,S));A={arrayValue:{values:P}}}else A=Oo(h,o,E)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Fo(E,p),A=Bd(c,l,E,p==="in"||p==="not-in");return ie.create(m,p,A)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Kd(r,e,t){const n=e,i=wr("where",r);return Er._create(i,n,t)}class Ks extends Gs{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ks(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Pe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,o){let l=i;const c=o.getFlattenedFilters();for(const h of c)cl(l,h),l=rs(l,h)}(e._query,t),new ht(e.firestore,e.converter,rs(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qs extends ll{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qs(e,t)}_apply(e){const t=function(i,o,l){if(i.startAt!==null)throw new j(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hn(o,l)}(e._query,this._field,this._direction);return new ht(e.firestore,e.converter,function(i,o){const l=i.explicitOrderBy.concat([o]);return new St(i.path,i.collectionGroup,l,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function Qd(r,e="asc"){const t=e,n=wr("orderBy",r);return Qs._create(n,t)}function Oo(r,e,t){if(typeof(t=ke(t))=="string"){if(t==="")throw new j(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ca(e)&&t.indexOf("/")!==-1)throw new j(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(J.fromString(t));if(!L.isDocumentKey(n))throw new j(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return ro(r,new L(n))}if(t instanceof Te)return ro(r,t._key);throw new j(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gr(t)}.`)}function Fo(r,e){if(!Array.isArray(r)||r.length===0)throw new j(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cl(r,e){const t=function(i,o){for(const l of i)for(const c of l.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Wd{convertValue(e,t="none"){switch(lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(at(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ut(e,(i,o)=>{n[i]=this.convertValue(o,t)}),n}convertVectorValue(e){var t,n,i;const o=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(l=>ne(l.doubleValue));return new Fs(o)}convertGeoPoint(e){return new Os(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=_s(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ln(e));default:return null}}convertTimestamp(e){const t=We(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);W(ka(n));const i=new un(n.get(1),n.get(3)),o=new L(n.popFirst(5));return i.isEqual(t)||Oe(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hl extends al{constructor(e,t,n,i,o,l){super(e,t,n,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(wr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Xn extends hl{data(e={}){return super.data(e)}}class Yd{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new tn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Xn(this._firestore,this._userDataWriter,n.key,n,new tn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const h=new Xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new tn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,p=-1;return c.type!==0&&(m=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),p=l.indexOf(c.doc.key)),{type:Xd(c.type),doc:h,oldIndex:m,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Xd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class dl extends Wd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Te(this.firestore,null,t)}}function Xt(r,e,t,...n){r=it(r,Te);const i=it(r.firestore,pn),o=qs(i);let l;return l=typeof(e=ke(e))=="string"||e instanceof _r?qd(o,"updateDoc",r._key,e,t,n):Ud(o,"updateDoc",r._key,e),ml(i,[l.toMutation(r._key,Ve.exists(!0))])}function fl(r,e){const t=it(r.firestore,pn),n=tt(r),i=Hd(r.converter,e);return ml(t,[Fd(qs(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ve.exists(!1))]).then(()=>n)}function ms(r,...e){var t,n,i;r=ke(r);let o={includeMetadataChanges:!1,source:"default"},l=0;typeof e[l]!="object"||Lo(e[l])||(o=e[l],l++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Lo(e[l])){const E=e[l];e[l]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[l+1]=(n=E.error)===null||n===void 0?void 0:n.bind(E),e[l+2]=(i=E.complete)===null||i===void 0?void 0:i.bind(E)}let h,m,p;if(r instanceof Te)m=it(r.firestore,pn),p=Es(r._key.path),h={next:E=>{e[l]&&e[l](Jd(m,r,E))},error:e[l+1],complete:e[l+2]};else{const E=it(r,ht);m=it(E.firestore,pn),p=E._query;const A=new dl(m);h={next:P=>{e[l]&&e[l](new Yd(m,A,E,P))},error:e[l+1],complete:e[l+2]},Gd(r._query)}return function(A,P,S,k){const V=new Pd(k),D=new cd(P,V,S);return A.asyncQueue.enqueueAndForget(async()=>od(await Vo(A),D)),()=>{V.Za(),A.asyncQueue.enqueueAndForget(async()=>ad(await Vo(A),D))}}(tl(m),p,c,h)}function ml(r,e){return function(n,i){const o=new st;return n.asyncQueue.enqueueAndForget(async()=>xd(await Vd(n),i,o)),o.promise}(tl(r),e)}function Jd(r,e,t){const n=t.docs.get(e._key),i=new dl(r);return new hl(r,i,e._key,n,new tn(t.hasPendingWrites,t.fromCache),e.converter)}function pl(){return new Bs("serverTimestamp")}(function(e,t=!0){(function(i){Nt=i})(du),iu(new ou("firestore",(n,{instanceIdentifier:i,options:o})=>{const l=n.getProvider("app").getImmediate(),c=new pn(new Hu(n.getProvider("auth-internal")),new Zu(n.getProvider("app-check-internal")),function(m,p){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new j(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(m.options.projectId,p)}(l,i),l);return o=Object.assign({useFetchStreams:t},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Wi(Ji,"4.7.3",e),Wi(Ji,"4.7.3","esm2017")})();const Zd={apiKey:"AIzaSyBBYaJSx7HiwOqhO7b2RWNbJXxHN5gLckc",authDomain:"cyra-b50e8.firebaseapp.com",databaseURL:"https://cyra-b50e8-default-rtdb.firebaseio.com",projectId:"cyra-b50e8",storageBucket:"cyra-b50e8.firebasestorage.app",messagingSenderId:"996230065210",appId:"1:996230065210:web:ee980969b2de6b4cf09903",measurementId:"G-4LWJ95K3SR"},gl=pu(Zd),Ne=Dd(gl),ef=gu(gl),yl=new yu;yl.setCustomParameters({prompt:"select_account",client_id:"810662183892-oha8u295upjkdv8velje36f42jn3ppk7.apps.googleusercontent.com"});const tf=({isOpen:r,onClose:e,onSubmit:t,email:n,name:i})=>{const[o,l]=G.useState({specialization:"",licenseNumber:"",experience:"",phone:""});if(!r)return null;const c=m=>{m.preventDefault(),t(o)},h=m=>{l({...o,[m.target.name]:m.target.value})};return d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:d.jsxs("div",{className:"bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative max-h-[90vh] overflow-y-auto",children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-gray-400 hover:text-gray-600",children:d.jsx(Ku,{className:"w-6 h-6"})}),d.jsxs("div",{className:"text-center mb-6",children:[d.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl",children:"👩‍⚕️"}),d.jsx("h2",{className:"text-2xl font-serif font-bold text-gray-900 mb-2",children:"Complete Your Profile"}),d.jsx("p",{className:"text-gray-600",children:"Welcome! Please provide your professional details."})]}),d.jsxs("form",{onSubmit:c,className:"space-y-5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),d.jsx("input",{type:"text",value:i,disabled:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-600"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),d.jsx("input",{type:"email",value:n,disabled:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-600"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Specialization"}),d.jsxs("select",{name:"specialization",value:o.specialization,onChange:h,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500",children:[d.jsx("option",{value:"",children:"Select Specialization"}),d.jsx("option",{value:"Gynecologist",children:"Gynecologist"}),d.jsx("option",{value:"Obstetrician",children:"Obstetrician"}),d.jsx("option",{value:"Reproductive Endocrinologist",children:"Reproductive Endocrinologist"}),d.jsx("option",{value:"General Practitioner",children:"General Practitioner"}),d.jsx("option",{value:"Other",children:"Other"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Medical License Number"}),d.jsx("input",{type:"text",name:"licenseNumber",value:o.licenseNumber,onChange:h,required:!0,placeholder:"Enter your license number",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Years of Experience"}),d.jsx("input",{type:"number",name:"experience",value:o.experience,onChange:h,required:!0,min:"0",placeholder:"Years of experience",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),d.jsx("input",{type:"tel",name:"phone",value:o.phone,onChange:h,required:!0,placeholder:"Enter your phone number",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"})]}),d.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl",children:"Complete Registration"})]})]})})},nf=()=>{const r=Pt(),[e,t]=G.useState(!1),[n,i]=G.useState({email:"",password:""}),[o,l]=G.useState(""),[c,h]=G.useState(!1),[m,p]=G.useState(!1),[E,A]=G.useState(null),P=D=>{i({...n,[D.target.name]:D.target.value}),l("")},S=D=>{D.preventDefault();const O=localStorage.getItem("doctor_registration");if(!O){l("No account found. Please register first.");return}const $=JSON.parse(O);n.email===$.email&&n.password==="doctor123"?(localStorage.setItem("doctor_logged_in","true"),window.location.reload()):l("Invalid email or password")},k=async()=>{h(!0),l("");try{const O=(await _u(ef,yl)).user,$=localStorage.getItem("doctor_registration");if($){const Z=JSON.parse($);if(Z.email===O.email||Z.googleId===O.uid){localStorage.setItem("doctor_logged_in","true"),window.location.reload();return}}A({email:O.email,name:O.displayName||O.email,googleId:O.uid}),p(!0)}catch(D){console.error("Google sign-in error:",D),l("Google sign-in failed. Please try again.")}finally{h(!1)}},V=D=>{if(!E)return;const O={name:E.name,email:E.email,googleId:E.googleId,...D,registeredAt:new Date().toISOString()};localStorage.setItem("doctor_registration",JSON.stringify(O)),localStorage.setItem("doctor_logged_in","true"),p(!1),window.location.reload()};return d.jsxs("div",{className:"min-h-screen flex items-center justify-center px-4",children:[d.jsxs("div",{className:"max-w-md w-full",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl",children:"👩‍⚕️"}),d.jsx("h1",{className:"text-3xl font-serif font-bold text-gray-900 mb-2",children:"Doctor Login"}),d.jsx("p",{className:"text-gray-600",children:"Sign in to access your dashboard"})]}),d.jsxs("form",{onSubmit:S,className:"bg-white rounded-3xl shadow-2xl p-8 border border-gray-100",children:[o&&d.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-xl",children:d.jsx("p",{className:"text-sm text-red-600",children:o})}),d.jsxs("div",{className:"space-y-5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:d.jsx($o,{className:"w-5 h-5 text-gray-400"})}),d.jsx("input",{type:"email",name:"email",value:n.email,onChange:P,required:!0,placeholder:"doctor@example.com",className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:d.jsx(ju,{className:"w-5 h-5 text-gray-400"})}),d.jsx("input",{type:e?"text":"password",name:"password",value:n.password,onChange:P,required:!0,placeholder:"Enter your password",className:"w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"}),d.jsx("button",{type:"button",onClick:()=>t(!e),className:"absolute inset-y-0 right-0 pr-4 flex items-center",children:e?d.jsx(Su,{className:"w-5 h-5 text-gray-400 hover:text-gray-600"}):d.jsx(Vu,{className:"w-5 h-5 text-gray-400 hover:text-gray-600"})})]})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[d.jsx("input",{type:"checkbox",className:"w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"}),d.jsx("span",{className:"text-sm text-gray-600",children:"Remember me"})]}),d.jsx("a",{href:"#",className:"text-sm text-purple-600 font-semibold hover:text-purple-700",children:"Forgot Password?"})]})]}),d.jsxs("button",{type:"submit",disabled:c,className:"w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[d.jsx(Mu,{className:"w-5 h-5"}),d.jsx("span",{children:c?"Signing in...":"Sign In"})]}),d.jsx("div",{className:"mt-6",children:d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"absolute inset-0 flex items-center",children:d.jsx("div",{className:"w-full border-t border-gray-300"})}),d.jsx("div",{className:"relative flex justify-center text-sm",children:d.jsx("span",{className:"px-2 bg-white text-gray-500",children:"Or continue with"})})]})}),d.jsxs("button",{type:"button",onClick:k,disabled:c,className:"w-full mt-6 flex items-center justify-center py-4 px-4 border border-gray-300 rounded-2xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all",children:[d.jsxs("svg",{className:"w-5 h-5 mr-2",viewBox:"0 0 24 24",children:[d.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),d.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),d.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),d.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"Sign in with Google"]}),d.jsxs("div",{className:"mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl",children:[d.jsx("p",{className:"text-xs font-semibold text-blue-900 mb-2",children:"Demo Credentials:"}),d.jsxs("p",{className:"text-xs text-blue-700",children:["Email: Use your registered email",d.jsx("br",{}),"Password: doctor123"]})]})]}),d.jsxs("p",{className:"text-center text-sm text-gray-600 mt-6",children:["Don't have an account?"," ",d.jsx("button",{onClick:()=>r("/register"),className:"text-purple-600 font-semibold hover:text-purple-700",children:"Register here"})]})]}),E&&d.jsx(tf,{isOpen:m,onClose:()=>{p(!1),A(null)},onSubmit:V,email:E.email,name:E.name})]})},rf=()=>{const r=Pt(),[e,t]=G.useState(!1),[n,i]=G.useState({fullName:"",email:"",phone:"",specialization:"",qualification:"",experience:"",registrationNumber:"",languages:"",location:"",about:""}),o=["Gynecologist","Obstetrician","Endocrinologist","Fertility Specialist","Maternal-Fetal Medicine","Reproductive Endocrinologist","General Physician","Other"],l=h=>{i({...n,[h.target.name]:h.target.value})},c=async h=>{h.preventDefault(),t(!0);try{const m={name:n.fullName,email:n.email,phone:n.phone,specialty:n.specialization,qualification:n.qualification,experience:`${n.experience} years`,registrationNumber:n.registrationNumber,languages:n.languages.split(",").map(E=>E.trim()),location:n.location,about:n.about,rating:5,reviews:0,image:"👩‍⚕️",availability:"Available Today",consultationFee:500,createdAt:pl(),status:"active"},p=await fl(sr(Ne,"doctors"),m);console.log("Doctor registered with ID:",p.id),localStorage.setItem("doctor_registration",JSON.stringify(n)),r("/success")}catch(m){console.error("Error registering doctor:",m),alert("Failed to register. Please try again.")}finally{t(!1)}};return d.jsx("div",{className:"min-h-screen py-6 sm:py-12 px-4",children:d.jsxs("div",{className:"max-w-3xl mx-auto",children:[d.jsxs("div",{className:"text-center mb-6 sm:mb-10",children:[d.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-3xl sm:text-4xl",children:"👩‍⚕️"}),d.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2 sm:mb-3",children:"Join Cyra as a Doctor"}),d.jsx("p",{className:"text-base sm:text-lg text-gray-600 px-4",children:"Help women manage their health journey with expert care"})]}),d.jsxs("form",{onSubmit:c,className:"bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100",children:[d.jsx("h2",{className:"text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6",children:"Registration Form"}),d.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[d.jsxs("div",{children:[d.jsxs("h3",{className:"text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center",children:[d.jsx(Ko,{className:"w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500"}),"Personal Information"]}),d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Full Name ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:l,required:!0,placeholder:"Dr. John Doe",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Email ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"email",name:"email",value:n.email,onChange:l,required:!0,placeholder:"doctor@example.com",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Phone Number ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:l,required:!0,placeholder:"+91 98765 43210",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Location ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"text",name:"location",value:n.location,onChange:l,required:!0,placeholder:"Mumbai, India",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]})]})]}),d.jsxs("div",{children:[d.jsxs("h3",{className:"text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center",children:[d.jsx(Go,{className:"w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500"}),"Professional Information"]}),d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Specialization ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsxs("select",{name:"specialization",value:n.specialization,onChange:l,required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900",children:[d.jsx("option",{value:"",children:"Select Specialization"}),o.map(h=>d.jsx("option",{value:h,children:h},h))]})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Qualification ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"text",name:"qualification",value:n.qualification,onChange:l,required:!0,placeholder:"MBBS, MD (Gynecology)",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Years of Experience ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"number",name:"experience",value:n.experience,onChange:l,required:!0,placeholder:"10",min:"0",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Medical Registration Number ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"text",name:"registrationNumber",value:n.registrationNumber,onChange:l,required:!0,placeholder:"MCI-12345",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900"})]}),d.jsxs("div",{className:"sm:col-span-2",children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Languages Spoken ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("input",{type:"text",name:"languages",value:n.languages,onChange:l,required:!0,placeholder:"English, Hindi, Marathi",className:"w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base text-gray-900"})]})]})]}),d.jsxs("div",{children:[d.jsxs("h3",{className:"text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center",children:[d.jsx(Bo,{className:"w-4 h-4 sm:w-5 sm:h-5 mr-2 text-purple-500"}),"About You"]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Brief Introduction ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsx("textarea",{name:"about",value:n.about,onChange:l,required:!0,rows:"4",placeholder:"Tell us about your expertise, areas of interest, and approach to patient care...",className:"w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm sm:text-base text-gray-900"})]})]})]}),d.jsx("div",{className:"mt-4 sm:mt-6 p-3 sm:p-4 bg-purple-50 rounded-xl border border-purple-200",children:d.jsxs("label",{className:"flex items-start space-x-2 sm:space-x-3 cursor-pointer",children:[d.jsx("input",{type:"checkbox",required:!0,className:"mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 flex-shrink-0"}),d.jsx("span",{className:"text-xs sm:text-sm text-gray-700",children:"I agree to the terms and conditions and confirm that all information provided is accurate. I understand that my credentials will be verified before approval."})]})}),d.jsx("button",{type:"submit",disabled:e,className:"w-full mt-6 sm:mt-8 bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",children:e?"Submitting...":"Submit Registration"})]}),d.jsxs("p",{className:"text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6",children:["Already registered?"," ",d.jsx("button",{onClick:()=>r("/"),className:"text-purple-600 font-semibold hover:text-purple-700",children:"Login here"})]})]})})},sf=()=>{const r=Pt();return d.jsx("div",{className:"min-h-screen flex items-center justify-center px-4",children:d.jsxs("div",{className:"max-w-md w-full text-center",children:[d.jsx("div",{className:"mb-8 flex justify-center",children:d.jsx("div",{className:"w-24 h-24 bg-green-100 rounded-full flex items-center justify-center",children:d.jsx(Pu,{className:"w-16 h-16 text-green-500"})})}),d.jsx("h1",{className:"text-3xl font-serif font-bold text-gray-900 mb-4",children:"Registration Successful!"}),d.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Thank you for registering with Cyra. Your application has been submitted successfully."}),d.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8 text-left",children:[d.jsx("h3",{className:"font-semibold text-gray-900 mb-3",children:"What happens next?"}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[d.jsxs("li",{className:"flex items-start",children:[d.jsx("span",{className:"text-purple-500 mr-2",children:"•"}),d.jsx("span",{children:"Our team will verify your credentials within 24-48 hours"})]}),d.jsxs("li",{className:"flex items-start",children:[d.jsx("span",{className:"text-purple-500 mr-2",children:"•"}),d.jsx("span",{children:"You'll receive an email confirmation once approved"})]}),d.jsxs("li",{className:"flex items-start",children:[d.jsx("span",{className:"text-purple-500 mr-2",children:"•"}),d.jsx("span",{children:"After approval, you can start consulting with patients"})]})]})]}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("button",{onClick:()=>r("/dashboard"),className:"w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg flex items-center justify-center space-x-2",children:[d.jsx(ku,{className:"w-5 h-5"}),d.jsx("span",{children:"Go to Dashboard"})]}),d.jsx("button",{onClick:()=>r("/"),className:"w-full bg-white border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all",children:"Back to Home"}),d.jsxs("p",{className:"text-sm text-gray-600 pt-2",children:["Questions? Contact us at"," ",d.jsx("a",{href:"mailto:support@cyra.com",className:"text-purple-600 font-semibold hover:text-purple-700",children:"support@cyra.com"})]})]})]})})},of=()=>{const r=Pt(),[e]=G.useState(()=>{const h=localStorage.getItem("doctor_registration");return h?JSON.parse(h):null}),[t,n]=G.useState([]),[i,o]=G.useState({todayPatients:0,totalPatients:0,totalRevenue:0});G.useEffect(()=>{if(e){console.log("Setting up consultation listener for doctor:",e.fullName);try{const h=ul(sr(Ne,"consultations"),Kd("doctor.name","==",e.fullName)),m=ms(h,p=>{const E=p.docs.map(D=>({id:D.id,...D.data()})),A=E.filter(D=>D.status==="pending"||D.status==="active").sort((D,O)=>D.status==="active"&&O.status==="pending"?-1:D.status==="pending"&&O.status==="active"?1:new Date(O.bookingTime)-new Date(D.bookingTime));n(A);const P=new Date;P.setHours(0,0,0,0);const S=E.filter(D=>{const O=new Date(D.bookingTime);return O.setHours(0,0,0,0),O.getTime()===P.getTime()&&(D.status==="active"||D.status==="completed")}),k=E.filter(D=>D.status==="completed"||D.status==="active"),V=E.filter(D=>D.status==="completed").reduce((D,O)=>D+(O.fee||0),0);o({todayPatients:S.length,totalPatients:k.length,totalRevenue:V}),console.log("Stats updated:",{todayPatients:S.length,totalPatients:k.length,totalRevenue:V})},p=>{console.error("Error fetching consultations:",p)});return()=>m()}catch(h){console.error("Error setting up consultation listener:",h)}}},[e]);const l=h=>{r("/chat-consultation",{state:{consultation:h}})},c=()=>{window.confirm("Are you sure you want to logout?")&&(localStorage.removeItem("doctor_logged_in"),localStorage.removeItem("doctor_registration"),window.location.href="/")};return e?d.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50",children:[d.jsx("header",{className:"bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-4 sm:py-6 sticky top-0 z-10 shadow-sm",children:d.jsx("div",{className:"max-w-7xl mx-auto",children:d.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-1",children:"Doctor Dashboard"}),d.jsxs("p",{className:"text-sm sm:text-base text-gray-600",children:["Welcome back, ",e.fullName]})]}),d.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto",children:[d.jsxs("button",{onClick:()=>r("/profile"),className:"flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm",children:[d.jsx(Ko,{className:"w-4 h-4"}),d.jsx("span",{className:"hidden sm:inline font-medium",children:"Profile"})]}),d.jsxs("button",{onClick:c,className:"flex items-center space-x-2 px-3 sm:px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors text-sm",children:[d.jsx(Lu,{className:"w-4 h-4"}),d.jsx("span",{className:"hidden sm:inline font-medium",children:"Logout"})]})]})]})})}),d.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",children:[d.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform",children:[d.jsx("div",{className:"flex items-center justify-center mb-4 sm:mb-6",children:d.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg",children:d.jsx(Ru,{className:"w-8 h-8 sm:w-10 sm:h-10 text-white"})})}),d.jsx("h3",{className:"text-center text-gray-600 text-xs sm:text-sm font-medium mb-2",children:"Today's Patients"}),d.jsx("p",{className:"text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-2",children:i.todayPatients}),d.jsx("p",{className:"text-center text-xs sm:text-sm text-gray-500",children:"Patients attended today"})]}),d.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform",children:[d.jsx("div",{className:"flex items-center justify-center mb-4 sm:mb-6",children:d.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg",children:d.jsx(Gu,{className:"w-8 h-8 sm:w-10 sm:h-10 text-white"})})}),d.jsx("h3",{className:"text-center text-gray-600 text-xs sm:text-sm font-medium mb-2",children:"Total Patients"}),d.jsx("p",{className:"text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-2",children:i.totalPatients}),d.jsx("p",{className:"text-center text-xs sm:text-sm text-gray-500",children:"All time patients"})]}),d.jsxs("div",{className:"bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:scale-105 transition-transform",children:[d.jsx("div",{className:"flex items-center justify-center mb-4 sm:mb-6",children:d.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg",children:d.jsx($u,{className:"w-8 h-8 sm:w-10 sm:h-10 text-white"})})}),d.jsx("h3",{className:"text-center text-gray-600 text-xs sm:text-sm font-medium mb-2",children:"Total Revenue"}),d.jsxs("p",{className:"text-center text-3xl sm:text-5xl font-bold text-gray-900 mb-2",children:["₹",i.totalRevenue.toLocaleString()]}),d.jsx("p",{className:"text-center text-xs sm:text-sm text-gray-500",children:"All time earnings"})]})]}),d.jsxs("div",{className:"mt-8 sm:mt-12",children:[d.jsx("h2",{className:"text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6",children:"Active & Pending Consultations"}),t.length===0?d.jsxs("div",{className:"bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 text-center",children:[d.jsx("div",{className:"w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx(Yi,{className:"w-8 h-8 sm:w-10 sm:h-10 text-purple-500"})}),d.jsx("h3",{className:"text-lg sm:text-xl font-semibold text-gray-900 mb-2",children:"No Active Consultations"}),d.jsx("p",{className:"text-sm sm:text-base text-gray-600 mb-4",children:"You don't have any active or pending chat consultations at the moment."}),d.jsx("p",{className:"text-xs sm:text-sm text-gray-500",children:"When patients book consultations with you, they will appear here."})]}):d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:t.map(h=>d.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all",children:[d.jsxs("div",{className:"flex items-start justify-between mb-4 gap-2",children:[d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-center space-x-2 mb-2 flex-wrap",children:[d.jsx("h3",{className:"text-base sm:text-lg font-semibold text-gray-900 truncate",children:h.patientName}),d.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${h.status==="active"||h.chatStarted?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}`,children:h.status==="active"||h.chatStarted?"Active":"Pending"})]}),d.jsxs("div",{className:"flex items-center space-x-2 text-xs sm:text-sm text-gray-600",children:[d.jsx(Nu,{className:"w-3 h-3 sm:w-4 sm:h-4"}),d.jsxs("span",{children:[h.duration," minutes"]})]})]}),d.jsxs("div",{className:"bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap",children:["₹",h.fee]})]}),d.jsxs("div",{className:"mb-4",children:[d.jsx("p",{className:"text-xs sm:text-sm font-medium text-gray-700 mb-1",children:"Problem Description:"}),d.jsx("p",{className:"text-xs sm:text-sm text-gray-600 line-clamp-3",children:h.description||"No description provided"})]}),d.jsxs("div",{className:"mb-4 text-xs text-gray-500",children:["Booked: ",new Date(h.bookingTime).toLocaleString()]}),d.jsxs("button",{onClick:()=>l(h),className:`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold text-sm transition-all shadow-md flex items-center justify-center space-x-2 ${h.status==="active"||h.chatStarted?"bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90":"bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"}`,children:[d.jsx(Yi,{className:"w-4 h-4 sm:w-5 sm:h-5"}),d.jsx("span",{children:h.status==="active"||h.chatStarted?"Continue Chat":"Start Chat"})]})]},h.id))})]})]})]}):(r("/register"),null)},af=()=>{const r=Pt(),[e]=G.useState(()=>{const t=localStorage.getItem("doctor_registration");return t?JSON.parse(t):null});return e?d.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 pb-12",children:[d.jsx("header",{className:"bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 shadow-sm sticky top-0 z-10",children:d.jsxs("div",{className:"max-w-4xl mx-auto flex items-center space-x-4",children:[d.jsx("button",{onClick:()=>r("/dashboard"),className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:d.jsx(zo,{className:"w-6 h-6 text-gray-700"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h1",{className:"text-2xl font-serif font-bold text-gray-900",children:"My Profile"}),d.jsx("p",{className:"text-sm text-gray-600",children:"View and manage your information"})]})]})}),d.jsxs("main",{className:"max-w-4xl mx-auto px-6 py-8",children:[d.jsxs("div",{className:"bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100",children:[d.jsxs("div",{className:"flex items-start justify-between mb-6",children:[d.jsxs("div",{className:"flex items-center space-x-6",children:[d.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl shadow-lg",children:"👩‍⚕️"}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-3xl font-serif font-bold text-gray-900 mb-2",children:e.fullName}),d.jsx("p",{className:"text-lg text-purple-600 font-semibold mb-1",children:e.specialization}),d.jsx("p",{className:"text-sm text-gray-600",children:e.qualification})]})]}),d.jsxs("button",{onClick:()=>r("/register"),className:"flex items-center space-x-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-colors",children:[d.jsx(Uu,{className:"w-4 h-4"}),d.jsx("span",{className:"text-sm font-medium",children:"Edit Profile"})]})]}),d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-xl",children:[d.jsx($o,{className:"w-5 h-5 text-purple-500"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Email"}),d.jsx("p",{className:"text-sm font-medium text-gray-900",children:e.email})]})]}),d.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-xl",children:[d.jsx(qu,{className:"w-5 h-5 text-purple-500"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Phone"}),d.jsx("p",{className:"text-sm font-medium text-gray-900",children:e.phone})]})]}),d.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-xl",children:[d.jsx(Ou,{className:"w-5 h-5 text-purple-500"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Location"}),d.jsx("p",{className:"text-sm font-medium text-gray-900",children:e.location})]})]}),d.jsxs("div",{className:"flex items-center space-x-3 p-3 bg-gray-50 rounded-xl",children:[d.jsx(Bo,{className:"w-5 h-5 text-purple-500"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Experience"}),d.jsxs("p",{className:"text-sm font-medium text-gray-900",children:[e.experience," years"]})]})]})]})]}),d.jsxs("div",{className:"bg-white rounded-3xl shadow-xl p-8 mb-6 border border-gray-100",children:[d.jsxs("h3",{className:"text-xl font-serif font-bold text-gray-900 mb-6 flex items-center",children:[d.jsx(Go,{className:"w-6 h-6 mr-3 text-purple-500"}),"Professional Information"]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-sm font-medium text-gray-500 mb-1 block",children:"Specialization"}),d.jsx("p",{className:"text-base text-gray-900 font-medium",children:e.specialization})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-sm font-medium text-gray-500 mb-1 block",children:"Qualification"}),d.jsx("p",{className:"text-base text-gray-900 font-medium",children:e.qualification})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-sm font-medium text-gray-500 mb-1 block",children:"Medical Registration Number"}),d.jsx("p",{className:"text-base text-gray-900 font-medium",children:e.registrationNumber})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"text-sm font-medium text-gray-500 mb-1 block flex items-center",children:[d.jsx(Du,{className:"w-4 h-4 mr-2 text-purple-500"}),"Languages Spoken"]}),d.jsx("p",{className:"text-base text-gray-900 font-medium",children:e.languages})]})]})]}),d.jsxs("div",{className:"bg-white rounded-3xl shadow-xl p-8 border border-gray-100",children:[d.jsxs("h3",{className:"text-xl font-serif font-bold text-gray-900 mb-6 flex items-center",children:[d.jsx(Cu,{className:"w-6 h-6 mr-3 text-purple-500"}),"About Me"]}),d.jsx("p",{className:"text-gray-700 leading-relaxed",children:e.about})]})]})]}):(r("/register"),null)},lf=()=>{var re;const r=Pt(),t=(re=eu().state)==null?void 0:re.consultation,[n,i]=G.useState(""),[o,l]=G.useState([]),c=G.useRef(null),[h,m]=G.useState(null),[p,E]=G.useState(!1),[A,P]=G.useState(!1),[S,k]=G.useState(!0),V=G.useRef(Date.now()),D=G.useRef(Date.now());G.useEffect(()=>{if(!(t!=null&&t.id))return;const v=tt(Ne,"consultations",t.id),g=ms(v,y=>{if(y.exists()){const x=y.data();if(x.timeRemaining!==void 0)m(x.timeRemaining),console.log("Loaded saved time:",x.timeRemaining);else if(h===null){const w=t!=null&&t.duration?t.duration*60:600;m(w),console.log("Using initial time:",w)}x.chatStarted&&(A||(console.log("Chat already started, resuming timer"),P(!0)),x.status!=="completed"&&(k(!1),console.log("Resuming timer for active chat"))),x.status==="completed"&&(E(!0),k(!0))}});return()=>g()},[t==null?void 0:t.id,t==null?void 0:t.duration,A]),G.useEffect(()=>{if(!(t!=null&&t.id)){console.error("No consultation ID found");return}console.log("Setting up message listener for consultation:",t.id);const v=ul(sr(Ne,"consultations",t.id,"messages"),Qd("timestamp","asc")),g=ms(v,y=>{const x=y.docs.map(w=>({id:w.id,...w.data()}));console.log("Fetched messages:",x),l(x),x.length>0&&(V.current=Date.now())},y=>{console.error("Error fetching messages:",y)});return()=>g()},[t==null?void 0:t.id]);const O=()=>{var v;(v=c.current)==null||v.scrollIntoView({behavior:"smooth"})};G.useEffect(()=>{O()},[o]),G.useEffect(()=>{if(!(t!=null&&t.id)||p||h===null)return;const v=setInterval(()=>{!S&&Date.now()-D.current>=5e3&&Xt(tt(Ne,"consultations",t.id),{timeRemaining:h,lastUpdated:new Date().toISOString()}).then(()=>{D.current=Date.now(),console.log("Saved time remaining:",h)}).catch(g=>{console.error("Error saving time:",g)})},5e3);return()=>clearInterval(v)},[t==null?void 0:t.id,h,S,p]),G.useEffect(()=>{if(h===null)return;if(h<=0){E(!0),k(!0),t!=null&&t.id&&Xt(tt(Ne,"consultations",t.id),{status:"completed",endTime:new Date().toISOString(),timeRemaining:0}).catch(g=>{console.error("Error completing consultation:",g)});return}if(S||p)return;const v=setInterval(()=>{m(g=>g<=1?(E(!0),k(!0),t!=null&&t.id&&Xt(tt(Ne,"consultations",t.id),{status:"completed",endTime:new Date().toISOString(),timeRemaining:0}).catch(y=>{console.error("Error completing consultation:",y)}),0):g-1)},1e3);return()=>clearInterval(v)},[h,S,p,t==null?void 0:t.id]),G.useEffect(()=>{if(p||!A)return;const v=setInterval(()=>{Date.now()-V.current>12e4&&!S&&k(!0)},5e3);return()=>clearInterval(v)},[p,A,S]);const $=v=>{const g=Math.floor(v/60),y=v%60;return`${g}:${y.toString().padStart(2,"0")}`},Z=async()=>{var v;if(n.trim()&&!p){if(A)k(!1);else{P(!0),k(!1);try{await Xt(tt(Ne,"consultations",t.id),{status:"active",chatStarted:!0})}catch(g){console.error("Error updating consultation:",g)}}V.current=Date.now();try{await fl(sr(Ne,"consultations",t.id,"messages"),{text:n,sender:"doctor",senderName:"Dr. "+(((v=t.doctor)==null?void 0:v.name)||"Doctor"),timestamp:pl(),time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),i("")}catch(g){console.error("Error sending message:",g),alert("Failed to send message. Please try again.")}}},be=async()=>{if(window.confirm("Are you sure you want to end this consultation? The timer will stop and the consultation will be marked as completed."))try{await Xt(tt(Ne,"consultations",t.id),{status:"completed",endTime:new Date().toISOString(),timeRemaining:h}),E(!0),setTimeout(()=>{r("/dashboard")},1500)}catch(v){console.error("Error ending consultation:",v)}};return t?d.jsxs("div",{className:"min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50",children:[d.jsx("header",{className:"bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 shadow-sm sticky top-0 z-10",children:d.jsxs("div",{className:"max-w-4xl mx-auto flex items-center space-x-2 sm:space-x-4",children:[d.jsx("button",{onClick:()=>r("/dashboard"),className:"p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0",children:d.jsx(zo,{className:"w-5 h-5 sm:w-6 sm:h-6 text-gray-700"})}),d.jsx("div",{className:"w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xl sm:text-2xl flex-shrink-0",children:"👤"}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsx("h2",{className:"text-base sm:text-lg font-semibold text-gray-900 truncate",children:t.patientName}),d.jsx("p",{className:"text-xs sm:text-sm text-gray-600",children:"Patient Consultation"})]}),d.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-4 flex-shrink-0",children:[d.jsxs("div",{className:`px-2 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm flex items-center space-x-1 sm:space-x-2 ${p?"bg-red-100 text-red-700":h<120?"bg-orange-100 text-orange-700":"bg-purple-100 text-purple-700"}`,children:[d.jsx("span",{className:"whitespace-nowrap",children:p?"Ended":$(h)}),!p&&d.jsx("span",{className:"text-xs hidden sm:inline",children:S?"⏸️":"▶️"})]}),d.jsx("button",{onClick:be,className:"px-2 sm:px-4 py-1.5 sm:py-2 bg-red-50 text-red-600 rounded-lg sm:rounded-xl hover:bg-red-100 transition-colors text-xs sm:text-sm font-medium whitespace-nowrap",children:"End"})]})]})}),d.jsx("main",{className:"flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 pb-24 sm:pb-32",children:d.jsxs("div",{className:"max-w-4xl mx-auto space-y-3 sm:space-y-4",children:[d.jsx("div",{className:`border rounded-xl p-4 mb-4 ${p?"bg-red-50 border-red-200":S&&A?"bg-yellow-50 border-yellow-200":"bg-purple-50 border-purple-200"}`,children:d.jsxs("p",{className:`text-sm ${p?"text-red-900":S&&A?"text-yellow-900":"text-purple-900"}`,children:[d.jsx("span",{className:"font-semibold",children:"Duration:"})," ",t.duration," minutes |",d.jsx("span",{className:"font-semibold",children:" Fee:"})," ₹",t.fee,!A&&d.jsx("span",{className:"block mt-2 font-semibold text-purple-700",children:"⏱️ Timer will start when you send your first message"}),S&&A&&!p&&d.jsx("span",{className:"block mt-2 font-semibold text-yellow-700",children:"⏸️ Timer paused due to inactivity"}),p&&d.jsx("span",{className:"block mt-2 font-semibold text-red-700",children:"⚠️ Consultation time has ended"})]})}),o.map(v=>d.jsx("div",{children:d.jsx("div",{className:`flex ${v.sender==="doctor"?"justify-end":"justify-start"}`,children:d.jsxs("div",{className:`max-w-md ${v.sender==="doctor"?"bg-gradient-to-r from-purple-500 to-purple-600 text-white":"bg-white text-gray-900 shadow-sm border border-gray-100"} px-4 py-3 rounded-2xl`,children:[d.jsx("p",{className:"text-sm leading-relaxed",children:v.text}),d.jsx("p",{className:`text-xs mt-1 ${v.sender==="doctor"?"text-purple-100":"text-gray-500"} text-right`,children:v.time})]})})},v.id)),d.jsx("div",{ref:c})]})}),d.jsx("footer",{className:"bg-white border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 fixed bottom-0 left-0 right-0",children:d.jsxs("div",{className:"max-w-4xl mx-auto",children:[p&&d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg sm:rounded-xl p-2 sm:p-3 mb-2 sm:mb-3",children:d.jsx("p",{className:"text-red-900 font-semibold text-xs sm:text-sm text-center",children:"Consultation Time Ended"})}),d.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[d.jsx("button",{disabled:p,className:`p-1.5 sm:p-2 rounded-full transition-colors ${p?"opacity-50 cursor-not-allowed":"hover:bg-gray-100"}`,children:d.jsx(Fu,{className:"w-4 h-4 sm:w-5 sm:h-5 text-gray-600"})}),d.jsx("button",{disabled:p,className:`p-1.5 sm:p-2 rounded-full transition-colors hidden sm:block ${p?"opacity-50 cursor-not-allowed":"hover:bg-gray-100"}`,children:d.jsx(zu,{className:"w-4 h-4 sm:w-5 sm:h-5 text-gray-600"})}),d.jsx("input",{type:"text",value:n,onChange:v=>i(v.target.value),onKeyPress:v=>v.key==="Enter"&&Z(),placeholder:p?"Consultation ended":"Type your message...",disabled:p,className:`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-full focus:outline-none text-sm sm:text-base text-gray-900 ${p?"bg-gray-200 cursor-not-allowed":"bg-gray-100 focus:ring-2 focus:ring-purple-500"}`}),d.jsx("button",{onClick:Z,disabled:p,className:`p-2 sm:p-3 rounded-full shadow-lg transition-colors ${p?"bg-gray-300 cursor-not-allowed":"bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700"}`,children:d.jsx(Bu,{className:"w-4 h-4 sm:w-5 sm:h-5"})})]})]})})]}):(r("/dashboard"),null)};function uf(){const r=localStorage.getItem("doctor_logged_in")==="true";return d.jsx(tu,{children:d.jsxs(nu,{children:[d.jsx(gt,{path:"/",element:r?d.jsx(Bn,{to:"/dashboard",replace:!0}):d.jsx(nf,{})}),d.jsx(gt,{path:"/register",element:d.jsx(rf,{})}),d.jsx(gt,{path:"/success",element:d.jsx(sf,{})}),d.jsx(gt,{path:"/dashboard",element:r?d.jsx(of,{}):d.jsx(Bn,{to:"/",replace:!0})}),d.jsx(gt,{path:"/profile",element:r?d.jsx(af,{}):d.jsx(Bn,{to:"/",replace:!0})}),d.jsx(gt,{path:"/chat-consultation",element:r?d.jsx(lf,{}):d.jsx(Bn,{to:"/",replace:!0})})]})})}Xr.createRoot(document.getElementById("root")).render(d.jsx(ru.StrictMode,{children:d.jsx(uf,{})}));
