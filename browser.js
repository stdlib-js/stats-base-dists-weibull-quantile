// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__,l=e,y=function(n,r,t){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(n,r)||a.call(n,r)?(e=n.__proto__,n.__proto__=o,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&f&&f.call(n,r,t.set),n},p=t()?l:y,b=function(n,r,t){p(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,d=w,A=function(n){return d.call(n)},s=Object.prototype.hasOwnProperty,_=function(n,r){return null!=n&&s.call(n,r)},m="function"==typeof Symbol?Symbol.toStringTag:"",h=_,U=m,N=w,g=A,j=function(n){var r,t,e;if(null==n)return N.call(n);t=n[U],r=h(n,U);try{n[U]=void 0}catch(r){return N.call(n)}return e=N.call(n),r?n[U]=t:delete n[U],e},I=v&&"symbol"==typeof Symbol.toStringTag?j:g,O=I,S="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,F=function(n){return S&&n instanceof Uint32Array||"[object Uint32Array]"===O(n)},T=E,H=function(){var n,r;if("function"!=typeof T)return!1;try{r=new T(r=[1,3.14,-3.14,4294967296,4294967297]),n=F(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},G="function"==typeof Uint32Array?Uint32Array:void 0,P=function(){throw new Error("not implemented")},x=H()?G:P,L=I,V="function"==typeof Float64Array,W="function"==typeof Float64Array?Float64Array:null,M=function(n){return V&&n instanceof Float64Array||"[object Float64Array]"===L(n)},k=W,q=function(){var n,r;if("function"!=typeof k)return!1;try{r=new k([1,3.14,-3.14,NaN]),n=M(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},Y="function"==typeof Float64Array?Float64Array:void 0,C=function(){throw new Error("not implemented")},z=q()?Y:C,B=I,D="function"==typeof Uint8Array,J="function"==typeof Uint8Array?Uint8Array:null,K=function(n){return D&&n instanceof Uint8Array||"[object Uint8Array]"===B(n)},Q=J,R=function(){var n,r;if("function"!=typeof Q)return!1;try{r=new Q(r=[1,3.14,-3.14,256,257]),n=K(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},X="function"==typeof Uint8Array?Uint8Array:void 0,Z=function(){throw new Error("not implemented")},$=R()?X:Z,nn=I,rn="function"==typeof Uint16Array,tn="function"==typeof Uint16Array?Uint16Array:null,en=function(n){return rn&&n instanceof Uint16Array||"[object Uint16Array]"===nn(n)},on=tn,un=function(){var n,r;if("function"!=typeof on)return!1;try{r=new on(r=[1,3.14,-3.14,65536,65537]),n=en(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},fn="function"==typeof Uint16Array?Uint16Array:void 0,cn=function(){throw new Error("not implemented")},an={uint16:un()?fn:cn,uint8:$};(n=new an.uint16(1))[0]=4660;var ln,yn,pn=52===new an.uint8(n.buffer)[0],bn=x,vn=!0===pn?1:0,wn=new z(1),dn=new bn(wn.buffer),An=function(n){return wn[0]=n,dn[vn]},sn=x,_n=!0===pn?1:0,mn=new z(1),hn=new sn(mn.buffer),Un=function(n,r){return mn[0]=n,hn[_n]=r>>>0,mn[0]},Nn=Un,gn=function(n){return n!=n},jn=Number.NEGATIVE_INFINITY,In=An,On=Nn,Sn=gn,En=jn,Fn=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},Tn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},Hn=.6931471803691238,Gn=1.9082149292705877e-10,Pn=1048575,xn=function(n){var r,t,e,o,u,i,f,c,a,l,y;return 0===n?En:Sn(n)||n<0?NaN:(o=0,(t=In(n))<1048576&&(o-=54,t=In(n*=0x40000000000000)),t>=2146435072?n+n:(o+=(t>>20)-1023|0,o+=(f=614244+(t&=Pn)&1048576|0)>>20|0,i=(n=On(n,t|1072693248^f))-1,(Pn&2+t)<3?0===i?0===o?0:o*Hn+o*Gn:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*Hn-(u-o*Gn-i)):(f=t-398458|0,c=440401-t|0,e=(l=(y=(a=i/(2+i))*a)*y)*Fn(l),u=y*Tn(l)+e,(f|=c)>0?(r=.5*i*i,0===o?i-(r-a*(r+u)):o*Hn-(r-(a*(r+u)+o*Gn)-i)):0===o?i-a*(i-u):o*Hn-(a*(i-u)-o*Gn-i))))},Ln=Math.floor,Vn=function(n){return Ln(n)===n},Wn=Vn,Mn=function(n){return Wn(n/2)},kn=function(n){return Mn(n>0?n-1:n+1)},qn=Number.POSITIVE_INFINITY,Yn=qn,Cn=jn,zn=function(n){return n===Yn||n===Cn},Bn=Math.sqrt,Dn=function(n){return Math.abs(n)};!0===pn?(ln=1,yn=0):(ln=0,yn=1);var Jn,Kn,Qn=x,Rn={HIGH:ln,LOW:yn},Xn=new z(1),Zn=new Qn(Xn.buffer),$n=Rn.HIGH,nr=Rn.LOW,rr=function(n,r){return Xn[0]=r,n[0]=Zn[$n],n[1]=Zn[nr],n},tr=function(n,r){return 1===arguments.length?rr([0,0],n):rr(n,r)},er=tr,or=x,ur=!0===pn?0:1,ir=new z(1),fr=new or(ir.buffer),cr=function(n,r){return ir[0]=n,fr[ur]=r>>>0,ir[0]},ar=cr,lr=function(n){return 0|n};!0===pn?(Jn=1,Kn=0):(Jn=0,Kn=1);var yr=x,pr={HIGH:Jn,LOW:Kn},br=new z(1),vr=new yr(br.buffer),wr=pr.HIGH,dr=pr.LOW,Ar=function(n,r){return vr[wr]=n,vr[dr]=r,br[0]},sr=er,_r=An,mr=Ar,hr=[0,0],Ur=function(n,r){var t,e;return sr(hr,n),t=hr[0],t&=2147483647,e=_r(r),mr(t|=e&=2147483648,hr[1])},Nr=kn,gr=Ur,jr=jn,Ir=qn,Or=An,Sr=Dn,Er=qn,Fr=An,Tr=ar,Hr=Nn,Gr=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},Pr=1048576,xr=[1,1.5],Lr=[0,.5849624872207642],Vr=[0,1.350039202129749e-8],Wr=ar,Mr=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},kr=zn,qr=gn,Yr=Dn,Cr=function(n,r){return qr(r)||kr(r)?(n[0]=r,n[1]=0,n):0!==r&&Yr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},zr=function(n,r){return 1===arguments.length?Cr([0,0],n):Cr(n,r)},Br=An,Dr=function(n){var r=Br(n);return(r=(2146435072&r)>>>20)-1023|0},Jr=qn,Kr=jn,Qr=gn,Rr=zn,Xr=Ur,Zr=zr,$r=Dr,nt=er,rt=Ar,tt=[0,0],et=[0,0],ot=function(n,r){var t,e;return 0===r||0===n||Qr(n)||Rr(n)?n:(Zr(tt,n),r+=tt[1],(r+=$r(n=tt[0]))<-1074?Xr(0,n):r>1023?n<0?Kr:Jr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,nt(et,n),t=et[0],t&=2148532223,e*rt(t|=r+1023<<20,et[1])))},ut=An,it=Nn,ft=ar,ct=lr,at=ot,lt=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},yt=2147483647,pt=1048575,bt=1048576,vt=gn,wt=kn,dt=zn,At=Vn,st=Bn,_t=Dn,mt=er,ht=ar,Ut=lr,Nt=jn,gt=qn,jt=function(n,r){return r===jr?Ir:r===Ir?0:r>0?Nr(r)?n:0:Nr(r)?gr(Ir,n):Ir},It=function(n,r){return(2147483647&Or(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},Ot=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Sr(n)<1==(r===Er)?0:Er},St=function(n,r,t){var e,o,u,i,f,c,a,l,y,p,b,v,w,d,A,s,_,m,h,U;return m=0,t<Pr&&(m-=53,t=Fr(r*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Pr),e=524288+(t>>1|536870912),f=(_=1/((r=Hr(r,t))+(a=xr[U])))*((s=r-a)-(i=Tr(o=s*_,0))*(c=Hr(0,e+=U<<18))-i*(r-(c-a))),A=(u=o*o)*u*Gr(u),c=Tr(c=3+(u=i*i)+(A+=f*(i+o)),0),w=(b=-7.028461650952758e-9*(y=Tr(y=(s=i*c)+(_=f*c+(A-(c-3-u))*o),0))+.9617966939259756*(_-(y-s))+Vr[U])-((v=Tr(v=(p=.9617967009544373*y)+b+(l=Lr[U])+(d=m),0))-d-l-p),n[0]=v,n[1]=w,n},Et=function(n,r){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=r-1)-o*o*Mr(o)*1.4426950408889634)-((e=Wr(e=(u=1.4426950216293335*o)+i,0))-u),n[0]=e,n[1]=t,n},Ft=function(n,r,t){var e,o,u,i,f,c,a,l,y;return y=((l=n&yt|0)>>20)-1023|0,a=0,l>1071644672&&(o=it(0,((a=n+(bt>>y+1)>>>0)&~(pt>>(y=((a&yt)>>20)-1023|0)))>>>0),a=(a&pt|bt)>>20-y>>>0,n<0&&(a=-a),r-=o),f=(i=.6931471805599453*(t-((o=ft(o=t+r,0))-r))+-1.904654299957768e-9*o)-((c=(u=.6931471824645996*o)+i)-u),e=c-(o=c*c)*lt(o),n=ut(c=1-(c*e/(e-2)-(f+c*f)-c)),n=ct(n),c=(n+=a<<20>>>0)>>20<=0?at(c,a):it(c,n)},Tt=2147483647,Ht=1083179008,Gt=1e300,Pt=1e-300,xt=[0,0],Lt=[0,0],Vt=function n(r,t){var e,o,u,i,f,c,a,l,y,p,b,v,w,d;if(vt(r)||vt(t))return NaN;if(mt(xt,t),f=xt[0],0===xt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return st(r);if(-.5===t)return 1/st(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(dt(t))return Ot(r,t)}if(mt(xt,r),i=xt[0],0===xt[1]){if(0===i)return jt(r,t);if(1===r)return 1;if(-1===r&&wt(t))return-1;if(dt(r))return r===Nt?n(-0,-t):t<0?0:gt}if(r<0&&!1===At(t))return(r-r)/(r-r);if(u=_t(r),e=i&Tt|0,o=f&Tt|0,a=f>>>31|0,c=(c=i>>>31|0)&&wt(t)?-1:1,o>1105199104){if(o>1139802112)return It(r,t);if(e<1072693247)return 1===a?c*Gt*Gt:c*Pt*Pt;if(e>1072693248)return 0===a?c*Gt*Gt:c*Pt*Pt;b=Et(Lt,u)}else b=St(Lt,u,e);if(p=(t-(l=ht(t,0)))*b[0]+t*b[1],y=l*b[0],mt(xt,v=p+y),w=Ut(xt[0]),d=Ut(xt[1]),w>=Ht){if(0!=(w-Ht|d))return c*Gt*Gt;if(p+8008566259537294e-32>v-y)return c*Gt*Gt}else if((w&Tt)>=1083231232){if(0!=(w-3230714880|d))return c*Pt*Pt;if(p<=v-y)return c*Pt*Pt}return c*(v=Ft(w,y,p))},Wt=Vt;function Mt(n,r,t){return gn(r)||gn(t)||gn(n)||r<=0||t<=0||n<0||n>1?NaN:t*Wt(-xn(1-n),1/r)}var kt=function(n){return function(){return n}};return b(Mt,"factory",(function(n,r){return gn(n)||gn(r)||n<=0||r<=0?kt(NaN):function(t){return gn(t)||t<0||t>1?NaN:r*Wt(-xn(1-t),1/n)}})),Mt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).quantile=r();
//# sourceMappingURL=browser.js.map
