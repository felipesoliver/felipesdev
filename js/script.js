/* SHOW / HIDE MENU ANIMATION 

let fadeNavBar = window.pageYOffset;

window.onscroll = function() {
    let showNavBar = window.pageYOffset;
    if(fadeNavBar > showNavBar){
        document.querySelector(".container").style.opacity = "1";
        document.querySelector(".container").style.transition = "all 0.6s ease-in-out";
    }else{
        document.querySelector(".container").style.opacity = "0";
    }
    fadeNavBar = showNavBar;
}*/

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
};

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

let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuBtn = true;
    } else {
        menuBtn.classList.remove('open');
        menuBtn = false;
    }
});