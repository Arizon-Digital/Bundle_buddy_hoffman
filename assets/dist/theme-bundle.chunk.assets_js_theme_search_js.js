"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }












var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context.urls);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    setTimeout(function () {
      $('[data-search-aria-message]').removeClass('u-hidden');
    }, 100);

    /* Halothemes */
    this.category_sidebar();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_11__["default"])();
    this.showProductsPerPage();
    if (this.context.themeSettings.halo_show_more == true) {
      this.showmore_product();
    }
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        _this5.showProducts(false);
      }
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);

      /* Halothemes */
      _this5.category_sidebar();
      (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_10__["default"])(_this5.context);
      (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_11__["default"])();
      _this5.showProductsPerPage();
      if (_this5.context.themeSettings.halo_show_more == true) {
        _this5.showmore_product();
      }
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  }

  /* Halothemes Functions */;
  _proto.category_sidebar = function category_sidebar() {
    if ($('.all-categories-list').length > 0) {
      $('ul.all-categories-list li').each(function () {
        var breadLink = $('.page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');
        if ($(this).children('a').attr('href') == window.location || $(this).children('a').attr('href') == window.location.pathname) {
          $(this).addClass('current-cat');
          $(this).children('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
        if ($(this).children('a').attr('href') == breadLink) {
          $(this).addClass('current-cat');
          $(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('.icon-dropdown').addClass('is-clicked');
        }
      });
      $('.all-categories-list .icon-dropdown').on('click', function () {
        $(this).parent().siblings().removeClass('is-clicked');
        $(this).parent().siblings().find("> .dropdown-category-list").slideUp("slow");
        $(this).parent().siblings().find("> .icon-dropdown").removeClass('is-clicked');
        $(this).parent().find("> .dropdown-category-list").slideToggle("slow");
        $(this).parent().siblings().removeClass('open');
        if ($(this).hasClass('is-clicked')) {
          $(this).removeClass('is-clicked');
          $(this).parent().removeClass('open');
        } else {
          $(this).addClass('is-clicked');
          $(this).parent().addClass('open');
        }
      });
    }
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showmore_product = function showmore_product() {
    var _this6 = this;
    var context = this.context;
    $('#button-showmore-category').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-wrapper .pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      if (link == undefined) {
        if (!$('#button-showmore-category').hasClass('disable')) {
          $('#button-showmore-category').addClass('disable');
        }
      } else {
        $('#button-showmore-category').addClass('loading');
        $.ajax({
          type: 'get',
          url: link.replace("http://", "//"),
          context: _this6.content,
          success: function success(data) {
            if ($(data).find('#product-listing-container .productListing').length > 0) {
              $('#product-listing-container .productListing').append($(data).find('#product-listing-container .productListing').children());
              $('.pagination-list').html($(data).find(".pagination-list").html());
              $('#button-showmore-category').removeClass('loading');
              nextPage = $(".pagination-wrapper .pagination-item--current").next();
              if (Number($(data).find('.pagination-info .end').text()) < Number($(data).find('.pagination-info .total').text())) {
                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .end').text());
              } else {
                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .total').text());
              }
              if (nextPage.length === 0) {
                $('#button-showmore-category').addClass('disable');
                $('#button-showmore-category > span').text('No more product');
              }
              var $prodWrapId = $('#product-listing-container .card-variant').attr('id');
              //haloColorVariants(context, $prodWrapId);
            }
          }
        });
      }
    });
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNnQjtBQUNrQjtBQUNkO0FBQ1I7QUFDMUI7QUFDZ0M7QUFDdEM7QUFDZTtBQUNzQztBQUNOO0FBRS9ELElBQU1XLFlBQVksR0FBRyxFQUFFO0FBQ3ZCLElBQU1DLGFBQWEsR0FBRyxFQUFFO0FBQUMsSUFFSkMsTUFBTSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELE9BQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosTUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxNQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN2QkUsMkJBQTJCLEdBQTNCLFNBQUFBLDJCQUEyQkEsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUM5QixJQUFNQyxRQUFRLEdBQUc7TUFDYkMsSUFBSSxFQUFFSCxJQUFJLENBQUNJLElBQUk7TUFDZkMsRUFBRSxFQUFFTCxJQUFJLENBQUNNLFFBQVEsQ0FBQ0QsRUFBRTtNQUNwQkUsS0FBSyxFQUFFO1FBQ0hDLFFBQVEsRUFBRVIsSUFBSSxDQUFDUTtNQUNuQjtJQUNKLENBQUM7SUFFRCxJQUFJUixJQUFJLENBQUNPLEtBQUssRUFBRTtNQUNaTCxRQUFRLENBQUNLLEtBQUssQ0FBQ0UsTUFBTSxHQUFHVCxJQUFJLENBQUNPLEtBQUssS0FBSyxNQUFNO01BQzdDTCxRQUFRLENBQUNRLFFBQVEsR0FBRyxJQUFJO0lBQzVCO0lBRUEsSUFBSVYsSUFBSSxDQUFDVSxRQUFRLEVBQUU7TUFDZlIsUUFBUSxDQUFDUSxRQUFRLEdBQUcsRUFBRTtNQUN0QlYsSUFBSSxDQUFDVSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxTQUFTLEVBQUs7UUFDakNWLFFBQVEsQ0FB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QUFDLDJCQUEyQixDQUFDLENBQUNELFFBQVEsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xEQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztjQUNqRTtjQUVBLElBQUkyTCxXQUFXLEdBQUd6SyxDQUFDLENBQUMsMENBQTBDLENBQUMsQ0FBQ2tCLElBQUksQ0FBQyxJQUFJLENBQUM7Y0FDMUU7WUFDSjtVQUNKO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQS9DLE1BQUE7QUFBQSxFQTliK0JaLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBwcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5cbmNvbnN0IGxlZnRBcnJvd0tleSA9IDM3O1xuY29uc3QgcmlnaHRBcnJvd0tleSA9IDM5O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSB7XG4gICAgICAgICAgICB0ZXh0OiBub2RlLmRhdGEsXG4gICAgICAgICAgICBpZDogbm9kZS5tZXRhZGF0YS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChub2RlLnN0YXRlKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5zdGF0ZS5vcGVuZWQgPSBub2RlLnN0YXRlID09PSAnb3Blbic7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4ucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShjaGlsZE5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGVEYXRhO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0cyhuYXZpZ2F0ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpKTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQgc3BhbicpLmRhdGEoKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlVGFiKCR0YWJUb0FjdGl2YXRlKSB7XG4gICAgICAgIGNvbnN0ICR0YWJzQ29sbGVjdGlvbiA9ICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKTtcblxuICAgICAgICAkdGFic0NvbGxlY3Rpb24uZWFjaCgoaWR4LCB0YWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YWIgPSAkKHRhYik7XG5cbiAgICAgICAgICAgIGlmICgkdGFiLmlzKCR0YWJUb0FjdGl2YXRlKSkge1xuICAgICAgICAgICAgICAgICR0YWIucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR0YWIuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25UYWJDaGFuZ2VXaXRoQXJyb3dzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gZXZlbnQud2hpY2g7XG4gICAgICAgIGNvbnN0IGlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24gPSBldmVudEtleSA9PT0gbGVmdEFycm93S2V5XG4gICAgICAgICAgICB8fCBldmVudEtleSA9PT0gcmlnaHRBcnJvd0tleTtcbiAgICAgICAgaWYgKCFpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlRWxlbWVudE5vdFRhYiA9ICR0YWJzQ29sbGVjdGlvbi5pbmRleCgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSA9PT0gLTE7XG4gICAgICAgIGlmIChpc0FjdGl2ZUVsZW1lbnROb3RUYWIpIHJldHVybjtcblxuICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJChgIyR7ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZH1gKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiSWR4ID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCRhY3RpdmVUYWIpO1xuICAgICAgICBjb25zdCBsYXN0VGFiSWR4ID0gJHRhYnNDb2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgbGV0IG5leHRUYWJJZHg7XG4gICAgICAgIHN3aXRjaCAoZXZlbnRLZXkpIHtcbiAgICAgICAgY2FzZSBsZWZ0QXJyb3dLZXk6XG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSAwID8gbGFzdFRhYklkeCA6IGFjdGl2ZVRhYklkeCAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByaWdodEFycm93S2V5OlxuICAgICAgICAgICAgbmV4dFRhYklkeCA9IGFjdGl2ZVRhYklkeCA9PT0gbGFzdFRhYklkeCA/IDAgOiBhY3RpdmVUYWJJZHggKyAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgkdGFic0NvbGxlY3Rpb24uZ2V0KG5leHRUYWJJZHgpKS5mb2N1cygpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5vbigna2V5dXAnLCB0aGlzLm9uVGFiQ2hhbmdlV2l0aEFycm93cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcblxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2VhcmNoLWFyaWEtbWVzc2FnZV0nKS5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAvKiBIYWxvdGhlbWVzICovXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlfc2lkZWJhcigpO1xuICAgICAgICBwcm9kdWN0RGlzcGxheU1vZGUodGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIoKTtcbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3Nob3dfbW9yZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dtb3JlX3Byb2R1Y3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBjb250ZW50TGlzdGluZzogJ3NlYXJjaC9jb250ZW50LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAvKiBIYWxvdGhlbWVzICovXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5X3NpZGViYXIoKTtcbiAgICAgICAgICAgIHByb2R1Y3REaXNwbGF5TW9kZSh0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fc2hvd19tb3JlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dtb3JlX3Byb2R1Y3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyogSGFsb3RoZW1lcyBGdW5jdGlvbnMgKi9cblxuICAgIGNhdGVnb3J5X3NpZGViYXIoKSB7XG4gICAgICAgIGlmICgkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJ3VsLmFsbC1jYXRlZ29yaWVzLWxpc3QgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBjb25zdCBicmVhZExpbmsgPSAkKCcucGFnZS10eXBlLXByb2R1Y3QgI2JyZWFkY3J1bWJzLXdyYXBwZXIgdWwgbGkuYnJlYWRjcnVtYi5pcy1hY3RpdmUnKS5wcmV2KCcuYnJlYWRjcnVtYicpLmNoaWxkcmVuKCdhJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICBpZiAoKCQodGhpcykuY2hpbGRyZW4oJ2EnKS5hdHRyKCdocmVmJykgPT0gd2luZG93LmxvY2F0aW9uKSB8fCAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2N1cnJlbnQtY2F0Jyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5kcm9wZG93bi1jYXRlZ29yeS1saXN0JykuYWRkQ2xhc3MoJ2NhdC1leHBhbmRlZCcpLnNpYmxpbmdzKCcuaWNvbi1kcm9wZG93bicpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3QnKS5hZGRDbGFzcygnY2F0LWV4cGFuZGVkJykuc2libGluZ3MoJy5pY29uLWRyb3Bkb3duJykuYWRkQ2xhc3MoJ2lzLWNsaWNrZWQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5jaGlsZHJlbignYScpLmF0dHIoJ2hyZWYnKSA9PSBicmVhZExpbmspIHtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudC1jYXQnKTtcbiAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZHJvcGRvd24tY2F0ZWdvcnktbGlzdCcpLmFkZENsYXNzKCdjYXQtZXhwYW5kZWQnKS5zaWJsaW5ncygnLmljb24tZHJvcGRvd24nKS5hZGRDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCAuaWNvbi1kcm9wZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVVwKCBcInNsb3dcIiApO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5maW5kKFwiPiAuaWNvbi1kcm9wZG93blwiKS5yZW1vdmVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVUb2dnbGUoIFwic2xvd1wiICk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWNsaWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dtb3JlX3Byb2R1Y3QoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi13cmFwcGVyIC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgaWYgKGxpbmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5JykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKGRhdGEpLmZpbmQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5hcHBlbmQoJChkYXRhKS5maW5kKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKS5jaGlsZHJlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKFwiLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKSA8IE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS5odG1sKCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5hZGRDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnV0dG9uLXNob3dtb3JlLWNhdGVnb3J5ID4gc3BhbicpLnRleHQoJ05vIG1vcmUgcHJvZHVjdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5jYXJkLXZhcmlhbnQnKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGFsb0NvbG9yVmFyaWFudHMoY29udGV4dCwgJHByb2RXcmFwSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJGYWNldGVkU2VhcmNoIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbXBhcmVQcm9kdWN0cyIsInVybFV0aWxzIiwiVXJsIiwiY29sbGFwc2libGVGYWN0b3J5Iiwibm9kIiwicHJvZHVjdERpc3BsYXlNb2RlIiwiaGFsb1N0aWNreVRvb2xiYXIiLCJsZWZ0QXJyb3dLZXkiLCJyaWdodEFycm93S2V5IiwiU2VhcmNoIiwiX0NhdGFsb2dQYWdlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJfdGhpcyIsIm5vZGVEYXRhIiwidGV4dCIsImRhdGEiLCJpZCIsIm1ldGFkYXRhIiwic3RhdGUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInB1c2giLCJzaG93UHJvZHVjdHMiLCJuYXZpZ2F0ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJhY3RpdmF0ZVRhYiIsInNlYXJjaERhdGEiLCJ1cmwiLCJjb3VudCIsInJlcGxhY2VQYXJhbXMiLCJwYWdlIiwiZ29Ub1VybCIsInNob3dDb250ZW50IiwiJHRhYlRvQWN0aXZhdGUiLCIkdGFic0NvbGxlY3Rpb24iLCJmaW5kIiwiZWFjaCIsImlkeCIsInRhYiIsIiR0YWIiLCJpcyIsInJlbW92ZUF0dHIiLCJhdHRyIiwib25UYWJDaGFuZ2VXaXRoQXJyb3dzIiwiZXZlbnQiLCJldmVudEtleSIsIndoaWNoIiwiaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biIsImlzQWN0aXZlRWxlbWVudE5vdFRhYiIsImluZGV4IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiJGFjdGl2ZVRhYiIsImFjdGl2ZVRhYklkeCIsImxhc3RUYWJJZHgiLCJsZW5ndGgiLCJuZXh0VGFiSWR4IiwiZ2V0IiwiZm9jdXMiLCJ0cmlnZ2VyIiwib25SZWFkeSIsIl90aGlzMiIsImNvbnRleHQiLCJ1cmxzIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJzZWN0aW9uIiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiY2F0ZWdvcnlJZCIsInZhbHVlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJjYXRlZ29yeV9zaWRlYmFyIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInRoZW1lU2V0dGluZ3MiLCJoYWxvX3Nob3dfbW9yZSIsInNob3dtb3JlX3Byb2R1Y3QiLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJfdGhpczMiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZGF0YU5vZGUiLCIkY29udGFpbmVyIiwiX3RoaXM0IiwidHJlZU9wdGlvbnMiLCJjb3JlIiwidGhlbWVzIiwiaWNvbnMiLCJjaGVja2JveCIsInRocmVlX3N0YXRlIiwicGx1Z2lucyIsIl90aGlzNSIsIl90aGlzJGNvbnRleHQiLCJvbk1pblByaWNlRXJyb3IiLCJvbk1heFByaWNlRXJyb3IiLCJtaW5QcmljZU5vdEVudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJvbkludmFsaWRQcmljZSIsIiRjb250ZW50TGlzdGluZ0NvbnRhaW5lciIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwiJGNvbnRlbnRDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImNvbnRlbnRMaXN0aW5nIiwic2lkZWJhciIsImhlYWRpbmciLCJwcm9kdWN0Q291bnQiLCJjb250ZW50Q291bnQiLCJjb25maWciLCJwcm9kdWN0X3Jlc3VsdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCIkZm9ybSIsInN1Ym1pdCIsInRhcCIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJyZWFkTGluayIsInByZXYiLCJwYXRobmFtZSIsInNpYmxpbmdzIiwicGFyZW50cyIsInBhcmVudCIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImhhc0NsYXNzIiwiVVJMIiwiYyIsInNlYXJjaFBhcmFtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImNhbGwiLCJlbGVtZW50IiwiZSIsIl90aGlzNiIsIm5leHRQYWdlIiwibmV4dCIsImxpbmsiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwic3VjY2VzcyIsIk51bWJlciIsIiRwcm9kV3JhcElkIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
