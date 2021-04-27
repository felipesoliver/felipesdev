export default function burgerMenuInit() {

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