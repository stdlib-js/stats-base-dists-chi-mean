"use strict";var n=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=n(function(o,i){
var s=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-special-gamma/dist'),m=require('@stdlib/constants-float64-sqrt-two/dist');function q(r){return s(r)||r<0?NaN:m*a((r+1)/2)/a(r/2)}i.exports=q
});var v=t();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
