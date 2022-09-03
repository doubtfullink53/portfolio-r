$(document).ready(function () {
  $("#fullpage").fullpage({
    navigation: true,
    autoScrolling: true,
    scrollHorizontally: true,
  });
});

// functions to change
function addLinkDesktop() {
  var isMobile =
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1;

  if (!isMobile) {
    document.getElementById("addLinkGitHubMobile").innerHTML =
      '<a href="https://github.com/doubtfullink53" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" style="transform: scale(1.2);"></i></a>';

    document.getElementById("AddLinkEmailMobile").innerHTML =
      '<a href="mailto:2q97gb2lr@mozmail.com"><i class="fa-regular fa-envelope " style="transform: scale(1.2);"></i></a>';
  }
}

function addLinkGitHubMobile() {
  var isMobile =
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1;

  if (isMobile) {
    document.getElementById("addLinkGitHubMobile").innerHTML =
      '<a href="https://github.com/doubtfullink53" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" style="transform: scale(1.5);"></i></a>';
  }
}

function addLinkEmailMobile() {
  var isMobile =
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1;
  if (isMobile) {
    document.getElementById("AddLinkEmailMobile").innerHTML =
      '<a href="mailto:2q97gb2lr@mozmail.com"><i class="fa-regular fa-envelope " style="transform: scale(1.3);"></i></a>';
  }
}

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  maxWidth: 700,
});
