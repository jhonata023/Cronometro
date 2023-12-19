const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const milesimos = document.querySelector('.milesimos');
let sec = 0;
let min = 0;
let mil = 0;

const cronometro = setInterval(() => {
    mil += 1
    milesimos.innerText = mil;

    if (mil == 100) {
        mil = 0;
        sec += 1;
        segundos.innerText = sec;
        milesimos.innerText = 0;
    }

    if (sec == 60) {
        sec = 0;
        min += 1;
        minutos.innerText = min;
        segundos.innerText = 0;
    }
}, 10)
