// 'use strict';

import MobileMenu from './modules/MobileMenu';
import $ from 'jquery';
import slick from 'slick-carousel';

const mobileMenu = new MobileMenu();

const slickConfig = {

};

$('.numbers__scoreboard').slick(slickConfig);
