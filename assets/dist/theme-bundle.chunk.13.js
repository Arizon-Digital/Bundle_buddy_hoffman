(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{677:function(o,t,e){"use strict";e.r(t),function(o){e.d(t,"default",(function(){return a}));e(2);var l=e(75),n=e(743);function s(o,t){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o})(o,t)}var a=function(t){function e(o){return t.call(this,o)||this}var l,a;a=t,(l=e).prototype=Object.create(a.prototype),l.prototype.constructor=l,s(l,a);var i=e.prototype;return i.onReady=function(){Object(n.a)(o("#halo-lookbook-slider")),this.faqsPage(),this.faqsToggle(),this.lookbookSlider()},i.faqsPage=function(){o(".faq-desc").appendTo(".page-normal .page-description")},i.faqsToggle=function(){o(".page-normal .card .title").on("click",(function(t){t.preventDefault();var e=o(t.currentTarget);o(".page-normal .card .title").not(e).removeClass("collapsed"),e.hasClass("collapsed")?e.removeClass("collapsed"):e.addClass("collapsed"),o(".page-normal .card").each((function(t,e){o(".title",e).hasClass("collapsed")?o(e).find(".collapse").slideDown("slow"):o(e).find(".collapse").slideUp("slow")}))}))},i.lookbookSlider=function(){o("#halo-lookbook-slider").length>0&&function(o){o.length>0&&o.slick({dots:!0,arrows:!1,fade:!0,infinite:!1,mobileFirst:!0,slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:768,settings:{dots:!1,arrows:!0}}]})}(o("#halo-lookbook-slider").find(".halo-lookbook-slider"))},e}(l.a)}.call(this,e(0))},743:function(o,t,e){"use strict";(function(o){var l=e(2);t.a=function(t){var e=t,n=e.find(".halo-lookbook-popup"),s={template:"halothemes/lookbook/halo-lookbook-tmp"};e.find("[data-product-lookbook]").on("click",(function(t){n.removeClass("is-open").empty();var a=o(t.currentTarget).data("product-id"),i=o(t.currentTarget).offset(),r=e.offset();null!=a&&(l.b.api.product.getById(a,s,(function(o,t){if(o)return!1;n.html(t)})),o(window).width()>=551?n.css({top:i.top-r.top-200,left:i.left-r.left+30}):n.css({top:i.top-r.top+15,left:15}),n.addClass("is-open"))})),o(document).on("click",".halo-lookbook-close",(function(o){o.preventDefault(),n.hasClass("is-open")&&n.removeClass("is-open")})),o(document).on("click",(function(t){n.hasClass("is-open")&&0===o(t.target).closest(n).length&&0===o(t.target).closest("[data-product-lookbook]").length&&n.removeClass("is-open")}))}}).call(this,e(0))}}]);
//# sourceMappingURL=theme-bundle.chunk.13.js.map
