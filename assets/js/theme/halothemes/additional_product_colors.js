export default function(context, $productOptionsElement){
    var productOption = $('.product-options');

    $('document').ready(function(){
    	initProductMoreview();

    	$productOptionsElement.on('change', event => {
            const $changedOption = $(event.target);

            // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
            if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
                return;
            }

            initProductMoreview($changedOption);
        });
    });

    function initProductMoreview () {
        var obj = context.themeSettings.variant_name.split(",");
        var label = productOption.find('[data-product-option-change]').find('label.form-label--inlineSmall');
        var className = '', classN = '.filter-';

        label.each(function(i, el){
            var lastElement = label.length - 1;
            obj = $(el).parent('[data-product-attribute]');

            if( obj != undefined ){
                if( obj.data('product-attribute') == "set-select" ) {
                    var inputChecked = obj.find(':selected');
                } else {
                    var inputChecked = obj.find(':checked');
                }
                
                if( inputChecked != undefined && inputChecked != '' && inputChecked.length) {
                    var clsName = inputChecked.data('filter');

                    if (clsName != undefined) {
                        clsName = clsName.replace('.filter-','');
                        classN += clsName;
                    }
                }
            }
        });

        console.log('classN',classN);

        if( obj != undefined ){
            if(classN !== '.filter-') {
                className = classN;
                if($(className,'.productView-title').length){
                    $('.productView-title span').removeClass('is-visible');
                    $('.productView-title .text').remove();
                    $(className,'.productView-title').addClass('is-visible');
                }
                if($(className,'#tab-description').length){
                    $('#tab-description').addClass('is-visible');
                    $('#tab-description > div > div').removeClass('visible');
                    $(className,'#tab-description').addClass('visible');
                    // bomb edited custom 
                    $('#tab-description > div > .custom-variant').hide();
                }
                else{
                    $('#tab-description > div > div').removeClass('visible');
                    $('#tab-description > div > .custom-variant').show();
                }
            }
            else{
                $('#tab-description > div > :not([class*="filter-"])').addClass('custom-variant');
                $('#tab-description > div > div').removeClass('visible');
            }
        }
    }
}
