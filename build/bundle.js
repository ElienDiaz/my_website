var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function i(e){e.forEach(n)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(t){return t&&o(t.destroy)?t.destroy:e}function c(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function h(e){return document.createTextNode(e)}function f(){return h(" ")}function m(){return h("")}function v(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}function b(e,t,n){e.classList[n?"add":"remove"](t)}let y;function w(e){y=e}function k(){if(!y)throw new Error("Function called outside component initialization");return y}function $(){const e=k();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const i=function(e,t,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,!1,t),s}(t,n);s.slice().forEach((t=>{t.call(e,i)}))}}}function x(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const z=[],_=[],T=[],j=[],C=Promise.resolve();let E=!1;function I(){E||(E=!0,C.then(A))}function S(e){T.push(e)}let M=!1;const q=new Set;function A(){if(!M){M=!0;do{for(let e=0;e<z.length;e+=1){const t=z[e];w(t),L(t.$$)}for(w(null),z.length=0;_.length;)_.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];q.has(t)||(q.add(t),t())}T.length=0}while(z.length);for(;j.length;)j.pop()();E=!1,M=!1,q.clear()}}function L(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const G=new Set;let P;function H(){P={r:0,c:[],p:P}}function D(){P.r||i(P.c),P=P.p}function O(e,t){e&&e.i&&(G.delete(e),e.i(t))}function F(e,t,n,s){if(e&&e.o){if(G.has(e))return;G.add(e),P.c.push((()=>{G.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function W(e,t){const n={},s={},i={$$scope:1};let o=e.length;for(;o--;){const r=e[o],a=t[o];if(a){for(const e in r)e in a||(s[e]=1);for(const e in a)i[e]||(n[e]=a[e],i[e]=1);e[o]=a}else for(const e in r)i[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function R(e){return"object"==typeof e&&null!==e?e:{}}function V(e){e&&e.c()}function B(e,t,s,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:d}=e.$$;a&&a.m(t,s),r||S((()=>{const t=c.map(n).filter(o);l?l.push(...t):i(t),e.$$.on_mount=[]})),d.forEach(S)}function N(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,n,o,r,a,c,l,u=[-1]){const h=y;w(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(f.root);let m=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),m&&function(e,t){-1===e.$$.dirty[0]&&(z.push(e),I(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],f.update(),m=!0,i(f.before_update),f.fragment=!!r&&r(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&O(t.$$.fragment),B(t,n.target,n.anchor,n.customElement),A()}w(h)}class J{$destroy(){N(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const K=[];function U(e,t){return{subscribe:X(e,t).subscribe}}function X(t,n=e){let s;const i=new Set;function o(e){if(r(t,e)&&(t=e,s)){const e=!K.length;for(const e of i)e[1](),K.push(e,t);if(e){for(let e=0;e<K.length;e+=2)K[e][0](K[e+1]);K.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(r,a=e){const c=[r,a];return i.add(c),1===i.size&&(s=n(o)||e),r(t),()=>{i.delete(c),0===i.size&&(s(),s=null)}}}}function Q(t,n,s){const r=!Array.isArray(t),a=r?[t]:t,c=n.length<2;return U(s,(t=>{let s=!1;const l=[];let d=0,u=e;const h=()=>{if(d)return;u();const s=n(r?l[0]:l,t);c?t(s):u=o(s)?s:e},f=a.map(((t,n)=>function(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(t,(e=>{l[n]=e,d&=~(1<<n),s&&h()}),(()=>{d|=1<<n}))));return s=!0,h(),function(){i(f),u()}}))}function Z(e){let n,s,i;const o=[e[2]];var r=e[0];function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return r&&(n=new r(a()),n.$on("routeEvent",e[7])),{c(){n&&V(n.$$.fragment),s=m()},m(e,t){n&&B(n,e,t),l(e,s,t),i=!0},p(e,t){const i=4&t?W(o,[R(e[2])]):{};if(r!==(r=e[0])){if(n){H();const e=n;F(e.$$.fragment,1,0,(()=>{N(e,1)})),D()}r?(n=new r(a()),n.$on("routeEvent",e[7]),V(n.$$.fragment),O(n.$$.fragment,1),B(n,s.parentNode,s)):n=null}else r&&n.$set(i)},i(e){i||(n&&O(n.$$.fragment,e),i=!0)},o(e){n&&F(n.$$.fragment,e),i=!1},d(e){e&&d(s),n&&N(n,e)}}}function ee(e){let n,s,i;const o=[{params:e[1]},e[2]];var r=e[0];function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return r&&(n=new r(a()),n.$on("routeEvent",e[6])),{c(){n&&V(n.$$.fragment),s=m()},m(e,t){n&&B(n,e,t),l(e,s,t),i=!0},p(e,t){const i=6&t?W(o,[2&t&&{params:e[1]},4&t&&R(e[2])]):{};if(r!==(r=e[0])){if(n){H();const e=n;F(e.$$.fragment,1,0,(()=>{N(e,1)})),D()}r?(n=new r(a()),n.$on("routeEvent",e[6]),V(n.$$.fragment),O(n.$$.fragment,1),B(n,s.parentNode,s)):n=null}else r&&n.$set(i)},i(e){i||(n&&O(n.$$.fragment,e),i=!0)},o(e){n&&F(n.$$.fragment,e),i=!1},d(e){e&&d(s),n&&N(n,e)}}}function te(e){let t,n,s,i;const o=[ee,Z],r=[];function a(e,t){return e[1]?0:1}return t=a(e),n=r[t]=o[t](e),{c(){n.c(),s=m()},m(e,n){r[t].m(e,n),l(e,s,n),i=!0},p(e,[i]){let c=t;t=a(e),t===c?r[t].p(e,i):(H(),F(r[c],1,1,(()=>{r[c]=null})),D(),n=r[t],n?n.p(e,i):(n=r[t]=o[t](e),n.c()),O(n,1),n.m(s.parentNode,s))},i(e){i||(O(n),i=!0)},o(e){F(n),i=!1},d(e){r[t].d(e),e&&d(s)}}}function ne(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let s="";return n>-1&&(s=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:s}}const se=U(null,(function(e){e(ne());const t=()=>{e(ne())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}));Q(se,(e=>e.location)),Q(se,(e=>e.querystring));const ie=X(void 0);function oe(e,t){if(t=ae(t),!e||!e.tagName||"a"!=e.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');return re(e,t),{update(t){t=ae(t),re(e,t)}}}function re(e,t){let n=t.href||e.getAttribute("href");if(n&&"/"==n.charAt(0))n="#"+n;else if(!n||n.length<2||"#/"!=n.slice(0,2))throw Error('Invalid value for "href" attribute: '+n);e.setAttribute("href",n),e.addEventListener("click",(e=>{e.preventDefault(),t.disabled||function(e){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=e}(e.currentTarget.getAttribute("href"))}))}function ae(e){return e&&"string"==typeof e?{href:e}:e||{}}function ce(e,t,n){let{routes:s={}}=t,{prefix:i=""}=t,{restoreScrollState:o=!1}=t;class r{constructor(e,t){if(!t||"function"!=typeof t&&("object"!=typeof t||!0!==t._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:s}=function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,i,o,r=[],a="",c=e.split("/");for(c[0]||c.shift();i=c.shift();)"*"===(n=i[0])?(r.push("wild"),a+="/(.*)"):":"===n?(s=i.indexOf("?",1),o=i.indexOf(".",1),r.push(i.substring(1,~s?s:~o?o:i.length)),a+=~s&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(a+=(~s?"?":"")+"\\"+i.substring(o))):a+="/"+i;return{keys:r,pattern:new RegExp("^"+a+(t?"(?=$|/)":"/?$"),"i")}}(e);this.path=e,"object"==typeof t&&!0===t._sveltesparouter?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=s}match(e){if(i)if("string"==typeof i){if(!e.startsWith(i))return null;e=e.substr(i.length)||"/"}else if(i instanceof RegExp){const t=e.match(i);if(!t||!t[0])return null;e=e.substr(t[0].length)||"/"}const t=this._pattern.exec(e);if(null===t)return null;if(!1===this._keys)return t;const n={};let s=0;for(;s<this._keys.length;){try{n[this._keys[s]]=decodeURIComponent(t[s+1]||"")||null}catch(e){n[this._keys[s]]=null}s++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}const a=[];s instanceof Map?s.forEach(((e,t)=>{a.push(new r(t,e))})):Object.keys(s).forEach((e=>{a.push(new r(e,s[e]))}));let c=null,l=null,d={};const u=$();async function h(e,t){await(I(),C),u(e,t)}let f=null,m=null;var v;o&&(m=e=>{f=e.state&&e.state.__svelte_spa_router_scrollY?e.state:null},window.addEventListener("popstate",m),v=()=>{f?window.scrollTo(f.__svelte_spa_router_scrollX,f.__svelte_spa_router_scrollY):window.scrollTo(0,0)},k().$$.after_update.push(v));let p=null,g=null;const b=se.subscribe((async e=>{p=e;let t=0;for(;t<a.length;){const s=a[t].match(e.location);if(!s){t++;continue}const i={route:a[t].path,location:e.location,querystring:e.querystring,userData:a[t].userData,params:s&&"object"==typeof s&&Object.keys(s).length?s:null};if(!await a[t].checkConditions(i))return n(0,c=null),g=null,void h("conditionsFailed",i);h("routeLoading",Object.assign({},i));const o=a[t].component;if(g!=o){o.loading?(n(0,c=o.loading),g=o,n(1,l=o.loadingParams),n(2,d={}),h("routeLoaded",Object.assign({},i,{component:c,name:c.name,params:l}))):(n(0,c=null),g=null);const t=await o();if(e!=p)return;n(0,c=t&&t.default||t),g=o}return s&&"object"==typeof s&&Object.keys(s).length?n(1,l=s):n(1,l=null),n(2,d=a[t].props),void h("routeLoaded",Object.assign({},i,{component:c,name:c.name,params:l})).then((()=>{ie.set(l)}))}n(0,c=null),g=null,ie.set(void 0)}));return function(e){k().$$.on_destroy.push(e)}((()=>{b(),m&&window.removeEventListener("popstate",m)})),e.$$set=e=>{"routes"in e&&n(3,s=e.routes),"prefix"in e&&n(4,i=e.prefix),"restoreScrollState"in e&&n(5,o=e.restoreScrollState)},e.$$.update=()=>{32&e.$$.dirty&&(history.scrollRestoration=o?"manual":"auto")},[c,l,d,s,i,o,function(t){x.call(this,e,t)},function(t){x.call(this,e,t)}]}class le extends J{constructor(e){super(),Y(this,e,ce,te,r,{routes:3,prefix:4,restoreScrollState:5})}}function de(t){let n,s,o,r,m,v,g,b,y,w,k,$,x,z,_,T,j,C,E,I,S,M,q,A,L,G,P,H,D,O,F;return{c(){n=u("section"),s=u("div"),s.innerHTML="<h1>Welcome to my Website!</h1>",o=f(),r=u("div"),r.innerHTML='<figure class="image is-128x128"><img class="is-rounded" src="./home_pictures/melodica.jpg" alt="Here&#39;s me being silly and playing my Melodica" title="That instrument I&#39;m playing is called a Melodica! It&#39;s so fun to play."/></figure>',m=f(),v=u("div"),g=u("div"),g.innerHTML='<div class="block has-text-centered is-size-4"><h1>About Me!</h1></div> \n            <div class="block has-text-justified is-size-6">Hi! My name is Elie Diaz. I&#39;m currently a PhD student at the\n                University of Utah, working on Computer Graphics.</div> \n            <div class="block has-text-justified is-size-6">My first two degrees (BS and MS) were from Georgia Tech in\n                Computer Science, so I have been learning more about the field\n                for a few years now. As far as my projects are concerned, I have\n                done a decent amount of work in physics simulation.</div> \n            <div class="block has-text-justified is-size-6">Go ahead and explore my site to learn more about me!</div>',b=f(),y=u("div"),w=u("div"),w.innerHTML="<h1>About my Website!</h1>",k=f(),$=u("div"),$.textContent="I built this site using Svelte and Bulma as frameworks. With\r\n                these, I was able to split the site into several tabs.",x=f(),z=u("div"),_=h("You'll find that "),T=u("a"),T.textContent="project tab",j=h(" useful if\r\n                you're interested in finding a general overlook of the Computer Graphics\r\n                projects I've worked on and am working on."),C=f(),E=u("div"),I=h("Another large part of my life revolves around music, so you can\r\n                go to "),S=u("a"),S.textContent="that tab",M=h(" to check out the various music-related\r\n                projects I'm able to share."),q=f(),A=u("div"),L=h("Finally, that last "),G=u("a"),G.textContent="CV tab",P=h(" should take you to a link to download\r\n                a pdf of my most recent version of my CV."),H=f(),D=u("section"),D.innerHTML='<div class="block has-text-centered is-size-5">Contact Me!</div> \n    <div class="block has-text-centered"><p>Email me at\n            <a href="mailto:eliericardo@hotmail.com">eliericardo@hotmail.com</a> \n            <br/>\n            Find me on\n            <a href="https://www.linkedin.com/in/eliediaz">LinkedIn</a> \n            <br/>\n            Check out my\n            <a href="https://github.com/eliendiaz">GitHub</a> \n            <br/>\n            And my\n            <a href="https://www.instagram.com/charliethebuzz/">Travel Instagram!</a></p></div>',p(s,"class","block has-text-centered is-size-2"),p(r,"class","block is-flex is-horizontal-center svelte-itblr4"),p(g,"class","column"),p(w,"class","block has-text-centered is-size-4"),p($,"class","block has-text-justified is-size-6"),p(T,"href","#/Projects"),p(z,"class","block has-text-justified is-size-6"),p(S,"href","#/Music"),p(E,"class","block has-text-justified is-size-6"),p(G,"href","#/CV"),p(A,"class","block has-text-justified is-size-6"),p(y,"class","column"),p(v,"class","columns"),p(n,"class","section"),p(D,"class","section")},m(e,t){l(e,n,t),c(n,s),c(n,o),c(n,r),c(n,m),c(n,v),c(v,g),c(v,b),c(v,y),c(y,w),c(y,k),c(y,$),c(y,x),c(y,z),c(z,_),c(z,T),c(z,j),c(y,C),c(y,E),c(E,I),c(E,S),c(E,M),c(y,q),c(y,A),c(A,L),c(A,G),c(A,P),l(e,H,t),l(e,D,t),O||(F=[a(oe.call(null,T)),a(oe.call(null,S)),a(oe.call(null,G))],O=!0)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(H),e&&d(D),O=!1,i(F)}}}class ue extends J{constructor(e){super(),Y(this,e,null,de,r,{})}}function he(t){let n,s,i;return{c(){n=u("section"),n.innerHTML='<div class="block has-text-centered is-size-2"><h1>Welcome to my Projects Page!</h1></div> \n    <div class="block is-flex has-text-centered is-very-horizontal-center svelte-rfp42"><figure class="image is-very-horizontal-center svelte-rfp42"><img src="./project_pictures/ternary.gif" alt="GIF of my ternary star system" title="This is my attempt at coding a stable ternary star system. The three spheres are orbiting each other while the system has built-in momentum in one direction."/></figure></div> \n    <div class="block has-text-justified is-size-6">Throughout my studies, I have ended up working on several projects\n        specializing in Computer Graphics and in Physics Simulations. Here are a\n        few I can share.</div> \n    <div class="block has-text-justified is-size-6">You can check out more projects from <a href="https://graphics.cs.utah.edu/research/projects/#u">my current lab&#39;s page.</a></div>',s=f(),i=u("section"),i.innerHTML='<div class="block has-text-centered is-size-4"><h1>Some of my Projects!</h1></div> \n\n    <div class="block"><div class="card is-size-6 svelte-rfp42"><div class="card-header is-very-horizontal-center svelte-rfp42"><figure class="image is-very-horizontal-center svelte-rfp42"><img src="./project_pictures/snow.gif" alt="GIF of my snow simulation" title="This was research done under the advising of Dr. Greg Turk at Georgia Tech"/></figure></div> \n            <div class="card-content svelte-rfp42"><div class="block"><div class="is-size-4">Snow Melting Simulation</div> \n                    <div class="card-content has-text-left svelte-rfp42">This is a simulation using the code available <a href="https://github.com/yuanming-hu/taichi_mpm">here</a>\n                        that uses the material point method to simulate the physics\n                        of snow. My contribution to this code included the effects\n                        of temperature on the simulation. You can see how the warmer\n                        air temperature melts the block of snow. Although the gif\n                        appears to be in two dimensions, there are actually 3 dimensions\n                        being simulated here. The z-dimension is much thinner than\n                        the other two, giving that two-dimensional effect.</div></div></div></div></div> \n\n    <div class="block"><div class="card is-size-6 svelte-rfp42"><div class="card-header is-very-horizontal-center svelte-rfp42"><figure class="image is-very-horizontal-center svelte-rfp42"><img src="./project_pictures/swarm.gif" alt="GIF of flocking boids" title="This flocking project was a part of Georgia Tech&#39;s Simulation of Biology course, taught by Dr. Greg Turk."/></figure></div> \n            <div class="card-content svelte-rfp42"><div class="block"><div class="is-size-4">Flocking</div> \n                    <div class="card-content has-text-left svelte-rfp42">This project was created from scratch using Processing\n                        Java. This shows several boids showing flocking\n                        behavior, including cohesion, alignment, and separation,\n                        as well as random individual changes in each boid&#39;s\n                        movements. This specific animation was made while they\n                        were actively avoiding a point on the screen while\n                        flocking.</div></div></div></div></div> \n\n    <div class="block"><div class="card is-size-6 svelte-rfp42"><div class="card-header is-very-horizontal-center svelte-rfp42"><figure class="image is-very-horizontal-center svelte-rfp42"><img src="./project_pictures/jellies.gif" alt="GIF of my locomotion project" title="This project was a part of Georgia Tech&#39;s Simulation of Biology course, taught by Dr. Greg Turk."/></figure></div> \n            <div class="card-content svelte-rfp42"><div class="block"><div class="is-size-4">Self-Propelling Creatures</div> \n                    <div class="card-content has-text-left svelte-rfp42">This was a project in creating creatures that could\n                        self-propel using systems of springs and masses. As with\n                        the flocking project, this was made from scratch using\n                        Processing Java. The springs have a natural frequency\n                        that they are actively oscillating at, which causes the\n                        rest of the springs to adjust and propel the fins of\n                        these creatures. Different creatures have different\n                        oscillation frequencies, leading to differing speeds. As\n                        different parts of the fins oscillate, some\n                        course-correction could be done with the creatures&#39;\n                        paths.</div></div></div></div></div>',p(n,"class","section"),p(i,"class","section")},m(e,t){l(e,n,t),l(e,s,t),l(e,i,t)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(s),e&&d(i)}}}class fe extends J{constructor(e){super(),Y(this,e,null,he,r,{})}}function me(t){let n,s,i,o,r;return{c(){n=u("section"),n.innerHTML='<div class="block has-text-centered is-size-2"><h1>Welcome to my Music Page!</h1></div> \n    <div class="block is-flex is-very-horizontal-center svelte-dv68gw"><figure class="image"><img src="./music_pictures/Quartet.jpg" alt="One of the times I&#39;ve performed for an audience." title="This was a fun performance with one of my barbershop quartets!"/></figure></div> \n    <div class="block has-text-justified is-size-6">On top of all of my academic work, I dedicate a lot of my time towards\n        writing and performing music. My background here mostly stems down to\n        voice and piano.</div> \n    <div class="block has-text-justified is-size-6">I&#39;ve been performing for over half of my life and have many years of\n        experience directing and participating in ensembles of all sizes,\n        ranging from barbershop quartets to full choirs.</div> \n    <div class="block has-text-justified is-size-6">Keep scrolling to find some multitracks I can share from my soundcloud,\n        as well as a list of vocal arrangements I&#39;ve written!</div>',s=f(),i=u("section"),i.innerHTML='<div class="block has-text-centered is-size-4"><h1>Some of my Tracks!</h1></div> \n    <div class="block has-text-centered is-size-6">These are only some of my tracks. If you <a href="https://soundcloud.com/elie-diaz-965006234">follow my SoundCloud</a>, you&#39;ll be able to see some more!</div> \n\n    <div class="block"><div class="card is-size-6 svelte-dv68gw"><div class="card-content svelte-dv68gw"><div class="media-content"><a class="is-size-4" href="https://soundcloud.com/elie-diaz-965006234/speechless" title="Speechless" target="_blank">Speechless</a> \n                    <div class="is-size-6">Arr. by Elie Diaz</div></div> \n\n                <div class="card-content has-text-left svelte-dv68gw">This is a multitrack recording of some of my friends and I\n                    singing the parts to an arrangement of &quot;Speechless&quot; from the\n                    newest Aladdin Movie as arranged by me! This was originally\n                    meant to be performed with the Georgia Tech Chamber Choir\n                    but delays due to the 2020 pandemic led me to call some of\n                    my friends to record it across the country from Florida,\n                    Idaho, and Georgia.</div></div></div></div> \n\n    <div class="block"><div class="card is-size-6 svelte-dv68gw"><div class="card-content svelte-dv68gw"><div class="media-content"><a class="is-size-4" href="https://soundcloud.com/elie-diaz-965006234/shenandoah" title="Shenandoah" target="_blank">Shenandoah</a> \n                    <div class="is-size-6">Arr. by Derric Johnson</div></div> \n\n                <div class="card-content has-text-left svelte-dv68gw">This is a multitrack recording of me singing all of the parts\n                    to an arrangement of &quot;Shenandoah&quot; as arranged by Derric\n                    Johnson. This was originally written for the Voices of\n                    Liberty, an acapella group that sings at Walt Disney World&#39;s\n                    EPCOT Center.</div></div></div></div> \n\n    <div class="block"><div class="card is-size-6 svelte-dv68gw"><div class="card-content svelte-dv68gw"><div class="media-content"><a class="is-size-4" href="https://soundcloud.com/elie-diaz-965006234/that-which-remains-unmastered" title="That Which Remains" target="_blank">That Which Remains</a> \n                    <div class="is-size-6">Setting by Andrea Ramsey</div></div> \n\n                <div class="card-content has-text-left svelte-dv68gw">This is a multitrack recording of me singing most of the\n                    parts to Composer Andrea Ramsey&#39;s setting of &quot;That Which\n                    Remains&quot;, which is a text written by Helen Keller. Having\n                    performed in various groups through the years, I wanted to\n                    make a track of this one. The bass line is sung by my\n                    extremely talented bass friend, Will Scott.</div></div></div></div>',o=f(),r=u("section"),r.innerHTML='<div class="block has-text-centered is-size-4"><h1>My Arrangements!</h1></div> \n    <div class="block has-text-justified is-size-6">As you may have noticed from my SoundCloud links, I do sometimes write\n        music! Most of my arrangements have been for mixed groups, but I&#39;m happy\n        to share what I&#39;ve written if you <a href="mailto:eliericardo@hotmail.com">send me an email</a>! Arrangements I&#39;ve written include:</div> \n\n    <ul><li class="svelte-dv68gw">&quot;The Ballad of George P. Burdell&quot; as recorded for the <a href="https://www.gtalumni.org/s/1481/alumni/17/magazine-pages.aspx?sid=1481&amp;gid=21&amp;calcid=15467&amp;calpgid=7845&amp;pgid=19555&amp;crid=0">Georgia Tech Alumni Magazine</a></li> \n        <li class="svelte-dv68gw">&quot;Christmas is Starting Now!&quot; from <i>Phineas and Ferb</i> (Co-Arranged\n            with my friend Sam)</li> \n        <li class="svelte-dv68gw">&quot;The Dream Medley&quot; as performed by <a href="https://youtu.be/Zr4CF8HGhL8">the GT Chamber Choir</a></li> \n        <li class="svelte-dv68gw">&quot;I&#39;m Gonna Live &#39;Till I Die&quot;</li> \n        <li class="svelte-dv68gw">&quot;Key Change Baby!&quot; as sung in my SoundCloud</li> \n        <li class="svelte-dv68gw">&quot;The Phineas and Ferb Medley&quot; as performed by <a href="https://youtu.be/EYl7bHKHzHI">the GT Chamber Choir</a></li> \n        <li class="svelte-dv68gw">&quot;Proud Corazon&quot; from Disney-Pixar&#39;s <i>Coco</i>, as performed by\n            <a href="https://youtu.be/tKea4qm8r6o">the GT Chamber Choir</a></li> \n        <li class="svelte-dv68gw">&quot;Speechless&quot; from Disney&#39;s <i>Aladdin</i>, as performed by\n            <a href="https://soundcloud.com/elie-diaz-965006234/speechless">several of my friends</a></li> \n        <li class="svelte-dv68gw">&quot;You Will Be Found&quot; from <i>Dear Evan Hansen</i> as performed by\n            <a href="https://youtu.be/PFQp2yG1hzI">the GT Chamber Choir</a></li></ul>',p(n,"class","section"),p(i,"class","section"),p(r,"class","section")},m(e,t){l(e,n,t),l(e,s,t),l(e,i,t),l(e,o,t),l(e,r,t)},p:e,i:e,o:e,d(e){e&&d(n),e&&d(s),e&&d(i),e&&d(o),e&&d(r)}}}class ve extends J{constructor(e){super(),Y(this,e,null,me,r,{})}}function pe(t){let n;return{c(){n=u("section"),n.innerHTML='<div class="block has-text-centered is-size-2"><h1>Welcome to my CV&#39;s Page!</h1></div> \n    <div class="block is-flex has-text-centered is-very-horizontal-center svelte-zfgdid"><figure class="image is-very-horizontal-center is-128x128 svelte-zfgdid"><img src="./Profile_Pic.jpg" alt="My face with glasses on" title="Thanks for checking out my website!"/></figure></div> \n    <div class="block has-text-justified is-size-6">Here&#39;s a place where you can download the most updated version of my CV\n        in pdf format, in case you want a more complete list of my experience.</div> \n    <div class="block has-text-justified is-size-6"><a href="./Diaz_Elie_CV_2021.pdf" target="_blank">This CV</a>\n        is updated as of January 2021.</div>',p(n,"class","section")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&d(n)}}}class ge extends J{constructor(e){super(),Y(this,e,null,pe,r,{})}}function be(t){let n,s,o,r,h,m,y,w,k,$,x,z,_,T,j,C,E,I,S,M;return{c(){n=u("nav"),s=u("div"),o=u("div"),r=u("a"),r.textContent="Elie Diaz",h=f(),m=u("a"),m.innerHTML="<span></span> \n      <span></span> \n      <span></span>",y=f(),w=u("div"),k=u("div"),$=f(),x=u("div"),z=u("a"),z.textContent="Home",_=f(),T=u("a"),T.textContent="Projects",j=f(),C=u("a"),C.textContent="Music",E=f(),I=u("a"),I.textContent="CV",p(r,"href","/"),p(r,"class","navbar-item svelte-slcbmb"),g(r,"color","#a8d1ce"),p(o,"class","navbar-item svelte-slcbmb"),p(m,"class","navbar-burger burger svelte-slcbmb"),p(m,"id","burger"),b(m,"is-active",t[0]),p(s,"class","navbar-brand"),p(k,"class","navbar-start"),p(z,"href","/"),p(z,"class","navbar-item svelte-slcbmb"),g(z,"color","#a8d1ce"),p(T,"href","#/Projects"),p(T,"class","navbar-item svelte-slcbmb"),g(T,"color","#a8d1ce"),p(C,"href","#/Music"),p(C,"class","navbar-item svelte-slcbmb"),g(C,"color","#a8d1ce"),p(I,"href","#/CV"),p(I,"class","navbar-item svelte-slcbmb"),g(I,"color","#a8d1ce"),p(x,"class","navbar-end"),p(w,"class","navbar-menu svelte-slcbmb"),p(w,"id","menu"),b(w,"is-active",t[0]),b(w,"special-back",t[0]),p(n,"class","navbar is-size-5 svelte-slcbmb")},m(e,i){l(e,n,i),c(n,s),c(s,o),c(o,r),c(s,h),c(s,m),c(n,y),c(n,w),c(w,k),c(w,$),c(w,x),c(x,z),c(x,_),c(x,T),c(x,j),c(x,C),c(x,E),c(x,I),S||(M=[v(r,"click",t[2]),a(oe.call(null,r)),v(m,"click",t[1]),v(z,"click",t[2]),a(oe.call(null,z)),v(T,"click",t[2]),a(oe.call(null,T)),v(C,"click",t[2]),a(oe.call(null,C)),v(I,"click",t[2]),a(oe.call(null,I))],S=!0)},p(e,[t]){1&t&&b(m,"is-active",e[0]),1&t&&b(w,"is-active",e[0]),1&t&&b(w,"special-back",e[0])},i:e,o:e,d(e){e&&d(n),S=!1,i(M)}}}function ye(e,t,n){let s;return[s,()=>{n(0,s=!s)},()=>{n(0,s=!1)}]}class we extends J{constructor(e){super(),Y(this,e,ye,be,r,{})}}function ke(t){let n,s,i,o,r,a;return i=new we({}),r=new le({props:{routes:t[0]}}),{c(){n=u("main"),s=u("div"),V(i.$$.fragment),o=f(),V(r.$$.fragment)},m(e,t){l(e,n,t),c(n,s),B(i,s,null),c(s,o),B(r,s,null),a=!0},p:e,i(e){a||(O(i.$$.fragment,e),O(r.$$.fragment,e),a=!0)},o(e){F(i.$$.fragment,e),F(r.$$.fragment,e),a=!1},d(e){e&&d(n),N(i),N(r)}}}function $e(e){return[{"/Home":ue,"/Music":ve,"/CV":ge,"/Projects":fe,"/":ue}]}return new class extends J{constructor(e){super(),Y(this,e,$e,ke,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
