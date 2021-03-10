export default function increaseHideMenuInit() {
    
    const navBar = document.querySelector('.container');
    function increaseNavBar() {
        
        if(window.pageYOffset > 100){
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