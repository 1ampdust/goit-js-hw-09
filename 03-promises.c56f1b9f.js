!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u=o("6JpON"),i=document.querySelector(".form");function c(e,n){return new Promise((function(t,r){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}i.addEventListener("submit",(function(n){n.preventDefault();for(var t=0;t<n.currentTarget.amount.value;t++){c(t+1,Number(n.currentTarget.delay.value)+Number(n.currentTarget.step.value)*t).then((function(n){e(u).Notify.success(n),i.reset()})).catch((function(n){e(u).Notify.failure(n)}))}}))}();
//# sourceMappingURL=03-promises.c56f1b9f.js.map