var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'transport': 'beacon',
     'hitCallback': function(){}
   });
}
var trackOutboundLinkWithLabel = function(url, category, action, label) {
   ga('send', 'event', category, action, label, {
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
  $('head link').eq(0).before('<link href="https://fonts.googleapis.com/css?family=Roboto:400,700|Quicksand:300,400&subset=vietnamese,latin-ext" rel="stylesheet">');
  $('head').append('<style type="text/css">body{font-family:\'Roboto\',sans-serif;font-weight:400}strong{font-family:\'Roboto\',sans-serif;font-weight:700}.footer-menu a.menu-title,.is-loading,#cssmenu>ul>li>a,#cssmenu>ul>li>span.no-link{font-family:\'Quicksand\',sans-serif;font-weight:400}.title-summary .entry-title,h2.post-title a,h3.post-title a{font-family:\'Quicksand\',Arial,sans-serif!important;font-weight:400}h1,h2,h3,h4,h5,h6{font-family:\'Quicksand\',Arial,sans-serif;font-weight:400}</style>');
  // Hover effect
  $("#cat-menu li.has-sub ul").hover(function() {
    $(this).parent().addClass('hovered');
    $(this).parent().removeClass('closed');
  }, function() {
    $(this).parent().removeClass('hovered');
    $(this).parent().addClass('closed');
  }); 
  // Menu click effect 
  $("#cat-menu li.has-sub .parent-label").click(function(){ 
    $(this).parent().addClass('hovered');
    $(this).parent().removeClass('closed');
    $(this).next().show();
  });
  $("#cat-menu .close").click(function(){ 
    $(this).parent().parent().removeClass('hovered'); 
     $(this).parent().parent().addClass('closed');
    $(this).parent().hide();
  });
  $("#cat-button").click(function(){
    $(this).toggleClass('clicked');
  });
  $(document).mouseup(function (e) {
      var container = $("#cat-menu li.hovered ul");
      if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        container.hide();
        $("#cat-menu li.has-sub").removeClass('hovered');
        $("#cat-menu li.has-sub").addClass('closed'); 
      }
  });
  // Add ads
  if (domain == 'cacanh.blogsudo.com') {
    $('.breadcrumbs + .blog-posts #content-left').before('<div class="product-row" id="product-top"><div class="top-product-details clearfix"><div class="product-row" style="padding-top: 20px"><div class="product-row" cat="ca-canh"><div class="product-details clearfix" style="border:0;margin:0;padding:0"><div class="product-col col-1"><div class="product-wrapper"><a onclick="trackOutboundLinkWithLabel(\'\',\'Cá Cảnh Top Banner\',\'click\',\'Banner quảng cáo máy cho cá ăn (hình ảnh)\');" href="http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005"onclick="trackOutboundLink(\'http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005\');" rel="nofollow" target="_blank"><img title="Máy cho cá ăn tự động 7GS-2005" alt="May cho ca an tu dong 7GS2005" border="0" src="https://lh3.googleusercontent.com/-qUa8NomrlDg/WG3kduNVABI/AAAAAAABB14/JwcJDJe4miE/s617/image-6796243-2e6d7e9b44585a33307a40828390132e-product.jpg" width="100" /></a></div></div><div class="product-col col-2" style="border-left:0"><div class="product-wrapper"><div style="color: #c5c5c5;font-size: 13px;">[SẢN PHẨM NỔI BẬT NÊN MUA]</div><div class="product-link"><a onclick="trackOutboundLinkWithLabel(\'\',\'Cá Cảnh Top Banner\',\'click\',\'Banner quảng cáo máy cho cá ăn (tiêu đề)\');" class="product-label" href="http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005" onclick="trackOutboundLink(\'http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005\');" rel="nofollow" target="_blank">Máy cho cá ăn tự động 7GS-2005</a></div><div class="description"><div class="price">- Giá bán: <b><span class="sell-price">540</span> nghìn vnđ </b></div><div class="details">- Máy cho cá ăn tự động có đồng hồ điện tử<br />- Nguồn điện: 2 Pin AAA <br />- Hiển thị thời gian: 24 giờ đồng hồ<br />- Thiết lập đến 4 lần cho cá ăn</div><a onclick="trackOutboundLinkWithLabel(\'\',\'Cá Cảnh Top Banner\',\'click\',\'Banner quảng cáo máy cho cá ăn (xem thêm)\');" class="buy-now" href="http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005" onclick="trackOutboundLink(\'http://bit.ly/h_may_cho_ca_an_tu_dong_7gs_2005\');" rel="nofollow" target="_blank">Xem thêm</a></div></div></div></div></div></div></div></div>');
  }
  else if (domain == 'reviews.blogsudo.com') {
    
  }
  else {
   $('.breadcrumbs + .blog-posts #content-left').before('<div class="product-row banner-image" id="product-top"><div class="top-product-details clearfix"><div class="product-row"><div class="product-row"><div class="product-details clearfix" style="border:0;margin:0;padding:0"><div class="product-col" style="border-left:0"><div class="product-wrapper"><a rel="nofollow" target="_blank" onclick="trackOutboundLinkWithLabel(\'https://goo.gl/o0YHld\',\'Vietravel\',\'click\',\'DU LỊCH GIỜ CHÓT - GIÁ CỰC HẤP DẪN (Top Banner): https://goo.gl/o0YHld\');" href="https://goo.gl/o0YHld"><img src="https://lh3.googleusercontent.com/-KIvPJDI6c5c/WMpSgugeMBI/AAAAAAABCnM/FazBVRpd2oA/s617/YyMHuM9.png" /></a></div></div></div></div></div></div></div>');
  }
  // Change price text
  $('a.buy-now').text('Xem giá');
  
  $('.sushop').html('<span style="position: relative;top: -1px;">» </span><a href="http://bit.ly/h_xa_hang_phut_chot_lazada" target="_blank" rel="nofollow" onclick="trackOutboundLinkWithLabel(\'\',\'Footer Link\',\'click\',\'Xả hàng phút chót tại Lazada\');">Xả hàng phút chót tại Lazada</a>, xem và mua ngay để không bỏ lỡ khuyến mãi khủng!');
  // Change image size
  if($('.post.first:first-child .post-i .main-img img').length != 0) {
    first_img = $('.post.first:first-child .post-i .main-img img').attr('src');
    first_img = first_img.replace('/w466-h272-c/', '/w569-h333-c/');
    $('.post.first:first-child .post-i .main-img img').attr('src',first_img);
  }
});