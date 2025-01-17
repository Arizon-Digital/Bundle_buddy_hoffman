/*
 Import all product specific js
 */
 import PageManager from './page-manager';
 import Review from './product/reviews';
 import collapsibleFactory from './common/collapsible';
 import ProductDetails from './common/product-details';
 import videoGallery from './product/video-gallery';
 import { classifyForm } from './common/utils/form-utils';
 import modalFactory, { modalTypes } from './global/modal';
 import haloBundleProducts from './halothemes/haloBundleProducts';
 import haloStickyAddToCart from './halothemes/haloStickyAddToCart';
 import haloPrevNextProduct from './halothemes/haloPrevNextProduct';
 
 const { WRITE_REVIEW } = modalTypes;
 
 export default class Product extends PageManager {
     constructor(context) {
         super(context);
         this.url = window.location.href;
         this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
         this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
         this.reviewModal = modalFactory('#modal-review-form')[0];
     }
 
     onReady() {
         const context = this.context;
         const token = context.token;
         // Listen for foundation modal close events to sanitize URL after review.
         $(document).on('close.fndtn.reveal', () => {
             if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                 window.history.replaceState(null, document.title, window.location.pathname);
             }
         });
 
         let validator;
 
         // Init collapsible
         collapsibleFactory();
 
         this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
         this.productDetails.setProductVariant();
 
         videoGallery();
 
         this.bulkPricingHandler();
         this.hlGlobal();
         haloStickyAddToCart();
         this.hideOptionNoPurchasable();

         if (this.context.themeSettings.halo_bundle_products_enable == true) {
             haloBundleProducts(this.context);   
         }
         haloPrevNextProduct(this.context);
 
         const $reviewForm = classifyForm('.writeReview-form');
 
         if ($reviewForm.length === 0) return;
 
         const review = new Review($reviewForm);
 
         $(document).on('opened.fndtn.reveal', '#modal-review-form', () => this.reviewModal.setupFocusableElements(WRITE_REVIEW));
       
        $("#stamped-badge-widget").appendTo('#productView-widget');
        
         $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
             validator = review.registerValidation(this.context);
             this.ariaDescribeReviewInputs($reviewForm);
         });
         $reviewForm.on('submit', () => {
             if (validator) {
                 validator.performCheck();
                 return validator.areAll('valid');
             }
 
             return false;
         });
 
         this.productReviewHandler();
     }
 
     ariaDescribeReviewInputs($form) {
         $form.find('[data-input]').each((_, input) => {
             const $input = $(input);
             const msgSpanId = `${$input.attr('name')}-msg`;
 
             $input.siblings('span').attr('id', msgSpanId);
             $input.attr('aria-describedby', msgSpanId);
         });
     }
 
     productReviewHandler() {
         if (this.url.indexOf('#write_review') !== -1) {
             this.$reviewLink.trigger('click');
         }
     }
 
     bulkPricingHandler() {
         if (this.url.indexOf('#bulk_pricing') !== -1) {
             this.$bulkPricingLink.trigger('click');
         }
     }
 
     hlGlobal() {
         const wWidth = window.innerWidth;
         const $desTab = $('.productView-description');
         const $infoTab = $('#tab-additional-information');
 
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
         const $loadTabBtn = $('[data-tab-load]');
 
         
         const $firstTab = $('.first-tab');
 
         const check_loadTabFirst = $firstTab.data('tab-check');
 
         if (check_loadTabFirst) {
             $firstTab.data('tab-check', false);
             const url_loadTab = $firstTab.data('tab-load');
             const thisTab = $firstTab.attr('href');
             const $thisTab = $(thisTab+' .tabContent');
 
             $.get(url_loadTab, function(data) {
                 $('.icon-loading', $thisTab).remove();
                 $thisTab.append($(data).find('.page-content').html());
             }).fail(function(err) {
                 $('.icon-loading', $thisTab).remove();
                 $thisTab.append("<p>To Be Updated</p>");
             });
         }
 
         $loadTabBtn.on('click', (e) => {
             e.preventDefault();
             const $target = $(e.currentTarget);
 
             const check_loadTab = $target.data('tab-check');
 
             if (check_loadTab) {
                 $target.data('tab-check', false);
                 const url_loadTab = $target.data('tab-load');
                 const thisTab = $target.attr('href');
                 const $thisTab = $(thisTab+' .tabContent');
 
                 $.get(url_loadTab, function(data) {
                     $('.icon-loading', $thisTab).remove();
                     $thisTab.append($(data).find('.page-content').html());
                 }).fail(function(err) {
                     $('.icon-loading', $thisTab).remove();
                     $thisTab.append("<p>To Be Updated</p>");
                 });
             }
         });
 
         //
         // Tabs Mobile
         // -----------------------------------------------------------------------------
         const $btnTabMobile = $('.tab-titleMobile');
 
         $btnTabMobile.on('click', (e) => {
             e.preventDefault();
             const $target = $(e.currentTarget);
             const idTab = $target.attr('href');
             const thisTop = $('.productView-description').offset().top - 20;
 
             if ($target.hasClass('is-active')) {
                 $target.removeClass('is-active');
                 $(idTab).removeClass('is-active').find('.tabContent').slideUp();
             }
             else {
                 const $tabActiveMobile = $('.productView-description .tabs-contents .tab-content.is-active');
 
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
         const $shareLinkBtn = $('.socialMedia-button');
         const $shareLinkPopup = $('.socialMedia-dropdown');
         const $shareLinkClose = $('.shareLinkSocial__close');
         const $shareLinkCopy = $('#shareLinkSocial__copy');
 
         $shareLinkBtn.on('click', (e) => {
             e.preventDefault();
 
             if ($shareLinkPopup.hasClass('is-open')) {
                 $shareLinkPopup.slideUp(200);
                 $shareLinkPopup.removeClass('is-open');
             }
             else {
                 $shareLinkPopup.slideDown(200);
                 $shareLinkPopup.addClass('is-open');            
             }
         });
 
         $shareLinkClose.on('click', (e) => {
             e.preventDefault();
 
             if ($shareLinkPopup.hasClass('is-open')) {
                 $shareLinkPopup.slideUp(200);
                 $shareLinkPopup.removeClass('is-open');
             }
         });
 
         $shareLinkCopy.on('click', (e) => {
             e.preventDefault();
             const $target = $(e.target);
 
             $target.select();
             document.execCommand("copy");
         });
 
         //
         // Body Close
         // -----------------------------------------------------------------------------
         $(document).on('click', (e) => {
             const $target = $(e.target);
             const $shareLinkPopup = $('.socialMedia-dropdown');
 
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
             if($(".productView-description #tab-custom-document").text().trim()==""){
             $(".productView-description .tab.first-tab").hide();
         }
     }
     hideOptionNoPurchasable() {
         const productID = document.querySelector('.productView').getAttribute('data-productId');
 
         this.getProductOptions(productID).then(data => {
             const product = data.data.site.products.edges[0].node,
                 optionsList = product.variants.edges;
 
             optionsList.forEach(variant => {
                 const isPurchasable = variant.node.isPurchasable;
 
                 if (!isPurchasable) {
                     /* Hide variant cannot purchase */
                     const variantId = variant.node.entityId;
                     const variantOptions = variant.node.productOptions.edges;
 
                     variantOptions.forEach(option => {
                         const optionsList = option.node.values.edges;
 
                         optionsList.forEach(optionValue => {
                             const optionValueId = optionValue.node.entityId;
                             const optionValueElement = document.querySelector(`[data-product-attribute-value="${optionValueId}"]`);
 
                             if (!optionValue.node.isDefault) {
                                 optionValueElement.remove();
                             }
                         });
                     });
                 }
             });
         })
     }
     /* Hide option no Purchasable */
     getProductOptions(productID) {
         return fetch('/graphql', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Bearer ' + this.context.token
             },
             body: JSON.stringify({
               query: `
                 query ExtendedProductsById {
                     site {
                         products(entityIds: [`+productID+`], first: 50) {
                             edges {
                                 node {
                                     entityId
                                     name
                                     defaultImage{
                                         urlOriginal
                                     }
                                     variants(first: 50){
                                         edges{
                                             node{
                                                 entityId
                                                 defaultImage{
                                                     urlOriginal
                                                 }
                                                 productOptions(first: 50) {
                                                     edges {
                                                         node {
                                                             entityId
                                                             displayName
                                                             isRequired
                                                             ... on MultipleChoiceOption {
                                                                 displayStyle
                                                                 values {
                                                                     edges {
                                                                         node {
                                                                             entityId
                                                                             label
                                                                             isDefault
                                                                             ... on SwatchOptionValue {
                                                                                 hexColors
                                                                                 imageUrl(width: 150)
                                                                             }
                                                                         }
                                                                     }
                                                                 }
                                                             }
                                                         }
                                                     }
                                                 }
                                                 isPurchasable
                                             }
                                         }
                                     }
                                 }
                             }
                         
                         }
                     }
                 }`
                 }),
             }).then(res => res.json())
     }
 }
 
