(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[341],{83346:(t,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>p});var e=r(85650),i=r(57792),o=r(71305),a=r(13228),s=r(71779),c=r(80156),l=r(42240),d=r(33270);function u(t,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},u(t,n)}var p=function(t){function n(n){var r;return(r=t.call(this,n)||this).validationDictionary=(0,s.i)(n),r}var r,i;i=t,(r=n).prototype=Object.create(i.prototype),r.prototype.constructor=r,u(r,i);var p=n.prototype;return p.onReady=function(){(0,o.A)(this.context.urls),d("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),e.JL.on("sortBy-submitted",this.onSortBySubmit)),this.category_sidebar(),(0,c.A)(this.context),(0,l.A)(),this.showProductsPerPage(),1==this.context.themeSettings.halo_show_more&&this.showmore_product()},p.initFacetedSearch=function(){var t=this,n=this.validationDictionary,r=n.price_min_evaluation,e=n.price_max_evaluation,i=n.price_min_not_entered,o=n.price_max_not_entered,s=n.price_invalid_value,u=d("#product-listing-container"),p=d("#faceted-search-container"),h={template:{productListing:"brand/product-listing",sidebar:"brand/sidebar"},config:{shop_by_brand:!0,brand:{products:{limit:this.context.brandProductsPerPage}}},showMore:"brand/show-more"};this.facetedSearch=new a.A(h,(function(n){u.html(n.productListing),p.html(n.sidebar),d("body").triggerHandler("compareReset"),d("html, body").animate({scrollTop:0},100),t.category_sidebar(),t.showProductsPerPage(),(0,l.A)(),(0,c.A)(t.context)}),{validationErrorMessages:{onMinPriceError:r,onMaxPriceError:e,minPriceNotEntered:i,maxPriceNotEntered:o,onInvalidPrice:s}})},p.category_sidebar=function(){d(".all-categories-list").length>0&&(d("ul.all-categories-list li").each((function(){var t=d(".page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active").prev(".breadcrumb").children("a").attr("href");d(this).children("a").attr("href")!=window.location&&d(this).children("a").attr("href")!=window.location.pathname||(d(this).addClass("current-cat"),d(this).children(".dropdown-category-list").addClass("cat-expanded").siblings(".icon-dropdown").addClass("is-clicked"),d(this).parents(".dropdown-category-list").addClass("cat-expanded").siblings(".icon-dropdown").addClass("is-clicked")),d(this).children("a").attr("href")==t&&(d(this).addClass("current-cat"),d(this).parents(".dropdown-category-list").addClass("cat-expanded").siblings(".icon-dropdown").addClass("is-clicked"))})),d(".all-categories-list .icon-dropdown").on("click",(function(){d(this).parent().siblings().removeClass("is-clicked"),d(this).parent().siblings().find("> .dropdown-category-list").slideUp("slow"),d(this).parent().siblings().find("> .icon-dropdown").removeClass("is-clicked"),d(this).parent().find("> .dropdown-category-list").slideToggle("slow"),d(this).parent().siblings().removeClass("open"),d(this).hasClass("is-clicked")?(d(this).removeClass("is-clicked"),d(this).parent().removeClass("open")):(d(this).addClass("is-clicked"),d(this).parent().addClass("open"))})))},p.showProductsPerPage=function(){try{var t=new URL(window.location.href).searchParams.get("limit");if(null!=t){var n=document.querySelectorAll("select#limit option");Array.prototype.forEach.call(n,(function(n){n.value==t&&(n.selected=!0)}))}}catch(t){}},p.showmore_product=function(){var t=this;this.context,d("#button-showmore-category").on("click",(function(n){n.preventDefault();var r=d(".pagination-wrapper .pagination-item--current").next(),e=r.find("a").attr("href");null==e?d("#button-showmore-category").hasClass("disable")||d("#button-showmore-category").addClass("disable"):(d("#button-showmore-category").addClass("loading"),d.ajax({type:"get",url:e.replace("http://","//"),context:t.content,success:function(t){d(t).find("#product-listing-container .productListing").length>0&&(d("#product-listing-container .productListing").append(d(t).find("#product-listing-container .productListing").children()),d(".pagination-list").html(d(t).find(".pagination-list").html()),d("#button-showmore-category").removeClass("loading"),r=d(".pagination-wrapper .pagination-item--current").next(),Number(d(t).find(".pagination-info .end").text())<Number(d(t).find(".pagination-info .total").text())?d(".pagination .pagination-info .end").html(d(t).find(".pagination-info .end").text()):d(".pagination .pagination-info .end").html(d(t).find(".pagination-info .total").text()),0===r.length&&(d("#button-showmore-category").addClass("disable"),d("#button-showmore-category > span").text("No more product")),d("#product-listing-container .card-variant").attr("id"))}}))}))},n}(i.A)},71779:(t,n,r)=>{"use strict";r.d(n,{i:()=>o});var e="translations",i=function(t){return!!Object.keys(t[e]).length},o=function(t){var n=function(){for(var t=0;t<arguments.length;t++){var n=JSON.parse(t<0||arguments.length<=t?void 0:arguments[t]);if(i(n))return n}}(t.validationDictionaryJSON,t.validationFallbackDictionaryJSON,t.validationDefaultDictionaryJSON),r=Object.values(n[e]);return Object.keys(n[e]).map((function(t){return t.split(".").pop()})).reduce((function(t,n,e){return t[n]=r[e],t}),{})}},38859:(t,n,r)=>{var e=r(56449);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return e(t)?t:[t]}},51873:(t,n,r)=>{var e=r(9325).Symbol;t.exports=e},15325:(t,n,r)=>{var e=r(96131);t.exports=function(t,n){return!(null==t||!t.length)&&e(t,n,0)>-1}},29905:t=>{t.exports=function(t,n,r){for(var e=-1,i=null==t?0:t.length;++e<i;)if(r(n,t[e]))return!0;return!1}},34932:t=>{t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length,i=Array(e);++r<e;)i[r]=n(t[r],r,t);return i}},14528:t=>{t.exports=function(t,n){for(var r=-1,e=n.length,i=t.length;++r<e;)t[i+r]=n[r];return t}},83915:(t,n,r)=>{var e=r(38859),i=r(15325),o=r(29905),a=r(34932),s=r(27301),c=r(19219);t.exports=function(t,n,r,l){var d=-1,u=i,p=!0,h=t.length,f=[],g=n.length;if(!h)return f;r&&(n=a(n,s(r))),l?(u=o,p=!1):n.length>=200&&(u=c,p=!1,n=new e(n));t:for(;++d<h;){var v=t[d],b=null==r?v:r(v);if(v=l||0!==v?v:0,p&&b==b){for(var m=g;m--;)if(n[m]===b)continue t;f.push(v)}else u(n,b,l)||f.push(v)}return f}},83120:(t,n,r)=>{var e=r(14528),i=r(45891);t.exports=function t(n,r,o,a,s){var c=-1,l=n.length;for(o||(o=i),s||(s=[]);++c<l;){var d=n[c];r>0&&o(d)?r>1?t(d,r-1,o,a,s):e(s,d):a||(s[s.length]=d)}return s}},27301:t=>{t.exports=function(t){return function(n){return t(n)}}},55765:(t,n,r)=>{var e=r(38859),i=r(15325),o=r(29905),a=r(19219),s=r(44517),c=r(84247);t.exports=function(t,n,r){var l=-1,d=i,u=t.length,p=!0,h=[],f=h;if(r)p=!1,d=o;else if(u>=200){var g=n?null:s(t);if(g)return c(g);p=!1,d=a,f=new e}else f=n?[]:h;t:for(;++l<u;){var v=t[l],b=n?n(v):v;if(v=r||0!==v?v:0,p&&b==b){for(var m=f.length;m--;)if(f[m]===b)continue t;n&&f.push(b),h.push(v)}else d(f,b,r)||(f!==h&&f.push(b),h.push(v))}return h}},19219:(t,n,r)=>{var e=r(96131);t.exports=function(t,n){return!(null==t||!t.length)&&e(t,n,0)>-1}},44517:t=>{t.exports=function(){}},45891:(t,n,r)=>{var e=r(51873),i=r(72428),o=r(56449),a=e?e.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(a&&t&&t[a])}},84247:t=>{t.exports=function(){return[]}},72428:t=>{t.exports=function(){return!1}},56449:t=>{var n=Array.isArray;t.exports=n},64894:(t,n,r)=>{var e=r(1882),i=r(30294);t.exports=function(t){return null!=t&&i(t.length)&&!e(t)}},83693:(t,n,r)=>{var e=r(64894),i=r(40346);t.exports=function(t){return i(t)&&e(t)}},1882:(t,n,r)=>{var e=r(72552),i=r(23805);t.exports=function(t){if(!i(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},30294:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},80299:(t,n,r)=>{var e=r(83120),i=r(69302),o=r(55765),a=r(83693),s=i((function(t){return o(e(t,1,a,!0))}));t.exports=s},91648:(t,n,r)=>{var e=r(83915),i=r(69302),o=r(83693),a=i((function(t,n){return o(t)?e(t,n):[]}));t.exports=a}}]);
//# sourceMappingURL=theme-bundle.chunk.341.js.map