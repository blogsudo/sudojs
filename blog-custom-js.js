(function($){
    $(document).on('focus', 'textarea,input,select', function() {
        $('header').css('position', 'absolute');
    }).on('blur', 'textarea,input,select', function() {
        $('header').css('position', '');
    });
})(jQuery);
