import{U as Y,S as de,i as ue,s as ve,e as _,k as M,c as g,a as V,m as T,d as b,b as n,V as ne,g as J,G as v,W as $,X as ce,Y as pe,Z as he,_ as fe,$ as ae,Q as ke,t as me,K as _e,h as ge,a0 as qe,p as be,q as we,o as ye,n as Ee,a1 as xe,E as Ce}from"../../chunks/index-dcd82376.js";import{c as P}from"../../chunks/singletons-d1fb5791.js";function ie(i){const e=i-1;return e*e*e+1}P.disable_scroll_handling;P.goto;const Me=P.invalidate;P.prefetch;P.prefetch_routes;P.before_navigate;P.after_navigate;function z(i,{pending:e,error:t,result:o}={}){let c;async function m(h){const l=c={};h.preventDefault();const d=new FormData(i);e&&e({data:d,form:i});try{const p=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:d});if(l!==c)return;if(p.ok){o&&o({data:d,form:i,response:p});const s=new URL(i.action);s.search=s.hash="",Me(s.href)}else t?t({data:d,form:i,error:null,response:p}):console.error(await p.text())}catch(p){if(t&&p instanceof Error)t({data:d,form:i,error:p,response:null});else throw p}}return i.addEventListener("submit",m),{destroy(){i.removeEventListener("submit",m)}}}function se(i,{delay:e=0,duration:t=400,easing:o=ie,start:c=0,opacity:m=0}={}){const h=getComputedStyle(i),l=+h.opacity,d=h.transform==="none"?"":h.transform,p=1-c,s=l*(1-m);return{delay:e,duration:t,easing:o,css:(E,w)=>`
			transform: ${d} scale(${1-p*w});
			opacity: ${l-s*w}
		`}}function Te(i,{from:e,to:t},o={}){const c=getComputedStyle(i),m=c.transform==="none"?"":c.transform,[h,l]=c.transformOrigin.split(" ").map(parseFloat),d=e.left+e.width*h/t.width-(t.left+h),p=e.top+e.height*l/t.height-(t.top+l),{delay:s=0,duration:E=x=>Math.sqrt(x)*120,easing:w=ie}=o;return{delay:s,duration:Y(E)?E(Math.sqrt(d*d+p*p)):E,easing:w,css:(x,f)=>{const q=f*d,U=f*p,r=x+f*e.width/t.width,a=x+f*e.height/t.height;return`transform: ${m} translate(${q}px, ${U}px) scale(${r}, ${a});`}}}function le(i,e,t){const o=i.slice();return o[3]=e[t],o[4]=e,o[5]=t,o}function re(i,e){let t,o,c,m,h,l,d,p,s,E,w,x,f,q,U,r,a,u,A,j,L,H,N,F,G,O,R,S,K,I,Q,W=Ce,C,X,ee;function te(...y){return e[1](e[3],e[4],e[5],...y)}function oe(){return e[2](e[3],e[4],e[5])}return{key:i,first:null,c(){t=_("div"),o=_("form"),c=_("input"),h=M(),l=_("input"),p=M(),s=_("button"),x=M(),f=_("form"),q=_("input"),r=M(),a=_("input"),A=M(),j=_("button"),L=M(),H=_("form"),N=_("input"),G=M(),O=_("button"),K=M(),this.h()},l(y){t=g(y,"DIV",{class:!0});var k=V(t);o=g(k,"FORM",{action:!0,method:!0});var B=V(o);c=g(B,"INPUT",{type:!0,name:!0,class:!0}),h=T(B),l=g(B,"INPUT",{type:!0,name:!0,class:!0}),p=T(B),s=g(B,"BUTTON",{class:!0,"aria-label":!0}),V(s).forEach(b),B.forEach(b),x=T(k),f=g(k,"FORM",{class:!0,action:!0,method:!0});var D=V(f);q=g(D,"INPUT",{type:!0,name:!0,class:!0}),r=T(D),a=g(D,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),A=T(D),j=g(D,"BUTTON",{class:!0,"aria-label":!0}),V(j).forEach(b),D.forEach(b),L=T(k),H=g(k,"FORM",{action:!0,method:!0});var Z=V(H);N=g(Z,"INPUT",{type:!0,name:!0,class:!0}),G=T(Z),O=g(Z,"BUTTON",{class:!0,"aria-label":!0}),V(O).forEach(b),Z.forEach(b),K=T(k),k.forEach(b),this.h()},h(){n(c,"type","hidden"),n(c,"name","uid"),c.value=m=e[3].uid,n(c,"class","svelte-q3kvo1"),n(l,"type","hidden"),n(l,"name","done"),l.value=d=e[3].done?"":"true",n(l,"class","svelte-q3kvo1"),n(s,"class","toggle svelte-q3kvo1"),n(s,"aria-label",E="Mark todo as "+(e[3].done?"not done":"done")),n(o,"action","/todos?_method=PATCH"),n(o,"method","post"),n(q,"type","hidden"),n(q,"name","uid"),q.value=U=e[3].uid,n(q,"class","svelte-q3kvo1"),n(a,"aria-label","Edit todo"),n(a,"type","text"),n(a,"name","text"),a.value=u=e[3].text,n(a,"class","svelte-q3kvo1"),n(j,"class","save svelte-q3kvo1"),n(j,"aria-label","Save todo"),n(f,"class","text svelte-q3kvo1"),n(f,"action","/todos?_method=PATCH"),n(f,"method","post"),n(N,"type","hidden"),n(N,"name","uid"),N.value=F=e[3].uid,n(N,"class","svelte-q3kvo1"),n(O,"class","delete svelte-q3kvo1"),n(O,"aria-label","Delete todo"),O.disabled=R=e[3].pending_delete,n(H,"action","/todos?_method=DELETE"),n(H,"method","post"),n(t,"class","todo svelte-q3kvo1"),ne(t,"done",e[3].done),this.first=t},m(y,k){J(y,t,k),v(t,o),v(o,c),v(o,h),v(o,l),v(o,p),v(o,s),v(t,x),v(t,f),v(f,q),v(f,r),v(f,a),v(f,A),v(f,j),v(t,L),v(t,H),v(H,N),v(H,G),v(H,O),v(t,K),C=!0,X||(ee=[$(w=z.call(null,o,{pending:te})),$(z.call(null,f)),$(S=z.call(null,H,{pending:oe}))],X=!0)},p(y,k){e=y,(!C||k&1&&m!==(m=e[3].uid))&&(c.value=m),(!C||k&1&&d!==(d=e[3].done?"":"true"))&&(l.value=d),(!C||k&1&&E!==(E="Mark todo as "+(e[3].done?"not done":"done")))&&n(s,"aria-label",E),w&&Y(w.update)&&k&1&&w.update.call(null,{pending:te}),(!C||k&1&&U!==(U=e[3].uid))&&(q.value=U),(!C||k&1&&u!==(u=e[3].text)&&a.value!==u)&&(a.value=u),(!C||k&1&&F!==(F=e[3].uid))&&(N.value=F),(!C||k&1&&R!==(R=e[3].pending_delete))&&(O.disabled=R),S&&Y(S.update)&&k&1&&S.update.call(null,{pending:oe}),k&1&&ne(t,"done",e[3].done)},r(){Q=t.getBoundingClientRect()},f(){ce(t),W(),pe(t,Q)},a(){W(),W=he(t,Q,Te,{duration:200})},i(y){C||(y&&fe(()=>{I||(I=ae(t,se,{start:.7},!0)),I.run(1)}),C=!0)},o(y){y&&(I||(I=ae(t,se,{start:.7},!1)),I.run(0)),C=!1},d(y){y&&b(t),y&&I&&I.end(),X=!1,ke(ee)}}}function He(i){let e,t,o,c,m,h,l,d,p,s=[],E=new Map,w,x,f,q=i[0];const U=r=>r[3].uid;for(let r=0;r<q.length;r+=1){let a=le(i,q,r),u=U(a);E.set(u,s[r]=re(u,a))}return{c(){e=_("meta"),t=M(),o=_("div"),c=_("h1"),m=me("Todos"),h=M(),l=_("form"),d=_("input"),p=M();for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){const a=_e('[data-svelte="svelte-aw2gey"]',document.head);e=g(a,"META",{name:!0,content:!0}),a.forEach(b),t=T(r),o=g(r,"DIV",{class:!0});var u=V(o);c=g(u,"H1",{});var A=V(c);m=ge(A,"Todos"),A.forEach(b),h=T(u),l=g(u,"FORM",{class:!0,action:!0,method:!0});var j=V(l);d=g(j,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),j.forEach(b),p=T(u);for(let L=0;L<s.length;L+=1)s[L].l(u);u.forEach(b),this.h()},h(){document.title="Todos",n(e,"name","description"),n(e,"content","A todo list app"),n(d,"name","text"),n(d,"aria-label","Add todo"),n(d,"placeholder","+ tap to add a todo"),n(d,"class","svelte-q3kvo1"),n(l,"class","new svelte-q3kvo1"),n(l,"action","/todos"),n(l,"method","post"),n(o,"class","todos svelte-q3kvo1")},m(r,a){v(document.head,e),J(r,t,a),J(r,o,a),v(o,c),v(c,m),v(o,h),v(o,l),v(l,d),v(o,p);for(let u=0;u<s.length;u+=1)s[u].m(o,null);w=!0,x||(f=$(z.call(null,l,{result:Ve})),x=!0)},p(r,[a]){if(a&1){q=r[0],Ee();for(let u=0;u<s.length;u+=1)s[u].r();s=qe(s,a,U,1,r,q,E,o,xe,re,null,le);for(let u=0;u<s.length;u+=1)s[u].a();be()}},i(r){if(!w){for(let a=0;a<q.length;a+=1)we(s[a]);w=!0}},o(r){for(let a=0;a<s.length;a+=1)ye(s[a]);w=!1},d(r){b(e),r&&b(t),r&&b(o);for(let a=0;a<s.length;a+=1)s[a].d();x=!1,f()}}}const Ve=async({form:i})=>{i.reset()};function Ue(i,e,t){let{todos:o}=e;const c=(h,l,d,{data:p})=>{t(0,l[d].done=!!p.get("done"),o)},m=(h,l,d)=>t(0,l[d].pending_delete=!0,o);return i.$$set=h=>{"todos"in h&&t(0,o=h.todos)},[o,c,m]}class Oe extends de{constructor(e){super(),ue(this,e,Ue,He,ve,{todos:0})}}export{Oe as default};
