var autoplayInterval = 7000;
var autoplayTimer = null;
var autoplay = true;
var newIndex = 1;

if (autoplay) {
     autoplayTimer = setInterval(function() {
     newIndex++;
     navigateSlider();
   }, autoplayInterval);
}

function resetSlider() { 
  clearInterval(autoplayTimer);
}

function navigateSlider() { 
  const slide1 = document.getElementById('slide1');
  const slide2 = document.getElementById('slide2');
  const slide3 = document.getElementById('slide3');
  const slide4 = document.getElementById('slide4');
  if (newIndex == 1) {
    slide1.checked = true;
  } else if (newIndex == 2) {
    slide2.checked = true;
  } else if (newIndex == 3) {
    slide3.checked = true;
  } else if (newIndex == 4) {
    slide4.checked = true;
    newIndex = 0;
  }
}