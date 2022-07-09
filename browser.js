// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=o,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),p&&f&&f.call(r,n,t.set),r};var l,y=n,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"";l=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return v.call(r);t=r[d],u=d,n=null!=(o=r)&&b.call(o,u);try{r[d]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[d]=t:delete r[d],e}:function(r){return v.call(r)};var w,s=l,_="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===s(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h,U=w,N="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===s(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var I,O=h,S="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===s(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint16Array,P="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,65536,65537]),t=n,r=(G&&t instanceof Uint16Array||"[object Uint16Array]"===s(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var L,M={uint16:T,uint8:H};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,k=new O(1),q=new U(k.buffer);function Y(r){return k[0]=r,q[W]}var C=!0===V?1:0,z=new O(1),B=new U(z.buffer);function D(r,n){return z[0]=r,B[C]=n>>>0,z[0]}function J(r){return r!=r}var K=1023,Q=Number.NEGATIVE_INFINITY,R=.6931471803691238,X=1.9082149292705877e-10,Z=1048575;function $(r){var n,t,e,o,u,i,f,a,c,l,y,p;return 0===r?Q:J(r)||r<0?NaN:(u=0,(t=Y(r))<1048576&&(u-=54,t=Y(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-K|0,u+=(a=614244+(t&=Z)&1048576|0)>>20|0,f=(r=D(r,t|1072693248^a))-1,(Z&2+t)<3?0===f?0===u?0:u*R+u*X:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*R-(i-u*X-f)):(a=t-398458|0,c=440401-t|0,o=(y=(p=(l=f/(2+f))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+o,(a|=c)>0?(n=.5*f*f,0===u?f-(n-l*(n+i)):u*R-(n-(l*(n+i)+u*X)-f)):0===u?f-l*(f-i):u*R-(l*(f-i)-u*X-f))))}var rr=Math.floor;function nr(r){return rr(r)===r}function tr(r){return nr(r/2)}function er(r){return tr(r>0?r-1:r+1)}var or=Number.POSITIVE_INFINITY;function ur(r){return r===or||r===Q}var ir,fr,ar=Math.sqrt;function cr(r){return Math.abs(r)}!0===V?(ir=1,fr=0):(ir=0,fr=1);var lr={HIGH:ir,LOW:fr},yr=new O(1),pr=new U(yr.buffer),vr=lr.HIGH,br=lr.LOW;function dr(r,n){return yr[0]=n,r[0]=pr[vr],r[1]=pr[br],r}function wr(r,n){return 1===arguments.length?dr([0,0],r):dr(r,n)}var sr,_r,Ar=!0===V?0:1,mr=new O(1),hr=new U(mr.buffer);function Ur(r,n){return mr[0]=r,hr[Ar]=n>>>0,mr[0]}function Nr(r){return 0|r}!0===V?(sr=1,_r=0):(sr=0,_r=1);var jr={HIGH:sr,LOW:_r},gr=new O(1),Ir=new U(gr.buffer),Or=jr.HIGH,Sr=jr.LOW;function Er(r,n){return Ir[Or]=r,Ir[Sr]=n,gr[0]}var Fr=[0,0];function Tr(r,n){var t,e;return wr(Fr,r),t=Fr[0],t&=2147483647,e=Y(n),Er(t|=e&=2147483648,Fr[1])}var Hr=1048576,Gr=[1,1.5],Pr=[0,.5849624872207642],xr=[0,1.350039202129749e-8];function Lr(r,n){return J(n)||ur(n)?(r[0]=n,r[1]=0,r):0!==n&&cr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Mr=[0,0],Vr=[0,0];function Wr(r,n){var t,e;return 0===n||0===r||J(r)||ur(r)?r:(function(r,n){1===arguments.length?Lr([0,0],r):Lr(r,n)}(Mr,r),n+=Mr[1],n+=function(r){var n=Y(r);return(n=(2146435072&n)>>>20)-K|0}(r=Mr[0]),n<-1074?Tr(0,r):n>1023?r<0?Q:or:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,wr(Vr,r),t=Vr[0],t&=2148532223,e*Er(t|=n+K<<20,Vr[1])))}var kr=2147483647,qr=1048575,Yr=1048576,Cr=2147483647,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,o,u,i,f,a,c,l,y,p,v,b,d;if(J(r)||J(n))return NaN;if(wr(Jr,n),i=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ar(r);if(-.5===n)return 1/ar(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ur(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:cr(r)<1==(n===or)?0:or}(r,n)}if(wr(Jr,r),u=Jr[0],0===Jr[1]){if(0===u)return function(r,n){return n===Q?or:n===or?0:n>0?er(n)?r:0:er(n)?Tr(or,r):or}(r,n);if(1===r)return 1;if(-1===r&&er(n))return-1;if(ur(r))return r===Q?Qr(-0,-n):n<0?0:or}if(r<0&&!1===nr(n))return(r-r)/(r-r);if(o=cr(r),t=u&Cr|0,e=i&Cr|0,a=i>>>31|0,f=(f=u>>>31|0)&&er(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&Y(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Br*Br:f*Dr*Dr;if(t>1072693248)return 0===a?f*Br*Br:f*Dr*Dr;p=function(r,n){var t,e,o,u,i,f;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Ur(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Kr,o)}else p=function(r,n,t){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,_,A,m,h,U,N;return m=0,t<Hr&&(m-=53,t=Y(n*=9007199254740992)),m+=(t>>20)-K|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Hr),i=Ur(o=(_=(n=D(n,t))-(c=Gr[U]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=D(0,e+=U<<18),s=(u=o*o)*u*(0===(N=u)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),a=Ur(a=3+(u=i*i)+(s+=(f=A*(_-i*a-i*(n-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Ur(y=(_=i*a)+(A=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+xr[U])-((b=Ur(b=(p=.9617967009544373*y)+v+(l=Pr[U])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(Kr,o,t);if(y=(n-(c=Ur(n,0)))*p[0]+n*p[1],l=c*p[0],wr(Jr,v=y+l),b=Nr(Jr[0]),d=Nr(Jr[1]),b>=zr){if(0!=(b-zr|d))return f*Br*Br;if(y+8008566259537294e-32>v-l)return f*Br*Br}else if((b&Cr)>=1083231232){if(0!=(b-3230714880|d))return f*Dr*Dr;if(y<=v-l)return f*Dr*Dr}return v=function(r,n,t){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&kr|0)>>20)-K|0,c=0,l>1071644672&&(o=D(0,((c=r+(Yr>>y+1)>>>0)&~(qr>>(y=((c&kr)>>20)-K|0)))>>>0),c=(c&qr|Yr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=Nr(r=Y(a=1-((a=(u=.6931471824645996*(o=Ur(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Wr(a,c):D(a,r)}(b,l,y),f*v}function Rr(r,n,t){return J(n)||J(t)||J(r)||n<=0||t<=0||r<0||r>1?NaN:t*Qr(-$(1-r),1/n)}function Xr(r,n){return J(r)||J(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){return J(t)||t<0||t>1?NaN:n*Qr(-$(1-t),1/r)};var t}y(Rr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Xr}),r.default=Rr,r.factory=Xr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).quantile={});
//# sourceMappingURL=browser.js.map
