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
n=null==e?0:e.length;for(this.clear();++r<n;)t=e[r],this.set(t[0],t[1])}function z(e){e=this.__data__=new Rt(e);
this.size=e.size}function U(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ft;++t<r;)this.add(e[t])}function W(n
,o){function i(){var e=arguments,t=o?o.apply(this,e):e[0],r=i.cache;return r.has(t)?r.get(t):(e=n.apply(this,e),
i.cache=r.set(t,e)||r,e)}if("function"!=typeof n||null!=o&&"function"!=typeof o)throw new TypeError(
"Expected a function");return i.cache=new(W.Cache||ln),i}function V(e){return void 0===e}function q(e){return qt(e)}
function H(e,t=void 0,r=void 0,n=void 0){var o;return!!qt(e)&&(o=null!=(o=null==e?void 0:e.length)?o:0,!(void 0!==r&&o<r
)&&!(void 0!==n&&n<o)&&(void 0===t||J(e,t)))}function Z(e){return Li(e)}function J(e,t){return Oo(e,t)}function Y(e,t=Z,
r=void 0){return!(void 0!==r&&(r=r,!ot(n=e)||!J(qi(n),r)))&&(n=void 0!==t?t:Z,ot(r=e)&&J(K(r),n));var n}function X(...e
){return t=>yo(e,e=>e(t))}function K(e,t=Z){var r;return q(e)?(r=ao(e,(e,t)=>t),xi(r,e=>t(e))):ot(e)?(r=Reflect.ownKeys(
e),xi(r,e=>t(e))):[]}function Q(e){return Z(t=e)||zi(t)||Mi(t)||Ri(t)||H(e,X(Q,V))||ee(e);var t}function ee(e){
return!!ot(t=e)&&!(t instanceof Date)&&!st(t)&&!q(t)&&Y(t,Z,void 0)&&Y(e,Z,X(Q,V));var t}function te(e){return ee(e
)?e:void 0}function re(e){switch((""+e).toLowerCase()){case"npm":return ya.NPM;case"yarn":return ya.YARN;case"hgm":
return ya.HGM;default:return}}function ne(e,t,r){if(e.isSymbolicLink()||e.isFile()){var n,o,i=t,
a=void 0!==r.pathExt?r.pathExt:process.env.PATHEXT;if(!a)return!0;if(-1!==(a=a.split(";")).indexOf(""))return!0;for(
n=0;n<a.length;n++)if((o=a[n].toLowerCase())&&i.substr(-o.length).toLowerCase()===o)return!0;return!1}return!1}
function oe(e,t){return e.isFile()&&(r=e.mode,n=e.uid,e=e.gid,o=void 0!==(t=t).uid?t.uid:process.getuid&&process.getuid(
),t=void 0!==t.gid?t.gid:process.getgid&&process.getgid(),i=parseInt("100",8),a=parseInt("010",8),r&parseInt("001",8
)||r&a&&e===t||r&i&&n===o||r&(i|a)&&0===o);var r,n,o,i,a}function ie(e){e=new Error("not found: "+e);
return e.code="ENOENT",e}function ae(e,t){var r=t.colon||Sa,n=[""],o=(o=t.path||process.env.PATH||"").split(r),i="";
return ja&&(o.unshift(process.cwd()),n=(i=t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM").split(r),
-1!==e.indexOf(".")&&""!==n[0]&&n.unshift("")),{env:o=e.match(/\//)||ja&&e.match(/\\/)?[""]:o,ext:n,extExe:i}}
function se(e,t){var r=process.cwd(),n=null!=e.options.cwd;if(n)try{process.chdir(e.options.cwd)}catch(e){}let o;try{
o=Gu.sync(e.command,{path:(e.options.env||process.env)[Du],pathExt:t?Fu.delimiter:void 0})}catch(e){}finally{
process.chdir(r)}return o=o&&Fu.resolve(n?e.options.cwd:"",o)}function ue(e,t){return Object.assign(new Error(
`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}
function ce(e,t){return Xu&&1===e&&!t.file?ue(t.original,"spawn"):null}function le(e,t,r){e=We(e,t,r),t=Ku.spawn(
e.command,e.args,e.options);return Qu.hookChildProcess(t,e),t}function fe(e){function t(){return t.called?t.value:(
t.called=!0,t.value=e.apply(this,arguments))}return t.called=!1,t}function de(e){function t(){if(t.called
)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)}
var r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}
function pe(e,o){if(!e)return Promise.reject(new Error("Expected a stream"));const i=(o=Object.assign({maxBuffer:1/0},o)
).maxBuffer;let a;return new Promise((t,r)=>{const n=e=>{e&&(e.bufferedData=a.getBufferedValue()),r(e)};(a=function(){
var n,o,i=Array.prototype.slice.call(arguments),a=Ba(i[i.length-1]||Da)&&i.pop()||Da;if((i=Array.isArray(i[0])?i[0]:i
).length<2)throw new Error("pump requires two streams per minimum");return o=i.map(function(e,t){var r=t<i.length-1;
return Ua(e,r,0<t,function(e){n=n||e,e&&o.forEach(Wa),r||(o.forEach(Wa),a(n))})}),i.reduce(Va)}(e,(e=>{const t=(
e=Object.assign({},e)).array;let r=e.encoding;const n="buffer"===r;let o=!1,i=(t?o=!(r||n):r=r||"utf8",n&&(r=null),0);
const a=[],s=new ec({objectMode:o});return r&&s.setEncoding(r),s.on("data",e=>{a.push(e),o?i=a.length:i+=e.length}),
s.getBufferedValue=()=>t?a:n?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s})(o),e=>{e?n(e):t()})).on("data",
()=>{a.getBufferedLength()>i&&n(new tc)})}).then(()=>a.getBufferedValue())}function he(e,t){if(e)return e.errname(t);if(
t<0)return"Unknown system error "+t;throw new Error("err >= 0")}function ge(t,e){var r,n=Object.keys(t);
return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function y(n){for(var o,
e=1;e<arguments.length;e++)o=null!=arguments[e]?arguments[e]:{},e%2?ge(Object(o),!0).forEach(function(e){var t=n,
r=o[e=e];e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}
):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):ge(Object(o)).forEach(
function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))});return n}function me(e,t){
var r=e.options.env||process.env,n=process.cwd(),o=null!=e.options.cwd,
i=o&&void 0!==process.chdir&&!process.chdir.disabled;if(i)try{process.chdir(e.options.cwd)}catch(e){}let a;try{
a=vc.sync(e.command,{path:r[yc({env:r})],pathExt:t?mc.delimiter:void 0})}catch(e){}finally{i&&process.chdir(n)}
return a=a&&mc.resolve(o?e.options.cwd:"",a)}function ve(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`)
,{code:"ENOENT",errno:"ENOENT",syscall:t+" "+e.command,path:e.command,spawnargs:e.args})}function ye(e,t){
return kc&&1===e&&!t.file?ve(t.original,"spawn"):null}function be(e,t,r){e=Ve(e,t,r),t=Ac.spawn(e.command,e.args,
e.options);return Ic.hookChildProcess(t,e),t}function we(e={}){var{env:e=process.env,platform:t=process.platform}=e;
return"win32"!==t?"PATH":Object.keys(e).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"}async function xe(n,u){if(!n
)throw new Error("Expected a stream");const o=(u=y({maxBuffer:1/0},u)).maxBuffer,i=(e=>{const t=(e=y({},u)).array;
let r=e.encoding;const n="buffer"===r;let o=!1;t?o=!(r||n):r=r||"utf8",n&&(r=null);const i=new Uc({objectMode:o});
r&&i.setEncoding(r);let a=0;const s=[];return i.on("data",e=>{s.push(e),o?a=s.length:a+=e.length}),i.getBufferedValue=(
)=>t?s:n?Buffer.concat(s,a):s.join(""),i.getBufferedLength=()=>a,i})();return await new Promise((e,t)=>{const r=e=>{
e&&i.getBufferedLength()<=Wc.MAX_LENGTH&&(e.bufferedData=i.getBufferedValue()),t(e)};(async()=>{try{await qc(n,i),e()
}catch(e){r(e)}})(),i.on("data",()=>{i.getBufferedLength()>o&&r(new Hc)})}),i.getBufferedValue()}function _e(e,t,r){
var n,o,i,a,s,u,c,l,f;[r,o,i={}]=[e,t,r],r=(f=Ts._parse(r,o,i)).command,o=f.args,(i=y({maxBuffer:1e8,buffer:!0,
stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:(i=f.options).cwd||Eu.default.cwd(),
execPath:Eu.default.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},i)).env=({env:a,extendEnv:l,
preferLocal:s,localDir:u,execPath:c}=i,l=l?y(y({},Eu.default.env),a):a,s?function(e){let{env:t=Eu.default.env}=e,
r=function(e,t){var r,n,o,i;if(null==e)return{};if(r=function(e,t){var r,n,o,i;if(null==e)return{};for(r={},
n=Object.keys(e),i=0;i<n.length;i++)o=n[i],0<=t.indexOf(o)||(r[o]=e[o]);return r}(e,t),Object.getOwnPropertySymbols)for(
i=Object.getOwnPropertySymbols(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(
e,n)&&(r[n]=e[n]);return r}(e,Nc);e=we({env:t=y({},t)});return r.path=t[e],t[e]=function(e={}){const{
cwd:t=Eu.default.cwd(),path:r=Eu.default.env[we()],execPath:n=Eu.default.execPath}=e;let o;
e=t instanceof URL?ju.default.fileURLToPath(t):t;let i=xu.default.resolve(e);const a=[];for(;o!==i;)a.push(
xu.default.join(i,"node_modules/.bin")),o=i,i=xu.default.resolve(i,"..");return a.push(xu.default.resolve(e,n,"..")),[
...a,r].join(xu.default.delimiter)}(r),t}({env:l,cwd:u,execPath:c}):l),i.stdio=(t=>{var r,e;if(t){const n=t.stdio;if(
void 0===n)return zc.map(e=>t[e]);if(r=t,zc.some(e=>void 0!==r[e]))throw new Error(
"It's not possible to provide `stdio` in combination with one of "+zc.map(e=>`\`${e}\``).join(", "));if(
"string"==typeof n)return n;if(Array.isArray(n))return e=Math.max(n.length,zc.length),Array.from({length:e},(e,t)=>n[t])
throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``)}})(i),
"win32"===Eu.default.platform&&"cmd"===xu.default.basename(r,".exe")&&o.unshift("/q");const d={file:r,args:o,options:i,
parsed:f},p=(a=e,s=t,el(a,s).join(" ")),h=(u=e,c=t,el(u,c).map(e=>(e=>"string"!=typeof e||tl.test(e)?e:`"${e.replace(rl,
'\\"')}"`)(e)).join(" "));if(void 0!==(l=d.options.timeout)&&(!Number.isFinite(l)||l<0))throw new TypeError(
`Expected the \`timeout\` option to be a non-negative integer, got \`${l}\` (${typeof l})`);let g;try{
g=_u.default.spawn(d.file,d.args,d.options)}catch(e){return r=new _u.default.ChildProcess,o=Promise.reject($c({error:e,
stdout:"",stderr:"",all:"",command:p,escapedCommand:h,parsed:d,timedOut:!1,isCanceled:!1,killed:!1})),Qc(r,o)}n=g,
i=new Promise((r,t)=>{n.on("exit",(e,t)=>{r({exitCode:e,signal:t})}),n.on("error",e=>{t(e)}),n.stdin&&n.stdin.on("error"
,e=>{t(e)})}),f=((n,{timeout:t,killSignal:o="SIGTERM"},e)=>{if(0===t||void 0===t)return e;let i;var r=new Promise((e,r
)=>{i=setTimeout(()=>{var e=o,t=r;n.kill(e),t(Object.assign(new Error("Timed out"),{timedOut:!0,signal:e}))},t)}),
e=e.finally(()=>{clearTimeout(i)});return Promise.race([r,e])})(g,d.options,i);const m=(async(e,{cleanup:t,detached:r},n
)=>{if(!t||r)return n;const o=qs(()=>{e.kill()});return n.finally(()=>{o()})})(g,d.options,f),v={isCanceled:!1};
return g.kill=((e,t="SIGTERM",r={})=>{var n,o=e(t),i=e,e=r;if([r,t,n]=[t,e.forceKillAfterTimeout,o],(
r===Ou.default.constants.signals.SIGTERM||"string"==typeof r&&"SIGTERM"===r.toUpperCase())&&!1!==t&&n){r=(({
forceKillAfterTimeout:e=!0})=>{if(!0===e)return 5e3;if(!Number.isFinite(e)||e<0)throw new TypeError(
`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e})(e);
const a=setTimeout(()=>{i("SIGKILL")},r);a.unref&&a.unref()}return o}).bind(null,g.kill.bind(g)),g.cancel=((e,t)=>{
e.kill()&&(t.isCanceled=!0)}).bind(null,g,v),a=Fc(async()=>{var[{error:e,exitCode:t,signal:r,timedOut:n},o,i,a]=await(
async({stdout:t,stderr:r,all:n},{encoding:o,buffer:e,maxBuffer:i},a)=>{var s=Yc(t,{encoding:o,buffer:e,maxBuffer:i}),
u=Yc(r,{encoding:o,buffer:e,maxBuffer:i}),o=Yc(n,{encoding:o,buffer:e,maxBuffer:2*i});try{return await Promise.all([a,s,
u,o])}catch(e){return Promise.all([{error:e,signal:e.signal,timedOut:e.timedOut},Jc(t,s),Jc(r,u),Jc(n,o)])}})(g,
d.options,m),o=nl(d.options,o),i=nl(d.options,i),a=nl(d.options,a);if(e||0!==t||null!==r){if(e=$c({error:e,exitCode:t,
signal:r,stdout:o,stderr:i,all:a,command:p,escapedCommand:h,parsed:d,timedOut:n,
isCanceled:v.isCanceled||!!d.options.signal&&d.options.signal.aborted,killed:g.killed}),d.options.reject)throw e;
return e}return{command:p,escapedCommand:h,exitCode:0,stdout:o,stderr:i,all:a,failed:!1,timedOut:!1,isCanceled:!1,
killed:!1}}),s=g,void 0!==(e=d.options.input)&&void 0!==s.stdin&&(
null!==e&&"object"==typeof e&&"function"==typeof e.pipe?e.pipe(s.stdin):s.stdin.end(e)),g.all=((e,{all:t})=>{if(t&&(
e.stdout||e.stderr)){const r=As();return e.stdout&&r.add(e.stdout),e.stderr&&r.add(e.stderr),r}})(g,d.options),Qc(g,a)}
function Ee(e,t){if(e instanceof p)return e;if("string"!=typeof e)return null;if(e.length>Rs)return null;if(!((
t=t&&"object"==typeof t?t:{loose:!!t,includePrerelease:!1}).loose?b[Ds]:b[Gs]).test(e))return null;try{return new p(e,t)
}catch(e){return null}}function p(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof p){
if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(
e.length>Rs)throw new TypeError("version is longer than "+Rs+" characters");if(!(this instanceof p))return new p(e,t);v(
"SemVer",e,t),this.options=t,this.loose=!!t.loose;t=e.trim().match(t.loose?b[Ds]:b[Gs]);if(!t)throw new TypeError(
"Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>Fs||this.major<0
)throw new TypeError("Invalid major version");if(this.minor>Fs||this.minor<0)throw new TypeError("Invalid minor version"
);if(this.patch>Fs||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(
function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(0<=t&&t<Fs)return t}return e}):this.prerelease=[],
this.build=t[5]?t[5].split("."):[],this.format()}function je(e,t){var r=Bs.test(e),n=Bs.test(t);return r&&n&&(e=+e,t=+t)
,e===t?0:r&&!n||(!n||r)&&e<t?-1:1}function Oe(e,t,r){return new p(e,r).compare(new p(t,r))}function Se(e,t,r){
return 0<Oe(e,t,r)}function Pe(e,t,r){return Oe(e,t,r)<0}function Te(e,t,r){return 0===Oe(e,t,r)}function ke(e,t,r){
return 0!==Oe(e,t,r)}function Ae(e,t,r){return 0<=Oe(e,t,r)}function Ie(e,t,r){return Oe(e,t,r)<=0}function Ne(e,t,r,n){
switch(t){case"===":return(e="object"==typeof e?e.version:e)===("object"==typeof r?r.version:r);case"!==":return(
e="object"==typeof e?e.version:e)!==("object"==typeof r?r.version:r);case"":case"=":case"==":return Te(e,r,n);case"!=":
return ke(e,r,n);case">":return Se(e,r,n);case">=":return Ae(e,r,n);case"<":return Pe(e,r,n);case"<=":return Ie(e,r,n);
default:throw new TypeError("Invalid operator: "+t)}}function Ce(e,t){if(t&&"object"==typeof t||(t={loose:!!t,
includePrerelease:!1}),e instanceof Ce){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof Ce)
)return new Ce(e,t);v("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),
this.semver===$s?this.value="":this.value=this.operator+this.semver.version,v("comp",this)}function h(e,t){if(
t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof h
)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new h(e.raw,t);if(e instanceof Ce
)return new h(e.value,t);if(!(this instanceof h))return new h(e,t);if(this.options=t,this.loose=!!t.loose,
this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){
return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError(
"Invalid SemVer Range: "+e);this.format()}function Me(e){return!e||"x"===e.toLowerCase()||"*"===e}function Re(e,t,r,n,o,
i,a,s,u,c,l,f,d){return((t=Me(r)?"":Me(n)?">="+r+".0.0":Me(o)?">="+r+"."+n+".0":">="+t)+" "+(s=Me(u)?"":Me(c)?"<"+(+u+1
)+".0.0":Me(l)?"<"+u+"."+(+c+1)+".0":f?"<="+u+"."+c+"."+l+"-"+f:"<="+s)).trim()}function Fe(e,t,r){try{t=new h(t,r)
}catch(e){return!1}return t.test(e)}function Ge(e,t,r,n){var o,i,a,s,u,c,l,f,d;switch(e=new p(e,n),t=new h(t,n),r){
case">":o=Se,i=Ie,a=Pe,s=">",u=">=";break;case"<":o=Pe,i=Ae,a=Se,s="<",u="<=";break;default:throw new TypeError(
'Must provide a hilo val of "<" or ">"')}if(Fe(e,t,n))return!1;for(c=0;c<t.set.length;++c){if(l=t.set[c],d=f=null,
l.forEach(function(e){e.semver===$s&&(e=new Ce(">=0.0.0")),f=f||e,d=d||e,o(e.semver,f.semver,n)?f=e:a(e.semver,d.semver,
n)&&(d=e)}),f.operator===s||f.operator===u)return!1;if((!d.operator||d.operator===s)&&i(e,d.semver))return!1;if(
d.operator===u&&a(e,d.semver))return!1}return!0}function De(e){
return e&&"object"==typeof e&&"function"==typeof e.removeListener&&"function"==typeof e.emit&&"function"==typeof e.reallyExit&&"function"==typeof e.listeners&&"function"==typeof e.kill&&"number"==typeof e.pid&&"function"==typeof e.on
}function Le(e){return Ws.call(this,"Unreachable case: "+e)||this}function Be(e){for(var t in e)Vs.hasOwnProperty(t)||(
Vs[t]=e[t])}function $e(e,t){return{name:"SIGRT"+(t+1),number:Gc+t,action:"terminate",
description:"Application-specific signal (realtime)",standard:"posix"}}function ze(){var e=65-Gc,e=Array.from({length:e}
,$e);return[...Dc,...e].map(qe)}function Ue(e,{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}){
return y(y({},e),{},{[t]:{name:t,number:r,description:n,supported:o,action:i,forced:a,standard:s}})}function We(e,t,r){
t&&!Array.isArray(t)&&(r=t,t=null);e={command:e,args:t=t?t.slice(0):[],options:r=Object.assign({},r),file:void 0,
original:{command:e,args:t}};return(r.shell?function(e){if(Yu)return e;var t=[e.command].concat(e.args).join(" ");
return Hu?(e.command="string"==typeof e.options.shell?e.options.shell:process.env.comspec||"cmd.exe",e.args=["/d","/s",
"/c",`"${t}"`],e.options.windowsVerbatimArguments=!0):(
"string"==typeof e.options.shell?e.command=e.options.shell:"android"===process.platform?e.command="/system/bin/sh":e.command="/bin/sh"
,e.args=["-c",t]),e}:function(e){var t,r;if(!Hu)return e;if((r=e).file=Uu(r),t=(t=r.file&&Vu(r.file))?(r.args.unshift(
r.file),r.command=t,Uu(r)):r.file,r=!Zu.test(t),e.options.forceShell||r){const n=Ju.test(t);e.command=$u.normalize(
e.command),e.command=Wu.command(e.command),e.args=e.args.map(e=>Wu.argument(e,n)),r=[e.command].concat(e.args).join(" ")
,e.args=["/d","/s","/c",`"${r}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}
return e})(e)}function Ve(e,t,r){if(t&&!Array.isArray(t)&&(r=t,t=null),e={command:e,args:t=t?t.slice(0):[],
options:r=Object.assign({},r),file:void 0,original:{command:e,args:t}},r.shell)return e;if(t=e,!Sc)return t;if((r=t
).file=jc(r),e=(e=r.file&&function(e){var t;const r=Buffer.alloc(150);try{t=xc.openSync(e,"r"),xc.readSync(t,r,0,150,0),
xc.closeSync(t)}catch(e){}return _c(r.toString())}(r.file))?(r.args.unshift(r.file),r.command=e,jc(r)):r.file,
r=!Pc.test(e),t.options.forceShell||r){const n=Tc.test(e);t.command=Ec.normalize(t.command),t.command=Oc.command(
t.command),t.args=t.args.map(e=>Oc.argument(e,n)),r=[t.command].concat(t.args).join(" "),t.args=["/d","/s","/c",`"${r}"`
],t.command=process.env.comspec||"cmd.exe",t.options.windowsVerbatimArguments=!0}return t}function qe({name:e,number:t,
description:r,action:n,forced:o=!1,standard:i}){var{signals:{[e]:a}}=vu.constants,s=void 0!==a;return{name:e,
number:s?a:t,description:r,supported:s,action:n,forced:o,standard:i}}function He(e,t){for(var r=-1,n=null==e?0:e.length,
o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Ze(e,t){return e===t||e!=e&&t!=t}function Je(e,t){for(
var r=e.length;r--;)if(Su(e[r][0],t))return r;return-1}var Ye,Xe,Ke,Qe,et,tt,rt,nt,ot,it,at,st,ut,ct,lt,ft,dt,pt,ht,gt,
mt,vt,yt,bt,wt,xt,_t,Et,jt,Ot,St,Pt,Tt,kt,At,It,Nt,Ct,Mt,Rt,Ft,Gt,Dt,Lt,Bt,$t,zt,Ut,Wt,Vt,qt,Ht,Zt,Jt,Yt,Xt,Kt,Qt,er,tr,
rr,nr,or,ir,ar,t,sr,ur,cr,lr,fr,dr,pr,hr,gr,mr,vr,yr,br,wr,xr,_r,Er,jr,Or,Sr,Pr,Tr,kr,Ar,Ir,Nr,Cr,Mr,Rr,Fr,Gr,Dr,Lr,Br,
$r,zr,Ur,Wr,Vr,qr,Hr,Zr,Jr,Yr,Xr,Kr,Qr,en,tn,rn,nn,on,an,sn,un,cn,ln,fn,dn,pn,hn,gn,mn,vn,yn,bn,wn,xn,_n,En,jn,On,Sn,Pn,
Tn,kn,An,In,Nn,Cn,Mn,Rn,Fn,Gn,Dn,Ln,Bn,$n,zn,Un,Wn,Vn,qn,Hn,Zn,Jn,Yn,Xn,Kn,Qn,eo,to,ro,no,oo,io,ao,so,uo,co,lo,fo,po,ho,
go,mo,vo,yo,bo,wo,xo,_o,Eo,jo,Oo,So,Po,To,ko,Ao,Io,No,Co,Mo,Ro,Fo,Go,Do,Lo,Bo,$o,zo,Uo,Wo,Vo,qo,Ho,Zo,Jo,Yo,Xo,Ko,Qo,ei,
ti,ri,ni,oi,ii,ai,si,ui,ci,li,fi,di,pi,hi,gi,mi,vi,yi,bi,wi,xi,_i,Ei,ji,Oi,Si,Pi,Ti,ki,Ai,Ii,Ni,Ci,Mi,Ri,Fi,Gi,Di,Li,Bi,
$i,zi,Ui,Wi,Vi,qi,Hi,Zi,Ji,Yi,Xi,Ki,Qi,ea,ta,ra,na,oa,ia,aa,sa,ua,ca,la,fa,da,pa,ha,ga,ma,va,r,ya,ba,wa,xa,_a,Ea,ja,Oa,
Sa,Pa,Ta,ka,e,Aa,Ia,Na,Ca,Ma,Ra,Fa,Ga,Da,La,Ba,$a,za,Ua,Wa,Va,o,i,qa,Ha,Za,a,s,Ja,Ya,Xa,Ka,Qa,es,ts,rs,ns,u,c,l,os,is,as
,ss,f,us,cs,ls,fs,ds,ps,hs,gs,ms,vs,ys,bs,ws,xs,_s,Es,js,Os,Ss,Ps,Ts,d,ks,As,Is,Ns,g,Cs,Ms,m,v,Rs,Fs,b,w,Gs,x,Ds,Ls,Bs,
$s,_,E,j,zs,Us,Ws,Vs,qs,O,S,Hs,Zs,P,Js,Ys,Xs,Ks,T,Qs,eu,tu,ru,nu,ou,iu,au,su,uu,k=require("path"),cu=require("fs"),
lu=require("child_process"),fu=require("stream"),du=require("assert"),pu=require("events"),hu=require("util"),
gu=require("node:buffer"),A=require("node:path"),mu=require("node:child_process"),I=require("node:process"),N=require(
"node:url"),vu=require("os"),yu=require("node:os"),C=require("buffer"),bu=D(k),wu=D(cu),cu=D(lu),lu=D(fu),fu=D(du),du=D(
pu),pu=D(hu),xu=D(A),_u=D(mu),Eu=D(I),ju=D(N),Ou=D(yu),hu=D(C),
M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Su=Ze,Pu=Je,Tu=Array.prototype.splice,ku=Je,Au=Je,Iu=Je;L.prototype.clear=function(){this.__data__=[],this.size=0},
L.prototype.delete=function(e){var t=this.__data__,e=Pu(t,e);return!(e<0||(e==t.length-1?t.pop():Tu.call(t,e,1),
--this.size,0))},L.prototype.get=function(e){var t=this.__data__,e=ku(t,e);return e<0?void 0:t[e][1]},
L.prototype.has=function(e){return-1<Au(this.__data__,e)},L.prototype.set=function(e,t){var r=this.__data__,n=Iu(r,e);
return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ye=A=L,mu=function(){this.__data__=new Ye,this.size=0},
I=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},N=function(e){return this.__data__.get(e)},
yu=function(e){return this.__data__.has(e)},C="object"==typeof M&&M&&M.Object===Object&&M,
f="object"==typeof self&&self&&self.Object===Object&&self,T=(f=C||f||Function("return this")()).Symbol,
Js=Object.prototype,Xe=Js.hasOwnProperty,Ke=Js.toString,Qe=T?T.toStringTag:void 0,Js=Object.prototype,et=Js.toString,
tt=function(e){var t,r,n=Xe.call(e,Qe),o=e[Qe];try{t=!(e[Qe]=void 0)}catch(e){}return r=Ke.call(e),t&&(
n?e[Qe]=o:delete e[Qe]),r},rt=function(e){return et.call(e)},nt=T?T.toStringTag:void 0,it=Js=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(nt&&nt in Object(e)?tt:rt)(e)},at=ot=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},st=function(e){if(!at(e))return!1;e=it(e);
return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},
O=f["__core-js_shared__"],O=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""),ut=O?"Symbol(src)_1."+O:"",
O=Function.prototype,ct=O.toString,lt=st,ft=function(e){return!!ut&&ut in e},dt=ot,pt=O=function(e){if(null!=e){try{
return ct.call(e)}catch(e){}try{return e+""}catch(e){}}return""},x=/[\\^$.*+?()[\]{}|]/g,
ht=/^\[object .+?Constructor\]$/,c=Function.prototype,P=Object.prototype,c=c.toString,P=P.hasOwnProperty,gt=RegExp(
"^"+c.call(P).replace(x,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),
mt=function(e){return!(!dt(e)||ft(e))&&(lt(e)?gt:ht).test(pt(e))},vt=function(e,t){return null==e?void 0:e[t]},P=(
c=function(e,t){e=vt(e,t);return mt(e)?e:void 0})(f,"Map"),x=c(Object,"create"),bt=yt=x,o=Object.prototype,
wt=o.hasOwnProperty,xt=x,o=Object.prototype,_t=o.hasOwnProperty,Et=x,o=function(e){e=this.has(e
)&&delete this.__data__[e];return this.size-=e?1:0,e},x=function(e){var t,r=this.__data__;
return bt?"__lodash_hash_undefined__"===(t=r[e])?void 0:t:wt.call(r,e)?r[e]:void 0},u=function(e){var t=this.__data__;
return xt?void 0!==t[e]:_t.call(t,e)},a=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,
r[e]=Et&&void 0===t?"__lodash_hash_undefined__":t,this},B.prototype.clear=function(){this.__data__=yt?yt(null):{},
this.size=0},B.prototype.delete=o,B.prototype.get=x,B.prototype.has=u,B.prototype.set=a,jt=B,Ot=A,St=P,Pt=function(e){
var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},It=At=kt=Tt=function(
e,t){e=e.__data__;return Pt(t)?e["string"==typeof t?"string":"hash"]:e.map},o=function(e){e=Tt(this,e).delete(e);
return this.size-=e?1:0,e},x=function(e){return kt(this,e).get(e)},u=function(e){return At(this,e).has(e)},a=function(e,
t){var r=It(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},$.prototype.clear=function(){this.size=0,
this.__data__={hash:new jt,map:new(St||Ot),string:new jt}},$.prototype.delete=o,$.prototype.get=x,$.prototype.has=u,
$.prototype.set=a,Ct=P,Mt=o=$,Rt=Nt=A,x=I,u=N,a=yu,A=function(e,t){var r,n=this.__data__;if(n instanceof Nt){if(
r=n.__data__,!Ct||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Mt(r)}return n.set(e,t),
this.size=n.size,this},z.prototype.clear=mu,z.prototype.delete=x,z.prototype.get=u,z.prototype.has=a,z.prototype.set=A,
I=z,Ft=o,N=function(e){return this.__data__.has(e)},U.prototype.add=U.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},U.prototype.has=N,Gt=yu=U,Dt=mu=function(e,t){for(var r=-1
,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Lt=x=function(e,t){return e.has(t)},u=f.Uint8Array,Bt=u,
$t=Ze,zt=a=function(e,t,r,n,o,i){var a,s,u,c,l,f,d,p=1&r,h=e.length,g=t.length;if(h!=g&&!(p&&h<g))return!1;if(g=i.get(e)
,a=i.get(t),g&&a)return g==t&&a==e;for(s=-1,u=!0,c=2&r?new Gt:void 0,i.set(e,t),i.set(t,e);++s<h;){if(l=e[s],f=t[s],
void 0!==(d=n?p?n(f,l,s,t,e,i):n(l,f,s,e,t,i):d)){if(d)continue;u=!1;break}if(c){if(!Dt(t,function(e,t){if(!Lt(c,t)&&(
l===e||o(l,e,r,n,i)))return c.push(t)})){u=!1;break}}else if(l!==f&&!o(l,f,r,n,i)){u=!1;break}}return i.delete(e),
i.delete(t),u},Ut=function(e){var r=-1,n=Array(e.size);return e.forEach(function(e,t){n[++r]=[t,e]}),n},Wt=A=function(e
){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r},N=T?T.prototype:void 0,Vt=N?N.valueOf:void 0,
u=function(e,t,r,n,o,i,a){var s,u;switch(r){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!i(new Bt(e),new Bt(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return $t(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=Ut;case"[object Set]":return s=s||Wt,!!(
e.size==t.size||1&n)&&((u=a.get(e))?u==t:(n|=2,a.set(e,t),u=zt(s(e),s(t),n,o,i,a),a.delete(e),u));case"[object Symbol]":
if(Vt)return Vt.call(e)==Vt.call(t)}return!1},N=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];
return e},l=Array.isArray,Ht=N,Zt=qt=l,l=function(e,t,r){t=t(e);return Zt(e)?t:Ht(t,r(e))},Jt=os=function(e,t){for(var r
,n=-1,o=null==e?0:e.length,i=0,a=[];++n<o;)t(r=e[n],n,e)&&(a[i++]=r);return a},e=Object.prototype,
Yt=e.propertyIsEnumerable,e=(Xt=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),Jt(Xt(t),
function(e){return Yt.call(t,e)}))}:function(){return[]},E=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);
return n},Kt=Js,S=function(e){return Qt(e)&&"[object Arguments]"==Kt(e)},er=Qt=Ys=function(e){
return null!=e&&"object"==typeof e},_=Object.prototype,tr=_.hasOwnProperty,rr=_.propertyIsEnumerable,_=S(function(){
return arguments}())?S:function(e){return er(e)&&tr.call(e,"callee")&&!rr.call(e,"callee")},Ns=(Is=(Is=(Ns=(Ns=(S={
exports:{}}).exports)&&!Ns.nodeType&&Ns)&&S&&!S.nodeType&&S)&&Is.exports===Ns?f.Buffer:void 0)?Is.isBuffer:void 0,
S.exports=Ns||function(){return!1},nr=/^(?:0|[1-9]\d*)$/,Is=function(e,t){var r=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&nr.test(e))&&-1<e&&e%1==0&&e<t},or=Js,ir=Ns=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},ar=Ys,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,ru=function(e){return ar(e)&&ir(e.length)&&!!t[or(e)]},d=function(t){return function(e){return t(e)}},m=(m=(g=Zs={
exports:{}}).exports)&&!m.nodeType&&m,m=(Cs=m&&g&&!g.nodeType&&g)&&Cs.exports===m,Ms=m&&C.process,m=function(){try{
return Cs&&Cs.require&&Cs.require("util").types||Ms&&Ms.binding&&Ms.binding("util")}catch(e){}}(),g.exports=m,m=(g=(
C=Zs.exports)&&C.isTypedArray)?d(g):ru,sr=E,ur=_,cr=qt,lr=S.exports,fr=Is,dr=C=m,g=Object.prototype,pr=g.hasOwnProperty,
hr=Object.prototype,ou=Object.keys,iu=Object,gr=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||hr)},mr=function(e){return ou(iu(e))},ru=Object.prototype,vr=ru.hasOwnProperty,yr=st,
br=Ns,wr=function(e,t){var r,n=cr(e),o=!n&&ur(e),i=!n&&!o&&lr(e),a=!n&&!o&&!i&&dr(e),s=n||o||i||a,u=s?sr(e.length,String
):[],c=u.length;for(r in e)!t&&!pr.call(e,r)||s&&("length"==r||i&&("offset"==r||"parent"==r)||a&&(
"buffer"==r||"byteLength"==r||"byteOffset"==r)||fr(r,c))||u.push(r);return u},xr=function(e){var t,r;if(!gr(e)
)return mr(e);for(r in t=[],Object(e))vr.call(e,r)&&"constructor"!=r&&t.push(r);return t},_r=E=function(e){
return null!=e&&br(e.length)&&!yr(e)},Er=l,jr=e,Or=m=function(e){return(_r(e)?wr:xr)(e)},Sr=function(e){return Er(e,Or,
jr)},g=Object.prototype,Pr=g.hasOwnProperty,ru=function(e,t,r,n,o,i){var a,s,u,c,l,f,d,p,h,g=1&r,m=Sr(e),v=m.length;if(
v!=Sr(t).length&&!g)return!1;for(a=v;a--;)if(s=m[a],!(g?s in t:Pr.call(t,s)))return!1;if(p=i.get(e),h=i.get(t),p&&h
)return p==t&&h==e;for(u=!0,i.set(e,t),i.set(t,e),c=g;++a<v;){if(l=e[s=m[a]],f=t[s],!(void 0===(d=n?g?n(f,l,s,t,e,i):n(l
,f,s,e,t,i):d)?l===f||o(l,f,r,n,i):d)){u=!1;break}c=c||"constructor"==s}return u&&!c&&(p=e.constructor)!=(
h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof p&&p instanceof p&&"function"==typeof h&&h instanceof h)&&(u=!1),i.delete(e),i.delete(t),u},l=c(f,
"DataView"),e=P,g=c(f,"Promise"),wa=P=c(f,"Set"),f=c(f,"WeakMap"),Tr=Js,Ar=(kr=O)(O=l),Ir=kr(e),Nr=kr(g),Cr=kr(wa),
Mr=kr(f),l=Tr,(O&&"[object DataView]"!=l(new O(new ArrayBuffer(1)))||e&&"[object Map]"!=l(new e
)||g&&"[object Promise]"!=l(g.resolve())||wa&&"[object Set]"!=l(new wa)||f&&"[object WeakMap]"!=l(new f))&&(l=function(e
){var t=Tr(e),e="[object Object]"==t?e.constructor:void 0,e=e?kr(e):"";if(e)switch(e){case Ar:return"[object DataView]";
case Ir:return"[object Map]";case Nr:return"[object Promise]";case Cr:return"[object Set]";case Mr:
return"[object WeakMap]"}return t}),Rr=I,Fr=a,Gr=u,Dr=ru,Lr=l,Br=qt,$r=S.exports,zr=C,Ur="[object Arguments]",
Wr="[object Array]",Vr="[object Object]",O=Object.prototype,qr=O.hasOwnProperty,Hr=function(e,t,r,n,o,i){var a=Br(e),
s=Br(t),u=a?Wr:Lr(e),s=s?Wr:Lr(t),c=(u=u==Ur?Vr:u)==Vr,l=(s=s==Ur?Vr:s)==Vr,s=u==s;if(s&&$r(e)){if(!$r(t))return!1;c=!(
a=!0)}return s&&!c?(i=i||new Rr,a||zr(e)?Fr(e,t,r,n,o,i):Gr(e,t,u,r,n,o,i)):1&r||(a=c&&qr.call(e,"__wrapped__"),
u=l&&qr.call(t,"__wrapped__"),!a&&!u)?s&&(i=i||new Rr,Dr(e,t,r,n,o,i)):o(a?e.value():e,u?t.value():t,r,n,i=i||new Rr)},
Jr=I,Yr=e=function e(t,r,n,o,i){return t===r||(null==t||null==r||!Zr(t)&&!Zr(r)?t!=t&&r!=r:Hr(t,r,n,o,e,i))},Xr=ot,
Kr=g=function(e){return e==e&&!Xr(e)},Qr=m,en=function(e,t,r,n){var o,i,a,s,u,c,l=r.length,f=l,d=!n;if(null==e)return!f;
for(e=Object(e);l--;)if(o=r[l],d&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<f;)if(a=e[i=(o=r[l])[0]],s=o[1],
d&&o[2]){if(void 0===a&&!(i in e))return!1}else if(u=new Jr,!(void 0===(c=n?n(a,s,i,e,t,u):c)?Yr(s,a,3,n,u):c))return!1;
return!0},tn=function(e){for(var t,r,n=Qr(e),o=n.length;o--;)r=e[t=n[o]],n[o]=[t,r,Kr(r)];return n},rn=wa=function(t,r){
return function(e){return null!=e&&e[t]===r&&(void 0!==r||t in Object(e))}},f=function(t){var r=tn(t);
return 1==r.length&&r[0][2]?rn(r[0][0],r[0][1]):function(e){return e===t||en(e,t,r)}},nn=Js,on=Zr=Ys,an=qt,
sn=a=function(e){return"symbol"==typeof e||on(e)&&"[object Symbol]"==nn(e)},
un=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cn=/^\w*$/,u=function(e,t){if(an(e))return!1;var r=typeof e;
return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!sn(e))||cn.test(e)||!un.test(e)||null!=t&&e in Object(t)},ln=o
,W.Cache=ln,fn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
dn=/\\(\\)?/g,nu=(ru=W(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(fn,function(e,t,r,n){
o.push(r?n.replace(dn,"$1"):t||e)}),o},function(e){return 500===nu.size&&nu.clear(),e})).cache,pn=He,hn=qt,gn=a,
l=T?T.prototype:void 0,mn=l?l.toString:void 0,vn=function e(t){if("string"==typeof t)return t;if(hn(t))return pn(t,e)+""
if(gn(t))return mn?mn.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},wn=ru,xn=S=function(e){return null==e?"":vn(
e)},_n=a,Sn=En=function(e,t){return yn(e)?e:bn(e,t)?[e]:wn(xn(e))},Pn=_,An=Ns,Nn=function(e,t){
return null!=e&&t in Object(e)},Cn=C=function(e,t,r){for(var n,o,i=(t=Sn(t,e)).length,a=!(n=-1);++n<i&&(o=In(t[n]),
a=null!=e&&r(e,o));)e=e[o];return a||++n!=i?a:!!(i=null==e?0:e.length)&&An(i)&&kn(o,i)&&(Tn(e)||Pn(e))},Mn=e,
Rn=function(e,t,r){e=null==e?void 0:On(e,t);return void 0===e?r:e},Fn=function(e,t){return null!=e&&Cn(e,t,Nn)},Dn=g,
Ln=wa,$n=On=O=function(e,t){for(var r=0,n=(t=En(t,e)).length;null!=e&&r<n;)e=e[jn(t[r++])];return r&&r==n?e:void 0},
zn=function(t){return function(e){return null==e?void 0:e[t]}},Un=function(t){return function(e){return $n(e,t)}},
Wn=Gn=bn=u,Vn=Bn=In=jn=function(e){if("string"==typeof e||_n(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},qn=f
,Hn=function(r,n){return Gn(r)&&Dn(n)?Ln(Bn(r),n):function(e){var t=Rn(e,r);return void 0===t&&t===n?Fn(e,r):Mn(n,t,3)}}
,Zn=I=function(e){return e},Jn=Tn=yn=qt,Yn=function(e){return Wn(e)?zn(Vn(e)):Un(e)},Xn=function(e,t,r){for(var n,o=-1,
i=Object(e),a=r(e),s=a.length;s--&&!1!==t(i[n=a[++o]],n,i););return e},Kn=m,ro=He,oo=o=function(e,n){var o=-1,i=to(e
)?Array(e.length):[];return eo(e,function(e,t,r){i[++o]=n(e,t,r)}),i},ao=function(e,t){return(io(e)?ro:oo)(e,no(t))},
uo=Ze,co=to=Qn=E,lo=kn=Is,fo=ot,po=mu,go=function(e,n){var o;return so(e,function(e,t,r){return!(o=n(e,t,r))}),!!o},
yo=function(e,t,r){var n=mo(e)?po:go;return r&&vo(e,t,r)&&(t=void 0),n(e,ho(t))},bo=so=eo=l=function(e,t){if(null==e
)return e;if(!Qn(e))return e&&Xn(e,t,Kn);for(var r=e.length,n=-1,o=Object(e);++n<r&&!1!==t(o[n],n,o););return e},
wo=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0},xo=function(e,n){var o=!0;
return bo(e,function(e,t,r){return o=!!n(e,t,r)}),o},_o=ho=no=ru=function(e){
return"function"==typeof e?e:null==e?Zn:"object"==typeof e?Jn(e)?Hn(e[0],e[1]):qn(e):Yn(e)},Eo=mo=io=qt,
jo=vo=Ns=function(e,t,r){if(!fo(r))return!1;var n=typeof t;return!!("number"==n?co(r)&&lo(t,r.length
):"string"==n&&t in r)&&uo(r[t],e)},Oo=function(e,t,r){var n=Eo(e)?wo:xo;return r&&jo(e,t,r)&&(t=void 0),n(e,_o(t))},
So=c,g=function(){try{var e=So(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Po=_,To=qt,
ko=T?T.isConcatSpreadable:void 0,Ao=N,Io=function(e){return To(e)||Po(e)||!!(ko&&e&&e[ko])},wa=function e(t,r,n,o,i){
var a,s=-1,u=t.length;for(n=n||Io,i=i||[];++s<u;)a=t[s],0<r&&n(a)?1<r?e(a,r-1,n,o,i):Ao(i,a):o||(i[i.length]=a);return i
},No=u=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r},Co=l,Mo=ru,
Ro=function(e,n,o,i,t){return t(e,function(e,t,r){o=i?(i=!1,e):n(o,e,t,r)}),o},Fo=qt,Go=function(e,t,r){var n=Fo(e
)?No:Ro,o=arguments.length<3;return n(e,Mo(t),r,o,Co)},f=function(e,t,r){var n,o=-1,i=e.length;for((r=i<r?i:r)<0&&(r+=i)
,i=r<(t=t<0?i<-t?0:i+t:t)?0:r-t>>>0,t>>>=0,n=Array(i);++o<i;)n[o]=e[o+t];return n},Do=function(e,t,r,n){for(
var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Lo=function(e){return e!=e},Bo=function(e,t,r
){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1},$o=function(e,t,r){return t==t?Bo(e,t,r):Do(e,Lo,r)},
E=function(e,t){return!(null==e||!e.length)&&-1<$o(e,t,0)},Is=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;
)if(r(t,e[n]))return!0;return!1},mu=function(){},c=(zo=P)&&1/A(new zo([,-0]))[1]==1/0?function(e){return new zo(e)}:mu,
Uo=yu,Wo=E,Vo=Is,qo=x,Ho=c,Zo=A,Jo=function(e,t,r){var n,o,i,a,s=-1,u=Wo,c=e.length,l=!0,f=[],d=f;if(r)l=!1,
u=Vo;else if(200<=c){if(n=t?null:Ho(e))return Zo(n);l=!1,u=qo,d=new Uo}else d=t?[]:f;e:for(;++s<c;)if(o=e[s],i=t?t(o):o,
o=r||0!==o?o:0,l&&i==i){for(a=d.length;a--;)if(d[a]===i)continue e;t&&d.push(i),f.push(o)}else u(d,i,r)||(d!==f&&d.push(
i),f.push(o));return f},Yo=function(e){return e&&e.length?Jo(e):[]},Xo=a,Ko=function(e,t){var r,n,o,i,a,s,u,c;if(e!==t){
if(r=void 0!==e,n=null===e,o=e==e,i=Xo(e),a=void 0!==t,s=null===t,u=t==t,c=Xo(t),
!s&&!c&&!i&&t<e||i&&a&&u&&!s&&!c||n&&a&&u||!r&&u||!o)return 1;if(!n&&!i&&!c&&e<t||c&&r&&o&&!n&&!i||s&&r&&o||!a&&o||!u
)return-1}return 0},Qo=He,ei=O,ti=ru,ri=o,ni=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e},
oi=d,ii=function(e,t,r){for(var n,o=-1,i=e.criteria,a=t.criteria,s=i.length,u=r.length;++o<s;)if(n=Ko(i[o],a[o])
)return u<=o?n:n*("desc"==r[o]?-1:1);return e.index-t.index},ai=I,si=qt,ui=function(e,t,r){switch(r.length){case 0:
return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}
return e.apply(t,r)},ci=Math.max,li=function(e){return function(){return e}},_=(fi=g)?function(e,t){return fi(e,
"toString",{configurable:!0,enumerable:!1,value:li(t),writable:!0})}:I,di=Date.now,Qs=_,pi=wa,hi=function(e,n,r){var o;
return n=n.length?Qo(n,function(t){return si(t)?function(e){return ei(e,1===t.length?t[0]:t)}:t}):[ai],o=-1,n=Qo(n,oi(ti
)),e=ri(e,function(t,e,r){return{criteria:Qo(n,function(e){return e(t)}),index:++o,value:t}}),ni(e,function(e,t){
return ii(e,t,r)})},gi=Ns,function(){var e=di(),t=16-e+ +tu;if(tu=e,0<t){if(800<=++eu)return}else eu=0;Qs.apply(void 0,
arguments)}((au=T=function(e,t){if(null==e)return[];var r=t.length;return 1<r&&gi(e,t[0],t[1])?t=[]:2<r&&gi(t[0],t[1],
t[2])&&(t=[t[0]]),hi(e,pi(t,1),[])},su=void(tu=eu=0),uu=I,su=ci(void 0===su?au.length-1:su,0),function(){for(var e,
t=arguments,r=-1,n=ci(t.length-su,0),o=Array(n);++r<n;)o[r]=t[su+r];for(r=-1,e=Array(su+1);++r<su;)e[r]=t[r];
return e[su]=uu(o),ui(au,this,e)}),T+""),mi=l,vi=os,yi=function(e,n){var o=[];return mi(e,function(e,t,r){n(e,t,r
)&&o.push(e)}),o},bi=ru,wi=qt,xi=function(e,t){return(wi(e)?vi:yi)(e,bi(t))},_i=f,N=function(e,t,r){var n=e.length;
return r=void 0===r?n:r,!t&&n<=r?e:_i(e,t,r)},Ei=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),P=function(e){return Ei.test(e)},
(mu=Zs.exports)&&mu.isRegExp,yu=function(e){return e.split("")},
E="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",Is="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",ji=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+Is+E,"g"),Oi=yu,Si=P,Pi=function(e){return e.match(ji)||[]},
x=Object.prototype,Ti=x.hasOwnProperty,ki=function(e,t){return null!=e&&Ti.call(e,t)},Ai=C,Ii=function(e,t){
return null!=e&&Ai(e,t,ki)},Mi=function(e){return!0===e||!1===e||Ci(e)&&"[object Boolean]"==Ni(e)},Ri=function(e){
return null===e},Gi=qt,Li=function(e){return"string"==typeof e||!Gi(e)&&Di(e)&&"[object String]"==Fi(e)},Bi=Fi=Ni=Js,
$i=Di=Ci=Ys,zi=function(e){return"number"==typeof e||$i(e)&&"[object Number]"==Bi(e)},Ui=He,Wi=function(t,e){return Ui(e
,function(e){return t[e]})},Vi=m,qi=function(e){return null==e?[]:Wi(e,Vi(e))},Hi=e,Zi=function(e,t){return Hi(e,t)},
Ji=N,Yi=P,Xi=function(e){return(Si(e)?Pi:Oi)(e)},ea=function(e){var t,r;return e=Ki(e),t=(r=Yi(e)?Xi(e):void 0
)?r[0]:e.charAt(0),r=r?Ji(r,1).join(""):e.slice(1),t.toUpperCase()+r},c=function(e){return ea(Qi(e).toLowerCase())},Ks={
"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D",
"ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i",
"î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o",
"ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae",
"Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c",
"ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e",
"ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I",
"Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L",
"Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n",
"ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S",
"Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U",
"Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y",
"Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},ta=function(e){
return null==Ks?void 0:Ks[e]},ra=Qi=Ki=S,na=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,oa=RegExp(
"[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),A=function(e){return(e=ra(e))&&e.replace(na,ta).replace(oa,"")},
ia=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=function(e){return e.match(ia)||[]},
aa=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,O=function(e){return aa.test(e)},
o="[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]"
,d="[A-Z\\xc0-\\xd6\\xd8-\\xde]",
g="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",_="(?:"+[
"[\\u2700-\\u27bf]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|")+")"+g,sa=RegExp([
d+"?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,d,"$"].join("|")+")",
"(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[
o,
d+"(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])"
,"$"].join("|")+")",
d+"?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?"
,d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
"\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",_].join("|"),"g"),ua=a,ca=O,la=S,fa=function(e){
return e.match(sa)||[]},da=u,pa=A,ha=function(e,t,r){return e=la(e),void 0===(t=r?void 0:t)?(ca(e)?fa:ua)(e):e.match(t
)||[]},ga=RegExp("['’]","g"),ma=c,Xs=function(e,t,r){return t=t.toLowerCase(),e+(r?ma(t):t)},va=function(e){return da(
ha(pa(e).replace(ga,"")),Xs,"")};class Nu{constructor(e,t){n(this,"_logger",void 0),n(this,"name",void 0),n(this,
"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e;return null!=(e=this._level
)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=r.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=r.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=r.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=r.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class Cu{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case r.DEBUG:return"DEBUG";case r.INFO:return"INFO";case r.WARN:return"WARN";case r.ERROR:return"ERROR";
case r.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=r.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=r.INFO&&this._logger.info(...e)}static warn(...e){this._level<=r.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=r.ERROR&&this._logger.error(...e)}static createLogger(e){return new Nu(e,Cu)}}n(Cu
,"Level",r={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),n(Cu,"_level",r.DEBUG)
,n(Cu,"_logger",console),ya={NPM:"npm",YARN:"yarn",HGM:"hgm"};class Mu{constructor(){n(this,"_preferredPackageSystem",
void 0),n(this,"_gitOrganization",void 0),n(this,"_organizationName",void 0),n(this,"_organizationEmail",void 0),n(this,
"_pkgDir",void 0),n(this,"_buildDir",void 0),n(this,"_sourceDir",void 0),n(this,"_templatesDir",void 0),n(this,
"_gitCommitMessage",void 0),n(this,"_gitBranch",void 0),n(this,"_mainName",void 0),n(this,"_distFile",void 0),n(this,
"_mainSrcFileTemplate",void 0),n(this,"_mainSrcFileName",void 0),n(this,"_files",void 0),n(this,"_renameFiles",void 0),
n(this,"_gitSubmodules",void 0),n(this,"_packages",void 0),n(this,"_packageJsonModifier",void 0)}
static createFromTemplateFile(e){var t=k.dirname(e),e=require(e);const r=Mu.createFromDataObject(e);
return r.setTemplatesDirectory(k.resolve(t,null!=(t=null==e?void 0:e.templatesDir)?t:"./templates")),r}
static createFromDataObject(e){var t;const r=new Mu;return r.setPreferredPackageSystem(re(null!=(
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
e=this._preferredPackageSystem)?e:ya.NPM}setGitOrganization(e){return this._gitOrganization=e,this}getGitOrganization(){
return this._gitOrganization}setOrganizationName(e){return this._organizationName=e,this}getOrganizationName(){
return this._organizationName}setOrganizationEmail(e){return this._organizationEmail=e,this}getOrganizationEmail(){
return this._organizationEmail}setPackageDirectory(e){return this._pkgDir=e,this}getPackageDirectory(){
return this._pkgDir}setBuildDir(e){return this._buildDir=e,this}getBuildDir(){return this._buildDir}setSourceDir(e){
return this._sourceDir=e,this}getSourceDir(){return this._sourceDir}setTemplatesDirectory(e){return this._templatesDir=e
,this}getTemplatesDirectory(){return this._templatesDir}setGitCommitMessage(e){return this._gitCommitMessage=e,this}
getGitCommitMessage(){return this._gitCommitMessage}setGitBranch(e){return this._gitBranch=e,this}getGitBranch(){
return this._gitBranch}setMainName(e){return this._mainName=e,this}_getDefaultMainName(){var e=this.getPackageDirectory(
);if(e)return k.basename(e);throw new TypeError("Package directory or main name must be set first")}getMainName(){var e;
return null!=(e=this._mainName)?e:this._getDefaultMainName()}setDistFile(e){return this._distFile=e,this}getDistFile(){
var e;return null!=(e=this._distFile)?e:k.join(this.getBuildDir(),this.getMainName()+".js")}setMainSourceFileName(e){
return this._mainSrcFileName=e,this}getMainSourceFileName(){var e;return null!=(e=this._mainSrcFileName)?e:k.join(
this.getSourceDir(),this.getMainName()+".ts")}setMainSourceFileTemplate(e){return this._mainSrcFileTemplate=e,this}
getMainSourceFileTemplate(){var e;return null!=(e=this._mainSrcFileTemplate)?e:k.join(this.getSourceDir(),
this.getMainName()+".ts")}setFiles(e){return this._files=ao(e,e=>e),this}getFiles(){return this._files}setRenameFiles(e
){return this._renameFiles=e,this}getRenameFiles(){return this._renameFiles}setPackages(e){return this._packages=ao(e,
e=>e),this}getPackages(){return this._packages}setGitSubmodules(e){return this._gitSubmodules=ao(e,e=>e),this}
getGitSubmodules(){return this._gitSubmodules}setPackageJsonModifier(e){return this._packageJsonModifier=e,this}
getPackageJsonModifier(){return this._packageJsonModifier}}const Ru=Cu.createLogger("SyncFileUtils");class R{
static isDirectory(e){return wu.default.statSync(e).isDirectory()}static directoryExits(e){return wu.default.existsSync(
e)&&wu.default.statSync(e).isDirectory()}static mkdirp(e){var t,r;Ru.debug("mkdirp: Creating directory: ",e);const n=[];
for(;!R.directoryExits(e)&&(n.push(e),e!==(t=bu.default.dirname(e)));)e=t;for(;1<=n.length;){if(!(r=n.pop())
)throw new TypeError("No dir");Ru.debug("mkdirp: Creating missing directory: ",r),wu.default.mkdirSync(r)}}
static readTextFile(e){return wu.default.readFileSync(e,"utf8")}static fileExists(e){return wu.default.existsSync(e)}
static readJsonFile(e){return JSON.parse(R.readTextFile(e))}static writeTextFile(e,t){wu.default.writeFileSync(e,t,{
encoding:"utf8"})}static writeJsonFile(e,t){t=JSON.stringify(t,null,2);R.writeTextFile(e,t)}
static copyTextFileWithReplacements(e,t,r){let n=R.readTextFile(e);K(r).forEach(e=>{var t=r[e];n=n.replace(e,t)}),
R.writeTextFile(t,n)}static copyTextFileWithReplacementsIfMissing(e,t,r){R.fileExists(t)?Ru.warn(
"Warning! File already exists: ",t):R.copyTextFileWithReplacements(e,t,r)}}ba={},wa={},Ns={exports:{}},I={exports:{}},
T=function(e){try{return e()}catch(e){}},(l=function(r,n,o){xa.stat(r,function(e,t){o(e,!e&&ne(t,r,n))})}
).sync=function(e,t){return ne(xa.statSync(e),e,t)},xa=wu.default,(os=function(e,r,n){_a.stat(e,function(e,t){n(e,
!e&&oe(t,r))})}).sync=function(e,t){return oe(_a.statSync(e),t)},_a=wu.default,
Ea="win32"===process.platform||M.TESTING_WINDOWS?l:os,(ru=function e(t,o,r){if("function"==typeof o&&(r=o,o={}),!r){if(
"function"!=typeof Promise)throw new TypeError("callback not provided");return new Promise(function(r,n){e(t,o||{},
function(e,t){e?n(e):r(t)})})}Ea(t,o||{},function(e,t){e&&("EACCES"===e.code||o&&o.ignoreErrors)&&(e=null,t=!1),r(e,t)})
}).sync=function(e,t){try{return Ea.sync(e,t||{})}catch(e){if(t&&t.ignoreErrors||"EACCES"===e.code)return!1;throw e}},(
f=function(n,u,c){var e,o,l,f,d;"function"==typeof u&&(c=u,u={}),e=ae(n,u),o=e.env,l=e.ext,f=e.extExe,d=[],function e(t,
a){var r,s;return t===a?u.all&&d.length?c(null,d):c(ie(n)):('"'===(r=o[t]).charAt(0)&&'"'===r.slice(-1)&&(r=r.slice(1,-1
)),s=Oa.join(r,n),!r&&/^\.[\\\/]/.test(n)&&(s=n.slice(0,2)+s),void function r(n,o){if(n===o)return e(t+1,a);var i=l[n];
Pa(s+i,{pathExt:f},function(e,t){if(!e&&t){if(!u.all)return c(null,s+i);d.push(s+i)}return r(n+1,o)})}(0,l.length))}(0,
o.length)}).sync=function(e,t){for(var r,n,o,i,a,s,u=(r=ae(e,t=t||{})).env,c=r.ext,l=r.extExe,f=[],d=0,
p=u.length;d<p;d++)for('"'===(n=u[d]).charAt(0)&&'"'===n.slice(-1)&&(n=n.slice(1,-1)),o=Oa.join(n,e),
!n&&/^\.[\\\/]/.test(e)&&(o=e.slice(0,2)+o),i=0,a=c.length;i<a;i++){s=o+c[i];try{if(Pa.sync(s,{pathExt:l})){if(!t.all
)return s;f.push(s)}}catch(e){}}if(t.all&&f.length)return f;if(t.nothrow)return null;throw ie(e)},
ja="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,Oa=bu.default,Sa=ja?";":":",
Pa=ru;const Fu=bu.default,Gu=f,Du=(Zs=e=>{var t=(e=e||{}).env||process.env;return"win32"!==(e.platform||process.platform
)?"PATH":Object.keys(t).find(e=>"PATH"===e.toUpperCase())||"Path"})(),Lu=(mu=function(e){return se(e)||se(e,!0)},
/([()\][%!^"`<>&|;, *?])/g),Bu=((Is={}).command=function(e){return e.replace(Lu,"^$1")},Is.argument=function(e,t){
return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`).replace(Lu,"^$1"),t?e.replace(
Lu,"^$1"):e},Ta=/^#!.*/,wu.default);for(E=function(e){var t;let r;Buffer.alloc?r=Buffer.alloc(150):(r=new Buffer(150)
).fill(0);try{t=Bu.openSync(e,"r"),Bu.readSync(t,r,0,150,0),Bu.closeSync(t)}catch(e){}return(e=r.toString().match(Ta))?(
e=(t=e[0].replace(/#! ?/,"").split(" "))[0].split("/").pop(),t=t[1],"env"===e?t:e+(t?" "+t:"")):null},j=(yu={exports:{}}
).exports,j=yu.exports=p,v="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(
process.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(
console,e)}:function(){},j.SEMVER_SPEC_VERSION="2.0.0",Rs=256,Fs=Number.MAX_SAFE_INTEGER||9007199254740991,b=j.re=[],(
w=j.src=[])[0]="0|[1-9]\\d*",w[1]="[0-9]+",w[2]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",w[3]="("+w[0]+")\\.("+w[0]+")\\.("+w[0]+")"
,w[4]="("+w[1]+")\\.("+w[1]+")\\.("+w[1]+")",w[5]="(?:"+w[0]+"|"+w[2]+")",w[6]="(?:"+w[1]+"|"+w[2]+")",
w[7]="(?:-("+w[5]+"(?:\\."+w[5]+")*))",w[8]="(?:-?("+w[6]+"(?:\\."+w[6]+")*))",w[9]="[0-9A-Za-z-]+",
w[10]="(?:\\+("+w[9]+"(?:\\."+w[9]+")*))",Gs=11,x="v?"+w[3]+w[7]+"?"+w[10]+"?",w[Gs]="^"+x+"$",
C="[v=\\s]*"+w[4]+w[8]+"?"+w[10]+"?",w[Ds=12]="^"+C+"$",w[13]="((?:<|>)?=?)",w[14]=w[1]+"|x|X|\\*",w[15]=w[0]+"|x|X|\\*"
,w[16]="[v=\\s]*("+w[15]+")(?:\\.("+w[15]+")(?:\\.("+w[15]+")(?:"+w[7]+")?"+w[10]+"?)?)?",
w[17]="[v=\\s]*("+w[14]+")(?:\\.("+w[14]+")(?:\\.("+w[14]+")(?:"+w[8]+")?"+w[10]+"?)?)?",
w[18]="^"+w[13]+"\\s*"+w[16]+"$",w[19]="^"+w[13]+"\\s*"+w[17]+"$",
w[20]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",w[21]="(?:~>?)",
w[22]="(\\s*)"+w[21]+"\\s+",b[22]=new RegExp(w[22],"g"),w[23]="^"+w[21]+w[16]+"$",w[24]="^"+w[21]+w[17]+"$",
w[25]="(?:\\^)",w[26]="(\\s*)"+w[25]+"\\s+",b[26]=new RegExp(w[26],"g"),w[27]="^"+w[25]+w[16]+"$",
w[28]="^"+w[25]+w[17]+"$",w[29]="^"+w[13]+"\\s*("+C+")$|^$",w[30]="^"+w[13]+"\\s*("+x+")$|^$",
w[31]="(\\s*)"+w[13]+"\\s*("+C+"|"+w[16]+")",b[31]=new RegExp(w[31],"g"),
w[32]="^\\s*("+w[16]+")\\s+-\\s+("+w[16]+")\\s*$",w[33]="^\\s*("+w[17]+")\\s+-\\s+("+w[17]+")\\s*$",
w[34]="(<|>)?=?\\s*\\*",Ls=0;Ls<35;Ls++)v(Ls,w[Ls]),b[Ls]||(b[Ls]=new RegExp(w[Ls]));j.parse=Ee,j.valid=function(e,t){
e=Ee(e,t);return e?e.version:null},j.clean=function(e,t){e=Ee(e.trim().replace(/^[=v]+/,""),t);return e?e.version:null},
(j.SemVer=p).prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,
this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},p.prototype.toString=function(){
return this.version},p.prototype.compare=function(e){return v("SemVer.compare",this.version,this.options,e),
e instanceof p||(e=new p(e,this.options)),this.compareMain(e)||this.comparePre(e)},p.prototype.compareMain=function(e){
return e instanceof p||(e=new p(e,this.options)),je(this.major,e.major)||je(this.minor,e.minor)||je(this.patch,e.patch)}
,p.prototype.comparePre=function(e){var t,r,n;if(e instanceof p||(e=new p(e,this.options)),
this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(
!this.prerelease.length&&!e.prerelease.length)return 0;t=0;do{if(r=this.prerelease[t],n=e.prerelease[t],v(
"prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(r!==n
)return je(r,n)}while(++t)},p.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0
,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,
this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;
case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":
0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];
break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;
case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length
)this.prerelease=[0];else{for(var r=this.prerelease.length;0<=--r;)"number"==typeof this.prerelease[r]&&(
this.prerelease[r]++,r=-2);-1===r&&this.prerelease.push(0)}t&&(this.prerelease[0]!==t||isNaN(this.prerelease[1]))&&(
this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),
this.raw=this.version,this},j.inc=function(e,t,r,n){"string"==typeof r&&(n=r,r=void 0);try{return new p(e,r).inc(t,n
).version}catch(e){return null}},j.diff=function(e,t){var r,n,o,i,a;if(Te(e,t))return null;for(a in r=Ee(e),n=Ee(t),o=""
,(r.prerelease.length||n.prerelease.length)&&(o="pre",i="prerelease"),r)if(("major"===a||"minor"===a||"patch"===a
)&&r[a]!==n[a])return o+a;return i},j.compareIdentifiers=je,Bs=/^[0-9]+$/,j.rcompareIdentifiers=function(e,t){return je(
t,e)},j.major=function(e,t){return new p(e,t).major},j.minor=function(e,t){return new p(e,t).minor},j.patch=function(e,t
){return new p(e,t).patch},j.compare=Oe,j.compareLoose=function(e,t){return Oe(e,t,!0)},j.rcompare=function(e,t,r){
return Oe(t,e,r)},j.sort=function(e,r){return e.sort(function(e,t){return j.compare(e,t,r)})},j.rsort=function(e,r){
return e.sort(function(e,t){return j.rcompare(e,t,r)})},j.gt=Se,j.lt=Pe,j.eq=Te,j.neq=ke,j.gte=Ae,j.lte=Ie,j.cmp=Ne,
j.Comparator=Ce,$s={},Ce.prototype.parse=function(e){var t=this.options.loose?b[29]:b[30],t=e.match(t);if(!t
)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),
t[2]?this.semver=new p(t[2],this.options.loose):this.semver=$s},Ce.prototype.toString=function(){return this.value},
Ce.prototype.test=function(e){return v("Comparator.test",e,this.options.loose),this.semver===$s||Ne(
e="string"==typeof e?new p(e,this.options):e,this.operator,this.semver,this.options)},Ce.prototype.intersects=function(e
,t){var r,n,o,i,a;if(e instanceof Ce)return t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),
""===this.operator?(r=new h(e.value,t),Fe(this.value,r,t)):""===e.operator?(r=new h(this.value,t),Fe(e.semver,r,t)):(
r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!(
"<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version
,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=Ne(this.semver,"<",e.semver,t
)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),t=Ne(this.semver,">",e.semver,t
)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator),r||n||o&&i||a||t);
throw new TypeError("a Comparator is required")},(j.Range=h).prototype.format=function(){return this.range=this.set.map(
function(e){return e.join(" ").trim()}).join("||").trim(),this.range},h.prototype.toString=function(){return this.range}
,h.prototype.parseRange=function(e){var t,r,n=this.options.loose;return e=e.trim(),r=n?b[33]:b[32],e=e.replace(r,Re),v(
"hyphen replace",e),e=e.replace(b[31],"$1$2$3"),v("comparator trim",e,b[31]),e=(e=(e=e.replace(b[22],"$1~")).replace(
b[26],"$1^")).split(/\s+/).join(" "),t=n?b[29]:b[30],r=e.split(" ").map(function(e){return t=this.options,v("comp",e=e,t
),r=t,e=e.trim().split(/\s+/).map(function(e){return v("caret",i=e,e=r),e=e.loose?b[28]:b[27],i.replace(e,function(e,t,r
,n,o){return v("caret",i,e,t,r,n,o),e=Me(t)?"":Me(r)?">="+t+".0.0 <"+(+t+1)+".0.0":Me(n
)?"0"===t?">="+t+"."+r+".0 <"+t+"."+(+r+1)+".0":">="+t+"."+r+".0 <"+(+t+1)+".0.0":o?(v("replaceCaret pr",o),
"0"===t?"0"===r?">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+r+"."+(+n+1):">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1
)+".0":">="+t+"."+r+"."+n+"-"+o+" <"+(+t+1)+".0.0"):(v("no pr"),"0"===t?"0"===r?">="+t+"."+r+"."+n+" <"+t+"."+r+"."+(
+n+1):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0":">="+t+"."+r+"."+n+" <"+(+t+1)+".0.0"),v("caret return",e),e});var i}
).join(" "),v("caret",e),n=t,e=e.trim().split(/\s+/).map(function(e){return i=e,e=n.loose?b[24]:b[23],i.replace(e,
function(e,t,r,n,o){return v("tilde",i,e,t,r,n,o),e=Me(t)?"":Me(r)?">="+t+".0.0 <"+(+t+1)+".0.0":Me(n
)?">="+t+"."+r+".0 <"+t+"."+(+r+1)+".0":o?(v("replaceTilde pr",o),">="+t+"."+r+"."+n+"-"+o+" <"+t+"."+(+r+1)+".0"
):">="+t+"."+r+"."+n+" <"+t+"."+(+r+1)+".0",v("tilde return",e),e});var i}).join(" "),v("tildes",e),v("replaceXRanges",
i=e,o=t),e=i.split(/\s+/).map(function(e){return t=o,u=(u=e).trim(),e=t.loose?b[19]:b[18],u.replace(e,function(e,t,r,n,o
,i){var a,s;return v("xRange",u,e,t,r,n,o,i),s=(a=(i=Me(r))||Me(n))||Me(o),"="===t&&s&&(t=""),
i?e=">"===t||"<"===t?"<0.0.0":"*":t&&s?(a&&(n=0),o=0,">"===t?(t=">=",o=a?(r=+r+1,n=0):(n=+n+1,0)):"<="===t&&(t="<",
a?r=+r+1:n=+n+1),e=t+r+"."+n+"."+o):a?e=">="+r+".0.0 <"+(+r+1)+".0.0":s&&(e=">="+r+"."+n+".0 <"+r+"."+(+n+1)+".0"),v(
"xRange return",e),e});var u,t}).join(" "),v("xrange",e),v("replaceStars",i=e,t),e=i.trim().replace(b[34],""),v("stars",
e),e;var t,r,n,o,i},this).join(" ").split(/\s+/),(r=this.options.loose?r.filter(function(e){return!!e.match(t)}):r).map(
function(e){return new Ce(e,this.options)},this)},h.prototype.intersects=function(r,n){if(r instanceof h
)return this.set.some(function(e){return e.every(function(t){return r.set.some(function(e){return e.every(function(e){
return t.intersects(e,n)})})})});throw new TypeError("a Range is required")},j.toComparators=function(e,t){return new h(
e,t).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},
h.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new p(e,this.options));for(
var t=0;t<this.set.length;t++)if(function(e,t,r){for(var n,o=0;o<e.length;o++)if(!e[o].test(t))return;if(
!t.prerelease.length||r.includePrerelease)return 1;for(o=0;o<e.length;o++)if(v(e[o].semver),
e[o].semver!==$s&&0<e[o].semver.prerelease.length&&(n=e[o].semver).major===t.major&&n.minor===t.minor&&n.patch===t.patch
)return 1}(this.set[t],e,this.options))return!0;return!1},j.satisfies=Fe,j.maxSatisfying=function(e,t,r){var n,o=null,
i=null;try{n=new h(t,r)}catch(e){return null}return e.forEach(function(e){!n.test(e)||o&&-1!==i.compare(e)||(i=new p(o=e
,r))}),o},j.minSatisfying=function(e,t,r){var n,o=null,i=null;try{n=new h(t,r)}catch(e){return null}return e.forEach(
function(e){!n.test(e)||o&&1!==i.compare(e)||(i=new p(o=e,r))}),o},j.minVersion=function(e,t){var r,n;if(e=new h(e,t),
r=new p("0.0.0"),e.test(r))return r;if(r=new p("0.0.0-0"),e.test(r))return r;for(r=null,n=0;n<e.set.length;++n
)e.set[n].forEach(function(e){var t=new p(e.semver.version);switch(e.operator){case">":
0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!Se(r,t)||(r=t);break;
case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}});return r&&e.test(r)?r:null},
j.validRange=function(e,t){try{return new h(e,t).range||"*"}catch(e){return null}},j.ltr=function(e,t,r){return Ge(e,t,
"<",r)},j.gtr=function(e,t,r){return Ge(e,t,">",r)},j.outside=Ge,j.prerelease=function(e,t){e=Ee(e,t);
return e&&e.prerelease.length?e.prerelease:null},j.intersects=function(e,t,r){return e=new h(e,r),t=new h(t,r),
e.intersects(t)},j.coerce=function(e){if(e instanceof p)return e;if("string"!=typeof e)return null;e=e.match(b[20]);
return null==e?null:Ee(e[1]+"."+(e[2]||"0")+"."+(e[3]||"0"))};const $u=bu.default,zu=T,Uu=mu,Wu=Is,Vu=E,qu=yu.exports,
Hu="win32"===process.platform,Zu=/\.(?:com|exe)$/i,Ju=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,Yu=zu(()=>qu.satisfies(
process.version,"^4.8.0 || ^5.7.0 || >= 6.0.0",!0))||!1,Xu="win32"===process.platform,Ku=cu.default,Qu={
hookChildProcess:function(r,n){if(Xu){const o=r.emit;r.emit=function(e,t){if("exit"===e){e=ce(t,n);if(e)return o.call(r,
"error",e)}return o.apply(r,arguments)}}},verifyENOENT:ce,verifyENOENTSync:function(e,t){return Xu&&1===e&&!t.file?ue(
t.original,"spawnSync"):null},notFoundError:ue};I.exports=le,I.exports.spawn=le,I.exports.sync=function(e,t,r){e=We(e,t,
r);const n=Ku.spawnSync(e.command,e.args,e.options);return n.error=n.error||Qu.verifyENOENTSync(n.status,e),n},
I.exports._parse=We,I.exports._enoent=Qu,Js=function(e){var t="string"==typeof e?"\n":"\n".charCodeAt(),
r="string"==typeof e?"\r":"\r".charCodeAt();return(e=e[e.length-1]===t?e.slice(0,e.length-1):e)[e.length-1]===r?e.slice(
0,e.length-1):e};{zs=Ys={exports:{}};const cl=bu.default,ll=Zs;zs.exports=e=>{e=Object.assign({cwd:process.cwd(),
path:process.env[ll()]},e);let t,r=cl.resolve(e.cwd);const n=[];for(;t!==r;)n.push(cl.join(r,"node_modules/.bin")),t=r,
r=cl.resolve(r,"..");return n.push(cl.dirname(process.execPath)),n.concat(e.path).join(cl.delimiter)},
zs.exports.env=e=>{e=Object.assign({env:process.env},e);const t=Object.assign({},e.env);var r=ll({env:t});
return e.path=t[r],t[r]=zs.exports(e),t}}(ka=(m={exports:{}}).exports=function(e){
return null!==e&&"object"==typeof e&&"function"==typeof e.pipe}).writable=function(e){return ka(e
)&&!1!==e.writable&&"function"==typeof e._write&&"object"==typeof e._writableState},ka.readable=function(e){return ka(e
)&&!1!==e.readable&&"function"==typeof e._read&&"object"==typeof e._readableState},ka.duplex=function(e){
return ka.writable(e)&&ka.readable(e)},ka.transform=function(e){return ka.duplex(e
)&&"function"==typeof e._transform&&"object"==typeof e._transformState},e={exports:{}},(N={exports:{}}).exports=(
P=function e(o,t){function r(){for(var t,r,e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];
return t=o.apply(this,e),r=e[e.length-1],"function"==typeof t&&t!==r&&Object.keys(r).forEach(function(e){t[e]=r[e]}),t}
if(o&&t)return e(o)(t);if("function"!=typeof o)throw new TypeError("need wrapper function");return Object.keys(o
).forEach(function(e){r[e]=o[e]}),r})(fe),N.exports.strict=P(de),fe.proto=fe(function(){Object.defineProperty(
Function.prototype,"once",{value:function(){return fe(this)},configurable:!0}),Object.defineProperty(Function.prototype,
"onceStrict",{value:function(){return de(this)},configurable:!0})}),Aa=N.exports,Ia=function(){},Na=function(e){
return e.setHeader&&"function"==typeof e.abort},Ca=function(e){return e.stdio&&Array.isArray(e.stdio
)&&3===e.stdio.length},Ra=N.exports,Fa=Ma=function(t,e,r){var n,o,i,a,s,u,c,l,f,d,p,h,g;return"function"==typeof e?Ma(t,
null,e):(e=e||{},r=Aa(r||Ia),n=t._writableState,o=t._readableState,i=e.readable||!1!==e.readable&&t.readable,
a=e.writable||!1!==e.writable&&t.writable,s=!1,u=function(){t.writable||c()},c=function(){a=!1,i||r.call(t)},l=function(
){i=!1,a||r.call(t)},f=function(e){r.call(t,e?new Error("exited with error code: "+e):null)},d=function(e){r.call(t,e)},
p=function(){process.nextTick(h)},h=function(){if(!s)return(!i||o&&o.ended&&!o.destroyed)&&(!a||n&&n.ended&&!n.destroyed
)?void 0:r.call(t,new Error("premature close"))},g=function(){t.req.on("finish",c)},Na(t)?(t.on("complete",c),t.on(
"abort",p),t.req?g():t.on("request",g)):a&&!n&&(t.on("end",u),t.on("close",u)),Ca(t)&&t.on("exit",f),t.on("end",l),t.on(
"finish",c),!1!==e.error&&t.on("error",d),t.on("close",p),function(){s=!0,t.removeListener("complete",c),
t.removeListener("abort",p),t.removeListener("request",g),t.req&&t.req.removeListener("finish",c),t.removeListener("end"
,u),t.removeListener("close",u),t.removeListener("finish",c),t.removeListener("exit",f),t.removeListener("end",l),
t.removeListener("error",d),t.removeListener("close",p)})},Ga=wu.default,Da=function(){},La=/^v?\.0/.test(
process.version),Ba=function(e){return"function"==typeof e},$a=function(e){return!!La&&!!Ga&&(e instanceof(
Ga.ReadStream||Da)||e instanceof(Ga.WriteStream||Da))&&Ba(e.close)},za=function(e){return e.setHeader&&Ba(e.abort)},
Ua=function(t,e,r,n){var o,i;return n=Ra(n),o=!1,t.on("close",function(){o=!0}),Fa(t,{readable:e,writable:r},function(e
){if(e)return n(e);o=!0,n()}),i=!1,function(e){if(!o&&!i)return i=!0,$a(t)?t.close(Da):za(t)?t.abort():Ba(t.destroy
)?t.destroy():void n(e||new Error("stream was destroyed"))}},Wa=function(e){e()},Va=function(e,t){return e.pipe(t)};
const ec=lu.default.PassThrough;class tc extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}e.exports=pe,e.exports.buffer=(e,t)=>pe(e,Object.assign({},t,{encoding:"buffer"})),
e.exports.array=(e,t)=>pe(e,Object.assign({},t,{array:!0})),e.exports.MaxBufferError=tc,g=(e,t)=>(t=t||(()=>{}),e.then(
e=>new Promise(e=>{e(t())}).then(()=>e),e=>new Promise(e=>{e(t())}).then(()=>{throw e}))),o={exports:{}},(_=d={
exports:{}}).exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"],"win32"!==process.platform&&_.exports.push(
"SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT"),
"linux"===process.platform&&_.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED"),De(i=M.process)?(
qa=fu.default,Ha=d.exports,Za=/^win/i.test(i.platform),"function"!=typeof(a=du.default)&&(a=a.EventEmitter),
i.__signal_exit_emitter__?s=i.__signal_exit_emitter__:((s=i.__signal_exit_emitter__=new a).count=0,s.emitted={}),
s.infinite||(s.setMaxListeners(1/0),s.infinite=!0),o.exports=function(e,t){var r;return De(M.process)?(qa.equal(typeof e
,"function","a callback must be provided for exit handler"),!1===Ka&&Qa(),r="exit",t&&t.alwaysLast&&(r="afterexit"),
t=function(){s.removeListener(r,e),0===s.listeners("exit").length&&0===s.listeners("afterexit").length&&Ja()},s.on(r,e),
t):function(){}},Ja=function(){Ka&&De(M.process)&&(Ka=!1,Ha.forEach(function(e){try{i.removeListener(e,Xa[e])}catch(e){}
}),i.emit=rs,i.reallyExit=es,--s.count)},o.exports.unload=Ja,Ya=function(e,t,r){s.emitted[e]||(s.emitted[e]=!0,s.emit(e,
t,r))},Xa={},Ha.forEach(function(e){Xa[e]=function(){De(M.process)&&i.listeners(e).length===s.count&&(Ja(),Ya("exit",
null,e),Ya("afterexit",null,e),Za&&"SIGHUP"===e&&(e="SIGINT"),i.kill(i.pid,e))}}),o.exports.signals=function(){return Ha
},Ka=!1,Qa=function(){!Ka&&De(M.process)&&(Ka=!0,s.count+=1,Ha=Ha.filter(function(e){try{return i.on(e,Xa[e]),!0}catch(e
){return!1}}),i.emit=ns,i.reallyExit=ts)},o.exports.load=Qa,es=i.reallyExit,ts=function(e){De(M.process)&&(
i.exitCode=e||0,Ya("exit",i.exitCode,null),Ya("afterexit",i.exitCode,null),es.call(i,i.exitCode))},rs=i.emit,
ns=function(e,t){return"exit"===e&&De(M.process)?(void 0!==t&&(i.exitCode=t),e=rs.apply(this,arguments),Ya("exit",
i.exitCode,null),Ya("afterexit",i.exitCode,null),e):rs.apply(this,arguments)}):o.exports=function(){return function(){}}
,qs=o.exports,O={exports:{}},S=pu.default;let rc;if("function"==typeof S.getSystemErrorName
)O.exports=S.getSystemErrorName;else{try{if("function"!=typeof(rc=process.binding("uv")).errname)throw new TypeError(
"uv.errname is not a function")}catch(e){console.error("execa/lib/errname: unable to establish process.binding('uv')",e)
,rc=null}O.exports=e=>he(rc,e)}O.exports.__test__=he;const nc=["stdin","stdout","stderr"];{function oc(e,t,r){let n;
return(r=Object.assign({extendEnv:!0,env:{}},r)).extendEnv&&(r.env=Object.assign({},process.env,r.env)),
n=!0===r.__winShell?(delete r.__winShell,{command:e,args:t,options:r,file:e,original:{cmd:e,args:t}}):pl._parse(e,t,r),(
r=Object.assign({maxBuffer:1e7,buffer:!0,stripEof:!0,preferLocal:!0,localDir:n.options.cwd||process.cwd(),
encoding:"utf8",reject:!0,cleanup:!0},n.options)).stdio=(r=>{var t,n,e;if(!r)return null;if(r.stdio&&(t=r,nc.some(
e=>Boolean(t[e]))))throw new Error("It's not possible to provide `stdio` in combination with one of "+nc.map(
e=>`\`${e}\``).join(", "));if("string"==typeof r.stdio)return r.stdio;if(n=r.stdio||[],!Array.isArray(n)
)throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);const o=[];
e=Math.max(n.length,nc.length);for(let t=0;t<e;t++){let e=null;void 0!==n[t]?e=n[t]:void 0!==r[nc[t]]&&(e=r[nc[t]]),
o[t]=e}return o})(r),r.preferLocal&&(r.env=gl.env(Object.assign({},r,{cwd:r.localDir}))),r.detached&&(r.cleanup=!1),
"win32"===process.platform&&"cmd.exe"===fl.basename(n.command)&&n.args.unshift("/q"),{cmd:n.command,args:n.args,opts:r,
parsed:n}}function ic(e,t){return t&&e.stripEof?hl(t):t}function ac(e,t,r){let n="/bin/sh",o=["-c",t];
return r=Object.assign({},r),"win32"===process.platform&&(r.__winShell=!0,n=process.env.comspec||"cmd.exe",o=["/s","/c",
`"${t}"`],r.windowsVerbatimArguments=!0),r.shell&&(n=r.shell,delete r.shell),e(n,o,r)}function sc(r,n,{encoding:e,
buffer:t,maxBuffer:o}){if(!r[n])return null;let i;return(i=t?e?vl(r[n],{encoding:e,maxBuffer:o}):vl.buffer(r[n],{
maxBuffer:o}):new Promise((e,t)=>{r[n].once("end",e).once("error",t)})).catch(e=>{throw e.stream=n,
e.message=n+" "+e.message,e})}function uc(t,e){var{stdout:r,stderr:n}=t;let o=t.error;var{code:t,signal:i}=t,{parsed:a,
joinedCmd:s}=e,e=e.timedOut||!1;if(!o){let e="";Array.isArray(a.opts.stdio)?("inherit"!==a.opts.stdio[2]&&(
e+=0<e.length?n:`
`+n),"inherit"!==a.opts.stdio[1]&&(e+=`
`+r)):"inherit"!==a.opts.stdio&&(e=`
`+n+r),(o=new Error("Command failed: "+s+e)).code=t<0?wl(t):t}return o.stdout=r,o.stderr=n,o.failed=!0,o.signal=i||null,
o.cmd=s,o.timedOut=e,o}function cc(e,t){let r=e;return Array.isArray(t)&&0<t.length&&(r+=" "+t.join(" ")),r}Hs=Ns;
const fl=bu.default,dl=cu.default,pl=I.exports,hl=Js,gl=Ys.exports,ml=m.exports,vl=e.exports,yl=g,bl=o.exports,
wl=O.exports;Hs.exports=(e,t,r)=>{function n(){c.stdout&&c.stdout.destroy(),c.stderr&&c.stderr.destroy()}const o=oc(e,t,
r),{encoding:i,buffer:a,maxBuffer:s}=o.opts,u=cc(e,t);let c;try{c=dl.spawn(o.cmd,o.args,o.opts)}catch(e){
return Promise.reject(e)}let l,f=(o.opts.cleanup&&(l=bl(()=>{c.kill()})),null),d=!1;const p=()=>{f&&(clearTimeout(f),
f=null),l&&l()},h=(0<o.opts.timeout&&(f=setTimeout(()=>{f=null,d=!0,c.kill(o.opts.killSignal)},o.opts.timeout)),
new Promise(r=>{c.on("exit",(e,t)=>{p(),r({code:e,signal:t})}),c.on("error",e=>{p(),r({error:e})}),c.stdin&&c.stdin.on(
"error",e=>{p(),r({error:e})})})),g=()=>yl(Promise.all([h,sc(c,"stdout",{encoding:i,buffer:a,maxBuffer:s}),sc(c,"stderr"
,{encoding:i,buffer:a,maxBuffer:s})]).then(e=>{const t=e[0];if(t.stdout=e[1],t.stderr=e[2],
t.error||0!==t.code||null!==t.signal){const r=uc(t,{joinedCmd:u,parsed:o,timedOut:d});if(r.killed=r.killed||c.killed,
o.opts.reject)throw r;return r}return{stdout:ic(o.opts,t.stdout),stderr:ic(o.opts,t.stderr),code:0,failed:!1,killed:!1,
signal:null,cmd:u,timedOut:!1}}),n);return pl._enoent.hookChildProcess(c,o.parsed),r=c,null!=(e=o.opts.input)&&(ml(e
)?e.pipe(r.stdin):r.stdin.end(e)),c.then=(e,t)=>g().then(e,t),c.catch=e=>g().catch(e),c},Hs.exports.stdout=(...e
)=>Hs.exports(...e).then(e=>e.stdout),Hs.exports.stderr=(...e)=>Hs.exports(...e).then(e=>e.stderr),Hs.exports.shell=(e,t
)=>ac(Hs.exports,e,t),Hs.exports.sync=(e,t,r)=>{r=oc(e,t,r),e=cc(e,t);if(ml(r.opts.input))throw new TypeError(
"The `input` option cannot be a stream in sync mode");const n=dl.spawnSync(r.cmd,r.args,r.opts);if(n.code=n.status,
n.error||0!==n.status||null!==n.signal){if(t=uc(n,{joinedCmd:e,parsed:r}),r.opts.reject)throw t;return t}return{
stdout:ic(r.opts,n.stdout),stderr:ic(r.opts,n.stderr),code:0,failed:!1,signal:null,cmd:e,timedOut:!1}},
Hs.exports.shellSync=(e,t)=>ac(Hs.exports.sync,e,t)}u={},Object.defineProperty(u,"__esModule",{value:!0}),
u.ValidPackageFlags=new Set(["dev","exact","noSave","bundle","verbose"]),u.ValidProjectInstallFlags=new Set(["dryRun",
"verbose"]),u.defaultInstallConfig={dev:!1,prefer:null,exact:!1,noSave:!1,bundle:!1,verbose:!1,global:!1,stdio:"pipe",
cwd:process.cwd()},A={},c=M&&M.__extends||(Us=function(e,t){return(Us=Object.setPrototypeOf||{__proto__:[]
}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},
function(e,t){function r(){this.constructor=e}Us(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,
new r)}),Object.defineProperty(A,"__esModule",{value:!0}),A.getPackageList=function(e){return Array.isArray(e)?e.filter(
function(e){return"string"==typeof e}):Object.entries(e).filter(function(e){var t=e[0],e=e[1];
return"string"==typeof t&&"string"==typeof e||void 0===e}).map(function(e){var t=e[0],e=e[1];return e?t+"@"+e:t})},
A.getExecaConfig=function(e){return{stdio:e.stdio,cwd:e.cwd}},c(Le,Ws=Error),A.UnreachableCaseError=Le,l={},os={},
Object.defineProperty(os,"__esModule",{value:!0}),is=u,os.getFlagsToSet=function(e){return Object.entries(e).filter(
function(e){var t=e[0];return!!e[1]&&is.ValidPackageFlags.has(t)}).map(function(e){return e[0]})},Object.defineProperty(
l,"__esModule",{value:!0}),as=os,ss=A,l.constructNpmArguments=function(e,t){var r=as.getFlagsToSet(t),n=t.global?["-g"
]:[],o=["install"].concat(n,e),i=[];return r.forEach(function(e){switch(e){case"dev":t.global?i.push(e):o.push(
"--save-dev");break;case"exact":o.push("--save-exact");break;case"verbose":o.push("--verbose");break;case"bundle":
o.push("--save-bundle");break;case"noSave":o.push("--no-save");break;default:throw new ss.UnreachableCaseError(e)}}),{
args:o,ignoredFlags:i}},l.npmProjectInstallArgs=["install"],f={},x={},us=M&&M.__awaiter||function(i,a,s,u){return new(
s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}
}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
cs=M&&M.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(
!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){
u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{
i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0]
)throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},C=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
,Object.defineProperty(x,"__esModule",{value:!0}),ls=C(Ns.exports),fs=wu.default,ds=C(bu.default),T=pu.default,
ps=T.promisify(fs.access),x.isManagerInstalled=function(t){return us(this,void 0,void 0,function(){return cs(this,
function(e){switch(e.label){case 0:return[4,ls.default(t,["--version"])];case 1:return[2,!e.sent().failed]}})})},
x.isManagerInstalledSync=function(e){return!ls.default.sync(e,["--version"]).failed},
x.getCurrentPackageManager=function(){var e=process.env.npm_config_user_agent;return e?e.startsWith("npm"
)?"npm":e.startsWith("yarn")?"yarn":null:null},x.getPackageManagerFromLockfile=function(n){return us(this,void 0,void 0,
function(){var t,r;return cs(this,function(e){switch(e.label){case 0:t=ds.default.join(n.cwd,"package-lock.json"),
r=ds.default.join(n.cwd,"yarn.lock"),e.label=1;case 1:return e.trys.push([1,3,,8]),[4,ps(t)];case 2:return e.sent(),[2,
"npm"];case 3:e.sent(),e.label=4;case 4:return e.trys.push([4,6,,7]),[4,ps(r)];case 5:return e.sent(),[2,"yarn"];case 6:
return e.sent(),[2,null];case 7:return[3,8];case 8:return[2]}})})},x.getPackageManagerFromLockfileSync=function(t){
var e=ds.default.join(t.cwd,"package-lock.json"),t=ds.default.join(t.cwd,"yarn.lock");try{return fs.accessSync(e),"npm"
}catch(e){try{return fs.accessSync(t),"yarn"}catch(e){return null}}},hs=M&&M.__awaiter||function(i,a,s,u){return new(
s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function n(e){try{o(u.throw(e))}catch(e){t(e)}
}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n)}o((u=u.apply(i,a||[])).next())})},
gs=M&&M.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i)throw new TypeError(
"Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((s=a.return)&&s.call(a),0
):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:case 1:s=t;break;case 4:
return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;
default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(
!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(s&&u.label<s[2]){
u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e],a=0}finally{
i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(1&s[0]
)throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},Object.defineProperty(f,"__esModule",{value:!0}),ms=x,
f.getPackageManager=function(r){return hs(this,void 0,void 0,function(){var t;return gs(this,function(e){switch(e.label
){case 0:return(t=r.prefer||ms.getCurrentPackageManager())?[3,2]:[4,ms.getPackageManagerFromLockfile(r)];case 1:
t=e.sent(),e.label=2;case 2:return t=t||"npm",[4,ms.isManagerInstalled(t)];case 3:return e.sent()?[3,5]:(
t="npm"===t?"yarn":"npm",[4,ms.isManagerInstalled(t)]);case 4:if(!e.sent())throw new Error(
"No supported package manager found");e.label=5;case 5:return[2,t]}})})},f.getPackageManagerSync=function(e){var t=(
t=e.prefer||ms.getCurrentPackageManager())||ms.getPackageManagerFromLockfileSync(e);if(ms.isManagerInstalledSync(
t=t||"npm")||ms.isManagerInstalledSync(t="npm"===t?"yarn":"npm"))return t;throw new Error(
"No supported package manager found")},mu={},Object.defineProperty(mu,"__esModule",{value:!0}),vs=os,ys=A,
mu.constructYarnArguments=function(e,t){var r=vs.getFlagsToSet(t),n=(t.global?["global"]:[]).concat(["add"],e),o=[];
return r.forEach(function(e){switch(e){case"dev":t.global?o.push(e):n.push("--dev");break;case"exact":n.push("--exact");
break;case"verbose":n.push("--verbose");break;case"bundle":case"noSave":o.push(e);break;default:
throw new ys.UnreachableCaseError(e)}}),{args:n,ignoredFlags:o}},mu.yarnProjectInstallArgs=["install"],
bs=M&&M.__assign||function(){return(bs=Object.assign||function(e){for(var t,r,n=1,o=arguments.length;n<o;n++)for(
r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},
ws=M&&M.__awaiter||function(i,a,s,u){return new(s=s||Promise)(function(e,t){function r(e){try{o(u.next(e))}catch(e){t(e)
}}function n(e){try{o(u.throw(e))}catch(e){t(e)}}function o(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(r,n
)}o((u=u.apply(i,a||[])).next())})},xs=M&&M.__generator||function(n,o){function e(r){return function(e){var t=[r,e];if(i
)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,a&&(s=2&t[0]?a.return:t[0]?a.throw||((
s=a.return)&&s.call(a),0):a.next)&&!(s=s.call(a,t[1])).done)return s;switch(a=0,(t=s?[2&t[0],s.value]:t)[0]){case 0:
case 1:s=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,a=t[1],t=[0];continue;case 7:t=u.ops.pop(
),u.trys.pop();continue;default:if(!(s=0<(s=u.trys).length&&s[s.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(
3===t[0]&&(!s||t[1]>s[0]&&t[1]<s[3])){u.label=t[1];break}if(6===t[0]&&u.label<s[1]){u.label=s[1],s=t;break}if(
s&&u.label<s[2]){u.label=s[2],u.ops.push(t);break}s[2]&&u.ops.pop(),u.trys.pop();continue}t=o.call(n,u)}catch(e){t=[6,e]
,a=0}finally{i=s=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}var i,a,s,u={label:0,sent:function(){if(
1&s[0])throw s[1];return s[1]},trys:[],ops:[]},t={next:e(0),throw:e(1),return:e(2)};return"function"==typeof Symbol&&(
t[Symbol.iterator]=function(){return this}),t},Is=M&&M.__importDefault||function(e){return e&&e.__esModule?e:{default:e}
},Object.defineProperty(wa,"__esModule",{value:!0}),_s=Is(Ns.exports),Es=u,js=A,Os=l,Ss=f,Ps=mu,wa.install=function(i,a
){return void 0===a&&(a=Es.defaultInstallConfig),ws(this,void 0,void 0,function(){var t,r,n,o;return xs(this,function(e
){switch(e.label){case 0:return t=bs({},Es.defaultInstallConfig,a),[4,Ss.getPackageManager(t)];case 1:return o=e.sent(),
r=js.getPackageList(i),n="npm"===o?Os.constructNpmArguments:Ps.constructYarnArguments,n=n(r,t),r=n.args,n=n.ignoredFlags
,[4,_s.default(o,r,js.getExecaConfig(t))];case 2:return o=e.sent(),[2,bs({},o,{ignoredFlags:n})]}})})},
wa.installSync=function(e,t){var r,n;return void 0===t&&(t=Es.defaultInstallConfig),t=bs({},Es.defaultInstallConfig,t),
n=Ss.getPackageManagerSync(t),e=js.getPackageList(e),r=(e=("npm"===n?Os.constructNpmArguments:Ps.constructYarnArguments
)(e,t)).args,e=e.ignoredFlags,n=_s.default.sync(n,r,js.getExecaConfig(t)),bs({},n,{ignoredFlags:e})},
wa.projectInstall=function(o){return void 0===o&&(o=Es.defaultInstallConfig),ws(this,void 0,void 0,function(){var t,r,n;
return xs(this,function(e){switch(e.label){case 0:return t=bs({},Es.defaultInstallConfig,o),[4,Ss.getPackageManager(t)];
case 1:return r=e.sent(),n="npm"===r?Os.npmProjectInstallArgs:Ps.yarnProjectInstallArgs,[2,_s.default(r,n,
js.getExecaConfig(t))]}})})},wa.projectInstallSync=function(e){var t,r;return void 0===e&&(e=Es.defaultInstallConfig),
e=bs({},Es.defaultInstallConfig,e),r="npm"===(t=Ss.getPackageManagerSync(e)
)?Os.npmProjectInstallArgs:Ps.yarnProjectInstallArgs,_s.default.sync(t,r,js.getExecaConfig(e))},Vs=ba,
Object.defineProperty(Vs,"__esModule",{value:!0}),Be(wa),Be(f),E={exports:{}};
const lc="win32"===process.platform||"cygwin"===process.env.OSTYPE||"msys"===process.env.OSTYPE,fc=bu.default,
dc=lc?";":":",pc=ru,hc=e=>Object.assign(new Error("not found: "+e),{code:"ENOENT"}),gc=(e,t)=>{var r=t.colon||dc,
n=e.match(/\//)||lc&&e.match(/\\/)?[""]:[...lc?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(r)];
const o=lc?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=lc?o.split(r):[""];return lc&&-1!==e.indexOf("."
)&&""!==i[0]&&i.unshift(""),{pathEnv:n,pathExt:i,pathExtExe:o}},mc=((yu=(i,s,t)=>{"function"==typeof s&&(t=s,s={}),
s=s||{};const{pathEnv:a,pathExt:u,pathExtExe:c}=gc(i,s),l=[],f=o=>new Promise((e,t)=>{if(o===a.length
)return s.all&&l.length?e(l):t(hc(i));const r=a[o];var t=/^".*"$/.test(r)?r.slice(1,-1):r,n=fc.join(t,i),
t=!t&&/^\.[\\\/]/.test(i)?i.slice(0,2)+n:n;e(d(t,o,0))}),d=(o,i,a)=>new Promise((r,e)=>{if(a===u.length)return r(f(i+1))
const n=u[a];pc(o+n,{pathExt:c},(e,t)=>{if(!e&&t){if(!s.all)return r(o+n);l.push(o+n)}return r(d(o,i,a+1))})});
return t?f(0).then(e=>t(null,e),t):f(0)}).sync=(t,r)=>{r=r||{};var n,o,i,a,{pathEnv:s,pathExt:u,pathExtExe:c}=gc(t,r);
const l=[];for(let e=0;e<s.length;e++){const f=s[e];n=/^".*"$/.test(f)?f.slice(1,-1):f,o=fc.join(n,t),
i=!n&&/^\.[\\\/]/.test(t)?t.slice(0,2)+o:o;for(let e=0;e<u.length;e++){a=i+u[e];try{if(pc.sync(a,{pathExt:c})){if(!r.all
)return a;l.push(a)}}catch(e){}}}if(r.all&&l.length)return l;if(r.nothrow)return null;throw hc(t)},(Zs={exports:{}}
).exports=P=(e={})=>{var t=e.env||process.env;return"win32"!==(e.platform||process.platform)?"PATH":Object.keys(t
).reverse().find(e=>"PATH"===e.toUpperCase())||"Path"},Zs.exports.default=P,bu.default),vc=yu,yc=Zs.exports,bc=(
N=function(e){return me(e)||me(e,!0)},/([()\][%!^"`<>&|;, *?])/g),wc=((_={}).command=function(e){return e.replace(bc,
"^$1")},_.argument=function(e,t){return e=(e=`"${e=(e=(e=""+e).replace(/(\\*)"/g,'$1$1\\"')).replace(/(\\*)$/,"$1$1")}"`
).replace(bc,"^$1"),t?e.replace(bc,"^$1"):e},/^#!(.*)/),xc=wu.default,_c=(e="")=>{const t=e.match(wc);if(!t)return null;
const[r,n]=t[0].replace(/#! ?/,"").split(" ");e=r.split("/").pop();return"env"===e?n:n?e+" "+n:e},Ec=bu.default,jc=N,
Oc=_,Sc="win32"===process.platform,Pc=/\.(?:com|exe)$/i,Tc=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i,
kc="win32"===process.platform,Ac=cu.default,Ic={hookChildProcess:function(r,n){if(kc){const o=r.emit;r.emit=function(e,t
){if("exit"===e){e=ye(t,n);if(e)return o.call(r,"error",e)}return o.apply(r,arguments)}}},verifyENOENT:ye,
verifyENOENTSync:function(e,t){return kc&&1===e&&!t.file?ve(t.original,"spawnSync"):null},notFoundError:ve},Nc=(
E.exports=be,E.exports.spawn=be,E.exports.sync=function(e,t,r){e=Ve(e,t,r);const n=Ac.spawnSync(e.command,e.args,
e.options);return n.error=n.error||Ic.verifyENOENTSync(n.status,e),n},E.exports._parse=Ve,E.exports._enoent=Ic,
Ts=E.exports,["env"]),Cc=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),
Mc=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Rc=new WeakMap,Fc=(t,r={})=>{function n(...e){if(
Rc.set(n,++i),1===i)o=t.apply(this,e),t=null;else if(!0===r.throw)throw new Error(
`Function \`${a}\` can only be called once`);return o}if("function"!=typeof t)throw new TypeError("Expected a function")
let o,i=0;const a=t.displayName||t.name||"<anonymous>";var e,s,u,c,l,f,d,[p,h,{ignoreNonConfigurable:g=!1}={}]=[n,t],
m=p.name;for(const v of Reflect.ownKeys(h))e=p,l=h,s=v,u=g,
"length"!==s&&"prototype"!==s&&"arguments"!==s&&"caller"!==s&&(c=Object.getOwnPropertyDescriptor(e,s),
l=Object.getOwnPropertyDescriptor(l,s),void 0!==c&&!c.configurable&&(
c.writable!==l.writable||c.enumerable!==l.enumerable||c.configurable!==l.configurable||!c.writable&&c.value!==l.value
)&&u||Object.defineProperty(e,s,l));return f=p,(d=Object.getPrototypeOf(h))!==Object.getPrototypeOf(f
)&&Object.setPrototypeOf(f,d),f=p,d=h,m=""===m?"":`with ${m.trim()}() `,m=((e,t)=>`/* Wrapped ${e}*/
`+t).bind(null,m,d.toString()),Object.defineProperty(m,"name",Mc),Object.defineProperty(f,"toString",y(y({},Cc),{},{
value:m})),Rc.set(n,i),n},Gc=(Fc.callCount=e=>{if(Rc.has(e))return Rc.get(e);throw new Error(
`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`)},34),Dc=[{name:"SIGHUP",number:1,
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
description:"Invalid system call",standard:"other"}],Lc=function(){const e=ze();return e.reduce(Ue,{})}();{const xl=ze()
fu=Array.from({length:65},(e,t)=>{var r,n=xl,o=(r=t,void 0!==(o=(n=n).find(({name:e})=>vu.constants.signals[e]===r)
)?o:n.find(e=>e.number===r));if(void 0===o)return{};var{name:n,description:o,supported:i,action:a,forced:s,standard:u}=o
return{[t]:{name:n,number:t,description:o,supported:i,action:a,forced:s,standard:u}}}),Object.assign({},...fu)}
const Bc=({timedOut:e,timeout:t,errorCode:r,signal:n,signalDescription:o,exitCode:i,isCanceled:a}
)=>e?`timed out after ${t} milliseconds`:a?"was canceled":void 0!==r?"failed with "+r:void 0!==n?`was killed with ${n} (${o})`:void 0!==i?"failed with exit code "+i:"failed"
,$c=({stdout:e,stderr:t,all:r,error:n,signal:o,exitCode:i,command:a,escapedCommand:s,timedOut:u,isCanceled:c,killed:l,
parsed:{options:{timeout:f}}})=>{var d,p;i=null===i?void 0:i,d=void 0===(o=null===o?void 0:o)?void 0:Lc[o].description,
p=n&&n.code,f=`Command ${Bc({timedOut:u,timeout:f,errorCode:p,signal:o,signalDescription:d,exitCode:i,isCanceled:c}
)}: `+a;const h=(p="[object Error]"===Object.prototype.toString.call(n))?f+`
`+n.message:f;return f=[h,t,e].filter(Boolean).join("\n"),p?(n.originalMessage=n.message,n.message=f):n=new Error(f),
n.shortMessage=h,n.command=a,n.escapedCommand=s,n.exitCode=i,n.signal=o,n.signalDescription=d,n.stdout=e,n.stderr=t,
void 0!==r&&(n.all=r),"bufferedData"in n&&delete n.bufferedData,n.failed=!0,n.timedOut=Boolean(u),n.isCanceled=c,
n.killed=l&&!u,n},zc=["stdin","stdout","stderr"],Uc=(d={exports:{}},lu.default.PassThrough),Wc=hu.default.constants,Vc=(
du=lu.default,pu.default.promisify),qc=Vc(du.pipeline);class Hc extends Error{constructor(){super("maxBuffer exceeded"),
this.name="MaxBufferError"}}d.exports=xe,d.exports.buffer=(e,t)=>xe(e,y(y({},t),{},{encoding:"buffer"})),
d.exports.array=(e,t)=>xe(e,y(y({},t),{},{array:!0})),d.exports.MaxBufferError=Hc,ks=d.exports;
const Zc=lu.default.PassThrough,Jc=(As=function(){function t(e){return Array.isArray(e)?e.forEach(t):(n.push(e),e.once(
"end",r.bind(null,e)),e.once("error",o.emit.bind(o,"error")),e.pipe(o,{end:!1})),this}function r(t){!(n=n.filter(
function(e){return e!==t})).length&&o.readable&&o.end()}var n=[],o=new Zc({objectMode:!0});return o.setMaxListeners(0),
o.add=t,o.isEmpty=function(){return 0==n.length},o.on("unpipe",r),Array.prototype.slice.call(arguments).forEach(t),o},
async(e,t)=>{if(e){e.destroy();try{return await t}catch(e){return e.bufferedData}}}),Yc=(e,{encoding:t,buffer:r,
maxBuffer:n})=>{if(e&&r)return t?ks(e,{encoding:t,maxBuffer:n}):ks.buffer(e,{maxBuffer:n})},Xc=(async()=>{})(
).constructor.prototype,Kc=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Xc,e)]),Qc=(e,t)=>{for(
const[n,o]of Kc){var r="function"==typeof t?(...e)=>Reflect.apply(o.value,t(),e):o.value.bind(t);Reflect.defineProperty(
e,n,y(y({},o),{},{value:r}))}return e},el=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],tl=/^[\w.-]+$/,rl=/"/g,nl=(e,t,r)=>{
return"string"==typeof t||gu.Buffer.isBuffer(t)?e.stripFinalNewline?(n="string"==typeof(e=t)?"\n":"\n".charCodeAt(),
o="string"==typeof e?"\r":"\r".charCodeAt(),(e=e[e.length-1]===n?e.slice(0,-1):e)[e.length-1]===o?e.slice(0,-1):e
):t:void 0===r?void 0:"";var n,o},ol=Cu.createLogger("initPackage"),il=Cu.createLogger("GitUtils");class al{
static getGitDir(e){let t=e,r=t;do{if(il.debug("getGitDir: Searching git directory from ",t),t=r,R.fileExists(k.resolve(
t,".git")))return t}while((r=k.dirname(t))!==t)}static async initGit(){var e=al.getGitDir(process.cwd());e?il.warn(
"Warning! Git directory already exists: ",e):(il.debug("Creating git directory"),await al._git(["init"]))}
static async addFiles(e){var t=Z(e)?[e]:e;il.debug("addFiles: Adding files: ",e),await al._git(["add",...t])}
static async commit(e){il.debug("commit with: ",e),await al._git(["commit","-m",e])}static async renameMainBranch(e){
il.debug("rename branch: ",e),await al._git(["branch","-M",e])}static async addSubModule(e,t){R.fileExists(t)?il.warn(
"Warning! Git sub module directory already exists: ",t):await al._git(["submodule","add",e,t])}
static async setSubModuleBranch(e,t){await al._git(["config","-f",".gitmodules",`submodule.${e}.branch`,t])}
static async initSubModule(e,t,r){var n=k.dirname(t);il.debug("initSubModule: Creating: ",n),R.mkdirp(n),il.debug(
"initSubModule: Adding submodule: ",e,t),await al.addSubModule(e,t),il.debug("initSubModule: Configuring branch for ",e,
t,": ",r),await al.setSubModuleBranch(t,r)}static async _git(e){await _e("git",e,{stdio:"inherit"})}}
const sl=Cu.createLogger("createPackage"),ul=(Js=null!=(I=null==(a=process)||null==(S=a.env)?void 0:S.LOG_LEVEL
)?I:"INFO",Cu.createLogger("main"));(Ys=function(e){if(e){if(function(){switch(e){case r.DEBUG:case r.INFO:case r.WARN:
case r.ERROR:case r.NONE:return 1;default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":
return r.DEBUG;case"INFO":return r.INFO;case"WARN":case"WARNING":return r.WARN;case"ERR":case"ERROR":return r.ERROR;
case"FALSE":case"OFF":case"QUIET":case"SILENT":case"NONE":return r.NONE;default:return}}}(Js))&&(ul.debug(
"Setting log level as ",Ys),Cu.setLogLevel(Ys)),async function(t){const r=Mu.createFromTemplateFile(t);
r.setPackageJsonModifier(function(e,t){var r=null!=(r=te(null==e?void 0:e.scripts))?r:{},n=null!=(n=te(
null==e?void 0:e.bin))?n:{},o=null!=(o=te(null==e?void 0:e.dependencies))?o:{},i=t.getDistFile(),a=t.getMainName(),
t=t.getMainSourceFileName(),s=H(null==e?void 0:e.keywords,Z)?null==e?void 0:e.keywords:[];return G(G({},e),{},{
private:!0,main:i,bin:G(G({},n),{},{[a]:i}),keywords:[...s,"typescript","backend","rest","nodejs","spring","spring-boot"
],scripts:G(G({},r),{},{"start-prod":"node "+i,start:"ts-node "+t,build:"rollup -c"}),dependencies:{},devDependencies:o}
)});{var n,o,i,a,t=r;let e=process.cwd();if((n=process.argv.slice(2).filter(e=>!e.startsWith("-")).shift())&&(
n=k.resolve(e,n),sl.debug("Creating project directory: ",n),R.mkdirp(n),process.chdir(n),e=n),n={dev:!1,exact:!1,
noSave:!1,bundle:!1,verbose:!1,global:!1,prefer:t.getPreferredPackageSystem()===ya.YARN?"yarn":"npm",stdio:"inherit",
cwd:e},sl.debug("Initial install config: ",n),o=re(await ba.getPackageManager(n)),sl.debug(
"Initializing package.json using ",o),o=o,a=process.argv.slice(2).filter(e=>e.startsWith("-")),ol.debug("Executing: ",o,
"init",...a),await _e(o,["init",...a],{stdio:"inherit"}),o=k.resolve("package.json"),R.fileExists(o)){
t.setPackageDirectory(k.dirname(o));const s=t.getPackageDirectory(),u=(a=t.getMainName(),i=(new Date).getFullYear(),{
"GIT-ORGANISATION":t.getGitOrganization(),"ORGANISATION-NAME":t.getOrganizationName(),
"ORGANISATION-EMAIL":t.getOrganizationEmail(),"CURRENT-YEAR":""+i,"PROJECT-NAME":a,projectName:va(a)}),c=t.getFiles(),
l=t.getRenameFiles(),f=Yo(ao(c,e=>{let t=e;return Ii(l,e)&&(t=l[e]),k.dirname(t)})),d=t.getTemplatesDirectory();if(
f.forEach(e=>{e=k.resolve(s,e);sl.debug("Creating directory: ",e),R.mkdirp(e)}),sl.debug("Initializing git if necessary"
),await al.initGit(),c.forEach(e=>{let t=e;Ii(l,e)&&(t=l[e]),R.copyTextFileWithReplacementsIfMissing(k.resolve(d,e),
k.resolve(s,t),u)}),R.copyTextFileWithReplacementsIfMissing(k.resolve(d,t.getMainSourceFileTemplate()),k.resolve(s,
t.getMainSourceFileName()),u),!ee(i=R.readJsonFile(o)))throw new TypeError("package.json was invalid");
const p=t.getPackageJsonModifier();a=p(i,t),Zi(a,i)?sl.warn("Warning! No changes to package.json detected"
):R.writeJsonFile(o,a),await Go(t.getGitSubmodules(),async(e,t)=>{await e;var{url:e,path:t,branch:r}=t;sl.debug(
`Initializing core git submodule from ${e} and branch ${r} to `+t),await al.initSubModule(e,k.resolve(".",t),
null!=r?r:"main")},Promise.resolve()),i=t.getPackages(),sl.debug("Installing packages: ",i),await ba.install(ao(i,e=>e),
n),sl.debug("Adding files to git"),await al.addFiles(["."]),sl.debug("Initial git commit"),await al.commit(
t.getGitCommitMessage()),a=t.getGitBranch(),sl.debug(`Renaming main git branch to '${a}'`),await al.renameMainBranch(a)
}else sl.warn("Warning! package.json did not exist: ",o)}}(k.resolve(__dirname,"../create.config.json")).catch(e=>{
console.error(e)});
