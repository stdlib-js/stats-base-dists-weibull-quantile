"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(h,o){
var f=require('@stdlib/math-base-special-ln/dist'),N=require('@stdlib/math-base-special-pow/dist'),i=require('@stdlib/math-base-assert-is-nan/dist');function y(e,r,t){return i(r)||i(t)||i(e)||r<=0||t<=0||e<0||e>1?NaN:t*N(-f(1-e),1/r)}o.exports=y
});var c=a(function(j,q){
var x=require('@stdlib/utils-constant-function/dist'),w=require('@stdlib/math-base-special-ln/dist'),l=require('@stdlib/math-base-special-pow/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function F(e,r){if(u(e)||u(r)||e<=0||r<=0)return x(NaN);return t;function t(n){return u(n)||n<0||n>1?NaN:r*l(-w(1-n),1/e)}}q.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=s(),R=c();O(v,"factory",R);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
