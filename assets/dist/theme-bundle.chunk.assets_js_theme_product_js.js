"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/common/product-details.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/product-details.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetails)
/* harmony export */ });
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_image_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/image-gallery */ "./assets/js/theme/product/image-gallery.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/api */ "./assets/js/theme/common/utils/api.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* harmony import */ var _utils_banner_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/banner-utils */ "./assets/js/theme/common/utils/banner-utils.js");
/* harmony import */ var _halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../halothemes/haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");
/* harmony import */ var _halothemes_haloGalleryPopup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../halothemes/haloGalleryPopup */ "./assets/js/theme/halothemes/haloGalleryPopup.js");
/* harmony import */ var _halothemes_additional_product_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../halothemes/additional_product_colors */ "./assets/js/theme/halothemes/additional_product_colors.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }












var ProductDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function ProductDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    _this.$overlay = $('[data-cart-item-add] .loadingOverlay');
    _this.imageGallery = new _product_image_gallery__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-image-gallery]', _this.$scope));
    _this.imageGallery.init();
    _this.listenQuantityChange();
    _this.$swatchOptionMessage = $('.swatch-option-message');
    _this.swatchOptionMessageInitText = _this.$swatchOptionMessage.text();

    /* Halothemes */
    new _halothemes_haloGalleryPopup__WEBPACK_IMPORTED_MODULE_12__["default"](_this.context, _this.$scope);
    if ($('.sold-product').length) {
      _this.soldProduct(_this.context);
    }
    var $form = $('form[data-cart-item-add]', $scope);
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    var $productSwatchGroup = $('[id*="attribute_swatch"]', $form);
    if (context.showSwatchNames) {
      _this.$swatchOptionMessage.removeClass('u-hidden');
      $productSwatchGroup.on('change', function (_ref) {
        var target = _ref.target;
        return _this.showSwatchNameOnOption($(target));
      });
      $.each($productSwatchGroup, function (_, element) {
        if ($(element).is(':checked')) _this.showSwatchNameOnOption($(element));
      });
    }
    $productOptionsElement.on('change', function (event) {
      _this.productOptionsChanged(event);
      _this.setProductVariant();
      _this.setProductVariant2();

      /* Mint Start Update 05022024*/
      /* Remove default class when don't select option */
      if (event.target.value === '') {
        $('.productView-product .productView-price').removeClass('custom-defaultPrice');
      } else {
        $('.productView-product .productView-price').addClass('custom-defaultPrice');
      }
    });

    //call script
    (0,_halothemes_additional_product_colors__WEBPACK_IMPORTED_MODULE_13__["default"])(_this.context, $productOptionsElement);
    $form.on('submit', function (event) {
      _this.addProductToCart(event, $form[0]);
    });

    // add to cart 2
    var $form2 = $('form[data-cart-item-add-2]', $scope);
    var $productOptionsElement2 = $('[data-product-option-change-4]', $form2);
    $productOptionsElement2.on('change', function (event) {
      _this.productOptionsChanged2(event);
      _this.setProductVariant();
      _this.setProductVariant2();
    });
    $(document).on('click', '#form-action-addToCart2.themevale', function (event) {
      $form2.submit();
    });
    $form2.on('submit', function (event) {
      _this.addProductToCart(event, $form2[0]);
    });

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var $productId = $('[name="product_id"]', $form).val();
      var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_3__.optionChangeDecorator.call(_this, hasDefaultOptions);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.productAttributes.optionChange($productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_10__["default"].dispatchProductBannerEvent(productAttributesData);
    }
    $productOptionsElement.show();
    _this.previewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#previewModal')[0];
    if (_this.context.themeSettings.halo_viewing_product) {
      _this.viewingProduct(_this.context);
    }
    if ($form[0].checkValidity()) {
      _this.updateProductDetailsData();
    } else {
      _this.toggleWalletButtonsVisibility(false);
    }
    return _this;
  }
  _inheritsLoose(ProductDetails, _ProductDetailsBase);
  var _proto = ProductDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('.productView-options [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          $(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_9__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_9__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
              $(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_9__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              $(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.productView');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.find('.productView-title')[0].innerText.replace(/"/g, '\\$&');
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  };
  _proto.setProductVariant2 = function setProductVariant2() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-option-change-4] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          $(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle') {
            var label = $(checked.labels[0].children[0]).text();
            if (label) {
              options.push(optionTitle + ":" + label);
              $(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'set-radio' || type === 'product-list') {
            var _label2 = $(checked.labels[0]).text();
            if (_label2) {
              options.push(optionTitle + ":" + _label2);
              $(value.children[0]).find('[data-option-value]').text(_label2);
            }
          }
          if (type === 'swatch') {
            var _label3 = checked.labels[0].children[0];
            if (_label3) {
              options.push(optionTitle + ":" + _label3.title);
              $(value.children[0]).find('[data-option-value]').text(_label3.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.productView');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.find('.productView-title')[0].innerText;
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Checks if the current window is being run inside an iframe
   * @returns {boolean}
   */;
  _proto.isRunningInIframe = function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  /**
   *
   * Handle product options changes
   *
   */;
  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this2 = this;
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      _this2.updateProductAttributes(productAttributesData);
      _this2.updateView(productAttributesData, productAttributesContent);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_10__["default"].dispatchProductBannerEvent(productAttributesData);
      _this2.updateProductDetailsData();
    });
  };
  _proto.productOptionsChanged2 = function productOptionsChanged2(event) {
    var _this3 = this;
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      _this3.updateProductAttributes(productAttributesData);
      _this3.updateView(productAttributesData, productAttributesContent);
      setTimeout(function () {
        var change_img = $('.productView-images [data-image-gallery-main-0] .zoomImg').attr('src');
        $('#sticky_addtocart .product-image img').attr('src', change_img);
      }, 100);
      $.each($('[data-product-option-change-4] [data-product-attribute]'), function (i) {
        var el = $(this).find('.form-radio:checked').attr('value');
        $.each($('.productView-options [data-product-option-change] [data-product-attribute] input'), function (i) {
          var op = $(this).attr('value');
          if ($(this).next().hasClass('form-option-swatch')) {
            var opTitle = $(this).next().children('.form-option-variant').attr('title');
          } else if ($(this).next().children('.form-option-variant').length) {
            var opTitle = $(this).next().children('.form-option-variant').text();
          } else {
            var opTitle = $(this).next('.form-label').text();
          }
          if (el == op) {
            $(this).prop('checked', true);
            $(this).parents('[data-product-attribute]').find('.form-label--alternate [data-option-value]').text(opTitle);
          }
        });
      });
      var checkedColor = $('[data-product-option-change-4] [data-product-attribute="swatch"]').find('.form-radio:checked').attr('value');
      var color = $('[data-product-option-change-4] [data-product-attribute="swatch"]').find('.form-radio:checked').next().find('> span').attr('title');
      $('#sticky_addtocart .productView-title .color-name').text(' - ' + color);
    });
  }

  /**
   * if this setting is enabled in Page Builder
   * show name for swatch option
   */;
  _proto.showSwatchNameOnOption = function showSwatchNameOnOption($swatch) {
    var swatchName = $swatch.attr('aria-label');
    $('[data-product-attribute="swatch"] [data-option-value]').text(swatchName);
    this.$swatchOptionMessage.text(this.swatchOptionMessageInitText + " " + swatchName);
    this.setLiveRegionAttributes(this.$swatchOptionMessage, 'status', 'assertive');
  };
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.showProductImage = function showProductImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(image)) {
      var zoomImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.zoomSize
      }
      /*
          Should match zoom size used for data-zoom-image in
          components/products/product-view.html
           Note that this will only be used as a fallback image for browsers that do not support srcset
           Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.productSize
      }
      /*
          Should match fallback image size used for the main product image in
          components/products/product-view.html
           Note that this will only be used as a fallback image for browsers that do not support srcset
           Also note that getSrcset returns a simple src string when exactly one size is provided
      */);
      var mainImageSrcset = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].tools.imageSrcset.getSrcset(image.data);
      this.imageGallery.setAlternateImage({
        mainImageUrl: mainImageUrl,
        zoomImageUrl: zoomImageUrl,
        mainImageSrcset: mainImageSrcset
      });
    } else {
      this.imageGallery.restoreImage();
    }
  }

  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */;
  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this4 = this;
    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var viewModel = _this4.getViewModel(_this4.$scope);
      var $input = viewModel.quantity.$input;
      var quantityMin = parseInt($input.data('quantityMin'), 10);
      var quantityMax = parseInt($input.data('quantityMax'), 10);
      var currentStock = parseInt($('span[data-product-stock]').html());
      if (currentStock) {
        quantityMax = currentStock;
      } else {
        quantityMax = quantityMax;
      }
      var qty = parseInt($input.val(), 10);

      // If action is incrementing
      if ($target.data('action') === 'inc') {
        // If quantity max option is set
        if (quantityMax > 0) {
          // Check quantity does not exceed max
          if (qty + 1 <= quantityMax) {
            qty++;
          }
        } else {
          qty++;
        }
      } else if (qty > 1) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      }

      // update hidden input
      viewModel.quantity.$input.val(qty);
      // update text
      viewModel.quantity.$text.text(qty);
      _this4.updateProductDetailsData();
    });

    // Prevent triggering quantity change when pressing enter
    this.$scope.on('keypress', '.form-input--incrementTotal', function (event) {
      // If the browser supports event.which, then use event.which, otherwise use event.keyCode
      var x = event.which || event.keyCode;
      if (x === 13) {
        // Prevent default
        event.preventDefault();
      }
      _this4.updateProductDetailsData();
    });
  }

  /**
   *
   * Add a product to cart
   *
   */;
  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this5 = this;
    var $addToCartBtn = $('#form-action-addToCart', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage');

    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      return;
    }

    // Prevent default
    event.preventDefault();
    $addToCartBtn.val(waitMessage).prop('disabled', true);
    this.$overlay.show();

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.itemAdd((0,_utils_api__WEBPACK_IMPORTED_MODULE_8__.normalizeFormData)(new FormData(form)), function (err, response) {
      var errorMessage = err || response.data.error;
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);
      _this5.$overlay.hide();

      // Guard statement
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(tmp.textContent || tmp.innerText);
      }

      // Open preview modal and update content
      if (_this5.context.themeSettings.haloAddToCartAction === 'sidebar') {
        $('.modal-background').trigger('click');
        var options = {
          template: 'common/cart-preview'
        };
        var loadingClass = 'is-loading';
        var $body = $('body');
        var $cartDropdown = $('#cart-preview-dropdown');
        var $cartLoading = $('<div class="loadingOverlay"></div>');
        $body.toggleClass('halo-open-side-cart');
        $cartDropdown.addClass(loadingClass).html($cartLoading);
        $cartLoading.show();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getContent(options, function (err, response) {
          $cartDropdown.removeClass(loadingClass).html(response);
          $cartLoading.hide();
          var quantity = $(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
          $body.trigger('cart-quantity-update', quantity);
          (0,_halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context);
        });
      } else if (_this5.context.themeSettings.haloAddToCartAction === 'popup') {
        $('.modal-background').trigger('click');
        if (_this5.previewModal) {
          _this5.previewModal.open();
          _this5.updateCartContent(_this5.previewModal, response.data.cart_item.id, function () {
            return _this5.previewModal.setupFocusableElements(_global_modal__WEBPACK_IMPORTED_MODULE_7__.modalTypes.PRODUCT_DETAILS);
          });
          (0,_halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context);
        } else {
          _this5.$overlay.show();
          // if no modal, redirect to the cart page
          _this5.redirectTo(response.data.cart_item.cart_url || _this5.context.urls.cart);
        }
      } else {
        _this5.$overlay.show();
        _this5.redirectTo(response.data.cart_item.cart_url || _this5.context.urls.cart);
      }
    });
    this.setLiveRegionAttributes($addToCartBtn.next(), 'status', 'polite');
  }

  /**
   * Get cart contents
   *
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.getCartContent = function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getContent(options, onComplete);
  }

  /**
   * Redirect to url
   *
   * @param {String} url
   */;
  _proto.redirectTo = function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }

  /**
   * Update cart content
   *
   * @param {Modal} modal
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.updateCartContent = function updateCartContent(modal, cartItemId, onComplete) {
    this.getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);

      // Update cart counter
      var $body = $('body');
      var $cartQuantity = $('[data-cart-quantity]', modal.$content);
      var $cartCounter = $('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      var $promotionBanner = $('[data-promotion-banner]');
      var $backToShopppingBtn = $('.previewCartCheckout > [data-reveal-close]');
      var $modalCloseBtn = $('#previewModal > .modal-close');
      var bannerUpdateHandler = function bannerUpdateHandler() {
        var $productContainer = $('#main-content > .container');
        $productContainer.append('<div class="loadingOverlay pdp-update"></div>');
        $('.loadingOverlay.pdp-update', $productContainer).show();
        window.location.reload();
      };
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }
      if ($promotionBanner.length && $backToShopppingBtn.length) {
        $backToShopppingBtn.on('click', bannerUpdateHandler);
        $modalCloseBtn.on('click', bannerUpdateHandler);
      }
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.showProductImage(data.image);
  };
  _proto.updateProductDetailsData = function updateProductDetailsData() {
    var $form = $('form[data-cart-item-add]');
    var formDataItems = $form.serializeArray();
    var productDetails = {};
    for (var _iterator = _createForOfIteratorHelperLoose(formDataItems), _step; !(_step = _iterator()).done;) {
      var formDataItem = _step.value;
      var name = formDataItem.name,
        value = formDataItem.value;
      if (name === 'product_id') {
        productDetails.productId = Number(value);
      }
      if (name === 'qty[]') {
        productDetails.quantity = Number(value);
      }
      if (name.match(/attribute/)) {
        var productOption = {
          optionId: Number(name.match(/\d+/g)[0]),
          optionValue: value
        };
        productDetails.optionSelections = productDetails != null && productDetails.optionSelections ? [].concat(productDetails.optionSelections, [productOption]) : [productOption];
      }
    }
    document.dispatchEvent(new CustomEvent('onProductUpdate', {
      bubbles: true,
      detail: {
        productDetails: productDetails
      }
    }));
  }
  /* Halothemes*/;
  _proto.soldProduct = function soldProduct() {
    var numbersProductS = this.context.themeSettings.number_products;
    var numbersProductList = JSON.parse('[' + numbersProductS + ']');
    var numbersProductItem = Math.floor(Math.random() * numbersProductList.length);
    var numbersProduct = numbersProductList[numbersProductItem];
    var numbersHoursS = this.context.themeSettings.number_hours;
    var numbersHoursList = JSON.parse('[' + numbersHoursS + ']');
    var numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
    var numbersHour = numbersHoursList[numbersProductItem];
    var itemPrdsText = this.context.themeSettings.number_products_text;
    var itemHoursText = this.context.themeSettings.number_hours_text;
    $('.sold-product').html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-fire-2"></use></svg> <span>' + numbersProduct + ' ' + itemPrdsText + ' ' + numbersHour + ' ' + itemHoursText + '</span>');
    $('.sold-product').show();
  };
  _proto.viewingProduct = function viewingProduct() {
    var ViewerText = this.context.themeSettings.halo_viewing_product_text;
    var numbersViewer_text = this.context.themeSettings.halo_viewing_product_viewer;
    var numbersViewerList = JSON.parse('[' + numbersViewer_text + ']');
    var timeViewer = parseInt(this.context.themeSettings.halo_viewing_product_change) * 1000;
    setInterval(function () {
      var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
      $('.viewing-product span').html(numbersViewerList[numbersViewerItem] + ' ' + ViewerText);
      $('.viewing-product').show();
    }, timeViewer);
  };
  return ProductDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/api.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/utils/api.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterEmptyFilesFromForm: () => (/* binding */ filterEmptyFilesFromForm),
/* harmony export */   filterEmptyValuesFromForm: () => (/* binding */ filterEmptyValuesFromForm),
/* harmony export */   normalizeFormData: () => (/* binding */ normalizeFormData)
/* harmony export */ });
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * This function removes any empty string values from the formData
 * @param formData: FormData object
 * @returns FormData object
*/
var filterEmptyValuesFromForm = function filterEmptyValuesFromForm(formData) {
  var res = new FormData();
  try {
    for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
        key = _step$value[0],
        val = _step$value[1];
      if (val !== '') {
        res.append(key, val);
      }
    }
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
  return res;
};

/**
 * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
 * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
 * @param formData: FormData object
 * @returns FormData object
 */
var filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
  var res = new FormData();
  try {
    for (var _iterator2 = _createForOfIteratorHelperLoose(formData), _step2; !(_step2 = _iterator2()).done;) {
      var _step2$value = _step2.value,
        key = _step2$value[0],
        val = _step2$value[1];
      if (!(val instanceof File) || val.name || val.size) {
        res.append(key, val);
      }
    }
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
  return res;
};

/**
 * This function removes empty string values and empty files from the formData
 * @param formData: FormData object
 * @returns FormData object
 */
var normalizeFormData = function normalizeFormData(formData) {
  return filterEmptyValuesFromForm(filterEmptyFilesFromForm(formData));
};

/***/ }),

/***/ "./assets/js/theme/common/utils/banner-utils.js":
/*!******************************************************!*\
  !*** ./assets/js/theme/common/utils/banner-utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ie_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");

var bannerUtils = {
  dispatchProductBannerEvent: function dispatchProductBannerEvent(productAttributes) {
    if (!productAttributes.price || _ie_helpers__WEBPACK_IMPORTED_MODULE_0__.isBrowserIE) return;
    var price = 0;
    if (!productAttributes.price.price_range) {
      if (productAttributes.price.without_tax) {
        price = productAttributes.price.without_tax.value;
      }
      if (productAttributes.price.with_tax) {
        price = productAttributes.price.with_tax.value;
      }
    }
    var evt = new CustomEvent('bigcommerce.productpricechange', {
      detail: {
        amount: price
      }
    });
    window.dispatchEvent(evt);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bannerUtils);

/***/ }),

/***/ "./assets/js/theme/common/utils/safe-string.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeString: () => (/* binding */ safeString)
/* harmony export */ });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ }),

