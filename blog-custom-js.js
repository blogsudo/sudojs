var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){}
   });
}
$(document).ready(function(){
  $('#content-left').before('<div class="product-row" id="product-top"><div class="top-product-details clearfix"><iframe src="https://lap.lazada.com/banner/dynamic.php?banner_id=589347eacf3a5&theme=1&p=1" frameborder="0" scrolling="no"></iframe></div></div>');
});