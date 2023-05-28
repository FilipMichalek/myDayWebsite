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

const eveningSliderPrevButton = document.getElementById("evening_prev_button")
const eveningSliderNextButton = document.getElementById("evening_next_button")

eveningPrevButton.addEventListener('click', () => {
if (eveningCurrentIndex > 0) {
    eveningCurrentIndex--;
    eveningSliderBox.scrollLeft = eveningSlides[eveningCurrentIndex].offsetLeft;
    setTimeout(() => {
      eveningIndexDisplay.innerHTML = eveningCurrentIndex + 1;
      }, 500); // Wait 500 milliseconds for the animation to finish
}
// prev_button
if (eveningCurrentIndex == 0) {
  eveningSliderPrevButton.style.visibility = 'hidden';
  eveningSliderPrevButton.style.opacity = '0';
} else {
  eveningSliderPrevButton.style.visibility = 'visible';
  eveningSliderPrevButton.style.opacity = '1';
}

// next_button
if (eveningCurrentIndex == eveningSlides.length - 1) {
  eveningSliderNextButton.style.visibility = 'hidden';
  eveningSliderNextButton.style.opacity = '0';
} else {
  eveningSliderNextButton.style.visibility = 'visible';
  eveningSliderNextButton.style.opacity = '1';
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
if (eveningCurrentIndex == 0) {
  eveningSliderPrevButton.style.visibility = 'hidden';
  eveningSliderPrevButton.style.opacity = '0';
} else {
  eveningSliderPrevButton.style.visibility = 'visible';
  eveningSliderPrevButton.style.opacity = '1';
}

// next_button
if (eveningCurrentIndex == eveningSlides.length - 1) {
  eveningSliderNextButton.style.visibility = 'hidden';
  eveningSliderNextButton.style.opacity = '0';
} else {
  eveningSliderNextButton.style.visibility = 'visible';
  eveningSliderNextButton.style.opacity = '1';
}
});

// This checks the value of the eveningCurrentIndex, if its 0, previous button is hidden


eveningSliderBox.addEventListener('scroll', () => {
    eveningCurrentIndex = Math.round(eveningSliderBox.scrollLeft / eveningSliderBox.offsetWidth);
    eveningIndexDisplay.innerHTML = eveningCurrentIndex + 1;
    
    if (eveningCurrentIndex == 0) {
      eveningSliderPrevButton.style.visibility = 'hidden';
      eveningSliderPrevButton.style.opacity = '0';
    } else {
      eveningSliderPrevButton.style.visibility = 'visible';
      eveningSliderPrevButton.style.opacity = '1';
    }
    
    // next_button
    if (eveningCurrentIndex == eveningSlides.length - 1) {
      eveningSliderNextButton.style.visibility = 'hidden';
      eveningSliderNextButton.style.opacity = '0';
    } else {
      eveningSliderNextButton.style.visibility = 'visible';
      eveningSliderNextButton.style.opacity = '1';
    }
  });

// Resizing the slider

window.addEventListener('resize', function() {
  const slider = document.getElementById('evening_slider_box');
  slider.click();
});






