// Morning Routine

const morningSliderBox = document.getElementById("morning_slider_box");
const morningSlides = document.querySelectorAll(".morning_slider_box__slide");
const morningPrevButton = document.getElementById("morning_prev_button");
const morningNextButton = document.getElementById("morning_next_button");

let morningCurrentIndex = localStorage.getItem('morningCurrentIndex') || 0;
morningSliderBox.scrollLeft = morningSlides[morningCurrentIndex].offsetLeft;
document.getElementById("morning_current").innerHTML = parseInt(morningCurrentIndex) + 1;

const morningAmount = morningSliderBox.children.length;
document.getElementById("morning_amount").innerHTML = morningAmount;

const morningSliderPrevButton = document.getElementById("morning_prev_button");
const morningSliderNextButton = document.getElementById("morning_next_button");

morningPrevButton.addEventListener('click', () => {
  if (morningCurrentIndex > 0) {
    morningCurrentIndex--;
    morningSliderBox.scrollLeft = morningSlides[morningCurrentIndex].offsetLeft;
    setTimeout(() => {
      document.getElementById("morning_current").innerHTML = parseInt(morningCurrentIndex) + 1;
    }, 500); // Wait 500 milliseconds for the animation to finish
  }

  if (morningCurrentIndex == 0) {
    morningSliderPrevButton.style.visibility = 'hidden';
    morningSliderPrevButton.style.opacity = '0';
  } else {
    morningSliderPrevButton.style.visibility = 'visible';
    morningSliderPrevButton.style.opacity = '1';
  }

  if (morningCurrentIndex == morningSlides.length - 1) {
    morningSliderNextButton.style.visibility = 'hidden';
    morningSliderNextButton.style.opacity = '0';
  } else {
    morningSliderNextButton.style.visibility = 'visible';
    morningSliderNextButton.style.opacity = '1';
  }
});

morningNextButton.addEventListener('click', () => {
  if (morningCurrentIndex < morningSlides.length - 1) {
    morningCurrentIndex++;
    morningSliderBox.scrollLeft = morningSlides[morningCurrentIndex].offsetLeft;
    setTimeout(() => {
      document.getElementById("morning_current").innerHTML = parseInt(morningCurrentIndex) + 1;
    }, 500); // Wait 500 milliseconds for the animation to finish
  }

  if (morningCurrentIndex == 0) {
    morningSliderPrevButton.style.visibility = 'hidden';
    morningSliderPrevButton.style.opacity = '0';
  } else {
    morningSliderPrevButton.style.visibility = 'visible';
    morningSliderPrevButton.style.opacity = '1';
  }

  if (morningCurrentIndex == morningSlides.length - 1) {
    morningSliderNextButton.style.visibility = 'hidden';
    morningSliderNextButton.style.opacity = '0';
  } else {
    morningSliderNextButton.style.visibility = 'visible';
    morningSliderNextButton.style.opacity = '1';
  }
});

morningSliderBox.addEventListener('scroll', () => {
  morningCurrentIndex = Math.round(morningSliderBox.scrollLeft / morningSliderBox.offsetWidth);
  document.getElementById("morning_current").innerHTML = parseInt(morningCurrentIndex) + 1;

  if (morningCurrentIndex == 0) {
    morningSliderPrevButton.style.visibility = 'hidden';
    morningSliderPrevButton.style.opacity = '0';
  } else {
    morningSliderPrevButton.style.visibility = 'visible';
    morningSliderPrevButton.style.opacity = '1';
  }

  if (morningCurrentIndex == morningSlides.length - 1) {
    morningSliderNextButton.style.visibility = 'hidden';
    morningSliderNextButton.style.opacity = '0';
  } else {
    morningSliderNextButton.style.visibility = 'visible';
    morningSliderNextButton.style.opacity = '1';
  }

  localStorage.setItem('morningCurrentIndex', morningCurrentIndex);
});

window.addEventListener('resize', function() {
  const slider = document.getElementById('morning_slider_box');
  slider.click();
});







// reset slider counter by holding
window.addEventListener('DOMContentLoaded', () => {
  const morningDivTextbox = document.getElementById("evening_counter_circle__text_box");
  const morningHoldDiv = document.getElementById("evening_counter_circle");
  let holdTimer;

  function startHold() {
    holdTimer = setTimeout(() => {
      localStorage.clear();
      location.reload(); // Refresh the page after clearing localStorage
    }, 3000); // Set the hold duration in milliseconds (adjust as needed)

    morningDivTextbox.classList.add('holding'); // Add the class for the animation
  }

  function endHold() {
    clearTimeout(holdTimer);
    morningDivTextbox.classList.remove('holding'); // Remove the class for the animation
  }

  morningHoldDiv.addEventListener('mousedown', startHold);
  morningHoldDiv.addEventListener('touchstart', startHold);

  morningHoldDiv.addEventListener('mouseup', endHold);
  morningHoldDiv.addEventListener('touchend', endHold);

});



// clear local storage at a specific time of the day
function clearLocalStorageAtTime(hour, minute) {
  setInterval(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    if (currentHour === hour && currentMinute === minute) {
      localStorage.clear();
    }
  }, 60000); // Check every minute
}

// Usage example: Clear localStorage at 8:30 AM
clearLocalStorageAtTime(0, 20);