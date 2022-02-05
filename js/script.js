// swiper
var swiper = new Swiper(".testimonials-slider", {
   pagination: {
      el: ".swiper-pagination",
      clickable: true
   },
});

// menu burger
const headerBurger = document.querySelector('.header__burger');
if (headerBurger) {
   const headerMenu = document.querySelector('.header__menu');
   headerBurger.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      headerBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   })
}

// nav + smooth scroll
const menuHeader = document.querySelectorAll('.headerItem[data-goto]');
if (menuHeader.length > 0) {
   menuHeader.forEach(headerItem => {
      headerItem.addEventListener("click", onMenuHeaderClick);
   });
   function onMenuHeaderClick(e) {
      const headerItem = e.target;
      if (headerItem.dataset.goto && document.querySelector(headerItem.dataset.goto)) {
         const gotoBlock = document.querySelector(headerItem.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYoffset - document.querySelector('header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault(); //отключить работу ссылки, чтобы не переходила в href
      }
   }
}