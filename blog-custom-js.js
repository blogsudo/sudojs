var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){}
   });
}
$(document).ready(function(){
  $('#content-left').before('<div class="product-row" id="product-top"><div class="top-product-details clearfix"><iframe src="https://lap.lazada.com/banner/dynamic.php?banner_id=589347eacf3a5&theme=1&p=1" frameborder="0" scrolling="no"></iframe></div></div>');
  if($('.post.first:first-child .post-i .main-img img').length != 0) {
    first_img = $('.post:first-child .post-i .main-img img').attr('src');
    first_img = first_img.replace('/w466-h272-c/', '/w569-h333-c/');
    $('.post:first-child .post-i .main-img img').attr('src',first_img);
  }
});