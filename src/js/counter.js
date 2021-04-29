export default function counterInit() {

    function animateNumbers() {
    
        const numbers = document.querySelectorAll('[data-skill-n]');
        numbers.forEach((e) => {
            
            let countStart = 0;
            const totalNumber = +e.innerText;
            const counter = setInterval(()=> {
                e.innerText = `${countStart}%` ;
                countStart++;
                if(countStart > totalNumber) {
                    clearInterval(counter);
                }
            },50); 
        });

        const progressBar = document.querySelectorAll('[data-progress-bar]');
        progressBar.forEach((e)=> {
            e.classList.add('active');
        });
    }
    
    function handleMutation(mutation) {
        if(mutation[0].target.classList.contains('animate')) {
            observer.disconnect();
            animateNumbers();
        }
    }
    
    const observerTarget = document.querySelector('.skillCard');
    const observer = new MutationObserver(handleMutation);
    observer.observe(observerTarget, {attributes: true});
}