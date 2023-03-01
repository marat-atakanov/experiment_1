const frame = document.querySelector('.frame');
const timeLeft = document.querySelector('.timeLeft');
const array = [];
const span = document.querySelector('.span');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
let spanCount_ = 600;
let spanCount = 0;
let spanCount2 = 0;

const generateNumberX = (min, max) => {
    return Math.random() * (max - min) + min;
}
const generateNumberY = (min, max) => {
    return Math.random() * (max - min) + min;
}
let timer = 5;
const interval = setInterval(() => {
    timer--;
    timeLeft.innerHTML = `${timer}`;
    if (timer === 0) {
        clearInterval(interval);
        start();
        document.title = ':)';

    }
}, 1000);

const start = () => {
    setInterval(() => {
        const xNumber = Math.floor(generateNumberX(0, 30));
        const yNumber = Math.floor(generateNumberY(0, 20));
        const block = document.createElement('DIV');
        const posX = 40 * xNumber;
        const posY = 40 * yNumber;
        if (array.includes(`x${posX}y${posY}`)) {
            const redraw = document.querySelector(".x" + `${posX}` + "y" + `${posY}`);
            if (redraw.style.backgroundColor === 'red') {
                return;
            }
            redraw.style.backgroundColor = 'red';
            spanCount--;
            span1.innerHTML = `${spanCount}=>`;
            spanCount2++;
            span2.innerHTML = `${spanCount2}`;
            if (span2.innerHTML === '600') {
                timeLeft.innerHTML = 'Press this text or CTRL + R';
                timeLeft.style.cursor = 'pointer'
                timeLeft.addEventListener('click', ()=>{
                    document.location.reload();
                })
            }
            return;
        }
        array.push(`x${posX}y${posY}`);
        block.style.position = 'absolute'
        block.style.backgroundColor = 'white';
        block.style.width = '40px'
        block.style.height = '40px'
        block.style.left = `${posX}px`;
        block.style.top = `${posY}px`;
        block.classList.add(`x${posX}y${posY}`);
        frame.append(block);
        spanCount_--;
        span.innerHTML = `${spanCount_}=>`;
        spanCount++;
        span1.innerHTML = `${spanCount}=>`;
    }, 2);
}