!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){const n=t(1);function o(e){console.debug("checkVersion");var r=e.version;console.debug("Running version: "+r.slug);e.project.slug;$.ajax({url:e.meta.api_url+"_static/documentation_options.js",success:function(t){highest_version={slug:t.match(/.*VERSION.*'(.*)'/)[1]},n.valid(n.coerce(r.slug))&&n.valid(n.coerce(highest_version.slug))&&n.lt(n.coerce(r.slug),n.coerce(highest_version.slug))&&(console.debug("Highest version: "+highest_version.slug),function(e,r,t){console.debug("injectVersionWarningBanner");var n=window.location.pathname.replace(e.slug,r.slug),o=$(t.banner.html);o.find("a").attr("href",n).text(r.slug),$(t.banner.body_selector).prepend(o)}(r,highest_version,e))},error:function(){console.error("Error loading Read the Docs active versions.")}})}function i(){console.debug("init");var e=$("script[src*=versionwarning]").attr("src");e=e.replace("versionwarning.js",""),$.ajax({url:e+"../../_static/data/versionwarning-data.json",success:function(e){document.getElementById(e.banner.id_div)?console.debug("There is already a banner added. No checking versions."):e.banner.custom?function(e){console.debug("injectCustomWarningBanner");var r=$(e.banner.html);$(e.banner.body_selector).prepend(r)}(e):o(e)},error:function(){console.error("Error loading versionwarning-data.json")}})}$(document).ready((function(){i()}))},function(e,r,t){(function(t){var n;r=e.exports=W,n="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var o=Number.MAX_SAFE_INTEGER||9007199254740991,i=r.re=[],s=r.src=[],a=0,u=a++;s[u]="0|[1-9]\\d*";var c=a++;s[c]="[0-9]+";var l=a++;s[l]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var p=a++;s[p]="("+s[u]+")\\.("+s[u]+")\\.("+s[u]+")";var h=a++;s[h]="("+s[c]+")\\.("+s[c]+")\\.("+s[c]+")";var f=a++;s[f]="(?:"+s[u]+"|"+s[l]+")";var v=a++;s[v]="(?:"+s[c]+"|"+s[l]+")";var m=a++;s[m]="(?:-("+s[f]+"(?:\\."+s[f]+")*))";var g=a++;s[g]="(?:-?("+s[v]+"(?:\\."+s[v]+")*))";var d=a++;s[d]="[0-9A-Za-z-]+";var w=a++;s[w]="(?:\\+("+s[d]+"(?:\\."+s[d]+")*))";var y=a++,b="v?"+s[p]+s[m]+"?"+s[w]+"?";s[y]="^"+b+"$";var j="[v=\\s]*"+s[h]+s[g]+"?"+s[w]+"?",E=a++;s[E]="^"+j+"$";var T=a++;s[T]="((?:<|>)?=?)";var $=a++;s[$]=s[c]+"|x|X|\\*";var _=a++;s[_]=s[u]+"|x|X|\\*";var x=a++;s[x]="[v=\\s]*("+s[_]+")(?:\\.("+s[_]+")(?:\\.("+s[_]+")(?:"+s[m]+")?"+s[w]+"?)?)?";var S=a++;s[S]="[v=\\s]*("+s[$]+")(?:\\.("+s[$]+")(?:\\.("+s[$]+")(?:"+s[g]+")?"+s[w]+"?)?)?";var R=a++;s[R]="^"+s[T]+"\\s*"+s[x]+"$";var P=a++;s[P]="^"+s[T]+"\\s*"+s[S]+"$";var k=a++;s[k]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var I=a++;s[I]="(?:~>?)";var V=a++;s[V]="(\\s*)"+s[I]+"\\s+",i[V]=new RegExp(s[V],"g");var O=a++;s[O]="^"+s[I]+s[x]+"$";var M=a++;s[M]="^"+s[I]+s[S]+"$";var N=a++;s[N]="(?:\\^)";var A=a++;s[A]="(\\s*)"+s[N]+"\\s+",i[A]=new RegExp(s[A],"g");var C=a++;s[C]="^"+s[N]+s[x]+"$";var L=a++;s[L]="^"+s[N]+s[S]+"$";var B=a++;s[B]="^"+s[T]+"\\s*("+j+")$|^$";var D=a++;s[D]="^"+s[T]+"\\s*("+b+")$|^$";var q=a++;s[q]="(\\s*)"+s[T]+"\\s*("+j+"|"+s[x]+")",i[q]=new RegExp(s[q],"g");var X=a++;s[X]="^\\s*("+s[x]+")\\s+-\\s+("+s[x]+")\\s*$";var z=a++;s[z]="^\\s*("+s[S]+")\\s+-\\s+("+s[S]+")\\s*$";var G=a++;s[G]="(<|>)?=?\\s*\\*";for(var U=0;U<35;U++)n(U,s[U]),i[U]||(i[U]=new RegExp(s[U]));function Z(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof W)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(r.loose?i[E]:i[y]).test(e))return null;try{return new W(e,r)}catch(e){return null}}function W(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof W){if(e.loose===r.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof W))return new W(e,r);n("SemVer",e,r),this.options=r,this.loose=!!r.loose;var t=e.trim().match(r.loose?i[E]:i[y]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<o)return r}return e})):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}r.parse=Z,r.valid=function(e,r){var t=Z(e,r);return t?t.version:null},r.clean=function(e,r){var t=Z(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null},r.SemVer=W,W.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},W.prototype.toString=function(){return this.version},W.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof W||(e=new W(e,this.options)),this.compareMain(e)||this.comparePre(e)},W.prototype.compareMain=function(e){return e instanceof W||(e=new W(e,this.options)),H(this.major,e.major)||H(this.minor,e.minor)||H(this.patch,e.patch)},W.prototype.comparePre=function(e){if(e instanceof W||(e=new W(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],o=e.prerelease[r];if(n("prerelease compare",r,t,o),void 0===t&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===t)return-1;if(t!==o)return H(t,o)}while(++r)},W.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;--t>=0;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new W(e,t).inc(r,n).version}catch(e){return null}},r.diff=function(e,r){if(Y(e,r))return null;var t=Z(e),n=Z(r),o="";if(t.prerelease.length||n.prerelease.length){o="pre";var i="prerelease"}for(var s in t)if(("major"===s||"minor"===s||"patch"===s)&&t[s]!==n[s])return o+s;return i},r.compareIdentifiers=H;var F=/^[0-9]+$/;function H(e,r){var t=F.test(e),n=F.test(r);return t&&n&&(e=+e,r=+r),e===r?0:t&&!n?-1:n&&!t?1:e<r?-1:1}function J(e,r,t){return new W(e,t).compare(new W(r,t))}function K(e,r,t){return J(e,r,t)>0}function Q(e,r,t){return J(e,r,t)<0}function Y(e,r,t){return 0===J(e,r,t)}function ee(e,r,t){return 0!==J(e,r,t)}function re(e,r,t){return J(e,r,t)>=0}function te(e,r,t){return J(e,r,t)<=0}function ne(e,r,t,n){switch(r){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e===t;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),e!==t;case"":case"=":case"==":return Y(e,t,n);case"!=":return ee(e,t,n);case">":return K(e,t,n);case">=":return re(e,t,n);case"<":return Q(e,t,n);case"<=":return te(e,t,n);default:throw new TypeError("Invalid operator: "+r)}}function oe(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof oe){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof oe))return new oe(e,r);n("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===ie?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}r.rcompareIdentifiers=function(e,r){return H(r,e)},r.major=function(e,r){return new W(e,r).major},r.minor=function(e,r){return new W(e,r).minor},r.patch=function(e,r){return new W(e,r).patch},r.compare=J,r.compareLoose=function(e,r){return J(e,r,!0)},r.rcompare=function(e,r,t){return J(r,e,t)},r.sort=function(e,t){return e.sort((function(e,n){return r.compare(e,n,t)}))},r.rsort=function(e,t){return e.sort((function(e,n){return r.rcompare(e,n,t)}))},r.gt=K,r.lt=Q,r.eq=Y,r.neq=ee,r.gte=re,r.lte=te,r.cmp=ne,r.Comparator=oe;var ie={};function se(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof se)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new se(e.raw,r);if(e instanceof oe)return new se(e.value,r);if(!(this instanceof se))return new se(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function ae(e){return!e||"x"===e.toLowerCase()||"*"===e}function ue(e,r,t,n,o,i,s,a,u,c,l,p,h){return((r=ae(t)?"":ae(n)?">="+t+".0.0":ae(o)?">="+t+"."+n+".0":">="+r)+" "+(a=ae(u)?"":ae(c)?"<"+(+u+1)+".0.0":ae(l)?"<"+u+"."+(+c+1)+".0":p?"<="+u+"."+c+"."+l+"-"+p:"<="+a)).trim()}function ce(e,r,t){for(var o=0;o<e.length;o++)if(!e[o].test(r))return!1;if(r.prerelease.length&&!t.includePrerelease){for(o=0;o<e.length;o++)if(n(e[o].semver),e[o].semver!==ie&&e[o].semver.prerelease.length>0){var i=e[o].semver;if(i.major===r.major&&i.minor===r.minor&&i.patch===r.patch)return!0}return!1}return!0}function le(e,r,t){try{r=new se(r,t)}catch(e){return!1}return r.test(e)}function pe(e,r,t,n){var o,i,s,a,u;switch(e=new W(e,n),r=new se(r,n),t){case">":o=K,i=te,s=Q,a=">",u=">=";break;case"<":o=Q,i=re,s=K,a="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(le(e,r,n))return!1;for(var c=0;c<r.set.length;++c){var l=r.set[c],p=null,h=null;if(l.forEach((function(e){e.semver===ie&&(e=new oe(">=0.0.0")),p=p||e,h=h||e,o(e.semver,p.semver,n)?p=e:s(e.semver,h.semver,n)&&(h=e)})),p.operator===a||p.operator===u)return!1;if((!h.operator||h.operator===a)&&i(e,h.semver))return!1;if(h.operator===u&&s(e,h.semver))return!1}return!0}oe.prototype.parse=function(e){var r=this.options.loose?i[B]:i[D],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new W(t[2],this.options.loose):this.semver=ie},oe.prototype.toString=function(){return this.value},oe.prototype.test=function(e){return n("Comparator.test",e,this.options.loose),this.semver===ie||("string"==typeof e&&(e=new W(e,this.options)),ne(e,this.operator,this.semver,this.options))},oe.prototype.intersects=function(e,r){if(!(e instanceof oe))throw new TypeError("a Comparator is required");var t;if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return t=new se(e.value,r),le(this.value,t,r);if(""===e.operator)return t=new se(this.value,r),le(e.semver,t,r);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),o=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=ne(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=ne(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||o||i&&s||a||u},r.Range=se,se.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},se.prototype.toString=function(){return this.range},se.prototype.parseRange=function(e){var r=this.options.loose;e=e.trim();var t=r?i[z]:i[X];e=e.replace(t,ue),n("hyphen replace",e),e=e.replace(i[q],"$1$2$3"),n("comparator trim",e,i[q]),e=(e=(e=e.replace(i[V],"$1~")).replace(i[A],"$1^")).split(/\s+/).join(" ");var o=r?i[B]:i[D],s=e.split(" ").map((function(e){return function(e,r){return n("comp",e,r),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){n("caret",e,r);var t=r.loose?i[L]:i[C];return e.replace(t,(function(r,t,o,i,s){var a;return n("caret",e,r,t,o,i,s),ae(t)?a="":ae(o)?a=">="+t+".0.0 <"+(+t+1)+".0.0":ae(i)?a="0"===t?">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":">="+t+"."+o+".0 <"+(+t+1)+".0.0":s?(n("replaceCaret pr",s),a="0"===t?"0"===o?">="+t+"."+o+"."+i+"-"+s+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+"-"+s+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+"-"+s+" <"+(+t+1)+".0.0"):(n("no pr"),a="0"===t?"0"===o?">="+t+"."+o+"."+i+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+" <"+(+t+1)+".0.0"),n("caret return",a),a}))}(e,r)})).join(" ")}(e,r),n("caret",e),e=function(e,r){return e.trim().split(/\s+/).map((function(e){return function(e,r){var t=r.loose?i[M]:i[O];return e.replace(t,(function(r,t,o,i,s){var a;return n("tilde",e,r,t,o,i,s),ae(t)?a="":ae(o)?a=">="+t+".0.0 <"+(+t+1)+".0.0":ae(i)?a=">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":s?(n("replaceTilde pr",s),a=">="+t+"."+o+"."+i+"-"+s+" <"+t+"."+(+o+1)+".0"):a=">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0",n("tilde return",a),a}))}(e,r)})).join(" ")}(e,r),n("tildes",e),e=function(e,r){return n("replaceXRanges",e,r),e.split(/\s+/).map((function(e){return function(e,r){e=e.trim();var t=r.loose?i[P]:i[R];return e.replace(t,(function(r,t,o,i,s,a){n("xRange",e,r,t,o,i,s,a);var u=ae(o),c=u||ae(i),l=c||ae(s);return"="===t&&l&&(t=""),u?r=">"===t||"<"===t?"<0.0.0":"*":t&&l?(c&&(i=0),s=0,">"===t?(t=">=",c?(o=+o+1,i=0,s=0):(i=+i+1,s=0)):"<="===t&&(t="<",c?o=+o+1:i=+i+1),r=t+o+"."+i+"."+s):c?r=">="+o+".0.0 <"+(+o+1)+".0.0":l&&(r=">="+o+"."+i+".0 <"+o+"."+(+i+1)+".0"),n("xRange return",r),r}))}(e,r)})).join(" ")}(e,r),n("xrange",e),e=function(e,r){return n("replaceStars",e,r),e.trim().replace(i[G],"")}(e,r),n("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(s=s.filter((function(e){return!!e.match(o)}))),s=s.map((function(e){return new oe(e,this.options)}),this)},se.prototype.intersects=function(e,r){if(!(e instanceof se))throw new TypeError("a Range is required");return this.set.some((function(t){return t.every((function(t){return e.set.some((function(e){return e.every((function(e){return t.intersects(e,r)}))}))}))}))},r.toComparators=function(e,r){return new se(e,r).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},se.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new W(e,this.options));for(var r=0;r<this.set.length;r++)if(ce(this.set[r],e,this.options))return!0;return!1},r.satisfies=le,r.maxSatisfying=function(e,r,t){var n=null,o=null;try{var i=new se(r,t)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(n&&-1!==o.compare(e)||(o=new W(n=e,t)))})),n},r.minSatisfying=function(e,r,t){var n=null,o=null;try{var i=new se(r,t)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(n&&1!==o.compare(e)||(o=new W(n=e,t)))})),n},r.minVersion=function(e,r){e=new se(e,r);var t=new W("0.0.0");if(e.test(t))return t;if(t=new W("0.0.0-0"),e.test(t))return t;t=null;for(var n=0;n<e.set.length;++n){e.set[n].forEach((function(e){var r=new W(e.semver.version);switch(e.operator){case">":0===r.prerelease.length?r.patch++:r.prerelease.push(0),r.raw=r.format();case"":case">=":t&&!K(t,r)||(t=r);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}if(t&&e.test(t))return t;return null},r.validRange=function(e,r){try{return new se(e,r).range||"*"}catch(e){return null}},r.ltr=function(e,r,t){return pe(e,r,"<",t)},r.gtr=function(e,r,t){return pe(e,r,">",t)},r.outside=pe,r.prerelease=function(e,r){var t=Z(e,r);return t&&t.prerelease.length?t.prerelease:null},r.intersects=function(e,r,t){return e=new se(e,t),r=new se(r,t),e.intersects(r)},r.coerce=function(e){if(e instanceof W)return e;if("string"!=typeof e)return null;var r=e.match(i[k]);if(null==r)return null;return Z(r[1]+"."+(r[2]||"0")+"."+(r[3]||"0"))}}).call(this,t(2))},function(e,r){var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,p=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):p=-1,c.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var r=c.length;r;){for(u=c,c=[];++p<r;)u&&u[p].run();p=-1,r=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function v(e,r){this.fun=e,this.array=r}function m(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new v(e,r)),1!==c.length||l||a(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}]);