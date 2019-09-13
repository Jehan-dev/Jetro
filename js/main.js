$(function () {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: false,
    centerPadding: '50px',
    focusOnSelect: true,
    variableWidth: true,
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();
  });

});