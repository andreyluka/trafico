;(function () {
   const reviewsBtns = document.querySelector('.reviews__btns'),
      reviewsBtnsNext = reviewsBtns.querySelector('.reviews__btn-next'),
      reviewsBtnsPrev = reviewsBtns.querySelector('.reviews__btn-prev'),
      sliderContainer = document.querySelector('.app-slider__container'),
      sliderList = document.querySelector('.app-slider__list'),
      sliderItems = document.querySelectorAll('.app-slider__item');

   let sliderItemWidth = parseFloat(window.getComputedStyle(sliderList).gridAutoColumns),
      ItemGap = parseFloat(window.getComputedStyle(sliderList).columnGap),
      lastIndex = Math.ceil(sliderItems.length) - 1;

   let units = sliderItemWidth !== 100 ? 'px' : '%',
      currentIndex = 0,
      step = 0,
      xDown = null,
      yDown = null;

   sliderContainer.addEventListener('touchstart', handleTouchStart, false);
   sliderContainer.addEventListener('touchmove', handleTouchMove, false);
   reviewsBtns.addEventListener('click', handleClick, false);

   function handleTouchStart(e) {
      xDown = e.touches[0].clientX;
      yDown = e.touches[0].clientY;
   };

   function handleTouchMove(e) {
      if (!xDown || !yDown) return;

      let xUp = e.touches[0].clientX;
      let yUp = e.touches[0].clientY;

      let xDiff = xDown - xUp;
      let yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
         if (xDiff > 0 && currentIndex < lastIndex) currentIndex++;
         if (xDiff < 0 && currentIndex > 0) currentIndex--;
      }

      moveSlide();

      xDown = null;
      yDown = null;
   };

   function handleClick(e) {
      if (e.target === reviewsBtnsNext && currentIndex < lastIndex) currentIndex++;
      if (e.target === reviewsBtnsPrev && currentIndex > 0) currentIndex--;

      moveSlide();
   };

   function moveSlide() {
      if (currentIndex <= 0) {
         reviewsBtnsPrev.classList.add('reviews__btn--disabled');
      } else {
         reviewsBtnsPrev.classList.remove('reviews__btn--disabled');
      }
      if (currentIndex >= lastIndex) {
         reviewsBtnsNext.classList.add('reviews__btn--disabled');
      } else {
         reviewsBtnsNext.classList.remove('reviews__btn--disabled');
      }

      step = currentIndex * (sliderItemWidth + ItemGap);
      sliderList.style.transform = `translateX(-${step}${units})`;
   };
})()