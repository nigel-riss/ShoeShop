'use strict';

class MobileMenu {
  constructor () {
    this.menuButton = document.querySelector('.menu-button');
    this.menu = document.querySelector('.header__menu');
    this.menuLinks = document.querySelectorAll('.main-nav__link');

    this.reset();
    this.events();
  }


  /**
   * Add event listeners
   */
  events () {
    this.menuButton.addEventListener('click', () => {
      this.toggleMenu();
    });

    for (let i = 0; i < this.menuLinks.length; i++) {
      this.menuLinks[i].addEventListener('click', () => {
        this.toggleMenu();
      });
    }
  }


  /**
   * Reset initial menu state
   */
  reset () {
    this.menuButton.classList.remove('menu-button--close');
    this.menu.classList.add('header__menu--hidden');
  }


  /**
   * Toggle menu state
   */
  toggleMenu () {
    this.menuButton.classList.toggle('menu-button--close');
    this.menu.classList.toggle('header__menu--hidden');
  }
}

export default MobileMenu;