/***/ "./assets/js/theme/halothemes/additional_product_colors.js":
/*!*****************************************************************!*\
  !*** ./assets/js/theme/halothemes/additional_product_colors.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context, $productOptionsElement) {
  var productOption = $('.product-options');
  $('document').ready(function () {
    initProductMoreview();
    $productOptionsElement.on('change', function (event) {
      var $changedOption = $(event.target);

      // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
      if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
        return;
      }
      initProductMoreview($changedOption);
    });
  });
  function initProductMoreview() {
    var obj = context.themeSettings.variant_name.split(",");
    var label = productOption.find('[data-product-option-change]').find('label.form-label--inlineSmall');
    var className = '',
      classN = '.filter-';
    label.each(function (i, el) {
      var lastElement = label.length - 1;
      obj = $(el).parent('[data-product-attribute]');
      if (obj != undefined) {
        if (obj.data('product-attribute') == "set-select") {
          var inputChecked = obj.find(':selected');
        } else {
          var inputChecked = obj.find(':checked');
        }
        if (inputChecked != undefined && inputChecked != '' && inputChecked.length) {
          var clsName = inputChecked.data('filter');
          if (clsName != undefined) {
            clsName = clsName.replace('.filter-', '');
            classN += clsName;
          }
        }
      }
    });
    console.log('classN', classN);
    if (obj != undefined) {
      if (classN !== '.filter-') {
        className = classN;
        if ($(className, '.productView-title').length) {
          $('.productView-title span').removeClass('is-visible');
          $('.productView-title .text').remove();
          $(className, '.productView-title').addClass('is-visible');
        }
        if ($(className, '#tab-description').length) {
          $('#tab-description').addClass('is-visible');
          $('#tab-description > div > div').removeClass('visible');
          $(className, '#tab-description').addClass('visible');
          // bomb edited custom 
          $('#tab-description > div > .custom-variant').hide();
        } else {
          $('#tab-description > div > div').removeClass('visible');
          $('#tab-description > div > .custom-variant').show();
        }
      } else {
        $('#tab-description > div > :not([class*="filter-"])').addClass('custom-variant');
        $('#tab-description > div > div').removeClass('visible');
      }
    }
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");


function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var relate_tab = "#tab-related";
  var $bundle = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products');
  showBundle();
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').not(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this)).removeClass('is-focus');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').not(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options')).removeClass('is-open');
    if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').hasClass('is-open')) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass('is-focus');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').addClass('is-open');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).next('.halo-detail-options').removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).removeClass('is-focus');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').removeClass('is-open');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').removeClass('is-focus');
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', function (event) {
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').hasClass('is-open')) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.halo-detail-options').length === 0 && jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).closest('.halo-toggle-options').length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-options').removeClass('is-open');
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '.halo-detail-checkbox', function () {
    var id = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('id').replace('fbt_product', '');
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).is(':checked') == false) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + id + '"]').removeClass('isChecked');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + id + '"]').addClass('isChecked');
    }
    totalPrice();
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('click', '#halo-addAll', function (event) {
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products'));
    var arrPro = new Array();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-detail-checkbox').each(function (i, val) {
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).is(':checked')) {
        arrPro.push(i);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .loadingOverlay').show();
        addToCart($form, 0, arrPro);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return alert(tmp.textContent || tmp.innerText);
      }
    }
    event.preventDefault();
  });
  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/product/halo-bundle-products-tmp',
        options: 'halothemes/product/halo-bundle-products-options'
      }
    };
    var prodBundleId = [];
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').removeClass('halo-block-disable');
    firstItem();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .bundle-product-right').append('<div class="halo-product-total"><div class="total-price"><span class="text">Total price:</span><span class="price"></span></div><a class="button button--primary halo-product-total-button" id="halo-addAll">Add All To Cart</a></div>');
    jquery__WEBPACK_IMPORTED_MODULE_2___default().each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').length > 0 && prodBundleId.length == 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').each(function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == jquery__WEBPACK_IMPORTED_MODULE_2___default()(relate_tab + ' .card').length) {
              showList(list);
            }
          });
        }
      });
    } else if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products').length > 0 && prodBundleId.length > 0) {
      var num = 0;
      var list = [];
      jquery__WEBPACK_IMPORTED_MODULE_2___default().each(prodBundleId, function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = prodBundleId[i];
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }
  function firstItem() {
    var firstItem = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list .halo-product-item:first-child'),
      pId = firstItem.data('product-id'),
      $form = firstItem.find('form'),
      hasOptions = $form.find('[data-fbt-option-change]').length,
      hasDefaultOptions = $form.find('[data-default]').length;
    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes($form, attributesData);
        if (hasDefaultOptions) {
          updateView($form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list').append(response.item);
      if (response.options.trim() != "") {
        var pId = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.item).data('product-id');
        var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list .halo-product-item[data-product-id="' + pId + '"] form');
        $form.append(response.options);
        var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
        var hasOptions = $productOptionsElement.html().trim().length;
        var hasDefaultOptions = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response.options).find('[data-default]').length;
        if (hasDefaultOptions && hasOptions) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var attributesData = response.data || {};
            var attributesContent = response.content || {};
            updateProductAttributes($form, attributesData);
            if (hasDefaultOptions) {
              updateView($form, attributesData, attributesContent);
            } else {
              updateDefaultAttributesForOOS(attributesData);
            }
          });
        }
        setProductVariant();
      }
    });
    productOptions();
    showSlickSlider();
    totalPrice();
  }
  function showSlickSlider() {
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .halo-product-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: false,
      nextArrow: "<div class='slick-next slick-arrow'>next</div>",
      prevArrow: "<div class='slick-prev slick-arrow'>prev</div>",
      responsive: [{
        breakpoint: 1440,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
          dots: false,
          arrows: true
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    });
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0, len = arrPro.length; i < len; i++) {
      var k = arrPro[i];
      var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) return false;
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true;
    $attributes.find('input:text, input:password, input:file, textarea').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function () {
      if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {} else {
        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val()) {} else {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).focus();
          check = false;
        }
      }
    });
    var att = "";
    $attributes.find('input:radio, input:checkbox').each(function () {
      if (att != jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name")) {
        att = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("name");
        if (!jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).prop('required')) {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "checkbox") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr("type") == "radio") {
            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP) {
    var _this = this;
    if (i >= arrP.length) {
      window.location = '/cart.php';
      return;
    }
    if (window.FormData === undefined) {
      return;
    }
    var k = arrP[i];
    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
      var errorMessage = err || response.data.error;
      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
      }
      i++;
      if (i >= arrP.length) {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('#halo-bundle-products .loadingOverlay').hide();
        updateCartContent(response.data.cart_item.id);
        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.modal-background').trigger('click');
        var options = {
          template: 'common/cart-preview'
        };
        var loadingClass = 'is-loading';
        var $body = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body');
        var $cartDropdown = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#cart-preview-dropdown');
        var $cartLoading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div class="loadingOverlay"></div>');
        $body.toggleClass('halo-open-side-cart');
        $cartDropdown.addClass(loadingClass).html($cartLoading);
        $cartLoading.show();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
          $cartDropdown.removeClass(loadingClass).html(response);
          $cartLoading.hide();
          var quantity = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
          $body.trigger('cart-quantity-update', quantity);
          (0,_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.context);
        });
        return;
      }
      addToCart(form, i, arrP);
    });
  }
  function updateCartContent(cartItemId, onComplete) {
    var $body = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body');
    var loadingClass = 'is-loading';
    var $cartDropdown = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#cart-preview-dropdown');
    var $cartLoading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<div class="loadingOverlay"></div>');
    var $sideCartBlock = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#sideBlock_cart');
    $body.toggleClass('openCartSidebar is-side-block');
    $sideCartBlock.toggleClass('is-open');
    $cartDropdown.addClass(loadingClass).html($cartLoading);
    $cartLoading.show();
    getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      $cartDropdown.removeClass(loadingClass).html(response);
      $cartLoading.hide();
      var quantity = jquery__WEBPACK_IMPORTED_MODULE_2___default()(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
      $body.trigger('cart-quantity-update', quantity);
      (0,_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_4__["default"])(context);
      if (onComplete) {
        onComplete(response);
      }
    });
  }
  function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'common/cart-preview'
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, onComplete);
  }
  function totalPrice() {
    var total = 0,
      pos = 0,
      symbol = "$";
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item.isChecked').each(function (i, val) {
      var currency, price, s;
      if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').length) {
        currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withTax').text();
      } else {
        currency = jquery__WEBPACK_IMPORTED_MODULE_2___default()(val).find('.price-section .price.price--withoutTax').text();
      }
      price = parseFloat(currency.replace(/[^0-9.-]+/g, ""));
      s = currency.replace(parseFloat(price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ","), "");
      if (isNaN(parseFloat(s.replace(/[^0-9.-]+/g, "")))) {
        symbol = s;
      }
      if (currency.indexOf(symbol) != -1) {
        pos = currency.indexOf(symbol);
      }
      total = total + price;
    });
    total = parseFloat(total).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (pos == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-total .price').html(total);
  }
  function productOptions() {
    totalPrice();
    var $form = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form', $bundle);
    var $productOptionsElement = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change]', $form);
    jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).on('change', '#halo-bundle-products form [data-fbt-option-change]', function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }
  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    jquery__WEBPACK_IMPORTED_MODULE_2___default().each(jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              jquery__WEBPACK_IMPORTED_MODULE_2___default()(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target);
    var $form = $changedOption.parents('form');
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $form).val();
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      totalPrice();
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = jquery__WEBPACK_IMPORTED_MODULE_2___default()(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.image.getSrc(data.image.data, context.themeSettings.productgallery_size);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).attr('srcset')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="product_id"]', $scope).val();
    if (!data.purchasable || !data.instock) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', false).prop('disabled', true);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').removeClass('hasOptions--selected');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('isChecked');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('#fbt_product' + productId).prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          jquery__WEBPACK_IMPORTED_MODULE_2___default()('.halo-product-item[data-product-id="' + productId + '"]').addClass('hasOptions--selected');
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.rrp-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.non-sale-price--withoutTax', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-section--saving', $scope),
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-now-label', $scope)
      },
      priceLabel: {
        $span: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.price-label', $scope)
      },
      $weight: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info [data-product-weight]', $scope),
      $increments: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--increments :input', $scope),
      $addToCart: jquery__WEBPACK_IMPORTED_MODULE_2___default()('#form-action-addToCart', $scope),
      $wishlistVariation: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.form-field--stock', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-stock]', $scope)
      },
      $sku: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-sku]'),
      $upc: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-upc]'),
      $mpn: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-mpn]'),
      quantity: {
        $text: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.incrementTotal', $scope),
        $input: jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productView-info-bulkPricing', $scope)
    };
  }
  function showMessageBox(message) {
    var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.productAttributes-message');
    if (message) {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
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
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e);
    }
    return formData;
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloGalleryPopup.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloGalleryPopup.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context, $gallery) {
  var container_div = $gallery.attr('class');
  container_div = container_div.replace('modal-body', '').replace(' ', '');
  jQuery.fn.vGallery = function (options) {
    var element = jQuery(this);
    var galleryID = "#" + element.attr("id");
    var brand = $('.productView-details .productView-brand a').text(),
      title = $('.productView-details .productView-product .productView-title').text();
    if ($('#video-gallery-pc-popup').length) {
      $('#video-gallery-pc-popup .modal-header-title').html('<strong>' + brand + '</strong>' + title);
    }
    if (!options) var options = {};
    var b = new haloGallery();
    b.init(element, options);
    $('[data-image-gallery-item]', $gallery).each(function () {
      b.add({
        'thumbnail': $(this).find('img').attr('src'),
        'url': $(this).attr('data-image-gallery-zoom-image-url')
      });
    });
    $('[data-video-item]', $gallery).each(function () {
      b.add({
        'thumbnail': '//i.ytimg.com/vi/' + $(this).attr('data-video-id') + '/default.jpg',
        'content': "<iframe class='youtube-iframe' width='100%'  src='https://www.youtube.com/embed/" + $(this).attr('data-video-id') + "?enablejsapi=1' frameborder='0' allowfullscreen></iframe>"
      });
    });
    b.addPopview();
  };
  function haloGallery() {
    var g_objGallery;
    var g_options = {};
    this.init = function (gallery, customOptions) {
      g_objGallery = jQuery(gallery);
      g_options = jQuery.extend(g_options, customOptions);
      this.data = [];
    };
    this.data = [];
    this.round = [];
    this.add = function (ops) {
      if (ops.url || ops.content) {
        var dfs = {
          'thumbnail': '',
          'url': '',
          'type': '',
          'content': '',
          'w': 0,
          'height': 0,
          'loaded': false
        };
        ops = $.extend({}, dfs, ops);
        if (ops.content) ops.u_content = ops.content;else {
          if (!ops.type) ops.type = 'image';
          if (ops.type = 'image') {
            ops.u_content = "<img src='" + ops.url + "'>";
          }
        }
        if (!ops.thumbnail) ops.thumbnail = ops.url;
        if (ops.thumbnail) ops.u_thumbnail = "<img src='" + ops.thumbnail + "'>";else ops.u_thumbnail = ops.u_content;
        if (!ops.u_thumbnail) ops.u_thumbnail = "<div class='thumbnail'></div>";
        this.data.push(ops);
      }
    };
    this.reround = function () {
      this.round = [];
      var pp;
      var c = this.data.length;
      for (var i = 0; i < c; i++) {
        pp = {
          'next': i + 1,
          'prev': i - 1,
          'current': i
        };
        this.round[i] = pp;
        this.data[i].stt = i;
      }
      this.round[0].prev = c - 1;
      this.round[c - 1].next = 0;
    };
    this.addPopview = function (ops) {
      this.reround();
      var dfs = {
        'width': '100%',
        'height': '100%',
        'view_slide': true,
        cur: 0,
        'time': 400,
        'center': true
      };
      ops = $.extend({}, dfs, ops);
      ops.map = {
        'di': {},
        've': {},
        'round': {}
      };
      ops.stt = 0;
      var cthis = this;
      set();
      bindEvent();
      function set() {
        if ($('.' + container_div + '.vgallery_popup').length > 0) $('.' + container_div + '.vgallery_popup').remove();
        var s = "<div class='" + container_div + " vgallery_popup'><div class='acontent'><div class='bcontent'></div></div></div>";
        if (g_objGallery.hasClass(container_div)) {
          g_objGallery.html(s);
        } else {
          g_objGallery.append(s);
        }
        g_objGallery.find('.vgallery_popup').hide();
        g_objGallery.find('.' + container_div).show();
        ops.ob = $('.' + container_div + '.vgallery_popup');
        ops.ob_ccontent = $('>.acontent', ops.ob);
        ops.ob_content = $('>.acontent>.bcontent', ops.ob);
        $(ops.ob_ccontent).css({
          'width': ops.width,
          'height': ops.height
        });
        if (ops.view_slide) draw_slide();
      }
      function aview(pp) {
        return "<li><span class='thumbbsd' data='" + pp.stt + "'>" + pp.u_thumbnail + "</span></li>";
      }
      function draw_slide() {
        var s1 = '',
          s2 = '';
        for (var i = 0; i < cthis.data.length; i++) {
          if (cthis.data[i].type) s1 += aview(cthis.data[i]);else s2 += aview(cthis.data[i]);
        }
        if (s1) s1 = "<div class='gallery-thumbnail gallery-thumbnail-1'><h2></h2><ul>" + s1 + "</ul></div>";
        if (s2) s2 = "<div class='gallery-thumbnail gallery-thumbnail-2'><h2></h2><ul>" + s2 + "</ul></div>";
        var s = "<div class='content_slide'><div class='box1'><div class='btn-arrow btn-prev'></div><div class='galleryView'></div><div class='btn-arrow btn-next'></div></div><div class='box2'>" + s1 + s2 + "</div></div>";
        $(ops.ob_content).append(s);
        ops.ob_sct = $('.box1 > .galleryView');
        ops.ob_e = $('.thumbbsd', ops.ob);
        var i = -1;
        $.each(ops.ob_e, function () {
          i++;
          var v = $(this).attr('data');
          ops.map.di[i] = v;
          ops.map.ve[v] = i;
        });
        ar(ops.cur);
      }
      function ar(num) {
        if (num == -1) {
          $(ops.ob_sct).html('');
        } else {
          ops.cur = num;
          ops.current = ops.map.ve[ops.cur];
          $(ops.ob_e).removeClass('thumb-video');
          $(ops.ob_e).eq(ops.map.ve[ops.cur]).addClass('thumb-video');
          $(ops.ob_sct).animate({
            'opacity': 0
          }, ops.time / 2, function () {
            $(ops.ob_sct).html(cthis.data[num].u_content);
            $(ops.ob_sct).animate({
              'opacity': 1
            }, ops.time / 2);
            // $(ops.ob_sct).trigger('zoom.destroy').zoom({ touch: false, onZoomIn: true, onZoomOut: true });
          });
        }
      }
      function bindEvent() {
        $('[data-image-gallery-main]', $gallery).bind('click', function (e) {
          ar(ops.cur);
          e.preventDefault();
        });
        $('[data-image-gallery-item]', $gallery).bind('hover', function (e) {
          var num = $('[data-image-gallery-item]', $gallery).index(this);
          if (num != -1) {
            ops.cur = num;
          }
        });
        $('[data-image-gallery-item]', $gallery).bind('click', function (e) {
          var container_div = $gallery.attr('class');
          container_div = container_div.replace('modal-body', '').replace(' ', '');
          $('.vgallery_popup').hide();
          $('.' + container_div + '.vgallery_popup').show();
          ar($('[data-image-gallery-item]', $gallery).index(this));
          e.preventDefault();
        });
        $('[data-video-icon]', $gallery).bind('click', function (e) {
          var container_div = $gallery.attr('class');
          container_div = container_div.replace('modal-body', '').replace(' ', '');
          $('.vgallery_popup').hide();
          $('.' + container_div + '.vgallery_popup').show();
          ar($('[data-image-gallery-item]', $gallery).length);
          e.preventDefault();
        });
        $('.btn-next', ops.ob).bind('click', function (e) {
          if (ops.current > ops.ob.length) ops.current = ops.cur;
          var s = cthis.round[ops.current].next;
          ar(ops.map.di[s]);
          e.preventDefault();
        });
        $('.btn-prev', ops.ob).bind('click', function (e) {
          if (ops.current > ops.ob.length) ops.current = ops.cur;
          var s = cthis.round[ops.current].prev;
          ar(ops.map.di[s]);
          e.preventDefault();
        });
        $(ops.ob_e).bind('click', function () {
          var inx = $(this).attr('data');
          ar(inx);
        });
      }
    };
  }
  $(document).ready(function () {
    $("#gallery").vGallery({
      gridpanel_vertical_scroll: false
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloPrevNextProduct.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloPrevNextProduct.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if (context.themeSettings.halo_prev_next_product == true) {
    if ($(window).width() > 1024) {
      if ($('.productView-nextProducts').length) {
        var productId = $('.productView-nextProducts').data('product-id'),
          nextId = productId + 1,
          prevId = productId - 1,
          nextLink,
          prevLink;
        var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
          $prodIcons = $('.productView-nextProducts .next-prev-icons'),
          $options = {
            template: 'halothemes/product/halo-prev-next-product-tpm'
          };
        if (nextId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById(nextId, $options, function (err, response) {
            if (err) {
              return false;
            }
            nextLink = $(response).find('.card-link').attr('href');
            if (nextLink != undefined && nextLink != '') {
              $prodIcons.find('.next-icon').attr('href', nextLink);
              $prodIcons.find('.next-icon').removeClass('disable');
              $prodWrap.find('#next-product-modal').append(response);
            }
          });
        }
        if (prevId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById(prevId, $options, function (err, response) {
            if (err) {
              return false;
            }
            prevLink = $(response).find('.card-link').attr('href');
            if (prevLink != undefined && prevLink != '') {
              $prodIcons.find('.prev-icon').attr('href', prevLink);
              $prodIcons.find('.prev-icon').removeClass('disable');
              $prodWrap.find('#prev-product-modal').append(response);
            }
          });
        }
        $prodIcons.on('mouseover', function () {
          $prodWrap.addClass('is-active');
        }).on('mouseleave', function () {
          $prodWrap.removeClass('is-active');
        });
        $('.next-icon', $prodIcons).on('mouseover', function () {
          if (!$(this).hasClass('disable')) {
            $('#prev-product-modal').removeClass('is-show');
            $('#next-product-modal').addClass('is-show');
          } else {
            $('#prev-product-modal').removeClass('is-show');
          }
        });
        $('.prev-icon', $prodIcons).on('mouseover', function () {
          if (!$(this).hasClass('disable')) {
            $('#next-product-modal').removeClass('is-show');
            $('#prev-product-modal').addClass('is-show');
          } else {
            $('#next-product-modal').removeClass('is-show');
          }
        });
        $prodWrap.on('mouseover', function () {
          $prodWrap.addClass('is-active');
        }).on('mouseleave', function () {
          $prodWrap.removeClass('is-active');
        });
      }
    }
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').length) {
    var scroll = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#form-action-addToCart').offset();
    var scrollTop = scroll.top;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scrollTop) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
          var heightHeader = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').height();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
          // if ($('.header').hasClass('is-sticky')) {
          //     $('#sticky_addtocart').css('top', heightHeader);
          // } else {
          //     $('#sticky_addtocart').css('top', '0px');
          // }
        }
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').removeClass('show_sticky');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').removeClass('is-open');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.choose_options_add', function (event) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-active');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pop-up-option').toggleClass('is-open');
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.pop-up-option .close', function (event) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pop-up-option").removeClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.choose_options_add').removeClass('is-active');
    });
    window.onload = function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() > scrollTop) {
        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').hasClass('show_sticky')) {
          var heightHeader = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.header').height();
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sticky_addtocart').addClass('show_sticky');
          // if ($('.header').hasClass('is-sticky')) {
          //     $('#sticky_addtocart').css('top', heightHeader);
          // } else {
          //     $('#sticky_addtocart').css('top', '0px');
          // }
        }
      }
    };
  }
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloPrevNextProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloPrevNextProduct */ "./assets/js/theme/halothemes/haloPrevNextProduct.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */










