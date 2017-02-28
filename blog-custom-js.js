var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){}
   });
}
$(document).ready(function(){
  var domain = window.location.hostname;
  // Change style 
  $('.widget .post-body ul').prev().find('br:last-child').css('display','none');
  $('.widget .post-body ul').prev().find('br:last-child').prev().css('line-height','40px');
  // Add fonts
  $('head link').eq(0).prepend('<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab" rel="stylesheet">');
  $('head').append('<style type="text/css">.footer-menu a.menu-title,.is-loading,body,.r-content,#cssmenu>ul>li>a,#cssmenu>ul>li>span.no-link,strong{font-family:\'Roboto\',sans-serif}.title-summary .entry-title,h2.post-title a,h3.post-title a{font-family:\'Roboto Slab\',sans-serif!important}h1,h2,h3,h4,h5,h6{font-family:\'Roboto Slab\',sans-serif}</style>');
  // Add ads
  if (domain == 'cacanh.blogsudo.com') {
    $('.breadcrumbs + .blog-posts #content-left').before('<div class="product-row" id="product-top"><div class="top-product-details clearfix"><div class="product-row" style="padding-top: 20px"><div class="product-row" cat="ca-canh"><div class="product-details clearfix" style="border:0;margin:0;padding:0"><div class="product-col col-1"><div class="product-wrapper"><a href="http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005"onclick="trackOutboundLink(\'http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005\');" rel="nofollow" target="_blank"><img title="Máy cho cá ăn tự động 7GS-2005" alt="May cho ca an tu dong 7GS2005" border="0" src="https://lh3.googleusercontent.com/-qUa8NomrlDg/WG3kduNVABI/AAAAAAABB14/JwcJDJe4miE/s617/image-6796243-2e6d7e9b44585a33307a40828390132e-product.jpg" width="100" /></a></div></div><div class="product-col col-2" style="border-left:0"><div class="product-wrapper"><div style="color: #c5c5c5;font-size: 13px;">[SẢN PHẨM NỔI BẬT NÊN MUA]</div><div class="product-link"><a class="product-label" href="http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005" onclick="trackOutboundLink(\'http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005\');" rel="nofollow" target="_blank">Máy cho cá ăn tự động 7GS-2005</a></div><div class="description"><div class="price">- Giá bán: <b><span class="sell-price">540</span> nghìn vnđ </b></div><div class="details">- Máy cho cá ăn tự động có đồng hồ điện tử<br />- Nguồn điện: 2 Pin AAA <br />- Hiển thị thời gian: 24 giờ đồng hồ<br />- Thiết lập đến 4 lần cho cá ăn</div><a class="buy-now" href="http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005" onclick="trackOutboundLink(\'http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005\');" rel="nofollow" target="_blank">Xem thêm</a></div></div></div></div></div></div></div></div>');
  }
  else {
    $('.breadcrumbs + .blog-posts #content-left').before('<div class="product-row" id="product-top"><div class="top-product-details clearfix"><iframe src="https://lap.lazada.com/banner/dynamic.php?banner_id=589347eacf3a5&theme=1&p=1" frameborder="0" scrolling="no"></iframe></div></div>');
  }
  $('.sushop').html('<span style="position: relative;top: -1px;">» </span><a href="http://bit.ly/h_xa_hang_phut_chot_lazada" target="_blank" rel="nofollow">Xả hàng phút chót tại Lazada</a>, xem và mua ngay để không bỏ lỡ khuyến mãi khủng!');
  // Change image size
  if($('.post.first:first-child .post-i .main-img img').length != 0) {
    first_img = $('.post.first:first-child .post-i .main-img img').attr('src');
    first_img = first_img.replace('/w466-h272-c/', '/w569-h333-c/');
    $('.post.first:first-child .post-i .main-img img').attr('src',first_img);
  }
});