(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* harmony import */ var _halothemes_haloQuickEditCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloQuickEditCart */ "./assets/js/theme/halothemes/haloQuickEditCart.js");
/* harmony import */ var _halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }









var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.bindEvents();
    (0,_halothemes_haloQuickEditCart__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    (0,_halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    if ($('body').hasClass('page-type-cart')) {
      var $cart = $('[data-cart-preview]');
      var $cart2 = $('[data-cart-preview2]');
      $cart.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $('[data-cart]').offset().top
        }, 700);
      });
      $cart2.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $('[data-cart]').offset().top
        }, 700);
      });
    }
    var time = $('.cart-notification').data('count-down');
    if ($('.cart-notification').length && time != '') {
      var duration = time * 60,
        element = $('.cart-notification .cart-count-down');
      this.startTimer(duration, element);
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!newQty) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: invalidEntry + " is not a valid entry",
        icon: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
      var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
      $productOptionsContainer.css('height', modalBodyReservedHeight);
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
      modal.setupFocusableElements(_global_modal__WEBPACK_IMPORTED_MODULE_6__.modalTypes.CART_CHANGE_PRODUCT);
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: err,
            icon: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this5.bindEvents();
      _this5.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
    (0,_halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
    $('#emptyCart').on('click', function (event) {
      var openTime = new Date();
      var result = confirm($(event.currentTarget).data('confirm'));
      var delta = new Date() - openTime;
      event.preventDefault();

      // Delta workaround for Chrome's "prevent popup"
      if (!result && delta > 10) {
        return;
      }
      var items = [];
      _this6.$cartContent.find('.cart-remove').each(function () {
        var itemId = $(this).data('cart-itemid');
        var $el = 0;
        items.push({
          id: itemId,
          quantity: 0
        });
      });
      _this6.$overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.update(items, function (err, response) {
        if (response.data.status === 'succeed') {
          window.location.reload();
        } else {
          alert(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $codeInput.data('error'),
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            html: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $certInput.data('error'),
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            html: resp.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__["default"]($('[data-shipping-estimator]'));
  };
  _proto.startTimer = function startTimer(duration, element) {
    var timer = duration,
      minutes,
      seconds;
    var startCoundown = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      element.text(minutes + ":" + seconds);
      if (--timer < 0) {
        clearInterval(startCoundown);
        $('.cart-notification').remove();
      }
    }, 1000);
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: err,
          icon: 'error'
        });
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_this, hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
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
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
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
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");







/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloQuickEditCart.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloQuickEditCart.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../halothemes/haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var $cartContent = $('[data-cart-content]');
  var $cartMessages = $('[data-cart-status]');
  var $cartTotals = $('[data-cart-totals]');
  var $overlay = $('[data-cart] .loadingOverlay');
  if (context.themeSettings.haloQuickEditCart == true) {
    var _addToCart = function addToCart(form, i, arrP, cartId) {
      if (window.FormData === undefined) {
        return;
      }
      var k = arrP[i];
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[k])), function (err, response) {
        var errorMessage = err || response.data.error;
        if (errorMessage) {
          var tmp = document.createElement('DIV');
          tmp.innerHTML = errorMessage;
          return (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(tmp.textContent || tmp.innerText);
        }
        i++;
        if (i >= arrP.length) {
          var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.defaultModal)();
          modal.close();
          updateCartContent();
          return;
        }
        _addToCart(form, i, arrP);
      });
    };
    var listenQuantityChangeUpdate = function listenQuantityChangeUpdate($target, preVal) {
      if (preVal === void 0) {
        preVal = null;
      }
      var itemId = $target.data('cart-itemid');
      var $el = $target;
      var $form = $target.parents('.product-edit-item').find('.form');
      var maxQty = parseInt($el.data('quantityMax'), 10);
      var minQty = parseInt($el.data('quantityMin'), 10);
      var oldQty = preVal !== null ? preVal : minQty;
      var minError = $el.data('quantityMinError');
      var maxError = $el.data('quantityMaxError');
      var newQty = parseInt(Number($el.val()), 10);
      var stock = $el.data('stock');
      var invalidEntry;
      if (!newQty) {
        invalidEntry = $el.val();
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: invalidEntry + " is not a valid entry",
          icon: 'error'
        });
      } else if (newQty < minQty) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: minError,
          icon: 'error'
        });
      } else if (maxQty > 0 && newQty > maxQty) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: maxError,
          icon: 'error'
        });
      } else if (newQty > stock) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: 'We don\'t have enough stock on hand for the quantity you selected. Please try again.',
          icon: 'error'
        });
      } else {
        $form.find('[name=qty\\[\\]]').attr('value', newQty);
      }
    };
    var filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
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
    };
    var checkProduct = function checkProduct(form, arrPro) {
      var check = true;
      for (var i = 0, len = arrPro.length; i < len; i++) {
        var k = arrPro[i],
          $form = $(form[k]);
        if ($form.find('[data-product-attribute]').length > 0) {
          check = checkBeforeAdd($form);
          if (check == false) {
            return false;
          }
        }
      }
      return check;
    };
    var checkBeforeAdd = function checkBeforeAdd($attributes) {
      var check = true,
        att = "";
      $attributes.find('input:text, input:password, input:file, textarea').each(function (index, element) {
        if (!$(element).prop('required')) {} else {
          if ($(element).val()) {} else {
            $(element).focus();
            check = false;
          }
        }
      });
      $attributes.find('select').each(function (index, element) {
        if (!$(element).prop('required')) {} else {
          if ($(element).val()) {} else {
            $(element).focus();
            check = false;
          }
        }
      });
      $attributes.find('input:radio, input:checkbox').each(function (index, element) {
        if (att != $(element).attr("name")) {
          att = $(element).attr("name");
          if (!$(element).prop('required')) {
            if ($(element).attr("type") == "checkbox") {
              if ($("[name='" + att + "']:checked").val()) {}
            }
            if ($(element).attr("type") == "radio") {
              if ($("[name='" + att + "']:checked").val()) {}
            }
          } else {
            if ($(element).attr("type") == "checkbox") {
              if ($("[name='" + att + "']:checked").val()) {} else {
                check = false;
              }
            }
            if ($(element).attr("type") == "radio") {
              if ($("[name='" + att + "']:checked").val()) {} else {
                check = false;
              }
            }
          }
        }
      });
      return check;
    };
    var updateProductClonedAttributes = function updateProductClonedAttributes($scope, number) {
      $('label[data-product-attribute-value]', $scope).each(function (index, attribute) {
        var $formLabel = $(attribute),
          $formInput = $formLabel.prev(),
          id = $formLabel.attr('for'),
          newId = id + number;
        $formLabel.attr('for', newId);
        $formInput.attr('id', newId);
      });
      $('label[data-product-attribute-value2]', $scope).each(function (index, attribute) {
        var $formLabel = $(attribute),
          $formInput = $formLabel.next(),
          id = $formLabel.attr('for'),
          newId = id + number;
        $formLabel.attr('for', newId);
        $formInput.attr('id', newId);
      });
      $('input.form-checkbox', $scope).each(function (index, attribute) {
        var $formInput = $(attribute),
          $formLabel = $formInput.next(),
          id = $formLabel.attr('for'),
          newId = id + number;
        $formLabel.attr('for', newId);
        $formInput.attr('id', newId);
      });
      $('select.form-select', $scope).each(function (index, attribute) {
        var $formSelect = $(attribute),
          $formLabel = $formSelect.prev(),
          id = $formLabel.attr('for'),
          newId = id + number;
        $formLabel.attr('for', newId);
        $formSelect.attr('id', newId);
      });
    };
    var setProductVariant = function setProductVariant(item, form) {
      var unsatisfiedRequiredFields = [];
      var options = [];
      $.each($('[data-product-attribute]', form), function (index, value) {
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
            if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
              var label = checked.labels[0].innerText;
              if (label) {
                options.push(optionTitle + ":" + label);
                $(value.children[0]).find('[data-option-value]').text(label);
              }
            }
            if (type === 'swatch') {
              var _label = checked.labels[0].children[0];
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
      var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort() : 'unsatisfied';
      if (productVariant) {
        item.find('.product-edit-variant').empty();
        $.each(productVariant, function (index, value) {
          item.find('.product-edit-variant').append('<span>' + productVariant[index].toString().split(':').pop() + '</span>');
        });
      }
    };
    var getViewModel = function getViewModel($scope) {
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
        $stockLeft: $('[data-stock-left]', $scope),
        $stockLeftWrapper: $('.product-edit-optionsStock', $scope),
        $quantity: {
          $input: $('.product-edit-increment [name=qty\\[\\]]', $scope)
        },
        $image: $('.product-edit-image', $scope)
      };
    };
    var updateProductAttributes = function updateProductAttributes($scope, data) {
      var behavior = data.out_of_stock_behavior;
      var inStockIds = data.in_stock_attributes;
      var outOfStockMessage = " (" + data.out_of_stock_message + ")";
      if (behavior !== 'hide_option' && behavior !== 'label_option') {
        return;
      }
      $('[data-product-attribute-value]', $scope).each(function (i, attribute) {
        var $attribute = $(attribute);
        var attrId = parseInt($attribute.data('productAttributeValue'), 10);
        if (inStockIds.indexOf(attrId) !== -1) {
          enableAttribute($attribute, behavior, outOfStockMessage);
        } else {
          disableAttribute($attribute, behavior, outOfStockMessage);
        }
      });
    };
    var showProductImage = function showProductImage($scope, data) {
      var viewModel = getViewModel($scope);
      if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(data.image)) {
        var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.imageSrcset.getSrcset(data.image.data, {
          '1x': context.themeSettings.productthumb_size
        });
        var mainImageSrcset = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.imageSrcset.getSrcset(data.image.data);
        viewModel.$image.find('img').attr({
          'srcset': mainImageUrl,
          'data-srcset': mainImageSrcset
        });
      }
    };
    var updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS($scope, data) {
      var viewModel = getViewModel($scope);
      if (!data.purchasable || !data.instock) {
        $scope.removeClass('is-visible').addClass('is-hidden');
        viewModel.$quantity.$input.prop('disabled', true);
      } else {
        $scope.removeClass('is-hidden').addClass('is-visible');
        viewModel.$quantity.$input.prop('disabled', false);
      }
    };
    var showMessageBox = function showMessageBox($scope, message) {
      var $messageBox = $('.product-edit-message', $scope);
      if (message) {
        $('.alertBox-message', $messageBox).text(message);
        $messageBox.show();
      } else {
        $messageBox.hide();
      }
    };
    var clearPricingNotFound = function clearPricingNotFound(viewModel) {
      viewModel.rrpWithTax.$div.hide();
      viewModel.rrpWithoutTax.$div.hide();
      viewModel.nonSaleWithTax.$div.hide();
      viewModel.nonSaleWithoutTax.$div.hide();
      viewModel.priceSaved.$div.hide();
      viewModel.priceNowLabel.$span.hide();
      viewModel.priceLabel.$span.hide();
    };
    var updatePriceView = function updatePriceView(viewModel, price) {
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
    };
    var updateView = function updateView($scope, data, content) {
      if (content === void 0) {
        content = null;
      }
      var viewModel = getViewModel($scope);
      if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
        if (data.stock <= parseInt(context.themeSettings.halo_stock_level_limit) && data.stock > 0) {
          viewModel.$stockLeftWrapper.removeClass('u-hiddenVisually');
          viewModel.$stockLeft.text(data.stock);
        } else {
          viewModel.$stockLeftWrapper.addClass('u-hiddenVisually');
        }
        viewModel.$quantity.$input.attr('data-stock', data.stock);
      } else {
        viewModel.$quantity.$input.removeAttr('data-stock');
      }
      showMessageBox($scope, data.stock_message || data.purchasing_message);
      if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
        updatePriceView(viewModel, data.price);
      }
      updateDefaultAttributesForOOS($scope, data);
      showProductImage($scope, data);
    };
    var disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
      if (getAttributeType($attribute) === 'set-select') {
        return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
      }
      if (behavior === 'hide_option') {
        $attribute.hide();
      } else {
        $attribute.addClass('unavailable');
      }
    };
    var disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
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
    };
    var enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
      if (getAttributeType($attribute) === 'set-select') {
        return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
      }
      if (behavior === 'hide_option') {
        $attribute.show();
      } else {
        $attribute.removeClass('unavailable');
      }
    };
    var enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
      if (behavior === 'hide_option') {
        $attribute.toggleOption(true);
      } else {
        $attribute.prop('disabled', false);
        $attribute.html($attribute.html().replace(outOfStockMessage, ''));
      }
    };
    var getAttributeType = function getAttributeType($attribute) {
      var $parent = $attribute.closest('[data-product-attribute]');
      return $parent ? $parent.data('productAttribute') : null;
    };
    var updateCartContent = function updateCartContent() {
      if (!$('body').hasClass('page-type-cart')) {
        var loadingClass = 'is-loading';
        var $cartDropdown = $('#cart-preview-dropdown');
        var $cartLoading = $('<div class="loadingOverlay"></div>');
        var $body = $('body');
        var options = {
          template: 'common/cart-preview'
        };
        $cartDropdown.addClass(loadingClass).prepend($cartLoading);
        $cartLoading.show();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
          $cartDropdown.removeClass(loadingClass).html(response);
          $cartLoading.hide();
          var quantity = $(response).find('[data-cart-quantity]').data('cartQuantity') || $('[data-cart-quantity]').data('cartQuantity') || 0;
          $body.trigger('cart-quantity-update', quantity);
          (0,_halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_8__["default"])(context);
        });
      } else {
        refreshContent();
        (0,_halothemes_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_8__["default"])(context);
      }
    };
    var refreshContent = function refreshContent(remove) {
      var $cartItemsRows = $('[data-item-row]', $cartContent);
      var $cartPageTitle = $('[data-cart-page-title]');
      var options = {
        template: {
          content: 'cart/content',
          totals: 'cart/totals',
          pageTitle: 'cart/page-title',
          statusMessages: 'cart/status-messages'
        }
      };
      $overlay.show();

      // Remove last item from cart? Reload
      if (remove && $cartItemsRows.length === 1) {
        return window.location.reload();
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
        $cartContent.html(response.content);
        $cartTotals.html(response.totals);
        $cartMessages.html(response.statusMessages);
        $cartPageTitle.replaceWith(response.pageTitle);
        bindEvents();
        $overlay.hide();
        var quantity = $('[data-cart-quantity]', $cartContent).data('cartQuantity') || 0;
        $('body').trigger('cart-quantity-update', quantity);
      });
    };
    var cartUpdate = function cartUpdate($target) {
      var itemId = $target.data('cartItemid');
      var $el = $("#qty-" + itemId);
      var oldQty = parseInt($el.val(), 10);
      var maxQty = parseInt($el.data('quantityMax'), 10);
      var minQty = parseInt($el.data('quantityMin'), 10);
      var minError = $el.data('quantityMinError');
      var maxError = $el.data('quantityMaxError');
      var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
      // Does not quality for min/max quantity
      if (newQty < minQty) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: minError,
          icon: 'error'
        });
      } else if (maxQty > 0 && newQty > maxQty) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: maxError,
          icon: 'error'
        });
      }
      $overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        $overlay.hide();
        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;
          refreshContent(remove);
        } else {
          $el.val(oldQty);
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
            text: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    };
    var cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
      if (preVal === void 0) {
        preVal = null;
      }
      var itemId = $target.data('cartItemid');
      var $el = $("#qty-" + itemId);
      var maxQty = parseInt($el.data('quantityMax'), 10);
      var minQty = parseInt($el.data('quantityMin'), 10);
      var oldQty = preVal !== null ? preVal : minQty;
      var minError = $el.data('quantityMinError');
      var maxError = $el.data('quantityMaxError');
      var newQty = parseInt(Number($el.val()), 10);
      var invalidEntry;

      // Does not quality for min/max quantity
      if (!newQty) {
        invalidEntry = $el.val();
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: invalidEntry + " is not a valid entry",
          icon: 'error'
        });
      } else if (newQty < minQty) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: minError,
          icon: 'error'
        });
      } else if (maxQty > 0 && newQty > maxQty) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: maxError,
          icon: 'error'
        });
      }
      $overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        $overlay.hide();
        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;
          refreshContent(remove);
        } else {
          $el.val(oldQty);
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
            text: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    };
    var cartRemoveItem = function cartRemoveItem(itemId) {
      $overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemRemove(itemId, function (err, response) {
        if (response.data.status === 'succeed') {
          refreshContent(true);
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
            text: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    };
    var bindCartEvents = function bindCartEvents() {
      // const debounceTimeout = 400;
      // const cartUpdate = _.bind(_.debounce(this.cartUpdate, debounceTimeout), this);
      // const cartUpdateQtyTextChange = _.bind(_.debounce(this.cartUpdateQtyTextChange, debounceTimeout), this);
      // const cartRemoveItem = _.bind(_.debounce(this.cartRemoveItem, debounceTimeout), this);
      var preVal;
      $('[data-cart-update]', $cartContent).on('click', function (event) {
        var $target = $(event.currentTarget);
        event.preventDefault();
        cartUpdate($target);
      });
      $('[data-cart-update]', $cartContent).on('click', function (event) {
        var $target = $(event.currentTarget);
        event.preventDefault();
        cartUpdate($target);
      });
      $('.cart-item-qty-input', $cartContent).on('focus', function (event) {
        preVal = $(event.currentTarget).val();
      }).change(function (event) {
        var $target = $(event.currentTarget);
        event.preventDefault();
        cartUpdateQtyTextChange($target, preVal);
      });
      $('.cart-remove', $cartContent).on('click', function (event) {
        var itemId = $(event.currentTarget).data('cartItemid');
        var string = $(event.currentTarget).data('confirmDelete');
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: string,
          icon: 'warning',
          showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            cartRemoveItem(itemId);
          }
        });
        event.preventDefault();
      });
    };
    var bindPromoCodeEvents = function bindPromoCodeEvents() {
      var $couponContainer = $('.coupon-code');
      var $couponForm = $('.coupon-form');
      var $codeInput = $('[name="couponcode"]', $couponForm);
      $('.coupon-code-add').on('click', function (event) {
        event.preventDefault();
        $(event.currentTarget).hide();
        $couponContainer.show();
        $('.coupon-code-cancel').show();
        $codeInput.trigger('focus');
      });
      $('.coupon-code-cancel').on('click', function (event) {
        event.preventDefault();
        $couponContainer.hide();
        $('.coupon-code-cancel').hide();
        $('.coupon-code-add').show();
      });
      $couponForm.on('submit', function (event) {
        var code = $codeInput.val();
        event.preventDefault();
        if (!code) {
          return (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"])({
            text: $codeInput.data('error'),
            type: 'error'
          });
        }
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.applyCode(code, function (err, response) {
          if (response.data.status === 'success') {
            refreshContent();
          } else {
            (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"])({
              text: response.data.errors.join('\n'),
              type: 'error'
            });
          }
        });
      });
    };
    var bindGiftCertificateEvents = function bindGiftCertificateEvents() {
      var $certContainer = $('.gift-certificate-code');
      var $certForm = $('.cart-gift-certificate-form');
      var $certInput = $('[name="certcode"]', $certForm);
      $('.gift-certificate-add').on('click', function (event) {
        event.preventDefault();
        $(event.currentTarget).toggle();
        $certContainer.toggle();
        $('.gift-certificate-cancel').toggle();
      });
      $('.gift-certificate-cancel').on('click', function (event) {
        event.preventDefault();
        $certContainer.toggle();
        $('.gift-certificate-add').toggle();
        $('.gift-certificate-cancel').toggle();
      });
      $certForm.on('submit', function (event) {
        var code = $certInput.val();
        event.preventDefault();
        if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_7__["default"])(code)) {
          return (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"])({
            text: $certInput.data('error'),
            type: 'error'
          });
        }
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
          if (resp.data.status === 'success') {
            refreshContent();
          } else {
            (0,_global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"])({
              text: resp.data.errors.join('\n'),
              type: 'error'
            });
          }
        });
      });
    };
    var bindGiftWrappingEvents = function bindGiftWrappingEvents() {
      var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.defaultModal)();
      $('[data-item-giftwrap]').on('click', function (event) {
        var itemId = $(event.currentTarget).data('itemGiftwrap');
        var options = {
          template: 'cart/modals/gift-wrapping-form'
        };
        event.preventDefault();
        modal.open();
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
          modal.updateContent(response.content);
          bindGiftWrappingForm();
        });
      });
    };
    var bindGiftWrappingForm = function bindGiftWrappingForm() {
      $('.giftWrapping-select').on('change', function (event) {
        var $select = $(event.currentTarget);
        var id = $select.val();
        var index = $select.data('index');
        if (!id) {
          return;
        }
        var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
        $(".giftWrapping-image-" + index).hide();
        $("#giftWrapping-image-" + index + "-" + id).show();
        if (allowMessage) {
          $("#giftWrapping-message-" + index).show();
        } else {
          $("#giftWrapping-message-" + index).hide();
        }
      });
      $('.giftWrapping-select').trigger('change');
      function toggleViews() {
        var value = $('input:radio[name ="giftwraptype"]:checked').val();
        var $singleForm = $('.giftWrapping-single');
        var $multiForm = $('.giftWrapping-multiple');
        if (value === 'same') {
          $singleForm.show();
          $multiForm.hide();
        } else {
          $singleForm.hide();
          $multiForm.show();
        }
      }
      $('[name="giftwraptype"]').on('click', toggleViews);
      toggleViews();
    };
    var bindEvents = function bindEvents() {
      bindCartEvents();
      bindPromoCodeEvents();
      bindGiftWrappingEvents();
      bindGiftCertificateEvents();

      // initiate shipping estimator module
      var shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'));
    };
    $(document).on('click', '[data-cart-edit-id]', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget),
        productId = $target.data('cart-edit-id'),
        itemId = $target.data('cartItemid'),
        $qty = $target.data('cart-edit-quantity');
      var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.defaultModal)(),
        options = {
          template: 'cart/modals/configure-product-2'
        },
        options2 = {
          template: 'cart/modals/configure-product-3'
        };
      $('body').addClass('halo-cart--editOptions');
      modal.$modal.removeClass().addClass('modal modal--editOptions');
      modal.open({
        size: 'medium'
      });
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.configureInCart(itemId, options2, function (err2, response2) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, options, function (err, response) {
          modal.updateContent(response);
          var $firstItem = modal.$content.find('.product-edit-itemFirst'),
            $form = $firstItem.find('.form'),
            $formQty = $firstItem.find('.product-edit-increment');
          $firstItem.attr('data-product-edit-item-id', itemId);
          $form.find('.product-edit-option .cart-edit-row').prepend(response2.content);
          $form.find('[name=qty\\[\\]]').attr('value', $qty);
          $formQty.find('.form-input').attr({
            'cart-itemid': itemId,
            'id': 'editqty-' + itemId,
            'value': $qty
          });
          $formQty.find('.form-label').attr({
            'for': 'editqty-' + itemId
          });
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
            var attributesData = response.data || {};
            var attributesContent = response.content || {};
            updateProductAttributes($firstItem, attributesData);
            updateView($firstItem, attributesData, attributesContent);
          });
          setProductVariant($firstItem, $form);
        });
      });
    });
    $(document).on('change', '[data-product-edit-item-id] .form-input[cart-itemid]', function (event) {
      var $target = $(event.currentTarget);
      var preVal = $target.data('preval');
      event.preventDefault();
      listenQuantityChangeUpdate($target, preVal);
    });
    $(document).on('change', '[data-product-edit-option-change]', function (event) {
      var $changedOption = $(event.target);
      var $item = $changedOption.parents('.product-edit-item');
      var $form = $changedOption.parents('form');
      var productId = $('[name="product_id"]', $form).val();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes($item, attributesData);
        updateView($item, attributesData, attributesContent);
      });
      setProductVariant($item, $form);
    });
    $(document).on('click', '[data-edit-cart-add-more]', function (event) {
      event.preventDefault();
      var count = parseInt($('.modal--editOptions [data-count]').attr('data-count')),
        product = $('.modal--editOptions .product-edit-itemFirst').clone().removeClass('product-edit-itemFirst');
      product.appendTo('.modal--editOptions .product-edit-wrapper');
      updateProductClonedAttributes(product, count);
      count = count + 1;
      $('.modal--editOptions [data-count]').attr('data-count', count);
    });
    $(document).on('click', '[data-edit-cart-remove]', function (event) {
      event.preventDefault();
      var product = $(event.currentTarget).parents('.product-edit-item');
      if (product.hasClass('product-edit-itemFirst')) {
        var itemId = product.data('product-edit-item-id');
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemRemove(itemId, function (err, response) {
          if (response.data.status === 'succeed') {
            var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.defaultModal)();
            modal.close();
            updateCartContent();
          } else {
            _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
              text: response.data.errors.join('\n'),
              icon: 'error'
            });
          }
        });
      } else {
        product.remove();
      }
    });
    $(document).on('click', '[data-edit-cart-add-to-cart]', function (event) {
      var $product = $('.modal--editOptions .product-edit-item.is-visible'),
        $form = $product.find('.form'),
        itemId = $('.modal--editOptions .product-edit-itemFirst.is-visible').data('product-edit-item-id'),
        arrPro = new Array(),
        check = false;
      $product.each(function (index, element) {
        arrPro.push(index);
      });
      if (arrPro.length > 0) {
        check = checkProduct($form, arrPro);
      }
      if (check) {
        if (arrPro.length > 0 && typeof itemId !== 'undefined') {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemRemove(itemId, function (err, response) {
            if (response.data.status === 'succeed') {
              var originalBtnVal = $('[data-edit-cart-add-to-cart]').text();
              var waitMessage = $('[data-edit-cart-add-to-cart]').data('waitMessage');
              $('[data-edit-cart-add-to-cart]').addClass('loading');
              $('[data-edit-cart-add-to-cart]').text(waitMessage);
              _addToCart($form, 0, arrPro);
            } else {
              _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
                text: response.data.errors.join('\n'),
                icon: 'error'
              });
              updateCartContent();
            }
          });
        }
      } else {
        var errorMessage = 'Please make sure all options have been filled in.';
        if (errorMessage) {
          var tmp = document.createElement('DIV');
          tmp.innerHTML = errorMessage;
          return (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(tmp.textContent || tmp.innerText);
        }
      }
      event.preventDefault();
    });
    $(document).on('click', '[data-cart-edit-item-quantity] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var itemId = $target.data('cart-itemid');
      var $el = $target.siblings('.form-input--incrementTotal');
      var $form = $target.parents('.product-edit-item').find('.form');
      var maxQty = parseInt($el.data('quantityMax'), 10);
      var minQty = parseInt($el.data('quantityMin'), 10);
      var oldQty = parseInt($el.val(), 10);
      var minError = $el.data('quantityMinError');
      var maxError = $el.data('quantityMaxError');
      var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
      var stock = $el.data('stock');
      var proTitle = $('.product-edit-title').html();
      var invalidEntry;

      // Does not quality for min/max quantity
      if (!newQty) {
        invalidEntry = newQty;
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: invalidEntry + " is not a valid entry",
          icon: 'error'
        });
      } else if (newQty < minQty) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: minError,
          icon: 'error'
        });
      } else if (maxQty > 0 && newQty > maxQty) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: maxError,
          icon: 'error'
        });
      } else if (newQty > stock) {
        $el.val(oldQty);
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: 'We don\'t have enough stock on hand for the quantity you selected. Please try again.',
          icon: 'error'
        });
      } else {
        $el.val(newQty);
        $form.find('[name=qty\\[\\]]').attr('value', newQty);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/bind.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/bind.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFFdUI7QUFDakI7QUFDVztBQUNBO0FBQ2xCO0FBQ2lCO0FBQ007QUFDZ0I7QUFBQSxJQUUxRFUsSUFBSSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELEtBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosSUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxJQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUNyQkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1QyxJQUFJLENBQUNDLGFBQWEsR0FBR0QsQ0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzVDLElBQUksQ0FBQ0UsV0FBVyxHQUFHRixDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDMUMsSUFBSSxDQUFDRyxRQUFRLEdBQUdILENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUMzQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxJQUFJO0lBQzdCLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUcsSUFBSTtJQUVwQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBRWpCbkIseUVBQWlCLENBQUMsSUFBSSxDQUFDb0IsT0FBTyxDQUFDO0lBQy9CbkIsa0ZBQXlCLENBQUMsSUFBSSxDQUFDbUIsT0FBTyxDQUFDO0lBRXZDLElBQUlSLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7TUFDdEMsSUFBTUMsS0FBSyxH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QSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUXVpY2tFZGl0Q2FydC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUN0b3IuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVXcmFwLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0SG9sZGVyLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcmVwbGFjZUhvbGRlcnMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2JpbmQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBnaWZ0Q2VydENoZWNrIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwsIG1vZGFsVHlwZXMgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5pbXBvcnQgQ2FydEl0ZW1EZXRhaWxzIGZyb20gJy4vY29tbW9uL2NhcnQtaXRlbS1kZXRhaWxzJztcbmltcG9ydCBoYWxvUXVpY2tFZGl0Q2FydCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1F1aWNrRWRpdENhcnQnO1xuaW1wb3J0IGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQgPSAkKCdbZGF0YS1jYXJ0LWNvbnRlbnRdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xuICAgICAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKVxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcbiAgICAgICAgdGhpcy4kYWN0aXZlQ2FydEl0ZW1JZCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uID0gbnVsbDtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICBoYWxvUXVpY2tFZGl0Q2FydCh0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nKHRoaXMuY29udGV4dCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdwYWdlLXR5cGUtY2FydCcpKSB7XG4gICAgICAgICAgICBjb25zdCAkY2FydCA9ICQoJ1tkYXRhLWNhcnQtcHJldmlld10nKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0MiA9ICQoJ1tkYXRhLWNhcnQtcHJldmlldzJdJyk7XG5cbiAgICAgICAgICAgICRjYXJ0Lm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJ1tkYXRhLWNhcnRdJykub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGNhcnQyLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJ1tkYXRhLWNhcnRdJykub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0aW1lID0gJCgnLmNhcnQtbm90aWZpY2F0aW9uJykuZGF0YSgnY291bnQtZG93bicpO1xuICAgICAgICBpZigkKCcuY2FydC1ub3RpZmljYXRpb24nKS5sZW5ndGggJiYgdGltZSAhPSAnJyl7XG4gICAgICAgICAgICB2YXIgZHVyYXRpb24gPSB0aW1lICogNjAsXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9ICQoJy5jYXJ0LW5vdGlmaWNhdGlvbiAuY2FydC1jb3VudC1kb3duJyk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoZHVyYXRpb24sIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJyk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIDEgOiBvbGRRdHkgLSAxO1xuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1pbkVycm9yLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoTnVtYmVyKCRlbC52YWwoKSksIDEwKTtcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmICghbmV3UXR5KSB7XG4gICAgICAgICAgICBpbnZhbGlkRW50cnkgPSAkZWwudmFsKCk7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpbnZhbGlkRW50cnl9IGlzIG5vdCBhIHZhbGlkIGVudHJ5YCxcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycm9yLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7IHByb2R1Y3RGb3JDaGFuZ2VJZDogcHJvZHVjdElkLCAuLi50aGlzLmNvbnRleHQgfTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICBpZiAodGhpcy4kbW9kYWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJG1vZGFsID0gJCgnI21vZGFsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCcubW9kYWwtY29udGVudCcpLmFkZENsYXNzKCdoaWRlLWNvbnRlbnQnKTtcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCB0aGlzLiRtb2RhbCk7XG4gICAgICAgICAgICBjb25zdCBtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCA9ICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgJHByb2R1Y3RPcHRpb25zQ29udGFpbmVyLmNzcygnaGVpZ2h0JywgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQpO1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IENhcnRJdGVtRGV0YWlscyh0aGlzLiRtb2RhbCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcblxuICAgICAgICAgICAgbW9kYWwuc2V0dXBGb2N1c2FibGVFbGVtZW50cyhtb2RhbFR5cGVzLkNBUlRfQ0hBTkdFX1BST0RVQ1QpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoY3VycmVudFRhcmdldCkuZmluZCgnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ3AuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2FydC9jb250ZW50JyxcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlczogJ2NhcnQvc3RhdHVzLW1lc3NhZ2VzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcblxuICAgICAgICAgICAgJGNhcnRQYWdlVGl0bGUucmVwbGFjZVdpdGgocmVzcG9uc2UucGFnZVRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgICAgICAkKGBbZGF0YS1jYXJ0LWl0ZW1pZD0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUlkfSddYCwgdGhpcy4kY2FydENvbnRlbnQpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihgW2RhdGEtYWN0aW9uPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9ufSddYClcbiAgICAgICAgICAgICAgICAudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSA9IGJpbmQoZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgbGV0IHByZVZhbDtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsIGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWVkaXRdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUVkaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdElkJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gZWRpdCBpdGVtIGluIGNhcnRcbiAgICAgICAgICAgIHRoaXMuY2FydEVkaXRPcHRpb25zKGl0ZW1JZCwgcHJvZHVjdElkKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJyNlbXB0eUNhcnQnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5UaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbmZpcm0oJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtJykpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBuZXcgRGF0ZSgpIC0gb3BlblRpbWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBEZWx0YSB3b3JrYXJvdW5kIGZvciBDaHJvbWUncyBcInByZXZlbnQgcG9wdXBcIlxuICAgICAgICAgICAgaWYgKCFyZXN1bHQgJiYgZGVsdGEgPiAxMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpdGVtcz1bXTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50LmZpbmQoJy5jYXJ0LXJlbW92ZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKHRoaXMpLmRhdGEoJ2NhcnQtaXRlbWlkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsID0gMDtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtpZDppdGVtSWQscXVhbnRpdHk6MH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQudXBkYXRlKGl0ZW1zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5zaG93KCk7XG4gICAgICAgICAgICAkY29kZUlucHV0LnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY291cG9uRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjb2RlSW5wdXQudmFsKCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIEVtcHR5IGNvZGVcbiAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNlcnRDb250YWluZXIgPSAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9ICQoJy5jYXJ0LWdpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlKCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIWdpZnRDZXJ0Q2hlY2soY29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNlcnRJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxuXG4gICAgc3RhcnRUaW1lcihkdXJhdGlvbiwgZWxlbWVudCkge1xuICAgICAgICB2YXIgdGltZXIgPSBkdXJhdGlvbiwgbWludXRlcywgc2Vjb25kcztcbiAgICAgICAgdmFyIHN0YXJ0Q291bmRvd24gPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQodGltZXIgLyA2MCwgMTApXG4gICAgICAgICAgICBzZWNvbmRzID0gcGFyc2VJbnQodGltZXIgJSA2MCwgMTApO1xuXG4gICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzIDwgMTAgPyBcIjBcIiArIHNlY29uZHMgOiBzZWNvbmRzO1xuXG4gICAgICAgICAgICBlbGVtZW50LnRleHQobWludXRlcyArIFwiOlwiICsgc2Vjb25kcyk7XG5cbiAgICAgICAgICAgIGlmICgtLXRpbWVyIDwgMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhcnRDb3VuZG93bik7XG4gICAgICAgICAgICAgICAgJCgnLmNhcnQtbm90aWZpY2F0aW9uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cbn1cbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdFc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmlzRXN0aW1hdG9yRm9ybU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCBzaGlwcGluZ0VzdGltYXRvckFsZXJ0ID0gJCgnLnNoaXBwaW5nLXF1b3RlcycpO1xuXG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSAnZm9ybVtkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nO1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdGAsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXQnLCB0aGlzLiRlbGVtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvLyBlc3RpbWF0b3IgZXJyb3IgbWVzc2FnZXMgYXJlIGJlaW5nIGluamVjdGVkIGluIGh0bWwgYXMgYSByZXN1bHRcbiAgICAgICAgICAgIC8vIG9mIHVzZXIgc3VibWl0OyBjbGVhcmluZyBhbmQgYWRkaW5nIHJvbGUgb24gc3VibWl0IHByb3ZpZGVzXG4gICAgICAgICAgICAvLyByZWd1bGFyIGFubm91bmNlbWVudCBvZiB0aGVzZSBlcnJvciBtZXNzYWdlc1xuICAgICAgICAgICAgaWYgKHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQuYXR0cigncm9sZScpKSB7XG4gICAgICAgICAgICAgICAgc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQuYXR0cigncm9sZScsICdhbGVydCcpO1xuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnQ291bnRyeVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKHRvZ2dsZUJ1dHRvbiwgYnV0dG9uU2VsZWN0b3IsICR0b2dnbGVDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlID0gKHNlbGVjdG9yVG9BY3RpdmF0ZSkgPT4ge1xuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XG4gICAgICAgICAgICAkKGJ1dHRvblNlbGVjdG9yKS50ZXh0KCQoYCMke3NlbGVjdG9yVG9BY3RpdmF0ZX1gKS50ZXh0KCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWNsb3NlJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItYWRkJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkID0gIXRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZShldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNoaXBwaW5nLWVzdGltYXRlLXNob3dfX2J0bi1uYW1lJywgJGVzdGltYXRvckNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHNCYXNlLCB7IG9wdGlvbkNoYW5nZURlY29yYXRvciB9IGZyb20gJy4vcHJvZHVjdC1kZXRhaWxzLWJhc2UnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc0Jyb3dzZXJJRSwgY29udmVydEludG9BcnJheSB9IGZyb20gJy4vdXRpbHMvaWUtaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRJdGVtRGV0YWlscyBleHRlbmRzIFByb2R1Y3REZXRhaWxzQmFzZSB7XG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBjb250ZXh0LCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigkc2NvcGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnI0NhcnRFZGl0UHJvZHVjdEZpZWxkc0Zvcm0nLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lmh0bWwoKS50cmltKCkubGVuZ3RoO1xuICAgICAgICBjb25zdCBoYXNEZWZhdWx0T3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuZmluZCgnW2RhdGEtZGVmYXVsdF0nKS5sZW5ndGg7XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBvcHRpb25DaGFuZ2VDYWxsYmFjayA9IG9wdGlvbkNoYW5nZURlY29yYXRvci5jYWxsKHRoaXMsIGhhc0RlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAvLyBVcGRhdGUgcHJvZHVjdCBhdHRyaWJ1dGVzLiBBbHNvIHVwZGF0ZSB0aGUgaW5pdGlhbCB2aWV3IGluIGNhc2UgaXRlbXMgYXJlIG9vc1xuICAgICAgICAvLyBvciBoYXZlIGRlZmF1bHQgdmFyaWFudCBwcm9wZXJ0aWVzIHRoYXQgY2hhbmdlIHRoZSB2aWV3XG4gICAgICAgIGlmICgoaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSB0aGlzLmNvbnRleHQucHJvZHVjdEZvckNoYW5nZUlkO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgb3B0aW9uQ2hhbmdlQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0UHJvZHVjdFZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhbnRzbGlzdCA9IGNvbnZlcnRJbnRvQXJyYXkodmFsdWUuY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hMYWJlbEZvckNoZWNrZWRJbnB1dCA9IGlucHQgPT4gaW5wdC5kYXRhc2V0LnByb2R1Y3RBdHRyaWJ1dGVWYWx1ZSA9PT0gY2hlY2tlZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0VmFyaWFudHNsaXN0LmZpbHRlcihtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0KVswXTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBpc0Jyb3dzZXJJRSA/IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwoKS5pbm5lclRleHQudHJpbSgpIDogY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmNoaWxkcmVuWzBdIDogY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcHJvZHVjdFZhcmlhbnQgPSB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLmxlbmd0aCA9PT0gMCA/IG9wdGlvbnMuc29ydCgpLmpvaW4oJywgJykgOiAndW5zYXRpc2ZpZWQnO1xuICAgICAgICBjb25zdCB2aWV3ID0gJCgnLm1vZGFsLWhlYWRlci10aXRsZScpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5odG1sKCkubWF0Y2goLycoLio/KScvKVsxXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkID0gJChgW2RhdGEtbmFtZT1cIiR7cHJvZHVjdE5hbWV9XCJdYCk7XG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2hpZGUtY29udGVudCcpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5cbi8qKlxuICogSWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgZnJvbSBiY2FwcCwgYSB0ZXh0IGZpZWxkIHdpbGwgYmUgc2VudC4gVGhpcyB3aWxsIGNyZWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGhvbGQgb3B0aW9ucyBhZnRlciB0aGUgcmVtb3RlIHJlcXVlc3QuXG4gKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBtYWtlU3RhdGVSZXF1aXJlZChzdGF0ZUVsZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhdHRycyA9IF8udHJhbnNmb3JtKHN0YXRlRWxlbWVudC5wcm9wKCdhdHRyaWJ1dGVzJyksIChyZXN1bHQsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgICAgICByZXRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0tc2VsZWN0JyxcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcbiAgICB9O1xuXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxzZWxlY3Q+PC9zZWxlY3Q+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgIGNvbnN0ICRoaWRkZW5JbnB1dCA9ICQoJ1tuYW1lKj1cIkZvcm1GaWVsZElzVGV4dFwiXScpO1xuXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgJGhpZGRlbklucHV0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICgkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gU3RyaW5nIGlzIGluamVjdGVkIGZyb20gbG9jYWxpemVyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5zaG93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxuICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gYmUgYWJsZSB0byBzd2l0Y2ggdG8gYW4gaW5wdXQgZmllbGQgYW5kIGhpZGUgdGhlIHJlcXVpcmVkIGZpZWxkXG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGlkOiBhdHRycy5pZCxcbiAgICAgICAgJ2RhdGEtbGFiZWwnOiBhdHRyc1snZGF0YS1sYWJlbCddLFxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPGlucHV0IC8+JywgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzKSk7XG5cbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRuZXdFbGVtZW50KTtcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuaGlkZSgpO1xuICAgIH1cblxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVzQXJyYXlcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkc2VsZWN0RWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYWRkT3B0aW9ucyhzdGF0ZXNBcnJheSwgJHNlbGVjdEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcblxuICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiXCI+JHtzdGF0ZXNBcnJheS5wcmVmaXh9PC9vcHRpb24+YCk7XG5cbiAgICBpZiAoIV8uaXNFbXB0eSgkc2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgXy5lYWNoKHN0YXRlc0FycmF5LnN0YXRlcywgKHN0YXRlT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5pZH1cIj4ke3N0YXRlT2JqLm5hbWV9PC9vcHRpb24+YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwsIHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcclxuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4uL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcclxuaW1wb3J0IGdpZnRDZXJ0Q2hlY2sgZnJvbSAnLi4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcclxuaW1wb3J0IGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcgZnJvbSAnLi4vaGFsb3RoZW1lcy9oYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcblx0dmFyICRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcclxuXHR2YXIgJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xyXG4gICAgdmFyICRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XHJcbiAgICB2YXIgJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0XSAubG9hZGluZ092ZXJsYXknKTtcclxuXHJcblx0aWYoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9RdWlja0VkaXRDYXJ0ID09IHRydWUpe1x0ICAgIFxyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLWNhcnQtZWRpdC1pZF0nLCBldmVudCA9PiB7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcclxuXHRcdFx0XHRwcm9kdWN0SWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnQtZWRpdC1pZCcpLFxyXG5cdCAgICAgICAgICAgIGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpLFxyXG5cdCAgICAgICAgICAgICRxdHkgPSAkdGFyZ2V0LmRhdGEoJ2NhcnQtZWRpdC1xdWFudGl0eScpO1xyXG5cclxuXHQgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCksXHJcblx0ICAgICAgICBcdG9wdGlvbnMgPSB7XHJcblx0XHQgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2NvbmZpZ3VyZS1wcm9kdWN0LTInLFxyXG5cdFx0ICAgICAgICB9LFxyXG5cdFx0ICAgICAgICBvcHRpb25zMiA9IHtcclxuXHRcdCAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QtMycsXHJcblx0XHQgICAgICAgIH07XHJcblxyXG5cdFx0ICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGFsby1jYXJ0LS1lZGl0T3B0aW9ucycpO1xyXG5cdFx0ICAgIG1vZGFsLiRtb2RhbC5yZW1vdmVDbGFzcygpLmFkZENsYXNzKCdtb2RhbCBtb2RhbC0tZWRpdE9wdGlvbnMnKTtcclxuXHQgICAgICAgIG1vZGFsLm9wZW4oeyBzaXplOiAnbWVkaXVtJyB9KTtcclxuXHJcblx0ICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMuY29uZmlndXJlSW5DYXJ0KGl0ZW1JZCwgb3B0aW9uczIsIChlcnIyLCByZXNwb25zZTIpID0+IHtcclxuXHQgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBjb25zdCAkZmlyc3RJdGVtID0gbW9kYWwuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3QtZWRpdC1pdGVtRmlyc3QnKSxcclxuXHQgICAgICAgICAgICAgICAgXHQkZm9ybSA9ICRmaXJzdEl0ZW0uZmluZCgnLmZvcm0nKSxcclxuXHQgICAgICAgICAgICAgICAgXHQkZm9ybVF0eSA9ICRmaXJzdEl0ZW0uZmluZCgnLnByb2R1Y3QtZWRpdC1pbmNyZW1lbnQnKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICRmaXJzdEl0ZW0uYXR0cignZGF0YS1wcm9kdWN0LWVkaXQtaXRlbS1pZCcsIGl0ZW1JZCk7XHJcblx0ICAgICAgICAgICAgICAgICRmb3JtLmZpbmQoJy5wcm9kdWN0LWVkaXQtb3B0aW9uIC5jYXJ0LWVkaXQtcm93JykucHJlcGVuZChyZXNwb25zZTIuY29udGVudCk7XHJcblx0ICAgICAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJykuYXR0cigndmFsdWUnLCAkcXR5KTtcclxuXHQgICAgICAgICAgICAgICAgJGZvcm1RdHkuZmluZCgnLmZvcm0taW5wdXQnKS5hdHRyKHtcclxuXHQgICAgICAgICAgICAgICAgICAgICdjYXJ0LWl0ZW1pZCcgOiBpdGVtSWQsXHJcblx0ICAgICAgICAgICAgICAgICAgICAnaWQnIDogJ2VkaXRxdHktJyArIGl0ZW1JZCxcclxuXHQgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICRxdHlcclxuXHQgICAgICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICAgICAgICAgICRmb3JtUXR5LmZpbmQoJy5mb3JtLWxhYmVsJykuYXR0cih7XHJcblx0ICAgICAgICAgICAgICAgIFx0J2Zvcic6ICdlZGl0cXR5LScgKyBpdGVtSWRcclxuXHQgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuXHRcdCAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XHJcblx0XHQgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG5cclxuXHRcdCAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZmlyc3RJdGVtLCBhdHRyaWJ1dGVzRGF0YSk7XHJcblx0XHQgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZmlyc3RJdGVtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xyXG5cdFx0ICAgICAgICAgICAgfSk7XHJcblxyXG5cdFx0ICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoJGZpcnN0SXRlbSwgJGZvcm0pO1xyXG5cdCAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgfSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJ1tkYXRhLXByb2R1Y3QtZWRpdC1pdGVtLWlkXSAuZm9ybS1pbnB1dFtjYXJ0LWl0ZW1pZF0nLCBldmVudCA9PiB7XHJcblx0XHRcdGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cdCAgICAgICAgdmFyIHByZVZhbD0gJHRhcmdldC5kYXRhKCdwcmV2YWwnKTtcclxuXHQgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdCAgICAgICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2VVcGRhdGUoJHRhcmdldCwgcHJlVmFsKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnW2RhdGEtcHJvZHVjdC1lZGl0LW9wdGlvbi1jaGFuZ2VdJyAsIGV2ZW50ID0+IHtcclxuXHQgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xyXG5cdCAgICAgICAgY29uc3QgJGl0ZW0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCcucHJvZHVjdC1lZGl0LWl0ZW0nKTtcclxuXHQgICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xyXG5cdCAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xyXG5cclxuXHQgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG5cdCAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcclxuXHRcdCAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xyXG5cclxuXHQgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkaXRlbSwgYXR0cmlidXRlc0RhdGEpO1xyXG5cdCAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGl0ZW0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XHJcblx0ICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICBzZXRQcm9kdWN0VmFyaWFudCgkaXRlbSwgJGZvcm0pO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1lZGl0LWNhcnQtYWRkLW1vcmVdJywgZXZlbnQgPT4ge1xyXG5cdCAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgXHRcclxuXHQgICAgXHR2YXIgY291bnQgPSBwYXJzZUludCgkKCcubW9kYWwtLWVkaXRPcHRpb25zIFtkYXRhLWNvdW50XScpLmF0dHIoJ2RhdGEtY291bnQnKSksXHJcblx0XHRcdFx0cHJvZHVjdCA9ICQoJy5tb2RhbC0tZWRpdE9wdGlvbnMgLnByb2R1Y3QtZWRpdC1pdGVtRmlyc3QnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdwcm9kdWN0LWVkaXQtaXRlbUZpcnN0Jyk7XHJcblxyXG5cdCAgICAgICAgcHJvZHVjdC5hcHBlbmRUbygnLm1vZGFsLS1lZGl0T3B0aW9ucyAucHJvZHVjdC1lZGl0LXdyYXBwZXInKTtcclxuXHJcblx0ICAgICAgICB1cGRhdGVQcm9kdWN0Q2xvbmVkQXR0cmlidXRlcyhwcm9kdWN0LCBjb3VudCk7XHJcblxyXG5cdCAgICBcdGNvdW50ID0gY291bnQgKyAxO1xyXG5cdCAgICBcdCQoJy5tb2RhbC0tZWRpdE9wdGlvbnMgW2RhdGEtY291bnRdJykuYXR0cignZGF0YS1jb3VudCcsIGNvdW50KTtcclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnW2RhdGEtZWRpdC1jYXJ0LXJlbW92ZV0nLCBldmVudCA9PiB7XHJcblx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHQgICAgICAgIHZhciBwcm9kdWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCcucHJvZHVjdC1lZGl0LWl0ZW0nKTtcclxuXHJcblx0ICAgICAgICBpZihwcm9kdWN0Lmhhc0NsYXNzKCdwcm9kdWN0LWVkaXQtaXRlbUZpcnN0Jykpe1xyXG5cdCAgICAgICAgXHR2YXIgaXRlbUlkID0gcHJvZHVjdC5kYXRhKCdwcm9kdWN0LWVkaXQtaXRlbS1pZCcpO1xyXG5cclxuXHQgICAgICAgIFx0dXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZShpdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuXHQgICAgICAgICAgICAgICAgXHRtb2RhbC5jbG9zZSgpO1xyXG5cdCAgICAgICAgICAgICAgICBcdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0Q29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG5cdFx0ICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgfSBlbHNle1xyXG5cdCAgICAgICAgXHRwcm9kdWN0LnJlbW92ZSgpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1lZGl0LWNhcnQtYWRkLXRvLWNhcnRdJywgZXZlbnQgPT4ge1xyXG5cdCAgICAgICAgdmFyICRwcm9kdWN0ID0gJCgnLm1vZGFsLS1lZGl0T3B0aW9ucyAucHJvZHVjdC1lZGl0LWl0ZW0uaXMtdmlzaWJsZScpLFxyXG5cdCAgICBcdFx0JGZvcm0gPSAkcHJvZHVjdC5maW5kKCcuZm9ybScpLFxyXG5cdCAgICBcdFx0aXRlbUlkID0gJCgnLm1vZGFsLS1lZGl0T3B0aW9ucyAucHJvZHVjdC1lZGl0LWl0ZW1GaXJzdC5pcy12aXNpYmxlJykuZGF0YSgncHJvZHVjdC1lZGl0LWl0ZW0taWQnKSxcclxuXHQgICAgXHRcdGFyclBybyA9IG5ldyBBcnJheSgpLFxyXG5cdCAgICBcdFx0Y2hlY2sgPSBmYWxzZTtcclxuXHJcblx0ICAgICAgICAkcHJvZHVjdC5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG5cdCAgICAgICAgICAgIGFyclByby5wdXNoKGluZGV4KTtcclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xyXG5cdCAgICAgICAgICAgIGNoZWNrID0gY2hlY2tQcm9kdWN0KCRmb3JtLCBhcnJQcm8pO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIGlmIChjaGVjaykge1xyXG5cdCAgICAgICAgICAgIGlmICgoYXJyUHJvLmxlbmd0aCA+IDApICYmICh0eXBlb2YoaXRlbUlkKSAhPT0gJ3VuZGVmaW5lZCcpKSB7XHJcblx0ICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIFx0Y29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkKCdbZGF0YS1lZGl0LWNhcnQtYWRkLXRvLWNhcnRdJykudGV4dCgpO1xyXG4gICAgICAgIFx0XHRcdFx0XHRjb25zdCB3YWl0TWVzc2FnZSA9ICQoJ1tkYXRhLWVkaXQtY2FydC1hZGQtdG8tY2FydF0nKS5kYXRhKCd3YWl0TWVzc2FnZScpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1lZGl0LWNhcnQtYWRkLXRvLWNhcnRdJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAkKCdbZGF0YS1lZGl0LWNhcnQtYWRkLXRvLWNhcnRdJykudGV4dCh3YWl0TWVzc2FnZSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0KCRmb3JtLCAwLCBhcnJQcm8pO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0XHRcdCAgICAgICAgICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FydENvbnRlbnQoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLic7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuXHQgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcblx0ICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XHJcblxyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1jYXJ0LWVkaXQtaXRlbS1xdWFudGl0eV0gYnV0dG9uJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0LWl0ZW1pZCcpO1xyXG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkdGFyZ2V0LnNpYmxpbmdzKCcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnKTtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkdGFyZ2V0LnBhcmVudHMoJy5wcm9kdWN0LWVkaXQtaXRlbScpLmZpbmQoJy5mb3JtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcclxuICAgICAgICAgICAgY29uc3Qgc3RvY2sgPSAkZWwuZGF0YSgnc3RvY2snKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvVGl0bGU9ICQoJy5wcm9kdWN0LWVkaXQtdGl0bGUnKS5odG1sKCk7XHJcbiAgICAgICAgICAgIGxldCBpbnZhbGlkRW50cnk7XHJcblxyXG4gICAgICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGlmICghbmV3UXR5KSB7XHJcbiAgICAgICAgICAgICAgICBpbnZhbGlkRW50cnkgPSBuZXdRdHk7XHJcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgIHRleHQ6IGAke2ludmFsaWRFbnRyeX0gaXMgbm90IGEgdmFsaWQgZW50cnlgLFxyXG5cdCAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG5cdCAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG5cdCAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcclxuXHQgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuXHQgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG5cdCAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcclxuXHQgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuXHQgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPiBzdG9jaykge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG5cdCAgICAgICAgICAgICAgICB0ZXh0OiAnV2UgZG9uXFwndCBoYXZlIGVub3VnaCBzdG9jayBvbiBoYW5kIGZvciB0aGUgcXVhbnRpdHkgeW91IHNlbGVjdGVkLiBQbGVhc2UgdHJ5IGFnYWluLicsXHJcblx0ICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICRlbC52YWwobmV3UXR5KTtcclxuICAgICAgICAgICAgICAgJGZvcm0uZmluZCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nKS5hdHRyKCd2YWx1ZScsIG5ld1F0eSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblx0ICAgIGZ1bmN0aW9uIGFkZFRvQ2FydChmb3JtLCBpLCBhcnJQLCBjYXJ0SWQpIHtcclxuXHQgICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICAgICAgICAgIHJldHVybjtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICB2YXIgayA9IGFyclBbaV07XHJcblxyXG5cdCAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm1ba10pKSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuXHQgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xyXG5cdCAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcclxuXHQgICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICBpKys7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChpID49IGFyclAubGVuZ3RoKSB7XHJcblx0ICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblx0ICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0Q29udGVudCgpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclApO1xyXG5cdCAgICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGxpc3RlblF1YW50aXR5Q2hhbmdlVXBkYXRlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcclxuXHQgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydC1pdGVtaWQnKTtcclxuXHQgICAgICAgIGNvbnN0ICRlbCA9ICR0YXJnZXQ7XHJcblx0ICAgICAgICBjb25zdCAkZm9ybSA9ICR0YXJnZXQucGFyZW50cygnLnByb2R1Y3QtZWRpdC1pdGVtJykuZmluZCgnLmZvcm0nKTtcclxuXHQgICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XHJcblx0ICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xyXG5cdCAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xyXG5cdCAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xyXG5cdCAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xyXG5cdCAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoTnVtYmVyKCRlbC52YWwoKSksIDEwKTtcclxuXHQgICAgICAgIGNvbnN0IHN0b2NrID0gJGVsLmRhdGEoJ3N0b2NrJyk7XHJcblx0ICAgICAgICBsZXQgaW52YWxpZEVudHJ5O1xyXG5cclxuXHQgICAgICAgIGlmICghbmV3UXR5KSB7XHJcblx0ICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xyXG5cdCAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgIHRleHQ6IGAke2ludmFsaWRFbnRyeX0gaXMgbm90IGEgdmFsaWQgZW50cnlgLFxyXG5cdCAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG5cdCAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcclxuXHQgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcblx0ICAgICAgICAgICAgXHJcblx0ICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgIHRleHQ6IG1pbkVycm9yLFxyXG5cdCAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG5cdCAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xyXG5cdCAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuXHQgICAgICAgICAgIFxyXG5cdCAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG5cdCAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcclxuXHQgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH0gZWxzZSBpZiAobmV3UXR5ID4gc3RvY2spIHtcclxuXHQgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG5cdCAgICAgICAgICAgICAgICB0ZXh0OiAnV2UgZG9uXFwndCBoYXZlIGVub3VnaCBzdG9jayBvbiBoYW5kIGZvciB0aGUgcXVhbnRpdHkgeW91IHNlbGVjdGVkLiBQbGVhc2UgdHJ5IGFnYWluLicsXHJcblx0ICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICB9IGVsc2V7XHJcblx0ICAgICAgICBcdCRmb3JtLmZpbmQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJykuYXR0cigndmFsdWUnLCBuZXdRdHkpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBmaWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0oZm9ybURhdGEpIHtcclxuXHQgICAgICAgIHRyeSB7XHJcblx0ICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBGaWxlICYmICF2YWwubmFtZSAmJiAhdmFsLnNpemUpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSBjYXRjaCAoZSkge1xyXG5cdCAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBjaGVja1Byb2R1Y3QoZm9ybSwgYXJyUHJvKSB7XHJcblx0ICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xyXG5cclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJQcm8ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHQgICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXSxcclxuXHQgICAgICAgICAgICBcdCRmb3JtID0gJChmb3JtW2tdKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKCRmb3JtLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLmxlbmd0aCA+IDApIHtcclxuXHJcblx0ICAgICAgICAgICAgICAgIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJGZvcm0pO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IGZhbHNlKXtcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICByZXR1cm4gY2hlY2s7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGNoZWNrQmVmb3JlQWRkKCRhdHRyaWJ1dGVzKSB7XHJcblx0ICAgICAgICB2YXIgY2hlY2sgPSB0cnVlLFxyXG5cdCAgICAgICAgICAgIGF0dCA9IFwiXCI7XHJcblxyXG5cdCAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuXHQgICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge30gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLnZhbCgpKSB7fSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZm9jdXMoKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdzZWxlY3QnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG5cdCAgICAgICAgICAgIGlmICghJChlbGVtZW50KS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkpIHt9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5mb2N1cygpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ2lucHV0OnJhZGlvLCBpbnB1dDpjaGVja2JveCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcblx0ICAgICAgICAgICAgaWYgKGF0dCAhPSAkKGVsZW1lbnQpLmF0dHIoXCJuYW1lXCIpKSB7XHJcblx0ICAgICAgICAgICAgICAgIGF0dCA9ICQoZWxlbWVudCkuYXR0cihcIm5hbWVcIik7XHJcblx0ICAgICAgICAgICAgICAgIGlmICghJChlbGVtZW50KS5wcm9wKCdyZXF1aXJlZCcpKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJChcIltuYW1lPSdcIiArIGF0dCArIFwiJ106Y2hlY2tlZFwiKS52YWwoKSkge31cclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuYXR0cihcInR5cGVcIikgPT0gXCJjaGVja2JveFwiKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICByZXR1cm4gY2hlY2s7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RDbG9uZWRBdHRyaWJ1dGVzKCRzY29wZSwgbnVtYmVyKSB7XHJcblx0ICAgICAgICAkKCdsYWJlbFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaW5kZXgsIGF0dHJpYnV0ZSkgPT4ge1xyXG5cdCAgICAgICAgICAgIHZhciAkZm9ybUxhYmVsID0gJChhdHRyaWJ1dGUpLFxyXG5cdCAgICAgICAgICAgIFx0JGZvcm1JbnB1dCA9ICRmb3JtTGFiZWwucHJldigpLFxyXG5cdCAgICAgICAgICAgIFx0aWQgPSAkZm9ybUxhYmVsLmF0dHIoJ2ZvcicpLFxyXG5cdCAgICAgICAgICAgIFx0bmV3SWQgPSBpZCArIG51bWJlcjtcclxuXHJcblx0ICAgICAgICAgICAgJGZvcm1MYWJlbC5hdHRyKCdmb3InLCBuZXdJZCk7XHJcblx0ICAgICAgICAgICAgJGZvcm1JbnB1dC5hdHRyKCdpZCcsIG5ld0lkKTtcclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgICQoJ2xhYmVsW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUyXScsICRzY29wZSkuZWFjaCgoaW5kZXgsIGF0dHJpYnV0ZSkgPT4ge1xyXG5cdCAgICAgICAgICAgIHZhciAkZm9ybUxhYmVsID0gJChhdHRyaWJ1dGUpLFxyXG5cdCAgICAgICAgICAgIFx0JGZvcm1JbnB1dCA9ICRmb3JtTGFiZWwubmV4dCgpLFxyXG5cdCAgICAgICAgICAgIFx0aWQgPSAkZm9ybUxhYmVsLmF0dHIoJ2ZvcicpLFxyXG5cdCAgICAgICAgICAgIFx0bmV3SWQgPSBpZCArIG51bWJlcjtcclxuXHJcblx0ICAgICAgICAgICAgJGZvcm1MYWJlbC5hdHRyKCdmb3InLCBuZXdJZCk7XHJcblx0ICAgICAgICAgICAgJGZvcm1JbnB1dC5hdHRyKCdpZCcsIG5ld0lkKTtcclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgICQoJ2lucHV0LmZvcm0tY2hlY2tib3gnLCAkc2NvcGUpLmVhY2goKGluZGV4LCBhdHRyaWJ1dGUpID0+IHtcclxuXHQgICAgICAgICAgICB2YXIgJGZvcm1JbnB1dCA9ICQoYXR0cmlidXRlKSxcclxuXHQgICAgICAgICAgICBcdCRmb3JtTGFiZWwgPSAkZm9ybUlucHV0Lm5leHQoKSxcclxuXHQgICAgICAgICAgICBcdGlkID0gJGZvcm1MYWJlbC5hdHRyKCdmb3InKSxcclxuXHQgICAgICAgICAgICBcdG5ld0lkID0gaWQgKyBudW1iZXI7XHJcblxyXG5cdCAgICAgICAgICAgICRmb3JtTGFiZWwuYXR0cignZm9yJywgbmV3SWQpO1xyXG5cdCAgICAgICAgICAgICRmb3JtSW5wdXQuYXR0cignaWQnLCBuZXdJZCk7XHJcblx0ICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICAkKCdzZWxlY3QuZm9ybS1zZWxlY3QnLCAkc2NvcGUpLmVhY2goKGluZGV4LCBhdHRyaWJ1dGUpID0+IHtcclxuXHQgICAgICAgICAgICB2YXIgJGZvcm1TZWxlY3QgPSAkKGF0dHJpYnV0ZSksXHJcblx0ICAgICAgICAgICAgXHQkZm9ybUxhYmVsID0gJGZvcm1TZWxlY3QucHJldigpLFxyXG5cdCAgICAgICAgICAgIFx0aWQgPSAkZm9ybUxhYmVsLmF0dHIoJ2ZvcicpLFxyXG5cdCAgICAgICAgICAgIFx0bmV3SWQgPSBpZCArIG51bWJlcjtcclxuXHJcblx0ICAgICAgICAgICAgJGZvcm1MYWJlbC5hdHRyKCdmb3InLCBuZXdJZCk7XHJcblx0ICAgICAgICAgICAgJGZvcm1TZWxlY3QuYXR0cignaWQnLCBuZXdJZCk7XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gc2V0UHJvZHVjdFZhcmlhbnQoaXRlbSwgZm9ybSkge1xyXG5cdCAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xyXG5cdCAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFtdO1xyXG5cclxuXHQgICAgICAgICQuZWFjaCgkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nLCBmb3JtKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xyXG5cdCAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG5cdCAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XHJcblx0ICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xyXG5cdCAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xyXG5cdCAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcclxuXHQgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcclxuXHQgICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcblx0ICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG5cdCAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KHNlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XHJcblx0ICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KGxhYmVsKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChsYWJlbC50aXRsZSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpZZXNgKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Ok5vYCk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkgOiAndW5zYXRpc2ZpZWQnO1xyXG5cclxuXHQgICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xyXG5cdCAgICAgICAgXHRpdGVtLmZpbmQoJy5wcm9kdWN0LWVkaXQtdmFyaWFudCcpLmVtcHR5KCk7XHJcblxyXG5cdCAgICAgICAgXHQkLmVhY2gocHJvZHVjdFZhcmlhbnQsIChpbmRleCwgdmFsdWUpID0+IHtcclxuXHQgICAgICAgICAgICBcdGl0ZW0uZmluZCgnLnByb2R1Y3QtZWRpdC12YXJpYW50JykuYXBwZW5kKCc8c3Bhbj4nK3Byb2R1Y3RWYXJpYW50W2luZGV4XS50b1N0cmluZygpLnNwbGl0KCc6JykucG9wKCkrJzwvc3Bhbj4nKTtcclxuXHQgICAgICAgIFx0fSk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuXHQgICAgICAgIHJldHVybiB7XHJcblx0ICAgICAgICAgICAgJHByaWNlV2l0aFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuXHQgICAgICAgICAgICBycnBXaXRoVGF4OiB7XHJcblx0ICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcclxuXHQgICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcblx0ICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuXHQgICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcclxuXHQgICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcclxuXHQgICAgICAgICAgICB9LFxyXG5cdCAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XHJcblx0ICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcblx0ICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICBwcmljZVNhdmVkOiB7XHJcblx0ICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG5cdCAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcblx0ICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgJHN0b2NrTGVmdDogJCgnW2RhdGEtc3RvY2stbGVmdF0nLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgICRzdG9ja0xlZnRXcmFwcGVyOiAkKCcucHJvZHVjdC1lZGl0LW9wdGlvbnNTdG9jaycsICRzY29wZSksXHJcblx0ICAgICAgICAgICAgJHF1YW50aXR5OiB7XHJcblx0ICAgICAgICAgICAgICAgICRpbnB1dDogJCgnLnByb2R1Y3QtZWRpdC1pbmNyZW1lbnQgW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxyXG5cdCAgICAgICAgICAgIH0sXHJcblx0ICAgICAgICAgICAgJGltYWdlOiAkKCcucHJvZHVjdC1lZGl0LWltYWdlJywgJHNjb3BlKVxyXG5cdCAgICAgICAgfTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XHJcblx0ICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xyXG5cdCAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcclxuXHQgICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xyXG5cclxuXHQgICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcclxuXHQgICAgICAgICAgICByZXR1cm47XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcclxuXHQgICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xyXG5cdCAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xyXG5cdCAgICAgICAgICAgICAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UoJHNjb3BlLCBkYXRhKSB7XHJcblx0ICAgIFx0Y29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XHJcblxyXG5cdCAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhLmltYWdlKSkge1xyXG5cdCAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcclxuXHQgICAgICAgICAgICAgICAgZGF0YS5pbWFnZS5kYXRhLCB7ICcxeCc6IGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0dGh1bWJfc2l6ZSB9LFxyXG5cdCAgICAgICAgICAgICk7XHJcblxyXG5cdCAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChkYXRhLmltYWdlLmRhdGEpO1xyXG5cclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwuJGltYWdlLmZpbmQoJ2ltZycpLmF0dHIoe1xyXG5cdCAgICAgICAgICAgICAgICAnc3Jjc2V0JzogbWFpbkltYWdlVXJsLFxyXG5cdCAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiBtYWluSW1hZ2VTcmNzZXRcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XHJcblx0ICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSBnZXRWaWV3TW9kZWwoJHNjb3BlKTtcclxuXHJcblx0ICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xyXG5cdCAgICAgICAgICAgICRzY29wZS5yZW1vdmVDbGFzcygnaXMtdmlzaWJsZScpLmFkZENsYXNzKCdpcy1oaWRkZW4nKTtcclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwuJHF1YW50aXR5LiRpbnB1dC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAkc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpLmFkZENsYXNzKCdpcy12aXNpYmxlJyk7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLiRxdWFudGl0eS4kaW5wdXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlQm94KCRzY29wZSwgbWVzc2FnZSkge1xyXG5cdCAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdC1lZGl0LW1lc3NhZ2UnLCAkc2NvcGUpO1xyXG5cclxuXHQgICAgICAgIGlmIChtZXNzYWdlKSB7XHJcblx0ICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcclxuXHQgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XHJcblx0ICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcclxuXHQgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG5cdCAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG5cdCAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xyXG5cdCAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XHJcblx0ICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcblx0ICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XHJcblx0ICAgICAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xyXG5cclxuXHQgICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xyXG5cdCAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xyXG5cdCAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG5cdCAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcblx0ICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG5cdCAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KCRzY29wZSwgZGF0YSwgY29udGVudCA9IG51bGwpIHtcclxuXHQgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IGdldFZpZXdNb2RlbCgkc2NvcGUpO1xyXG5cclxuXHQgICAgICAgIGlmIChfLmlzTnVtYmVyKGRhdGEuc3RvY2spKSB7XHJcblx0ICAgICAgICAgICAgaWYoKGRhdGEuc3RvY2sgPD0gcGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fc3RvY2tfbGV2ZWxfbGltaXQpKSAmJiAoZGF0YS5zdG9jayA+IDApKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG5cdCAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHN0b2NrTGVmdC50ZXh0KGRhdGEuc3RvY2spO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZXtcclxuXHQgICAgICAgICAgICAgICAgdmlld01vZGVsLiRzdG9ja0xlZnRXcmFwcGVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICB2aWV3TW9kZWwuJHF1YW50aXR5LiRpbnB1dC5hdHRyKCdkYXRhLXN0b2NrJywgZGF0YS5zdG9jayk7XHJcblx0ICAgICAgICB9IGVsc2V7XHJcblx0ICAgICAgICBcdHZpZXdNb2RlbC4kcXVhbnRpdHkuJGlucHV0LnJlbW92ZUF0dHIoJ2RhdGEtc3RvY2snKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBzaG93TWVzc2FnZUJveCgkc2NvcGUsIGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XHJcblxyXG5cdCAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcclxuXHQgICAgICAgICAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUygkc2NvcGUsIGRhdGEpO1xyXG5cdCAgICAgICAgc2hvd1Byb2R1Y3RJbWFnZSgkc2NvcGUsIGRhdGEpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xyXG5cdCAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xyXG5cdCAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XHJcblx0ICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcblx0ICAgICAgICBjb25zdCAkc2VsZWN0ID0gJGF0dHJpYnV0ZS5wYXJlbnQoKTtcclxuXHJcblx0ICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuXHQgICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XHJcblxyXG5cdCAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcclxuXHQgICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHQgICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpICsgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcblx0ICAgICAgICBpZiAoZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xyXG5cdCAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XHJcblx0ICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcclxuXHQgICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcclxuXHQgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHQgICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XHJcblx0ICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcclxuXHJcblx0ICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gdXBkYXRlQ2FydENvbnRlbnQoKXtcclxuXHQgICAgXHRpZiAoISQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS10eXBlLWNhcnQnKSkge1xyXG5cdCAgICBcdFx0Y29uc3QgbG9hZGluZ0NsYXNzID0gJ2lzLWxvYWRpbmcnO1xyXG5cdFx0XHQgICAgY29uc3QgJGNhcnREcm9wZG93biA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24nKTtcclxuXHRcdFx0ICAgIGNvbnN0ICRjYXJ0TG9hZGluZyA9ICQoJzxkaXYgY2xhc3M9XCJsb2FkaW5nT3ZlcmxheVwiPjwvZGl2PicpO1xyXG5cdFx0XHQgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XHJcblxyXG5cdFx0ICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG5cdFx0ICAgICAgICAgICAgdGVtcGxhdGU6ICdjb21tb24vY2FydC1wcmV2aWV3JyxcclxuXHRcdCAgICAgICAgfTtcclxuXHJcblx0XHQgICAgICAgICRjYXJ0RHJvcGRvd25cclxuXHRcdCAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nQ2xhc3MpXHJcblx0XHQgICAgICAgICAgICAucHJlcGVuZCgkY2FydExvYWRpbmcpO1xyXG5cdFx0ICAgICAgICAkY2FydExvYWRpbmdcclxuXHRcdCAgICAgICAgICAgIC5zaG93KCk7XHJcblxyXG5cdFx0ICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcblx0XHQgICAgICAgICAgICAkY2FydERyb3Bkb3duXHJcblx0XHQgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcclxuXHRcdCAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZSk7XHJcblx0XHQgICAgICAgICAgICAkY2FydExvYWRpbmdcclxuXHRcdCAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG5cclxuXHRcdCAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJChyZXNwb25zZSkuZmluZCgnW2RhdGEtY2FydC1xdWFudGl0eV0nKS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScpLmRhdGEoJ2NhcnRRdWFudGl0eScpIHx8IDA7XHJcblxyXG5cdFx0ICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XHJcblx0XHQgICAgICAgICAgICBoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nKGNvbnRleHQpO1xyXG5cdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICB9IGVsc2Uge1xyXG5cdFx0ICAgIFx0cmVmcmVzaENvbnRlbnQoKTtcclxuXHRcdCAgICBcdGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcoY29udGV4dCk7XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcclxuXHQgICAgICAgIGNvbnN0ICRjYXJ0SXRlbXNSb3dzID0gJCgnW2RhdGEtaXRlbS1yb3ddJywgJGNhcnRDb250ZW50KTtcclxuXHQgICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xyXG5cclxuXHQgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcblx0ICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuXHQgICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXHJcblx0ICAgICAgICAgICAgICAgIHRvdGFsczogJ2NhcnQvdG90YWxzJyxcclxuXHQgICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcclxuXHQgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXHJcblx0ICAgICAgICAgICAgfSxcclxuXHQgICAgICAgIH07XHJcblxyXG5cdCAgICAgICAgJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuXHQgICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcclxuXHQgICAgICAgIGlmIChyZW1vdmUgJiYgJGNhcnRJdGVtc1Jvd3MubGVuZ3RoID09PSAxKSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcblx0ICAgICAgICAgICAgJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XHJcblx0ICAgICAgICAgICAgJGNhcnRUb3RhbHMuaHRtbChyZXNwb25zZS50b3RhbHMpO1xyXG5cdCAgICAgICAgICAgICRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XHJcblxyXG5cdCAgICAgICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XHJcblx0ICAgICAgICAgICAgYmluZEV2ZW50cygpO1xyXG5cdCAgICAgICAgICAgICRvdmVybGF5LmhpZGUoKTtcclxuXHJcblx0ICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsICRjYXJ0Q29udGVudCkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcclxuXHJcblx0ICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xyXG5cdCAgICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGNhcnRVcGRhdGUoJHRhcmdldCkge1xyXG5cdCAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XHJcblx0ICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xyXG5cdCAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XHJcblx0ICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xyXG5cdCAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcclxuXHQgICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcclxuXHQgICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcclxuXHQgICAgICAgIGNvbnN0IG5ld1F0eSA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XHJcblx0ICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XHJcblx0ICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgIHRleHQ6IG1pbkVycm9yLFxyXG5cdCAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG5cdCAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xyXG5cdCAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG5cdCAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcclxuXHQgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAkb3ZlcmxheS5zaG93KCk7XHJcblxyXG5cdCAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuXHQgICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXHJcblx0ICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcblx0ICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuXHQgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH0pO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwgPSBudWxsKSB7XHJcblx0ICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcclxuXHQgICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XHJcblx0ICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xyXG5cdCAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcclxuXHQgICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcclxuXHQgICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcclxuXHQgICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcclxuXHQgICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XHJcblx0ICAgICAgICBsZXQgaW52YWxpZEVudHJ5O1xyXG5cclxuXHQgICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcclxuXHQgICAgICAgIGlmICghbmV3UXR5KSB7XHJcblx0ICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xyXG5cdCAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuXHQgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcclxuXHQgICAgICAgICAgICAgICAgdGV4dDogYCR7aW52YWxpZEVudHJ5fSBpcyBub3QgYSB2YWxpZCBlbnRyeWAsXHJcblx0ICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICB9IGVsc2UgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xyXG5cdCAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuXHQgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcclxuXHQgICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXHJcblx0ICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XHJcblx0ICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG5cdCAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xyXG5cdCAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcclxuXHQgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAkb3ZlcmxheS5zaG93KCk7XHJcblxyXG5cdCAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuXHQgICAgICAgICAgICAkb3ZlcmxheS5oaWRlKCk7XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXHJcblx0ICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgcmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XHJcblx0ICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuXHQgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH0pO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcclxuXHQgICAgICAgICRvdmVybGF5LnNob3coKTtcclxuXHQgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG5cdCAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcblx0ICAgICAgICAgICAgICAgIHJlZnJlc2hDb250ZW50KHRydWUpO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuXHQgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH0pO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBiaW5kQ2FydEV2ZW50cygpIHtcclxuXHQgICAgICAgIC8vIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcclxuXHQgICAgICAgIC8vIGNvbnN0IGNhcnRVcGRhdGUgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xyXG5cdCAgICAgICAgLy8gY29uc3QgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuXHQgICAgICAgIC8vIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XHJcblx0ICAgICAgICBsZXQgcHJlVmFsO1xyXG5cclxuXHQgICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsICRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdCAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cclxuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHQgICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xyXG5cdCAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgJCgnW2RhdGEtY2FydC11cGRhdGVdJywgJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0ICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0ICAgICAgICAgICAgY2FydFVwZGF0ZSgkdGFyZ2V0KTtcclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgJGNhcnRDb250ZW50KS5vbignZm9jdXMnLCAoZXZlbnQpID0+IHtcclxuXHQgICAgICAgICAgICBwcmVWYWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpO1xyXG5cdCAgICAgICAgfSkuY2hhbmdlKGV2ZW50ID0+IHtcclxuXHQgICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHQgICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xyXG5cdCAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0ICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0SXRlbWlkJyk7XHJcblx0ICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XHJcblxyXG5cdCAgICAgICAgICAgIHN3YWwuZmlyZSh7XHJcblx0ICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuXHQgICAgICAgICAgICAgICAgaWNvbjogJ3dhcm5pbmcnLFxyXG5cdCAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG5cdCAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHQgICAgICAgIH0pO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xyXG5cdCAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xyXG5cdCAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcclxuXHQgICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XHJcblxyXG5cdCAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHQgICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcclxuXHQgICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcclxuXHQgICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xyXG5cdCAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0ICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XHJcblx0ICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcclxuXHQgICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykuc2hvdygpO1xyXG5cdCAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuXHQgICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcclxuXHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKCFjb2RlKSB7XHJcblx0ICAgICAgICAgICAgICAgIHJldHVybiBzd2FsKHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRleHQ6ICRjb2RlSW5wdXQuZGF0YSgnZXJyb3InKSxcclxuXHQgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcblx0ICAgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZWZyZXNoQ29udGVudCgpO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuXHQgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcclxuXHQgICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xyXG5cdCAgICAgICAgY29uc3QgJGNlcnRGb3JtID0gJCgnLmNhcnQtZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XHJcblx0ICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XHJcblxyXG5cdCAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0ICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcclxuXHQgICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcclxuXHQgICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuXHQgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdCAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xyXG5cdCAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLnRvZ2dsZSgpO1xyXG5cdCAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xyXG5cdCAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcblx0ICAgICAgICAgICAgY29uc3QgY29kZSA9ICRjZXJ0SW5wdXQudmFsKCk7XHJcblxyXG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdCAgICAgICAgICAgIGlmICghZ2lmdENlcnRDaGVjayhjb2RlKSkge1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXHJcblx0ICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG5cdCAgICAgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcclxuXHQgICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgcmVmcmVzaENvbnRlbnQoKTtcclxuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuXHQgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfSk7XHJcblx0ICAgICAgICB9KTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcclxuXHQgICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XHJcblxyXG5cdCAgICAgICAgJCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcblx0ICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcclxuXHQgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG5cdCAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXHJcblx0ICAgICAgICAgICAgfTtcclxuXHJcblx0ICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0ICAgICAgICAgICAgbW9kYWwub3BlbigpO1xyXG5cclxuXHQgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBiaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xyXG5cdCAgICAgICAgICAgIH0pO1xyXG5cdCAgICAgICAgfSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xyXG5cdCAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cdCAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG5cdCAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcclxuXHQgICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKCFpZCkge1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm47XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcclxuXHJcblx0ICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcclxuXHQgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xyXG5cclxuXHQgICAgICAgICAgICBpZiAoYWxsb3dNZXNzYWdlKSB7XHJcblx0ICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5oaWRlKCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHJcblx0ICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcclxuXHQgICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuXHQgICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XHJcblx0ICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcclxuXHQgICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uc2hvdygpO1xyXG5cdCAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5oaWRlKCk7XHJcblx0ICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAkKCdbbmFtZT1cImdpZnR3cmFwdHlwZVwiXScpLm9uKCdjbGljaycsIHRvZ2dsZVZpZXdzKTtcclxuXHJcblx0ICAgICAgICB0b2dnbGVWaWV3cygpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG5cdCAgICAgICAgYmluZENhcnRFdmVudHMoKTtcclxuXHQgICAgICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKTtcclxuXHQgICAgICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcclxuXHQgICAgICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKTtcclxuXHJcblx0ICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXHJcblx0ICAgICAgICB2YXIgc2hpcHBpbmdFc3RpbWF0b3IgPSBuZXcgU2hpcHBpbmdFc3RpbWF0b3IoJCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpKTtcclxuXHQgICAgfVxyXG5cdH1cclxufVxyXG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBpbnN0YW5jZSBvZiBgQ3RvcmAgcmVnYXJkbGVzcyBvZlxuICogd2hldGhlciBpdCB3YXMgaW52b2tlZCBhcyBwYXJ0IG9mIGEgYG5ld2AgZXhwcmVzc2lvbiBvciBieSBgY2FsbGAgb3IgYGFwcGx5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ3RvciBUaGUgY29uc3RydWN0b3IgdG8gd3JhcC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUN0b3IoQ3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlIGEgYHN3aXRjaGAgc3RhdGVtZW50IHRvIHdvcmsgd2l0aCBjbGFzcyBjb25zdHJ1Y3RvcnMuIFNlZVxuICAgIC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtZnVuY3Rpb24tb2JqZWN0cy1jYWxsLXRoaXNhcmd1bWVudC1hcmd1bWVudHNsaXN0XG4gICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBuZXcgQ3RvcjtcbiAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0pO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICBjYXNlIDM6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XG4gICAgICBjYXNlIDY6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdKTtcbiAgICAgIGNhc2UgNzogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0sIGFyZ3NbNl0pO1xuICAgIH1cbiAgICB2YXIgdGhpc0JpbmRpbmcgPSBiYXNlQ3JlYXRlKEN0b3IucHJvdG90eXBlKSxcbiAgICAgICAgcmVzdWx0ID0gQ3Rvci5hcHBseSh0aGlzQmluZGluZywgYXJncyk7XG5cbiAgICAvLyBNaW1pYyB0aGUgY29uc3RydWN0b3IncyBgcmV0dXJuYCBiZWhhdmlvci5cbiAgICAvLyBTZWUgaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTMuMi4yIGZvciBtb3JlIGRldGFpbHMuXG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiB0aGlzQmluZGluZztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDdG9yO1xuIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBjcmVhdGVDdG9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQ3RvcicpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGZ1bmN0aW9uIG1ldGFkYXRhLiAqL1xudmFyIFdSQVBfQklORF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3cmFwcyBgZnVuY2AgdG8gaW52b2tlIGl0IHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nXG4gKiBvZiBgdGhpc0FyZ2AgYW5kIGBwYXJ0aWFsc2AgcHJlcGVuZGVkIHRvIHRoZSBhcmd1bWVudHMgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBjcmVhdGVXcmFwYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJ0aWFscyBUaGUgYXJndW1lbnRzIHRvIHByZXBlbmQgdG8gdGhvc2UgcHJvdmlkZWQgdG9cbiAqICB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgd3JhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGFydGlhbChmdW5jLCBiaXRtYXNrLCB0aGlzQXJnLCBwYXJ0aWFscykge1xuICB2YXIgaXNCaW5kID0gYml0bWFzayAmIFdSQVBfQklORF9GTEFHLFxuICAgICAgQ3RvciA9IGNyZWF0ZUN0b3IoZnVuYyk7XG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgYXJnc0luZGV4ID0gLTEsXG4gICAgICAgIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBsZWZ0SW5kZXggPSAtMSxcbiAgICAgICAgbGVmdExlbmd0aCA9IHBhcnRpYWxzLmxlbmd0aCxcbiAgICAgICAgYXJncyA9IEFycmF5KGxlZnRMZW5ndGggKyBhcmdzTGVuZ3RoKSxcbiAgICAgICAgZm4gPSAodGhpcyAmJiB0aGlzICE9PSByb290ICYmIHRoaXMgaW5zdGFuY2VvZiB3cmFwcGVyKSA/IEN0b3IgOiBmdW5jO1xuXG4gICAgd2hpbGUgKCsrbGVmdEluZGV4IDwgbGVmdExlbmd0aCkge1xuICAgICAgYXJnc1tsZWZ0SW5kZXhdID0gcGFydGlhbHNbbGVmdEluZGV4XTtcbiAgICB9XG4gICAgd2hpbGUgKGFyZ3NMZW5ndGgtLSkge1xuICAgICAgYXJnc1tsZWZ0SW5kZXgrK10gPSBhcmd1bWVudHNbKythcmdzSW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbHkoZm4sIGlzQmluZCA/IHRoaXNBcmcgOiB0aGlzLCBhcmdzKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQYXJ0aWFsO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGNyZWF0ZVdyYXAgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwJyksXG4gICAgZ2V0SG9sZGVyID0gcmVxdWlyZSgnLi9fZ2V0SG9sZGVyJyksXG4gICAgcmVwbGFjZUhvbGRlcnMgPSByZXF1aXJlKCcuL19yZXBsYWNlSG9sZGVycycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBmdW5jdGlvbiBtZXRhZGF0YS4gKi9cbnZhciBXUkFQX0JJTkRfRkxBRyA9IDEsXG4gICAgV1JBUF9QQVJUSUFMX0ZMQUcgPSAzMjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2BcbiAqIGFuZCBgcGFydGlhbHNgIHByZXBlbmRlZCB0byB0aGUgYXJndW1lbnRzIGl0IHJlY2VpdmVzLlxuICpcbiAqIFRoZSBgXy5iaW5kLnBsYWNlaG9sZGVyYCB2YWx1ZSwgd2hpY2ggZGVmYXVsdHMgdG8gYF9gIGluIG1vbm9saXRoaWMgYnVpbGRzLFxuICogbWF5IGJlIHVzZWQgYXMgYSBwbGFjZWhvbGRlciBmb3IgcGFydGlhbGx5IGFwcGxpZWQgYXJndW1lbnRzLlxuICpcbiAqICoqTm90ZToqKiBVbmxpa2UgbmF0aXZlIGBGdW5jdGlvbiNiaW5kYCwgdGhpcyBtZXRob2QgZG9lc24ndCBzZXQgdGhlIFwibGVuZ3RoXCJcbiAqIHByb3BlcnR5IG9mIGJvdW5kIGZ1bmN0aW9ucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7Li4uKn0gW3BhcnRpYWxzXSBUaGUgYXJndW1lbnRzIHRvIGJlIHBhcnRpYWxseSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYm91bmQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGdyZWV0KGdyZWV0aW5nLCBwdW5jdHVhdGlvbikge1xuICogICByZXR1cm4gZ3JlZXRpbmcgKyAnICcgKyB0aGlzLnVzZXIgKyBwdW5jdHVhdGlvbjtcbiAqIH1cbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIHZhciBib3VuZCA9IF8uYmluZChncmVldCwgb2JqZWN0LCAnaGknKTtcbiAqIGJvdW5kKCchJyk7XG4gKiAvLyA9PiAnaGkgZnJlZCEnXG4gKlxuICogLy8gQm91bmQgd2l0aCBwbGFjZWhvbGRlcnMuXG4gKiB2YXIgYm91bmQgPSBfLmJpbmQoZ3JlZXQsIG9iamVjdCwgXywgJyEnKTtcbiAqIGJvdW5kKCdoaScpO1xuICogLy8gPT4gJ2hpIGZyZWQhJ1xuICovXG52YXIgYmluZCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGZ1bmMsIHRoaXNBcmcsIHBhcnRpYWxzKSB7XG4gIHZhciBiaXRtYXNrID0gV1JBUF9CSU5EX0ZMQUc7XG4gIGlmIChwYXJ0aWFscy5sZW5ndGgpIHtcbiAgICB2YXIgaG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKHBhcnRpYWxzLCBnZXRIb2xkZXIoYmluZCkpO1xuICAgIGJpdG1hc2sgfD0gV1JBUF9QQVJUSUFMX0ZMQUc7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVdyYXAoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMsIGhvbGRlcnMpO1xufSk7XG5cbi8vIEFzc2lnbiBkZWZhdWx0IHBsYWNlaG9sZGVycy5cbmJpbmQucGxhY2Vob2xkZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJnaWZ0Q2VydENoZWNrIiwidXRpbHMiLCJTaGlwcGluZ0VzdGltYXRvciIsImRlZmF1bHRNb2RhbCIsIm1vZGFsVHlwZXMiLCJzd2FsIiwiQ2FydEl0ZW1EZXRhaWxzIiwiaGFsb1F1aWNrRWRpdENhcnQiLCJoYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nIiwiQ2FydCIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJG1vZGFsIiwiJGNhcnRDb250ZW50IiwiJCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRvdmVybGF5IiwiaGlkZSIsIiRhY3RpdmVDYXJ0SXRlbUlkIiwiJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uIiwiYmluZEV2ZW50cyIsImNvbnRleHQiLCJoYXNDbGFzcyIsIiRjYXJ0IiwiJGNhcnQyIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInRpbWUiLCJkYXRhIiwibGVuZ3RoIiwiZHVyYXRpb24iLCJlbGVtZW50Iiwic3RhcnRUaW1lciIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiX3RoaXMiLCJpdGVtSWQiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiX3RoaXMyIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiY2FydFJlbW92ZUl0ZW0iLCJfdGhpczMiLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwicHJvZHVjdElkIiwiX3RoaXM0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvZHVjdEZvckNoYW5nZUlkIiwibW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwiZmluZCIsImFkZENsYXNzIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsIiRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lciIsIm1vZGFsQm9keVJlc2VydmVkSGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjc3MiLCJwcm9kdWN0RGV0YWlscyIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwic2V0dXBGb2N1c2FibGVFbGVtZW50cyIsIkNBUlRfQ0hBTkdFX1BST0RVQ1QiLCJob29rcyIsImN1cnJlbnRUYXJnZXQiLCIkZm9ybSIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJfdGhpczUiLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJmaWx0ZXIiLCJiaW5kQ2FydEV2ZW50cyIsIl90aGlzNiIsImRlYm91bmNlVGltZW91dCIsIl9iaW5kIiwiX2RlYm91bmNlIiwib25RdHlGb2N1cyIsInZhbHVlIiwiY2hhbmdlIiwic3RyaW5nIiwic2hvd0NhbmNlbEJ1dHRvbiIsInRoZW4iLCJvcGVuVGltZSIsIkRhdGUiLCJjb25maXJtIiwiZGVsdGEiLCJpdGVtcyIsImVhY2giLCJwdXNoIiwiaWQiLCJ1cGRhdGUiLCJhbGVydCIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCJfdGhpczciLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCJfdGhpczgiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiX3RoaXM5IiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXN0aW1hdG9yIiwidGltZXIiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0YXJ0Q291bmRvd24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkZWZhdWx0Iiwic3RhdGVDb3VudHJ5Iiwibm9kIiwiVmFsaWRhdG9ycyIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImlzRXN0aW1hdG9yRm9ybU9wZW5lZCIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdFc3RpbWF0b3JBbGVydCIsInNoaXBwaW5nVmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiYXR0ciIsInJlbW92ZUF0dHIiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiaXMiLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVFc3RpbWF0b3JGb3JtU3RhdGUiLCJ0b2dnbGVCdXR0b24iLCJidXR0b25TZWxlY3RvciIsIiR0b2dnbGVDb250YWluZXIiLCJjaGFuZ2VBdHRyaWJ1dGVzT25Ub2dnbGUiLCJzZWxlY3RvclRvQWN0aXZhdGUiLCIkZXN0aW1hdG9yQ29udGFpbmVyIiwiJGVzdGltYXRvckZvcm0iLCJwYXJhbXMiLCJjb3VudHJ5X2lkIiwic3RhdGVfaWQiLCJjaXR5IiwiemlwX2NvZGUiLCJnZXRTaGlwcGluZ1F1b3RlcyIsImNsaWNrRXZlbnQiLCJxdW90ZUlkIiwic3VibWl0U2hpcHBpbmdRdW90ZSIsIlByb2R1Y3REZXRhaWxzQmFzZSIsIm9wdGlvbkNoYW5nZURlY29yYXRvciIsImlzQnJvd3NlcklFIiwiY29udmVydEludG9BcnJheSIsIl9Qcm9kdWN0RGV0YWlsc0Jhc2UiLCIkc2NvcGUiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJjYWxsIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwiX2lzRW1wdHkiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Iiwib3B0aW9uVGl0bGUiLCJzcGxpdCIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNTYXRpc2ZpZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIm1hcCIsIngiLCJjaGVja2VkIiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0IiwiaW5wdCIsImRhdGFzZXQiLCJwcm9kdWN0QXR0cmlidXRlVmFsdWUiLCJsYWJlbCIsImxhYmVscyIsInRpdGxlIiwicHJvZHVjdFZhcmlhbnQiLCJzb3J0IiwidmlldyIsInByb2R1Y3ROYW1lIiwibWF0Y2giLCJjYXJkIiwiY2VydCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJzaG93QWxlcnRNb2RhbCIsIm1ha2VTdGF0ZVJlcXVpcmVkIiwic3RhdGVFbGVtZW50IiwiYXR0cnMiLCJfdHJhbnNmb3JtIiwiaXRlbSIsInJldCIsIm5hbWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsInByZXYiLCJhcHBlbmQiLCJtYWtlU3RhdGVPcHRpb25hbCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHJlZml4IiwiX2VhY2giLCJzdGF0ZXMiLCJzdGF0ZU9iaiIsImNhbGxiYWNrIiwiY291bnRyeU5hbWUiLCJjb3VudHJ5IiwiZ2V0QnlOYW1lIiwic3RhdGVfZXJyb3IiLCIkY3VycmVudElucHV0IiwibmV3RWxlbWVudCIsInRoZW1lU2V0dGluZ3MiLCJhZGRUb0NhcnQiLCJmb3JtIiwiaSIsImFyclAiLCJjYXJ0SWQiLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsImsiLCJpdGVtQWRkIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiZXJyb3IiLCJ0bXAiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsImNsb3NlIiwidXBkYXRlQ2FydENvbnRlbnQiLCJsaXN0ZW5RdWFudGl0eUNoYW5nZVVwZGF0ZSIsInBhcmVudHMiLCJzdG9jayIsImZvcm1EYXRhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwia2V5IiwiRmlsZSIsInNpemUiLCJlIiwiY29uc29sZSIsImNoZWNrUHJvZHVjdCIsImFyclBybyIsImNoZWNrIiwibGVuIiwiY2hlY2tCZWZvcmVBZGQiLCIkYXR0cmlidXRlcyIsImF0dCIsImZvY3VzIiwidXBkYXRlUHJvZHVjdENsb25lZEF0dHJpYnV0ZXMiLCJudW1iZXIiLCJhdHRyaWJ1dGUiLCIkZm9ybUxhYmVsIiwiJGZvcm1JbnB1dCIsIm5ld0lkIiwibmV4dCIsIiRmb3JtU2VsZWN0IiwiZW1wdHkiLCJ0b1N0cmluZyIsInBvcCIsImdldFZpZXdNb2RlbCIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFRheCIsIm5vblNhbGVXaXRob3V0VGF4IiwicHJpY2VTYXZlZCIsInByaWNlTm93TGFiZWwiLCJwcmljZUxhYmVsIiwiJHN0b2NrTGVmdCIsIiRzdG9ja0xlZnRXcmFwcGVyIiwiJHF1YW50aXR5IiwiJGlucHV0IiwiJGltYWdlIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiaW5kZXhPZiIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJzaG93UHJvZHVjdEltYWdlIiwidmlld01vZGVsIiwiX2lzUGxhaW5PYmplY3QiLCJpbWFnZSIsIm1haW5JbWFnZVVybCIsInRvb2xzIiwiaW1hZ2VTcmNzZXQiLCJnZXRTcmNzZXQiLCJwcm9kdWN0dGh1bWJfc2l6ZSIsIm1haW5JbWFnZVNyY3NldCIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwic2hvd01lc3NhZ2VCb3giLCJtZXNzYWdlIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ1cGRhdGVQcmljZVZpZXciLCJwcmljZSIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJ1cGRhdGVWaWV3IiwiX2lzTnVtYmVyIiwiaGFsb19zdG9ja19sZXZlbF9saW1pdCIsInN0b2NrX21lc3NhZ2UiLCJfaXNPYmplY3QiLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsInJlcGxhY2UiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwiY2xvc2VzdCIsImxvYWRpbmdDbGFzcyIsIiRjYXJ0RHJvcGRvd24iLCIkY2FydExvYWRpbmciLCIkYm9keSIsInByZXBlbmQiLCIkcXR5Iiwib3B0aW9uczIiLCJlcnIyIiwicmVzcG9uc2UyIiwicHJvZHVjdCIsImdldEJ5SWQiLCIkZmlyc3RJdGVtIiwiJGNvbnRlbnQiLCIkZm9ybVF0eSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCIkY2hhbmdlZE9wdGlvbiIsInRhcmdldCIsIiRpdGVtIiwiY291bnQiLCJjbG9uZSIsImFwcGVuZFRvIiwiJHByb2R1Y3QiLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwic2libGluZ3MiLCJwcm9UaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=