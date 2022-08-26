$('.main-slider').slick({
  useTransform: true,
  //cssEase: 'ease-out',
  cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>'
});

$('.header-top__hamburger').on('click', function name(params) {
  $('.header-top__list').toggleClass('header-top__list--active');
  $('.header-top__hamburger').toggleClass('header-top__hamburger--active');
})

const btn = document.querySelector('.header-bottom__menu');
const js_menu = document.querySelector('.header-menu');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  btn.classList.toggle('active');
  js_menu.classList.toggle('active');
});


$('.header-bottom__menu').click(function(){
  $('.header-bottom__icon').toggleClass('open');
});

$('.category-filter__item-title').on('click', function () {
  $(this).siblings().slideToggle(700);
  $('.category-filter__arrow-top', this).toggleClass('category-filter__arrow-top--active')
});


$('.category-content__favorite').on('click', function () {
  $('.category-content__favorite').toggleClass('category-content__favorite--active');
});

$('.category-content__compare').on('click', function () {
  $('.category-content__compare').toggleClass('category-content__compare--active');
});


$('.category-filter__slider').ionRangeSlider({
  onStart: function (data){
    $('.category-filter__price-from').text(data.from);
    $('.category-filter__price-to').text(data.to);
  },
  onChange: function (data) {
    $('.category-filter__price-from').text(data.from);
    $('.category-filter__price-to').text(data.to);
  },
});

$('.category-content__select').styler({})

/*
$('.lk-main__button').on('click', function name(params) {
  $('.lk-main__button').toggleClass('lk-main__button--active');
})
*/



  



