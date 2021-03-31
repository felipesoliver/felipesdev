export default function welcomePageInit() {
    const welcomePage = document.querySelector('[data-welcome="window"]');
    window.onload = function(){
        setTimeout(() => {
            welcomePage.classList.add('removed');
        },5000);
    }
}
