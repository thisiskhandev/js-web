$ = jQuery;
$(document).ready(function ($) {
  $(".slider-single").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    autoplay: true,
    centerMode: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    touchMove: false,
    swipeToSlide: false,
  });

  $(".slider-nav")
    .on("init", function (event, slick) {
      $(".slider-nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      fade: false,
      vertical: true,
      swipeToSlide: false,
      swipe: false,
      touchMove: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
      useTransform: true,
      speed: 400,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });

  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".slider-nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slider-nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slider-nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });
});
