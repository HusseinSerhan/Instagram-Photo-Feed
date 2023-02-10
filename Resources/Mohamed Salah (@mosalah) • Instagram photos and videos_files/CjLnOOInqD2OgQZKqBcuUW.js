;/*FB_PKG_DELIM*/

__d("PolarisPostModalContext_media.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisPostModalContext_media",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{args:null,kind:"FragmentSpread",name:"PolarisPostFastOptionFavorite_items"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisPostShareUtils",["PolarisLinkBuilder","nullthrows","polarisGetPostFromGraphMediaInterface"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return(b==null?void 0:b.isPrivate)!==!0&&a.viewerCanReshare===!0}function b(a){return a.igMediaSharingDisabled!==!0}function h(a){var b=c("nullthrows")(a.code);if(d("polarisGetPostFromGraphMediaInterface").isIGTVPost(a))return d("PolarisLinkBuilder").buildFelixMediaLink(b);else if(d("polarisGetPostFromGraphMediaInterface").isClipsPost(a))return d("PolarisLinkBuilder").buildClipsMediaLink(b);return d("PolarisLinkBuilder").buildMediaLink(b)}function e(a){var b;b=((b=a.shareIds)==null?void 0:b.copy)||"";a=window.location.origin+h(a);return b.length>0?a+"?utm_source=ig_web_copy_link&igshid="+b:a+"?utm_source=ig_web_copy_link"}g.getIsShareable=a;g.getIsMediaQuarantinedForShare=b;g.getShareURL=h;g.getCopyUrl=e}),98);
__d("usePolarisShowToast",["PolarisReactRedux","PolarisToastActions"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("PolarisReactRedux").useDispatch();return function(b){a(d("PolarisToastActions").showToast(b))}}g["default"]=a}),98);
__d("PolarisIGCoreCheckPanoOutlineIcon",["PolarisIGCoreSVGIcon","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("PolarisIGCoreSVGIcon"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:h.jsx("polyline",{fill:"none",points:"22 5 9.002 17.998 2.005 11.004",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("PolarisPostModalContext.next",["CometRelay","PolarisPostModalContext.react","PolarisPostModalContext_media.graphql","getPolarisPostIdFromNativeId","polarisPostSelectors","react","usePolarisSelector"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useMemo,k=h!==void 0?h:h=b("PolarisPostModalContext_media.graphql"),l=i.createContext(null);function a(a){var b=a.children;a=a.queryReference;var e=d("CometRelay").useFragment(k,a),f=c("getPolarisPostIdFromNativeId")(e.id);a=c("usePolarisSelector")(function(a){return d("polarisPostSelectors").getPostById(a,f)});var g=j(function(){return{favoritesFragmentKey:e}},[e]);return i.jsx(l.Provider,{value:g,children:i.jsx(d("PolarisPostModalContext.react").PostModalContext,{post:a,children:b},a.id)})}a.displayName=a.name+" [from "+f.id+"]";g.PostModalContext=l;g.PolarisPostModalContextProvider=a}),98);
__d("ActorURI",["ActorURIConfig","URI"],(function(a,b,c,d,e,f,g){function a(a,b){return new(c("URI"))(a).addQueryData(c("ActorURIConfig").PARAMETER_ACTOR,b)}g.create=a;g.PARAMETER_ACTOR=c("ActorURIConfig").PARAMETER_ACTOR}),98);
__d("Clipboard",["Promise","UserAgent"],(function(a,b,c,d,e,f,g){function a(){return window.document&&window.document.queryCommandSupported instanceof Function&&window.document.queryCommandSupported("copy")&&!(c("UserAgent").isBrowser("Firefox < 41")||c("UserAgent").isPlatform("iOS < 10.3"))||c("UserAgent").isBrowser("Chrome >= 43")}function h(a,b){b=b||document.body;if(!b)return!1;var d=document.activeElement,e=!0,f=document.createElement("textarea");b.appendChild(f);f.value=a;if(c("UserAgent").isPlatform("iOS >= 10.3")){a=document.createRange();a.selectNodeContents(f);var g=window.getSelection();g.removeAllRanges();g.addRange(a);f.setSelectionRange(0,999999)}else f.select();try{e=document.execCommand("copy")}catch(a){e=!1}b.removeChild(f);d!=null&&d.focus();return e}function d(a){var c=window.navigator;if(c&&c.clipboard&&typeof c.clipboard.writeText==="function")return c.clipboard.writeText(a);return h(a)?b("Promise").resolve():b("Promise").reject()}g.isSupported=a;g.copy=h;g.copyAsync=d}),98);
__d("asset",[],(function(a,b,c,d,e,f){function a(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];throw new Error("asset("+b.join(",")+"): Unexpected asset reference")}e.exports=a}),null);
__d("QuickLogClientConfigSamplingType",[],(function(a,b,c,d,e,f){a=Object.freeze({EVENT_BASED:1,SESSION_BASED:2,USER_BASED:3});f["default"]=a}),66);
__d("fbjs/lib/emptyFunction",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=b("emptyFunction")}),null);
__d("fbjs/lib/invariant",["invariant"],(function(a,b,c,d,e,f){"use strict";e.exports=b("invariant")}),null);
__d("fbjs/lib/warning",["warning"],(function(a,b,c,d,e,f){"use strict";e.exports=b("warning")}),null);
__d("prop-types/lib/ReactPropTypesSecret",[],(function(a,b,c,d,e,f){"use strict";a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=a}),null);
__d("prop-types/checkPropTypes",["fbjs/lib/invariant","fbjs/lib/warning","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){"use strict";var g;function a(a,b,c,d,e){}e.exports=a}),null);
__d("ReactFbPropTypes",["FbtResultBase","warning"],(function(a,b,c,d,e,f){function a(a){var c=function(c,d,e,f,g,h,i){var j=d[e];if(j instanceof b("FbtResultBase"))return null;if(c)return a.isRequired(d,e,f,g,h,i);else return a(d,e,f,g,h,i)},d=c.bind(null,!1);d.isRequired=c.bind(null,!0);return d}f.wrapStringTypeChecker=a}),null);
__d("prop-types/prop-types",["fbjs/lib/emptyFunction","fbjs/lib/invariant","fbjs/lib/warning","prop-types/checkPropTypes","prop-types/lib/ReactPropTypesSecret"],(function(a,b,c,d,e,f){var g,h=function(){b("fbjs/lib/invariant")(0,1492)};a=function(){return h};h.isRequired=h;c={array:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:a,element:h,instanceOf:a,node:h,objectOf:a,oneOf:a,oneOfType:a,shape:a};c.checkPropTypes=b("fbjs/lib/emptyFunction");c.PropTypes=c;e.exports=c}),null);
__d("prop-types",["ReactFbPropTypes","prop-types/prop-types"],(function(a,b,c,d,e,f){e.exports=b("prop-types/prop-types")}),null);
__d("WebBloksErrors",[],(function(a,b,c,d,e,f){a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.message="[WebBloks] "+b+(c?": "+c.toString():"");d.name=d.constructor.name;c&&(d.cause=c,c.stack&&(d.stack=c.stack));d.stack||(typeof process==="undefined"||process.env.JEST_WORKER_ID===void 0)&&(d.stack=new Error(d.message).stack);return d}return b}(babelHelpers.wrapNativeSuper(Error));b=function(a){babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,"Unable to find component with id="+b)||this}return b}(a);c=function(a){babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,"Error while fetching data",b)||this}return b}(a);d=function(a){babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,"Script error: "+b)||this}return b}(a);e=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){return a.call(this,"Script parse error at position "+b+": "+c)||this}return b}(a);var g=function(b){babelHelpers.inheritsLoose(a,b);function a(a){return b.call(this,'Action for "'+a+'" was not registered.')||this}return a}(a),h=function(b){babelHelpers.inheritsLoose(a,b);function a(a){return b.call(this,'Component for "'+a+'" was not registered.')||this}return a}(a),i=function(b){babelHelpers.inheritsLoose(a,b);function a(a){return b.call(this,"Unsupported feature: "+a)||this}return a}(a);f.BloksError=a;f.BloksComponentIdNotFoundError=b;f.BloksDataRequestError=c;f.BloksScriptError=d;f.BloksScriptParseError=e;f.BloksUnknownActionError=g;f.BloksUnknownComponentError=h;f.BloksUnsupportedFeatureError=i}),66);
__d("WebBloksUtils",["FBLogger","Promise","QuickLogClientConfigSamplingType","WebBloksErrors","WebBloksTheme","enumUtils"],(function(a,b,c,d,e,f,g){var h=[];Object.freeze(h);var i=Object.create(null);Object.freeze(i);var j=new Map();j.set=function(){throw new(d("WebBloksErrors").BloksError)("Map is immutable")};var k=0;function a(){k=0}function e(){return++k}function f(a){return typeof a==="string"?a.replace("_","-"):a}function l(a){if(typeof a==="string"){var b=a.replace(/-/g,"_").split(/_/),c=b[0];for(var d=1;d<b.length;d++){var e=b[d];c+=e[0].toUpperCase()+e.slice(1)}return c}return a}function m(a){return typeof a==="string"?a.replace(/(dp|sp)/g,"px").replace(/\\u0025/g,"%"):a}function n(a){if(a.length===9){var b=parseInt(a.slice(1,3),16)/255,c=parseInt(a.slice(3,5),16),d=parseInt(a.slice(5,7),16),e=parseInt(a.slice(7,9),16);return[c,d,e,b]}else if(a.length===7){c=parseInt(a.slice(1,3),16);d=parseInt(a.slice(3,5),16);e=parseInt(a.slice(5,7),16);return[c,d,e,1]}else{b=a.slice(5,a.indexOf(")"));c=b.split(",").map(function(a){return Number(a)});d=c[0];e=c[1];a=c[2];b=c[3];return[d,e,a,b]}}function o(a,b){b===void 0&&(b=2);a=a.toString(16);if(a.length===b)return a;else{while(a.length<b)a="0"+a;return a}}function p(a){var b=a[0],c=a[1],d=a[2];a=a[3];if(a===1)return"#"+o(b)+o(c)+o(d);else return"rgba("+b+","+c+","+d+","+a.toFixed(4)+")"}function q(a,b){b=b===d("WebBloksTheme").THEME.dark?a.get("dark_color"):a.get("light_color");return p(n(b))}function r(a){return p(n(a))}function s(a){var b={translate_x:"translateX",translate_y:"translateY",scale_x:"scaleX",scale_y:"scaleY",alpha:"",rotation:"rotate"};return(b=b[a])!=null?b:""}function t(a,b){return a!=null&&a.styleId===b}function u(a,b){return a==null?null:a.find(function(a){return a.styleId===b})}function v(a,b,e){e=e!=null?d("enumUtils").coerce(e,c("QuickLogClientConfigSamplingType")):void 0;return{i:a,m:e,r:b}}function w(a){return a}function x(a){if(!a.length)throw new(d("WebBloksErrors").BloksError)("Empty collection");return a[a.length-1]}function y(a,b){for(var b=b,c=Array.isArray(b),d=0,b=c?b:b[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=b.length)break;e=b[d++]}else{d=b.next();if(d.done)break;e=d.value}e=e;var f=e[0];e=e[1];a.set(f,e)}}function z(a){for(a in a)return a}var A=function(){function a(){this.listeners=new Set()}var b=a.prototype;b.on=function(a){this.listeners.add(a)};b.off=function(a){this.listeners["delete"](a)};b.emit=function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.listeners.forEach(function(a){return a.apply(void 0,b)})};b.clear=function(){this.listeners.clear()};return a}();function B(a){return new(b("Promise"))(function(b){window.setTimeout(b,a)})}function C(a){return a!=null&&a.$isBloksModel===!0}function D(a){c("FBLogger")("wbloks").catching(a).mustfix("Lispy execution error")}var E={passive:!0};function F(a,b,c,d){if(!d)return!0;var e=a.getBoundingClientRect();if(e.left!==b||e.top!==c)return!0;b=document.elementFromPoint(d.clientX,d.clientY);return!b||!a.contains(b)}g.EMPTY_ARRAY=h;g.EMPTY_OBJECT=i;g.EMPTY_MAP=j;g.resetGlobalBloksClientIdForTest=a;g.getNextGlobalBloksClientId=e;g.toHyphen=f;g.toCamel=l;g.toPx=m;g.parseColor=n;g.formatColor=p;g.getColor=q;g.formatHex=r;g.viewTransformKeyToTransformFunction=s;g.isStyle=t;g.findExtension=u;g.createSyntheticQPLEvent=v;g.cast=w;g.peek=x;g.putAll=y;g.getFirstKey=z;g.EventEmitter=A;g.sleep=B;g.isBloksModel=C;g.handleLispyErrorCatchAll=D;g.passiveTouchEventOptions=E;g.shouldCancelTouchEvent=F}),98);/*FB_PKG_DELIM*/
/**
 * License: https://www.facebook.com/legal/license/Smm9Lz-9Uuo/
 */
