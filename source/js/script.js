var pageNav = document.querySelector('.page-header__navigation');
var navToggle = document.querySelector('.main-nav__toggle');

pageNav.classList.remove('page-header__navigation--nojs');

navToggle.addEventListener('click', function() {
      if (pageNav.classList.contains('page-header__navigation--closed')) {
        pageNav.classList.remove('page-header__navigation--closed');
        pageNav.classList.add('page-header__navigation--opened');
      } else {
        pageNav.classList.add('page-header__navigation--closed');
        pageNav.classList.remove('page-header__navigation--opened');
      }
});

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
});
