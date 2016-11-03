(function($){
$(document).on('blur', 'input, textarea', function() {
    setTimeout(function() {
        window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
    }, 0);
});
})(jQuery);
