(function($){
  $(document).ready(function() {
    if ('ontouchstart' in window) {
        /* cache dom references */ 
        var $body = jQuery('body'); 

        /* bind events */
        $(document)
        .on('focus', 'input', function() {
            $body.addClass('fixfixed');
        })
        .on('blur', 'input', function() {
            $body.removeClass('fixfixed');
        });
    } 
  });
})(jQuery);