__d("Int64",[],(function(a,b,c,d,e,f){Int64=function(a,b){this.low_=a,this.high_=b},Int64.IntCache_={},Int64.fromInt=function(a){if(-128<=a&&a<128){var b=Int64.IntCache_[a];if(b)return b}b=new Int64(a|0,a<0?-1:0);-128<=a&&a<128&&(Int64.IntCache_[a]=b);return b},Int64.fromNumber=function(a){if(isNaN(a)||!isFinite(a))return Int64.ZERO;else if(a<=-Int64.TWO_PWR_63_DBL_)return Int64.MIN_VALUE;else if(a+1>=Int64.TWO_PWR_63_DBL_)return Int64.MAX_VALUE;else if(a<0)return Int64.fromNumber(-a).negate();else return new Int64(a%Int64.TWO_PWR_32_DBL_|0,a/Int64.TWO_PWR_32_DBL_|0)},Int64.fromBits=function(a,b){return new Int64(a,b)},Int64.fromString=function(a,b){if(a.length==0)throw Error("number format error: empty string");b=b||10;if(b<2||36<b)throw Error("radix out of range: "+b);if(a.charAt(0)=="-")return Int64.fromString(a.substring(1),b).negate();else if(a.indexOf("-")>=0)throw Error('number format error: interior "-" character: '+a);var c=Int64.fromNumber(Math.pow(b,8)),d=Int64.ZERO;for(var e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),g=parseInt(a.substring(e,e+f),b);if(f<8){f=Int64.fromNumber(Math.pow(b,f));d=d.multiply(f).add(Int64.fromNumber(g))}else d=d.multiply(c),d=d.add(Int64.fromNumber(g))}return d},Int64.TWO_PWR_16_DBL_=1<<16,Int64.TWO_PWR_24_DBL_=1<<24,Int64.TWO_PWR_32_DBL_=Int64.TWO_PWR_16_DBL_*Int64.TWO_PWR_16_DBL_,Int64.TWO_PWR_31_DBL_=Int64.TWO_PWR_32_DBL_/2,Int64.TWO_PWR_48_DBL_=Int64.TWO_PWR_32_DBL_*Int64.TWO_PWR_16_DBL_,Int64.TWO_PWR_64_DBL_=Int64.TWO_PWR_32_DBL_*Int64.TWO_PWR_32_DBL_,Int64.TWO_PWR_63_DBL_=Int64.TWO_PWR_64_DBL_/2,Int64.ZERO=Int64.fromInt(0),Int64.ONE=Int64.fromInt(1),Int64.NEG_ONE=Int64.fromInt(-1),Int64.MAX_VALUE=Int64.fromBits(4294967295|0,2147483647|0),Int64.MIN_VALUE=Int64.fromBits(0,2147483648|0),Int64.TWO_PWR_24_=Int64.fromInt(1<<24),Int64.prototype.toInt=function(){return this.low_},Int64.prototype.toNumber=function(){return this.high_*Int64.TWO_PWR_32_DBL_+this.getLowBitsUnsigned()},Int64.prototype.toUnsignedBits=function(){var a=[],b=31;for(var c=32;c<64;c++)a[c]=this.low_>>b&1,b-=1;b=31;for(var c=0;c<32;c++)a[c]=this.high_>>b&1,b-=1;return a.join("")},Int64.prototype.toString=function(a){a=a||10;if(a<2||36<a)throw Error("radix out of range: "+a);if(this.isZero())return"0";if(this.isNegative())if(this.equals(Int64.MIN_VALUE)){var b=Int64.fromNumber(a),c=this.div(b);b=c.multiply(b).subtract(this);return c.toString(a)+b.toInt().toString(a)}else return"-"+this.negate().toString(a);c=Int64.fromNumber(Math.pow(a,6));b=this;var d="";while(!0){var e=b.div(c),f=b.subtract(e.multiply(c)).toInt();f=f.toString(a);b=e;if(b.isZero())return f+d;else{while(f.length<6)f="0"+f;d=""+f+d}}},Int64.prototype.getHighBits=function(){return this.high_},Int64.prototype.getLowBits=function(){return this.low_},Int64.prototype.getLowBitsUnsigned=function(){return this.low_>=0?this.low_:Int64.TWO_PWR_32_DBL_+this.low_},Int64.prototype.getNumBitsAbs=function(){if(this.isNegative())if(this.equals(Int64.MIN_VALUE))return 64;else return this.negate().getNumBitsAbs();else{var a=this.high_!=0?this.high_:this.low_;for(var b=31;b>0;b--)if((a&1<<b)!=0)break;return this.high_!=0?b+33:b+1}},Int64.prototype.isZero=function(){return this.high_==0&&this.low_==0},Int64.prototype.isNegative=function(){return this.high_<0},Int64.prototype.isOdd=function(){return(this.low_&1)==1},Int64.prototype.equals=function(a){return this.high_==a.high_&&this.low_==a.low_},Int64.prototype.notEquals=function(a){return this.high_!=a.high_||this.low_!=a.low_},Int64.prototype.lessThan=function(a){return this.compare(a)<0},Int64.prototype.lessThanOrEqual=function(a){return this.compare(a)<=0},Int64.prototype.greaterThan=function(a){return this.compare(a)>0},Int64.prototype.greaterThanOrEqual=function(a){return this.compare(a)>=0},Int64.prototype.compare=function(a){if(this.equals(a))return 0;var b=this.isNegative(),c=a.isNegative();if(b&&!c)return-1;if(!b&&c)return 1;if(this.subtract(a).isNegative())return-1;else return 1},Int64.prototype.negate=function(){if(this.equals(Int64.MIN_VALUE))return Int64.MIN_VALUE;else return this.not().add(Int64.ONE)},Int64.prototype.add=function(a){var b=this.high_>>>16,c=this.high_&65535,d=this.low_>>>16,e=this.low_&65535,f=a.high_>>>16,g=a.high_&65535,h=a.low_>>>16;a=a.low_&65535;var i=0,j=0,k=0,l=0;l+=e+a;k+=l>>>16;l&=65535;k+=d+h;j+=k>>>16;k&=65535;j+=c+g;i+=j>>>16;j&=65535;i+=b+f;i&=65535;return Int64.fromBits(k<<16|l,i<<16|j)},Int64.prototype.subtract=function(a){return this.add(a.negate())},Int64.prototype.multiply=function(a){if(this.isZero())return Int64.ZERO;else if(a.isZero())return Int64.ZERO;if(this.equals(Int64.MIN_VALUE))return a.isOdd()?Int64.MIN_VALUE:Int64.ZERO;else if(a.equals(Int64.MIN_VALUE))return this.isOdd()?Int64.MIN_VALUE:Int64.ZERO;if(this.isNegative())if(a.isNegative())return this.negate().multiply(a.negate());else return this.negate().multiply(a).negate();else if(a.isNegative())return this.multiply(a.negate()).negate();if(this.lessThan(Int64.TWO_PWR_24_)&&a.lessThan(Int64.TWO_PWR_24_))return Int64.fromNumber(this.toNumber()*a.toNumber());var b=this.high_>>>16,c=this.high_&65535,d=this.low_>>>16,e=this.low_&65535,f=a.high_>>>16,g=a.high_&65535,h=a.low_>>>16;a=a.low_&65535;var i=0,j=0,k=0,l=0;l+=e*a;k+=l>>>16;l&=65535;k+=d*a;j+=k>>>16;k&=65535;k+=e*h;j+=k>>>16;k&=65535;j+=c*a;i+=j>>>16;j&=65535;j+=d*h;i+=j>>>16;j&=65535;j+=e*g;i+=j>>>16;j&=65535;i+=b*a+c*h+d*g+e*f;i&=65535;return Int64.fromBits(k<<16|l,i<<16|j)},Int64.prototype.div=function(a){if(a.isZero())throw Error("division by zero");else if(this.isZero())return Int64.ZERO;if(this.equals(Int64.MIN_VALUE))if(a.equals(Int64.ONE)||a.equals(Int64.NEG_ONE))return Int64.MIN_VALUE;else if(a.equals(Int64.MIN_VALUE))return Int64.ONE;else{var b=this.shiftRight(1);b=b.div(a).shiftLeft(1);if(b.equals(Int64.ZERO))return a.isNegative()?Int64.ONE:Int64.NEG_ONE;else{var c=this.subtract(a.multiply(b)),d=b.add(c.div(a));return d}}else if(a.equals(Int64.MIN_VALUE))return Int64.ZERO;if(this.isNegative())if(a.isNegative())return this.negate().div(a.negate());else return this.negate().div(a).negate();else if(a.isNegative())return this.div(a.negate()).negate();d=Int64.ZERO;var c=this;while(c.greaterThanOrEqual(a)){b=Math.max(1,Math.floor(c.toNumber()/a.toNumber()));var e=Math.ceil(Math.log(b)/Math.LN2);e=e<=48?1:Math.pow(2,e-48);var f=Int64.fromNumber(b),g=f.multiply(a);while(g.isNegative()||g.greaterThan(c))b-=e,f=Int64.fromNumber(b),g=f.multiply(a);f.isZero()&&(f=Int64.ONE);d=d.add(f);c=c.subtract(g)}return d},Int64.prototype.modulo=function(a){return this.subtract(this.div(a).multiply(a))},Int64.prototype.not=function(){return Int64.fromBits(~this.low_,~this.high_)},Int64.prototype.and=function(a){return Int64.fromBits(this.low_&a.low_,this.high_&a.high_)},Int64.prototype.or=function(a){return Int64.fromBits(this.low_|a.low_,this.high_|a.high_)},Int64.prototype.xor=function(a){return Int64.fromBits(this.low_^a.low_,this.high_^a.high_)},Int64.prototype.shiftLeft=function(a){a&=63;if(a==0)return this;else{var b=this.low_;if(a<32){var c=this.high_;return Int64.fromBits(b<<a,c<<a|b>>>32-a)}else return Int64.fromBits(0,b<<a-32)}},Int64.prototype.shiftRight=function(a){a&=63;if(a==0)return this;else{var b=this.high_;if(a<32){var c=this.low_;return Int64.fromBits(c>>>a|b<<32-a,b>>a)}else return Int64.fromBits(b>>a-32,b>=0?0:-1)}},Int64.prototype.shiftRightUnsigned=function(a){a&=63;if(a==0)return this;else{var b=this.high_;if(a<32){var c=this.low_;return Int64.fromBits(c>>>a|b<<32-a,b>>>a)}else if(a==32)return Int64.fromBits(b,0);else return Int64.fromBits(b>>>a-32,0)}},e.exports=Int64}),null);