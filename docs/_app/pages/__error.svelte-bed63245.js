import{S as I,i as K,s as N,e as m,t as k,k as E,c as v,a as p,g as b,d as h,n as y,b as q,f as d,E as u,h as H,l as j,aK as R,F as C}from"../chunks/vendor-1c734409.js";function D(n){let e,i,f,r,a,o=n[1].message+"",l,t,s=n[2]&&n[1].stack&&F(n);return{c(){e=m("div"),i=m("h1"),f=k(n[0]),r=E(),a=m("p"),l=k(o),t=E(),s&&s.c(),this.h()},l(_){e=v(_,"DIV",{class:!0});var c=p(e);i=v(c,"H1",{class:!0});var P=p(i);f=b(P,n[0]),P.forEach(h),r=y(c),a=v(c,"P",{class:!0});var S=p(a);l=b(S,o),S.forEach(h),t=y(c),s&&s.l(c),c.forEach(h),this.h()},h(){q(i,"class","svelte-1hk3ehe"),q(a,"class","svelte-1hk3ehe"),q(e,"class","error svelte-1hk3ehe")},m(_,c){d(_,e,c),u(e,i),u(i,f),u(e,r),u(e,a),u(a,l),u(e,t),s&&s.m(e,null)},p(_,c){c&1&&H(f,_[0]),c&2&&o!==(o=_[1].message+"")&&H(l,o),_[2]&&_[1].stack?s?s.p(_,c):(s=F(_),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(_){_&&h(e),s&&s.d()}}}function F(n){let e,i=n[1].stack+"",f;return{c(){e=m("pre"),f=k(i)},l(r){e=v(r,"PRE",{});var a=p(e);f=b(a,i),a.forEach(h)},m(r,a){d(r,e,a),u(e,f)},p(r,a){a&2&&i!==(i=r[1].stack+"")&&H(f,i)},d(r){r&&h(e)}}}function V(n){let e,i,f,r,a,o;document.title=r=n[0];let l=n[1]&&D(n);return{c(){e=m("h1"),i=k("hiase"),f=E(),a=E(),l&&l.c(),o=j(),this.h()},l(t){e=v(t,"H1",{class:!0});var s=p(e);i=b(s,"hiase"),s.forEach(h),f=y(t),R('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(h),a=y(t),l&&l.l(t),o=j(),this.h()},h(){q(e,"class","svelte-1hk3ehe")},m(t,s){d(t,e,s),u(e,i),d(t,f,s),d(t,a,s),l&&l.m(t,s),d(t,o,s)},p(t,[s]){s&1&&r!==(r=t[0])&&(document.title=r),t[1]?l?l.p(t,s):(l=D(t),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},i:C,o:C,d(t){t&&h(e),t&&h(f),t&&h(a),l&&l.d(t),t&&h(o)}}}function w(n,e,i){let{status:f}=e,{error:r}=e;const a=!1;return n.$$set=o=>{"status"in o&&i(0,f=o.status),"error"in o&&i(1,r=o.error)},[f,r,a]}class A extends I{constructor(e){super();K(this,e,w,V,N,{status:0,error:1})}}export{A as default};
