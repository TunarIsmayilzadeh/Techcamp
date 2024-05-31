$(document).ready(function () {
  $(".star-slider").slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".projects-slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          rows: 1,
        },
      },
    ],
  });

  $(".slider-wrp__slider").slick({
    dots: true,
    infinite: true,
    // autoplay:true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    arrows: false,
    appendDots: $('.slick-slider-dots'),
  });
});
