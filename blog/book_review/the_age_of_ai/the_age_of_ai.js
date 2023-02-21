var contentBar = document.getElementById("content-bar");
var stopScrollingAt = document.getElementById("conclusion-box").offsetTop - window.innerHeight;

window.onscroll = function() {
  if (window.pageYOffset >= stopScrollingAt) {
    contentBar.style.position = "absolute";
    contentBar.style.bottom = "0";
  } else {
    contentBar.style.position = "fixed";
    contentBar.style.bottom = "auto";
  }
};