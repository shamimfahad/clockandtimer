const clock = document.querySelector('.clock');
const showDate = document.querySelector('.showDate');
const txtTimer = document.querySelector('.txt-timer');
const showTimer = document.querySelector('.timer-clock');

const tick = () => {
    
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;
    clock.innerHTML = html;


    const today = dateFns.format(now,'Do MMMM YYYY');
    showDate.innerHTML = `
        <span>${today}</span>
    `;
};

setInterval(tick, 1000);

const after = new Date('April 06 2020 00:00:00');
txtTimer.innerHTML += dateFns.format(after, 'DD/MM/YYYY')

const remaining = t => {
    const now = new Date();

    const diff = t.getTime() - now.getTime();

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const html = `
        <span>${days}</span> : 
        <span>${hours}</span> : 
        <span>${mins}</span> : 
        <span>${seconds}</span>
    `;
    showTimer.innerHTML = html;
};

const timer = setInterval(() => remaining(after),1000);
