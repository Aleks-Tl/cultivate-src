import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('backgroundWhite');
  } else {
    document.querySelector('header').classList.remove('backgroundWhite');
  }
}

// Swiper for home page

const swiper = new Swiper(".members__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 768px
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

// TABS

let tabs = document.querySelector('.tabs__header'),
  tabsItem = document.querySelectorAll('.tabs__item'),
  tabsInfo = document.querySelectorAll('.tabs__info');

tabs.addEventListener('click', fTabs);

function fTabs(event) {
  if (event.target.className == "tabs__item") {
    //let dataTab = event.target.getAttribute('data-tab');
    let currentDataTab = event.target.dataset.tab;
    //console.log(currentDataTab);
    for (let i = 0; i < tabsItem.length; i++) {
      tabsItem[i].classList.remove('active');
    }
    event.target.classList.add('active');
    for (let i = 0; i < tabsInfo.length; i++) {
      if (currentDataTab == i) {
        tabsInfo[i].classList.add('active');
      } else {
        tabsInfo[i].classList.remove('active');
      }
    }
  }
}
