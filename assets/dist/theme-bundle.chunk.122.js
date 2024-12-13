"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[122],{61579:(e,t,r)=>{r.d(t,{A:()=>a});const a={email:function(e){return/^.+@.+\..+/.test(e)},password:function(e){return this.notEmpty(e)},notEmpty:function(e){return e.length>0}}},41582:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(90574),n=r.n(a),i=r(11741),s=r.n(i),o=r(33270);n().classes.errorClass="form-field--error",n().classes.successClass="form-field--success",n().classes.errorMessageClass="form-inlineMessage",n().checkFunctions["min-max"]=function(e,t){return function(r){var a=parseFloat(o(e).val()),n=parseFloat(o(t).val());return n>a||s()(n)||s()(a)?r(!0):r(!1)}};const l=n()},96609:(e,t,r)=>{r.d(t,{J6:()=>h,VJ:()=>m,dN:()=>v,k0:()=>g,pt:()=>p});var a=r(14792),n=r.n(a),i=r(84058),s=r.n(i),o=r(79859),l=r.n(o),c=r(41582),d=r(61579),u=r(33270),f=["input","select","textarea"],p=function(e,t,r,a){return{onEmptyPasswordErrorText:e,onConfirmPasswordErrorText:t,onMismatchPasswordErrorText:r,onNotValidPasswordErrorText:a}};function h(e,t){void 0===t&&(t={});var r=u(e),a=r.find(f.join(", ")),i=t.formFieldClass,o=void 0===i?"form-field":i;return a.each((function(e,t){!function(e,t){var r,a=u(e),i=a.parent("."+t),o=a.prop("tagName").toLowerCase(),c=t+"--"+o;if("input"===o){var d=a.prop("type");l()(["radio","checkbox","submit"],d)?c=t+"--"+s()(d):r=""+c+n()(d)}i.addClass(c).addClass(r)}(t,o)})),r}function m(e){var t,r,a={type:"hidden",name:"FormFieldIsText"+(t=e,r=t.prop("name").match(/(\[.*\])/),r&&0!==r.length?r[0]:""),value:"1"};e.after(u("<input />",a))}function v(e){var t=e.element;if(!e.result){var r=u(t).parent(),a=u(r).find("span");if(a.length){var n=u(a[0]);n.attr("role")||n.attr("role","alert")}}}var g={setEmailValidation:function(e,t,r){t&&e.add({selector:t,validate:function(e,t){e(d.A.email(t))},errorMessage:r})},setPasswordValidation:function(e,t,r,a,n,i){var s=n.onEmptyPasswordErrorText,o=n.onConfirmPasswordErrorText,l=n.onMismatchPasswordErrorText,c=n.onNotValidPasswordErrorText,d=u(t),f=[{selector:t,validate:function(e,t){var r=t.length;if(i)return e(!0);e(r)},errorMessage:s},{selector:t,validate:function(e,t){var r=t.match(new RegExp(a.alpha))&&t.match(new RegExp(a.numeric))&&t.length>=a.minlength;if(i&&0===t.length)return e(!0);e(r)},errorMessage:c},{selector:r,validate:function(e,t){var r=t.length;if(i)return e(!0);e(r)},errorMessage:o},{selector:r,validate:function(e,t){e(t===d.val())},errorMessage:l}];e.add(f)},setMinMaxPriceValidation:function(e,t,r){void 0===r&&(r={});var a=t.errorSelector,n=t.fieldsetSelector,i=t.formSelector,s=t.maxPriceSelector,o=t.minPriceSelector,l=r,c=l.onMinPriceError,d=l.onMaxPriceError,u=l.minPriceNotEntered,f=l.maxPriceNotEntered,p=l.onInvalidPrice;e.configure({form:i,preventSubmit:!0,successClass:"_"}),e.add({errorMessage:c,selector:o,validate:"min-max:"+o+":"+s}),e.add({errorMessage:d,selector:s,validate:"min-max:"+o+":"+s}),e.add({errorMessage:f,selector:s,validate:"presence"}),e.add({errorMessage:u,selector:o,validate:"presence"}),e.add({errorMessage:p,selector:[o,s],validate:"min-number:0"}),e.setMessageOptions({selector:[o,s],parent:n,errorSpan:a})},setStateCountryValidation:function(e,t,r){t&&e.add({selector:t,validate:"presence",errorMessage:r})},cleanUpStateValidation:function(e){var t=u('[data-type="'+e.data("fieldType")+'"]');Object.keys(c.A.classes).forEach((function(e){t.hasClass(c.A.classes[e])&&t.removeClass(c.A.classes[e])}))}}},27122:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c}),r(85026),r(27151);var a=r(41582),n=r(91238),i=r(33270),s=r(96609),o=r(33270);function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}var c=function(e){function t(t){var r;return(r=e.call(this,t)||this).options={template:"account/add-wishlist"},r||function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)}var r,n;n=e,(r=t).prototype=Object.create(n.prototype),r.prototype.constructor=r,l(r,n);var c=t.prototype;return c.wishlistDeleteConfirm=function(){var e=this;o("body").on("click","[data-wishlist-delete]",(function(t){if(window.confirm(e.context.wishlistDelete))return!0;t.preventDefault()}))},c.registerAddWishListValidation=function(e){var t=this;this.addWishlistValidator=(0,a.A)({submit:'.wishlist-form input[type="submit"]',tap:s.dN}),this.addWishlistValidator.add([{selector:'.wishlist-form input[name="wishlistname"]',validate:function(e,t){e(t.length>0)},errorMessage:"You must enter a wishlist name."}]),e.on("submit",(function(e){t.addWishlistValidator.performCheck(),t.addWishlistValidator.areAll("valid")||e.preventDefault()}))},c.onReady=function(){var e=o(".wishlist-form");o("[data-pagination-wishlist]").length&&function(){var e=i(".pagination-list");if(e.length){var t=i(".pagination-item--next",e),r=i(".pagination-item--previous",e);!function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];i.each(r,(function(t,r){var a=r.children(".pagination-link");if(r.length&&!a.attr("href").includes("page=")){var n=a.attr("href");a.attr("href",e+"page="+n)}}))}(i("[data-pagination-current-page-link]").attr("href").split("page=").shift(),r,t)}}(),e.length&&this.registerAddWishListValidation(e),this.wishlistDeleteConfirm()},t}(n.A)}}]);
//# sourceMappingURL=theme-bundle.chunk.122.js.map
