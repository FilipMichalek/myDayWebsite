// Evening Routine

const eveningSliderBox = document.getElementById("evening_slider_box");
const eveningSlides = document.querySelectorAll(".evening_slider_box__slide");
const eveningPrevButton = document.getElementById("evening_prev_button");
const eveningNextButton = document.getElementById("evening_next_button");


eveningIndexDisplay = document.getElementById("evening_current");
let eveningCurrentIndex = 0;
eveningIndexDisplay.innerHTML = eveningCurrentIndex + 1;

const eveningAmount = eveningSliderBox.children.length;

document.getElementById("evening_amount").innerHTML = eveningAmount;

eveningPrevButton.addEventListener('click', () => {
if (eveningCurrentIndex > 0) {
    eveningCurrentIndex--;
    eveningSliderBox.scrollLeft = eveningSlides[eveningCurrentIndex].offsetLeft;
    setTimeout(() => {
      eveningIndexDisplay.innerHTML = eveningCurrentIndex + 1;
      }, 500); // Wait 500 milliseconds for the animation to finish

}
});

eveningNextButton.addEventListener('click', () => {
if (eveningCurrentIndex < eveningSlides.length - 1) {
    eveningCurrentIndex++;
    eveningSliderBox.scrollLeft = eveningSlides[eveningCurrentIndex].offsetLeft;
    setTimeout(() => {
      eveningIndexDisplay.innerHTML = eveningCurrentIndex + 1;
      }, 500); // Wait 500 milliseconds for the animation to finish
    
}
});

eveningSliderBox.addEventListener('scroll', () => {
    eveningCurrentIndex = Math.round(eveningSliderBox.scrollLeft / eveningSliderBox.offsetWidth);
    eveningIndexDisplay.innerHTML = eveningCurrentIndex + 1;
  });









