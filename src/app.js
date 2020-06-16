import {showCats} from "./cats/index";
import {sliders} from "./sliding";

const nastySurprise = () => import('./memoryleak/leak');

const app = document.getElementById('app');
app.innerHTML = '';

showCats(app);
sliders(app);

const btn = document.createElement('button');
btn.innerText = 'Add nastiness';
btn.onclick = nastySurprise;
app.appendChild(btn);
