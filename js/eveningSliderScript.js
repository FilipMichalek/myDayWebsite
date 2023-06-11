// Evening Routine

const eveningSliderBox = document.getElementById("evening_slider_box");
const eveningSlides = document.querySelectorAll(".evening_slider_box__slide");
const eveningPrevButton = document.getElementById("evening_prev_button");
const eveningNextButton = document.getElementById("evening_next_button");

let eveningCurrentIndex = parseInt(localStorage.getItem('eveningCurrentIndex')) || 0;
eveningSliderBox.scrollLeft = eveningSlides[eveningCurrentIndex].offsetLeft;
document.getElementById("evening_current").innerHTML = (eveningCurrentIndex + 1);

const eveningAmount = eveningSliderBox.children.length;
document.getElementById("evening_amount").innerHTML = eveningAmount;

const eveningSliderPrevButton = document.getElementById("evening_prev_button");
const eveningSliderNextButton = document.getElementById("evening_next_button");

eveningPrevButton.addEventListener('click', () => {
  if (eveningCurrentIndex > 0) {
    eveningCurrentIndex--;
    eveningSliderBox.scrollLeft = eveningSlides[eveningCurrentIndex].offsetLeft;
    setTimeout(() => {
      document.getElementById("evening_current").innerHTML = (eveningCurrentIndex + 1);
    }, 500); // Wait 500 milliseconds for the animation to finish
  }

  if (eveningCurrentIndex == 0) {
    eveningSliderPrevButton.style.visibility = 'hidden';
    eveningSliderPrevButton.style.opacity = '0';
  } else {
    eveningSliderPrevButton.style.visibility = 'visible';
    eveningSliderPrevButton.style.opacity = '1';
  }

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
      document.getElementById("evening_current").innerHTML = (eveningCurrentIndex + 1);
    }, 500); // Wait 500 milliseconds for the animation to finish
  }

  if (eveningCurrentIndex == 0) {
    eveningSliderPrevButton.style.visibility = 'hidden';
    eveningSliderPrevButton.style.opacity = '0';
  } else {
    eveningSliderPrevButton.style.visibility = 'visible';
    eveningSliderPrevButton.style.opacity = '1';
  }

  if (eveningCurrentIndex == eveningSlides.length - 1) {
    eveningSliderNextButton.style.visibility = 'hidden';
    eveningSliderNextButton.style.opacity = '0';
  } else {
    eveningSliderNextButton.style.visibility = 'visible';
    eveningSliderNextButton.style.opacity = '1';
  }
});

eveningSliderBox.addEventListener('scroll', () => {
  eveningCurrentIndex = Math.round(eveningSliderBox.scrollLeft / eveningSliderBox.offsetWidth);
  document.getElementById("evening_current").innerHTML = (eveningCurrentIndex + 1);

  if (eveningCurrentIndex == 0) {
    eveningSliderPrevButton.style.visibility = 'hidden';
    eveningSliderPrevButton.style.opacity = '0';
  } else {
    eveningSliderPrevButton.style.visibility = 'visible';
    eveningSliderPrevButton.style.opacity = '1';
  }

  if (eveningCurrentIndex == eveningSlides.length - 1) {
    eveningSliderNextButton.style.visibility = 'hidden';
    eveningSliderNextButton.style.opacity = '0';
  } else {
    eveningSliderNextButton.style.visibility = 'visible';
    eveningSliderNextButton.style.opacity = '1';
  }

  localStorage.setItem('eveningCurrentIndex', eveningCurrentIndex.toString());
});

window.addEventListener('resize', function() {
  const slider = document.getElementById('evening_slider_box');
  slider.click();
});


// reset slider counter by holding
window.addEventListener('DOMContentLoaded', () => {
  const eveningDivTextbox = document.getElementById("evening_counter_circle__text_box");
  const eveningHoldDiv = document.getElementById("evening_counter_circle");
  let holdTimer;

  function startHold() {
    holdTimer = setTimeout(() => {
      localStorage.clear();
      location.reload(); // Refresh the page after clearing localStorage
    }, 3000); // Set the hold duration in milliseconds (adjust as needed)

    eveningDivTextbox.classList.add('holding'); // Add the class for the animation
  }

  function endHold() {
    clearTimeout(holdTimer);
    eveningDivTextbox.classList.remove('holding'); // Remove the class for the animation
  }

  eveningHoldDiv.addEventListener('mousedown', startHold);
  eveningHoldDiv.addEventListener('touchstart', startHold);

  eveningHoldDiv.addEventListener('mouseup', endHold);
  eveningHoldDiv.addEventListener('touchend', endHold);

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
clearLocalStorageAtTime(6, 00);
