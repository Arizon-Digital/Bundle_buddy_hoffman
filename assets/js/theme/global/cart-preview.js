import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';
import swal from './sweet-alert';
import _ from 'lodash';
import haloCalculateFreeShipping from '../halothemes/haloCalculateFreeShipping';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};

export default function (secureBaseUrl, cartId, context) {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cart2 = $('[data-cart-preview2]');
    const $cart3 = $('[data-cart-preview3]');
    const $cartDropdown = $('#cart-preview-dropdown');
    const $cartLoading = $('<div class="loadingOverlay"></div>');

    const $body = $('body');

    $body.on('cart-quantity-update', (event, quantity) => {
        $cart.attr('aria-label', (_, prevValue) => prevValue.replace(/\d+/, quantity));

        if (!quantity) {
            $cart.addClass('navUser-item--cart__hidden-s');
        } else {
            $cart.removeClass('navUser-item--cart__hidden-s');
        }

        $('.cart-quantity')
            .text(quantity)
            .toggleClass('countPill--positive', quantity > 0);
        if (utils.tools.storage.localStorageAvailable()) {
            localStorage.setItem('cart-quantity', quantity);
        }
    });

    if (!$('body').hasClass('page-type-cart')) {
        $cart.on('click', event => {
            const options = {
                template: 'common/cart-preview',
            };

            // Redirect to full cart page
            //
            // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
            // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
            if (/Mobi/i.test(navigator.userAgent)) {
                return event.stopPropagation();
            }

            event.preventDefault();
            $body.toggleClass('halo-open-side-cart');

            $cartDropdown
                .addClass(loadingClass)
                .html($cartLoading);
            $cartLoading
                .show();

            utils.api.cart.getContent(options, (err, response) => {
                $cartDropdown
                    .removeClass(loadingClass)
                    .html(response);
                $cartLoading
                    .hide();
                haloCalculateFreeShipping(context);
            });
        });

        $cart2.on('click', event => {
            const options = {
                template: 'common/cart-preview',
            };
            // Redirect to full cart page
            //
            // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
            // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
            // if (/Mobi/i.test(navigator.userAgent)) {
            //     return event.stopPropagation();
            // }

            event.preventDefault();        
            $body.toggleClass('halo-open-side-cart');

            $cartDropdown
                .addClass(loadingClass)
                .html($cartLoading);
            $cartLoading
                .show();

            utils.api.cart.getContent(options, (err, response) => {
                $cartDropdown
                    .removeClass(loadingClass)
                    .html(response);
                $cartLoading
                    .hide();
                haloCalculateFreeShipping(context);
            });
            $(document).on('click', '.halo-overlay-background', function(ev) {
                refreshContent();
            });
            $(document).on('click', '#cart-mobile .halo-close', function(ev) {
               refreshContent();
            });
        });

        $cart3.on('click', event => {
            const options = {
                template: 'common/cart-preview',
            };
            // Redirect to full cart page
            //
            // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
            // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
            // if (/Mobi/i.test(navigator.userAgent)) {
            //     return event.stopPropagation();
            // }

            event.preventDefault();        
            $body.toggleClass('halo-open-side-cart');

            $cartDropdown
                .addClass(loadingClass)
                .html($cartLoading);
            $cartLoading
                .show();

            utils.api.cart.getContent(options, (err, response) => {
                $cartDropdown
                    .removeClass(loadingClass)
                    .html(response);
                $cartLoading
                    .hide();
                haloCalculateFreeShipping(context);
            });
            $(document).on('click', '.halo-overlay-background', function(ev) {
                refreshContent();
            });
            $(document).on('click', '#cart-mobile .halo-close', function(ev) {
               refreshContent();
            });
        });
    }
    
    /* BEGIN EDIT DROPDOWN CART */
    function refreshContent(remove) {
        const options = {
            template: 'common/cart-preview',
        };

        $cartDropdown
            .addClass(loadingClass)
            .prepend($cartLoading);
       $cartLoading
          .show();

        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown
                .removeClass(loadingClass)
                .html(response);
            $cartLoading
                .hide();

            const quantity = $('[data-cart-quantity]').data('cartQuantity') || 0;

            $('body').trigger('cart-quantity-update', quantity);

            if(location.pathname == "/cart.php"){
                cart_page.refreshContent(remove);
            }
            haloCalculateFreeShipping(context);
        });
    }
    // Cart Remove
    $(document).on('click','.previewCart .cart-remove', (event) => {
        const itemId = $(event.currentTarget).data('cartItemid');
        const string = $(event.currentTarget).data('confirmDelete');
        swal.fire({
            text: string,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // remove item from cart
                cartRemoveItem(itemId);
            } else if (result.isDismissed) {
                // handle cancel action if needed
                console.log('Item removal canceled');
            }
        });
        event.preventDefault();
    });
    // Below function has been commented to fix the mini cart quantity issue
    // function cartRemoveItem(itemId) {
    //     utils.api.cart.itemRemove(itemId, (err, response) => {
    //         if (response.data.status === 'succeed') {
    //             refreshContent(true);
    //         } else {
    //             alert(response.data.errors.join('\n'));
    //         }
    //     });
    // }
    //Above cartRemoveItem function has been modified below to fix the mini cart quantity issue    
    function cartRemoveItem(itemId) {
        console.log("Removing item from cart...");
        utils.api.cart.itemRemove(itemId, (err, response) => {
            if (response.data.status === 'succeed') {
                updateCartAndMiniCart();
            } else {
                console.error("Error removing item:", response.data.errors.join('\n'));
            }
        });
    }
    // Update the mini cart quantity and refreshes mini cart content
    function updateCartAndMiniCart() {
        const options = { template: 'common/cart-preview' };
        const $cartDropdown = $('#cart-preview-dropdown');
    
        // Fetch updated cart quantity
        utils.api.cart.getCartQuantity({}, (err, quantity) => {
            if (err) {
                console.error("Error fetching cart quantity:", err);
                return;
            }
            const qty = quantity || 0;
            // Update the mini cart quantity
            $('body').trigger('cart-quantity-update', qty);
    
            // Refreshes mini cart content
            $cartDropdown.addClass('is-loading');
            utils.api.cart.getContent(options, (err, response) => {
                if (err) {
                    console.error("Error refreshing mini-cart:", err);
                    return;
                }
                $cartDropdown.removeClass('is-loading').html(response);
            });
        });
    }
     // Listener to handle the mini cart quantity updates
    $('body').on('cart-quantity-update', (event, quantity) => {
        $('.cart-quantity')
            .text(quantity)
            .toggleClass('countPill--positive', quantity > 0);
    
        if (utils.tools.storage.localStorageAvailable()) {
            localStorage.setItem('cart-quantity', quantity);
        }
    });
    // mini cart quanity issue fix ended
   
    // Cart update
    $(document).on('click','[data-cart-update]', (event) => {
        const $target = $(event.currentTarget);
        event.preventDefault();

        // update cart quantity
        cartUpdate($target);
    });

    function cartUpdate($target) {
        const itemId = $target.data('cart-itemid');
        const $el = $(`#qty-${itemId}`);
        const oldQty = parseInt($el.val(), 10);
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
        const newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
        let invalidEntry;

        // Does not quality for min/max quantity
        if (!newQty) {
            invalidEntry = newQty;
            $el.val(oldQty);
            return swal.fire({
                text: `${invalidEntry} is not a valid entry`,
                icon: 'error',
            });
        } else if (newQty < minQty) {
            return swal.fire({
                text: minError,
                icon: 'error',
            });
        } else if (maxQty > 0 && newQty > maxQty) {
            return swal.fire({
                text: maxError,
                icon: 'error',
            });
        } else {
            utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
                if (response.data.status === 'succeed') {
                    // if the quantity is changed "1" from "0", we have to remove the row.
                    const remove = (newQty === 0);

                    refreshContent(remove);
                } else {
                    $el.val(oldQty);
                    swal.fire({
                        text: response.data.errors.join('\n'),
                        icon: 'error',
                    });
                }
            });
        }        
    }

    // cart qty manually updates
    $(document).on('focus','.previewCart .cart-item-qty-input', (event) => {
        const $target = $(event.currentTarget);
        $target.data('preVal', $target.val());
    });    
    
    $(document).on('change','.previewCart .cart-item-qty-input', (event) => {
        const $target = $(event.currentTarget);
        var preVal= $target.data('preVal');
        event.preventDefault();
        cartUpdateQtyTextChange($target, preVal);
    });

    function cartUpdateQtyTextChange($target, preVal = null) {
        const itemId = $target.data('cart-itemid');
        const $el = $(`#qty-${itemId}`);
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const oldQty = preVal !== null ? preVal : minQty;
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
        const newQty = $target.val();
        let invalidEntry;

        // Does not quality for min/max quantity
        if (!newQty) {
            invalidEntry = $el.val();
            $el.val(oldQty);
            return swal.fire({
                text: `${invalidEntry} is not a valid entry`,
                icon: 'error',
            });
        } else if (newQty < minQty) {
            $el.val(oldQty);
            return swal.fire({
                text: minError,
                icon: 'error',
            });
        } else if (maxQty > 0 && newQty > maxQty) {
            $el.val(oldQty);
            return swal.fire({
                text: maxError,
                icon: 'error',
            });
        } else {
            utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
                if (response.data.status === 'succeed') {
                    // if the quantity is changed "1" from "0", we have to remove the row.
                    const remove = (newQty === 0);
                    refreshContent(remove);
                } else {
                    $el.val(oldQty);
                    swal.fire({
                        text: response.data.errors.join('\n'),
                        icon: 'error',
                    });
                }
            });  
        }
    }
    // // END EDIT DROPDOWN CART

    let quantity = 0;

    if (cartId) {
        // Get existing quantity from localStorage if found
        if (utils.tools.storage.localStorageAvailable()) {
            if (localStorage.getItem('cart-quantity')) {
                quantity = Number(localStorage.getItem('cart-quantity'));
                $body.trigger('cart-quantity-update', quantity);
            }
        }

        // Get updated cart quantity from the Cart API
        const cartQtyPromise = new Promise((resolve, reject) => {
            utils.api.cart.getCartQuantity({ baseUrl: secureBaseUrl, cartId }, (err, qty) => {
                if (err) {
                    // If this appears to be a 404 for the cart ID, set cart quantity to 0
                    if (err === 'Not Found') {
                        resolve(0);
                    } else {
                        reject(err);
                    }
                }
                resolve(qty);
            });
        });

        // If the Cart API gives us a different quantity number, update it
        cartQtyPromise.then(qty => {
            quantity = qty;
            $body.trigger('cart-quantity-update', quantity);
        });
    } else {
        $body.trigger('cart-quantity-update', quantity);
    }
}
