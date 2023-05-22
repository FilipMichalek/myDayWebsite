// Morning Routine

const morningSliderBox = document.getElementById("morning_slider_box");
const morningSlides = document.querySelectorAll('.morning_slider_box__slide');
const morningPrevButton = document.getElementById("morning_prev_button");
const morningNextButton = document.getElementById("morning_next_button");


morningIndexDisplay = document.getElementById("morning_current");
let morningCurrentIndex = 0;
morningIndexDisplay.innerHTML = morningCurrentIndex + 1;

const morningAmount = morningSliderBox.children.length;

document.getElementById("morning_amount").innerHTML = morningAmount;

morningPrevButton.addEventListener('click', () => {
if (morningCurrentIndex > 0) {
    morningCurrentIndex--;
    morningSliderBox.scrollLeft = morningSlides[morningCurrentIndex].offsetLeft;
    setTimeout(() => {
        morningIndexDisplay.innerHTML = morningCurrentIndex + 1;
      }, 500); // Wait 500 milliseconds for the animation to finish

}
});

morningNextButton.addEventListener('click', () => {
if (morningCurrentIndex < morningSlides.length - 1) {
    morningCurrentIndex++;
    morningSliderBox.scrollLeft = morningSlides[morningCurrentIndex].offsetLeft;
    setTimeout(() => {
        morningIndexDisplay.innerHTML = morningCurrentIndex + 1;
      }, 500); // Wait 500 milliseconds for the animation to finish
    
}
});

morningSliderBox.addEventListener('scroll', () => {
    morningCurrentIndex = Math.round(morningSliderBox.scrollLeft / morningSliderBox.offsetWidth);
    morningIndexDisplay.innerHTML = morningCurrentIndex + 1;
  });









