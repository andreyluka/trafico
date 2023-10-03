;(function () {
   const hamburgerMenu = document.querySelector('.hamburger-menu');
   const menuFullscreen = document.querySelector('.menu-fullscreen');

   hamburgerMenu.addEventListener('click', () => {
      menuFullscreen.classList.add('menu-fullscreen--active');
   });

   menuFullscreen.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
         menuFullscreen.classList.remove('menu-fullscreen--active');
      }
   });
})()