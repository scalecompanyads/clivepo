(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  var header = document.querySelector(".header");
  if (header) {
    var THRESH = 20;
    function syncHeader() {
      var s = window.scrollY || document.documentElement.scrollTop;
      header.classList.toggle("header--scrolled", s > THRESH);
    }
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }
})();
