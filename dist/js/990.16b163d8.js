"use strict";(self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[]).push([[990],{990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return c}});var r=n(587),o=n(545),i=n(515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,n,c,s)=>{const a=t.ownerDocument.defaultView,l=(0,o.i)(t),u=t=>{const e=50,{startX:n}=t;return l?n>=a.innerWidth-e:n<=e},h=t=>l?-t.deltaX:t.deltaX,d=t=>l?-t.velocityX:t.velocityX,w=t=>u(t)&&e(),f=t=>{const e=h(t),n=e/a.innerWidth;c(n)},k=t=>{const e=h(t),n=a.innerWidth,o=e/n,i=d(t),c=n/2,l=i>=0&&(i>.2||e>c),u=l?1-o:o,w=u*n;let f=0;if(w>5){const t=w/Math.abs(i);f=Math.min(t,540)}s(l,o<=0?.01:(0,r.j)(0,o,.9999),f)};return(0,i.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:w,onStart:n,onMove:f,onEnd:k})}}}]);
//# sourceMappingURL=990.16b163d8.js.map