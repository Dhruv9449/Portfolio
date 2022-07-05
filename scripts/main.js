// PRELOADER 
window.onload = (event) => {
    setTimeout(hidePreloader, 2500)
}

function hidePreloader() {
    document.getElementById("preloader").style.display = 'none';
    document.body.style = 'overflow-y: auto';
}

// THEME CHANGER
const themechangebutton = document.getElementById("theme-button");
themechangebutton.addEventListener('click', function() {
    root = document.querySelector(":root");
    if (themechangebutton.classList[1] == "fa-moon") {
        root.classList.toggle("light-theme");
        themechangebutton.classList.toggle("fa-moon");
        themechangebutton.classList.toggle("fa-sun");
    } else if (themechangebutton.classList[1] == "fa-sun") {
        root.classList.toggle("light-theme");
        root.classList.toggle("extradark-theme");
        themechangebutton.classList.toggle("fa-sun");
        themechangebutton.classList.toggle("fa-cloud-moon");
    } else {
        root.classList.toggle("extradark-theme");
        themechangebutton.classList.toggle("fa-cloud-moon");
        themechangebutton.classList.toggle("fa-moon");
    }
    document.getElementById("preloader").style.display = 'flex';
    document.body.style = 'overflow-y: hidden';
    setTimeout(hidePreloader, 2500)
})


//  HIDING NAVBAR 
let scrollpos = 0;

function checkscroll() {
    let newpos = window.scrollY;
    navbar = document.getElementById("nav");
    if (newpos > scrollpos) {
        navbar.style = "height:0; opacity:0;";
    } else {
        navbar.style = "height:auto; opacity:1;";
    }
    scrollpos = newpos;
}
window.addEventListener('scroll', checkscroll);


// WAVING ANIMATION 
profilepic = document.getElementById("profile-pic");
profilepic.addEventListener("mouseover", function() {
    document.getElementById('wave').style = "animation: wave 4s; animation-iteration-count: infinite;";
})
profilepic.addEventListener("mouseleave", function() {
    document.getElementById('wave').style.animation = "none";
})



// PROJECTS SCROLLER 
function scrollproject(button) {
    let projects = document.querySelector("#projects-list")
    if (button.id == "scrollleft") {
        projects.scrollLeft -= 670;
    } else {
        projects.scrollLeft += 670;
    }
}

// PROJECTS HOVER 
function projecthover(element) {
    video = element.querySelector(".project-image");
    video.play();
}

function projectleave(element) {
    video = element.querySelector(".project-image");
    video.play();
    video.pause();
    video.currentTime = 0;
}