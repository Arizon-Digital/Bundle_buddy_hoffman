(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[44],{12027:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>h});var n=r(85650),i=r(57792),o=r(71305),a=r(13228),s=r(71779),c=r(80156),l=r(42240),u=r(33270);function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}var h=function(t){function e(e){var r;return(r=t.call(this,e)||this).validationDictionary=(0,s.i)(e),r}var r,i;i=t,(r=e).prototype=Object.create(i.prototype),r.prototype.constructor=r,p(r,i);var h=e.prototype;return h.setLiveRegionAttributes=function(t,e,r){t.attr({role:e,"aria-live":r})},h.makeShopByPriceFilterAccessible=function(){var t=this;u("[data-shop-by-price]").length&&(u(".navList-action").hasClass("is-active")&&u("a.navList-action.is-active").focus(),u("a.navList-action").on("click",(function(){return t.setLiveRegionAttributes(u("span.price-filter-message"),"status","assertive")})))},h.onReady=function(){var t=this;this.arrangeFocusOnSortBy(),u('[data-button-type="add-cart"]').on("click",(function(e){return t.setLiveRegionAttributes(u(e.currentTarget).next(),"status","polite")})),this.makeShopByPriceFilterAccessible();for(var e,r=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return d(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(document.querySelectorAll(".card .card-figcaption-bottom .card-compare"));!(e=r()).done;)e.value.addEventListener("click",(function(){(0,o.A)(t.context.urls)}));u("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),n.JL.on("sortBy-submitted",this.onSortBySubmit)),u("a.reset-btn").on("click",(function(){return t.setLiveRegionsAttributes(u("span.reset-message"),"status","polite")})),this.ariaNotifyNoProducts(),this.category_sidebar(),(0,c.A)(this.context),(0,l.A)(),this.showProductsPerPage(),1==this.context.themeSettings.halo_show_more&&this.showmore_product(),this.checkFilterDevide()},h.ariaNotifyNoProducts=function(){var t=u("[data-no-products-notification]");t.length&&t.focus()},h.initFacetedSearch=function(){var t=this,e=this.validationDictionary,r=e.price_min_evaluation,n=e.price_max_evaluation,i=e.price_min_not_entered,o=e.price_max_not_entered,s=e.price_invalid_value,d=u("#product-listing-container"),p=u("#faceted-search-container"),h={config:{category:{shop_by_price:!0,products:{limit:this.context.categoryProductsPerPage}}},template:{productListing:"category/product-listing",sidebar:"category/sidebar"},showMore:"category/show-more"};this.facetedSearch=new a.A(h,(function(e){d.html(e.productListing),p.html(e.sidebar),u("body").triggerHandler("compareReset"),u("html, body").animate({scrollTop:0},100),t.category_sidebar(),t.showProductsPerPage(),(0,l.A)(),(0,c.A)(t.context)}),{validationErrorMessages:{onMinPriceError:r,onMaxPriceError:n,minPriceNotEntered:i,maxPriceNotEntered:o,onInvalidPrice:s}})},h.category_sidebar=function(){u(".all-categories-list").length>0&&(u("ul.all-categories-list li").each((function(){var t=u(".page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active").prev(".breadcrumb").children("a").attr("href");u(this).children("a").attr("href")!=window.location&&u(this).children("a").attr("href")!=window.location.pathname||(u(this).addClass("current-cat"),u(this).children(".dropdown-category-list").addClass("cat-expanded").siblings(".icon-dropdown").addClass("is-clicked"),u(this).parents(".dropdown-category-list").addClass("cat-expanded").siblings(".icon-dropdown").addClass("is-clicked")),u(this).children("a").attr("href")==t&&(u(this).addClass("current-cat"),u(this).parents(".dropdown-category-list").addClass("cat-expanded").siblings(".icon-dropdown").addClass("is-clicked"))})),u(".all-categories-list .icon-dropdown").on("click",(function(){u(this).parent().siblings().removeClass("is-clicked"),u(this).parent().siblings().find("> .dropdown-category-list").slideUp("slow"),u(this).parent().siblings().find("> .icon-dropdown").removeClass("is-clicked"),u(this).parent().find("> .dropdown-category-list").slideToggle("slow"),u(this).parent().siblings().removeClass("open"),u(this).hasClass("is-clicked")?(u(this).removeClass("is-clicked"),u(this).parent().removeClass("open")):(u(this).addClass("is-clicked"),u(this).parent().addClass("open"))})))},h.showProductsPerPage=function(){try{var t=new URL(window.location.href).searchParams.get("limit");if(null!=t){var e=document.querySelectorAll("select#limit option");Array.prototype.forEach.call(e,(function(e){e.value==t&&(e.selected=!0)}))}}catch(t){}},h.showmore_product=function(){var t=this;this.context,u("#button-showmore-category").on("click",(function(e){e.preventDefault();var r=u(".pagination-wrapper .pagination-item--current").next(),n=r.find("a").attr("href");null==n?u("#button-showmore-category").hasClass("disable")||u("#button-showmore-category").addClass("disable"):(u("#button-showmore-category").addClass("loading"),u.ajax({type:"get",url:n.replace("http://","//"),context:t.content,success:function(t){u(t).find("#product-listing-container .productListing").length>0&&(u("#product-listing-container .productListing").append(u(t).find("#product-listing-container .productListing").children()),u(".pagination-list").html(u(t).find(".pagination-list").html()),u("#button-showmore-category").removeClass("loading"),r=u(".pagination-wrapper .pagination-item--current").next(),Number(u(t).find(".pagination-info .end").text())<Number(u(t).find(".pagination-info .total").text())?u(".pagination .pagination-info .end").html(u(t).find(".pagination-info .end").text()):u(".pagination .pagination-info .end").html(u(t).find(".pagination-info .total").text()),0===r.length&&(u("#button-showmore-category").addClass("disable"),u("#button-showmore-category > span").text("No more product")),u("#product-listing-container .card-variant").attr("id"))}}))}))},h.checkFilterDevide=function(){var t=u("#faceted-search-container.filter-desktop #facetedSearch"),e=u("#faceted-search-container.custom-show-on-mobile nav");u(window).width()<768&&t.appendTo(e),u("#facet-range-form .button").on("click",(function(){if(u(window).width()<768){var t=window.location.href;fetch(t).then((function(){location.reload()}))}}))},e}(i.A)},71779:(t,e,r)=>{"use strict";r.d(e,{i:()=>o});var n="translations",i=function(t){return!!Object.keys(t[n]).length},o=function(t){var e=function(){for(var t=0;t<arguments.length;t++){var e=JSON.parse(t<0||arguments.length<=t?void 0:arguments[t]);if(i(e))return e}}(t.validationDictionaryJSON,t.validationFallbackDictionaryJSON,t.validationDefaultDictionaryJSON),r=Object.values(e[n]);return Object.keys(e[n]).map((function(t){return t.split(".").pop()})).reduce((function(t,e,n){return t[e]=r[n],t}),{})}},38859:(t,e,r)=>{var n=r(56449);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return n(t)?t:[t]}},51873:(t,e,r)=>{var n=r(9325).Symbol;t.exports=n},15325:(t,e,r)=>{var n=r(96131);t.exports=function(t,e){return!(null==t||!t.length)&&n(t,e,0)>-1}},29905:t=>{t.exports=function(t,e,r){for(var n=-1,i=null==t?0:t.length;++n<i;)if(r(e,t[n]))return!0;return!1}},34932:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i}},14528:t=>{t.exports=function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}},83915:(t,e,r)=>{var n=r(38859),i=r(15325),o=r(29905),a=r(34932),s=r(27301),c=r(19219);t.exports=function(t,e,r,l){var u=-1,d=i,p=!0,h=t.length,f=[],g=e.length;if(!h)return f;r&&(e=a(e,s(r))),l?(d=o,p=!1):e.length>=200&&(d=c,p=!1,e=new n(e));t:for(;++u<h;){var v=t[u],b=null==r?v:r(v);if(v=l||0!==v?v:0,p&&b==b){for(var m=g;m--;)if(e[m]===b)continue t;f.push(v)}else d(e,b,l)||f.push(v)}return f}},83120:(t,e,r)=>{var n=r(14528),i=r(45891);t.exports=function t(e,r,o,a,s){var c=-1,l=e.length;for(o||(o=i),s||(s=[]);++c<l;){var u=e[c];r>0&&o(u)?r>1?t(u,r-1,o,a,s):n(s,u):a||(s[s.length]=u)}return s}},27301:t=>{t.exports=function(t){return function(e){return t(e)}}},55765:(t,e,r)=>{var n=r(38859),i=r(15325),o=r(29905),a=r(19219),s=r(44517),c=r(84247);t.exports=function(t,e,r){var l=-1,u=i,d=t.length,p=!0,h=[],f=h;if(r)p=!1,u=o;else if(d>=200){var g=e?null:s(t);if(g)return c(g);p=!1,u=a,f=new n}else f=e?[]:h;t:for(;++l<d;){var v=t[l],b=e?e(v):v;if(v=r||0!==v?v:0,p&&b==b){for(var m=f.length;m--;)if(f[m]===b)continue t;e&&f.push(b),h.push(v)}else u(f,b,r)||(f!==h&&f.push(b),h.push(v))}return h}},19219:(t,e,r)=>{var n=r(96131);t.exports=function(t,e){return!(null==t||!t.length)&&n(t,e,0)>-1}},44517:t=>{t.exports=function(){}},45891:(t,e,r)=>{var n=r(51873),i=r(72428),o=r(56449),a=n?n.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(a&&t&&t[a])}},84247:t=>{t.exports=function(){return[]}},72428:t=>{t.exports=function(){return!1}},56449:t=>{var e=Array.isArray;t.exports=e},64894:(t,e,r)=>{var n=r(1882),i=r(30294);t.exports=function(t){return null!=t&&i(t.length)&&!n(t)}},83693:(t,e,r)=>{var n=r(64894),i=r(40346);t.exports=function(t){return i(t)&&n(t)}},1882:(t,e,r)=>{var n=r(72552),i=r(23805);t.exports=function(t){if(!i(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},30294:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},80299:(t,e,r)=>{var n=r(83120),i=r(69302),o=r(55765),a=r(83693),s=i((function(t){return o(n(t,1,a,!0))}));t.exports=s},91648:(t,e,r)=>{var n=r(83915),i=r(69302),o=r(83693),a=i((function(t,e){return o(t)?n(t,e):[]}));t.exports=a}}]);
//# sourceMappingURL=theme-bundle.chunk.44.js.map
