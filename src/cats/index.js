import {fetchCats} from "./fetchCats";

export function showCats(app) {
    const btn = document.createElement('button');
    app.appendChild(btn);
    btn.innerText = 'Show Cats!!!';
    btn.onclick = getCats;
    const catsUl = document.createElement('ul');

    function getCats() {
        fetchCats().then(data => {
            data.data.forEach(cat => {
                const li = document.createElement('li');
                li.innerText = cat.name;
                catsUl.appendChild(li);
            });
            app.appendChild(catsUl);
            btn.innerText = 'Clear Cats';
            btn.onclick = clearCats;
        });
    }
    function clearCats() {
        btn.onclick = getCats;
        btn.innerText = 'Show Cats!!!';
        catsUl.innerHTML = '';
        app.removeChild(catsUl);
    }
}
