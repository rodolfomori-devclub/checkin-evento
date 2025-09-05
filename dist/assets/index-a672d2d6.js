import{r as e,a as t,R as n}from"./vendor-79b9f383.js";import{m as r,A as i}from"./animations-f7009316.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var s={exports:{}},a={},o=e,c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)u.call(t,r)&&!d.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:c,type:e,key:s,ref:a,props:i,_owner:h.current}}a.Fragment=l,a.jsx=p,a.jsxs=p,s.exports=a;var m=s.exports,f={},g=t;f.createRoot=g.createRoot,f.hydrateRoot=g.hydrateRoot;const y={},v=function(e,t,n){if(!t||0===t.length)return e();const r=document.getElementsByTagName("link");return Promise.all(t.map(e=>{if((e=function(e){return"/"+e}(e))in y)return;y[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(!!n)for(let n=r.length-1;n>=0;n--){const i=r[n];if(i.href===e&&(!t||"stylesheet"===i.rel))return}else if(document.querySelector(`link[href="${e}"]${i}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":"modulepreload",t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise((t,n)=>{s.addEventListener("load",t),s.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${e}`)))}):void 0})).then(()=>e()).catch(e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e})};var w="popstate";function b(e={}){return function(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o="POP",c=null,l=u();null==l&&(l=0,a.replaceState({...a.state,idx:l},""));function u(){return(a.state||{idx:null}).idx}function h(){o="POP";let e=u(),t=null==e?null:e-l;l=e,c&&c({action:o,location:f.location,delta:t})}function d(e,t){o="PUSH";let r=T(f.location,e,t);n&&n(r,e),l=u()+1;let h=E(r,l),d=f.createHref(r);try{a.pushState(h,"",d)}catch(p){if(p instanceof DOMException&&"DataCloneError"===p.name)throw p;i.location.assign(d)}s&&c&&c({action:o,location:f.location,delta:1})}function p(e,t){o="REPLACE";let r=T(f.location,e,t);n&&n(r,e),l=u();let i=E(r,l),h=f.createHref(r);a.replaceState(i,"",h),s&&c&&c({action:o,location:f.location,delta:0})}function m(e){return function(e,t=!1){let n="http://localhost";"undefined"!=typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href);x(n,"No window.location.(origin|href) available to create URL");let r="string"==typeof e?e:C(e);r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r);return new URL(r,n)}(e)}let f={get action(){return o},get location(){return e(i,a)},listen(e){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(w,h),c=e,()=>{i.removeEventListener(w,h),c=null}},createHref:e=>t(i,e),createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:p,go:e=>a.go(e)};return f}(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return T("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:C(t)},null,e)}function x(e,t){if(!1===e||null==e)throw new Error(t)}function _(e,t){if(!e)try{throw new Error(t)}catch(n){}}function E(e,t){return{usr:e.state,key:e.key,idx:t}}function T(e,t,n=null,r){return{pathname:"string"==typeof e?e:e.pathname,search:"",hash:"",..."string"==typeof t?I(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function C({pathname:e="/",search:t="",hash:n=""}){return t&&"?"!==t&&(e+="?"===t.charAt(0)?t:"?"+t),n&&"#"!==n&&(e+="#"===n.charAt(0)?n:"#"+n),e}function I(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function S(e,t,n="/"){return function(e,t,n,r){let i="string"==typeof t?I(t):t,s=B(i.pathname||"/",n);if(null==s)return null;let a=N(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let c=0;null==o&&c<a.length;++c){let e=F(s);o=V(a[c],e,r)}return o}(e,t,n,!1)}function N(e,t=[],n=[],r="",i=!1){let s=(e,s,a=i,o)=>{let c={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:s,route:e};if(c.relativePath.startsWith("/")){if(!c.relativePath.startsWith(r)&&a)return;x(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=H([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(x(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),N(e.children,t,u,l,a)),(null!=e.path||e.index)&&t.push({path:l,score:M(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{var n;if(""!==e.path&&(null==(n=e.path)?void 0:n.includes("?")))for(let r of k(e.path))s(e,t,!0,r);else s(e,t)}),t}function k(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let a=k(r.join("/")),o=[];return o.push(...a.map(e=>""===e?s:[s,e].join("/"))),i&&o.push(...a),o.map(t=>e.startsWith("/")&&""===t?"/":t)}var A=/^:[\w-]+$/,R=3,D=2,O=1,j=10,P=-2,L=e=>"*"===e;function M(e,t){let n=e.split("/"),r=n.length;return n.some(L)&&(r+=P),t&&(r+=D),n.filter(e=>!L(e)).reduce((e,t)=>e+(A.test(t)?R:""===t?O:j),r)}function V(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let e=r[o],c=o===r.length-1,l="/"===s?t:t.slice(s.length)||"/",u=U({path:e.relativePath,caseSensitive:e.caseSensitive,end:c},l),h=e.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=U({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:H([s,u.pathname]),pathnameBase:G(H([s,u.pathnameBase])),route:h}),"/"!==u.pathnameBase&&(s=H([s,u.pathnameBase]))}return a}function U(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t=!1,n=!0){_("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if("*"===t){let e=o[r]||"";a=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}const i=o[r];return e[t]=n&&!i?void 0:(i||"").replace(/%2F/g,"/"),e},{}),pathname:s,pathnameBase:a,pattern:e}}function F(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return _(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function B(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function q(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z(e){let t=function(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function $(e,t,n,r=!1){let i;"string"==typeof e?i=I(e):(i={...e},x(!i.pathname||!i.pathname.includes("?"),q("?","pathname","search",i)),x(!i.pathname||!i.pathname.includes("#"),q("#","pathname","hash",i)),x(!i.search||!i.search.includes("#"),q("#","search","hash",i)));let s,a=""===e||""===i.pathname,o=a?"/":i.pathname;if(null==o)s=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let c=function(e,t="/"){let{pathname:n,search:r="",hash:i=""}="string"==typeof e?I(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:K(r),hash:W(i)}}(i,s),l=o&&"/"!==o&&o.endsWith("/"),u=(a||"."===o)&&n.endsWith("/");return c.pathname.endsWith("/")||!l&&!u||(c.pathname+="/"),c}var H=e=>e.join("/").replace(/\/\/+/g,"/"),G=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",W=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var Q=["POST","PUT","PATCH","DELETE"];new Set(Q);var J=["GET",...Q];new Set(J);var Y=e.createContext(null);Y.displayName="DataRouter";var X=e.createContext(null);X.displayName="DataRouterState",e.createContext(!1);var Z=e.createContext({isTransitioning:!1});Z.displayName="ViewTransition",e.createContext(new Map).displayName="Fetchers",e.createContext(null).displayName="Await";var ee=e.createContext(null);ee.displayName="Navigation";var te=e.createContext(null);te.displayName="Location";var ne=e.createContext({outlet:null,matches:[],isDataRoute:!1});ne.displayName="Route";var re=e.createContext(null);function ie(){return null!=e.useContext(te)}function se(){return x(ie(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(te).location}re.displayName="RouteError";var ae="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function oe(t){e.useContext(ee).static||e.useLayoutEffect(t)}function ce(){let{isDataRoute:t}=e.useContext(ne);return t?function(){let{router:t}=function(t){let n=e.useContext(Y);return x(n,ge(t)),n}("useNavigate"),n=ye("useNavigate"),r=e.useRef(!1);return oe(()=>{r.current=!0}),e.useCallback(async(e,i={})=>{_(r.current,ae),r.current&&("number"==typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))},[t,n])}():function(){x(ie(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(Y),{basename:n,navigator:r}=e.useContext(ee),{matches:i}=e.useContext(ne),{pathname:s}=se(),a=JSON.stringify(z(i)),o=e.useRef(!1);return oe(()=>{o.current=!0}),e.useCallback((e,i={})=>{if(_(o.current,ae),!o.current)return;if("number"==typeof e)return void r.go(e);let c=$(e,JSON.parse(a),s,"path"===i.relative);null==t&&"/"!==n&&(c.pathname="/"===c.pathname?n:H([n,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[n,r,a,s,t])}()}var le=e.createContext(null);function ue(t,{relative:n}={}){let{matches:r}=e.useContext(ne),{pathname:i}=se(),s=JSON.stringify(z(r));return e.useMemo(()=>$(t,JSON.parse(s),i,"path"===n),[t,s,i,n])}function he(t,n,r,i,s){var a;x(ie(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=e.useContext(ee),{matches:c}=e.useContext(ne),l=c[c.length-1],u=l?l.params:{},h=l?l.pathname:"/",d=l?l.pathnameBase:"/",p=l&&l.route;{let e=p&&p.path||"";we(h,!p||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let m,f=se();if(n){let e="string"==typeof n?I(n):n;x("/"===d||(null==(a=e.pathname)?void 0:a.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${e.pathname}" was given in the \`location\` prop.`),m=e}else m=f;let g=m.pathname||"/",y=g;if("/"!==d){let e=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=S(t,{pathname:y});_(p||null!=v,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),_(null==v||void 0!==v[v.length-1].route.element||void 0!==v[v.length-1].route.Component||void 0!==v[v.length-1].route.lazy,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=function(t,n=[],r=null,i=null){if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let s=t,a=null==r?void 0:r.errors;if(null!=a){let e=s.findIndex(e=>e.route.id&&void 0!==(null==a?void 0:a[e.route.id]));x(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,e+1))}let o=!1,c=-1;if(r)for(let e=0;e<s.length;e++){let t=s[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){o=!0,s=c>=0?s.slice(0,c+1):[s[0]];break}}}return s.reduceRight((t,l,u)=>{let h,d=!1,p=null,m=null;r&&(h=a&&l.route.id?a[l.route.id]:void 0,p=l.route.errorElement||pe,o&&(c<0&&0===u?(we("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,m=null):c===u&&(d=!0,m=l.route.hydrateFallbackElement||null)));let f=n.concat(s.slice(0,u+1)),g=()=>{let n;return n=h?p:d?m:l.route.Component?e.createElement(l.route.Component,null):l.route.element?l.route.element:t,e.createElement(fe,{match:l,routeContext:{outlet:t,matches:f,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===u)?e.createElement(me,{location:r.location,revalidation:r.revalidation,component:p,error:h,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0},unstable_onError:i}):g()},null)}(v&&v.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:H([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:H([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),c,r,i,s);return n&&w?e.createElement(te.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},w):w}function de(){let t=function(){var t;let n=e.useContext(re),r=function(t){let n=e.useContext(X);return x(n,ge(t)),n}("useRouteError"),i=ye("useRouteError");if(void 0!==n)return n;return null==(t=r.errors)?void 0:t[i]}(),n=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},o=null;return o=e.createElement(e.Fragment,null,e.createElement("p",null,"💿 Hey developer 👋"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:s},r):null,o)}var pe=e.createElement(de,null),me=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError&&this.props.unstable_onError(e,t)}render(){return void 0!==this.state.error?e.createElement(ne.Provider,{value:this.props.routeContext},e.createElement(re.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fe({routeContext:t,match:n,children:r}){let i=e.useContext(Y);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),e.createElement(ne.Provider,{value:t},r)}function ge(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ye(t){let n=function(t){let n=e.useContext(ne);return x(n,ge(t)),n}(t),r=n.matches[n.matches.length-1];return x(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}var ve={};function we(e,t,n){t||ve[e]||(ve[e]=!0,_(!1,n))}function be({to:t,replace:n,state:r,relative:i}){x(ie(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=e.useContext(ee);_(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=e.useContext(ne),{pathname:o}=se(),c=ce(),l=$(t,z(a),o,"path"===i),u=JSON.stringify(l);return e.useEffect(()=>{c(JSON.parse(u),{replace:n,state:r,relative:i})},[c,u,i,n,r]),null}function xe(t){return function(t){let n=e.useContext(ne).outlet;return n?e.createElement(le.Provider,{value:t},n):n}(t.context)}function _e(e){x(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ee({basename:t="/",children:n=null,location:r,navigationType:i="POP",navigator:s,static:a=!1}){x(!ie(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),c=e.useMemo(()=>({basename:o,navigator:s,static:a,future:{}}),[o,s,a]);"string"==typeof r&&(r=I(r));let{pathname:l="/",search:u="",hash:h="",state:d=null,key:p="default"}=r,m=e.useMemo(()=>{let e=B(l,o);return null==e?null:{location:{pathname:e,search:u,hash:h,state:d,key:p},navigationType:i}},[o,l,u,h,d,p,i]);return _(null!=m,`<Router basename="${o}"> is not able to match the URL "${l}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`),null==m?null:e.createElement(ee.Provider,{value:c},e.createElement(te.Provider,{children:n,value:m}))}function Te({children:e,location:t}){return he(Ce(e),t)}function Ce(t,n=[]){let r=[];return e.Children.forEach(t,(t,i)=>{if(!e.isValidElement(t))return;let s=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,Ce(t.props.children,s));x(t.type===_e,`[${"string"==typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),x(!t.props.index||!t.props.children,"An index route cannot have child routes.");let a={id:t.props.id||s.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(a.children=Ce(t.props.children,s)),r.push(a)}),r}e.memo(function({routes:e,future:t,state:n,unstable_onError:r}){return he(e,void 0,n,r,t)});var Ie="get",Se="application/x-www-form-urlencoded";function Ne(e){return null!=e&&"string"==typeof e.tagName}var ke=null;var Ae=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Re(e){return null==e||Ae.has(e)?e:(_(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Se}"`),null)}function De(e,t){let n,r,i,s,a;if(Ne(o=e)&&"form"===o.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?B(a,t):null,n=e.getAttribute("method")||Ie,i=Re(e.getAttribute("enctype"))||Se,s=new FormData(e)}else if(function(e){return Ne(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Ne(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let o=e.getAttribute("formaction")||a.getAttribute("action");if(r=o?B(o,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Ie,i=Re(e.getAttribute("formenctype"))||Re(a.getAttribute("enctype"))||Se,s=new FormData(a,e),!function(){if(null===ke)try{new FormData(document.createElement("form"),0),ke=!1}catch(e){ke=!0}return ke}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";s.append(`${e}x`,"0"),s.append(`${e}y`,"0")}else t&&s.append(t,r)}}else{if(Ne(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ie,r=null,i=Se,a=e}var o;return s&&"text/plain"===i&&(a=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:a}}function Oe(e,t){if(!1===e||null==e)throw new Error(t)}function je(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"==typeof e.imageSrcSet&&"string"==typeof e.imageSizes:"string"==typeof e.rel&&"string"==typeof e.href)}async function Pe(e,t,n){return function(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{var s;if(t&&!(null!=(s=i)&&"string"==typeof s.page)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await async function(e,t){if(e.id in t)return t[e.id];try{let n=await v(()=>import(e.module),[]);return t[e.id]=n,n}catch(n){return window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(je).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}function Le(e,t,n,r,i,s){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,o=(e,t)=>{var r;return n[t].pathname!==e.pathname||(null==(r=n[t].route.path)?void 0:r.endsWith("*"))&&n[t].params["*"]!==e.params["*"]};return"assets"===s?t.filter((e,t)=>a(e,t)||o(e,t)):"data"===s?t.filter((t,s)=>{var c;let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,s)||o(t,s))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:(null==(c=n[0])?void 0:c.params)||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"==typeof r)return r}return!0}):[]}function Me(e,t,{includeHydrateFallback:n}={}){return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1),[...new Set(r)];var r}function Ve(){let t=e.useContext(Y);return Oe(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ue=e.createContext(void 0);function Fe(){let t=e.useContext(Ue);return Oe(t,"You must render this element inside a <HydratedRouter> element"),t}function Be(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function qe({page:t,...n}){let{router:r}=Ve(),i=e.useMemo(()=>S(r.routes,t,r.basename),[r.routes,t,r.basename]);return i?e.createElement(ze,{page:t,matches:i,...n}):null}function ze({page:t,matches:n,...r}){let i=se(),{manifest:s,routeModules:a}=Fe(),{basename:o}=Ve(),{loaderData:c,matches:l}=function(){let t=e.useContext(X);return Oe(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}(),u=e.useMemo(()=>Le(t,n,l,s,i,"data"),[t,n,l,s,i]),h=e.useMemo(()=>Le(t,n,l,s,i,"assets"),[t,n,l,s,i]),d=e.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let e=new Set,r=!1;if(n.forEach(t=>{var n;let i=s.routes[t.route.id];i&&i.hasLoader&&(!u.some(e=>e.route.id===t.route.id)&&t.route.id in c&&(null==(n=a[t.route.id])?void 0:n.shouldRevalidate)||i.hasClientLoader?r=!0:e.add(t.route.id))}),0===e.size)return[];let l=function(e,t,n){let r="string"==typeof e?new URL(e,"undefined"==typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===B(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}(t,o,"data");return r&&e.size>0&&l.searchParams.set("_routes",n.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[l.pathname+l.search]},[o,c,i,s,u,n,t,a]),p=e.useMemo(()=>Me(h,s),[h,s]),m=function(t){let{manifest:n,routeModules:r}=Fe(),[i,s]=e.useState([]);return e.useEffect(()=>{let e=!1;return Pe(t,n,r).then(t=>{e||s(t)}),()=>{e=!0}},[t,n,r]),i}(h);return e.createElement(e.Fragment,null,d.map(t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...r})),p.map(t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...r})),m.map(({key:t,link:n})=>e.createElement("link",{key:t,nonce:r.nonce,...n})))}function $e(...e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}}Ue.displayName="FrameworkContext";var He="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;try{He&&(window.__reactRouterVersion="7.8.2")}catch($f){}function Ge({basename:t,children:n,window:r}){let i=e.useRef();null==i.current&&(i.current=b({window:r,v5Compat:!0}));let s=i.current,[a,o]=e.useState({action:s.action,location:s.location}),c=e.useCallback(t=>{e.startTransition(()=>o(t))},[o]);return e.useLayoutEffect(()=>s.listen(c),[s,c]),e.createElement(Ee,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s})}var Ke=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,We=e.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,state:o,target:c,to:l,preventScrollReset:u,viewTransition:h,...d},p){let m,{basename:f}=e.useContext(ee),g="string"==typeof l&&Ke.test(l),y=!1;if("string"==typeof l&&g&&(m=l,He))try{let e=new URL(window.location.href),t=l.startsWith("//")?new URL(e.protocol+l):new URL(l),n=B(t.pathname,f);t.origin===e.origin&&null!=n?l=n+t.search+t.hash:y=!0}catch($f){_(!1,`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=function(t,{relative:n}={}){x(ie(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(ee),{hash:s,pathname:a,search:o}=ue(t,{relative:n}),c=a;return"/"!==r&&(c="/"===a?r:H([r,a])),i.createHref({pathname:c,search:o,hash:s})}(l,{relative:i}),[w,b,E]=function(t,n){let r=e.useContext(Ue),[i,s]=e.useState(!1),[a,o]=e.useState(!1),{onFocus:c,onBlur:l,onMouseEnter:u,onMouseLeave:h,onTouchStart:d}=n,p=e.useRef(null);e.useEffect(()=>{if("render"===t&&o(!0),"viewport"===t){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[t]),e.useEffect(()=>{if(i){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[i]);let m=()=>{s(!0)},f=()=>{s(!1),o(!1)};return r?"intent"!==t?[a,p,{}]:[a,p,{onFocus:Be(c,m),onBlur:Be(l,f),onMouseEnter:Be(u,m),onMouseLeave:Be(h,f),onTouchStart:Be(d,m)}]:[!1,p,{}]}(r,d),T=function(t,{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:o}={}){let c=ce(),l=se(),u=ue(t,{relative:a});return e.useCallback(e=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(e,n)){e.preventDefault();let n=void 0!==r?r:C(l)===C(u);c(t,{replace:n,state:i,preventScrollReset:s,relative:a,viewTransition:o})}},[l,c,u,r,i,n,t,s,a,o])}(l,{replace:a,state:o,target:c,preventScrollReset:u,relative:i,viewTransition:h});let I=e.createElement("a",{...d,...E,href:m||v,onClick:y||s?t:function(e){t&&t(e),e.defaultPrevented||T(e)},ref:$e(p,b),target:c,"data-discover":g||"render"!==n?void 0:"true"});return w&&!g?e.createElement(e.Fragment,null,I,e.createElement(qe,{page:v})):I});function Qe(t){let n=e.useContext(Y);return x(n,function(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}(t)),n}We.displayName="Link",e.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:o,children:c,...l},u){let h=ue(a,{relative:l.relative}),d=se(),p=e.useContext(X),{navigator:m,basename:f}=e.useContext(ee),g=null!=p&&function(t,{relative:n}={}){let r=e.useContext(Z);x(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Qe("useViewTransitionState"),s=ue(t,{relative:n});if(!r.isTransitioning)return!1;let a=B(r.currentLocation.pathname,i)||r.currentLocation.pathname,o=B(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=U(s.pathname,o)||null!=U(s.pathname,a)}(h)&&!0===o,y=m.encodeLocation?m.encodeLocation(h).pathname:h.pathname,v=d.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;n||(v=v.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&f&&(w=B(w,f)||w);const b="/"!==y&&y.endsWith("/")?y.length-1:y.length;let _,E=v===y||!i&&v.startsWith(y)&&"/"===v.charAt(b),T=null!=w&&(w===y||!i&&w.startsWith(y)&&"/"===w.charAt(y.length)),C={isActive:E,isPending:T,isTransitioning:g},I=E?t:void 0;_="function"==typeof r?r(C):[r,E?"active":null,T?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let S="function"==typeof s?s(C):s;return e.createElement(We,{...l,"aria-current":I,className:_,ref:u,style:S,to:a,viewTransition:o},"function"==typeof c?c(C):c)}).displayName="NavLink",e.forwardRef(({discover:t="render",fetcherKey:n,navigate:r,reloadDocument:i,replace:s,state:a,method:o=Ie,action:c,onSubmit:l,relative:u,preventScrollReset:h,viewTransition:d,...p},m)=>{let f=function(){let{router:t}=Qe("useSubmit"),{basename:n}=e.useContext(ee),r=ye("useRouteId");return e.useCallback(async(e,i={})=>{let{action:s,method:a,encType:o,formData:c,body:l}=De(e,n);if(!1===i.navigate){let e=i.fetcherKey||Ye();await t.fetch(e,r,i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||a,formEncType:i.encType||o,flushSync:i.flushSync})}else await t.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:c,body:l,formMethod:i.method||a,formEncType:i.encType||o,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,n,r])}(),g=function(t,{relative:n}={}){let{basename:r}=e.useContext(ee),i=e.useContext(ne);x(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),a={...ue(t||".",{relative:n})},o=se();if(null==t){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll("index");if(t.some(e=>""===e)){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}t&&"."!==t||!s.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:H([r,a.pathname]));return C(a)}(c,{relative:u}),y="get"===o.toLowerCase()?"get":"post",v="string"==typeof c&&Ke.test(c);return e.createElement("form",{ref:m,method:y,action:g,onSubmit:i?l:e=>{if(l&&l(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,i=(null==t?void 0:t.getAttribute("formmethod"))||o;f(t||e.currentTarget,{fetcherKey:n,method:i,navigate:r,replace:s,state:a,relative:u,preventScrollReset:h,viewTransition:d})},...p,"data-discover":v||"render"!==t?void 0:"true"})}).displayName="Form";var Je=0,Ye=()=>`__${String(++Je)}__`;const Xe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ze={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,c=o?e[i+2]:0,l=t>>2,u=(3&t)<<4|a>>4;let h=(15&a)<<2|c>>6,d=63&c;o||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==o)throw new et;const c=t<<2|s>>4;if(r.push(c),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class et extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tt=function(e){return function(e){const t=Xe(e);return Ze.encodeByteArray(t,!0)}(e).replace(/\./g,"")},nt=function(e){try{return Ze.decodeString(e,!0)}catch($f){}return null};
/**
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
 */
const rt=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,it=()=>{try{return rt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch($f){return}const t=e&&nt(e[1]);return t&&JSON.parse(t)})()}catch($f){return}},st=e=>{var t,n;return null==(n=null==(t=it())?void 0:t.emulatorHosts)?void 0:n[e]},at=()=>{var e;return null==(e=it())?void 0:e.config},ot=e=>{var t;return null==(t=it())?void 0:t[`_${e}`]};
/**
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
 */
