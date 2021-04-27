export default function backTopBtnInit() {
    
    const backTopBtn = document.querySelector('.topBtn');
    const mobileWidth = 760;
    const doc = document.documentElement;
    function hideBackTopBtn() {
        
        const scroller = Math.round(window.pageYOffset);
        if(scroller > 0 && window.innerWidth >= mobileWidth) {
            backTopBtn.classList.add('activated');
        } else {
            backTopBtn.classList.remove('activated');
        }
        
        if(scroller >= 2975 && window.innerWidth >= mobileWidth) {
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