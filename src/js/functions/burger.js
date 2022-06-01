(function () {
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const btns = document.querySelector('.header__btns');
  const body = document.querySelector('body');


  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    btns?.classList.toggle('active');
    body?.classList.toggle('active');
  });
})();



