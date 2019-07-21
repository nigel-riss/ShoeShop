// 'use strict';

import MobileMenu from './modules/MobileMenu';
import $ from 'jquery';
import slick from 'slick-carousel';

const mobileMenu = new MobileMenu();

const slickConfig = {
  dots: true,
};

const slickConfig2 = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.approach-album__nav'
};

const slickConfig3 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.approach-album__main',
  arrows: false,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  variableWidth: true
  //slide: '.approach-album__thumbs'
};

$('.numbers__scoreboard').slick(slickConfig);

$('.approach-album__main').slick(slickConfig2);

$('.approach-album__nav').slick(slickConfig3);

