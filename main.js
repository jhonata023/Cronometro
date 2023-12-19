const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const milesimos = document.querySelector('.milesimos');

const btnIniciar = document.querySelector('#iniciar');
const btnPausar = document.querySelector('#pausar');
const btnContinuar = document.querySelector('#continuar');
const btnRedefinir = document.querySelector('#redefinir');

let intervalo
let pause = false;
let sec = 0;
let min = 0;
let mil = 0;


btnIniciar.addEventListener('click', () => {
    intervalo = setInterval(() => {
        if (!pause) {
            mil += 1
            milesimos.innerText = mil;
    
            if (mil == 100) {
                mil = 0;
                sec += 1;
                if (sec < 10) {
                    segundos.innerText = `0${String(sec)}`;
                } else {
                    segundos.innerText = sec;
                }
                milesimos.innerText = 0;
            }

            if (sec == 60) {
                sec = 0;
                min += 1;
                if (min < 10) {
                    minutos.innerText = `0${String(min)}`;
                } else {
                    minutos.innerText = min;
                }
                segundos.innerText = 0;
            }
        }
    }, 10)
    

    btnPausar.classList.add('btn');
    btnPausar.classList.remove('none');
    btnRedefinir.classList.add('btn');
    btnRedefinir.classList.remove('none');
    btnIniciar.classList.add('none');
    btnIniciar.classList.remove('btn');
})

btnPausar.addEventListener('click', () => {
    btnPausar.classList.add('none');
    btnPausar.classList.remove('btn');
    btnContinuar.classList.add('btn');
    btnContinuar.classList.remove('none');

    pause = true;
})

btnContinuar.addEventListener('click', () => {
    btnContinuar.classList.add('none');
    btnContinuar.classList.remove('btn');
    btnPausar.classList.add('btn');
    btnPausar.classList.remove('none');

    pause = false;
})

btnRedefinir.addEventListener('click', () => {
    // location.reload();
    clearInterval(intervalo)

    pause = false;
    sec = 0;
    min = 0;
    mil = 0;

    milesimos.innerText = '0'+`${mil}`;
    segundos.innerText = '0'+`${sec}`;
    minutos.innerText = '0'+`${min}`;

    btnPausar.classList.add('none');
    btnPausar.classList.remove('btn');
    btnRedefinir.classList.add('none');
    btnRedefinir.classList.remove('btn');
    btnContinuar.classList.add('none');
    btnContinuar.classList.remove('btn');
    btnIniciar.classList.add('btn');
    btnIniciar.classList.remove('none');
})
