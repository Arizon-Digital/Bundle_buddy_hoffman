(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[614],{93533:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>f});var o=e(91238),n=e(36007),i=e(41582),a=e(70887),s=e(61579),c=e(96609),u=e(71779),l=e(33270);function p(t,r){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},p(t,r)}var f=function(t){function r(r){var e;return(e=t.call(this,r)||this).validationDictionary=(0,u.i)(r),e.formCreateSelector="form[data-create-account-form]",e.recaptcha=l(".g-recaptcha iframe[src]"),e}var e,o;o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,p(e,o);var f=r.prototype;return f.registerLoginValidation=function(t){var r=this,e=s.A;this.loginValidator=(0,i.A)({submit:'.login-form input[type="submit"]',tap:c.dN}),this.loginValidator.add([{selector:'.login-form input[name="login_email"]',validate:function(t,r){t(e.email(r))},errorMessage:this.context.useValidEmail},{selector:'.login-form input[name="login_pass"]',validate:function(t,r){t(e.password(r))},errorMessage:this.context.enterPass}]),t.on("submit",(function(t){r.loginValidator.performCheck(),r.loginValidator.areAll("valid")||t.preventDefault()}))},f.registerForgotPasswordValidation=function(t){var r=this;this.forgotPasswordValidator=(0,i.A)({submit:'.forgot-password-form input[type="submit"]',tap:c.dN}),this.forgotPasswordValidator.add([{selector:'.forgot-password-form input[name="email"]',validate:function(t,r){t(s.A.email(r))},errorMessage:this.context.useValidEmail}]),t.on("submit",(function(t){r.forgotPasswordValidator.performCheck(),r.forgotPasswordValidator.areAll("valid")||t.preventDefault()}))},f.registerNewPasswordValidation=function(){var t=this.validationDictionary,r=t.password,e=t.password_match,o=t.invalid_password,n=".new-password-form",a=(0,i.A)({submit:l(n+' input[type="submit"]'),tap:c.dN}),s=l(n+' input[name="password"]'),u=l(n+' input[name="password_confirm"]'),p=(0,c.pt)(r,r,e,o);c.k0.setPasswordValidation(a,s,u,this.passwordRequirements,p)},f.registerCreateAccountValidator=function(t){var r,e=this,o=(0,a.A)(t,this.context),s=(0,i.A)({submit:this.formCreateSelector+" input[type='submit']",tap:c.dN}),u=l('[data-field-type="State"]'),p=this.formCreateSelector+" [data-field-type='EmailAddress']",f=l(p),d=this.formCreateSelector+" [data-field-type='Password']",m=l(d),h=this.formCreateSelector+" [data-field-type='ConfirmPassword']",v=l(h);if(s.add(o),u&&(0,n.A)(u,this.context,(function(t,o){if(t)throw new Error(t);var n=l(o);"undefined"!==s.getStatus(u)&&s.remove(u),r&&s.remove(r),n.is("select")?(r=o,c.k0.setStateCountryValidation(s,o,e.validationDictionary.field_not_blank)):c.k0.cleanUpStateValidation(o)})),f&&(s.remove(p),c.k0.setEmailValidation(s,p,this.validationDictionary.valid_email)),m&&v){var g=this.validationDictionary,w=g.password,b=g.password_match,y=g.invalid_password;s.remove(d),s.remove(h),c.k0.setPasswordValidation(s,d,h,this.passwordRequirements,(0,c.pt)(w,w,b,y))}t.on("submit",(function(t){s.performCheck(),s.areAll("valid")||t.preventDefault()}))},f.onReady=function(){this.recaptcha.attr("title")||this.recaptcha.attr("title",this.context.recaptchaTitle);var t=(0,c.J6)(this.formCreateSelector),r=(0,c.J6)(".login-form"),e=(0,c.J6)(".forgot-password-form"),o=(0,c.J6)(".new-password-form");this.passwordRequirements=this.context.passwordRequirements,r.length&&this.registerLoginValidation(r),o.length&&this.registerNewPasswordValidation(),e.length&&this.registerForgotPasswordValidation(e),t.length&&this.registerCreateAccountValidator(t)},r}(o.A)},83729:t=>{t.exports=function(t,r){for(var e=-1,o=null==t?0:t.length;++e<o&&!1!==r(t[e],e,t););return t}},39344:(t,r,e)=>{var o=e(23805),n=Object.create,i=function(){function t(){}return function(r){if(!o(r))return{};if(n)return n(r);t.prototype=r;var e=new t;return t.prototype=void 0,e}}();t.exports=i},86649:(t,r,e)=>{var o=e(83221)();t.exports=o},30641:(t,r,e)=>{var o=e(86649),n=e(95950);t.exports=function(t,r){return t&&o(t,r,n)}},15389:t=>{t.exports=function(t){return t}},88984:(t,r,e)=>{var o=e(74335)(Object.keys,Object);t.exports=o},83221:t=>{t.exports=function(t){return function(r,e,o){for(var n=-1,i=Object(r),a=o(r),s=a.length;s--;){var c=a[t?s:++n];if(!1===e(i[c],c,i))break}return r}}},28879:(t,r,e)=>{var o=e(74335)(Object.getPrototypeOf,Object);t.exports=o},5861:t=>{var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},55527:t=>{t.exports=function(){return!1}},74335:t=>{t.exports=function(t,r){return function(e){return t(r(e))}}},76135:t=>{t.exports=function(t,r){for(var e=-1,o=null==t?0:t.length;++e<o&&!1!==r(t[e],e,t););return t}},72428:t=>{t.exports=function(){return!1}},56449:t=>{var r=Array.isArray;t.exports=r},64894:(t,r,e)=>{var o=e(1882),n=e(30294);t.exports=function(t){return null!=t&&n(t.length)&&!o(t)}},3656:t=>{t.exports=function(){return!1}},62193:(t,r,e)=>{var o=e(88984),n=e(5861),i=e(72428),a=e(56449),s=e(64894),c=e(3656),u=e(55527),l=e(37167),p=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(s(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||l(t)||i(t)))return!t.length;var r=n(t);if("[object Map]"==r||"[object Set]"==r)return!t.size;if(u(t))return!o(t).length;for(var e in t)if(p.call(t,e))return!1;return!0}},1882:(t,r,e)=>{var o=e(72552),n=e(23805);t.exports=function(t){if(!n(t))return!1;var r=o(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r}},30294:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},37167:t=>{t.exports=function(){return!1}},95950:(t,r,e)=>{var o=e(74335)(Object.keys,Object);t.exports=o},69752:(t,r,e)=>{var o=e(83729),n=e(39344),i=e(30641),a=e(15389),s=e(28879),c=e(56449),u=e(3656),l=e(1882),p=e(23805),f=e(37167);t.exports=function(t,r,e){var d=c(t),m=d||u(t)||f(t);if(r=a(r,4),null==e){var h=t&&t.constructor;e=m?d?new h:[]:p(t)&&l(h)?n(s(t)):{}}return(m?o:i)(t,(function(t,o,n){return r(e,t,o,n)})),e}}}]);
//# sourceMappingURL=theme-bundle.chunk.614.js.map
