export default function welcomePageInit() {
    
    const welcomePage = document.querySelector('[data-welcome="window"]');

    window.onload = function(){
        setTimeout(() => {
            document.body.style.overflowY= "visible";            
        },4990);
        setTimeout(() => {
            welcomePage.classList.add('removed');
        },5000);
    }
}