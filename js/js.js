

$('.slider').slick({
  // autoplay: true,
  // autoplaySpeed: 2000,
});


$('.slaider-2').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});



$('.slaider-3').slick({
 dots:true
});




$('.menu-btn').on('click', function(){
  $(this).toggleClass('menu-btn_active');
});
$('.menu-btn').on('click', function(){
  $('.menu-list').toggleClass('mobail-menu');
});

