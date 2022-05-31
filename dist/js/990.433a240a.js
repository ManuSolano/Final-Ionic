"use strict";(self["webpackChunkfinal_ionic"]=self["webpackChunkfinal_ionic"]||[]).push([[990],{990:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return c}});var i=n(587),r=n(545),o=n(515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const c=(t,e,n,c,a)=>{const s=t.ownerDocument.defaultView,u=(0,r.i)(t),l=t=>{const e=50,{startX:n}=t;return u?n>=s.innerWidth-e:n<=e},h=t=>u?-t.deltaX:t.deltaX,d=t=>u?-t.velocityX:t.velocityX,f=t=>l(t)&&e(),k=t=>{const e=h(t),n=e/s.innerWidth;c(n)},w=t=>{const e=h(t),n=s.innerWidth,r=e/n,o=d(t),c=n/2,u=o>=0&&(o>.2||e>c),l=u?1-r:r,f=l*n;let k=0;if(f>5){const t=f/Math.abs(o);k=Math.min(t,540)}a(u,r<=0?.01:(0,i.j)(0,r,.9999),k)};return(0,o.A)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f,onStart:n,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.433a240a.js.map