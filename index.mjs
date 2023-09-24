// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function r(t,i,r){return n(i)||n(r)||n(t)||i<=0||r<=0||t<0||t>1?NaN:r*e(-s(1-t),1/i)}function m(t,r){return n(t)||n(r)||t<=0||r<=0?i(NaN):function(i){if(n(i)||i<0||i>1)return NaN;return r*e(-s(1-i),1/t)}}t(r,"factory",m);export{r as default,m as factory};
//# sourceMappingURL=index.mjs.map