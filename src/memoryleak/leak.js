let x = [];

let c = 0;
function add() {
    x = x.concat(new Array(10000).fill('cats'));
    if (c < 1000) {
        c++;
        setTimeout(add, 5);
    }

}

add();
