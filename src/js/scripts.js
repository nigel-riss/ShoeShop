// 'use strict';

import MobileMenu from './modules/MobileMenu';
import $ from 'jquery';
import slick from 'slick-carousel';

const mobileMenu = new MobileMenu();

const slickConfig = {

};

const slickConfig2 = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.carousel__nav'
};

const slickConfig3 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.carousel__main',
  dots: true,
  centerMode: true,
  focusOnSelect: true
};

$('.numbers__scoreboard').slick(slickConfig);

$('.carousel__main').slick(slickConfig2);

$('.carousel__nav').slick(slickConfig3);

