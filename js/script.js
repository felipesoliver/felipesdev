// INCREASE N' HIDE MENU ANIMATION

function increaseHideMenuInit() {
    
    const navBar = document.querySelector('.container');
    function increaseNavBar() {
        
        if(window.pageYOffset > 0){
            navBar.classList.add('increased');
        } else {
            navBar.classList.remove('increased');
        };   
    }
    window.addEventListener('scroll', increaseNavBar);
    
    let hideNavBar = window.pageYOffset;
    function hideMenu() {
        
        let showNavBar = window.pageYOffset;
        if(hideNavBar < showNavBar) {
            navBar.classList.add('faded');
        } else {
            navBar.classList.remove('faded');
        };
        hideNavBar = showNavBar;
    }
    window.addEventListener('scroll', hideMenu);
}
increaseHideMenuInit();

// BACK TO TOP BUTTON

function backTopBtnInit() {
    
    const backTopBtn = document.querySelector('.topBtn');
    const mobileWidth = 760;
    const doc = document.documentElement;
    function hideBackTopBtn() {
        
        const scroller = Math.round(window.pageYOffset);
        const fadePoint = document.querySelector('.portfolio').getBoundingClientRect().top;
        if(scroller >= fadePoint && window.innerWidth >= mobileWidth) {
            backTopBtn.classList.add('activated');
        } else {
            backTopBtn.classList.remove('activated');
        }
        
        const scrollTillFooter = 2730;
        if(scroller >= scrollTillFooter && window.innerWidth >= mobileWidth) {
            backTopBtn.classList.add('joined');
        } else {
            backTopBtn.classList.remove('joined');
        }
        
        const totalScroll = Math.round(doc.scrollHeight - doc.clientHeight);
        if(scroller === totalScroll && window.innerWidth <= mobileWidth) {
            backTopBtn.classList.add('scrolled');
        } else {
            backTopBtn.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', hideBackTopBtn);

    function getBackTop() {
        window.scrollTo(0, 0);
    }
    backTopBtn.addEventListener('click', getBackTop);
}
backTopBtnInit();

// SCROLL ANIMATION

function AOSInit() {
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
        }
    }
    
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
        });
    }
    animeScroll();
    
    if(target.length) {
        window.addEventListener('scroll', debounce(function() {
            animeScroll();
        },01));
    }
}
AOSInit();

// BURGER MENU ANIMATION

function burgerMenuInit() {

    const menuBtn = document.querySelector('.menu-btn');
    const pageList = document.querySelector('.pageList');
    let menuOpen = false;
    const internalLinks = document.querySelectorAll('[href^="#"]');
    internalLinks.forEach((i) => {
        i.addEventListener('click', () => {
            menuBtn.classList.remove('open');
            pageList.classList.remove('active');
        });
    });

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            pageList.classList.add('active');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            pageList.classList.remove('active');
            menuOpen = false;
        }
    });
}
burgerMenuInit();

// TYPEWRITER

function typeWriterInit() {
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
typeWriterInit();