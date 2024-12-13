"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_common_product-details-base_js"],{

/***/ "./assets/js/theme/common/aria/constants.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/aria/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaKeyCodes: () => (/* binding */ ariaKeyCodes)
/* harmony export */ });
var ariaKeyCodes = {
  RETURN: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ }),

/***/ "./assets/js/theme/common/aria/index.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/aria/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioOptions: () => (/* reexport safe */ _radioOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _radioOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioOptions */ "./assets/js/theme/common/aria/radioOptions.js");


/***/ }),

/***/ "./assets/js/theme/common/aria/radioOptions.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/aria/radioOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/js/theme/common/aria/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var setCheckedRadioItem = function setCheckedRadioItem(itemCollection, itemIdx) {
  itemCollection.each(function (idx, item) {
    var $item = $(item);
    if (idx !== itemIdx) {
      $item.attr('aria-checked', false).prop('checked', false);
      return;
    }
    $item.attr('aria-checked', true).prop('checked', true).focus();
    $item.trigger('change');
  });
};
var calculateTargetItemPosition = function calculateTargetItemPosition(lastItemIdx, currentIdx) {
  switch (true) {
    case currentIdx > lastItemIdx:
      return 0;
    case currentIdx < 0:
      return lastItemIdx;
    default:
      return currentIdx;
  }
};
var handleItemKeyDown = function handleItemKeyDown(itemCollection) {
  return function (e) {
    var keyCode = e.keyCode;
    var itemIdx = itemCollection.index(e.currentTarget);
    var lastCollectionItemIdx = itemCollection.length - 1;
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes).includes(keyCode)) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.UP:
        {
          var prevItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx - 1);
          itemCollection.get(prevItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx - 1);
          break;
        }
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.DOWN:
        {
          var nextItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx + 1);
          itemCollection.get(nextItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx + 1);
          break;
        }
      default:
        break;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($container, itemSelector) {
  var $itemCollection = $container.find(itemSelector);
  $container.on('keydown', itemSelector, handleItemKeyDown($itemCollection));
});

/***/ }),

