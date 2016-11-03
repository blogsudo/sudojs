(function($){
  $(document).ready(function() {
    if (Modernizr.touch) {
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
