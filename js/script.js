/* PARALLAX / RELLAX */

var rellax = new Rellax('.rellax');

/* SHOW / HIDE MENU ANIMATION */

let fadeNavBar = window.pageYOffset;

window.onscroll = function() {
    let showNavBar = window.pageYOffset;
    if(fadeNavBar > showNavBar){
        document.querySelector(".container").style.opacity = "1";
        document.querySelector(".container").style.transition = "all 0.3s ease-in-out";
    }else{
        document.querySelector(".container").style.opacity = "0";
    }
    fadeNavBar = showNavBar;
}

/* SCROLL ANIMATION */

const debounce = function(func, wait, immediate) {
	let timeout;
	return function(...args) {
		const context = this;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const target = document.querySelectorAll('[data-animation]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
    })
}

animeScroll();

if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    },01));
}

/* BURGER MENU ANIMATION */

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

/* TYPEWRITER */

new TypeIt('.typewriter', {
    speed: 150,
    startDelay: 1000,
    cursor: false,
    lifeLike: true,
    deleteSpeed: 100,
    loop: true,	
})
.type("< Front End Developer >")
.pause(1000)
.delete(null)
.pause(1000)
.type("< UX / UI Designer >")
.pause(1000)
.delete(null)
.pause(1000)
.go();