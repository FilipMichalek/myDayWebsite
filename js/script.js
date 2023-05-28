function goBack() {
  window.history.back(); 
}

window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    if (window.pageYOffset > 0) {
      header.classList.add("shadow");
    } else {
      header.classList.remove("shadow");
    }
  });