/***/ "./assets/js/theme/common/product-details-base.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/common/product-details-base.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetailsBase),
/* harmony export */   optionChangeDecorator: () => (/* binding */ optionChangeDecorator)
/* harmony export */ });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aria */ "./assets/js/theme/common/aria/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var optionsTypesMap = {
  INPUT_FILE: 'input-file',
  INPUT_TEXT: 'input-text',
  INPUT_NUMBER: 'input-number',
  INPUT_CHECKBOX: 'input-checkbox',
  TEXTAREA: 'textarea',
  DATE: 'date',
  SET_SELECT: 'set-select',
  SET_RECTANGLE: 'set-rectangle',
  SET_RADIO: 'set-radio',
  SWATCH: 'swatch',
  PRODUCT_LIST: 'product-list'
};
function optionChangeDecorator(areDefaultOtionsSet) {
  var _this = this;
  return function (err, response) {
    var attributesData = response.data || {};
    var attributesContent = response.content || {};
    _this.updateProductAttributes(attributesData);
    if (areDefaultOtionsSet) {
      _this.updateView(attributesData, attributesContent);
    } else {
      _this.updateDefaultAttributesForOOS(attributesData);
    }
  };
}
var ProductDetailsBase = /*#__PURE__*/function () {
  function ProductDetailsBase($scope, context) {
    var _this2 = this;
    this.$scope = $scope;
    this.context = context;
    this.initRadioAttributes();
    _wishlist__WEBPACK_IMPORTED_MODULE_2__["default"].load(this.context);
    this.getTabRequests();
    $('[data-product-attribute]').each(function (__, value) {
      var type = value.getAttribute('data-product-attribute');
      _this2._makeProductVariantAccessible(value, type);
    });
  }
  var _proto = ProductDetailsBase.prototype;
  _proto._makeProductVariantAccessible = function _makeProductVariantAccessible(variantDomNode, variantType) {
    switch (variantType) {
      case optionsTypesMap.SET_RADIO:
      case optionsTypesMap.SWATCH:
        {
          (0,_aria__WEBPACK_IMPORTED_MODULE_3__.initRadioOptions)($(variantDomNode), '[type=radio]');
          break;
        }
      default:
        break;
    }
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this3 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this3.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if ($attribute.closest('[data-fbt-option-change]').length) return;
      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      mpn: {
        $label: $('dt.mpn-label', $scope),
        $value: $('[data-product-mpn]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope),
      $walletButtons: $('[data-add-to-cart-wallet-buttons]', $scope)
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var $thisScope = this.$scope.find('.productView-details');
    var viewModel = this.getViewModel($thisScope);
    this.showMessageBox(data.stock_message || data.purchasing_message, $thisScope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // If MPN is available
    if (data.mpn) {
      viewModel.mpn.$value.text(data.mpn);
      viewModel.mpn.$label.show();
    } else {
      viewModel.mpn.$label.hide();
      viewModel.mpn.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);
    this.updateWalletButtonsView(data);
    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      var updatedPrice = price.price_range ? price.price_range.min.with_tax.formatted + " - " + price.price_range.max.with_tax.formatted : price.with_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(updatedPrice);
    }
    if (price.without_tax) {
      var _updatedPrice = price.price_range ? price.price_range.min.without_tax.formatted + " - " + price.price_range.max.without_tax.formatted : price.without_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(_updatedPrice);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message, $scope) {
    var $messageBox = $('#add-to-cart-wrapper .productAttributes-message', $scope);
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  };
  _proto.updateWalletButtonsView = function updateWalletButtonsView(data) {
    this.toggleWalletButtonsVisibility(data.purchasable && data.instock);
  };
  _proto.toggleWalletButtonsVisibility = function toggleWalletButtonsVisibility(shouldShow) {
    var viewModel = this.getViewModel(this.$scope);
    if (shouldShow) {
      viewModel.$walletButtons.show();
    } else {
      viewModel.$walletButtons.hide();
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide(0);
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  return ProductDetailsBase;
}();


/***/ }),

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var WishList = /*#__PURE__*/function (_PageManager) {
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _this || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  _inheritsLoose(WishList, _PageManager);
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: 'You must enter a wishlist name.'
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fcHJvZHVjdC1kZXRhaWxzLWJhc2VfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsRUFBRSxFQUFFLEVBQUU7RUFDTkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRVAwQztBQUUzQyxJQUFNRyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxjQUFjLEVBQUVDLE9BQU8sRUFBSztFQUNyREQsY0FBYyxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUs7SUFDL0IsSUFBTUMsS0FBSyxHQUFHQyxDQUFDLENBQUNGLElBQUksQ0FBQztJQUNyQixJQUFJRCxHQUFHLEtBQUtGLE9BQU8sRUFBRTtNQUNqQkksS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztNQUN4RDtJQUNKO0lBRUFILEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDOURKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSUMsV0FBVyxFQUFFQyxVQUFVLEVBQUs7RUFDN0QsUUFBUSxJQUFJO0lBQ1osS0FBS0EsVUFBVSxHQUFHRCxXQUFXO01BQUUsT0FBTyxDQUFDO0lBQ3ZDLEtBQUtD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LE1BQU0sR0FBRzdFLEdBQUcsQ0FBQzdILE1BQU0sR0FBRyxDQUFDO1FBRTdCeU0sRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RDLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQ0osQ0FBQztJQUVGVCxnQkFBZ0IsQ0FBQ3JMLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQWdMLEtBQUssRUFBSTtNQUNuQ3RJLE1BQUksQ0FBQzRJLG9CQUFvQixDQUFDUyxZQUFZLENBQUMsQ0FBQztNQUV4QyxJQUFJckosTUFBSSxDQUFDNEksb0JBQW9CLENBQUNVLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUMzQztNQUNKO01BRUFoQixLQUFLLENBQUN6TCxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUErQyxNQUFBLENBRUQySixPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBTUMsZ0JBQWdCLEdBQUc3TixDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFFNUMsSUFBSUEsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNjLE1BQU0sRUFBRTtNQUN4QzBLLHVGQUF1QixDQUFDLENBQUM7SUFDN0I7SUFFQSxJQUFJcUMsZ0JBQWdCLENBQUMvTSxNQUFNLEVBQUU7TUFDekIsSUFBSSxDQUFDaU0sNkJBQTZCLENBQUNjLGdCQUFnQixDQUFDO0lBQ3hEO0lBRUEsSUFBSSxDQUFDbkIscUJBQXFCLENBQUMsQ0FBQztFQUNoQyxDQUFDO0VBQUEsT0FBQVAsUUFBQTtBQUFBLEVBbkVpQ0YscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2FyaWEvcmFkaW9PcHRpb25zLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMtYmFzZS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS93aXNobGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJpYUtleUNvZGVzID0ge1xuICAgIFJFVFVSTjogMTMsXG4gICAgU1BBQ0U6IDMyLFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9yYWRpb09wdGlvbnMnO1xuIiwiaW1wb3J0IHsgYXJpYUtleUNvZGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzZXRDaGVja2VkUmFkaW9JdGVtID0gKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4KSA9PiB7XG4gICAgaXRlbUNvbGxlY3Rpb24uZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChpdGVtKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gaXRlbUlkeCkge1xuICAgICAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgZmFsc2UpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCB0cnVlKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkuZm9jdXMoKTtcbiAgICAgICAgJGl0ZW0udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24gPSAobGFzdEl0ZW1JZHgsIGN1cnJlbnRJZHgpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGN1cnJlbnRJZHggPiBsYXN0SXRlbUlkeDogcmV0dXJuIDA7XG4gICAgY2FzZSBjdXJyZW50SWR4IDwgMDogcmV0dXJuIGxhc3RJdGVtSWR4O1xuICAgIGRlZmF1bHQ6IHJldHVybiBjdXJyZW50SWR4O1xuICAgIH1cbn07XG5cbmNvbnN0IGhhbmRsZUl0ZW1LZXlEb3duID0gaXRlbUNvbGxlY3Rpb24gPT4gZSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlO1xuICAgIGNvbnN0IGl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5pbmRleChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IGxhc3RDb2xsZWN0aW9uSXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhhcmlhS2V5Q29kZXMpLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5MRUZUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlVQOiB7XG4gICAgICAgIGNvbnN0IHByZXZJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQocHJldkl0ZW1JZHgpLmZvY3VzKCk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlJJR0hUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLkRPV046IHtcbiAgICAgICAgY29uc3QgbmV4dEl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChuZXh0SXRlbUlkeCkuZm9jdXMoKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCArIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiBicmVhaztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoJGNvbnRhaW5lciwgaXRlbVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgJGl0ZW1Db2xsZWN0aW9uID0gJGNvbnRhaW5lci5maW5kKGl0ZW1TZWxlY3Rvcik7XG5cbiAgICAkY29udGFpbmVyLm9uKCdrZXlkb3duJywgaXRlbVNlbGVjdG9yLCBoYW5kbGVJdGVtS2V5RG93bigkaXRlbUNvbGxlY3Rpb24pKTtcbn07XG4iLCJpbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi4vd2lzaGxpc3QnO1xuaW1wb3J0IHsgaW5pdFJhZGlvT3B0aW9ucyB9IGZyb20gJy4vYXJpYSc7XG5pbXBvcnQgeyBpc09iamVjdCwgaXNOdW1iZXIgfSBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCBvcHRpb25zVHlwZXNNYXAgPSB7XG4gICAgSU5QVVRfRklMRTogJ2lucHV0LWZpbGUnLFxuICAgIElOUFVUX1RFWFQ6ICdpbnB1dC10ZXh0JyxcbiAgICBJTlBVVF9OVU1CRVI6ICdpbnB1dC1udW1iZXInLFxuICAgIElOUFVUX0NIRUNLQk9YOiAnaW5wdXQtY2hlY2tib3gnLFxuICAgIFRFWFRBUkVBOiAndGV4dGFyZWEnLFxuICAgIERBVEU6ICdkYXRlJyxcbiAgICBTRVRfU0VMRUNUOiAnc2V0LXNlbGVjdCcsXG4gICAgU0VUX1JFQ1RBTkdMRTogJ3NldC1yZWN0YW5nbGUnLFxuICAgIFNFVF9SQURJTzogJ3NldC1yYWRpbycsXG4gICAgU1dBVENIOiAnc3dhdGNoJyxcbiAgICBQUk9EVUNUX0xJU1Q6ICdwcm9kdWN0LWxpc3QnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGlvbkNoYW5nZURlY29yYXRvcihhcmVEZWZhdWx0T3Rpb25zU2V0KSB7XG4gICAgcmV0dXJuIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICBpZiAoYXJlRGVmYXVsdE90aW9uc1NldCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJykuZWFjaCgoX18sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIHRoaXMuX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFsdWUsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YXJpYW50RG9tTm9kZSwgdmFyaWFudFR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh2YXJpYW50VHlwZSkge1xuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TRVRfUkFESU86XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNXQVRDSDoge1xuICAgICAgICAgICAgaW5pdFJhZGlvT3B0aW9ucygkKHZhcmlhbnREb21Ob2RlKSwgJ1t0eXBlPXJhZGlvXScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHJhZGlvIGJ1dHRvbnMgdG8gZ2V0IGRlc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBpbml0UmFkaW9BdHRyaWJ1dGVzKCkge1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0gaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIHJhZGlvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkcmFkaW8gPSAkKHJhZGlvKTtcblxuICAgICAgICAgICAgLy8gT25seSBiaW5kIHRvIGNsaWNrIG9uY2VcbiAgICAgICAgICAgIGlmICgkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkcmFkaW8ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHJhZGlvLmRhdGEoJ3N0YXRlJykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcmFkaW8uYXR0cignZGF0YS1zdGF0ZScsICRyYWRpby5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAoJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxuICAgICAqL1xuICAgIGdldFRhYlJlcXVlc3RzKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoJy50YWJzJykuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApO1xuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGFiQ29udGVudC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNrdToge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQuc2t1LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBjOiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC51cGMtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC11cGNdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtcG46IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0Lm1wbi1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LW1wbl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgICAgICAkd2FsbGV0QnV0dG9uczogJCgnW2RhdGEtYWRkLXRvLWNhcnQtd2FsbGV0LWJ1dHRvbnNdJywgJHNjb3BlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlVmlldyhkYXRhLCBjb250ZW50ID0gbnVsbCkge1xuICAgICAgICBjb25zdCAkdGhpc1Njb3BlID0gdGhpcy4kc2NvcGUuZmluZCgnLnByb2R1Y3RWaWV3LWRldGFpbHMnKTtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwoJHRoaXNTY29wZSk7XG5cbiAgICAgICAgdGhpcy5zaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UsICAkdGhpc1Njb3BlKTtcblxuICAgICAgICBpZiAoaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgZGF0YS5wcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNPYmplY3QoZGF0YS53ZWlnaHQpKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHdlaWdodC5odG1sKGRhdGEud2VpZ2h0LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgdmFyaWF0aW9uX2lkIGlmIGl0IGV4aXN0cyBmb3IgYWRkaW5nIHRvIHdpc2hsaXN0XG4gICAgICAgIGlmIChkYXRhLnZhcmlhbnRJZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3aXNobGlzdFZhcmlhdGlvbi52YWwoZGF0YS52YXJpYW50SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgU0tVIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoZGF0YS5za3UpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnNrdS4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBVUEMgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLnVwYykge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dChkYXRhLnVwYyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwudXBjLiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIE1QTiBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEubXBuKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiR2YWx1ZS50ZXh0KGRhdGEubXBuKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgc3RvY2sgdmlldyBpcyBvbiAoQ1Agc2V0dGluZ3MpXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgaXNOdW1iZXIoZGF0YS5zdG9jaykpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdG9jayBjb250YWluZXIgaXMgaGlkZGVuLCBzaG93XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhkYXRhKTtcbiAgICAgICAgdGhpcy51cGRhdGVXYWxsZXRCdXR0b25zVmlldyhkYXRhKTtcbiAgICAgICAgLy8gSWYgQnVsayBQcmljaW5nIHJlbmRlcmVkIEhUTUwgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMgJiYgY29udGVudCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRUb0NhcnRXcmFwcGVyID0gJCgnI2FkZC10by1jYXJ0LXdyYXBwZXInKTtcblxuICAgICAgICBpZiAoYWRkVG9DYXJ0V3JhcHBlci5pcygnOmhpZGRlbicpICYmIGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIGFkZFRvQ2FydFdyYXBwZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRoX3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhvdXRfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRob3V0X3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UsICRzY29wZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyIC5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJywgJHNjb3BlKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXcoZGF0YSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGRhdGEucHVyY2hhc2FibGUgJiYgZGF0YS5pbnN0b2NrKTtcbiAgICB9XG5cbiAgICB0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShzaG91bGRTaG93KSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICBpZiAoc2hvdWxkU2hvdykge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3YWxsZXRCdXR0b25zLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2FsbGV0QnV0dG9ucy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcblxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcbiAgICB9XG5cbiAgICBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBhdHRyaWJ1dGUgaXMgdGhlIHNlbGVjdGVkIG9wdGlvbiBpbiBhIHNlbGVjdCBkcm9wZG93biwgc2VsZWN0IHRoZSBmaXJzdCBvcHRpb24gKE1FUkMtNjM5KVxuICAgICAgICAgICAgaWYgKCRzZWxlY3QudmFsKCkgPT09ICRhdHRyaWJ1dGUuYXR0cigndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiY29uc3QgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MgPSAod2lzaGxpc3RVcmwsIC4uLnBhZ2luYXRpb25JdGVtcykgPT4gJC5lYWNoKHBhZ2luYXRpb25JdGVtcywgKF8sICRpdGVtKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbkxpbmsgPSAkaXRlbS5jaGlsZHJlbignLnBhZ2luYXRpb24tbGluaycpO1xuXG4gICAgaWYgKCRpdGVtLmxlbmd0aCAmJiAhcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpLmluY2x1ZGVzKCdwYWdlPScpKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJyk7XG4gICAgICAgIHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnLCBgJHt3aXNobGlzdFVybH1wYWdlPSR7cGFnZU51bWJlcn1gKTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiBoZWxwcyB0byB3aXRoZHJhdyBkaWZmZXJlbmNlcyBpbiBzdHJ1Y3R1cmVzIGFyb3VuZCB0aGUgc3RlbmNpbCByZXNvdXJjZSBwYWdpbmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB3aXNobGlzdFBhZ2luYXRvckhlbHBlciA9ICgpID0+IHtcbiAgICBjb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XG5cbiAgICBpZiAoISRwYWdpbmF0aW9uTGlzdC5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0ICRuZXh0SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0ICRwcmV2SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgJHBhZ2luYXRpb25MaXN0KTtcbiAgICBjb25zdCBjdXJyZW50SHJlZiA9ICQoJ1tkYXRhLXBhZ2luYXRpb24tY3VycmVudC1wYWdlLWxpbmtdJykuYXR0cignaHJlZicpO1xuICAgIGNvbnN0IHBhcnRpYWxQYWdpbmF0aW9uVXJsID0gY3VycmVudEhyZWYuc3BsaXQoJ3BhZ2U9Jykuc2hpZnQoKTtcblxuICAgIGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzKHBhcnRpYWxQYWdpbmF0aW9uVXJsLCAkcHJldkl0ZW0sICRuZXh0SXRlbSk7XG59O1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIgfSBmcm9tICcuL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXG4gICAgICovXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQud2lzaGxpc3REZWxldGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbbmFtZT1cIndpc2hsaXN0bmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHdpc2hsaXN0IG5hbWUuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRhZGRXaXNobGlzdEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGFkZFdpc2hMaXN0Rm9ybSA9ICQoJy53aXNobGlzdC1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCQoJ1tkYXRhLXBhZ2luYXRpb24td2lzaGxpc3RdJykubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aXNobGlzdFBhZ2luYXRvckhlbHBlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhZGRXaXNoTGlzdEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNoTGlzdEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aXNobGlzdERlbGV0ZUNvbmZpcm0oKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiYXJpYUtleUNvZGVzIiwiUkVUVVJOIiwiU1BBQ0UiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJkZWZhdWx0IiwiaW5pdFJhZGlvT3B0aW9ucyIsInNldENoZWNrZWRSYWRpb0l0ZW0iLCJpdGVtQ29sbGVjdGlvbiIsIml0ZW1JZHgiLCJlYWNoIiwiaWR4IiwiaXRlbSIsIiRpdGVtIiwiJCIsImF0dHIiLCJwcm9wIiwiZm9jdXMiLCJ0cmlnZ2VyIiwiY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uIiwibGFzdEl0ZW1JZHgiLCJjdXJyZW50SWR4IiwiaGFuZGxlSXRlbUtleURvd24iLCJlIiwia2V5Q29kZSIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImxhc3RDb2xsZWN0aW9uSXRlbUlkeCIsImxlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsImluY2x1ZGVzIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2SXRlbUlkeCIsImdldCIsIm5leHRJdGVtSWR4IiwiJGNvbnRhaW5lciIsIml0ZW1TZWxlY3RvciIsIiRpdGVtQ29sbGVjdGlvbiIsImZpbmQiLCJvbiIsIldpc2hsaXN0Iiwib3B0aW9uc1R5cGVzTWFwIiwiSU5QVVRfRklMRSIsIklOUFVUX1RFWFQiLCJJTlBVVF9OVU1CRVIiLCJJTlBVVF9DSEVDS0JPWCIsIlRFWFRBUkVBIiwiREFURSIsIlNFVF9TRUxFQ1QiLCJTRVRfUkVDVEFOR0xFIiwiU0VUX1JBRElPIiwiU1dBVENIIiwiUFJPRFVDVF9MSVNUIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiYXJlRGVmYXVsdE90aW9uc1NldCIsIl90aGlzIiwiZXJyIiwicmVzcG9uc2UiLCJhdHRyaWJ1dGVzRGF0YSIsImRhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVwZGF0ZVZpZXciLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsIlByb2R1Y3REZXRhaWxzQmFzZSIsIiRzY29wZSIsImNvbnRleHQiLCJfdGhpczIiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwibG9hZCIsImdldFRhYlJlcXVlc3RzIiwiX18iLCJ2YWx1ZSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSIsIl9wcm90byIsInByb3RvdHlwZSIsInZhcmlhbnREb21Ob2RlIiwidmFyaWFudFR5cGUiLCJfdGhpczMiLCJpIiwicmFkaW8iLCIkcmFkaW8iLCJ1bmRlZmluZWQiLCJfdGhpczQiLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJwYXJzZUludCIsImNsb3Nlc3QiLCJpbmRleE9mIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzaWJsaW5ncyIsImdldFZpZXdNb2RlbCIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGlucHV0Iiwic2t1IiwiJGxhYmVsIiwiJHZhbHVlIiwidXBjIiwibXBuIiwicXVhbnRpdHkiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsIiR3YWxsZXRCdXR0b25zIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ2aWV3TW9kZWwiLCJoaWRlIiwiJHRoaXNTY29wZSIsInNob3dNZXNzYWdlQm94Iiwic3RvY2tfbWVzc2FnZSIsInB1cmNoYXNpbmdfbWVzc2FnZSIsIl9pc09iamVjdCIsInByaWNlIiwidXBkYXRlUHJpY2VWaWV3Iiwid2VpZ2h0IiwiaHRtbCIsImZvcm1hdHRlZCIsInZhcmlhbnRJZCIsInZhbCIsInRleHQiLCJzaG93IiwiX2lzTnVtYmVyIiwidXBkYXRlV2FsbGV0QnV0dG9uc1ZpZXciLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYWRkVG9DYXJ0V3JhcHBlciIsImlzIiwicHVyY2hhc2FibGUiLCJ3aXRoX3RheCIsInVwZGF0ZWRQcmljZSIsInByaWNlX3JhbmdlIiwibWluIiwibWF4Iiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJpbnN0b2NrIiwidG9nZ2xlV2FsbGV0QnV0dG9uc1Zpc2liaWxpdHkiLCJzaG91bGRTaG93IiwiZ2V0QXR0cmlidXRlVHlwZSIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsInNlbGVjdGVkSW5kZXgiLCJyZXBsYWNlIiwiY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MiLCJ3aXNobGlzdFVybCIsIl9sZW4iLCJhcmd1bWVudHMiLCJwYWdpbmF0aW9uSXRlbXMiLCJBcnJheSIsIl9rZXkiLCJfIiwicGFnaW5hdGlvbkxpbmsiLCJjaGlsZHJlbiIsInBhZ2VOdW1iZXIiLCJ3aXNobGlzdFBhZ2luYXRvckhlbHBlciIsIiRwYWdpbmF0aW9uTGlzdCIsIiRuZXh0SXRlbSIsIiRwcmV2SXRlbSIsImN1cnJlbnRIcmVmIiwicGFydGlhbFBhZ2luYXRpb25VcmwiLCJzcGxpdCIsInNoaWZ0Iiwibm9kIiwiUGFnZU1hbmFnZXIiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiV2lzaExpc3QiLCJfUGFnZU1hbmFnZXIiLCJjYWxsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9pbmhlcml0c0xvb3NlIiwid2lzaGxpc3REZWxldGVDb25maXJtIiwiZXZlbnQiLCJjb25maXJtZWQiLCJjb25maXJtIiwid2lzaGxpc3REZWxldGUiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIm9uUmVhZHkiLCIkYWRkV2lzaExpc3RGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==