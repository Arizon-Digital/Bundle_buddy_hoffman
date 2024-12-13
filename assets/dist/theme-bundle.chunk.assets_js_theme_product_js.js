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
   */
  // updateCartContent(modal, cartItemId, onComplete) {
  //     this.getCartContent(cartItemId, (err, response) => {
  //         if (err) {
  //             return;
  //         }

  //         modal.updateContent(response);

  //         // Update cart counter
  //         const $body = $('body');
  //         const $cartQuantity = $('[data-cart-quantity]', modal.$content);
  //         const $cartCounter = $('.navUser-action .cart-count');
  //         const quantity = $cartQuantity.data('cartQuantity') || 0;
  //         const $promotionBanner = $('[data-promotion-banner]');
  //         const $backToShopppingBtn = $(
  //             '.previewCartCheckout > [data-reveal-close]'
  //         );
  //         const $modalCloseBtn = $('#previewModal > .modal-close');
  //         const bannerUpdateHandler = () => {
  //             const $productContainer = $('#main-content > .container');

  //             $productContainer.append(
  //                 '<div class="loadingOverlay pdp-update"></div>'
  //             );
  //             $('.loadingOverlay.pdp-update', $productContainer).show();
  //             window.location.reload();
  //         };

  //         $cartCounter.addClass('cart-count--positive');
  //         $body.trigger('cart-quantity-update', quantity);

  //         if (onComplete) {
  //             onComplete(response);
  //         }

  //         if ($promotionBanner.length && $backToShopppingBtn.length) {
  //             $backToShopppingBtn.on('click', bannerUpdateHandler);
  //             $modalCloseBtn.on('click', bannerUpdateHandler);
  //         }
  //     });
  // }
  //new lines added
  ;
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

      // Ensure quantity is parsed as a number and defaults to 0 if not found
      var quantity = parseInt($cartQuantity.data('cart-quantity') || 0, 10);
      $cartCounter.text(quantity);
      $cartCounter.toggleClass('cart-count--positive', quantity > 0);
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }
      var $promotionBanner = $('[data-promotion-banner]');
      var $backToShopppingBtn = $('.previewCartCheckout > [data-reveal-close]');
      var $modalCloseBtn = $('#previewModal > .modal-close');
      var bannerUpdateHandler = function bannerUpdateHandler() {
        var $productContainer = $('#main-content > .container');
        $productContainer.append('<div class="loadingOverlay pdp-update"></div>');
        $('.loadingOverlay.pdp-update', $productContainer).show();
        window.location.reload();
      };
      if ($promotionBanner.length && $backToShopppingBtn.length) {
        $backToShopppingBtn.on('click', bannerUpdateHandler);
        $modalCloseBtn.on('click', bannerUpdateHandler);
      }
    });
  }

  //new lines ended

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUdmO0FBQ21CO0FBQ087QUFDTjtBQUN1QjtBQUUzQjtBQUNtQjtBQUNwQjtBQUNpQztBQUN0QjtBQUNvQjtBQUFBLElBRXpEYyxjQUFjLDBCQUFBQyxtQkFBQTtFQUMvQixTQUFBRCxlQUFZRSxNQUFNLEVBQUVDLE9BQU8sRUFBRUMscUJBQXFCLEVBQU87SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBNUJELHFCQUFxQjtNQUFyQkEscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0lBQUE7SUFDbkRDLEtBQUEsR0FBQUosbUJBQUEsQ0FBQUssSUFBQSxPQUFNSixNQUFNLEVBQUVDLE9BQU8sQ0FBQztJQUV0QkUsS0FBQSxDQUFLRSxRQUFRLEdBQUdDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQztJQUN6REgsS0FBQSxDQUFLSSxZQUFZLEdBQUcsSUFBSXBCLDhEQUFZLENBQ2hDbUIsQ0FBQyxDQUFDLHNCQUFzQixFQUFFSCxLQUFBLENBQUtILE1BQU0sQ0FDekMsQ0FBQztJQUNERyxLQUFBLENBQUtJLFlBQVksQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDeEJMLEtBQUEsQ0FBS00sb0JBQW9CLENBQUMsQ0FBQztJQUMzQk4sS0FBQSxDQUFLTyxvQkFBb0IsR0FBR0osQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZESCxLQUFBLENBQUtRLDJCQUEyQixHQUFHUixLQUFBLENBQUtPLG9CQUFvQixDQUFDRSxJQUFJLENBQUMsQ0FBQzs7SUFFbkU7SUFDQSxJQUFJaEIscUVBQVksQ0FBQ08sS0FBQSxDQUFLRixPQUFPLEVBQUVFLEtBQUEsQ0FBS0gsTUFBTSxDQUFDO0lBRTNDLElBQUlNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ08sTUFBTSxFQUFFO01BQzNCVixLQUFBLENBQUtXLFdBQVcs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QUFNNEosU0FBUyxHQUFHLGVBQWU7RUFDakMsSUFBTUMsYUFBYSxHQUFHMW9CLENBQUMsWUFBVXlvQixTQUFTLE1BQUcsQ0FBQztFQUU5Q0MsYUFBYSxDQUFDbm5CLElBQUksQ0FBQyxVQUFDdUMsS0FBSyxFQUFFckMsT0FBTyxFQUFLO0lBQ25DLElBQU1rbkIsR0FBRyxHQUFHM29CLENBQUMsQ0FBQ3lCLE9BQU8sQ0FBQztJQUN0QixJQUFNbW5CLGFBQWEsR0FBR0QsR0FBRyxDQUFDdGhCLElBQUksQ0FBQ29oQixTQUFTLENBQUMsWUFBWU4sWUFBWTtJQUVqRSxJQUFJUyxhQUFhLEVBQUU7TUFDZjtJQUNKO0lBRUFELEdBQUcsQ0FBQ3RoQixJQUFJLENBQUNvaEIsU0FBUyxFQUFFLElBQUlOLFlBQVksQ0FBQ1EsR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9hZGRpdGlvbmFsX3Byb2R1Y3RfY29sb3JzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0dhbGxlcnlQb3B1cC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9QcmV2TmV4dFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHtcbiAgICBvcHRpb25DaGFuZ2VEZWNvcmF0b3IsXG59IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IHNob3dBbGVydE1vZGFsLCBtb2RhbFR5cGVzIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCB7IGlzRW1wdHksIGlzUGxhaW5PYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbm9ybWFsaXplRm9ybURhdGEgfSBmcm9tICcuL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5pbXBvcnQgYmFubmVyVXRpbHMgZnJvbSAnLi91dGlscy9iYW5uZXItdXRpbHMnO1xuaW1wb3J0IGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcgZnJvbSAnLi4vaGFsb3RoZW1lcy9oYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nJztcbmltcG9ydCBHYWxsZXJ5UG9wdXAgZnJvbSAnLi4vaGFsb3RoZW1lcy9oYWxvR2FsbGVyeVBvcHVwJztcbmltcG9ydCBhZGRpdGlvbmFsUHJvZHVjdENvbG9ycyBmcm9tICcuLi9oYWxvdGhlbWVzL2FkZGl0aW9uYWxfcHJvZHVjdF9jb2xvcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXSAubG9hZGluZ092ZXJsYXknKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBuZXcgSW1hZ2VHYWxsZXJ5KFxuICAgICAgICAgICAgJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeV0nLCB0aGlzLiRzY29wZSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlblF1YW50aXR5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UgPSAkKCcuc3dhdGNoLW9wdGlvbi1tZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuc3dhdGNoT3B0aW9uTWVzc2FnZUluaXRUZXh0ID0gdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZS50ZXh0KCk7XG5cbiAgICAgICAgLyogSGFsb3RoZW1lcyAqL1xuICAgICAgICBuZXcgR2FsbGVyeVBvcHVwKHRoaXMuY29udGV4dCwgdGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGlmICgkKCcuc29sZC1wcm9kdWN0JykubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNvbGRQcm9kdWN0KHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPVxuICAgICAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RTd2F0Y2hHcm91cCA9ICQoJ1tpZCo9XCJhdHRyaWJ1dGVfc3dhdGNoXCJdJywgJGZvcm0pO1xuXG4gICAgICAgIGlmIChjb250ZXh0LnNob3dTd2F0Y2hOYW1lcykge1xuICAgICAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZS5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgICAgICRwcm9kdWN0U3dhdGNoR3JvdXAub24oJ2NoYW5nZScsICh7IHRhcmdldCB9KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N3YXRjaE5hbWVPbk9wdGlvbigkKHRhcmdldCkpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAkLmVhY2goJHByb2R1Y3RTd2F0Y2hHcm91cCwgKF8sIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5pcygnOmNoZWNrZWQnKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U3dhdGNoTmFtZU9uT3B0aW9uKCQoZWxlbWVudCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZHVjdFZhcmlhbnQyKCk7XG5cbiAgICAgICAgICAgIC8qIE1pbnQgU3RhcnQgVXBkYXRlIDA1MDIyMDI0Ki9cbiAgICAgICAgICAgIC8qIFJlbW92ZSBkZWZhdWx0IGNsYXNzIHdoZW4gZG9uJ3Qgc2VsZWN0IG9wdGlvbiAqL1xuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1wcm9kdWN0IC5wcm9kdWN0Vmlldy1wcmljZScpLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgICAgICAnY3VzdG9tLWRlZmF1bHRQcmljZSdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctcHJvZHVjdCAucHJvZHVjdFZpZXctcHJpY2UnKS5hZGRDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgJ2N1c3RvbS1kZWZhdWx0UHJpY2UnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9jYWxsIHNjcmlwdFxuICAgICAgICBhZGRpdGlvbmFsUHJvZHVjdENvbG9ycyh0aGlzLmNvbnRleHQsICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQpO1xuXG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgJGZvcm1bMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgdG8gY2FydCAyXG4gICAgICAgIGNvbnN0ICRmb3JtMiA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkLTJdJywgJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudDIgPSAkKFxuICAgICAgICAgICAgJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZS00XScsXG4gICAgICAgICAgICAkZm9ybTJcbiAgICAgICAgKTtcblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Mi5vbignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RPcHRpb25zQ2hhbmdlZDIoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudDIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQyLnRoZW1ldmFsZScsXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZm9ybTIuc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgJGZvcm0yLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdFRvQ2FydChldmVudCwgJGZvcm0yWzBdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3QgYXR0cmlidXRlcy4gQWxzbyB1cGRhdGUgdGhlIGluaXRpYWwgdmlldyBpbiBjYXNlIGl0ZW1zIGFyZSBvb3NcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJlxuICAgICAgICAgICAgaGFzT3B0aW9uc1xuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkZm9ybSkudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgaGFzRGVmYXVsdE9wdGlvbnNcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RJZCxcbiAgICAgICAgICAgICAgICAkZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICAgICAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsXG4gICAgICAgICAgICAgICAgb3B0aW9uQ2hhbmdlQ2FsbGJhY2tcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICBiYW5uZXJVdGlscy5kaXNwYXRjaFByb2R1Y3RCYW5uZXJFdmVudChwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5zaG93KCk7XG5cbiAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNwcmV2aWV3TW9kYWwnKVswXTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb192aWV3aW5nX3Byb2R1Y3QpIHtcbiAgICAgICAgICAgIHRoaXMudmlld2luZ1Byb2R1Y3QodGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJGZvcm1bMF0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVXYWxsZXRCdXR0b25zVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKFxuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LW9wdGlvbnMgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksXG4gICAgICAgICAgICAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3RleHRhcmVhJyAmJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JylcbiAgICAgICAgICAgICAgICAgICAgKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IHgudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdzd2F0Y2gnIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCdcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYW50c2xpc3QgPSBjb252ZXJ0SW50b0FycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IChpbnB0KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuaW5uZXJUZXh0LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsYWJlbC50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID1cbiAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpXG4gICAgICAgICAgICAgICAgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLnByb2R1Y3RWaWV3Jyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9XG4gICAgICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPT09ICd1bnNhdGlzZmllZCcgPyAnJyA6IHByb2R1Y3RWYXJpYW50O1xuICAgICAgICAgICAgaWYgKHZpZXcuYXR0cignZGF0YS1ldmVudC10eXBlJykpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHZpZXdcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5wcm9kdWN0Vmlldy10aXRsZScpWzBdXG4gICAgICAgICAgICAgICAgICAgIC5pbm5lclRleHQucmVwbGFjZSgvXCIvZywgJ1xcXFwkJicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQyKCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goXG4gICAgICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2UtNF0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksXG4gICAgICAgICAgICAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3RleHRhcmVhJyAmJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JylcbiAgICAgICAgICAgICAgICAgICAgKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHgpID0+IHgudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KHNlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnc2V0LXJhZGlvJyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnc3dhdGNoJyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gJChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRleHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAkKGNoZWNrZWQubGFiZWxzWzBdKS50ZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQobGFiZWwudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9XG4gICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKVxuICAgICAgICAgICAgICAgIDogJ3Vuc2F0aXNmaWVkJztcbiAgICAgICAgY29uc3QgdmlldyA9ICQoJy5wcm9kdWN0VmlldycpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPVxuICAgICAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPVxuICAgICAgICAgICAgICAgICAgICB2aWV3LmZpbmQoJy5wcm9kdWN0Vmlldy10aXRsZScpWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgY3VycmVudCB3aW5kb3cgaXMgYmVpbmcgcnVuIGluc2lkZSBhbiBpZnJhbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1J1bm5pbmdJbklmcmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBwcm9kdWN0IG9wdGlvbnMgY2hhbmdlc1xuICAgICAqXG4gICAgICovXG4gICAgcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHxcbiAgICAgICAgICAgIHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShcbiAgICAgICAgICAgIHByb2R1Y3RJZCxcbiAgICAgICAgICAgICRmb3JtLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlsc0RhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQyKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHxcbiAgICAgICAgICAgIHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoXG4gICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICAkZm9ybS5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJyxcbiAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhbmdlX2ltZyA9ICQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnLnByb2R1Y3RWaWV3LWltYWdlcyBbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW4tMF0gLnpvb21JbWcnXG4gICAgICAgICAgICAgICAgICAgICkuYXR0cignc3JjJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0IC5wcm9kdWN0LWltYWdlIGltZycpLmF0dHIoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3JjJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZV9pbWdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAgICAgJC5lYWNoKFxuICAgICAgICAgICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZS00XSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoJy5mb3JtLXJhZGlvOmNoZWNrZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcucHJvZHVjdFZpZXctb3B0aW9ucyBbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcCA9ICQodGhpcykuYXR0cigndmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGFzQ2xhc3MoJ2Zvcm0tb3B0aW9uLXN3YXRjaCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wVGl0bGUgPSAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLmZvcm0tb3B0aW9uLXZhcmlhbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5mb3JtLW9wdGlvbi12YXJpYW50JykubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wVGl0bGUgPSAkKHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLmZvcm0tb3B0aW9uLXZhcmlhbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3BUaXRsZSA9ICQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dCgnLmZvcm0tbGFiZWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwgPT0gb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnRzKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmZvcm0tbGFiZWwtLWFsdGVybmF0ZSBbZGF0YS1vcHRpb24tdmFsdWVdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dChvcFRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWRDb2xvciA9ICQoXG4gICAgICAgICAgICAgICAgICAgICdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2UtNF0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd2YWx1ZScpO1xuICAgICAgICAgICAgICAgIHZhciBjb2xvciA9ICQoXG4gICAgICAgICAgICAgICAgICAgICdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2UtNF0gW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmZvcm0tcmFkaW86Y2hlY2tlZCcpXG4gICAgICAgICAgICAgICAgICAgIC5uZXh0KClcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJz4gc3BhbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0IC5wcm9kdWN0Vmlldy10aXRsZSAuY29sb3ItbmFtZScpLnRleHQoXG4gICAgICAgICAgICAgICAgICAgICcgLSAnICsgY29sb3JcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGlmIHRoaXMgc2V0dGluZyBpcyBlbmFibGVkIGluIFBhZ2UgQnVpbGRlclxuICAgICAqIHNob3cgbmFtZSBmb3Igc3dhdGNoIG9wdGlvblxuICAgICAqL1xuICAgIHNob3dTd2F0Y2hOYW1lT25PcHRpb24oJHN3YXRjaCkge1xuICAgICAgICBjb25zdCBzd2F0Y2hOYW1lID0gJHN3YXRjaC5hdHRyKCdhcmlhLWxhYmVsJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0gW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQoXG4gICAgICAgICAgICBzd2F0Y2hOYW1lXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuJHN3YXRjaE9wdGlvbk1lc3NhZ2UudGV4dChcbiAgICAgICAgICAgIGAke3RoaXMuc3dhdGNoT3B0aW9uTWVzc2FnZUluaXRUZXh0fSAke3N3YXRjaE5hbWV9YFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKFxuICAgICAgICAgICAgdGhpcy4kc3dhdGNoT3B0aW9uTWVzc2FnZSxcbiAgICAgICAgICAgICdzdGF0dXMnLFxuICAgICAgICAgICAgJ2Fzc2VydGl2ZSdcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QoaW1hZ2UpKSB7XG4gICAgICAgICAgICBjb25zdCB6b29tSW1hZ2VVcmwgPSB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoXG4gICAgICAgICAgICAgICAgaW1hZ2UuZGF0YSxcbiAgICAgICAgICAgICAgICB7ICcxeCc6IHRoaXMuY29udGV4dC56b29tU2l6ZSB9XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIHpvb20gc2l6ZSB1c2VkIGZvciBkYXRhLXpvb20taW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdFNpemUgfVxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCBmYWxsYmFjayBpbWFnZSBzaXplIHVzZWQgZm9yIHRoZSBtYWluIHByb2R1Y3QgaW1hZ2UgaW5cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0LXZpZXcuaHRtbFxuXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG5cbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlU3Jjc2V0ID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGFcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnNldEFsdGVybmF0ZUltYWdlKHtcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkucmVzdG9yZUltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBhY3Rpb24gd2hlbiB0aGUgc2hvcHBlciBjbGlja3Mgb24gKyAvIC0gZm9yIHF1YW50aXR5XG4gICAgICpcbiAgICAgKi9cbiAgICBsaXN0ZW5RdWFudGl0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0O1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICAgICAgbGV0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0b2NrID0gcGFyc2VJbnQoJCgnc3BhbltkYXRhLXByb2R1Y3Qtc3RvY2tdJykuaHRtbCgpKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTdG9jaykge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5TWF4ID0gY3VycmVudFN0b2NrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eU1heCA9IHF1YW50aXR5TWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuXG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1heCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgICAgICBpZiAocXR5ICsgMSA8PSBxdWFudGl0eU1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZmFsbCBiZWxvdyBtaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHF0eSAtIDEgPj0gcXVhbnRpdHlNaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaGlkZGVuIGlucHV0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJGlucHV0LnZhbChxdHkpO1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRleHRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kdGV4dC50ZXh0KHF0eSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcmV2ZW50IHRyaWdnZXJpbmcgcXVhbnRpdHkgY2hhbmdlIHdoZW4gcHJlc3NpbmcgZW50ZXJcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2tleXByZXNzJywgJy5mb3JtLWlucHV0LS1pbmNyZW1lbnRUb3RhbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgZXZlbnQud2hpY2gsIHRoZW4gdXNlIGV2ZW50LndoaWNoLCBvdGhlcndpc2UgdXNlIGV2ZW50LmtleUNvZGVcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuICAgICAgICAgICAgaWYgKHggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQWRkIGEgcHJvZHVjdCB0byBjYXJ0XG4gICAgICpcbiAgICAgKi9cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJChldmVudC50YXJnZXQpKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG4udmFsKHdhaXRNZXNzYWdlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChcbiAgICAgICAgICAgIG5vcm1hbGl6ZUZvcm1EYXRhKG5ldyBGb3JtRGF0YShmb3JtKSksXG4gICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xuXG4gICAgICAgICAgICAgICAgJGFkZFRvQ2FydEJ0bi52YWwob3JpZ2luYWxCdG5WYWwpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBPcGVuIHByZXZpZXcgbW9kYWwgYW5kIHVwZGF0ZSBjb250ZW50XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvQWRkVG9DYXJ0QWN0aW9uID09PSAnc2lkZWJhcidcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsLWJhY2tncm91bmQnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjb21tb24vY2FydC1wcmV2aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0NsYXNzID0gJ2lzLWxvYWRpbmcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNhcnREcm9wZG93biA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24nKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJGNhcnRMb2FkaW5nID0gJChcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXlcIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ2hhbG8tb3Blbi1zaWRlLWNhcnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAkY2FydERyb3Bkb3duLmFkZENsYXNzKGxvYWRpbmdDbGFzcykuaHRtbCgkY2FydExvYWRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAkY2FydExvYWRpbmcuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjYXJ0RHJvcGRvd24ucmVtb3ZlQ2xhc3MobG9hZGluZ0NsYXNzKS5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZy5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtY2FydC1xdWFudGl0eV0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZFRvQ2FydEFjdGlvbiA9PT0gJ3BvcHVwJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYmFja2dyb3VuZCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0Q29udGVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5zZXR1cEZvY3VzYWJsZUVsZW1lbnRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxUeXBlcy5QUk9EVUNUX0RFVEFJTFNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm8gbW9kYWwsIHJlZGlyZWN0IHRvIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudXJscy5jYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmNhcnRfdXJsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnVybHMuY2FydFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRhZGRUb0NhcnRCdG4ubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjYXJ0IGNvbnRlbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgb25Db21wbGV0ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdG8gdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3RUbyh1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBjYXJ0IGNvbnRlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TW9kYWx9IG1vZGFsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNhcnRJdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgLy8gdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAvLyAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgICAgaWYgKGVycikge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG5cbiAgICAvLyAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAvLyAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIC8vICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xuICAgIC8vICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgLy8gICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcbiAgICAvLyAgICAgICAgIGNvbnN0ICRwcm9tb3Rpb25CYW5uZXIgPSAkKCdbZGF0YS1wcm9tb3Rpb24tYmFubmVyXScpO1xuICAgIC8vICAgICAgICAgY29uc3QgJGJhY2tUb1Nob3BwcGluZ0J0biA9ICQoXG4gICAgLy8gICAgICAgICAgICAgJy5wcmV2aWV3Q2FydENoZWNrb3V0ID4gW2RhdGEtcmV2ZWFsLWNsb3NlXSdcbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgICAgICBjb25zdCAkbW9kYWxDbG9zZUJ0biA9ICQoJyNwcmV2aWV3TW9kYWwgPiAubW9kYWwtY2xvc2UnKTtcbiAgICAvLyAgICAgICAgIGNvbnN0IGJhbm5lclVwZGF0ZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RDb250YWluZXIgPSAkKCcjbWFpbi1jb250ZW50ID4gLmNvbnRhaW5lcicpO1xuXG4gICAgLy8gICAgICAgICAgICAgJHByb2R1Y3RDb250YWluZXIuYXBwZW5kKFxuICAgIC8vICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nXG4gICAgLy8gICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgICAgICAkKCcubG9hZGluZ092ZXJsYXkucGRwLXVwZGF0ZScsICRwcm9kdWN0Q29udGFpbmVyKS5zaG93KCk7XG4gICAgLy8gICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIC8vICAgICAgICAgfTtcblxuICAgIC8vICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgIC8vICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAvLyAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgLy8gICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xuICAgIC8vICAgICAgICAgICAgICRiYWNrVG9TaG9wcHBpbmdCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgLy8gICAgICAgICAgICAgJG1vZGFsQ2xvc2VCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgIC8vbmV3IGxpbmVzIGFkZGVkXG4gICAgdXBkYXRlQ2FydENvbnRlbnQobW9kYWwsIGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgIFxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcubmF2VXNlci1hY3Rpb24gLmNhcnQtY291bnQnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gRW5zdXJlIHF1YW50aXR5IGlzIHBhcnNlZCBhcyBhIG51bWJlciBhbmQgZGVmYXVsdHMgdG8gMCBpZiBub3QgZm91bmRcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gcGFyc2VJbnQoJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0LXF1YW50aXR5JykgfHwgMCwgMTApO1xuICAgIFxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLnRleHQocXVhbnRpdHkpO1xuICAgICAgICAgICAgJGNhcnRDb3VudGVyLnRvZ2dsZUNsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScsIHF1YW50aXR5ID4gMCk7XG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcbiAgICBcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBjb25zdCAkcHJvbW90aW9uQmFubmVyID0gJCgnW2RhdGEtcHJvbW90aW9uLWJhbm5lcl0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRiYWNrVG9TaG9wcHBpbmdCdG4gPSAkKCcucHJldmlld0NhcnRDaGVja291dCA+IFtkYXRhLXJldmVhbC1jbG9zZV0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRtb2RhbENsb3NlQnRuID0gJCgnI3ByZXZpZXdNb2RhbCA+IC5tb2RhbC1jbG9zZScpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgYmFubmVyVXBkYXRlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdENvbnRhaW5lciA9ICQoJyNtYWluLWNvbnRlbnQgPiAuY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RDb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvYWRpbmdPdmVybGF5IHBkcC11cGRhdGVcIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAkKCcubG9hZGluZ092ZXJsYXkucGRwLXVwZGF0ZScsICRwcm9kdWN0Q29udGFpbmVyKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIGlmICgkcHJvbW90aW9uQmFubmVyLmxlbmd0aCAmJiAkYmFja1RvU2hvcHBwaW5nQnRuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICRiYWNrVG9TaG9wcHBpbmdCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgJG1vZGFsQ2xvc2VCdG4ub24oJ2NsaWNrJywgYmFubmVyVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vbmV3IGxpbmVzIGVuZGVkXG5cblxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcbiAgICB9XG4gICAgdXBkYXRlUHJvZHVjdERldGFpbHNEYXRhKCkge1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScpO1xuICAgICAgICBjb25zdCBmb3JtRGF0YUl0ZW1zID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcblxuICAgICAgICBjb25zdCBwcm9kdWN0RGV0YWlscyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgZm9ybURhdGFJdGVtIG9mIGZvcm1EYXRhSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGZvcm1EYXRhSXRlbTtcblxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwcm9kdWN0X2lkJykge1xuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLnByb2R1Y3RJZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuYW1lID09PSAncXR5W10nKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMucXVhbnRpdHkgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmFtZS5tYXRjaCgvYXR0cmlidXRlLykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0T3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25JZDogTnVtYmVyKG5hbWUubWF0Y2goL1xcZCsvZylbMF0pLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb2R1Y3REZXRhaWxzLm9wdGlvblNlbGVjdGlvbnMgPSBwcm9kdWN0RGV0YWlscz8ub3B0aW9uU2VsZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICA/IFsuLi5wcm9kdWN0RGV0YWlscy5vcHRpb25TZWxlY3Rpb25zLCBwcm9kdWN0T3B0aW9uXVxuICAgICAgICAgICAgICAgICAgICA6IFtwcm9kdWN0T3B0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdvblByb2R1Y3RVcGRhdGUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7IHByb2R1Y3REZXRhaWxzIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgLyogSGFsb3RoZW1lcyovXG4gICAgc29sZFByb2R1Y3QoKSB7XG4gICAgICAgIHZhciBudW1iZXJzUHJvZHVjdFMgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5udW1iZXJfcHJvZHVjdHM7XG4gICAgICAgIHZhciBudW1iZXJzUHJvZHVjdExpc3QgPSBKU09OLnBhcnNlKCdbJyArIG51bWJlcnNQcm9kdWN0UyArICddJyk7XG4gICAgICAgIHZhciBudW1iZXJzUHJvZHVjdEl0ZW0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIG51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGhcbiAgICAgICAgKTtcbiAgICAgICAgdmFyIG51bWJlcnNQcm9kdWN0ID0gbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV07XG5cbiAgICAgICAgdmFyIG51bWJlcnNIb3Vyc1MgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5udW1iZXJfaG91cnM7XG4gICAgICAgIHZhciBudW1iZXJzSG91cnNMaXN0ID0gSlNPTi5wYXJzZSgnWycgKyBudW1iZXJzSG91cnNTICsgJ10nKTtcbiAgICAgICAgdmFyIG51bWJlcnNIb3Vyc0l0ZW0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIG51bWJlcnNIb3Vyc0xpc3QubGVuZ3RoXG4gICAgICAgICk7XG4gICAgICAgIHZhciBudW1iZXJzSG91ciA9IG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc1Byb2R1Y3RJdGVtXTtcblxuICAgICAgICB2YXIgaXRlbVByZHNUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MubnVtYmVyX3Byb2R1Y3RzX3RleHQ7XG4gICAgICAgIHZhciBpdGVtSG91cnNUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MubnVtYmVyX2hvdXJzX3RleHQ7XG5cbiAgICAgICAgJCgnLnNvbGQtcHJvZHVjdCcpLmh0bWwoXG4gICAgICAgICAgICAnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1maXJlLTJcIj48L3VzZT48L3N2Zz4gPHNwYW4+JyArXG4gICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3QgK1xuICAgICAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAgICAgaXRlbVByZHNUZXh0ICtcbiAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgIG51bWJlcnNIb3VyICtcbiAgICAgICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgICAgIGl0ZW1Ib3Vyc1RleHQgK1xuICAgICAgICAgICAgICAgICc8L3NwYW4+J1xuICAgICAgICApO1xuICAgICAgICAkKCcuc29sZC1wcm9kdWN0Jykuc2hvdygpO1xuICAgIH1cblxuICAgIHZpZXdpbmdQcm9kdWN0KCkge1xuICAgICAgICB2YXIgVmlld2VyVGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fdmlld2luZ19wcm9kdWN0X3RleHQ7XG4gICAgICAgIHZhciBudW1iZXJzVmlld2VyX3RleHQgPVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb192aWV3aW5nX3Byb2R1Y3Rfdmlld2VyO1xuICAgICAgICB2YXIgbnVtYmVyc1ZpZXdlckxpc3QgPSBKU09OLnBhcnNlKCdbJyArIG51bWJlcnNWaWV3ZXJfdGV4dCArICddJyk7XG4gICAgICAgIHZhciB0aW1lVmlld2VyID1cbiAgICAgICAgICAgIHBhcnNlSW50KHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fdmlld2luZ19wcm9kdWN0X2NoYW5nZSkgKlxuICAgICAgICAgICAgMTAwMDtcblxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyc1ZpZXdlckl0ZW0gPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiBudW1iZXJzVmlld2VyTGlzdC5sZW5ndGhcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICQoJy52aWV3aW5nLXByb2R1Y3Qgc3BhbicpLmh0bWwoXG4gICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3RbbnVtYmVyc1ZpZXdlckl0ZW1dICsgJyAnICsgVmlld2VyVGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICQoJy52aWV3aW5nLXByb2R1Y3QnKS5zaG93KCk7XG4gICAgICAgIH0sIHRpbWVWaWV3ZXIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBzdHJpbmcgdmFsdWVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4qL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0gPSBmb3JtRGF0YSA9PiB7XG4gICAgY29uc3QgcmVzID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICB0cnkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVzLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80OTY3Mjk5Mi9hamF4LXJlcXVlc3QtZmFpbHMtd2hlbi1zZW5kaW5nLWZvcm1kYXRhLWluY2x1ZGluZy1lbXB0eS1maWxlLWlucHV0LWluLXNhZmFyaVxuICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gKiBAcmV0dXJucyBGb3JtRGF0YSBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSA9IGZvcm1EYXRhID0+IHtcbiAgICBjb25zdCByZXMgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEodmFsIGluc3RhbmNlb2YgRmlsZSkgfHwgdmFsLm5hbWUgfHwgdmFsLnNpemUpIHtcbiAgICAgICAgICAgICAgICByZXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiByZW1vdmVzIGVtcHR5IHN0cmluZyB2YWx1ZXMgYW5kIGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm1EYXRhXG4gKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVGb3JtRGF0YSA9IGZvcm1EYXRhID0+IGZpbHRlckVtcHR5VmFsdWVzRnJvbUZvcm0oZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSk7XG4iLCJpbXBvcnQgeyBpc0Jyb3dzZXJJRSB9IGZyb20gJy4vaWUtaGVscGVycyc7XG5cbmNvbnN0IGJhbm5lclV0aWxzID0ge1xuICAgIGRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50OiAocHJvZHVjdEF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZSB8fCBpc0Jyb3dzZXJJRSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBwcmljZSA9IDA7XG5cbiAgICAgICAgaWYgKCFwcm9kdWN0QXR0cmlidXRlcy5wcmljZS5wcmljZV9yYW5nZSkge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRob3V0X3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgcHJpY2UgPSBwcm9kdWN0QXR0cmlidXRlcy5wcmljZS53aXRoX3RheC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgnYmlnY29tbWVyY2UucHJvZHVjdHByaWNlY2hhbmdlJywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgYW1vdW50OiBwcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJhbm5lclV0aWxzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHBhcnNlcyBIVE1MIGVudGl0aWVzIGluIHN0cmluZ3NcbiAqIEBwYXJhbSBzdHI6IFN0cmluZ1xuICogQHJldHVybnMgU3RyaW5nXG4qL1xuZXhwb3J0IGNvbnN0IHNhZmVTdHJpbmcgPSAoc3RyKSA9PiB7XG4gICAgY29uc3QgZCA9IG5ldyBET01QYXJzZXIoKTtcbiAgICByZXR1cm4gZC5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJykuYm9keS50ZXh0Q29udGVudDtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0LCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50KXtcclxuICAgIHZhciBwcm9kdWN0T3B0aW9uID0gJCgnLnByb2R1Y3Qtb3B0aW9ucycpO1xyXG5cclxuICAgICQoJ2RvY3VtZW50JykucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIFx0aW5pdFByb2R1Y3RNb3JldmlldygpO1xyXG5cclxuICAgIFx0JHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERvIG5vdCB0cmlnZ2VyIGFuIGFqYXggcmVxdWVzdCBpZiBpdCdzIGEgZmlsZSBvciBpZiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcclxuICAgICAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnIHx8IHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRQcm9kdWN0TW9yZXZpZXcoJGNoYW5nZWRPcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFByb2R1Y3RNb3JldmlldyAoKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IGNvbnRleHQudGhlbWVTZXR0aW5ncy52YXJpYW50X25hbWUuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgIHZhciBsYWJlbCA9IHByb2R1Y3RPcHRpb24uZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpLmZpbmQoJ2xhYmVsLmZvcm0tbGFiZWwtLWlubGluZVNtYWxsJyk7XHJcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICcnLCBjbGFzc04gPSAnLmZpbHRlci0nO1xyXG5cclxuICAgICAgICBsYWJlbC5lYWNoKGZ1bmN0aW9uKGksIGVsKXtcclxuICAgICAgICAgICAgdmFyIGxhc3RFbGVtZW50ID0gbGFiZWwubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgb2JqID0gJChlbCkucGFyZW50KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCBvYmogIT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgICAgICBpZiggb2JqLmRhdGEoJ3Byb2R1Y3QtYXR0cmlidXRlJykgPT0gXCJzZXQtc2VsZWN0XCIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0Q2hlY2tlZCA9IG9iai5maW5kKCc6c2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0Q2hlY2tlZCA9IG9iai5maW5kKCc6Y2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiggaW5wdXRDaGVja2VkICE9IHVuZGVmaW5lZCAmJiBpbnB1dENoZWNrZWQgIT0gJycgJiYgaW5wdXRDaGVja2VkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbHNOYW1lID0gaW5wdXRDaGVja2VkLmRhdGEoJ2ZpbHRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xzTmFtZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzTmFtZSA9IGNsc05hbWUucmVwbGFjZSgnLmZpbHRlci0nLCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOICs9IGNsc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGFzc04nLGNsYXNzTik7XHJcblxyXG4gICAgICAgIGlmKCBvYmogIT0gdW5kZWZpbmVkICl7XHJcbiAgICAgICAgICAgIGlmKGNsYXNzTiAhPT0gJy5maWx0ZXItJykge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY2xhc3NOO1xyXG4gICAgICAgICAgICAgICAgaWYoJChjbGFzc05hbWUsJy5wcm9kdWN0Vmlldy10aXRsZScpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRpdGxlIHNwYW4nKS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10aXRsZSAudGV4dCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoY2xhc3NOYW1lLCcucHJvZHVjdFZpZXctdGl0bGUnKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoJChjbGFzc05hbWUsJyN0YWItZGVzY3JpcHRpb24nKS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWItZGVzY3JpcHRpb24nKS5hZGRDbGFzcygnaXMtdmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyN0YWItZGVzY3JpcHRpb24gPiBkaXYgPiBkaXYnKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoY2xhc3NOYW1lLCcjdGFiLWRlc2NyaXB0aW9uJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBib21iIGVkaXRlZCBjdXN0b20gXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IC5jdXN0b20tdmFyaWFudCcpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IGRpdicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IC5jdXN0b20tdmFyaWFudCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbiA+IGRpdiA+IDpub3QoW2NsYXNzKj1cImZpbHRlci1cIl0pJykuYWRkQ2xhc3MoJ2N1c3RvbS12YXJpYW50Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjdGFiLWRlc2NyaXB0aW9uID4gZGl2ID4gZGl2JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyBmcm9tICcuL2hhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgY29uc3QgcmVsYXRlX3RhYiA9IFwiI3RhYi1yZWxhdGVkXCI7XHJcbiAgICBjb25zdCAkYnVuZGxlID0gJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzJyk7XHJcblxyXG4gICAgc2hvd0J1bmRsZSgpO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby10b2dnbGUtb3B0aW9ucycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5ub3QoJCh0aGlzKSkucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5ub3QoJCh0aGlzKS5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICBpZiAoISQodGhpcykubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby1vcHRpb24tY2xvc2UnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAkKCcuaGFsby10b2dnbGUtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmICgkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5sZW5ndGggPT09IDApKXtcclxuICAgICAgICAgICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLWZvY3VzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5oYWxvLWRldGFpbC1jaGVja2JveCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKS5yZXBsYWNlKCdmYnRfcHJvZHVjdCcsICcnKTtcclxuXHJcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2hhbG8tYWRkQWxsJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKSk7XHJcbiAgICAgICAgdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgICAkKCcuaGFsby1kZXRhaWwtY2hlY2tib3gnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoJCh2YWwpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJQcm8ucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNoZWNrID0gY2hlY2tQcm9kdWN0KCRmb3JtLCBhcnJQcm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoZWNrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5sb2FkaW5nT3ZlcmxheScpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoJGZvcm0sIDAsIGFyclBybyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLic7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93QnVuZGxlKCkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW06ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1idW5kbGUtcHJvZHVjdHMtdG1wJyxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiAnaGFsb3RoZW1lcy9wcm9kdWN0L2hhbG8tYnVuZGxlLXByb2R1Y3RzLW9wdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHByb2RCdW5kbGVJZCA9IFtdO1xyXG5cclxuICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKS5yZW1vdmVDbGFzcygnaGFsby1ibG9jay1kaXNhYmxlJyk7XHJcblxyXG4gICAgICAgIGZpcnN0SXRlbSgpO1xyXG5cclxuICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmJ1bmRsZS1wcm9kdWN0LXJpZ2h0JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaGFsby1wcm9kdWN0LXRvdGFsXCI+PGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+VG90YWwgcHJpY2U6PC9zcGFuPjxzcGFuIGNsYXNzPVwicHJpY2VcIj48L3NwYW4+PC9kaXY+PGEgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGhhbG8tcHJvZHVjdC10b3RhbC1idXR0b25cIiBpZD1cImhhbG8tYWRkQWxsXCI+QWRkIEFsbCBUbyBDYXJ0PC9hPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAkLmVhY2goY29udGV4dC5wcm9kdWN0Q3VzdG9tRmllbGRzLCBmdW5jdGlvbihpbmRleCwgb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSAnX19idW5kbGVpZCcpIHtcclxuICAgICAgICAgICAgICAgIHByb2RCdW5kbGVJZCA9IEpTT04ucGFyc2UoJ1snK29iai52YWx1ZSsnXScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICgkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMnKS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtID0gMDtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICQocmVsYXRlX3RhYiArICcgLmNhcmQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtpOmksIGRhdGE6IFwiXCJ9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJCh2YWwpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtKys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gJChyZWxhdGVfdGFiICsgJyAuY2FyZCcpLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKCQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cycpLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IDA7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW107XHJcblxyXG4gICAgICAgICAgICAkLmVhY2gocHJvZEJ1bmRsZUlkLCBmdW5jdGlvbihpLCB2YWwpe1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtpOmksIGRhdGE6IFwiXCJ9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gcHJvZEJ1bmRsZUlkW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaSA9PSBpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG51bSA9PSBwcm9kQnVuZGxlSWQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaXJzdEl0ZW0oKXtcclxuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmhhbG8tcHJvZHVjdC1saXN0IC5oYWxvLXByb2R1Y3QtaXRlbTpmaXJzdC1jaGlsZCcpLFxyXG4gICAgICAgICAgICBwSWQgPSBmaXJzdEl0ZW0uZGF0YSgncHJvZHVjdC1pZCcpLFxyXG4gICAgICAgICAgICAkZm9ybSA9IGZpcnN0SXRlbS5maW5kKCdmb3JtJyksXHJcbiAgICAgICAgICAgIGhhc09wdGlvbnMgPSAkZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGhhc0RlZmF1bHRPcHRpb25zID0gJGZvcm0uZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc0RlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0xpc3QobGlzdCl7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gZWxlbWVudC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5oYWxvLXByb2R1Y3QtbGlzdCcpLmFwcGVuZChyZXNwb25zZS5pdGVtKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcHRpb25zLnRyaW0oKSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJChyZXNwb25zZS5pdGVtKS5kYXRhKCdwcm9kdWN0LWlkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoJyNoYWxvLWJ1bmRsZS1wcm9kdWN0cyAuaGFsby1wcm9kdWN0LWxpc3QgLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwSWQgKyAnXCJdIGZvcm0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQocmVzcG9uc2Uub3B0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkKHJlc3BvbnNlLm9wdGlvbnMpLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3RWYXJpYW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvZHVjdE9wdGlvbnMoKTtcclxuICAgICAgICBzaG93U2xpY2tTbGlkZXIoKTtcclxuICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1NsaWNrU2xpZGVyKCl7XHJcbiAgICAgICAgJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIC5oYWxvLXByb2R1Y3QtbGlzdCcpLnNsaWNrKHtcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgbmV4dEFycm93OiBcIjxkaXYgY2xhc3M9J3NsaWNrLW5leHQgc2xpY2stYXJyb3cnPm5leHQ8L2Rpdj5cIixcclxuICAgICAgICAgICAgcHJldkFycm93OiBcIjxkaXYgY2xhc3M9J3NsaWNrLXByZXYgc2xpY2stYXJyb3cnPnByZXY8L2Rpdj5cIixcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE0NDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjQwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1Byb2R1Y3QoZm9ybSwgYXJyUHJvKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyclByby5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXTtcclxuICAgICAgICAgICAgdmFyICRmb3JtID0gJChmb3JtW2tdKTtcclxuICAgICAgICAgICAgaWYgKCRmb3JtLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkZm9ybSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0JlZm9yZUFkZCgkYXR0cmlidXRlcykge1xyXG4gICAgICAgIHZhciBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLnByb3AoJ3JlcXVpcmVkJykpIHtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge30gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGF0dCA9IFwiXCI7XHJcbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6cmFkaW8sIGlucHV0OmNoZWNrYm94JykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGF0dCAhPSAkKHRoaXMpLmF0dHIoXCJuYW1lXCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXR0ID0gJCh0aGlzKS5hdHRyKFwibmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5wcm9wKCdyZXF1aXJlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwidHlwZVwiKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApIHtcclxuICAgICAgICBpZiAoaSA+PSBhcnJQLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL2NhcnQucGhwJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBrID0gYXJyUFtpXTtcclxuICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm1ba10pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTdHJpcCB0aGUgSFRNTCBmcm9tIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBhbGVydCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgIGlmIChpID49IGFyclAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaGFsby1idW5kbGUtcHJvZHVjdHMgLmxvYWRpbmdPdmVybGF5JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FydENvbnRlbnQocmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1iYWNrZ3JvdW5kJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjb21tb24vY2FydC1wcmV2aWV3J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRpbmdDbGFzcyA9ICdpcy1sb2FkaW5nJztcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgJGNhcnREcm9wZG93biA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRjYXJ0TG9hZGluZyA9ICQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheVwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAgICAgICAgICRib2R5LnRvZ2dsZUNsYXNzKCdoYWxvLW9wZW4tc2lkZS1jYXJ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGNhcnREcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nQ2xhc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgLmh0bWwoJGNhcnRMb2FkaW5nKTtcclxuICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRjYXJ0RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQocmVzcG9uc2UpLmZpbmQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJykuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcodGhpcy5jb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcclxuICAgICAgICBjb25zdCBsb2FkaW5nQ2xhc3MgPSAnaXMtbG9hZGluZyc7XHJcbiAgICAgICAgY29uc3QgJGNhcnREcm9wZG93biA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24nKTtcclxuICAgICAgICBjb25zdCAkY2FydExvYWRpbmcgPSAkKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXlcIj48L2Rpdj4nKTtcclxuICAgICAgICBjb25zdCAkc2lkZUNhcnRCbG9jayA9ICQoJyNzaWRlQmxvY2tfY2FydCcpO1xyXG5cclxuICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnb3BlbkNhcnRTaWRlYmFyIGlzLXNpZGUtYmxvY2snKTtcclxuICAgICAgICAkc2lkZUNhcnRCbG9jay50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xyXG5cclxuICAgICAgICAkY2FydERyb3Bkb3duXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nQ2xhc3MpXHJcbiAgICAgICAgICAgIC5odG1sKCRjYXJ0TG9hZGluZyk7XHJcbiAgICAgICAgJGNhcnRMb2FkaW5nXHJcbiAgICAgICAgICAgIC5zaG93KCk7XHJcblxyXG4gICAgICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJGNhcnREcm9wZG93blxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcclxuICAgICAgICAgICAgICAgIC5odG1sKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgJGNhcnRMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKHJlc3BvbnNlKS5maW5kKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcblxyXG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF1YW50aXR5KTtcclxuICAgICAgICAgICAgaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyhjb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcclxuICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY29tbW9uL2NhcnQtcHJldmlldydcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIG9uQ29tcGxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvdGFsUHJpY2UoKSB7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gMCxcclxuICAgICAgICAgICAgcG9zID0gMCxcclxuICAgICAgICAgICAgc3ltYm9sID0gXCIkXCI7XHJcblxyXG4gICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbS5pc0NoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uKGksIHZhbCkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVuY3ksXHJcbiAgICAgICAgICAgICAgICBwcmljZSwgcztcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRoVGF4JykubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5ID0gJCh2YWwpLmZpbmQoJy5wcmljZS1zZWN0aW9uIC5wcmljZS5wcmljZS0td2l0aFRheCcpLnRleHQoKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3kgPSAkKHZhbCkuZmluZCgnLnByaWNlLXNlY3Rpb24gLnByaWNlLnByaWNlLS13aXRob3V0VGF4JykudGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmljZSA9IHBhcnNlRmxvYXQoY3VycmVuY3kucmVwbGFjZSgvW14wLTkuLV0rL2csIFwiXCIpKTtcclxuXHJcbiAgICAgICAgICAgIHMgPSBjdXJyZW5jeS5yZXBsYWNlKHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KHMucmVwbGFjZSgvW14wLTkuLV0rL2csIFwiXCIpKSkpe1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5LmluZGV4T2Yoc3ltYm9sKSAhPSAtMSl7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjdXJyZW5jeS5pbmRleE9mKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcmljZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG90YWwgPSBwYXJzZUZsb2F0KHRvdGFsKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHBvcyA9PSAwKXtcclxuICAgICAgICAgICAgdG90YWwgPSBzeW1ib2wgKyB0b3RhbDtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuaGFsby1wcm9kdWN0LXRvdGFsIC5wcmljZScpLmh0bWwodG90YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zKCkge1xyXG4gICAgICAgIHRvdGFsUHJpY2UoKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJGJ1bmRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnI2hhbG8tYnVuZGxlLXByb2R1Y3RzIGZvcm0gW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdWN0VmFyaWFudChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UHJvZHVjdFZhcmlhbnQoKSB7XHJcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KHNlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChsYWJlbC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcclxuXHJcbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ3R5cGUnKSA9PT0gJ2ZpbGUnIHx8IHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCdpZCcpID09PSAnZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xyXG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcclxuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xyXG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgICRzZWxlY3RbMF0uc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcclxuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIGRhdGEpIHtcclxuICAgICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRhdGEuaW1hZ2UpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlLmdldFNyYyhcclxuICAgICAgICAgICAgICAgIGRhdGEuaW1hZ2UuZGF0YSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0Z2FsbGVyeV9zaXplXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXHJcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cignZGF0YS1zcmNzZXQnKTtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAnc3Jjc2V0JzogbWFpbkltYWdlVXJsLFxyXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3Jjc2V0JzogJCh0aGlzKS5hdHRyKCdzcmNzZXQnKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoJHNjb3BlLCBkYXRhLCBjb250ZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IGdldFZpZXdNb2RlbCgkc2NvcGUpO1xyXG5cclxuICAgICAgICBzaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG5cclxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xyXG4gICAgICAgICAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XHJcblxyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKCRzY29wZSwgZGF0YSkge1xyXG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG4gICAgICAgICAgICAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XHJcbiAgICAgICAgICAgICQoJyNmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykucmVtb3ZlQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAkKCcjZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICBzdG9jazoge1xyXG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkc2t1OiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nKSxcclxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXHJcbiAgICAgICAgICAgICRtcG46ICQoJ1tkYXRhLXByb2R1Y3QtbXBuXScpLFxyXG4gICAgICAgICAgICBxdWFudGl0eToge1xyXG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVzc2FnZUJveChtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xyXG5cclxuICAgICAgICBpZiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XHJcbiAgICAgICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQsICRnYWxsZXJ5KSB7XHJcbiAgICB2YXIgY29udGFpbmVyX2RpdiA9ICRnYWxsZXJ5LmF0dHIoJ2NsYXNzJyk7XHJcbiAgICAgICAgY29udGFpbmVyX2RpdiA9IGNvbnRhaW5lcl9kaXYucmVwbGFjZSgnbW9kYWwtYm9keScsICcnKS5yZXBsYWNlKCcgJywgJycpO1xyXG4gICAgXHJcbiAgICBqUXVlcnkuZm4udkdhbGxlcnkgPSBmdW5jdGlvbihvcHRpb25zKXtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGpRdWVyeSh0aGlzKTtcclxuICAgICAgICB2YXIgZ2FsbGVyeUlEID0gXCIjXCIgKyBlbGVtZW50LmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgdmFyIGJyYW5kID0gJCgnLnByb2R1Y3RWaWV3LWRldGFpbHMgLnByb2R1Y3RWaWV3LWJyYW5kIGEnKS50ZXh0KCksXHJcbiAgICAgICAgICAgIHRpdGxlID0gJCgnLnByb2R1Y3RWaWV3LWRldGFpbHMgLnByb2R1Y3RWaWV3LXByb2R1Y3QgLnByb2R1Y3RWaWV3LXRpdGxlJykudGV4dCgpO1xyXG4gICAgICAgIGlmICgkKCcjdmlkZW8tZ2FsbGVyeS1wYy1wb3B1cCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcjdmlkZW8tZ2FsbGVyeS1wYy1wb3B1cCAubW9kYWwtaGVhZGVyLXRpdGxlJykuaHRtbCgnPHN0cm9uZz4nICticmFuZCsgJzwvc3Ryb25nPicgKyB0aXRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCFvcHRpb25zKVxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIHZhciBiPW5ldyBoYWxvR2FsbGVyeSgpO1xyXG4gICAgICAgIGIuaW5pdChlbGVtZW50ICwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nLCAkZ2FsbGVyeSkuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBiLmFkZCh7J3RodW1ibmFpbCc6ICQodGhpcykuZmluZCgnaW1nJykuYXR0cignc3JjJykgLCd1cmwnOiAkKHRoaXMpLmF0dHIoJ2RhdGEtaW1hZ2UtZ2FsbGVyeS16b29tLWltYWdlLXVybCcpfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXZpZGVvLWl0ZW1dJywgJGdhbGxlcnkpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYi5hZGQoeyd0aHVtYm5haWwnOiAnLy9pLnl0aW1nLmNvbS92aS8nICsgJCh0aGlzKS5hdHRyKCdkYXRhLXZpZGVvLWlkJykgKyAnL2RlZmF1bHQuanBnJywnY29udGVudCc6XCI8aWZyYW1lIGNsYXNzPSd5b3V0dWJlLWlmcmFtZScgd2lkdGg9JzEwMCUnICBzcmM9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyAkKHRoaXMpLmF0dHIoJ2RhdGEtdmlkZW8taWQnKSArXCI/ZW5hYmxlanNhcGk9MScgZnJhbWVib3JkZXI9JzAnIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cIn0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBiLmFkZFBvcHZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYWxvR2FsbGVyeSgpIHtcclxuICAgICAgICB2YXIgZ19vYmpHYWxsZXJ5O1xyXG4gICAgICAgIHZhciBnX29wdGlvbnMgPSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbihnYWxsZXJ5LCBjdXN0b21PcHRpb25zKXtcclxuICAgICAgICAgICAgZ19vYmpHYWxsZXJ5ID0galF1ZXJ5KGdhbGxlcnkpO1xyXG4gICAgICAgICAgICBnX29wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKGdfb3B0aW9ucywgY3VzdG9tT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5yb3VuZD1bXTtcclxuICAgICAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKG9wcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKG9wcy51cmwgfHwgb3BzLmNvbnRlbnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBkZnM9eyd0aHVtYm5haWwnOicnLCd1cmwnOicnLCd0eXBlJzonJywnY29udGVudCc6JycsJ3cnOjAsJ2hlaWdodCc6MCwnbG9hZGVkJzpmYWxzZX07XHJcbiAgICAgICAgICAgICAgICBvcHM9JC5leHRlbmQoe30sZGZzLG9wcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYob3BzLmNvbnRlbnQpb3BzLnVfY29udGVudD1vcHMuY29udGVudDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighb3BzLnR5cGUpb3BzLnR5cGU9J2ltYWdlJztcclxuICAgICAgICAgICAgICAgICAgICBpZihvcHMudHlwZT0naW1hZ2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BzLnVfY29udGVudD1cIjxpbWcgc3JjPSdcIitvcHMudXJsK1wiJz5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIW9wcy50aHVtYm5haWwpXHJcbiAgICAgICAgICAgICAgICAgICAgb3BzLnRodW1ibmFpbD1vcHMudXJsO1xyXG4gICAgICAgICAgICAgICAgaWYob3BzLnRodW1ibmFpbClcclxuICAgICAgICAgICAgICAgICAgICBvcHMudV90aHVtYm5haWw9XCI8aW1nIHNyYz0nXCIrb3BzLnRodW1ibmFpbCtcIic+XCI7XHJcbiAgICAgICAgICAgICAgICBlbHNlIG9wcy51X3RodW1ibmFpbD1vcHMudV9jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgaWYoIW9wcy51X3RodW1ibmFpbClcclxuICAgICAgICAgICAgICAgICAgICBvcHMudV90aHVtYm5haWw9XCI8ZGl2IGNsYXNzPSd0aHVtYm5haWwnPjwvZGl2PlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKG9wcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXJvdW5kPWZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmQ9W107XHJcbiAgICAgICAgICAgIHZhciBwcDtcclxuICAgICAgICAgICAgdmFyIGM9dGhpcy5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7aTxjO2krKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHA9eyduZXh0JzppKzEsJ3ByZXYnOmktMSwnY3VycmVudCc6aX07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kW2ldPXBwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ldLnN0dD1pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRbMF0ucHJldj1jLTE7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRbYy0xXS5uZXh0PTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkUG9wdmlldyA9IGZ1bmN0aW9uKG9wcykge1xyXG4gICAgICAgICAgICB0aGlzLnJlcm91bmQoKTtcclxuICAgICAgICAgICAgdmFyIGRmcz17J3dpZHRoJzonMTAwJScsJ2hlaWdodCc6JzEwMCUnLCd2aWV3X3NsaWRlJzp0cnVlLGN1cjowLCd0aW1lJzo0MDAsJ2NlbnRlcic6dHJ1ZX07XHJcbiAgICAgICAgICAgIG9wcz0kLmV4dGVuZCh7fSxkZnMsb3BzKTtcclxuICAgICAgICAgICAgb3BzLm1hcD17J2RpJzp7fSwndmUnOnt9LCdyb3VuZCc6e319O29wcy5zdHQ9MDtcclxuICAgICAgICAgICAgdmFyIGN0aGlzPXRoaXM7XHJcbiAgICAgICAgICAgIHNldCgpO1xyXG4gICAgICAgICAgICBiaW5kRXZlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldCgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKCQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLmxlbmd0aCA+IDApICQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHM9XCI8ZGl2IGNsYXNzPSdcIitjb250YWluZXJfZGl2K1wiIHZnYWxsZXJ5X3BvcHVwJz48ZGl2IGNsYXNzPSdhY29udGVudCc+PGRpdiBjbGFzcz0nYmNvbnRlbnQnPjwvZGl2PjwvZGl2PjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiggZ19vYmpHYWxsZXJ5Lmhhc0NsYXNzKGNvbnRhaW5lcl9kaXYpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgZ19vYmpHYWxsZXJ5Lmh0bWwocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGdfb2JqR2FsbGVyeS5hcHBlbmQocyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnX29iakdhbGxlcnkuZmluZCgnLnZnYWxsZXJ5X3BvcHVwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgZ19vYmpHYWxsZXJ5LmZpbmQoJy4nK2NvbnRhaW5lcl9kaXYpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb3BzLm9iPSQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpO1xyXG4gICAgICAgICAgICAgICAgb3BzLm9iX2Njb250ZW50PSQoJz4uYWNvbnRlbnQnLG9wcy5vYik7XHJcbiAgICAgICAgICAgICAgICBvcHMub2JfY29udGVudD0kKCc+LmFjb250ZW50Pi5iY29udGVudCcsb3BzLm9iKTtcclxuICAgICAgICAgICAgICAgICQob3BzLm9iX2Njb250ZW50KS5jc3Moeyd3aWR0aCc6b3BzLndpZHRoLCdoZWlnaHQnOm9wcy5oZWlnaHR9KTtcclxuICAgICAgICAgICAgICAgIGlmKG9wcy52aWV3X3NsaWRlKSBkcmF3X3NsaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF2aWV3KHBwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8bGk+PHNwYW4gY2xhc3M9J3RodW1iYnNkJyBkYXRhPSdcIitwcC5zdHQrXCInPlwiK3BwLnVfdGh1bWJuYWlsK1wiPC9zcGFuPjwvbGk+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gZHJhd19zbGlkZSgpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBzMT0nJyxzMj0nJztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGk9MDtpPGN0aGlzLmRhdGEubGVuZ3RoO2krKylcclxuICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY3RoaXMuZGF0YVtpXS50eXBlKVxyXG4gICAgICAgICAgICAgICAgICAgIHMxKz1hdmlldyhjdGhpcy5kYXRhW2ldKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBzMis9YXZpZXcoY3RoaXMuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihzMSlzMT1cIjxkaXYgY2xhc3M9J2dhbGxlcnktdGh1bWJuYWlsIGdhbGxlcnktdGh1bWJuYWlsLTEnPjxoMj48L2gyPjx1bD5cIitzMStcIjwvdWw+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICBpZihzMilzMj1cIjxkaXYgY2xhc3M9J2dhbGxlcnktdGh1bWJuYWlsIGdhbGxlcnktdGh1bWJuYWlsLTInPjxoMj48L2gyPjx1bD5cIitzMitcIjwvdWw+PC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcz1cIjxkaXYgY2xhc3M9J2NvbnRlbnRfc2xpZGUnPjxkaXYgY2xhc3M9J2JveDEnPjxkaXYgY2xhc3M9J2J0bi1hcnJvdyBidG4tcHJldic+PC9kaXY+PGRpdiBjbGFzcz0nZ2FsbGVyeVZpZXcnPjwvZGl2PjxkaXYgY2xhc3M9J2J0bi1hcnJvdyBidG4tbmV4dCc+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0nYm94Mic+XCIrczErczIrXCI8L2Rpdj48L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICQob3BzLm9iX2NvbnRlbnQpLmFwcGVuZChzKTtcclxuICAgICAgICAgICAgICAgIG9wcy5vYl9zY3Q9JCgnLmJveDEgPiAuZ2FsbGVyeVZpZXcnKTtcclxuICAgICAgICAgICAgICAgIG9wcy5vYl9lPSQoJy50aHVtYmJzZCcsb3BzLm9iKTtcclxuICAgICAgICAgICAgICAgIHZhciBpPS0xO1xyXG4gICAgICAgICAgICAgICAgJC5lYWNoKG9wcy5vYl9lLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2PSQodGhpcykuYXR0cignZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5tYXAuZGlbaV09djtcclxuICAgICAgICAgICAgICAgICAgICBvcHMubWFwLnZlW3ZdPWk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGFyKG9wcy5jdXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFyKG51bSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYobnVtPT0tMSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKG9wcy5vYl9zY3QpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5jdXI9bnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5jdXJyZW50PW9wcy5tYXAudmVbb3BzLmN1cl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQob3BzLm9iX2UpLnJlbW92ZUNsYXNzKCd0aHVtYi12aWRlbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQob3BzLm9iX2UpLmVxKG9wcy5tYXAudmVbb3BzLmN1cl0pLmFkZENsYXNzKCd0aHVtYi12aWRlbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICQob3BzLm9iX3NjdCkuYW5pbWF0ZSh7J29wYWNpdHknOjB9LG9wcy50aW1lLzIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChvcHMub2Jfc2N0KS5odG1sKGN0aGlzLmRhdGFbbnVtXS51X2NvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKG9wcy5vYl9zY3QpLmFuaW1hdGUoeydvcGFjaXR5JzoxfSxvcHMudGltZS8yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyAkKG9wcy5vYl9zY3QpLnRyaWdnZXIoJ3pvb20uZGVzdHJveScpLnpvb20oeyB0b3VjaDogZmFsc2UsIG9uWm9vbUluOiB0cnVlLCBvblpvb21PdXQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGJpbmRFdmVudCgpXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nLCAkZ2FsbGVyeSkuYmluZCgnY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICBhciggb3BzLmN1ciApO1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5iaW5kKCdob3ZlcicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBudW0gPSAkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LWl0ZW1dJywgJGdhbGxlcnkpLmluZGV4KCB0aGlzICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobnVtIT0tMSlcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcy5jdXI9bnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJfZGl2ID0gJGdhbGxlcnkuYXR0cignY2xhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfZGl2ID0gY29udGFpbmVyX2Rpdi5yZXBsYWNlKCdtb2RhbC1ib2R5JywgJycpLnJlcGxhY2UoJyAnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnZnYWxsZXJ5X3BvcHVwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBhciggJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5pbmRleCggdGhpcyApICk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS12aWRlby1pY29uXScsICRnYWxsZXJ5KS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJfZGl2ID0gJGdhbGxlcnkuYXR0cignY2xhc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJfZGl2ID0gY29udGFpbmVyX2Rpdi5yZXBsYWNlKCdtb2RhbC1ib2R5JywgJycpLnJlcGxhY2UoJyAnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnZnYWxsZXJ5X3BvcHVwJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy4nK2NvbnRhaW5lcl9kaXYrJy52Z2FsbGVyeV9wb3B1cCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBhciggJCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScsICRnYWxsZXJ5KS5sZW5ndGggKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJy5idG4tbmV4dCcsb3BzLm9iKS5iaW5kKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3BzLmN1cnJlbnQgPiBvcHMub2IubGVuZ3RoKSBvcHMuY3VycmVudCA9IG9wcy5jdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHM9Y3RoaXMucm91bmRbb3BzLmN1cnJlbnRdLm5leHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIob3BzLm1hcC5kaVtzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQoJy5idG4tcHJldicsb3BzLm9iKS5iaW5kKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3BzLmN1cnJlbnQgPiBvcHMub2IubGVuZ3RoKSBvcHMuY3VycmVudCA9IG9wcy5jdXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHM9Y3RoaXMucm91bmRbb3BzLmN1cnJlbnRdLnByZXY7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIob3BzLm1hcC5kaVtzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICQob3BzLm9iX2UpLmJpbmQoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbng9JCh0aGlzKS5hdHRyKCdkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXIoaW54KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAkKFwiI2dhbGxlcnlcIikudkdhbGxlcnkoe1xyXG4gICAgICAgICAgICBncmlkcGFuZWxfdmVydGljYWxfc2Nyb2xsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xyXG4gICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3ByZXZfbmV4dF9wcm9kdWN0ID09IHRydWUpIHtcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiAxMDI0KSB7XHJcbiAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cycpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0SWQgPSBwcm9kdWN0SWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZJZCA9IHByb2R1Y3RJZCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dExpbmssIHByZXZMaW5rO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0ICRwcm9kV3JhcCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1tb2RhbCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzIC5uZXh0LXByZXYtaWNvbnMnKSxcclxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1wcmV2LW5leHQtcHJvZHVjdC10cG0nXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihuZXh0SWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKG5leHRJZCwgJG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVycil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dExpbmsgPSAkKHJlc3BvbnNlKS5maW5kKCcuY2FyZC1saW5rJykuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dExpbmsgIT0gdW5kZWZpbmVkICYmIG5leHRMaW5rICE9ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLmF0dHIoJ2hyZWYnLCBuZXh0TGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocHJldklkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcmV2SWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2TGluayA9ICQocmVzcG9uc2UpLmZpbmQoJy5jYXJkLWxpbmsnKS5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwcmV2TGluayAhPSB1bmRlZmluZWQgJiYgcHJldkxpbmsgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykuYXR0cignaHJlZicsIHByZXZMaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkcHJvZEljb25zLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5leHQtaWNvbicsICRwcm9kSWNvbnMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5wcmV2LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFkZENsYXNzKCdpcy1zaG93Jyk7ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRwcm9kV3JhcC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcbiAgICBpZiAoJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCk7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVG9wKXtcclxuICAgICAgICAgICAgICAgIGlmKCEkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0SGVhZGVyID0gJCgnLmhlYWRlcicpLmhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCQoJy5oZWFkZXInKS5oYXNDbGFzcygnaXMtc3RpY2t5JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5jc3MoJ3RvcCcsIGhlaWdodEhlYWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5jc3MoJ3RvcCcsICcwcHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJyNzdGlja3lfYWRkdG9jYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XHJcbiAgICAgICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5jaG9vc2Vfb3B0aW9uc19hZGQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcucG9wLXVwLW9wdGlvbicpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5wb3AtdXAtb3B0aW9uIC5jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5jaG9vc2Vfb3B0aW9uc19hZGQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGxUb3Ape1xyXG4gICAgICAgICAgICAgICAgaWYoISQoJyNzdGlja3lfYWRkdG9jYXJ0JykuaGFzQ2xhc3MoJ3Nob3dfc3RpY2t5Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHRIZWFkZXIgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N0aWNreV9hZGR0b2NhcnQnKS5hZGRDbGFzcygnc2hvd19zdGlja3knKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoJCgnLmhlYWRlcicpLmhhc0NsYXNzKCdpcy1zdGlja3knKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmNzcygndG9wJywgaGVpZ2h0SGVhZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAkKCcjc3RpY2t5X2FkZHRvY2FydCcpLmNzcygndG9wJywgJzBweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbiBpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuIGltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuIGltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuIGltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuIGltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuIGltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuIGltcG9ydCBtb2RhbEZhY3RvcnksIHsgbW9kYWxUeXBlcyB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbiBpbXBvcnQgaGFsb0J1bmRsZVByb2R1Y3RzIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQnVuZGxlUHJvZHVjdHMnO1xuIGltcG9ydCBoYWxvU3RpY2t5QWRkVG9DYXJ0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0JztcbiBpbXBvcnQgaGFsb1ByZXZOZXh0UHJvZHVjdCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1ByZXZOZXh0UHJvZHVjdCc7XG4gXG4gY29uc3QgeyBXUklURV9SRVZJRVcgfSA9IG1vZGFsVHlwZXM7XG4gXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgICB9XG4gXG4gICAgIG9uUmVhZHkoKSB7XG4gICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICAgY29uc3QgdG9rZW4gPSBjb250ZXh0LnRva2VuO1xuICAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSAmJiB0eXBlb2Ygd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIGxldCB2YWxpZGF0b3I7XG4gXG4gICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcbiBcbiAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuIFxuICAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG4gXG4gICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuICAgICAgICAgdGhpcy5obEdsb2JhbCgpO1xuICAgICAgICAgaGFsb1N0aWNreUFkZFRvQ2FydCgpO1xuICAgICAgICAgdGhpcy5oaWRlT3B0aW9uTm9QdXJjaGFzYWJsZSgpO1xuXG4gICAgICAgICBpZiAodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19idW5kbGVfcHJvZHVjdHNfZW5hYmxlID09IHRydWUpIHtcbiAgICAgICAgICAgICBoYWxvQnVuZGxlUHJvZHVjdHModGhpcy5jb250ZXh0KTsgICBcbiAgICAgICAgIH1cbiAgICAgICAgIGhhbG9QcmV2TmV4dFByb2R1Y3QodGhpcy5jb250ZXh0KTtcbiBcbiAgICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuIFxuICAgICAgICAgaWYgKCRyZXZpZXdGb3JtLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuIFxuICAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG4gXG4gICAgICAgICAkKGRvY3VtZW50KS5vbignb3BlbmVkLmZuZHRuLnJldmVhbCcsICcjbW9kYWwtcmV2aWV3LWZvcm0nLCAoKSA9PiB0aGlzLnJldmlld01vZGFsLnNldHVwRm9jdXNhYmxlRWxlbWVudHMoV1JJVEVfUkVWSUVXKSk7XG4gICAgICAgXG4gICAgICAgICQoXCIjc3RhbXBlZC1iYWRnZS13aWRnZXRcIikuYXBwZW5kVG8oJyNwcm9kdWN0Vmlldy13aWRnZXQnKTtcbiAgICAgICAgXG4gICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgICB9KTtcbiAgICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgIH1cbiBcbiAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICAgfVxuIFxuICAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLWlucHV0XScpLmVhY2goKF8sIGlucHV0KSA9PiB7XG4gICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcbiBcbiAgICAgICAgICAgICAkaW5wdXQuc2libGluZ3MoJ3NwYW4nKS5hdHRyKCdpZCcsIG1zZ1NwYW5JZCk7XG4gICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICAgfSk7XG4gICAgIH1cbiBcbiAgICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgIH1cbiAgICAgfVxuIFxuICAgICBidWxrUHJpY2luZ0hhbmRsZXIoKSB7XG4gICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgfVxuICAgICB9XG4gXG4gICAgIGhsR2xvYmFsKCkge1xuICAgICAgICAgY29uc3Qgd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICBjb25zdCAkZGVzVGFiID0gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICBjb25zdCAkaW5mb1RhYiA9ICQoJyN0YWItYWRkaXRpb25hbC1pbmZvcm1hdGlvbicpO1xuIFxuICAgICAgICAgaWYgKCRkZXNUYWIubGVuZ3RoICYmIHdXaWR0aCA8IDEwMjUpIHtcbiAgICAgICAgICAgICAkKCcudGFiLWNvbnRlbnQuaXMtYWN0aXZlJywgJGRlc1RhYikuZmluZCgnLnRhYkNvbnRlbnQnKS5zbGlkZURvd24oKTtcbiAgICAgICAgIH1cbiBcbiAgICAgICAgIGlmICgkaW5mb1RhYi5sZW5ndGgpIHtcbiAgICAgICAgICAgICBpZiAoJGluZm9UYWIuZmluZCgnLnRhYkNvbnRlbnQnKS50ZXh0KCkudHJpbSgpID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICQoJ1tocmVmPVwiI3RhYi1hZGRpdGlvbmFsLWluZm9ybWF0aW9uXCJdJykucGFyZW50KCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAkaW5mb1RhYi5oaWRlKCk7XG4gICAgICAgICAgICAgfSBcbiAgICAgICAgIH1cbiBcbiAgICAgICAgIC8vXG4gICAgICAgICAvLyBMb2FkIFRhYnNcbiAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICBjb25zdCAkbG9hZFRhYkJ0biA9ICQoJ1tkYXRhLXRhYi1sb2FkXScpO1xuIFxuICAgICAgICAgXG4gICAgICAgICBjb25zdCAkZmlyc3RUYWIgPSAkKCcuZmlyc3QtdGFiJyk7XG4gXG4gICAgICAgICBjb25zdCBjaGVja19sb2FkVGFiRmlyc3QgPSAkZmlyc3RUYWIuZGF0YSgndGFiLWNoZWNrJyk7XG4gXG4gICAgICAgICBpZiAoY2hlY2tfbG9hZFRhYkZpcnN0KSB7XG4gICAgICAgICAgICAgJGZpcnN0VGFiLmRhdGEoJ3RhYi1jaGVjaycsIGZhbHNlKTtcbiAgICAgICAgICAgICBjb25zdCB1cmxfbG9hZFRhYiA9ICRmaXJzdFRhYi5kYXRhKCd0YWItbG9hZCcpO1xuICAgICAgICAgICAgIGNvbnN0IHRoaXNUYWIgPSAkZmlyc3RUYWIuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgIGNvbnN0ICR0aGlzVGFiID0gJCh0aGlzVGFiKycgLnRhYkNvbnRlbnQnKTtcbiBcbiAgICAgICAgICAgICAkLmdldCh1cmxfbG9hZFRhYiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAkKCcuaWNvbi1sb2FkaW5nJywgJHRoaXNUYWIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoJChkYXRhKS5maW5kKCcucGFnZS1jb250ZW50JykuaHRtbCgpKTtcbiAgICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAkKCcuaWNvbi1sb2FkaW5nJywgJHRoaXNUYWIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoXCI8cD5UbyBCZSBVcGRhdGVkPC9wPlwiKTtcbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH1cbiBcbiAgICAgICAgICRsb2FkVGFiQnRuLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gXG4gICAgICAgICAgICAgY29uc3QgY2hlY2tfbG9hZFRhYiA9ICR0YXJnZXQuZGF0YSgndGFiLWNoZWNrJyk7XG4gXG4gICAgICAgICAgICAgaWYgKGNoZWNrX2xvYWRUYWIpIHtcbiAgICAgICAgICAgICAgICAgJHRhcmdldC5kYXRhKCd0YWItY2hlY2snLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHVybF9sb2FkVGFiID0gJHRhcmdldC5kYXRhKCd0YWItbG9hZCcpO1xuICAgICAgICAgICAgICAgICBjb25zdCB0aGlzVGFiID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzVGFiID0gJCh0aGlzVGFiKycgLnRhYkNvbnRlbnQnKTtcbiBcbiAgICAgICAgICAgICAgICAgJC5nZXQodXJsX2xvYWRUYWIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICQoJy5pY29uLWxvYWRpbmcnLCAkdGhpc1RhYikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoJChkYXRhKS5maW5kKCcucGFnZS1jb250ZW50JykuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICQoJy5pY29uLWxvYWRpbmcnLCAkdGhpc1RhYikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAkdGhpc1RhYi5hcHBlbmQoXCI8cD5UbyBCZSBVcGRhdGVkPC9wPlwiKTtcbiAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gXG4gICAgICAgICAvL1xuICAgICAgICAgLy8gVGFicyBNb2JpbGVcbiAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICBjb25zdCAkYnRuVGFiTW9iaWxlID0gJCgnLnRhYi10aXRsZU1vYmlsZScpO1xuIFxuICAgICAgICAgJGJ0blRhYk1vYmlsZS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgIGNvbnN0IGlkVGFiID0gJHRhcmdldC5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgY29uc3QgdGhpc1RvcCA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbicpLm9mZnNldCgpLnRvcCAtIDIwO1xuIFxuICAgICAgICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgJChpZFRhYikucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpLmZpbmQoJy50YWJDb250ZW50Jykuc2xpZGVVcCgpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgY29uc3QgJHRhYkFjdGl2ZU1vYmlsZSA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAudGFicy1jb250ZW50cyAudGFiLWNvbnRlbnQuaXMtYWN0aXZlJyk7XG4gXG4gICAgICAgICAgICAgICAgICRidG5UYWJNb2JpbGUucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgJHRhYkFjdGl2ZU1vYmlsZS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuZmluZCgnLnRhYkNvbnRlbnQnKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgICQoaWRUYWIpLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5maW5kKCcudGFiQ29udGVudCcpLnNsaWRlRG93bigpO1xuIFxuICAgICAgICAgICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpc1RvcFxuICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIC8vXG4gICAgICAgICAvLyBTaGFyZSBMaW5rXG4gICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgY29uc3QgJHNoYXJlTGlua0J0biA9ICQoJy5zb2NpYWxNZWRpYS1idXR0b24nKTtcbiAgICAgICAgIGNvbnN0ICRzaGFyZUxpbmtQb3B1cCA9ICQoJy5zb2NpYWxNZWRpYS1kcm9wZG93bicpO1xuICAgICAgICAgY29uc3QgJHNoYXJlTGlua0Nsb3NlID0gJCgnLnNoYXJlTGlua1NvY2lhbF9fY2xvc2UnKTtcbiAgICAgICAgIGNvbnN0ICRzaGFyZUxpbmtDb3B5ID0gJCgnI3NoYXJlTGlua1NvY2lhbF9fY29weScpO1xuIFxuICAgICAgICAgJHNoYXJlTGlua0J0bi5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiBcbiAgICAgICAgICAgICBpZiAoJHNoYXJlTGlua1BvcHVwLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnNsaWRlVXAoMjAwKTtcbiAgICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgfVxuICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVEb3duKDIwMCk7XG4gICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5hZGRDbGFzcygnaXMtb3BlbicpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuIFxuICAgICAgICAgJHNoYXJlTGlua0Nsb3NlLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuIFxuICAgICAgICAgICAgIGlmICgkc2hhcmVMaW5rUG9wdXAuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVVcCgyMDApO1xuICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgICRzaGFyZUxpbmtDb3B5Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiBcbiAgICAgICAgICAgICAkdGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgIH0pO1xuIFxuICAgICAgICAgLy9cbiAgICAgICAgIC8vIEJvZHkgQ2xvc2VcbiAgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICBjb25zdCAkc2hhcmVMaW5rUG9wdXAgPSAkKCcuc29jaWFsTWVkaWEtZHJvcGRvd24nKTtcbiBcbiAgICAgICAgICAgICBpZiAoJHRhcmdldC5jbG9zZXN0KCcuc29jaWFsLW1lZGlhQmxvY2snKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgaWYgKCRzaGFyZUxpbmtQb3B1cC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVVcCgyMDApO1xuICAgICAgICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiBcbiAgICAgICAgIC8qIEN1c3RvbSBEZXRhaWxzIFRhYiAqL1xuICAgICAgICAgLy8gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC5wcm9kdWN0LWRldGFpbHMtdGFiJykuYXBwZW5kVG8oJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAjdGFiLWN1c3RvbS1kZXRhaWwgLnRhYkNvbnRlbnQnKTsgXG4gICAgICAgICAvLyAgICAgaWYoJChcIi5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAjdGFiLWN1c3RvbS1kZXRhaWxcIikudGV4dCgpLnRyaW0oKT09XCJcIil7XG4gICAgICAgICAvLyAgICAgJChcIi5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAudGFiLmZpcnN0LXRhYlwiKS5oaWRlKCk7XG4gICAgICAgICAvLyB9XG4gXG4gICAgICAgICAvKiBDdXN0b20gTGluayBUYWIgKi9cbiAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAucHJvZHVjdC1saW5rLXRhYicpLmFwcGVuZFRvKCcucHJvZHVjdFZpZXctZGVzY3JpcHRpb24gI3RhYi1jdXN0b20tZG9jdW1lbnQgLnRhYkNvbnRlbnQnKTsgXG4gICAgICAgICAgICAgaWYoJChcIi5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAjdGFiLWN1c3RvbS1kb2N1bWVudFwiKS50ZXh0KCkudHJpbSgpPT1cIlwiKXtcbiAgICAgICAgICAgICAkKFwiLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uIC50YWIuZmlyc3QtdGFiXCIpLmhpZGUoKTtcbiAgICAgICAgIH1cbiAgICAgfVxuICAgICBoaWRlT3B0aW9uTm9QdXJjaGFzYWJsZSgpIHtcbiAgICAgICAgIGNvbnN0IHByb2R1Y3RJRCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0VmlldycpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0SWQnKTtcbiBcbiAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdE9wdGlvbnMocHJvZHVjdElEKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLmRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlc1swXS5ub2RlLFxuICAgICAgICAgICAgICAgICBvcHRpb25zTGlzdCA9IHByb2R1Y3QudmFyaWFudHMuZWRnZXM7XG4gXG4gICAgICAgICAgICAgb3B0aW9uc0xpc3QuZm9yRWFjaCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgY29uc3QgaXNQdXJjaGFzYWJsZSA9IHZhcmlhbnQubm9kZS5pc1B1cmNoYXNhYmxlO1xuIFxuICAgICAgICAgICAgICAgICBpZiAoIWlzUHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8qIEhpZGUgdmFyaWFudCBjYW5ub3QgcHVyY2hhc2UgKi9cbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRJZCA9IHZhcmlhbnQubm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnRPcHRpb25zID0gdmFyaWFudC5ub2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzO1xuIFxuICAgICAgICAgICAgICAgICAgICAgdmFyaWFudE9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gb3B0aW9uLm5vZGUudmFsdWVzLmVkZ2VzO1xuIFxuICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNMaXN0LmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZUlkID0gb3B0aW9uVmFsdWUubm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWU9XCIke29wdGlvblZhbHVlSWR9XCJdYCk7XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9uVmFsdWUubm9kZS5pc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KTtcbiAgICAgICAgIH0pXG4gICAgIH1cbiAgICAgLyogSGlkZSBvcHRpb24gbm8gUHVyY2hhc2FibGUgKi9cbiAgICAgZ2V0UHJvZHVjdE9wdGlvbnMocHJvZHVjdElEKSB7XG4gICAgICAgICByZXR1cm4gZmV0Y2goJy9ncmFwaHFsJywge1xuICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRoaXMuY29udGV4dC50b2tlblxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICAgcXVlcnkgRXh0ZW5kZWRQcm9kdWN0c0J5SWQge1xuICAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMoZW50aXR5SWRzOiBbYCtwcm9kdWN0SUQrYF0sIGZpcnN0OiA1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybE9yaWdpbmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzKGZpcnN0OiA1MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2Vze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsT3JpZ2luYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMoZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIG9uIE11bHRpcGxlQ2hvaWNlT3B0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGV4Q29sb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybCh3aWR0aDogMTUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHVyY2hhc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgfVxuIH1cbiBcbiIsImltcG9ydCAnZWFzeXpvb20nO1xuaW1wb3J0ICdmYW5jeWJveCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRnYWxsZXJ5KSB7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZSA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktbWFpbl0nKTtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlTmVzdGVkID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKTtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcyA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKTtcbiAgICAgICAgdGhpcy4kc3dpcFRodW1ibmFpbHMgPSAkZ2FsbGVyeS5maW5kKCcucHJvZHVjdFZpZXctZm9yJyk7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0ge307XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmZhbmN5Ym94Wm9vbSgpO1xuICAgICAgICAgICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjVweCknKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbWFnZVpvb20oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRNYWluSW1hZ2UoaW1nT2JqKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEltYWdlID0geyAuLi5pbWdPYmogfTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgICAgIHRoaXMuc3dhcE1haW5JbWFnZSgpO1xuICAgIH1cblxuICAgIHNldEFsdGVybmF0ZUltYWdlKGltZ09iaikge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlZEltYWdlID0ge1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmF0dHIoJ2RhdGEtem9vbS1pbWFnZScpLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UoaW1nT2JqKTtcbiAgICB9XG5cbiAgICByZXN0b3JlSW1hZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKHRoaXMuc2F2ZWRJbWFnZSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zYXZlZEltYWdlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZhbmN5Ym94Wm9vbSgpIHtcbiAgICAgICAgJCgnW2RhdGEtZmFuY3lib3g9XCJpbWFnZXNcIl0nKS5mYW5jeWJveCh7XG4gICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgXCJ6b29tXCIsXG4gICAgICAgICAgICAgICAgXCJzbGlkZVNob3dcIixcbiAgICAgICAgICAgICAgICBcImNsb3NlXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlbGVjdE5ld0ltYWdlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBpbWdPYmogPSB7XG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgICAgICBtYWluSW1hZ2VBbHQ6ICR0YXJnZXQuY2hpbGRyZW4oKS5maXJzdCgpLmF0dHIoJ2FsdCcpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld0ltYWdlMihlKSB7XG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCkuZmluZCgnLnNsaWNrLWN1cnJlbnQgW2RhdGEtaW1hZ2UtZ2FsbGVyeS1pdGVtXScpO1xuICAgICAgICBjb25zdCBpbWdPYmogPSB7XG4gICAgICAgICAgICBtYWluSW1hZ2VVcmw6ICR0YXJnZXQuYXR0cignZGF0YS1pbWFnZS1nYWxsZXJ5LW5ldy1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktem9vbS1pbWFnZS11cmwnKSxcbiAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldDogJHRhcmdldC5hdHRyKCdkYXRhLWltYWdlLWdhbGxlcnktbmV3LWltYWdlLXNyY3NldCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICQoZS5jdXJyZW50VGFyZ2V0KS5maW5kKCcuc2xpY2stY3VycmVudCcpLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiRzZWxlY3RhYmxlSW1hZ2VzLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlLiRzZWxlY3RlZFRodW1iKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKCkge1xuICAgICAgICBjb25zdCBpc0Jyb3dzZXJJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1RyaWRlbnQnKTtcblxuICAgICAgICB0aGlzLmVhc3l6b29tLmRhdGEoJ2Vhc3lab29tJykuc3dhcChcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybCxcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLiRtYWluSW1hZ2UuYXR0cih7XG4gICAgICAgICAgICAnZGF0YS16b29tLWltYWdlJzogdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICB9KVxuICAgICAgICAuZmluZCgnYScpLmF0dHIoe2hyZWY6IHRoaXMuY3VycmVudEltYWdlLnpvb21JbWFnZVVybH0pXG4gICAgICAgIC5maW5kKCdpbWcnKS5hdHRyKHtzcmM6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pO1xuXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZS5maW5kKCcucHJvZHVjdFZpZXctaW1nLWNvbnRhaW5lciBpbWcnKS5hdHRyKHtzcmNzZXQ6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pO1xuXG4gICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5hdHRyKHtcbiAgICAgICAgICAgIGFsdDogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlQWx0LFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZUFsdCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlzQnJvd3NlcklFKSB7XG4gICAgICAgICAgICBjb25zdCBmYWxsYmFja1N0eWxlc0lFID0ge1xuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYHVybCgke3RoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybH0pYCxcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLW9yaWdpbic6ICdjb250ZW50LWJveCcsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICdjb250YWluJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuJG1haW5JbWFnZU5lc3RlZC5jc3MoZmFsbGJhY2tTdHlsZXNJRSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0ltYWdlKCkge1xuICAgICAgICBjb25zdCAkaW1hZ2VDb250YWluZXIgPSAkKCcucHJvZHVjdFZpZXctaW1hZ2UnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gJGltYWdlQ29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9ICRpbWFnZUNvbnRhaW5lci53aWR0aCgpO1xuXG4gICAgICAgIGNvbnN0ICRpbWFnZSA9IHRoaXMuZWFzeXpvb20uZGF0YSgnZWFzeVpvb20nKS4kem9vbTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gJGltYWdlLmhlaWdodCgpO1xuICAgICAgICBjb25zdCB3aWR0aCA9ICRpbWFnZS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChoZWlnaHQgPCBjb250YWluZXJIZWlnaHQgfHwgd2lkdGggPCBjb250YWluZXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5lYXN5em9vbS5kYXRhKCdlYXN5Wm9vbScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEltYWdlWm9vbSgpIHtcbiAgICAgICAgdGhpcy5lYXN5em9vbSA9IHRoaXMuJG1haW5JbWFnZS5lYXN5Wm9vbSh7XG4gICAgICAgICAgICBvblNob3c6ICgpID0+IHRoaXMuY2hlY2tJbWFnZSgpLFxuICAgICAgICAgICAgZXJyb3JOb3RpY2U6ICcnLFxuICAgICAgICAgICAgbG9hZGluZ05vdGljZTogJycsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNlbGVjdGFibGVJbWFnZXMub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdJbWFnZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy4kc3dpcFRodW1ibmFpbHMub24oJ2FmdGVyQ2hhbmdlJywgdGhpcy5zZWxlY3ROZXdJbWFnZTIuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVTdHJpbmcgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgJCgnI3Byb2R1Y3RSZXZpZXdfbGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1dGlscyIsIlByb2R1Y3REZXRhaWxzQmFzZSIsIm9wdGlvbkNoYW5nZURlY29yYXRvciIsIkltYWdlR2FsbGVyeSIsIm1vZGFsRmFjdG9yeSIsInNob3dBbGVydE1vZGFsIiwibW9kYWxUeXBlcyIsIm5vcm1hbGl6ZUZvcm1EYXRhIiwiaXNCcm93c2VySUUiLCJjb252ZXJ0SW50b0FycmF5IiwiYmFubmVyVXRpbHMiLCJoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nIiwiR2FsbGVyeVBvcHVwIiwiYWRkaXRpb25hbFByb2R1Y3RDb2xvcnMiLCJQcm9kdWN0RGV0YWlscyIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCIkc2NvcGUiLCJjb250ZXh0IiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiX3RoaXMiLCJjYWxsIiwiJG92ZXJsYXkiLCIkIiwiaW1hZ2VHYWxsZXJ5IiwiaW5pdCIsImxpc3RlblF1YW50aXR5Q2hhbmdlIiwiJHN3YXRjaE9wdGlvbk1lc3NhZ2UiLCJzd2F0Y2hPcHRpb25NZXNzYWdlSW5pdFRleHQiLCJ0ZXh0IiwibGVuZ3RoIiwic29sZFByb2R1Y3QiLCIkZm9ybSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwiaHRtbCIsInRyaW0iLCJoYXNEZWZhdWx0T3B0aW9ucyIsImZpbmQiLCIkcHJvZHVjdFN3YXRjaEdyb3VwIiwic2hvd1N3YXRjaE5hbWVzIiwicmVtb3ZlQ2xhc3MiLCJvbiIsIl9yZWYiLCJ0YXJnZXQiLCJzaG93U3dhdGNoTmFtZU9uT3B0aW9uIiwiZWFjaCIsIl8iLCJlbGVtZW50IiwiaXMiLCJldmVudCIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInNldFByb2R1Y3RWYXJpYW50Iiwic2V0UHJvZHVjdFZhcmlhbnQyIiwidmFsdWUiLCJhZGRDbGFzcyIsImFkZFByb2R1Y3RUb0NhcnQiLCIkZm9ybTIiLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50MiIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZDIiLCJkb2N1bWVudCIsInN1Ym1pdCIsIl9pc0VtcHR5IiwiJHByb2R1Y3RJZCIsInZhbCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwiYXBpIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsImRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50Iiwic2hvdyIsInByZXZpZXdNb2RhbCIsInRoZW1lU2V0dGluZ3MiLCJoYWxvX3ZpZXdpbmdfcHJvZHVjdCIsInZpZXdpbmdQcm9kdWN0IiwiY2hlY2tWYWxpZGl0eSIsInVwZGF0ZVByb2R1Y3REZXRhaWxzRGF0YSIsInRvZ2dsZVdhbGxldEJ1dHRvbnNWaXNpYmlsaXR5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9ucyIsImluZGV4Iiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsInB1c2giLCJpc1NhdGlzZmllZCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImpvaW4iLCJjaGVja2VkIiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0IiwiaW5wdCIsImRhdGFzZXQiLCJwcm9kdWN0QXR0cmlidXRlVmFsdWUiLCJmaWx0ZXIiLCJsYWJlbCIsImxhYmVscyIsInRpdGxlIiwicHJvZHVjdFZhcmlhbnQiLCJzb3J0IiwidmlldyIsImF0dHIiLCJwcm9kdWN0TmFtZSIsInJlcGxhY2UiLCJjYXJkIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJ3aW5kb3ciLCJzZWxmIiwidG9wIiwiZSIsIl90aGlzMiIsIiRjaGFuZ2VkT3B0aW9uIiwicGFyZW50cyIsInByb2R1Y3RJZCIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiZXJyIiwicmVzcG9uc2UiLCJkYXRhIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVZpZXciLCJfdGhpczMiLCJzZXRUaW1lb3V0IiwiY2hhbmdlX2ltZyIsImkiLCJlbCIsIm9wIiwibmV4dCIsImhhc0NsYXNzIiwib3BUaXRsZSIsInByb3AiLCJjaGVja2VkQ29sb3IiLCJjb2xvciIsIiRzd2F0Y2giLCJzd2F0Y2hOYW1lIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJyb2xlIiwic2hvd1Byb2R1Y3RJbWFnZSIsImltYWdlIiwiX2lzUGxhaW5PYmplY3QiLCJ6b29tSW1hZ2VVcmwiLCJ0b29scyIsImltYWdlU3Jjc2V0IiwiZ2V0U3Jjc2V0Iiwiem9vbVNpemUiLCJtYWluSW1hZ2VVcmwiLCJwcm9kdWN0U2l6ZSIsIm1haW5JbWFnZVNyY3NldCIsInNldEFsdGVybmF0ZUltYWdlIiwicmVzdG9yZUltYWdlIiwiX3RoaXM0IiwicHJldmVudERlZmF1bHQiLCIkdGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInZpZXdNb2RlbCIsImdldFZpZXdNb2RlbCIsIiRpbnB1dCIsInF1YW50aXR5IiwicXVhbnRpdHlNaW4iLCJwYXJzZUludCIsInF1YW50aXR5TWF4IiwiY3VycmVudFN0b2NrIiwicXR5IiwiJHRleHQiLCJ3aGljaCIsImtleUNvZGUiLCJmb3JtIiwiX3RoaXM1IiwiJGFkZFRvQ2FydEJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCJjYXJ0IiwiaXRlbUFkZCIsImVycm9yTWVzc2FnZSIsImVycm9yIiwiaGlkZSIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsImhhbG9BZGRUb0NhcnRBY3Rpb24iLCJ0cmlnZ2VyIiwidGVtcGxhdGUiLCJsb2FkaW5nQ2xhc3MiLCIkYm9keSIsIiRjYXJ0RHJvcGRvd24iLCIkY2FydExvYWRpbmciLCJ0b2dnbGVDbGFzcyIsImdldENvbnRlbnQiLCJvcGVuIiwidXBkYXRlQ2FydENvbnRlbnQiLCJjYXJ0X2l0ZW0iLCJpZCIsInNldHVwRm9jdXNhYmxlRWxlbWVudHMiLCJQUk9EVUNUX0RFVEFJTFMiLCJyZWRpcmVjdFRvIiwiY2FydF91cmwiLCJ1cmxzIiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInBhcmFtcyIsInN1Z2dlc3QiLCJjb25maWciLCJzdWdnZXN0aW9ucyIsImxpbWl0IiwidXJsIiwiaWZyYW1lU2RrIiwibG9jYXRpb24iLCJtb2RhbCIsInVwZGF0ZUNvbnRlbnQiLCIkY2FydFF1YW50aXR5IiwiJGNvbnRlbnQiLCIkY2FydENvdW50ZXIiLCIkcHJvbW90aW9uQmFubmVyIiwiJGJhY2tUb1Nob3BwcGluZ0J0biIsIiRtb2RhbENsb3NlQnRuIiwiYmFubmVyVXBkYXRlSGFuZGxlciIsIiRwcm9kdWN0Q29udGFpbmVyIiwiYXBwZW5kIiwicmVsb2FkIiwiZm9ybURhdGFJdGVtcyIsInNlcmlhbGl6ZUFycmF5IiwicHJvZHVjdERldGFpbHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiZm9ybURhdGFJdGVtIiwibmFtZSIsIk51bWJlciIsIm1hdGNoIiwicHJvZHVjdE9wdGlvbiIsIm9wdGlvbklkIiwib3B0aW9uVmFsdWUiLCJvcHRpb25TZWxlY3Rpb25zIiwiY29uY2F0IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsIm51bWJlcnNQcm9kdWN0UyIsIm51bWJlcl9wcm9kdWN0cyIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIkpTT04iLCJwYXJzZSIsIm51bWJlcnNQcm9kdWN0SXRlbSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm51bWJlcnNQcm9kdWN0IiwibnVtYmVyc0hvdXJzUyIsIm51bWJlcl9ob3VycyIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwibnVtYmVyc0hvdXIiLCJpdGVtUHJkc1RleHQiLCJudW1iZXJfcHJvZHVjdHNfdGV4dCIsIml0ZW1Ib3Vyc1RleHQiLCJudW1iZXJfaG91cnNfdGV4dCIsIlZpZXdlclRleHQiLCJoYWxvX3ZpZXdpbmdfcHJvZHVjdF90ZXh0IiwibnVtYmVyc1ZpZXdlcl90ZXh0IiwiaGFsb192aWV3aW5nX3Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJ0aW1lVmlld2VyIiwiaGFsb192aWV3aW5nX3Byb2R1Y3RfY2hhbmdlIiwic2V0SW50ZXJ2YWwiLCJudW1iZXJzVmlld2VySXRlbSIsImRlZmF1bHQiLCJmaWx0ZXJFbXB0eVZhbHVlc0Zyb21Gb3JtIiwiZm9ybURhdGEiLCJyZXMiLCJfc3RlcCR2YWx1ZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0iLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwiRmlsZSIsInNpemUiLCJwcmljZSIsInByaWNlX3JhbmdlIiwid2l0aG91dF90YXgiLCJ3aXRoX3RheCIsImV2dCIsImFtb3VudCIsInNhZmVTdHJpbmciLCJzdHIiLCJkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsInJlYWR5IiwiaW5pdFByb2R1Y3RNb3JldmlldyIsIm9iaiIsInZhcmlhbnRfbmFtZSIsImNsYXNzTmFtZSIsImNsYXNzTiIsImxhc3RFbGVtZW50IiwicGFyZW50IiwiaW5wdXRDaGVja2VkIiwiY2xzTmFtZSIsInJlbW92ZSIsInJlbGF0ZV90YWIiLCIkYnVuZGxlIiwic2hvd0J1bmRsZSIsIm5vdCIsImNsb3Nlc3QiLCJ0b3RhbFByaWNlIiwiYXJyUHJvIiwiY2hlY2siLCJjaGVja1Byb2R1Y3QiLCJhZGRUb0NhcnQiLCJhbGVydCIsIml0ZW0iLCJwcm9kQnVuZGxlSWQiLCJmaXJzdEl0ZW0iLCJwcm9kdWN0Q3VzdG9tRmllbGRzIiwibnVtIiwibGlzdCIsInBJZCIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZm9yRWFjaCIsInNob3dMaXN0IiwiYXR0cmlidXRlc0RhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwicHJvZHVjdE9wdGlvbnMiLCJzaG93U2xpY2tTbGlkZXIiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwiaW5maW5pdGUiLCJuZXh0QXJyb3ciLCJwcmV2QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwibGVuIiwiayIsImNoZWNrQmVmb3JlQWRkIiwiJGF0dHJpYnV0ZXMiLCJmb2N1cyIsImF0dCIsImFyclAiLCIkc2lkZUNhcnRCbG9jayIsInRvdGFsIiwicG9zIiwic3ltYm9sIiwiY3VycmVuY3kiLCJzIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJpc05hTiIsImluZGV4T2YiLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlVHlwZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkc2VsZWN0IiwidG9nZ2xlT3B0aW9uIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsImdldFNyYyIsInByb2R1Y3RnYWxsZXJ5X3NpemUiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJfaXNPYmplY3QiLCJ1cGRhdGVQcmljZVZpZXciLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRjb250YWluZXIiLCIkc2t1IiwiJHVwYyIsIiRtcG4iLCIkYnVsa1ByaWNpbmciLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsImZvcm1hdHRlZCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsIiRnYWxsZXJ5IiwiY29udGFpbmVyX2RpdiIsImpRdWVyeSIsImZuIiwidkdhbGxlcnkiLCJnYWxsZXJ5SUQiLCJicmFuZCIsImIiLCJoYWxvR2FsbGVyeSIsImFkZCIsImFkZFBvcHZpZXciLCJnX29iakdhbGxlcnkiLCJnX29wdGlvbnMiLCJnYWxsZXJ5IiwiY3VzdG9tT3B0aW9ucyIsImV4dGVuZCIsInJvdW5kIiwib3BzIiwiZGZzIiwidV9jb250ZW50IiwidGh1bWJuYWlsIiwidV90aHVtYm5haWwiLCJyZXJvdW5kIiwicHAiLCJjIiwic3R0IiwicHJldiIsImN1ciIsImN0aGlzIiwic2V0IiwiYmluZEV2ZW50Iiwib2IiLCJvYl9jY29udGVudCIsIm9iX2NvbnRlbnQiLCJjc3MiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdfc2xpZGUiLCJkcmF3X3NsaWRlIiwiYXZpZXciLCJzMSIsInMyIiwib2Jfc2N0Iiwib2JfZSIsInYiLCJkaSIsInZlIiwiYXIiLCJjdXJyZW50IiwiZXEiLCJhbmltYXRlIiwidGltZSIsImJpbmQiLCJpbngiLCJncmlkcGFuZWxfdmVydGljYWxfc2Nyb2xsIiwiaGFsb19wcmV2X25leHRfcHJvZHVjdCIsIm5leHRJZCIsInByZXZJZCIsIm5leHRMaW5rIiwicHJldkxpbmsiLCIkcHJvZFdyYXAiLCIkcHJvZEljb25zIiwiJG9wdGlvbnMiLCJzd2FsIiwic2Nyb2xsIiwib2Zmc2V0Iiwic2Nyb2xsVG9wIiwiaGVpZ2h0SGVhZGVyIiwib25sb2FkIiwiUGFnZU1hbmFnZXIiLCJSZXZpZXciLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJoYWxvQnVuZGxlUHJvZHVjdHMiLCJoYWxvU3RpY2t5QWRkVG9DYXJ0IiwiaGFsb1ByZXZOZXh0UHJvZHVjdCIsIldSSVRFX1JFVklFVyIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJocmVmIiwiJHJldmlld0xpbmsiLCIkYnVsa1ByaWNpbmdMaW5rIiwicmV2aWV3TW9kYWwiLCJvblJlYWR5IiwidG9rZW4iLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCJobEdsb2JhbCIsImhpZGVPcHRpb25Ob1B1cmNoYXNhYmxlIiwiaGFsb19idW5kbGVfcHJvZHVjdHNfZW5hYmxlIiwiJHJldmlld0Zvcm0iLCJyZXZpZXciLCJhcHBlbmRUbyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiaW5wdXQiLCJtc2dTcGFuSWQiLCJzaWJsaW5ncyIsIndXaWR0aCIsImlubmVyV2lkdGgiLCIkZGVzVGFiIiwiJGluZm9UYWIiLCJzbGlkZURvd24iLCIkbG9hZFRhYkJ0biIsIiRmaXJzdFRhYiIsImNoZWNrX2xvYWRUYWJGaXJzdCIsInVybF9sb2FkVGFiIiwidGhpc1RhYiIsIiR0aGlzVGFiIiwiZ2V0IiwiZmFpbCIsImNoZWNrX2xvYWRUYWIiLCIkYnRuVGFiTW9iaWxlIiwiaWRUYWIiLCJ0aGlzVG9wIiwic2xpZGVVcCIsIiR0YWJBY3RpdmVNb2JpbGUiLCIkc2hhcmVMaW5rQnRuIiwiJHNoYXJlTGlua1BvcHVwIiwiJHNoYXJlTGlua0Nsb3NlIiwiJHNoYXJlTGlua0NvcHkiLCJleGVjQ29tbWFuZCIsInByb2R1Y3RJRCIsImdldFByb2R1Y3RPcHRpb25zIiwidGhlbiIsInNpdGUiLCJwcm9kdWN0cyIsImVkZ2VzIiwibm9kZSIsIm9wdGlvbnNMaXN0IiwidmFyaWFudHMiLCJ2YXJpYW50IiwiaXNQdXJjaGFzYWJsZSIsInZhcmlhbnRJZCIsImVudGl0eUlkIiwidmFyaWFudE9wdGlvbnMiLCJvcHRpb24iLCJ2YWx1ZXMiLCJvcHRpb25WYWx1ZUlkIiwib3B0aW9uVmFsdWVFbGVtZW50IiwiaXNEZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwic3RyaW5naWZ5IiwicXVlcnkiLCJqc29uIiwiJG1haW5JbWFnZSIsIiRtYWluSW1hZ2VOZXN0ZWQiLCIkc2VsZWN0YWJsZUltYWdlcyIsIiRzd2lwVGh1bWJuYWlscyIsImN1cnJlbnRJbWFnZSIsImJpbmRFdmVudHMiLCJmYW5jeWJveFpvb20iLCJtYXRjaE1lZGlhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEltYWdlWm9vbSIsInNldE1haW5JbWFnZSIsImltZ09iaiIsIk9iamVjdCIsImFzc2lnbiIsInNldEFjdGl2ZVRodW1iIiwic3dhcE1haW5JbWFnZSIsInNhdmVkSW1hZ2UiLCIkc2VsZWN0ZWRUaHVtYiIsImZhbmN5Ym94IiwiYnV0dG9ucyIsInNlbGVjdE5ld0ltYWdlIiwibWFpbkltYWdlQWx0IiwiZmlyc3QiLCJzZWxlY3ROZXdJbWFnZTIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJlYXN5em9vbSIsInN3YXAiLCJzcmMiLCJzcmNzZXQiLCJhbHQiLCJmYWxsYmFja1N0eWxlc0lFIiwiY2hlY2tJbWFnZSIsIiRpbWFnZUNvbnRhaW5lciIsImNvbnRhaW5lckhlaWdodCIsImNvbnRhaW5lcldpZHRoIiwiJGltYWdlIiwiJHpvb20iLCJlYXN5Wm9vbSIsIm9uU2hvdyIsImVycm9yTm90aWNlIiwibG9hZGluZ05vdGljZSIsIm5vZCIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiZm9ybXMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiX2RlZmF1bHQiLCJ0YXAiLCIkcmV2aWV3c0NvbnRlbnQiLCIkY29sbGFwc2libGUiLCJpbml0TGlua0JpbmQiLCJpbmplY3RQYWdpbmF0aW9uTGluayIsImNvbGxhcHNlUmV2aWV3cyIsImNsaWNrIiwiaGFzaCIsIiRuZXh0TGluayIsIiRwcmV2TGluayIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsImNiIiwicmVzdWx0IiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwic2VsZWN0TmV3VmlkZW8iLCJzZXRNYWluVmlkZW8iLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJzb3VyY2VSb290IjoiIn0=