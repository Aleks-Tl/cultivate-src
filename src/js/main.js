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

// FILTER CONTENT PAGE INDIVIDUAL PRACTICE PLAN

const filterBox = document.querySelectorAll('.box');
document.querySelector('.nav-filter').addEventListener('click', event => {
  if (event.target.tagName !== 'LI') return false;
  let filterClass = event.target.dataset['f'];
  filterBox.forEach(elem => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide')
    }
  })
})


// Activity class for individual practice plan

const btnContainer = document.querySelector('.nav-list-filter');

let items = btnContainer.querySelectorAll('li');

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    console.log(e.target);
    if (!e.target.classList.contains('active')) {
      items.forEach((elem) => {
        elem.classList.remove('active');
      })
      e.target.classList.add('active');
    } else {
    }
  });
}