class ct{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function lt(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ut(e){return(await fetch(e,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const ht={};let dt=!1;function pt(e,t){if("undefined"==typeof window||"undefined"==typeof document||!lt(window.location.host)||ht[e]===t||ht[e]||dt)return;function n(e){return`__firebase__banner__${e}`}ht[e]=t;const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(ht))ht[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{dt=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function a(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),a=document.getElementById(t)||document.createElement("span"),o=n("learnmore"),c=document.getElementById(o)||document.createElement("a"),l=n("preprendIcon"),u=document.getElementById(l)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(c,o);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(u,l),t.append(u,a,c,n),document.body.appendChild(t)}i?(a.innerText="Preview backend disconnected.",u.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(u.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',a.innerText="Preview backend running in this workspace."),a.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a()}
/**
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
 */function mt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ft(){return!function(){var e;const t=null==(e=it())?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch($f){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class gt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yt.prototype.create)}}class yt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(vt,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new gt(r,a,n)}}const vt=/\{\$([^}]+)}/g;function wt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(bt(n)&&bt(s)){if(!wt(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bt(e){return null!==e&&"object"==typeof e}
/**
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
 */function xt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _t(e){const t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function Et(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Tt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ct),void 0===r.error&&(r.error=Ct),void 0===r.complete&&(r.complete=Ct);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch($f){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch($f){"undefined"!=typeof console&&console.error}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ct(){}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function It(e){return e&&e._delegate?e._delegate:e}class St{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const Nt="[DEFAULT]";
/**
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
 */class kt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ct;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch($f){}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=(null==e?void 0:e.optional)??!1;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch($f){if(n)return null;throw $f}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch($f){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch($f){}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Nt?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}var r;return n||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class At{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var Rt,Dt;(Dt=Rt||(Rt={}))[Dt.DEBUG=0]="DEBUG",Dt[Dt.VERBOSE=1]="VERBOSE",Dt[Dt.INFO=2]="INFO",Dt[Dt.WARN=3]="WARN",Dt[Dt.ERROR=4]="ERROR",Dt[Dt.SILENT=5]="SILENT";const Ot={debug:Rt.DEBUG,verbose:Rt.VERBOSE,info:Rt.INFO,warn:Rt.WARN,error:Rt.ERROR,silent:Rt.SILENT},jt=Rt.INFO,Pt={[Rt.DEBUG]:"log",[Rt.VERBOSE]:"log",[Rt.INFO]:"info",[Rt.WARN]:"warn",[Rt.ERROR]:"error"},Lt=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!Pt[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mt{constructor(e){this.name=e,this._logLevel=jt,this._logHandler=Lt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Rt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ot[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Rt.DEBUG,...e),this._logHandler(this,Rt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Rt.VERBOSE,...e),this._logHandler(this,Rt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Rt.INFO,...e),this._logHandler(this,Rt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Rt.WARN,...e),this._logHandler(this,Rt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Rt.ERROR,...e),this._logHandler(this,Rt.ERROR,...e)}}let Vt,Ut;const Ft=new WeakMap,Bt=new WeakMap,qt=new WeakMap,zt=new WeakMap,$t=new WeakMap;let Ht={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Bt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||qt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Gt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ut||(Ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Qt(this),t),Wt(Ft.get(this))}:function(...t){return Wt(e.apply(Qt(this),t))}:function(t,...n){const r=e.call(Qt(this),t,...n);return qt.set(r,t.sort?t.sort():[t]),Wt(r)}}function Kt(e){return"function"==typeof e?Gt(e):(e instanceof IDBTransaction&&function(e){if(Bt.has(e))return;const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});Bt.set(e,t)}(e),t=e,(Vt||(Vt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(e=>t instanceof e)?new Proxy(e,Ht):e);var t}function Wt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Wt(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&Ft.set(t,e)}).catch(()=>{}),$t.set(t,e),t}(e);if(zt.has(e))return zt.get(e);const t=Kt(e);return t!==e&&(zt.set(e,t),$t.set(t,e)),t}const Qt=e=>$t.get(e);const Jt=["get","getKey","getAll","getAllKeys","count"],Yt=["put","add","delete","clear"],Xt=new Map;function Zt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Xt.get(t))return Xt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yt.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Jt.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return Xt.set(t,s),s}Ht=(e=>({...e,get:(t,n,r)=>Zt(t,n)||e.get(t,n,r),has:(t,n)=>!!Zt(t,n)||e.has(t,n)}))(Ht);
/**
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
 */
class en{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}const tn="@firebase/app",nn="0.14.0",rn=new Mt("@firebase/app"),sn="@firebase/app-compat",an="@firebase/analytics-compat",on="@firebase/analytics",cn="@firebase/app-check-compat",ln="@firebase/app-check",un="@firebase/auth",hn="@firebase/auth-compat",dn="@firebase/database",pn="@firebase/data-connect",mn="@firebase/database-compat",fn="@firebase/functions",gn="@firebase/functions-compat",yn="@firebase/installations",vn="@firebase/installations-compat",wn="@firebase/messaging",bn="@firebase/messaging-compat",xn="@firebase/performance",_n="@firebase/performance-compat",En="@firebase/remote-config",Tn="@firebase/remote-config-compat",Cn="@firebase/storage",In="@firebase/storage-compat",Sn="@firebase/firestore",Nn="@firebase/ai",kn="@firebase/firestore-compat",An="firebase",Rn="[DEFAULT]",Dn={[tn]:"fire-core",[sn]:"fire-core-compat",[on]:"fire-analytics",[an]:"fire-analytics-compat",[ln]:"fire-app-check",[cn]:"fire-app-check-compat",[un]:"fire-auth",[hn]:"fire-auth-compat",[dn]:"fire-rtdb",[pn]:"fire-data-connect",[mn]:"fire-rtdb-compat",[fn]:"fire-fn",[gn]:"fire-fn-compat",[yn]:"fire-iid",[vn]:"fire-iid-compat",[wn]:"fire-fcm",[bn]:"fire-fcm-compat",[xn]:"fire-perf",[_n]:"fire-perf-compat",[En]:"fire-rc",[Tn]:"fire-rc-compat",[Cn]:"fire-gcs",[In]:"fire-gcs-compat",[Sn]:"fire-fst",[kn]:"fire-fst-compat",[Nn]:"fire-vertex","fire-js":"fire-js",[An]:"fire-js-all"},On=new Map,jn=new Map,Pn=new Map;function Ln(e,t){try{e.container.addComponent(t)}catch($f){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,$f)}}function Mn(e){const t=e.name;if(Pn.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;Pn.set(t,e);for(const n of On.values())Ln(n,e);for(const n of jn.values())Ln(n,e);return!0}function Vn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Un(e){return null!=e&&void 0!==e.settings}
/**
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
 */const Fn=new yt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class Bn{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}
/**
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
 */const qn="12.0.0";function zn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r={name:Rn,automaticDataCollectionEnabled:!0,...t},i=r.name;if("string"!=typeof i||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=at()),!n)throw Fn.create("no-options");const s=On.get(i);if(s){if(wt(n,s.options)&&wt(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const a=new At(i);for(const c of Pn.values())a.addComponent(c);const o=new Bn(n,r,a);return On.set(i,o),o}function $n(e=Rn){const t=On.get(e);if(!t&&e===Rn&&at())return zn();if(!t)throw Fn.create("no-app",{appName:e});return t}function Hn(e,t,n){let r=Dn[e]??e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void rn.warn(e.join(" "))}Mn(new St(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Gn="firebase-heartbeat-store";let Kn=null;function Wn(){return Kn||(Kn=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Wt(a);return r&&a.addEventListener("upgradeneeded",e=>{r(Wt(a.result),e.oldVersion,e.newVersion,Wt(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Gn)}catch($f){}}}).catch(e=>{throw Fn.create("idb-open",{originalErrorMessage:e.message})})),Kn}async function Qn(e,t){try{const n=(await Wn()).transaction(Gn,"readwrite"),r=n.objectStore(Gn);await r.put(t,Jn(e)),await n.done}catch($f){if($f instanceof gt)rn.warn($f.message);else{const t=Fn.create("idb-set",{originalErrorMessage:null==$f?void 0:$f.message});rn.warn(t.message)}}}function Jn(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Yn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zn(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xn();if(null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null==(t=this._heartbeatsCache)?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch($f){rn.warn($f)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Xn(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),er(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),er(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=tt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch($f){return rn.warn($f),""}}}function Xn(){return(new Date).toISOString().substring(0,10)}class Zn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch($f){return!1}}()&&new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null==(e=i.error)?void 0:e.message)||"")}}catch(n){t(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Wn()).transaction(Gn),n=await t.objectStore(Gn).get(Jn(e));return await t.done,n}catch($f){if($f instanceof gt)rn.warn($f.message);else{const t=Fn.create("idb-get",{originalErrorMessage:null==$f?void 0:$f.message});rn.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return Qn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function er(e){return tt(JSON.stringify({version:2,heartbeats:e})).length}var tr;function nr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}tr="",Mn(new St("platform-logger",e=>new en(e),"PRIVATE")),Mn(new St("heartbeat",e=>new Yn(e),"PRIVATE")),Hn(tn,nn,tr),Hn(tn,nn,"esm2020"),Hn("fire-js","");const rr=nr,ir=new yt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),sr=new Mt("@firebase/auth");function ar(e,...t){sr.logLevel<=Rt.ERROR&&sr.error(`Auth (${qn}): ${e}`,...t)}
/**
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
 */function or(e,...t){throw hr(e,...t)}function cr(e,...t){return hr(e,...t)}function lr(e,t,n){const r={...rr(),[t]:n};return new yt("auth","Firebase",r).create(t,{appName:e.name})}function ur(e){return lr(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hr(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ir.create(e,...t)}function dr(e,t,...n){if(!e)throw hr(t,...n)}function pr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ar(t),new Error(t)}function mr(e,t){e||pr(t)}
/**
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
 */function fr(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.href)||""}function gr(){var e;return"undefined"!=typeof self&&(null==(e=self.location)?void 0:e.protocol)||null}
/**
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
 */function yr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==gr()&&"https:"!==gr()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class vr{constructor(e,t){this.shortDelay=e,this.longDelay=t,mr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return yr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function wr(e,t){mr(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class br{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const xr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},_r=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Er=new vr(3e4,6e4);
/**
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
 */function Tr(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function Cr(e,t,n,r,i={}){return Ir(e,i,async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=xt({key:e.config.apiKey,...s}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:o,...i};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&lt(e.emulatorConfig.host)&&(c.credentials="include"),br.fetch()(await Nr(e,e.config.apiHost,n,a),c)})}async function Ir(e,t,n){e._canInitEmulator=!1;const r={...xr,...t};try{const t=new Ar(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Rr(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Rr(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Rr(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Rr(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw lr(e,o,a);or(e,o)}}catch($f){if($f instanceof gt)throw $f;or(e,"network-request-failed",{message:String($f)})}}async function Sr(e,t,n,r,i={}){const s=await Cr(e,t,n,r,i);return"mfaPendingCredential"in s&&or(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Nr(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?wr(e.config,i):`${e.config.apiScheme}://${i}`;if(_r.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(a).toString()}return a}function kr(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ar{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(cr(this.auth,"network-request-failed")),Er.get())})}}function Rr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cr(e,t,r);return i.customData._tokenResponse=n,i}function Dr(e){return void 0!==e&&void 0!==e.enterprise}class Or{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return kr(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jr(e,t){return Cr(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function Pr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch($f){}}function Lr(e){return 1e3*Number(e)}function Mr(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const e=nt(n);return e?JSON.parse(e):(ar("Failed to decode base64 JWT payload"),null)}catch($f){return ar("Caught error parsing JWT payload as JSON",null==$f?void 0:$f.toString()),null}}function Vr(e){const t=Mr(e);return dr(t,"internal-error"),dr(void 0!==t.exp,"internal-error"),dr(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function Ur(e,t,n=!1){if(n)return t;try{return await t}catch($f){throw $f instanceof gt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */($f)&&e.auth.currentUser===e&&await e.auth.signOut(),$f}}class Fr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch($f){return void("auth/network-request-failed"===(null==$f?void 0:$f.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class Br{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function qr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ur(e,jr(n,{idToken:r}));dr(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null==(t=s.providerUserInfo)?void 0:t.length)?zr(s.providerUserInfo):[],o=(c=e.providerData,l=a,[...c.filter(e=>!l.some(t=>t.providerId===e.providerId)),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Br(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}function zr(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}
/**
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
 */
/**
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
 */
class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){dr(e.idToken,"internal-error"),dr(void 0!==e.idToken,"internal-error"),dr(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Vr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){dr(0!==e.length,"internal-error");const t=Vr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(dr(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Ir(e,{},async()=>{const n=xt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await Nr(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const o={method:"POST",headers:a,body:n};return e.emulatorConfig&&lt(e.emulatorConfig.host)&&(o.credentials="include"),br.fetch()(s,o)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new $r;return n&&(dr("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(dr("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(dr("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return pr("not implemented")}}
/**
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
 */function Hr(e,t){dr("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Gr{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new Fr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Br(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ur(this,this.stsTokenManager.getToken(this.auth,e));return dr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=It(e),r=await n.getIdToken(t),i=Mr(r);dr(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pr(Lr(i.auth_time)),issuedAtTime:Pr(Lr(i.iat)),expirationTime:Pr(Lr(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=It(e);await qr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(dr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){dr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await qr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(ur(this.auth));const e=await this.getIdToken();return await Ur(this,
/**
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
 */
async function(e,t){return Cr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,a=t.tenantId??void 0,o=t._redirectEventId??void 0,c=t.createdAt??void 0,l=t.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:d,providerData:p,stsTokenManager:m}=t;dr(u&&m,e,"internal-error");const f=$r.fromJSON(this.name,m);dr("string"==typeof u,e,"internal-error"),Hr(n,e.name),Hr(r,e.name),dr("boolean"==typeof h,e,"internal-error"),dr("boolean"==typeof d,e,"internal-error"),Hr(i,e.name),Hr(s,e.name),Hr(a,e.name),Hr(o,e.name),Hr(c,e.name),Hr(l,e.name);const g=new Gr({uid:u,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:d,photoURL:s,phoneNumber:i,tenantId:a,stsTokenManager:f,createdAt:c,lastLoginAt:l});return p&&Array.isArray(p)&&(g.providerData=p.map(e=>({...e}))),o&&(g._redirectEventId=o),g}static async _fromIdTokenResponse(e,t,n=!1){const r=new $r;r.updateFromServerResponse(t);const i=new Gr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await qr(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];dr(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?zr(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new $r;a.updateFromIdToken(n);const o=new Gr({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Br(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(o,c),o}}
/**
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
 */const Kr=new Map;function Wr(e){mr(e instanceof Function,"Expected a class definition");let t=Kr.get(e);return t?(mr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Kr.set(e,t),t)}
/**
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
 */class Qr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qr.type="NONE";const Jr=Qr;
/**
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
 */function Yr(e,t,n){return`firebase:${e}:${t}:${n}`}class Xr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Yr(this.userKey,r.apiKey,i),this.fullPersistenceKey=Yr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await jr(this.auth,{idToken:e}).catch(()=>{});return t?Gr._fromGetAccountInfoResponse(this.auth,t,e):null}return Gr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Xr(Wr(Jr),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||Wr(Jr);const s=Yr(n,e.config.apiKey,e.name);let a=null;for(const c of t)try{const t=await c._get(s);if(t){let n;if("string"==typeof t){const r=await jr(e,{idToken:t}).catch(()=>{});if(!r)break;n=await Gr._fromGetAccountInfoResponse(e,r,t)}else n=Gr._fromJSON(e,t);c!==i&&(a=n),i=c;break}}catch{}const o=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch{}})),new Xr(i,e,n)):new Xr(i,e,n)}}
/**
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
 */function Zr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ri(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ei(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(si(t))return"Blackberry";if(ai(t))return"Webos";if(ti(t))return"Safari";if((t.includes("chrome/")||ni(t))&&!t.includes("edge/"))return"Chrome";if(ii(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ei(e=mt()){return/firefox\//i.test(e)}function ti(e=mt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ni(e=mt()){return/crios\//i.test(e)}function ri(e=mt()){return/iemobile/i.test(e)}function ii(e=mt()){return/android/i.test(e)}function si(e=mt()){return/blackberry/i.test(e)}function ai(e=mt()){return/webos/i.test(e)}function oi(e=mt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ci(){return function(){const e=mt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function li(e=mt()){return oi(e)||ii(e)||ai(e)||si(e)||/windows phone/i.test(e)||ri(e)}
/**
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
 */function ui(e,t=[]){let n;switch(e){case"Browser":n=Zr(mt());break;case"Worker":n=`${Zr(mt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${r}`}
/**
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
 */class hi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise((n,r)=>{try{n(e(t))}catch($f){r($f)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch($f){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==$f?void 0:$f.message})}}}
/**
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
 */class di{constructor(e){var t;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),void 0!==n.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),void 0!==n.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),void 0!==n.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),void 0!==n.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(null==(t=e.allowedNonAlphanumericCharacters)?void 0:t.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
 */class pi{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fi(this),this.idTokenSubscription=new fi(this),this.beforeStateQueue=new hi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ir,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),null==(n=this._resolvePersistenceManagerAvailable)||n.call(this),!this._deleted)){if(null==(r=this._popupRedirectResolver)?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch($f){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null==(i=this.currentUser)?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await jr(this,{idToken:e}),n=await Gr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Un(this.app)){const e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null==(t=this.redirectUser)?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch($f){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject($f))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return dr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch($f){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qr(e)}catch($f){if("auth/network-request-failed"!==(null==$f?void 0:$f.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(ur(this));const t=e?It(e):null;return t&&dr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&dr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Cr(e,"GET","/v2/passwordPolicy",Tr(e,t))}
/**
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
 */(this),t=new di(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Cr(e,"POST","/v2/accounts:revokeToken",Tr(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null==(e=this._currentUser)?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;dr(t,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null==(t=this._currentUser)?void 0:t._redirectEventId)===e?this._currentUser:(null==(n=this.redirectUser)?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=(null==(e=this.currentUser)?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(dr(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return dr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ui(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null==(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null==(e=this.appCheckServiceProvider.getImmediate({optional:!0}))?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){sr.logLevel<=Rt.WARN&&sr.warn(`Auth (${qn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function mi(e){return It(e)}class fi{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Tt(e,t);return n.subscribe.bind(n)}(e=>this.observer=e)}get next(){return dr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yi(e){return gi.loadJS(e)}class vi{constructor(){this.enterprise=new wi}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class wi{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const bi="NO_RECAPTCHA";class xi{constructor(e){this.type="recaptcha-enterprise",this.auth=mi(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,n)=>{(async function(e,t){return Cr(e,"GET","/v2/recaptchaConfig",Tr(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(r=>{if(void 0!==r.recaptchaKey){const n=new Or(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))}).catch(e=>{n(e)})})}function r(t,n,r){const i=window.grecaptcha;Dr(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{n(e)}).catch(()=>{n(bi)})}):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new vi).execute("siteKey",{action:"verify"})}return new Promise((e,i)=>{n(this.auth).then(n=>{if(!t&&Dr(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=gi.recaptchaEnterpriseScript;0!==t.length&&(t+=n),yi(t).then(()=>{r(n,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function _i(e,t,n,r=!1,i=!1){const s=new xi(e);let a;if(i)a=bi;else try{a=await s.verify(n)}catch(c){a=await s.verify(n,!0)}const o={...t};if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in o){const e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const e=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ei(e,t,n,r,i){var s,a;if("EMAIL_PASSWORD_PROVIDER"===i){if(null==(s=e._getRecaptchaConfig())?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _i(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch(async i=>{if("auth/missing-recaptcha-token"===i.code){const i=await _i(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)})}if("PHONE_PROVIDER"===i){if(null==(a=e._getRecaptchaConfig())?void 0:a.isProviderEnabled("PHONE_PROVIDER")){const i=await _i(e,t,n);return r(e,i).catch(async i=>{var s;if("AUDIT"===(null==(s=e._getRecaptchaConfig())?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){const i=await _i(e,t,n,!1,!0);return r(e,i)}return Promise.reject(i)})}{const i=await _i(e,t,n,!1,!0);return r(e,i)}}return Promise.reject(i+" provider is not supported.")}
/**
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
 */function Ti(e,t,n){const r=mi(e);dr(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Ci(t),{host:a,port:o}=function(e){const t=Ci(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ii(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ii(t)}}}(t),c=null===o?"":`:${o}`,l={url:`${s}//${a}${c}/`},u=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator)return dr(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void dr(wt(l,r.config.emulator)&&wt(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,lt(a)?(ut(`${s}//${a}${c}`),pt("Auth",!0)):i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Ci(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ii(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Si{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pr("not implemented")}_getIdTokenResponse(e){return pr("not implemented")}_linkToIdToken(e,t){return pr("not implemented")}_getReauthenticationResolver(e){return pr("not implemented")}}async function Ni(e,t){return Cr(e,"POST","/v1/accounts:signUp",t)}
/**
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
 */async function ki(e,t){return Sr(e,"POST","/v1/accounts:signInWithPassword",Tr(e,t))}
/**
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
 */
/**
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
 */
class Ai extends Si{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ai(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ai(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ei(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",ki,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return Sr(e,"POST","/v1/accounts:signInWithEmailLink",Tr(e,t))}(e,{email:this._email,oobCode:this._password});default:or(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ei(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ni,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(e,t){return Sr(e,"POST","/v1/accounts:signInWithEmailLink",Tr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Ri(e,t){return Sr(e,"POST","/v1/accounts:signInWithIdp",Tr(e,t))}
/**
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
 */class Di extends Si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):or("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const s=new Di(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ri(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ri(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ri(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xt(t)}return e}}
/**
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
 */class Oi{constructor(e){const t=_t(Et(e)),n=t.apiKey??null,r=t.oobCode??null,i=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);dr(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=function(e){const t=_t(Et(e)).link,n=t?_t(Et(t)).deep_link_id:null,r=_t(Et(e)).deep_link_id;return(r?_t(Et(r)).link:null)||r||n||t||e}(e);try{return new Oi(t)}catch{return null}}}
/**
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
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,t){return Ai._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Oi.parseLink(t);return dr(n,"argument-error"),Ai._fromEmailAndCode(e,n.code,n.tenantId)}}ji.PROVIDER_ID="password",ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Pi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Li extends Pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class Mi extends Li{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Mi.credential(e.oauthAccessToken)}catch{return null}}}Mi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Mi.PROVIDER_ID="facebook.com";
/**
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
 */
class Vi extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Di._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Vi.credential(t,n)}catch{return null}}}Vi.GOOGLE_SIGN_IN_METHOD="google.com",Vi.PROVIDER_ID="google.com";
/**
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
 */
class Ui extends Li{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ui.credential(e.oauthAccessToken)}catch{return null}}}Ui.GITHUB_SIGN_IN_METHOD="github.com",Ui.PROVIDER_ID="github.com";
/**
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
 */
class Fi extends Li{constructor(){super("twitter.com")}static credential(e,t){return Di._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Fi.credential(t,n)}catch{return null}}}Fi.TWITTER_SIGN_IN_METHOD="twitter.com",Fi.PROVIDER_ID="twitter.com";
/**
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
 */
class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Gr._fromIdTokenResponse(e,n,r),s=qi(n);return new Bi({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=qi(n);return new Bi({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function qi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class zi extends gt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new zi(e,t,n,r)}}function $i(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw zi._fromErrorAndOperation(e,n,t,r);throw n})}
/**
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
 */
async function Hi(e,t,n=!1){if(Un(e.app))return Promise.reject(ur(e));const r="signIn",i=await $i(e,r,t),s=await Bi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Gi(e,t,n){return Un(e.app)?Promise.reject(ur(e)):async function(e,t){return Hi(mi(e),t)}
/**
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
 */(It(e),ji.credential(t,n)).catch(async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&async function(e){const t=mi(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}(e),t})}const Ki="__sak";
/**
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
 */class Wi{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ki,"1"),this.storage.removeItem(Ki),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Qi extends Wi{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=li(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ci()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qi.type="LOCAL";const Ji=Qi;
/**
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
 */class Yi extends Wi{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Yi.type="SESSION";const Xi=Yi;
/**
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
 */
/**
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
 */
class Zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Zi(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map(async e=>e(t.origin,i)),o=await function(e){return Promise.all(e.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function es(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Zi.receivers=[];class ts{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise((a,o)=>{const c=es("",20);r.port1.start();const l=setTimeout(()=>{o(new Error("unsupported_event"))},n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(l),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
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
 */function ns(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function rs(){return void 0!==ns().WorkerGlobalScope&&"function"==typeof ns().importScripts}
/**
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
 */
const is="firebaseLocalStorageDb",ss="firebaseLocalStorage",as="fbase_key";class os{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cs(e,t){return e.transaction([ss],t?"readwrite":"readonly").objectStore(ss)}function ls(){const e=indexedDB.open(is,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(ss,{keyPath:as})}catch($f){n($f)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(ss)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(is);return new os(e).toPromise()}(),t(await ls()))})})}async function us(e,t,n){const r=cs(e,!0).put({[as]:t,value:n});return new os(r).toPromise()}function hs(e,t){const n=cs(e,!0).delete(t);return new os(n).toPromise()}class ds{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await ls()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch($f){if(t++>3)throw $f;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zi._getInstance(rs()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new ts(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null==(e=n[0])?void 0:e.fulfilled)&&(null==(t=n[0])?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null==(t=null==navigator?void 0:navigator.serviceWorker)?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ls();return await us(e,Ki,"1"),await hs(e,Ki),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>us(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>async function(e,t){const n=cs(e,!1).get(t),r=await new os(n).toPromise();return void 0===r?null:r.value}(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>hs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=cs(e,!1).getAll();return new os(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ds.type="LOCAL";const ps=ds;new vr(3e4,6e4);
/**
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
 */
class ms extends Si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ri(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fs(e){return Hi(e.auth,new ms(e),e.bypassAuthState)}function gs(e){const{auth:t,user:n}=e;return dr(n,t,"internal-error"),
/**
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
 */
async function(e,t,n=!1){const{auth:r}=e;if(Un(r.app))return Promise.reject(ur(r));const i="reauthenticate";try{const s=await Ur(e,$i(r,i,t,e),n);dr(s.idToken,r,"internal-error");const a=Mr(s.idToken);dr(a,r,"internal-error");const{sub:o}=a;return dr(e.uid===o,r,"user-mismatch"),Bi._forOperation(e,i,s)}catch($f){throw"auth/user-not-found"===(null==$f?void 0:$f.code)&&or(r,"user-mismatch"),$f}}(n,new ms(e),e.bypassAuthState)}async function ys(e){const{auth:t,user:n}=e;return dr(n,t,"internal-error"),async function(e,t,n=!1){const r=await Ur(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Bi._forOperation(e,"link",r)}(n,new ms(e),e.bypassAuthState)}
/**
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
 */class vs{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch($f){this.reject($f)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch($f){this.reject($f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fs;case"linkViaPopup":case"linkViaRedirect":return ys;case"reauthViaPopup":case"reauthViaRedirect":return gs;default:or(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const ws=new vr(2e3,1e4);class bs extends vs{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return dr(e,this.auth,"internal-error"),e}async onExecution(){mr(1===this.filter.length,"Popup operations only handle one event");const e=es();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null==(e=this.authWindow)?void 0:e.associatedEvent)||null}cancel(){this.reject(cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null==(n=null==(t=this.authWindow)?void 0:t.window)?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cr(this.auth,"popup-closed-by-user"))},8e3):this.pollId=window.setTimeout(e,ws.get())};e()}}bs.currentPopupAction=null;
/**
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
 */
const xs="pendingRedirect",_s=new Map;class Es extends vs{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Yr(xs,e.config.apiKey,e.name)}(t),r=function(e){return Wr(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch($f){e=()=>Promise.reject($f)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ts(e,t){_s.set(e._key(),t)}async function Cs(e,t,n=!1){if(Un(e.app))return Promise.reject(ur(e));const r=mi(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function(e,t){return t?Wr(t):(dr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new Es(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
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
 */class Is{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ns(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ns(e)){const r=(null==(n=e.error.code)?void 0:n.split("auth/")[1])||"internal-error";t.onError(cr(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ss(e))}saveEventToCache(e){this.cachedEventUids.add(Ss(e)),this.lastProcessedEventTime=Date.now()}}function Ss(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function Ns({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const ks=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,As=/^https?/;async function Rs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Cr(e,"GET","/v1/projects",t)}(e);for(const n of t)try{if(Ds(n))return}catch{}or(e,"unauthorized-domain")}function Ds(e){const t=fr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!As.test(n))return!1;if(ks.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Os=new vr(3e4,6e4);function js(){const e=ns().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ps(e){return new Promise((t,n)=>{var r,i,s;function a(){js(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{js(),n(cr(e,"network-request-failed"))},timeout:Os.get()})}if(null==(i=null==(r=ns().gapi)?void 0:r.iframes)?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null==(s=ns().gapi)?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return ns()[t]=()=>{gapi.load?a():n(cr(e,"network-request-failed"))},yi(`${gi.gapiScript}?onload=${t}`).catch(e=>n(e))}a()}}).catch(e=>{throw Ls=null,e})}let Ls=null;
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
const Ms=new vr(5e3,15e3),Vs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Us=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fs(e){const t=e.config;dr(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:qn},i=Us.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xt(r).slice(1)}`}async function Bs(e){const t=await function(e){return Ls=Ls||Ps(e),Ls}(e),n=ns().gapi;return dr(n,e,"internal-error"),t.open({where:document.body,url:Fs(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vs,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=cr(e,"network-request-failed"),s=ns().setTimeout(()=>{r(i)},Ms.get());function a(){ns().clearTimeout(s),n(t)}t.ping(a).then(a,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const qs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class zs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch($f){}}}function $s(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...qs,width:r.toString(),height:i.toString(),top:s,left:a},l=mt().toLowerCase();n&&(o=ni(l)?"_blank":n),ei(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(function(e=mt()){var t;return oi(e)&&!!(null==(t=window.navigator)?void 0:t.standalone)}(l)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */(t||"",o),new zs(null);const h=window.open(t||"",o,u);dr(h,e,"popup-blocked");try{h.focus()}catch($f){}return new zs(h)}const Hs="__/auth/handler",Gs="emulator/auth/handler",Ks=encodeURIComponent("fac");async function Ws(e,t,n,r,i,s){dr(e.config.authDomain,e,"auth-domain-config-required"),dr(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qn,eventId:i};if(t instanceof Pi){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof Li){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))void 0===o[u]&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${Ks}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Hs}`;return wr(e,Gs)}
/**
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
 */(e)}?${xt(o).slice(1)}${l}`}const Qs="webStorageSupport";const Js=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xi,this._completeRedirectFn=Cs,this._overrideRedirectResult=Ts}async _openPopup(e,t,n,r){var i;mr(null==(i=this.eventManagers[e._key()])?void 0:i.manager,"_initialize() not called before _openPopup()");return $s(e,await Ws(e,t,n,fr(),r),es())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){ns().location.href=e}(await Ws(e,t,n,fr(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(mr(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Bs(e),n=new Is(e);return t.register("authEvent",t=>{dr(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qs,{type:Qs},n=>{var r;const i=null==(r=null==n?void 0:n[0])?void 0:r[Qs];void 0!==i&&t(!!i),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return li()||ti()||oi()}};var Ys="@firebase/auth",Xs="1.11.0";
/**
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
 */
class Zs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null==(e=this.auth.currentUser)?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){dr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
const ea=ot("authIdTokenMaxAge")||300;let ta=null;var na;gi={loadJS:e=>new Promise((t,n)=>{const r=document.createElement("script");var i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=cr("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",((null==(i=document.getElementsByTagName("head"))?void 0:i[0])??document).appendChild(r)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},na="Browser",Mn(new St("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;dr(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:na,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ui(na)},c=new pi(n,r,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Mn(new St("auth-internal",e=>{const t=mi(e.getProvider("auth").getImmediate());return new Zs(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(Ys,Xs,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(na)),Hn(Ys,Xs,"esm2020");
/**
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
 */
Hn("firebase","12.0.0","app");var ra,ia,sa="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(a<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((s=(t=n+((a=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=s+((a=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,a=0;a<t;){if(0==s)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){n(this,i),s=0;break}}else for(;a<t;)if(i[s++]=e[a++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return d(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),c=s(1),l=s(16777216);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function p(e,t){return e.add(d(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function f(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new f(o,o);if(h(e))return t=g(d(e),t),new f(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new f(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var l=s.add(r);0>=l.l(e)&&(i=i.add(n),s=l),r=v(r,1),n=v(n,1)}return t=p(e,i.j(t)),new f(i,t)}for(i=o;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),l=(s=a(n)).j(t);h(l)||0<l.l(e);)l=(s=a(n-=r)).j(t);u(s)&&(s=c),i=i.add(s),e=p(e,l)}return new f(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=p(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=p(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(l)&&0>e.l(l))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var c=this.i(i)>>>16,p=65535&this.i(i),f=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=p*g,m(n,2*i+2*s),n[2*i+2*s+1]+=c*g,m(n,2*i+2*s+1),n[2*i+2*s+1]+=p*f,m(n,2*i+2*s+1),n[2*i+2*s+2]+=c*f,m(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,ia=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var c=Math.min(8,t.length-s),l=parseInt(t.substring(s,s+c),n);8>c?(c=a(Math.pow(n,c)),i=i.j(c).add(a(l))):i=(i=i.j(r)).add(a(l))}return i},ra=r}).apply(void 0!==sa?sa:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var aa,oa,ca,la,ua,ha,da,pa,ma="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ma&&ma];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,function(e,t){return t})}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:c).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function p(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function m(e){return/^[\s\xa0]*$/.test(e)}function f(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==f().indexOf("Gecko")||-1!=f().toLowerCase().indexOf("webkit")&&-1==f().indexOf("Edge")||-1!=f().indexOf("Trident")||-1!=f().indexOf("MSIE")||-1!=f().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function _(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function E(e){i.setTimeout(()=>{throw e},0)}function T(){var e=k;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var C=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new I,e=>e.reset());class I{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let S,N=!1,k=new class{constructor(){this.h=this.g=null}add(e,t){const n=C.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},A=()=>{const e=i.Promise.resolve(void 0);S=()=>{e.then(R)}};var R=()=>{for(var e;e=T();){try{e.h.call(e.g)}catch(n){E(n)}var t=C;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}N=!1};function D(){this.s=this.s,this.C=this.C}function O(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function P(e,t){if(O.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:L[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&P.aa.h.call(this)}}h(P,O);var L={2:"touch",3:"pen",4:"mouse"};P.prototype.h=function(){P.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++V,this.da=this.fa=!1}function F(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function B(e){this.src=e,this.g={},this.h=0}function q(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(F(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function z(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}B.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=z(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new U(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var $="closure_lm_"+(1e6*Math.random()|0),H={};function G(e,t,n,r,i){if(r&&r.once)return W(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)G(e,t[s],n,r,i);return null}return n=te(n),e&&e[M]?e.K(t,n,a(r)?!!r.capture:!!r,i):K(e,t,n,!1,r,i)}function K(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=a(i)?!!i.capture:!!i,c=Z(e);if(c||(e[$]=c=new B(e)),(n=c.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=X;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)j||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Y(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function W(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)W(e,t[s],n,r,i);return null}return n=te(n),e&&e[M]?e.L(t,n,a(r)?!!r.capture:!!r,i):K(e,t,n,!0,r,i)}function Q(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Q(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=te(n),e&&e[M]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=z(s=e.g[t],n,r,i))&&(F(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Z(e))&&(t=e.g[t.toString()],e=-1,t&&(e=z(t,n,r,i)),(n=-1<e?t[e]:null)&&J(n))}function J(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[M])q(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Y(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Z(t))?(q(n,e),0==n.h&&(n.src=null,t[$]=null)):F(e)}}}function Y(e){return e in H?H[e]:H[e]="on"+e}function X(e,t){if(e.da)e=!0;else{t=new P(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&J(e),e=n.call(r,t)}return e}function Z(e){return(e=e[$])instanceof B?e:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(e){return"function"==typeof e?e:(e[ee]||(e[ee]=function(t){return e.handleEvent(t)}),e[ee])}function ne(){D.call(this),this.i=new B(this),this.M=this,this.F=null}function re(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new O(t,e);else if(t instanceof O)t.target=t.target||e;else{var i=t;x(t=new O(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ie(a,r,!0,t)&&i}if(i=ie(a=t.g=e,r,!0,t)&&i,i=ie(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ie(a=t.g=n[s],r,!1,t)&&i}function ie(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,c=a.ha||a.src;a.fa&&q(e.i,a),i=!1!==o.call(c,r)&&i}}return i&&!r.defaultPrevented}function se(e,t,n){if("function"==typeof e)n&&(e=l(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=l(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ae(e){e.g=se(()=>{e.g=null,e.i&&(e.i=!1,ae(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ne,D),ne.prototype[M]=!0,ne.prototype.removeEventListener=function(e,t,n,r){Q(this,e,t,n,r)},ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)F(n[r]);delete t.g[e],t.h--}}this.F=null},ne.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ne.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class oe extends D{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ae(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ce(e){D.call(this),this.h=e,this.g={}}h(ce,D);var le=[];function ue(e){v(e.g,function(e,t){this.g.hasOwnProperty(t)&&J(e)},e),e.g={}}ce.prototype.N=function(){ce.aa.N.call(this),ue(this)},ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var he=i.JSON.stringify,de=i.JSON.parse,pe=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function me(){}function fe(e){return e.h||(e.h=e.i())}function ge(){}me.prototype.h=null;var ye={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ve(){O.call(this,"d")}function we(){O.call(this,"c")}h(ve,O),h(we,O);var be={},xe=null;function _e(){return xe=xe||new ne}function Ee(e){O.call(this,be.La,e)}function Te(e){const t=_e();re(t,new Ee(t))}function Ce(e,t){O.call(this,be.STAT_EVENT,e),this.stat=t}function Ie(e){const t=_e();re(t,new Ce(t,e))}function Se(e,t){O.call(this,be.Ma,e),this.size=t}function Ne(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout(function(){e()},t)}function ke(){this.g=!0}function Ae(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return he(n)}catch(o){return t}}(e,n)+(r?" "+r:"")})}be.La="serverreachability",h(Ee,O),be.STAT_EVENT="statevent",h(Ce,O),be.Ma="timingevent",h(Se,O),ke.prototype.xa=function(){this.g=!1},ke.prototype.info=function(){};var Re,De={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function je(){}function Pe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}h(je,me),je.prototype.g=function(){return new XMLHttpRequest},je.prototype.i=function(){return{}},Re=new je;var Me={},Ve={};function Ue(e,t,n){e.L=1,e.v=ht(at(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),ze(e),e.A=at(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Ct(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Le,e.g=pn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new oe(l(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(le[0]=i.toString()),i=le);for(var s=0;s<i.length;s++){var a=G(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Te(),function(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var a="",o=s.split("&"),c=0;c<o.length;c++){var l=o[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");a=2<=h.length&&"type"==h[1]?a+(u+"=")+l+"&":a+(u+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Be(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function qe(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ve:(n=Number(t.substring(n,r)),isNaN(n)?Me:(r+=1)+n>t.length?Ve:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,$e(e,e.I)}function $e(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ne(l(e.ba,e),t)}function He(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function Ge(e){0==e.j.G||e.J||cn(e.j,e)}function Ke(e){He(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ue(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function We(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Ze(n.h,e)))if(!e.K&&Ze(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;on(n),Jt(n)}rn(n),Ie(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ne(l(n.Za,n),6e3));if(1>=Xe(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else un(n,11)}else if((e.K||n.g==e)&&on(n),!m(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const t=l[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=l[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(et(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ut(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=dn(r,r.J?r.ia:null,r.W),a.K){tt(r.h,a);var o=a,c=r.L;c&&(o.I=c),o.B&&(He(o),ze(o)),r.g=a}else nn(r);0<n.i.length&&Xt(n)}else"stop"!=l[0]&&"close"!=l[0]||un(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?un(n,7):Qt(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}Te()}catch(u){}}Pe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Ht(e)?t.j():this.Y(e)},Pe.prototype.Y=function(e){try{if(e==this.g)e:{const d=Ht(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Gt(this.g)))){this.J||4!=d||7==t||Te(),He(this);var n=this.g.Z();this.X=n;t:if(Be(this)){var r=Gt(this.g);e="";var s=r.length,a=4==Ht(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ke(this),Ge(this);var o="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(c)){var u=c;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,Ie(12),Ke(this),Ge(this);break e}Ae(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,We(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=qe(this,o),e==Ve){4==d&&(this.s=4,Ie(14),n=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}if(e==Me){this.s=4,Ie(15),Ae(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Ae(this.i,this.l,e,null),We(this,e)}if(Be(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Ie(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),sn(h),h.M=!0,Ie(11))}}else Ae(this.i,this.l,o,"[Invalid Chunked Response]"),Ke(this),Ge(this)}else Ae(this.i,this.l,o,null),We(this,o);4==d&&Ke(this),this.o&&!this.J&&(4==d?cn(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=Ht(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(m(e[r]))continue;var n=_(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Ie(12)):(this.s=0,Ie(13)),Ke(this),Ge(this)}}}catch(d){}},Pe.prototype.cancel=function(){this.J=!0,Ke(this)},Pe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(Te(),Ie(17)),Ke(this),this.s=2,Ge(this)):$e(this,this.S-e)};var Qe=class{constructor(e,t){this.g=e,this.map=t}};function Je(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ye(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xe(e){return e.h?1:e.g?e.g.size:0}function Ze(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function et(e,t){e.g?e.g.add(t):e.h=t}function tt(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function nt(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function rt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}Je.prototype.cancel=function(){if(this.i=nt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var it=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function st(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof st){this.h=e.h,ot(this,e.j),this.o=e.o,this.g=e.g,ct(this,e.s),this.l=e.l;var t=e.i,n=new xt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),lt(this,n),this.m=e.m}else e&&(t=String(e).match(it))?(this.h=!1,ot(this,t[1]||"",!0),this.o=dt(t[2]||""),this.g=dt(t[3]||"",!0),ct(this,t[4]),this.l=dt(t[5]||"",!0),lt(this,t[6]||"",!0),this.m=dt(t[7]||"")):(this.h=!1,this.i=new xt(null,this.h))}function at(e){return new st(e)}function ot(e,t,n){e.j=n?dt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ct(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function lt(e,t,n){t instanceof xt?(e.i=t,function(e,t){t&&!e.j&&(_t(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(Et(this,t),Ct(this,n,e))},e)),e.j=t}(e.i,e.h)):(n||(t=pt(t,wt)),e.i=new xt(t,e.h))}function ut(e,t,n){e.i.set(t,n)}function ht(e){return ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function dt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function pt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,mt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function mt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}st.prototype.toString=function(){var e=[],t=this.j;t&&e.push(pt(t,gt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(pt(t,gt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(pt(n,"/"==n.charAt(0)?vt:yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",pt(n,bt)),e.join("")};var ft,gt=/[#\/\?@]/g,yt=/[#\?:]/g,vt=/[#\?]/g,wt=/[#\?@]/g,bt=/#/g;function xt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _t(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function Et(e,t){_t(e),t=It(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Tt(e,t){return _t(e),t=It(e,t),e.g.has(t)}function Ct(e,t,n){Et(e,t),0<n.length&&(e.i=null,e.g.set(It(e,t),d(n)),e.h+=n.length)}function It(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function St(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Nt(){this.g=new pe}function kt(e,t,n){const r=n||"";try{rt(e,function(e,n){let i=e;a(e)&&(i=he(e)),t.push(r+n+"="+encodeURIComponent(i))})}catch($f){throw t.push(r+"type="+encodeURIComponent("_badmap")),$f}}function At(e){this.l=e.Ub||null,this.j=e.eb||!1}function Rt(e,t){ne.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Dt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Ot(e){e.readyState=4,e.l=null,e.j=null,e.v=null,jt(e)}function jt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Pt(e){let t="";return v(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function Lt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Pt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ut(e,t,n))}function Mt(e){ne.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=xt.prototype).add=function(e,t){_t(this),this.i=null,e=It(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){_t(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){_t(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){_t(this);let t=[];if("string"==typeof e)Tt(this,e)&&(t=t.concat(this.g.get(It(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return _t(this),this.i=null,Tt(this,e=It(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},h(At,me),At.prototype.g=function(){return new Rt(this.l,this.j)},At.prototype.i=(ft={},function(){return ft}),h(Rt,ne),(e=Rt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,jt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ot(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,jt(this)),this.g&&(this.readyState=3,jt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ot(this):jt(this),3==this.readyState&&Dt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Ot(this))},e.Qa=function(e){this.g&&(this.response=e,Ot(this))},e.ga=function(){this.g&&Ot(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Rt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Mt,ne);var Vt=/^https?$/i,Ut=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Bt(e),zt(e)}function Bt(e){e.A||(e.A=!0,re(e,"complete"),re(e,"error"))}function qt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Ht(e)||2!=e.Z()))if(e.u&&4==Ht(e))se(e.Ea,0,e);else if(re(e,"readystatechange"),4==Ht(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var a=String(e.D).match(it)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),s=!Vt.test(a?a.toLowerCase():"")}n=s}if(n)re(e,"complete"),re(e,"success");else{e.m=6;try{var o=2<Ht(e)?e.g.statusText:""}catch(c){o=""}e.l=o+" ["+e.Z()+"]",Bt(e)}}finally{zt(e)}}}function zt(e,t){if(e.g){$t(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||re(e,"ready");try{n.onreadystatechange=r}catch($f){}}}function $t(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function Ht(e){return e.g?e.g.readyState:0}function Gt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Kt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wt(e){this.Aa=0,this.i=[],this.j=new ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kt("baseRetryDelayMs",5e3,e),this.cb=Kt("retryDelaySeedMs",1e4,e),this.Wa=Kt("forwardChannelMaxRetries",2,e),this.wa=Kt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Je(e&&e.concurrentRequestLimit),this.Da=new Nt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Qt(e){if(Yt(e),3==e.G){var t=e.U++,n=at(e.I);if(ut(n,"SID",e.K),ut(n,"RID",t),ut(n,"TYPE","terminate"),en(e,n),(t=new Pe(e,e.j,t)).L=2,t.v=ht(at(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=pn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}hn(e)}function Jt(e){e.g&&(sn(e),e.g.cancel(),e.g=null)}function Yt(e){Jt(e),e.u&&(i.clearTimeout(e.u),e.u=null),on(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Xt(e){if(!Ye(e.h)&&!e.s){e.s=!0;var t=e.Ga;S||A(),N||(S(),N=!0),k.add(t,e),e.B=0}}function Zt(e,t){var n;n=t?t.l:e.U++;const r=at(e.I);ut(r,"SID",e.K),ut(r,"RID",n),ut(r,"AID",e.T),en(e,r),e.m&&e.o&&Lt(r,e.m,e.o),n=new Pe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tn(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),et(e.h,n),Ue(n,r,t)}function en(e,t){e.H&&v(e.H,function(e,n){ut(t,n,e)}),e.l&&rt({},function(e,n){ut(t,n,e)})}function tn(e,t,n){n=Math.min(e.i.length,n);var r=e.l?l(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let o=0;o<n;o++){let n=i[o].g;const c=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),a=!1;else try{kt(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;S||A(),N||(S(),N=!0),k.add(t,e),e.v=0}}function rn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ne(l(e.Fa,e),ln(e,e.v)),e.v++,!0)}function sn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function an(e){e.g=new Pe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=at(e.qa);ut(t,"RID","rpc"),ut(t,"SID",e.K),ut(t,"AID",e.T),ut(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ut(t,"TO",e.ja),ut(t,"TYPE","xmlhttp"),en(e,t),e.m&&e.o&&Lt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ht(at(t)),n.m=null,n.P=!0,Fe(n,e)}function on(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function cn(e,t){var n=null;if(e.g==t){on(e),sn(e),e.g=null;var r=2}else{if(!Ze(e.h,t))return;n=t.D,tt(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;re(r=_e(),new Se(r,n)),Xt(e)}else nn(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Xe(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ne(l(e.Ga,e,t),ln(e,e.B)),e.B++,0)))}(e,t)||2==r&&rn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:un(e,5);break;case 4:un(e,10);break;case 3:un(e,6);break;default:un(e,2)}}function ln(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function un(e,t){if(e.j.info("Error code "+t),2==t){var n=l(e.fb,e),r=e.Xa;const t=!r;r=new st(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ot(r,"https"),ht(r),t?function(e,t){const n=new ke;if(i.Image){const r=new Image;r.onload=u(St,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(St,n,"TestLoadImage: error",!1,t,r),r.onabort=u(St,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(St,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new ke;const n=new AbortController,r=setTimeout(()=>{n.abort(),St(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?St(0,0,!0,t):St(0,0,!1,t)}).catch(()=>{clearTimeout(r),St(0,0,!1,t)})}(r.toString(),n)}else Ie(2);e.G=0,e.l&&e.l.sa(t),hn(e),Yt(e)}function hn(e){if(e.G=0,e.ka=[],e.l){const t=nt(e.h);0==t.length&&0==e.i.length||(p(e.ka,t),p(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function dn(e,t,n){var r=n instanceof st?at(n):new st(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ct(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var a=new st(null);r&&ot(a,r),t&&(a.g=t),s&&ct(a,s),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&ut(r,n,t),ut(r,"VER",e.la),en(e,r),r}function pn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Mt(new At({eb:n})):new Mt(e.pa)).Ha(e.J),t}function mn(){}function fn(){}function gn(e,t){ne.call(this),this.g=new Wt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new wn(this)}function yn(e){ve.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function vn(){we.call(this),this.status=1}function wn(e){this.g=e}(e=Mt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Re.g(),this.v=this.o?fe(this.o):fe(Re),this.g.onreadystatechange=l(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void Ft(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ut,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$t(this),this.u=!0,this.g.send(e),this.u=!1}catch(a){Ft(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,re(this,"complete"),re(this,"abort"),zt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zt(this,!0)),Mt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?qt(this):this.bb())},e.bb=function(){qt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch(ft){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(ft){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),de(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Wt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Ie(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=dn(this,null,this.W),Xt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Pe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),x(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tn(this,i,t),ut(n=at(this.I),"RID",e),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),en(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Pt(s)))+"&"+t:this.m&&Lt(n,this.m,s)),et(this.h,i),this.Ua&&ut(n,"TYPE","init"),this.P?(ut(n,"$req",t),ut(n,"SID","null"),i.T=!0,Ue(i,n,null)):Ue(i,n,t),this.G=2}}else 3==this.G&&(e?Zt(this,e):0==this.i.length||Ye(this.h)||Zt(this))},e.Fa=function(){if(this.u=null,an(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ne(l(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ie(10),Jt(this),an(this))},e.Za=function(){null!=this.C&&(this.C=null,Jt(this),rn(this),Ie(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=mn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new gn(e,t)},h(gn,ne),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){Qt(this.g)},gn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=he(e),e=n);t.i.push(new Qe(t.Ya++,e)),3==t.G&&Xt(t)},gn.prototype.N=function(){this.g.l=null,delete this.j,Qt(this.g),delete this.g,gn.aa.N.call(this)},h(yn,ve),h(vn,we),h(wn,mn),wn.prototype.ua=function(){re(this.g,"a")},wn.prototype.ta=function(e){re(this.g,new yn(e))},wn.prototype.sa=function(e){re(this.g,new vn)},wn.prototype.ra=function(){re(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,pa=function(){return new fn},da=function(){return _e()},ha=be,ua={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,la=De,Oe.COMPLETE="complete",ca=Oe,ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",ne.prototype.listen=ne.prototype.K,oa=ge,Mt.prototype.listenOnce=Mt.prototype.L,Mt.prototype.getLastError=Mt.prototype.Ka,Mt.prototype.getLastErrorCode=Mt.prototype.Ba,Mt.prototype.getStatus=Mt.prototype.Z,Mt.prototype.getResponseJson=Mt.prototype.Oa,Mt.prototype.getResponseText=Mt.prototype.oa,Mt.prototype.send=Mt.prototype.ea,Mt.prototype.setWithCredentials=Mt.prototype.Ha,aa=Mt}).apply(void 0!==ma?ma:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const fa="@firebase/firestore",ga="4.9.0";
/**
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
 */class ya{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ya.UNAUTHENTICATED=new ya(null),ya.GOOGLE_CREDENTIALS=new ya("google-credentials-uid"),ya.FIRST_PARTY=new ya("first-party-uid"),ya.MOCK_USER=new ya("mock-user");
/**
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
 */
let va="12.0.0";
/**
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
 */const wa=new Mt("@firebase/firestore");function ba(){return wa.logLevel}function xa(e,...t){if(wa.logLevel<=Rt.DEBUG){const n=t.map(Ta);wa.debug(`Firestore (${va}): ${e}`,...n)}}function _a(e,...t){if(wa.logLevel<=Rt.ERROR){const n=t.map(Ta);wa.error(`Firestore (${va}): ${e}`,...n)}}function Ea(e,...t){if(wa.logLevel<=Rt.WARN){const n=t.map(Ta);wa.warn(`Firestore (${va}): ${e}`,...n)}}function Ta(e){if("string"==typeof e)return e;try{
/**
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
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
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
 */function Ca(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Ia(e,r,n)}function Ia(e,t,n){let r=`FIRESTORE (${va}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(i){r+=" CONTEXT: "+n}throw _a(r),new Error(r)}function Sa(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||Ia(t,i,r)}function Na(e,t){return e}
/**
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
 */const ka={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Aa extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Ra{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
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
 */class Da{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ya.UNAUTHENTICATED))}shutdown(){}}class ja{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Pa{constructor(e){this.t=e,this.currentUser=ya.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Sa(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Ra;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ra,e.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{xa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(xa("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ra)}},0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(xa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Sa("string"==typeof t.accessToken,31837,{l:t}),new Da(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Sa(null===e||"string"==typeof e,2055,{h:e}),new ya(e)}}class La{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ya.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ma{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new La(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ya.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Va{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ua{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Sa(void 0===this.o,3512);const n=e=>{null!=e.error&&xa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,xa("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{xa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):xa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Va(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(Sa("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new Va(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function Fa(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class Ba{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Fa(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function qa(e,t){return e<t?-1:e>t?1:0}function za(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.charAt(r),i=t.charAt(r);if(n!==i)return Ga(n)===Ga(i)?qa(n,i):Ga(n)?1:-1}return qa(e.length,t.length)}const $a=55296,Ha=57343;function Ga(e){const t=e.charCodeAt(0);return t>=$a&&t<=Ha}function Ka(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
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
 */const Wa="__name__";class Qa{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ca(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&Ca(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Qa.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qa?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Qa.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return qa(e.length,t.length)}static compareSegments(e,t){const n=Qa.isNumericId(e),r=Qa.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Qa.extractNumericId(e).compare(Qa.extractNumericId(t)):za(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ra.fromString(e.substring(4,e.length-2))}}class Ja extends Qa{construct(e,t,n){return new Ja(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Aa(ka.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new Ja(t)}static emptyPath(){return new Ja([])}}const Ya=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xa extends Qa{construct(e,t,n){return new Xa(e,t,n)}static isValidIdentifier(e){return Ya.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xa.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Wa}static keyField(){return new Xa([Wa])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Aa(ka.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Aa(ka.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Aa(ka.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Aa(ka.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xa(t)}static emptyPath(){return new Xa([])}}
/**
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
 */class Za{constructor(e){this.path=e}static fromPath(e){return new Za(Ja.fromString(e))}static fromName(e){return new Za(Ja.fromString(e).popFirst(5))}static empty(){return new Za(Ja.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ja.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ja.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Za(new Ja(e.slice()))}}
/**
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
 */function eo(e,t,n){if(!n)throw new Aa(ka.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function to(e){if(!Za.isDocumentKey(e))throw new Aa(ka.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function no(e){if(Za.isDocumentKey(e))throw new Aa(ka.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ro(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function io(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ca(12329,{type:typeof e})}function so(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Aa(ka.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=io(e);throw new Aa(ka.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ao(e,t){const n={typeString:e};return t&&(n.value=t),n}function oo(e,t){if(!ro(e))throw new Aa(ka.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new Aa(ka.INVALID_ARGUMENT,n);return!0}
/**
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
 */const co=-62135596800,lo=1e6;class uo{static now(){return uo.fromMillis(Date.now())}static fromDate(e){return uo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*lo);return new uo(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Aa(ka.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Aa(ka.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<co)throw new Aa(ka.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Aa(ka.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lo}_compareTo(e){return this.seconds===e.seconds?qa(this.nanoseconds,e.nanoseconds):qa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:uo._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oo(e,uo._jsonSchema))return new uo(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-co;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}uo._jsonSchemaVersion="firestore/timestamp/1.0",uo._jsonSchema={type:ao("string",uo._jsonSchemaVersion),seconds:ao("number"),nanoseconds:ao("number")};
/**
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
 */
class ho{static fromTimestamp(e){return new ho(e)}static min(){return new ho(new uo(0,0))}static max(){return new ho(new uo(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function po(e){return new mo(e.readTime,e.key,-1)}class mo{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new mo(ho.min(),Za.empty(),-1)}static max(){return new mo(ho.max(),Za.empty(),-1)}}function fo(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Za.comparator(e.documentKey,t.documentKey),0!==n?n:qa(e.largestBatchId,t.largestBatchId)
/**
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
 */)}class go{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
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
 */async function yo(e){if(e.code!==ka.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;xa("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class vo{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ca(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new vo((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof vo?t:vo.resolve(t)}catch(t){return vo.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):vo.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):vo.reject(t)}static resolve(e){return new vo((t,n)=>{t(e)})}static reject(e){return new vo((t,n)=>{n(e)})}static waitFor(e){return new vo((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=vo.resolve(!1);for(const n of e)t=t.next(e=>e?vo.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new vo((n,r)=>{const i=e.length,s=new Array(i);let a=0;for(let o=0;o<i;o++){const c=o;t(e[c]).next(e=>{s[c]=e,++a,a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new vo((n,r)=>{const i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function wo(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */class bo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bo.ce=-1;function xo(e){return null==e}function _o(e){return 0===e&&1/e==-1/0}function Eo(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function To(e){return e+""}
/**
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
 */function Co(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Io(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function So(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class No{constructor(e,t){this.comparator=e,this.root=t||Ao.EMPTY}insert(e,t){return new No(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ao.BLACK,null,null))}remove(e){return new No(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ao.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ao{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ao.RED,this.left=null!=r?r:Ao.EMPTY,this.right=null!=i?i:Ao.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ao(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ao.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ao.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ao.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ao.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ca(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ca(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ca(27949);return e+(this.isRed()?0:1)}}Ao.EMPTY=null,Ao.RED=!0,Ao.BLACK=!1,Ao.EMPTY=new class{constructor(){this.size=0}get key(){throw Ca(57766)}get value(){throw Ca(16141)}get color(){throw Ca(16727)}get left(){throw Ca(29726)}get right(){throw Ca(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ao(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Ro{constructor(e){this.comparator=e,this.data=new No(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Do(this.data.getIterator())}getIteratorFrom(e){return new Do(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ro))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ro(this.comparator);return t.data=e,t}}class Do{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class Oo{constructor(e){this.fields=e,e.sort(Xa.comparator)}static empty(){return new Oo([])}unionWith(e){let t=new Ro(Xa.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Oo(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ka(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
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
 */class jo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class Po{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new jo("Invalid base64 string: "+t):t}}(e);return new Po(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Po(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return qa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Po.EMPTY_BYTE_STRING=new Po("");const Lo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mo(e){if(Sa(!!e,39018),"string"==typeof e){let t=0;const n=Lo.exec(e);if(Sa(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vo(e.seconds),nanos:Vo(e.nanos)}}function Vo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Uo(e){return"string"==typeof e?Po.fromBase64String(e):Po.fromUint8Array(e)}
/**
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
 */const Fo="server_timestamp",Bo="__type__",qo="__previous_value__",zo="__local_write_time__";function $o(e){var t,n;return(null==(n=((null==(t=null==e?void 0:e.mapValue)?void 0:t.fields)||{})[Bo])?void 0:n.stringValue)===Fo}function Ho(e){const t=e.mapValue.fields[qo];return $o(t)?Ho(t):t}function Go(e){const t=Mo(e.mapValue.fields[zo].timestampValue);return new uo(t.seconds,t.nanos)}
/**
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
 */class Ko{constructor(e,t,n,r,i,s,a,o,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=c,this.isUsingEmulator=l}}const Wo="(default)";class Qo{constructor(e,t){this.projectId=e,this.database=t||Wo}static empty(){return new Qo("","")}get isDefaultDatabase(){return this.database===Wo}isEqual(e){return e instanceof Qo&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const Jo="__type__",Yo="__max__",Xo={fields:{__type__:{stringValue:Yo}}},Zo="__vector__",ec="value";function tc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$o(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Yo}
/**
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
 */(e)?9007199254740991:function(e){var t,n;const r=null==(n=((null==(t=null==e?void 0:e.mapValue)?void 0:t.fields)||{})[Jo])?void 0:n.stringValue;return r===Zo}(e)?10:11:Ca(28295,{value:e})}function nc(e,t){if(e===t)return!0;const n=tc(e);if(n!==tc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Go(e).isEqual(Go(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Mo(e.timestampValue),r=Mo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Uo(e.bytesValue).isEqual(Uo(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Vo(e.geoPointValue.latitude)===Vo(t.geoPointValue.latitude)&&Vo(e.geoPointValue.longitude)===Vo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Vo(e.integerValue)===Vo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Vo(e.doubleValue),r=Vo(t.doubleValue);return n===r?_o(n)===_o(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ka(e.arrayValue.values||[],t.arrayValue.values||[],nc);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Co(n)!==Co(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!nc(n[i],r[i])))return!1;return!0}(e,t);default:return Ca(52216,{left:e})}var r}function rc(e,t){return void 0!==(e.values||[]).find(e=>nc(e,t))}function ic(e,t){if(e===t)return 0;const n=tc(e),r=tc(t);if(n!==r)return qa(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return qa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Vo(e.integerValue||e.doubleValue),r=Vo(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return sc(e.timestampValue,t.timestampValue);case 4:return sc(Go(e),Go(t));case 5:return za(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Uo(e),r=Uo(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=qa(n[i],r[i]);if(0!==e)return e}return qa(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=qa(Vo(e.latitude),Vo(t.latitude));return 0!==n?n:qa(Vo(e.longitude),Vo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return ac(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const a=e.fields||{},o=t.fields||{},c=null==(n=a[ec])?void 0:n.arrayValue,l=null==(r=o[ec])?void 0:r.arrayValue,u=qa((null==(i=null==c?void 0:c.values)?void 0:i.length)||0,(null==(s=null==l?void 0:l.values)?void 0:s.length)||0);return 0!==u?u:ac(c,l)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Xo&&t===Xo)return 0;if(e===Xo)return 1;if(t===Xo)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){const e=za(r[a],s[a]);if(0!==e)return e;const t=ic(n[r[a]],i[s[a]]);if(0!==t)return t}return qa(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Ca(23264,{he:n})}}function sc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return qa(e,t);const n=Mo(e),r=Mo(t),i=qa(n.seconds,r.seconds);return 0!==i?i:qa(n.nanos,r.nanos)}function ac(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ic(n[i],r[i]);if(e)return e}return qa(n.length,r.length)}function oc(e){return cc(e)}function cc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Mo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Uo(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Za.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=cc(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${cc(e.fields[i])}`;return n+"}"}(e.mapValue):Ca(61005,{value:e})}function lc(e){switch(tc(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ho(e);return t?16+lc(t):16;case 5:return 2*e.stringValue.length;case 6:return Uo(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,t)=>e+lc(t),0);case 10:case 11:return function(e){let t=0;return Io(e.fields,(e,n)=>{t+=e.length+lc(n)}),t}(e.mapValue);default:throw Ca(13486,{value:e})}}function uc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function hc(e){return!!e&&"integerValue"in e}function dc(e){return!!e&&"arrayValue"in e}function pc(e){return!!e&&"nullValue"in e}function mc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function fc(e){return!!e&&"mapValue"in e}function gc(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return Io(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=gc(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gc(e.arrayValue.values[n]);return t}return{...e}}class yc{constructor(e){this.value=e}static empty(){return new yc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!fc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gc(t)}setAll(e){let t=Xa.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=gc(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());fc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];fc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Io(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new yc(gc(this.value))}}function vc(e){const t=[];return Io(e.fields,(e,n)=>{const r=new Xa([e]);if(fc(n)){const e=vc(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new Oo(t)
/**
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
 */}class wc{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new wc(e,0,ho.min(),ho.min(),ho.min(),yc.empty(),0)}static newFoundDocument(e,t,n,r){return new wc(e,1,t,ho.min(),n,r,0)}static newNoDocument(e,t){return new wc(e,2,t,ho.min(),ho.min(),yc.empty(),0)}static newUnknownDocument(e,t){return new wc(e,3,t,ho.min(),ho.min(),yc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ho.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ho.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof wc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class bc{constructor(e,t){this.position=e,this.inclusive=t}}function xc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Za.comparator(Za.fromName(a.referenceValue),n.key):ic(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function _c(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!nc(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class Ec{constructor(e,t="asc"){this.field=e,this.dir=t}}function Tc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class Cc{}class Ic extends Cc{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Oc(e,t,n):"array-contains"===t?new Mc(e,n):"in"===t?new Vc(e,n):"not-in"===t?new Uc(e,n):"array-contains-any"===t?new Fc(e,n):new Ic(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new jc(e,n):new Pc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(ic(t,this.value)):null!==t&&tc(this.value)===tc(t)&&this.matchesComparison(ic(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ca(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sc extends Cc{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Sc(e,t)}matches(e){return Nc(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Nc(e){return"and"===e.op}function kc(e){return function(e){for(const t of e.filters)if(t instanceof Sc)return!1;return!0}(e)&&Nc(e)}function Ac(e){if(e instanceof Ic)return e.field.canonicalString()+e.op.toString()+oc(e.value);if(kc(e))return e.filters.map(e=>Ac(e)).join(",");{const t=e.filters.map(e=>Ac(e)).join(",");return`${e.op}(${t})`}}function Rc(e,t){return e instanceof Ic?(n=e,(r=t)instanceof Ic&&n.op===r.op&&n.field.isEqual(r.field)&&nc(n.value,r.value)):e instanceof Sc?function(e,t){return t instanceof Sc&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Rc(n,t.filters[r]),!0)}(e,t):void Ca(19439);var n,r}function Dc(e){return e instanceof Ic?`${(t=e).field.canonicalString()} ${t.op} ${oc(t.value)}`:e instanceof Sc?function(e){return e.op.toString()+" {"+e.getFilters().map(Dc).join(" ,")+"}"}(e):"Filter";var t}class Oc extends Ic{constructor(e,t,n){super(e,t,n),this.key=Za.fromName(n.referenceValue)}matches(e){const t=Za.comparator(e.key,this.key);return this.matchesComparison(t)}}class jc extends Ic{constructor(e,t){super(e,"in",t),this.keys=Lc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pc extends Ic{constructor(e,t){super(e,"not-in",t),this.keys=Lc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Lc(e,t){var n;return((null==(n=t.arrayValue)?void 0:n.values)||[]).map(e=>Za.fromName(e.referenceValue))}class Mc extends Ic{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return dc(t)&&rc(t.arrayValue,this.value)}}class Vc extends Ic{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&rc(this.value.arrayValue,t)}}class Uc extends Ic{constructor(e,t){super(e,"not-in",t)}matches(e){if(rc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!rc(this.value.arrayValue,t)}}class Fc extends Ic{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!dc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rc(this.value.arrayValue,e))}}
/**
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
 */class Bc{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Te=null}}function qc(e,t=null,n=[],r=[],i=null,s=null,a=null){return new Bc(e,t,n,r,i,s,a)}function zc(e){const t=Na(e);if(null===t.Te){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Ac(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),xo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>oc(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>oc(e)).join(",")),t.Te=e}return t.Te}function $c(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Tc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Rc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_c(e.startAt,t.startAt)&&_c(e.endAt,t.endAt)}function Hc(e){return Za.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */class Gc{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Kc(e){return new Gc(e)}function Wc(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Qc(e){return null!==e.collectionGroup}function Jc(e){const t=Na(e);if(null===t.Ie){t.Ie=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ie.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Ro(Xa.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ie.push(new Ec(r,n))}),e.has(Xa.keyField().canonicalString())||t.Ie.push(new Ec(Xa.keyField(),n))}return t.Ie}function Yc(e){const t=Na(e);return t.Ee||(t.Ee=function(e,t){if("F"===e.limitType)return qc(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Ec(e.field,t)});const n=e.endAt?new bc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new bc(e.startAt.position,e.startAt.inclusive):null;return qc(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Jc(e))),t.Ee}function Xc(e,t){const n=e.filters.concat([t]);return new Gc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Zc(e,t,n){return new Gc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function el(e,t){return $c(Yc(e),Yc(t))&&e.limitType===t.limitType}function tl(e){return`${zc(Yc(e))}|lt:${e.limitType}`}function nl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Dc(e)).join(", ")}]`),xo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>oc(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>oc(e)).join(",")),`Target(${t})`}(Yc(e))}; limitType=${e.limitType})`}function rl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Za.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Jc(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=xc(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Jc(n),r)||n.endAt&&!function(e,t,n){const r=xc(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Jc(n),r)));var n,r}function il(e){return(t,n)=>{let r=!1;for(const i of Jc(e)){const e=sl(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function sl(e,t,n){const r=e.field.isKeyField()?Za.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ic(r,i):Ca(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ca(19790,{direction:e.dir})}}
/**
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
 */class al{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Io(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return So(this.inner)}size(){return this.innerSize}}
/**
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
 */const ol=new No(Za.comparator);function cl(){return ol}const ll=new No(Za.comparator);function ul(...e){let t=ll;for(const n of e)t=t.insert(n.key,n);return t}function hl(e){let t=ll;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function dl(){return ml()}function pl(){return ml()}function ml(){return new al(e=>e.toString(),(e,t)=>e.isEqual(t))}const fl=new No(Za.comparator),gl=new Ro(Za.comparator);function yl(...e){let t=gl;for(const n of e)t=t.add(n);return t}const vl=new Ro(qa);
/**
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
 */
function wl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_o(t)?"-0":t}}function bl(e){return{integerValue:""+e}}function xl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!_o(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */(t)?bl(t):wl(e,t)}
/**
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
 */class _l{constructor(){this._=void 0}}function El(e,t,n){return e instanceof Il?function(e,t){const n={fields:{[Bo]:{stringValue:Fo},[zo]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&$o(t)&&(t=Ho(t)),t&&(n.fields[qo]=t),{mapValue:n}}(n,t):e instanceof Sl?Nl(e,t):e instanceof kl?Al(e,t):function(e,t){const n=Cl(e,t),r=Dl(n)+Dl(e.Ae);return hc(n)&&hc(e.Ae)?bl(r):wl(e.serializer,r)}(e,t)}function Tl(e,t,n){return e instanceof Sl?Nl(e,t):e instanceof kl?Al(e,t):n}function Cl(e,t){return e instanceof Rl?hc(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class Il extends _l{}class Sl extends _l{constructor(e){super(),this.elements=e}}function Nl(e,t){const n=Ol(t);for(const r of e.elements)n.some(e=>nc(e,r))||n.push(r);return{arrayValue:{values:n}}}class kl extends _l{constructor(e){super(),this.elements=e}}function Al(e,t){let n=Ol(t);for(const r of e.elements)n=n.filter(e=>!nc(e,r));return{arrayValue:{values:n}}}class Rl extends _l{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Dl(e){return Vo(e.integerValue||e.doubleValue)}function Ol(e){return dc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class jl{constructor(e,t){this.field=e,this.transform=t}}class Pl{constructor(e,t){this.version=e,this.transformResults=t}}class Ll{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ll}static exists(e){return new Ll(void 0,e)}static updateTime(e){return new Ll(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Vl{}function Ul(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ql(e.key,Ll.none()):new $l(e.key,e.data,Ll.none());{const n=e.data,r=yc.empty();let i=new Ro(Xa.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Hl(e.key,r,new Oo(i.toArray()),Ll.none())}}function Fl(e,t,n){var r;e instanceof $l?function(e,t,n){const r=e.value.clone(),i=Kl(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Hl?function(e,t,n){if(!Ml(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Kl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Gl(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Bl(e,t,n,r){return e instanceof $l?function(e,t,n,r){if(!Ml(e.precondition,t))return n;const i=e.value.clone(),s=Wl(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Hl?function(e,t,n,r){if(!Ml(e.precondition,t))return n;const i=Wl(e.fieldTransforms,r,t),s=t.data;return s.setAll(Gl(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(i=t,s=n,Ml(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function ql(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Cl(r.transform,e||null);null!=i&&(null===n&&(n=yc.empty()),n.set(r.field,i))}return n||null}function zl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ka(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Sl&&r instanceof Sl||n instanceof kl&&r instanceof kl?Ka(n.elements,r.elements,nc):n instanceof Rl&&r instanceof Rl?nc(n.Ae,r.Ae):n instanceof Il&&r instanceof Il);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class $l extends Vl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Hl extends Vl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Gl(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Kl(e,t,n){const r=new Map;Sa(e.length===n.length,32656,{Re:n.length,Ve:e.length});for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,Tl(a,o,n[i]))}return r}function Wl(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,El(e,s,t))}return r}class Ql extends Vl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jl extends Vl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Yl{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Fl(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Bl(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Bl(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=pl();return this.mutations.forEach(r=>{const i=e.get(r.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;const o=Ul(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(ho.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),yl())}isEqual(e){return this.batchId===e.batchId&&Ka(this.mutations,e.mutations,(e,t)=>zl(e,t))&&Ka(this.baseMutations,e.baseMutations,(e,t)=>zl(e,t))}}class Xl{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Sa(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=fl;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Xl(e,t,n,r)}}
/**
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
 */class Zl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class eu{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var tu,nu;function ru(e){if(void 0===e)return _a("GRPC error has no .code"),ka.UNKNOWN;switch(e){case tu.OK:return ka.OK;case tu.CANCELLED:return ka.CANCELLED;case tu.UNKNOWN:return ka.UNKNOWN;case tu.DEADLINE_EXCEEDED:return ka.DEADLINE_EXCEEDED;case tu.RESOURCE_EXHAUSTED:return ka.RESOURCE_EXHAUSTED;case tu.INTERNAL:return ka.INTERNAL;case tu.UNAVAILABLE:return ka.UNAVAILABLE;case tu.UNAUTHENTICATED:return ka.UNAUTHENTICATED;case tu.INVALID_ARGUMENT:return ka.INVALID_ARGUMENT;case tu.NOT_FOUND:return ka.NOT_FOUND;case tu.ALREADY_EXISTS:return ka.ALREADY_EXISTS;case tu.PERMISSION_DENIED:return ka.PERMISSION_DENIED;case tu.FAILED_PRECONDITION:return ka.FAILED_PRECONDITION;case tu.ABORTED:return ka.ABORTED;case tu.OUT_OF_RANGE:return ka.OUT_OF_RANGE;case tu.UNIMPLEMENTED:return ka.UNIMPLEMENTED;case tu.DATA_LOSS:return ka.DATA_LOSS;default:return Ca(39323,{code:e})}}(nu=tu||(tu={}))[nu.OK=0]="OK",nu[nu.CANCELLED=1]="CANCELLED",nu[nu.UNKNOWN=2]="UNKNOWN",nu[nu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nu[nu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nu[nu.NOT_FOUND=5]="NOT_FOUND",nu[nu.ALREADY_EXISTS=6]="ALREADY_EXISTS",nu[nu.PERMISSION_DENIED=7]="PERMISSION_DENIED",nu[nu.UNAUTHENTICATED=16]="UNAUTHENTICATED",nu[nu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nu[nu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nu[nu.ABORTED=10]="ABORTED",nu[nu.OUT_OF_RANGE=11]="OUT_OF_RANGE",nu[nu.UNIMPLEMENTED=12]="UNIMPLEMENTED",nu[nu.INTERNAL=13]="INTERNAL",nu[nu.UNAVAILABLE=14]="UNAVAILABLE",nu[nu.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const iu=new ra([4294967295,4294967295],0);function su(e){const t=(new TextEncoder).encode(e),n=new ia;return n.update(t),new Uint8Array(n.digest())}function au(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ra([n,r],0),new ra([i,s],0)]}class ou{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new cu(`Invalid padding: ${t}`);if(n<0)throw new cu(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new cu(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new cu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ra.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(ra.fromNumber(n)));return 1===r.compare(iu)&&(r=new ra([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;const t=su(e),[n,r]=au(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);if(!this.we(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new ou(i,r,t);return n.forEach(e=>s.insert(e)),s}insert(e){if(0===this.ge)return;const t=su(e),[n,r]=au(t);for(let i=0;i<this.hashCount;i++){const e=this.ye(n,r,i);this.Se(e)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class cu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class lu{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,uu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new lu(ho.min(),r,new No(qa),cl(),yl())}}class uu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new uu(n,t,yl(),yl(),yl())}}
/**
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
 */class hu{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class du{constructor(e,t){this.targetId=e,this.Ce=t}}class pu{constructor(e,t,n=Po.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class mu{constructor(){this.ve=0,this.Fe=yu(),this.Me=Po.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=yl(),t=yl(),n=yl();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ca(38017,{changeType:i})}}),new uu(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=yu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Sa(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class fu{constructor(e){this.Ge=e,this.ze=new Map,this.je=cl(),this.Je=gu(),this.He=gu(),this.Ye=new No(qa)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:Ca(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.rt(n)&&t(n)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Hc(i))if(0===n){const e=new Za(i.path);this.et(t,e,wc.newNoDocument(e,ho.min()))}else Sa(1===n,20013,{expectedCount:n});else{const r=this._t(t);if(r!==n){const n=this.ut(e),i=n?this.ct(n,e,r):1;if(0!==i){this.it(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,e)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,a;try{s=Uo(n).toUint8Array()}catch(o){if(o instanceof jo)return Ea("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{a=new ou(s,r,i)}catch(o){return Ea(o instanceof cu?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return 0===a.ge?null:a}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.et(t,n,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Hc(i.target)){const t=new Za(i.target.path);this.It(t).has(r)||this.Et(r,t)||this.et(r,t,wc.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=yl();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));const r=new lu(e,t,this.Ye,this.je,n);return this.je=cl(),this.Je=gu(),this.He=gu(),this.Ye=new No(qa),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new mu,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ro(qa),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ro(qa),this.Je=this.Je.insert(e,t)),t}rt(e){const t=null!==this.ot(e);return t||xa("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mu),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function gu(){return new No(Za.comparator)}function yu(){return new No(Za.comparator)}const vu={asc:"ASCENDING",desc:"DESCENDING"},wu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bu={and:"AND",or:"OR"};class xu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _u(e,t){return e.useProto3Json||xo(t)?t:{value:t}}function Eu(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Cu(e,t){return Eu(e,t.toTimestamp())}function Iu(e){return Sa(!!e,49232),ho.fromTimestamp(function(e){const t=Mo(e);return new uo(t.seconds,t.nanos)}(e))}function Su(e,t){return Nu(e,t).canonicalString()}function Nu(e,t){const n=(r=e,new Ja(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function ku(e){const t=Ja.fromString(e);return Sa(Ku(t),10190,{key:t.toString()}),t}function Au(e,t){return Su(e.databaseId,t.path)}function Ru(e,t){const n=ku(t);if(n.get(1)!==e.databaseId.projectId)throw new Aa(ka.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Aa(ka.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Za(ju(n))}function Du(e,t){return Su(e.databaseId,t)}function Ou(e){return new Ja(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ju(e){return Sa(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function Pu(e,t,n){return{name:Au(e,t),fields:n.value.mapValue.fields}}function Lu(e,t){return{documents:[Du(e,t.path)]}}function Mu(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Du(e,i);const s=function(e){if(0!==e.length)return Hu(Sc.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(e){if(0!==e.length)return e.map(e=>{return{field:zu((t=e).field),direction:Fu(t.dir)};var t})}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=_u(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ft:n,parent:i};var c}function Vu(e){let t=function(e){const t=ku(e);return 4===t.length?Ja.emptyPath():ju(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Sa(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Uu(e);return t instanceof Sc&&kc(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(e=>{return new Ec($u((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,xo(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new bc(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new bc(n,t)}(n.endAt)),function(e,t,n,r,i,s,a,o){return new Gc(e,t,n,r,i,s,a,o)}(t,i,a,s,o,"F",c,l)}function Uu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=$u(e.unaryFilter.field);return Ic.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=$u(e.unaryFilter.field);return Ic.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$u(e.unaryFilter.field);return Ic.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$u(e.unaryFilter.field);return Ic.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ca(61313);default:return Ca(60726)}}(e):void 0!==e.fieldFilter?(t=e,Ic.create($u(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ca(58110);default:return Ca(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Sc.create(e.compositeFilter.filters.map(e=>Uu(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ca(1026)}}(e.compositeFilter.op))}(e):Ca(30097,{filter:e});var t}function Fu(e){return vu[e]}function Bu(e){return wu[e]}function qu(e){return bu[e]}function zu(e){return{fieldPath:e.canonicalString()}}function $u(e){return Xa.fromServerFormat(e.fieldPath)}function Hu(e){return e instanceof Ic?function(e){if("=="===e.op){if(mc(e.value))return{unaryFilter:{field:zu(e.field),op:"IS_NAN"}};if(pc(e.value))return{unaryFilter:{field:zu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(mc(e.value))return{unaryFilter:{field:zu(e.field),op:"IS_NOT_NAN"}};if(pc(e.value))return{unaryFilter:{field:zu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zu(e.field),op:Bu(e.op),value:e.value}}}(e):e instanceof Sc?function(e){const t=e.getFilters().map(e=>Hu(e));return 1===t.length?t[0]:{compositeFilter:{op:qu(e.op),filters:t}}}(e):Ca(54877,{filter:e})}function Gu(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ku(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class Wu{constructor(e,t,n,r,i=ho.min(),s=ho.min(),a=Po.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new Wu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class Qu{constructor(e){this.yt=e}}function Ju(e){const t=Vu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Zc(t,t.limit,"L"):t}
/**
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
 */class Yu{constructor(){this.Cn=new Xu}addToCollectionParentIndex(e,t){return this.Cn.add(t),vo.resolve()}getCollectionParents(e,t){return vo.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return vo.resolve()}deleteFieldIndex(e,t){return vo.resolve()}deleteAllFieldIndexes(e){return vo.resolve()}createTargetIndexes(e,t){return vo.resolve()}getDocumentsMatchingTarget(e,t){return vo.resolve(null)}getIndexType(e,t){return vo.resolve(0)}getFieldIndexes(e,t){return vo.resolve([])}getNextCollectionGroupToUpdate(e){return vo.resolve(null)}getMinOffset(e,t){return vo.resolve(mo.min())}getMinOffsetFromCollectionGroup(e,t){return vo.resolve(mo.min())}updateCollectionGroup(e,t,n){return vo.resolve()}updateIndexEntries(e,t){return vo.resolve()}}class Xu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ro(Ja.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ro(Ja.comparator)).toArray()}}
/**
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
 */const Zu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eh=41943040;class th{static withCacheSize(e){return new th(e,th.DEFAULT_COLLECTION_PERCENTILE,th.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */th.DEFAULT_COLLECTION_PERCENTILE=10,th.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,th.DEFAULT=new th(eh,th.DEFAULT_COLLECTION_PERCENTILE,th.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),th.DISABLED=new th(-1,0,0);
/**
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
 */
class nh{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new nh(0)}static cr(){return new nh(-1)}}
/**
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
 */const rh="LruGarbageCollector";function ih([e,t],[n,r]){const i=qa(e,n);return 0===i?qa(t,r):i}class sh{constructor(e){this.Ir=e,this.buffer=new Ro(ih),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();ih(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ah{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){xa(rh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){wo(e)?xa(rh,"Ignoring IndexedDB error during garbage collection: ",e):await yo(e)}await this.Vr(3e5)})}}class oh{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return vo.resolve(bo.ce);const n=new sh(t);return this.mr.forEachTarget(e,e=>n.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>n.Ar(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(xa("LruGarbageCollector","Garbage collection skipped; disabled"),vo.resolve(Zu)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(xa("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,s,a,o,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(xa("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),ba()<=Rt.DEBUG&&xa("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+`ms\n\tRemoved ${i} targets in `+(o-a)+`ms\n\tRemoved ${e} documents in `+(c-o)+`ms\nTotal Duration: ${c-l}ms`),vo.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}
/**
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
 */
class ch{constructor(){this.changes=new al(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,wc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?vo.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */class lh{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class uh{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&Bl(n.mutation,e,Oo.empty(),uo.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,yl()).next(()=>t))}getLocalViewOfDocuments(e,t,n=yl()){const r=dl();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=ul();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=dl();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,yl()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=cl();const s=ml(),a=ml();return t.forEach((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Hl)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),Bl(a.mutation,t,a.mutation.getFieldMask(),uo.now())):s.set(t.key,Oo.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>a.set(e,new lh(t,s.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){const n=ml();let r=new No((e,t)=>e-t),i=yl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const i of e)i.keys().forEach(e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||Oo.empty();a=i.applyToLocalView(s,a),n.set(e,a);const o=(r.get(i.batchId)||yl()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,c=r.value,l=pl();c.forEach(e=>{if(!i.has(e)){const r=Ul(t.get(e),n.get(e));null!==r&&l.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,l))}return vo.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Za.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Qc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):vo.resolve(dl());let a=-1,o=i;return s.next(t=>vo.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?vo.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,yl())).next(e=>({batchId:a,changes:hl(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Za(t)).next(e=>{let t=ul();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=ul();return this.indexManager.getCollectionParents(e,i).next(a=>vo.forEach(a,a=>{const o=(c=t,l=a.child(i),new Gc(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,l;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,wc.newInvalidDocument(r)))});let n=ul();return e.forEach((e,r)=>{const s=i.get(e);void 0!==s&&Bl(s.mutation,r,Oo.empty(),uo.now()),rl(t,r)&&(n=n.insert(e,r))}),n})}}
/**
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
 */class hh{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return vo.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,{id:(n=t).id,version:n.version,createTime:Iu(n.createTime)}),vo.resolve();var n}getNamedQuery(e,t){return vo.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,{name:(n=t).name,query:Ju(n.bundledQuery),readTime:Iu(n.readTime)}),vo.resolve();var n}}
/**
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
 */class dh{constructor(){this.overlays=new No(Za.comparator),this.qr=new Map}getOverlay(e,t){return vo.resolve(this.overlays.get(t))}getOverlays(e,t){const n=dl();return vo.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.St(e,t,r)}),vo.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(n)),vo.resolve()}getOverlaysForCollection(e,t,n){const r=dl(),i=t.length+1,s=new Za(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return vo.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new No((e,t)=>e-t);const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=dl(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=dl(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return vo.resolve(a)}St(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Zl(t,n));let i=this.qr.get(t);void 0===i&&(i=yl(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}
/**
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
 */class ph{constructor(){this.sessionToken=Po.EMPTY_BYTE_STRING}getSessionToken(e){return vo.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,vo.resolve()}}
/**
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
 */class mh{constructor(){this.Qr=new Ro(fh.$r),this.Ur=new Ro(fh.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new fh(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new fh(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){const t=new Za(new Ja([])),n=new fh(t,e),r=new fh(t,e+1),i=[];return this.Ur.forEachInRange([n,r],e=>{this.Gr(e),i.push(e.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Za(new Ja([])),n=new fh(t,e),r=new fh(t,e+1);let i=yl();return this.Ur.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){const t=new fh(e,0),n=this.Qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class fh{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Za.comparator(e.key,t.key)||qa(e.Yr,t.Yr)}static Kr(e,t){return qa(e.Yr,t.Yr)||Za.comparator(e.key,t.key)}}
/**
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
 */class gh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ro(fh.$r)}checkEmpty(e){return vo.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Yl(i,t,n,r);this.mutationQueue.push(s);for(const a of r)this.Zr=this.Zr.add(new fh(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return vo.resolve(s)}lookupMutationBatch(e,t){return vo.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r;return vo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return vo.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return vo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new fh(t,0),r=new fh(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],e=>{const t=this.Xr(e.Yr);i.push(t)}),vo.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ro(qa);return t.forEach(e=>{const t=new fh(e,0),r=new fh(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([t,r],e=>{n=n.add(e.Yr)})}),vo.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Za.isDocumentKey(i)||(i=i.child(""));const s=new fh(new Za(i),0);let a=new Ro(qa);return this.Zr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Yr)),!0)},s),vo.resolve(this.ti(a))}ti(e){const t=[];return e.forEach(e=>{const n=this.Xr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){Sa(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return vo.forEach(t.mutations,r=>{const i=new fh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new fh(t,0),r=this.Zr.firstAfterOrEqual(n);return vo.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,vo.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class yh{constructor(e){this.ri=e,this.docs=new No(Za.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return vo.resolve(n?n.document.mutableCopy():wc.newInvalidDocument(t))}getEntries(e,t){let n=cl();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():wc.newInvalidDocument(e))}),vo.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=cl();const s=t.path,a=new Za(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||fo(po(a),n)<=0||(r.has(a.key)||rl(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return vo.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Ca(9500)}ii(e,t){return vo.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new vh(this)}getSize(e){return vo.resolve(this.size)}}class vh extends ch{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),vo.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}
/**
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
 */class wh{constructor(e){this.persistence=e,this.si=new al(e=>zc(e),$c),this.lastRemoteSnapshotVersion=ho.min(),this.highestTargetId=0,this.oi=0,this._i=new mh,this.targetCount=0,this.ai=nh.ur()}forEachTarget(e,t){return this.si.forEach((e,n)=>t(n)),vo.resolve()}getLastRemoteSnapshotVersion(e){return vo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return vo.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),vo.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),vo.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new nh(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,vo.resolve()}updateTargetData(e,t){return this.Pr(t),vo.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,vo.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.si.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.si.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),vo.waitFor(i).next(()=>r)}getTargetCount(e){return vo.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return vo.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),vo.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),vo.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),vo.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return vo.resolve(n)}containsKey(e,t){return vo.resolve(this._i.containsKey(t))}}
/**
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
 */class bh{constructor(e,t){this.ui={},this.overlays={},this.ci=new bo(0),this.li=!1,this.li=!0,this.hi=new ph,this.referenceDelegate=e(this),this.Pi=new wh(this),this.indexManager=new Yu,this.remoteDocumentCache=new yh(e=>this.referenceDelegate.Ti(e)),this.serializer=new Qu(t),this.Ii=new hh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new dh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new gh(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){xa("MemoryPersistence","Starting transaction:",e);const r=new xh(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ai(e,t){return vo.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class xh extends go{constructor(e){super(),this.currentSequenceNumber=e}}class _h{constructor(e){this.persistence=e,this.Ri=new mh,this.Vi=null}static mi(e){return new _h(e)}get fi(){if(this.Vi)return this.Vi;throw Ca(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),vo.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),vo.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),vo.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return vo.forEach(this.fi,n=>{const r=Za.fromPath(n);return this.gi(e,r).next(e=>{e||t.removeEntry(r,ho.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return vo.or([()=>vo.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Eh{constructor(e,t){this.persistence=e,this.pi=new al(e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=To(t)),t=Eo(e.get(n),t);return To(t)}(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=function(e,t){return new oh(e,t)}(this,t)}static mi(e,t){return new Eh(e,t)}Ei(){}di(e){return vo.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0;return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return vo.forEach(this.pi,(n,r)=>this.br(e,n,r).next(e=>e?vo.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,r=>this.br(e,r,t).next(e=>{e||(n++,i.removeEntry(r,ho.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),vo.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),vo.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),vo.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),vo.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lc(e.data.value)),t}br(e,t,n){return vo.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.pi.get(t);return vo.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
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
 */class Th{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=yl(),r=yl();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Th(e,t.fromCache,n,r)}}
/**
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
 */class Ch{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class Ih{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=ft()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(mt())>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ys(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ws(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;const n=new Ch;return this.Ss(e,t,n).next(r=>{if(i.result=r,this.Vs)return this.bs(e,t,n,r.size)})}).next(()=>i.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(ba()<=Rt.DEBUG&&xa("QueryEngine","SDK will not create cache indexes for query:",nl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),vo.resolve()):(ba()<=Rt.DEBUG&&xa("QueryEngine","Query:",nl(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(ba()<=Rt.DEBUG&&xa("QueryEngine","The SDK decides to create cache indexes for query:",nl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yc(t))):vo.resolve())}ys(e,t){if(Wc(t))return vo.resolve(null);let n=Yc(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=Zc(t,null,"F"),n=Yc(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const i=yl(...r);return this.ps.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const s=this.Ds(t,r);return this.Cs(t,s,i,n.readTime)?this.ys(e,Zc(t,null,"F")):this.vs(e,s,t,n)}))})))}ws(e,t,n,r){return Wc(t)||r.isEqual(ho.min())?vo.resolve(null):this.ps.getDocuments(e,n).next(i=>{const s=this.Ds(t,i);return this.Cs(t,s,n,r)?vo.resolve(null):(ba()<=Rt.DEBUG&&xa("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nl(t)),this.vs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ho.fromTimestamp(1e9===r?new uo(n+1,0):new uo(n,r));return new mo(i,Za.empty(),t)}(r,-1)).next(e=>e))})}Ds(e,t){let n=new Ro(il(e));return t.forEach((t,r)=>{rl(e,r)&&(n=n.add(r))}),n}Cs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return ba()<=Rt.DEBUG&&xa("QueryEngine","Using full collection scan to execute query:",nl(t)),this.ps.getDocumentsMatchingQuery(e,t,mo.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
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
 */const Sh="LocalStore";class Nh{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new No(qa),this.xs=new al(e=>zc(e),$c),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uh(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}async function kh(e,t){const n=Na(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(i=>(r=i,n.Bs(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const i=[],s=[];let a=yl();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next(e=>({Ls:e,removedBatchIds:i,addedBatchIds:s}))})})}function Ah(e){const t=Na(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Pi.getLastRemoteSnapshotVersion(e))}function Rh(e,t){const n=Na(e),r=t.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const s=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const a=[];t.targetChanges.forEach((s,o)=>{const c=i.get(o);if(!c)return;a.push(n.Pi.removeMatchingKeys(e,s.removedDocuments,o).next(()=>n.Pi.addMatchingKeys(e,s.addedDocuments,o)));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?l=l.withResumeToken(Po.EMPTY_BYTE_STRING,ho.min()).withLastLimboFreeSnapshotVersion(ho.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,r)),i=i.insert(o,l),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,s)&&a.push(n.Pi.updateTargetData(e,l))});let o=cl(),c=yl();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),a.push(function(e,t,n){let r=yl(),i=yl();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=cl();return n.forEach((n,s)=>{const a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ho.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):xa(Sh,"Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)}),{ks:r,qs:i}})}(e,s,t.documentUpdates).next(e=>{o=e.ks,c=e.qs})),!r.isEqual(ho.min())){const t=n.Pi.getLastRemoteSnapshotVersion(e).next(t=>n.Pi.setTargetsMetadata(e,e.currentSequenceNumber,r));a.push(t)}return vo.waitFor(a).next(()=>s.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,o,c)).next(()=>o)}).then(e=>(n.Ms=i,e))}function Dh(e,t){const n=Na(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}async function Oh(e,t,n){const r=Na(e),i=r.Ms.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,e=>r.persistence.referenceDelegate.removeTarget(e,i))}catch(a){if(!wo(a))throw a;xa(Sh,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function jh(e,t,n){const r=Na(e);let i=ho.min(),s=yl();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=Na(e),i=r.xs.get(n);return void 0!==i?vo.resolve(r.Ms.get(i)):r.Pi.getTargetData(t,n)}(r,e,Yc(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{s=e})}).next(()=>r.Fs.getDocumentsMatchingQuery(e,t,n?i:ho.min(),n?s:yl())).next(e=>(function(e,t,n){let r=e.Os.get(t)||ho.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.Os.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Qs:s})))}class Ph{constructor(){this.activeTargetIds=vl}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lh{constructor(){this.Mo=new Ph,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ph,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Mh{Oo(e){}shutdown(){}}
/**
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
 */const Vh="ConnectivityMonitor";class Uh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){xa(Vh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){xa(Vh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Fh=null;function Bh(){return null===Fh?Fh=268435456+Math.round(2147483648*Math.random()):Fh++,"0x"+Fh.toString(16)
/**
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
 */}const qh="RestConnection",zh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $h{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===Wo?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const s=Bh(),a=this.zo(e,t.toUriEncodedString());xa(qh,`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(o,r,i);const{host:c}=new URL(a),l=lt(c);return this.Jo(e,a,o,n,l).then(t=>(xa(qh,`Received RPC '${e}' ${s}: `,t),t),t=>{throw Ea(qh,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Ho(e,t,n,r,i,s){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+va,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}zo(e,t){const n=zh[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}
/**
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
 */class Hh{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}
/**
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
 */const Gh="WebChannelConnection";class Kh extends $h{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const s=Bh();return new Promise((i,a)=>{const o=new aa;o.setWithCredentials(!0),o.listenOnce(ca.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case la.NO_ERROR:const t=o.getResponseJson();xa(Gh,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case la.TIMEOUT:xa(Gh,`RPC '${e}' ${s} timed out`),a(new Aa(ka.DEADLINE_EXCEEDED,"Request time out"));break;case la.HTTP_ERROR:const n=o.getStatus();if(xa(Gh,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ka).indexOf(t)>=0?t:ka.UNKNOWN}(t.status);a(new Aa(e,t.message))}else a(new Aa(ka.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Aa(ka.UNAVAILABLE,"Connection failed."));break;default:Ca(9055,{l_:e,streamId:s,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{xa(Gh,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);xa(Gh,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",c,n,15)})}T_(e,t,n){const r=Bh(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=pa(),a=da(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(o.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(o.useFetchStreams=!0),this.jo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const l=i.join("");xa(Gh,`Creating RPC '${e}' stream ${r}: ${l}`,o);const u=s.createWebChannel(l,o);this.I_(u);let h=!1,d=!1;const p=new Hh({Yo:t=>{d?xa(Gh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(xa(Gh,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),xa(Gh,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Zo:()=>u.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(u,oa.EventType.OPEN,()=>{d||(xa(Gh,`RPC '${e}' stream ${r} transport opened.`),p.o_())}),m(u,oa.EventType.CLOSE,()=>{d||(d=!0,xa(Gh,`RPC '${e}' stream ${r} transport closed`),p.a_(),this.E_(u))}),m(u,oa.EventType.ERROR,t=>{d||(d=!0,Ea(Gh,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),p.a_(new Aa(ka.UNAVAILABLE,"The operation could not be completed")))}),m(u,oa.EventType.MESSAGE,t=>{var n;if(!d){const i=t.data[0];Sa(!!i,16349);const s=i,a=(null==s?void 0:s.error)||(null==(n=s[0])?void 0:n.error);if(a){xa(Gh,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=tu[e];if(void 0!==t)return ru(t)}(t),i=a.message;void 0===n&&(n=ka.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,p.a_(new Aa(n,i)),u.close()}else xa(Gh,`RPC '${e}' stream ${r} received:`,i),p.u_(i)}}),m(a,ha.STAT_EVENT,t=>{t.stat===ua.PROXY?xa(Gh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===ua.NOPROXY&&xa(Gh,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{p.__()},0),p}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Wh(){return"undefined"!=typeof document?document:null}
/**
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
 */function Qh(e){return new xu(e,!0)}
/**
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
 */class Jh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&xa("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
/**
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
 */const Yh="PersistentStream";class Xh{constructor(e,t,n,r,i,s,a,o){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Jh(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===ka.RESOURCE_EXHAUSTED?(_a(t.toString()),_a("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ka.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.D_===t&&this.G_(e,n)},t=>{e(()=>{const e=new Aa(ka.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{n(()=>this.z_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return xa(Yh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(xa(Yh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Zh extends Xh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ca(39313,{state:r}),s=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(Sa(void 0===t||"string"==typeof t,58123),Po.fromBase64String(t||"")):(Sa(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Po.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,c=o&&function(e){const t=void 0===e.code?ka.UNKNOWN:ru(e.code);return new Aa(t,e.message||"")}(o);n=new pu(i,s,a,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ru(e,r.document.name),s=Iu(r.document.updateTime),a=r.document.createTime?Iu(r.document.createTime):ho.min(),o=new yc({mapValue:{fields:r.document.fields}}),c=wc.newFoundDocument(i,s,a,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new hu(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ru(e,r.document),s=r.readTime?Iu(r.readTime):ho.min(),a=wc.newNoDocument(i,s),o=r.removedTargetIds||[];n=new hu([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ru(e,r.document),s=r.removedTargetIds||[];n=new hu([],s,i,null)}else{if(!("filter"in t))return Ca(11601,{Rt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new eu(r,i),a=e.targetId;n=new du(a,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return ho.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ho.min():t.readTime?Iu(t.readTime):ho.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Ou(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Hc(r)?{documents:Lu(e,r)}:{query:Mu(e,r).ft},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Tu(e,t.resumeToken);const r=_u(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ho.min())>0){n.readTime=Eu(e,t.snapshotVersion.toTimestamp());const r=_u(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ca(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Ou(this.serializer),t.removeTarget=e,this.q_(t)}}class ed extends Xh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Sa(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Sa(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){Sa(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=function(e,t){return e&&e.length>0?(Sa(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?Iu(e.updateTime):Iu(t);return n.isEqual(ho.min())&&(n=Iu(t)),new Pl(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=Iu(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Ou(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>function(e,t){let n;if(t instanceof $l)n={update:Pu(e,t.key,t.value)};else if(t instanceof Ql)n={delete:Au(e,t.key)};else if(t instanceof Hl)n={update:Pu(e,t.key,t.data),updateMask:Gu(t.fieldMask)};else{if(!(t instanceof Jl))return Ca(16599,{Vt:t.type});n={verify:Au(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Il)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Sl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof kl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Rl)return{fieldPath:t.field.canonicalString(),increment:n.Ae};throw Ca(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Cu(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ca(27497))),n;var r,i}(this.serializer,e))};this.q_(t)}}
/**
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
 */class td{}class nd extends td{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Aa(ka.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Go(e,Nu(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ka.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Aa(ka.UNKNOWN,e.toString())})}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Ho(e,Nu(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===ka.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Aa(ka.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class rd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(_a(t),this.aa=!1):xa("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
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
 */const id="RemoteStore";class sd{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(e=>{n.enqueueAndForget(async()=>{md(this)&&(xa(id,"Restarting streams for network reachability change."),await async function(e){const t=Na(e);t.Ea.add(4),await od(t),t.Ra.set("Unknown"),t.Ea.delete(4),await ad(t)}(this))})}),this.Ra=new rd(n,r)}}async function ad(e){if(md(e))for(const t of e.da)await t(!0)}async function od(e){for(const t of e.da)await t(!1)}function cd(e,t){const n=Na(e);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),pd(n)?dd(n):Dd(n).O_()&&ud(n,t))}function ld(e,t){const n=Na(e),r=Dd(n);n.Ia.delete(t),r.O_()&&hd(n,t),0===n.Ia.size&&(r.O_()?r.L_():md(n)&&n.Ra.set("Unknown"))}function ud(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ho.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Dd(e).Y_(t)}function hd(e,t){e.Va.Ue(t),Dd(e).Z_(t)}function dd(e){e.Va=new fu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Dd(e).start(),e.Ra.ua()}function pd(e){return md(e)&&!Dd(e).x_()&&e.Ia.size>0}function md(e){return 0===Na(e).Ea.size}function fd(e){e.Va=void 0}async function gd(e){e.Ra.set("Online")}async function yd(e){e.Ia.forEach((t,n)=>{ud(e,t)})}async function vd(e,t){fd(e),pd(e)?(e.Ra.ha(t),dd(e)):e.Ra.set("Unknown")}async function wd(e,t,n){if(e.Ra.set("Online"),t instanceof pu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ia.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ia.delete(r),e.Va.removeTarget(r))}(e,t)}catch(r){xa(id,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await bd(e,r)}else if(t instanceof hu?e.Va.Ze(t):t instanceof du?e.Va.st(t):e.Va.tt(t),!n.isEqual(ho.min()))try{const t=await Ah(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Va.Tt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Ia.get(r);i&&e.Ia.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ia.get(t);if(!r)return;e.Ia.set(t,r.withResumeToken(Po.EMPTY_BYTE_STRING,r.snapshotVersion)),hd(e,t);const i=new Wu(r.target,t,n,r.sequenceNumber);ud(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){xa(id,"Failed to raise snapshot:",i),await bd(e,i)}}async function bd(e,t,n){if(!wo(t))throw t;e.Ea.add(1),await od(e),e.Ra.set("Offline"),n||(n=()=>Ah(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{xa(id,"Retrying IndexedDB access"),await n(),e.Ea.delete(1),await ad(e)})}function xd(e,t){return t().catch(n=>bd(e,n,t))}async function _d(e){const t=Na(e),n=Od(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:-1;for(;Ed(t);)try{const e=await Dh(t.localStore,r);if(null===e){0===t.Ta.length&&n.L_();break}r=e.batchId,Td(t,e)}catch(i){await bd(t,i)}Cd(t)&&Id(t)}function Ed(e){return md(e)&&e.Ta.length<10}function Td(e,t){e.Ta.push(t);const n=Od(e);n.O_()&&n.X_&&n.ea(t.mutations)}function Cd(e){return md(e)&&!Od(e).x_()&&e.Ta.length>0}function Id(e){Od(e).start()}async function Sd(e){Od(e).ra()}async function Nd(e){const t=Od(e);for(const n of e.Ta)t.ea(n.mutations)}async function kd(e,t,n){const r=e.Ta.shift(),i=Xl.from(r,t,n);await xd(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await _d(e)}async function Ad(e,t){t&&Od(e).X_&&await async function(e,t){if(function(e){switch(e){case ka.OK:return Ca(64938);case ka.CANCELLED:case ka.UNKNOWN:case ka.DEADLINE_EXCEEDED:case ka.RESOURCE_EXHAUSTED:case ka.INTERNAL:case ka.UNAVAILABLE:case ka.UNAUTHENTICATED:return!1;case ka.INVALID_ARGUMENT:case ka.NOT_FOUND:case ka.ALREADY_EXISTS:case ka.PERMISSION_DENIED:case ka.FAILED_PRECONDITION:case ka.ABORTED:case ka.OUT_OF_RANGE:case ka.UNIMPLEMENTED:case ka.DATA_LOSS:return!0;default:return Ca(15467,{code:e})}}(n=t.code)&&n!==ka.ABORTED){const n=e.Ta.shift();Od(e).B_(),await xd(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await _d(e)}var n}(e,t),Cd(e)&&Id(e)}async function Rd(e,t){const n=Na(e);n.asyncQueue.verifyOperationInProgress(),xa(id,"RemoteStore received new credentials");const r=md(n);n.Ea.add(3),await od(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await ad(n)}function Dd(e){return e.ma||(e.ma=function(e,t,n){const r=Na(e);return r.sa(),new Zh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:gd.bind(null,e),t_:yd.bind(null,e),r_:vd.bind(null,e),H_:wd.bind(null,e)}),e.da.push(async t=>{t?(e.ma.B_(),pd(e)?dd(e):e.Ra.set("Unknown")):(await e.ma.stop(),fd(e))})),e.ma}function Od(e){return e.fa||(e.fa=function(e,t,n){const r=Na(e);return r.sa(),new ed(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Xo:()=>Promise.resolve(),t_:Sd.bind(null,e),r_:Ad.bind(null,e),ta:Nd.bind(null,e),na:kd.bind(null,e)}),e.da.push(async t=>{t?(e.fa.B_(),await _d(e)):(await e.fa.stop(),e.Ta.length>0&&(xa(id,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa
/**
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
 */}class jd{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Ra,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new jd(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Aa(ka.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pd(e,t){if(_a("AsyncQueue",`${t}: ${e}`),wo(e))return new Aa(ka.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Ld{static emptySet(e){return new Ld(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Za.comparator(t.key,n.key):(e,t)=>Za.comparator(e.key,t.key),this.keyedMap=ul(),this.sortedSet=new No(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ld))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Ld;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Md{constructor(){this.ga=new No(Za.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?0!==e.type&&3===n.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==n.type?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ga=this.ga.remove(t):1===e.type&&2===n.type?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ca(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class Vd{constructor(e,t,n,r,i,s,a,o,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new Vd(e,t,Ld.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&el(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Ud{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Fd{constructor(){this.queries=Bd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){const n=Na(e),r=n.queries;n.queries=Bd(),r.forEach((e,n)=>{for(const r of n.Sa)r.onError(t)})}(this,new Aa(ka.ABORTED,"Firestore shutting down"))}}function Bd(){return new al(e=>tl(e),el)}async function qd(e,t){const n=Na(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.ba()&&t.Da()&&(r=2):(s=new Ud,r=t.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const e=Pd(a,`Initialization of query '${nl(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.Sa.push(t),t.va(n.onlineState),s.wa&&t.Fa(s.wa)&&Gd(n)}async function zd(e,t){const n=Na(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.Sa.indexOf(t);e>=0&&(s.Sa.splice(e,1),0===s.Sa.length?i=t.Da()?0:1:!s.ba()&&t.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function $d(e,t){const n=Na(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.Sa)e.Fa(i)&&(r=!0);t.wa=i}}r&&Gd(n)}function Hd(e,t,n){const r=Na(e),i=r.queries.get(t);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(t)}function Gd(e){e.Ca.forEach(e=>{e.next()})}var Kd,Wd;(Wd=Kd||(Kd={})).Ma="default",Wd.Cache="cache";class Qd{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Vd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==t;return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=Vd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Kd.Cache}}
/**
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
 */class Jd{constructor(e){this.key=e}}class Yd{constructor(e){this.key=e}}class Xd{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=yl(),this.mutatedKeys=yl(),this.eu=il(e),this.tu=new Ld(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new Md,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const l=r.get(e),u=rl(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.su(l,u)||(n.track({type:2,doc:u}),p=!0,(o&&this.eu(u,o)>0||c&&this.eu(u,c)<0)&&(a=!0)):!l&&u?(n.track({type:0,doc:u}),p=!0):l&&!u&&(n.track({type:1,doc:l}),p=!0,(o||c)&&(a=!0)),p&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{tu:s,iu:n,Cs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const s=e.iu.ya();s.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ca(20277,{Rt:e})}};return n(e)-n(t)}(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(n),r=r??!1;const a=t&&!r?this._u():[],o=0===this.Xa.size&&this.current&&!r?1:0,c=o!==this.Za;return this.Za=o,0!==s.length||c?{snapshot:new Vd(this.query,e.tu,i,s,e.mutatedKeys,0===o,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Md,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=yl(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Xa=this.Xa.add(e.key))});const t=[];return e.forEach(e=>{this.Xa.has(e)||t.push(new Yd(e))}),this.Xa.forEach(n=>{e.has(n)||t.push(new Jd(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=yl();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Vd.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}}const Zd="SyncEngine";class ep{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class tp{constructor(e){this.key=e,this.hu=!1}}class np{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new al(e=>tl(e),el),this.Iu=new Map,this.Eu=new Set,this.du=new No(Za.comparator),this.Au=new Map,this.Ru=new mh,this.Vu={},this.mu=new Map,this.fu=nh.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function rp(e,t,n=!0){const r=Tp(e);let i;const s=r.Tu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await sp(r,t,n,!0),i}async function ip(e,t){const n=Tp(e);await sp(n,t,!0,!1)}async function sp(e,t,n,r){const i=await function(e,t){const n=Na(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Pi.getTargetData(e,t).next(i=>i?(r=i,vo.resolve(r)):n.Pi.allocateTargetId(e).next(i=>(r=new Wu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Pi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.xs.set(t,e.targetId)),e})}(e.localStore,Yc(t)),s=i.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await async function(e,t,n,r,i){e.pu=(t,n,r)=>async function(e,t,n,r){let i=t.view.ru(n);i.Cs&&(i=await jh(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));const s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return vp(e,t.targetId,o.au),o.snapshot}(e,t,n,r);const s=await jh(e.localStore,t,!0),a=new Xd(t,s.Qs),o=a.ru(s.documents),c=uu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),l=a.applyChanges(o,e.isPrimaryClient,c);vp(e,n,l.au);const u=new ep(t,n,a);return e.Tu.set(t,u),e.Iu.has(n)?e.Iu.get(n).push(t):e.Iu.set(n,[t]),l.snapshot}(e,t,s,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&cd(e.remoteStore,i),o}async function ap(e,t,n){const r=Na(e),i=r.Tu.get(t),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(e=>!el(e,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Oh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ld(r.remoteStore,i.targetId),gp(r,i.targetId)}).catch(yo)):(gp(r,i.targetId),await Oh(r.localStore,i.targetId,!0))}async function op(e,t){const n=Na(e),r=n.Tu.get(t),i=n.Iu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ld(n.remoteStore,r.targetId))}async function cp(e,t,n){const r=function(e){const t=Na(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pp.bind(null,t),t}(e);try{const e=await function(e,t){const n=Na(e),r=uo.now(),i=t.reduce((e,t)=>e.add(t.key),yl());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let o=cl(),c=yl();return n.Ns.getEntries(e,i).next(e=>{o=e,o.forEach((e,t)=>{t.isValidDocument()||(c=c.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,o)).next(i=>{s=i;const a=[];for(const e of t){const t=ql(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Hl(e.key,t,vc(t.value.mapValue),Ll.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)}).next(t=>{a=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:a.batchId,changes:hl(s)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Vu[e.currentUser.toKey()];r||(r=new No(qa)),r=r.insert(t,n),e.Vu[e.currentUser.toKey()]=r}(r,e.batchId,n),await xp(r,e.changes),await _d(r.remoteStore)}catch(i){const e=Pd(i,"Failed to persist write");n.reject(e)}}async function lp(e,t){const n=Na(e);try{const e=await Rh(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Au.get(t);r&&(Sa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.hu=!0:e.modifiedDocuments.size>0?Sa(r.hu,14607):e.removedDocuments.size>0&&(Sa(r.hu,42227),r.hu=!1))}),await xp(n,e,t)}catch(r){await yo(r)}}function up(e,t,n){const r=Na(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Tu.forEach((n,r)=>{const i=r.view.va(t);i.snapshot&&e.push(i.snapshot)}),function(e,t){const n=Na(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const i of n.Sa)i.va(t)&&(r=!0)}),r&&Gd(n)}(r.eventManager,t),e.length&&r.Pu.H_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hp(e,t,n){const r=Na(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Au.get(t),s=i&&i.key;if(s){let e=new No(Za.comparator);e=e.insert(s,wc.newNoDocument(s,ho.min()));const n=yl().add(s),i=new lu(ho.min(),new Map,new No(qa),e,n);await lp(r,i),r.du=r.du.remove(s),r.Au.delete(t),bp(r)}else await Oh(r.localStore,t,!1).then(()=>gp(r,t,n)).catch(yo)}async function dp(e,t){const n=Na(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Na(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=vo.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{const s=n.docVersions.get(e);Sa(null!==s,48541),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))}(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=yl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);fp(n,r,null),mp(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xp(n,e)}catch(i){await yo(i)}}async function pp(e,t,n){const r=Na(e);try{const e=await function(e,t){const n=Na(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(Sa(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);fp(r,t,n),mp(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await xp(r,e)}catch(i){await yo(i)}}function mp(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function fp(e,t,n){const r=Na(e);let i=r.Vu[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function gp(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Iu.get(t))e.Tu.delete(r),n&&e.Pu.yu(r,n);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(t=>{e.Ru.containsKey(t)||yp(e,t)})}function yp(e,t){e.Eu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(ld(e.remoteStore,n),e.du=e.du.remove(t),e.Au.delete(n),bp(e))}function vp(e,t,n){for(const r of n)r instanceof Jd?(e.Ru.addReference(r.key,t),wp(e,r)):r instanceof Yd?(xa(Zd,"Document no longer in limbo: "+r.key),e.Ru.removeReference(r.key,t),e.Ru.containsKey(r.key)||yp(e,r.key)):Ca(19791,{wu:r})}function wp(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Eu.has(r)||(xa(Zd,"New document in limbo: "+n),e.Eu.add(r),bp(e))}function bp(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Eu.values().next().value;e.Eu.delete(t);const n=new Za(Ja.fromString(t)),r=e.fu.next();e.Au.set(r,new tp(n)),e.du=e.du.insert(n,r),cd(e.remoteStore,new Wu(Yc(Kc(n.path)),r,"TargetPurposeLimboResolution",bo.ce))}}async function xp(e,t,n){const r=Na(e),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((e,o)=>{a.push(r.pu(o,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null==(t=null==n?void 0:n.targetChanges.get(o.targetId))?void 0:t.current;r.sharedClientState.updateQueryState(o.targetId,i?"current":"not-current")}if(e){i.push(e);const t=Th.As(o.targetId,e);s.push(t)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(e,t){const n=Na(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>vo.forEach(t,t=>vo.forEach(t.Es,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>vo.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!wo(r))throw r;xa(Sh,"Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,i)}}}(r.localStore,s))}async function _p(e,t){const n=Na(e);if(!n.currentUser.isEqual(t)){xa(Zd,"User change. New user:",t.toKey());const e=await kh(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).mu.forEach(e=>{e.forEach(e=>{e.reject(new Aa(ka.CANCELLED,i))})}),r.mu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await xp(n,e.Ls)}var r,i}function Ep(e,t){const n=Na(e),r=n.Au.get(t);if(r&&r.hu)return yl().add(r.key);{let e=yl();const r=n.Iu.get(t);if(!r)return e;for(const t of r){const r=n.Tu.get(t);e=e.unionWith(r.view.nu)}return e}}function Tp(e){const t=Na(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=lp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ep.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hp.bind(null,t),t.Pu.H_=$d.bind(null,t.eventManager),t.Pu.yu=Hd.bind(null,t.eventManager),t}class Cp{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return function(e,t,n,r){return new Nh(e,t,n,r)}(this.persistence,new Ih,e.initialUser,this.serializer)}Cu(e){return new bh(_h.mi,this.serializer)}Du(e){return new Lh}async terminate(){var e,t;null==(e=this.gcScheduler)||e.stop(),null==(t=this.indexBackfillerScheduler)||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cp.provider={build:()=>new Cp};class Ip extends Cp{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Sa(this.persistence.referenceDelegate instanceof Eh,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new ah(n,e.asyncQueue,t)}Cu(e){const t=void 0!==this.cacheSizeBytes?th.withCacheSize(this.cacheSizeBytes):th.DEFAULT;return new bh(e=>Eh.mi(e,t),this.serializer)}}class Sp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>up(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=_p.bind(null,this.syncEngine),await async function(e,t){const n=Na(e);t?(n.Ea.delete(2),await ad(n)):t||(n.Ea.add(2),await od(n),n.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Fd}createDatastore(e){const t=Qh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Kh(r));var r;return function(e,t,n,r){return new nd(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>up(this.syncEngine,e,0),s=Uh.v()?new Uh:new Mh,new sd(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new np(e,t,n,r,i,s);return a&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=Na(e);xa(id,"RemoteStore shutting down."),t.Ea.add(5),await od(t),t.Aa.shutdown(),t.Ra.set("Unknown")}(this.remoteStore),null==(e=this.datastore)||e.terminate(),null==(t=this.eventManager)||t.terminate()}}Sp.provider={build:()=>new Sp};
/**
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
 */
/**
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
 */
class Np{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):_a("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
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
 */const kp="FirestoreClient";class Ap{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ya.UNAUTHENTICATED,this.clientId=Ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{xa(kp,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(xa(kp,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ra;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Pd(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Rp(e,t){e.asyncQueue.verifyOperationInProgress(),xa(kp,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await kh(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Dp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){xa(kp,"Using user provided OfflineComponentProvider");try{await Rp(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===ka.FAILED_PRECONDITION||n.code===ka.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;Ea("Error using user provided cache. Falling back to memory cache: "+i),await Rp(e,new Cp)}}else xa(kp,"Using default OfflineComponentProvider"),await Rp(e,new Ip(void 0));var n;return e._offlineComponents}(e);xa(kp,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>Rd(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>Rd(t.remoteStore,n)),e._onlineComponents=t}async function Op(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(xa(kp,"Using user provided OnlineComponentProvider"),await Dp(e,e._uninitializedComponentsProvider._online)):(xa(kp,"Using default OnlineComponentProvider"),await Dp(e,new Sp))),e._onlineComponents}async function jp(e){const t=await Op(e),n=t.eventManager;return n.onListen=rp.bind(null,t.syncEngine),n.onUnlisten=ap.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=ip.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=op.bind(null,t.syncEngine),n}
/**
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
 */
function Pp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const Lp=new Map,Mp="firestore.googleapis.com",Vp=!0;
/**
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
 */class Up{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new Aa(ka.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mp,this.ssl=Vp}else this.host=e.host,this.ssl=e.ssl??Vp;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=eh;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Aa(ka.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Aa(ka.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Pp(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Aa(ka.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Aa(ka.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Aa(ka.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Fp{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Up({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Aa(ka.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Aa(ka.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Up(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Oa;switch(e.type){case"firstParty":return new Ma(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Aa(ka.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Lp.get(e);t&&(xa("ComponentProvider","Removing Datastore"),Lp.delete(e),t.terminate())}(this),Promise.resolve()}}function Bp(e,t,n,r={}){var i;e=so(e,Fp);const s=lt(t),a=e._getSettings(),o={...a,emulatorOptions:e._getEmulatorOptions()},c=`${t}:${n}`;s&&(ut(`https://${c}`),pt("Firestore",!0)),a.host!==Mp&&a.host!==c&&Ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...a,host:c,ssl:s,emulatorOptions:r};if(!wt(l,o)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=ya.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[tt(JSON.stringify({alg:"none",type:"JWT"})),tt(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null==(i=e._app)?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Aa(ka.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ya(s)}e._authCredentials=new ja(new Da(t,n))}}
/**
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
 */class qp{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qp(this.firestore,e,this._query)}}class zp{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $p(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zp(this.firestore,e,this._key)}toJSON(){return{type:zp._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(oo(t,zp._jsonSchema))return new zp(e,n||null,new Za(Ja.fromString(t.referencePath)))}}zp._jsonSchemaVersion="firestore/documentReference/1.0",zp._jsonSchema={type:ao("string",zp._jsonSchemaVersion),referencePath:ao("string")};class $p extends qp{constructor(e,t,n){super(e,t,Kc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zp(this.firestore,null,new Za(e))}withConverter(e){return new $p(this.firestore,e,this._path)}}function Hp(e,t,...n){if(e=It(e),eo("collection","path",t),e instanceof Fp){const r=Ja.fromString(t,...n);return no(r),new $p(e,null,r)}{if(!(e instanceof zp||e instanceof $p))throw new Aa(ka.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ja.fromString(t,...n));return no(r),new $p(e.firestore,null,r)}}function Gp(e,t,...n){if(e=It(e),1===arguments.length&&(t=Ba.newId()),eo("doc","path",t),e instanceof Fp){const r=Ja.fromString(t,...n);return to(r),new zp(e,null,new Za(r))}{if(!(e instanceof zp||e instanceof $p))throw new Aa(ka.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ja.fromString(t,...n));return to(r),new zp(e.firestore,e instanceof $p?e.converter:null,new Za(r))}}
/**
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
 */const Kp="AsyncQueue";class Wp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Jh(this,"async_queue_retry"),this._c=()=>{const e=Wh();e&&xa(Kp,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;const t=Wh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Wh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ra;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch($f){if(!wo($f))throw $f;xa(Kp,"Operation failed with retryable error: "+$f)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,_a("INTERNAL UNHANDLED ERROR: ",Qp(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=jd.createAndSchedule(this,e,t,n,e=>this.hc(e));return this.tc.push(r),r}uc(){this.nc&&Ca(47125,{Pc:Qp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do{e=this.ac,await e}while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qp(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class Jp extends Fp{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Wp,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wp(e),this._firestoreClient=void 0,await e}}}function Yp(e){if(e._terminated)throw new Aa(ka.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(a=e._databaseId,o=(null==(t=e._app)?void 0:t.options.appId)||"",c=e._persistenceKey,l=i,new Ko(a,o,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Pp(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator));var a,o,c,l;e._componentsProvider||(null==(n=i.localCache)?void 0:n._offlineComponentProvider)&&(null==(r=i.localCache)?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new Ap(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
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
 */(e),e._firestoreClient}class Xp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xp(Po.fromBase64String(e))}catch(t){throw new Aa(ka.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xp(Po.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xp._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oo(e,Xp._jsonSchema))return Xp.fromBase64String(e.bytes)}}Xp._jsonSchemaVersion="firestore/bytes/1.0",Xp._jsonSchema={type:ao("string",Xp._jsonSchemaVersion),bytes:ao("string")};
/**
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
 */
class Zp{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Aa(ka.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xa(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */class em{constructor(e){this._methodName=e}}
/**
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
 */class tm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Aa(ka.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Aa(ka.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return qa(this._lat,e._lat)||qa(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tm._jsonSchemaVersion}}static fromJSON(e){if(oo(e,tm._jsonSchema))return new tm(e.latitude,e.longitude)}}tm._jsonSchemaVersion="firestore/geoPoint/1.0",tm._jsonSchema={type:ao("string",tm._jsonSchemaVersion),latitude:ao("number"),longitude:ao("number")};
/**
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
 */
class nm{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:nm._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oo(e,nm._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new nm(e.vectorValues);throw new Aa(ka.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nm._jsonSchemaVersion="firestore/vectorValue/1.0",nm._jsonSchema={type:ao("string",nm._jsonSchemaVersion),vectorValues:ao("object")};
/**
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
 */
const rm=/^__.*__$/;class im{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Hl(e,this.data,this.fieldMask,t,this.fieldTransforms):new $l(e,this.data,t,this.fieldTransforms)}}class sm{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Hl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function am(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ca(40011,{Ac:e})}}class om{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new om({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var t;const n=null==(t=this.path)?void 0:t.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var t;const n=null==(t=this.path)?void 0:t.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return bm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(am(this.Ac)&&rm.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cm{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Qh(e)}Cc(e,t,n,r=!1){return new om({Ac:e,methodName:t,Dc:n,path:Xa.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lm(e){const t=e._freezeSettings(),n=Qh(e._databaseId);return new cm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function um(e,t,n,r,i,s={}){const a=e.Cc(s.merge||s.mergeFields?2:0,t,n,i);gm("Data must be an object, but it was:",a,r);const o=mm(r,a);let c,l;if(s.merge)c=new Oo(a.fieldMask),l=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=ym(t,r,n);if(!a.contains(i))throw new Aa(ka.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);xm(e,i)||e.push(i)}c=new Oo(e),l=a.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,l=a.fieldTransforms;return new im(new yc(o),c,l)}class hm extends em{_toFieldTransform(e){if(2!==e.Ac)throw 1===e.Ac?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hm}}class dm extends em{_toFieldTransform(e){return new jl(e.path,new Il)}isEqual(e){return e instanceof dm}}function pm(e,t){if(fm(e=It(e)))return gm("Unsupported field value:",t,e),mm(e,t);if(e instanceof em)return function(e,t){if(!am(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=pm(i,t.wc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=It(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xl(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=uo.fromDate(e);return{timestampValue:Eu(t.serializer,n)}}if(e instanceof uo){const n=new uo(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Eu(t.serializer,n)}}if(e instanceof tm)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Xp)return{bytesValue:Tu(t.serializer,e._byteString)};if(e instanceof zp){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Sc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Su(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof nm)return n=e,r=t,{mapValue:{fields:{[Jo]:{stringValue:Zo},[ec]:{arrayValue:{values:n.toArray().map(e=>{if("number"!=typeof e)throw r.Sc("VectorValues must only contain numeric values.");return wl(r.serializer,e)})}}}}};var n,r;throw t.Sc(`Unsupported field value: ${io(e)}`)}(e,t)}function mm(e,t){const n={};return So(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Io(e,(e,r)=>{const i=pm(r,t.mc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function fm(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof uo||e instanceof tm||e instanceof Xp||e instanceof zp||e instanceof em||e instanceof nm)}function gm(e,t,n){if(!fm(n)||!ro(n)){const r=io(n);throw"an object"===r?t.Sc(e+" a custom object"):t.Sc(e+" "+r)}}function ym(e,t,n){if((t=It(t))instanceof Zp)return t._internalPath;if("string"==typeof t)return wm(e,t);throw bm("Field path arguments must be of type string or ",e,!1,void 0,n)}const vm=new RegExp("[~\\*/\\[\\]]");function wm(e,t,n){if(t.search(vm)>=0)throw bm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Zp(...t.split("."))._internalPath}catch(r){throw bm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function bm(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new Aa(ka.INVALID_ARGUMENT,o+e+c)}function xm(e,t){return e.some(e=>e.isEqual(t))}
/**
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
 */class _m{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Em(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tm("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Em extends _m{data(){return super.data()}}function Tm(e,t){return"string"==typeof t?wm(e,t):t instanceof Zp?t._internalPath:t._delegate._internalPath}
/**
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
 */class Cm{}class Im extends Cm{}function Sm(e,t,...n){let r=[];t instanceof Cm&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof Am).length,n=e.filter(e=>e instanceof Nm).length;if(t>1||t>0&&n>0)throw new Aa(ka.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Nm extends Im{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Nm(e,t,n)}_apply(e){const t=this._parse(e);return jm(e._query,t),new qp(e.firestore,e.converter,Xc(e._query,t))}_parse(e){const t=lm(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Aa(ka.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Om(a,s);const t=[];for(const n of a)t.push(Dm(r,e,n));o={arrayValue:{values:t}}}else o=Dm(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Om(a,s),o=function(e,t,n,r=!1){return pm(n,e.Cc(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return Ic.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function km(e,t,n){const r=t,i=Tm("where",e);return Nm._create(i,r,n)}class Am extends Cm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Am(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Sc.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)jm(n,i),n=Xc(n,i)}(e._query,t),new qp(e.firestore,e.converter,Xc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Rm extends Im{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rm(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Aa(ka.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Aa(ka.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ec(t,n)}(e._query,this._field,this._direction);return new qp(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Gc(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Dm(e,t,n){if("string"==typeof(n=It(n))){if(""===n)throw new Aa(ka.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qc(t)&&-1!==n.indexOf("/"))throw new Aa(ka.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ja.fromString(n));if(!Za.isDocumentKey(r))throw new Aa(ka.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uc(e,new Za(r))}if(n instanceof zp)return uc(e,n._key);throw new Aa(ka.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${io(n)}.`)}function Om(e,t){if(!Array.isArray(e)||0===e.length)throw new Aa(ka.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function jm(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Aa(ka.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Aa(ka.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Pm{convertValue(e,t="none"){switch(tc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Uo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ca(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Io(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const i=null==(r=null==(n=null==(t=e.fields)?void 0:t[ec].arrayValue)?void 0:n.values)?void 0:r.map(e=>Vo(e.doubleValue));return new nm(i)}convertGeoPoint(e){return new tm(Vo(e.latitude),Vo(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ho(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const t=Mo(e);return new uo(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ja.fromString(e);Sa(Ku(n),9688,{name:e});const r=new Qo(n.get(1),n.get(3)),i=new Za(n.popFirst(5));return r.isEqual(t)||_a(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */class Lm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mm extends _m{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Tm("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Aa(ka.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mm._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}Mm._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mm._jsonSchema={type:ao("string",Mm._jsonSchemaVersion),bundleSource:ao("string","DocumentSnapshot"),bundleName:ao("string"),bundle:ao("string")};class Vm extends Mm{data(e={}){return super.data(e)}}class Um{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Lm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Vm(this._firestore,this._userDataWriter,n.key,n,new Lm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Aa(ka.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Vm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Lm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Vm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Lm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Fm(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Aa(ka.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Um._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ba.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Fm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ca(61501,{type:e})}}
/**
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
 */function Bm(e){e=so(e,zp);const t=so(e.firestore,Jp);return function(e,t,n={}){const r=new Ra;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Np({next:o=>{s.Nu(),t.enqueueAndForget(()=>zd(e,a));const c=o.docs.has(n);!c&&o.fromCache?i.reject(new Aa(ka.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&o.fromCache&&r&&"server"===r.source?i.reject(new Aa(ka.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new Qd(Kc(n.path),s,{includeMetadataChanges:!0,qa:!0});return qd(e,a)}(await jp(e),e.asyncQueue,t,n,r)),r.promise}(Yp(t),e._key).then(n=>function(e,t,n){const r=n.docs.get(t._key),i=new qm(e);return new Mm(e,i,t._key,r,new Lm(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n))}Um._jsonSchemaVersion="firestore/querySnapshot/1.0",Um._jsonSchema={type:ao("string",Um._jsonSchemaVersion),bundleSource:ao("string","QuerySnapshot"),bundleName:ao("string"),bundle:ao("string")};class qm extends Pm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zp(this.firestore,null,t)}}function zm(e){e=so(e,qp);const t=so(e.firestore,Jp),n=Yp(t),r=new qm(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Aa(ka.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new Ra;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,i){const s=new Np({next:n=>{s.Nu(),t.enqueueAndForget(()=>zd(e,a)),n.fromCache&&"server"===r.source?i.reject(new Aa(ka.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),a=new Qd(n,s,{includeMetadataChanges:!0,qa:!0});return qd(e,a)}(await jp(e),e.asyncQueue,t,n,r)),r.promise}(n,e._query).then(n=>new Um(t,r,e,n))}function $m(e,t,n,...r){e=so(e,zp);const i=so(e.firestore,Jp),s=lm(i);let a;return a="string"==typeof(t=It(t))||t instanceof Zp?function(e,t,n,r,i,s){const a=e.Cc(1,t,n),o=[ym(t,r,n)],c=[i];if(s.length%2!=0)throw new Aa(ka.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)o.push(ym(t,s[d])),c.push(s[d+1]);const l=[],u=yc.empty();for(let d=o.length-1;d>=0;--d)if(!xm(l,o[d])){const e=o[d];let t=c[d];t=It(t);const n=a.yc(e);if(t instanceof hm)l.push(e);else{const r=pm(t,n);null!=r&&(l.push(e),u.set(e,r))}}const h=new Oo(l);return new sm(u,h,a.fieldTransforms)}(s,"updateDoc",e._key,t,n,r):function(e,t,n,r){const i=e.Cc(1,t,n);gm("Data must be an object, but it was:",i,r);const s=[],a=yc.empty();Io(r,(e,r)=>{const o=wm(t,e,n);r=It(r);const c=i.yc(o);if(r instanceof hm)s.push(o);else{const e=pm(r,c);null!=e&&(s.push(o),a.set(o,e))}});const o=new Oo(s);return new sm(a,o,i.fieldTransforms)}(s,"updateDoc",e._key,t),Gm(i,[a.toMutation(e._key,Ll.exists(!0))])}function Hm(e,t){const n=so(e.firestore,Jp),r=Gp(e),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t);return Gm(n,[um(lm(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Ll.exists(!1))]).then(()=>r)}function Gm(e,t){return function(e,t){const n=new Ra;return e.asyncQueue.enqueueAndForget(async()=>cp(await function(e){return Op(e).then(e=>e.syncEngine)}(e),t,n)),n.promise}(Yp(e),t)}function Km(){return new dm("serverTimestamp")}!function(e,t=!0){va=qn,Mn(new St("firestore",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Jp(new Pa(e.getProvider("auth-internal")),new Ua(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Aa(ka.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qo(e.options.projectId,t)}(i,n),i);return r={useFetchStreams:t,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),Hn(fa,ga,e),Hn(fa,ga,"esm2020")}();const Wm=zn({apiKey:"AIzaSyAfHlyEM4OuGrCsGBAttCkhh1_sO15K4CA",authDomain:"check-in-eb3a1.firebaseapp.com",projectId:"check-in-eb3a1",storageBucket:"check-in-eb3a1.firebasestorage.app",messagingSenderId:"868356690302",appId:"1:868356690302:web:f79f7e76ac72b40150e32f",measurementId:"G-V6G42662GT"}),Qm=function(e,t){const n="object"==typeof e?e:$n(),r="string"==typeof e?e:t||Wo,i=Vn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(e=>{const t=st(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&Bp(i,...e)}return i}(Wm),Jm=function(e=$n()){const t=Vn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Vn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(wt(n.getOptions(),t??{}))return e;or(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Js,persistence:[ps,Ji,Xi]}),r=ot("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ea)return;const r=null==t?void 0:t.token;ta!==r&&(ta=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){It(e).beforeAuthStateChanged(t,n)}(n,t,()=>t(n.currentUser)),function(e,t,n,r){It(e).onIdTokenChanged(t,n,r)}(n,e=>t(e))}}var i;const s=st("auth");return s&&Ti(n,`http://${s}`),n}(Wm),Ym=async()=>{try{return await(e=Jm,It(e).signOut()),{success:!0}}catch(t){return{success:!1,error:t.message}}var e},Xm=e=>{return t=e,It(Jm).onAuthStateChanged(t,n,r);var t,n,r},Zm=e=>"admindev@checkin.com"===(null==e?void 0:e.email),ef=e.createContext(),tf=()=>{const t=e.useContext(ef);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},nf=({children:t})=>{const[n,r]=e.useState(null),[i,s]=e.useState(!0),[a,o]=e.useState(!1);e.useEffect(()=>Xm(e=>{e?(r(e),o(Zm(e))):(r(null),o(!1)),s(!1)}),[]);const c={user:n,isAdminUser:a,loading:i,login:async(e,t)=>{const n=await(async(e,t)=>{try{return{success:!0,user:(await Gi(Jm,e,t)).user}}catch(n){let e="Erro ao fazer login";switch(n.code){case"auth/invalid-email":e="Email inválido";break;case"auth/user-disabled":e="Usuário desativado";break;case"auth/user-not-found":e="Usuário não encontrado";break;case"auth/wrong-password":e="Senha incorreta";break;case"auth/invalid-credential":e="Credenciais inválidas";break;case"auth/too-many-requests":e="Muitas tentativas. Tente novamente mais tarde";break;default:e=n.message}return{success:!1,error:e}}})(e,t);return n.success&&(r(n.user),o(Zm(n.user))),n},logout:async()=>{const e=await Ym();return e.success&&(r(null),o(!1)),e}};return m.jsx(ef.Provider,{value:c,children:t})},rf="checkins",sf=async e=>{try{const t={...e,isPublished:!1,createdAt:Km(),updatedAt:Km()};return{success:!0,id:(await Hm(Hp(Qm,rf),t)).id}}catch(t){return{success:!1,error:t.message}}},af=async()=>{try{const e=Sm(Hp(Qm,rf),function(e,t="asc"){const n=t,r=Tm("orderBy",e);return Rm._create(r,n)}("createdAt","desc")),t=await zm(e),n=[];return t.forEach(e=>{n.push({id:e.id,...e.data()})}),{success:!0,data:n}}catch(e){return{success:!1,error:e.message}}},of=async e=>{try{const t=Sm(Hp(Qm,rf),km("slug","==",e)),n=await zm(t);if(n.empty)return{success:!1,error:"Check-in não encontrado"};{const e=n.docs[0];return{success:!0,data:{id:e.id,...e.data()}}}}catch(t){return{success:!1,error:t.message}}},cf=async(e,t)=>{try{const n=Gp(Qm,rf,e),r={...t,updatedAt:Km()};return await $m(n,r),{success:!0}}catch(n){return{success:!1,error:n.message}}},lf=async e=>{try{return await(t=Gp(Qm,rf,e),Gm(so(t.firestore,Jp),[new Ql(t._key,Ll.none())])),{success:!0}}catch(n){return{success:!1,error:n.message}}var t},uf=async(e,t=null)=>{try{const n=Sm(Hp(Qm,rf),km("slug","==",e)),r=await zm(n);return!r.empty&&(!t||r.docs[0].id!==t)}catch(n){return!1}},hf=async e=>{try{const t=await(async e=>{try{const t=Gp(Qm,rf,e),n=await Bm(t);return n.exists()?{success:!0,data:{id:n.id,...n.data()}}:{success:!1,error:"Check-in não encontrado"}}catch(t){return{success:!1,error:t.message}}})(e);if(!t.success)return{success:!1,error:"Check-in original não encontrado"};let n=t.data.slug+"-copia",r=1;for(;await uf(n);)n=t.data.slug+"-copia-"+r,r++;const i={...t.data,slug:n,title:t.data.title+" (Cópia)",isPublished:!1};return delete i.id,delete i.createdAt,delete i.updatedAt,await sf(i)}catch(t){return{success:!1,error:t.message}}},df=e.createContext(),pf=()=>{const t=e.useContext(df);if(!t)throw new Error("useCheckin must be used within a CheckinProvider");return t},mf=({children:t})=>{const{slug:n}=function(){let{matches:t}=e.useContext(ne),n=t[t.length-1];return n?n.params:{}}(),r=ce(),[i,s]=e.useState(null),[a,o]=e.useState(!0),[c,l]=e.useState(null);e.useEffect(()=>{(async()=>{if(!n)return s({title:"O Bootcamp Programador em 7 Dias está chegando",countdownDate:"2025-08-19T20:00:00",whatsappUrl:"https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i",calendarUrl:"https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z",recordingUrl:"https://pay.assiny.com.br/38ca3c/node/97708J",codeUrl:"https://pay.assiny.com.br/de8237/node/242143",isPublished:!0,lessons:[{id:0,day:"TERÇA",date:"19 AGO",title:"Fundamentos da Programação: Seu Mapa do Tesouro",time:"Ao vivo às 20h no Zoom",type:"live",color:"primary",gradient:"from-primary/20 to-primary-light/20",border:"border-primary/30",icon:"🚀",topics:["O que é programação e como funciona o mundo dos códigos","Passo a passo completo para se tornar um programador profissional","As tecnologias mais procuradas pelas empresas em 2025","Como dominar as ferramentas que o mercado exige","Início do nosso projeto prático + entrega do mapa completo da sua jornada"]},{id:1,day:"QUARTA",date:"20 AGO",title:"Segunda Tecnologia + O Que Empresas Procuram",time:"Ao vivo às 20h no Zoom",type:"live",color:"emerald",gradient:"from-emerald-500/20 to-green-500/20",border:"border-emerald-500/30",icon:"💡",topics:["Aprendendo nossa segunda tecnologia essencial","Evolução significativa do nosso projeto prático","Os requisitos reais que empresas buscam em candidatos","Como se destacar em processos seletivos","Habilidades técnicas e comportamentais valorizadas"]},{id:2,day:"QUINTA",date:"21 AGO",title:"⭐ AULA MAIS IMPORTANTE: JavaScript + DevClub",time:"Ao vivo às 20h no Zoom",type:"live",color:"red",gradient:"from-red-500/20 to-orange-500/20",border:"border-red-500/30",icon:"🔥",topics:["JavaScript: a linguagem de programação mais usada do mundo","Deixando nossa aplicação 90% pronta e funcional","Técnicas avançadas que impressionam recrutadores","Tudo sobre o DevClub: sua comunidade de transformação","Como aproveitar ao máximo nossa metodologia exclusiva"]},{id:3,day:"SÁBADO",date:"23 AGO",title:"🎁 AULA BÔNUS: Tira-Dúvidas Exclusivo com Rodolfo",time:"Ao vivo às 14h no Zoom",type:"live",color:"yellow",gradient:"from-yellow-500/20 to-amber-500/20",border:"border-yellow-500/30",icon:"💬",topics:["Sessão exclusiva de perguntas e respostas ao vivo","Resolução de dúvidas técnicas do projeto","Mentoria personalizada para seus desafios","Dicas avançadas que não cabem nas aulas regulares","Networking e conexão direta com o instrutor"]},{id:4,day:"DOMINGO",date:"24 AGO",title:"Masterclass com Fernanda: A Melhor Recrutadora do Brasil",time:"Ao vivo às 20h no Zoom",type:"live",color:"purple",gradient:"from-purple-500/20 to-violet-500/20",border:"border-purple-500/30",icon:"👩‍💼",topics:["Como criar um LinkedIn que gera entrevistas automaticamente","Currículo perfeito: template que aprovamos em grandes empresas","Preparação completa para entrevistas técnicas e comportamentais","As perguntas mais difíceis e como respondê-las com confiança","Segredos de recrutadores que ninguém te conta"]}]}),void o(!1);try{o(!0),l(null);const e=`checkin-${n}`,t=sessionStorage.getItem(e);if(t){const r=JSON.parse(t);s(r),o(!1);const i=await of(n);i.success&&i.data.isPublished&&(s(i.data),sessionStorage.setItem(e,JSON.stringify(i.data)))}else{const t=await of(n);if(!t.success)return l("Check-in não encontrado"),void r("/404");if(!t.data.isPublished)return l("Check-in não está publicado"),void r("/404");s(t.data),sessionStorage.setItem(e,JSON.stringify(t.data))}}catch(e){l("Erro ao carregar dados do check-in"),r("/404")}finally{o(!1)}})()},[n,r]);const u={checkinData:i,loading:a,error:c,slug:n};return m.jsx(df.Provider,{value:u,children:t})},ff=e.memo(({targetDate:t})=>{const{checkinData:n}=pf(),i=e.useRef(null),[s,a]=e.useState({days:0,hours:0,minutes:0,seconds:0});e.useEffect(()=>{const e=()=>{const e=+new Date(t)-+new Date;a(e>0?{days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}:{days:0,hours:0,minutes:0,seconds:0})};return e(),i.current=setInterval(e,1e3),()=>{i.current&&(clearInterval(i.current),i.current=null)}},[t]);const o=[{label:"Dias",value:s.days},{label:"Horas",value:s.hours},{label:"Min",value:s.minutes},{label:"Seg",value:s.seconds}];return m.jsxs("div",{className:"space-y-6",children:[m.jsxs(r.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},className:"text-center",children:[m.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-primary text-glow mb-2",style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:"CONTAGEM REGRESSIVA"}),m.jsx("p",{className:"text-text-muted",style:{fontFamily:"var(--font-sans)"},children:(e=>{if(!e)return"Até segunda-feira, 19 de agosto, às 20h";try{const t=new Date(e),n={weekday:"long",day:"numeric",month:"long",hour:"numeric",minute:"2-digit"};return`Até ${t.toLocaleDateString("pt-BR",n).toLowerCase()}`}catch(t){return"Até segunda-feira, 19 de agosto, às 20h"}})((null==n?void 0:n.countdownDate)||t)})]}),m.jsx("div",{className:"flex justify-center gap-4 md:gap-6",children:o.map((e,t)=>m.jsxs(r.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{delay:.1*t,duration:.6,type:"spring",stiffness:100},className:"countdown-digit group hover:scale-105 transition-transform duration-300",children:[m.jsx(r.div,{initial:{scale:1.2,opacity:.5},animate:{scale:1,opacity:1},transition:{duration:.3},className:"countdown-number text-red-500",style:{textShadow:"0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.6), 0 0 30px rgba(239, 68, 68, 0.4)"},children:String(e.value).padStart(2,"0")},e.value),m.jsx("div",{className:"countdown-label",children:e.label}),m.jsx("div",{className:"absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",style:{boxShadow:"0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(239, 68, 68, 0.3), 0 0 60px rgba(239, 68, 68, 0.1)"}})]},e.label))}),m.jsx(r.div,{animate:{scale:[1,1.1,1],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0,ease:"easeInOut"},className:"flex justify-center",children:m.jsx("div",{className:"w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"})}),m.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:.8},className:"text-center text-text-muted text-sm max-w-md mx-auto",style:{fontFamily:"var(--font-sans)"},children:"⏰ Após esse prazo, não será possível participar do evento"})]})}),gf=()=>m.jsxs("div",{className:"relative",children:[m.jsxs(r.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.8,ease:"easeOut"},className:"video-container relative group",children:[m.jsx("div",{className:"relative aspect-video bg-gradient-to-br from-secondary to-background rounded-2xl overflow-hidden",children:m.jsx("iframe",{id:"panda-1a9c72f3-b5f7-4062-b44e-f43628f61fb8",src:"https://player-vz-857eb61a-4f3.tv.pandavideo.com.br/embed/?v=1a9c72f3-b5f7-4062-b44e-f43628f61fb8",style:{border:"none"},allow:"accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture",allowFullScreen:!0,width:"100%",height:"100%",fetchpriority:"high",className:"w-full h-full object-cover rounded-2xl"})}),m.jsx(r.div,{animate:{y:[-10,10,-10]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},className:"absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full backdrop-blur-sm border border-primary/50"}),m.jsx(r.div,{animate:{y:[10,-10,10]},transition:{duration:3,repeat:1/0,ease:"easeInOut",delay:1},className:"absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full backdrop-blur-sm border border-purple-500/50"})]}),m.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.8},className:"mt-6 glass-card p-4 space-y-3",children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center",children:m.jsx("span",{className:"text-background font-bold text-xl",children:"R"})}),m.jsxs("div",{children:[m.jsx("h5",{className:"font-semibold text-text-light",children:"Rodolfo Mori"}),m.jsx("p",{className:"text-sm text-text-muted",children:"Fundador DevClub"})]})]}),m.jsx("p",{className:"text-sm text-text-muted leading-relaxed",children:'"Confira esta mensagem exclusiva sobre o check-in do Bootcamp Programador em 7 Dias. É fundamental que você confirme sua presença para garantir sua vaga!"'}),m.jsxs("div",{className:"flex items-center gap-4 text-xs text-text-muted",children:[m.jsxs("span",{className:"flex items-center gap-1",children:[m.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full"}),"Disponível"]}),m.jsx("span",{children:"Mensagem importante"}),m.jsx("span",{className:"flex items-center gap-1",children:"🎯 Check-in obrigatório"})]})]}),m.jsx("div",{className:"absolute -inset-20 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl -z-10 opacity-50"})]}),yf=({text:t,className:n="",delay:i=0,speed:s=50})=>{const[a,o]=e.useState(""),[c,l]=e.useState(!0),[u,h]=e.useState(!1);return e.useEffect(()=>{let e;const n=setTimeout(()=>{let n=0;const r=()=>{n<t.length?(o(t.slice(0,n+1)),n++,e=setTimeout(r,s)):(h(!0),setTimeout(()=>l(!1),1e3))};r()},1e3*i);return()=>{clearTimeout(e),clearTimeout(n)}},[t,i,s]),e.useEffect(()=>{if(!u){const e=setInterval(()=>{l(e=>!e)},500);return()=>clearInterval(e)}},[u]),m.jsxs(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:i,duration:.5},className:`relative ${n}`,children:[m.jsx("span",{children:a}),m.jsx(r.span,{animate:{opacity:c?1:0},transition:{duration:.1},className:"inline-block w-1 bg-primary ml-1",style:{height:"1em"},children:"|"})]})},vf=({name:t,photo:n,onCredentialGenerated:r,shouldGenerate:i})=>{const s=e.useRef(null),a=async()=>{const e=s.current;if(!e)return;const i=e.getContext("2d");e.width=800,e.height=500;const a=i.createLinearGradient(0,0,800,500);a.addColorStop(0,"#020A13"),a.addColorStop(.3,"#0A2E4D"),a.addColorStop(.7,"#020A13"),a.addColorStop(1,"#052033"),i.fillStyle=a,i.fillRect(0,0,800,500),i.fillStyle="rgba(55, 227, 89, 0.05)",i.font="12px monospace";const o=["function transformLife() {","  const knowledge = learn();","  const skills = practice();","  return code + passion;","}","bootcamp.start();","while(learning) {","  grow();","}"];for(let t=0;t<o.length;t++)i.fillText(o[t],20+t%3*250,50+60*t);const c=50,l=50,u=700,h=400,d=i.createLinearGradient(c,l,c,450);if(d.addColorStop(0,"rgba(255, 255, 255, 0.1)"),d.addColorStop(1,"rgba(255, 255, 255, 0.05)"),i.fillStyle=d,i.fillRect(c,l,u,h),i.strokeStyle="rgba(55, 227, 89, 0.3)",i.lineWidth=2,i.strokeRect(c,l,u,h),i.fillStyle="#37E359",i.font="bold 32px Arial",i.fillText("🚀 DEVCLUB",90,110),i.fillStyle="#F8F9FA",i.font="bold 24px Arial",i.fillText("BOOTCAMP PROGRAMADOR",90,150),i.font="bold 24px Arial",i.fillText("EM 7 DIAS",90,180),n)try{const e=new Image;e.crossOrigin="anonymous",e.onload=()=>{const t=570,n=120,r=e.width/e.height;let s,a,o,c;r>1?(a=n,s=n*r,o=t-(s-n)/2,c=90):(s=n,a=n/r,o=t,c=90-(a-n)/2),i.save(),i.beginPath(),i.arc(630,150,60,0,2*Math.PI),i.clip(),i.drawImage(e,o,c,s,a),i.restore(),i.strokeStyle="#37E359",i.lineWidth=3,i.beginPath(),i.arc(630,150,60,0,2*Math.PI),i.stroke(),p()},e.onerror=()=>{p()},e.src=n}catch(m){p()}else{const e=570,t=90,n=120;i.fillStyle="rgba(55, 227, 89, 0.2)",i.beginPath(),i.arc(e+n/2,t+n/2,n/2,0,2*Math.PI),i.fill(),i.fillStyle="#37E359",i.font="60px Arial",i.textAlign="center",i.fillText("👤",e+n/2,t+n/2+20),i.strokeStyle="#37E359",i.lineWidth=3,i.stroke(),p()}function p(){try{i.textAlign="left",i.fillStyle="#F8F9FA",i.font="bold 36px Arial";const n=270;i.fillText(t||"PARTICIPANTE",90,n);const s=Math.floor(1e4*Math.random())+1;i.fillStyle="#37E359",i.font="20px monospace",i.fillText(`ID: #DC2025-${String(s).padStart(4,"0")}`,90,n+40),i.fillStyle="#94A3B8",i.font="bold 18px Arial",i.fillText("BOOTCAMP ONLINE • 2025",90,n+80),i.fillStyle="#37E359",i.font="bold 20px Arial",i.fillText("✅ CONFIRMADO",90,n+120);const a=410,o=i.createLinearGradient(90,a,670,a);o.addColorStop(0,"#37E359"),o.addColorStop(.5,"#52FF74"),o.addColorStop(1,"#37E359"),i.strokeStyle=o,i.lineWidth=4,i.beginPath(),i.moveTo(90,a),i.lineTo(670,a),i.stroke();const c=e.toDataURL("image/png",1);r&&r(c,s)}catch(m){}}};return e.useEffect(()=>{i&&t&&a()},[i,t,n]),m.jsx("canvas",{ref:s,style:{display:"none"},width:800,height:500})},wf=({isOpen:e,onClose:t,credentialImage:n,ticketId:s,userName:a})=>{const{checkinData:o}=pf(),c=[{name:"LinkedIn",icon:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6",fill:"currentColor",children:m.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),color:"bg-[#0077B5] hover:bg-[#005885] border border-[#0077B5]/20",action:()=>l()},{name:"Instagram",icon:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6",fill:"currentColor",children:m.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),color:"bg-gradient-to-br from-[#E4405F] via-[#F77737] to-[#FCAF45] hover:from-[#C13584] hover:via-[#E1306C] hover:to-[#F56040] border border-pink-500/20",action:()=>d()},{name:"Twitter/X",icon:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6",fill:"currentColor",children:m.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),color:"bg-black hover:bg-gray-800 border border-gray-600/20",action:()=>u()},{name:"WhatsApp",icon:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6",fill:"currentColor",children:m.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"})}),color:"bg-[#25D366] hover:bg-[#1DA851] border border-green-400/20",action:()=>h()}],l=()=>{const e=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&text=${encodeURIComponent("🚀 Acabei de confirmar minha presença no Bootcamp Programador em 7 Dias da DevClub! \n\n7 dias intensivos que podem mudar minha carreira na programação. Do zero ao primeiro emprego como desenvolvedor!\n\n#DevClub #Programação #Bootcamp #CarreiraTech")}`;window.open(e,"_blank","width=600,height=400"),"undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CredentialShared",platform:"LinkedIn",ticket_id:s,content_name:"Check-in Bootcamp Programador em 7 Dias"})},u=()=>{const e=`https://twitter.com/intent/tweet?text=${encodeURIComponent("🚀 Confirmado no Bootcamp Programador em 7 Dias da @DevClub! \n\n7 dias que podem mudar minha vida profissional 💻✨\n\n#DevClub #Programação #Bootcamp #Tech")}&url=${encodeURIComponent(window.location.origin)}`;window.open(e,"_blank","width=600,height=400"),"undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CredentialShared",platform:"Twitter",ticket_id:s,content_name:"Check-in Bootcamp Programador em 7 Dias"})},h=()=>{String(s).padStart(4,"0"),window.location.origin;const e=(null==o?void 0:o.whatsappUrl)||"https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i";window.open(e,"_blank"),"undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CredentialShared",platform:"WhatsApp",ticket_id:s,content_name:"Check-in Bootcamp Programador em 7 Dias"})},d=()=>{var e;if(n){const t=document.createElement("a");t.download=`devclub-ingresso-${(null==(e=null==a?void 0:a.replace(/\s+/g,"-"))?void 0:e.toLowerCase())||"participante"}.png`,t.href=n,document.body.appendChild(t),t.click(),document.body.removeChild(t),"undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CredentialDownloaded",ticket_id:s,content_name:"Check-in Bootcamp Programador em 7 Dias"})}};return e?m.jsx(i,{children:m.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[m.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,className:"absolute inset-0 bg-black/70 backdrop-blur-sm"}),m.jsx(r.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{type:"spring",duration:.5},className:"relative w-full h-full md:max-w-4xl md:h-auto md:mx-4 md:max-h-[90vh] overflow-y-auto scrollbar-hide modal-fullscreen-mobile",onClick:e=>e.stopPropagation(),children:m.jsxs("div",{className:"glass-card p-4 md:p-6 lg:p-8 relative bg-gradient-to-br from-background via-secondary/20 to-background border border-primary/20 shadow-2xl h-full md:h-auto flex flex-col",children:[m.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-t-2xl"}),m.jsx("div",{className:"absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"}),m.jsx("div",{className:"absolute bottom-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl animate-pulse",style:{animationDelay:"1s"}}),m.jsx(r.button,{onClick:t,whileHover:{scale:1.1},whileTap:{scale:.9},className:"absolute top-4 right-4 w-12 h-12 md:w-10 md:h-10 bg-red-500/20 hover:bg-red-500/30 border-2 border-red-500/30 rounded-full flex items-center justify-center text-red-400 hover:text-red-300 transition-all duration-300 z-10",children:m.jsx("span",{className:"text-lg md:text-base font-bold",children:"✕"})}),m.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"text-center mb-8 relative",children:[m.jsx("div",{className:"absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"}),m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-full border border-primary/30 mb-6",children:m.jsx("div",{className:"text-4xl animate-bounce",children:"🎉"})}),m.jsx("div",{className:"absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none",children:[...Array(6)].map((e,t)=>m.jsx(r.div,{initial:{opacity:0,scale:0,y:0},animate:{opacity:[0,1,0],scale:[0,1,0],y:[-20,-60,-100]},transition:{duration:2,repeat:1/0,delay:.3*t,ease:"easeOut"},className:"absolute w-2 h-2 bg-primary rounded-full",style:{left:12*t-30+"px",top:"10px"}},t))})]}),m.jsx(r.h2,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4,duration:.6},className:"text-3xl md:text-4xl font-bold text-text-light mb-4 bg-gradient-to-r from-text-light via-primary to-text-light bg-clip-text text-transparent bg-300% animate-gradient-x",children:"🎫 Seu Ingresso foi Gerado!"}),m.jsxs(r.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:"text-lg text-text-muted max-w-2xl mx-auto leading-relaxed",children:["Agora é só compartilhar e se preparar para os"," ",m.jsx("span",{className:"text-primary font-semibold",children:"7 dias que vão transformar sua vida!"}),m.jsx("br",{}),m.jsx("span",{className:"text-sm text-text-muted/80",children:"Sua jornada para se tornar um programador profissional começa aqui 🚀"})]})]}),m.jsx(r.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:.4},className:"mb-8 flex justify-center",children:n&&m.jsxs("div",{className:"relative group",children:[m.jsx("img",{src:n,alt:"Credencial do Bootcamp",className:"max-w-full h-auto rounded-lg shadow-2xl border border-primary/20 group-hover:scale-105 transition-transform duration-300",style:{maxHeight:"400px"}}),m.jsx("div",{className:"absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center",children:m.jsx("span",{className:"text-text-light font-semibold",children:"Clique para ampliar"})})]})}),m.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"space-y-6",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[m.jsxs(r.button,{onClick:d,whileHover:{scale:1.05,boxShadow:"0 10px 25px rgba(55, 227, 89, 0.3)"},whileTap:{scale:.95},className:"inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-background font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"})}),m.jsx("div",{className:"relative z-10 group-hover:scale-110 transition-transform duration-300",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6",fill:"currentColor",children:m.jsx("path",{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"})})}),m.jsx("span",{className:"relative z-10",children:"Baixar Imagem"})]}),m.jsxs(r.button,{onClick:async()=>{try{if(n){const e=await fetch(n),t=await e.blob();await navigator.clipboard.write([new ClipboardItem({"image/png":t})]),alert("✅ Imagem copiada para a área de transferência!")}}catch(e){d()}},whileHover:{scale:1.05,boxShadow:"0 10px 25px rgba(255, 255, 255, 0.1)"},whileTap:{scale:.95},className:"inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary/30 text-text-light font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"})}),m.jsx("div",{className:"relative z-10 group-hover:scale-110 transition-transform duration-300",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6",fill:"currentColor",children:m.jsx("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}),m.jsx("span",{className:"relative z-10",children:"Copiar Imagem"})]})]}),m.jsx("div",{className:"text-center",children:m.jsxs(r.button,{onClick:()=>window.open("https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z","_blank"),whileHover:{scale:1.05,boxShadow:"0 10px 25px rgba(255, 215, 0, 0.3)"},whileTap:{scale:.95},className:"inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-amber-500 hover:to-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl relative overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"})}),m.jsx("div",{className:"relative z-10 group-hover:scale-110 transition-transform duration-300",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-6 h-6",fill:"currentColor",children:m.jsx("path",{d:"M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"})})}),m.jsx("span",{className:"relative z-10",children:"📅 Adicionar Aula 1 à Agenda"})]})}),m.jsxs("div",{className:"text-center",children:[m.jsx("h3",{className:"text-xl font-bold text-text-light mb-4",style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:"Compartilhe nas Redes Sociais"}),m.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto",children:c.map((e,t)=>m.jsxs(r.button,{onClick:e.action,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8+.1*t},whileHover:{scale:1.05,boxShadow:"0 10px 25px rgba(0,0,0,0.2)"},whileTap:{scale:.95},className:`\n                        ${e.color} text-white font-semibold\n                        p-6 rounded-2xl transition-all duration-300\n                        flex flex-col items-center gap-3 group\n                        shadow-lg hover:shadow-xl backdrop-blur-sm\n                        relative overflow-hidden\n                      `,children:[m.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"})}),m.jsx("div",{className:"relative z-10 p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110",children:e.icon}),m.jsx("span",{className:"text-sm font-bold relative z-10 group-hover:text-white transition-colors duration-300",children:e.name})]},e.name))})]}),m.jsxs(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2},className:"bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 relative overflow-hidden",children:[m.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"}),m.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"}),m.jsxs("div",{className:"relative z-10",children:[m.jsxs("div",{className:"flex items-center justify-center gap-3 mb-6",children:[m.jsx("div",{className:"p-3 bg-primary/20 rounded-xl",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-8 h-8 text-primary",fill:"currentColor",children:m.jsx("path",{d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"})})}),m.jsx("h4",{className:"text-2xl font-bold text-text-light",style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:"Dicas de Compartilhamento"})]}),m.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[m.jsxs("div",{className:"glass-card p-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[m.jsx("div",{className:"p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-pink-400",fill:"currentColor",children:m.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),m.jsx("h5",{className:"font-bold text-text-light",children:"Instagram"})]}),m.jsxs("ul",{className:"text-sm text-text-muted space-y-1",children:[m.jsx("li",{children:"• Baixe a imagem e poste no feed"}),m.jsx("li",{children:"• Use nos stories com #DevClub"}),m.jsx("li",{children:"• Marque @devclub.oficial"})]})]}),m.jsxs("div",{className:"glass-card p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[m.jsx("div",{className:"p-2 bg-blue-500/20 rounded-lg",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-blue-400",fill:"currentColor",children:m.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),m.jsx("h5",{className:"font-bold text-text-light",children:"LinkedIn"})]}),m.jsxs("ul",{className:"text-sm text-text-muted space-y-1",children:[m.jsx("li",{children:"• Compartilhe no seu perfil"}),m.jsx("li",{children:"• Use hashtags #DevClub #Tech"}),m.jsx("li",{children:"• Conecte com outros dev"})]})]}),m.jsxs("div",{className:"glass-card p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[m.jsx("div",{className:"p-2 bg-green-500/20 rounded-lg",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-green-400",fill:"currentColor",children:m.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"})})}),m.jsx("h5",{className:"font-bold text-text-light",children:"WhatsApp"})]}),m.jsxs("ul",{className:"text-sm text-text-muted space-y-1",children:[m.jsx("li",{children:"• Envie para amigos interessados"}),m.jsx("li",{children:"• Compartilhe em grupos de tech"}),m.jsx("li",{children:"• Convide para estudar junto"})]})]}),m.jsxs("div",{className:"glass-card p-4 bg-gradient-to-br from-gray-600/10 to-gray-800/10 border border-gray-500/20",children:[m.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[m.jsx("div",{className:"p-2 bg-gray-600/20 rounded-lg",children:m.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-gray-300",fill:"currentColor",children:m.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})}),m.jsx("h5",{className:"font-bold text-text-light",children:"Twitter/X"})]}),m.jsxs("ul",{className:"text-sm text-text-muted space-y-1",children:[m.jsx("li",{children:"• Thread com sua jornada"}),m.jsx("li",{children:"• Retweet com comentário"}),m.jsx("li",{children:"• Use #DevClub #100DaysOfCode"})]})]})]}),m.jsxs("div",{className:"mt-6 text-center p-4 bg-primary/10 rounded-xl border border-primary/20",children:[m.jsx("p",{className:"text-text-light font-semibold mb-2",children:"🎯 Quanto mais você compartilhar, mais pessoas você pode inspirar!"}),m.jsx("p",{className:"text-sm text-text-muted",children:"Sua credencial pode ser o empurrão que alguém precisa para mudar de vida através da programação."})]}),m.jsx("div",{className:"mt-8 text-center",children:m.jsx(r.button,{onClick:t,whileHover:{scale:1.05},whileTap:{scale:.95},className:"px-8 py-4 bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/30",children:"✨ Finalizar Check-in"})})]})]})]})]})})]})}):null},bf=({onComplete:t,playSuccessSound:n,isActive:r})=>{const{checkinData:i}=pf(),[s,a]=e.useState(3),[o,c]=e.useState(!0),[l,u]=e.useState(!1);e.useEffect(()=>{if(!r)return;const e=setInterval(()=>{a(t=>t<=1?(clearInterval(e),window.open((null==i?void 0:i.whatsappUrl)||"https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i","_blank"),c(!1),0):t-1)},1e3);return()=>clearInterval(e)},[r]);const h=()=>{u(!l)};return o?m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsx("div",{className:"space-y-4",children:m.jsx("div",{className:"bg-green-500/10 border border-green-500/20 rounded-xl p-6",children:m.jsxs("div",{className:"text-center space-y-3",children:[m.jsx("div",{className:"text-4xl animate-pulse",children:"💬"}),m.jsx("p",{className:"text-text-light font-medium",children:"Entre no grupo do WhatsApp"}),m.jsx("div",{className:"text-3xl font-bold text-green-500",children:s}),m.jsx("p",{className:"text-text-muted text-sm",children:"Redirecionando automaticamente..."})]})})})}):m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsx("div",{className:"space-y-6",children:m.jsxs("div",{className:"text-center",children:[m.jsx("h4",{className:"text-lg font-semibold text-text-light mb-2",children:"💬 Entrar no Grupo do WhatsApp"}),m.jsx("p",{className:"text-text-muted text-sm mb-7",children:"O link do WhatsApp foi aberto em uma nova aba"}),m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer",onClick:h,children:[m.jsx("input",{type:"checkbox",checked:l,onChange:h,className:"w-5 h-5 text-primary bg-transparent border-2 border-primary/30 rounded focus:ring-primary/50 focus:ring-2 cursor-pointer"}),m.jsx("label",{className:"text-text-light text-sm cursor-pointer flex-1",children:"Já entrei no grupo do WhatsApp"})]}),m.jsxs("div",{className:"text-center",children:[m.jsx("p",{className:"text-text-muted text-sm mb-2",children:"Link do Grupo:"}),m.jsx("a",{href:(null==i?void 0:i.whatsappUrl)||"https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i",target:"_blank",rel:"noopener noreferrer",className:"text-green-500 hover:text-green-400 underline text-sm",children:"Abrir WhatsApp novamente"})]}),m.jsx("div",{className:"text-center",children:m.jsx("button",{onClick:()=>{l?(t(),n()):alert("Por favor, confirme que você entrou no grupo do WhatsApp")},disabled:!l,className:"px-8 py-3 font-semibold rounded-lg transition-colors duration-200 "+(l?"bg-primary hover:bg-primary-light text-white":"bg-gray-500/50 text-gray-400 cursor-not-allowed"),children:"Continuar"})})]})]})})})},xf="https://script.google.com/macros/s/AKfycbxNu3p8f_O5ZxmRqNqXjPe8rF3O3iLvLVLRjO8x5vCqgKCEQJEOBQFoGzNxvVAZm8FJ/exec",_f=(e,t)=>({recording:{yes:"SIM, quero a gravação vitalícia",no:"NÃO, não quero",no_thanks:"Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter a gravação vitalícia",already_purchased:"SIM (Já garanti a gravação vitalícia)"},code:{yes:"SIM, quero o código completo",no:"NÃO, não quero",no_thanks:"Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter o código completo",already_purchased:"SIM (Já garanti o código completo)"}}[t][e]||e||"Não respondido"),Ef=e.memo(({value:e,onChange:t,placeholder:n})=>m.jsx("input",{type:"text",value:e,onChange:t,placeholder:n,className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",autoFocus:!0})),Tf=e.memo(({id:e,checked:t,onChange:n,label:r,className:i=""})=>m.jsxs("div",{className:`flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors ${i}`,children:[m.jsx("input",{type:"checkbox",id:e,checked:t,onChange:n,className:"w-5 h-5 text-primary bg-transparent border-2 border-primary/30 rounded focus:ring-primary/50 focus:ring-2 cursor-pointer"}),m.jsx("label",{htmlFor:e,className:"text-text-light text-sm cursor-pointer flex-1",children:r})]})),Cf=e.memo(({onClick:e,disabled:t,children:n,className:r=""})=>m.jsx("button",{onClick:e,disabled:t,className:`px-8 py-3 font-semibold rounded-lg transition-colors duration-200 ${r}`,children:n})),If=e.memo(({currentStep:t,completedSteps:n,userData:i,onStepComplete:s,onClose:a})=>{const{checkinData:o}=pf(),[c,l]=e.useState({name:i.name||"",email:i.email||"",recordingResponse:"",codeResponse:""}),[u,h]=e.useState(null),[d,p]=e.useState(null),[f,g]=e.useState(null),[y,v]=e.useState(!1),[w,b]=e.useState(!1),[x,_]=e.useState(!1),[E,T]=e.useState(!1),[C,I]=e.useState({computer:!1,paper:!1,pen:!1,quietPlace:!1,internet:!1}),S=e.useRef(null),N=e.useCallback(()=>{try{const e=new(window.AudioContext||window.webkitAudioContext),t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination),t.frequency.setValueAtTime(800,e.currentTime),t.frequency.setValueAtTime(1e3,e.currentTime+.1),n.gain.setValueAtTime(.3,e.currentTime),n.gain.exponentialRampToValueAtTime(.01,e.currentTime+.2),t.start(e.currentTime),t.stop(e.currentTime+.2)}catch(e){}},[]),[k,A]=e.useState(null),[R,D]=e.useState({noThanks:!1,alreadyHave:!1}),[O,j]=e.useState(null),[P,L]=e.useState({noThanks:!1,alreadyHave:!1}),[M,V]=e.useState(!1),[U,F]=e.useState(3);e.useEffect(()=>{if(M&&U>0){const e=setTimeout(()=>{F(e=>e-1)},1e3);return()=>clearTimeout(e)}if(M&&0===U){const e=(null==o?void 0:o.calendarUrl)||"https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z";window.open(e,"_blank"),V(!1),F(3)}},[M,U]);const B=e.useMemo(()=>[{id:0,icon:"👤",title:"Confirmar Dados",description:"Digite seu nome completo para o ingresso",buttonText:`Confirmo que sou ${c.name||"[NOME]"}`,color:"bg-blue-500",type:"form"},{id:1,icon:"📅",title:"Adicionar na Agenda",description:"Adicione o evento no seu Google Calendar com link do Zoom",buttonText:"Adicionei no meu calendário",color:"bg-purple-500",type:"action"},{id:2,icon:"💬",title:"Entrar no WhatsApp",description:"Junte-se ao grupo exclusivo do bootcamp",buttonText:"Entrei no grupo exclusivo",color:"bg-green-500",type:"external"},{id:3,icon:"📹",title:"Configurar Zoom",description:"Baixe o Zoom e teste áudio/vídeo",buttonText:"Zoom configurado e testado",color:"bg-indigo-500",type:"zoom"},{id:4,icon:"💻",title:"Preparar Ambiente",description:"Certifique-se de ter tudo pronto",buttonText:"Tenho tudo preparado",color:"bg-orange-500",type:"equipment"},{id:5,icon:"🎥",title:"Gravação Vitalícia",description:"Garanta acesso vitalício às gravações do evento",buttonText:"Quero a gravação vitalícia",color:"bg-red-500",type:"recording"},{id:6,icon:"💻",title:"Código Completo do Projeto",description:"Tenha acesso ao código completo da aplicação",buttonText:"Quero o código completo",color:"bg-emerald-500",type:"code"},{id:7,icon:"🎫",title:"Gerar Ingresso Personalizado",description:"Adicione sua foto e gere seu ingresso exclusivo",buttonText:"Gerar Meu Ingresso",color:"bg-primary",type:"credential"}],[c.name]),q=e.useCallback(e=>{l(t=>({...t,name:e.target.value}))},[]),z=e.useCallback(e=>{l(t=>({...t,email:e.target.value}))},[]),$=e.useCallback(e=>{const t=e.target.files[0];if(t){if(!t.type.startsWith("image/"))return void alert("Por favor, selecione apenas arquivos de imagem (JPG, PNG, etc.)");if(t.size>5242880)return void alert("A imagem deve ter no máximo 5MB");const e=new FileReader;e.onload=e=>{h(e.target.result)},e.readAsDataURL(t)}},[]),H=e.useCallback(()=>{b(!0)},[]),G=e.useCallback(e=>{A(e),l(t=>({...t,recordingResponse:e})),"yes"===e&&("undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"RecordingOfferAccepted",content_name:"Gravação Vitalícia Bootcamp",value:0,currency:"BRL"}),window.open((null==o?void 0:o.recordingUrl)||"https://pay.assiny.com.br/38ca3c/node/97708J","_blank"))},[]),K=e.useCallback(e=>{j(e),l(t=>({...t,codeResponse:e})),"yes"===e&&("undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CodeOfferAccepted",content_name:"Código Completo Bootcamp",value:0,currency:"BRL"}),window.open((null==o?void 0:o.codeUrl)||"https://pay.assiny.com.br/de8237/node/242143","_blank"))},[]),W=e.useCallback(async(e,t)=>{p(e),g(t),v(!0),b(!1),s(7),N();const n={name:c.name,email:c.email,recordingResponse:c.recordingResponse,codeResponse:c.codeResponse};(e=>{try{const t=localStorage.getItem("checkin_data"),n=t?JSON.parse(t):[];return n.push({name:e.name,email:e.email,date:(new Date).toLocaleDateString("pt-BR"),time:(new Date).toLocaleTimeString("pt-BR"),recordingResponse:_f(e.recordingResponse,"recording"),codeResponse:_f(e.codeResponse,"code"),timestamp:(new Date).toISOString()}),localStorage.setItem("checkin_data",JSON.stringify(n)),!0}catch(t){return!1}})(n);try{const e=await(async e=>{try{const t=(e,t)=>({recording:{yes:"SIM, quero a gravação vitalícia",no:"NÃO, não quero",no_thanks:"Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter a gravação vitalícia",already_purchased:"SIM (Já garanti a gravação vitalícia)"},code:{yes:"SIM, quero o código completo",no:"NÃO, não quero",no_thanks:"Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter o código completo",already_purchased:"SIM (Já garanti o código completo)"}}[t][e]||e||"Não respondido"),n={name:e.name,email:e.email,date:(new Date).toLocaleDateString("pt-BR"),time:(new Date).toLocaleTimeString("pt-BR"),recordingResponse:t(e.recordingResponse,"recording"),codeResponse:t(e.codeResponse,"code"),timestamp:new Date,userAgent:navigator.userAgent,url:window.location.href,referrer:document.referrer||"Direct"};return{success:!0,id:(await Hm(Hp(Qm,"checkins"),n)).id,data:n}}catch(t){return{success:!1,error:t.message}}})(n);if(!e.success)throw new Error(e.error)}catch(r){try{const e=await(async e=>{try{const n={name:e.name,email:e.email,date:(new Date).toLocaleDateString("pt-BR"),time:(new Date).toLocaleTimeString("pt-BR"),recordingResponse:e.recordingResponse||"",codeResponse:e.codeResponse||""},r=await fetch(xf,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});try{return await r.text(),!0}catch(t){return!0}}catch(r){try{const t=new FormData;return t.append("name",e.name),t.append("email",e.email),t.append("date",(new Date).toLocaleDateString("pt-BR")),t.append("time",(new Date).toLocaleTimeString("pt-BR")),t.append("recordingResponse",e.recordingResponse||""),t.append("codeResponse",e.codeResponse||""),await fetch(xf,{method:"POST",mode:"no-cors",body:t}),!0}catch(n){return!1}}})(n);if(!e)throw new Error("Falha no Google Sheets")}catch(i){try{await(async e=>{try{const t={name:e.name,email:e.email,date:(new Date).toLocaleDateString("pt-BR"),time:(new Date).toLocaleTimeString("pt-BR"),recordingResponse:_f(e.recordingResponse,"recording"),codeResponse:_f(e.codeResponse,"code"),timestamp:(new Date).toISOString()};return!!(await fetch("https://hook.us1.make.com/YOUR_WEBHOOK_URL",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok}catch(r){return!1}})(n)}catch(a){}}}"undefined"!=typeof fbq&&(fbq("track","Lead",{content_name:"Check-in Bootcamp Programador em 7 Dias",content_category:"Check-in",value:0,currency:"BRL",ticket_id:t}),fbq("track","CustomEvent",{event_name:"CheckinCompleted",ticket_id:t,content_name:"Check-in Bootcamp Programador em 7 Dias"}))},[s,N,c.name,c.email]),Q=e.useCallback(e=>0===e||(e<=6?n.includes(e-1):7===e&&n.includes(6)),[n]),J=e.useCallback(e=>n.includes(e),[n]),Y=e.useCallback(({step:e,isAccessible:t,isCompleted:n,isCurrent:r})=>m.jsxs("button",{onClick:()=>{if(t&&!n){if(0===e.id){if(!c.name.trim())return void alert("Por favor, digite seu nome completo");if(!c.email.trim())return void alert("Por favor, digite seu e-mail");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))return void alert("Por favor, digite um e-mail válido");s(e.id,{name:c.name,email:c.email})}else if(1===e.id){const e=(null==o?void 0:o.calendarUrl)||"https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z";window.open(e,"_blank")}else if(2===e.id){const e=(null==o?void 0:o.whatsappUrl)||"https://sndflw.com/i/bootcamp-programador-com-ia-em-7-dias-i";window.open(e,"_blank")}else if(3===e.id){if(!x)return void alert("Por favor, confirme que você baixou o Zoom e testou áudio/vídeo");s(e.id)}else if(4===e.id){if(!Object.values(C).every(e=>e))return void alert("Por favor, confirme todos os itens necessários");s(e.id)}else if(5===e.id){if(null===k)return;s(e.id)}else if(6===e.id){if(null===O)return;s(e.id)}else if(7===e.id)return void H();N()}},disabled:!t||n,className:`relative w-full p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${n?"bg-primary/20 border-primary text-primary cursor-default":t?`${e.color}/20 border-${e.color.split("-")[1]}-500 hover:${e.color}/30 text-text-light cursor-pointer`:"bg-gray-500/10 border-gray-500/30 text-gray-500 cursor-not-allowed"} ${r?"ring-2 ring-primary/50":""}`,children:[n&&m.jsx("div",{className:"absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center",children:m.jsx("svg",{className:"w-4 h-4 text-background",fill:"currentColor",viewBox:"0 0 20 20",children:m.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"text-2xl",children:e.icon}),m.jsxs("div",{className:"flex-1 text-left",children:[m.jsx("h3",{className:"font-semibold text-lg",style:{fontFamily:"var(--font-sans)"},children:e.title}),m.jsx("p",{className:"text-sm opacity-80 mb-2",children:e.description}),m.jsx("div",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium "+(n?"bg-primary/20 text-primary":"bg-white/10 text-current"),children:n?"✅ Concluído":e.buttonText})]})]})]}),[c.name,c.email,x,C,k,O,s,N,H]),X=e.useMemo(()=>{const e=B[t],i=m.jsx("div",{className:"mb-4 p-4 glass-card",children:m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-text-light mb-2",children:"Nome Completo *"}),m.jsx(Ef,{value:c.name,onChange:q,placeholder:"Digite seu nome completo"}),m.jsx("p",{className:"text-xs text-text-muted mt-2",children:"Este nome aparecerá no seu ingresso personalizado"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-sm font-medium text-text-light mb-2",children:"E-mail *"}),m.jsx("input",{type:"email",value:c.email,onChange:z,placeholder:"E-mail que você realizou a compra do ingresso",className:"w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50",required:!0}),m.jsx("p",{className:"text-xs text-text-muted mt-2",children:"Digite o mesmo e-mail usado na compra do ingresso"})]}),!J(0)&&m.jsx("div",{className:"text-center",children:m.jsxs(Cf,{onClick:()=>{if(c.name.trim()&&c.email.trim()){if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))return void alert("Por favor, digite um e-mail válido");s(0,{name:c.name,email:c.email}),N(),V(!0)}else alert("Por favor, preencha todos os campos")},disabled:!c.name.trim()||!c.email.trim(),className:c.name.trim()&&c.email.trim()?"bg-primary hover:bg-primary-light text-white":"bg-gray-500/50 text-gray-400 cursor-not-allowed",children:["Confirmo que sou ",c.name||"[NOME]"]})})]})});if(J(0)&&!J(1)){const e=(null==o?void 0:o.calendarUrl)||"https://calendar.google.com/calendar/u/0/r/eventedit?text=Bootcamp+Programador+em+7+Dias+-+Aula+1&details=Link+da+call:+https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&location=https://us06web.zoom.us/j/87985750737?pwd=IY4s28M2H02QTVCBDOcsKFb2Nb1wF1.1&dates=20250819T230000Z/20250820T010000Z",t=m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsx("div",{className:"space-y-6",children:m.jsxs("div",{className:"text-center",children:[m.jsx("h4",{className:"text-lg font-semibold text-text-light mb-2",children:"📅 Adicionar na Agenda"}),M&&U>0?m.jsx("div",{className:"space-y-4",children:m.jsx("div",{className:"bg-primary/10 border border-primary/20 rounded-xl p-6",children:m.jsxs("div",{className:"text-center space-y-3",children:[m.jsx("div",{className:"text-4xl animate-pulse",children:"⏰"}),m.jsx("p",{className:"text-text-light font-medium",children:"Adicione o evento a sua agenda"}),m.jsx("div",{className:"text-3xl font-bold text-primary",children:U}),m.jsx("p",{className:"text-text-muted text-sm",children:"Redirecionando automaticamente..."})]})})}):m.jsxs(m.Fragment,{children:[m.jsx("p",{className:"text-text-muted text-sm mb-7",children:"O link do Google Calendar foi aberto em uma nova aba"}),m.jsxs("div",{className:"space-y-4",children:[m.jsx(Tf,{id:"calendar-checkbox",checked:E,onChange:e=>T(e.target.checked),label:"Já adicionei a Aula 1 na minha agenda"}),m.jsxs("div",{className:"text-center",children:[m.jsx("p",{className:"text-text-muted text-sm mb-2",children:"Link do Convite:"}),m.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-primary hover:text-primary-light underline text-sm",children:"Abrir Google Calendar novamente"})]}),m.jsx("div",{className:"text-center",children:m.jsx(Cf,{onClick:()=>{E?(s(1),N()):alert("Por favor, confirme que você adicionou o evento na sua agenda")},disabled:!E,className:E?"bg-primary hover:bg-primary-light text-white":"bg-gray-500/50 text-gray-400 cursor-not-allowed",children:"Continuar"})})]})]})]})})});return m.jsxs("div",{className:"space-y-4",children:[i,t]})}if(!J(0))return i;if(2===e.id&&!J(2))return m.jsx(bf,{onComplete:()=>s(2),playSuccessSound:N,isActive:!0});if(3===e.id&&!J(3))return m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("h4",{className:"text-lg font-semibold text-text-light mb-2",children:"📹 Configure o Zoom"}),m.jsx("p",{className:"text-text-muted text-sm",children:"Para participar das aulas ao vivo, você precisa ter o Zoom instalado e testado"})]}),m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"bg-primary/10 border border-primary/20 rounded-xl p-4",children:[m.jsx("h5",{className:"font-medium text-text-light mb-3",children:"Passos necessários:"}),m.jsx("div",{className:"space-y-3",children:["Baixar o Zoom (gratuito)","Criar uma conta no Zoom","Testar microfone e câmera","Verificar se o áudio está funcionando"].map((e,t)=>m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-5 h-5 rounded bg-primary/20 flex items-center justify-center",children:m.jsx("span",{className:"text-xs text-primary",children:t+1})}),m.jsx("span",{className:"text-text-light text-sm",children:e})]},t))})]}),m.jsx(Tf,{id:"zoom-checkbox",checked:x,onChange:e=>_(e.target.checked),label:"Zoom configurado e testado"}),m.jsx("div",{className:"text-center",children:m.jsx(Cf,{onClick:()=>{x?(s(3),N()):alert("Por favor, confirme que você baixou o Zoom e testou áudio/vídeo")},disabled:!x,className:x?"bg-primary hover:bg-primary-light text-white":"bg-gray-500/50 text-gray-400 cursor-not-allowed",children:"Continuar"})})]})]})});if(4===e.id&&!J(4))return m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("h4",{className:"text-lg font-semibold text-text-light mb-2",children:"💻 Prepare seu Ambiente"}),m.jsx("p",{className:"text-text-muted text-sm",children:"Marque todos os itens que você tem disponível para o bootcamp"})]}),m.jsx("div",{className:"space-y-3",children:[{key:"computer",label:"Computador ou notebook funcionando",icon:"💻"},{key:"paper",label:"Papel para anotações",icon:"📄"},{key:"pen",label:"Caneta para escrever",icon:"✏️"},{key:"quietPlace",label:"Local tranquilo para assistir",icon:"🏠"},{key:"internet",label:"Conexão de internet estável",icon:"🌐"}].map(e=>m.jsx(Tf,{id:`equipment-${e.key}`,checked:C[e.key],onChange:t=>I(n=>({...n,[e.key]:t.target.checked})),label:`${e.icon} ${e.label}`},e.key))}),m.jsx("div",{className:"bg-primary/10 border border-primary/20 rounded-xl p-4",children:m.jsxs("p",{className:"text-text-light text-sm",children:[m.jsx("strong",{children:"💡 Dica:"})," Ter todos esses itens prontos vai garantir que você aproveite ao máximo o bootcamp!"]})}),m.jsx("div",{className:"text-center",children:m.jsx(Cf,{onClick:()=>{Object.values(C).every(e=>e)?(s(4),N()):alert("Por favor, confirme todos os itens necessários")},disabled:!Object.values(C).every(e=>e),className:Object.values(C).every(e=>e)?"bg-primary hover:bg-primary-light text-white":"bg-gray-500/50 text-gray-400 cursor-not-allowed",children:"Continuar"})})]})});if(5===e.id&&!J(5)){if(null===k)return m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("h4",{className:"text-lg font-semibold text-text-light mb-2",children:"🎥 Gravação Vitalícia do Evento"}),m.jsx("p",{className:"text-text-muted text-sm",children:"Garanta acesso vitalício às gravações completas do bootcamp"})]}),m.jsx("div",{className:"bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6",children:m.jsxs("div",{className:"text-center space-y-4",children:[m.jsx("div",{className:"text-4xl",children:"🎥"}),m.jsx("h5",{className:"text-xl font-bold text-text-light",children:"O que você vai receber:"}),m.jsxs("ul",{className:"text-text-light text-sm space-y-2",children:[m.jsx("li",{children:"✅ Gravações completas de todas as aulas"}),m.jsx("li",{children:"✅ Acesso vitalício (para sempre)"}),m.jsx("li",{children:"✅ Qualidade HD"}),m.jsx("li",{children:"✅ Possibilidade de assistir quantas vezes quiser"}),m.jsx("li",{children:"✅ Ideal para revisar o conteúdo"})]})]})}),m.jsxs("div",{className:"flex gap-4 justify-center",children:[m.jsx(Cf,{onClick:()=>G("yes"),className:"bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200",children:"✅ SIM, quero a gravação"}),m.jsx(Cf,{onClick:()=>G("no"),className:"bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200",children:"❌ NÃO, obrigado"})]})]})});if("no"===k||"yes"===k)return m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("p",{className:"text-text-muted text-sm mb-4",children:"Confirme sua decisão:"}),"yes"===k&&m.jsx("div",{className:"mb-4",children:m.jsx("a",{href:(null==o?void 0:o.recordingUrl)||"https://pay.assiny.com.br/38ca3c/node/97708J",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200",children:"💳 Quero a gravação (ir para checkout)"})})]}),m.jsxs("div",{className:"space-y-3",style:{position:"relative",zIndex:100},children:[m.jsx("div",{className:"p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 "+(R.noThanks?"bg-blue-500/20 border-blue-500/50":"bg-white/10 border-white/20 hover:bg-white/20"),style:{minHeight:"60px",userSelect:"none",position:"relative",zIndex:101},onClick:()=>{D({noThanks:!0,alreadyHave:!1})},children:m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("input",{type:"radio",name:"recording-option",checked:R.noThanks,onChange:()=>{D({noThanks:!0,alreadyHave:!1})},style:{width:"20px",height:"20px",cursor:"pointer",accentColor:"#3B82F6",pointerEvents:"auto"},className:"cursor-pointer"}),m.jsx("span",{className:"text-text-light text-sm flex-1 leading-relaxed",children:"Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter a gravação vitalícia"})]})}),m.jsx("div",{className:"p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 "+(R.alreadyHave?"bg-blue-500/20 border-blue-500/50":"bg-white/10 border-white/20 hover:bg-white/20"),style:{minHeight:"60px",userSelect:"none",position:"relative",zIndex:101},onClick:()=>{D({noThanks:!1,alreadyHave:!0})},children:m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("input",{type:"radio",name:"recording-option",checked:R.alreadyHave,onChange:()=>{D({noThanks:!1,alreadyHave:!0})},style:{width:"20px",height:"20px",cursor:"pointer",accentColor:"#3B82F6",pointerEvents:"auto"},className:"cursor-pointer"}),m.jsx("span",{className:"text-text-light text-sm flex-1 leading-relaxed",children:"SIM (Já garanti a gravação vitalícia)"})]})})]}),m.jsx("div",{className:"text-center space-y-3",children:m.jsx(Cf,{onClick:()=>{if(R.noThanks||R.alreadyHave){let e=k;R.noThanks?e="no_thanks":R.alreadyHave&&(e="already_purchased"),l(t=>({...t,recordingResponse:e})),s(5),N()}else alert("Por favor, selecione uma das opções")},disabled:!R.noThanks&&!R.alreadyHave,className:"font-semibold rounded-lg transition-colors duration-200 "+(R.noThanks||R.alreadyHave?"bg-primary hover:bg-primary-light text-white cursor-pointer":"bg-gray-500/50 text-gray-400 cursor-not-allowed"),children:"Continuar"})})]})})}if(6===e.id&&!J(6)){if(null===O)return m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("h4",{className:"text-lg font-semibold text-text-light mb-2",children:"💻 Código Completo do Projeto"}),m.jsx("p",{className:"text-text-muted text-sm",children:"Tenha acesso ao código completo da aplicação desenvolvida"})]}),m.jsx("div",{className:"bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-xl p-6",children:m.jsxs("div",{className:"text-center space-y-4",children:[m.jsx("div",{className:"text-4xl",children:"💻"}),m.jsx("h5",{className:"text-xl font-bold text-text-light",children:"O que você vai receber:"}),m.jsxs("ul",{className:"text-text-light text-sm space-y-2",children:[m.jsx("li",{children:"✅ Código completo da aplicação"}),m.jsx("li",{children:"✅ Todos os arquivos do projeto"}),m.jsx("li",{children:"✅ Documentação detalhada"}),m.jsx("li",{children:"✅ Instruções de instalação"}),m.jsx("li",{children:"✅ Acesso vitalício ao código"})]})]})}),m.jsxs("div",{className:"flex gap-4 justify-center",children:[m.jsx(Cf,{onClick:()=>K("yes"),className:"bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200",children:"✅ SIM, quero o código"}),m.jsx(Cf,{onClick:()=>K("no"),className:"bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200",children:"❌ NÃO, obrigado"})]})]})});if("no"===O||"yes"===O)return m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("p",{className:"text-text-muted text-sm mb-4",children:"Confirme sua decisão:"}),"yes"===O&&m.jsx("div",{className:"mb-4",children:m.jsx("a",{href:(null==o?void 0:o.codeUrl)||"https://pay.assiny.com.br/de8237/node/242143",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200",children:"💳 Quero o código (ir para checkout)"})})]}),m.jsxs("div",{className:"space-y-3",style:{position:"relative",zIndex:100},children:[m.jsx("div",{className:"p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 "+(P.noThanks?"bg-blue-500/20 border-blue-500/50":"bg-white/10 border-white/20 hover:bg-white/20"),style:{minHeight:"60px",userSelect:"none",position:"relative",zIndex:101},onClick:()=>{L({noThanks:!0,alreadyHave:!1})},children:m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("input",{type:"radio",name:"code-option",checked:P.noThanks,onChange:()=>{L({noThanks:!0,alreadyHave:!1})},style:{width:"20px",height:"20px",cursor:"pointer",accentColor:"#3B82F6",pointerEvents:"auto"},className:"cursor-pointer"}),m.jsx("span",{className:"text-text-light text-sm flex-1 leading-relaxed",children:"Confirmo que quero fazer o check-in e NÃO quero aproveitar a oportunidade de ter o código completo"})]})}),m.jsx("div",{className:"p-4 rounded-lg transition-all duration-200 cursor-pointer border-2 "+(P.alreadyHave?"bg-blue-500/20 border-blue-500/50":"bg-white/10 border-white/20 hover:bg-white/20"),style:{minHeight:"60px",userSelect:"none",position:"relative",zIndex:101},onClick:()=>{L({noThanks:!1,alreadyHave:!0})},children:m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("input",{type:"radio",name:"code-option",checked:P.alreadyHave,onChange:()=>{L({noThanks:!1,alreadyHave:!0})},style:{width:"20px",height:"20px",cursor:"pointer",accentColor:"#3B82F6",pointerEvents:"auto"},className:"cursor-pointer"}),m.jsx("span",{className:"text-text-light text-sm flex-1 leading-relaxed",children:"SIM (Já garanti o código completo)"})]})})]}),m.jsx("div",{className:"text-center space-y-3",children:m.jsx(Cf,{onClick:()=>{if(P.noThanks||P.alreadyHave){let e=O;P.noThanks?e="no_thanks":P.alreadyHave&&(e="already_purchased"),l(t=>({...t,codeResponse:e})),s(6),N()}else alert("Por favor, selecione uma das opções")},disabled:!P.noThanks&&!P.alreadyHave,className:"font-semibold rounded-lg transition-colors duration-200 "+(P.noThanks||P.alreadyHave?"bg-primary hover:bg-primary-light text-white cursor-pointer":"bg-gray-500/50 text-gray-400 cursor-not-allowed"),children:"Continuar"})})]})})}return 7!==e.id||J(7)?9===n.length?m.jsxs(r.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"mt-8 p-6 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl border border-primary/30 text-center",children:[m.jsx("div",{className:"text-4xl mb-4",children:"🎉"}),m.jsx("h3",{className:"text-2xl font-bold text-primary mb-2",style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:"Parabéns!"}),m.jsx("p",{className:"text-text-light mb-6",children:"Seu check-in foi realizado com sucesso! Você receberá um e-mail de confirmação em breve."}),m.jsx(Cf,{onClick:a,className:"btn-primary px-8 py-3",children:"✨ Gerar Ingresso Personalizado"})]}):null:m.jsx("div",{className:"mb-4 p-6 glass-card",children:m.jsxs("div",{className:"text-center space-y-6",children:[m.jsxs("div",{className:"space-y-4",children:[m.jsx("h4",{className:"text-lg font-semibold text-text-light",children:"📸 Adicione sua foto (opcional)"}),m.jsx("div",{onClick:()=>{var e;return null==(e=S.current)?void 0:e.click()},className:"border-2 border-dashed border-primary/30 hover:border-primary/50 rounded-xl p-8 cursor-pointer transition-all duration-300 group",children:u?m.jsxs("div",{className:"space-y-4",children:[m.jsx("img",{src:u,alt:"Preview",className:"w-32 h-32 object-cover rounded-full mx-auto border-4 border-primary/30"}),m.jsx("p",{className:"text-text-muted",children:"Clique para trocar a foto"})]}):m.jsxs("div",{className:"space-y-4",children:[m.jsx("div",{className:"text-4xl group-hover:scale-110 transition-transform duration-300",children:"📷"}),m.jsxs("div",{children:[m.jsx("p",{className:"text-text-light font-medium",children:"Clique para adicionar sua foto"}),m.jsx("p",{className:"text-sm text-text-muted mt-2",children:"JPG, PNG até 5MB • Opcional"})]})]})}),m.jsx("input",{ref:S,type:"file",accept:"image/*",onChange:$,className:"hidden"})]}),m.jsx("div",{className:"bg-primary/10 border border-primary/20 rounded-xl p-4",children:m.jsxs("p",{className:"text-text-light text-sm",children:[m.jsx("strong",{children:"Seu ingresso terá:"}),m.jsx("br",{}),"• Seu nome: ",m.jsx("span",{className:"text-primary",children:c.name}),m.jsx("br",{}),"• ID único personalizado",m.jsx("br",{}),"• Design exclusivo DevClub",m.jsx("br",{}),"• Ideal para compartilhar nas redes sociais"]})}),m.jsx("div",{className:"text-center",children:m.jsx(Cf,{onClick:H,className:"bg-primary hover:bg-primary-light text-white font-semibold rounded-lg transition-colors duration-200",children:"Gerar Meu Ingresso"})})]})})},[t,B,c.name,c.email,E,J,q,z,s,N,x,C,k,O,u,$,H,G,K,A,j,R,D,P,L,a,M,U]);return m.jsxs("div",{className:"space-y-4 md:space-y-6",children:[X,B.map(e=>m.jsx("div",{children:m.jsx(Y,{step:e,isAccessible:Q(e.id),isCompleted:J(e.id),isCurrent:t===e.id})},e.id)),m.jsx(vf,{name:c.name,photo:u,onCredentialGenerated:W,shouldGenerate:w}),m.jsx(wf,{isOpen:y,onClose:()=>v(!1),credentialImage:d,ticketId:f,userName:c.name})]})}),Sf=({isOpen:t,onClose:n})=>{const[s,a]=e.useState(0),[o,c]=e.useState([]),[l,u]=e.useState({name:"",email:""});e.useEffect(()=>{const e=e=>{"Escape"===e.key&&n()};return t&&document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[t,n]);const h=e=>["Confirmar Dados","Adicionar ao Calendário","Entrar no WhatsApp","Configurar Zoom","Preparar Ambiente","Gerar Ingresso","Gravação Vitalícia","Código Completo"][e]||`Etapa ${e+1}`,d=()=>{"undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CheckinModalClose",steps_completed:o.length,content_name:"Check-in Bootcamp Programador em 7 Dias"}),a(0),c([]),u({name:"",email:""}),n()};return t?m.jsx(i,{children:m.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[m.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:d}),m.jsx(r.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},transition:{duration:.4,ease:"easeOut"},className:"relative w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide",onClick:e=>e.stopPropagation(),children:m.jsxs("div",{className:"glass-card p-4 md:p-8 relative",children:[m.jsx("button",{onClick:d,className:"absolute top-4 right-4 w-12 h-12 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-red-500/20 hover:bg-red-500/30 border-2 border-red-500/30 transition-all duration-200 group z-10",children:m.jsx("svg",{className:"w-6 h-6 md:w-5 md:h-5 text-red-400 group-hover:text-red-300 transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),m.jsxs(r.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},className:"text-center mb-8",children:[m.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-text-light mb-2",style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:["🚀 ",m.jsx("span",{className:"text-gradient",children:"Check-in Interativo"})]}),m.jsx("p",{className:"text-text-muted text-lg",children:"Complete as 8 etapas para confirmar sua presença no bootcamp"})]}),m.jsxs(r.div,{initial:{opacity:0,scaleX:0},animate:{opacity:1,scaleX:1},transition:{delay:.4,duration:.8},className:"mb-8",children:[m.jsxs("div",{className:"flex justify-between items-center mb-4",children:[m.jsx("span",{className:"text-sm text-text-muted",children:"Progresso"}),m.jsxs("span",{className:"text-sm text-primary font-semibold",children:[o.length,"/8 concluídas"]})]}),m.jsx("div",{className:"h-2 bg-secondary/50 rounded-full overflow-hidden",children:m.jsx(r.div,{initial:{width:0},animate:{width:o.length/8*100+"%"},transition:{duration:.5,ease:"easeOut"},className:"h-full bg-gradient-to-r from-primary to-primary-light"})})]}),m.jsx(If,{currentStep:s,completedSteps:o,userData:l,onStepComplete:(e,t={})=>{o.includes(e)||(c(t=>[...t,e]),"undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CheckinStepComplete",step_number:e+1,step_name:h(e),content_name:"Check-in Bootcamp Programador em 7 Dias"})),t&&u(e=>({...e,...t})),e===s&&e<7&&setTimeout(()=>{a(e+1)},500)},onClose:d}),m.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden rounded-2xl",children:[m.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"}),m.jsx("div",{className:"absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"})]})]})})]})}):null},Nf=({isCheckinModalOpen:t,setIsCheckinModalOpen:n})=>{const{checkinData:i,loading:s}=pf(),[a,o]=e.useState(!1);e.useEffect(()=>{const e=setTimeout(()=>{o(!0)},1500);return()=>clearTimeout(e)},[]);const c=()=>{n(!0)};return s?m.jsx("section",{className:"relative min-h-screen flex items-center justify-center px-4 py-20",children:m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"}),m.jsx("p",{className:"text-text-muted",children:"Carregando..."})]})}):m.jsxs("section",{className:"relative min-h-screen flex items-center justify-center px-4 py-20",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-radial opacity-50"}),m.jsx(r.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.8},className:"badge-float",children:m.jsx("span",{className:"text-glow",style:{fontFamily:"var(--font-sans)"},children:"✨ 90% confirmados"})}),m.jsxs("div",{className:"max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[m.jsxs(r.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8,ease:"easeOut"},className:"space-y-6 lg:space-y-8 text-center lg:text-left",children:[m.jsxs(r.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.5,duration:.6},className:"inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30",children:[m.jsx("span",{className:"text-2xl animate-pulse",children:"🚨"}),m.jsx("span",{className:"text-red-400 font-medium",style:{fontFamily:"var(--font-sans)"},children:"FALTA POUCO!"})]}),m.jsxs("div",{className:"space-y-3 lg:space-y-4",children:[m.jsx("div",{style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:m.jsx(yf,{text:(null==i?void 0:i.title)||"O Bootcamp Programador em 7 Dias está chegando",className:"text-3xl md:text-4xl lg:text-6xl font-bold text-text-light leading-tight",delay:.8})}),m.jsxs(r.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2.5,duration:.8},className:"text-lg md:text-xl lg:text-2xl text-text-muted",style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:["Você precisa confirmar sua presença"," ",m.jsx("span",{className:"text-primary font-semibold text-glow",children:"AGORA"})]})]}),a&&m.jsx(r.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.2,duration:.4,ease:"easeOut"},className:"flex justify-center lg:hidden",children:m.jsx("button",{onClick:c,className:"btn-primary btn-pulse text-xl md:text-2xl px-12 py-6 font-bold uppercase tracking-wide w-full max-w-md",style:{fontFamily:"var(--font-sans)"},children:m.jsxs("span",{className:"flex items-center justify-center gap-3",children:[m.jsx("span",{children:"🚀"}),m.jsx("span",{children:"INICIAR CHECK-IN"})]})})}),m.jsx(r.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:1,duration:.6},className:"lg:scale-100 scale-90",children:m.jsx(ff,{targetDate:(null==i?void 0:i.countdownDate)||"2025-08-19T20:00:00"})}),m.jsxs(r.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.6},className:"text-lg md:text-xl text-text-muted max-w-2xl",style:{fontFamily:"var(--font-chakra-petch), system-ui, sans-serif"},children:[m.jsxs("span",{className:"hidden lg:inline",children:["🎯 Confirme sua presença e garanta sua vaga no Bootcamp que já transformou a vida de"," ",m.jsx("span",{className:"text-primary font-semibold",children:"milhares de pessoas"})]}),m.jsxs("span",{className:"lg:hidden",children:["🎯 Garante sua vaga no Bootcamp que já transformou ",m.jsx("span",{className:"text-primary font-semibold",children:"milhares de vidas"})]})]}),m.jsx(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.4,duration:.6},className:"bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-3 lg:p-4",children:m.jsxs("p",{className:"text-yellow-400 font-medium flex items-start lg:items-center gap-2 text-sm lg:text-base",style:{fontFamily:"var(--font-sans)"},children:[m.jsx("span",{className:"text-lg lg:text-xl flex-shrink-0",children:"⚠️"}),m.jsxs("span",{children:[m.jsx("strong",{children:"ATENÇÃO:"})," ",m.jsx("span",{className:"hidden lg:inline",children:"O check-in é OBRIGATÓRIO e deve ser feito até"}),m.jsx("span",{className:"lg:hidden",children:"Check-in até"})," segunda-feira, dia 19 de agosto, às 18h."]})]})})]}),m.jsxs(r.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{delay:.5,duration:.8,ease:"easeOut"},className:"relative space-y-6 lg:-mt-16 mt-8 lg:mt-0",children:[m.jsx(gf,{}),a&&m.jsx(r.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.2,duration:.4,ease:"easeOut"},className:"hidden lg:flex lg:justify-end",children:m.jsx("button",{onClick:c,className:"btn-primary btn-pulse text-xl md:text-2xl px-12 py-6 font-bold uppercase tracking-wide w-auto",style:{fontFamily:"var(--font-sans)"},children:m.jsxs("span",{className:"flex items-center justify-center gap-3",children:[m.jsx("span",{children:"🚀"}),m.jsx("span",{children:"INICIAR CHECK-IN"})]})})}),m.jsx(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:2.5,duration:.8},className:"hidden lg:block lg:max-w-sm lg:ml-auto",children:m.jsxs("div",{className:"terminal-window",children:[m.jsxs("div",{className:"terminal-header",children:[m.jsx("div",{className:"terminal-dot red"}),m.jsx("div",{className:"terminal-dot yellow"}),m.jsx("div",{className:"terminal-dot green"}),m.jsx("span",{className:"text-sm text-gray-400 ml-4",children:"bootcamp-checkin.js"})]}),m.jsxs("div",{className:"p-4 space-y-2",children:[m.jsx("div",{className:"text-green-400 font-mono text-sm",children:"$ npm run start-journey"}),m.jsxs("div",{className:"text-primary font-mono text-sm",children:[">"," Iniciando transformação..."]}),m.jsxs("div",{className:"text-text-muted font-mono text-sm",children:[">"," Carregando oportunidades..."]}),m.jsxs("div",{className:"text-primary font-mono text-sm animate-pulse",children:[">"," Aguardando check-in_"]})]})]})})]})]}),m.jsx(r.div,{initial:{opacity:0},animate:{opacity:.3},transition:{delay:3,duration:1},className:"absolute top-20 right-20 hidden xl:block",children:m.jsxs("div",{className:"font-mono text-sm text-primary space-y-1",children:[m.jsx("div",{children:"<programmer>"}),m.jsx("div",{className:"ml-4",children:'const future = "dev";'}),m.jsxs("div",{className:"ml-4",children:["if (checkin) ","{"]}),m.jsx("div",{className:"ml-8",children:"career.transform();"}),m.jsx("div",{className:"ml-4",children:"}"}),m.jsx("div",{children:"</programmer>"})]})}),m.jsx(Sf,{isOpen:t,onClose:()=>{n(!1)}})]})},kf=()=>{const[t,n]=e.useState(!1),[i,s]=e.useState(!1);e.useEffect(()=>{const e=()=>{n(window.innerWidth<=768||"ontouchstart"in window),s(window.matchMedia("(prefers-reduced-motion: reduce)").matches)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const a=['const career = "dev";',"function transform() {","if (checkin) {","return success;","}","const bootcamp = new Experience();","async function learn() {","await bootcamp.start();","class Programmer {","constructor() {","this.skills = [];","npm install future",'git commit -m "new life"','import { success } from "./bootcamp"',"export default Career;","<developer>","</developer>","// TODO: Change life","/* Start here */","boolean isReady = true;","let dreams = reality;","=> transform()"],o=e.useMemo(()=>{if(i)return[];const e=navigator.deviceMemory<4||navigator.hardwareConcurrency<4,n="undefined"!=typeof window?window.innerWidth:1200;let r;return r=e?6:t?8:20,Array.from({length:r},(e,r)=>({id:r,code:a[Math.floor(Math.random()*a.length)],initialX:Math.random()*n,delay:Math.random()*(t?10:15),duration:(t?8:12)+8*Math.random(),size:.7+.6*Math.random(),opacity:(t?.15:.25)+.3*Math.random()}))},[t,i]);return m.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden z-0",children:[o.map(e=>m.jsx(r.div,{initial:{x:e.initialX,y:"-10vh",opacity:0,scale:e.size},animate:{x:e.initialX+30*Math.sin(3e-4*Date.now()+e.id),y:"100vh",opacity:[0,e.opacity,e.opacity,0],scale:[e.size,1.1*e.size,e.size]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,ease:"linear"},className:"absolute font-mono text-primary select-none",style:{fontSize:.6+.4*Math.random()+"rem",filter:t?"none":`blur(${2*Math.random()}px)`,willChange:"transform",transform:"translateZ(0)",backfaceVisibility:"hidden"},children:e.code},e.id)),!i&&Array.from({length:t?4:10},(e,n)=>{const i="undefined"!=typeof window?window.innerWidth:1200;return m.jsx(r.div,{initial:{x:Math.random()*i,y:"-10vh",opacity:0},animate:{x:Math.random()*i+20*Math.sin(2e-4*Date.now()+n),y:"100vh",opacity:[0,t?.08:.1,t?.08:.1,0]},transition:{duration:(t?10:12)+8*Math.random(),delay:Math.random()*(t?12:15),repeat:1/0,ease:"linear"},className:"absolute text-primary/20 select-none pointer-events-none",style:{fontSize:(t?.8:1+2*Math.random())+"rem",willChange:"transform",transform:"translateZ(0)"},children:["</","/>","{}","()","[]","=>","&&","||","++","--"][Math.floor(10*Math.random())]},`symbol-${n}`)}),!i&&Array.from({length:t?3:8},(e,n)=>{const i="undefined"!=typeof window?window.innerWidth:1200,s="undefined"!=typeof window?window.innerHeight:800;return m.jsx(r.div,{initial:{x:Math.random()*i,y:-50,opacity:0},animate:{x:Math.random()*i+15*Math.sin(1e-4*Date.now()+n),y:s+50,opacity:[0,t?.08:.1,t?.08:.1,0]},transition:{duration:(t?15:20)+10*Math.random(),delay:Math.random()*(t?15:20),repeat:1/0,ease:"linear"},className:"absolute border border-primary/20 select-none pointer-events-none",style:{width:15+Math.random()*(t?20:30)+"px",height:15+Math.random()*(t?20:30)+"px",borderRadius:Math.random()>.5?"50%":"4px",willChange:"transform",transform:"translateZ(0)"}},`shape-${n}`)})]})},Af=()=>{const[t,n]=e.useState(!1),[i,s]=e.useState(!1);e.useEffect(()=>{const e=()=>{n(window.innerWidth<=768||"ontouchstart"in window),s(window.matchMedia("(prefers-reduced-motion: reduce)").matches)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const a=navigator.deviceMemory<4||navigator.hardwareConcurrency<4,o=[{id:1,size:t?200:a?300:400,x:"10%",y:"20%",delay:0,duration:t?10:a?12:8,color:"primary"},{id:2,size:t?150:a?250:300,x:"80%",y:"60%",delay:2,duration:t?12:a?15:10,color:"primary-light"},...t||a?[]:[{id:3,size:250,x:"60%",y:"10%",delay:4,duration:12,color:"primary-dark"},{id:4,size:350,x:"20%",y:"70%",delay:1,duration:9,color:"primary"},{id:5,size:200,x:"90%",y:"30%",delay:3,duration:7,color:"primary-light"}]],c=e=>{switch(e){case"primary":default:return"bg-primary/10";case"primary-light":return"bg-primary-light/8";case"primary-dark":return"bg-primary-dark/12"}};return i?m.jsx("div",{className:"fixed inset-0 pointer-events-none overflow-hidden -z-10",children:m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-light/5"})}):m.jsxs("div",{className:"fixed inset-0 pointer-events-none overflow-hidden -z-10",children:[o.map(e=>m.jsx(r.div,{initial:{x:e.x,y:e.y,scale:0,opacity:0},animate:t?{scale:[.9,1.1,.9],opacity:[0,.3,.2,.3]}:{scale:[.8,1.2,.9,1],opacity:[0,.6,.4,.6],rotate:[0,180,360]},transition:{duration:e.duration,delay:e.delay,repeat:1/0,ease:"easeInOut"},className:`absolute rounded-full blur-3xl ${c(e.color)}`,style:{width:`${e.size}px`,height:`${e.size}px`,filter:`blur(${t?40:60}px)`,willChange:"transform, opacity",transform:"translateZ(0)",backfaceVisibility:"hidden"}},e.id)),!t&&m.jsxs(m.Fragment,{children:[m.jsx(r.div,{animate:{scale:[1,1.3,1],opacity:[.1,.3,.1]},transition:{duration:15,repeat:1/0,ease:"easeInOut"},className:"absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl",style:{transform:"translateZ(0)",backfaceVisibility:"hidden"}}),m.jsx(r.div,{animate:{scale:[1.2,.8,1.2],opacity:[.2,.1,.2]},transition:{duration:12,repeat:1/0,ease:"easeInOut",delay:3},className:"absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-primary-light/20 to-cyan-500/20 rounded-full blur-3xl",style:{transform:"translateZ(0)",backfaceVisibility:"hidden"}})]}),m.jsx("div",{className:"absolute inset-0 bg-grid-pattern bg-grid "+(t?"opacity-10":"opacity-30")}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-60"})]})},Rf=e.lazy(()=>v(()=>import("./ScheduleSection-1eddd917.js"),["assets/ScheduleSection-1eddd917.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Df=e.lazy(()=>v(()=>import("./FirstClassSection-5ffbdd5e.js"),["assets/FirstClassSection-5ffbdd5e.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Of=e.lazy(()=>v(()=>import("./UrgencySection-fa76abfb.js"),["assets/UrgencySection-fa76abfb.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),jf=e.lazy(()=>v(()=>import("./FAQSection-6fe838b9.js"),["assets/FAQSection-6fe838b9.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Pf=e.lazy(()=>v(()=>import("./Footer-6391181d.js"),["assets/Footer-6391181d.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Lf=e.lazy(()=>v(()=>import("./WhatsAppButton-76a6ade9.js"),["assets/WhatsAppButton-76a6ade9.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Mf=e.lazy(()=>v(()=>import("./AdminLayout-736c1c17.js"),["assets/AdminLayout-736c1c17.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Vf=e.lazy(()=>v(()=>import("./AdminHome-b2169069.js"),["assets/AdminHome-b2169069.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Uf=e.lazy(()=>v(()=>import("./Login-de61e878.js"),["assets/Login-de61e878.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Ff=e.lazy(()=>v(()=>import("./ProtectedRoute-4e36f258.js"),["assets/ProtectedRoute-4e36f258.js","assets/vendor-79b9f383.js","assets/animations-f7009316.js"])),Bf=()=>{const[t,n]=e.useState(!1),[i,s]=e.useState(!1),a=()=>{"undefined"!=typeof fbq&&fbq("track","CustomEvent",{event_name:"CheckinModalOpen",content_name:"Check-in Bootcamp Programador em 7 Dias"}),s(!0)};e.useEffect(()=>{const e=window.innerWidth<=768,t=navigator.deviceMemory<4||navigator.hardwareConcurrency<4,r=setTimeout(()=>{n(!0)},e||t?300:500);return()=>clearTimeout(r)},[]),e.useEffect(()=>{let e=!1;const t=window.innerWidth<=768,n=navigator.deviceMemory<4||navigator.hardwareConcurrency<4;if(t||n)return;const r=()=>{e||(requestAnimationFrame(()=>{const t=-.5*window.pageYOffset;document.querySelectorAll(".parallax").forEach(e=>{e.style.transform=`translate3d(0, ${t}px, 0)`}),e=!1}),e=!0)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const o=({height:e="200px"})=>m.jsx("div",{className:"flex items-center justify-center",style:{height:e},children:m.jsx("div",{className:"w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"})});return m.jsx(mf,{children:m.jsxs("div",{className:"min-h-screen bg-background overflow-x-hidden",children:[m.jsx("div",{className:"fixed inset-0 grid-bg pointer-events-none"}),m.jsx(Af,{}),m.jsx(kf,{}),m.jsxs(r.main,{initial:{opacity:0},animate:{opacity:t?1:0},transition:{duration:.8,ease:"easeOut"},className:"relative z-10",children:[m.jsx(Nf,{isCheckinModalOpen:i,setIsCheckinModalOpen:a}),m.jsx(e.Suspense,{fallback:m.jsx(o,{height:"400px"}),children:m.jsx(Rf,{})}),m.jsx(e.Suspense,{fallback:m.jsx(o,{height:"300px"}),children:m.jsx(Df,{})}),m.jsx(e.Suspense,{fallback:m.jsx(o,{height:"350px"}),children:m.jsx(Of,{onOpenCheckin:a})}),m.jsx(e.Suspense,{fallback:m.jsx(o,{height:"500px"}),children:m.jsx(jf,{onOpenCheckin:a})})]}),m.jsx(e.Suspense,{fallback:m.jsx(o,{height:"400px"}),children:m.jsx(Pf,{onOpenCheckin:()=>s(!0)})}),m.jsx(e.Suspense,{fallback:null,children:m.jsx(Lf,{})}),m.jsx(Sf,{isOpen:i,onClose:()=>s(!1)})]})})},qf=()=>m.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"text-6xl mb-4",children:"404"}),m.jsx("h1",{className:"text-2xl font-bold text-text-light mb-4",children:"Página não encontrada"}),m.jsx("p",{className:"text-text-muted mb-8",children:"A página que você está procurando não existe."}),m.jsx("a",{href:"/",className:"px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-lg font-semibold transition-all duration-200",children:"Voltar ao início"})]})});function zf(){const t=()=>m.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:m.jsxs("div",{className:"text-center",children:[m.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"}),m.jsx("p",{className:"text-text-muted",children:"Carregando..."})]})});return m.jsx(nf,{children:m.jsx(Ge,{children:m.jsxs(Te,{children:[m.jsx(_e,{path:"/admin/login",element:m.jsx(e.Suspense,{fallback:m.jsx(t,{}),children:m.jsx(Uf,{})})}),m.jsx(_e,{element:m.jsx(e.Suspense,{fallback:m.jsx(t,{}),children:m.jsx(Ff,{})}),children:m.jsx(_e,{path:"/admin/dev",element:m.jsx(e.Suspense,{fallback:m.jsx(t,{}),children:m.jsx(Mf,{})}),children:m.jsx(_e,{index:!0,element:m.jsx(e.Suspense,{fallback:m.jsx(t,{}),children:m.jsx(Vf,{})})})})}),m.jsx(_e,{path:"/",element:m.jsx(Bf,{})}),m.jsx(_e,{path:"/:slug",element:m.jsx(Bf,{})}),m.jsx(_e,{path:"/404",element:m.jsx(qf,{})}),m.jsx(_e,{path:"*",element:m.jsx(be,{to:"/404",replace:!0})})]})})})}f.createRoot(document.getElementById("root")).render(m.jsx(n.StrictMode,{children:m.jsx(zf,{})}));export{be as N,xe as O,tf as a,cf as b,sf as c,uf as d,lf as e,hf as f,af as g,m as j,pf as u};
