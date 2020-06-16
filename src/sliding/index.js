const body = document.body.getBoundingClientRect();
const maxHeight = Math.floor(body.height - 60);
const maxWidth = Math.floor(body.width - 80)
export function sliders(app) {
    const banks = [];
    const btn = document.createElement('button');
    btn.innerText = 'Add 100';
    btn.onclick = function add100() {
        for (let i = 0; i < 100; i++) {
            const bank = document.createElement('img');
            bank.style.zIndex = '-1';
            bank.src = 'https://www.thesprucepets.com/thmb/mTXXYS3dw-IQrzOxUZf029P8C78=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ginger-kitten-868495272-5c5b3cafc9e77c0001d31a4f.jpg'
            const marginLeft = Math.floor(Math.random() * maxWidth);
            const marginBottom = Math.floor(Math.random() * maxHeight);
            bank.style.left = `${marginLeft}px`;
            bank.style.top = `${marginBottom}px`;
            bank.style.position = 'absolute';
            bank.style.width = '50px';
            bank.style.height = '50px';
            const goingDown = Math.random() > 0.5;
            bank.classList.add(goingDown ? 'down' : 'up');
            app.appendChild(bank);
            banks.push(bank);
        }
    }
    app.appendChild(btn);

    window.requestAnimationFrame(function () {
        draw(banks);
    })
}

function shouldChangeDirection(bank, goingUp) {
    if(goingUp) {
        return bank.offsetTop < 0;
    } else {
        return (maxHeight - bank.offsetTop) < 0;
    }
}

function draw(banks) {
    for (let i = 0; i < banks.length; i++) {
        const bank = banks[i];
        const goingUp = bank.classList.contains('up');
        const operator = goingUp ? -1 : 1;
        const newPos = bank.offsetTop + (operator * 2);
        bank.style.top = `${newPos}px`;
        if(shouldChangeDirection(bank, goingUp)) {
            const whatToRemove = goingUp ? 'up' : 'down';
            bank.classList.remove(whatToRemove);
            bank.classList.add(goingUp? 'down': 'up');
        }
    }
    window.requestAnimationFrame(function drawCats() {
        draw(banks);
    })
}
