(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{676:function(t,e,o){"use strict";o.r(e),function(t){o.d(e,"default",(function(){return u}));var n=o(75),r=o(56),a=o(213),i=o(65);function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var u=function(e){function o(){return e.apply(this,arguments)||this}var n,u;u=e,(n=o).prototype=Object.create(u.prototype),n.prototype.constructor=n,c(n,u);var s=o.prototype;return s.onReady=function(){this.registerContactFormValidation()},s.registerContactFormValidation=function(){var e="form[data-contact-form]",o=Object(r.a)({submit:e+' input[type="submit"]',tap:i.b}),n=t(e);o.add([{selector:e+' input[name="contact_email"]',validate:function(t,e){t(a.a.email(e))},errorMessage:this.context.contactEmail},{selector:e+' textarea[name="contact_question"]',validate:function(t,e){t(a.a.notEmpty(e))},errorMessage:this.context.contactQuestion}]),n.on("submit",(function(t){o.performCheck(),o.areAll("valid")||t.preventDefault()}))},o}(n.a)}.call(this,o(0))}}]);
//# sourceMappingURL=theme-bundle.chunk.14.js.map
