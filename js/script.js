// script.js
window.addEventListener("scroll", function() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var video = document.getElementById("background-video");
    var logo = document.getElementById("logo");
    var menu = document.getElementById("menu");
    var gear = document.getElementById("gear");
    var gear2 = document.getElementById("gear2");
    var gear3 = document.getElementById("gear3");

    video.style.top = -scrollPos + "px";

    if (scrollPos < 1000) {
        logo.style.transform = "translate(-50%, -50%) scale(" + (1 - scrollPos / 2000) + ")";
    } else {
        logo.style.transform = "translate(-50%, -50%) scale(0.5)";
    }
    video.style.opacity = 1 - (scrollPos / 1000);
    gear.style.transform = "translate(-50%, -50%) rotate(" + (scrollPos / 10) + "deg)";
    gear2.style.transform = "translate(-50%, -50%) rotate(" + (scrollPos / -10) + "deg)";
    gear3.style.transform = "translate(-50%, -50%) rotate(" + (scrollPos / 10) + "deg)";

    if (scrollPos > 1000) {
        gear.style.opacity = 1;
        gear2.style.opacity = 1;
        gear3.style.opacity = 1;
        menu.style.opacity = 1;
    } else {
        gear.style.opacity = 1 * (scrollPos / 1000);
        gear2.style.opacity = 1 * (scrollPos / 1000);
        gear3.style.opacity = 1 * (scrollPos / 1000);
        menu.style.opacity = 1 * (scrollPos / 1000);
    }
});
