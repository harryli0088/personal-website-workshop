// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  showHideScrollButtom();
};

function showHideScrollButtom() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-top-button").style.display = "block";
  }
  else {
    document.getElementById("scroll-top-button").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html,body').animate( {scrollTop: 0}, 'slow' );
}

$(document).ready(function() {
  $("#scroll-top-button").click(topFunction); //add a click listener to the scroll button
})
