// when page is ready load fullpage js
$(document).ready(function () {
  $("#fullpage").fullpage({
    navigation: true,
    autoScrolling: true,
    
   
   
  });
});

$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});


// first section with name animate birds
VANTA.BIRDS({
  el: "#section-home",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 1000.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})

// On page load addLinkGitHubMobile and AddLinkEmailMobile inner html will be loaded on contacts section for desktop GitHub and Email
let addLinkDesktopOnLoad = () => {
  var isMobile =
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1;
  // IF desktop just use hover and go to link directly
  if (!isMobile) {
    document.getElementById("addLinkGitHubMobile").innerHTML =
      '<a href="https://github.com/doubtfullink53" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" style="transform: scale(1.2);"></i></a>';

    document.getElementById("AddLinkEmailMobile").innerHTML =
      '<a href="mailto:2q97gb2lr@mozmail.com"><i class="fa-regular fa-envelope " style="transform: scale(1.2);"></i></a>';
  }
};

// if page is mobile clicking once makes makes the image bigger with transform style and adds link .  Clicking another time takes you to the page
// variable to check if the device is mobile or desktop resolution
var isMobile =
  Math.min(window.screen.width, window.screen.height) < 768 ||
  navigator.userAgent.indexOf("Mobi") > -1;

let addLinkGitHubMobile = (isMobile) => {
  if (isMobile) {
    document.getElementById("addLinkGitHubMobile").innerHTML =
      '<a href="https://github.com/doubtfullink53" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" style="transform: scale(1.2);"></i></a>';
  }
};

function addLinkEmailMobile(isMobile) {
  if (isMobile) {
    document.getElementById("AddLinkEmailMobile").innerHTML =
      '<a href="mailto:2q97gb2lr@mozmail.com"><i class="fa-regular fa-envelope " style="transform: scale(1.2);"></i></a>';
  }
}


// light box options portfolio section. When clicked it shows the maximized image and link to project 
lightbox.option({
  resizeDuration: 100,
  wrapAround: true,
  
});
