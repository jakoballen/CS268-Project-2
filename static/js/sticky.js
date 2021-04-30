// When the user scrolls the page, execute addSticky
window.onscroll = function() {addSticky()};

// Get the nav
var nav = document.getElementById("nav");

// Get the offset position of the nav
var sticky = nav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {

    nav.classList.remove("sticky")
  }
}