"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_brands_js"],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./halothemes/haloAZBrands */ "./assets/js/theme/halothemes/haloAZBrands.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Brands = /*#__PURE__*/function (_PageManager) {
  function Brands(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Brands, _PageManager);
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloAZBrands__WEBPACK_IMPORTED_MODULE_1__["default"])(this.context);
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/halothemes/haloAZBrands.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/halothemes/haloAZBrands.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var azWrapper = $('#haloAZBrandsWrapper'),
    azNavigation = $('#haloAZBrandsTable');
  var requestOptions = {
    config: {
      brands: {
        limit: context.themeSettings.brandpage_brands_per_page
      }
    },
    template: 'halothemes/brand/halo-all-brands'
  };
  if (context.themeSettings.halo_brandAZlayout == true) {
    getAllBrand();
    brandNavigationEvent();
    activeBrand();
  }
  function getAllBrand() {
    azWrapper.addClass('is-loading');
    var url = context.urls.brands;
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  function brandNavigationEvent() {
    azNavigation.on('click', 'a', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      azNavigation.children('li').removeClass('is-active');
      $target.parent().addClass('is-active');
      var letter = $target.data('href');
      if (letter !== undefined || letter) {
        azWrapper.removeClass('active-all');
        azWrapper.find('.azBrands-group').removeClass('is-active');
        azWrapper.find('[data-letter=' + letter + ']').addClass('is-active');
      } else {
        azWrapper.addClass('active-all');
      }
    });
  }
  function parseListBrand(list) {
    azWrapper.find('.azBrands-group').each(function (index, element) {
      var letter = $(element).data('letter');
      if (!isLetter(letter)) {
        for (var i = 0; i < 10; i++) {
          $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + i + ']'));
        }
      } else {
        $('.azBrands-group-list', element).append(list.find('[data-brand-letter=' + letter + ']'));
      }
      if ($('.azBrands-group-list', element).children().length > 0) {
        azNavigation.find('[data-letter=' + letter + ']').removeClass('disable').addClass('has-letter');
      }
    });
  }
  function loadMoreBrands(url) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, requestOptions, function (error, response) {
      if (error) {
        return '';
      }
      var list = $(response);
      parseListBrand(list);
      var nextUrl = list.data('brands-list-next');
      if (nextUrl) {
        loadMoreBrands(nextUrl);
      } else {
        azWrapper.removeClass('is-loading');
      }
    });
  }
  function activeBrand() {
    var linkBrand = window.location.hash;
    var brandLetter = linkBrand.split('#')[1];
    azNavigation.find('[data-letter="' + brandLetter + '"] a').trigger('click');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZHNfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWTtBQUFBLElBRWhDRSxNQUFNLDBCQUFBQyxZQUFBO0VBQzFCLFNBQUFELE9BQVlFLE9BQU8sRUFBRTtJQUFBLE9BQ2RELFlBQUEsQ0FBQUUsSUFBQSxPQUFNRCxPQUFPLENBQUM7RUFDbEI7RUFBQ0UsY0FBQSxDQUFBSixNQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBRUpFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDVFIsb0VBQVksQ0FBQyxJQUFJLENBQUNHLE9BQU8sQ0FBQztFQUN4QixDQUFDO0VBQUEsT0FBQUYsTUFBQTtBQUFBLEVBUCtCRixxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUUvQyw2QkFBZSxvQ0FBVUksT0FBTyxFQUFFO0VBQzlCLElBQU1RLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZDQyxZQUFZLEdBQUdELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztFQUUxQyxJQUFNRSxjQUFjLEdBQUc7SUFDbkJDLE1BQU0sRUFBRTtNQUNKQyxNQUFNLEVBQUU7UUFDSkMsS0FBSyxFQUFFZCxPQUFPLENBQUNlLGFBQWEsQ0FBQ0M7TUFDakM7SUFDSixDQUFDO0lBQ0RDLFFBQVEsRUFBRTtFQUNkLENBQUM7RUFFRCxJQUFJakIsT0FBTyxDQUFDZSxhQUFhLENBQUNHLGtCQUFrQixJQUFJLElBQUksRUFBRTtJQUNsREMsV0FBVyxDQUFDLENBQUM7SUFDYkMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QkMsV0FBVyxDQUFDLENBQUM7RUFDakI7RUFFQSxTQUFTRixXQUFXQSxDQUFBLEVBQUU7SUFDbEJYLFNBQVMsQ0FBQ2MsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUVoQyxJQUFNQyxHQUFHLEdBQUd2QixPQUFPLENBQUN3QixJQUFJLENBQUNYLE1BQU07SUFFL0JOLHNFQUFTLENBQUNtQixPQUFPLENBQUNILEdBQUcsRUFBRVosY0FBYyxFQUFFLFVBQUNnQixLQUFLLEVBQUVDLFFBQVEsRUFBSztNQUN4RCxJQUFJRCxLQUFLLEVBQUU7UUFDUCxPQUFPLEVBQUU7TUFDYjtNQUVBLElBQUlFLElBQUksR0FBR3BCLENBQUMsQ0FBQ21CLFFBQVEsQ0FBQztNQUV0QkUsY0FBYyxDQUFDRCxJQUFJLENBQUM7TUFFcEIsSUFBTUUsT0FBTyxHQUFHRixJQUFJLENBQUNHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztNQUU3QyxJQUFJRCxPQUFPLEVBQUU7UUFDVEUsY0FBYyxDQUFDRixPQUFPLENBQUM7TUFDM0IsQ0FBQyxNQUFLO1FBQ0Z2QixTQUFTLENBQUMwQixXQUFXLENBQUMsWUFBWSxDQUFDO01BQ3ZDO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTQyxRQUFRQSxDQUFDQyxHQUFHLEVBQUU7SUFDbkIsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxJQUFJRCxHQUFHLENBQUNFLEtBQUssQ0FBQyxRQUFRLENBQUM7RUFDbEQ7RUFFQSxTQUFTbEIsb0JBQW9CQSxDQUFBLEVBQUU7SUFDM0JWLFlBQVksQ0FBQzZCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQUNDLEtBQUssRUFBSztNQUNyQ0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztNQUV0QixJQUFNQyxPQUFPLEdBQUdqQyxDQUFDLENBQUMrQixLQUFLLENBQUNHLGFBQWEsQ0FBQztNQUV0Q2pDLFlBQVksQ0FBQ2tDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQ1YsV0FBVyxDQUFDLFdBQVcsQ0FBQztNQUVwRFEsT0FBTyxDQUFDRyxNQUFNLENBQUMsQ0FBQyxDQUFDdkIsUUFBUSxDQUFDLFdBQVcsQ0FBQztNQUV0QyxJQUFNd0IsTUFBTSxHQUFHSixPQUFPLENBQUNWLElBQUksQ0FBQyxNQUFNLENBQUM7TUFFbkMsSUFBSWMsTUFBTSxLQUFLQyxTQUFTLElBQUlELE1BQU0sRUFBRTtRQUNoQ3RDLFNBQVMsQ0FBQzBCLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDbkMxQixTQUFTLENBQUN3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQ2QsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUMxRDFCLFNBQVMsQ0FBQ3dDLElBQUksQ0FBQyxlQUFlLEdBQUNGLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQ3hCLFFBQVEsQ0FBQyxXQUFXLENBQUM7TUFDcEUsQ0FBQyxNQUFNO1FBQ0hkLFNBQVMsQ0FBQ2MsUUFBUSxDQUFDLFlBQVksQ0FBQztNQUNwQztJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBU1EsY0FBY0EsQ0FBQ0QsSUFBSSxFQUFDO0lBQ3pCckIsU0FBUyxDQUFDd0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUNDLElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSztNQUN2RCxJQUFJTCxNQUFNLEdBQUdyQyxDQUFDLENBQUMwQyxPQUFPLENBQUMsQ0FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUM7TUFFdEMsSUFBRyxDQUFDRyxRQUFRLENBQUNXLE1BQU0sQ0FBQyxFQUFDO1FBQ2pCLEtBQUssSUFBSU0sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7VUFDekIzQyxDQUFDLENBQUMsc0JBQXNCLEVBQUUwQyxPQUFPLENBQUMsQ0FBQ0UsTUFBTSxDQUFDeEIsSUFBSSxDQUFDbUIsSUFBSSxDQUFDLHFCQUFxQixHQUFDSSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDckY7TUFDSixDQUFDLE1BQU07UUFDSDNDLENBQUMsQ0FBQyxzQkFBc0IsRUFBRTBDLE9BQU8sQ0FBQyxDQUFDRSxNQUFNLENBQUN4QixJQUFJLENBQUNtQixJQUFJLENBQUMscUJBQXFCLEdBQUNGLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQztNQUMxRjtNQUVBLElBQUdyQyxDQUFDLENBQUMsc0JBQXNCLEVBQUUwQyxPQUFPLENBQUMsQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQ1AsTUFBTSxHQUFHLENBQUMsRUFBQztRQUN4RDNCLFlBQVksQ0FBQ3NDLElBQUksQ0FBQyxlQUFlLEdBQUNGLE1BQU0sR0FBQyxHQUFHLENBQUMsQ0FBQ1osV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDWixRQUFRLENBQUMsWUFBWSxDQUFDO01BQy9GO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTVyxjQUFjQSxDQUFDVixHQUFHLEVBQUU7SUFDekJoQixzRUFBUyxDQUFDbUIsT0FBTyxDQUFDSCxHQUFHLEVBQUVaLGNBQWMsRUFBRSxVQUFDZ0IsS0FBSyxFQUFFQyxRQUFRLEVBQUs7TUFDeEQsSUFBSUQsS0FBSyxFQUFFO1FBQ1AsT0FBTyxFQUFFO01BQ2I7TUFFQSxJQUFJRSxJQUFJLEdBQUdwQixDQUFDLENBQUNtQixRQUFRLENBQUM7TUFFdEJFLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDO01BRXBCLElBQU1FLE9BQU8sR0FBR0YsSUFBSSxDQUFDRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7TUFFN0MsSUFBSUQsT0FBTyxFQUFFO1FBQ1RFLGNBQWMsQ0FBQ0YsT0FBTyxDQUFDO01BQzNCLENBQUMsTUFBSztRQUNGdkIsU0FBUyxDQUFDMEIsV0FBVyxDQUFDLFlBQVksQ0FBQztNQUN2QztJQUNKLENBQUMsQ0FBQztFQUNOO0VBRUEsU0FBU2IsV0FBV0EsQ0FBQSxFQUFHO0lBQ25CLElBQU1pQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO0lBQ3RDLElBQU1DLFdBQVcsR0FBR0osU0FBUyxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNDakQsWUFBWSxDQUFDc0MsSUFBSSxDQUFDLGdCQUFnQixHQUFDVSxXQUFXLEdBQUMsTUFBTSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUM7RUFDM0U7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2JyYW5kcy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9BWkJyYW5kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xyXG5pbXBvcnQgaGFsb0FaQnJhbmRzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQVpCcmFuZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmRzIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG5cdGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgIH1cclxuICAgIFxyXG5cdG9uUmVhZHkoKSB7XHJcblx0XHRoYWxvQVpCcmFuZHModGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IGF6V3JhcHBlciA9ICQoJyNoYWxvQVpCcmFuZHNXcmFwcGVyJyksXHJcbiAgICAgICAgYXpOYXZpZ2F0aW9uID0gJCgnI2hhbG9BWkJyYW5kc1RhYmxlJyk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgIGJyYW5kczoge1xyXG4gICAgICAgICAgICAgICAgbGltaXQ6IGNvbnRleHQudGhlbWVTZXR0aW5ncy5icmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9icmFuZC9oYWxvLWFsbC1icmFuZHMnLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fYnJhbmRBWmxheW91dCA9PSB0cnVlKSB7XHJcbiAgICAgICAgZ2V0QWxsQnJhbmQoKTtcclxuICAgICAgICBicmFuZE5hdmlnYXRpb25FdmVudCgpO1xyXG4gICAgICAgIGFjdGl2ZUJyYW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsQnJhbmQoKXtcclxuICAgICAgICBheldyYXBwZXIuYWRkQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gY29udGV4dC51cmxzLmJyYW5kcztcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCByZXF1ZXN0T3B0aW9ucywgKGVycm9yLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgIHBhcnNlTGlzdEJyYW5kKGxpc3QpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV4dFVybCA9IGxpc3QuZGF0YSgnYnJhbmRzLWxpc3QtbmV4dCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHRVcmwpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRNb3JlQnJhbmRzKG5leHRVcmwpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzTGV0dGVyKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvW2Etel0vaSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnJhbmROYXZpZ2F0aW9uRXZlbnQoKXtcclxuICAgICAgICBhek5hdmlnYXRpb24ub24oJ2NsaWNrJywgJ2EnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgYXpOYXZpZ2F0aW9uLmNoaWxkcmVuKCdsaScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICR0YXJnZXQucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGV0dGVyID0gJHRhcmdldC5kYXRhKCdocmVmJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV0dGVyICE9PSB1bmRlZmluZWQgfHwgbGV0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1hbGwnKTtcclxuICAgICAgICAgICAgICAgIGF6V3JhcHBlci5maW5kKCcuYXpCcmFuZHMtZ3JvdXAnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBheldyYXBwZXIuZmluZCgnW2RhdGEtbGV0dGVyPScrbGV0dGVyKyddJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLmFkZENsYXNzKCdhY3RpdmUtYWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUxpc3RCcmFuZChsaXN0KXtcclxuICAgICAgICBheldyYXBwZXIuZmluZCgnLmF6QnJhbmRzLWdyb3VwJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgdmFyIGxldHRlciA9ICQoZWxlbWVudCkuZGF0YSgnbGV0dGVyJyk7XHJcblxyXG4gICAgICAgICAgICBpZighaXNMZXR0ZXIobGV0dGVyKSl7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmFwcGVuZChsaXN0LmZpbmQoJ1tkYXRhLWJyYW5kLWxldHRlcj0nK2krJ10nKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYXpCcmFuZHMtZ3JvdXAtbGlzdCcsIGVsZW1lbnQpLmFwcGVuZChsaXN0LmZpbmQoJ1tkYXRhLWJyYW5kLWxldHRlcj0nK2xldHRlcisnXScpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoJCgnLmF6QnJhbmRzLWdyb3VwLWxpc3QnLCBlbGVtZW50KS5jaGlsZHJlbigpLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgYXpOYXZpZ2F0aW9uLmZpbmQoJ1tkYXRhLWxldHRlcj0nK2xldHRlcisnXScpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJykuYWRkQ2xhc3MoJ2hhcy1sZXR0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRNb3JlQnJhbmRzKHVybCkge1xyXG4gICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgcmVxdWVzdE9wdGlvbnMsIChlcnJvciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJChyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICBwYXJzZUxpc3RCcmFuZChsaXN0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRVcmwgPSBsaXN0LmRhdGEoJ2JyYW5kcy1saXN0LW5leHQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0VXJsKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkTW9yZUJyYW5kcyhuZXh0VXJsKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgYXpXcmFwcGVyLnJlbW92ZUNsYXNzKCdpcy1sb2FkaW5nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmVCcmFuZCgpIHtcclxuICAgICAgICBjb25zdCBsaW5rQnJhbmQgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcclxuICAgICAgICBjb25zdCBicmFuZExldHRlciA9IGxpbmtCcmFuZC5zcGxpdCgnIycpWzFdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF6TmF2aWdhdGlvbi5maW5kKCdbZGF0YS1sZXR0ZXI9XCInK2JyYW5kTGV0dGVyKydcIl0gYScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiaGFsb0FaQnJhbmRzIiwiQnJhbmRzIiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJkZWZhdWx0IiwidXRpbHMiLCJheldyYXBwZXIiLCIkIiwiYXpOYXZpZ2F0aW9uIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJicmFuZHMiLCJsaW1pdCIsInRoZW1lU2V0dGluZ3MiLCJicmFuZHBhZ2VfYnJhbmRzX3Blcl9wYWdlIiwidGVtcGxhdGUiLCJoYWxvX2JyYW5kQVpsYXlvdXQiLCJnZXRBbGxCcmFuZCIsImJyYW5kTmF2aWdhdGlvbkV2ZW50IiwiYWN0aXZlQnJhbmQiLCJhZGRDbGFzcyIsInVybCIsInVybHMiLCJhcGkiLCJnZXRQYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsImxpc3QiLCJwYXJzZUxpc3RCcmFuZCIsIm5leHRVcmwiLCJkYXRhIiwibG9hZE1vcmVCcmFuZHMiLCJyZW1vdmVDbGFzcyIsImlzTGV0dGVyIiwic3RyIiwibGVuZ3RoIiwibWF0Y2giLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImNoaWxkcmVuIiwicGFyZW50IiwibGV0dGVyIiwidW5kZWZpbmVkIiwiZmluZCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJpIiwiYXBwZW5kIiwibGlua0JyYW5kIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiYnJhbmRMZXR0ZXIiLCJzcGxpdCIsInRyaWdnZXIiXSwic291cmNlUm9vdCI6IiJ9