var WRITE_REVIEW = _global_modal__WEBPACK_IMPORTED_MODULE_6__.modalTypes.WRITE_REVIEW;
var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    var context = this.context;
    var token = context.token;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    this.hlGlobal();
    (0,_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_8__["default"])();
    this.hideOptionNoPurchasable();
    if (this.context.themeSettings.halo_bundle_products_enable == true) {
      (0,_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
    }
    (0,_halothemes_haloPrevNextProduct__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $(document).on('opened.fndtn.reveal', '#modal-review-form', function () {
      return _this2.reviewModal.setupFocusableElements(WRITE_REVIEW);
    });
    $("#stamped-badge-widget").appendTo('#productView-widget');
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  _proto.hlGlobal = function hlGlobal() {
    var wWidth = window.innerWidth;
    var $desTab = $('.productView-description');
    var $infoTab = $('#tab-additional-information');
    if ($desTab.length && wWidth < 1025) {
      $('.tab-content.is-active', $desTab).find('.tabContent').slideDown();
    }
    if ($infoTab.length) {
      if ($infoTab.find('.tabContent').text().trim() == '') {
        $('[href="#tab-additional-information"]').parent().hide();
        $infoTab.hide();
      }
    }

    //
    // Load Tabs
    // -----------------------------------------------------------------------------
    var $loadTabBtn = $('[data-tab-load]');
    var $firstTab = $('.first-tab');
    var check_loadTabFirst = $firstTab.data('tab-check');
    if (check_loadTabFirst) {
      $firstTab.data('tab-check', false);
      var url_loadTab = $firstTab.data('tab-load');
      var thisTab = $firstTab.attr('href');
      var $thisTab = $(thisTab + ' .tabContent');
      $.get(url_loadTab, function (data) {
        $('.icon-loading', $thisTab).remove();
        $thisTab.append($(data).find('.page-content').html());
      }).fail(function (err) {
        $('.icon-loading', $thisTab).remove();
        $thisTab.append("<p>To Be Updated</p>");
      });
    }
    $loadTabBtn.on('click', function (e) {
      e.preventDefault();
      var $target = $(e.currentTarget);
      var check_loadTab = $target.data('tab-check');
      if (check_loadTab) {
        $target.data('tab-check', false);
        var _url_loadTab = $target.data('tab-load');
        var _thisTab = $target.attr('href');
        var _$thisTab = $(_thisTab + ' .tabContent');
        $.get(_url_loadTab, function (data) {
          $('.icon-loading', _$thisTab).remove();
          _$thisTab.append($(data).find('.page-content').html());
        }).fail(function (err) {
          $('.icon-loading', _$thisTab).remove();
          _$thisTab.append("<p>To Be Updated</p>");
        });
      }
    });

    //
    // Tabs Mobile
    // -----------------------------------------------------------------------------
    var $btnTabMobile = $('.tab-titleMobile');
    $btnTabMobile.on('click', function (e) {
      e.preventDefault();
      var $target = $(e.currentTarget);
      var idTab = $target.attr('href');
      var thisTop = $('.productView-description').offset().top - 20;
      if ($target.hasClass('is-active')) {
        $target.removeClass('is-active');
        $(idTab).removeClass('is-active').find('.tabContent').slideUp();
      } else {
        var $tabActiveMobile = $('.productView-description .tabs-contents .tab-content.is-active');
        $btnTabMobile.removeClass('is-active');
        $target.addClass('is-active');
        $tabActiveMobile.removeClass('is-active').find('.tabContent').slideUp();
        $(idTab).addClass('is-active').find('.tabContent').slideDown();
        $('body,html').animate({
          scrollTop: thisTop
        }, 1000);
      }
    });

    //
    // Share Link
    // -----------------------------------------------------------------------------
    var $shareLinkBtn = $('.socialMedia-button');
    var $shareLinkPopup = $('.socialMedia-dropdown');
    var $shareLinkClose = $('.shareLinkSocial__close');
    var $shareLinkCopy = $('#shareLinkSocial__copy');
    $shareLinkBtn.on('click', function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass('is-open')) {
        $shareLinkPopup.slideUp(200);
        $shareLinkPopup.removeClass('is-open');
      } else {
        $shareLinkPopup.slideDown(200);
        $shareLinkPopup.addClass('is-open');
      }
    });
    $shareLinkClose.on('click', function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass('is-open')) {
        $shareLinkPopup.slideUp(200);
        $shareLinkPopup.removeClass('is-open');
      }
    });
    $shareLinkCopy.on('click', function (e) {
      e.preventDefault();
      var $target = $(e.target);
      $target.select();
      document.execCommand("copy");
    });

    //
    // Body Close
    // -----------------------------------------------------------------------------
    $(document).on('click', function (e) {
      var $target = $(e.target);
      var $shareLinkPopup = $('.socialMedia-dropdown');
      if ($target.closest('.social-mediaBlock').length === 0) {
        if ($shareLinkPopup.hasClass('is-open')) {
          $shareLinkPopup.slideUp(200);
          $shareLinkPopup.removeClass('is-open');
        }
      }
    });

    /* Custom Details Tab */
    // $('.productView-description .product-details-tab').appendTo('.productView-description #tab-custom-detail .tabContent'); 
    //     if($(".productView-description #tab-custom-detail").text().trim()==""){
    //     $(".productView-description .tab.first-tab").hide();
    // }

    /* Custom Link Tab */
    $('.productView-description .product-link-tab').appendTo('.productView-description #tab-custom-document .tabContent');
    if ($(".productView-description #tab-custom-document").text().trim() == "") {
      $(".productView-description .tab.first-tab").hide();
    }
  };
  _proto.hideOptionNoPurchasable = function hideOptionNoPurchasable() {
    var productID = document.querySelector('.productView').getAttribute('data-productId');
    this.getProductOptions(productID).then(function (data) {
      var product = data.data.site.products.edges[0].node,
        optionsList = product.variants.edges;
      optionsList.forEach(function (variant) {
        var isPurchasable = variant.node.isPurchasable;
        if (!isPurchasable) {
          /* Hide variant cannot purchase */
          var variantId = variant.node.entityId;
          var variantOptions = variant.node.productOptions.edges;
          variantOptions.forEach(function (option) {
            var optionsList = option.node.values.edges;
            optionsList.forEach(function (optionValue) {
              var optionValueId = optionValue.node.entityId;
              var optionValueElement = document.querySelector("[data-product-attribute-value=\"" + optionValueId + "\"]");
              if (!optionValue.node.isDefault) {
                optionValueElement.remove();
              }
            });
          });
        }
      });
    });
  }
  /* Hide option no Purchasable */;
  _proto.getProductOptions = function getProductOptions(productID) {
    return fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.context.token
      },
      body: JSON.stringify({
        query: "\n                 query ExtendedProductsById {\n                     site {\n                         products(entityIds: [" + productID + "], first: 50) {\n                             edges {\n                                 node {\n                                     entityId\n                                     name\n                                     defaultImage{\n                                         urlOriginal\n                                     }\n                                     variants(first: 50){\n                                         edges{\n                                             node{\n                                                 entityId\n                                                 defaultImage{\n                                                     urlOriginal\n                                                 }\n                                                 productOptions(first: 50) {\n                                                     edges {\n                                                         node {\n                                                             entityId\n                                                             displayName\n                                                             isRequired\n                                                             ... on MultipleChoiceOption {\n                                                                 displayStyle\n                                                                 values {\n                                                                     edges {\n                                                                         node {\n                                                                             entityId\n                                                                             label\n                                                                             isDefault\n                                                                             ... on SwatchOptionValue {\n                                                                                 hexColors\n                                                                                 imageUrl(width: 150)\n                                                                             }\n                                                                         }\n                                                                     }\n                                                                 }\n                                                             }\n                                                         }\n                                                     }\n                                                 }\n                                                 isPurchasable\n                                             }\n                                         }\n                                     }\n                                 }\n                             }\n                         \n                         }\n                     }\n                 }"
      })
    }).then(function (res) {
      return res.json();
    });
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/image-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/image-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageGallery)
/* harmony export */ });
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! easyzoom */ "./node_modules/easyzoom/dist/easyzoom.js");
/* harmony import */ var easyzoom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(easyzoom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js");
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fancybox__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery($gallery) {
    this.$mainImage = $gallery.find('[data-image-gallery-main]');
    this.$mainImageNested = $gallery.find('[data-main-image]');
    this.$selectableImages = $gallery.find('[data-image-gallery-item]');
    this.$swipThumbnails = $gallery.find('.productView-for');
    this.currentImage = {};
  }
  var _proto = ImageGallery.prototype;
  _proto.init = function init() {
    var _this = this;
    this.bindEvents();
    try {
      this.fancyboxZoom();
      window.matchMedia('(min-width: 1025px)').addEventListener('change', function () {
        _this.setImageZoom();
      });
    } catch (error) {
      console.error(error);
    }
  };
  _proto.setMainImage = function setMainImage(imgObj) {
    this.currentImage = Object.assign({}, imgObj);
    this.setActiveThumb();
    this.swapMainImage();
  };
  _proto.setAlternateImage = function setAlternateImage(imgObj) {
    if (!this.savedImage) {
      this.savedImage = {
        mainImageUrl: this.$mainImage.find('img').attr('src'),
        zoomImageUrl: this.$mainImage.attr('data-zoom-image'),
        mainImageSrcset: this.$mainImage.find('img').attr('srcset'),
        $selectedThumb: this.currentImage.$selectedThumb
      };
    }
    this.setMainImage(imgObj);
  };
  _proto.restoreImage = function restoreImage() {
    if (this.savedImage) {
      this.setMainImage(this.savedImage);
      delete this.savedImage;
    }
  };
  _proto.fancyboxZoom = function fancyboxZoom() {
    $('[data-fancybox="images"]').fancybox({
      buttons: ["zoom", "slideShow", "close"]
    });
  };
  _proto.selectNewImage = function selectNewImage(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    var imgObj = {
      mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
      zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
      mainImageSrcset: $target.attr('data-image-gallery-new-image-srcset'),
      $selectedThumb: $target,
      mainImageAlt: $target.children().first().attr('alt')
    };
    this.setMainImage(imgObj);
  };
  _proto.selectNewImage2 = function selectNewImage2(e) {
    var $target = $(e.currentTarget).find('.slick-current [data-image-gallery-item]');
    var imgObj = {
      mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
      zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
      mainImageSrcset: $target.attr('data-image-gallery-new-image-srcset'),
      $selectedThumb: $(e.currentTarget).find('.slick-current')
    };
    this.setMainImage(imgObj);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$selectableImages.removeClass('is-active');
    if (this.currentImage.$selectedThumb) {
      this.currentImage.$selectedThumb.addClass('is-active');
    }
  };
  _proto.swapMainImage = function swapMainImage() {
    var isBrowserIE = navigator.userAgent.includes('Trident');
    this.easyzoom.data('easyZoom').swap(this.currentImage.mainImageUrl, this.currentImage.zoomImageUrl, this.currentImage.mainImageSrcset);
    this.$mainImage.attr({
      'data-zoom-image': this.currentImage.zoomImageUrl
    }).find('a').attr({
      href: this.currentImage.zoomImageUrl
    }).find('img').attr({
      src: this.currentImage.mainImageUrl
    });
    this.$mainImage.find('.productView-img-container img').attr({
      srcset: this.currentImage.mainImageUrl
    });
    this.$mainImageNested.attr({
      alt: this.currentImage.mainImageAlt,
      title: this.currentImage.mainImageAlt
    });
    if (isBrowserIE) {
      var fallbackStylesIE = {
        'background-image': "url(" + this.currentImage.mainImageUrl + ")",
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-origin': 'content-box',
        'background-size': 'contain'
      };
      this.$mainImageNested.css(fallbackStylesIE);
    }
  };
  _proto.checkImage = function checkImage() {
    var $imageContainer = $('.productView-image');
    var containerHeight = $imageContainer.height();
    var containerWidth = $imageContainer.width();
    var $image = this.easyzoom.data('easyZoom').$zoom;
    var height = $image.height();
    var width = $image.width();
    if (height < containerHeight || width < containerWidth) {
      this.easyzoom.data('easyZoom').hide();
    }
  };
  _proto.setImageZoom = function setImageZoom() {
    var _this2 = this;
    this.easyzoom = this.$mainImage.easyZoom({
      onShow: function onShow() {
        return _this2.checkImage();
      },
      errorNotice: '',
      loadingNotice: ''
    });
  };
  _proto.bindEvents = function bindEvents() {
    this.$selectableImages.on('click', this.selectNewImage.bind(this));
    this.$swipThumbnails.on('afterChange', this.selectNewImage2.bind(this));
  };
  return ImageGallery;
}();


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.announceInputErrorMessage
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('#productReview_link').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewSubject)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUdmO0FBQ21CO0FBQ087QUFDTjtBQUN1QjtBQUUzQjtBQUNtQjtBQUNwQjtBQUNpQztBQUN0QjtBQUNvQjtBQUFBLElBRXpEYyxjQUFjLDBCQUFBQyxtQkFBQTtFQUMvQixTQUFBRCxlQUFZRSxNQUFNLEVBQUVDLE9BQU8sRUFBRUMscUJBQXFCLEVBQU87SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBNUJELHFCQUFxQjtNQUFyQkEscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQUE7SUFDbkRDLEtBQUEsR0FBQUosbUJBQUEsQ0FBQUssSUFBQSxPQUFNSixNQUFNLEVBQUVDLE9BQU8sQ0FBQztJQUV0QkUsS0FBQSxDQUFLRSxRQUFRLEdBQUdDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztJQUN6REgsS0FBQSxDQUFLSSxZQUFZLEdBQUcsSUFBSXBCLDhEQUFZLENBQ2hDbUIsQ0FBQyxDQUFDLHNCQUFzQixFQUFFSCxLQUFBLENBQUtILE1BQU0sQ0FDekMsQ0FBQztJQUNERyxLQUFBLENBQUtJLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDeEJMLEtBQUEsQ0FBS00sb0JBQW9CLENBQUMsQ0FBQztJQUMzQk4sS0FBQSxDQUFLTyxvQkFBb0IsR0FBR0osQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZESCxLQUFBLENBQUtRLDJCQUEyQixHQUFHUixLQUFBLENBQUtPLG9CQUFvQixDQUFDRSxJQUFJLENBQUMsQ0FBQzs7SUFFbkU7SUFDQSxJQUFJaEIscUVBQVksQ0FBQ08sS0FBQSxDQUFLRixPQUFPLEVBQUVFLEtBQUEsQ0FBS0gsTUFBTSxDQUFDO0lBRTNDLElBQUlNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ08sTUFBTSxFQUFFO01BQzNCVixLQUFBLENBQUtXLFdBQVcs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QUQsR0FBRyxDQUFDdGhCLElBQUksQ0FBQ29oQixTQUFTLEVBQUUsSUFBSU4sWUFBWSxDQUFDUSxHQUFHLENBQUMsQ0FBQztFQUM5QyxDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvYmFubmVyLXV0aWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9zYWZlLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2FkZGl0aW9uYWxfcHJvZHVjdF9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvQnVuZGxlUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvR2FsbGVyeVBvcHVwLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1ByZXZOZXh0UHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lBZGRUb0NhcnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L2ltYWdlLWdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9yZXZpZXdzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzQmFzZSwge1xuICAgIG9wdGlvbkNoYW5nZURlY29yYXRvcixcbn0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vcHJvZHVjdC9pbWFnZS1nYWxsZXJ5JztcbmltcG9ydCBtb2RhbEZhY3RvcnksIHsgc2hvd0FsZXJ0TW9kYWwsIG1vZGFsVHlwZXMgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHsgaXNFbXB0eSwgaXNQbGFpbk9iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBub3JtYWxpemVGb3JtRGF0YSB9IGZyb20gJy4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcbmltcG9ydCBiYW5uZXJVdGlscyBmcm9tICcuL3V0aWxzL2Jhbm5lci11dGlscyc7XG5pbXBvcnQgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyBmcm9tICcuLi9oYWxvdGhlbWVzL2hhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcnO1xuaW1wb3J0IEdhbGxlcnlQb3B1cCBmcm9tICcuLi9oYWxvdGhlbWVzL2hhbG9HYWxsZXJ5UG9wdXAnO1xuaW1wb3J0IGFkZGl0aW9uYWxQcm9kdWN0Q29sb3JzIGZyb20gJy4uL2hhbG90aGVtZXMvYWRkaXRpb25hbF9wcm9kdWN0X2NvbG9ycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCRzY29wZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIC5sb2FkaW5nT3ZlcmxheScpO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeSA9IG5ldyBJbWFnZUdhbGxlcnkoXG4gICAgICAgICAgICAkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScsIHRoaXMuJHNjb3BlKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuUXVhbnRpdHlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZSA9ICQoJy5zd2F0Y2gtb3B0aW9uLW1lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5zd2F0Y2hPcHRpb25NZXNzYWdlSW5pdFRleHQgPSB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlLnRleHQoKTtcblxuICAgICAgICAvKiBIYWxvdGhlbWVzICovXG4gICAgICAgIG5ldyBHYWxsZXJ5UG9wdXAodGhpcy5jb250ZXh0LCB0aGlzLiRzY29wZSk7XG5cbiAgICAgICAgaWYgKCQoJy5zb2xkLXByb2R1Y3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc29sZFByb2R1Y3QodGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9XG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuICAgICAgICBjb25zdCAkcHJvZHVjdFN3YXRjaEdyb3VwID0gJCgnW2lkKj1cImF0dHJpYnV0ZV9zd2F0Y2hcIl0nLCAkZm9ybSk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQuc2hvd1N3YXRjaE5hbWVzKSB7XG4gICAgICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICAgICAgJHByb2R1Y3RTd2F0Y2hHcm91cC5vbignY2hhbmdlJywgKHsgdGFyZ2V0IH0pID0+XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3dhdGNoTmFtZU9uT3B0aW9uKCQodGFyZ2V0KSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICQuZWFjaCgkcHJvZHVjdFN3YXRjaEdyb3VwLCAoXywgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmlzKCc6Y2hlY2tlZCcpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTd2F0Y2hOYW1lT25PcHRpb24oJChlbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudDIoKTtcblxuICAgICAgICAgICAgLyogTWludCBTdGFydCBVcGRhdGUgMDUwMjIwMjQqL1xuICAgICAgICAgICAgLyogUmVtb3ZlIGRlZmF1bHQgY2xhc3Mgd2hlbiBkb24ndCBzZWxlY3Qgb3B0aW9uICovXG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXByb2R1Y3QgLnByb2R1Y3RWaWV3LXByaWNlJykucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICdjdXN0b20tZGVmYXVsdFByaWNlJ1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1wcm9kdWN0IC5wcm9kdWN0Vmlldy1wcmljZScpLmFkZENsYXNzKFxuICAgICAgICAgICAgICAgICAgICAnY3VzdG9tLWRlZmF1bHRQcmljZSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvL2NhbGwgc2NyaXB0XG4gICAgICAgIGFkZGl0aW9uYWxQcm9kdWN0Q29sb3JzKHRoaXMuY29udGV4dCwgJHByb2R1Y3RPcHRpb25zRWxlbWVudCk7XG5cbiAgICAgICAgJGZvcm0ub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCB0byBjYXJ0IDJcbiAgICAgICAgY29uc3QgJGZvcm0yID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGQtMl0nLCAkc2NvcGUpO1xuICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50MiA9ICQoXG4gICAgICAgICAgICAnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlLTRdJyxcbiAgICAgICAgICAgICRmb3JtMlxuICAgICAgICApO1xuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQyLm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkMihldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50MigpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydDIudGhlbWV2YWxlJyxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICRmb3JtMi5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAkZm9ybTIub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybTJbMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmXG4gICAgICAgICAgICBoYXNPcHRpb25zXG4gICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBoYXNEZWZhdWx0T3B0aW9uc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAkcHJvZHVjdElkLFxuICAgICAgICAgICAgICAgICRmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgICAgICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJyxcbiAgICAgICAgICAgICAgICBvcHRpb25DaGFuZ2VDYWxsYmFja1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3ZpZXdpbmdfcHJvZHVjdCkge1xuICAgICAgICAgICAgdGhpcy52aWV3aW5nUHJvZHVjdCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgkZm9ybVswXS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goXG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctb3B0aW9ucyBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSxcbiAgICAgICAgICAgIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICh0eXBlID09PSAnaW5wdXQtZmlsZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAndGV4dGFyZWEnICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKVxuICAgICAgICAgICAgICAgICAgICApLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4geC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3N3YXRjaCcgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAncHJvZHVjdC1saXN0J1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gKGlucHQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHQuZGF0YXNldC5wcm9kdWN0QXR0cmlidXRlVmFsdWUgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAncHJvZHVjdC1saXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGxhYmVsLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPVxuICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcucHJvZHVjdFZpZXcnKTtcblxuICAgICAgICBpZiAocHJvZHVjdFZhcmlhbnQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID1cbiAgICAgICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlld1xuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF1cbiAgICAgICAgICAgICAgICAgICAgLmlubmVyVGV4dC5yZXBsYWNlKC9cIi9nLCAnXFxcXCQmJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9XCIke3Byb2R1Y3ROYW1lfVwiXWApO1xuICAgICAgICAgICAgICAgIGNhcmQuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudDIoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaChcbiAgICAgICAgICAgICQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZS00XSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSxcbiAgICAgICAgICAgIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICh0eXBlID09PSAnaW5wdXQtZmlsZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAndGV4dGFyZWEnICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKVxuICAgICAgICAgICAgICAgICAgICApLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoeCkgPT4geC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdzd2F0Y2gnIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudGV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9ICQoY2hlY2tlZC5sYWJlbHNbMF0pLnRleHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsYWJlbC50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID1cbiAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLnByb2R1Y3RWaWV3Jyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9XG4gICAgICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuZmluZCgnLnByb2R1Y3RWaWV3LXRpdGxlJylbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IHdpbmRvdyBpcyBiZWluZyBydW4gaW5zaWRlIGFuIGlmcmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzUnVubmluZ0luSWZyYW1lKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIHByb2R1Y3Qgb3B0aW9ucyBjaGFuZ2VzXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fFxuICAgICAgICAgICAgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKFxuICAgICAgICAgICAgcHJvZHVjdElkLFxuICAgICAgICAgICAgJGZvcm0uc2VyaWFsaXplKCksXG4gICAgICAgICAgICAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsXG4gICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlc0RhdGEsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYmFubmVyVXRpbHMuZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZDIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGNoYW5nZWRPcHRpb24gPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG5cbiAgICAgICAgLy8gRG8gbm90IHRyaWdnZXIgYW4gYWpheCByZXF1ZXN0IGlmIGl0J3MgYSBmaWxlIG9yIGlmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fFxuICAgICAgICAgICAgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShcbiAgICAgICAgICAgIHByb2R1Y3RJZCxcbiAgICAgICAgICAgICRmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VfaW1nID0gJChcbiAgICAgICAgICAgICAgICAgICAgICAgICcucHJvZHVjdFZpZXctaW1hZ2VzIFtkYXRhLWltYWdlLWdhbGxlcnktbWFpbi0wXSAuem9vbUltZydcbiAgICAgICAgICAgICAgICAgICAgKS5hdHRyKCdzcmMnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQgLnByb2R1Y3QtaW1hZ2UgaW1nJykuYXR0cihcbiAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlX2ltZ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgICAgICAkLmVhY2goXG4gICAgICAgICAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlLTRdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5wcm9kdWN0Vmlldy1vcHRpb25zIFtkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdIGlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0gJCh0aGlzKS5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNDbGFzcygnZm9ybS1vcHRpb24tc3dhdGNoJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BUaXRsZSA9ICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuZm9ybS1vcHRpb24tdmFyaWFudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLmZvcm0tb3B0aW9uLXZhcmlhbnQnKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BUaXRsZSA9ICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuZm9ybS1vcHRpb24tdmFyaWFudCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcFRpdGxlID0gJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KCcuZm9ybS1sYWJlbCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCA9PSBvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudHMoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZm9ybS1sYWJlbC0tYWx0ZXJuYXRlIFtkYXRhLW9wdGlvbi12YWx1ZV0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KG9wVGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZENvbG9yID0gJChcbiAgICAgICAgICAgICAgICAgICAgJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZS00XSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXSdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZm9ybS1yYWRpbzpjaGVja2VkJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbG9yID0gJChcbiAgICAgICAgICAgICAgICAgICAgJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZS00XSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXSdcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZm9ybS1yYWRpbzpjaGVja2VkJylcbiAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnPiBzcGFuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQgLnByb2R1Y3RWaWV3LXRpdGxlIC5jb2xvci1uYW1lJykudGV4dChcbiAgICAgICAgICAgICAgICAgICAgJyAtICcgKyBjb2xvclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaWYgdGhpcyBzZXR0aW5nIGlzIGVuYWJsZWQgaW4gUGFnZSBCdWlsZGVyXG4gICAgICogc2hvdyBuYW1lIGZvciBzd2F0Y2ggb3B0aW9uXG4gICAgICovXG4gICAgc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkc3dhdGNoKSB7XG4gICAgICAgIGNvbnN0IHN3YXRjaE5hbWUgPSAkc3dhdGNoLmF0dHIoJ2FyaWEtbGFiZWwnKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXSBbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChcbiAgICAgICAgICAgIHN3YXRjaE5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZS50ZXh0KFxuICAgICAgICAgICAgYCR7dGhpcy5zd2F0Y2hPcHRpb25NZXNzYWdlSW5pdFRleHR9ICR7c3dhdGNoTmFtZX1gXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoXG4gICAgICAgICAgICB0aGlzLiRzd2F0Y2hPcHRpb25NZXNzYWdlLFxuICAgICAgICAgICAgJ3N0YXR1cycsXG4gICAgICAgICAgICAnYXNzZXJ0aXZlJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RJbWFnZShpbWFnZSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0Lnpvb21TaXplIH1cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAgICBTaG91bGQgbWF0Y2ggem9vbSBzaXplIHVzZWQgZm9yIGRhdGEtem9vbS1pbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG5cbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcblxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC5wcm9kdWN0U2l6ZSB9XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIGZhbGxiYWNrIGltYWdlIHNpemUgdXNlZCBmb3IgdGhlIG1haW4gcHJvZHVjdCBpbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG5cbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcblxuICAgICAgICAgICAgICAgICAgICBBbHNvIG5vdGUgdGhhdCBnZXRTcmNzZXQgcmV0dXJucyBhIHNpbXBsZSBzcmMgc3RyaW5nIHdoZW4gZXhhY3RseSBvbmUgc2l6ZSBpcyBwcm92aWRlZFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VTcmNzZXQgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgbWFpbkltYWdlU3Jjc2V0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlR2FsbGVyeS5yZXN0b3JlSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogSGFuZGxlIGFjdGlvbiB3aGVuIHRoZSBzaG9wcGVyIGNsaWNrcyBvbiArIC8gLSBmb3IgcXVhbnRpdHlcbiAgICAgKlxuICAgICAqL1xuICAgIGxpc3RlblF1YW50aXR5Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBsZXQgcXVhbnRpdHlNYXggPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50U3RvY2sgPSBwYXJzZUludCgkKCdzcGFuW2RhdGEtcHJvZHVjdC1zdG9ja10nKS5odG1sKCkpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0b2NrKSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHlNYXggPSBjdXJyZW50U3RvY2s7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5TWF4ID0gcXVhbnRpdHlNYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcXR5ID0gcGFyc2VJbnQoJGlucHV0LnZhbCgpLCAxMCk7XG5cbiAgICAgICAgICAgIC8vIElmIGFjdGlvbiBpcyBpbmNyZW1lbnRpbmdcbiAgICAgICAgICAgIGlmICgkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJykge1xuICAgICAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1heCBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICAgICAgaWYgKHF1YW50aXR5TWF4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBleGNlZWQgbWF4XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdHkgKyAxIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1pbiBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBmYWxsIGJlbG93IG1pblxuICAgICAgICAgICAgICAgICAgICBpZiAocXR5IC0gMSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gaW5wdXRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQudmFsKHF0eSk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGV4dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiR0ZXh0LnRleHQocXR5KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmluZyBxdWFudGl0eSBjaGFuZ2Ugd2hlbiBwcmVzc2luZyBlbnRlclxuICAgICAgICB0aGlzLiRzY29wZS5vbigna2V5cHJlc3MnLCAnLmZvcm0taW5wdXQtLWluY3JlbWVudFRvdGFsJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBldmVudC53aGljaCwgdGhlbiB1c2UgZXZlbnQud2hpY2gsIG90aGVyd2lzZSB1c2UgZXZlbnQua2V5Q29kZVxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgICBpZiAoeCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIGNhcnRcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGFkZFRvQ2FydEJ0bi52YWwod2FpdE1lc3NhZ2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKFxuICAgICAgICAgICAgbm9ybWFsaXplRm9ybURhdGEobmV3IEZvcm1EYXRhKGZvcm0pKSxcbiAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICAgICAkYWRkVG9DYXJ0QnRuLnZhbChvcmlnaW5hbEJ0blZhbCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9BZGRUb0NhcnRBY3Rpb24gPT09ICdzaWRlYmFyJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYmFja2dyb3VuZCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NvbW1vbi9jYXJ0LXByZXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ2xhc3MgPSAnaXMtbG9hZGluZyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2FydERyb3Bkb3duID0gJCgnI2NhcnQtcHJldmlldy1kcm9wZG93bicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2FydExvYWRpbmcgPSAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheVwiPjwvZGl2PidcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnaGFsby1vcGVuLXNpZGUtY2FydCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICRjYXJ0RHJvcGRvd24uYWRkQ2xhc3MobG9hZGluZ0NsYXNzKS5odG1sKCRjYXJ0TG9hZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZy5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNhcnREcm9wZG93bi5yZW1vdmVDbGFzcyhsb2FkaW5nQ2xhc3MpLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGNhcnRMb2FkaW5nLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyh0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkVG9DYXJ0QWN0aW9uID09PSAncG9wdXAnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tb2RhbC1iYWNrZ3JvdW5kJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld01vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLnNldHVwRm9jdXNhYmxlRWxlbWVudHMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFR5cGVzLlBST0RVQ1RfREVUQUlMU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyh0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBubyBtb2RhbCwgcmVkaXJlY3QgdG8gdGhlIGNhcnQgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC51cmxzLmNhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudXJscy5jYXJ0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGFkZFRvQ2FydEJ0bi5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLmdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgJHByb21vdGlvbkJhbm5lciA9ICQoJ1tkYXRhLXByb21vdGlvbi1iYW5uZXJdJyk7XG4gICAgICAgICAgICBjb25zdCAkYmFja1RvU2hvcHBwaW5nQnRuID0gJChcbiAgICAgICAgICAgICAgICAnLnByZXZpZXdDYXJ0Q2hlY2tvdXQgPiBbZGF0YS1yZXZlYWwtY2xvc2VdJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0ICRtb2RhbENsb3NlQnRuID0gJCgnI3ByZXZpZXdNb2RhbCA+IC5tb2RhbC1jbG9zZScpO1xuICAgICAgICAgICAgY29uc3QgYmFubmVyVXBkYXRlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdENvbnRhaW5lciA9ICQoJyNtYWluLWNvbnRlbnQgPiAuY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAkcHJvZHVjdENvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXkgcGRwLXVwZGF0ZVwiPjwvZGl2PidcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICQoJy5sb2FkaW5nT3ZlcmxheS5wZHAtdXBkYXRlJywgJHByb2R1Y3RDb250YWluZXIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2NhcnQtY291bnQtLXBvc2l0aXZlJyk7XG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcblxuICAgICAgICAgICAgaWYgKG9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRwcm9tb3Rpb25CYW5uZXIubGVuZ3RoICYmICRiYWNrVG9TaG9wcHBpbmdCdG4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJGJhY2tUb1Nob3BwcGluZ0J0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAkbW9kYWxDbG9zZUJ0bi5vbignY2xpY2snLCBiYW5uZXJVcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcbiAgICB9XG4gICAgdXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgZm9ybURhdGFJdGVtIG9mIGZvcm1EYXRhSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZvcm1EYXRhSXRlbTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwcm9kdWN0X2lkJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncXR5W10nKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogTnVtYmVyKG5hbWUubWF0Y2goL1xcZCsvZylbMF0pLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFsuLi5wcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zLCBwcm9kdWN0T3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICA6IFtwcm9kdWN0T3B0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7IHByb2R1Y3REZXRhaWxzIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyogSGFsb3RoZW1lcyovXG4gICAgc29sZFByb2R1Y3QoKSB7XG4gICAgICAgIHZhciBudW1iZXJzUHJvZHVjdFMgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5udW1iZXJfcHJvZHVjdHM7XG4gICAgICAgIHZhciBudW1iZXJzUHJvZHVjdExpc3QgPSBKU09OLnBhcnNlKCdbJyArIG51bWJlcnNQcm9kdWN0UyArICddJyk7XG4gICAgICAgIHZhciBudW1iZXJzUHJvZHVjdEl0ZW0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIG51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0ID0gbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV07XG5cbiAgICAgICAgdmFyIG51bWJlcnNIb3Vyc1MgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5udW1iZXJfaG91cnM7XG4gICAgICAgIHZhciBudW1iZXJzSG91cnNMaXN0ID0gSlNPTi5wYXJzZSgnWycgKyBudW1iZXJzSG91cnNTICsgJ10nKTtcbiAgICAgICAgdmFyIG51bWJlcnNIb3Vyc0l0ZW0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIG51bWJlcnNIb3Vyc0xpc3QubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIHZhciBudW1iZXJzSG91ciA9IG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc1Byb2R1Y3RJdGVtXTtcblxuICAgICAgICB2YXIgaXRlbVByZHNUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MubnVtYmVyX3Byb2R1Y3RzX3RleHQ7XG4gICAgICAgIHZhciBpdGVtSG91cnNUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MubnVtYmVyX2hvdXJzX3RleHQ7XG5cbiAgICAgICAgJCgnLnNvbGQtcHJvZHVjdCcpLmh0bWwoXG4gICAgICAgICAgICAnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1maXJlLTJcIj48L3VzZT48L3N2Zz4gPHNwYW4+JyArXG4gICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3QgK1xuICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgaXRlbVByZHNUZXh0ICtcbiAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgIG51bWJlcnNIb3VyICtcbiAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgIGl0ZW1Ib3Vyc1RleHQgK1xuICAgICAgICAgICAgICAgICc8L3NwYW4+J1xuICAgICAgICApO1xuICAgICAgICAkKCcuc29sZC1wcm9kdWN0Jykuc2hvdygpO1xuICAgIH1cblxuICAgIHZpZXdpbmdQcm9kdWN0KCkge1xuICAgICAgICB2YXIgVmlld2VyVGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fdmlld2luZ19wcm9kdWN0X3RleHQ7XG4gICAgICAgIHZhciBudW1iZXJzVmlld2VyX3RleHQgPVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb192aWV3aW5nX3Byb2R1Y3Rfdmlld2VyO1xuICAgICAgICB2YXIgbnVtYmVyc1ZpZXdlckxpc3QgPSBKU09OLnBhcnNlKCdbJyArIG51bWJlcnNWaWV3ZXJfdGV4dCArICddJyk7XG4gICAgICAgIHZhciB0aW1lVmlld2VyID1cbiAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fdmlld2luZ19wcm9kdWN0X2NoYW5nZSkgKlxuICAgICAgICAgICAgMTAwMDtcblxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyc1ZpZXdlckl0ZW0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiBudW1iZXJzVmlld2VyTGlzdC5sZW5ndGhcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICQoJy52aWV3aW5nLXByb2R1Y3Qgc3BhbicpLmh0bWwoXG4gICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgJyAnICsgVmlld2VyVGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICQoJy52aWV3aW5nLXByb2R1Y3QnKS5zaG93KCk7XG4gICAgICAgIH0sIHRpbWVWaWV3ZXIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4qL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XG4gICAgY29uc3QgcmVzID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxuICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEodmFsIGluc3RhbmNlb2YgRmlsZSkgfHwgdmFsLm5hbWUgfHwgdmFsLnNpemUpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGVtcHR5IHN0cmluZyB2YWx1ZXMgYW5kIGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGb3JtRGF0YSA9IGZvcm1EYXRhID0+IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0oZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSk7XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XG5cbmNvbnN0IGJhbm5lclV0aWxzID0ge1xuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZSB8fCBpc0Jyb3dzZXJJRSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmljZSA9IDA7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZS5wcmljZV9yYW5nZSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBwcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhbm5lclV0aWxzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhcnNlcyBIVE1MIGVudGl0aWVzIGluIHN0cmluZ3NcbiAqIEBwYXJhbSBzdHI6IFN0cmluZ1xuICogQHJldHVybnMgU3RyaW5nXG4qL1xuZXhwb3J0IGNvbnN0IHNhZmVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBET01QYXJzZXIoKTtcbiAgICByZXR1cm4gZC5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJykuYm9keS50ZXh0Q29udGVudDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50KXtcclxuICAgIHZhciBwcm9kdWN0T3B0aW9uID0gJCgnLnByb2R1Y3Qtb3B0aW9ucycpO1xyXG5cclxuICAgICQoJ2RvY3VtZW50JykucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIFx0aW5pdFByb2R1Y3RNb3JldmlldygpO1xyXG5cclxuICAgIFx0JHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnIHx8IHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRQcm9kdWN0TW9yZXZpZXcoJGNoYW5nZWRPcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFByb2R1Y3RNb3JldmlldyAoKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy52YXJpYW50X25hbWUuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHZhciBsYWJlbCA9IHByb2R1Y3RPcHRpb24uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpLmZpbmQoJ2xhYmVsLmZvcm0tbGFiZWwtLWlubGluZVNtYWxsJyk7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICcnLCBjbGFzc04gPSAnLmZpbHRlci0nO1xyXG5cclxuICAgICAgICBsYWJlbC5lYWNoKGZ1bmN0aW9uKGksIGVsKXtcclxuICAgICAgICAgICAgdmFyIGxhc3RFbGVtZW50ID0gbGFiZWwubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgb2JqID0gJChlbCkucGFyZW50KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBvYmogIT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgICAgICBpZiggb2JqLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlJykgPT0gXCJzZXQtc2VsZWN0XCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0Q2hlY2tlZCA9IG9iai5maW5kKCc6c2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0Q2hlY2tlZCA9IG9iai5maW5kKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiggaW5wdXRDaGVja2VkICE9IHVuZGVmaW5lZCAmJiBpbnB1dENoZWNrZWQgIT0gJycgJiYgaW5wdXRDaGVja2VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbHNOYW1lID0gaW5wdXRDaGVja2VkLmRhdGEoJ2ZpbHRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xzTmFtZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzTmFtZSA9IGNsc05hbWUucmVwbGFjZSgnLmZpbHRlci0nLCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOICs9IGNsc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGFzc04nLGNsYXNzTik7XHJcblxyXG4gICAgICAgIGlmKCBvYmogIT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgIGlmKGNsYXNzTiAhPT0gJy5maWx0ZXItJykge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOO1xyXG4gICAgICAgICAgICAgICAgaWYoJChjbGFzc05hbWUsJy5wcm9kdWN0Vmlldy10aXRsZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRpdGxlIHNwYW4nKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10aXRsZSAudGV4dCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoY2xhc3NOYW1lLCcucHJvZHVjdFZpZXctdGl0bGUnKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoJChjbGFzc05hbWUsJyN0YWItZGVzY3JpcHRpb24nKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWItZGVzY3JpcHRpb24nKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWItZGVzY3JpcHRpb24gPiBkaXYgPiBkaXYnKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoY2xhc3NOYW1lLCcjdGFiLWRlc2NyaXB0aW9uJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib21iIGVkaXRlZCBjdXN0b20gXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IC5jdXN0b20tdmFyaWFudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IGRpdicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IC5jdXN0b20tdmFyaWFudCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IDpub3QoW2NsYXNzKj1cImZpbHRlci1cIl0pJykuYWRkQ2xhc3MoJ2N1c3RvbS12YXJpYW50Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjdGFiLWRlc2NyaXB0aW9uID4gZGl2ID4gZGl2JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyBmcm9tICcuL2hhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgY29uc3QgcmVsYXRlX3RhYiA9IFwiI3RhYi1yZWxhdGVkXCI7XHJcbiAgICBjb25zdCAkYnVuZGxlID0gJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzJyk7XHJcblxyXG4gICAgc2hvd0J1bmRsZSgpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby10b2dnbGUtb3B0aW9ucycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5ub3QoJCh0aGlzKSkucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5ub3QoJCh0aGlzKS5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICBpZiAoISQodGhpcykubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby1vcHRpb24tY2xvc2UnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmICgkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5sZW5ndGggPT09IDApKXtcclxuICAgICAgICAgICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5oYWxvLWRldGFpbC1jaGVja2JveCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCdmYnRfcHJvZHVjdCcsICcnKTtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2hhbG8tYWRkQWxsJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKSk7XHJcbiAgICAgICAgdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgICAkKCcuaGFsby1kZXRhaWwtY2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoJCh2YWwpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJQcm8ucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNoZWNrID0gY2hlY2tQcm9kdWN0KCRmb3JtLCBhcnJQcm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoJGZvcm0sIDAsIGFyclBybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLic7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QnVuZGxlKCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1idW5kbGUtcHJvZHVjdHMtdG1wJyxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiAnaGFsb3RoZW1lcy9wcm9kdWN0L2hhbG8tYnVuZGxlLXByb2R1Y3RzLW9wdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHByb2RCdW5kbGVJZCA9IFtdO1xyXG5cclxuICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKS5yZW1vdmVDbGFzcygnaGFsby1ibG9jay1kaXNhYmxlJyk7XHJcblxyXG4gICAgICAgIGZpcnN0SXRlbSgpO1xyXG5cclxuICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmJ1bmRsZS1wcm9kdWN0LXJpZ2h0JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaGFsby1wcm9kdWN0LXRvdGFsXCI+PGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VG90YWwgcHJpY2U6PC9zcGFuPjxzcGFuIGNsYXNzPVwicHJpY2VcIj48L3NwYW4+PC9kaXY+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGhhbG8tcHJvZHVjdC10b3RhbC1idXR0b25cIiBpZD1cImhhbG8tYWRkQWxsXCI+QWRkIEFsbCBUbyBDYXJ0PC9hPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAkLmVhY2goY29udGV4dC5wcm9kdWN0Q3VzdG9tRmllbGRzLCBmdW5jdGlvbihpbmRleCwgb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSAnX19idW5kbGVpZCcpIHtcclxuICAgICAgICAgICAgICAgIHByb2RCdW5kbGVJZCA9IEpTT04ucGFyc2UoJ1snK29iai52YWx1ZSsnXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICgkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQocmVsYXRlX3RhYiArICcgLmNhcmQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtpOmksIGRhdGE6IFwiXCJ9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJCh2YWwpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJChyZWxhdGVfdGFiICsgJyAuY2FyZCcpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAkLmVhY2gocHJvZEJ1bmRsZUlkLCBmdW5jdGlvbihpLCB2YWwpe1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtpOmksIGRhdGE6IFwiXCJ9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gcHJvZEJ1bmRsZUlkW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaSA9PSBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSBwcm9kQnVuZGxlSWQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaXJzdEl0ZW0oKXtcclxuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmhhbG8tcHJvZHVjdC1saXN0IC5oYWxvLXByb2R1Y3QtaXRlbTpmaXJzdC1jaGlsZCcpLFxyXG4gICAgICAgICAgICBwSWQgPSBmaXJzdEl0ZW0uZGF0YSgncHJvZHVjdC1pZCcpLFxyXG4gICAgICAgICAgICAkZm9ybSA9IGZpcnN0SXRlbS5maW5kKCdmb3JtJyksXHJcbiAgICAgICAgICAgIGhhc09wdGlvbnMgPSAkZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhc0RlZmF1bHRPcHRpb25zID0gJGZvcm0uZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0xpc3QobGlzdCl7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gZWxlbWVudC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5oYWxvLXByb2R1Y3QtbGlzdCcpLmFwcGVuZChyZXNwb25zZS5pdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcHRpb25zLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJChyZXNwb25zZS5pdGVtKS5kYXRhKCdwcm9kdWN0LWlkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cyAuaGFsby1wcm9kdWN0LWxpc3QgLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwSWQgKyAnXCJdIGZvcm0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQocmVzcG9uc2Uub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkKHJlc3BvbnNlLm9wdGlvbnMpLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RWYXJpYW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvZHVjdE9wdGlvbnMoKTtcclxuICAgICAgICBzaG93U2xpY2tTbGlkZXIoKTtcclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1NsaWNrU2xpZGVyKCl7XHJcbiAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5oYWxvLXByb2R1Y3QtbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV4dEFycm93OiBcIjxkaXYgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnPm5leHQ8L2Rpdj5cIixcclxuICAgICAgICAgICAgcHJldkFycm93OiBcIjxkaXYgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnPnByZXY8L2Rpdj5cIixcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1Byb2R1Y3QoZm9ybSwgYXJyUHJvKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyclByby5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXTtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJChmb3JtW2tdKTtcclxuICAgICAgICAgICAgaWYgKCRmb3JtLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0JlZm9yZUFkZCgkYXR0cmlidXRlcykge1xyXG4gICAgICAgIHZhciBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGF0dCA9IFwiXCI7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGF0dCAhPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0ID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApIHtcclxuICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2NhcnQucGhwJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBrID0gYXJyUFtpXTtcclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm1ba10pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgIGlmIChpID49IGFyclAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmxvYWRpbmdPdmVybGF5JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FydENvbnRlbnQocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1iYWNrZ3JvdW5kJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjb21tb24vY2FydC1wcmV2aWV3J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDbGFzcyA9ICdpcy1sb2FkaW5nJztcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNhcnREcm9wZG93biA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjYXJ0TG9hZGluZyA9ICQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheVwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgICAgICRib2R5LnRvZ2dsZUNsYXNzKCdoYWxvLW9wZW4tc2lkZS1jYXJ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGNhcnREcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nQ2xhc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoJGNhcnRMb2FkaW5nKTtcclxuICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRjYXJ0RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQocmVzcG9uc2UpLmZpbmQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJykuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCBsb2FkaW5nQ2xhc3MgPSAnaXMtbG9hZGluZyc7XHJcbiAgICAgICAgY29uc3QgJGNhcnREcm9wZG93biA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24nKTtcclxuICAgICAgICBjb25zdCAkY2FydExvYWRpbmcgPSAkKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXlcIj48L2Rpdj4nKTtcclxuICAgICAgICBjb25zdCAkc2lkZUNhcnRCbG9jayA9ICQoJyNzaWRlQmxvY2tfY2FydCcpO1xyXG5cclxuICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnb3BlbkNhcnRTaWRlYmFyIGlzLXNpZGUtYmxvY2snKTtcclxuICAgICAgICAkc2lkZUNhcnRCbG9jay50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICAkY2FydERyb3Bkb3duXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nQ2xhc3MpXHJcbiAgICAgICAgICAgIC5odG1sKCRjYXJ0TG9hZGluZyk7XHJcbiAgICAgICAgJGNhcnRMb2FkaW5nXHJcbiAgICAgICAgICAgIC5zaG93KCk7XHJcblxyXG4gICAgICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGNhcnREcm9wZG93blxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcclxuICAgICAgICAgICAgICAgIC5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgJGNhcnRMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKHJlc3BvbnNlKS5maW5kKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcclxuICAgICAgICAgICAgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyhjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY29tbW9uL2NhcnQtcHJldmlldydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIG9uQ29tcGxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdGFsUHJpY2UoKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMCxcclxuICAgICAgICAgICAgcG9zID0gMCxcclxuICAgICAgICAgICAgc3ltYm9sID0gXCIkXCI7XHJcblxyXG4gICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbS5pc0NoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVuY3ksXHJcbiAgICAgICAgICAgICAgICBwcmljZSwgcztcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRoVGF4JykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5ID0gJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aFRheCcpLnRleHQoKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3kgPSAkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRob3V0VGF4JykudGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmljZSA9IHBhcnNlRmxvYXQoY3VycmVuY3kucmVwbGFjZSgvW14wLTkuLV0rL2csIFwiXCIpKTtcclxuXHJcbiAgICAgICAgICAgIHMgPSBjdXJyZW5jeS5yZXBsYWNlKHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KHMucmVwbGFjZSgvW14wLTkuLV0rL2csIFwiXCIpKSkpe1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKSAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjdXJyZW5jeS5pbmRleE9mKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcmljZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHBvcyA9PSAwKXtcclxuICAgICAgICAgICAgdG90YWwgPSBzeW1ib2wgKyB0b3RhbDtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuaGFsby1wcm9kdWN0LXRvdGFsIC5wcmljZScpLmh0bWwodG90YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zKCkge1xyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJGJ1bmRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIGZvcm0gW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0VmFyaWFudChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UHJvZHVjdFZhcmlhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KHNlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChsYWJlbC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnIHx8IHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCdpZCcpID09PSAnZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcclxuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIGRhdGEpIHtcclxuICAgICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEuaW1hZ2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlLmdldFNyYyhcclxuICAgICAgICAgICAgICAgIGRhdGEuaW1hZ2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0Z2FsbGVyeV9zaXplXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cignZGF0YS1zcmNzZXQnKTtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnc3Jjc2V0JzogbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3Jjc2V0JzogJCh0aGlzKS5hdHRyKCdzcmNzZXQnKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoJHNjb3BlLCBkYXRhLCBjb250ZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IGdldFZpZXdNb2RlbCgkc2NvcGUpO1xyXG5cclxuICAgICAgICBzaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xyXG4gICAgICAgICAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKCRzY29wZSwgZGF0YSkge1xyXG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBzdG9jazoge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkc2t1OiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nKSxcclxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXHJcbiAgICAgICAgICAgICRtcG46ICQoJ1tkYXRhLXByb2R1Y3QtbXBuXScpLFxyXG4gICAgICAgICAgICBxdWFudGl0eToge1xyXG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XHJcbiAgICAgICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsICRnYWxsZXJ5KSB7XHJcbiAgICB2YXIgY29udGFpbmVyX2RpdiA9ICRnYWxsZXJ5LmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAgICAgY29udGFpbmVyX2RpdiA9IGNvbnRhaW5lcl9kaXYucmVwbGFjZSgnbW9kYWwtYm9keScsICcnKS5yZXBsYWNlKCcgJywgJycpO1xyXG4gICAgXHJcbiAgICBqUXVlcnkuZm4udkdhbGxlcnkgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICB2YXIgZ2FsbGVyeUlEID0gXCIjXCIgKyBlbGVtZW50LmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGJyYW5kID0gJCgnLnByb2R1Y3RWaWV3LWRldGFpbHMgLnByb2R1Y3RWaWV3LWJyYW5kIGEnKS50ZXh0KCksXHJcbiAgICAgICAgICAgIHRpdGxlID0gJCgnLnByb2R1Y3RWaWV3LWRldGFpbHMgLnByb2R1Y3RWaWV3LXByb2R1Y3QgLnByb2R1Y3RWaWV3LXRpdGxlJykudGV4dCgpO1xyXG4gICAgICAgIGlmICgkKCcjdmlkZW8tZ2FsbGVyeS1wYy1wb3B1cCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcjdmlkZW8tZ2FsbGVyeS1wYy1wb3B1cCAubW9kYWwtaGVhZGVyLXRpdGxlJykuaHRtbCgnPHN0cm9uZz4nICticmFuZCsgJzwvc3Ryb25nPicgKyB0aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFvcHRpb25zKVxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIHZhciBiPW5ldyBoYWxvR2FsbGVyeSgpO1xyXG4gICAgICAgIGIuaW5pdChlbGVtZW50ICwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nLCAkZ2FsbGVyeSkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiLmFkZCh7J3RodW1ibmFpbCc6ICQodGhpcykuZmluZCgnaW1nJykuYXR0cignc3JjJykgLCd1cmwnOiAkKHRoaXMpLmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybCcpfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXZpZGVvLWl0ZW1dJywgJGdhbGxlcnkpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYi5hZGQoeyd0aHVtYm5haWwnOiAnLy9pLnl0aW1nLmNvbS92aS8nICsgJCh0aGlzKS5hdHRyKCdkYXRhLXZpZGVvLWlkJykgKyAnL2RlZmF1bHQuanBnJywnY29udGVudCc6XCI8aWZyYW1lIGNsYXNzPSd5b3V0dWJlLWlmcmFtZScgd2lkdGg9JzEwMCUnICBzcmM9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyAkKHRoaXMpLmF0dHIoJ2RhdGEtdmlkZW8taWQnKSArXCI/ZW5hYmxlanNhcGk9MScgZnJhbWVib3JkZXI9JzAnIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cIn0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBiLmFkZFBvcHZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYWxvR2FsbGVyeSgpIHtcclxuICAgICAgICB2YXIgZ19vYmpHYWxsZXJ5O1xyXG4gICAgICAgIHZhciBnX29wdGlvbnMgPSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbihnYWxsZXJ5LCBjdXN0b21PcHRpb25zKXtcclxuICAgICAgICAgICAgZ19vYmpHYWxsZXJ5ID0galF1ZXJ5KGdhbGxlcnkpO1xyXG4gICAgICAgICAgICBnX29wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKGdfb3B0aW9ucywgY3VzdG9tT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5yb3VuZD1bXTtcclxuICAgICAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKG9wcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKG9wcy51cmwgfHwgb3BzLmNvbnRlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZnM9eyd0aHVtYm5haWwnOicnLCd1cmwnOicnLCd0eXBlJzonJywnY29udGVudCc6JycsJ3cnOjAsJ2hlaWdodCc6MCwnbG9hZGVkJzpmYWxzZX07XHJcbiAgICAgICAgICAgICAgICBvcHM9JC5leHRlbmQoe30sZGZzLG9wcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3BzLmNvbnRlbnQpb3BzLnVfY29udGVudD1vcHMuY29udGVudDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighb3BzLnR5cGUpb3BzLnR5cGU9J2ltYWdlJztcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHMudHlwZT0naW1hZ2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BzLnVfY29udGVudD1cIjxpbWcgc3JjPSdcIitvcHMudXJsK1wiJz5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIW9wcy50aHVtYm5haWwpXHJcbiAgICAgICAgICAgICAgICAgICAgb3BzLnRodW1ibmFpbD1vcHMudXJsO1xyXG4gICAgICAgICAgICAgICAgaWYob3BzLnRodW1ibmFpbClcclxuICAgICAgICAgICAgICAgICAgICBvcHMudV90aHVtYm5haWw9XCI8aW1nIHNyYz0nXCIrb3BzLnRodW1ibmFpbCtcIic+XCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG9wcy51X3RodW1ibmFpbD1vcHMudV9jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYoIW9wcy51X3RodW1ibmFpbClcclxuICAgICAgICAgICAgICAgICAgICBvcHMudV90aHVtYm5haWw9XCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPjwvZGl2PlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKG9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXJvdW5kPWZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmQ9W107XHJcbiAgICAgICAgICAgIHZhciBwcDtcclxuICAgICAgICAgICAgdmFyIGM9dGhpcy5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxjO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHA9eyduZXh0JzppKzEsJ3ByZXYnOmktMSwnY3VycmVudCc6aX07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kW2ldPXBwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldLnN0dD1pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRbMF0ucHJldj1jLTE7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRbYy0xXS5uZXh0PTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkUG9wdmlldyA9IGZ1bmN0aW9uKG9wcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlcm91bmQoKTtcclxuICAgICAgICAgICAgdmFyIGRmcz17J3dpZHRoJzonMTAwJScsJ2hlaWdodCc6JzEwMCUnLCd2aWV3X3NsaWRlJzp0cnVlLGN1cjowLCd0aW1lJzo0MDAsJ2NlbnRlcic6dHJ1ZX07XHJcbiAgICAgICAgICAgIG9wcz0kLmV4dGVuZCh7fSxkZnMsb3BzKTtcclxuICAgICAgICAgICAgb3BzLm1hcD17J2RpJzp7fSwndmUnOnt9LCdyb3VuZCc6e319O29wcy5zdHQ9MDtcclxuICAgICAgICAgICAgdmFyIGN0aGlzPXRoaXM7XHJcbiAgICAgICAgICAgIHNldCgpO1xyXG4gICAgICAgICAgICBiaW5kRXZlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLmxlbmd0aCA+IDApICQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHM9XCI8ZGl2IGNsYXNzPSdcIitjb250YWluZXJfZGl2K1wiIHZnYWxsZXJ5X3BvcHVwJz48ZGl2IGNsYXNzPSdhY29udGVudCc+PGRpdiBjbGFzcz0nYmNvbnRlbnQnPjwvZGl2PjwvZGl2PjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiggZ19vYmpHYWxsZXJ5Lmhhc0NsYXNzKGNvbnRhaW5lcl9kaXYpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ19vYmpHYWxsZXJ5Lmh0bWwocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGdfb2JqR2FsbGVyeS5hcHBlbmQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnX29iakdhbGxlcnkuZmluZCgnLnZnYWxsZXJ5X3BvcHVwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgZ19vYmpHYWxsZXJ5LmZpbmQoJy4nK2NvbnRhaW5lcl9kaXYpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BzLm9iPSQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpO1xyXG4gICAgICAgICAgICAgICAgb3BzLm9iX2Njb250ZW50PSQoJz4uYWNvbnRlbnQnLG9wcy5vYik7XHJcbiAgICAgICAgICAgICAgICBvcHMub2JfY29udGVudD0kKCc+LmFjb250ZW50Pi5iY29udGVudCcsb3BzLm9iKTtcclxuICAgICAgICAgICAgICAgICQob3BzLm9iX2Njb250ZW50KS5jc3Moeyd3aWR0aCc6b3BzLndpZHRoLCdoZWlnaHQnOm9wcy5oZWlnaHR9KTtcclxuICAgICAgICAgICAgICAgIGlmKG9wcy52aWV3X3NsaWRlKSBkcmF3X3NsaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF2aWV3KHBwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bGk+PHNwYW4gY2xhc3M9J3RodW1iYnNkJyBkYXRhPSdcIitwcC5zdHQrXCInPlwiK3BwLnVfdGh1bWJuYWlsK1wiPC9zcGFuPjwvbGk+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZHJhd19zbGlkZSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBzMT0nJyxzMj0nJztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPGN0aGlzLmRhdGEubGVuZ3RoO2krKylcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3RoaXMuZGF0YVtpXS50eXBlKVxyXG4gICAgICAgICAgICAgICAgICAgIHMxKz1hdmlldyhjdGhpcy5kYXRhW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzMis9YXZpZXcoY3RoaXMuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzMSlzMT1cIjxkaXYgY2xhc3M9J2dhbGxlcnktdGh1bWJuYWlsIGdhbGxlcnktdGh1bWJuYWlsLTEnPjxoMj48L2gyPjx1bD5cIitzMStcIjwvdWw+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICBpZihzMilzMj1cIjxkaXYgY2xhc3M9J2dhbGxlcnktdGh1bWJuYWlsIGdhbGxlcnktdGh1bWJuYWlsLTInPjxoMj48L2gyPjx1bD5cIitzMitcIjwvdWw+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcz1cIjxkaXYgY2xhc3M9J2NvbnRlbnRfc2xpZGUnPjxkaXYgY2xhc3M9J2JveDEnPjxkaXYgY2xhc3M9J2J0bi1hcnJvdyBidG4tcHJldic+PC9kaXY+PGRpdiBjbGFzcz0nZ2FsbGVyeVZpZXcnPjwvZGl2PjxkaXYgY2xhc3M9J2J0bi1hcnJvdyBidG4tbmV4dCc+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nYm94Mic+XCIrczErczIrXCI8L2Rpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICQob3BzLm9iX2NvbnRlbnQpLmFwcGVuZChzKTtcclxuICAgICAgICAgICAgICAgIG9wcy5vYl9zY3Q9JCgnLmJveDEgPiAuZ2FsbGVyeVZpZXcnKTtcclxuICAgICAgICAgICAgICAgIG9wcy5vYl9lPSQoJy50aHVtYmJzZCcsb3BzLm9iKTtcclxuICAgICAgICAgICAgICAgIHZhciBpPS0xO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKG9wcy5vYl9lLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2PSQodGhpcykuYXR0cignZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5tYXAuZGlbaV09djtcclxuICAgICAgICAgICAgICAgICAgICBvcHMubWFwLnZlW3ZdPWk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGFyKG9wcy5jdXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFyKG51bSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYobnVtPT0tMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKG9wcy5vYl9zY3QpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5jdXI9bnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5jdXJyZW50PW9wcy5tYXAudmVbb3BzLmN1cl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQob3BzLm9iX2UpLnJlbW92ZUNsYXNzKCd0aHVtYi12aWRlbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQob3BzLm9iX2UpLmVxKG9wcy5tYXAudmVbb3BzLmN1cl0pLmFkZENsYXNzKCd0aHVtYi12aWRlbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQob3BzLm9iX3NjdCkuYW5pbWF0ZSh7J29wYWNpdHknOjB9LG9wcy50aW1lLzIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChvcHMub2Jfc2N0KS5odG1sKGN0aGlzLmRhdGFbbnVtXS51X2NvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKG9wcy5vYl9zY3QpLmFuaW1hdGUoeydvcGFjaXR5JzoxfSxvcHMudGltZS8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyAkKG9wcy5vYl9zY3QpLnRyaWdnZXIoJ3pvb20uZGVzdHJveScpLnpvb20oeyB0b3VjaDogZmFsc2UsIG9uWm9vbUluOiB0cnVlLCBvblpvb21PdXQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudCgpXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nLCAkZ2FsbGVyeSkuYmluZCgnY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICBhciggb3BzLmN1ciApO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5iaW5kKCdob3ZlcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSAkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJywgJGdhbGxlcnkpLmluZGV4KCB0aGlzICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobnVtIT0tMSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcy5jdXI9bnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJfZGl2ID0gJGdhbGxlcnkuYXR0cignY2xhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfZGl2ID0gY29udGFpbmVyX2Rpdi5yZXBsYWNlKCdtb2RhbC1ib2R5JywgJycpLnJlcGxhY2UoJyAnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnZnYWxsZXJ5X3BvcHVwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBhciggJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5pbmRleCggdGhpcyApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS12aWRlby1pY29uXScsICRnYWxsZXJ5KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJfZGl2ID0gJGdhbGxlcnkuYXR0cignY2xhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfZGl2ID0gY29udGFpbmVyX2Rpdi5yZXBsYWNlKCdtb2RhbC1ib2R5JywgJycpLnJlcGxhY2UoJyAnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnZnYWxsZXJ5X3BvcHVwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBhciggJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5sZW5ndGggKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJy5idG4tbmV4dCcsb3BzLm9iKS5iaW5kKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3BzLmN1cnJlbnQgPiBvcHMub2IubGVuZ3RoKSBvcHMuY3VycmVudCA9IG9wcy5jdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHM9Y3RoaXMucm91bmRbb3BzLmN1cnJlbnRdLm5leHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIob3BzLm1hcC5kaVtzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJy5idG4tcHJldicsb3BzLm9iKS5iaW5kKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3BzLmN1cnJlbnQgPiBvcHMub2IubGVuZ3RoKSBvcHMuY3VycmVudCA9IG9wcy5jdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHM9Y3RoaXMucm91bmRbb3BzLmN1cnJlbnRdLnByZXY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIob3BzLm1hcC5kaVtzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQob3BzLm9iX2UpLmJpbmQoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbng9JCh0aGlzKS5hdHRyKCdkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIoaW54KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiI2dhbGxlcnlcIikudkdhbGxlcnkoe1xyXG4gICAgICAgICAgICBncmlkcGFuZWxfdmVydGljYWxfc2Nyb2xsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3ByZXZfbmV4dF9wcm9kdWN0ID09IHRydWUpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cycpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SWQgPSBwcm9kdWN0SWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZJZCA9IHByb2R1Y3RJZCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dExpbmssIHByZXZMaW5rO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kV3JhcCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1tb2RhbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzIC5uZXh0LXByZXYtaWNvbnMnKSxcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1wcmV2LW5leHQtcHJvZHVjdC10cG0nXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihuZXh0SWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKG5leHRJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExpbmsgPSAkKHJlc3BvbnNlKS5maW5kKCcuY2FyZC1saW5rJykuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dExpbmsgIT0gdW5kZWZpbmVkICYmIG5leHRMaW5rICE9ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLmF0dHIoJ2hyZWYnLCBuZXh0TGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocHJldklkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcmV2SWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2TGluayA9ICQocmVzcG9uc2UpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcmV2TGluayAhPSB1bmRlZmluZWQgJiYgcHJldkxpbmsgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykuYXR0cignaHJlZicsIHByZXZMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkcHJvZEljb25zLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5leHQtaWNvbicsICRwcm9kSWNvbnMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5wcmV2LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFkZENsYXNzKCdpcy1zaG93Jyk7ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRwcm9kV3JhcC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBpZiAoJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVG9wKXtcclxuICAgICAgICAgICAgICAgIGlmKCEkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0SGVhZGVyID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCQoJy5oZWFkZXInKS5oYXNDbGFzcygnaXMtc3RpY2t5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5jc3MoJ3RvcCcsIGhlaWdodEhlYWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5jc3MoJ3RvcCcsICcwcHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5jaG9vc2Vfb3B0aW9uc19hZGQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5wb3AtdXAtb3B0aW9uIC5jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5jaG9vc2Vfb3B0aW9uc19hZGQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICAgICAgaWYoISQoJyNzdGlja3lfYWRkdG9jYXJ0JykuaGFzQ2xhc3MoJ3Nob3dfc3RpY2t5Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHRIZWFkZXIgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5hZGRDbGFzcygnc2hvd19zdGlja3knKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoJCgnLmhlYWRlcicpLmhhc0NsYXNzKCdpcy1zdGlja3knKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmNzcygndG9wJywgaGVpZ2h0SGVhZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmNzcygndG9wJywgJzBweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbiBpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuIGltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuIGltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuIGltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuIGltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuIGltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuIGltcG9ydCBtb2RhbEZhY3RvcnksIHsgbW9kYWxUeXBlcyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbiBpbXBvcnQgaGFsb0J1bmRsZVByb2R1Y3RzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQnVuZGxlUHJvZHVjdHMnO1xuIGltcG9ydCBoYWxvU3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0JztcbiBpbXBvcnQgaGFsb1ByZXZOZXh0UHJvZHVjdCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1ByZXZOZXh0UHJvZHVjdCc7XG4gXG4gY29uc3QgeyBXUklURV9SRVZJRVcgfSA9IG1vZGFsVHlwZXM7XG4gXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgICB9XG4gXG4gICAgIG9uUmVhZHkoKSB7XG4gICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuO1xuICAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIGxldCB2YWxpZGF0b3I7XG4gXG4gICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcbiBcbiAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuIFxuICAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG4gXG4gICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuICAgICAgICAgdGhpcy5obEdsb2JhbCgpO1xuICAgICAgICAgaGFsb1N0aWNreUFkZFRvQ2FydCgpO1xuICAgICAgICAgdGhpcy5oaWRlT3B0aW9uTm9QdXJjaGFzYWJsZSgpO1xuXG4gICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19idW5kbGVfcHJvZHVjdHNfZW5hYmxlID09IHRydWUpIHtcbiAgICAgICAgICAgICBoYWxvQnVuZGxlUHJvZHVjdHModGhpcy5jb250ZXh0KTsgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGhhbG9QcmV2TmV4dFByb2R1Y3QodGhpcy5jb250ZXh0KTtcbiBcbiAgICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuIFxuICAgICAgICAgaWYgKCRyZXZpZXdGb3JtLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuIFxuICAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG4gXG4gICAgICAgICAkKGRvY3VtZW50KS5vbignb3BlbmVkLmZuZHRuLnJldmVhbCcsICcjbW9kYWwtcmV2aWV3LWZvcm0nLCAoKSA9PiB0aGlzLnJldmlld01vZGFsLnNldHVwRm9jdXNhYmxlRWxlbWVudHMoV1JJVEVfUkVWSUVXKSk7XG4gICAgICAgXG4gICAgICAgICQoXCIjc3RhbXBlZC1iYWRnZS13aWRnZXRcIikuYXBwZW5kVG8oJyNwcm9kdWN0Vmlldy13aWRnZXQnKTtcbiAgICAgICAgXG4gICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICAgfVxuIFxuICAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLWlucHV0XScpLmVhY2goKF8sIGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcbiBcbiAgICAgICAgICAgICAkaW5wdXQuc2libGluZ3MoJ3NwYW4nKS5hdHRyKCdpZCcsIG1zZ1NwYW5JZCk7XG4gICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICAgfSk7XG4gICAgIH1cbiBcbiAgICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgIH1cbiAgICAgfVxuIFxuICAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XG4gICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgfVxuICAgICB9XG4gXG4gICAgIGhsR2xvYmFsKCkge1xuICAgICAgICAgY29uc3Qgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICBjb25zdCAkZGVzVGFiID0gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICBjb25zdCAkaW5mb1RhYiA9ICQoJyN0YWItYWRkaXRpb25hbC1pbmZvcm1hdGlvbicpO1xuIFxuICAgICAgICAgaWYgKCRkZXNUYWIubGVuZ3RoICYmIHdXaWR0aCA8IDEwMjUpIHtcbiAgICAgICAgICAgICAkKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJywgJGRlc1RhYikuZmluZCgnLnRhYkNvbnRlbnQnKS5zbGlkZURvd24oKTtcbiAgICAgICAgIH1cbiBcbiAgICAgICAgIGlmICgkaW5mb1RhYi5sZW5ndGgpIHtcbiAgICAgICAgICAgICBpZiAoJGluZm9UYWIuZmluZCgnLnRhYkNvbnRlbnQnKS50ZXh0KCkudHJpbSgpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICQoJ1tocmVmPVwiI3RhYi1hZGRpdGlvbmFsLWluZm9ybWF0aW9uXCJdJykucGFyZW50KCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAkaW5mb1RhYi5oaWRlKCk7XG4gICAgICAgICAgICAgfSBcbiAgICAgICAgIH1cbiBcbiAgICAgICAgIC8vXG4gICAgICAgICAvLyBMb2FkIFRhYnNcbiAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICBjb25zdCAkbG9hZFRhYkJ0biA9ICQoJ1tkYXRhLXRhYi1sb2FkXScpO1xuIFxuICAgICAgICAgXG4gICAgICAgICBjb25zdCAkZmlyc3RUYWIgPSAkKCcuZmlyc3QtdGFiJyk7XG4gXG4gICAgICAgICBjb25zdCBjaGVja19sb2FkVGFiRmlyc3QgPSAkZmlyc3RUYWIuZGF0YSgndGFiLWNoZWNrJyk7XG4gXG4gICAgICAgICBpZiAoY2hlY2tfbG9hZFRhYkZpcnN0KSB7XG4gICAgICAgICAgICAgJGZpcnN0VGFiLmRhdGEoJ3RhYi1jaGVjaycsIGZhbHNlKTtcbiAgICAgICAgICAgICBjb25zdCB1cmxfbG9hZFRhYiA9ICRmaXJzdFRhYi5kYXRhKCd0YWItbG9hZCcpO1xuICAgICAgICAgICAgIGNvbnN0IHRoaXNUYWIgPSAkZmlyc3RUYWIuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgIGNvbnN0ICR0aGlzVGFiID0gJCh0aGlzVGFiKycgLnRhYkNvbnRlbnQnKTtcbiBcbiAgICAgICAgICAgICAkLmdldCh1cmxfbG9hZFRhYiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAkKCcuaWNvbi1sb2FkaW5nJywgJHRoaXNUYWIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoJChkYXRhKS5maW5kKCcucGFnZS1jb250ZW50JykuaHRtbCgpKTtcbiAgICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAkKCcuaWNvbi1sb2FkaW5nJywgJHRoaXNUYWIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoXCI8cD5UbyBCZSBVcGRhdGVkPC9wPlwiKTtcbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH1cbiBcbiAgICAgICAgICRsb2FkVGFiQnRuLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gXG4gICAgICAgICAgICAgY29uc3QgY2hlY2tfbG9hZFRhYiA9ICR0YXJnZXQuZGF0YSgndGFiLWNoZWNrJyk7XG4gXG4gICAgICAgICAgICAgaWYgKGNoZWNrX2xvYWRUYWIpIHtcbiAgICAgICAgICAgICAgICAgJHRhcmdldC5kYXRhKCd0YWItY2hlY2snLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHVybF9sb2FkVGFiID0gJHRhcmdldC5kYXRhKCd0YWItbG9hZCcpO1xuICAgICAgICAgICAgICAgICBjb25zdCB0aGlzVGFiID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzVGFiID0gJCh0aGlzVGFiKycgLnRhYkNvbnRlbnQnKTtcbiBcbiAgICAgICAgICAgICAgICAgJC5nZXQodXJsX2xvYWRUYWIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICQoJy5pY29uLWxvYWRpbmcnLCAkdGhpc1RhYikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoJChkYXRhKS5maW5kKCcucGFnZS1jb250ZW50JykuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICQoJy5pY29uLWxvYWRpbmcnLCAkdGhpc1RhYikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoXCI8cD5UbyBCZSBVcGRhdGVkPC9wPlwiKTtcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gXG4gICAgICAgICAvL1xuICAgICAgICAgLy8gVGFicyBNb2JpbGVcbiAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICBjb25zdCAkYnRuVGFiTW9iaWxlID0gJCgnLnRhYi10aXRsZU1vYmlsZScpO1xuIFxuICAgICAgICAgJGJ0blRhYk1vYmlsZS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgIGNvbnN0IGlkVGFiID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgY29uc3QgdGhpc1RvcCA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbicpLm9mZnNldCgpLnRvcCAtIDIwO1xuIFxuICAgICAgICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgJChpZFRhYikucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpLmZpbmQoJy50YWJDb250ZW50Jykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgY29uc3QgJHRhYkFjdGl2ZU1vYmlsZSA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAudGFicy1jb250ZW50cyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlJyk7XG4gXG4gICAgICAgICAgICAgICAgICRidG5UYWJNb2JpbGUucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgJHRhYkFjdGl2ZU1vYmlsZS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuZmluZCgnLnRhYkNvbnRlbnQnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICQoaWRUYWIpLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5maW5kKCcudGFiQ29udGVudCcpLnNsaWRlRG93bigpO1xuIFxuICAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpc1RvcFxuICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIC8vXG4gICAgICAgICAvLyBTaGFyZSBMaW5rXG4gICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgY29uc3QgJHNoYXJlTGlua0J0biA9ICQoJy5zb2NpYWxNZWRpYS1idXR0b24nKTtcbiAgICAgICAgIGNvbnN0ICRzaGFyZUxpbmtQb3B1cCA9ICQoJy5zb2NpYWxNZWRpYS1kcm9wZG93bicpO1xuICAgICAgICAgY29uc3QgJHNoYXJlTGlua0Nsb3NlID0gJCgnLnNoYXJlTGlua1NvY2lhbF9fY2xvc2UnKTtcbiAgICAgICAgIGNvbnN0ICRzaGFyZUxpbmtDb3B5ID0gJCgnI3NoYXJlTGlua1NvY2lhbF9fY29weScpO1xuIFxuICAgICAgICAgJHNoYXJlTGlua0J0bi5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiBcbiAgICAgICAgICAgICBpZiAoJHNoYXJlTGlua1BvcHVwLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnNsaWRlVXAoMjAwKTtcbiAgICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVEb3duKDIwMCk7XG4gICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5hZGRDbGFzcygnaXMtb3BlbicpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuIFxuICAgICAgICAgJHNoYXJlTGlua0Nsb3NlLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuIFxuICAgICAgICAgICAgIGlmICgkc2hhcmVMaW5rUG9wdXAuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVVcCgyMDApO1xuICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgICRzaGFyZUxpbmtDb3B5Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiBcbiAgICAgICAgICAgICAkdGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgIH0pO1xuIFxuICAgICAgICAgLy9cbiAgICAgICAgIC8vIEJvZHkgQ2xvc2VcbiAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICBjb25zdCAkc2hhcmVMaW5rUG9wdXAgPSAkKCcuc29jaWFsTWVkaWEtZHJvcGRvd24nKTtcbiBcbiAgICAgICAgICAgICBpZiAoJHRhcmdldC5jbG9zZXN0KCcuc29jaWFsLW1lZGlhQmxvY2snKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgaWYgKCRzaGFyZUxpbmtQb3B1cC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVVcCgyMDApO1xuICAgICAgICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIC8qIEN1c3RvbSBEZXRhaWxzIFRhYiAqL1xuICAgICAgICAgLy8gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC5wcm9kdWN0LWRldGFpbHMtdGFiJykuYXBwZW5kVG8oJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAjdGFiLWN1c3RvbS1kZXRhaWwgLnRhYkNvbnRlbnQnKTsgXG4gICAgICAgICAvLyAgICAgaWYoJChcIi5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAjdGFiLWN1c3RvbS1kZXRhaWxcIikudGV4dCgpLnRyaW0oKT09XCJcIil7XG4gICAgICAgICAvLyAgICAgJChcIi5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAudGFiLmZpcnN0LXRhYlwiKS5oaWRlKCk7XG4gICAgICAgICAvLyB9XG4gXG4gICAgICAgICAvKiBDdXN0b20gTGluayBUYWIgKi9cbiAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAucHJvZHVjdC1saW5rLXRhYicpLmFwcGVuZFRvKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gI3RhYi1jdXN0b20tZG9jdW1lbnQgLnRhYkNvbnRlbnQnKTsgXG4gICAgICAgICAgICAgaWYoJChcIi5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAjdGFiLWN1c3RvbS1kb2N1bWVudFwiKS50ZXh0KCkudHJpbSgpPT1cIlwiKXtcbiAgICAgICAgICAgICAkKFwiLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC50YWIuZmlyc3QtdGFiXCIpLmhpZGUoKTtcbiAgICAgICAgIH1cbiAgICAgfVxuICAgICBoaWRlT3B0aW9uTm9QdXJjaGFzYWJsZSgpIHtcbiAgICAgICAgIGNvbnN0IHByb2R1Y3RJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0VmlldycpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0SWQnKTtcbiBcbiAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdE9wdGlvbnMocHJvZHVjdElEKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLmRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlc1swXS5ub2RlLFxuICAgICAgICAgICAgICAgICBvcHRpb25zTGlzdCA9IHByb2R1Y3QudmFyaWFudHMuZWRnZXM7XG4gXG4gICAgICAgICAgICAgb3B0aW9uc0xpc3QuZm9yRWFjaCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgY29uc3QgaXNQdXJjaGFzYWJsZSA9IHZhcmlhbnQubm9kZS5pc1B1cmNoYXNhYmxlO1xuIFxuICAgICAgICAgICAgICAgICBpZiAoIWlzUHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8qIEhpZGUgdmFyaWFudCBjYW5ub3QgcHVyY2hhc2UgKi9cbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRJZCA9IHZhcmlhbnQubm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRPcHRpb25zID0gdmFyaWFudC5ub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzO1xuIFxuICAgICAgICAgICAgICAgICAgICAgdmFyaWFudE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gb3B0aW9uLm5vZGUudmFsdWVzLmVkZ2VzO1xuIFxuICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNMaXN0LmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZUlkID0gb3B0aW9uVmFsdWUubm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke29wdGlvblZhbHVlSWR9XCJdYCk7XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9uVmFsdWUubm9kZS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH0pXG4gICAgIH1cbiAgICAgLyogSGlkZSBvcHRpb24gbm8gUHVyY2hhc2FibGUgKi9cbiAgICAgZ2V0UHJvZHVjdE9wdGlvbnMocHJvZHVjdElEKSB7XG4gICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuY29udGV4dC50b2tlblxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgcXVlcnkgRXh0ZW5kZWRQcm9kdWN0c0J5SWQge1xuICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMoZW50aXR5SWRzOiBbYCtwcm9kdWN0SUQrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybE9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzKGZpcnN0OiA1MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsT3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogMTUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHVyY2hhc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgfVxuIH1cbiAiLCJpbXBvcnQgJ2Vhc3l6b29tJztcbmltcG9ydCAnZmFuY3lib3gnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICB0aGlzLiRtYWluSW1hZ2UgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJyk7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZCA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLW1haW4taW1hZ2VdJyk7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuJHN3aXBUaHVtYm5haWxzID0gJGdhbGxlcnkuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHt9O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5mYW5jeWJveFpvb20oKTtcbiAgICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI1cHgpJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW1hZ2Vab29tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHsgLi4uaW1nT2JqIH07XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBzZXRBbHRlcm5hdGVJbWFnZShpbWdPYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmw6IHRoaXMuJG1haW5JbWFnZS5hdHRyKCdkYXRhLXpvb20taW1hZ2UnKSxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6IHRoaXMuJG1haW5JbWFnZS5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgcmVzdG9yZUltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2F2ZWRJbWFnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmYW5jeWJveFpvb20oKSB7XG4gICAgICAgICQoJ1tkYXRhLWZhbmN5Ym94PVwiaW1hZ2VzXCJdJykuZmFuY3lib3goe1xuICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgIFwiem9vbVwiLFxuICAgICAgICAgICAgICAgIFwic2xpZGVTaG93XCIsXG4gICAgICAgICAgICAgICAgXCJjbG9zZVwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZWxlY3ROZXdJbWFnZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsJyksXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsJyksXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICAgICAgbWFpbkltYWdlQWx0OiAkdGFyZ2V0LmNoaWxkcmVuKCkuZmlyc3QoKS5hdHRyKCdhbHQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdJbWFnZTIoZSkge1xuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpLmZpbmQoJy5zbGljay1jdXJyZW50IFtkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKTtcbiAgICAgICAgY29uc3QgaW1nT2JqID0ge1xuICAgICAgICAgICAgbWFpbkltYWdlVXJsOiAkdGFyZ2V0LmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS1uZXctaW1hZ2UtdXJsJyksXG4gICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LXpvb20taW1hZ2UtdXJsJyksXG4gICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS1zcmNzZXQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkKGUuY3VycmVudFRhcmdldCkuZmluZCgnLnNsaWNrLWN1cnJlbnQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dhcE1haW5JbWFnZSgpIHtcbiAgICAgICAgY29uc3QgaXNCcm93c2VySUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdUcmlkZW50Jyk7XG5cbiAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLnN3YXAoXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy4kbWFpbkltYWdlLmF0dHIoe1xuICAgICAgICAgICAgJ2RhdGEtem9vbS1pbWFnZSc6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmQoJ2EnKS5hdHRyKHtocmVmOiB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmx9KVxuICAgICAgICAuZmluZCgnaW1nJykuYXR0cih7c3JjOiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmx9KTtcblxuICAgICAgICB0aGlzLiRtYWluSW1hZ2UuZmluZCgnLnByb2R1Y3RWaWV3LWltZy1jb250YWluZXIgaW1nJykuYXR0cih7c3Jjc2V0OiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmx9KTtcblxuICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuYXR0cih7XG4gICAgICAgICAgICBhbHQ6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VBbHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0Jyb3dzZXJJRSkge1xuICAgICAgICAgICAgY29uc3QgZmFsbGJhY2tTdHlsZXNJRSA9IHtcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6IGB1cmwoJHt0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VVcmx9KWAsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1vcmlnaW4nOiAnY29udGVudC1ib3gnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnY29udGFpbicsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLiRtYWluSW1hZ2VOZXN0ZWQuY3NzKGZhbGxiYWNrU3R5bGVzSUUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tJbWFnZSgpIHtcbiAgICAgICAgY29uc3QgJGltYWdlQ29udGFpbmVyID0gJCgnLnByb2R1Y3RWaWV3LWltYWdlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9ICRpbWFnZUNvbnRhaW5lci5oZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAkaW1hZ2VDb250YWluZXIud2lkdGgoKTtcblxuICAgICAgICBjb25zdCAkaW1hZ2UgPSB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuJHpvb207XG4gICAgICAgIGNvbnN0IGhlaWdodCA9ICRpbWFnZS5oZWlnaHQoKTtcbiAgICAgICAgY29uc3Qgd2lkdGggPSAkaW1hZ2Uud2lkdGgoKTtcblxuICAgICAgICBpZiAoaGVpZ2h0IDwgY29udGFpbmVySGVpZ2h0IHx8IHdpZHRoIDwgY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRJbWFnZVpvb20oKSB7XG4gICAgICAgIHRoaXMuZWFzeXpvb20gPSB0aGlzLiRtYWluSW1hZ2UuZWFzeVpvb20oe1xuICAgICAgICAgICAgb25TaG93OiAoKSA9PiB0aGlzLmNoZWNrSW1hZ2UoKSxcbiAgICAgICAgICAgIGVycm9yTm90aWNlOiAnJyxcbiAgICAgICAgICAgIGxvYWRpbmdOb3RpY2U6ICcnLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3SW1hZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuJHN3aXBUaHVtYm5haWxzLm9uKCdhZnRlckNoYW5nZScsIHRoaXMuc2VsZWN0TmV3SW1hZ2UyLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBzYWZlU3RyaW5nIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL3NhZmUtc3RyaW5nJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJyNwcm9kdWN0UmV2aWV3X2xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3VGFiTGluaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCBkbyBub3QgY29sbGFwc2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdCBJRCBpbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmtcbiAgICAgKi9cbiAgICBpbmplY3RQYWdpbmF0aW9uTGluaygpIHtcbiAgICAgICAgY29uc3QgJG5leHRMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcHJldkxpbmsuYXR0cignaHJlZicsIGAkeyRwcmV2TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVmFsaWRhdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnJhdGluZ1wiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nKSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0KSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRleHRcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy53cml0ZVJldmlldy1mb3JtIFtuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0VtYWlsLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsidXRpbHMiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJJbWFnZUdhbGxlcnkiLCJtb2RhbEZhY3RvcnkiLCJzaG93QWxlcnRNb2RhbCIsIm1vZGFsVHlwZXMiLCJub3JtYWxpemVGb3JtRGF0YSIsImlzQnJvd3NlcklFIiwiY29udmVydEludG9BcnJheSIsImJhbm5lclV0aWxzIiwiaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyIsIkdhbGxlcnlQb3B1cCIsImFkZGl0aW9uYWxQcm9kdWN0Q29sb3JzIiwiUHJvZHVjdERldGFpbHMiLCJfUHJvZHVjdERldGFpbHNCYXNlIiwiJHNjb3BlIiwiY29udGV4dCIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsIl90aGlzIiwiY2FsbCIsIiRvdmVybGF5IiwiJCIsImltYWdlR2FsbGVyeSIsImluaXQiLCJsaXN0ZW5RdWFudGl0eUNoYW5nZSIsIiRzd2F0Y2hPcHRpb25NZXNzYWdlIiwic3dhdGNoT3B0aW9uTWVzc2FnZUluaXRUZXh0IiwidGV4dCIsImxlbmd0aCIsInNvbGRQcm9kdWN0IiwiJGZvcm0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImh0bWwiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJmaW5kIiwiJHByb2R1Y3RTd2F0Y2hHcm91cCIsInNob3dTd2F0Y2hOYW1lcyIsInJlbW92ZUNsYXNzIiwib24iLCJfcmVmIiwidGFyZ2V0Iiwic2hvd1N3YXRjaE5hbWVPbk9wdGlvbiIsImVhY2giLCJfIiwiZWxlbWVudCIsImlzIiwiZXZlbnQiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJzZXRQcm9kdWN0VmFyaWFudCIsInNldFByb2R1Y3RWYXJpYW50MiIsInZhbHVlIiwiYWRkQ2xhc3MiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiJGZvcm0yIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudDIiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQyIiwiZG9jdW1lbnQiLCJzdWJtaXQiLCJfaXNFbXB0eSIsIiRwcm9kdWN0SWQiLCJ2YWwiLCJvcHRpb25DaGFuZ2VDYWxsYmFjayIsImFwaSIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJkaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudCIsInNob3ciLCJwcmV2aWV3TW9kYWwiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb192aWV3aW5nX3Byb2R1Y3QiLCJ2aWV3aW5nUHJvZHVjdCIsImNoZWNrVmFsaWRpdHkiLCJ1cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEiLCJ0b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwidW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyIsIm9wdGlvbnMiLCJpbmRleCIsIm9wdGlvbkxhYmVsIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJvcHRpb25UaXRsZSIsInNwbGl0IiwicmVxdWlyZWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwiaXNTYXRpc2ZpZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIm1hcCIsIngiLCJqb2luIiwiY2hlY2tlZCIsImdldFNlbGVjdGVkT3B0aW9uTGFiZWwiLCJwcm9kdWN0VmFyaWFudHNsaXN0IiwibWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCIsImlucHQiLCJkYXRhc2V0IiwicHJvZHVjdEF0dHJpYnV0ZVZhbHVlIiwiZmlsdGVyIiwibGFiZWwiLCJsYWJlbHMiLCJ0aXRsZSIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJhdHRyIiwicHJvZHVjdE5hbWUiLCJyZXBsYWNlIiwiY2FyZCIsImlzUnVubmluZ0luSWZyYW1lIiwid2luZG93Iiwic2VsZiIsInRvcCIsImUiLCJfdGhpczIiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0SWQiLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsImVyciIsInJlc3BvbnNlIiwiZGF0YSIsInByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVWaWV3IiwiX3RoaXMzIiwic2V0VGltZW91dCIsImNoYW5nZV9pbWciLCJpIiwiZWwiLCJvcCIsIm5leHQiLCJoYXNDbGFzcyIsIm9wVGl0bGUiLCJwcm9wIiwiY2hlY2tlZENvbG9yIiwiY29sb3IiLCIkc3dhdGNoIiwic3dhdGNoTmFtZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwicm9sZSIsInNob3dQcm9kdWN0SW1hZ2UiLCJpbWFnZSIsIl9pc1BsYWluT2JqZWN0Iiwiem9vbUltYWdlVXJsIiwidG9vbHMiLCJpbWFnZVNyY3NldCIsImdldFNyY3NldCIsInpvb21TaXplIiwibWFpbkltYWdlVXJsIiwicHJvZHVjdFNpemUiLCJtYWluSW1hZ2VTcmNzZXQiLCJzZXRBbHRlcm5hdGVJbWFnZSIsInJlc3RvcmVJbWFnZSIsIl90aGlzNCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJ2aWV3TW9kZWwiLCJnZXRWaWV3TW9kZWwiLCIkaW5wdXQiLCJxdWFudGl0eSIsInF1YW50aXR5TWluIiwicGFyc2VJbnQiLCJxdWFudGl0eU1heCIsImN1cnJlbnRTdG9jayIsInF0eSIsIiR0ZXh0Iiwid2hpY2giLCJrZXlDb2RlIiwiZm9ybSIsIl90aGlzNSIsIiRhZGRUb0NhcnRCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiY2FydCIsIml0ZW1BZGQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsImhpZGUiLCJ0bXAiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJoYWxvQWRkVG9DYXJ0QWN0aW9uIiwidHJpZ2dlciIsInRlbXBsYXRlIiwibG9hZGluZ0NsYXNzIiwiJGJvZHkiLCIkY2FydERyb3Bkb3duIiwiJGNhcnRMb2FkaW5nIiwidG9nZ2xlQ2xhc3MiLCJnZXRDb250ZW50Iiwib3BlbiIsInVwZGF0ZUNhcnRDb250ZW50IiwiY2FydF9pdGVtIiwiaWQiLCJzZXR1cEZvY3VzYWJsZUVsZW1lbnRzIiwiUFJPRFVDVF9ERVRBSUxTIiwicmVkaXJlY3RUbyIsImNhcnRfdXJsIiwidXJscyIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1JZCIsIm9uQ29tcGxldGUiLCJwYXJhbXMiLCJzdWdnZXN0IiwiY29uZmlnIiwic3VnZ2VzdGlvbnMiLCJsaW1pdCIsInVybCIsImlmcmFtZVNkayIsImxvY2F0aW9uIiwibW9kYWwiLCJ1cGRhdGVDb250ZW50IiwiJGNhcnRRdWFudGl0eSIsIiRjb250ZW50IiwiJGNhcnRDb3VudGVyIiwiJHByb21vdGlvbkJhbm5lciIsIiRiYWNrVG9TaG9wcHBpbmdCdG4iLCIkbW9kYWxDbG9zZUJ0biIsImJhbm5lclVwZGF0ZUhhbmRsZXIiLCIkcHJvZHVjdENvbnRhaW5lciIsImFwcGVuZCIsInJlbG9hZCIsImZvcm1EYXRhSXRlbXMiLCJzZXJpYWxpemVBcnJheSIsInByb2R1Y3REZXRhaWxzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImZvcm1EYXRhSXRlbSIsIm5hbWUiLCJOdW1iZXIiLCJtYXRjaCIsInByb2R1Y3RPcHRpb24iLCJvcHRpb25JZCIsIm9wdGlvblZhbHVlIiwib3B0aW9uU2VsZWN0aW9ucyIsImNvbmNhdCIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImJ1YmJsZXMiLCJkZXRhaWwiLCJudW1iZXJzUHJvZHVjdFMiLCJudW1iZXJfcHJvZHVjdHMiLCJudW1iZXJzUHJvZHVjdExpc3QiLCJKU09OIiwicGFyc2UiLCJudW1iZXJzUHJvZHVjdEl0ZW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJudW1iZXJzUHJvZHVjdCIsIm51bWJlcnNIb3Vyc1MiLCJudW1iZXJfaG91cnMiLCJudW1iZXJzSG91cnNMaXN0IiwibnVtYmVyc0hvdXJzSXRlbSIsIm51bWJlcnNIb3VyIiwiaXRlbVByZHNUZXh0IiwibnVtYmVyX3Byb2R1Y3RzX3RleHQiLCJpdGVtSG91cnNUZXh0IiwibnVtYmVyX2hvdXJzX3RleHQiLCJWaWV3ZXJUZXh0IiwiaGFsb192aWV3aW5nX3Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsImhhbG9fdmlld2luZ19wcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwidGltZVZpZXdlciIsImhhbG9fdmlld2luZ19wcm9kdWN0X2NoYW5nZSIsInNldEludGVydmFsIiwibnVtYmVyc1ZpZXdlckl0ZW0iLCJkZWZhdWx0IiwiZmlsdGVyRW1wdHlWYWx1ZXNGcm9tRm9ybSIsImZvcm1EYXRhIiwicmVzIiwiX3N0ZXAkdmFsdWUiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9zdGVwMiR2YWx1ZSIsIkZpbGUiLCJzaXplIiwicHJpY2UiLCJwcmljZV9yYW5nZSIsIndpdGhvdXRfdGF4Iiwid2l0aF90YXgiLCJldnQiLCJhbW91bnQiLCJzYWZlU3RyaW5nIiwic3RyIiwiZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJyZWFkeSIsImluaXRQcm9kdWN0TW9yZXZpZXciLCJvYmoiLCJ2YXJpYW50X25hbWUiLCJjbGFzc05hbWUiLCJjbGFzc04iLCJsYXN0RWxlbWVudCIsInBhcmVudCIsImlucHV0Q2hlY2tlZCIsImNsc05hbWUiLCJyZW1vdmUiLCJyZWxhdGVfdGFiIiwiJGJ1bmRsZSIsInNob3dCdW5kbGUiLCJub3QiLCJjbG9zZXN0IiwidG90YWxQcmljZSIsImFyclBybyIsImNoZWNrIiwiY2hlY2tQcm9kdWN0IiwiYWRkVG9DYXJ0IiwiYWxlcnQiLCJpdGVtIiwicHJvZEJ1bmRsZUlkIiwiZmlyc3RJdGVtIiwicHJvZHVjdEN1c3RvbUZpZWxkcyIsIm51bSIsImxpc3QiLCJwSWQiLCJwcm9kdWN0IiwiZ2V0QnlJZCIsImZvckVhY2giLCJzaG93TGlzdCIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsInByb2R1Y3RPcHRpb25zIiwic2hvd1NsaWNrU2xpZGVyIiwic2xpY2siLCJkb3RzIiwiYXJyb3dzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJtb2JpbGVGaXJzdCIsImluZmluaXRlIiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImxlbiIsImsiLCJjaGVja0JlZm9yZUFkZCIsIiRhdHRyaWJ1dGVzIiwiZm9jdXMiLCJhdHQiLCJhcnJQIiwiJHNpZGVDYXJ0QmxvY2siLCJ0b3RhbCIsInBvcyIsInN5bWJvbCIsImN1cnJlbmN5IiwicyIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaXNOYU4iLCJpbmRleE9mIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJnZXRTcmMiLCJwcm9kdWN0Z2FsbGVyeV9zaXplIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwiX2lzT2JqZWN0IiwidXBkYXRlUHJpY2VWaWV3IiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkY29udGFpbmVyIiwiJHNrdSIsIiR1cGMiLCIkbXBuIiwiJGJ1bGtQcmljaW5nIiwibWVzc2FnZSIsIiRtZXNzYWdlQm94IiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJmb3JtYXR0ZWQiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCIkZ2FsbGVyeSIsImNvbnRhaW5lcl9kaXYiLCJqUXVlcnkiLCJmbiIsInZHYWxsZXJ5IiwiZ2FsbGVyeUlEIiwiYnJhbmQiLCJiIiwiaGFsb0dhbGxlcnkiLCJhZGQiLCJhZGRQb3B2aWV3IiwiZ19vYmpHYWxsZXJ5IiwiZ19vcHRpb25zIiwiZ2FsbGVyeSIsImN1c3RvbU9wdGlvbnMiLCJleHRlbmQiLCJyb3VuZCIsIm9wcyIsImRmcyIsInVfY29udGVudCIsInRodW1ibmFpbCIsInVfdGh1bWJuYWlsIiwicmVyb3VuZCIsInBwIiwiYyIsInN0dCIsInByZXYiLCJjdXIiLCJjdGhpcyIsInNldCIsImJpbmRFdmVudCIsIm9iIiwib2JfY2NvbnRlbnQiLCJvYl9jb250ZW50IiwiY3NzIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3X3NsaWRlIiwiZHJhd19zbGlkZSIsImF2aWV3IiwiczEiLCJzMiIsIm9iX3NjdCIsIm9iX2UiLCJ2IiwiZGkiLCJ2ZSIsImFyIiwiY3VycmVudCIsImVxIiwiYW5pbWF0ZSIsInRpbWUiLCJiaW5kIiwiaW54IiwiZ3JpZHBhbmVsX3ZlcnRpY2FsX3Njcm9sbCIsImhhbG9fcHJldl9uZXh0X3Byb2R1Y3QiLCJuZXh0SWQiLCJwcmV2SWQiLCJuZXh0TGluayIsInByZXZMaW5rIiwiJHByb2RXcmFwIiwiJHByb2RJY29ucyIsIiRvcHRpb25zIiwic3dhbCIsInNjcm9sbCIsIm9mZnNldCIsInNjcm9sbFRvcCIsImhlaWdodEhlYWRlciIsIm9ubG9hZCIsIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwiaGFsb0J1bmRsZVByb2R1Y3RzIiwiaGFsb1N0aWNreUFkZFRvQ2FydCIsImhhbG9QcmV2TmV4dFByb2R1Y3QiLCJXUklURV9SRVZJRVciLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwib25SZWFkeSIsInRva2VuIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiaGxHbG9iYWwiLCJoaWRlT3B0aW9uTm9QdXJjaGFzYWJsZSIsImhhbG9fYnVuZGxlX3Byb2R1Y3RzX2VuYWJsZSIsIiRyZXZpZXdGb3JtIiwicmV2aWV3IiwiYXBwZW5kVG8iLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsImlucHV0IiwibXNnU3BhbklkIiwic2libGluZ3MiLCJ3V2lkdGgiLCJpbm5lcldpZHRoIiwiJGRlc1RhYiIsIiRpbmZvVGFiIiwic2xpZGVEb3duIiwiJGxvYWRUYWJCdG4iLCIkZmlyc3RUYWIiLCJjaGVja19sb2FkVGFiRmlyc3QiLCJ1cmxfbG9hZFRhYiIsInRoaXNUYWIiLCIkdGhpc1RhYiIsImdldCIsImZhaWwiLCJjaGVja19sb2FkVGFiIiwiJGJ0blRhYk1vYmlsZSIsImlkVGFiIiwidGhpc1RvcCIsInNsaWRlVXAiLCIkdGFiQWN0aXZlTW9iaWxlIiwiJHNoYXJlTGlua0J0biIsIiRzaGFyZUxpbmtQb3B1cCIsIiRzaGFyZUxpbmtDbG9zZSIsIiRzaGFyZUxpbmtDb3B5IiwiZXhlY0NvbW1hbmQiLCJwcm9kdWN0SUQiLCJnZXRQcm9kdWN0T3B0aW9ucyIsInRoZW4iLCJzaXRlIiwicHJvZHVjdHMiLCJlZGdlcyIsIm5vZGUiLCJvcHRpb25zTGlzdCIsInZhcmlhbnRzIiwidmFyaWFudCIsImlzUHVyY2hhc2FibGUiLCJ2YXJpYW50SWQiLCJlbnRpdHlJZCIsInZhcmlhbnRPcHRpb25zIiwib3B0aW9uIiwidmFsdWVzIiwib3B0aW9uVmFsdWVJZCIsIm9wdGlvblZhbHVlRWxlbWVudCIsImlzRGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInN0cmluZ2lmeSIsInF1ZXJ5IiwianNvbiIsIiRtYWluSW1hZ2UiLCIkbWFpbkltYWdlTmVzdGVkIiwiJHNlbGVjdGFibGVJbWFnZXMiLCIkc3dpcFRodW1ibmFpbHMiLCJjdXJyZW50SW1hZ2UiLCJiaW5kRXZlbnRzIiwiZmFuY3lib3hab29tIiwibWF0Y2hNZWRpYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRJbWFnZVpvb20iLCJzZXRNYWluSW1hZ2UiLCJpbWdPYmoiLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRBY3RpdmVUaHVtYiIsInN3YXBNYWluSW1hZ2UiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJmYW5jeWJveCIsImJ1dHRvbnMiLCJzZWxlY3ROZXdJbWFnZSIsIm1haW5JbWFnZUFsdCIsImZpcnN0Iiwic2VsZWN0TmV3SW1hZ2UyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZWFzeXpvb20iLCJzd2FwIiwic3JjIiwic3Jjc2V0IiwiYWx0IiwiZmFsbGJhY2tTdHlsZXNJRSIsImNoZWNrSW1hZ2UiLCIkaW1hZ2VDb250YWluZXIiLCJjb250YWluZXJIZWlnaHQiLCJjb250YWluZXJXaWR0aCIsIiRpbWFnZSIsIiR6b29tIiwiZWFzeVpvb20iLCJvblNob3ciLCJlcnJvck5vdGljZSIsImxvYWRpbmdOb3RpY2UiLCJub2QiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImZvcm1zIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIl9kZWZhdWx0IiwidGFwIiwiJHJldmlld3NDb250ZW50IiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCJjb2xsYXBzZVJldmlld3MiLCJjbGljayIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJjYiIsInJlc3VsdCIsImVtYWlsIiwicmV2aWV3RW1haWwiLCJWaWRlb0dhbGxlcnkiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsInNlbGVjdE5ld1ZpZGVvIiwic2V0TWFpblZpZGVvIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsIiRlbCIsImlzSW5pdGlhbGl6ZWQiXSwic291cmNlUm9vdCI6IiJ9
