/* INCREASE MENU ANIMATION */

function increaseMenu() {
    const navBar = document.querySelector('.container');
    function increaseNavBar() {
        if(window.pageYOffset > 0){
            navBar.classList.add('activated');
        } else {
            navBar.classList.remove('activated');
        }
    }
    window.addEventListener('scroll', increaseNavBar);
}
increaseMenu();

/* SCROLL ANIMATION */

function AOS() {
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
                element.classList.add(animationClass);
            }else{
                element.classList.remove(animationClass);
            }
        })
    }
    
    animeScroll();
    
    if(target.length) {
        window.addEventListener('scroll', debounce(function() {
            animeScroll();
        },01));
    }
}
AOS();

/* BURGER MENU ANIMATION */

function burgerMenu() {
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
}
burgerMenu();

/* TYPEWRITER */

function typeWriter() {
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
}
typeWriter();