#!/usr/bin/env node
"use strict";function F(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,r)),n}function G(t){for(var r,e=1;e<arguments.length;e++)r=null!=arguments[e]?arguments[e]:{},e%2?F(
Object(r),!0).forEach(function(e){n(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(r,e))});return t}function n(e,t,r){t in e?Object.defineProperty(e,t,{value:r,
enumerable:!0,configurable:!0,writable:!0}):e[t]=r}function D(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function L(e){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function B(e
){var t,r=-1,n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function $(e){var t,r=-1,
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function z(e){e=this.__data__=new ir(e);
this.size=e.size}function U(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new ar;++t<r;)this.add(e[t])}function W(n
,o){function i(){var e=arguments,t=o?o.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),
i.cache=r.set(t,e)||r,e)}if("function"!=typeof n||null!=o&&"function"!=typeof o)throw new TypeError(
"Expected a function");return i.cache=new(W.Cache||fn),i}function q(e){return so(e)}function V(e,t){return bo(e,t)}
function H(e){return void 0===e}function Z(...e){return t=>Wo(e,e=>e(t))}function J(e){return Ks(e)}function Y(e,
t=void 0,r=void 0,n=void 0){var o;return!(!Ks(e)||(o=null!=(o=null==e?void 0:e.length)?o:0,void 0!==r&&o<r
)||void 0!==n&&n<o)&&(void 0===t||V(e,t))}function X(e,t=q){var r;return J(e)?(r=Io(e,(e,t)=>t),no(r,e=>t(e))):dt(e)?(
r=Reflect.ownKeys(e),no(r,e=>t(e))):[]}function K(e,t=q,r=void 0){var n;return!(void 0!==r&&(r=r,!dt(n=e)||!V(ui(n),r))
)&&(n=void 0!==t?t:q,dt(r=e))&&V(X(r),n)}function Q(e){return q(t=e)||oi(t)||_o(t)||Eo(t)||Y(e,Z(Q,H))||ee(e);var t}
function ee(e){return!!dt(t=e)&&!(t instanceof Date||gt(t)||J(t))&&K(t,q,void 0)&&K(e,q,Z(Q,H));var t}function te(e){
return ee(e)?e:void 0}function re(e){switch((""+e).toLowerCase()){case"npm":return ci.NPM;case"yarn":return ci.YARN;
case"hgm":return ci.HGM;default:return}}function ne(e,t,r){if(e.isSymbolicLink()||e.isFile()){var n,o,i=t,
a=void 0!==r.pathExt?r.pathExt:process.env.PATHEXT;if(!a)return!0;if(-1!==(a=a.split(";")).indexOf(""))return!0;for(
n=0;n<a.length;n++)if((o=a[n].toLowerCase())&&i.substr(-o.length).toLowerCase()===o)return!0}return!1}function oe(e,r,n
){di.stat(e,function(e,t){n(e,!e&&ie(t,r))})}function ie(e,t){return e.isFile()&&(r=e.mode,n=e.uid,e=e.gid,o=void 0!==(
t=t).uid?t.uid:process.getuid&&process.getuid(),t=void 0!==t.gid?t.gid:process.getgid&&process.getgid(),i=parseInt("100"
,8),a=parseInt("010",8),r&parseInt("001",8)||r&a&&e===t||r&i&&n===o||r&(i|a)&&0===o);var r,n,o,i,a}function ae(e){
e=new Error("not found: "+e);return e.code="ENOENT",e}function se(e,t){var r=t.colon||mi,n=[""],o=(
o=t.path||process.env.PATH||"").split(r),i="";return hi&&(o.unshift(process.cwd()),n=(
i=t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM").split(r),-1!==e.indexOf("."))&&""!==n[0]&&n.unshift(""),{
env:o=e.match(/\//)||hi&&e.match(/\\/)?[""]:o,ext:n,extExe:i}}function ue(n,u,c){var e,o,l,f,d;"function"==typeof u&&(
c=u,u={}),e=se(n,u),o=e.env,l=e.ext,f=e.extExe,d=[],function e(t,a){var r,s;return t===a?u.all&&d.length?c(null,d):c(ae(
n)):('"'===(r=o[t]).charAt(0)&&'"'===r.slice(-1)&&(r=r.slice(1,-1)),s=gi.join(r,n),!r&&/^\.[\\\/]/.test(n)&&(s=n.slice(0
,2)+s),void function r(n,o){var i;return n===o?e(t+1,a):(i=l[n],void vi(s+i,{pathExt:f},function(e,t){if(!e&&t){if(
!u.all)return c(null,s+i);d.push(s+i)}return r(n+1,o)}))}(0,l.length))}(0,o.length)}function ce(e,t){var r=process.cwd()
,n=null!=e.options.cwd;if(n)try{process.chdir(e.options.cwd)}catch(e){}let o;try{o=ou.sync(e.command,{path:(
e.options.env||process.env)[iu],pathExt:t?nu.delimiter:void 0})}catch(e){}finally{process.chdir(r)}
return o=o&&nu.resolve(n?e.options.cwd:"",o)}function le(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`)
,{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}function fe(e,t){
return vu&&1===e&&!t.file?le(t.original,"spawn"):null}function de(e,t,r){e=We(e,t,r),t=yu.spawn(e.command,e.args,
e.options);return bu.hookChildProcess(t,e),t}function pe(e){function t(){return t.called?t.value:(t.called=!0,
t.value=e.apply(this,arguments))}return t.called=!1,t}function he(e){function t(){if(t.called)throw new Error(
t.onceError);return t.called=!0,t.value=e.apply(this,arguments)}var r=e.name||"Function wrapped with `once`";
return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}function ge(e,o){if(!e)return Promise.reject(
new Error("Expected a stream"));const i=(o=Object.assign({maxBuffer:1/0},o)).maxBuffer;let a;return new Promise((t,r)=>{
const n=e=>{e&&(e.bufferedData=a.getBufferedValue()),r(e)};(a=function(){var n,o,i=Array.prototype.slice.call(arguments)
,a=Ii(i[i.length-1]||Ti)&&i.pop()||Ti;if((i=Array.isArray(i[0])?i[0]:i).length<2)throw new Error(
"pump requires two streams per minimum");return o=i.map(function(e,t){var r=t<i.length-1;return Ci(e,r,0<t,function(e){
n=n||e,e&&o.forEach(Mi),r||(o.forEach(Mi),a(n))})}),i.reduce(Ri)}(e,(e=>{const t=(e=Object.assign({},e)).array;
let r=e.encoding;const n="buffer"===r;let o=!1,i=(t?o=!(r||n):r=r||"utf8",n&&(r=null),0);const a=[];e=new wu({
objectMode:o});return r&&e.setEncoding(r),e.on("data",e=>{a.push(e),o?i=a.length:i+=e.length}),e.getBufferedValue=(
)=>t?a:n?Buffer.concat(a,i):a.join(""),e.getBufferedLength=()=>i,e})(o),e=>{e?n(e):t()})).on("data",()=>{
a.getBufferedLength()>i&&n(new xu)})}).then(()=>a.getBufferedValue())}function me(e,t){if(e)return e.errname(t);if(t<0
)return"Unknown system error "+t;throw new Error("err >= 0")}function ve(t,e){var r,n=Object.keys(t);
return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function b(n){for(var o,
e=1;e<arguments.length;e++)o=null!=arguments[e]?arguments[e]:{},e%2?ve(Object(o),!0).forEach(function(e){var t=n,r=o[e=e
];e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}
):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):ve(Object(o)).forEach(
function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))});return n}function ye(e,t){
var r=e.options.env||process.env,n=process.cwd(),o=null!=e.options.cwd,
i=o&&void 0!==process.chdir&&!process.chdir.disabled;if(i)try{process.chdir(e.options.cwd)}catch(e){}let a;try{
a=Gu.sync(e.command,{path:r[Du({env:r})],pathExt:t?Fu.delimiter:void 0})}catch(e){}finally{i&&process.chdir(n)}
return a=a&&Fu.resolve(o?e.options.cwd:"",a)}function be(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`)
,{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}function we(e,t){
return Ju&&1===e&&!t.file?be(t.original,"spawn"):null}function xe(e,t,r){e=qe(e,t,r),t=Yu.spawn(e.command,e.args,
e.options);return Xu.hookChildProcess(t,e),t}function _e(e={}){var{env:e=process.env,platform:t=process.platform}=e;
return"win32"!==t?"PATH":Object.keys(e).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"}async function Ee(n,s){if(!n
)throw new Error("Expected a stream");const o=(s=b({maxBuffer:1/0},s)).maxBuffer,i=(e=>{const t=(e=b({},s)).array;
let r=e.encoding;const n="buffer"===r;let o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);e=new cc({objectMode:o});
r&&e.setEncoding(r);let i=0;const a=[];return e.on("data",e=>{a.push(e),o?i=a.length:i+=e.length}),e.getBufferedValue=(
)=>t?a:n?Buffer.concat(a,i):a.join(""),e.getBufferedLength=()=>i,e})();return await new Promise((e,t)=>{const r=e=>{
e&&i.getBufferedLength()<=lc.MAX_LENGTH&&(e.bufferedData=i.getBufferedValue()),t(e)};(async()=>{try{await fc(n,i),e()
}catch(e){r(e)}})(),i.on("data",()=>{i.getBufferedLength()>o&&r(new dc)})}),i.getBufferedValue()}function je(e,t,r){
var n,o,i,a,s,u,c,l,f;[r,o,i={}]=[0,t,r],r=(f=va._parse(e,o,i)).command,o=f.args,(i=b({maxBuffer:1e8,buffer:!0,
stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:(i=f.options).cwd||Ls.default.cwd(),
execPath:Ls.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},i)).env=({env:a,extendEnv:l,
preferLocal:s,localDir:u,execPath:c}=i,l=l?b(b({},Ls.default.env),a):a,s?function(e){var{env:t=Ls.default.env}=e,
e=function(e,t){var r,n,o,i;if(null==e)return{};if(r=function(e,t){var r,n,o,i;if(null==e)return{};for(r={},
n=Object.keys(e),i=0;i<n.length;i++)o=n[i],0<=t.indexOf(o)||(r[o]=e[o]);return r}(e,t),Object.getOwnPropertySymbols)for(
i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(e,Ku),r=_e({env:t=b({},t)});return e.path=t[r],t[r]=function(e={}){var t,{
cwd:e=Ls.default.cwd(),path:r=Ls.default.env[_e()],execPath:n=Ls.default.execPath}=e;let o,i=(
e=e instanceof URL?Bs.default.fileURLToPath(e):e,Gs.default.resolve(e));for(t=[];o!==i;)t.push(Gs.default.join(i,
"node_modules/.bin")),o=i,i=Gs.default.resolve(i,"..");return t.push(Gs.default.resolve(e,n,"..")),[...t,r].join(
Gs.default.delimiter)}(e),t}({env:l,cwd:u,execPath:c}):l),i.stdio=(t=>{if(t){const n=t.stdio;if(void 0===n
)return uc.map(e=>t[e]);if(r=t,uc.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+uc.map(e=>`\`${e}\``).join(", "));var r,e;if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,uc.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}})(i),
"win32"===Ls.default.platform&&"cmd"===Gs.default.basename(r,".exe")&&o.unshift("/q");const d={file:r,args:o,options:i,
parsed:f},p=(a=e,s=t,bc(a,s).join(" ")),h=(u=e,c=t,bc(u,c).map(e=>{return"string"!=typeof(e=e)||wc.test(e
)?e:`"${e.replace(xc,'\\"')}"`}).join(" "));if(void 0!==(l=d.options.timeout)&&(!Number.isFinite(l)||l<0)
)throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${l}\` (${typeof l})`);let g;
try{g=Ds.default.spawn(d.file,d.args,d.options)}catch(e){return r=new Ds.default.ChildProcess,o=Promise.reject(sc({
error:e,stdout:"",stderr:"",all:"",command:p,escapedCommand:h,parsed:d,timedOut:!1,isCanceled:!1,killed:!1})),yc(r,o)}
n=g,i=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on(
"error",e=>{t(e)})}),f=((n,{timeout:t,killSignal:o="SIGTERM"},e)=>{if(0===t||void 0===t)return e;let i;
var r=new Promise((e,r)=>{i=setTimeout(()=>{var e=o,t=r;n.kill(e),t(Object.assign(new Error("Timed out"),{timedOut:!0,
signal:e}))},t)}),e=e.finally(()=>{clearTimeout(i)});return Promise.race([r,e])})(g,d.options,i);const m=(async(e,{
cleanup:t,detached:r},n)=>{if(!t||r)return n;const o=ys(()=>{e.kill()});return n.finally(()=>{o()})})(g,d.options,f),v={
isCanceled:!1};return g.kill=((e,t="SIGTERM",r={})=>{var n,o=e(t),i=e;return[t,r,n]=[t,(e=r).forceKillAfterTimeout,o],(
t===$s.default.constants.signals.SIGTERM||"string"==typeof t&&"SIGTERM"===t.toUpperCase())&&!1!==r&&n&&(t=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(e),
(r=setTimeout(()=>{i("SIGKILL")},t)).unref)&&r.unref(),o}).bind(null,g.kill.bind(g)),g.cancel=((e,t)=>{e.kill()&&(
t.isCanceled=!0)}).bind(null,g,v),a=rc(async()=>{var[{error:e,exitCode:t,signal:r,timedOut:n},o,i,a]=await(async({
stdout:t,stderr:r,all:n},{encoding:o,buffer:e,maxBuffer:i},a)=>{var s=gc(t,{encoding:o,buffer:e,maxBuffer:i}),u=gc(r,{
encoding:o,buffer:e,maxBuffer:i}),o=gc(n,{encoding:o,buffer:e,maxBuffer:2*i});try{return await Promise.all([a,s,u,o])
}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},hc(t,s),hc(r,u),hc(n,o)])}})(g,d.options,m),
o=_c(d.options,o),i=_c(d.options,i),a=_c(d.options,a);if(e||0!==t||null!==r){if(e=sc({error:e,exitCode:t,signal:r,
stdout:o,stderr:i,all:a,command:p,escapedCommand:h,parsed:d,timedOut:n,
isCanceled:v.isCanceled||!!d.options.signal&&d.options.signal.aborted,killed:g.killed}),d.options.reject)throw e;
return e}return{command:p,escapedCommand:h,exitCode:0,stdout:o,stderr:i,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),s=g,void 0!==(e=d.options.input)&&void 0!==s.stdin&&(
null!==e&&"object"==typeof e&&"function"==typeof e.pipe?e.pipe(s.stdin):s.stdin.end(e)),g.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr))return t=ba(),e.stdout&&t.add(e.stdout),e.stderr&&t.add(e.stderr),t})(g,d.options),yc(g,a)}
function Oe(e,t){if(e instanceof p)return e;if("string"!=typeof e)return null;if(e.length>ss)return null;if(!((
t=t&&"object"==typeof t?t:{loose:!!t,includePrerelease:!1}).loose?v[ls]:v[cs]).test(e))return null;try{return new p(e,t)
}catch(e){return null}}function p(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p){
if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(
e.length>ss)throw new TypeError("version is longer than "+ss+" characters");if(!(this instanceof p))return new p(e,t);m(
"SemVer",e,t),this.options=t,this.loose=!!t.loose;t=e.trim().match(t.loose?v[ls]:v[cs]);if(!t)throw new TypeError(
"Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>us||this.major<0
)throw new TypeError("Invalid major version");if(this.minor>us||this.minor<0)throw new TypeError("Invalid minor version"
);if(this.patch>us||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(
function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(0<=t&&t<us)return t}return e}):this.prerelease=[],this.build=t[5]?t[5
].split("."):[],this.format()}function Se(e,t){var r=ds.test(e),n=ds.test(t);return r&&n&&(e=+e,t=+t),e===t?0:r&&!n||(
!n||r)&&e<t?-1:1}function Pe(e,t,r){return new p(e,r).compare(new p(t,r))}function Te(e,t,r){return 0<Pe(e,t,r)}
function Ae(e,t,r){return Pe(e,t,r)<0}function Ie(e,t,r){return 0===Pe(e,t,r)}function ke(e,t,r){return 0!==Pe(e,t,r)}
function Ne(e,t,r){return 0<=Pe(e,t,r)}function Ce(e,t,r){return Pe(e,t,r)<=0}function Me(e,t,r,n){switch(t){case"===":
return(e="object"==typeof e?e.version:e)===("object"==typeof r?r.version:r);case"!==":return(
e="object"==typeof e?e.version:e)!==("object"==typeof r?r.version:r);case"":case"=":case"==":return Ie(e,r,n);case"!=":
return ke(e,r,n);case">":return Te(e,r,n);case">=":return Ne(e,r,n);case"<":return Ae(e,r,n);case"<=":return Ce(e,r,n);
default:throw new TypeError("Invalid operator: "+t)}}function Re(e,t){if(t&&"object"==typeof t||(t={loose:!!t,
includePrerelease:!1}),e instanceof Re){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof Re)
)return new Re(e,t);m("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),
this.semver===ps?this.value="":this.value=this.operator+this.semver.version,m("comp",this)}function h(e,t){if(
t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof h
)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new h(e.raw,t);if(e instanceof Re
)return new h(e.value,t);if(!(this instanceof h))return new h(e,t);if(this.options=t,this.loose=!!t.loose,
this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){
return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError(
"Invalid SemVer Range: "+e);this.format()}function g(e){return!e||"x"===e.toLowerCase()||"*"===e}function Fe(e,t,r,n,o,i
,a,s,u,c,l,f,d){return((t=g(r)?"":g(n)?">="+r+".0.0":g(o)?">="+r+"."+n+".0":">="+t)+" "+(s=g(u)?"":g(c)?"<"+(+u+1
)+".0.0":g(l)?"<"+u+"."+(+c+1)+".0":f?"<="+u+"."+c+"."+l+"-"+f:"<="+s)).trim()}function Ge(e,t,r){try{t=new h(t,r)
}catch(e){return!1}return t.test(e)}function De(e,t,r,n){var o,i,a,s,u,c,l,f,d;switch(e=new p(e,n),t=new h(t,n),r){
case">":o=Te,i=Ce,a=Ae,s=">",u=">=";break;case"<":o=Ae,i=Ne,a=Te,s="<",u="<=";break;default:throw new TypeError(
'Must provide a hilo val of "<" or ">"')}if(Ge(e,t,n))return!1;for(c=0;c<t.set.length;++c){if(l=t.set[c],d=f=null,
l.forEach(function(e){e.semver===ps&&(e=new Re(">=0.0.0")),f=f||e,d=d||e,o(e.semver,f.semver,n)?f=e:a(e.semver,d.semver,
n)&&(d=e)}),f.operator===s||f.operator===u)return!1;if((!d.operator||d.operator===s)&&i(e,d.semver))return!1;if(
d.operator===u&&a(e,d.semver))return!1}return!0}function Le(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function Be(e){return ms.call(this,"Unreachable case: "+e)||this}function $e(e){for(var t in e)vs.hasOwnProperty(t)||(
vs[t]=e[t])}function ze(e,t){return{name:"SIGRT"+(t+1),number:nc+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function Ue(){var e=65-nc,e=Array.from({length:e}
,ze);return[...oc,...e].map(Ve)}function We(e,t,r){var n;if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,
args:t=t?t.slice(0):[],options:r=Object.assign({},r),file:void 0,original:{command:e,args:t}},r.shell)return t=e,mu||(
r=[t.command].concat(t.args).join(" "),pu?(
t.command="string"==typeof t.options.shell?t.options.shell:process.env.comspec||"cmd.exe",t.args=["/d","/s","/c",
`"${r}"`],t.options.windowsVerbatimArguments=!0):(
"string"==typeof t.options.shell?t.command=t.options.shell:"android"===process.platform?t.command="/system/bin/sh":t.command="/bin/sh"
,t.args=["-c",r])),t;if(r=e,pu&&((t=r).file=cu(t),n=(e=t.file&&fu(t.file))?(t.args.unshift(t.file),t.command=e,cu(t)
):t.file,e=!hu.test(n),r.options.forceShell||e)){const o=gu.test(n);r.command=uu.normalize(r.command),
r.command=lu.command(r.command),r.args=r.args.map(e=>lu.argument(e,o)),t=[r.command].concat(r.args).join(" "),r.args=[
"/d","/s","/c",`"${t}"`],r.command=process.env.comspec||"cmd.exe",r.options.windowsVerbatimArguments=!0}return r}
function qe(e,t,r){var n;if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],
options:r=Object.assign({},r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,Vu&&((r=t).file=Wu(r),n=(
e=r.file&&function(e){var t,r=Buffer.alloc(150);try{t=$u.openSync(e,"r"),$u.readSync(t,r,0,150,0),$u.closeSync(t)}catch(
e){}return zu(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,Wu(r)):r.file,e=!Hu.test(n),
t.options.forceShell||e)){const o=Zu.test(n);t.command=Uu.normalize(t.command),t.command=qu.command(t.command),
t.args=t.args.map(e=>qu.argument(e,o)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`],
t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function Ve({name:e,number:t,
description:r,action:n,forced:o=!1,standard:i}){var{signals:{[e]:a}}=Cs.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:o,standard:i}}function He(e,t){for(var r,n=-1,
o=null==e?0:e.length,i=0,a=[];++n<o;)t(r=e[n],n,e)&&(a[i++]=r);return a}function Ze(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Vs&&Vs in Object(e)?function(e){var t,r,n=zs.call(e,Ws),
o=e[Ws];try{t=!(e[Ws]=void 0)}catch(e){}return r=Us.call(e),t&&(n?e[Ws]=o:delete e[Ws]),r}:function(e){return qs.call(e)
})(e)}function Je(e){return null!=e&&"object"==typeof e}function Ye(e){return Zs(e)&&"[object Arguments]"==Hs(e)}var Xe,
Ke,Qe,et,t,tt,rt,nt,ot,it,at,st,ut,ct,lt,ft,dt,pt,ht,gt,mt,vt,yt,bt,wt,xt,_t,Et,jt,Ot,St,Pt,Tt,At,It,kt,Nt,Ct,Mt,Rt,Ft,
Gt,Dt,Lt,Bt,$t,zt,Ut,Wt,qt,Vt,Ht,Zt,Jt,Yt,Xt,Kt,Qt,er,tr,rr,nr,or,ir,ar,sr,e,ur,cr,lr,fr,dr,pr,hr,gr,mr,vr,yr,br,wr,xr,
_r,Er,jr,Or,Sr,Pr,Tr,Ar,Ir,kr,Nr,Cr,Mr,Rr,Fr,Gr,Dr,Lr,Br,$r,zr,Ur,Wr,qr,Vr,Hr,Zr,Jr,Yr,Xr,Kr,Qr,en,tn,rn,nn,on,an,sn,un,
cn,ln,fn,dn,pn,hn,gn,mn,vn,yn,bn,wn,xn,_n,En,jn,On,Sn,Pn,Tn,An,In,kn,Nn,Cn,Mn,Rn,Fn,Gn,Dn,Ln,Bn,$n,zn,Un,Wn,qn,Vn,Hn,Zn,
Jn,Yn,Xn,Kn,Qn,eo,to,ro,no,oo,io,ao,so,uo,co,lo,fo,po,ho,go,mo,vo,yo,bo,wo,xo,_o,Eo,jo,Oo,So,Po,To,Ao,Io,ko,No,Co,Mo,Ro,
Fo,Go,Do,Lo,Bo,$o,zo,Uo,Wo,qo,Vo,Ho,Zo,Jo,Yo,Xo,Ko,Qo,ei,ti,ri,ni,oi,ii,ai,si,ui,r,ci,li,fi,di,pi,hi,gi,mi,vi,yi,bi,wi,
xi,_i,Ei,ji,Oi,Si,Pi,Ti,Ai,Ii,ki,Ni,Ci,Mi,Ri,o,Fi,Gi,Di,i,Li,Bi,$i,zi,Ui,Wi,qi,Vi,Hi,Zi,Ji,Yi,Xi,Ki,Qi,ea,ta,ra,na,oa,ia
,aa,sa,ua,ca,la,fa,da,pa,ha,ga,ma,a,s,va,ya,ba,wa,xa,_a,Ea,ja,Oa,Sa,Pa,Ta,Aa,u,Ia,ka,c,l,Na,Ca,Ma,Ra,Fa,Ga,Da,La,Ba,$a,
za,Ua,Wa,qa,Va,Ha,Za,Ja,Ya,Xa,Ka,Qa,es,ts,rs,ns,os,f,is,as,d,m,ss,us,v,y,cs,w,ls,fs,ds,ps,x,_,E,hs,gs,ms,vs,ys,bs,j,O,S,
ws,xs,_s,Es,js,P=require("path"),Os=require("fs"),Ss=require("child_process"),Ps=require("stream"),Ts=require("assert"),
As=require("events"),Is=require("util"),ks=require("node:buffer"),T=require("node:path"),Ns=require("node:child_process"
),A=require("node:process"),I=require("node:url"),Cs=require("os"),Ms=require("node:os"),k=require("buffer"),Rs=D(P),
Fs=D(Os),Os=D(Ss),Ss=D(Ps),Ps=D(Ts),Ts=D(As),As=D(Is),Gs=D(T),Ds=D(Ns),Ls=D(A),Bs=D(I),$s=D(Ms),Is=D(k),
N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,T="object"==typeof N&&N&&N.Object===Object&&N,Ns="object"==typeof self&&self&&self.Object===Object&&self,
A=T||Ns||Function("return this")(),I=A.Symbol,Ms=Object.prototype,zs=Ms.hasOwnProperty,Us=Ms.toString,
Ws=I?I.toStringTag:void 0,qs=Object.prototype.toString,Vs=I?I.toStringTag:void 0,Hs=Ze,Zs=Je,Js=Je,k=Object.prototype,
Ys=k.hasOwnProperty,Xs=k.propertyIsEnumerable,Ns=Ye(function(){return arguments}())?Ye:function(e){return Js(e
)&&Ys.call(e,"callee")&&!Xs.call(e,"callee")},Ks=Array.isArray,Ms={exports:{}},k=(k=Ms.exports)&&!k.nodeType&&k,
C=k&&Ms&&!Ms.nodeType&&Ms,C=C&&C.exports===k?A.Buffer:void 0,k=C?C.isBuffer:void 0;Ms.exports=k||function(){return!1},
Xe=/^(?:0|[1-9]\d*)$/,C=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&(
"number"==r||"symbol"!=r&&Xe.test(e))&&-1<e&&e%1==0&&e<t},Ke=Ze,Qe=k=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},et=Je,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,j=function(e){return et(e)&&Qe(
e.length)&&!!t[Ke(e)]},O=function(t){return function(e){return t(e)}},x=(x=(f=Cn={exports:{}}).exports)&&!x.nodeType&&x,
is=x&&f&&!f.nodeType&&f,as=is&&is.exports===x&&T.process,x=function(){try{return is&&is.require&&is.require("util"
).types||as&&as.binding&&as.binding("util")}catch(e){}}(),f.exports=x,x=(f=(T=Cn.exports)&&T.isTypedArray)?O(f):j,
tt=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},rt=Ns,nt=Ks,ot=Ms.exports,it=C,at=Cn=x,
T=Object.prototype,st=T.hasOwnProperty,ut=Object.prototype,xs=Object.keys,_s=Object,ct=function(e){
var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ut)},lt=function(e){return xs(_s(e))},
O=Object.prototype,ft=O.hasOwnProperty,pt=Ze,ht=dt=function(e){var t=typeof e;return null!=e&&(
"object"==t||"function"==t)},mt=gt=function(e){return!!ht(e)&&("[object Function]"==(e=pt(e)
)||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},vt=k,yt=function(e,t){var r,n=nt(
e),o=!n&&rt(e),i=!n&&!o&&ot(e),a=!n&&!o&&!i&&at(e),s=n||o||i||a,u=s?tt(e.length,String):[],c=u.length;for(r in e
)!t&&!st.call(e,r)||s&&("length"==r||i&&("offset"==r||"parent"==r)||a&&("buffer"==r||"byteLength"==r||"byteOffset"==r
)||it(r,c))||u.push(r);return u},bt=function(e){var t,r;if(!ct(e))return lt(e);for(r in t=[],Object(e))ft.call(e,r
)&&"constructor"!=r&&t.push(r);return t},xt=function(e,t,r){for(var n,o=-1,i=Object(e),a=r(e),s=a.length;s--&&!1!==t(i[
n=a[++o]],n,i););return e},_t=f=function(e){return(wt(e)?yt:bt)(e)},Et=wt=j=function(e){return null!=e&&vt(e.length
)&&!mt(e)},jt=x=function(e,t){var r,n,o;if(null!=e){if(!Et(e))return e&&xt(e,t,_t);for(r=e.length,n=-1,o=Object(e
);++n<r&&!1!==t(o[n],n,o););}return e},T=function(e,n){var o=[];return jt(e,function(e,t,r){n(e,t,r)&&o.push(e)}),o},
Ot=O=function(e,t){return e===t||e!=e&&t!=t},St=E=function(e,t){for(var r=e.length;r--;)if(Ot(e[r][0],t))return r;
return-1},fr=Array.prototype,Pt=fr.splice,It=At=Tt=E,fr=function(e){var t=this.__data__,e=St(t,e);return!(e<0||(
e==t.length-1?t.pop():Pt.call(t,e,1),--this.size,0))},E=function(e){var t=this.__data__,e=Tt(t,e);return e<0?void 0:t[e
][1]},Vo=function(e){return-1<At(this.__data__,e)},c=function(e,t){var r=this.__data__,n=It(r,e);return n<0?(++this.size
,r.push([e,t])):r[n][1]=t,this},L.prototype.clear=function(){this.__data__=[],this.size=0},L.prototype.delete=fr,
L.prototype.get=E,L.prototype.has=Vo,L.prototype.set=c,kt=fr=L,E=function(){this.__data__=new kt,this.size=0},
Vo=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},c=function(e){return this.__data__.get(e)},
sr=function(e){return this.__data__.has(e)},d=A["__core-js_shared__"],d=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""),
Nt=d?"Symbol(src)_1."+d:"",d=Function.prototype,Ct=d.toString,Mt=gt,Rt=function(e){return!!Nt&&Nt in e},Ft=dt,
Gt=d=function(e){if(null!=e){try{return Ct.call(e)}catch(e){}try{return e+""}catch(e){}}return""},
e=/[\\^$.*+?()[\]{}|]/g,Dt=/^\[object .+?Constructor\]$/,w=Function.prototype,u=Object.prototype,w=w.toString,
u=u.hasOwnProperty,Lt=RegExp("^"+w.call(u).replace(e,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bt=function(e){return!(!Ft(e)||Rt(e))&&(Mt(e
)?Lt:Dt).test(Gt(e))},$t=function(e,t){return null==e?void 0:e[t]},u=(w=function(e,t){e=$t(e,t);return Bt(e)?e:void 0})(
A,"Map"),e=w(Object,"create"),Ut=zt=e,Yo=Object.prototype,Wt=Yo.hasOwnProperty,qt=e,Yo=Object.prototype,
Vt=Yo.hasOwnProperty,Ht=e,Yo=function(e){e=this.has(e)&&delete this.__data__[e];return this.size-=e?1:0,e},e=function(e
){var t,r=this.__data__;return Ut?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:Wt.call(r,e)?r[e]:void 0},S=function(e
){var t=this.__data__;return qt?void 0!==t[e]:Vt.call(t,e)},l=function(e,t){var r=this.__data__;
return this.size+=this.has(e)?0:1,r[e]=Ht&&void 0===t?"__lodash_hash_undefined__":t,this},B.prototype.clear=function(){
this.__data__=zt?zt(null):{},this.size=0},B.prototype.delete=Yo,B.prototype.get=e,B.prototype.has=S,B.prototype.set=l,
Zt=B,Jt=fr,Yt=u,Xt=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},tr=er=Qt=Kt=function(e,t){
e=e.__data__;return Xt(t)?e["string"==typeof t?"string":"hash"]:e.map},Yo=function(e){e=Kt(this,e).delete(e);
return this.size-=e?1:0,e},e=function(e){return Qt(this,e).get(e)},S=function(e){return er(this,e).has(e)},l=function(e,
t){var r=tr(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},$.prototype.clear=function(){this.size=0,
this.__data__={hash:new Zt,map:new(Yt||Jt),string:new Zt}},$.prototype.delete=Yo,$.prototype.get=e,$.prototype.has=S,
$.prototype.set=l,nr=u,or=Yo=$,ir=rr=fr,e=Vo,S=c,l=sr,fr=function(e,t){var r,n=this.__data__;if(n instanceof rr){if(
r=n.__data__,!nr||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new or(r)}return n.set(e,t),
this.size=n.size,this},z.prototype.clear=E,z.prototype.delete=e,z.prototype.get=S,z.prototype.has=l,z.prototype.set=fr,
Vo=z,ar=Yo,c=function(e){return this.__data__.has(e)},U.prototype.add=U.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},U.prototype.has=c,ur=sr=U,cr=E=function(e,t){for(var r=-1,
n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},lr=e=function(e,t){return e.has(t)},S=A.Uint8Array,dr=S,
pr=O,hr=l=function(e,t,r,n,o,i){var a,s,u,c,l,f,d,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=i.get(e),
a=i.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new ur:void 0,i.set(e,t),i.set(t,e);++s<h;){if(l=e[s],f=t[s],
void 0!==(d=n?p?n(f,l,s,t,e,i):n(l,f,s,e,t,i):d)){if(d)continue;u=!1;break}if(c){if(!cr(t,function(e,t){if(!lr(c,t)&&(
l===e||o(l,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(l!==f&&!o(l,f,r,n,i)){u=!1;break}}return i.delete(e),
i.delete(t),u},gr=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},mr=fr=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},c=I?I.prototype:void 0,vr=c?c.valueOf:void 0,
S=function(e,t,r,n,o,i,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!i(new dr(e),new dr(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return pr(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=gr;case"[object Set]":return s=s||mr,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=hr(s(e),s(t),n,o,i,a),a.delete(e),u));case"[object Symbol]":
if(vr)return vr.call(e)==vr.call(t)}return!1},yr=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];
return e},br=Ks,wr=He,c=Object.prototype,xr=c.propertyIsEnumerable,_r=Object.getOwnPropertySymbols,Er=function(e,t,r){
t=t(e);return br(e)?t:yr(t,r(e))},jr=_r?function(t){return null==t?[]:(t=Object(t),wr(_r(t),function(e){return xr.call(t
,e)}))}:function(){return[]},Or=f,Sr=function(e){return Er(e,Or,jr)},c=Object.prototype,Pr=c.hasOwnProperty,c=function(e
,t,r,n,o,i){var a,s,u,c,l,f,d,p,h,g=1&r,m=Sr(e),v=m.length;if(v!=Sr(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(
g?s in t:Pr.call(t,s)))return!1;if(p=i.get(e),h=i.get(t),p&&h)return p==t&&h==e;for(u=!0,i.set(e,t),i.set(t,e),
c=g;++a<v;){if(l=e[s=m[a]],f=t[s],!(void 0===(d=n?g?n(f,l,s,t,e,i):n(l,f,s,e,t,i):d)?l===f||o(l,f,r,n,i):d)){u=!1;break}
c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),i.delete(e),i.delete(t),u},ko=w(A,
"DataView"),u=u,s=w(A,"Promise"),a=Tr=w(A,"Set"),w=w(A,"WeakMap"),Ar=Ze,kr=(Ir=d)(A=ko),Nr=Ir(u),Cr=Ir(s),Mr=Ir(a),
Rr=Ir(w),d=Ar,(A&&"[object DataView]"!=d(new A(new ArrayBuffer(1)))||u&&"[object Map]"!=d(new u
)||s&&"[object Promise]"!=d(s.resolve())||a&&"[object Set]"!=d(new a)||w&&"[object WeakMap]"!=d(new w))&&(d=function(e){
var t=Ar(e),e="[object Object]"==t?e.constructor:void 0,e=e?Ir(e):"";if(e)switch(e){case kr:return"[object DataView]";
case Nr:return"[object Map]";case Cr:return"[object Promise]";case Mr:return"[object Set]";case Rr:
return"[object WeakMap]"}return t}),Fr=Vo,Gr=l,Dr=S,Lr=c,Br=d,$r=Ks,zr=Ms.exports,Ur=Cn,Wr="[object Arguments]",
qr="[object Array]",Vr="[object Object]",ko=Object.prototype,Hr=ko.hasOwnProperty,Zr=function(e,t,r,n,o,i){var a=$r(e),
s=$r(t),u=a?qr:Br(e),s=s?qr:Br(t),c=(u=u==Wr?Vr:u)==Vr,l=(s=s==Wr?Vr:s)==Vr;if((s=u==s)&&zr(e)){if(!zr(t))return!1;c=!(
a=!0)}return s&&!c?(i=i||new Fr,a||Ur(e)?Gr(e,t,r,n,o,i):Dr(e,t,u,r,n,o,i)):1&r||(a=c&&Hr.call(e,"__wrapped__"),
u=l&&Hr.call(t,"__wrapped__"),!a&&!u)?s&&(i=i||new Fr,Lr(e,t,r,n,o,i)):o(a?e.value():e,u?t.value():t,r,n,i=i||new Fr)},
Yr=Vo,Xr=A=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Jr(t)&&!Jr(r)?t!=t&&r!=r:Zr(t,r,n,o,e,i))},Kr=dt,
Qr=u=function(e){return e==e&&!Kr(e)},en=f,tn=function(e,t,r,n){var o,i,a,s,u,c,l=r.length,f=l,d=!n;if(null==e)return!f;
for(e=Object(e);l--;)if(o=r[l],d&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<f;)if(a=e[i=(o=r[l])[0]],s=o[1],
d&&o[2]){if(void 0===a&&!(i in e))return!1}else if(u=new Yr,!(void 0===(c=n?n(a,s,i,e,t,u):c)?Xr(s,a,3,n,u):c))return!1;
return!0},rn=function(e){for(var t,r,n=en(e),o=n.length;o--;)r=e[t=n[o]],n[o]=[t,r,Qr(r)];return n},nn=s=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},a=function(t){var r=rn(t);
return 1==r.length&&r[0][2]?nn(r[0][0],r[0][1]):function(e){return e===t||tn(e,t,r)}},on=Ze,an=Jr=Je,sn=Ks,
un=w=function(e){return"symbol"==typeof e||an(e)&&"[object Symbol]"==on(e)},
cn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ln=/^\w*$/,l=function(e,t){var r;return!sn(e)&&(!("number"!=(
r=typeof e)&&"symbol"!=r&&"boolean"!=r&&null!=e&&!un(e))||ln.test(e)||!cn.test(e)||null!=t&&e in Object(t))},fn=Yo,
W.Cache=fn,dn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
pn=/\\(\\)?/g,ws=(S=W(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(dn,function(e,t,r,n){
o.push(r?n.replace(pn,"$1"):t||e)}),o},function(e){return 500===ws.size&&ws.clear(),e})).cache,hn=c=function(e,t){for(
var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},gn=Ks,mn=w,d=I?I.prototype:void 0,
vn=d?d.toString:void 0,yn=function e(t){var r;return"string"==typeof t?t:gn(t)?hn(t,e)+"":mn(t)?vn?vn.call(t):"":"0"==(
r=t+"")&&1/t==-1/0?"-0":r},xn=S,_n=Ms=function(e){return null==e?"":yn(e)},En=w,Pn=jn=function(e,t){return bn(e)?e:wn(e,
t)?[e]:xn(_n(e))},Tn=Ns,kn=k,Mn=function(e,t){return null!=e&&t in Object(e)},Rn=Cn=function(e,t,r){for(var n,o,i=(t=Pn(
t,e)).length,a=!(n=-1);++n<i&&(o=Nn(t[n]),a=null!=e&&r(e,o));)e=e[o];return a||++n!=i?a:!!(i=null==e?0:e.length)&&kn(i
)&&In(o,i)&&(An(e)||Tn(e))},Fn=A,Gn=function(e,t,r){e=null==e?void 0:Sn(e,t);return void 0===e?r:e},Dn=function(e,t){
return null!=e&&Rn(e,t,Mn)},Bn=u,$n=s,Un=Sn=function(e,t){for(var r=0,n=(t=jn(t,e)).length;null!=e&&r<n;)e=e[On(t[r++])]
return r&&r==n?e:void 0},Wn=function(t){return function(e){return null==e?void 0:e[t]}},qn=function(t){return function(e
){return Un(e,t)}},Vn=Ln=wn=l,Hn=zn=Nn=On=function(e){var t;return"string"==typeof e||En(e)?e:"0"==(t=e+""
)&&1/e==-1/0?"-0":t},Zn=a,Jn=function(r,n){return Ln(r)&&Bn(n)?$n(zn(r),n):function(e){var t=Gn(e,r);
return void 0===t&&t===n?Dn(e,r):Fn(n,t,3)}},Yn=function(e){return e},Kn=function(e){return Vn(e)?Wn(Hn(e)):qn(e)},Qn=He
,eo=T,no=function(e,t){return(ro(e)?Qn:eo)(e,to(t))},so=function(e){return"string"==typeof e||!io(e)&&ao(e
)&&"[object String]"==oo(e)},co=O,fo=In=C,po=dt,ho=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e
))return!1;return!0},go=function(e,n){var o=!0;return uo(e,function(e,t,r){return o=!!n(e,t,r)}),o},bo=function(e,t,r){
var n=vo(e)?ho:go;return r&&yo(e,t,r)&&(t=void 0),n(e,mo(t))},wo=oo=Ze,xo=ao=Je,_o=function(e){return!0===e||!1===e||xo(
e)&&"[object Boolean]"==wo(e)},Eo=function(e){return null===e},Oo=lo=j,So=c,To=function(e,n){var o=-1,i=Oo(e)?Array(
e.length):[];return jo(e,function(e,t,r){i[++o]=n(e,t,r)}),i},Io=function(e,t){return(Ao(e)?So:To)(e,Po(t))},
No=ko=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r},Ro=function(
e,n,o,i,t){return t(e,function(e,t,r){o=i?(i=!1,e):n(o,e,t,r)}),o},Go=function(e,t,r){var n=Fo(e)?No:Ro,
o=arguments.length<3;return n(e,Mo(t),r,o,Co)},Do=Co=jo=uo=x,Lo=E,Bo=Mo=Po=mo=to=function(e){
return"function"==typeof e?e:null==e?Yn:"object"==typeof e?Xn(e)?Jn(e[0],e[1]):Zn(e):Kn(e)},$o=function(e,n){var o;
return Do(e,function(e,t,r){return!(o=n(e,t,r))}),!!o},zo=Fo=Ao=vo=io=ro=Xn=An=bn=Ks,Uo=yo=function(e,t,r){var n;
return!!po(r)&&!!("number"==(n=typeof t)?lo(r)&&fo(t,r.length):"string"==n&&t in r)&&co(r[t],e)},Wo=function(e,t,r){
var n=zo(e)?Lo:$o;return r&&Uo(e,t,r)&&(t=void 0),n(e,Bo(t))},qo=function(e,t,r){var n,o=-1,i=e.length;for((r=i<r?i:r
)<0&&(r+=i),i=r<(t=t<0?i<-t?0:i+t:t)?0:r-t>>>0,t>>>=0,n=Array(i);++o<i;)n[o]=e[o+t];return n},Vo=function(e,t,r){
var n=e.length;return r=void 0===r?n:r,!t&&n<=r?e:qo(e,t,r)},Ho=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1
);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Zo=function(e){return e!=e},Jo=function(e,t,r){for(var n=r-1,
o=e.length;++n<o;)if(e[n]===t)return n;return-1},Yo=function(e,t,r){return t==t?Jo(e,t,r):Ho(e,Zo,r)},I=function(e){
return e.split("")},Xo=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
d=function(e){return Xo.test(e)},
S="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",w="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Ko=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+w+S,"g"),Qo=I,ei=d,ti=function(e){return e.match(Ko)||[]},
Ns=function(e){return(ei(e)?ti:Qo)(e)},ri=Ze,ni=Je,oi=function(e){return"number"==typeof e||ni(e
)&&"[object Number]"==ri(e)},ii=c,ai=function(t,e){return ii(e,function(e){return t[e]})},si=f,ui=function(e){
return null==e?[]:ai(e,si(e))};class Qs{constructor(e,t){n(this,"_logger",void 0),n(this,"name",void 0),n(this,"_level",
void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=r.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=r.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=r.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=r.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class eu{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case r.DEBUG:return"DEBUG";case r.INFO:return"INFO";case r.WARN:return"WARN";case r.ERROR:return"ERROR";
case r.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=r.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=r.INFO&&this._logger.info(...e)}static warn(...e){this._level<=r.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=r.ERROR&&this._logger.error(...e)}static createLogger(e){return new Qs(e,eu)}}n(eu
,"Level",r={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),n(eu,"_level",r.DEBUG)
,n(eu,"_logger",console),ci={NPM:"npm",YARN:"yarn",HGM:"hgm"};class tu{constructor(){n(this,"_preferredPackageSystem",
void 0),n(this,"_gitOrganization",void 0),n(this,"_organizationName",void 0),n(this,"_organizationEmail",void 0),n(this,
"_pkgDir",void 0),n(this,"_buildDir",void 0),n(this,"_sourceDir",void 0),n(this,"_templatesDir",void 0),n(this,
"_gitCommitMessage",void 0),n(this,"_gitBranch",void 0),n(this,"_mainName",void 0),n(this,"_distFile",void 0),n(this,
"_mainSrcFileTemplate",void 0),n(this,"_mainSrcFileName",void 0),n(this,"_files",void 0),n(this,"_renameFiles",void 0),
n(this,"_gitSubmodules",void 0),n(this,"_packages",void 0),n(this,"_packageJsonModifier",void 0)}
static createFromTemplateFile(e){var t=P.dirname(e),e=require(e),r=tu.createFromDataObject(e);
return r.setTemplatesDirectory(P.resolve(t,null!=(t=null==e?void 0:e.templatesDir)?t:"./templates")),r}
static createFromDataObject(e){var t,r=new tu;return r.setPreferredPackageSystem(re(null!=(
t=null==e?void 0:e.preferredPackageSystem)?t:"npm")),r.setGitOrganization(null!=(t=null==e?void 0:e.gitOrganization
)?t:"@heusalagroup"),r.setOrganizationName(null!=(t=null==e?void 0:e.organizationName)?t:"Heusala Group"),
r.setOrganizationEmail(null!=(t=null==e?void 0:e.organizationEmail)?t:"info@heusalagroup.fi"),r.setSourceDir(null!=(
t=null==e?void 0:e.sourceDir)?t:"./src"),r.setBuildDir(null!=(t=null==e?void 0:e.buildDir)?t:"./dist"),
r.setMainSourceFileTemplate(null!=(t=null==e?void 0:e.mainSourceFileTemplate)?t:"./src/run.ts"),r.setFiles(null!=(
t=null==e?void 0:e.files)?t:[]),r.setRenameFiles(null!=(t=null==e?void 0:e.renameFiles)?t:{}),r.setGitSubmodules(null!=(
t=null==e?void 0:e.gitSubmodules)?t:[]),r.setPackages(null!=(t=null==e?void 0:e.packages)?t:[]),r.setGitCommitMessage(
null!=(t=null==e?void 0:e.gitCommitMessage)?t:"first commit"),r.setGitBranch(null!=(t=null==e?void 0:e.gitBranch
)?t:"main"),r}toString(){return"CreatePackageConfig"}toJSON(){return{}}setPreferredPackageSystem(e){
return this._preferredPackageSystem=e,this}getPreferredPackageSystem(){var e;return null!=(
e=this._preferredPackageSystem)?e:ci.NPM}setGitOrganization(e){return this._gitOrganization=e,this}getGitOrganization(){
return this._gitOrganization}setOrganizationName(e){return this._organizationName=e,this}getOrganizationName(){
return this._organizationName}setOrganizationEmail(e){return this._organizationEmail=e,this}getOrganizationEmail(){
return this._organizationEmail}setPackageDirectory(e){return this._pkgDir=e,this}getPackageDirectory(){
return this._pkgDir}setBuildDir(e){return this._buildDir=e,this}getBuildDir(){return this._buildDir}setSourceDir(e){
return this._sourceDir=e,this}getSourceDir(){return this._sourceDir}setTemplatesDirectory(e){return this._templatesDir=e
,this}getTemplatesDirectory(){return this._templatesDir}setGitCommitMessage(e){return this._gitCommitMessage=e,this}
getGitCommitMessage(){return this._gitCommitMessage}setGitBranch(e){return this._gitBranch=e,this}getGitBranch(){
return this._gitBranch}setMainName(e){return this._mainName=e,this}_getDefaultMainName(){var e=this.getPackageDirectory(
);if(e)return P.basename(e);throw new TypeError("Package directory or main name must be set first")}getMainName(){var e;
return null!=(e=this._mainName)?e:this._getDefaultMainName()}setDistFile(e){return this._distFile=e,this}getDistFile(){
var e;return null!=(e=this._distFile)?e:P.join(this.getBuildDir(),this.getMainName()+".js")}setMainSourceFileName(e){
return this._mainSrcFileName=e,this}getMainSourceFileName(){var e;return null!=(e=this._mainSrcFileName)?e:P.join(
this.getSourceDir(),this.getMainName()+".ts")}setMainSourceFileTemplate(e){return this._mainSrcFileTemplate=e,this}
getMainSourceFileTemplate(){var e;return null!=(e=this._mainSrcFileTemplate)?e:P.join(this.getSourceDir(),
this.getMainName()+".ts")}setFiles(e){return this._files=Io(e,e=>e),this}getFiles(){return this._files}setRenameFiles(e
){return this._renameFiles=e,this}getRenameFiles(){return this._renameFiles}setPackages(e){return this._packages=Io(e,
e=>e),this}getPackages(){return this._packages}setGitSubmodules(e){return this._gitSubmodules=Io(e,e=>e),this}
getGitSubmodules(){return this._gitSubmodules}setPackageJsonModifier(e){return this._packageJsonModifier=e,this}
getPackageJsonModifier(){return this._packageJsonModifier}}const ru=eu.createLogger("SyncFileUtils");class M{
static isDirectory(e){return Fs.default.statSync(e).isDirectory()}static directoryExits(e){return Fs.default.existsSync(
e)&&Fs.default.statSync(e).isDirectory()}static mkdirp(e){var t,r,n;for(ru.debug("mkdirp: Creating directory: ",e),t=[
];!M.directoryExits(e)&&(t.push(e),e!==(r=Rs.default.dirname(e)));)e=r;for(;1<=t.length;){if(!(n=t.pop())
)throw new TypeError("No dir");ru.debug("mkdirp: Creating missing directory: ",n),Fs.default.mkdirSync(n)}}
static readTextFile(e){return Fs.default.readFileSync(e,"utf8")}static fileExists(e){return Fs.default.existsSync(e)}
static readJsonFile(e){return JSON.parse(M.readTextFile(e))}static writeTextFile(e,t){Fs.default.writeFileSync(e,t,{
encoding:"utf8"})}static writeJsonFile(e,t){t=JSON.stringify(t,null,2);M.writeTextFile(e,t)}
static copyTextFileWithReplacements(e,t,r){let n=M.readTextFile(e);X(r).forEach(e=>{var t=r[e];n=function(e,t,r){if(!q(t
))throw new TypeError("replaceAll: from is required");if(!q(e))throw new TypeError("replaceAll: value is not a string");
if(!q(r))throw new TypeError("replaceAll: to is not a string");if(""===t)return["",...e.split(""),""].join(r);let n="",
o=0,i=e.indexOf(t);for(;i>=o;)n+=e.substring(o,i)+r,o=i+t.length,i=e.indexOf(t,o);return n+=e.substring(o)}(n,e,t)}),
M.writeTextFile(t,n)}static copyTextFileWithReplacementsIfMissing(e,t,r){M.fileExists(t)?ru.warn(
"Warning! File already exists: ",t):M.copyTextFileWithReplacements(e,t,r)}}li={},k={},u={exports:{}},s={exports:{}},
l=function(e){try{return e()}catch(e){}},(a=function(r,n,o){fi.stat(r,function(e,t){o(e,!e&&ne(t,r,n))})}
).sync=function(e,t){return ne(fi.statSync(e),e,t)},fi=Fs.default,oe.sync=function(e,t){return ie(di.statSync(e),t)},
di=Fs.default,pi="win32"===process.platform||N.TESTING_WINDOWS?a:oe,(T=function e(t,o,r){if("function"==typeof o&&(r=o,
o={}),!r){if("function"!=typeof Promise)throw new TypeError("callback not provided");return new Promise(function(r,n){e(
t,o||{},function(e,t){e?n(e):r(t)})})}pi(t,o||{},function(e,t){e&&("EACCES"===e.code||o&&o.ignoreErrors)&&(e=null,t=!1),
r(e,t)})}).sync=function(e,t){try{return pi.sync(e,t||{})}catch(e){if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;
throw e}},ue.sync=function(e,t){for(var r,n,o,i,a,s,u=(r=se(e,t=t||{})).env,c=r.ext,l=r.extExe,f=[],d=0,
p=u.length;d<p;d++)for('"'===(n=u[d]).charAt(0)&&'"'===n.slice(-1)&&(n=n.slice(1,-1)),o=gi.join(n,e),
!n&&/^\.[\\\/]/.test(e)&&(o=e.slice(0,2)+o),i=0,a=c.length;i<a;i++){s=o+c[i];try{if(vi.sync(s,{pathExt:l})){if(!t.all
)return s;f.push(s)}}catch(e){}}if(t.all&&f.length)return f;if(t.nothrow)return null;throw ae(e)},
hi="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,gi=Rs.default,mi=hi?";":":",
vi=T;const nu=Rs.default,ou=ue,iu=(O=e=>{var t=(e=e||{}).env||process.env;return"win32"!==(e.platform||process.platform
)?"PATH":Object.keys(t).find(e=>"PATH"===e.toUpperCase())||"Path"})(),au=(C=function(e){return ce(e)||ce(e,!0)},
/([()\][%!^"`<>&|;, *?])/g),su=((j={}).command=function(e){return e.replace(au,"^$1")},j.argument=function(e,t){
return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`).replace(au,"^$1"),t?e.replace(
au,"^$1"):e},yi=/^#!.*/,Fs.default);for(x=function(e){var t;let r;Buffer.alloc?r=Buffer.alloc(150):(r=new Buffer(150)
).fill(0);try{t=su.openSync(e,"r"),su.readSync(t,r,0,150,0),su.closeSync(t)}catch(e){}return(e=r.toString().match(yi))?(
e=(t=e[0].replace(/#! ?/,"").split(" "))[0].split("/").pop(),t=t[1],"env"===e?t:e+(t?" "+t:"")):null},_=(E={exports:{}}
).exports,_=E.exports=p,m="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(
process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(
console,e)}:function(){},_.SEMVER_SPEC_VERSION="2.0.0",ss=256,us=Number.MAX_SAFE_INTEGER||9007199254740991,v=_.re=[],(
y=_.src=[])[0]="0|[1-9]\\d*",y[1]="[0-9]+",y[2]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",y[3]="("+y[0]+")\\.("+y[0]+")\\.("+y[0]+")"
,y[4]="("+y[1]+")\\.("+y[1]+")\\.("+y[1]+")",y[5]="(?:"+y[0]+"|"+y[2]+")",y[6]="(?:"+y[1]+"|"+y[2]+")",y[7]="(?:-("+y[5
]+"(?:\\."+y[5]+")*))",y[8]="(?:-?("+y[6]+"(?:\\."+y[6]+")*))",y[9]="[0-9A-Za-z-]+",y[10]="(?:\\+("+y[9]+"(?:\\."+y[9
]+")*))",cs=11,w="v?"+y[3]+y[7]+"?"+y[10]+"?",y[cs]="^"+w+"$",S="[v=\\s]*"+y[4]+y[8]+"?"+y[10]+"?",y[ls=12]="^"+S+"$",y[
13]="((?:<|>)?=?)",y[14]=y[1]+"|x|X|\\*",y[15]=y[0]+"|x|X|\\*",y[16]="[v=\\s]*("+y[15]+")(?:\\.("+y[15]+")(?:\\.("+y[15
]+")(?:"+y[7]+")?"+y[10]+"?)?)?",y[17]="[v=\\s]*("+y[14]+")(?:\\.("+y[14]+")(?:\\.("+y[14]+")(?:"+y[8]+")?"+y[10
]+"?)?)?",y[18]="^"+y[13]+"\\s*"+y[16]+"$",y[19]="^"+y[13]+"\\s*"+y[17]+"$",y[20
]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",y[21]="(?:~>?)",y[22]="(\\s*)"+y[21
]+"\\s+",v[22]=new RegExp(y[22],"g"),y[23]="^"+y[21]+y[16]+"$",y[24]="^"+y[21]+y[17]+"$",y[25]="(?:\\^)",y[26
]="(\\s*)"+y[25]+"\\s+",v[26]=new RegExp(y[26],"g"),y[27]="^"+y[25]+y[16]+"$",y[28]="^"+y[25]+y[17]+"$",y[29]="^"+y[13
]+"\\s*("+S+")$|^$",y[30]="^"+y[13]+"\\s*("+w+")$|^$",y[31]="(\\s*)"+y[13]+"\\s*("+S+"|"+y[16]+")",v[31]=new RegExp(y[31
],"g"),y[32]="^\\s*("+y[16]+")\\s+-\\s+("+y[16]+")\\s*$",y[33]="^\\s*("+y[17]+")\\s+-\\s+("+y[17]+")\\s*$",y[34
]="(<|>)?=?\\s*\\*",fs=0;fs<35;fs++)m(fs,y[fs]),v[fs]||(v[fs]=new RegExp(y[fs]));_.parse=Oe,_.valid=function(e,t){e=Oe(e
,t);return e?e.version:null},_.clean=function(e,t){e=Oe(e.trim().replace(/^[=v]+/,""),t);return e?e.version:null},(
_.SemVer=p).prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,
this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},p.prototype.toString=function(){
return this.version},p.prototype.compare=function(e){return m("SemVer.compare",this.version,this.options,e),
e instanceof p||(e=new p(e,this.options)),this.compareMain(e)||this.comparePre(e)},p.prototype.compareMain=function(e){
return e instanceof p||(e=new p(e,this.options)),Se(this.major,e.major)||Se(this.minor,e.minor)||Se(this.patch,e.patch)}
,p.prototype.comparePre=function(e){var t,r,n;if(e instanceof p||(e=new p(e,this.options)),
this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(
!this.prerelease.length&&!e.prerelease.length)return 0;t=0;do{if(r=this.prerelease[t],n=e.prerelease[t],m(
"prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n
)return Se(r,n)}while(++t)},p.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0
,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,
this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;
case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":
0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];
break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;
case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length
)this.prerelease=[0];else{for(var r=this.prerelease.length;0<=--r;)"number"==typeof this.prerelease[r]&&(
this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]!==t||isNaN(this.prerelease[1]))&&(
this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),
this.raw=this.version,this},_.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new p(e,r).inc(t,n
).version}catch(e){return null}},_.diff=function(e,t){var r,n,o,i,a;if(Ie(e,t))return null;for(a in r=Oe(e),n=Oe(t),o=""
,(r.prerelease.length||n.prerelease.length)&&(o="pre",i="prerelease"),r)if(("major"===a||"minor"===a||"patch"===a)&&r[a
]!==n[a])return o+a;return i},_.compareIdentifiers=Se,ds=/^[0-9]+$/,_.rcompareIdentifiers=function(e,t){return Se(t,e)},
_.major=function(e,t){return new p(e,t).major},_.minor=function(e,t){return new p(e,t).minor},_.patch=function(e,t){
return new p(e,t).patch},_.compare=Pe,_.compareLoose=function(e,t){return Pe(e,t,!0)},_.rcompare=function(e,t,r){
return Pe(t,e,r)},_.sort=function(e,r){return e.sort(function(e,t){return _.compare(e,t,r)})},_.rsort=function(e,r){
return e.sort(function(e,t){return _.rcompare(e,t,r)})},_.gt=Te,_.lt=Ae,_.eq=Ie,_.neq=ke,_.gte=Ne,_.lte=Ce,_.cmp=Me,
_.Comparator=Re,ps={},Re.prototype.parse=function(e){var t=this.options.loose?v[29]:v[30],t=e.match(t);if(!t
)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2
]?this.semver=new p(t[2],this.options.loose):this.semver=ps},Re.prototype.toString=function(){return this.value},
Re.prototype.test=function(e){return m("Comparator.test",e,this.options.loose),this.semver===ps||Me(
e="string"==typeof e?new p(e,this.options):e,this.operator,this.semver,this.options)},Re.prototype.intersects=function(e
,t){var r,n,o,i,a;if(e instanceof Re)return t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),
""===this.operator?(r=new h(e.value,t),Ge(this.value,r,t)):""===e.operator?(r=new h(this.value,t),Ge(e.semver,r,t)):(
r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!(
"<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version
,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=Me(this.semver,"<",e.semver,t
)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),t=Me(this.semver,">",e.semver,t
)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator),r||n||o&&i||a||t);
throw new TypeError("a Comparator is required")},(_.Range=h).prototype.format=function(){return this.range=this.set.map(
function(e){return e.join(" ").trim()}).join("||").trim(),this.range},h.prototype.toString=function(){return this.range}
,h.prototype.parseRange=function(e){var t,r,n=this.options.loose;return e=e.trim(),r=n?v[33]:v[32],e=e.replace(r,Fe),m(
"hyphen replace",e),e=e.replace(v[31],"$1$2$3"),m("comparator trim",e,v[31]),e=(e=(e=e.replace(v[22],"$1~")).replace(v[
26],"$1^")).split(/\s+/).join(" "),t=n?v[29]:v[30],r=e.split(" ").map(function(e){return t=this.options,m("comp",e=e,t),
r=t,e=e.trim().split(/\s+/).map(function(e){return m("caret",i=e,e=r),e=e.loose?v[28]:v[27],i.replace(e,function(e,t,r,n
,o){return m("caret",i,e,t,r,n,o),e=g(t)?"":g(r)?">="+t+".0.0 <"+(+t+1)+".0.0":g(n)?"0"===t?">="+t+"."+r+".0 <"+t+"."+(
+r+1)+".0":">="+t+"."+r+".0 <"+(+t+1)+".0.0":o?(m("replaceCaret pr",o),
"0"===t?"0"===r?">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+r+"."+(+n+1):">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1
)+".0":">="+t+"."+r+"."+n+"-"+o+" <"+(+t+1)+".0.0"):(m("no pr"),"0"===t?"0"===r?">="+t+"."+r+"."+n+" <"+t+"."+r+"."+(
+n+1):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0":">="+t+"."+r+"."+n+" <"+(+t+1)+".0.0"),m("caret return",e),e});var i}
).join(" "),m("caret",e),n=t,e=e.trim().split(/\s+/).map(function(e){return i=e,e=n.loose?v[24]:v[23],i.replace(e,
function(e,t,r,n,o){return m("tilde",i,e,t,r,n,o),e=g(t)?"":g(r)?">="+t+".0.0 <"+(+t+1)+".0.0":g(n
)?">="+t+"."+r+".0 <"+t+"."+(+r+1)+".0":o?(m("replaceTilde pr",o),">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1)+".0"
):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0",m("tilde return",e),e});var i}).join(" "),m("tildes",e),m("replaceXRanges",
i=e,o=t),e=i.split(/\s+/).map(function(e){return t=o,u=(u=e).trim(),e=t.loose?v[19]:v[18],u.replace(e,function(e,t,r,n,o
,i){var a,s;return m("xRange",u,e,t,r,n,o,i),s=(a=(i=g(r))||g(n))||g(o),"="===t&&s&&(t=""),
i?e=">"===t||"<"===t?"<0.0.0":"*":t&&s?(a&&(n=0),o=0,">"===t?(t=">=",o=a?(r=+r+1,n=0):(n=+n+1,0)):"<="===t&&(t="<",
a?r=+r+1:n=+n+1),e=t+r+"."+n+"."+o):a?e=">="+r+".0.0 <"+(+r+1)+".0.0":s&&(e=">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0"),m(
"xRange return",e),e});var u,t}).join(" "),m("xrange",e),m("replaceStars",i=e,t),e=i.trim().replace(v[34],""),m("stars",
e),e;var t,r,n,o,i},this).join(" ").split(/\s+/),(r=this.options.loose?r.filter(function(e){return!!e.match(t)}):r).map(
function(e){return new Re(e,this.options)},this)},h.prototype.intersects=function(r,n){if(r instanceof h
)return this.set.some(function(e){return e.every(function(t){return r.set.some(function(e){return e.every(function(e){
return t.intersects(e,n)})})})});throw new TypeError("a Range is required")},_.toComparators=function(e,t){return new h(
e,t).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},
h.prototype.test=function(e){if(e){"string"==typeof e&&(e=new p(e,this.options));for(var t=0;t<this.set.length;t++)if(
function(e,t,r){for(var n,o=0;o<e.length;o++)if(!e[o].test(t))return;if(!t.prerelease.length||r.includePrerelease
)return 1;for(o=0;o<e.length;o++)if(m(e[o].semver),e[o].semver!==ps&&0<e[o].semver.prerelease.length&&(n=e[o].semver
).major===t.major&&n.minor===t.minor&&n.patch===t.patch)return 1}(this.set[t],e,this.options))return!0}return!1},
_.satisfies=Ge,_.maxSatisfying=function(e,t,r){var n,o=null,i=null;try{n=new h(t,r)}catch(e){return null}
return e.forEach(function(e){!n.test(e)||o&&-1!==i.compare(e)||(i=new p(o=e,r))}),o},_.minSatisfying=function(e,t,r){
var n,o=null,i=null;try{n=new h(t,r)}catch(e){return null}return e.forEach(function(e){!n.test(e)||o&&1!==i.compare(e
)||(i=new p(o=e,r))}),o},_.minVersion=function(e,t){var r,n;if(e=new h(e,t),r=new p("0.0.0"),e.test(r))return r;if(
r=new p("0.0.0-0"),e.test(r))return r;for(r=null,n=0;n<e.set.length;++n)e.set[n].forEach(function(e){var t=new p(
e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();
case"":case">=":r&&!Te(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error(
"Unexpected operation: "+e.operator)}});return r&&e.test(r)?r:null},_.validRange=function(e,t){try{return new h(e,t
).range||"*"}catch(e){return null}},_.ltr=function(e,t,r){return De(e,t,"<",r)},_.gtr=function(e,t,r){return De(e,t,">",
r)},_.outside=De,_.prerelease=function(e,t){e=Oe(e,t);return e&&e.prerelease.length?e.prerelease:null},
_.intersects=function(e,t,r){return e=new h(e,r),t=new h(t,r),e.intersects(t)},_.coerce=function(e){
return e instanceof p?e:"string"!=typeof e||null==(e=e.match(v[20]))?null:Oe(e[1]+"."+(e[2]||"0")+"."+(e[3]||"0"))};
const uu=Rs.default,cu=C,lu=j,fu=x,du=E.exports,pu="win32"===process.platform,hu=/\.(?:com|exe)$/i,
gu=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,mu=l(()=>du.satisfies(process.version,"^4.8.0 || ^5.7.0 || >= 6.0.0",!0)
)||!1,vu="win32"===process.platform,yu=Os.default,bu={hookChildProcess:function(r,n){if(vu){const o=r.emit;
r.emit=function(e,t){if("exit"===e){e=fe(t,n);if(e)return o.call(r,"error",e)}return o.apply(r,arguments)}}},
verifyENOENT:fe,verifyENOENTSync:function(e,t){return vu&&1===e&&!t.file?le(t.original,"spawnSync"):null},
notFoundError:le};s.exports=de,s.exports.spawn=de,s.exports.sync=function(e,t,r){e=We(e,t,r),t=yu.spawnSync(e.command,
e.args,e.options);return t.error=t.error||bu.verifyENOENTSync(t.status,e),t},s.exports._parse=We,s.exports._enoent=bu,
I=function(e){var t="string"==typeof e?"\n":"\n".charCodeAt(),r="string"==typeof e?"\r":"\r".charCodeAt();return(e=e[
e.length-1]===t?e.slice(0,e.length-1):e)[e.length-1]===r?e.slice(0,e.length-1):e};{hs=c={exports:{}};const Sc=Rs.default
,Pc=O;hs.exports=e=>{e=Object.assign({cwd:process.cwd(),path:process.env[Pc()]},e);let t,r=Sc.resolve(e.cwd);for(var n=[
];t!==r;)n.push(Sc.join(r,"node_modules/.bin")),t=r,r=Sc.resolve(r,"..");return n.push(Sc.dirname(process.execPath)),
n.concat(e.path).join(Sc.delimiter)},hs.exports.env=e=>{e=Object.assign({env:process.env},e);var t=Object.assign({},
e.env),r=Pc({env:t});return e.path=t[r],t[r]=hs.exports(e),t}}(bi=(f={exports:{}}).exports=function(e){
return null!==e&&"object"==typeof e&&"function"==typeof e.pipe}).writable=function(e){return bi(e
)&&!1!==e.writable&&"function"==typeof e._write&&"object"==typeof e._writableState},bi.readable=function(e){return bi(e
)&&!1!==e.readable&&"function"==typeof e._read&&"object"==typeof e._readableState},bi.duplex=function(e){
return bi.writable(e)&&bi.readable(e)},bi.transform=function(e){return bi.duplex(e
)&&"function"==typeof e._transform&&"object"==typeof e._transformState},a={exports:{}},(w={exports:{}}).exports=(
S=function e(o,t){function r(){for(var t,r,e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];
return t=o.apply(this,e),r=e[e.length-1],"function"==typeof t&&t!==r&&Object.keys(r).forEach(function(e){t[e]=r[e]}),t}
if(o&&t)return e(o)(t);if("function"!=typeof o)throw new TypeError("need wrapper function");return Object.keys(o
).forEach(function(e){r[e]=o[e]}),r})(pe),w.exports.strict=S(he),pe.proto=pe(function(){Object.defineProperty(
Function.prototype,"once",{value:function(){return pe(this)},configurable:!0}),Object.defineProperty(Function.prototype,
"onceStrict",{value:function(){return he(this)},configurable:!0})}),xi=function(){},_i=function(e){
return e.setHeader&&"function"==typeof e.abort},Ei=function(e){return e.stdio&&Array.isArray(e.stdio
)&&3===e.stdio.length},Oi=wi=w.exports,Si=ji=function(t,e,r){var n,o,i,a,s,u,c,l,f,d,p,h,g;
return"function"==typeof e?ji(t,null,e):(e=e||{},r=wi(r||xi),n=t._writableState,o=t._readableState,
i=e.readable||!1!==e.readable&&t.readable,a=e.writable||!1!==e.writable&&t.writable,s=!1,u=function(){t.writable||c()},
c=function(){a=!1,i||r.call(t)},l=function(){i=!1,a||r.call(t)},f=function(e){r.call(t,e?new Error(
"exited with error code: "+e):null)},d=function(e){r.call(t,e)},p=function(){process.nextTick(h)},h=function(){
return s||(!i||o&&o.ended&&!o.destroyed)&&(!a||n&&n.ended&&!n.destroyed)?void 0:r.call(t,new Error("premature close"))},
g=function(){t.req.on("finish",c)},_i(t)?(t.on("complete",c),t.on("abort",p),t.req?g():t.on("request",g)):a&&!n&&(t.on(
"end",u),t.on("close",u)),Ei(t)&&t.on("exit",f),t.on("end",l),t.on("finish",c),!1!==e.error&&t.on("error",d),t.on(
"close",p),function(){s=!0,t.removeListener("complete",c),t.removeListener("abort",p),t.removeListener("request",g),
t.req&&t.req.removeListener("finish",c),t.removeListener("end",u),t.removeListener("close",u),t.removeListener("finish",
c),t.removeListener("exit",f),t.removeListener("end",l),t.removeListener("error",d),t.removeListener("close",p)})},
Pi=Fs.default,Ti=function(){},Ai=/^v?\.0/.test(process.version),Ii=function(e){return"function"==typeof e},ki=function(e
){return!!Ai&&!!Pi&&(e instanceof(Pi.ReadStream||Ti)||e instanceof(Pi.WriteStream||Ti))&&Ii(e.close)},Ni=function(e){
return e.setHeader&&Ii(e.abort)},Ci=function(t,e,r,n){var o,i;return n=Oi(n),o=!1,t.on("close",function(){o=!0}),Si(t,{
readable:e,writable:r},function(e){if(e)return n(e);o=!0,n()}),i=!1,function(e){if(!o&&!i)return i=!0,ki(t)?t.close(Ti
):Ni(t)?t.abort():Ii(t.destroy)?t.destroy():void n(e||new Error("stream was destroyed"))}},Mi=function(e){e()},
Ri=function(e,t){return e.pipe(t)};const wu=Ss.default.PassThrough;class xu extends Error{constructor(){super(
"maxBuffer exceeded"),this.name="MaxBufferError"}}a.exports=ge,a.exports.buffer=(e,t)=>ge(e,Object.assign({},t,{
encoding:"buffer"})),a.exports.array=(e,t)=>ge(e,Object.assign({},t,{array:!0})),a.exports.MaxBufferError=xu,C=(e,t)=>(
t=t||(()=>{}),e.then(e=>new Promise(e=>{e(t())}).then(()=>e),e=>new Promise(e=>{e(t())}).then(()=>{throw e}))),j={
exports:{}},(E=x={exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],
"win32"!==process.platform&&E.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT",
"SIGIOT"),"linux"===process.platform&&E.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),Le(o=N.process
)?(Fi=Ps.default,Gi=x.exports,Di=/^win/i.test(o.platform),"function"!=typeof(l=Ts.default)&&(l=l.EventEmitter),
o.__signal_exit_emitter__?i=o.__signal_exit_emitter__:((i=o.__signal_exit_emitter__=new l).count=0,i.emitted={}),
i.infinite||(i.setMaxListeners(1/0),i.infinite=!0),j.exports=function(e,t){var r;return Le(N.process)?(Fi.equal(typeof e
,"function","a callback must be provided for exit handler"),!1===zi&&Ui(),r="exit",t&&t.alwaysLast&&(r="afterexit"),
t=function(){i.removeListener(r,e),0===i.listeners("exit").length&&0===i.listeners("afterexit").length&&Li()},i.on(r,e),
t):function(){}},Li=function(){zi&&Le(N.process)&&(zi=!1,Gi.forEach(function(e){try{o.removeListener(e,$i[e])}catch(e){}
}),o.emit=Vi,o.reallyExit=Wi,--i.count)},j.exports.unload=Li,Bi=function(e,t,r){i.emitted[e]||(i.emitted[e]=!0,i.emit(e,
t,r))},$i={},Gi.forEach(function(e){$i[e]=function(){Le(N.process)&&o.listeners(e).length===i.count&&(Li(),Bi("exit",
null,e),Bi("afterexit",null,e),Di&&"SIGHUP"===e&&(e="SIGINT"),o.kill(o.pid,e))}}),j.exports.signals=function(){return Gi
},zi=!1,Ui=function(){!zi&&Le(N.process)&&(zi=!0,i.count+=1,Gi=Gi.filter(function(e){try{return o.on(e,$i[e]),!0}catch(e
){return!1}}),o.emit=Hi,o.reallyExit=qi)},j.exports.load=Ui,Wi=o.reallyExit,qi=function(e){Le(N.process)&&(
o.exitCode=e||0,Bi("exit",o.exitCode,null),Bi("afterexit",o.exitCode,null),Wi.call(o,o.exitCode))},Vi=o.emit,
Hi=function(e,t){return"exit"===e&&Le(N.process)?(void 0!==t&&(o.exitCode=t),e=Vi.apply(this,arguments),Bi("exit",
o.exitCode,null),Bi("afterexit",o.exitCode,null),e):Vi.apply(this,arguments)}):j.exports=function(){return function(){}}
,ys=j.exports,O={exports:{}},S=As.default;let _u;if("function"==typeof S.getSystemErrorName
)O.exports=S.getSystemErrorName;else{try{if("function"!=typeof(_u=process.binding("uv")).errname)throw new TypeError(
"uv.errname is not a function")}catch(e){console.error("execa/lib/errname: unable to establish process.binding('uv')",e)
,_u=null}O.exports=e=>me(_u,e)}O.exports.__test__=me;const Eu=["stdin","stdout","stderr"];{function ju(e,t,r){return(
r=Object.assign({extendEnv:!0,env:{}},r)).extendEnv&&(r.env=Object.assign({},process.env,r.env)),e=!0===r.__winShell?(
delete r.__winShell,{command:e,args:t,options:r,file:e,original:{cmd:e,args:t}}):Ic._parse(e,t,r),(r=Object.assign({
maxBuffer:1e7,buffer:!0,stripEof:!0,preferLocal:!0,localDir:e.options.cwd||process.cwd(),encoding:"utf8",reject:!0,
cleanup:!0},e.options)).stdio=(r=>{var t,n,o,e;if(!r)return null;if(r.stdio&&(t=r,Eu.some(e=>Boolean(t[e])))
)throw new Error("It's not possible to provide `stdio` in combination with one of "+Eu.map(e=>`\`${e}\``).join(", "));
if("string"==typeof r.stdio)return r.stdio;if(n=r.stdio||[],!Array.isArray(n))throw new TypeError(
`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);o=[],e=Math.max(n.length,Eu.length);
for(let t=0;t<e;t++){let e=null;void 0!==n[t]?e=n[t]:void 0!==r[Eu[t]]&&(e=r[Eu[t]]),o[t]=e}return o})(r),
r.preferLocal&&(r.env=Nc.env(Object.assign({},r,{cwd:r.localDir}))),r.detached&&(r.cleanup=!1),
"win32"===process.platform&&"cmd.exe"===Tc.basename(e.command)&&e.args.unshift("/q"),{cmd:e.command,args:e.args,opts:r,
parsed:e}}function Ou(e,t){return t&&e.stripEof?kc(t):t}function Su(e,t,r){let n="/bin/sh",o=["-c",t];
return r=Object.assign({},r),"win32"===process.platform&&(r.__winShell=!0,n=process.env.comspec||"cmd.exe",o=["/s","/c",
`"${t}"`],r.windowsVerbatimArguments=!0),r.shell&&(n=r.shell,delete r.shell),e(n,o,r)}function Pu(r,n,{encoding:e,
buffer:t,maxBuffer:o}){return r[n]?(t?e?Mc(r[n],{encoding:e,maxBuffer:o}):Mc.buffer(r[n],{maxBuffer:o}):new Promise((e,t
)=>{r[n].once("end",e).once("error",t)})).catch(e=>{throw e.stream=n,e.message=n+" "+e.message,e}):null}function Tu(t,e
){var{stdout:r,stderr:n}=t;let o=t.error;var{code:t,signal:i}=t,{parsed:a,joinedCmd:s}=e,e=e.timedOut||!1;if(!o){
let e="";Array.isArray(a.opts.stdio)?("inherit"!==a.opts.stdio[2]&&(e+=0<e.length?n:`
`+n),"inherit"!==a.opts.stdio[1]&&(e+=`
`+r)):"inherit"!==a.opts.stdio&&(e=`
`+n+r),(o=new Error("Command failed: "+s+e)).code=t<0?Gc(t):t}return o.stdout=r,o.stderr=n,o.failed=!0,o.signal=i||null,
o.cmd=s,o.timedOut=e,o}function Au(e,t){let r=e;return Array.isArray(t)&&0<t.length&&(r+=" "+t.join(" ")),r}bs=u;
const Tc=Rs.default,Ac=Os.default,Ic=s.exports,kc=I,Nc=c.exports,Cc=f.exports,Mc=a.exports,Rc=C,Fc=j.exports,
Gc=O.exports;bs.exports=(e,t,r)=>{function n(){c.stdout&&c.stdout.destroy(),c.stderr&&c.stderr.destroy()}const o=ju(e,t,
r),{encoding:i,buffer:a,maxBuffer:s}=o.opts,u=Au(e,t);let c;try{c=Ac.spawn(o.cmd,o.args,o.opts)}catch(e){
return Promise.reject(e)}let l,f=(o.opts.cleanup&&(l=Fc(()=>{c.kill()})),null),d=!1;const p=()=>{f&&(clearTimeout(f),
f=null),l&&l()},h=(0<o.opts.timeout&&(f=setTimeout(()=>{f=null,d=!0,c.kill(o.opts.killSignal)},o.opts.timeout)),
new Promise(r=>{c.on("exit",(e,t)=>{p(),r({code:e,signal:t})}),c.on("error",e=>{p(),r({error:e})}),c.stdin&&c.stdin.on(
"error",e=>{p(),r({error:e})})})),g=()=>Rc(Promise.all([h,Pu(c,"stdout",{encoding:i,buffer:a,maxBuffer:s}),Pu(c,"stderr"
,{encoding:i,buffer:a,maxBuffer:s})]).then(e=>{var t=e[0];if(t.stdout=e[1],t.stderr=e[2],
t.error||0!==t.code||null!==t.signal){if((e=Tu(t,{joinedCmd:u,parsed:o,timedOut:d})).killed=e.killed||c.killed,
o.opts.reject)throw e;return e}return{stdout:Ou(o.opts,t.stdout),stderr:Ou(o.opts,t.stderr),code:0,failed:!1,killed:!1,
signal:null,cmd:u,timedOut:!1}}),n);return Ic._enoent.hookChildProcess(c,o.parsed),r=c,null!=(e=o.opts.input)&&(Cc(e
)?e.pipe(r.stdin):r.stdin.end(e)),c.then=(e,t)=>g().then(e,t),c.catch=e=>g().catch(e),c},bs.exports.stdout=(...e
)=>bs.exports(...e).then(e=>e.stdout),bs.exports.stderr=(...e)=>bs.exports(...e).then(e=>e.stderr),bs.exports.shell=(e,t
)=>Su(bs.exports,e,t),bs.exports.sync=(e,t,r)=>{var n,r=ju(e,t,r),e=Au(e,t);if(Cc(r.opts.input))throw new TypeError(
"The `input` option cannot be a stream in sync mode");if((t=Ac.spawnSync(r.cmd,r.args,r.opts)).code=t.status,
t.error||0!==t.status||null!==t.signal){if(n=Tu(t,{joinedCmd:e,parsed:r}),r.opts.reject)throw n;return n}return{
stdout:Ou(r.opts,t.stdout),stderr:Ou(r.opts,t.stderr),code:0,failed:!1,signal:null,cmd:e,timedOut:!1}},
bs.exports.shellSync=(e,t)=>Su(bs.exports.sync,e,t)}w={},Object.defineProperty(w,"__esModule",{value:!0}),
w.ValidPackageFlags=new Set(["dev","exact","noSave","bundle","verbose"]),w.ValidProjectInstallFlags=new Set(["dryRun",
"verbose"]),w.defaultInstallConfig={dev:!1,prefer:null,exact:!1,noSave:!1,bundle:!1,verbose:!1,global:!1,stdio:"pipe",
cwd:process.cwd()},E={},Ps=N&&N.__extends||(gs=function(e,t){return(gs=Object.setPrototypeOf||({__proto__:[]
}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}))(e,t)},
function(e,t){function r(){this.constructor=e}gs(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,
new r)}),Object.defineProperty(E,"__esModule",{value:!0}),E.getPackageList=function(e){return Array.isArray(e)?e.filter(
function(e){return"string"==typeof e}):Object.entries(e).filter(function(e){var t=e[0],e=e[1];
return"string"==typeof t&&"string"==typeof e||void 0===e}).map(function(e){var t=e[0],e=e[1];return e?t+"@"+e:t})},
E.getExecaConfig=function(e){return{stdio:e.stdio,cwd:e.cwd}},Ps(Be,ms=Error),E.UnreachableCaseError=Be,x={},Ts={},
Object.defineProperty(Ts,"__esModule",{value:!0}),Zi=w,Ts.getFlagsToSet=function(e){return Object.entries(e).filter(
function(e){var t=e[0];return!!e[1]&&Zi.ValidPackageFlags.has(t)}).map(function(e){return e[0]})},Object.defineProperty(
x,"__esModule",{value:!0}),Ji=Ts,Yi=E,x.constructNpmArguments=function(e,t){var r=Ji.getFlagsToSet(t),n=t.global?["-g"
]:[],o=["install"].concat(n,e),i=[];return r.forEach(function(e){switch(e){case"dev":t.global?i.push(e):o.push(
"--save-dev");break;case"exact":o.push("--save-exact");break;case"verbose":o.push("--verbose");break;case"bundle":
o.push("--save-bundle");break;case"noSave":o.push("--no-save");break;default:throw new Yi.UnreachableCaseError(e)}}),{
args:o,ignoredFlags:i}},x.npmProjectInstallArgs=["install"],l={},S={},Xi=N&&N.__awaiter||function(i,a,s,u){return new(
s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}
}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
Ki=N&&N.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1
]<s[3]))u.label=t[1];else if(6===t[0]&&u.label<s[1])u.label=s[1],s=t;else{if(!(s&&u.label<s[2])){s[2]&&u.ops.pop(),
u.trys.pop();continue}u.label=s[2],u.ops.push(t)}}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{i=s=0}if(5&t[0])throw t[1];
return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],
ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this
}),t},s=N&&N.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Object.defineProperty(S,"__esModule",{
value:!0}),Qi=s(u.exports),ea=Fs.default,ta=s(Rs.default),I=As.default,ra=I.promisify(ea.access),
S.isManagerInstalled=function(t){return Xi(this,void 0,void 0,function(){return Ki(this,function(e){switch(e.label){
case 0:return[4,Qi.default(t,["--version"])];case 1:return[2,!e.sent().failed]}})})},S.isManagerInstalledSync=function(e
){return!Qi.default.sync(e,["--version"]).failed},S.getCurrentPackageManager=function(){
var e=process.env.npm_config_user_agent;return e?e.startsWith("npm")?"npm":e.startsWith("yarn")?"yarn":null:null},
S.getPackageManagerFromLockfile=function(n){return Xi(this,void 0,void 0,function(){var t,r;return Ki(this,function(e){
switch(e.label){case 0:t=ta.default.join(n.cwd,"package-lock.json"),r=ta.default.join(n.cwd,"yarn.lock"),e.label=1;
case 1:return e.trys.push([1,3,,8]),[4,ra(t)];case 2:return e.sent(),[2,"npm"];case 3:e.sent(),e.label=4;case 4:
return e.trys.push([4,6,,7]),[4,ra(r)];case 5:return e.sent(),[2,"yarn"];case 6:return e.sent(),[2,null];case 7:return[3
,8];case 8:return[2]}})})},S.getPackageManagerFromLockfileSync=function(t){var e=ta.default.join(t.cwd,
"package-lock.json"),t=ta.default.join(t.cwd,"yarn.lock");try{return ea.accessSync(e),"npm"}catch(e){try{
return ea.accessSync(t),"yarn"}catch(e){return null}}},na=N&&N.__awaiter||function(i,a,s,u){return new(s=s||Promise)(
function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t
){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
oa=N&&N.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!s||t[1]>s[0]&&t[1
]<s[3]))u.label=t[1];else if(6===t[0]&&u.label<s[1])u.label=s[1],s=t;else{if(!(s&&u.label<s[2])){s[2]&&u.ops.pop(),
u.trys.pop();continue}u.label=s[2],u.ops.push(t)}}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{i=s=0}if(5&t[0])throw t[1];
return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],
ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this
}),t},Object.defineProperty(l,"__esModule",{value:!0}),ia=S,l.getPackageManager=function(r){return na(this,void 0,void 0
,function(){var t;return oa(this,function(e){switch(e.label){case 0:return(t=r.prefer||ia.getCurrentPackageManager())?[3
,2]:[4,ia.getPackageManagerFromLockfile(r)];case 1:t=e.sent(),e.label=2;case 2:return t=t||"npm",[4,
ia.isManagerInstalled(t)];case 3:return e.sent()?[3,5]:(t="npm"===t?"yarn":"npm",[4,ia.isManagerInstalled(t)]);case 4:
if(!e.sent())throw new Error("No supported package manager found");e.label=5;case 5:return[2,t]}})})},
l.getPackageManagerSync=function(e){var t=(t=e.prefer||ia.getCurrentPackageManager()
)||ia.getPackageManagerFromLockfileSync(e);if(ia.isManagerInstalledSync(t=t||"npm")||ia.isManagerInstalledSync(
t="npm"===t?"yarn":"npm"))return t;throw new Error("No supported package manager found")},c={},Object.defineProperty(c,
"__esModule",{value:!0}),aa=Ts,sa=E,c.constructYarnArguments=function(e,t){var r=aa.getFlagsToSet(t),n=(t.global?[
"global"]:[]).concat(["add"],e),o=[];return r.forEach(function(e){switch(e){case"dev":t.global?o.push(e):n.push("--dev")
break;case"exact":n.push("--exact");break;case"verbose":n.push("--verbose");break;case"bundle":case"noSave":o.push(e);
break;default:throw new sa.UnreachableCaseError(e)}}),{args:n,ignoredFlags:o}},c.yarnProjectInstallArgs=["install"],
ua=N&&N.__assign||function(){return(ua=Object.assign||function(e){for(var t,r,n=1,o=arguments.length;n<o;n++)for(
r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},
ca=N&&N.__awaiter||function(i,a,s,u){return new(s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)
}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n
)}o((u=u.apply(i,a||[])).next())})},la=N&&N.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i
)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((
s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:
case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(
),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[
0]&&(!s||t[1]>s[0]&&t[1]<s[3]))u.label=t[1];else if(6===t[0]&&u.label<s[1])u.label=s[1],s=t;else{if(!(s&&u.label<s[2])){
s[2]&&u.ops.pop(),u.trys.pop();continue}u.label=s[2],u.ops.push(t)}}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{i=s=0}if(
5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0])throw s[1];
return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(t[Symbol.iterator
]=function(){return this}),t},f=N&&N.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},
Object.defineProperty(k,"__esModule",{value:!0}),fa=f(u.exports),da=w,pa=E,ha=x,ga=l,ma=c,k.install=function(i,a){
return void 0===a&&(a=da.defaultInstallConfig),ca(this,void 0,void 0,function(){var t,r,n,o;return la(this,function(e){
switch(e.label){case 0:return t=ua({},da.defaultInstallConfig,a),[4,ga.getPackageManager(t)];case 1:return o=e.sent(),
r=pa.getPackageList(i),n="npm"===o?ha.constructNpmArguments:ma.constructYarnArguments,n=n(r,t),r=n.args,n=n.ignoredFlags
,[4,fa.default(o,r,pa.getExecaConfig(t))];case 2:return o=e.sent(),[2,ua({},o,{ignoredFlags:n})]}})})},
k.installSync=function(e,t){var r,n;return void 0===t&&(t=da.defaultInstallConfig),t=ua({},da.defaultInstallConfig,t),
n=ga.getPackageManagerSync(t),e=pa.getPackageList(e),r=(e=("npm"===n?ha.constructNpmArguments:ma.constructYarnArguments
)(e,t)).args,e=e.ignoredFlags,n=fa.default.sync(n,r,pa.getExecaConfig(t)),ua({},n,{ignoredFlags:e})},
k.projectInstall=function(o){return void 0===o&&(o=da.defaultInstallConfig),ca(this,void 0,void 0,function(){var t,r,n;
return la(this,function(e){switch(e.label){case 0:return t=ua({},da.defaultInstallConfig,o),[4,ga.getPackageManager(t)];
case 1:return r=e.sent(),n="npm"===r?ha.npmProjectInstallArgs:ma.yarnProjectInstallArgs,[2,fa.default(r,n,
pa.getExecaConfig(t))]}})})},k.projectInstallSync=function(e){var t,r;return void 0===e&&(e=da.defaultInstallConfig),
e=ua({},da.defaultInstallConfig,e),r="npm"===(t=ga.getPackageManagerSync(e)
)?ha.npmProjectInstallArgs:ma.yarnProjectInstallArgs,fa.default.sync(t,r,pa.getExecaConfig(e))},vs=li,
Object.defineProperty(vs,"__esModule",{value:!0}),$e(k),$e(l),a={exports:{}};
const Iu="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,ku=Rs.default,
Nu=Iu?";":":",Cu=T,Mu=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),Ru=(e,t)=>{var r=t.colon||Nu,
n=e.match(/\//)||Iu&&e.match(/\\/)?[""]:[...Iu?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)],
t=Iu?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",r=Iu?t.split(r):[""];return Iu&&-1!==e.indexOf("."
)&&""!==r[0]&&r.unshift(""),{pathEnv:n,pathExt:r,pathExtExe:t}},Fu=((C=(o,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:i,pathExt:u,pathExtExe:c}=Ru(o,s),l=[],f=n=>new Promise((e,t)=>{if(n===i.length
)return s.all&&l.length?e(l):t(Mu(o));var t=i[n],t=/^".*"$/.test(t)?t.slice(1,-1):t,r=ku.join(t,o),
t=!t&&/^\.[\\\/]/.test(o)?o.slice(0,2)+r:r;e(d(t,n,0))}),d=(o,i,a)=>new Promise((r,e)=>{if(a===u.length)return r(f(i+1))
const n=u[a];Cu(o+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(o+n);l.push(o+n)}return r(d(o,i,a+1))})});
return t?f(0).then(e=>t(null,e),t):f(0)}).sync=(t,r)=>{r=r||{};var n,o,i,a,{pathEnv:s,pathExt:u,pathExtExe:c}=Ru(t,r),
l=[];for(let e=0;e<s.length;e++){n=s[e],n=/^".*"$/.test(n)?n.slice(1,-1):n,o=ku.join(n,t),i=!n&&/^\.[\\\/]/.test(t
)?t.slice(0,2)+o:o;for(let e=0;e<u.length;e++){a=i+u[e];try{if(Cu.sync(a,{pathExt:c})){if(!r.all)return a;l.push(a)}
}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw Mu(t)},(j={exports:{}}).exports=O=(e={})=>{
var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t).reverse().find(
e=>"PATH"===e.toUpperCase())||"Path"},j.exports.default=O,Rs.default),Gu=C,Du=j.exports,Lu=(Ps=function(e){return ye(e
)||ye(e,!0)},/([()\][%!^"`<>&|;, *?])/g),Bu=((s={}).command=function(e){return e.replace(Lu,"^$1")},s.argument=function(
e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`).replace(Lu,"^$1"),
t?e.replace(Lu,"^$1"):e},/^#!(.*)/),$u=Fs.default,zu=(e="")=>{var t,e=e.match(Bu);return e?([e,t]=e[0].replace(/#! ?/,""
).split(" "),"env"===(e=e.split("/").pop())?t:t?e+" "+t:e):null},Uu=Rs.default,Wu=Ps,qu=s,Vu="win32"===process.platform,
Hu=/\.(?:com|exe)$/i,Zu=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,Ju="win32"===process.platform,Yu=Os.default,Xu={
hookChildProcess:function(r,n){if(Ju){const o=r.emit;r.emit=function(e,t){if("exit"===e){e=we(t,n);if(e)return o.call(r,
"error",e)}return o.apply(r,arguments)}}},verifyENOENT:we,verifyENOENTSync:function(e,t){return Ju&&1===e&&!t.file?be(
t.original,"spawnSync"):null},notFoundError:be},Ku=(a.exports=xe,a.exports.spawn=xe,a.exports.sync=function(e,t,r){e=qe(
e,t,r),t=Yu.spawnSync(e.command,e.args,e.options);return t.error=t.error||Xu.verifyENOENTSync(t.status,e),t},
a.exports._parse=qe,a.exports._enoent=Xu,va=a.exports,["env"]),Qu=Object.getOwnPropertyDescriptor(Function.prototype,
"toString"),ec=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),tc=new WeakMap,rc=(t,r={})=>{
function n(...e){if(tc.set(n,++i),1===i)o=t.apply(this,e),t=null;else if(!0===r.throw)throw new Error(
`Function \`${a}\` can only be called once`);return o}if("function"!=typeof t)throw new TypeError("Expected a function")
let o,i=0;const a=t.displayName||t.name||"<anonymous>";var e,s,u,c,l,f,d,p,[h,g,{ignoreNonConfigurable:m=!1}={}]=[n,t],
v=h.name;for(const y of Reflect.ownKeys(g))e=h,f=g,s=y,u=m,l=void 0,
"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
f=l=Object.getOwnPropertyDescriptor(f,s),
void 0===c||c.configurable||c.writable===f.writable&&c.enumerable===f.enumerable&&c.configurable===f.configurable&&(
c.writable||c.value===f.value)||!u)&&Object.defineProperty(e,s,l);return d=h,(p=Object.getPrototypeOf(g)
)!==Object.getPrototypeOf(d)&&Object.setPrototypeOf(d,p),d=h,p=g,v=""===v?"":`with ${v.trim()}() `,v=((e,t
)=>`/* Wrapped ${e}*/
`+t).bind(null,v,p.toString()),Object.defineProperty(v,"name",ec),Object.defineProperty(d,"toString",b(b({},Qu),{},{
value:v})),tc.set(n,i),n},nc=(rc.callCount=e=>{if(tc.has(e))return tc.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),oc=[{name:"SIGHUP",number:1,
action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",
description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",
description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",
description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",
description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",
standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,
action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{
name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",
standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{
name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",
number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,
action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",
description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",
description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",
description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",
standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",
standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",
standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",
standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{
name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,
action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,
action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,
action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,
action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",
number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,
action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",
description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",
description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",
description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",
description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",
description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",
description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",
description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",
description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",
description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",
description:"Invalid system call",standard:"other"}],ic=Ue().reduce(function(e,{name:t,number:r,description:n,
supported:o,action:i,forced:a,standard:s}){return b(b({},e),{},{[t]:{name:t,number:r,description:n,supported:o,action:i,
forced:a,standard:s}})},{});{const Dc=Ue();I=Array.from({length:65},(e,t)=>{var r,n,o,i,a,s=Dc,u=(a=t,void 0!==(u=(s=s
).find(({name:e})=>Cs.constants.signals[e]===a))?u:s.find(e=>e.number===a));return void 0===u?{}:({name:s,description:u,
supported:r,action:n,forced:o,standard:i}=u,{[t]:{name:s,number:t,description:u,supported:r,action:n,forced:o,standard:i
}})}),Object.assign({},...I)}const ac=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:i,
isCanceled:a}
)=>e?`timed out after ${t} milliseconds`:a?"was canceled":void 0!==r?"failed with "+r:void 0!==n?`was killed with ${n} (${o})`:void 0!==i?"failed with exit code "+i:"failed"
,sc=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:i,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:f}}})=>{i=null===i?void 0:i;var d=void 0===(o=null===o?void 0:o)?void 0:ic[o].description,
p=n&&n.code,f=`Command ${ac({timedOut:u,timeout:f,errorCode:p,signal:o,signalDescription:d,exitCode:i,isCanceled:c}
)}: `+a,p="[object Error]"===Object.prototype.toString.call(n),f=p?f+`
`+n.message:f,h=[f,t,e].filter(Boolean).join("\n");return p?(n.originalMessage=n.message,n.message=h):n=new Error(h),
n.shortMessage=f,n.command=a,n.escapedCommand=s,n.exitCode=i,n.signal=o,n.signalDescription=d,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},uc=["stdin","stdout","stderr"],cc=(S={exports:{}},Ss.default.PassThrough),lc=Is.default.constants,fc=(
Ts=Ss.default,(0,As.default.promisify)(Ts.pipeline));class dc extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}S.exports=Ee,S.exports.buffer=(e,t)=>Ee(e,b(b({},t),{},{encoding:"buffer"})),
S.exports.array=(e,t)=>Ee(e,b(b({},t),{},{array:!0})),S.exports.MaxBufferError=dc,ya=S.exports;
const pc=Ss.default.PassThrough,hc=(ba=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",o.emit.bind(o,"error")),e.pipe(o,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&o.readable&&o.end()}var n=[],o=new pc({objectMode:!0});return o.setMaxListeners(0),
o.add=t,o.isEmpty=function(){return 0==n.length},o.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),o},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),gc=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?ya(e,{encoding:t,maxBuffer:n}):ya.buffer(e,{maxBuffer:n})},mc=(async()=>{})(
).constructor.prototype,vc=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(mc,e)]),yc=(e,t)=>{for(
const[n,o]of vc){var r="function"==typeof t?(...e)=>Reflect.apply(o.value,t(),e):o.value.bind(t);Reflect.defineProperty(
e,n,b(b({},o),{},{value:r}))}return e},bc=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],wc=/^[\w.-]+$/,xc=/"/g,_c=(e,t,r)=>{
var n,o;return"string"==typeof t||ks.Buffer.isBuffer(t)?e.stripFinalNewline?(n="string"==typeof(e=t
)?"\n":"\n".charCodeAt(),o="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(0,-1):e)[e.length-1
]===o?e.slice(0,-1):e):t:void 0===r?void 0:""},Ec=eu.createLogger("initPackage"),jc=(wa=Vo,xa=d,_a=Ns,Oa=function(e){
var t,r;return e=Ea(e),t=(r=xa(e)?_a(e):void 0)?r[0]:e.charAt(0),r=r?wa(r,1).join(""):e.slice(1),t.toUpperCase()+r},
f=function(e){return Oa(ja(e).toLowerCase())},js={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a",
"â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e",
"ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O",
"Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u",
"ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a",
"ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E",
"Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g",
"ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i",
"Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l",
"Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R",
"Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T",
"Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u",
"ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij",
"Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Sa=function(e){return null==js?void 0:js[e]},Pa=ja=Ea=Ms,
Ta=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Aa=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),
u=function(e){return(e=Pa(e))&&e.replace(Ta,Sa).replace(Aa,"")},Ia=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
w=function(e){return e.match(Ia)||[]},ka=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
E=function(e){return ka.test(e)},
x="[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]"
,c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",
k="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",l="(?:"+[
"[\\u2700-\\u27bf]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+k,Na=RegExp([
c+"?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[x,c,"$"].join("|")+")",
"(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[
x,
c+"(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])"
,"$"].join("|")+")",
c+"?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?"
,c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
"\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",l].join("|"),"g"),Ca=w,Ma=E,Ra=Ms,Fa=function(e){
return e.match(Na)||[]},Ga=ko,Da=u,La=function(e,t,r){return e=Ra(e),void 0===(t=r?void 0:t)?(Ma(e)?Fa:Ca)(e):e.match(t
)||[]},Ba=RegExp("['’]","g"),$a=f,Es=function(e,t,r){return t=t.toLowerCase(),e+(r?$a(t):t)},za=function(e){return Ga(
La(Da(e).replace(Ba,"")),Es,"")},T=Object.prototype,Ua=T.hasOwnProperty,Wa=function(e,t){return null!=e&&Ua.call(e,t)},
qa=Cn,Va=function(e,t){return null!=e&&qa(e,t,Wa)},Ha=A,Za=function(e,t){return Ha(e,t)},Ja=Yo,O=function(e,t){return!(
null==e||!e.length)&&-1<Ja(e,t,0)},C=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;
return!1},j=function(){},Ps=(Ya=Tr)&&1/fr(new Ya([,-0]))[1]==1/0?function(e){return new Ya(e)}:j,Xa=sr,Ka=O,Qa=C,es=e,
ts=Ps,rs=fr,ns=function(e,t,r){var n,o,i,a,s=-1,u=Ka,c=e.length,l=!0,f=[],d=f;if(r)l=!1,u=Qa;else if(200<=c){if(
n=t?null:ts(e))return rs(n);l=!1,u=es,d=new Xa}else d=t?[]:f;e:for(;++s<c;)if(o=e[s],i=t?t(o):o,o=r||0!==o?o:0,l&&i==i){
for(a=d.length;a--;)if(d[a]===i)continue e;t&&d.push(i),f.push(o)}else u(d,i,r)||(d!==f&&d.push(i),f.push(o));return f},
os=function(e){return e&&e.length?ns(e):[]},eu.createLogger("GitUtils"));class R{static getGitDir(e){let t=e,r=t;do{if(
jc.debug("getGitDir: Searching git directory from ",t),t=r,M.fileExists(P.resolve(t,".git")))return t}while((
r=P.dirname(t))!==t)}static async initGit(){var e=R.getGitDir(process.cwd());e?jc.warn(
"Warning! Git directory already exists: ",e):(jc.debug("Creating git directory"),await R._git(["init"]))}
static async addFiles(e){var t=q(e)?[e]:e;jc.debug("addFiles: Adding files: ",e),await R._git(["add",...t])}
static async commit(e){jc.debug("commit with: ",e),await R._git(["commit","-m",e])}static async renameMainBranch(e){
jc.debug("rename branch: ",e),await R._git(["branch","-M",e])}static async addSubModule(e,t){M.fileExists(t)?jc.warn(
"Warning! Git sub module directory already exists: ",t):await R._git(["submodule","add",e,t])}
static async setSubModuleBranch(e,t){await R._git(["config","-f",".gitmodules",`submodule.${e}.branch`,t])}
static async initSubModule(e,t,r){var n=P.dirname(t);jc.debug("initSubModule: Creating: ",n),M.mkdirp(n),jc.debug(
"initSubModule: Adding submodule: ",e,t),await R.addSubModule(e,t),jc.debug("initSubModule: Configuring branch for ",e,t
,": ",r),await R.setSubModuleBranch(t,r)}static async _git(e){await je("git",e,{stdio:"inherit"})}}
const Oc=eu.createLogger("createPackage");I=null!=(a=null==(s=process)||null==(Os=s.env)?void 0:Os.LOG_LEVEL)?a:"INFO",
Is=eu.createLogger("main"),(As=function(e){if(e){if(function(){switch(e){case r.DEBUG:case r.INFO:case r.WARN:
case r.ERROR:case r.NONE:return 1;default:return}}())return e;switch((""+e).toUpperCase()){case"ALL":case"DEBUG":
return r.DEBUG;case"INFO":return r.INFO;case"WARN":case"WARNING":return r.WARN;case"ERR":case"ERROR":return r.ERROR;
case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return r.NONE;default:return}}}(I))&&(Is.debug(
"Setting log level as ",As),eu.setLogLevel(As)),async function(t){var r,n,o,i,t=tu.createFromTemplateFile(t);
t.setPackageJsonModifier(function(e,t){var r=null!=(r=te(null==e?void 0:e.scripts))?r:{},n=null!=(n=te(
null==e?void 0:e.bin))?n:{},o=null!=(o=te(null==e?void 0:e.dependencies))?o:{},i=t.getDistFile(),a=t.getMainName(),
t=t.getMainSourceFileName(),s=Y(null==e?void 0:e.keywords,q)?null==e?void 0:e.keywords:[];return G(G({},e),{},{
private:!0,main:i,bin:G(G({},n),{},{[a]:i}),keywords:[...s,"typescript","backend","rest","nodejs","spring","spring-boot"
],scripts:G(G({},r),{},{"start-prod":"node "+i,start:"ts-node "+t,build:"rollup -c"}),dependencies:{},devDependencies:o}
)});{t=t;let e=process.cwd();if((r=process.argv.slice(2).filter(e=>!e.startsWith("-")).shift())&&(r=P.resolve(e,r),
Oc.debug("Creating project directory: ",r),M.mkdirp(r),process.chdir(r),e=r),r={dev:!1,exact:!1,noSave:!1,bundle:!1,
verbose:!1,global:!1,prefer:t.getPreferredPackageSystem()===ci.YARN?"yarn":"npm",stdio:"inherit",cwd:e},Oc.debug(
"Initial install config: ",r),n=re(await li.getPackageManager(r)),Oc.debug("Initializing package.json using ",n),n=n,
o=process.argv.slice(2).filter(e=>e.startsWith("-")),Ec.debug("Executing: ",n,"init",...o),await je(n,["init",...o],{
stdio:"inherit"}),n=P.resolve("package.json"),M.fileExists(n)){t.setPackageDirectory(P.dirname(n));
const a=t.getPackageDirectory(),s=(o=t.getMainName(),i=(new Date).getFullYear(),{
"GIT-ORGANISATION":t.getGitOrganization(),"ORGANISATION-NAME":t.getOrganizationName(),
"ORGANISATION-EMAIL":t.getOrganizationEmail(),"CURRENT-YEAR":""+i,"PROJECT-NAME":o,projectName:za(o)}),u=(i=t.getFiles()
,t.getRenameFiles()),c=(o=os(Io(i,e=>{let t=e;return Va(u,e)&&(t=u[e]),P.dirname(t)})),t.getTemplatesDirectory());if(
o.forEach(e=>{e=P.resolve(a,e);Oc.debug("Creating directory: ",e),M.mkdirp(e)}),Oc.debug("Initializing git if necessary"
),await R.initGit(),i.forEach(e=>{let t=e;Va(u,e)&&(t=u[e]),M.copyTextFileWithReplacementsIfMissing(P.resolve(c,e),
P.resolve(a,t),s)}),M.copyTextFileWithReplacementsIfMissing(P.resolve(c,t.getMainSourceFileTemplate()),P.resolve(a,
t.getMainSourceFileName()),s),!ee(o=M.readJsonFile(n)))throw new TypeError("package.json was invalid");
i=t.getPackageJsonModifier()(o,t),Za(i,o)?Oc.warn("Warning! No changes to package.json detected"):M.writeJsonFile(n,i),
await Go(t.getGitSubmodules(),async(e,t)=>{await e;var{url:e,path:t,branch:r}=t;Oc.debug(
`Initializing core git submodule from ${e} and branch ${r} to `+t),await R.initSubModule(e,P.resolve(".",t),
null!=r?r:"main")},Promise.resolve()),o=t.getPackages(),Oc.debug("Installing packages: ",o),await li.install(Io(o,e=>e),
r),Oc.debug("Adding files to git"),await R.addFiles(["."]),Oc.debug("Initial git commit"),await R.commit(
t.getGitCommitMessage()),i=t.getGitBranch(),Oc.debug(`Renaming main git branch to '${i}'`),await R.renameMainBranch(i)
}else Oc.warn("Warning! package.json did not exist: ",n)}}(P.resolve(__dirname,"../create.config.json")).catch(e=>{
console.error(e)});
