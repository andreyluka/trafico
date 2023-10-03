;(function () {
   const questions = document.querySelector('.questions');
   const questionsItems = Array.from(questions.children);

   displayAnswer();

   function displayAnswer() {
      let currentActive = null;
      
      questions.addEventListener('click', e => {
         currentActive = e.target.closest('.questions__item');
         
         questionsItems.forEach(item => {
            if (item.classList.contains('questions__item--active') && item !==currentActive) {
               item.classList.remove('questions__item--active');
            }
         });
         
         currentActive.classList.toggle('questions__item--active');
      });
   }
})()