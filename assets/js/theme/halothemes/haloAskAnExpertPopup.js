import utils from '@bigcommerce/stencil-utils';

export default function () {
    var message;

    $(document).ready(function() {
        utils.api.getPage('/ask-an-expert/', {template: 'halothemes/ask-an-expert-form'}, (err, response) => {
            if (err) return;
            $('.hl-form-field-wrapper').html(response);
        });
    });

    $(document).on('click', '[ask-an-expert-link]', event => {
        event.preventDefault();
        $('body').addClass('has-askAnExpert')
    });

    $(document).on('click', '[data-close-ask-an-expert-popup]', event => {
        event.preventDefault();

        $('body').removeClass('has-askAnExpert');
    });

    $(document).on('click', event => {
        if (($(event.target).closest('[ask-an-expert-link]').length === 0) && ($(event.target).closest('.halo-ask-an-expert-container').length === 0)){
            $('body').removeClass('has-askAnExpert');
        }
    });

    $('#halo-ask-an-expert-form').on('submit', function (event) {
        event.preventDefault();
        var message = '';
        var typeContact = $('#halo-ask-an-expert-form input[name=type_contact]:checked').val(),
            typePackage = $('#halo-ask-an-expert-form input[name=type_package]:checked').val(),
            customerMessage = $('#halo-ask-an-expert-form textarea[name=contact_comment_area]').val(),
            recaptcha = $('#halo-ask-an-expert-form #g-recaptcha-response').val(),
            title =  $('#halo-ask-an-expert-form').attr('data-product-title'),
            sku = $('#halo-ask-an-expert-form').attr('data-product-sku'),
            url = `${window.location}${$('#halo-ask-an-expert-form').attr('data-product-url')}`;

        if (recaptcha == '') {
            const error = 'The captcha you entered is incorrect. Please try again.'

            $('#halo-ask-an-expert-results').html('<div class="alertBox alertBox--error">'+error+'</div>');
            return;
        }

            message = 
            "\n\rDo you need: " + typePackage +
            "\n\rWhat can i help you with today: " + customerMessage +
            "\n\rHow would you like me to contact you ?: " + typeContact +
            "\n\rProduct Name: " + title +
            "\n\rProduct SKU: " + sku +
            "\n\rProduct Link: " + url

        $('#contact_question').val(message);
        $.ajax({
            type: 'POST',
            url: '/pages.php?action=sendContactForm',
            data: $('#halo-ask-an-expert-form').serialize(),
            success: function() {
                $('#halo-ask-an-expert-form').hide();
                $('#halo-ask-an-expert-results').html('<div class="alertBox alertBox--success">Thank you. We\'ve received your feedback and will respond shortly.</div>');
            },
        });
    });

    $(document).on('change', '#term-ask', event => {
        if($("#term-ask:checked").length){
            $('#halo-ask-an-expert-button').attr('disabled', false);
        } else{
            $('#halo-ask-an-expert-button').attr('disabled', true);
        }
    });
}
