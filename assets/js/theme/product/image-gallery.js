import 'easyzoom';
import 'fancybox';
export default class ImageGallery {
    constructor($gallery) {
        this.$mainImage = $gallery.find('[data-image-gallery-main]');
        this.$mainImageNested = $gallery.find('[data-main-image]');
        this.$selectableImages = $gallery.find('[data-image-gallery-item]');
        this.$swipThumbnails = $gallery.find('.productView-for');
        this.currentImage = {};
    }

    init() {
        this.bindEvents();
        try {
            this.fancyboxZoom();
            window.matchMedia('(min-width: 1025px)').addEventListener('change', () => {
                this.setImageZoom();
            });
        } catch (error) {
            console.error(error);
        }
    }

    setMainImage(imgObj) {
        this.currentImage = { ...imgObj };

        this.setActiveThumb();
        this.swapMainImage();
    }

    setAlternateImage(imgObj) {
        if (!this.savedImage) {
            this.savedImage = {
                mainImageUrl: this.$mainImage.find('img').attr('src'),
                zoomImageUrl: this.$mainImage.attr('data-zoom-image'),
                mainImageSrcset: this.$mainImage.find('img').attr('srcset'),
                $selectedThumb: this.currentImage.$selectedThumb,
            };
        }
        this.setMainImage(imgObj);
    }

    restoreImage() {
        if (this.savedImage) {
            this.setMainImage(this.savedImage);
            delete this.savedImage;
        }
    }
    fancyboxZoom() {
        $('[data-fancybox="images"]').fancybox({
            buttons: [
                "zoom",
                "slideShow",
                "close"
            ]
        });
    }
    selectNewImage(e) {
        e.preventDefault();
        const $target = $(e.currentTarget);
        const imgObj = {
            mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
            zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
            mainImageSrcset: $target.attr('data-image-gallery-new-image-srcset'),
            $selectedThumb: $target,
            mainImageAlt: $target.children().first().attr('alt'),
        };
        this.setMainImage(imgObj);
    }

    selectNewImage2(e) {
        const $target = $(e.currentTarget).find('.slick-current [data-image-gallery-item]');
        const imgObj = {
            mainImageUrl: $target.attr('data-image-gallery-new-image-url'),
            zoomImageUrl: $target.attr('data-image-gallery-zoom-image-url'),
            mainImageSrcset: $target.attr('data-image-gallery-new-image-srcset'),
            $selectedThumb: $(e.currentTarget).find('.slick-current'),
        };
        this.setMainImage(imgObj);
    }

    setActiveThumb() {
        this.$selectableImages.removeClass('is-active');
        if (this.currentImage.$selectedThumb) {
            this.currentImage.$selectedThumb.addClass('is-active');
        }
    }

    swapMainImage() {
        const isBrowserIE = navigator.userAgent.includes('Trident');

        this.easyzoom.data('easyZoom').swap(
            this.currentImage.mainImageUrl,
            this.currentImage.zoomImageUrl,
            this.currentImage.mainImageSrcset,
        );

        this.$mainImage.attr({
            'data-zoom-image': this.currentImage.zoomImageUrl,
        })
        .find('a').attr({href: this.currentImage.zoomImageUrl})
        .find('img').attr({src: this.currentImage.mainImageUrl});

        this.$mainImage.find('.productView-img-container img').attr({srcset: this.currentImage.mainImageUrl});

        this.$mainImageNested.attr({
            alt: this.currentImage.mainImageAlt,
            title: this.currentImage.mainImageAlt,
        });

        if (isBrowserIE) {
            const fallbackStylesIE = {
                'background-image': `url(${this.currentImage.mainImageUrl})`,
                'background-position': 'center',
                'background-repeat': 'no-repeat',
                'background-origin': 'content-box',
                'background-size': 'contain',
            };

            this.$mainImageNested.css(fallbackStylesIE);
        }
    }

    checkImage() {
        const $imageContainer = $('.productView-image');
        const containerHeight = $imageContainer.height();
        const containerWidth = $imageContainer.width();

        const $image = this.easyzoom.data('easyZoom').$zoom;
        const height = $image.height();
        const width = $image.width();

        if (height < containerHeight || width < containerWidth) {
            this.easyzoom.data('easyZoom').hide();
        }
    }

    setImageZoom() {
        this.easyzoom = this.$mainImage.easyZoom({
            onShow: () => this.checkImage(),
            errorNotice: '',
            loadingNotice: '',
        });
    }

    bindEvents() {
        this.$selectableImages.on('click', this.selectNewImage.bind(this));
        this.$swipThumbnails.on('afterChange', this.selectNewImage2.bind(this));
    }
}
