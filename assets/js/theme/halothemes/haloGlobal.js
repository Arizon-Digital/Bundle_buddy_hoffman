import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import mediaQueryListFactory from '../common/media-query-list';
const mediumMedia = mediaQueryListFactory('medium');
import _ from 'lodash';
import haloAddOption from './haloAddOptionForProduct';
import swal from '../global/sweet-alert';
import carousel from '../common/carousel';
import haloAskAnExpertPopup from './haloAskAnExpertPopup';

export default function (context) {
    const $context = context;
    const token = context.token;
    const $theme_settings = context.themeSettings;
    var checkJS_load = true;
    var $window = $(window);
    function loadFunction() {
        if (checkJS_load) {
            checkJS_load = false;
            customWishlist();
            haloAddOption($context);
            hoverNavigation();
            if ($theme_settings.sidebar_desktop) {
                acticveMenuDesktop();
            } else {
                activeMenu_Mobile();
            }
            coppyWishlist();
            blogTags();
            slickCarouselBlogPost();
            initSidebar();
            if ($('.halo_custom_cms_block').length) {
                showmoreHtmlText();
            }
            gridLayoutProduct();
            homeProductsCategoryID();
            shopByCategoriesCarousel();
            featuredBrandsCarousel();
            footerMobileToggle();
            if ($('#back-to-top').length) {
                back_to_top();
            }
            searchBeforeYouLeave();
            clickOverlayBackground();
            searchStickyToggle();
            accountToggle();
            if($theme_settings.halo_header_layout == 'header-layout-1') {
                navPagesDropdown();
            }
            productCountDown();
            removeCustomCategoryFilter();
            if(context.themeSettings.halo_ask_an_expert && $('.page-type-product').length > 0) {
                console.log('%cMyProject%cline:52%ccontext.themeSettings.halo_ask_an_expert', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(96, 143, 159);padding:3px;border-radius:2px', context.themeSettings.halo_ask_an_expert)
                haloAskAnExpertPopup(context);
            }
        }
    }
    function eventLoad() {
        sectionLoad();
        $(window).on('scroll', (e) => {
            const $target = $(e.currentTarget);
            const tScroll = $target.scrollTop();
            const wScroll = $window.scrollTop();
        });

        /* Mouse Over Touch Start */
        $(document).on('keydown mousemove touchstart', (e) => {
            loadFunction();
        });
        $(window).resize(function () {
            hoverNavigation();
            removeCustomCategoryFilter();
        });
        $(document).on(
            'click',
            '.card #wishlist-dropdown .wishlist-custom',
            (e) => {
                e.preventDefault();
                var $this_wl = $(e.currentTarget);
                var url_awl = $this_wl.attr('href');
                if ($('body').hasClass('is-login')) {
                    $.post(url_awl).done(function () {
                        return swal.fire({
                            text: 'Your wishlist has been saved !',
                            icon: 'success',
                            showConfirmButton: false,
                        });
                    });
                } else {
                    window.location.href = '/login.php';
                }
            }
        );
    }
    function customWishlist() {
        let wishlistOpen = false;
        $(document).on('click', '.card .wishlist', (e) => {
            e.preventDefault();
            const productId = $(e.currentTarget).data('productId');
            const $wishlistButton = $(
                `.card .wishlist[data-product-id="${productId}"]`
            );
            if (
                $(`.card .wishlist[data-product-id="${productId}"]`)
                    .parent()
                    .siblings('.form-wishlist').length == 0
            ) {
                utils.api.product.getById(
                    productId,
                    { template: 'products/wishlist-custom' },
                    (err, response) => {
                        if (err) return;
                        $(`.card .wishlist[data-product-id=${productId}]`)
                            .parent()
                            .after(response);
                        $(`.card .wishlist .icon`).removeClass('is-hidden');
                        $(`.card .wishlist .wishlist-loading`).removeClass(
                            'is-open'
                        );
                        wishlistOpen = true;
                    }
                );
                $(`.card .wishlist .icon`).addClass('is-hidden');
                $(`.card .wishlist .wishlist-loading`).addClass('is-open');
            } else {
                $wishlistButton.parent().siblings('.form-wishlist').remove();
                $wishlistButton.find('.icon').addClass('is-hidden');
                $wishlistButton.find('.wishlist-loading').addClass('is-open');
                wishlistOpen = false;
            }
        });
        $(document).on('click', (e) => {
            if (wishlistOpen) {
                const $wishlistForm = $('.card .form-wishlist');
                if (
                    !$wishlistForm.is(e.target) &&
                    $wishlistForm.has(e.target).length === 0
                ) {
                    $wishlistForm.remove();
                    wishlistOpen = false;
                }
            }
        });
    }
    //
    // Add To Wish List
    // -----------------------------------------------------------------------------
    // Hover Navigation
    function hoverNavigation() {
        if ($(window).width() > 1024) {
            $('.header-pc #navPages-list-main > .navPages-item')
                .mouseenter(function () {
                    $('body').addClass('has-background-menu');
                })
                .mouseleave(function () {
                    $('body').removeClass('has-background-menu');
                });
        }
    }

    // Menu ...
    function navPagesDropdown() {
        if ($(window).width() >= 1200) {
            const $navigation = $('#navPages-list-main');
            const $navPagesItem = $('#navPages-list-main .navPages-item-show');
            const $navigationItemCustom = $navigation.children(
                '.navPages-item-custom'
            );
            const $navigationDropdown = $(
                '.navPages >.navPages-list:not(.navPages-list--user) >.navPages-item-custom >.navPage-subMenu >.navPage-subMenu-list'
            );
            const $navPagesContainer = $('.navPages-container');

            // Caculate width of menu
            const $lastItem = $navigation
                .children('.navPages-item')
                .not(':last-child')
                .last();
            const mainWidth = Math.round($navigation.width());
            var widthTotal = 58;

            $navPagesItem.each(function () {
                var width = $(this).width() + 40;
                widthTotal += width;
            });

            // Caculate width of menu when resize
            const resize = () => {
                if (!$navigationItemCustom.is('.u-hiddenVisually')) {
                    var widthTotal2 = $navigationItemCustom.width();
                    $navPagesItem.each(function () {
                        var width = $(this).width() + 40;
                        widthTotal2 += width;
                    });

                    if (widthTotal2 < mainWidth) {
                        $navigationItemCustom.before(
                            $navigationDropdown.find(
                                '.navPages-item:first-child'
                            )
                        );
                        if ($navPagesItem.hasClass('has-dropdown')) {
                            if (!$navPagesItem.hasClass('background-hover')) {
                                $navPagesItem.addClass('background-hover');
                            }
                        }
                    }
                    if ($navigationDropdown.children().length == 0) {
                        $navigationItemCustom.addClass('u-hiddenVisually');
                    }
                }

                if (!mediumMedia.matches) {
                    return;
                }
                do {
                    // eslint-disable-line
                    const $lastItem = $navigation
                        .children('.navPages-item')
                        .not(':last-child')
                        .last();
                    const mainWidth = Math.round($navigation.width());

                    if ($navigationDropdown.children().length > 0) {
                        var widthTotal1 = $navigationItemCustom.width();

                        $navPagesItem.each(function () {
                            var width = $(this).width() + 40;
                            widthTotal1 += width;
                        });

                        if (widthTotal1 > mainWidth) {
                            $navigationDropdown.prepend($lastItem);
                            if (
                                $navigationDropdown
                                    .find('.navPages-item')
                                    .hasClass('background-hover')
                            ) {
                                $navigationDropdown
                                    .find('.navPages-item')
                                    .removeClass('background-hover ');
                            }
                        } else {
                            break;
                        }
                    } else if (widthTotal > mainWidth) {
                        var lastItemWidth = $lastItem.width();
                        $navigationDropdown.prepend($lastItem);
                        $navigationItemCustom.removeClass('u-hiddenVisually');
                        widthTotal = widthTotal - lastItemWidth;

                        if (widthTotal < mainWidth) {
                            break;
                        }
                    } else {
                        break;
                    }
                } while (true);
            };

            // $(window).on('resize', _.debounce(resize, 200));

            resize();
        }
    }

    function activeMenu_Mobile() {
        if ($(window).width() < 1200) {
            if ($('.header-layout-2').length) {
                if ($('#menu .vertical-menu-dropdown .navPages-list').length) {
                    $('#menu .vertical-menu-dropdown .navPages-list').appendTo(
                        '#menuMobile .navPages'
                    );
                }
                if ($('#menu .navPages .navPages-list').length) {
                    $('#menu .navPages .navPages-list .navPages-item').appendTo(
                        '#menuMobile .navPages .navPages-list'
                    );
                }

                if ($('#menu .navPages-list--user').length) {
                    $('#menu .navPages-list--user').appendTo(
                        '#menuMobile .navPages'
                    );
                }
            } else {
                if ($('#menu .navPages').length) {
                    $('#menu .navPages').appendTo('#menuMobile');
                }
            }
        } else {
            if ($('.header-layout-2').length) {
                $(
                    '#menuMobile .navPages-list .navPages-webpages-item'
                ).appendTo('#menu > .navPages .navPages-list-webpages');
                $(
                    '#menuMobile .navPages-list:not(.navPages-list--user)'
                ).appendTo('#menu .vertical-menu-dropdown');
                $('#menuMobile .navPages-list--user').appendTo('#menu');
            } else {
                if (!$('#menu .navPages').length) {
                    $('#menuMobile .navPages').appendTo('#menu');
                }
            }
        }
    }
    function acticveMenuDesktop() {
        let menuDesktopButton = document.querySelector(
            '.header-bottom .vertical-menu .icon-nav'
        );
        if ($(window).width() < 1200) {
            if ($('.header-layout-2').length) {
                if ($('#menu .vertical-menu-dropdown .navPages-list').length) {
                    $('#menu .vertical-menu-dropdown .navPages-list').appendTo(
                        '#menuMobile .navPages'
                    );
                }
                if ($('#menu .navPages .navPages-list').length) {
                    $(
                        '#menu .navPages#new-layout .navPages-list .navPages-item'
                    ).appendTo('#menuMobile .navPages .navPages-list');
                }

                if ($('#menu .navPages-list--user').length) {
                    $('#menu .navPages-list--user').appendTo(
                        '#menuMobile .navPages'
                    );
                }
            } else {
                if ($('#menu .navPages').length) {
                    $('#menu .navPages').appendTo('#menuMobile');
                }
            }
        } else {
            if ($('.header-layout-2').length) {
                if ($('#menu .vertical-menu-dropdown .navPages-list').length) {
                    $('#menu .vertical-menu-dropdown .navPages-list').appendTo(
                        '#menuMobile .navPages'
                    );
                }
                if ($('#menu .navPages .navPages-list').length) {
                    $(
                        '#menu .navPages#new-layout .navPages-list .navPages-item'
                    ).appendTo('#menuMobile .navPages .navPages-list');
                }
                if ($('#menu .navPages-list--user').length) {
                    $('#menu .navPages-list--user').appendTo(
                        '#menuMobile .navPages'
                    );
                }
            } else {
                if ($('#menu .navPages').length) {
                    $('#menu .navPages').appendTo('#menuMobile');
                }
            }
        }
        if (!menuDesktopButton) return;
        let itemActive = $('#menu .navPages-webpages-item.has-dropdown');
        for (let item of itemActive) {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.classList.toggle('has-activeNavPages');
            });
        }
        menuDesktopButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.toggle('has-activeNavPages');
        });
    }


    function accountToggle() {
        $(document).on('click', '.navUser-action--account', function (e) {
            e.preventDefault();
            $('body').toggleClass('halo-open-account');
        });
    }

    function searchStickyToggle() {
        $('.header-fixed-right .navUser-item--search .navUser-action').on(
            'click',
            function (e) {
                e.preventDefault();
                $('body').addClass('halo-open-search');
            }
        );
    }

    function clickOverlayBackground() {
        $(document).on('click', '.halo-overlay-background', function (e) {
            if ($('body').hasClass('halo-open-account')) {
                $('body').removeClass('halo-open-account');
                $('.navUser-action--account').removeClass('is-open');
                $('#accountDropdown').removeClass('is-open');
            }
            if ($('body').hasClass('halo-open-side-cart')) {
                $('body').removeClass('halo-open-side-cart');
            }
            if ($('body').hasClass('halo-open-sidebar')) {
                $('body').removeClass('halo-open-sidebar');
            }
            if ($('body').hasClass('halo-open-search')) {
                $('body').removeClass('halo-open-search');
            }
        });

        $(document).on('click', '.halo-close', function (e) {
            e.preventDefault();
            if ($('body').hasClass('halo-open-side-cart')) {
                $('body').removeClass('halo-open-side-cart');
            }
            if ($('body').hasClass('halo-open-account')) {
                $('body').removeClass('halo-open-account');
            }
        });

        $(document).on('click', '.modal-background', function (e) {
            if ($('body').hasClass('halo-cart--editOptions')) {
                $('body').removeClass('halo-cart--editOptions');
            }
        });

        $(document).on('click', '.modal-close', function (e) {
            if ($('body').hasClass('halo-cart--editOptions')) {
                $('body').removeClass('halo-cart--editOptions');
            }
        });
    }

    function searchBeforeYouLeave() {
        // search on Before You Leave
        $('.before-you-leave-tab .search .search-icon .icon-search').on(
            'click',
            function (e) {
                e.preventDefault();
                $(this).parent().addClass('is-open');
                $('.before-you-leave-tab').addClass('has-search-dropdown');
                $(this)
                    .closest('.before-you-leave-tab .search')
                    .find('.dropdown--quickSearch')
                    .addClass('is-open');
            }
        );

        $('.before-you-leave-tab .search .search-icon .icon-close').on(
            'click',
            function (e) {
                e.preventDefault();
                $(this).parent().removeClass('is-open');
                var container = $('.before-you-leave-tab .search');
                $('.before-you-leave-tab').removeClass('has-search-dropdown');
                $('#quickSearch2 #search_query2').val('');
                $('#quickSearch2 .quickSearchResults').empty();
            }
        );
    }

    // Back to top
    function back_to_top() {
        var offset = $(window).height() / 2;
        const backToTop = $('#back-to-top');
        const backToTopa = $('#back-to-top a');

        $(window).scroll(function () {
            $(this).scrollTop() > offset
                ? backToTop.addClass('is-visible')
                : backToTop.removeClass('is-visible ');
        });

        backToTopa.on('click', function (event) {
            event.preventDefault();
            $('body,html').animate(
                {
                    scrollTop: 0,
                },
                1000
            );
        });
    }


    function footerMobileToggle() {
        $('.footer-info-col .footer-info-heading').on('click', (event) => {
            $('.footer-info-col--mobile .footer-info-heading')
                .not($(event.currentTarget))
                .removeClass('is-clicked');

            if ($(event.currentTarget).hasClass('is-clicked')) {
                $(event.currentTarget).removeClass('is-clicked');
            } else {
                $(event.currentTarget).addClass('is-clicked');
            }

            $('.footer-info-col--mobile').each((index, element) => {
                if ($('.footer-info-heading', element).hasClass('is-clicked')) {
                    $(element).find('.footer-info-list').slideDown('slow');
                } else {
                    $(element).find('.footer-info-list').slideUp('slow');
                }
            });
        });
    }

    //Slick Featured Brands
    function featuredBrandsCarousel() {
        if ($('.halo_featured_brands .brands-list').length) {
            $('.halo_featured_brands .brands-list').slick({
                dots: true,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2,
                mobileFirst: true,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6,
                            arrows: true,
                        },
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 550,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            arrows: false,
                        },
                    },
                ],
            });
        }
    }

    // Slick Shop By Categories Layout 2

    function shopByCategoriesCarousel() {
        if ($('body').hasClass('homepage-layout-2')) {
            if (
                $('.halo_custom_block_shop_by_categories .categories-list')
                    .length
            ) {
                $(
                    '.halo_custom_block_shop_by_categories .categories-list'
                ).slick({
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    mobileFirst: true,
                    infinite: false,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 6,
                                slidesToScroll: 1,
                                arrows: true,
                                dots: false,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 550,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                arrows: false,
                            },
                        },
                        {
                            breakpoint: 380,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: false,
                            },
                        },
                    ],
                });
            }
        }
    }

    /* Ajax load products by CateID */
    function homeProductsCategoryID() {
        var $catUrlData = 'halothemesProductsByCategory';
        var $catUrlData2 = 'halothemesProductsByCategory-2';

        $(document).ready(function () {
            const tScroll = $(this).scrollTop();
            homeProductsCategoryLoad(tScroll);
        });

        $(window).on('scroll', (e) => {
            const $target = $(e.currentTarget);
            const tScroll = $target.scrollTop();

            homeProductsCategoryLoad(tScroll);
        });

        function homeProductsCategoryLoad(tScroll) {
            $('[data-halothemes-products-by-category]').each(
                (i, productBlock) => {
                    let thisOffetTop =
                        $(productBlock).offset().top - screen.height * 1.5;

                    if (
                        tScroll > thisOffetTop &&
                        !$(productBlock).hasClass('is-loaded')
                    ) {
                        $(productBlock).addClass('is-loaded');
                        var blockId = $(productBlock).attr('id');
                        var block_layout = $(productBlock)
                            .parent()
                            .data('block-layout');
                        var block_limit = $(productBlock)
                            .parent()
                            .data('limit');

                        if (block_layout == 'grid') {
                            var $options = {
                                config: {
                                    category: {
                                        products: {
                                            limit: block_limit,
                                        },
                                    },
                                },
                                template:
                                    'halothemes/ajax-products-by-category-id-result-grid-2',
                            };
                        } else {
                            var $options = {
                                config: {
                                    category: {
                                        products: {
                                            limit: block_limit,
                                        },
                                    },
                                },
                                template:
                                    'halothemes/ajax-products-by-category-id-result',
                            };
                        }
                        loadProduct(
                            $(productBlock),
                            $options,
                            $catUrlData,
                            blockId
                        );
                    }
                }
            );
        }

        function loadProduct($productBlock, $options, $catUrlData, blockId) {
            var $catUrl = $productBlock.data($catUrlData);
            var countDown =
                context.themeSettings.products_flash_deals_countdown;
            var countDownAll =
                context.themeSettings.products_flash_deals_countdown_all;

            if ($catUrl != undefined) {
                $catUrl = $catUrl.replace(/https?:\/\/[^/]+/, '');

                utils.api.getPage($catUrl, $options, (err, response) => {
                    if (!$(response).find('.page-content--err').length) {
                        $productBlock.html(response);
                        var newText = $('.newTextLabel').text();
                        var $content = '';

                        $productBlock.find('.card').each(function () {
                            var id = $(this).data('product-id');
                            var a = arrNew.indexOf($(this).data('product-id'));

                            if ($(this).find('.card_optionImage').length) {
                                $content = $(this).find('.card_optionImage');
                            }

                            if (a != -1) {
                                if (
                                    $(this).find('.card-figure .new-badge')
                                        .length <= 0
                                ) {
                                    $(this)
                                        .find('.card-figcaption')
                                        .after(
                                            '<div class="product-badge new-badge"><span class="text">' +
                                                newText +
                                                '</span></div>'
                                        );
                                }
                            }

                            if (
                                $productBlock.parents('#homeProductFlashSale')
                                    .length
                            ) {
                                if (countDown != '') {
                                    if (countDownAll) {
                                        if (
                                            !$(this).find('.countDowntimer')
                                                .length
                                        ) {
                                            $(this)
                                                .find('.card-price')
                                                .after(
                                                    '<div class="countDowntimer" data-count-down="' +
                                                        countDown +
                                                        '"></div>'
                                                );
                                            $(this)
                                                .find('.card-price')
                                                .addClass('hasCountDown');
                                        }
                                        initCountdown();
                                    } else {
                                        if (
                                            !$productBlock
                                                .parents(
                                                    '#homeProductFlashSale'
                                                )
                                                .find(
                                                    '.page-header .countDowntimer'
                                                ).length
                                        ) {
                                            $productBlock
                                                .parents(
                                                    '#homeProductFlashSale'
                                                )
                                                .find(
                                                    '.page-header .page-heading'
                                                )
                                                .after(
                                                    '<div class="countDowntimer" data-count-down="' +
                                                        countDown +
                                                        '"></div>'
                                                );
                                        }
                                        initCountdown2();
                                    }
                                }
                            }
                        });

                        // Slick
                        var homeProColumn = $productBlock
                            .parents('.product-block')
                            .data('columns');
                        var $wrap = $productBlock.find('.productCarousel');
                        var $wrap2 = $productBlock.find('.productGrid');
                        var dots = $productBlock
                            .parents('.product-block')
                            .data('dots');

                        if ($wrap.length) {
                            slickCarousel($wrap, homeProColumn, dots);
                            haloAddOption($context);
                        } else {
                            gridLayout($wrap2, homeProColumn);
                            haloAddOption($context);
                        }
                    }
                });
            }
        }

        function slickCarousel($wrap, homeProColumn, dots) {
            if (homeProColumn == 6) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                arrows: true,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                                arrows: true,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn - 2,
                                slidesToScroll: homeProColumn - 2,
                                arrows: true,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn - 2,
                                slidesToScroll: homeProColumn - 2,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 3,
                                slidesToScroll: homeProColumn - 3,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 5) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                arrows: true,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                                arrows: true,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 2,
                                slidesToScroll: homeProColumn - 2,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 4) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                arrows: true,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 3) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                arrows: true,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 2) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                arrows: true,
                                dots: dots,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 1) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    mobileFirst: true,
                    adaptiveHeight: true,
                });
            }
        }

        function gridLayout($wrap, homeProColumn) {
            if ($wrap.length > 0) {
                var limitProduct = homeProColumn * 2;

                if (homeProColumn == 6) {
                    if ($(window).width() > 1920) {
                        limitProduct = homeProColumn * 2;
                    }
                    if ($(window).width() <= 1920) {
                        limitProduct = (homeProColumn - 1) * 2;
                    }

                    if ($(window).width() <= 1440) {
                        limitProduct = (homeProColumn - 2) * 2;
                    }
                    if ($(window).width() <= 991) {
                        limitProduct = (homeProColumn - 3) * 2;
                    }

                    if ($(window).width() <= 550) {
                        limitProduct = (homeProColumn - 4) * 2;
                    }
                }

                if (homeProColumn == 5) {
                    if ($(window).width() > 1440) {
                        limitProduct = homeProColumn * 2;
                    }
                    if ($(window).width() <= 1440) {
                        limitProduct = (homeProColumn - 1) * 2;
                    }
                    if ($(window).width() <= 991) {
                        limitProduct = (homeProColumn - 2) * 2;
                    }

                    if ($(window).width() <= 550) {
                        limitProduct = (homeProColumn - 3) * 2;
                    }
                }

                if (homeProColumn == 4) {
                    if ($(window).width() > 991) {
                        limitProduct = homeProColumn * 2;
                    }
                    if ($(window).width() <= 991) {
                        limitProduct = (homeProColumn - 1) * 2;
                    }

                    if ($(window).width() <= 550) {
                        limitProduct = (homeProColumn - 2) * 2;
                    }
                }

                if (homeProColumn == 3) {
                    if ($(window).width() > 550) {
                        limitProduct = homeProColumn * 2;
                    }
                    if ($(window).width() <= 550) {
                        limitProduct = (homeProColumn - 1) * 2;
                    }
                }

                if (homeProColumn == 2) {
                    limitProduct = homeProColumn * 2;
                }

                $wrap.find('.product:visible').css('display', 'none');
                $wrap
                    .find('.product:hidden')
                    .slice(0, limitProduct)
                    .css('display', 'inline-block');

                if ($wrap.find('.product').length > limitProduct) {
                    if (
                        $wrap.parent().find('.productGrid-showMore').length <= 0
                    ) {
                        $wrap.after(
                            '<div class="productGrid-showMore"><a class="button" href="#">See More</a></div>'
                        );
                    }
                }

                $wrap
                    .siblings('.productGrid-showMore')
                    .find('.button')
                    .on('click', (event) => {
                        event.preventDefault();

                        $(event.currentTarget).blur();

                        $wrap
                            .find('.product:hidden')
                            .slice(0, limitProduct)
                            .css('display', 'inline-block');

                        if ($wrap.find('.product:hidden').length == 0) {
                            $(event.currentTarget)
                                .addClass('disabled')
                                .text('No more items');
                        }
                    });
            }
        }
    }

    /* Ajax load products by ListID */
    function homeProductsListID(section) {
        const $target = $(section).find('.productsByListId');
        var $options;
        homeListId($target);
        //  bomb
        function homeListId(element) {
            if(!$(element).hasClass('is-loaded')) {
                $(element).addClass('is-loaded');
                var $prodWrapId = $(element).attr('id'),
                            $wrap,
                            $listId = $(element).data('list-id');
                        var homeProColumn = $(element)
                            .parents('.product-block')
                            .data('columns');
                        var dots = $(element)
                            .parents('.product-block')
                            .data('dots');

                        if ($(element).find('.productCarousel').length > 0) {
                            $wrap = $(element).find('.productCarousel');
                            $options = {
                                template:
                                    'halothemes/ajax-products-by-list-id-temp-carousel',
                            };
                        } else {
                            $wrap = $(element).find('.productGrid');
                            $options = {
                                template:
                                    'halothemes/ajax-products-by-list-id-temp-grid',
                            };
                        }
                        let carouselArrow = `<div class="productCarousel-navigation">
                        <a class="prev-icon arrow-${$prodWrapId}" href="#" data-target="#prev-product-modal" aria-label="Button Prev Product"></a>
                        <a class="next-icon arrow-${$prodWrapId}" href="#" data-next-prev-icon="" data-target="#next-product-modal" aria-label="Button Next Product"></a>
                    </div>`;
                        if (
                            !$(
                                '#product-by-list-' +
                                    $prodWrapId +
                                    ' .productCarousel .productCarousel-slide'
                            ).length
                        ) {
                            if ($listId.length > 1) {
                                $wrap.before(carouselArrow);
                                loadListID(
                                    $listId,
                                    $options,
                                    $wrap,
                                    homeProColumn,
                                    dots,
                                    $prodWrapId
                                );
                            } else {
                                loadListID(
                                    $($listId),
                                    $options,
                                    $wrap,
                                    homeProColumn,
                                    dots,
                                    $prodWrapId
                                );
                            }
                        }
                }
        }

        function loadListID(
            id,
            options,
            wrap,
            homeProColumn,
            dots,
            $prodWrapId
        ) {
            if (id.length <= 1) {
                var arr = id;
            } else {
                var arr = id.split(',');
            }

            if (id.length > homeProColumn) {
                var list = arr.slice(
                    0,
                    parseInt(context.themeSettings.homepage_products_count)
                );
            } else {
                var list = arr;
            }

            var num = 0;
            var countDown =
                context.themeSettings.products_flash_deals_countdown;
            var countDownAll =
                context.themeSettings.products_flash_deals_countdown_all;

            for (var i = 0; i <= list.length; i++) {
                var $prodId = list[i];

                if ($prodId != undefined) {
                    utils.api.product.getById(
                        $prodId,
                        options,
                        (err, response) => {
                            let hasProd = $(response)
                                .find('.card')
                                .data('product-id');

                            if (
                                hasProd != undefined &&
                                hasProd != '' &&
                                hasProd != null &&
                                !$(response).find('.page-content--err').length
                            ) {
                                if (wrap.hasClass('slick-slider')) {
                                    wrap.slick('unslick');
                                    wrap.append(response);
                                } else {
                                    wrap.append(response);
                                }

                                if (wrap.hasClass('productCarousel')) {
                                    // slickCarousel(wrap, homeProColumn, dots);
                                } else {
                                    gridLayoutListId(wrap, id, homeProColumn);
                                }

                                var newText = $('.newTextLabel').text();

                                wrap.find('.card').each(function () {
                                    var id_pro = $(this).data('product-id');
                                    var a = arrNew.indexOf(id_pro);
                                    if (a != -1) {
                                        if (
                                            $(this).find(
                                                '.card-figure .new-badge'
                                            ).length <= 0
                                        ) {
                                            $(this)
                                                .find('.card-figcaption')
                                                .after(
                                                    '<div class="product-badge new-badge"><span class="text">' +
                                                        newText +
                                                        '</span></div>'
                                                );
                                        }
                                    }

                                    if (
                                        wrap.parents('#homeProductFlashSale')
                                            .length
                                    ) {
                                        if (countDown != '') {
                                            if (countDownAll) {
                                                if (
                                                    !$(this).find(
                                                        '.countDowntimer'
                                                    ).length
                                                ) {
                                                    $(this)
                                                        .find('.card-price')
                                                        .after(
                                                            '<div class="countDowntimer" data-count-down="' +
                                                                countDown +
                                                                '"></div>'
                                                        );
                                                    $(this)
                                                        .find('.card-price')
                                                        .addClass(
                                                            'hasCountDown'
                                                        );
                                                }
                                                initCountdown();
                                            } else {
                                                if (
                                                    !wrap
                                                        .parents(
                                                            '#homeProductFlashSale'
                                                        )
                                                        .find(
                                                            '.page-header .countDowntimer'
                                                        ).length
                                                ) {
                                                    wrap.parents(
                                                        '#homeProductFlashSale'
                                                    )
                                                        .find(
                                                            '.page-header .page-heading'
                                                        )
                                                        .after(
                                                            '<div class="countDowntimer" data-count-down="' +
                                                                countDown +
                                                                '"></div>'
                                                        );
                                                }
                                                initCountdown2();
                                            }
                                        }
                                    }
                                });
                            }

                            num++;

                            if (num == list.length) {
                                wrap.parents('.productsByListId[data-list-id]')
                                    .find('.halo_productLoading')
                                    .remove();
                                wrap.parents(
                                    '.productsByListId[data-list-id]'
                                ).addClass('show');
                                if (wrap.hasClass('productCarousel')) {
                                    slickCarouselListId(
                                        wrap,
                                        homeProColumn,
                                        dots,
                                        $prodWrapId
                                    );
                                }
                                haloAddOption($context);
                                return;
                            }
                        }
                    );
                }
            }
        }

        function slickCarouselListId($wrap, homeProColumn, dots, $prodWrapId) {
            console.log('%cMyProject%cline:1310%chomeProColumn', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(3, 38, 58);padding:3px;border-radius:2px', homeProColumn)
            if (homeProColumn == 6) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    nextArrow: `.productCarousel-navigation .next-icon.arrow-${$prodWrapId}`,
                    prevArrow: `.productCarousel-navigation .prev-icon.arrow-${$prodWrapId}`,
                    arrows: true,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1600,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn - 2,
                                slidesToScroll: homeProColumn - 2,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn - 2,
                                slidesToScroll: homeProColumn - 2,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 3,
                                slidesToScroll: homeProColumn - 3,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 5) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    nextArrow: `.productCarousel-navigation .next-icon.arrow-${$prodWrapId}`,
                    prevArrow: `.productCarousel-navigation .prev-icon.arrow-${$prodWrapId}`,
                    arrows: true,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 2,
                                slidesToScroll: homeProColumn - 2,
                            },
                        },
                        {
                            breakpoint: 551,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 4) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    nextArrow: `.productCarousel-navigation .next-icon.arrow-${$prodWrapId}`,
                    prevArrow: `.productCarousel-navigation .prev-icon.arrow-${$prodWrapId}`,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                            },
                        },
                        {
                            breakpoint: 551,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 3) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    nextArrow: `.productCarousel-navigation .next-icon.arrow-${$prodWrapId}`,
                    prevArrow: `.productCarousel-navigation .prev-icon.arrow-${$prodWrapId}`,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                dots: dots,
                            },
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: homeProColumn - 1,
                                slidesToScroll: homeProColumn - 1,
                            },
                        },
                        {
                            breakpoint: 551,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                    ],
                });
            } else if (homeProColumn == 2) {
                $wrap.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                    nextArrow: `.productCarousel-navigation .next-icon.arrow-${$prodWrapId}`,
                    prevArrow: `.productCarousel-navigation .prev-icon.arrow-${$prodWrapId}`,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: homeProColumn,
                                slidesToScroll: homeProColumn,
                                dots: dots,
                            },
                        },
                    ],
                });
            }
        }

        function gridLayoutListId($wrap, id, homeProColumn) {
            if ($wrap.length > 0) {
                var col = context.themeSettings.homepage_products_count,
                    limitProduct = homeProColumn;

                if ($(window).width() <= 1024) {
                    limitProduct = homeProColumn - 1;
                }

                $wrap.find('.product').css('display', 'none');
                $wrap
                    .find('.product:hidden')
                    .slice(0, limitProduct)
                    .css('display', 'inline-block');

                if ($wrap.find('.product').length > limitProduct) {
                    if (
                        $wrap.parent().find('.productGrid-showMore').length <= 0
                    ) {
                        $wrap.after(
                            '<div class="productGrid-showMore"><a class="button button--primary" href="#" data-href="' +
                                id +
                                '">Show More</a></div>'
                        );
                    }
                }

                $wrap
                    .siblings('.productGrid-showMore')
                    .find('.button')
                    .on('click', (event) => {
                        event.preventDefault();

                        $(event.currentTarget).blur();

                        $wrap
                            .find('.product:hidden')
                            .slice(0, limitProduct)
                            .css('display', 'inline-block');

                        if ($wrap.find('.product:hidden').length == 0) {
                            $(event.currentTarget)
                                .addClass('disabled')
                                .text('No more items');
                        }
                    });
            }
        }
    }

    function gridLayoutProduct() {
        $('.product-block.layout_grid').each((index, element) => {
            var homeProColumn =
                context.themeSettings.homepage_products2_column_count;
            var $wrap = $(element).find('.productGrid');

            if ($(element).parents('#homeProductRightImage').length) {
                homeProColumn =
                    context.themeSettings.homepage_products1_column_count;
            }
            if ($wrap.length) {
                var col = context.themeSettings.homepage_products_count,
                    limitProduct = homeProColumn;

                if ($(window).width() <= 1024) {
                    limitProduct = homeProColumn - 1;
                }

                $wrap.find('.product').css('display', 'none');
                $wrap
                    .find('.product:hidden')
                    .slice(0, limitProduct)
                    .css('display', 'inline-block');

                if ($wrap.find('.product').length > limitProduct) {
                    if (
                        $wrap.parent().find('.productGrid-showMore').length <= 0
                    ) {
                        $wrap.after(
                            '<div class="productGrid-showMore"><a class="button button--primary" href="#">Show More</a></div>'
                        );
                    }
                }

                $wrap
                    .siblings('.productGrid-showMore')
                    .find('.button')
                    .on('click', (event) => {
                        event.preventDefault();

                        $(event.currentTarget).blur();

                        $wrap
                            .find('.product:hidden')
                            .slice(0, limitProduct)
                            .css('display', 'inline-block');

                        if ($wrap.find('.product:hidden').length == 0) {
                            $(event.currentTarget)
                                .addClass('disabled')
                                .text('No more items');
                        }
                    });
            }
        });
    }

    /* Count Down */
    function initCountdown() {
        if ($('.countDowntimer').length) {
            var countDownDate = new Date(
                $('.countDowntimer').attr('data-count-down')
            ).getTime();

            var countdownfunction = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    $('.countDowntimer').html('');
                } else {
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    );
                    var minutes = Math.floor(
                        (distance % (1000 * 60 * 60)) / (1000 * 60)
                    );
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    var strCountDown =
                        "<div class='clock-item'><span class='num'>" +
                        days +
                        "</span><span class='text'>days</span></div><div class='clock-item'><span class='num'>" +
                        hours +
                        " :</span></div><div class='clock-item'><span class='num'>" +
                        minutes +
                        " :</span></div><div class='clock-item'><span class='num'>" +
                        seconds +
                        '</span></div>';
                    $('.countDowntimer').html(strCountDown);
                }
            }, 1000);
        }
    }

    function initCountdown2() {
        if ($('.countDowntimer').length) {
            var countDownDate = new Date(
                $('.countDowntimer').attr('data-count-down')
            ).getTime();

            var countdownfunction = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    $('.countDowntimer').html('');
                } else {
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    );
                    var minutes = Math.floor(
                        (distance % (1000 * 60 * 60)) / (1000 * 60)
                    );
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    var strCountDown =
                        "<div class='clock-item'><span class='num'>" +
                        days +
                        "</span> <span class='colon'>:</span></div><div class='clock-item'><span class='num'>" +
                        hours +
                        "</span> <span class='colon'>:</span></div><div class='clock-item'><span class='num'>" +
                        minutes +
                        "</span> <span class='colon'>:</span></div><div class='clock-item'><span class='num'>" +
                        seconds +
                        '</span></div>';
                    $('.countDowntimer').html(strCountDown);
                }
            }, 1000);
        }
    }

    function productCountDown() {
        if ($('.productCountDown').length) {
            initCountdown();
        }
    }

    function showmoreHtmlText() {
        var maxHeight = 176,
            maxLine = '8',
            moretext = 'Show more',
            lesstext = 'Show less',
            content = $('.halo_custom_cms_block .custom-html'),
            contentHeight = $('.halo_custom_cms_block .custom-html').height(),
            button =
                '<div class="button-group text-center"><a id="button-showmore-html" class="button button--transparent" href="#"> <span class="text">' +
                moretext +
                '</span> </a></div>';
        if ($('.page-type-category').length) {
            maxHeight = 72;
            maxLine = '3';
        }

        if (contentHeight > maxHeight) {
            content.addClass('hasShowMore');

            if ($('.halo_custom_cms_block #button-showmore-html').length <= 0) {
                content.after(button);
            }
            content.css({
                'max-height': maxHeight,
                '-webkit-box-orient': 'vertical',
                '-moz-box-orient': 'vertical',
                '-webkit-line-clamp': maxLine,
            });
        } else {
            content.addClass('noShowMore');
        }

        $('#button-showmore-html').on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('less')) {
                $(this).removeClass('less');
                $(this).find('.text').html(moretext);
                $(this).parent().prev().removeClass('showmore');
                content.css({
                    'max-height': maxHeight,
                    '-webkit-line-clamp': maxLine,
                });
            } else {
                $(this).addClass('less');
                $(this).find('.text').html(lesstext);
                $(this).parent().prev().addClass('showmore');
                content.css({
                    'max-height': 'none',
                    '-webkit-line-clamp': 'unset',
                });
            }
        });
    }

    function initSidebar() {
        if ($('.sidebar-label').is(':visible') == true) {
            $('.sidebar-label').on('click', function (ev) {
                $('body').addClass('halo-open-sidebar');
            });
        }
        if ($('.close-sidebar .icon-close').length) {
            $('.close-sidebar .icon-close').on('click', function (ev) {
                $('body').removeClass('halo-open-sidebar');
            });
        }
    }
    function slickCarouselBlogPost() {
        if ($('.blog-post-body .des-col').length) {
            $('.des-item .desItem-img').slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                mobileFirst: true,
            });
        }
    }

    function blogTags() {
        if ($('body.page-type-blog').length) {
            let arr = {};

            $('#blog-tags .recentPosts_tags [data-tag]').each(function (i) {
                var text = $(this).data('tag');

                if (arr[text]) {
                    $(this).remove();
                } else {
                    arr[text] = true;
                }
            });

            $('#blog-tags .recentPosts_tags').show();
        } else if ($('body.page-type-blog_post').length) {
            const url_blogTags = '/blog';

            $.get(url_blogTags, function (data) {
                let arr = {};
                const response = $(data)
                    .find('#blog-tags .recentPosts_tags')
                    .html();

                $('#blog-tags .recentPosts_tags').html(response);

                $('#blog-tags .recentPosts_tags [data-tag]').each(function (i) {
                    var text = 
                    $(this).data('tag');

                    if (arr[text]) {
                        $(this).remove();
                    } else {
                        arr[text] = true;
                    }
                });

                $('#blog-tags .recentPosts_tags').show();
            });
        }
    }

    function removeCustomCategoryFilter() {
        let filterCustom = document.querySelector(
            '#faceted-search-container.custom-hide-on-mobile'
        );

        if ($(window).width() < 1024) {
            if (filterCustom) {
                filterCustom.remove();
            }
        }
    }
    function coppyWishlist() {
        let iconDupplicate = $(
            '.shareLinkSocial__link .shareLinkSocial__mutiple'
        );

        if (iconDupplicate) {
            iconDupplicate.on('click', () => {
                const currentUrl = window.location.href;
                navigator.clipboard.writeText(currentUrl);
                alert(`Copied the text: ${currentUrl}`);
            });
        }
    }
    
    eventLoad();
        /* Custom Animate */
    function customAnimate(section) {
        if (section.matches('.animate-loaded')) return;

        section.classList.add('animate-loaded');
        section.classList.add('animated');
    }
    function globalProduct(section) {
        homeProductsListID(section);
    }
    function sectionLoad() {
        const handler = (entries, observer) => {

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    const sectionType = section.getAttribute('data-section-load');
                    switch (sectionType) {
                        case 'animation':
                            customAnimate(section);
                            break;
                        case 'slider':
                            if (!section.classList.contains('slick-initialized')) {
                                carousel(context, section);
                            }
                            break;
                            case 'global':
                                globalProduct(section)
                                break;
                        default:
                            break;
                    }
                }
            });
        }

        const sections = document.querySelectorAll('[data-section-load]'),
            options = {
                threshold: .05
            };

        if (!sections) return;

        const observer = new IntersectionObserver(handler, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
}
